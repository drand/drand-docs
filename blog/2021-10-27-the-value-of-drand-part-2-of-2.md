---
slug: "the-value-of-drand-part-2-of-2"
title: "The Value of drand (Part 2 of 2)"
authors: [yolan]
tags: [league-of-entropy]
date: 2021-10-27
---

*This blog post covers the second set of responses we received from League of Entropy members on our question: “What’s the value of drand for your organization and why do you support it”? We hope you enjoyed [**the first part**](/blog/the-value-of-drand-part-1-of-2) as much as we did.*

<!-- truncate -->

*As a reminder, [The League of Entropy][LOE] (LoE) is a consortium of independent, and diverse organizations that partner together to operate a publicly verifiable, decentralized, bias-resistant, and reliable randomness beacon, called **drand**! The consortium was originally formed in 2019, and is currently supported by 16 member organizations that include: [Cloudflare][CLOUDFLARE], [EPFL Decentralized &amp; Distributed Systems Lab (DeDiS)][DEDIS], [Universidad de Chile][CHILE], [Kudelski Security][KUDELSKI], [Protocol Labs][PROTOCOL], [ChainSafe Systems][CHAINSAFE], [c**·**Labs][CLABS], [EPFL Center for Digital Trust (C4DT)][C4DT], [Emerald Onion][EMERALD], [Ethereum Foundation][EMERALD], [PTisp][PTISP], [Tierion][TIERION], [University College London][UCL], and the [Quantum Resistant Ledger][QUANTUM] Foundation.*

---

### **“Why is drand important as a protocol for the next generation of the Internet in your opinion?”**

[Universidad de Chile][CHILE]: We think it is important to promote decentralized services on the Internet. Nowadays, a lot of vital services on the Internet are in control of a single entity, who has the capacity to shut it down and control a lot of the communications and processes that occur every single day. Drand comes to establish a new way of providing vital services on the Internet, allowing that several independent organizations share the control and power of a randomness beacon. We are currently running a centralized beacon, but we think that our collaboration with the drand project is a must-do for our organization.

[ChainSafe Systems][CHAINSAFE]: We have seen many interesting blockchain applications limited by the availability of reliable, true randomness. Drand presents a novel solution that can enable the next generation of blockchain-based applications.

[EPFL Center for Digital Trust (C4DT)][C4DT]: Verifiable randomness greatly simplifies many decentralized protocols. By shifting some trust to Drand, we move to a more stable, better audited and less resource intensive solution for making network-wide choices.

[c**·**Labs][CLABS]: Randomness is essential for security in protocols and allows building tools that enable large-scale confidence and fast user experience, down to individuals. Unbiasable, unpredictable and fast randomness even more so, and now that the league of entropy exists, it is safer to claim the public has access to such randomness.

[Protocol Labs][PROTOCOL]: Just like many of the protocols that our computers use every day, such as the Domain Name System (DNS) and the Network Time Protocol (NTP), we believe the Internet also needs to have a randomness protocol that is publicly verifiable, bias-resistant and distributed, that is, not controlled by a single organization. Drand ticks all of those boxes!

---

### **“Why did you decide to join the League of Entropy? What value do you see in drand that is important for your mission (what convinced you to join)?”**

[Universidad de Chile][CHILE]: Because we were (and still are) running a randomness beacon on our own (Random UChile) and we wanted to stay in touch with all the beacons projects around the world. We thought that contributing to a decentralized beacon was a great opportunity to cooperate with other universities and organizations interested in the same subject as we do. We are convinced that randomness beacons must be a foundational part of the Internet; there must exist a lot of beacons with different configurations, algorithms, and geographic footprint around the world. We want to contribute to that idea in the best possible way.

[ChainSafe Systems][CHAINSAFE]: We joined LoE primarily because it is used within the Filecoin protocol. As the builders of the secondary implementation of the Filecoin protocol, as well as several user-level applications, we understand the critical nature of drand and are eager to support its development.

[EPFL Center for Digital Trust (C4DT)][C4DT]: We support many projects created at EPFL and are historically close to DEDIS. Helping such a publicly funded project take off and see how well it behaves in the wild is important for us.

[c**·**Labs][CLABS]: We have been impressed by the quality of drand and the team behind it, and believe that the LoE is capable of creating a secure randomness beacon, and so we'd like to be a part of it.

[Protocol Labs][PROTOCOL]: drand was masterminded by one of PL’s research engineers, Nicolas Gaily, during his time at DEDIS-EPFL. Turning research results to production systems is at the heart of PL’s mission. PL is one of the founding partners of the League of Entropy, as we firmly believe that distributed randomness should be a foundational protocol for the Internet. drand is also a fundamental component of the Filecoin network, which is one of the key projects that PL supports.

---

### **“How you use drand in your setup, infrastructure or application?”**

