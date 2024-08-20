---
id: 3-1-dev-guide-organization
title: "3.1 DevGuide: Organization"
description: A table of contents for drand packages and related bits.
---
# 3.1 DevGuide: Organization

## **Top-level Packages**

- `chain` - Code for generating the sequence of beacons (implementation of which is in `chain/beacon`) after setup.
    - `boltdb` - BoltDB storage backend.
    - `errors` - common errors for the chain package.
    - `memdb` - in-memory storage backend.
    - `postgresdb` - PostgreSQL storage backend.
    
- `client` - The drand client library - composition utilities for fail-over and reliable abstraction.
    - `client/grpc` - The concrete gRPC client implementation.
    - `client/http` - The concrete HTTP client implementation.
    - `client/test` - Mock client implementations for testing.
    
- `cmd` - Binary entry points.
    - `cmd/client` - A client for fetching randomness.
    - `cmd/client/lib` - A common library for creating a client shared by `cmd/client` and `cmd/relay`.
    - `cmd/drand-cli` - The main drand group member binary.
    - `cmd/relay` - A relay that pulls randomness from a drand group member and exposes an HTTP server interface.
    - `cmd/relay-gossip` - A relay that pulls randomness from a group member and publishes it over a libp2p gossipsub topic.
    
- `crypto` - Holds the schemes supported by drand.

- `core` - The primary Service interface of drand commands.
    - `core/migration` - A library for migrating drand files from single-beacon to multi-beacon version.
    
- `demo` - A framework for integration testing.
- `deploy` - Records of previous drand deployments.
- `docker` - Helpers for docker image packaging.
- `docs` - Here.
- `entropy` - A common abstraction for ingesting randomness.
- `fs` - Utilities for durable state storage.
- `hooks` - Docker helper entry point.
- `http` - The publicly exposed HTTP server for exposing randomness.
- `key` - Validation of signatures.
- `log` - Common logging library.

- `lp2p` - Utilities for constructing a [libp2p](https://libp2p.io/) host.
    - `lp2p/client` - The concrete gossip client implementation.
    
- `metrics` - The Prometheus metrics server.
- `net` - gRPC service handlers for inter-node communication.
- `protobuf/drand` - Definitions for the wire format interface of inter-node communication.

- `test` - Testing helper utilities.
    - `test/docker` - Files and related scripts for testing drand networks on docker.

---