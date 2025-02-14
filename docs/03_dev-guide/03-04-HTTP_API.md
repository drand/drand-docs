---
id: 3-4-dev-guide-http-api
title: "3.4 HTTP API"
description: A list of public endpoints, instructions how to fetch, explanation of results.
---
# 3.4 drand HTTP API

Drand provides a JSON HTTP interface that clients can use to fetch randomness from each drand network running on nodes. If you're using drand in an application, it may be easier and *more secure* to use one of the [**client libraries**](3-3-dev-guide-client-libraries), which will also perform *verification* of randomness rounds and add additional features like failover, racing, aggregation, and caching.

All that's required is the address of the HTTP interface and way to fetch from HTTP, e.g. `curl`.

## **Public endpoints**

The public [**League of Entropy**](http://leagueofentropy.org) HTTP APIs are available at:

- Protocol Labs
    - **`https://api.drand.sh/`**
    - **`https://api2.drand.sh/`**
    - **`https://api3.drand.sh/`**
- Cloudflare
    - **`https://drand.cloudflare.com/`**
- StorSwift
    - **`https://api.drand.secureweb3.com:6875/`**

The League of Entropy currently runs two networks in mainnet: `default` and `fastnet`. They are chained and unchained networks respectively, the details of which can be found in the [**cryptography specification**](../concepts/2-1-concepts-cryptography).

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

## **`/chains`**

Retrieves the *chain hash* of every running network a user can interact with. It returns a JSON object with the following structure:

```jsx
[
  "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",
  "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce",
  "8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84",
  "515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"
]
```

## **`/{chain-hash}/info`**

Retrieves the randomness chain information. It returns a JSON object with the following structure:

```jsx
{
  "public_key": "868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31",
  "period": 30,
  "genesis_time": 1595431050,
  "hash": "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",
  "groupHash": "176f93498eac9ca337150b46d21dd58673ea4e3581185f869672e59fa4cb390a",
  "schemeID": "pedersen-bls-chained",
  "metadata": {
    "beaconID": "default"
  }
}
```

- `public_key` is the distributed public key of the drand group
- `period` is the time in seconds between randomness beacon rounds
- `genesis_time` is the time in seconds since the Unix Epoch that the group began generating randomness
- `hash` is the *chain hash*, which uniquely identifies the drand chain. It is used as a root of trust for validation of the first round of randomness.
- `groupHash` is the hash of a file containing the current set of nodes participating in the network. The group file is updated on every resharing.
- `schemeID` is the name of the scheme this network uses. The scheme specifies the type of cryptography being used to generate the randomness beacons.
- `metadata` contains some miscellaneous metadata about the network that is added to most packets during operation.

## **`/{chain-hash}/public/latest`**

Retrieves the latest round of randomness. It returns a JSON object with the following structure:

```jsx
{
  "round": 367,
  "randomness": "3439d92d58e47d342131d446a3abe264396dd264717897af30525c98408c834f",
  "signature": "90957ebc0719f8bfb67640aff8ca219bf9f2c5240e60a8711c968d93370d38f87b38ed234a8c63863eb81f234efce55b047478848c0de025527b3d3476dfe860632c1b799550de50a6b9540463e9fb66c8016b89c04a9f52dabdc988e69463c1",
  "previous_signature": "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"
}
```

- `round` is a monotonically increasing integer - the randomness round index
- `randomness` is a SHA-256 hash of the signature
- `signature` is the *Boneh-Lynn-Shacham* (BLS) signature for this round of randomness
- `previous_signature` is the signature of the previous round of randomness

## **`/{chain-hash}/public/{round}`**

Retrieves a previous round of randomness identified by the positive integer `round`. Note that specifying `0` will retrieve the latest round. It returns a JSON object with the following structure:

```jsx
{
  "round": 367,
  "randomness": "3439d92d58e47d342131d446a3abe264396dd264717897af30525c98408c834f",
  "signature": "90957ebc0719f8bfb67640aff8ca219bf9f2c5240e60a8711c968d93370d38f87b38ed234a8c63863eb81f234efce55b047478848c0de025527b3d3476dfe860632c1b799550de50a6b9540463e9fb66c8016b89c04a9f52dabdc988e69463c1",
  "previous_signature": "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"
}
```

- `round` is a sequentially increasing integer - the randomness round index
- `randomness` is a SHA-256 hash of the signature
- `signature` is the *Boneh-Lynn-Shacham* (BLS) signature for this round of randomness
- `previous_signature` is the signature of the previous round of randomness (note: this will is omitted for [**unchained networks**](../concepts/2-1-concepts-cryptography#%EF%B8%8F-chained-and-unchained-modes)

**Note**: For backwards-compatibility reasons, paths without `chain-hash` will resort to the the default network in operation.

---
