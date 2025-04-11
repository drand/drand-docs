---
title: "Post-mortem following testnet outage on 21st of February"
description: "The testnet network stopped producing randomness prior to the v2 ceremony, and we break down the reasons why"
date: 2024-02-23
author: Patrick McClurg
tags:
    - News
    - Post Mortem
    - Ceremony
---
The testnet network stopped producing randomness prior to the v2 ceremony, and we break down the reasons why.
<!-- truncate -->

On 2024-02-21, we aborted our v2.0.2-testnet ceremony after a series of bugs were identified in succession. The `default`, `testnet-g` and `testnet-unchained-3s` networks stopped for around 45mins in total, while `quicknet-t` remained relatively stable throughout.
There is a tl;dr at the bottom for those who want a quick update.

While it felt like a disaster, this is the reason we have a testnet - sometimes things go wrong, and it's better they go wrong in testnet than jeopardising the 100% uptime of mainnet! 


### Prior to the ceremony
We will focus on the `default` network for the remainer of the post-mortem, though issues affecting it can be generally applied to the other networks that stopped.
The previous `default` ceremony had taken place in May of 2023 - it had been nearly a year since its last resharing. 
In that ceremony, 12 nodes had taken part, with a threshold of 7. Due to known, non-deterministic issues in the codebase at that time, 2 nodes failed to complete the distributed key generation (DIA data and IPFS force). This left the network degraded, with 10 nodes operational.

In a previous testnet upgrade (for `quicknet-t` on 2024-01-10) the network upgraded to v2.0.0-testnet. Due to some API incompatibilities, nodes on this new version were unable to connect to nodes older than v1.5.7. 
cLabs did not take part in this ceremony and have failed to upgrade their node (or respond materially) since then. As a result, their node forked from the rest of the network leaving the default network with 9 operational nodes.

In preparation for the same ceremony, a new member of Ken Labs inadvertently overwrote their `default` keypair by running an erroneous command. We have since published a fix to make it harder to inadvertently overwrite a node's keypair without manually confirming it. This, coupled with reverse proxy issues rendered the ken labs node inoperative, bringing our total operational nodes on the `default` network to 8 - 1 node above threshold, and at risk of halting.

## The update before the ceremony
Protocol Labs updated our nodes to v2.0.2-testnet first and initially everything looked fine.

IPFSForce soon reported they had some issues starting their node due to a missing `SchemeName` when loading their keypair. We had added a upgrade paths to keys since v1.5.7, and they hadn't upgraded their node sequentially to v2.0.2-testnet, having been left out in the previous ceremony, so their keys did not contain all the correct fields.
We quickly published v2.0.3-testnet which contained a simple patch for this eventuality, and IPFSforce upgraded and were able to start their node successfully.

Once we published the version and others started upgrading, we saw an uptick in `http2: frame too large` messages when connecting to some nodes, reported by ATA network.
Having seen this error in previous ceremonies when connecting to users with misconfigured nginx grpc proxies, and knowing that ATA network use an nginx reverse proxy, we assumed it was related and started debugging with the ATA network team.
We restarted our nodes and the error connecting to ATA network disappeared, and we assumed that gRPC was keeping connections alive while other nodes restarted - we had refactored our gRPC layer extensively.

As other nodes began updating, they reported a similar error, and restarts were no longer alleviating it. Additionally, the `http2: frame too large` error seemed to inconsistently affect different nodes after updating.
Around the same time, ATA network and QRL reported a `error reading server preface: EOF` when connecting to PL nodes.

At this point, the network had stopped aggregating beacons as usual, as there were enough connectivity issues between nodes to fall below threshold. Periodically beacons were aggregated, but not fast enough to catch up.

While debugging this, and helping DIA data configure their node for joining, we identified that DIA data had successfully joined `quicknet-t` at a prior ceremony, despite their key's `TLS` field being set to false. 

In `v2.0.2-testnet` we had removed TLS termination capabilities from the drand binary, with the expectation that LoE members run a reverse proxy or similar in front of their nodes to handle TLS termination, and added a fallback mechanism to non-TLS connections to make our tests run easily. 

We noted that our nodes' connections to DIA data were indeed using this fallback mechanism, and we were connecting to it over plaintext. This was unexpected, though not a security issue (everything in drand is signed and verified, so malleability is not an issue).

Regardless, we had not intended for nodes in production to be falling back to non-TLS - this aligned with the `http2: frame too large` and `error reading server preface: EOF` errors we saw: nodes had received TLS packets but opened a non-TLS connection and vice-versa.
QRL sent us logs confirming that their node had dropped back to non-TLS connections for all other nodes, explaining the errors that were seen.
We quickly shipped a patch v2.0.4-testnet, and as nodes updated the network began to recover.

