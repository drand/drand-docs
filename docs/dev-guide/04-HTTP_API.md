---
id: dev-guide-http-api
title: "HTTP API"
description: A list of public endpoints, instructions how to fetch, explanation of results.
---
# drand HTTP API

drand provides a JSON HTTP interface that clients can use to fetch randomness from each drand network running on nodes. If you're using drand in an application, it may be easier and *more secure* to use one of the [**client libraries**](dev-guide-client-libraries), which will also perform *verification* of randomness rounds and add additional features like failover, racing, aggregation, and caching.

All that's required is the address of the HTTP interface and way to fetch from HTTP, e.g. `curl`.

## **Public endpoints**

The public [**League of Entropy**](http://leagueofentropy.org) HTTP APIs are available at:

- Protocol Labs
    - **`https://api.drand.sh/v2`**
    - **`https://api2.drand.sh/v2`**
    - **`https://api3.drand.sh/v2`**
- Cloudflare
    - **`https://drand.cloudflare.com/`**
- StorSwift
    - **`https://api.drand.secureweb3.com:6875/`**

The League of Entropy currently runs two networks in mainnet: `default` and `fastnet`. They are chained and unchained networks respectively, the details of which can be found in the [**cryptography specification**](../concepts/concepts-cryptography).

The chain hash for the League of Entropy `default` chain running at a 30s frequency in chained mode on Mainnet is:

```jsx
8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce
```

It also available at the default context, i.e. omitting the `/{chain-hash}` in the API specification below.

The chain hash for the League of Entropy `quicknet` network running at a 3s frequency in unchained mode on Mainnet is:

```jsx
52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971
```

Note that ** [the `fastnet` network has been deprecated.](https://drand.love/blog/fastnet-to-be-sunset) **

### **Testnet endpoints**

Furthermore, we have "testnet endpoints" which are a completely separate environment for testing our latest changes, potentially helping you detect breaking changes or issues with our latest release before they hit mainnet. We recommend running your CI/CD against our testnet endpoints as well as our mainnet ones, in order to detect issues early.

We currently have three testnet HTTP(S) endpoints being run by:

- Protocol Labs
    - [**https://pl-us.testnet.drand.sh/chains**](https://pl-us.testnet.drand.sh/chains)
    - [**https://pl-eu.testnet.drand.sh/chains**](https://pl-eu.testnet.drand.sh/chains)
- Cloudflare
    - [**https://testnet-api.drand.cloudflare.com/chains**](https://testnet-api.drand.cloudflare.com/chains)

As you can see, they are currently running various chains as explained below. We are committed to maintaining the `default`, G2 based, chained testnet chain (`84b2234fb34e835dccd048255d7ad3194b81af7d978c3bf157e3469592ae4e02`) as well as the faster, G1 based, unchained `quicknet-t` testnet chain (`cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5`) as long as we run the equivalent mainnet networks.

Other testnet chains, such as our first "unchained" testnet (`7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf`) or our first G1 based non-RFC compliant chain (`f3827d772c155f95a9fda8901ddd59591a082df5ac6efe3a479ddb1f5eeb202c`) may be deprecated in the future.

For details of the API Documentation, please refer to the [API Documentation](/docs/dev-guide/3.7%20API%20Documentation/drand-http-api).
