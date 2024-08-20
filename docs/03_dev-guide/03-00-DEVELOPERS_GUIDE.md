---
id: 3-0-dev-guide
title: 3.0 Developers Guide
description: Help for developers who wish to use drand.
---
# 3.0 DEVELOPERS GUIDE

This section helps developers build applications that use drand as a source of randomness. For help running your own drand network, see the guides under “For Operators” on the main menu of the site.

The current public [League of Entropy](https://leagueofentropy.org) drand mainnet API endpoints are:

- `https://api.drand.sh` (HTTPS endpoint, also available over HTTP)
- `https://api2.drand.sh` (HTTPS endpoint, also available over HTTP)
- `https://api3.drand.sh` (HTTPS endpoint, also available over HTTP)
- `https://drand.cloudflare.com` (HTTPS endpoint)
- `https://api.drand.secureweb3.com:6875` (HTTPS endpoint)
- `/dnsaddr/api.drand.sh` (1st-level libp2p gossipsub relay endpoint)
- `/dnsaddr/api2.drand.sh` (1st-level libp2p gossipsub relay endpoint)
- `/dnsaddr/api3.drand.sh` (1st-level libp2p gossipsub relay endpoint)

There are two networks on mainnet:

- `default` which is running the chained scheme with public keys on G1
- `quicknet` which is running the unchained scheme with public keys on G2

`default` network chain hash: `8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce`

`quicknet` network chain hash: `52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971`

<aside>
⚠️ Note that [**the `fastnet`](https://drand.love/blog/2023/07/03/fastnet-sunset-quicknet-new/) [network has been deprecated](https://www.notion.so/fastnet-to-be-sunset-long-live-quicknet-5d125025752146b5bc307c834435d49e?pvs=21).**

</aside>

In order to retrieve randomness from a drand network you should **preferentially use the [drand client libraries](3%203%20DevGuide%20Client%20Libraries%20164d2ce8c1b3489b99728a35ef774c2a.md) or the [drand-client CLI](3%202%20DevGuide%20drand-client%20CLI%208f2135d9f9b645d6ae70615f370a5b3d.md)**, which support the different mechanisms and perform verification for every value obtained.

Alternatively, you can interact directly with the endpoints. Make sure to manually verify every value:

- [**HTTP API reference**](3%204%20DevGuide%20HTTP%20API%2012e8a9712c5b4b77a52e2b42de1ac009.md)
- [PubSub-based randomness distribution](3%205%20DevGuide%20PubSub%20Network%20e6a528c07d8f4475a894948d1efb1c69.md)
- gRPC API: usually not publicly accessible. A gRPC API is supported by the drand client libraries, the `drand-client` CLI application and the [**drand application**](4%205%20DevOps%20Command-line%20Tools%20e00b58d6e74849d7bd425253cc673305.md) itself (using `drand get public`).

Finally, for development purposes, we recommend also testing your code against our Testnet endpoints. See [**our dedicated documentation entry about testnet endpoints**](3%204%20DevGuide%20HTTP%20API%2012e8a9712c5b4b77a52e2b42de1ac009.md).

---