[Universidad de Chile][CHILE]: We are not currently using drand in our setup, but we plan to include drand output as a new external source for our own randomness beacon ([**Random UChile**](https://random.uchile.cl/)).

[c**·**Labs][CLABS]: We've used drand as the randomness beacon in [**Plumo**](https://medium.com/celoorg/celo-sets-sights-on-becoming-fastest-evm-chain-through-collaboration-with-mysten-labs-e88b426aee83), a SNARK-based ultralight client, and have collaborated with the LoE and have been inspired by the techniques that are used to build randomness beacons, which are an integral part of Celo's

[Protocol Labs][PROTOCOL]: drand is used in the leader election algorithm of the Filecoin protocol. Having a source of bias-resistant entropy is key to the security of Filecoin and therefore, a healthy and secure drand network is of utmost importance for PL.

---

### **“Where would you like to see drand two years from now?”**

[Universidad de Chile][CHILE]: We’d like to see drand provide a massively well-known, easy-to-use service on the Internet. It is very important and exciting that drand has left the “academic-sphere” and now provides a useful application to Internet users.

[ChainSafe Systems][CHAINSAFE]: We would like to see the deployments and usage of drand increase dramatically. Simplifying the onboarding process and establishing incentives for participants will lead to more people deploying drand and participating in randomness networks. As distributed applications grow in number, a strong developer community will help onboard new users and expand the impact of drand to more ecosystems.

[EPFL Center for Digital Trust (C4DT)][C4DT]: Each new partner increases the general trust of the network, so let’s continue expanding the League of Entropy, and scale it to hundreds of nodes. For the onboarding process, a more streamlined and perhaps more asynchronous protocol would really be an enabler for expanding the LoE network.

[c**·**Labs][CLABS]: We hope to see more members join and increase the confidence in the security of the beacon. It will be great to strengthen the resilience of the implementations and have easily accessible tools for consuming and verifying the beacon. We also hope to see it grow to be accepted in important pieces of infrastructure.

[Protocol Labs][PROTOCOL]: We are very optimistic about the future of drand! We are eager to welcome more members to the LoE to natively increase the security of the network. We are looking forward to more applications using drand for their protocols and applications. We are working hard to find ways to incentivize the members of the LoE and we welcome ideas from the community. We are integrating many new features in the main drand protocol, such as support for multiple beacons, higher-frequency randomness and time-lock encryption, as also discussed in [drand celebrates One Year as a Randomness Service!](/blog/drand-celebrates-one-year-as-a-randomness-service) These new features will bring drand ahead of the competition, as it will be able to solve pressing problems, such as “front-running” attacks on decentralized exchanges. Drand is hiring aggressively to increase the capacity of the team and deliver new functionalities faster - come and **join us** if you’re passionate about verifiable, unpredictable and bias-resistant randomness!

In short, we are shooting to make drand a foundational protocol for randomness in the Internet, and we are proud of the fact that [drand celebrates One Year as a Randomness Service!](/blog/drand-celebrates-one-year-as-a-randomness-service), providing more than 1M rounds of randomness!

---

*[The League of Entropy][LOE] evaluates, votes on, and onboards new members quarterly. If you want to be a part of the first production-grade distributed randomness beacon and help provide publicly verifiable randomness as a service, contact us at leagueofentropy@googlegroups.com. We are looking for enthusiastic teams with experience running secure production services who are interested in operating drand nodes and relays. We also encourage you to check out the [**drand GitHub repository for details**](https://github.com/drand).*

---

[LOE]: https://drand.love/1e76674b75e249699445799c5083fe78
[CLOUDFLARE]: https://drand.love/12bbcd90be5f4e42af18599f65019e7e
[DEDIS]: https://drand.love/e855b8f643d4475aa89a47252e6623d9
[CHILE]: https://drand.love/27708a6027104c3ba708e2d8d7508a66
[KUDELSKI]: https://drand.love/d800657770494c6cb39cffb5480407a4
[PROTOCOL]: https://drand.love/9e18324379574803918146d996c24df5
[CHAINSAFE]: https://drand.love/480ac8864a33408dae64fad706c38a8e
[CLABS]: https://drand.love/8125559f2fb44804b9e6ca63da70f6b6
[C4DT]: https://drand.love/dc94bcdadab64950aa1e6bc96cb1e39a
[EMERALD]: https://drand.love/e22d8bdb07ef4198b283d0436bcc9cf4
[EMERALD]: https://drand.love/184fc01bc464488c9570eb543d6c386a
[PTISP]: https://drand.love/f8fa38c9c36d4b4bbbb40fe785e9ae12
[TIERION]: https://drand.love/5b38e1b289f44e9d87498eddb788d38f
[UCL]: https://drand.love/af818bec61a542daa950596f01fddf09
[QUANTUM]: https://drand.love/b3e60c968098435790c3718f85ed3057
