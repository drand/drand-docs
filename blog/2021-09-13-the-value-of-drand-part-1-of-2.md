---
slug: "the-value-of-drand-part-1-of-2"
title: "The Value of drand (Part 1 of 2)"
authors: [yolan]
tags: [league-of-entropy]
date: 2021-09-13
---

*"We asked the League of Entropy members: “what’s the value of drand for you, and why do you support it?” Check out what they said!"*

<!-- truncate -->

[The League of Entropy](https://www.notion.so/The-League-of-Entropy-1e76674b75e249699445799c5083fe78?pvs=21) (LoE) is a consortium of independent, and diverse organizations that partner together to operate a decentralized, bias-resistant, publicly verifiable, and reliable randomness beacon, called **drand**! The consortium was originally formed in 2019, and is currently supported by 16 member organizations that includes: [Cloudflare](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Cloudflare%2012bbcd90be5f4e42af18599f65019e7e.md), [EPFL Decentralized & Distributed Systems Lab (DeDiS)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Decentralized%20&%20Distributed%20Systems%20Lab%20(DeDi%20e855b8f643d4475aa89a47252e6623d9.md), [Universidad de Chile](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Universidad%20de%20Chile%2027708a6027104c3ba708e2d8d7508a66.md), [Kudelski Security](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md), [Protocol Labs](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Protocol%20Labs%209e18324379574803918146d996c24df5.md), [ChainSafe Systems](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/ChainSafe%20Systems%20480ac8864a33408dae64fad706c38a8e.md), [c**·**Labs](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/c%C2%B7Labs%208125559f2fb44804b9e6ca63da70f6b6.md), [EPFL Center for Digital Trust (C4DT)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Center%20for%20Digital%20Trust%20(C4DT)%20dc94bcdadab64950aa1e6bc96cb1e39a.md), [Emerald Onion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Emerald%20Onion%20e22d8bdb07ef4198b283d0436bcc9cf4.md), [Ethereum Foundation](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Ethereum%20Foundation%20184fc01bc464488c9570eb543d6c386a.md), [PTisp](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/PTisp%20f8fa38c9c36d4b4bbbb40fe785e9ae12.md), [Tierion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Tierion%205b38e1b289f44e9d87498eddb788d38f.md), [University College London](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/University%20College%20London%20af818bec61a542daa950596f01fddf09.md), and [Quantum Resistant Ledger](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Quantum%20Resistant%20Ledger%20b3e60c968098435790c3718f85ed3057.md).

drand recently celebrated 1 year of undisrupted service, and completed 1M+ rounds of randomness (emitted at 30s intervals). You can read more about drand’s recent achievements in our recent [blog post](drand%20celebrates%20One%20Year%20as%20a%20Randomness%20Service!%20c66f0a909f034eae8f9bdc1b69d4014b.md).

As a free, and not-for-profit service, [The League of Entropy](https://www.notion.so/The-League-of-Entropy-1e76674b75e249699445799c5083fe78?pvs=21) (LoE) members believe in the value of randomness as a foundational Internet service, and commit resources in order to maintain, and operate the drand network for public use. In order to gain insights into the motivations, and vision for drand shared by the LoE members, we reached out to them with a few questions. In this blog post, we summarize answers shared by five members of the LoE (we will share responses from other members through future blog posts).

We hope you enjoy reading these insights, and come and join the LoE to grow and strengthen the network! The larger the LoE, the stronger the security, and reliability guarantees that drand provides, as any biasing attempt becomes significantly more difficult!

---

### **“Why is drand important as a protocol for the next generation of the Internet in your opinion?”**

[Cloudflare](../The-League-of-Entropy-1e76674b75e249699445799c5083fe78/League-Partners-89fecb56737044e5bdfbbb3f6864a422/Cloudflare-12bbcd90be5f4e42af18599f65019e7e.md): When the League of Entropy was founded the only available public randomness beacons were provided by individual entities, which require a strong trust model for applications and a potential single point of failure. Drand provides an elegant solution to this problem as a distributed, verifiable randomness beacon, allowing applications to only trust an uncorrupted threshold of parties in the system rather than a single entity. Trusted public randomness has many applications in the modern Internet; for example, it can help to provide auditability of lotteries or transparency in leader election processes.

[Kudelski Security](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md): For us, randomness is about fairness. When solutions are fair, they build trust among communities and participants. Public, verifiable randomness is a building block enabling fairness and trust for many protocols and blockchains.

[Quantum Resistant Ledger](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Quantum%20Resistant%20Ledger%20b3e60c968098435790c3718f85ed3057.md): We see decentralization of all aspects of society as crucial to the evolution of a globalized world. Randomness, the hidden component of so many systems, plays a key role in security and trust.

[EPFL Decentralized & Distributed Systems Lab (DeDiS)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Decentralized%20&%20Distributed%20Systems%20Lab%20(DeDi%20e855b8f643d4475aa89a47252e6623d9.md): The quality of the random numbers used in cryptographic systems directly impacts on the security of a system. Randomness plays a key role in establishing secure connections, generating cryptographic key pairs and system’s authentication. As an Internet infrastructure level service, Drand can provide true, verifiable randomness to applications.

[Tierion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Tierion%205b38e1b289f44e9d87498eddb788d38f.md): Security and trust are fundamental to a free and open Internet. Drand helps developers build secure systems that don’t rely on trusted authorities.

---

### **“Why did you decide to join the League of Entropy? What value do you see in drand that is important for your mission (what convinced you to join)?”**

[Cloudflare](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Cloudflare%2012bbcd90be5f4e42af18599f65019e7e.md): Cloudflare is on a mission to help build a better Internet, and that means making it more secure, fast, and reliable for everyone. We see drand and the League of Entropy as foundational Internet infrastructure, and with that we are committed to supporting the project. We aim to be on the forefront of deploying next-generation cryptographic protocols and are excited to support this application of threshold cryptography that solves a real-world problem.

[Kudelski Security](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md): We come at this from a bit of a different angle. We are a group of cryptographers who help customers secure their systems. This work involves everything from complex cryptography to public blockchains. In our work, we see lots of customers having a difficult time handling randomness in their applications. This is dangerous because randomness underpins the security of so many cryptographic functions. This makes us obsessed with sources of randomness both public and private.

[Quantum Resistant Ledger](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Quantum%20Resistant%20Ledger%20b3e60c968098435790c3718f85ed3057.md): With a shared vision of decentralization, the aims and objectives of both the QRL Foundation and the League of Entropy are very much aligned. It is important to us that we support innovations at the cutting edge of security.

[EPFL Decentralized & Distributed Systems Lab (DeDiS)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Decentralized%20&%20Distributed%20Systems%20Lab%20(DeDi%20e855b8f643d4475aa89a47252e6623d9.md): Drand was born at our offices. Originally, it was a development by Nicolas Gailly, at that time a PhD student at the DEDIS lab at EPFL, with contributions from Philipp Jovanovic and under the supervision of Bryan Ford.

Many protocols need a reliable, unbiased, and publicly-verifiable source of randomness. The DEDIS lab started work on decentralized randomness at Yale. Prof. Ford continued this work when he moved the lab to EPFL in 2015. As part of this mission, the DEDIS lab @ EPFL developed the crypto library Kyber, which provides all the major components to implement an efficient, distributed randomness generation protocol. The DEDIS lab is proud of contributing not just to the foundations, but also to the infrastructure providing public randomness.

[Tierion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Tierion%205b38e1b289f44e9d87498eddb788d38f.md): In 2017 Tierion announced its collaboration with the National Institute of Standards and Technology (NIST) to use the NIST Randomness Beacon to prove a timestamp proof was created between two points in time. Over time, development on the NIST Randomness Beacon slowed down and NIST experienced intermittent reliability issues. We began searching for a replacement and decided drand was by far the best option.

---

### **“How you use drand in your setup, infrastructure or application?”**

[Tierion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Tierion%205b38e1b289f44e9d87498eddb788d38f.md): We use drand to prove each [**Chainpoint proof](https://tierion.com/chainpoint)** was created between two points in time. Every 30 seconds drand publishes a random value which is injected into each Chainpoint Proof. Since drand’s random values can’t be known before they are published, we can assert that each Chainpoint proof was created after the timestamp of the drand value.

---

### **“Where would you like to see drand in 2 years from now?”**

[Cloudflare](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Cloudflare%2012bbcd90be5f4e42af18599f65019e7e.md): Continue to have more partners join the network with a focus on stability and operational resilience to ultimately strengthen the system, and to see continued growth in client adoption. Cloudflare is proud to be part of this, and we hope to see continued success of the network.

[Kudelski Security](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md): Quite simply, our hope is that more projects adopt drand. The more people learn about the project and where it can be used, the better.

[Quantum Resistant Ledger](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Quantum%20Resistant%20Ledger%20b3e60c968098435790c3718f85ed3057.md): First and foremost, we hope the resilience displayed so far continues. Over time, we hope that broadening geographical, and network topology grants ongoing assurance to solutions, projects and ultimately consumers.

[EPFL Decentralized & Distributed Systems Lab (DeDiS)](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/EPFL%20Decentralized%20&%20Distributed%20Systems%20Lab%20(DeDi%20e855b8f643d4475aa89a47252e6623d9.md): First of all, we would love to see drand scale to thousands of participants by deploying the scalability techniques that we have been studying, e.g. in [**RandHound and RandHerd**](https://eprint.iacr.org/2016/1067.pdf). Second, we'd like Drand usage to grow and be leveraged in a fully asynchronous consensus protocol, a path we're exploring in our current work on [**Que Sera Consensus [FIX]**](https://drand.love/blog/2021/09/14/the-value-of-drand/%E2%80%8B%E2%80%8Bhttps://arxiv.org/abs/2003.02291). Finally, we imagine Drand empowering proof of stake, and proof of personhood mechanisms in open member consensus protocols to handle lotteries, committee elections, and similar applications.

[Tierion](../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Tierion%205b38e1b289f44e9d87498eddb788d38f.md): We’d like to see drand become a dial-tone for randomness that’s reliably available to any application connected to the Internet.

---

*The League of Entropy evaluates, votes on, and onboards new members quarterly. If you want to be a part of the first production-grade distributed randomness beacon and help provide publicly verifiable randomness as a service, contact us at leagueofentropy@googlegroups.com. We are looking for enthusiastic teams with experience running secure production services who are interested in operating drand nodes and relays. We also encourage you to check out the drand GitHub repository for details.*

---
