---
title: "Cryptosat takes drand to space"
description: "So far, all of the nodes that participate in the League of Entropy’s drand network have been placed on Earth. But this has just changed! Temporarily for now, but hopefully, more permanently in the near future. Read on to find out all the details."
date: 2022-10-20
author: Yan Michalevsky, Yiannis Psaras, Yolan Romailler
tags: 
    - News
---
So far, all of the nodes that participate in the League of Entropy’s drand network have been placed on Earth. But this has just changed! Temporarily for now, but hopefully, more permanently in the near future. Read on to find out all the details.
<!-- truncate -->
![](/images/2022-10-20-cryptosat-takes-drand-to-space/cryptosat-blog-header3.png)

_drand is the next generation distributed randomness service. It requires several independent organizations to run a node that contributes a part of the randomness to the network. So far, all of the nodes that participate in the [League of Entropy’s](https://blog.cloudflare.com/league-of-entropy/) drand network have been placed on Earth. But this has just changed! Temporarily for now, but hopefully, more permanently in the near future. Read on to find out all the details._

## What is **Cryptosat**

[Cryptosat](http://cryptosat.io) builds and launches satellites that power blockchain and cryptographic protocols. Satellites are physically inaccessible and can serve as the most secure root-of-trust that guarantees the confidentiality and integrity of sensitive computations and data. Such tamper-proof satellites can serve numerous use-cases including transaction signing, trusted setups for cryptographic schemes, a randomness oracle, a time-oracle (VDF) and more.

## What is **drand**

drand is meant to be run by a network of nodes in order to produce verifiable, unpredictable and non-biasable random values. The primary drand network is operated by a group of partners known as the *League of Entropy* (LoE). The LoE currently consists of 16 independent member organizations located in several continents around the globe and operating 23 nodes in total across different cloud providers, data-centers and geographies.

drand is based on a cryptography model, called “Threshold Cryptography”. According to this model, a `threshold` number of “partial signatures” need to be collected from the different nodes in order to produce a valid signature for the whole group. In the LoE’s drand network the `threshold` is set to 50% of nodes +1, which gives a `threshold` of 12 for a 23-node network.

The random numbers produced by drand are:

- **Verifiable:** because anyone can verify that a random value was indeed produced by the LoE group by checking the signature and re-deriving the randomness from it themselves.
- **Unpredictable:** because a new random value can only be produced when a `threshold` number of parts (also called partials) of the final signature are collected and aggregated. Given that: i) there is no party running more than 3 nodes, ii) the`threshold` is well above 3, and iii) as long as there is not a `threshold` number of nodes colluding in the network, the nature of the cryptography ensures that the next random value is unpredictable by any single party.
- **Non-biasable:** because, again, due to the inherent properties of the threshold signature scheme used and the fact that LoE partners are independent organizations, it is impossible to influence any future random value without compromising a `threshold` number of nodes.

The LoE drand network has been running since August 2020, has produced more than 2M random values (emitted every 30 seconds) as of September 2022 and has had zero downtime.

## The experiment

On March 16th, 2022, Cryptosat has carried out a series of experiments aboard the International Space Station (ISS). These experiments tested the operational aspects of performing cryptographic operations from space, as a stepping stone towards running such operations in satellites. One important experiment was to run a drand node on a machine on the ISS and connect it to a drand node running on the ground.

First, the two nodes performed a Distributed Key Generation (DKG) procedure. Then, the pair of nodes started periodically producing a random beacon. The experiment established the feasibility of placing a drand node in space, despite operational complexities.

Latency between nodes plays an important role in the drand network (pretty much as with any other network) and satellite networks may incur increased latency and delays, due to the distance between terrestrial nodes and those on satellites. Spotty connectivity due “line-of-sight” requirements can cause satellite nodes to disappear and severe bandwidth fluctuations. 

*drand was never before tested under such circumstances.* The ISS experiment confirmed the feasibility of using the existing drand implementation on a space node, given unpredictable connectivity.
However, the ISS experiment provided only limited insight into long-term ongoing operation of a drand node in space, due to the very limited time-frame of the experiment (under an hour). Spotty connectivity needs to be further simulated prior to deploying drand on an actual satellite.

## Importance and next steps

**A signature from space:** any computer placed on Earth is vulnerable to physical force and penetration through physical access. As mentioned above, it is very difficult to simultaneously compromise `threshold` nodes and although LoE partners use the highest security standards, a node that operates from space is physically unreachable. This is why Cryptosat’s node, which operates from space is such an interesting addition to the League of Entropy.

The two teams plan to continue the collaboration and establish Cryptosat’s participation in the League of Entropy as a longer term commitment. Several things stand out from this vision.

1. First and foremost, having a node outside of physical reach improves even further the bias-resistance and resilience of the drand network and randomness service, as mentioned above.
2. Secondly, we will be able to test in the wild whether higher latencies influence any part of the operation of the drand randomness service. This includes the DKG itself, but also the aggregation of partials. This is part of a larger monitoring effort that the drand team at Protocol Labs has started recently - see more in our [recent blogpost](https://drand.love/blog/2022/08/26/observing-randomness/).
3. Thirdly, drand’s cryptographic operation is a great use case for Cryptosat’s endeavour to get cryptography into space! Running drand is generally lightweight in terms of CPU and bandwidth requirements, but has increased requirements in terms of availability. Stress-testing cryptographic operations in the wild helps Cryptosat focus on increasing availability and showcasing the progress on this dimension through a clear metric.
4. Finally, different users are concerned with different threat models. Some users are concerned about relying on a single source of truth and rely on decentralization. Others might be worried about advanced attackers with sufficient resources to compromise many nodes and might look to strengthen the security of those nodes. This is where Cryptosat, while participating in a distributed protocol, provides a node with unique security properties that can withstand a coordinated attack on multiple ground nodes. Users can then choose whether their use-case requires beacons produced with the participation of Cryptosat or not, based on their threat model.

## What’s next on our roadmap

In May 2022, [Cryptosat launched its first satellite](https://cointelegraph.com/news/cryptosat-s-first-nanosatellite-blasts-off-wednesday-on-spacex-rocket), Crypto1. While the ISS experiment constituted a valuable proof of concept for running drand in space, the real value comes from a truly physically isolated satellite that would support the drand protocol. Protocol Labs and Cryptosat are aiming to continue co-development towards a functional drand node running aboard a satellite. This requires some refactoring of the drand implementation to separate the cryptographic module that needs to run in space from the parts that communicate with other drand nodes.

As mentioned, the time-constrained ISS experiment doesn’t provide full insight into an ongoing operation of a node with spotty connectivity. We need to simulate a participant node that is only occasionally available to participate in beacon generation rounds. This would simulate the conditions of a satellite that is sometimes out of reach of any ground station.

The future is bright when it comes to this collaboration - not only for the two parties involved, but most importantly for the users of drand as a randomness service! Reach out if you have ideas on how to add further value to our upcoming experiments, or if you want to get involved and contribute to the drand’s vision. Make sure to join our [drand slack workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA), or reach out by email at: leagueofentropy [ at ] googlegroups.com.
