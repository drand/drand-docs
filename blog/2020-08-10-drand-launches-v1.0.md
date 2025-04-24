---
title: The League of Entropy launches drand v1.0 to become the Internet’s first production-grade, publicly verifiable randomness beacon!
description: Welcome to the brand new website for the drand project! drand is now in production, providing publicly verifiable randomness as a foundational internet service.
image: /images/drand-launch-banner.png
date: 2020-08-10
tags:
    - Release
    - Major
    - League of Entropy
---
Welcome to the brand new website for the drand project! drand is now in production, providing publicly verifiable randomness as a foundational internet service.
<!-- truncate -->
![Banner for drand v1.0](/images/drand-launch-banner.png)

Welcome to the brand new website for the drand project! drand is now in production, providing publicly verifiable randomness as a foundational internet service.

Below you'll find an introduction to drand, information on recent protocol upgrades, details about the expansion and strengthening of drand's largest deployment, the League of Entropy, and glimpses into the future of drand and the League of Entropy.

## New to drand? Here is a primer

Randomness is at the core of many business-critical operations and protocols that we rely on every day (e.g., the cryptography of secure communications, the execution of public lotteries, and so on). However, despite being such a huge requirement, there has never been a source of public randomness capable of providing truly unbiased randomness at scale. drand was created to change that. 

drand provides a mechanism for a universally accessible source of publicly-verifiable, unbiasable, and unpredictable randomness. Following an initial multi-party computation to establish a distributed key, drand nodes operated by independent parties periodically broadcast information that gets aggregated into a final random beacon whose validity can be easily verified by users. 

