---
slug: "retro-drand-testnet-outage-2024-02-21"
title: "Retro on the drand testnet outage of Feb 21, 2024"
description: "Retro on the drand testnet outage of Feb 21, 2024"
authors: [yolan]
tags: [news, postmortem, ceremony]
date: 2024-02-22
---

## **TL;DR**
- Testnet fell behind for 45 minutes.
- The ceremony was aborted.
- Fallback to non-TLS on some nodes caused the network to fall behind.
- Bugs in migration paths and the state machine blocked the ceremony.
- We will re-run the ceremony asynchronously.
- Testnet has regained stability and is operating normally.

<!-- truncate --> 

## Background

On February 21, 2024, we had to abort our v2.0.2-testnet ceremony after encountering a series of bugs. The `default`, `testnet-g`, and `testnet-unchained-3s` networks were down for about 45 minutes, while `quicknet-t` remained relatively stable.

While it felt like a disaster, this is precisely why we have a testnet. It's better to face issues here than risk the 100% uptime of the mainnet!

### **Prior to the Ceremony**

We'll focus on the `default` network for the remainder of this post-mortem, though the issues generally applied to the other networks as well. The prior `default` ceremony was in May 2023, nearly a year before this incident. In that ceremony, 12 nodes participated, with a threshold of 7. Due to known, non-deterministic issues in the codebase, 2 nodes failed to complete the distributed key generation. This left the network with 10 operational nodes.

In a previous testnet upgrade (for `quicknet-t` on January 10, 2024), the network upgraded to v2.0.0-testnet. Due to API incompatibilities, nodes on this version couldn't connect to nodes older than v1.5.7. cLabs did not participate in this ceremony and failed to upgrade their node since, causing a fork from the rest of the network, leaving the default network with 9 operational nodes.

In preparation for the same ceremony, a new member of Ken Labs accidentally overwrote their `default` keypair with an erroneous command. We've since published a fix to prevent this. Coupled with reverse proxy issues, the Ken Labs node became inoperative, reducing the `default` network to 8 operational nodes—just 1 above the threshold and at risk of halting.

### **The Update Before the Ceremony**

Protocol Labs updated their nodes to v2.0.2-testnet first, and initially, everything looked fine.

IPFS Force soon reported issues starting their node due to a missing `SchemeName` when loading their key pair. They hadn't upgraded their node sequentially to v2.0.2-testnet, so their keys didn't contain all the correct fields. We quickly published v2.0.3-testnet, which included a simple patch, allowing IPFS Force to upgrade and start their node successfully.

As others started upgrading, we saw an uptick in `http2: frame too large` messages when connecting to some nodes, reported by Automata Network. Knowing Automata Network uses an nginx reverse proxy, we assumed it was related to misconfigured nginx gRPC proxies. We debugged with Automata Network, restarted the nodes, and the error disappeared temporarily.

As more nodes updated, they reported similar errors, and restarts no longer resolved the issues. Additionally, the `http2: frame too large` error inconsistently affected different nodes. Automata and QRL also reported `error reading server preface: EOF` when connecting to PL nodes.

The network stopped aggregating beacons as usual due to these connectivity issues. Periodic aggregations occurred, but not fast enough to catch up.

While debugging and assisting DIA data, we found their node had joined `quicknet-t` with the `TLS` field set to false. In v2.0.2-testnet, we removed TLS termination from the drand binary, expecting members to handle TLS via a reverse proxy. Our nodes connected to DIA over plaintext, which was unexpected but not a security issue (everything in drand is signed and verified).

This fallback to non-TLS connections explained the errors we saw. QRL logs confirmed their node dropped to non-TLS connections, causing the `http2: frame too large` and `error reading server preface: EOF` errors. We quickly shipped patch v2.0.4-testnet, and as nodes updated, the network began to recover.

### **The Ceremony**

After allowing the network to catch up, we proceeded with the leader's ceremony instructions but encountered an error.

During the first load of a daemon on v2.x after a v1.5.x ceremony, the group file migrates into the DKG database. This worked as expected, but a change in our signature scheme required fetching new signatures for participating nodes. An oversight caused even the keys for nodes leaving the network to attempt to fetch, leading to failures in generating a valid proposal.

To avoid further updates, we deployed a patched version to our leader node and generated a proposal successfully.

With the patched version, we initiated the resharing on the leader node but encountered an invalid packet signature error. Another node received our packet, attempted to gossip it, and the signature was deemed invalid. Despite our DKG database reporting a successful proposal, we were unsure of other nodes' states.

Facing time pressure, we decided to abort the DKG and retry. The leader can issue aborts unilaterally, and this packet gossiped without issue.

In hindsight, we should have asked other LoE members for their `drand dkg status` output to confirm receipt of the proposal. If all had received it, we could have continued the resharing.

After aborting, we attempted to restart the ceremony but faced another bug. Nodes keep copies of the last successful DKG state and the most recent interim state. Comparing the new proposal against the interim state, rather than the complete state, caused rejection by the leader node and other nodes.

We instructed LoE members to stop their nodes, run `drand dkg nuke --id default`, and restart their nodes, restoring the v1.5.x DKG state and refreshing the interim state. With some members unable to commit more time, we called off the ceremony.

### **Next Steps**

- Testnet LoE members who haven't run `drand dkg nuke --id default` should do so at their earliest convenience.
- The drand team will patch all identified issues and release a new version.
- The drand team will add additional testing for erroneous flows and DKG timeouts.
- We will instruct LoE members to upgrade more gradually ahead of any ceremony to identify issues sooner.
- We will perform an asynchronous testnet ceremony in the coming weeks.
- We will run a mainnet ceremony on v1.5.9 to ensure all required upgrade paths are met.

### **Final Thoughts**

This was not a good look for the drand team. Drand v2 has been in the pipeline for over a year, and this is the second aborted ceremony in a row. We owe an apology to the League of Entropy members for wasting their time. This shouldn’t happen.

After numerous ceremonies last year, everyone is experiencing ceremony fatigue. Mandating early or late participation is unsustainable. v2 promises fully asynchronous ceremonies, eliminating the need for everyone to be online at once. The leader can start the ceremony, and members can join anytime over a week.

Outages, especially in distributed systems, often result from multiple bugs in succession. This outage was no exception. In v2, many things changed, leading to a confluence of edge cases. We should have done many small releases instead of one large one.

Thank you to everyone who participated. We are continually impressed by the professionalism and engagement of League of Entropy members. Without you, we wouldn’t be running the flagship threshold network serving over a billion requests per month.

---
