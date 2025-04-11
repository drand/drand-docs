---
id: dev-guide-code-organization
title: "Code Organization"
description: A table of contents for drand packages and related bits.
---
# Code Organization

## **Top-level Directories**

Note that the client code and gossip relays for drand are now in their own [drand-client](https://github.com/drand/go-clients) repo.

- `cmd` - Binary entry points.
    - `drand` - The main drand daemon binary (`drand.go`).
- `common` - Shared code used across different parts of drand.
    - `chain` - Common chain-related definitions and utilities.
    - `client` - Common client interface definitions.
    - `key` - Common key management, encoding, and group file handling.
    - `log` - Shared logging setup.
    - `testlogger` - Logger specifically for tests.
    - `tracer` - Shared tracing setup.
- `crypto` - Cryptographic schemes and vault implementation.
    - `vault` - Interface for secure key storage.
- `demo` - Framework for integration testing and demonstration.
    - `cfg` - Configuration handling for demos.
    - `lib` - Orchestration library for demos.
    - `node` - Node management for demos (in-process, subprocess).
    - `regression` - Regression testing setup.
- `devenv` - Development environment setup using Docker Compose (Grafana, Loki, Prometheus, Tempo).
- `docker` - Helpers and scripts for building and running drand Docker images and networks.
- `handler` - HTTP handler implementations.
    - `http` - HTTP server implementation. To be deprecated soon and replaced by the [new relay](https://github.com/drand/http-relay) code
- `hooks` - Docker Hub build hooks.
- `internal` - Core internal implementation details of drand.
    - `chain` - Core beacon chain logic, storage backends (BoltDB, MemDB, PostgreSQL), and synchronization.
        - `beacon` - Beacon generation and management logic.
        - `boltdb` - BoltDB storage backend implementation.
        - `errors` - Chain-specific errors.
        - `memdb` - In-memory storage backend implementation.
        - `postgresdb` - PostgreSQL storage backend implementation.
    - `context` - Internal context management.
    - `core` - The primary Service interface implementation, including daemon logic, configuration, DKG proxying, and migrations.
        - `migration` - Logic for migrating drand data formats.
    - `dkg` - Distributed Key Generation (DKG) protocol implementation, state machine, and actions.
    - `drand-cli` - Implementation logic for the `drand` command-line interface.
    - `entropy` - Entropy source abstraction and implementation.
    - `fs` - Filesystem utilities for durable state storage.
    - `metrics` - Prometheus metrics server and threshold monitoring.
        - `pprof` - pprof endpoint integration.
    - `net` - Network communication layer (gRPC client/server, peer management, listeners).
    - `test` - Internal testing utilities and mocks.
    - `util` - General internal utility functions.
- `protobuf` - Protocol Buffer definitions for drand's network protocols and APIs.
    - `dkg` - DKG protocol messages.
    - `drand` - Core drand API, control, metrics, and common protocol messages.
- `test` - Higher-level testing utilities and mocks.
    - `docker` - Files related to Docker-based testing.
    - `mock` - Mock implementations for testing.
    - `regression` - Regression test files and binaries.

---
