---
id: ops-docker-install
title: Docker Install
description: Learn how to install drand using Docker
slug: /operator/docker/
---
# Docker Install

# **Install drand with Docker**

This page describes how to run a *production* version of `drand` based on `docker-compose`. This is meant as a **production setup**. It notably involves generating TLS certificates for your public-facing server. Check out the [**simple install if you just want a local drand demo →**](/docs/ops-guide/05-Command-line_Tools.md)

## **Prerequisites for this Guide**

a VPS with the following software setup:

1. `docker >= 17.12`
2. `docker-compose >= 1.18`
3. `go >= 1.22`
4. a TLS-capable reverse-proxy talking gRPC, or any other way to get TLS certificates (see section "Setting up TLS")

## **First Steps**

Create a new folder and copy the docker-compose file from `drand/docker/docker-compose.yml` into it. Make sure to replace the image from `ghcr.io/drand/go-drand-local:latest` to `ghcr.io/drand/go-drand:latest`.

You may place this directory where you want, e.g. `~/deploy-example`. Its name is irrelevant too, should you want to change it (just don't call it `~/.drand` which is used for the config files).

At this point, your current working directory should look like this:

```bash
$ pwd
/home/drand/deploy-example
------------------------------------------------------------
$ tree
.
└── docker-compose.yml
```

Next, create a named volume where you're going to store your keypairs and other config data:

```bash
docker volume create drand
```

## **Setting up TLS**

To be secure, drand needs authenticated channels to talk to other drand nodes. This can be currently done in two ways:

Outgoing gRPC communication will be done assuming a TLS server, this can be disabled using the build tag `-tags=conn_insecure` when building drand, or the `go-drand-local` docker image. But incoming connections are expected to have been through a reverse-proxy in front of drand doing TLS termination for it.

Note: If you're just trying to run an insecure demo, run `make demo` in the root folder of this repository instead of following this guide.

This guide will continue focusing on drand; jump to the end of this guide to configure the reverse proxy.

## **Public HTTP API**

The compose file also opens a public http API to be consumed by the clients. This public endpoint is exposed on the 8081 port (specified with `--public-listen`]). If you wish to not expose the public http endpoint, you need to change the docker file to remove references to public port.

## **Generate drand Keys**

Now, let's generate keys for drand:

If you are using docker compose:

```bash
docker compose exec <your_drand_service_name> drand generate-keypair <address:public-port>
```

This generates keys in `~/.drand/keys/`, you can specify another folder using the `--folder` flag.

If you're not using compose:
```bash
docker run -v drand:/data/drand --rm ghcr.io/drand/go-drand-local 'generate-keypair <address:public-port>'
```

Where `<address>` is for instance `drand.yourserver.com:8080` or `yourserver.com:8080`. If you'll be using a reverse-proxy, as you should in production, make sure you enter its public-facing port.

## **Docker-compose Setup**

drand can now be started as follows:

```jsx
docker compose up -d
```

To check what is happening, access the docker-compose logs via

```jsx
docker compose logs
```

## **Distributed Key Generation (DKG)**

If you did the setup above, you have a container running the drand deamon, loaded with your keys. It still needs to run the DKG protocol to bootstrap drand.

Fortunately, with our docker-compose volumes, it's now very easy to add things into the running container.

To do so, let's open a CLI into your running docker.

First find its id on the host:

```jsx
$ docker ps
697e4766f8b2        drand_drand             "drand --verbose 2 s…"   11 minutes ago      Up 9 minutes
```

The id of the container is `697e4766f8b2`. Enter it by running:

```jsx
docker exec -it 697e4766f8b2 /bin/sh
```

Then, you're inside the container; tell drand to run the DKG like so:

If it is an initial DKG:

```bash
drand dkg join --id <beaconID>
```

Otherwise, if it is a resharing where your node is joining, you'll need to get the previous groupfile from existing participants and put it inside your container (you can `curl` or `wget` it from inside the container most likely) and run:

```bash
drand dkg join --id <beaconID> --group /path/to/previous/group.toml
```

**Notice the full path** `/path/to/previous/group.toml` and not `group.toml` nor `./group.toml`.

At this point, once _everybody_ in the `group.toml` has accepted/joined the DKG, the leader can execute the DKG and the randomness generation will start. Well done! Simply let it run, there's nothing else to do.

In general, we refer you to the [drand-cli guide](./05-Command-line_Tools.md) page for up-to-date information about the drand cli.

## **Other Topics**

### **Updating drand**

To update drand, simply pull the latest container

```jsx
docker compose pull
```

Then rebuild and restart it

```jsx
docker compose down && docker compose up -d
```

### **Reset the Docker State (without losing the Keys)**

This part is if you need to reset drand's internal state without loosing the keys.

### **Method 1: using `drand util reset`**

First, try using this method. If that doesn't work, use the method below.

Find drand's container id on the host, and enter it:

```jsx
$ docker ps
697e4766f8b2        drand_drand             "drand --verbose 2 s…"   11 minutes ago      Up 9 minutes

$ docker exec -it 697e4766f8b2 /bin/sh
```

Then simply call:

```jsx
drand util reset
```

Exit the container with `CTRL-C`. Then, on the host, I advise you to restart the container (to make sure the drand deamon has a clean restart and can reload its cleaned config):

```bash
docker compose down
docker compose up -d
```

### **Method 2: performing a Manual Reset**

The method above relies on `drand util reset`, which could theoretically fail. If you want a manual hard-reset, start by killing the container:

```bash
docker compose down
```

Delete what you want to reset in the volume: typically, you absolutely want to **keep** `keys`, **especially** if you shared those keys to create a `group.toml` with other people. For instance if the DKG failed, remove the `dkg.db` file, and the directories `db` and `groups`. Notice that if you added the `group.toml` as suggested, it should still be there (don't delete it unless you want to change the group).

Then, rebuild the image from scratch:

```bash
docker compose up -d
```

Check that things are running with

```bash
docker compose logs -f
```

You're now back to the step "Distributed Key Generation" of this guide.

### **Docker behind Reverse Proxy Setup**

Typically, the TLS part of my VPS is managed by a single reverse proxy, which then proxies multiple services running locally with docker.

There is one subtletly: you need to forward *both* GRPC (used by drand "core") and web traffic (for the web interface). To forward GRPC, you need to have nginx `1.13.10` or above, it's a fairly recent addition.

Then, you need to forward differently traffic to private API port and the HTTP public API port. Here's an example configuration for `nginx`:

```nginx
server {
  server_name drand.example.ch;
  listen 443 ssl http2;

  location / {
    // default --private-listen port specified in the docker compose
    grpc_pass grpc://localhost:1234; // Adjust port if needed
    grpc_set_header X-Real-IP $remote_addr;
  }

  ssl_certificate /etc/letsencrypt/live/.../fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/.../privkey.pem; # managed by Certbot
}
```

You can separate the entries in two in nginx by having two `server` blocks to apply different configurations.

---
