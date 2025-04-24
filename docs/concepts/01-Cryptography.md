---
id: concepts-cryptography
title: "Cryptography"
description: An overview of drand's cryptographic building blocks
slug: /docs/cryptography/
---
# Cryptography

This document provides an overview of the cryptographic building blocks that drand uses to generate publicly verifiable, unbiased, and unpredictable randomness in a distributed manner. 

## 🕳️ Threshold Cryptography

drand relies on [threshold cryptography](https://en.wikipedia.org/wiki/Threshold_cryptosystem), where a minimum number of participants must work together to execute cryptographic operations. This approach avoids single points of failure and enhances security.

The drand beacon operates in two phases: 1.) the setup phase and 2.) the beacon phase.

## 1. Setup Phase

The setup phase creates a collective private and public key pair shared among participants. This is done through a [Distributed Key Generation](https://en.wikipedia.org/wiki/Distributed_key_generation) (DKG) process, ensuring that no individual node knows the entire collective private key. Each private key share is used for cryptographic threshold computations, such as generating threshold signatures.

### 🤐 Secret Sharing

Secret sharing allows a secret value to be split into shares, which can be reconstructed only if a threshold of shares is available. drand uses [Shamir's Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) (SSS) scheme, which is well-known for its reliability and security.

<aside>
<img src="https://www.notion.so/icons/mathematics_green.svg" alt="https://www.notion.so/icons/mathematics_green.svg" width="40px" /> In Shamir's Secret Sharing (SSS), a polynomial of degree $t−1$ is constructed, where $t$ is the threshold. The secret is the constant term of this polynomial, and each share is a point on the polynomial. To reconstruct the secret, at least $t$ shares are needed to solve the polynomial equation.

</aside>

### 🤫 Verifiable Secret Sharing

[Verifiable Secret Sharing](https://en.wikipedia.org/wiki/Verifiable_secret_sharing) (VSS) ensures that participants can verify their shares, protecting against malicious dealers. drand uses Feldman's VSS scheme, an extension of SSS, to ensure the shared secret can be correctly reconstructed.

<aside>
<img src="https://www.notion.so/icons/mathematics_green.svg" alt="https://www.notion.so/icons/mathematics_green.svg" width="40px" /> Feldman's VSS enhances SSS by adding commitments to the polynomial's coefficients. These commitments allow participants to verify their shares against the public commitments, ensuring that the dealer has distributed consistent shares.

</aside>

### 🔑 Distributed Key Generation (DKG)

DKG creates a collectively shared secret without any single participant knowing it. drand uses Pedersen's DKG scheme, running multiple instances of Feldman's VSS in parallel to create a final share for each participant. This collective public key is then used in the randomness generation phase.

<aside>
<img src="https://www.notion.so/icons/mathematics_green.svg" alt="https://www.notion.so/icons/mathematics_green.svg" width="40px" /> In Pedersen's DKG, each participant generates their own secret and shares it using VSS. The participants then combine these shares to form the collective secret, ensuring that no single participant knows the entire secret.

</aside>

## 🚨 2. Beacon Phase

In the beacon phase, drand uses pairing-based cryptography to generate publicly verifiable, unbiased, and unpredictable randomness. The process involves threshold [Boneh-Lynn-Shacham](https://en.wikipedia.org/wiki/BLS_digital_signature) (BLS) signatures.

### 👫 Pairing-Based Cryptography

[Pairing-based cryptography](https://en.wikipedia.org/wiki/Pairing-based_cryptography) uses bilinear groups to create efficient cryptographic operations. drand currently uses the [BLS12-381](https://hackmd.io/@benjaminion/bls12-381) curve.

<aside>
🗺️ Pairing-based cryptography involves a bilinear map, usually denoted as $e: G_1 \times G_2 \to G_T$, where $G_1$, $G_2$, and $G_T$ are groups with certain mathematical properties. This map allows for efficient verification of signatures and is central to constructing BLS signatures.

</aside>

### 🎲 Randomness Generation

To generate randomness, drand uses threshold BLS signatures. Each participant creates a partial signature, which are then combined to form a collective BLS signature. This signature is hashed to produce the final random value.

<aside>
🕳️ In threshold BLS signatures, each participant generates a partial signature using their private key share. These partial signatures are then combined using Lagrange interpolation over the subgroup $G_1$ to form the final signature. This ensures that no single participant can control the output, and the signature is verifiable using the pairing function.

</aside>

### 🔏 Smaller Signatures for Resource-Constrained Applications

drand supports schemes, which are network-level configurations that determine the cryptographic methods and protocols used to generate randomness.  These scheme aim to minimize the size of signatures, reducing storage requirements and improving efficiency.

### ⛓️ Chained and Unchained Modes

drand operates in two modes: chained and unchained. In chained mode, each random value depends on all previous values, ensuring security and consistency. In unchained mode, each random value is generated independently.

<aside>
ℹ️ In chained mode, the randomness of each round is linked to the previous rounds, forming a chain. This ensures that any tampering with the randomness of a previous round affects all subsequent rounds. In unchained mode, each round's randomness is independent, simplifying verification but not providing the same level of historical integrity.

</aside>

## 🎓 Learning More

For more detailed information, refer to the drand project specifications and related research papers on scalable bias-resistant distributed randomness.

---
