---
title: "Timelock Encryption is now supported on drand mainnet"
description: "Following the launch of a new `fastnet` mainnet network on March 1st, 2023, we are proud to announce general availability of Timelock Encryption!"
date: 2023-03-28
author: Yolan Romailler, Nicolas Gailly
tags:
    - Features
    - News
    - Conferences and Events
---
Following the launch of a new `fastnet` mainnet network on March 1st, 2023, we are proud to announce general availability of Timelock Encryption!
<!-- truncate -->

The drand team has been busy during the past year working on delivering an exciting new feature: **Timelock Encryption**. Timelock encryption enables you to encrypt a message that cannot be decrypted by anyone until a specified time in the future.

You might have heard about it from us already, since we were proud to present not just one, but three new open-source projects in August 2022 bringing a new very exciting feature called “timelock encryption” to our drand testnet! 

Well, wait no more: we have now finally reached “General Availability” and our *audited* Timelock Encryption scheme is **now compatible with the drand mainnet**, thanks to our newly launched `fastnet` network which we’ll discuss quickly in this post as well.

Thanks to the team's work, you can now use these features in many ways:

- [Our Timevault web-demo](https://timevault.drand.love/) using `tlock-js` to perform timelock encryption easily in your browser, locally.- `tlock`, a [Go library doing Timelock encryption](https://github.com/drand/tlock/) by relying on drand’s beacon signatures, along with `tle` - a CLI tool allowing you to use timelock encryption just like you would use `gpg` or `age`.
- `tlock-js`, a [TS library doing the same](https://github.com/drand/tlock-js/) for your browser apps.
- Using the unchained drand beacons from our new `fastnet` network: https://api.drand.sh/dbd506d6ef76e5f386f41c651dcb808c5bcbd75471cc4eafa3f4df7ad4e4c493/public/latest 

These were already [presented at DEF CON](https://www.youtube.com/watch?t=1652&v=IW7sdSd2wOQ&feature=youtu.be) when we launched them on our testnet. Check the talk if you want more details about possible applications and the history behind Timelock Encryption. 

More recently, we released a [pre-print paper](https://eprint.iacr.org/2023/189) explaining the details of our timelock scheme and we have a talk scheduled at Real World Crypto tomorrow, on March 29th, 2023 where we’ll explain more in depth how **we transformed the League of Entropy** and drand into the first practical **Timelock Encryption service** globally available with a **100% uptime history** over the past 3 years!

But for today let’s first see what this “Timelock Encryption” we’re talking about is. 

P.S.: If this has piqued your interest and you’d rather watch a video about how this works, you can also find more technical explanations about what is coming next in this [Research Seminar](https://www.youtube.com/watch?v=Zgsv4LY0Sn0) that we gave in September!

## Timelock Encryption

### drand background

In order to understand how the system works, we need to first recall a few things about how drand functions…

First things first, let’s recall that `drand`, which stands for “**distributed randomness**” (and thus pronounced “dee-rand”), is our very own [open-source software](https://github.com/drand/drand) meant to create distributed randomness networks. These networks emit **random “beacons” at a given frequency** in a way that you never need to trust any single party in the network, and can ***verify*** that you actually have random values as long as you trust there is **never a threshold number of malicious parties** in the network, thus the security of the threshold BLS signature scheme holds.

To accomplish this drand relies on the threshold BLS signature scheme and its security proof that tells us BLS signatures are indistinguishable from random ones (in the group of all possible signatures). At each epoch, the members of a drand network work together to create an aggregated BLS signature on the message **m = H(round)}**. An important point here for what comes next is that the **message is predictable** according to the target round at a time T (in other words, there is a mapping between time and round numbers, since the network operates at a fixed frequency), when we’re using drand in the so-called unchained mode that [we presented in a post last year](https://drand.love/blog/2022/02/21/multi-frequency-support-and-timelock-encryption-capabilities/#unchained-randomness-timed-encryption).

You can learn more about drand and how it works under the hood in our documentation: [https://drand.love/docs/cryptography/](https://drand.love/docs/cryptography/) 

### The League of Entropy

The League of Entropy is a consortium of organisations that decided, back in 2019, to start running a global drand network in order to provide free, unbiased, and verifiable public randomness for anyone to use. Since 2019, the League has been growing steadily, with new members joining it regularly and thus increasing the security and trust we can have in the League. You can read more about the League on Cloudflare’s website: [https://www.cloudflare.com/leagueofentropy/](https://www.cloudflare.com/leagueofentropy/)

As of March 2023, the League is constituted of over 21 drand nodes operated by 18 organisations, with a threshold of over 50%, and you can follow our blog to see when new partners are joining the League: [https://drand.love/blog/](https://drand.love/blog/)

In case you were worried after reading our paper, know that whenever new members join the League, we conduct a so-called “resharing” of the League’s group secret key using verifiable secret sharing. This means that **the public keys of the drand networks we run never change** and it is not going to cause an incompatibility issue with our timelock scheme. 

### Our “timed release encryption” scheme

Our timelock scheme, also sometimes called a “timed release encryption” (TRE) scheme, is a direct application of the [Identity Based Encryption scheme](https://crypto.stanford.edu/~dabo/papers/bfibe.pdf) (IBE) from Boneh et al. (section 4.2) to the threshold BLS signature setting of drand.  

In IBE, participants are referred to via their **identity** which can be an email, a name, etc. and anyone can encrypt a message to any identity, even if the recipient is not “registered” with the system. This works because there is a Private Key Generator (PKG) service that distributes the required secret keys to participants depending on their identity.

As it turns out, the League of Entropy is basically acting as a **“Distributed PKG” network** because they’re using the BLS scheme to sign messages and, (as already denoted in the initial 2001 IBE paper), the decryption keys of their IBE scheme can be used as signatures over a given identity, which is exactly what the BLS scheme is accomplishing. 

Moreover, it uses **the round number as the identity**, **and the corresponding signature becomes the private key to decrypt.** In short:

Public key = **round number**

Private key = **signature over the round number**

Given this, the flow is as follows:

- Anyone can encrypt a message towards a specific round X in advance
- When the time has come, the network will generate the BLS signature (i.e. the *private key)* and release it publicly
- Anybody can retrieve the BLS signature of the beacon produced at round X and decrypt any message that was encrypted towards that round X.

For more technical information about how this works, you can **check our pre-print paper** about our Timelock Encryption scheme on ePrint [here](https://eprint.iacr.org/2023/189).

## Hybrid encryption

Because our timed release encryption scheme allows users to **encrypt a fixed sized message**, and also to achieve better performance in general, it relies on “**Hybrid encryption**” to encrypt arbitrary data more easily. Hybrid encryption means that we are using an asymmetric encryption scheme to **encrypt a Data Encryption Key (DEK)** used to subsequently encrypt the actual data we want to transmit with a symmetric encryption scheme. This is commonly known as “wrapping a key”, and it's how modern public key encryption schemes function to encrypt more data than their “block size”. It has the benefit of being much faster than doing asymmetric encryption of each chunk of data. Typically, the DEK is an AES or ChaCha key, both being blazingly fast symmetric encryption schemes compared to the public key scheme used to encrypt the DEK.

Hybrid encryption also allows users to significantly reduce the size of a ciphertext meant for multiple recipients, since one only needs to wrap the DEK for different recipients while the bulk of the encrypted data remains the same for all recipients since it was encrypted with a single symmetric key.

In practice, we decided the easiest way to implement this was to rely on the existing [`age`](https://github.com/FiloSottile/age) library and tool to create new types of “recipients” and “identities” for it using our timelock scheme to wrap symmetric encryption keys. This is made easier with `age` through the notion of “stanzas”, data itself is encrypted using a `filekey` which is then encrypted (wrapped) using one or multiple stanzas following the battle-tested hybrid encryption technique. 

We tried to stay pretty close to the age-plugin format in order to possibly adapt this new scheme into a plugin, perhaps sometime in the future. Here is our custom tlock stanza:

```bash
-> tlock {roundnumber} {chainhash}
{timelocked-fileKey-for-given-roundnumber-and-chainhash}
```

## tlock

We have implemented the scheme in a **Golang library** [tlock](https://github.com/drand/tlock) and a **Typescript library** [tlock-js](https://github.com/drand/tlock-js).

For convenience, we have implemented: 

- **a web demo** at [https://timevault.drand.love/](https://timevault.drand.love/) using our tlock-js library
- **a CLI utility**  `tle` that you can find on the [tlock repo](https://github.com/drand/tlock#install-or-build-the-cli)

The `tlock` Go library is a pure Go library implemented on top of an implementation of [IBE in our Kyber library](https://github.com/drand/kyber/tree/master/encrypt/ibe) fork and instantiated using [kilic’s BLS12-381](https://github.com/kilic/bls12-381) elliptic curve library. The `tle` CLI tool is built following the same kind of flags as used in `age` itself. Here’s a quick demo using it:

![CLI gif demo](https://user-images.githubusercontent.com/181501/177999855-cc1cfef7-ee1c-4193-bea7-4ee2e689f2d1.svg)

The `tlock-js` is a pure Typescript implementation of timed encryption using the drand network.  Like the `tlock` Go library, it uses [Age encryption](http://age-encryption.org) under the hood to perform symmetric encryption on a given payload using [chacha20-poly1305](https://en.wikipedia.org/wiki/ChaCha20-Poly1305) and wraps the symmetric key using timelock encryption.  This ciphertext is then (optionally) encoded using ascii armor making it easy to move around and display - similar to what PGP and other utilities do.

The library only has a handful of dependencies: 

- some of the noble crypto libraries (the de facto standard for many algorithms in js/ts)
- Stablelib’s chacha20-poly1305 implementation
- a polyfill for node’s `Buffer`

It’s available on npm at [https://www.npmjs.com/package/tlock-js](https://www.npmjs.com/package/tlock-js) and github at [https://github.com/drand/tlock-js](https://github.com/drand/tlock-js) and is used by our [Timevault web demo](https://timevault.drand.love/)!

Finally, to ensure the best security guarantees possible to our users, we had both `tlock` and `tlock-js` go through a code assessment by a renowned cybersecurity company, which we’ll be releasing shortly as well.

# Our new `fastnet` network

The best part about our timelock solution is that it is live on our mainnet! You can try it in your browser here: [https://timevault.drand.love/](https://timevault.drand.love/) 

This is possible because the League of Entropy actually launched a new drand mainnet network, on March 1st, 2023: the `fastnet` 🏎️ network! 
It is readily available through our mainnet endpoints: [https://api.drand.sh/dbd506d6ef76e5f386f41c651dcb808c5bcbd75471cc4eafa3f4df7ad4e4c493/info](https://api.drand.sh/dbd506d6ef76e5f386f41c651dcb808c5bcbd75471cc4eafa3f4df7ad4e4c493/info)

```json
{
"public_key":"a0b862a7527fee3a731bcb59280ab6abd62d5c0b6ea03dc4ddf6612fdfc9d01f01c31542541771903475eb1ec6615f8d0df0b8b6dce385811d6dcf8cbefb8759e5e616a3dfd054c928940766d9a5b9db91e3b697e5d70a975181e007f87fca5e",
"period":3,
"genesis_time":1677685200,
"hash":"dbd506d6ef76e5f386f41c651dcb808c5bcbd75471cc4eafa3f4df7ad4e4c493",
"groupHash":"a81e9d63f614ccdb144b8ff79fbd4d5a2d22055c0bfe4ee9a8092003dab1c6c0",
"schemeID":"bls-unchained-on-g1",
"metadata":{"beaconID":"fastnet"}
}
```


It is running at a 3 second frequency, which is 10 times faster than our previous chained `default` mainnet network, and it uses G1 for signatures, which means its random beacons have signatures that are 50% smaller! It is also running in unchained mode, and thus enables timelock encryption on mainnet! 

You can start building your very own sealed-bid auction system on top of it, [do a timelocked responsible disclosure](https://research.kudelskisecurity.com/2023/02/22/releasing-a-timelocked-responsible-disclosure/), or use it as a [deadman’s switch by encrypting your bitcoin private key](https://gwern.net/self-decrypting#uses) with it and giving the timelocked ciphertext to your heirs, while having the full security of running on the League of Entropy mainnet instead of on our testnet, as was the case until now.

Expect another blog post in the coming months with more details about the G1/G2 swap in `fastnet`, and what it means for BLS signatures, and for the applications using drand beacons. (Hints: smaller footprint, better performance and, where applicable, much cheaper gas costs!)

## Related works

Our timelock work has already gathered significant interest from the community and we’re happy to report that there already exists:

- a [tlock-rs library](https://github.com/timoth-y/tlock-rs) prototype by [Timofey Luin](https://twitter.com/timoethey) supporting only the timelock part of our scheme without the hybrid encryption using age and not compatible with our `tle` tool. Timofey then used it to benchmark arithmetic circuits doing [verifiable timelock encryption](https://github.com/timoftime/zk-timelock) with Arkworks, cool stuff!
- the [tlock_age library](https://github.com/thibmeu/tlock-rs) by [Thibault Meunier](https://twitter.com/thibmeu), which started as a fork of the tlock-rs library adding age support to it and making it compatible with the age-based scheme implemented in our `tlock` and `tlock-js` libraries as well as in our `tle` tool. Thibault also changed the API significantly and is looking at migrating to a much faster Rust BLS12-381 implementation. If you’re looking at using timelock in Rust, search no more!
- a [CLI tool in Rust](https://github.com/thibmeu/drand-rs), called `dee` , also by [Thibault](https://twitter.com/thibmeu), that uses his library in order to be compatible with `tle` but that also has cool drand-related features to get verifiable, public randomness. It also has a different set of flags.

We are also aware of a few blockchain ecosystems that are currently looking into building on top of the BLS signatures emitted by the League of Entropy in order to achieve their own timed release encryption scheme. Stay tuned for more timelock-related news in the coming months!

---

Finally, don’t hesitate to [join our drand Slack Workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA) to discuss timelock encryption, or share with us your cool use cases for it, or follow us on our [newly created @drand_loe Twitter account](https://twitter.com/drand_loe) to stay tuned with the latest news from the drand team. Until next time!
