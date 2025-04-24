---
id: concepts-timelock-encryption
title: "Timelock Encryption"
description: "An overview of how drand provides timelock encryption services"
slug: /docs/timelock-encryption/
---

# Timelock Encryption

## 🤔 **What is Timelock Encryption?**

Timelock encryption allows you to encrypt information now that can only be decrypted at a future time. Traditional methods have used either trusted third parties to store keys or proof of work, requiring users to perform computations to decrypt the information. Proof of work has become ineffective due to advancements in hardware and computational science, and it also wastes a lot of energy. Using a trusted third party avoids these issues but relies on trusting that party and hoping they aren't breached.

## 🕒 **How drand enables Timelock Encryption**

With the launch of our unchained scheme, drand supports a new paradigm for timelock encryption. drand acts as a reference clock: each drand round is mapped to a specific time, and network nodes share their signature over that round number once the time is reached. These signatures form a full randomness beacon, attesting that the network believes the clock time has been reached.

Our timelock scheme uses identity-based encryption to allow users to create ciphertexts using a future round's random value as the private key. The drand network won't release that randomness until the specified time, providing accurate timelock encryption without wasting energy or relying on a single third party. Users can decrypt their timelock ciphertext offline without needing a third party.

## 🎓 **Learn more about Timelock Encryption**

- [Our blog post announcing the new network and timelock encryption](https://drand.love/blog/timelock-encryption-is-now-supported-on-drand-mainnet)
- [**Yolan's talk at Real World Crypto on timelock encryption**](https://www.youtube.com/watch?v=Xh849Ij3lhU)
- [The Timelock Paper on ePrint](https://eprint.iacr.org/2023/189)
- [Our post about deprecating fastnet in favor of quicknet](https://drand.love/blog/fastnet-to-be-sunset)

## 🛡️ **Security Assumptions**

While our timelock scheme has been assessed by Kudelski Security, it's essential to understand its limitations:

- **Malicious Nodes**: If a threshold number of malicious nodes join the network, they could generate all future random values and decrypt future timelock ciphertexts. Our quicknet network started with 18 organizations running 22 nodes, minimizing this risk.
- **Quantum Resistance**: Our cryptography does not use quantum-resistant algorithms. If you encrypt something for 1000 years and a viable quantum computer emerges, it could decrypt it. Currently, no widespread quantum-resistant schemes exist for threshold identity-based encryption (IBE) cryptography.
- **Network Shutdown**: If the [League of Entropy](https://leagueofentropy.org) shuts down, members would delete their keys. This means ciphertexts created after the network's cessation would be un-decryptable until quantum computers can break them.

## 📋 **Use Cases**

Timelock encryption has various applications, including:

- Responsible vulnerability disclosures
- Transfer of assets/passwords upon death
- Sealed-bid auctions
- Maximal extractable value (MEV) prevention
- Public, turn-based games
- Voting
- Quizzes

Join our [Slack](https://join.slack.com/t/drandworkspace/shared_invite/zt-2p00bn43o-qALTK5RZEIK3I4fIO9h8dQ) and post your ideas in the #drand-use-cases channel for discussion!

## 🧮 **The Math behind Timelock Encryption**

**Encryption**: A client encrypts a message to be decrypted at a specific epoch by:

1. Computing the "round public key.”
2. Choosing a random "mask."
3. Setting the ephemeral secret key.
4. Outputting the ciphertext with the ephemeral public key, mask commitment, and one-time pad.

**Decryption**: A client decrypts a ciphertext using the epoch signature by:

1. Computing the necessary values.
2. Verifying the ciphertext.
3. Extracting the plaintext.

## 📚 Libraries for Timelock Encryption

- [**tlock**](https://github.com/drand/tlock): A Go CLI and library.
    - tlock is a go CLI and library developed and maintained by the drand team for performing timelock encryption and decryption.
- [**tlock-js**](https://github.com/drand/tlock-js): A JavaScript library written in Typescript.
    - tlock-js is a JavaScript library developed and maintained by the drand team for performing timelock encryption and decryption written in Typescript.
- [**dee**](https://github.com/thibmeu/drand-rs): A Rust CLI by Thibault Meunier from [Cloudflare](https://leagueofentropy.org/cloudflare/).
    - dee is a rust CLI developed and maintained by Thibault Meunier from [Cloudflare](https://leagueofentropy.org/cloudflare). It can perform timelock encryption and decryption, as well as retrieve beacons from any of the drand networks.
- [**timevault**](https://timevault.drand.love/): A web app for timelock encryption and decryption.
    - timevault is a web app for timelock encrypting and decrypting vulnerability reports for responsible disclosure as well as arbitrary text. It is developed and maintained by the drand team.
- **tlock-fvm**:
    - Timelock encryption and decryption will be available on the [**Filecoin Virtual Machine**](https://fvm.filecoin.io/). Stay tuned to our blog for updates!

---
