---
title: "`fastnet` is being sunset, long live `quicknet`"
description: "After identifying a non-compliance issue with the BLS RFC on G1, we are launching a new RFC compliant quicknet network to replace fastnet."
date: 2023-07-03
author: Yolan Romailler
tags:
    - News
---
After identifying a non-compliance issue with the BLS RFC on G1, we are launching a new RFC compliant quicknet network to replace fastnet.
<!-- truncate -->

Last month, we have identified [a minor issue](https://github.com/drand/kyber-bls12381/issues/22) in our implementation of the BLS signature on G1 used in the newly launched `fastnet` network.  This is a RFC compliance issue which led us to plan the launch of a new compliant `quicknet` network and to spin down `fastnet` entirely by the end of the year.  

## The Issue

While not a *security issue* for drand, the problem is affecting our “hash to curve” function, used to map round numbers to a point on the elliptic curve that get signed using [threshold BLS](https://en.wikipedia.org/wiki/BLS_digital_signature) by the drand network. The issue relates to the upcoming Hash To Curve **[RFC 9380](https://www.rfc-editor.org/auth48/rfc9380)**, which mandates specific “Domain Separation Tags“ (DST) for certain curves. In the BLS curve case, where we have two different groups (G1 and G2) that we can map to, the RFC recommends using different DST for both groups (it’s the point of having a DST!). Sadly, our implementation of BLS signatures was initially written to perform signatures on G2 and not on G1… (Stay tuned for an upcoming blog post about the choice of the group for BLS signatures!) The usage of a global variable in our codebase for the DST meant that both our G1 and G2 implementations were sharing the same DST. Since we don’t have “official test vectors” for BLS signatures on G1 and G2, this went unnoticed until [someone tried](https://drandworkspace.slack.com/archives/C011JB8NU2E/p1683527867397549?thread_ts=1683197659.071499&cid=C011JB8NU2E) to verify our signatures done on G1 with a C++ implementation and reported the issue in our Slack.

We launched our `fastnet` Testnet in February to try and identify any potential issues, while also allowing people to start building their applications on top of our new design featuring [unchained randomness](https://drand.love/docs/cryptography/#randomness) and [timelock capabilities](https://drand.love/blog/2023/03/28/timelock-on-fastnet/). Despite this, the issue went unnoticed in all signature verification implementations that we tried with our drand beacons (including our typescript [drand-client](https://github.com/drand/drand-client) codebase and two different third party Rust implementations of drand verification!). Amusingly, within weeks of this issue being identified, a second team, building their own timelock scheme on top of our new `fastnet` network, also identified the issue and reported it to us.

For us, the main takeaways here are:

- Make sure to have as many test vectors as possible, generated using multiple, different implementations.
- Generate more noise and community outreach around new network launches, including new Testnets.
- Expect early adopters to take at least 2-3 months to start testing their implementations building on top of your new features, and therefore plan accordingly your Testnet and Mainnet launches.

## Next steps

This issue means that **all beacons** emitted for the new `fastnet` network that we launched on March 1st are featuring signatures that are non-compliant with the hash to curve spec, and so is the case for beacons from our testnet.

While not a *security* issue for our usage, using the wrong domain separator tag to map points on G1 is non-compliant with the RFC and therefore not great for future compatibility and adoption of our new network. We have [already implemented a new, RFC-compliant scheme](https://github.com/drand/drand/pull/1249) for drand, affectionately named `bls-unchained-g1-rfc9380`.

During investigations, we identified 4 main ways to solve this issue:

- **Do nothing and document the non-compliance** of the signatures on the drand website, however this would have caused significant friction for future adoption, reducing the usability and the developer experience of drand.
- **Create a new `quicknet` network and keep the existing `fastnet` network running**, causing a 90% increase of the load of our existing nodes, forcing us to increase our tech debt and maintenance burden but not disrupting any existing users. (The verifiability of drand beacons allows our users to re-use them or redistribute them without us knowing about it. This further means that we do not have visibility into our user-base, and therefore, getting in contact with them to notify them of a “`fastnet` shutdown” is not an option).
- **Create a new** `fastnet` **network (`quicknet`)** using a **compliant implementation** of the signature function and **shutdown** the existing non-compliant one immediately. This would inevitably cause our current `fastnet` users to be completely stranded and having to switch quickly to our new `quicknet` network, causing serious disruptions for our users.
- **Create a new** `quicknet` **network** using a **compliant implementation** of the signature function and **sunset** the existing one over multiple months before **shutting it down entirely**. This would allow our users to ensure 100% uptime of their services, while graciously migrating to the new network.

Given the above, the [League of Entropy](https://www.cloudflare.com/leagueofentropy) has voted and elected to choose the last option, using its governance process, and therefore will:

- **sunset** the current `fastnet` network, reduce the number of Mainnet nodes running it (from 21 with a **threshold of 11** to a committee of 14 with a **threshold of 8**), stop onboarding new nodes to it, and most importantly **stop it entirely** in December 2023.
- launch a new `quicknet` network with the same settings, e.g. 3 seconds frequency, 2 seconds catch-up period, [unchained randomness](https://drand.love/blog/2022/02/21/multi-frequency-support-and-timelock-encryption-capabilities/#unchained-randomness-timed-encryption) (thus compatible with timelock schemes), except it would be using our newly released `bls-unchained-g1-rfc9380` scheme which is RFC-compliant.
- do the same on our Testnet `testnet-g` network, shutting it down before Mainnet, in order to allow us to effectively test the shutdown scenario.

We are currently planning to launch these new `quicknet` networks in July on both our Testnet and Mainnet.

## Consequences

The biggest problem with shutting down our `fastnet` network, is that any usage of its public key to perform timelock encryption past the shutdown date will lead to ciphertexts that cannot be decrypted.  This is because the required beacon’s signature won’t be emitted by the network. This means that whoever used our timelock system with our `fastnet` network (or our `testnet-g` one) and set a decryption date after their shutdown date won’t be able to decrypt their ciphertexts.

For “classical” public randomness usage, switching to a new network does not affect the quality or verifiability of the randomness. 

## Recommendations

For “public verifiable randomness usage”, we recommend always having a way to transition to a new “beacon chain” easily shall the need arise. This means being able to switch to a new public key and starting to monitor a new chainhash at a given time.

If you are working on a **timelock**-based system relying on our `fastnet` be aware that you’ll need to either launch a new version of your application in July, or plan a way to transition to our new network, and that any ciphertexts meant for December, or later, on `fastnet` are not going to be decryptable after that point.  The League of Entropy members will be deleting their secret shares allowing them to perform the threshold operations required to produce valid signatures for the group. We recommend communicating to your users that they’ll need to re-issue any such ciphertexts using the new network if they want them to be decryptable after December 2023.

If you are using our `fastnet` for randomness, plan your transition to the new network by the end of Q3’2023.

Please, don’t hesitate to reach us (for example on [our Slack](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA)) in case you have any concerns or if your current `fastnet` usage cannot accommodate a shutdown of the `fastnet` network by the end of the year.

Stay tuned for more blog posts about the groups G1 and G2 and how to choose the right one when doing BLS signatures, as well as for the quicknet launch annoucement after our new upcoming Distributed Key Generation ceremony. See you on quicknet in July!
