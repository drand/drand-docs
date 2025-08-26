---
id: dev-guide-http-api
title: "Our HTTP API"
description: The easiest way to get drand randomness, using our HTTP(s) API endpoints.
slug: developer/http-api
---

Our HTTP API has two version: a legacy one, v1, and a newer REST based API, v2. Checkout:
 - our [v1 HTTP API documentation](./API%20Documentation%20v1/drand-http-api.info.mdx)
 - our [v2 HTTP API documentation](./API%20Documentation%20v2/drand-http-api.info.mdx)

Currently only the `drand.sh` HTTP relays are supporting the v2 API. All relays do support the v1.
The public League of Entropy drand mainnet endpoints are:

 - https://api.drand.sh (HTTPS endpoint, also available over HTTP)
 - https://api2.drand.sh (HTTPS endpoint, also available over HTTP)
 - https://api3.drand.sh (HTTPS endpoint, also available over HTTP)
 - https://drand.cloudflare.com (HTTPS endpoint)
 - https://api.drand.secureweb3.com:6875 (HTTPS endpoint)

The easiest way to try them out is with `curl`:

```bash
$ curl api.drand.sh/public/latest
{"round":5347804,"randomness":"a87619810b1b41e70a01b8f903cf69977e026f80d9fd5e4c197c298a96c61cfe","signature":"92daf5745411a415b539caebda0b523fa20d4d12b28eb2fe427decdf5dcc976046a9c83b54f1db991fa191ffca8fcbdc07563036664f6ba47dcf00593559286f667574f6b0a2ba0be2683463b5bf3472e5696ac28b75d5b2223dbb98a56c96a3","previous_signature":"b01091c60b2b1a7c1f7a79610cd94e0c06e93bd305cf04229fe1571669257d16583a02e4038fdd755e6c39944b0116e30256874eede733a79c5e72c787db3889a1678c4ea6423b467de56208c5bd8e10cc090b6e0429f7f33653086a089cc3f8"}
```

or to have a nicer output, using the v2 and `jq`:

```bash
$ curl -s api.drand.sh/v2/beacons/quicknet/rounds/42 | jq
{
  "round": 42,
  "signature": "95a9f9f5b231b7714de1553105d8ffdf3dcda24cfdb1e689319bccf79a9c8ce430a91b811fbfaf763900bc998b5d686a"
}
```

Our [client libraries](./03-Client_Libraries.mdx) all support fetching beacons from these relays, as well as verifying the beacons' signatures which is very important to rely on the verifiability properties of drand.
