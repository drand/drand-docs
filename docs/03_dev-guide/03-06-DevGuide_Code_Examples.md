---
id: 3-6-dev-guide-code-examples
title: "3.6 Code Examples"
description: Examples of how to integrate drand in various coding languages.
---
# 3.6 DevGuide: Code Examples

drand is easy to use with clients in Go and JavaScript as shown here. 

The HTTP API is how other languages can interact with drand. A Python example is provided below.

## Golang

1. First, [install Go][INSTALL_GO] if needed. With Homebrew the command is `brew install go`.

2. Then set up your project directory, the `main.go` file if you need it, and your `go.mod` file.
    ```bash
    mkdir myproject
    cd myproject
    touch main.go
    touch go.mod
    ```
3. Add the *drand* library to your `go.mod` file with:
    ```bash
    go mod init myproject
    go get github.com/drand/drand
    ```
4. We show a simple `main.go` illustrating how to instantiate a client and get randomness from drand.
```go
package main

import (
    "context"
    "encoding/hex"
    "fmt"
    "github.com/drand/drand/client"
    "github.com/drand/drand/client/http"
    "log"
)

var urls = []string{
    "https://api.drand.sh",         // Official drand API server
    "https://drand.cloudflare.com", // Cloudflare's drand API server
}

var chainHash, _ = hex.DecodeString("8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce")

func main() {
    c, err := client.New(
        client.From(http.ForURLs(urls, chainHash)...),
        client.WithChainHash(chainHash),
    )
    if err != nil {
    log.Fatalf("error creating client: %v", err)
    }
    
    rand, err := c.Get(context.Background(), 0)
    if err != nil {
        log.Fatalf("Failed to get randomness: %v", err)
    }

    fmt.Printf("drand randomness: %s\n", hex.EncodeToString(rand.Randomness()))
}
```

5. Then to run the code:
    ```bash
    go run main.go
    ```   
   or
    ```bash
    go build -o myproject main.go
    ./myproject
    ```
   This should output something like:
    ```bash
    drand randomness: d4ab1d7798a2aa7c9bc0d436088c72ca35b8e4a859cafda4f827b7b93905188d
   ```
   
## JavaScript

1. [Install Node.js][INSTALL_NODEJS] if needed. The Homebrew command is `brew install node`.

2. Set up your project directory, the `index.js` file if you need it, and your `package.json` file.
    ```bash
    mkdir myproject
    cd myproject
    mkdir src
    touch package.json 
    touch src/index.js
    ```
3. Add your `package.json` file like so:
```json
{
    "name": "myproject",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "type": "module",
    "scripts": {
        "start": "node src/index.js"
    },
    "private": true,
    "dependencies": {
        "drand-client": "^1.2.6"
    }
}
```
4. Install the drand Javascript client library `drand-client`:
    ```bash
    npm install -S drand-client
    ```
5. We show a simple `index.js` illustrating how to instantiate a client and get randomness from drand.
```javascript
import {FastestNodeClient, fetchBeacon, HttpCachingChain, HttpChainClient} from "drand-client";


const chainHash = '8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce' // (hex encoded)
const publicKey = '868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31' // (hex encoded)

const options = {
  disableBeaconVerification: false, // `true` disables checking of signatures on beacons - faster but insecure!!!
  noCache: false, // `true` disables caching when retrieving beacons for some providers
  chainVerificationParams: {chainHash, publicKey}  // these are optional, but recommended! They are compared for parity against the `/info` output of a given node
}

// shows creating a basic client for a specific node and getting randomness from that client
async function getRandomness() {
   const chain = new HttpCachingChain('https://api.drand.sh', options)
   const client = new HttpChainClient(chain, options)
   const beacon = await fetchBeacon(client)
   return beacon.randomness
}

// shows creating a client that finds the fastest node and gets randomness from that node
async function getRandomnessFastNode(){
   const urls = [
      'https://api.drand.sh',
      'https://drand.cloudflare.com'
   ]
   const client2 = new FastestNodeClient(urls, options)
   client2.start()
   const fastBeacon = await fetchBeacon(client2)
   client2.stop()
   return fastBeacon.randomness
}

getRandomness()
        .then((randomness) => console.log(`Randomness is: ${randomness}`))
        .catch((err) => console.error('error', err))

getRandomnessFastNode()
        .then((randomness) => console.log(`Randomness from fastest node is: ${randomness}`))
        .catch((err) => console.error('error', err))
```

6. Then you can run your project with `npm start` or `node src/index.js`. The output will look like:
   ```text
   Randomness from fastest node is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6
   Randomness is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6
   ```
   
## HTTP API

### Python (WIP)

This guide recommends you use Pyenv to manage Python versions as it simplifies the process.
It also recommends you use Pipenv for managing project dependencies for your Python project.

1. First, [install Pyenv][INSTALL_PYENV] with brew: `brew install pyenv`.
2. Then [install Pipenv][INSTALL_PIPENV] with `brew install pipenv`.
3. Then install Python 3.12.3 with Pipenv: `pyenv install 3.12.3`.
4. Set Python 3.12.3 to be in use globally with `pyenv global 3.12.3`.
5. Set up your project directory, dependency management Pipfile, and your Python module.
    ```bash
    mkdir myproject
    cd myproject
    touch main.py
    touch Pipfile
    ```
6. Add the `reqests` library to your `Pipfile`:
   ```bash
   pipenv install requests
   ```
7. Make an HTTP request to `https://pl-us.testnet.drand.sh/chains` to get the list of chains.

   Select the first chain and save it in a variable, say `chain-hash`.

   Sample JSON response:
   ```json
   [
   "84b2234fb34e835dccd048255d7ad3194b81af7d978c3bf157e3469592ae4e02",
   "cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5",
   "f3827d772c155f95a9fda8901ddd59591a082df5ac6efe3a479ddb1f5eeb202c",
   "7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf"
   ]
   ```

8. To get the chain information make an HTTP request to `f"https://pl-us.testnet.drand.sh/{chain-hash}/info"`

   Sample JSON response:
   ```json
   {
      "public_key": "8200fc249deb0148eb918d6e213980c5d01acd7fc251900d9260136da3b54836ce125172399ddc69c4e3e11429b62c11",
      "period": 3,
      "genesis_time": 1651677099,
      "hash": "7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf",
      "groupHash": "65083634d852ae169e21b6ce5f0410be9ed4cc679b9970236f7875cff667e13d",
      "schemeID": "pedersen-bls-unchained",
      "metadata": {
         "beaconID": "testnet-unchained-3s"
      }
   }   
   ```

9. 

### Postman Collection (WIP)

TBD
## LIB p2p Examples

### Goland WIP

[INSTALL_GO]: https://go.dev/doc/install
[INSTALL_NODEJS]: https://nodejs.org/en/download/package-manager
[INSTALL_PIPENV]: https://pipenv.pypa.io/en/latest/installation.html
[INSTALL_PYENV]: https://github.com/pyenv/pyenv?tab=readme-ov-file
