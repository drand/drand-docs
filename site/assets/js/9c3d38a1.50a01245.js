"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[5081],{1586:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var d=s(4848),a=s(8453);const i={id:"3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages."},c="3.6 DevGuide: Code Examples",r={id:"dev-guide/3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages.",source:"@site/docs/03_dev-guide/03-06-DevGuide_Code_Examples.md",sourceDirName:"03_dev-guide",slug:"/dev-guide/3-6-dev-guide-code-examples",permalink:"/docs/dev-guide/3-6-dev-guide-code-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/drand/drand-docs/tree/main/docs/03_dev-guide/03-06-DevGuide_Code_Examples.md",tags:[],version:"current",frontMatter:{id:"3-6-dev-guide-code-examples",title:"3.6 Code Examples",description:"Examples of how to integrate drand in various coding languages."},sidebar:"docsSidebar",previous:{title:"3.5 PubSub Network",permalink:"/docs/dev-guide/3-5-dev-guide-pubsub-network"},next:{title:"4.0 OPERATORS GUIDE",permalink:"/docs/category/40-operators-guide"}},t={},o=[{value:"Golang",id:"golang",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Python (WIP)",id:"python-wip",level:3},{value:"Postman Collection (WIP)",id:"postman-collection-wip",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"36-devguide-code-examples",children:"3.6 DevGuide: Code Examples"})}),"\n",(0,d.jsx)(n.p,{children:"drand is easy to use with clients in Go and JavaScript as shown here."}),"\n",(0,d.jsx)(n.p,{children:"The HTTP API is how other languages can interact with drand. A Python example is provided below."}),"\n",(0,d.jsx)(n.h2,{id:"golang",children:"Golang"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["First, ",(0,d.jsx)(n.a,{href:"https://go.dev/doc/install",children:"install Go"})," if needed. With Homebrew the command is ",(0,d.jsx)(n.code,{children:"brew install go"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Then set up your project directory, the ",(0,d.jsx)(n.code,{children:"main.go"})," file if you need it, and your ",(0,d.jsx)(n.code,{children:"go.mod"})," file."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\ncd myproject\ntouch main.go\ntouch go.mod\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Add the ",(0,d.jsx)(n.em,{children:"drand"})," library to your ",(0,d.jsx)(n.code,{children:"go.mod"})," file with:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go mod init myproject\ngo get github.com/drand/drand\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["We show a simple ",(0,d.jsx)(n.code,{children:"main.go"})," illustrating how to instantiate a client and get randomness from drand."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "encoding/hex"\n    "fmt"\n    "github.com/drand/drand/client"\n    "github.com/drand/drand/client/http"\n    "log"\n)\n\nvar urls = []string{\n    "https://api.drand.sh",         // Official drand API server\n    "https://drand.cloudflare.com", // Cloudflare\'s drand API server\n}\n\nvar chainHash, _ = hex.DecodeString("8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce")\n\nfunc main() {\n    c, err := client.New(\n        client.From(http.ForURLs(urls, chainHash)...),\n        client.WithChainHash(chainHash),\n    )\n    if err != nil {\n    log.Fatalf("error creating client: %v", err)\n    }\n    \n    rand, err := c.Get(context.Background(), 0)\n    if err != nil {\n        log.Fatalf("Failed to get randomness: %v", err)\n    }\n\n    fmt.Printf("drand randomness: %s\\n", hex.EncodeToString(rand.Randomness()))\n}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsxs)(n.li,{children:["Then to run the code:","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go run main.go\n"})}),"\n","or","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"go build -o myproject main.go\n./myproject\n"})}),"\n","This should output something like:","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"drand randomness: d4ab1d7798a2aa7c9bc0d436088c72ca35b8e4a859cafda4f827b7b93905188d\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"javascript",children:"JavaScript"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Install Node.js"})," if needed. The Homebrew command is ",(0,d.jsx)(n.code,{children:"brew install node"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Set up your project directory, the ",(0,d.jsx)(n.code,{children:"index.js"})," file if you need it, and your ",(0,d.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\ncd myproject\nmkdir src\ntouch package.json \ntouch src/index.js\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Add your ",(0,d.jsx)(n.code,{children:"package.json"})," file like so:"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "name": "myproject",\n    "version": "1.0.0",\n    "description": "",\n    "main": "src/index.js",\n    "type": "module",\n    "scripts": {\n        "start": "node src/index.js"\n    },\n    "private": true,\n    "dependencies": {\n        "drand-client": "^1.2.6"\n    }\n}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsxs)(n.li,{children:["Install the drand Javascript client library ",(0,d.jsx)(n.code,{children:"drand-client"}),":","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm install -S drand-client\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["We show a simple ",(0,d.jsx)(n.code,{children:"index.js"})," illustrating how to instantiate a client and get randomness from drand."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-javascript",children:"import {FastestNodeClient, fetchBeacon, HttpCachingChain, HttpChainClient} from \"drand-client\";\n\n\nconst chainHash = '8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce' // (hex encoded)\nconst publicKey = '868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31' // (hex encoded)\n\nconst options = {\n  disableBeaconVerification: false, // `true` disables checking of signatures on beacons - faster but insecure!!!\n  noCache: false, // `true` disables caching when retrieving beacons for some providers\n  chainVerificationParams: {chainHash, publicKey}  // these are optional, but recommended! They are compared for parity against the `/info` output of a given node\n}\n\n// shows creating a basic client for a specific node and getting randomness from that client\nasync function getRandomness() {\n   const chain = new HttpCachingChain('https://api.drand.sh', options)\n   const client = new HttpChainClient(chain, options)\n   const beacon = await fetchBeacon(client)\n   return beacon.randomness\n}\n\n// shows creating a client that finds the fastest node and gets randomness from that node\nasync function getRandomnessFastNode(){\n   const urls = [\n      'https://api.drand.sh',\n      'https://drand.cloudflare.com'\n   ]\n   const client2 = new FastestNodeClient(urls, options)\n   client2.start()\n   const fastBeacon = await fetchBeacon(client2)\n   client2.stop()\n   return fastBeacon.randomness\n}\n\ngetRandomness()\n        .then((randomness) => console.log(`Randomness is: ${randomness}`))\n        .catch((err) => console.error('error', err))\n\ngetRandomnessFastNode()\n        .then((randomness) => console.log(`Randomness from fastest node is: ${randomness}`))\n        .catch((err) => console.error('error', err))\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsxs)(n.li,{children:["Then you can run your project with ",(0,d.jsx)(n.code,{children:"npm start"})," or ",(0,d.jsx)(n.code,{children:"node src/index.js"}),". The output will look like:","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-text",children:"Randomness from fastest node is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6\nRandomness is: 7b1f0db59345bcaa48e6d385fab911cd7a9d705b0a7f2bdf27ca7a7f47c1b1b6\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"http-api",children:"HTTP API"}),"\n",(0,d.jsx)(n.h3,{id:"python-wip",children:"Python (WIP)"}),"\n",(0,d.jsx)(n.p,{children:"This guide recommends you use Pyenv to manage Python versions as it simplifies the process.\nIt also recommends you use Pipenv for managing project dependencies for your Python project."}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["First, ",(0,d.jsx)(n.a,{href:"https://github.com/pyenv/pyenv?tab=readme-ov-file",children:"install Pyenv"})," with brew: ",(0,d.jsx)(n.code,{children:"brew install pyenv"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Then ",(0,d.jsx)(n.a,{href:"https://pipenv.pypa.io/en/latest/installation.html",children:"install Pipenv"})," with ",(0,d.jsx)(n.code,{children:"brew install pipenv"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Then install Python 3.12.3 with Pipenv: ",(0,d.jsx)(n.code,{children:"pyenv install 3.12.3"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Set Python 3.12.3 to be in use globally with ",(0,d.jsx)(n.code,{children:"pyenv global 3.12.3"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Set up your project directory, dependency management Pipfile, and your Python module."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\ncd myproject\ntouch main.py\ntouch Pipfile\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Add the ",(0,d.jsx)(n.code,{children:"reqests"})," library to your ",(0,d.jsx)(n.code,{children:"Pipfile"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pipenv install requests\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Make an HTTP request to ",(0,d.jsx)(n.code,{children:"https://pl-us.testnet.drand.sh/chains"})," to get the list of chains."]}),"\n",(0,d.jsxs)(n.p,{children:["Select the first chain and save it in a variable, say ",(0,d.jsx)(n.code,{children:"chain-hash"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Sample JSON response:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'[\n"84b2234fb34e835dccd048255d7ad3194b81af7d978c3bf157e3469592ae4e02",\n"cc9c398442737cbd141526600919edd69f1d6f9b4adb67e4d912fbc64341a9a5",\n"f3827d772c155f95a9fda8901ddd59591a082df5ac6efe3a479ddb1f5eeb202c",\n"7672797f548f3f4748ac4bf3352fc6c6b6468c9ad40ad456a397545c6e2df5bf"\n]\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["To get the chain information make an HTTP request to ",(0,d.jsx)(n.code,{children:'f"https://pl-us.testnet.drand.sh/{chain-hash}/info"'})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"postman-collection-wip",children:"Postman Collection (WIP)"}),"\n",(0,d.jsx)(n.p,{children:"TBD"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var d=s(6540);const a={},i=d.createContext(a);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);