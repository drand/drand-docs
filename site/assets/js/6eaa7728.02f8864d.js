"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[3390],{5770:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var d=s(4848),i=s(8453);const t={id:"3-4-dev-guide-http-api",title:"3.4 HTTP API",description:"A list of public endpoints, instructions how to fetch, explanation of results."},c="3.4 DevGuide: HTTP API",r={id:"dev-guide/3-4-dev-guide-http-api",title:"3.4 HTTP API",description:"A list of public endpoints, instructions how to fetch, explanation of results.",source:"@site/docs/03_dev-guide/03-04-DevGuide_HTTP_API.md",sourceDirName:"03_dev-guide",slug:"/dev-guide/3-4-dev-guide-http-api",permalink:"/drand-docs/docs/dev-guide/3-4-dev-guide-http-api",draft:!1,unlisted:!1,editUrl:"https://github.com/drand/drand-docs/tree/main/docs/03_dev-guide/03-04-DevGuide_HTTP_API.md",tags:[],version:"current",frontMatter:{id:"3-4-dev-guide-http-api",title:"3.4 HTTP API",description:"A list of public endpoints, instructions how to fetch, explanation of results."},sidebar:"docsSidebar",previous:{title:"3.3 Client Libraries",permalink:"/drand-docs/docs/dev-guide/3-3-dev-guide-client-libraries"},next:{title:"3.5 PubSub Network",permalink:"/drand-docs/docs/dev-guide/3-5-dev-guide-pubsub-network"}},a={},h=[{value:"<strong>Public endpoints</strong>",id:"public-endpoints",level:2},{value:"<strong>Testnet endpoints</strong>",id:"testnet-endpoints",level:3},{value:"<strong><code>/chains</code></strong>",id:"chains",level:2},{value:"<strong><code>/{chain-hash}/info</code></strong>",id:"chain-hashinfo",level:2},{value:"<strong><code>/{chain-hash}/public/latest</code></strong>",id:"chain-hashpubliclatest",level:2},{value:"<strong><code>/{chain-hash}/public/{round}</code></strong>",id:"chain-hashpublicround",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"34-devguide-http-api",children:"3.4 DevGuide: HTTP API"})}),"\n",(0,d.jsxs)(n.p,{children:["Drand provides a JSON HTTP interface that clients can use to fetch randomness from each drand network running on nodes. If you're using drand in an application, it may be easier and\xa0",(0,d.jsx)(n.em,{children:"more secure"}),"\xa0to use one of the\xa0",(0,d.jsx)(n.a,{href:"3-3-dev-guide-client-libraries",children:(0,d.jsx)(n.strong,{children:"client libraries"})}),", which will also perform\xa0",(0,d.jsx)(n.em,{children:"verification"}),"\xa0of randomness rounds and add additional features like failover, racing, aggregation, and caching."]}),"\n",(0,d.jsxs)(n.p,{children:["All that's required is the address of the HTTP interface and way to fetch from HTTP, e.g.\xa0",(0,d.jsx)(n.code,{children:"curl"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"public-endpoints",children:(0,d.jsx)(n.strong,{children:"Public endpoints"})}),"\n",(0,d.jsxs)(n.p,{children:["The public\xa0",(0,d.jsx)(n.a,{href:"http://leagueofentropy.org",children:(0,d.jsx)(n.strong,{children:"League of Entropy"})})," HTTP APIs are available at:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Protocol Labs","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"https://api.drand.sh/"})})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"https://api2.drand.sh/"})})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"https://api3.drand.sh/"})})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Cloudflare","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"https://drand.cloudflare.com/"})})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["StorSwift","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"https://api.drand.secureweb3.com:6875/"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The League of Entropy currently runs two networks in mainnet:\xa0",(0,d.jsx)(n.code,{children:"default"}),"\xa0and\xa0",(0,d.jsx)(n.code,{children:"fastnet"}),". They are chained and unchained networks respectively, the details of which can be found in the\xa0",(0,d.jsx)(n.a,{href:"../concepts/2-1-concepts-cryptography",children:(0,d.jsx)(n.strong,{children:"cryptography specification"})}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The chain hash for the League of Entropy\xa0",(0,d.jsx)(n.code,{children:"default"}),"\xa0chain running at a 30s frequency in chained mode on Mainnet is:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce\n"})}),"\n",(0,d.jsxs)(n.p,{children:["It also available at the default context, i.e. omitting the\xa0",(0,d.jsx)(n.code,{children:"/{chain-hash}"}),"\xa0in the API specification below."]}),"\n",(0,d.jsxs)(n.p,{children:["The chain hash for the League of Entropy\xa0",(0,d.jsx)(n.code,{children:"quicknet"}),"\xa0network running at a 3s frequency in unchained mode on Mainnet is:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Note that\xa0",(0,d.jsxs)(n.a,{href:"https://drand.love/blog/2023/07/03/fastnet-sunset-quicknet-new/",children:["**the\xa0",(0,d.jsx)(n.code,{children:"fastnet"})]}),"\xa0",(0,d.jsx)(n.a,{href:"https://www.notion.so/fastnet-to-be-sunset-long-live-quicknet-5d125025752146b5bc307c834435d49e?pvs=21",children:"network has been deprecated."}),"**"]}),"\n",(0,d.jsx)(n.h3,{id:"testnet-endpoints",children:(0,d.jsx)(n.strong,{children:"Testnet endpoints"})}),"\n",(0,d.jsx)(n.p,{children:'Furthermore, we have "testnet endpoints" which are a completely separate environment for testing our latest changes, potentially helping you detect breaking changes or issues with our latest release before they hit mainnet. We recommend running your CI/CD against our testnet endpoints as well as our mainnet ones, in order to detect issues early.'}),"\n",(0,d.jsx)(n.p,{children:"We currently have three testnet HTTP(S) endpoints being run by:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Protocol Labs","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://pl-us.testnet.drand.sh/chains",children:(0,d.jsx)(n.strong,{children:"https://pl-us.testnet.drand.sh/chains"})})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://pl-eu.testnet.drand.sh/chains",children:(0,d.jsx)(n.strong,{children:"https://pl-eu.testnet.drand.sh/chains"})})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["Cloudflare","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://testnet-api.drand.cloudflare.com/chains",children:(0,d.jsx)(n.strong,{children:"https://testnet-api.drand.cloudflare.com/chains"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["As you can see, they are currently running various chains as explained below. We are committed to maintaining the\xa0",(0,d.jsx)(n.code,{children:"default"}),", G2 based, chained testnet chain (",(0,d.jsx)(n.code,{children:"84b2234fb34e835dccd048255d7ad3194b81af7d978c3bf157e3469592ae4e02"}),") as well as the faster, G1 based, unchained\xa0",(0,d.jsx)(n.code,{children:"quicknet-t"}),"\xa0testnet chain (",(0,d.jsx)(n.code,{children:"cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5"}),") as long as we run the equivalent mainnet networks."]}),"\n",(0,d.jsxs)(n.p,{children:['Other testnet chains, such as our first "unchained" testnet (',(0,d.jsx)(n.code,{children:"7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf"}),") or our first G1 based non-RFC compliant chain (",(0,d.jsx)(n.code,{children:"f3827d772c155f95a9fda8901ddd59591a082df5ac6efe3a479ddb1f5eeb202c"}),") may be deprecated in the future."]}),"\n",(0,d.jsx)(n.h2,{id:"chains",children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"/chains"})})}),"\n",(0,d.jsxs)(n.p,{children:["Retrieves the\xa0",(0,d.jsx)(n.em,{children:"chain hash"}),"\xa0of every running network a user can interact with. It returns a JSON object with the following structure:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'[\n  "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",\n  "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce",\n  "8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84",\n  "515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"\n]\n'})}),"\n",(0,d.jsx)(n.h2,{id:"chain-hashinfo",children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"/{chain-hash}/info"})})}),"\n",(0,d.jsx)(n.p,{children:"Retrieves the randomness chain information. It returns a JSON object with the following structure:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'{\n  "public_key": "868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31",\n  "period": 30,\n  "genesis_time": 1595431050,\n  "hash": "8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce",\n  "groupHash": "176f93498eac9ca337150b46d21dd58673ea4e3581185f869672e59fa4cb390a",\n  "schemeID": "pedersen-bls-chained",\n  "metadata": {\n    "beaconID": "default"\n  }\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"public_key"}),"\xa0is the distributed public key of the drand group"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"period"}),"\xa0is the time in seconds between randomness beacon rounds"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"genesis_time"}),"\xa0is the time in seconds since the Unix Epoch that the group began generating randomness"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"hash"}),"\xa0is the\xa0",(0,d.jsx)(n.em,{children:"chain hash"}),", which uniquely identifies the drand chain. It is used as a root of trust for validation of the first round of randomness."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"groupHash"}),"\xa0is the hash of a file containing the current set of nodes participating in the network. The group file is updated on every resharing."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"schemeID"}),"\xa0is the name of the scheme this network uses. The scheme specifies the type of cryptography being used to generate the randomness beacons."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"metadata"}),"\xa0contains some miscellaneous metadata about the network that is added to most packets during operation."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"chain-hashpubliclatest",children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"/{chain-hash}/public/latest"})})}),"\n",(0,d.jsx)(n.p,{children:"Retrieves the latest round of randomness. It returns a JSON object with the following structure:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'{\n  "round": 367,\n  "randomness": "3439d92d58e47d342131d446a3abe264396dd264717897af30525c98408c834f",\n  "signature": "90957ebc0719f8bfb67640aff8ca219bf9f2c5240e60a8711c968d93370d38f87b38ed234a8c63863eb81f234efce55b047478848c0de025527b3d3476dfe860632c1b799550de50a6b9540463e9fb66c8016b89c04a9f52dabdc988e69463c1",\n  "previous_signature": "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"round"}),"\xa0is a monotonically increasing integer - the randomness round index"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"randomness"}),"\xa0is a SHA-256 hash of the signature"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"signature"}),"\xa0is the\xa0",(0,d.jsx)(n.em,{children:"Boneh-Lynn-Shacham"}),"\xa0(BLS) signature for this round of randomness"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"previous_signature"}),"\xa0is the signature of the previous round of randomness"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"chain-hashpublicround",children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"/{chain-hash}/public/{round}"})})}),"\n",(0,d.jsxs)(n.p,{children:["Retrieves a previous round of randomness identified by the positive integer\xa0",(0,d.jsx)(n.code,{children:"round"}),". Note that specifying\xa0",(0,d.jsx)(n.code,{children:"0"}),"\xa0will retrieve the latest round. It returns a JSON object with the following structure:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'{\n  "round": 367,\n  "randomness": "3439d92d58e47d342131d446a3abe264396dd264717897af30525c98408c834f",\n  "signature": "90957ebc0719f8bfb67640aff8ca219bf9f2c5240e60a8711c968d93370d38f87b38ed234a8c63863eb81f234efce55b047478848c0de025527b3d3476dfe860632c1b799550de50a6b9540463e9fb66c8016b89c04a9f52dabdc988e69463c1",\n  "previous_signature": "859504eade86790ad09b2b3474d5e09d1718b549ef7107d7bbd18f5e221765ce8252d7db02664c1f6b20f40c6e8e138704d2acfeb6c5abcc14c77e3a842b2f84515e7366248ca37b1460d23b4f98493c246fbb02851f2a43a710c968a349f8d6"\n}\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"round"}),"\xa0is a sequentially increasing integer - the randomness round index"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"randomness"}),"\xa0is a SHA-256 hash of the signature"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"signature"}),"\xa0is the\xa0",(0,d.jsx)(n.em,{children:"Boneh-Lynn-Shacham"}),"\xa0(BLS) signature for this round of randomness"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"previous_signature"}),"\xa0is the signature of the previous round of randomness (note: this will is omitted for\xa0",(0,d.jsx)(n.a,{href:"../concepts/2-1-concepts-cryptography#%EF%B8%8F-chained-and-unchained-modes",children:(0,d.jsx)(n.strong,{children:"unchained networks"})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note"}),": For backwards-compatibility reasons, paths without\xa0",(0,d.jsx)(n.code,{children:"chain-hash"}),"\xa0will resort to the the default network in operation."]}),"\n",(0,d.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var d=s(6540);const i={},t=d.createContext(i);function c(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);