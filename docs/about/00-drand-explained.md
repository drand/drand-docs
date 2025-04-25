---
id: drand-explained
title: drand Explained
description: What is drand?
slug: /about/
---
# drand Explained (What is “drand”?)

**drand** (lower case, pronounced "DEE-rand") is a distributed randomness beacon daemon written in the [**Go**](https://en.wikipedia.org/wiki/Go_(programming_language)) programming language. It generates collective, publicly verifiable, unbiased, and unpredictable random values at fixed intervals using advanced cryptographic techniques.

drand serves as a critical Internet-wide infrastructure, providing randomness to applications much like the [**Network Time Protocol**](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) provides timing information. It ensures randomness is verifiable and decentralized, making it ideal for a wide range of applications, from blockchain systems to anonymity networks.

Randomness plays a crucial role in various aspects of modern life, from voting systems and traffic management to financial services. However, its most critical application is in cryptography.

## Current Randomness Generators

Several systems have tried to provide strong randomness, but each has its limitations.  As an example:

- **NIST Randomness Beacon**: The United States' [National Institute of Standards and Technology (NIST)'](https://www.nist.gov/) has a project that aims to produce randomness by using quantum entanglement. While this is an excellent way to produce incredibly random numbers, there is no way for an end-user to verify that the numbers they are getting from NIST are random. Users have to trust that the system is providing genuinely random numbers.
- Bitcoin is also able to [produce random numbers](https://eprint.iacr.org/2015/1015.pdf). However, the cryptocurrency is fairly centralized, with power coming from a handful of mining pools.
- [Randhound](https://eprint.iacr.org/2016/1067.pdf) is the most robust random number generator created so far. It claims to be scalable, bias-resistant, unpredictable, verifiable, and decentralized. However, tests have shown that it offers probabilistic guarantees, meaning that an attacker could have the system lean towards favorable numbers. Randhound is also hard to set up and takes a while to generate an output. It is the conceptual predecessor of drand.


## Features of Good Randomness

To prevent manipulation, a strong public random number generator should be:

- **Unpredictable**: Impossible to predict the next number.
- **Publicly Verifiable**: Anyone can verify the randomness is really random.
- **Bias-Resistant**: Cannot be influenced to produce specific outcomes.
- **Decentralized**: Produced by a set of independent, unrelated parties.
- **Always Available**: Reliably capable of providing random numbers.

drand aims to fulfill all these criteria.

## How drand Works

drand generates randomness without allowing any party to predict or bias the output. Here's a simplified overview:

1. **Network Setup**: A drand network consists of nodes running the drand protocol. These nodes agree on a threshold parameter and generate partial signatures.
2. **Randomness Generation**: Nodes broadcast parts of their signatures, which are collected until they reach the threshold. The final signature, a [**Boneh–Lynn–Shacham**](https://en.wikipedia.org/wiki/BLS_digital_signature) (BLS) signature, is verified by the network and hashed to produce the random value. Because secure signature schemes need to produce unpredictable signatures, this method is secure.

For more details, refer to the [project specifications](/docs/concepts/03-Specification.md).

## Public Randomness

drand's primary function is generating public randomness. The process involves:

- **Setup Phase**: Nodes generate a long-term public/private key pair and perform a [**distributed key generation**](https://en.wikipedia.org/wiki/Distributed_key_generation) (DKG) protocol to create a collective public key and individual private key shares.
- **Generation Phase**: Nodes initiate randomness generation rounds, sign messages using their private key shares, and reconstruct the full BLS signature. This signature is hashed to ensure no bias, producing the final random value.

This randomness is useful for applications like lotteries, sharding, and consensus protocols.

## Importance of Decentralized Randomness

Decentralized randomness is crucial for many systems that rely on fair and unpredictable outcomes. For example, [**Proof-of-Stake**](https://en.wikipedia.org/wiki/Proof_of_stake) (PoS) blockchains use randomness to elect miners, ensuring security and fairness. Unlike centralized solutions, drand offers a verifiable and unbiased source of randomness, enhancing reliability and security.

## Origins of drand

drand was developed in 2017 in the [DEDIS](https://www.epfl.ch/labs/dedis/) Lab at [EPFL](https://epfl.ch/), spearheaded by [Nicolas Gailly](https://scholar.google.com/citations?user=mnA7Jo4AAAAJ). The project built upon earlier work in decentralized randomness by researchers at Yale University and EPFL.

The DEDIS team collaborated with [DFINITY](https://dfinity.org/) to optimize the cryptographic techniques used in drand, resulting in a more efficient and reliable randomness generation protocol.

## drand Network and Adoption

drand gained support from prominent organizations such as [Cloudflare](https://leagueofentropy.org/cloudflare), [Kudelski Security](https://leagueofentropy.org/kudelski-security), [Protocol Labs](https://leagueofentropy.org/protocol-labs), [Universidad de Chile](https://leagueofentropy.org/universidad-de-chile), and [many others](https://leagueofentropy.org/league-partners). These collaborations have helped establish a robust drand network, hosted by a voluntary consortium known as the [League of Entropy](https://leagueofentropy.org), which launched its production-ready mainnet in 2019.

Today, drand is used in various applications, including leader election in consensus mechanisms, providing randomness for smart contracts, and more.

## Acknowledgments

Special thanks to contributors and collaborators who have supported drand’s development, including [@paulmillr](https://github.com/paulmillr) and [@herumi](https://github.com/herumi) for cryptographic library support, and teams from the [DEDIS lab](https://dedis.ch/) and from [Protocol Labs](https://protocol.ai/).

### 💌 *Get in touch!*

If you have any questions or comments, you can reach the drand team at [leagueofentropy@googlegroups.com](mailto:leagueofentropy@googlegroups.com), [info@drand.love](mailto:info@drand.love) or join the [drand Slack workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA).

---
