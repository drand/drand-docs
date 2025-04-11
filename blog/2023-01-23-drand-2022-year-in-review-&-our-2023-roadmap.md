---
title: "drand: 2022 Year in Review & our 2023 Roadmap"
description: "2022 came to an end with some noteworthy achievements for the drand team. We took some time to reflect on our achievements and set the scene for 2023. In this blogpost we share the highlights of 2022 and our roadmap for 2023."
date: 2023-01-23
author: Yiannis Psaras, Yolan Romailler, Patrick McClurg
tags: 
    - News
---
2022 came to an end with some noteworthy achievements for the drand team. We took some time to reflect on our achievements and set the scene for 2023. In this blogpost we share the highlights of 2022 and our roadmap for 2023.
<!-- truncate -->

## drand: 2022 Year in Review

As 2022 came to an end, the drand team took some time to reflect on the accomplishment of our objectives and goals throughout the year - which were not few! Here is a selective description:

- We have developed important new features that will that will expand the horizons for drand and the applications using it. *Unchained randomness and higher frequency beacons* are both very promising, they have been developed, tested and have been operational on our testnet network for several months now! You can read [the blogpost](https://drand.love/blog/2022/02/21/multi-frequency-support-and-timelock-encryption-capabilities/) to find out all the details.
- Building directly on the *unchained randomness* feature, we have built Timelock Encryption on drand (testnet). This is a super promising use-case that is already attracting lots of attention! Although it’s not deployed on mainnet yet, it’s got a webapp: [https://timevault.drand.love/](https://timevault.drand.love/) and is expected to be on mainnet after one of our upcoming ceremonies. Keep an eye out for a related announcement.
- We increased significantly our visibility into the network by integrating metrics into the codebase. We have built a dashboard that gives us a much more holistic view into the state of nodes before, during and after resharing ceremonies. This allows for async ceremonies, which make DKG resharings more flexible for node operators and will in turn help expand the League of Entropy (LoE). Read [the blogpost](https://drand.love/blog/2022/08/26/observing-randomness/) to figure out the details and challenges of monitoring distributed systems.
- We have literally [sent drand to space](https://drand.love/blog/2022/10/20/cryptosat-takes-drand-to-space/), deployed it on one of Cryptosat’s satellites and had the space node interact with groundstation nodes. We plan to continue the collaboration with Cryptosat and have a permanent drand node operating from above the earth to increase the resilience of our network!
- We have expanded the League of Entropy with four new members that have already joined testnet and/or mainnet, and have another few who have expressed interest and will be considered in the next quarter. Get in touch if you’re interested in joining the LoE - more information can be found on our website: [https://drand.love/partner-with-us/](https://drand.love/partner-with-us/).
- We have travelled and presented drand in several high-profile events, including NorthSec, MCH and DEFCON! This has resulted in several new collaborations, users of drand and an expanded community. We are looking forward to working with you all!
- Last but not least, the network has had 100% uptime with no hiccups or disruptions!

In addition to standard maintenance tasks, bug fixes, test improvements, resharing ceremonies and other team commitments, that was definitely a great outcome worthy of an EoY celebration!

## drand in 2023: The Road Ahead

As we finished the year and celebrated our achievements, we have also made plans for 2023. We have a lot of items in the pipeline which will land throughout 2023: a refactored distributed key generation (DKG) process, beacon storage optimization, and further expansion of the LoE! We have divided our roadmap into Themes, each of which includes one or more Milestones. The four main Themes, or directions of work are as follows:

### Theme: Network Maintenance and Upgrades

As an infrastructure project, drand requires maintenance as well as new features that come as a direct outcome of drand’s users and community members. Apart from day-to-day maintenance, such as resharing ceremonies, bug-fixes and dependency monitoring this Theme includes: the optimization of storage for beacons, landing unchained randomness and higher frequency beacons on mainnet and refactoring the DKG. These will make our codebase more resilient and will enable us to become more flexible with regard to resharing ceremonies.

### Theme: Investigate Incentive structures for the League of Entropy

Given the items above, our processes will become more flexible and more resilient. Building on that we plan to expand the League of Entropy and investigate incentive structures for those that actively contribute their time and resources to the LoE drand network. There are many possibilities to move forward with this and each of them require careful consideration.

### Theme: drand & Timelock on FVM

The Filecoin team is working hard to land the Filecoin Virtual Machine (FVM) - a major milestone for the Filecoin blockchain. Having drand beacons validated on FVM and making it available to all of the applications that will use the FVM will expand drand’s horizons and user-base significantly. This is a big endeavour with the Theme including several smaller Milestones.

### Theme: Support the drand Community

We are grateful to the drand community and all the contributions that it brings! At the same time, we realise that there is a lot more to be done in order to make drand user- and developer-friendly. We plan to allocate effort to update our processes, websites and “how to” guides in order to onboard new members easily. We plan to hold regular “code walkthroughs” and hackathons in order to engage more directly with the user, developer and client base.

No doubt this is an ambitious roadmap and plan for 2023! We hope it covers lots of the asks that we received and we’ll do our best to meet the expectations. You can find the roadmap and monitor our progress here:

[https://www.starmaps.app/roadmap/github.com/drand/roadmap/issues/1](https://www.starmaps.app/roadmap/github.com/drand/roadmap/issues/1)

As always, you’re more than welcome to get involved and contribute! Make sure to join the discussion in the drand slack workspace through this [invitation link](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA).

Best wishes for a productive 2023!