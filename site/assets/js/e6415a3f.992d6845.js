"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[2066],{6877:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var r=i(4848),s=i(8453);const d={id:"3-1-dev-guide-organization",title:"3.1 DevGuide: Organization",description:"A table of contents for drand packages and related bits."},c="3.1 DevGuide: Organization",l={id:"dev-guide/3-1-dev-guide-organization",title:"3.1 DevGuide: Organization",description:"A table of contents for drand packages and related bits.",source:"@site/docs/03_dev-guide/03-01-DevGuide_Organization.md",sourceDirName:"03_dev-guide",slug:"/dev-guide/3-1-dev-guide-organization",permalink:"/drand-docs/docs/dev-guide/3-1-dev-guide-organization",draft:!1,unlisted:!1,editUrl:"https://github.com/kentbull/drand-docs/tree/main/docs/03_dev-guide/03-01-DevGuide_Organization.md",tags:[],version:"current",frontMatter:{id:"3-1-dev-guide-organization",title:"3.1 DevGuide: Organization",description:"A table of contents for drand packages and related bits."},sidebar:"docsSidebar",previous:{title:"3.0 Developers Guide",permalink:"/drand-docs/docs/dev-guide/3-0-dev-guide"},next:{title:"3.2 drand-client CLI",permalink:"/drand-docs/docs/dev-guide/3-2-dev-guide-drand-client-cli"}},o={},t=[{value:"<strong>Top-level Packages</strong>",id:"top-level-packages",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"31-devguide-organization",children:"3.1 DevGuide: Organization"})}),"\n",(0,r.jsx)(n.h2,{id:"top-level-packages",children:(0,r.jsx)(n.strong,{children:"Top-level Packages"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"chain"}),"\xa0- Code for generating the sequence of beacons (implementation of which is in\xa0",(0,r.jsx)(n.code,{children:"chain/beacon"}),") after setup."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"boltdb"}),"\xa0- BoltDB storage backend."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"errors"}),"\xa0- common errors for the chain package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"memdb"}),"\xa0- in-memory storage backend."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"postgresdb"}),"\xa0- PostgreSQL storage backend."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"client"}),"\xa0- The drand client library - composition utilities for fail-over and reliable abstraction."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client/grpc"}),"\xa0- The concrete gRPC client implementation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client/http"}),"\xa0- The concrete HTTP client implementation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client/test"}),"\xa0- Mock client implementations for testing."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cmd"}),"\xa0- Binary entry points."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd/client"}),"\xa0- A client for fetching randomness."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd/client/lib"}),"\xa0- A common library for creating a client shared by\xa0",(0,r.jsx)(n.code,{children:"cmd/client"}),"\xa0and\xa0",(0,r.jsx)(n.code,{children:"cmd/relay"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd/drand-cli"}),"\xa0- The main drand group member binary."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd/relay"}),"\xa0- A relay that pulls randomness from a drand group member and exposes an HTTP server interface."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd/relay-gossip"}),"\xa0- A relay that pulls randomness from a group member and publishes it over a libp2p gossipsub topic."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"crypto"}),"\xa0- Holds the schemes supported by drand."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"core"}),"\xa0- The primary Service interface of drand commands."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"core/migration"}),"\xa0- A library for migrating drand files from single-beacon to multi-beacon version."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"demo"}),"\xa0- A framework for integration testing."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"deploy"}),"\xa0- Records of previous drand deployments."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"docker"}),"\xa0- Helpers for docker image packaging."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"docs"}),"\xa0- Here."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"entropy"}),"\xa0- A common abstraction for ingesting randomness."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fs"}),"\xa0- Utilities for durable state storage."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hooks"}),"\xa0- Docker helper entry point."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"http"}),"\xa0- The publicly exposed HTTP server for exposing randomness."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"key"}),"\xa0- Validation of signatures."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"log"}),"\xa0- Common logging library."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"lp2p"}),"\xa0- Utilities for constructing a\xa0",(0,r.jsx)(n.a,{href:"https://libp2p.io/",children:"libp2p"}),"\xa0host."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lp2p/client"}),"\xa0- The concrete gossip client implementation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"metrics"}),"\xa0- The Prometheus metrics server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"net"}),"\xa0- gRPC service handlers for inter-node communication."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"protobuf/drand"}),"\xa0- Definitions for the wire format interface of inter-node communication."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"test"}),"\xa0- Testing helper utilities."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"test/docker"}),"\xa0- Files and related scripts for testing drand networks on docker."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var r=i(6540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);