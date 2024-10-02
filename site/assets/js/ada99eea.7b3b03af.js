"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[6646],{8233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(4848),o=t(8453);const s={slug:"create-a-notion-widget",title:"Notion Widget for drand Public Randomness!",description:"Creating a Notion Widget to display the latest Public Randomness from drand!",authors:["yolan"],tags:["how-to","beginner","features"],date:new Date("2024-07-26T00:00:00.000Z")},i=void 0,r={permalink:"/blog/create-a-notion-widget",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2024-07-26-creating-a-notion-widget-to-display-the-latest-pub.md",source:"@site/blog/2024-07-26-creating-a-notion-widget-to-display-the-latest-pub.md",title:"Notion Widget for drand Public Randomness!",description:"Creating a Notion Widget to display the latest Public Randomness from drand!",date:"2024-07-26T00:00:00.000Z",tags:[{inline:!1,label:"How-to",permalink:"/blog/tags/how-to",description:"how to tag"},{inline:!1,label:"Beginner",permalink:"/blog/tags/beginner",description:"beginner tag"},{inline:!1,label:"Features",permalink:"/blog/tags/features",description:"begginer tag"}],readingTime:5.536666666666667,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",page:{permalink:"/blog/authors/yolan"},imageURL:"/img/author/yolan.jpeg",key:"yolan"}],frontMatter:{slug:"create-a-notion-widget",title:"Notion Widget for drand Public Randomness!",description:"Creating a Notion Widget to display the latest Public Randomness from drand!",authors:["yolan"],tags:["how-to","beginner","features"],date:"2024-07-26T00:00:00.000Z"},unlisted:!1,prevItem:{title:"fastnet sunsetting dates are set",permalink:"/blog/fastnet-sunsetting-dates-set"},nextItem:{title:"Retro on the drand testnet outage of Feb 21, 2024",permalink:"/blog/retro-drand-testnet-outage-2024-02-21"}},d={authorsImageUrls:[void 0]},l=[{value:"Creating a Notion Widget to display the latest Public Randomness from drand!",id:"creating-a-notion-widget-to-display-the-latest-public-randomness-from-drand",level:2},{value:"An overview of drand",id:"an-overview-of-drand",level:2},{value:"Step into Notion Widgets",id:"step-into-notion-widgets",level:2},{value:"ReactJS Component",id:"reactjs-component",level:2},{value:"GitHub Pages Component",id:"github-pages-component",level:2},{value:"Step 1: Install GitHub Pages Package",id:"step-1-install-github-pages-package",level:3},{value:"Step 2: Update\xa0<code>package.json</code>",id:"step-2-updatepackagejson",level:3},{value:"Step 3: Initialize Git Repository",id:"step-3-initialize-git-repository",level:3},{value:"Step 4: Deploy to GitHub Pages",id:"step-4-deploy-to-github-pages",level:3},{value:"Step 5: Access Your Deployed App",id:"step-5-access-your-deployed-app",level:3},{value:"Putting it Together",id:"putting-it-together",level:2},{value:"To Recap",id:"to-recap",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"creating-a-notion-widget-to-display-the-latest-public-randomness-from-drand",children:"Creating a Notion Widget to display the latest Public Randomness from drand!"}),"\n",(0,a.jsxs)(n.p,{children:["In this blog post, we\u2019ll dive into creating a simple Notion widget that displays the latest public randomness from drand (for both the ",(0,a.jsx)(n.code,{children:"default"})," and ",(0,a.jsx)(n.code,{children:"quicknet"})," beacons from the League of Entropy network)."]}),"\n",(0,a.jsx)(n.h2,{id:"an-overview-of-drand",children:"An overview of drand"}),"\n",(0,a.jsxs)(n.p,{children:["Our earlier ",(0,a.jsx)(n.a,{href:"/blog/a-guide-on-how-to-use-drand",children:"blog"}),' post titled "A Guide on How to Use drand", explains the importance of public randomness and how drand provides it using a threshold network. It offers a step-by-step tutorial on setting up and using drand\'s randomness in applications, including fetching randomness with JavaScript, verifying it, and using it in real-life scenarios like coin flips and random selection. The guide emphasizes fairness and verifiability in applications requiring random numbers.']}),"\n",(0,a.jsx)(n.p,{children:"In a nutshell, drand uses a threshold network, where multiple parties collaborate to generate random numbers, ensuring no single entity can predict or bias the outcome. By leveraging hashed signatures without a complete secret key held by any party, drand achieves verifiable randomness. This system's reliability and unpredictability make it ideal for projects with a dependency on secure and verifiable randomness."}),"\n",(0,a.jsx)(n.h2,{id:"step-into-notion-widgets",children:"Step into Notion Widgets"}),"\n",(0,a.jsx)(n.p,{children:"Notion widgets are customizable, embedded elements that can be added to Notion pages to enhance functionality and interactivity. These widgets can display real-time information, like clocks, weather updates, calendars, or external content such as videos, and integrate third-party services directly within Notion. They are typically created using code snippets or widget creation tools and then embedded in Notion using the embed block feature. This enhances productivity and information accessibility within Notion workspaces."}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s make a drand notion widget!"}),"\n",(0,a.jsx)(n.h2,{id:"reactjs-component",children:"ReactJS Component"}),"\n",(0,a.jsxs)(n.p,{children:["The first step is to create a basic ReactJS application that can be embedded in any Notion page. To fetch the latest randomness beacon, the application will need to integrate drand JavaScript client. The client is publicly available ",(0,a.jsx)(n.a,{href:"https://github.com/drand/drand-client",children:"https://github.com/drand/drand-client"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Firstly, we will create a new React project and then install the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/drand-client",children:"drand client"}),". It is the same client used in the previous blog post. We will use it to interact with the drand randomness beacon networks (default network and quicknet) in our ReactJS code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install drand-client\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once the drand client is installed, we\u2019re ready to start implementing our simple ReactJS application! The application will allow users to select their desired network (i.e., default or quicknet) from a dropdown menu and display the latest randomness after each round, the round number and a countdown to the next randomness generation round or ETA."}),"\n",(0,a.jsxs)(n.p,{children:["Appropriate API URLs for the mainnet default and quicknet networks can be found here: ",(0,a.jsx)(n.a,{href:"https://docs.drand.love/docs/dev-guide/3-0-dev-guide",children:"https://docs.drand.love/docs/dev-guide/3-0-dev-guide"})]}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s implement the reactjs component in our ",(0,a.jsx)(n.code,{children:"App.js"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// React is the main library for building the UI components\n// useState, useEffect, useRef are React hooks for managing state, side effects, and mutable references, respectively.\nimport React, { useState, useEffect, useRef } from 'react';\n// This library is used to interact with the drand (decentralized randomness) network.\nimport { watch, FastestNodeClient } from 'drand-client';\n// A built-in JavaScript object for handling large integers, declared global to avoid ESLint issues.\n/* global BigInt */\n"})}),"\n",(0,a.jsx)(n.p,{children:"The main functional component of the React app is the App() function. Let\u2019s go ahead and start implementing it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"function App() {\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s add some state variables!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// The latest randomness value\nconst [latestRandomness, setLatestRandomness] = useState(null);\n// The estimated time of arrival of the next randomness\nconst [eta, setETA] = useState(null);\n// The current round number\nconst [round, setRound] = useState(null);\n// The current selected network\nconst [network, setNetwork] = useState('default');\n// A reference to the drand client instance\nconst clientRef = useRef(null);\n// A reference to an AbortController for managing asynchronous tasks\nconst abortControllerRef = useRef(null);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Following the state variables, we will implement the rest of the JavaScript fo the App component."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// useEffect runs the fetchLatestRandomness function when the component \n// mounts or when network changes.\nuseEffect(() => {\n\t\t// fetchLatestRandomness async function to fetch randomness data.\n    const fetchLatestRandomness = async () => {\n      try {\n\t      // chainHash, publicKey are set based on the selected network.\n        let chainHash, publicKey;\n        let updateInterval = 30 * 1000;\n\n        if (network === 'default') {\n          chainHash = '8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce';\n          publicKey = '868f005eb8e6e4ca0a47c8a77ceaa5309a47978a7c71bc5cce96366b5d7a569937c529eeda66c7293784a9402801af31';\n        } else if (network === 'quicknet') {\n          chainHash = '52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971';\n          publicKey = '83cf0f2896adee7eb8b5f01fcad3912212c437e0073e911fb90022d3e760183c8c4b450b6a0a6c3ac6a5776a2d1064510d1fec758c921cc22b0e17e63aaf4bcb5ed66304de9cf809bd274ca73bab4af5a6e9c76a4bc09e76eae8991ef5ece45a';\n          updateInterval = 3 * 1000;\n        }\n\n        const options = {\n          disableBeaconVerification: false,\n          noCache: false,\n          chainVerificationParams: { chainHash, publicKey }\n        };\n\t\t\t\t\n\t\t\t\t// List of drand API endpoints\n        let urls = [\n          'https://api.drand.sh',\n          'https://api2.drand.sh',\n          'https://api3.drand.sh',\n          'https://drand.cloudflare.com'\n        ];\n\n        if (network === 'quicknet') {\n          urls = urls.map(url => `${url}/${chainHash}`);\n        }\n\t\t\t\t\n\t\t\t\t// Create an instance of FastestNodeClient from drand-client\n        const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' };\n        const client = new FastestNodeClient(urls, options, { headers });\n\n        if (clientRef.current) {\n          clientRef.current.stop();\n        }\n        if (abortControllerRef.current) {\n          abortControllerRef.current.abort();\n        }\n\n        clientRef.current = client;\n        client.start();\n\n        const abortController = new AbortController();\n        abortControllerRef.current = abortController;\n\t\t\t\t\n\t\t\t\t// Asynchronously iterates over beacons (randomness values) \n\t\t\t\t// from the drand network\n        for await (const beacon of watch(client, abortController)) {\n          const currentTime = new Date().getTime();\n          // Calculate and set the next ETA for randomness\n          const nextETA = new Date(currentTime + updateInterval);\n          // Update state with new randomness data\n          setETA(nextETA.toLocaleTimeString());\n          setRound(beacon.round);\n          setLatestRandomness(BigInt(`0x${beacon.randomness}`).toString());\n        }\n      } catch (error) {\n        console.error('Error fetching randomness:', error);\n      }\n    };\n\n    fetchLatestRandomness();\n\n    return () => {\n      if (clientRef.current) {\n        clientRef.current.stop();\n      }\n      if (abortControllerRef.current) {\n        abortControllerRef.current.abort();\n      }\n    };\n  }, [network]);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, we will add a function called ",(0,a.jsx)(n.code,{children:"handleNetworkChange"})," to update the ",(0,a.jsx)(n.code,{children:"network"})," state when the user selects a different network."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const handleNetworkChange = (event) => {\n    setNetwork(event.target.value);\n  };\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the next part of the react component implementation, customise the JSX to render the UI as preferred. In our example, the UI displays a dropdown menu for users to select the preferred network (i.e., default or quicknet), the ETA of the next randomness, the latest round and the latest randomness."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Latest Randomness from drand Beacon</h1>\n\n        <div>\n          Select Beacon Network:\n          <select value={network} onChange={handleNetworkChange} style={{ marginLeft: \'10px\' }}>\n            <option value="default">Default</option>\n            <option value="quicknet">Quicknet</option>\n          </select>\n        </div>\n\n        <br />\n\n        Next Randomness ETA: {eta ? (\n          <p>{eta}</p>\n        ) : (\n          <p>Loading...</p>\n        )}\n\n        Latest Round: {round ? (\n          <p>{round}</p>\n        ) : (\n          <p>Loading...</p>\n        )}\n\n        Latest Randomness: {latestRandomness ? (\n          <p>{latestRandomness}</p>\n        ) : (\n          <p>Loading...</p>\n        )}\n      </header>\n    </div>\n  );\n\nexport default App;\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once implemented, to start the React application, run"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will launch the application on\xa0",(0,a.jsx)(n.code,{children:"http://localhost:3000"}),". Open this URL in your browser to see the latest randomness from the drand beacon."]}),"\n",(0,a.jsx)(n.p,{children:"At this point, you've successfully created a React web page that fetches and displays randomness from the drand distributed randomness beacon! This setup can be a foundation for more complex applications requiring secure and verifiable randomness."}),"\n",(0,a.jsx)(n.p,{children:"Before embedding our react app into a Notion page, we need to create a GitHub repository and push our code to the repository. This will allow us to use GitHub Pages to publish our React application to the web!"}),"\n",(0,a.jsx)(n.h2,{id:"github-pages-component",children:"GitHub Pages Component"}),"\n",(0,a.jsx)(n.p,{children:"Now that you've built a React app to display randomness from the drand beacon, the next step is to deploy it on GitHub Pages. This will make your application accessible on the web."}),"\n",(0,a.jsx)(n.h3,{id:"step-1-install-github-pages-package",children:"Step 1: Install GitHub Pages Package"}),"\n",(0,a.jsxs)(n.p,{children:["First, you need to install the\xa0",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/gh-pages",children:(0,a.jsx)(n.code,{children:"gh-pages"})}),"\xa0package, which will help you deploy your app to GitHub Pages."]}),"\n",(0,a.jsxs)(n.h3,{id:"step-2-updatepackagejson",children:["Step 2: Update\xa0",(0,a.jsx)(n.code,{children:"package.json"})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, update your\xa0",(0,a.jsx)(n.code,{children:"package.json"}),"\xa0file to include the homepage, predeploy, and deploy scripts."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Homepage"}),": Add a\xa0",(0,a.jsx)(n.code,{children:"homepage"}),"\xa0field to specify the URL where your app will be hosted. This is typically\xa0",(0,a.jsx)(n.code,{children:"https://<username>.github.io/<repository-name>"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Scripts"}),": Add\xa0",(0,a.jsx)(n.code,{children:"predeploy"}),"\xa0and\xa0",(0,a.jsx)(n.code,{children:"deploy"}),"\xa0scripts."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Here\u2019s an example of how your\xa0",(0,a.jsx)(n.code,{children:"package.json"}),"\xa0should look:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'{\n  "name": "drand-notion-widget",\n  "version": "0.1.0",\n  "private": true,\n  "homepage": "<https://yourusername.github.io/drand-notion-widget>",\n  "dependencies": {\n    "drand-client": "^0.3.1",\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2",\n    "react-scripts": "4.0.3"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d build"\n  },\n  "devDependencies": {\n    "gh-pages": "^3.2.3"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Replace\xa0",(0,a.jsx)(n.code,{children:"<username>"}),"\xa0with your GitHub username and\xa0",(0,a.jsx)(n.code,{children:"<repository-name>"}),"\xa0with the name of your GitHub repository."]}),"\n",(0,a.jsx)(n.h3,{id:"step-3-initialize-git-repository",children:"Step 3: Initialize Git Repository"}),"\n",(0,a.jsxs)(n.p,{children:["Go to ",(0,a.jsx)(n.a,{href:"https://github.com/",children:"GitHub"})," and create a new repository with the same name you used in the ",(0,a.jsx)(n.code,{children:"homepage"})," field of your ",(0,a.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Follow the instructions provided by GitHub to link your local repository to the newly created GitHub repository."}),"\n",(0,a.jsx)(n.h3,{id:"step-4-deploy-to-github-pages",children:"Step 4: Deploy to GitHub Pages"}),"\n",(0,a.jsx)(n.p,{children:"Finally, run the deploy script:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run deploy\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command will create a production build of your React app and deploy it to the ",(0,a.jsx)(n.code,{children:"gh-pages"})," branch of your GitHub repository. GitHub Pages will then serve your application from this branch."]}),"\n",(0,a.jsx)(n.h3,{id:"step-5-access-your-deployed-app",children:"Step 5: Access Your Deployed App"}),"\n",(0,a.jsxs)(n.p,{children:["After deploying, your app should be accessible at ",(0,a.jsx)(n.code,{children:"https://<username>.github.io/<repository-name>"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"By following these steps, you will have successfully deployed your React application to GitHub Pages, making it accessible to anyone with the URL. Happy deploying!"}),"\n",(0,a.jsx)(n.h2,{id:"putting-it-together",children:"Putting it Together"}),"\n",(0,a.jsxs)(n.p,{children:["With the GitHub Pages URL ready (e.g.,\xa0",(0,a.jsx)(n.code,{children:"https://yourusername.github.io/drand-notion-widget"}),"), we can embed the drand reactjs application we deployed earlier in Notion."]}),"\n",(0,a.jsx)(n.p,{children:"Open the Notion page where you want to embed the URL, and embed it with the following steps:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Click on the\xa0",(0,a.jsx)(n.code,{children:"+"}),"\xa0button to add a new block or type\xa0",(0,a.jsx)(n.code,{children:"/embed"}),"\xa0to bring up the embed block option."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Screenshot 2024-07-25 at 09.41.46.png",src:t(7125).A+"",width:"1020",height:"886"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Screenshot 2024-07-25 at 09.41.53.png",src:t(9763).A+"",width:"1588",height:"612"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Select the\xa0",(0,a.jsx)(n.code,{children:"Embed"}),"\xa0option from the list."]}),"\n",(0,a.jsx)(n.li,{children:"Paste your GitHub Pages URL into the embed block."}),"\n",(0,a.jsxs)(n.li,{children:["Press\xa0",(0,a.jsx)(n.code,{children:"Enter"}),"\xa0or click on the\xa0",(0,a.jsx)(n.code,{children:"Embed link"}),"\xa0button."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Once the URL is embedded, you can resize the embed block by dragging the handles on the sides to fit your content appropriately. Notion might show a preview of your web app directly within the page, depending on how your app is configured and the type of content it displays."}),"\n",(0,a.jsx)(n.p,{children:"An example drand widget embedded in a Notion page is shown below."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Screenshot 2024-07-24 at 15.36.43.png",src:t(5404).A+"",width:"1922",height:"748"})}),"\n",(0,a.jsx)(n.h3,{id:"to-recap",children:"To Recap"}),"\n",(0,a.jsx)(n.p,{children:"We have successfully created a ReactJS application that displays the latest drand randomness beacon from both drand main network options (default and quicknet)!"}),"\n",(0,a.jsxs)(n.p,{children:["We could do more with our Notion widget, e.g., styling it to our preference. To do this, simply modify the ReactJS code and redeploy it using ",(0,a.jsx)(n.code,{children:"gh-pages"})," and the changes should be reflected at the same URL."]}),"\n",(0,a.jsx)(n.p,{children:"Happy coding!"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5404:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Screenshot_2024-07-24_at_15.36.43-66e623706df99cd2f9f9fbf602aff9e0.png"},7125:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Screenshot_2024-07-25_at_09.41.46-51cb1fc8d8c0eebb3c7a68e585dd31fa.png"},9763:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Screenshot_2024-07-25_at_09.41.53-afb823041d1fd56760db0810cf71e090.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);