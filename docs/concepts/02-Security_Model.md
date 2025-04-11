---
id: concepts-security-model
title: "Security Model"
description: Describes drand’s security assumptions.
---
# Security Model

## 📕 Key Terminology

**drand Node**: A node running the drand daemon, participating in generating randomness across one or multiple networks. A drand network consists of interconnected drand nodes, each with a long-term public key and a private share.

**Relay Node**: A node connected to a drand daemon, providing an Internet-facing interface to fetch public randomness. The relay network consists of relay nodes that may be partially connected.

**Corrupted Node**: A node controlled by an attacker, giving access to all its cryptographic material and network authorizations.

**Offline Node**: A node that is unreachable from an external point of view.

**Online Node**: A node that is running and correctly transmitting packets over the Internet.

## 🌒 Security Phases

In drand, there are two main phases, each with specific security assumptions:

### Phase 1. Distributed Key Generation (DKG) Setup

The DKG protocol follows Pedersen's protocol, ensuring:

- **Synchronous Network**: Packets reach their destination within a bounded time.
- **Synchronized Clocks**: Nodes have synchronized clocks with minimal offset.
- **Reliable Broadcast Channel**: All nodes receive the same packet within a bounded time.
- **Authenticated Channel**: All communications are authenticated.
- **Public Group**: Nodes know each other's public keys before starting the DKG.

### Phase 2. Randomness Generation

The randomness generation phase ensures:

- **Network Flexibility**: No strict network bounds; nodes process packets as they arrive.
- **Synchronized Clocks**: Nodes start rounds simultaneously with accurate clock synchronization.
- **Broadcast Channel**: A regular broadcast channel suffices for partial beacon transmission.
- **Threshold**: A specific number of nodes must be online and honest to create the final random beacon.
- **Determinism**: The chain is deterministic with respect to a fresh DKG phase.

## 💥 Attack Vectors & Mitigations

### Randomness Generation Attacks

1. **Front Running**:
    - **Passive Adversary**: An attacker listening to traffic might aggregate the final beacon before others.
    - **Active Adversary**: An attacker tries to disable half of the nodes, deciding whether to release the final beacon.
2. **Denial of Service (DoS) Attacks**:
    - **Scenario**: Sustained DoS attacks can halt the chain if enough nodes are disabled.
    - **Defense**: Block incoming traffic early, allowing only known IP addresses.
3. **Corruption**:
    - **Scenario #1**: Attacker corrupts less than the threshold of nodes, gaining no meaningful information.
    - **Scenario #2**: Attacker corrupts more than the threshold, deriving the entire chain.

### Distributed Key Generation Attacks

1. **DoS During DKG**:
    - Nodes may miss shares or replies, risking exclusion.
    - **Remediation**: Manual verification of the final group and decision to re-run DKG if necessary.
2. **Corruption During DKG**:
    - **Scenario 1**: Attacker influences the distribution of private shares without biasing randomness.
    - **Scenario 2**: Attacker controls more than the threshold, knowing the randomness chain.
3. **Broadcast Channel Assumption**:
    - Attacker sends inconsistent shares, causing verification issues.
    - **Observation**: Nodes publish the distributed public key and start randomness rounds, enabling third-party verification.

## Conclusion

drand employs robust security measures, including pairing-based cryptography and threshold BLS signatures, to ensure publicly verifiable, unbiased, and unpredictable randomness. Regular resharing and strict network protocols further enhance security and resilience against attacks.

---
