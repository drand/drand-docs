---
id: 4-5-ops-guide-command-line-tools
title: "4.5 Command-line Tools"
description: Installing and operating drand from the command line.
---
# 4.5 Command-line Tools

Drand's main functionality is provided by the `drand` program, which allows you to run a drand server and control its operation. You can also use `drand` as a client to fetch randomness from a drand network.

## **Installing drand**

### **Binary Releases**

The simplest way to get `drand` is to [download a pre-built binary release](https://github.com/drand/drand/releases) for your platform.

You can verify the checksum of a `drand` binary release by checking the `checksums.txt` listed in the GitHub assets for the release, which contains the SHA-256 checksum for each release archive. To check your local download, you can use the `shasum` command:

```jsx
shasum -a 256 <path-to-drand.tar.gz>
```

### **Source Code**

You can compile `drand` from source code by cloning the [drand GitHub repository](https://github.com/drand/drand) and building the project.

This will require a working [Go installation](https://golang.org/doc/install), and your [GOPATH](https://golang.org/doc/code.html#GOPATH) must be set. You'll also need the `make` command available.

With those requirements met, install drand via:

```jsx
git clone https://github.com/drand/drand
cd drand
make install
```

This will install `drand` into `$GOPATH/bin`, which should be on your `$PATH` if you followed the standard Go install instructions.

If you'd prefer not to install `drand` globally, or if you want to put the `drand` binary in a different location, you can run `make build` instead of `make install`. This will create the `drand` binary in the current directory.

## **Usage**

This section gives a basic overview of the main `drand` CLI interface to give an idea of the options available. If you're setting up a drand network deployment, please see the [4.1 DevOps: Deployment](4-1-ops-guide-deployment), which walks through using `drand` to run a live network.

The `drand` command has several subcommands. Among the most important is `drand help`, which will introduce you to the rest of the subcommands:

```jsx
$ drand help

NAME:
   drand - distributed randomness service

USAGE:
   drand [global options] command [command options] [arguments...]

VERSION:
   2.0.1

COMMANDS:
   dkg               Commands for interacting with the DKG
   start             Start the drand daemon.
   stop              Stop the drand daemon.

   share             The old command for running DKGs; this has been removed
   load              Launch a sharing protocol from filesystem
   sync              sync your local randomness chain with other nodes and validate your local beacon chain. To follow a remote node, it requires the use of the 'follow' flag.
   generate-keypair  Generate the longterm keypair (drand.private, drand.public) for this node, and load it on the drand daemon if it is up and running.

   util              Multiple commands of utility functions, such as resetting a state, checking the connection of a peer...
   show              local information retrieval about the node's cryptographic material. Show prints the information about the collective public key, the group details (group.toml),the long-term public key (drand.public), respectively.

   help, h           Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --verbose       If set, verbosity is at the debug level (default: false) [$DRAND_VERBOSE]
   --folder value  Folder to keep all drand cryptographic information, with absolute path. (default: "/Users/1337user/.drand") [$DRAND_FOLDER]
   --help, -h      show help (default: false)
   --version, -v   print the version (default: false)
```

The `help` command can be used for subcommands as well, for example `drand help generate-keypair`. If you prefer, you can also show help with the `--help` flag after the subcommand name, e.g.: `drand generate-keypair --help`.

### **`drand generate-keypair`**

The `generate-keypair` command creates a long-term public/private keypair for a drand network. You must provide the address that your drand node will listen on, including the publicly reachable port number. This may be different from the port specified when starting the daemon, for example if you've set up `drand` to run behind a reverse proxy as described in the [**Deployment Guide**](4-1-ops-guide-deployment). These new keys will be loaded on drand daemon if the daemon is up and running.

```jsx
$ drand help generate-keypair

NAME:
   drand generate-keypair - Generate the longterm keypair (drand.private, drand.public) for this node, and load it on the drand daemon if it is up and running.

USAGE:
   drand generate-keypair [command options] <address> is the address other nodes will be able to contact this node on (specified as 'private-listen' to the daemon)

OPTIONS:
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --folder value   Folder to keep all drand cryptographic information, with absolute path. (default: "/Users/1337user/.drand") [$DRAND_FOLDER]
   --id value       Indicates the id for the randomness generation process which will be started [$DRAND_ID]
   --scheme value   Indicates a set of values drand will use to configure the randomness generation process (default: "pedersen-bls-chained") [$DRAND_SCHEME]
   --help, -h       show help (default: false)
```

The generated key and all other drand state will be stored in `$HOME/.drand` by default, but this can be overridden with the `--folder` flag.

The `--id` flag should be used when generating long-term public/private keypair for networks with beacon id different from default. If you don't provide a value, the default beacon id will be used. For example, a network with beacon id `beacon_name_x`, you must set the flag `--id beacon_name_x`.

If you use a non-standard control port, you will also need to use the `--control` flag when running this command.

### **`drand start`**

The `start` command starts the drand daemon. Note that `drand` does not automatically go into the background when launched, and long-running deployments should be run inside of a `screen` or `tmux` session, or otherwise "daemonized" using the tools available for your operating system.

If this node has already joined a network by performing a Distributed Key Generation phase, it will attempt to catch up with the drand beacon chain by contacting other nodes and will participate in the randomness generation protocol once it has caught up.

If the DKG has not yet been performed, the daemon will wait for an operator to begin the DKG phase using the [`drand dkg init`](4-5-ops-guide-command-line-tools#drand-dkg-init) command.

It contains a lot of flags for metrics, OpenTelemetry configuration, json log formatting, and configuring which database engine to user.

```jsx
$ drand help start

NAME:
   drand start - Start the drand daemon.

USAGE:
   drand start [command options] [arguments...]

OPTIONS:
   --folder value              Folder to keep all drand cryptographic information, with absolute path. (default: "/Users/1337user/.drand") [$DRAND_FOLDER]
   --control value             Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --private-listen value      Set the listening (binding) address of the private API. Useful if you have some kind of proxy. [$DRAND_PRIVATE_LISTEN]
   --public-listen value       Set the listening (binding) address of the public API. Useful if you have some kind of proxy. [$DRAND_PUBLIC_LISTEN]
   --metrics value             Launch a metrics server at the specified (host:)port. [$DRAND_METRICS]
   --traces value              Publish metrics to the specific OpenTelemetry compatible host:port server. E.g. 127.0.0.1:4317 [$DRAND_TRACES]
   --traces-probability value  The probability for a certain trace to end up being collected.Between 0.0 and 1.0 values, that corresponds to 0% and 100%.Be careful as a high probability ratio can produce a lot of data. (default: 0.05) [$DRAND_TRACES_PROBABILITY]
   --push                      Push mode forces the daemon to start making beacon requests to the other node, instead of waiting the other nodes contact it to catch-up on the round (default: false) [$DRAND_PUSH]
   --verbose                   If set, verbosity is at the debug level (default: false) [$DRAND_VERBOSE]
   --from value                Old group.toml path to specify when a new node wishes to participate in a resharing protocol. This flag is optional in case a node is already included in the current DKG. [$DRAND_FROM]
   --skipValidation            skips bls verification of beacon rounds for faster catchup. (default: false) [$DRAND_SKIP_VALIDATION]
   --json                      Set the output as json format (default: false) [$DRAND_JSON]
   --id value                  Indicates the id for the randomness generation process which will be started [$DRAND_ID]
   --db value                  Which database engine to use. Supported values: bolt, postgres, or memdb. (default: "bolt") [$DRAND_DB]
   --pg-dsn value              PostgreSQL DSN configuration.
      Supported options are:
      - sslmode: if the SSL connection is disabled or required. Default disabled. See: https://www.postgresql.org/docs/15/libpq-ssl.html#LIBPQ-SSL-PROTECTION
      - connect_timeout: how many seconds before the connection attempt times out. Default 5 (seconds). See: https://www.postgresql.org/docs/15/libpq-connect.html#LIBPQ-CONNECT-CONNECT-TIMEOUT
      - max-idle: number of maximum idle connections. Default: 2
      - max-open: number of maximum open connections. Default: 0 - unlimited.
       (default: "postgres://drand:drand@127.0.0.1:5432/drand?sslmode=disable&connect_timeout=5") [$DRAND_PG_DSN]
   --memdb-size value  The buffer size for in-memory storage. Must be at least 10. Recommended, 2000 or more (default: 2000) [$DRAND_MEMDB_SIZE]
   --help, -h          show help (default: false)
```

### **Endpoint Configuration**

`drand` exposes up to four endpoints, depending on the flags passed in.

The **private drand API endpoint** is used to communicate with other nodes using gRPC. The private API is always enabled. As drand can now support multiple beacons, it will always need the private address to be set, in order to know where to listen. You can pass the `--private-listen` flag and specify the `host:port` to bind to. Note that the address associated with the keypair must be publicly accessible and mapped to the `--private-listen` address, for example using a reverse proxy.

<aside>
⚠️ **WARNING**: While the private API is primarily intended for inter-node communication, it may be exposed to the internet to allow clients to fetch randomness over gRPC using the [**`drand get`**](https://drand.love/operator/drand-cli/#drand-get) command and/or [**`drand-client`**](https://drand.love/operator/drand-cli/#drand-client). This will not allow access to any secret information, but we generally recommend restricting gRPC access using firewall rules to limit the potential for denial of service attacks.

</aside>

The **control API endpoint** is used by the `drand` command to control a running drand daemon using commands like `drand dkg init`.

The control interface is always enabled and bound to the `localhost` interface. The default port is `8888`, but this can be overridden with the `--control` flag. If you use a non-standard control port, you will also need to use the `--control` flag when running other commands such as `drand share`.

<aside>
⛔ **DANGER**: The control API exposes private information, therefore, **the control port must not be exposed to the internet** and should be used only from the local machine where the `drand` daemon is running.

</aside>

The remaining endpoints are optional, and will only be enabled if the flags are given.

The **public HTTP endpoint** provides an API that clients can fetch randomness from. To enable it, pass in the `--public-listen` flag and specify the `host:port` that you want to listen on. This endpoint exposes no sensitive information and is safe to expose to the internet. Alternatively, you may keep this endpoint behind a firewall and expose randomness to the public with the help of a relay server such as [**`drand-relay-http`**](https://drand.love/operator/drand-cli/#drand-relay-http).

The **metrics endpoint** provides an API for observing runtime metrics about the drand node. It can be enabled with the `--metrics <metrics-port>` flag. See [**drand Metrics**](https://drand.love/operator/metrics/) for more details on accessing the metrics.

<aside>
⛔ **DANGER**: The metrics API may expose sensitive information about the running `drand` daemon, and should not be exposed to the public internet.

</aside>

Finally drand can produce traces compatible with OpenTelemetry specification. To turn on this feature, set the `DRAND_TRACES` environment variable to the desired destination, e.g.

```
export DRAND_TRACES=127.0.0.1:4317
export DRAND_TRACES_PROBABILITY=1 # This will sample all traces to the destination server
```

After that, in the same terminal, use any of the drand features, such as `make test-unit-memdb`, to start producing traces.

To explore the trace details, launch a new browser tab/window at the [Grafana instance](http://127.0.0.1:3000/explore?orgId=1), which will allow you to explore in detail the inner workings of Drand.

For more details on how to use Grafana, you can [read the manual here](https://grafana.com/docs/grafana/v9.4/explore/trace-integration/).

**TLS configuration**

TLS certificate configuration is no longer supported by drand as of v2. Instead, you should run drand behind a reverse proxy and perform TLS termination there, as described in the [4.1 DevOps: Deployment](4-1-ops-guide-deployment) . By default, drand assumes that all connections between nodes will take place over TLS. To override this config and run an insecure network, you can build it with the following go compiler flag: `-tags=conn_insecure` .

For more on TLS setup, see the [4.1 DevOps: Deployment](4-1-ops-guide-deployment).

### **`drand stop`**

The `stop` command tells the `drand` daemon to shut down. If no beacon id is set, it will stop the entire daemon. However, if you provide the `--id` flag and a value, it will only stop that specific network.

```jsx
$ drand help stop

NAME:
   drand stop - Stop the drand daemon.

USAGE:
   drand stop [command options] [arguments...]

OPTIONS:
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --help, -h       show help (default: false)
```

<aside>
💡 **TIP**: If the daemon was started with a non-standard control port, you must use the `--control` flag to specify the control port when running `drand stop`.

</aside>

### **`drand load`**

The `load` command tells the `drand` daemon to load a network which has been previously stopped. You must set `--id` flag to choose the correct network to load again.

```jsx
$ drand help load

NAME:
   drand load - Load a stopped beacon from the filesystem

USAGE:
   drand load [command options] [arguments...]

OPTIONS:
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default port 8888.
   --id value       Indicates the id for the randomness generation process which will be started
```

<aside>
💡 **TIP**: If the daemon was started with a non-standard control port, you must use the `--control` flag to specify the control port when running `drand stop`.

</aside>

### **`drand dkg`**

The `dkg` subcommand contains a range of commands related to the generation and resharing of the distributed key.

The `init` command must be used when setting up a new drand network before randomness generation can begin. The `reshare` command must be used after the network is running to "re-share" the key material, which allows us to change the members of the drand network without interrupting the generation of randomness.

For details about to running the initial DKG, see the [**Deployment Guide**](https://drand.love/operator/deploy/).

```jsx
$ drand help dkg

NAME:
   drand dkg - Commands for interacting with the DKG

USAGE:
   drand dkg command [command options] [arguments...]

COMMANDS:
   init
   reshare
   join
   execute
   accept
   reject
   abort
   status
   generate-proposal
   help, h            Shows a list of commands or help for one command

OPTIONS:
   --help, -h  show help (default: false)
```

### **`drand dkg generate-proposal`**

The `generate-proposal` command is a helper to automatically pull the public keys of various nodes and form them into a toml file for running DKGs. This allows users to inspect and verify the expected parties to the DKG.

`joiner`s are parties who are not yet participating in the network - for the first foundation of the network, everybody is a joiner! `remainer`s are parties who are currently participating in the network generating randomness who are intended to continue doing so in the next 'epoch'. They can signal acceptance or rejection of proposals to the other nodes for consideration. `leaver`s are parties who are currently participating in the network generating randomness, but who are intended to leave before the next 'epoch'.

```jsx
$ ./drand dkg generate-proposal -h

NAME:
   drand dkg generate-proposal

USAGE:
   drand dkg generate-proposal [command options] [arguments...]

OPTIONS:
   --joiner value [ --joiner value ]      the address of a joiner you wish to add to a DKG proposal. You can pass it multiple times. To use TLS, prefix their address with 'https://'
   --remainer value [ --remainer value ]  the address of a remainer you wish to add to a DKG proposal. You can pass it multiple times. To use TLS, prefix their address with 'https://'
   --out value                            the location you wish to save the proposal file to
   --id value                             Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value                        Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --leaver value [ --leaver value ]      the address of a leaver you wish to add to the DKG proposal. You can pass it multiple times. To use TLS, prefix their address with 'https://'
   --help, -h                             show help (default: false)
```

### **`drand dkg init`**

The initial DKG is run to create a distributed key amongst a set of nodes for the first time. It takes a proposal file (created using the [`drand dkg generate-proposal`](./4-5-ops-guide-command-line-tools#drand-dkg-generate-proposal) command, or by hand for sadists), and key attributes of the new network such as period (how often it emits randomness), threshold (the number of shares required to create a valid signature), and the catchup period (how fast the network can create new beacons if it gets behind).

```jsx
$ drand dkg init -h

NAME:
   drand dkg init

USAGE:
   drand dkg init [command options] [arguments...]

OPTIONS:
   --id value              Indicates the id for the randomness generation process which the command applies to.[$DRAND_ID]
   --control value         Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --scheme value          Indicates a set of values drand will use to configure the randomness generation process (default: "pedersen-bls-chained") [$DRAND_SCHEME]
   --period value          period to set when doing a setup [$DRAND_PERIOD]
   --threshold value       threshold to use for the DKG (default: 0) [$DRAND_THRESHOLD]
   --catchup-period value  Minimum period while in catchup. Set only by the leader of share / reshares (default: "0s") [$DRAND_CATCHUP_PERIOD]
   --proposal value        Path to a toml file specifying the leavers, joiners and remainers for a network proposal [$DRAND_PROPOSAL_PATH]
   --timeout value         The duration from now in which DKG participants should abort the DKG if it has not completed. (default: "24h")
   --source value          The path to an external binary used to inject additional entropy into the DKG process
   --genesis-delay value   The duration from now until the network should start creating randomness
   --help, -h              show help (default: false)
```

<aside>
💡 **TIP**: You can mix an external source of entropy into the key sharing protocol by using the `--source` flag. The argument should be the path to an executable that must output random binary data when run. By default, external entropy sources are mixed with Golang's `crypto/rand` secure RNG. The `--user-source-only` flag overrides this default, which is useful during testing and debugging to allow a reproducible "random" value, but should not be used in production.

</aside>

### **`drand dkg reshare`**

The resharing process is used for adding or removing nodes to a currently running network. The same private key generating during the initial distributed key generation is resharing between the proposed nodes such that they all receive a small share. Resharing can happen as often as necessary, and does not allow a single party to gain any more information about the private key by retaining their own shares between epochs. It operates similar to the `drand dkg init` command, though some parameters are no longer changeable between epochs (e.g. the period).

```jsx
$ drand dkg reshare -h

NAME:
   drand dkg reshare

USAGE:
   drand dkg reshare [command options] [arguments...]

OPTIONS:
   --id value              Indicates the id for the randomness generation process which the command applies to.[$DRAND_ID]
   --control value         Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --threshold value       threshold to use for the DKG (default: 0) [$DRAND_THRESHOLD]
   --catchup-period value  Minimum period while in catchup. Set only by the leader of share / reshares (default: "0s") [$DRAND_CATCHUP_PERIOD]
   --proposal value        Path to a toml file specifying the leavers, joiners and remainers for a network proposal [$DRAND_PROPOSAL_PATH]
   --timeout value         The duration from now in which DKG participants should abort the DKG if it has not completed. (default: "24h")
   --help, -h              show help (default: false)
```

### **`drand dkg join`**

New joiners to a network must run the `join` command to register their interest in taking part in the distributed key generation/resharing process. If this is a resharing, the new nodes must obtain a copy of the group configuration file from an existing member, and use the `--group <group-file-path>` flag to specify the path to the `group.toml` file. In this case, `--id` flag is not required, as the unique identifier will be taken from the file.

```jsx
$ drand dkg join -h

NAME:
   drand dkg join

USAGE:
   drand dkg join [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --group value    The group file of the previous epoch [$DRAND_DKG_GROUP]
   --help, -h       show help (default: false)
```

### **`drand dkg accept`**

Members of the existing network epoch can run `accept` to express their acceptance of a leader's resharing proposal.

```jsx
$ drand dkg accept -h

NAME:
   drand dkg accept

USAGE:
   drand dkg accept [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --help, -h       show help (default: false)
```

### **`drand dkg reject`**

Members of the existing network epoch can run `reject` to express their rejection of a leader's resharing proposal. This does not a priori halt the DKG.

```jsx
$ drand dkg reject -h

NAME:
   drand dkg reject

USAGE:
   drand dkg reject [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --help, -h       show help (default: false)
```

### **`drand dkg execute`**

Once nodes have accepted or rejected a proposal, the leader can kick off execution. This will start the actual protocol for distributed key generation or resharing.

```jsx
$ drand dkg execute -h

NAME:
   drand dkg execute

USAGE:
   drand dkg execute [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --help, -h       show help (default: false)
```

### **`drand dkg abort`**

Should anything go wrong during the proposal of a DKG, such as incorrect parameters or too many rejections, the leader can abort it. This will cause other nodes to revert their current DKG state to the last successful one (or none if the abort was for an initial DKG). Future proposals will share an epoch identifier with the aborted proposal.

```jsx
$ drand dkg abort -h

NAME:
   drand dkg abort

USAGE:
   drand dkg abort [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --help, -h       show help (default: false)
```

### **`drand dkg status`**

The `status` command allows operators to track the status of the DKG over time: what state their node is in, what who made a proposal, who has accepted or rejected a proposal, or when a resharing has completed. This can be output as CSV or in a pretty table, the default being pretty.

```jsx
$ drand dkg status -h

NAME:
   drand dkg status

USAGE:
   drand dkg status [command options] [arguments...]

OPTIONS:
   --id value       Indicates the id for the randomness generation process which the command applies to. [$DRAND_ID]
   --control value  Set the port you want to listen to for control port commands. If not specified, we will use the default value. (default: "8888") [$DRAND_CONTROL]
   --format value   Set the format of the status output. Valid options are: pretty, csv (default: "pretty") [$DRAND_STATUS_FORMAT]
   --help, -h       show help (default: false)
```

### **`drand get`**

The `get` command allows you to fetch public information from a running drand node, including random values and the public distributed key. Note that you do not need to be a node operator or a member of the drand group in order to use `drand get`, but you will need a copy of the group configuration file. You will also need access to the gRPC API endpoint, which may be protected by firewall rules.

```jsx
$ drand get --help

NAME:
   drand get - get allows for public information retrieval from a remote drand node.

USAGE:
   drand get command [command options] [arguments...]

COMMANDS:
   public  Get the latest public randomness from the drand beacon and verify it against the collective public key as specified in group.toml. Only one node is contacted by default. This command attempts to connect to the drand beacon via TLS and falls back to plaintext communication if the contacted node has not activated TLS in which case it prints a warning.

   chain-info  Get the binding chain information that this node participates to
   help, h     Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```

There are three main subcommands for `drand get`:

- `drand get public <path-to-group.toml>` returns the latest public random value from the group described in `group.toml`. You may fetch a specific round instead of the latest by supplying the `-round <round-number>` flag.
- `drand get chain-info --chain-hash <value>` returns the binding chain information that this node participates to. In order to choose a network among the running ones on a node, you must provide the chain hash of it.

### **`drand show`**

The `show` command returns private information from a local `drand` node, including its private cryptographic material.

There are several subcommands for `drand show`:

- `drand show share` prints the private distributed key share for the local node.
- `drand show group` prints the group configuration file. If a DKG has been performed, this will include the distributed public key.
- `drand show chain-info` prints the information for the randomness chain the local node is participating in.
- `drand show private` prints the long-term private key of the local node.
- `drand show public` prints the long-term public key of the local node.

For full usage information, run `drand show --help`.

<aside>
💡 **TIP**: You must use `--id` flag to choose between all running networks on the node.

</aside>

### **`drand util`**

The `util` command provides several subcommands that are useful for debugging and managing local node state:

- `drand util check <address>` attempts to contact the node at the given address to see if it's online and responding to requests. This can be used to check that a running network on your local node is reachable at its public address, or to make sure that a remote node can be reached before running `drand share`.
- `drand util list-schemes` lists all scheme the node supports and can be used on share command.
- `drand util remote-status` asks for the statuses of remote networks' nodes indicated by `ADDRESS1 ADDRESS2 ADDRESS3...`, including the network visibility over the rest of the addresses given.
- `drand util status` gets the status of many modules of a running network on the local node.
- `drand util migrate` runs the migration required the multi-beacon folder structure on the local node.
- `drand util ping` sends a ping to the local `drand` daemon and prints its status.
- `drand util backup` backs up the primary drand database of a running network to a secondary location.
- `drand util self-sign` signs the public identity of a running network. Needed for backward compatibility with previous versions.
- `drand util reset` deletes all distributed information (group file, key share, random beacon state, etc) from a network on the local node. It does NOT delete the long-term keypair.
- `drand util del-beacon <round-number>` deletes all beacon chain rounds from `<round-number>` until the current head of the beacon chain from a running network's database. You MUST restart the running network after issuing this command.

For full usage information, run `drand util --help`.

## **Supplemental Tools**

In addition to the main `drand` cli app, there are several supplemental tools that can be used to consume randomness from a drand network or help securely scale a drand deployment.

The following tools do not yet have binary releases and must be installed from source. The basic procedure is the same as [**](https://drand.love/operator/drand-cli/#source-code)[4.5 DevOps: Command-line Tools](./4-5-ops-guide-command-line-tools)**, but instead of `make install` or `make build`, you'll run one of:

- `make client`
- `make relay-http`
- `make relay-gossip`

### **`drand-client`**

The `drand-client` command is a standalone drand client that's optimized to fetch randomness from a drand network and provide it over a CDN.

The client is configured with the URL for a drand HTTP endpoint, and may optionally be configured with the addresses of one or more libp2p relay nodes. If libp2p relays are configured, the HTTP endpoint will be used as a fallback if the libp2p relays fail to deliver randomness at the expected interval.

To see full usage information, run `drand-client help`.

### **`drand-relay-http`**

The `drand-relay-http` command provides a gRPC to HTTP relay server that can be used to relay requests from the public internet to a drand daemon. This is an alternative to the public HTTP endpoint that runs in the main `drand` process when starting `drand` with the `--public-listen` flag.

While the `--public-listen` flag is convenient, running a separate relay process allows the HTTP communications to be isolated from the main `drand` process, which limits the attack surface of the `drand` daemon.

To see full usage information, run `drand-relay-http help`.

### **`drand-relay-gossip`**

The `drand-relay-gossip` command provides a relay server that connects to a drand node over gRPC and provides randomness to consumers over a [libp2p PubSub](https://docs.libp2p.io/concepts/publish-subscribe/) topic. Randomness provided by a gossip relay may be consumed directly over PubSub by libp2p-capable programs, and/or via a CDN which has been configured to listen to a PubSub topic using `drand-client`.

---
