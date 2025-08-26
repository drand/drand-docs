---
title: "Verifying the `quicknet` beacons on Ethereum"
description: "At long last!"
date: 2025-08-26
author: Julie Tyché Bettens
tags:
    - Beginner
    - Research
---
Let us explore together the effectiveness of EIP-2537 after the Pectra upgrade for onchain BLS signature verification.
<!-- truncate -->

The League of Entropy has been emitting `quicknet` random beacons for anyone to use for all their public verifiable randomness needs [since 2023](https://docs.drand.love/blog/2023/10/16/quicknet-is-live), and ever since we launched it people have been repeatedly asking us about how to verify drand beacons “onchain”, especially on Ethereum. Today we finally have everything we need to answer that question!

To make drand work, we need to use a mathematical construction known as a *pairing-friendly elliptic curve*. [You can read more about this in our documentation.](https://docs.drand.love/docs/cryptography/#pairing-based-cryptography) Nowadays, there are two main contenders to choose from: BN254 and BLS12-381. BN254 has the advantage of being supported by many blockchain networks because it is a bit older, whereas BLS12-381 offers better performance and higher security. Since our launch in 2020, drand has relied on BLS12-381, although the League of Entropy has also discreetly launched a special `evmnet` beacon in 2024 that uses BN254 to be compatible with more blockchain networks.

Earlier this year, the Ethereum network underwent an upgrade known as Prague-Electra, which brought among other things [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537). EIP-2357 allows using BLS12-381 efficiently in the Ethereum Virtual Machine. [Randamu team members have contributed to the discussion around this EIP](https://ethereum-magicians.org/t/eip-2537-bls12-precompile-discussion-thread/4187/52), and we were thrilled to see it land in production after years  being in the works.

As part of [Randamu](https://randa.mu/)'s ongoing research and development efforts, I set out to discover how beneficial these changes are to threshold networks seeking to interoperate with Ethereum and similar blockchain networks. To that end, I added BLS12-381 support to our onchain signature verification library using the latest version of the EVM. It is able to verify signatures originating from the League of Entropy's `quicknet`  beacon, as well as from a modified version of our own [dcipher network](https://dcipher.network/). I also added support for the [compressed representation of BLS12-381](https://github.com/zcash/librustzcash/blob/6e0364cd42a2b3d2b958a54771ef51a8db79dd29/pairing/src/bls12_381/README.md#serialization), which is used in drand quicknet.

This table compares the onchain costs of the three possible variants. Execution gas was measured using `forge snapshot`. Compared to BN254, BLS12-381 uses up to 20% less gas for verification. In uncompressed form, BLS12-381 signatures consume 50% more bandwidth. With compression however, signatures are 25% shorter than with BN254. The trade-off is that decompression must be performed onchain, which costs gas. As a result, using point compression is not optimal on Ethereum L1, but it may be beneficial on rollups, where data costs dominate.

| Pairing-friendly Curve | Gas cost of verification | Byte size of the signatures | Gas cost of calldata | Total gas cost |
| --- | --- | --- | --- | --- |
| BN254 (legacy option) | <span style={{color: "#fa383e"}}>158250</span> | 64 | 1024 | <span style={{color: "#fa383e"}}>159274</span> |
| BLS12-381 (modern option) without point compression | <span style={{color: "#00a400"}}>130028</span> | <span style={{color: "#fa383e"}}>96</span> | <span style={{color: "#fa383e"}}>1536</span> | <span style={{color: "#00a400"}}>131564</span> |
| BLS12-381 (modern option) with point compression | 139812 | <span style={{color: "#00a400"}}>48</span> | <span style={{color: "#00a400"}}>768</span> | 140580 |

## For the first time on Ethereum!

To wrap it up nicely, I deployed the code to Ethereum Mainnet as a proof-of-concept. I was then able to [verify quicknet round #20986100 in Ethereum block #23188016.](https://eth.blockscout.com/tx/0x3a57bd5d5e0389d03b08704b51882bcc45435808e1731a7899dee5cf2b707b3d?tab=index) As far as I am aware, this is a first. The implementation uses point compression in spite of the cost, to allow copying and pasting directly from the drand JSON API.

It's important to state that this contract **has not been audited by a third party firm** and **is not meant to be used or integrated in real use cases**. It is also relatively expensive when used on Ethereum L1.

We plan to use this technology in the near future, but in a different form and with a formal security audit.

This also does not mean that support for BN254 and `evmnet` will end abruptly. While we expect BLS12-381 to be gradually adopted, many blockchain networks only support BN254 today. Regarding `evmnet`, it is the League of Entropy who collectively will decide its fate, and for now there is no plan to wind it down as long as there is interest.

In closing, we invite you to check out our first-of-its-kind [open-source Solidity library](https://github.com/randa-mu/bls-solidity) for BLS12-381. Everyone can use drand for their verifiable randomness needs onchain or offchain without asking for permission, since we are providing it as a public good!

Come talk to us and the drand community about what you are building [on our Slack workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA) or give us a follow on [Twitter](https://x.com/randamuinc) or on [Bluesky](https://bsky.app/profile/randa.mu), or be among the first ones to follow our new [dcipher.network](https://x.com/dciphernetwork).
