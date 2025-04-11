---
title: "drand explainer for beginners"
description: "A brief primer on what drand is and how it works"
date: 2023-06-02
author: Patrick McClurg
tags:
    - Features
    - How-to
    - Beginner
---
A brief primer on what drand is and how it works.
<!-- truncate -->

drand is software for running a threshold network that generates publicly verifiable random numbers.

Boy, that's a mouthful.

To the uninitiated, a bunch of questions spring to mind: What on earth is a threshold network? How can random numbers be verified?! Surely they're random? Why would I want my random numbers to be public?

Well, this blog post is the right place to uncover all the mysteries of the above statement. Let's work backwards to build up a picture of what drand is and how it works.

## Random numbers

What constitutes a random number?   
There are some fancy mathematical definitions, but stated simply: it's a number that cannot be guessed at a rate better than chance.
Suppose we choose a random number in the range 1 and 100 (including 100). If we asked 100 people to guess our number, on average only one of those people would guess the number correctly, even with a fully random selection process. 

For cryptographic purposes, it's often important that two people don't select the same random random number - as an example, if two people used the same random number as their Bitcoin private key, they'd be sharing a wallet (and the wallet's funds)!  
While this is impossible to prevent, cryptographic schemes use astronomically large number ranges (on the order of the number of atoms in the universe!) to ensure users get unique random numbers if they use proven selection methods.

## Public random numbers vs private random numbers

Random numbers are used by everybody daily: connecting to a website over HTTPS creates some random numbers, signing into our bank account may use some random numbers, creating a user account or purchasing an item online will generate a random user or receipt identifier; most of these (like the Bitcoin example above) are _private_ random numbers. If you shared random numbers associated with your bank account publicly, a malicious actor might be able to steal all your money.

Public random numbers are a little bit different. These are numbers we _want_ everybody to see: think lottery numbers, the roll of a dice in a board game, selecting a business to be audited at random or a coin flip for who takes the kick-off in a football match.
This is exactly the type of randomness that drand provides - you definitely shouldn't generate your Bitcoin private key using drand (or if you do, please tell us so we can liberate all your Bitcoin!).

## Verifiability

In the examples of public randomness we discussed above, humans have come up with a myriad of dances to ensure fairness: lottery numbers are drawn from fancy machines built by companies dedicated to fairness, dice are shared in board games to ensure that a single player isn't using a rigged die, and a trusted third party (the referee) picks the coin and flips it to decide which team takes the kick-off.

None of these solutions are really _verifiable_ and require trusting third parties (e.g. referees, manufacturers), but we've got established procedures around them that increase our assurance that they're fair.

For generating random numbers fast and at scale however, it's a lot more difficult to prove fairness:
- if I trust a third party to generate the random number, how do I know they really chose it randomly?
- if I trust a third party to run a random number generator I have audited, how do I know they're running the code they say they are?
- if I run some code to generate a random number, how do I know the code is really statistically random (and bug free!)?

Human intuition can play tricks on us when it comes to randomness. If you were to look at the following binary numbers, which do you think is the most random?

```
1111111111111111
0000000000000000
1001011010001001
```

At first glance the first two seem far too uniform to be random, but from a random selection of values from `0000000000000000` to `1111111111111111` (inclusive), they are all equally likely to occur!

How then can we verify a randomly selected number was really randomly selected? It seems impossible. However in drand, we exploit some base cryptographic principles to make this possible.  To fully understand it though, we will have to do a little background work.

## Digital signatures

