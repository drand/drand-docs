"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[840],{4088:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"dev-guide/3-3-dev-guide-client-libraries","title":"3.3 Client Libraries","description":"Instructions for installing and using client libraries.","source":"@site/docs/03_dev-guide/03-03-Client_Libraries.mdx","sourceDirName":"03_dev-guide","slug":"/dev-guide/3-3-dev-guide-client-libraries","permalink":"/docs/dev-guide/3-3-dev-guide-client-libraries","draft":false,"unlisted":false,"editUrl":"https://github.com/drand/drand-docs/tree/master/docs/03_dev-guide/03-03-Client_Libraries.mdx","tags":[],"version":"current","frontMatter":{"id":"3-3-dev-guide-client-libraries","title":"3.3 Client Libraries","description":"Instructions for installing and using client libraries."},"sidebar":"docsSidebar","previous":{"title":"3.2 drand-client CLI","permalink":"/docs/dev-guide/3-2-dev-guide-drand-client-cli"},"next":{"title":"3.4 HTTP API","permalink":"/docs/dev-guide/3-4-dev-guide-http-api"}}');var s=i(4848),d=i(8453);const t=i.p+"assets/images/Go-Logo_Blue-f79fbdc585a412b47742616cafddab9d.png",l=i.p+"assets/images/JavaScriptBadge-66a6ea9f71573616bf8a59034f74c4f5.png",a={id:"3-3-dev-guide-client-libraries",title:"3.3 Client Libraries",description:"Instructions for installing and using client libraries."},c="3.3 drand Client Libraries",o={},h=[{value:"<strong>Install</strong>",id:"install",level:3},{value:"<strong>Usage</strong>",id:"usage",level:3},{value:"<strong>Install</strong>",id:"install-1",level:3},{value:"<strong>Usage</strong>",id:"usage-1",level:3}];function g(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"33-drand-client-libraries",children:"3.3 drand Client Libraries"})}),"\n",(0,s.jsxs)(n.p,{children:["Client libraries enable easy access to drand randomness in specific programming languages. They also provide peace of mind by\xa0",(0,s.jsx)(n.em,{children:"verifying"}),"\xa0randomness rounds and add additional features like failover, racing, aggregation, and caching."]}),"\n",(0,s.jsxs)(n.p,{children:["Drand randomness is available over\xa0",(0,s.jsx)(n.a,{href:"./3-4-dev-guide-http-api",children:(0,s.jsx)(n.strong,{children:"HTTP"})}),",\xa0",(0,s.jsx)(n.a,{href:"./3-5-dev-guide-pubsub-network",children:(0,s.jsx)(n.strong,{children:"libp2p PubSub"})}),"\xa0and gRPC."]}),"\n",(0,s.jsx)(n.p,{children:"Currently, the following client libraries are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/drand/drand",children:(0,s.jsx)(n.strong,{children:"Go"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/drand/drand-client",children:(0,s.jsx)(n.strong,{children:"JavaScript"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If your application cannot use the libraries above, you can still use the\xa0",(0,s.jsx)(n.a,{href:"./3-2-dev-guide-drand-client-cli",children:(0,s.jsx)(n.strong,{children:"drand-client CLI"})}),"\xa0or make requests to the\xa0",(0,s.jsx)(n.a,{href:"./3-4-dev-guide-http-api",children:(0,s.jsx)(n.strong,{children:"HTTP API"})}),"\xa0endpoints. If you have created a client library or know of a client library not listed here,\xa0",(0,s.jsx)(n.a,{href:"https://github.com/drand/website/issues/new",children:(0,s.jsx)(n.strong,{children:"please let us know by opening an issue"})}),"."]}),"\n",(0,s.jsx)("img",{src:t,alt:"Go Logo",width:"100"}),"\n",(0,s.jsx)(n.h3,{id:"install",children:(0,s.jsx)(n.strong,{children:"Install"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"go get github.com/drand/drand\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:(0,s.jsx)(n.strong,{children:"Usage"})}),"\n",(0,s.jsxs)(n.p,{children:["The Go drand client library is structured with a base client interface in\xa0",(0,s.jsx)(n.code,{children:"/client"}),", and with protocol-specific transport implementations in\xa0",(0,s.jsx)(n.code,{children:"/client/http"}),",\xa0",(0,s.jsx)(n.code,{children:"/client/grpc"}),"\xa0and\xa0",(0,s.jsx)(n.code,{children:"/lp2p/client"}),". The main\xa0",(0,s.jsx)(n.code,{children:"client"}),"\xa0package holds transport agnostic logic for retrying, validation, and caching."]}),"\n",(0,s.jsx)(n.p,{children:"For documentation and examples please check the Go clients reference:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Transport agnostic top-level client:\xa0",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/drand/drand/client",children:(0,s.jsx)(n.strong,{children:"https://pkg.go.dev/github.com/drand/drand/client"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Client implementations (to be used with the above):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./3-4-dev-guide-http-api",children:(0,s.jsx)(n.strong,{children:"HTTP"})}),"\xa0client:\xa0",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/drand/drand/client/http",children:(0,s.jsx)(n.strong,{children:"https://pkg.go.dev/github.com/drand/drand/client/http"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./3-5-dev-guide-pubsub-network",children:(0,s.jsx)(n.strong,{children:"libp2p gossip"})}),"\xa0client:\xa0",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/drand/drand/lp2p/client",children:(0,s.jsx)(n.strong,{children:"https://pkg.go.dev/github.com/drand/drand/lp2p/client"})})]}),"\n",(0,s.jsxs)(n.li,{children:["gRPC client:\xa0",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/drand/drand/client/grpc",children:(0,s.jsx)(n.strong,{children:"https://pkg.go.dev/github.com/drand/drand/client/grpc"})})]}),"\n"]}),"\n",(0,s.jsx)("img",{src:l,width:"100"}),"\n",(0,s.jsx)(n.h3,{id:"install-1",children:(0,s.jsx)(n.strong,{children:"Install"})}),"\n",(0,s.jsxs)(n.p,{children:["In the browser or\xa0",(0,s.jsx)(n.a,{href:"https://deno.land/",children:"Deno"})," you can grab and use the client from a CDN e.g.\xa0",(0,s.jsx)(n.a,{href:"https://cdn.jsdelivr.net/npm/drand-client/drand.js",children:"https://cdn.jsdelivr.net/npm/drand-client/drand.js"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In\xa0",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"}),", install with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"npm install drand-client\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:(0,s.jsx)(n.strong,{children:"Usage"})}),"\n",(0,s.jsxs)(n.p,{children:["The JS drand client is an esmodule. It has no dependencies and is not transpiled. It can be\xa0",(0,s.jsx)(n.code,{children:"import"}),"ed directly in the browser, Deno or Node.js. In Node.js it can be imported from CommonJS using\xa0",(0,s.jsx)(n.code,{children:"await import('...')"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/drand/drand-client#usage",children:(0,s.jsx)(n.strong,{children:"Usage and examples"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/drand/drand-client#api",children:(0,s.jsx)(n.strong,{children:"API reference"})})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);