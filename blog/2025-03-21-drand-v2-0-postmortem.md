---
title: "drand v2.0 security post-mortem"
description: "A gRPC control layer horror story, in production."
date: 2025-03-21
author: Patrick McClurg
tags:
    - News
    - League of Entropy
---
A gRPC control layer horror story, in production.
<!-- truncate -->
On February 18th 2025, we received a report from one of the League of Entropy members - @version513 from [Storswift](https://www.linkedin.com/company/storswift/) - that he had found a potential vulnerability in the drand software.
The Randamu team investigated the vulnerability report and issued a new version on February 19th as version [v2.1.0](https://github.com/drand/drand/releases/tag/v2.1.0) and began rolling it out to the League of Entropy.

The bug was introduced in the [version 2 release](https://github.com/drand/drand/releases/tag/v2.0.0) in June 2024, and while the potential impact of the vulnerability was very high, exploiting it would have been loud and immediately obvious to many stakeholders.
To that end we know it hasn't been exploited on any major installations of drand in the wild.

The bug itself was quite simple, though requires a little preamble to understand the context within drand.

drand maintains three different network planes for different purposes:

- A public API port for exposing drand randomness to the world (commonly set behind a cache)
- A private RPC port that's exposed to other members of the network (it should be firewalled to only those members for security)
- A local RPC port used as a control plane (should not be exposed to the outside world!)

To ensure a consistent interface and wire format, the RPCs are managed using gRPC and protobuf definitions. This takes the error-prone work of serialisation and deserialisation out of the developers' hands, and we have some CI checks to ensure common tasks such as updating dependencies don't break the interfaces.
In version 1, we maintained one gRPC interface for the private RPC port and another 'control' gRPC interface for the local RPC port.

In version 2, we introduced a new paradigm for processing gRPC packets for our distributed key generation (DKG) protocol, splitting them into commands and packets: commands coming from the node operator herself, and packets coming from other operators' nodes.

Our v2.0.0 gRPC service for that looked like this:

```protobuf
service DKGControl {
  rpc Command(DKGCommand) returns (EmptyDKGResponse){}
  rpc Packet(GossipPacket) returns (EmptyDKGResponse) {}
  rpc DKGStatus(DKGStatusRequest) returns (DKGStatusResponse) {}
  rpc BroadcastDKG(DKGPacket) returns (EmptyDKGResponse) {}
}
```

This small change combined both operator functionalities with network functionalities, meaning either:

- It would be hosted on the local port, and nodes would never be able to talk to each other during a DKG
- It would be hosted on the private port and nodes would be able to issue DKG commands to one another's nodes, from outside the network as they're within the allow list

In order to get the tests to pass, the gRPC service was hosted on the private port, allowing nodes to issue DKG commands on behalf of other nodes.
Being able to issue DKG commands on behalf of another node would allow a rogue operator to run successive resharing protocols to kick out other nodes, accepting the new group terms on other nodes’ behalf, and iteratively reduce the threshold value to just their nodes, allowing them to recover the group secret key for themselves.

This is *THE WORST KIND OF BAD: a full group private key recovery attack*.

The fix was simple: in drand v2.1.0, we separated the control and multi-party RPC interfaces for the DKG:

```protobuf
service DKGControl {
  rpc Command(DKGCommand) returns (EmptyDKGResponse){}
  rpc DKGStatus(DKGStatusRequest) returns (DKGStatusResponse) {}
}

service DKGPublic {
  rpc Packet(GossipPacket) returns (EmptyDKGResponse) {}
  rpc BroadcastDKG(DKGPacket) returns (EmptyDKGResponse) {}
}
```

and ensured the `DKGControl` service is only available on our control plane through local RPCs, while the `DKGPublic` service remained exposed on the private plane to other nodes in the network. 

***How did we allow this to happen?*** 

Simply stated, version 2 ended up being a huge refactor of the codebase spanning multiple months from 2022 until mid 2023, and pull requests were large and long-lived. While every line was reviewed, and the cryptography changes were even audited, it's easy to miss the forest from the trees in a 70,000 lines code review.
This goes to show that even with a large userbase, committed community, and a fuzzing setup, no project is guaranteed to be secure!

Going forward, we are no longer performing huge refactors anyway as drand is considered **feature complete**, and hope to raise funding for further security audits (let us know if you're interested in helping to finance one!). Public goods such as public verifiable randomness can be costly to maintain, and public good funding is a tricky thing. We'd also be delighted to constitute a bug bounty fund, but sadly haven't been able to so far.

A big thank you to @version513 from StorSwift, who has been working tirelessly on [an alternative implementation of drand in Rust](https://github.com/storswiftlabs/drand-rs), and in the course of doing so has been diving deep into the existing spec and Go implementation, helping to uncover issues like this one.
