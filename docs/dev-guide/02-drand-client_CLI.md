---
id: devs-drand-client-cli
title: drand-client CLI
description: Learn how to use the drand-client CLI
slug: /developer/drand-client/
---
# drand-client CLI

The `drand-client` command-line interface application can be used to fetch randomness from a drand network. It is a CLI frontend for the [**drand client libraries**](/docs/dev-guide/03-Client_Libraries.mdx).

# **Installation**

## **From Source**

This will require a working [**Golang installation**](https://golang.org/doc/install). You'll also need the `make` command available.

```jsx
git clone https://github.com/drand/go-clients.git
cd go-clients 
make client-tool
```

# **Usage**

Run `./drand-cli --help` for a list of supported options. 

As an example, here is how to launch the client in order to read randomness for the current [League of Entropy](https://leagueofentropy.org) mainnet endpoints with automatic verification, failover and fastest-endpoint optimizations:

```jsx
./drand-cli get chain-info --url https://api.drand.sh --insecure
```

---
