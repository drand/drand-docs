---
id: 3-0-getting-started
title: 3.0 Getting Started - Dev
description: Guidance for developers seeking to use drand.
---
# 3.0 Getting Started - Developers

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
⚠️ Note that ** [the`fastnet`](/blog/fastnet-to-be-sunset) [network has been deprecated](/blog/fastnet-to-be-sunset). **

</aside>

In order to retrieve randomness from a drand network you should **preferentially use the [drand client libraries](3-3-dev-guide-client-libraries) or the [drand-client CLI](3-2-dev-guide-drand-client-cli)**, which support the different mechanisms and perform verification for every value obtained.

Alternatively, you can interact directly with the endpoints. Make sure to manually verify every value:

- [**HTTP API reference**](3-4-dev-guide-http-api)
- [PubSub-based randomness distribution](3-5-dev-guide-pubsub-network)
- gRPC API: usually not publicly accessible. A gRPC API is supported by the drand client libraries, the `drand-client` CLI application and the [**drand application**](../ops-guide/4-5-ops-guide-command-line-tools) itself (using `drand get public`).

Finally, for development purposes, we recommend also testing your code against our Testnet endpoints. See [**our dedicated documentation entry about testnet endpoints**](3-4-dev-guide-http-api).

---
