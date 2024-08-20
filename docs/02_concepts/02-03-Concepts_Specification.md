---
id: 2-3-concepts-specification
title: "2.3 Specification"
description: Outlines the drand protocol specification.
---
# 2.3 Concepts: Specification

This document outlines the specifications of the drand protocols.

## 📕 Key Terminology

**Drand Node**: A server that runs the [drand code](https://github.com/drand/drand/), participating in the distributed key generation (DKG) process and randomness generation. Each node can run multiple independent internal randomness processes, each with its own randomness generation frequency.

**Drand Network**: A group of nodes running a specific process, acting as an independent beacon generator.

**Drand Beacon**: The output created by the drand network, containing the signature of the previous beacon, the round of the beacon, and the signature itself.

**Beacon ID**: A unique identifier for each beacon process running on a drand node. This ID helps each drand node dispatch received messages to the correct internal process.

## Metadata

Each request sent by a drand node includes metadata to communicate important message-related data. The [protobuf](https://en.wikipedia.org/wiki/Protocol_Buffers) definition for this field is:

```protobuf
message Metadata {
  NodeVersion node_version = 1;
  string beaconID = 2;
  bytes chain_hash = 3;
}
```

## Scheme

A scheme is a network-level configuration set by a coordinator when starting a new network. Available schemes are:

- **DefaultSchemeID**: "pedersen-bls-chained"
- **UnchainedSchemeID**: "pedersen-bls-unchained"
- **ShortSigSchemeID**: "bls-unchained-on-g1"

## Group Configuration

Group Configuration includes all necessary information about a running drand network, such as nodes, threshold, period, ID, scheme, genesis time, genesis seed, distributed public key, and transition time. This configuration is shared internally within drand nodes.

## Group Configuration Hash

The group configuration is uniquely referenced via its canonical hash, derived using the [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function)) hash function.

## Wire Format & API

Drand uses [gRPC](https://en.wikipedia.org/wiki/GRPC) as the networking protocol. All exposed services and protobuf definitions are in the `protocol.proto` file for intra-node protocols and in the `api.proto` file.

## drand Node Operations

Generating public randomness is the primary function of drand. Each node can run multiple processes, each independent of the others, identified and dispatched using the Beacon ID.

### drand Versioning

Each request sent by a drand node contains the protocol version used. Drand uses semantic versioning, allowing only nodes with the same MAJOR version to communicate.

## drand Modules

drand operates in two phases: 1. setup and 2. generation.

### 1. Setup Phase

During the setup phase, nodes perform a DKG protocol to create the collective public key and individual private key shares. This setup uses a coordinator to collect public keys and create the group configuration.

### 2. Randomness Generation Phase

After setup, nodes switch to randomness generation mode, broadcasting partial signatures periodically. Once enough partial signatures are gathered, a final signature is reconstructed, verified, and hashed to produce the public randomness.

## Randomness Generation Details

### Randomness Generation Period

The drand network outputs a new random beacon every period, mapping a beacon "round" to a specific time. The function to determine the current round and time is as follows:

```go
func CurrentRound(now, genesis int64, period uint32) (round uint64, time int64) {
  if now < genesis {
    return 0
  }
  fromGenesis := now - genesis
  round = uint64(math.Floor(float64(fromGenesis)/period)) + 1
  time = genesis + int64(nextRound*uint64(period.Seconds()))
  return
}
```

### Chained vs. Unchained Mode

drand can operate in two modes regarding randomness generation: chained or unchained. In chained mode, each beacon builds on the previous one, forming a randomness chain. In unchained mode, each beacon is independent.

## Root of Trust

drand uniquely identifies a randomness chain via the `Info` structure, which includes public key, ID, period, scheme, genesis time, and group hash.

## Catchup Mode

Nodes must synchronize with each other to catch up if the network stalls. Nodes enter catchup mode if they detect a discrepancy in the expected round, synchronizing beacons until the current round is reached.

## Syncing

Nodes that are offline or restarted should sync with the network, requesting beacons from the last saved round to the current round.

## Cryptographic Specification

### drand Curve

drand uses the [BLS12-381](https://en.wikipedia.org/wiki/BLS_digital_signature#BLS12-381) pairing curve, with points sent in compressed form. The hash-to-curve algorithm follows [RFC-9380](https://datatracker.ietf.org/doc/rfc9380/).

### Distributed Public Key

The distributed public key is a list of BLS12-381 G1 points, representing the public polynomial created during the DKG protocol.

### Beacon Signature

A beacon signature is a BLS signature over the message, verified using the distributed public key.

### Partial Beacon Signature

A partial beacon signature is created over the same input as the beacon signature, prefixed with the node's index.

### Distributed Key Generation

drand implements the Joint Feldman protocol for DKG, ensuring secure and distributed key generation.

### Resharing

Resharing allows an established group to distribute new shares to a new group of nodes, maintaining the same public key for verifying random beacons.

---
