---
title: "`fastnet` sunsetting dates are set"
description: "The drand fastnet network is being shut down. This post contains the dates and other important information."
date: 2024-09-14
author: Yolan Romailler
tags:
    - News
    - Update
    - League-of-Entropy
slug: /fastnet-to-be-sunset
---
If you’re currently using `fastnet` you must migrate to `quicknet` by October 31st 2024.
<!-- truncate -->
That's the TL;DR!.

## The Details

It’s been a little over a year since we [announced](https://drand.love/blog/fastnet-is-being-sunset-long-live-quicknet) that the League of Entropy `fastnet` Mainnet network would be discontinued.

It is being discontinued as it uses a Domain Separation Tag (DST) in its HashToCurve functions that is non-conformant to the HashToCurve [RFC9380](https://datatracker.ietf.org/doc/html/rfc9380) specification.

It is now time for us to finally decommission it, since our newer, RFC-conforming Mainnet network, `quicknet`, has been operating flawlessly.
Our biggest consumer (the Filecoin network) [recently started using it](https://github.com/drand/FIPs/blob/master/FIPS/fip-0063.md) rather than our older, less storage-efficient default one.

### Timeline

We will deprecate the `fastnet` network in gradual steps:

1. This post is the first step: we’re publicly announcing its deprecation timeline!
2. We will be performing so-called “scream tests” in September, starting on **September 30th** until the end of the month.
   This will translate in practice to stopping all of our HTTP(S) and Gossipsub relays from serving the beacons created by the network for small periods of time, starting with an hour and increasing up to a full day by mid-October.
   Our other relay partners Cloudflare and Storswift will be shutting down their `fastnet` relays in September in order to enable us to execute these scream tests.
   (As usual, note that you should not be relying on any specific relay but have some sort of fallback mechanism using all available relays if liveness is critical to your project.)
3. We will stop operating HTTP and Gossipsub relays for the `fastnet` network completely on **October 21st**. The nodes and the network itself will continue to run until November 6th.
4. On **November 6th**, the League of Entropy nodes running the `fastnet` network will stop operating it and **delete ALL secret key material** related to it, effectively preventing any future beacons being produced or the network restarting.

## Why a scream test?
The goal of a scream test is that any affected users should notice that the network is not being relayed anymore and should be able to take action to prevent any significant downtime of their own services.

Note that the network will continue to operate without disturbance during this time and all beacons that are meant to be produced in September and October will still be produced.

## Effect on timelocked ciphertexts

As you may know, the League of Entropy `fastnet` and `quicknet` networks both enable you to timelock messages that cannot be decrypted until a given beacon round has been emitted by the network. You can read more about timelock in [our documentation](https://docs.drand.love/docs/concepts/2-4-concepts-timelock-encryption).

The destruction of all key material related to the `fastnet` network has the unfortunate side-effect of preventing ciphertexts that were timelocked using it towards later dates to ever be decryptable.

The alternative to allow timelocked ciphertexts to be decryptable in the future would be to reveal all key material, however this would mean that ciphertexts not meant to be decrypted for years and years could be decrypted early, which would break the security guarantees that the League of Entropy timelock service, tlock, strives to achieve.

If you believe there would be value in having a timelock service with the guarantee that ciphertexts can be decrypted, even in the case of a network deprecation even if that means decrypting them too early, please come and discuss it with us on our Slack workspace.
If there is high demand, the League of Entropy could create a new network with the promise of revealing secret material should it ever need to shut it down.
However this is currently not the case for the `fastnet` and `quicknet` networks and therefore we prefer to destroy all key material.

## Wait, I’m using `fastnet`

If you are still using the `fastnet` network, we recommend you plan migrating to our `quicknet` network.

They are both operating with signatures on the smaller G1 group of BLS12-381, they are both enabling timelock encryption and they are both running with a period of 3 seconds.

There are only two gotchas with migrating to the `quicknet` network.

The first gotcha is that you will have to properly “map” which `quicknet` round corresponds to what “epoch” in your own systems, since the `fastnet` network is older and running at the same frequency as `quicknet`, you will be “re-using” the same round numbers as you’ve already used in `fastnet` for the next year or so.

If you were previously just using the drand rounds based on the genesis time and the current time, note that you might not have to change anything other than using the new genesis time and the new public key for the network.

The second one is that we’re now conforming to RFC9380 and using the correct DST on G1, so if you’ve re-implemented the cryptographic operations needed to verify signatures or do timelock encryption, you might have to change your code

Otherwise if you’re relying on one of our own libraries in [Go](https://github.com/drand/go-clients), [Typescript](https://github.com/drand/drand-client), or [Rust](https://github.com/randa-mu/drand-client-rs), as well as the third party rust libraries [drand-verify](https://github.com/noislabs/drand-verify/) or Rust client [dee](https://github.com/thibmeu/drand-rs), these already support the `quicknet` network.

If you need help or advice with migrating away from `fastnet` to `quicknet`, once again, don’t be shy: there are many members in the League of Entropy, and we’re always delighted to discuss with our users in our Slack workspace.
You can also reach us by email: `leagueofentropy@googlegroups.com`