Digital signatures are a lot like human signatures: we take some piece of data (like a contract or a letter) and we append a message to it that uniquely identifies us and binds the signature to the piece of data.
That said, human and digital signatures differ in a few ways:
- human signatures map to a single person; digital signatures map to a single private key (and a person could own multiple private keys)
- human signatures can be copied to another piece of data and still be valid; digital signatures are effectively bound to a single piece of data, as the data is 'included' in the signature in a mathematical sense (this isn't 100% true, you _could_ find another piece of data that collides with the one you're signing, but the chances are so astronomically low that it's not worth considering).
- digital signatures are verifiable; we can run mathematical operations to verify that the person who created the signature had access to the data and the private key. This is like being able to verify the handwriting of a human signature but more precise.

A small side note: private keys are a bit like a password. They're a huge (private) random number that users use in lieu of a password. They're much more secure than passwords (due to their size), and users tend to store them somewhere rather than typing them in by hand, as remembering them would take savant abilities and typing them in would tire your hands!
In digital signature schemes, users also create a public key. This is a mathematical counterpart to the private key that can be used to verify signatures created using it. As the name implies, the public key can be shared to the public, and anybody can use it to validate your signatures. 
In the human signature world, it's a little bit like your name in print being used to verify that your signature is valid (although much, much, much more secure).

So why are we talking about signatures?! This post is about randomness, and I even said we need randomness to even *generate* a signature! 
Well there are some properties of digital signatures that are particularly interesting in the scope of randomness. Given we some piece of data, an attacker who has our public key but not our private key would not be able to predict a valid signature for it (at a rate better than chance). To create a valid signature, they would have to create all possible signatures and verify them against the public key (which would take more computing power than exists in the world to do so in a reasonable time frame!).
Additionally, there's exactly one signature that will be valid for a given message and private key combination.
So for a signature scheme that provides [128 bit security](https://en.wikipedia.org/wiki/Security_level), we have approximately a chance of 1 in 340,282,370,000,000,000,000,000,000,000,000,000,000 of correctly guessing the signature for a given message. Those are not great odds for an attacker.

Another way of looking at this: for users without access to a given private key, a signature is indistinguishable from a random number and can be verified using the associated message and public key.
If we had some way of creating signatures with a private key that nobody could access, we would have publicly verifiable random numbers!

## Threshold cryptography

We're close to explaining the full opening statement now. We've identified a way to create publicly verifiable numbers that are random under some assumptions, but with a small problem: somebody needs to be a custodian for the private key used to create signatures that we could use as randomness. That amounts to trusting a third party, and we identified the issues with that in the [verifiability section][#verifiability].  

Enter threshold cryptography.  

Threshold cryptography is a bit like a business bank account: to reduce risk in business banking, instead of one person holding custody over the whole account, transaction over a certain value require multiple parties in the business to sign off on them. A threshold signature scheme is analogous in that multiple parties must work together to create a valid signature for the whole group.

In practice, each party has their own private key and they sign a message with it to create a 'partial signature' (...which is itself a signature... confusing).  When enough of these partial signatures have been created, anybody can aggregate them together into a final valid signature. 
That's an important distinction with the business bank account analogy: there's no hierarchy between signers in a threshold scheme; any group of their signatures will do - there is no CEO or CFO who calls the shots - once enough partial signatures have been created, the final signature can be created.
'Enough' is a parameter of the protocol that is commonly called 'threshold' (hence the name threshold cryptography!). It's also frequently referred to as a `t of n` signature scheme, where `t` (a threshold number) of `n` (the total number) parties must sign to create a valid signature for the group.

Immediately, we can identify that a threshold signature scheme improves our security model compared to a normal signature scheme - instead of relying on a single trusted third party, we can choose a group of numerous parties we trust, and the probability that `t` (threshold) of them collude against us is lower than that of a single party. 
Another key piece of intuition to gain (at least for the scheme that drand uses) is that the whole group shares a public key and private key, however *nobody* in that group has access to the private key. This is created during a distributed key generation protocol at the foundation of a network (basically a fancy algorithm that all the network parties take part in).
To reiterate, no party has the private key in memory at any point in the life of the network.  
The threshold signing scheme exploits mathematical properties of [pairing-based cryptography](https://en.wikipedia.org/wiki/Pairing-based_cryptography), which is outside the scope of this post, to create signatures without ever needing the private key.

## Tying it all together
We've covered a looooot of ground in this post already, so let's try and pull it back into the real world and show how drand works in practice.  

At the foundation of a drand network, all the parties generate their own private key and initiate a distributed key generation protocol to create a shared pair of private and public keys. Recall that *NO* single party has access to that private key.
Every epoch (30 seconds for our default mainnet network), each party signs the same message (in this case the epoch number), and sends their partial signature to everybody else in the network.
Upon receiving partial signatures from other parties, each party verifies the partial signature is valid (using that party's own public key, rather than the public of the network), and upon reaching a threshold number of these partial signatures, aggregates them into a single valid group signature.
This single group signature is effectively a random number that can be verified as having been created by the drand network.
This randomness is released publicly so that others can verify and use it, and because drand epochs coincide with times on the clock, consumers can commit to certain future random values for use in their application (e.g. I will draw the lottery using the random number generated at 12PM tomorrow by the drand network which will be epoch 123456).

Of course, this was a whistle-stop tour of how drand works and some minute details were omitted to aid learning.  
If you'd like to dive deeper into the details of the cryptography or operation of the drand network, check out our [documentation](https://drand.love/docs/), [join our slack workspace](https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA), or email us at: leagueofentropy@googlegroups.com.
