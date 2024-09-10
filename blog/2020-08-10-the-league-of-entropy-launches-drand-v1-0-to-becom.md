---
slug: "the-league-of-entropy-launches-drand"
title: "The League of Entropy launches drand v1.0 to become the Internet’s first production-grade, publicly verifiable, randomness beacon!"
authors: []
tags: [release, major, league-of-entropy]
---

Welcome to the brand-new website for the drand project! We are thrilled to announce that drand is now in production, offering publicly verifiable randomness as a foundational internet service.

In this post, we'll introduce drand, highlight recent protocol upgrades, share details about the expansion of the League of Entropy's largest deployment, and provide a glimpse into the future of drand and the League of Entropy.

## New to drand? Here's a Primer

Randomness is crucial for many business-critical operations and protocols we use daily, such as secure communications cryptography and public lotteries. Despite its importance, there hasn't been a source of public randomness capable of delivering truly unbiased randomness at scale—until now. Drand was created to fill this gap.

Drand provides a universally accessible source of publicly verifiable, unbiasable, and unpredictable randomness. After an initial multi-party computation to establish a distributed key, drand nodes operated by independent parties periodically broadcast information. This data is aggregated into a final random beacon, whose validity users can easily verify.

Drand originated as a research project in the [DEDIS lab at EPFL](https://dedis.epfl.ch/) and launched its first network experiment in 2019. After nearly a year of research, drand transitioned into a production-level public service. Recently, we introduced several changes and improvements and deployed drand's largest network, the [League of Entropy](https://leagueofentropy.com/).

We believe drand can become a foundational internet service for randomness, accessible to everyone online, much like DNS or NTP.

## drand v1.1

drand v1.0 launched in July, and we upgraded to v1.1 in August with many new features and architectural improvements. Key updates include:

### Three-Layered Architecture

The network architecture is now divided into three layers, enhancing node protection and scalability. This includes a distribution network utilizing [HTTP CDNs](https://api.drand.sh/public/latest), [libp2p Gossipsub](https://blog.ipfs.io/2020-05-20-gossipsub-v1.1/) relays, a [Tor hidden service](https://drandeokfd5aaz3hr4hfk7mlr23vc63boxrpr44ertumtbousmdgbhad.onion/public/latest), and a [Twitter bot](https://twitter.com/loebot).

### New Features

- **Round-to-timestamps guarantees**: Nodes quickly generate randomness to catch up after downtime.
- **Chain download functionality**: Nodes can download a full copy of an existing chain before joining.
- **Enhanced security**: New curve ([BLS12-381](https://electriccoin.co/blog/new-snark-curve/)) for better security and compatibility with major blockchains like Filecoin and Ethereum 2.0.
- **Improved client implementation**: Failover and optimizations in Go and JS.
- **Broadcast channel**: Enables more robust setup ceremonies.

### Deployment Monitoring

We've introduced tools to monitor drand nodes and alert operators to incidents. A [status page](https://drand.statuspage.io/) shows system status and planned maintenance. Additionally, a network observatory measures performance and reliability from global vantage points.

### drand’s Specification & Security Model

The drand protocol now has a [full specification](https://www.notion.so/2-3-Concepts-Specification-3c6b9de90dfd4ccbbdce860edc19b238?pvs=21) and a documented [security model](https://www.notion.so/2-2-Concepts-Security-Model-e28de9e2a7a94dcab08d06160879b6c5?pvs=21).

### Security Audit

drand underwent a thorough end-to-end security audit by [SigmaPrime](https://sigmaprime.io/). Check out the [full report](https://drive.google.com/file/d/1fCy1ynO78gJLCNbqBruzHx7bh72Tu-q2/view?usp=sharing) to learn about the findings and our collaborative process with SigmaPrime.

### Code Quality, Refactor & Testing

We’ve improved our development practices, including a testnet for pre-deployment evaluations, increased code coverage, linting, and regression testing. We've merged over 400 pull requests in the past few months, ensuring drand is a reliable production environment.

## New Website & Logo

Our new website is the primary repository for drand's growing documentation. It's also the home for our community of developers, operators, and end-users, where we’ll share important updates and news. We also unveiled a new logo for the drand project.

## The League of Entropy Main Network (LoE mainnet) Becomes a Production Service

Drand’s true power comes from its decentralized network of independent nodes. With significant protocol upgrades, we’ve strengthened the League of Entropy.

In 2019, Cloudflare, EPFL, the University of Chile, Kudelski Security, and Protocol Labs formed the League of Entropy to run the drand network. Since then, it has expanded to include partners from six countries, spanning universities and infrastructure companies.

### New League of Entropy Partners

With the LoE Main Network upgrade, new partners have joined, increasing robustness and quality of service. Current members include:

- [EPFL Center for Digital Trust (C4DT)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Center%20for%20Digital%20Trust%20(C4DT)%20dc94bcdadab64950aa1e6bc96cb1e39a.md)
- [ChainSafe Systems](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/ChainSafe%20Systems%20480ac8864a33408dae64fad706c38a8e.md)
- [c**·**Labs](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/c%C2%B7Labs%208125559f2fb44804b9e6ca63da70f6b6.md)
- [Cloudflare](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Cloudflare%2012bbcd90be5f4e42af18599f65019e7e.md)
- [Emerald Onion](https://emeraldonion.org/)
- [EPFL](https://www.epfl.ch/labs/dedis/)
- [Ethereum Foundation](https://ethereum.foundation/)
- [IC3](https://www.initc3.org/)
- [Kudelski Security](https://www.kudelskisecurity.com/)
- [Protocol Labs](https://protocol.ai/)
- [PTisp](https://ptisp.pt/)
- [Tierion](https://tierion.com/)
- [UCL](https://www.ucl.ac.uk/)
- [University of Chile](https://www.uchile.cl/)

We’ll continue growing the network over the years to come.

### League of Entropy’s Governance

Drand’s strength lies in its decentralized governance model. We’ve established rules and requirements to maintain high network security, ensure effective operation, and foster continuous improvement. This model also outlines procedures for adding new members equitably.

## Filecoin Becomes Drand’s First High-Profile Production User

We’re thrilled to announce that the [Filecoin project](https://filecoin.io/blog/filecoin-testnet-phase-2-is-here/) at Protocol Labs is adopting drand for unbiased randomness in leader election on its blockchain. This is a significant milestone, showcasing drand’s potential in the blockchain space. Filecoin’s integration will drive innovation, testing, and development for drand.

## Join Us on August 13 for The Randomness Summit

To celebrate this launch, the drand team, ETHGlobal, Protocol Labs Research, and ResNetLab are hosting a [one-day virtual summit](https://randomness2020.com/) on the state of the art and future directions for randomness beacons. [Register now](https://airtable.com/shrTsIV4Btd8Wugqb) to learn from top cryptographers and randomness beacon experts, League of Entropy partners, and drand developers. Hear from Ethereum and Filecoin project leads about the critical role of randomness in their networks.

That’s all for now! Stay tuned for more updates on drand’s new online home.

---
