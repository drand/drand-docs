"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[9912],{6393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const r={slug:"a-guide-on-how-to-use-drand",title:"A Guide on how to use drand",authors:["yolan"],tags:["features","how-to"],date:new Date("2023-02-21T00:00:00.000Z")},s="Using Public Randomness from drand",o={permalink:"/blog/a-guide-on-how-to-use-drand",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2023-02-21-a-guide-on-how-to-use-drand.mdx",source:"@site/blog/2023-02-21-a-guide-on-how-to-use-drand.mdx",title:"A Guide on how to use drand",description:"In this blog post, we\u2019ll dive into the fascinating world of public randomness and provide a step-by-step tutorial on how to consume randomness from drand and use it in your applications. Get ready for an exciting journey into the heart of randomness!",date:"2023-02-21T00:00:00.000Z",tags:[{inline:!1,label:"Features",permalink:"/blog/tags/features",description:"begginer tag"},{inline:!1,label:"How-to",permalink:"/blog/tags/how-to",description:"how to tag"}],readingTime:3.3,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",page:{permalink:"/blog/authors/yolan"},imageURL:"/img/author/yolan.jpeg",key:"yolan"}],frontMatter:{slug:"a-guide-on-how-to-use-drand",title:"A Guide on how to use drand",authors:["yolan"],tags:["features","how-to"],date:"2023-02-21T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Automata Network Joins the League of Entropy!",permalink:"/blog/auttomata-network-joins-the-league-of-entropy"},nextItem:{title:"IPFS Force joins the League of Entropy!",permalink:"/blog/ipfs-force-joins-the-league-of-entropy"}},d={authorsImageUrls:[void 0]},c=[{value:"Why Public Randomness?",id:"why-public-randomness",level:3},{value:"Enter drand",id:"enter-drand",level:3},{value:"Using drand",id:"using-drand",level:3},{value:"Setting Up",id:"setting-up",level:3},{value:"Fetching Randomness",id:"fetching-randomness",level:3},{value:"Fetching the Latest Beacon",id:"fetching-the-latest-beacon",level:3},{value:"Using Randomness Effectively",id:"using-randomness-effectively",level:3},{value:"Coin Flip Example",id:"coin-flip-example",level:3},{value:"Avoiding Bias in Random Selection",id:"avoiding-bias-in-random-selection",level:3},{value:"Wrapping Up",id:"wrapping-up",level:3},{value:"Suggested Readings:",id:"suggested-readings",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this blog post, we\u2019ll dive into the fascinating world of public randomness and provide a step-by-step tutorial on how to consume randomness from drand and use it in your applications. Get ready for an exciting journey into the heart of randomness!"}),"\n","\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"why-public-randomness",children:"Why Public Randomness?"}),"\n",(0,i.jsx)(n.p,{children:"Most developers are familiar with private randomness: we use randomness to generate keypairs, randomize back off timings in distributed systems, choose stats for games, and a plethora of other things. This makes sense\u2014if the randomness used to generate our keypairs was public, bad actors could intercept all our communications or steal our bitcoin!"}),"\n",(0,i.jsxs)(n.p,{children:["However, some applications that currently use private randomness might be better served using public randomness. For example, online casinos generate random numbers to order cards dealt or determine a winner. We must trust that these casinos use effective random number generators, but ",(0,i.jsx)(n.a,{href:"http://web.archive.org/web/20210615005520/http://www.lauradhamilton.com/random-lessons-online-poker-exploit",children:"history has shown this is not always the case"}),". If they committed to a random number generated by a third party (or third parties), or used some kind of ",(0,i.jsx)(n.em,{children:"verifiable randomness"}),", this could improve fairness and increase user trust."]}),"\n",(0,i.jsxs)(n.p,{children:["For cases such as random distribution of welfare (e.g., ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Universal_basic_income",children:"universal basic income"})," experiments), the government could use a third party such as an NGO to draw random numbers. However, this still constitutes a weak link, as a single third party ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dual_EC_DRBG#Software_and_hardware_which_contained_the_possible_backdoor",children:"could be unduly influenced"})," to bias the randomness."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enter-drand",children:"Enter drand"}),"\n",(0,i.jsxs)(n.p,{children:["drand is built upon a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Threshold_cryptosystem",children:"threshold network"}),". Instead of relying on a single third party, multiple third parties work together to generate a random number. It exploits the fact that a hashed signature has all the properties of randomness as long as nobody holds the secret key. Due to the way drand ",(0,i.jsx)(n.a,{href:"https://evervault.com/blog/shamir-secret-sharing",children:"distributes keys"}),", no party ever has the whole secret key, and as such no one can ever predict the signature generated\u2014woohoo, randomness! These properties are why projects such as ",(0,i.jsx)(n.a,{href:"https://socialincome.org/",children:"Social Income"})," are building on top of drand for their randomness!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"using-drand",children:"Using drand"}),"\n",(0,i.jsx)(n.p,{children:"Presently, the drand network generates a random hex string every thirty seconds. It can be verified using the public key of the network, so you can receive randomness from an untrusted party and verify that it\u2019s truly been created by the drand network. This powerful property simplifies your trust assumptions: you can receive randomness without having to trust the node that sent you the message because you can verify it for yourself."}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we're going to fetch randomness using the ",(0,i.jsx)(n.a,{href:"https://github.com/drand/drand-client",children:"official JavaScript client"}),", but you could also use the ",(0,i.jsx)(n.a,{href:"https://github.com/drand/drand/tree/master/client",children:"official Go client"}),", one of the ",(0,i.jsx)(n.a,{href:"https://github.com/search?q=drand+rust",children:"multiple unofficial Rust clients"}),", or fetch it via curl/libp2p/other channels and verify the BLS signatures yourself."]}),"\n",(0,i.jsx)(n.h3,{id:"setting-up",children:"Setting Up"}),"\n",(0,i.jsxs)(n.p,{children:["First, make sure you have a relatively recent version of Node.js (17+) and npm installed. Instructions can be found ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Then, create a new folder for your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir drand-client-tutorial\ncd drand-client-tutorial\nnpm init\nnpm install drand-client\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As the drand client is bundled as an ESM module, add ",(0,i.jsx)(n.code,{children:'"type": "module"'})," in your ",(0,i.jsx)(n.code,{children:"package.json"})," to use it."]}),"\n",(0,i.jsxs)(n.p,{children:["Create a new file at the root of the project called ",(0,i.jsx)(n.code,{children:"index.js"})," and open it in your editor of choice."]}),"\n",(0,i.jsx)(n.h3,{id:"fetching-randomness",children:"Fetching Randomness"}),"\n",(0,i.jsxs)(n.p,{children:["The most basic primitive is a ",(0,i.jsx)(n.code,{children:"Chain"}),"\u2014it represents a single network instance hosted by a node. Networks can have different parameters such as frequency, algorithm, and participants, but for our purposes, the default network is enough."]}),"\n",(0,i.jsxs)(n.p,{children:["We're going to connect to the HTTP API of the drand team\u2019s nodes (",(0,i.jsx)(n.a,{href:"https://api.drand.sh/",children:"api.drand.sh"}),"), but you could also use Cloudflare's API endpoint (",(0,i.jsx)(n.a,{href:"https://drand.cloudflare.com/",children:"drand.cloudflare.com"}),"), or StorSwift\u2019s relay (",(0,i.jsx)(n.a,{href:"https://api.drand.secureweb3.com:6875/",children:"api.drand.secureweb3.com:6875"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain } from "drand-client";\n\nconst chain = new HttpChain("<https://api.drand.sh>");\nchain.info().then(info => console.log(info));\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Run this with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node --experimental-fetch index.js\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["(Node versions greater than 18 can skip the ",(0,i.jsx)(n.code,{children:"--experimental-fetch"})," flag!)"]}),"\n",(0,i.jsx)(n.h3,{id:"fetching-the-latest-beacon",children:"Fetching the Latest Beacon"}),"\n",(0,i.jsxs)(n.p,{children:["To fetch the latest beacon, use the ",(0,i.jsx)(n.code,{children:"fetchBeacon"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain, fetchBeacon } from "drand-client";\n\nconst chain = new HttpChain("<https://api.drand.sh>");\nfetchBeacon(chain, 1).then(beacon => console.log(beacon));\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"To get the latest beacon by time:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain, HttpChainClient, fetchBeaconByTime } from "drand-client";\n\nconst chain = new HttpChain("<https://api.drand.sh>");\nconst client = new HttpChainClient(chain);\nfetchBeaconByTime(client, Date.now()).then(beacon => console.log(beacon));\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For real-time applications, use the ",(0,i.jsx)(n.code,{children:"watch"})," function to listen for new beacons:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain, HttpChainClient, watch } from "drand-client";\n\nconst chain = new HttpChain("<https://api.drand.sh>");\nconst client = new HttpChainClient(chain);\nconst beacons = watch(client, new AbortController());\n\nfor await (const beacon of beacons) {\n  console.log(beacon);\n}\n\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"using-randomness-effectively",children:"Using Randomness Effectively"}),"\n",(0,i.jsx)(n.p,{children:"If we only ever needed a 64-byte random value in our applications, we'd be finished now. Unfortunately, real-life applications often require more tailored randomness. Here\u2019s how to handle different use cases:"}),"\n",(0,i.jsx)(n.h3,{id:"coin-flip-example",children:"Coin Flip Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain, fetchBeaconByTime } from "drand-client";\n\nconst chain = new HttpChain("<https://api.drand.sh>");\nfetchBeaconByTime(chain, Date.now()).then(beacon => {\n  const flip = BigInt("0x" + beacon.randomness) % BigInt(2);\n\n  if (flip === BigInt(0)) {\n    console.log(beacon.round + ": HEADS!");\n  } else {\n    console.log(beacon.round + ": TAILS!");\n  }\n});\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"avoiding-bias-in-random-selection",children:"Avoiding Bias in Random Selection"}),"\n",(0,i.jsx)(n.p,{children:"For selecting a random winner from a lottery:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import { HttpChain, fetchBeaconByTime } from "drand-client";\n\nconst participants = ["alice", "bob", "carol", "dave", "edward", "fiona", "georgina"];\nconst chain = new HttpChain("<https://api.drand.sh>");\nfetchBeaconByTime(chain, Date.now()).then(beacon => {\n  const randomNumber = BigInt("0x" + beacon.randomness);\n  let winnerIndex = randomNumber % BigInt(participants.length);\n\n  // Rejection sampling to avoid bias\n  while (winnerIndex >= BigInt(participants.length)) {\n    winnerIndex = BigInt("0x" + crypto.randomBytes(2).toString(\'hex\')) % BigInt(participants.length);\n  }\n\n  console.log(`The winner is ${participants[winnerIndex]}`);\n});\n\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"wrapping-up",children:"Wrapping Up"}),"\n",(0,i.jsxs)(n.p,{children:["Using drand can bring a new level of fairness and verifiability to your applications. Whether you\u2019re flipping coins or selecting lottery winners, drand's verifiable randomness ensures transparency and trust. We love hearing about the projects you\u2019re working on, so feel free to ",(0,i.jsx)(n.a,{href:"https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA",children:"join us on Slack"})," and share your stories or ask for help."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"suggested-readings",children:"Suggested Readings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Random_number",children:"Random Number"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Threshold_cryptosystem",children:"Threshold Cryptosystem"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Pseudorandom_number_generator",children:"Pseudorandom Number Generator"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Universal_basic_income",children:"Universal Basic Income"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing",children:"Shamir's Secret Sharing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Timing_attack",children:"Timing Attack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dual_EC_DRBG",children:"Dual_EC_DRBG"})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Until next time, happy coding! \ud83d\ude80"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);