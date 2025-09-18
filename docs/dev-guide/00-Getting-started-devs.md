---
id: devs-getting-started
title: Getting Started
description: A guide for developers to get started with drand
slug: /developer/
---
# Getting Started - Developers

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

There are three networks on mainnet:

- `default` which is running the chained scheme with public keys on G1
- `quicknet` which is running the unchained scheme with public keys on G2
- `evmnet` which is running the unchained scheme with public keys on G2, using the BN254 curve instead of the BLS12-381, meaning it is compatible with EVM pre-compiles.

`default` network chain hash: `8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce`

`quicknet` network chain hash: `52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971`

`evmnet` network chain hash: `04f1e9062b8a81f848fded9c12306733282b2727ecced50032187751166ec8c3`

<aside>
⚠️ Note that ** [the`fastnet` network has been deprecated](https://drand.love/blog/fastnet-to-be-sunset). **

</aside>

In order to retrieve randomness from a drand network you should **preferentially use the [drand client libraries](./03-Client_Libraries.mdx)**, which support the different mechanisms and perform verification for every value obtained.

Alternatively, you can interact directly with the endpoints. Make sure to manually verify every value:

- [**HTTP API reference**](06-HTTP-API.md)
- [PubSub-based randomness distribution](./04-PubSub_Network_Integration.md)
- gRPC API: not publicly accessible anymore.

Finally, for development purposes, we recommend also testing your code against our Testnet endpoints. See [**our dedicated documentation entry about testnet endpoints**](./06-HTTP-API.md).

---