drand started as a research project in the [DEDIS lab at EPFL](http://dedis.epfl.ch/), and the first network was launched as an experiment in 2019. After nearly a year in the research stage, it was time to transform drand into a production-level public service. Over the past few months, we have rolled out a host of new changes and improvements to the service. We've also deployed drand's largest network, the [League of Entropy](http://leagueofentropy.com/).

We believe that drand can be a foundational Internet core service for randomness, one that everyone online can access and use in the same way as other foundational protocols, like DNS or NTP.

## drand v1.1

drand launched v1.0 in July and updgraded to v1.1 in August, rolling out many new features and architecture improvements. Chief among them are:

### 3 layered architecture

The network architecture was split into three layers, offering enhanced protection to the drand nodes while increasing scalability, with a distribution network utilizing [HTTP CDNs](http://api.drand.sh/public/latest), [libp2p Gossipsub](https://blog.ipfs.io/2020-05-20-gossipsub-v1.1/) relays, a [Tor hidden service](http://drandeokfd5aaz3hr4hfk7mlr23vc63boxrpr44ertumtbousmdgbhad.onion/public/latest), and a [Twitter bot](https://twitter.com/loebot).

### New features

* **Round-to-timestamps guarantees** with a catch-up functionality where, after a downtime, nodes quickly generate randomness to be up-to-date.
* The ability for a node to **download a full copy of an existing chain prior to joining the group**.
* A new curve ([BLS12-381](https://electriccoin.co/blog/new-snark-curve/)) for **improved security** and **compatibility with major blockchains like Filecoin and Ethereum 2.0**.
* Solid client implementation with provider **failover** and **optimizations** in Go and JS.
* A broadcast channel enabling more **robust set-up ceremonies**.

### Deployment monitoring

A set of tools is now used to monitor the various drand nodes and alert operators to incidents. A [status page](https://drand.statuspage.io/) that shows both system status and any planned maintenance is now available for the network. We have also established a network observatory to measure network performance and reliability from the perspective of the end-user, with vantage points around the world.

### drand’s specification & security model

The drand protocol now has a [full specification](/docs/specification/) and a documented [security model](/docs/security-model/). 

### Security audit

The drand implementation underwent an end-to-end security audit carried out by [SigmaPrime](https://sigmaprime.io/). We are excited to share the report with you [here](https://drive.google.com/file/d/1fCy1ynO78gJLCNbqBruzHx7bh72Tu-q2/view?usp=sharing) in which you can learn about the findings and the approach used. Working with the SigmaPrime team was an absolute delight, they were thorough and very communicative throughout the entire audit, which enabled the drand team to quickly solve the issues as they were found.

### Code quality, refactor & testing

Improved development practices, including a testnet for pre-deployment evaluation of new versions and greatly increased code coverage, as well as linting and regression testing.

General improvements to the codebase, with over 400 merged pull requests in the last couple months.

With these changes, drand got the upgrades it needed to become  a reliable production environment.

## New website & logo

We built this website to be the drand community's primary repository for the growing body of documentation about drand. We also want this to be the new home for the drand community of developers, operators, and end-users. We'll use it to host our blog and share important updates and news about the project.

In addition to a new site, we also created a logo for the drand project, which you can see at the top of this post or [download the logo kit](/drand-logo-kit.zip).

## The League of Entropy main network (LoE Mainnet) becomes a production service

The true power of drand comes not from its implementation but from a strong, decentralized network of independent nodes contributing to the randomness generation. In addition to significant protocol upgrades, we also strengthened the League of Entropy.

In 2019, Cloudflare, EPFL, the University of Chile, Kudelski Security, and Protocol Labs came together to start the League of Entropy and run the drand network. Since then, the group has expanded to include partners in six countries, spanning the spectrum from universities to infrastructure companies. 

### New League of Entropy partners

With the LoE Main Network upgrade, a set of new partners joined the league to increase its robustness and quality of service. The current set of members include:

* [C4DT](https://www.c4dt.org)
* [ChainSafe](https://chainsafe.io/)
* [cLabs](https://celo.org/about)
* [Cloudflare](https://www.cloudflare.com/)
* [Emerald Onion](https://emeraldonion.org/)
* [EPFL](https://www.epfl.ch/labs/dedis/)
* [Ethereum Foundation](https://ethereum.foundation/)
* [IC3](https://www.initc3.org/)
* [Kudelski Security](https://www.kudelskisecurity.com/)
* [Protocol Labs](https://protocol.ai/)
* [PTisp](https://ptisp.pt/)
* [Tierion](https://tierion.com/)
* [UCL](https://www.ucl.ac.uk/)
* [University of Chile](https://www.uchile.cl)

More partners have signed up to join soon, and we'll keep growing the network over the years to come.

### League of Entropy's governance

Our changes start with the drand community. drand's strength and resilience are ensured by the number and diversity of its nodes. But a key requirement for the overall security of the network is that no single entity retains complete and centralized control over the drand network. This calls for an explicit and decentralized governance model for the drand community of operators. So one of the first changes was to draft a new model of collaborative governance for the League of Entropy – the consortium supporting and sustaining the drand network.

With this new governance model, we've established the rules and requirements that the League of Entropy needs in order to maintain a high level of network security, ensure that the League operates effectively, and establish the right conditions for ongoing improvement to the production quality of drand. We've also laid down the procedures for adding new members to the League of Entropy in an equitable, fair, and decentralized way. All told, we think these changes set up the drand project for continued success as we find new users and implement new features.

## Filecoin becomes drand's first high-profile production user
 
In this first post to our new website, we've talked about the changes and upgrades we're making to realize the future of drand as a production-ready service. We're thrilled to report that the Filecoin project at Protocol Labs has [announced](https://filecoin.io/blog/filecoin-testnet-phase-2-is-here/) they are adopting drand as the source of unbiased randomness for leader election on the Filecoin blockchain. Filecoin has thus become the first known production user of drand!  

This is a huge announcement that couldn't come at a better time. One of the most promising production use cases of drand is in the blockchain space. Filecoin is already a cutting-edge blockchain-based technology, and its incorporation of drand as its preferred randomness source will power some incredible innovation, testing, and development for the drand network. We're excited for what the future holds for both Filecoin and drand. 

That's all for now, but there will be more to come in the weeks and months ahead. We hope you'll join us again at drand's new online home to hear about the next round of news and updates to the project. 

## One last announcement: Join us on August 13 for The Randomness Summit

To help celebrate this exciting launch, the drand team, ETHGlobal, Protocol Labs Research, and ResNetLab are pleased to announce a [one-day virtual summit](https://randomness2020.com/) on state of the art and future directions for randomness beacons.  

[Register now](https://airtable.com/shrTsIV4Btd8Wugqb) to learn from top cryptographers and randomness beacon experts, League of Entropy partners, and drand developers. The Ethereum and Filecoin project leads will also be talking about the critical role of randomness in the operation of their networks.

That’s all for now, but there will be more to come in the weeks and months ahead. We hope you’ll join us at drand’s new online home to stay informed of future news and updates to the project. 
