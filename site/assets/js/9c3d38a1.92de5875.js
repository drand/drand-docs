"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[5081],{1586:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var s=a(4848),d=a(8453);const r={id:"3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages."},o="3.6 DevGuide: Code Examples",i={id:"dev-guide/3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages.",source:"@site/docs/03_dev-guide/03-06-DevGuide_Code_Examples.md",sourceDirName:"03_dev-guide",slug:"/dev-guide/3-6-dev-guide-code-examples",permalink:"/drand-docs/docs/dev-guide/3-6-dev-guide-code-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/kentbull/drand-docs/tree/main/docs/03_dev-guide/03-06-DevGuide_Code_Examples.md",tags:[],version:"current",frontMatter:{id:"3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages."},sidebar:"docsSidebar",previous:{title:"3.5 PubSub Network",permalink:"/drand-docs/docs/dev-guide/3-5-dev-guide-pubsub-network"},next:{title:"4.0 OPERATORS GUIDE",permalink:"/drand-docs/docs/category/40-operators-guide"}},c={},t=[{value:"Golang",id:"golang",level:2},{value:"JavaScript",id:"javascript",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"36-devguide-code-examples",children:"3.6 DevGuide: Code Examples"})}),"\n",(0,s.jsx)(n.p,{children:"drand is easy to use with clients in Go and JavaScript as shown here. The HTTP API is how other languages can interact with drand. A Python example is provided below."}),"\n",(0,s.jsx)(n.h2,{id:"golang",children:"Golang"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["First, ",(0,s.jsx)(n.a,{href:"https://go.dev/doc/install",children:"install Go"})," if needed. With Homebrew the command is ",(0,s.jsx)(n.code,{children:"brew install go"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Then set up your project directory, the ",(0,s.jsx)(n.code,{children:"main.go"})," file if you need it, and your ",(0,s.jsx)(n.code,{children:"go.mod"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\ncd myproject\ntouch main.go\ntouch go.mod\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the ",(0,s.jsx)(n.em,{children:"drand"})," library to your ",(0,s.jsx)(n.code,{children:"go.mod"})," file with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go mod init myproject\ngo get github.com/drand/drand\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["We show a simple ",(0,s.jsx)(n.code,{children:"main.go"})," illustrating how to instantiate a client and get randomness from drand."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/hex"\n    "fmt"\n    "github.com/drand/drand/client"\n    "github.com/drand/drand/client/http"\n    "log"\n)\n\nvar urls = []string{\n    "https://api.drand.sh",         // Official drand API server\n    "https://drand.cloudflare.com", // Cloudflare\'s drand API server\n}\n\nvar chainHash, _ = hex.DecodeString("8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce")\n\nfunc main() {\n    c, err := client.New(\n        client.From(http.ForURLs(urls, chainHash)...),\n        client.WithChainHash(chainHash),\n    )\n    if err != nil {\n    log.Fatalf("error creating client: %v", err)\n    }\n    \n    rand, err := c.Get(context.Background(), 0)\n    if err != nil {\n        log.Fatalf("Failed to get randomness: %v", err)\n    }\n\n    fmt.Printf("drand randomness: %s\\n", hex.EncodeToString(rand.Randomness()))\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Then to run the code:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n","or","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go build -o myproject main.go\n./myproject\n"})}),"\n","This should output something like:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"drand randomness: d4ab1d7798a2aa7c9bc0d436088c72ca35b8e4a859cafda4f827b7b93905188d\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Install Node.js"})," if needed. The Homebrew command is ",(0,s.jsx)(n.code,{children:"brew install node"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set up your project directory, the ",(0,s.jsx)(n.code,{children:"index.js"})," file if you need it, and your ",(0,s.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\ncd myproject\nmkdir src\ntouch package.json \ntouch src/index.js\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add your ",(0,s.jsx)(n.code,{children:"package.json"})," file like so:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "myproject",\n    "version": "1.0.0",\n    "description": "",\n    "main": "src/index.js",\n    "type": "module",\n    "scripts": {\n        "start": "node src/index.js"\n    },\n    "private": true,\n    "dependencies": {\n        "drand-client": "^1.2.6"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Install the drand Javascript client library ",(0,s.jsx)(n.code,{children:"drand-client"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install -S drand-client\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["We show a simple ",(0,s.jsx)(n.code,{children:"index.js"})," illustrating how to instantiate a client and get randomness from drand."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import {FastestNodeClient, fetchBeacon, HttpCachingChain, HttpChainClient} from \"drand-client\";\n\n\nconst chainHash = '8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce' // (hex encoded)\nconst publicKey = '868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31' // (hex encoded)\n\nconst options = {\n  disableBeaconVerification: false, // `true` disables checking of signatures on beacons - faster but insecure!!!\n  noCache: false, // `true` disables caching when retrieving beacons for some providers\n  chainVerificationParams: {chainHash, publicKey}  // these are optional, but recommended! They are compared for parity against the `/info` output of a given node\n}\n\n// shows creating a basic client for a specific node and getting randomness from that client\nasync function getRandomness() {\n   const chain = new HttpCachingChain('https://api.drand.sh', options)\n   const client = new HttpChainClient(chain, options)\n   const beacon = await fetchBeacon(client)\n   return beacon.randomness\n}\n\n// shows creating a client that finds the fastest node and gets randomness from that node\nasync function getRandomnessFastNode(){\n   const urls = [\n      'https://api.drand.sh',\n      'https://drand.cloudflare.com'\n   ]\n   const client2 = new FastestNodeClient(urls, options)\n   client2.start()\n   const fastBeacon = await fetchBeacon(client2)\n   client2.stop()\n   return fastBeacon.randomness\n}\n\ngetRandomness()\n        .then((randomness) => console.log(`Randomness is: ${randomness}`))\n        .catch((err) => console.error('error', err))\n\ngetRandomnessFastNode()\n        .then((randomness) => console.log(`Randomness from fastest node is: ${randomness}`))\n        .catch((err) => console.error('error', err))\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Then you can run your project with ",(0,s.jsx)(n.code,{children:"npm start"})," or ",(0,s.jsx)(n.code,{children:"node src/index.js"}),". The output will look like:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Randomness from fastest node is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6\nRandomness is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(6540);const d={},r=s.createContext(d);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);