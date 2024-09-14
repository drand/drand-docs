---
slug: "quicknet-live-on-loe-mainnet"
title: "quicknet is live!"
description: "quicknet is live on League of Entropy mainnet"
authors: [yolan]
tags: [news]
date: 2023-10-15
---

## quicknet is live on League of Entropy mainnet

We are thrilled to announce the General Availability (GA) of our brand new `quicknet` drand network running on the `mainnet` nodes. This significant upgrade harnesses the capabilities of the new unchained randomness mode, enables timelock encryption in production, and delivers outputs at a much faster frequency of **3 seconds**!

The network has now been running without issues for a month and a half since its launch on August 23rd, and we’ve seen our first early adopters start transitioning to it successfully.

<!-- truncate -->

## 🌟 Key Features of `quicknet` drand Network

Keep reading to learn more details about the new features this network launch enables:

- **Unchained randomness mode:** This allows for **faster and simpler beacon verification**. Furthermore, unchained mode allows one to predict the message that will be signed in a future round (but nothing else), thus enabling “**timelock encryption**”!
- **Runs on the League of Entropy’s mainnet nodes:** Offers robustness, scalability, and reliability to our users. It runs on the same nodes that have been flawlessly delivering beacons every 30 seconds for the past 3 years without missing a beat.
- **3-second frequency:** Quicker generation compared to the legacy frequency, enabling faster applications, better UX, and higher throughput.
- **Shorter beacons:** Thanks to the G1-G2 swap that we’re detailing below, we’ve been able to cut our signatures’ size by 50%!

## The `quicknet` Details

We successfully launched the `quicknet-t` Testnet beacon chain on July 13th and more recently the `quicknet` one on our Mainnet on August 23rd.

They are both available on our HTTPS relays, just like the previous `default` network.