## The ceremony
After leaving a short time for the network to catch up, we proceeded with the leader's ceremony instructions.
While generating the proposal, we ran into an error.

On first load of a daemon on v2.x after having completed a v1.5.x ceremony, the group file is migrated into the DKG database. This worked as expected, though due to a change of our signature scheme before running a key resharing, the leader node was required to fetch a new signature over the public key for nodes taking part. An oversight in the code meant that even the keys for nodes leaving the network would attempt to be fetched, and failures here would fail to generate a valid proposal.

To avoid all nodes having to update for a third time, we deployed a patched version to our leader node and generated a proposal successfully.

With this patched version, we initiated the resharing on the leader node, but were immediately greeted with an error that we had received an invalid packet signature - specifically, another node had received our packet, attempted to gossip it to the network, and PL1's signature on that packet had been deemed invalid.
Though our DKG database reported that we had created a proposal successfully, we were unsure of the state of other nodes. 

Facing time pressure as our asia-based colleagues were already up past midnight, we decided to abort the DKG and retry. The leader can issue aborts unilaterally, and this packet seemed to be gossiped without an issue.

In hindsight, we should have asked other LoE members for the output of their `drand dkg status` command, and confirmed whether or not they had received a successful proposal.
Had they all successfully received the proposal, we could have continued the resharing, as gossip is only a backup mechanism for nodes that are not well connected to others (e.g. across regions) or that go down as the leader starts the resharing.

Having aborted the resharing on the leader, we attempted to restart the ceremony. Here, we encountered another bug. For each network, nodes keep a copy of the last successful DKG state, and the most recent interim state. We assume all nodes had a successful DKG (imported from v1.5.x and epoch 1) and a recent interim aborted state (sent by the leader during this ceremony and epoch 2).
When nodes receive a new DKG packet, they do some sanity checks on it such as: 

- all the nodes in the previous epoch are accounted for in the new state
- the epochs are monotonically increasing
- the leader is contained in the proposal
- signatures are correct and haven't changed since the previous epoch

If the DKG packet is a new proposal, it compares the information against the last successful DKG.
If the DKG packet is some interim state, it compares the information against the last interim state.
In the case of an abort, the new proposal's participants was being compared against the last interim state, rather than the last complete state, causing the new proposal to be rejected by the leader node (and would have been rejected by other nodes).
In this state, nodes would be unable to receive new proposals.

We instructed the LoE members to stop their nodes, run `drand dkg nuke --id default` and restart their nodes. This would have caused their v1.5.x DKG state to be restored and the interim state to be refreshed.
It was getting late for LoE members and some could not commit any more time to the effort, so we called off the ceremony.

## Next steps
- for testnet LoE members who have not yet run `drand dkg nuke --id default`, we advise they do so at their earliest convenience
- the drand team will patch all the issues identified and release a new version
- the drand team will add additional testing for flows that proved erroneous, as well as DKG timeouts
- we will instruct LoE members to upgrade more gradually ahead of any ceremony start to identify issues sooner
- we will perform an asynchronous tesntet ceremony in the coming weeks
- we will run a mainnet ceremony on v1.5.9 in order to ensure everybody has hit all the required upgrade paths

## Final thoughts
This was not a good look for the drand team. drand v2 has been in the pipeline for over a year and this is the second aborted ceremony in a row trying to get it into testnet.
Firstly, we owe an apology to the League of Entropy members whose time we've wasted in two failed ceremonies. This shouldn't happen. 

After running lots of ceremonies late last year, everybody is feeling ceremony fatigue, and mandating people get up very early or go to bed very late is not sustainable long term. 
v2 promises fully asynchronous ceremonies, and when it finally reaches mainnet there will no longer be a need for everybody to be online at a set time to wait for the magic to happen - the leader can start the ceremony and members can join the resharing at any time over a period of a week.

Like many outages, particularly in distributed systems, it's not a single bug that causes catastrophe, but a storm of multiple bugs together or in succession. This outage was no exception. In v2, a _lot_ of things have changed. This led to a confluence of edge cases, and in retrospect we should have done many small releases rather than one large one.

A final thank you to everybody who took part - we're continually impressed by the professionalism and engagement of League of Entropy members in operating and debugging the network. Without you all, we wouldn't be running the flagship threshold network serving over a billion requests per month.


## TL;DR
- testnet fell behind for 45 minutes
- the ceremony was aborted
- a fallback to non-TLS on some nodes caused the network to fall behind
- the ceremony was blocked by bugs in a migration path and the state machine after abort
- we will re-run the ceremony async
- testnet has regained stability and is operating normally