All available chains on a given relay can be queried using the `/chains` endpoint, e.g. [https://api.drand.sh/chains](https://api.drand.sh/chains) returns:

```jsx
[
  "dbd506d6ef76e5f386f41c651dcb808c5bcbd75471cc4eafa3f4df7ad4e4c493",
  "52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971",
  "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce"
]

```

which are the chain-hashes of the `fastnet`, `quicknet`, and `default` chains respectively.

The same holds for our testnet relays, e.g. [https://pl-us.testnet.drand.sh/chains](https://pl-us.testnet.drand.sh/chains) returns the following chains:

- `84b2234fb34e835dccd048255d7ad3194b81af7d978c3bf157e3469592ae4e02` our initial, `default` testnet launched in May 2020 and running in chained mode.
- `7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf` our G2 based unchained testnet, launched in May 2022 and *compatible with timelock on G2*.
- `f3827d772c155f95a9fda8901ddd59591a082df5ac6efe3a479ddb1f5eeb202c` our `testnet-g` unchained beacon chain, featuring our non-RFC compliant G1 signature scheme.
- `cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5` which is our latest `quicknet-t` network, featuring RFC compliant BLS12-381 G1 based BLS signatures!

Check our [DevGuide: HTTP API](https://www.notion.so/3-4-DevGuide-HTTP-API-12e8a9712c5b4b77a52e2b42de1ac009?pvs=21) for more information about our public endpoints!

## `quicknet-t`

You can always get more details about a given chain by querying its `{chainhash}/info` endpoint, e.g. [https://testnet-api.drand.cloudflare.com/cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5/info](https://testnet-api.drand.cloudflare.com/cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5/info) returns the `quicknet-t` details:

```jsx
{
  "public_key": "b15b65b46fb29104f6a4b5d1e11a8da6344463973d423661bb0804846a0ecd1ef93c25057f1c0baab2ac53e56c662b66072f6d84ee791a3382bfb055afab1e6a375538d8ffc451104ac971d2dc9b168e2d3246b0be2015969cbaac298f6502da",
  "period": 3,
  "genesis_time": 1689232296,
  "hash": "cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5",
  "groupHash": "40d49d910472d4adb1d67f65db8332f11b4284eecf05c05c5eacd5eef7d40e2d",
  "schemeID": "bls-unchained-g1-rfc9380",
  "metadata": { "beaconID": "quicknet-t" }
}

```

## `quicknet`

The same holds for our mainnet relays. Any given beacon chain information can be queried from our HTTP relays, e.g. [https://api.drand.sh/52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971/info](https://api.drand.sh/52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971/info) returns the `quicknet` details:

```jsx
{
  "public_key": "83cf0f2896adee7eb8b5f01fcad3912212c437e0073e911fb90022d3e760183c8c4b450b6a0a6c3ac6a5776a2d1064510d1fec758c921cc22b0e17e63aaf4bcb5ed66304de9cf809bd274ca73bab4af5a6e9c76a4bc09e76eae8991ef5ece45a",
  "period": 3,
  "genesis_time": 1692803367,
  "hash": "52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971",
  "groupHash": "f477d5c89f21a17c863a7f937c6a6d15859414d2be09cd448d4279af331c5d3e",
  "schemeID": "bls-unchained-g1-rfc9380",
  "metadata": { "beaconID": "quicknet" }
}

```

## Sun-setting of `fastnet`

If you've been following our blog, you'll remember our previous post about [Timelock Encryption is now supported on drand mainnet](Timelock%20Encryption%20is%20now%20supported%20on%20drand%20main%20327425b1e16d4c22aa0d785dbf1c5fbb.md) where we announced the launch of our new `fastnet` network that supported our timelock scheme. The League of Entropy launched this new drand network on March 1st, 2023. However, we quickly identified an issue with our BLS signatures on G1 that made them non-compliant with the Hash To Curve [RFC 9380](https://www.ietf.org/rfc/rfc9380.html) specification, as well as most BLS signatures implementations on G1 apart from ours. Therefore, we had to double down and launch the `quicknet` network to fix this issue.

We’ll be sun-setting `fastnet` in the coming months [as announced previously](https://drand.love/blog/2023/07/03/fastnet-sunset-quicknet-new/). We are currently going to scale down `fastnet` by another 3 nodes in November, and we’ll be shutting it down completely at the earliest opportunity. Please reach out to

us if this is a concern for you or your team.

> ℹ️ NOTE: The default chained beacon network remains available with its legacy frequency of 30s for those who require it. We might consider deprecating it at some point in the next 18 months, but nothing is set in stone yet.
> 

## Shoutout to the League of Entropy 🤝

Our decentralization journey wouldn't be possible without [The League of Entropy](https://www.notion.so/The-League-of-Entropy-1e76674b75e249699445799c5083fe78?pvs=21). We are delighted to share that all members in the League of Entropy are running the `quicknet` drand network alongside the `default` chained beacon network on the League’s network of 23 nodes.

A big shoutout to the League of Entropy for their invaluable contributions, running drand nodes for free for anyone to use whenever one needs public, verifiable randomness. Together, we're pioneering a faster, more decentralized future for randomness generation, with this new unchained network enabling a host of new possibilities for our users!

## Get Started 🚀

For developers and users eager to dive into the new `quicknet` drand network, our [official documentation](https://drand.love/developer/) provides detailed resources about using drand relays and beacons.

We also have a blog post about “[drand for beginners](https://drand.love/blog/2023/06/02/drand-explainer/)” that’s packed with useful information and another one about [using drand on-chain](https://drand.love/blog/2023/03/16/draffle/) with a demo lottery use-case running on the Filecoin Virtual Machine.

## G1 - G2 Swap

Let us see what the G1-G2 swap really means!

The BLS signature schemes operate on “pairing-friendly” elliptic curves. These curves typically define 3 groups that are of interest to the cryptographer: the group G1 and G2 and the so-called “target group” GT onto which a [pairing operation](https://en.wikipedia.org/wiki/Pairing-based_cryptography) will allow projecting points from the groups G1 and G2 in a bilinear manner.

In the current instantiations of drand networks, we’re relying on the pairing-friendly curve BLS12-381, whose groups G1 and G2 have points that can be encoded in 48 bytes and 96 bytes, respectively.

Therefore, it usually makes sense for BLS signatures to be instantiated with the **public key** over G1 and the **signatures** over G2, meaning *shorter* public keys but *longer* signatures. This is so because the BLS signature scheme allows for **signature aggregation**, which means we can aggregate multiple signatures for different public keys into a single aggregated signature that verifies against the many public keys. Using short public keys but long signatures minimizes the overall size of the data required for verification.

However, this does not apply to drand’s beacons since new ones are generated at a fixed frequency, each with its own signature. Therefore, it makes more sense for drand’s beacons to have shorter signatures and a longer group public key, since we cannot benefit from the aggregation capabilities of BLS signatures and the public key for a given group never changes, and can thus be stored only once, unlike the signatures which need to be stored for each single beacon.

This is the reason why it makes more sense given the way drand beacons work to have the public key of the group on G2 (i.e. be of size 96 bytes) and have the signatures of the beacons on the group G1 of BLS12-381 (i.e. be encoded into only 48 bytes).

This swap allowed us to **reduce the size of the drand beacons emitted by the new `quicknet` network by 50%**, as well as to **increase the performance and reduce the gas cost** of any on-chain operations pertaining to drand beacons produced by `quicknet`.

## Unchained Mode

We’ve introduced the notion of [unchained beacons](https://drand.love/blog/2022/02/21/multi-frequency-support-and-timelock-encryption-capabilities/#unchained-randomness-timed-encryption) last year on the blog already. But in essence, the new drand network brings a host of improvements aimed at enhancing the overall UX for drand users and developers. The 'unchained mode' means that new random beacons are entirely independent from previous ones, meaning that you can now perform stateless verification of a beacon, without having to keep a record of past beacons!

These enhancements are designed to make the drand network more robust, efficient, and user-friendly. They help in reducing the computational and storage load of our users, making drand more cost-effective and faster. The unchained nature of the beacons also means you can now decide to sample only one every 5 beacons to have a frequency of 15s or one every 20 beacons to have a frequency of 1 minute! This significantly improves flexibility and scalability for everyone.

We’re looking forward to your projects and ideas, don’t hesitate to [join our Slack workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA) to discuss these.

## Security Considerations

Finally, you might be wondering what these changes might mean from a **security** point of view. On that front, the guarantees of the League of Entropy (LoE) network remain the same:

- A random beacon **cannot be predicted** unless a threshold number of LoE nodes collude (current threshold is 12 out of 22 nodes; it should increase as the League of Entropy onboards new members).
- A random beacon **cannot be biased** by anybody unless the attacker is able to change the public key of the group, which should be hard-coded in your code.

The fact that the drand beacons are now **unchained** might give the *false impression* that they are *less secure* than the previous ***chained*** ones, however this is not the case:

- **Predictability:** An attacker controlling a threshold number of shares is able to predict any arbitrary round in the unchained setting, whereas they would need to compute all intermediary rounds to predict a given future round with the chained setting. *However*, controlling a threshold amount of shares at any point in time allows computation of the shared secret of the group, and nothing can prevent such an attacker having obtained the group secret from then computing all future chained rounds offline much faster than the existing network would have, leading to the same result as in the unchained case: complete predictability of all future rounds in case of a compromise of either scheme.
- **Bias:** All future beacons are entirely determined by two things: the initial Distributed Key Generation and their round number. This was already the case for the chained network and hasn’t changed with the unchained schemes. For a given distributed group public key, future rounds cannot be biased in any way after the initial Distributed Key Generation ceremony has been run.

We’ve also made sure our new Timelock Encryption service relying on our new `quicknet` network was [properly audited](https://drand.love/blog/2023/05/26/tlock-security-assessment/). We’ve got you covered!

## Extra Liveness!

From a **liveness** point of view, the way the drand nodes operate hasn’t changed and we are very happy to announce the availability of a new official HTTP relay run by [StorSwift](https://www.storswift.com/), a dear member of the League of Entropy. Their relay is reachable at [https://api.drand.secureweb3.com:6875](https://api.drand.secureweb3.com:6875/) and as you can see by querying [https://api.drand.secureweb3.com:6875/chains](https://api.drand.secureweb3.com:6875/chains), it provides access to both our mainnet `default` and mainnet `quicknet` beacons. It is also located in Asia.

As you can see, the League of Entropy’s and drand’s security, liveness, and availability are not impacted in any way by these changes - on the contrary.

## Onward!

That’s it, we’ve launched everything we need to allow you to start using Timelock Encryption or drand random beacons right now in your services! And actually, people do!

If you are already doing so, or plan on doing so, don’t hesitate to join our [drand Slack](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA), since we love hearing about what people are doing with what we’ve built!

Until next time! 😄

---
