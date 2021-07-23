(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[936],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8838:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),s=["components"],i={title:"Upload and Download Files",id:"upload-and-download"},l={unversionedId:"access-the-sana/upload-and-download",id:"access-the-sana/upload-and-download",isDocsHomePage:!1,title:"Upload and Download Files",description:"When you upload your files to the swarm, they are split into 4kb",source:"@site/docs/access-the-sana/upload-and-download.md",sourceDirName:"access-the-sana",slug:"/access-the-sana/upload-and-download",permalink:"/docs/access-the-sana/upload-and-download",editUrl:"https://github.com/ethsana/sana-docs/blob/master/sidebars.js/docs/access-the-sana/upload-and-download.md",version:"current",frontMatter:{title:"Upload and Download Files",id:"upload-and-download"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Purchasing Your Batch of Stamps",id:"purchasing-your-batch-of-stamps",children:[{value:"Upload",id:"upload",children:[]}]},{value:"Download",id:"download",children:[]},{value:"Public Gateways",id:"public-gateways",children:[]}],c={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you upload your files to the swarm, they are split into 4kb\n",(0,r.kt)("em",{parentName:"p"},"chunks")," and then distributed to nodes in the network that are\nresponsible for storing and serving these parts of your content. Each\nchunk has a ",(0,r.kt)("em",{parentName:"p"},"postage stamp")," stuck to it which attaches a value in BZZ\nto that chunk which you agree to ",(0,r.kt)("em",{parentName:"p"},"burn")," when buying the batch of stamps. This\nsignifies to storage nodes that this data is important, and supposed\nto be retained in the Distributable Immutable Store of Chunks\n(",(0,r.kt)("em",{parentName:"p"},"DISC"),")."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To upload data to the swarm, you must perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fund your node's wallet with BZZ."),(0,r.kt)("li",{parentName:"ol"},"Purchase a ",(0,r.kt)("em",{parentName:"li"},"batch")," of stamps and burn your BZZ."),(0,r.kt)("li",{parentName:"ol"},"Wait for the batch to propagate into the network."),(0,r.kt)("li",{parentName:"ol"},"Upload your content, specifying the ",(0,r.kt)("em",{parentName:"li"},"Batch ID")," so that Ant can attach stamps to your chunks."),(0,r.kt)("li",{parentName:"ol"},"Download your content using your content's hash.")),(0,r.kt)("h2",{id:"purchasing-your-batch-of-stamps"},"Purchasing Your Batch of Stamps"),(0,r.kt)("p",null,"In order to upload your data to swarm, you must agree to burn some of\nyour BZZ to signify to storer and fowarder nodes that the content is\nimportant. Before you progress to the next step, you must buy stamps!\nSee this guide on how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/access-the-sana/keep-your-data-alive"},"purchase an appropriate batch of\nstamps"),"."),(0,r.kt)("h3",{id:"upload"},"Upload"),(0,r.kt)("p",null,"Once your Ant node is running, a HTTP API is enabled for you to interact with. The command line utility ",(0,r.kt)("a",{parentName:"p",href:"https://ec.haxx.se/http/http-multipart"},"curl")," is a great way to interact with a Ant node's API."),(0,r.kt)("p",null,"First, let's check to see if the API is running as expected..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:1633\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ethereum Swarm Ant\n")),(0,r.kt)("p",null,"Once running, a file can be uploaded by making an HTTP POST request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"files")," endpoint of the Ant API."),(0,r.kt)("p",null,"Here, you must specify your ",(0,r.kt)("em",{parentName:"p"},"Batch ID")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Swarm-Postage-Batch-Id")," header as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -F file=@bee.jpg http://localhost:1633/bzz\n')),(0,r.kt)("p",null,"We may also pass the appropriate mime type in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," header, and a file name to the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," query parameter so that the file will be correctly handled by web browsers and other applications."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --data-binary @bee.jpg  -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -H "Content-Type: video/jpg" "http://localhost:1633/bzz?name=bee.jpg"\n')),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Data uploaded to the swarm is always public. In Swarm, sensitive files\nmust be ",(0,r.kt)("a",{parentName:"p",href:"/docs/access-the-sana/store-with-encryption"},"encrypted"),"\nbefore uploading to ensure their contents always remains private."))),(0,r.kt)("p",null,"When succesful, a JSON formatted response will be returned, containing\na ",(0,r.kt)("strong",{parentName:"p"},"swarm reference")," or ",(0,r.kt)("strong",{parentName:"p"},"hash")," which is the ",(0,r.kt)("em",{parentName:"p"},"address")," of the\nuploaded file, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"reference":"22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00"}\n')),(0,r.kt)("p",null,"Keep this ",(0,r.kt)("em",{parentName:"p"},"address")," safe, as we'll use it to retrieve our content later on."),(0,r.kt)("p",null,"In Swarm, every piece of data has a unique ",(0,r.kt)("em",{parentName:"p"},"address")," which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in Swarm super secure!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. To improve the user experience, learn how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/access-the-sana/syncing"},"follow the status of your upload"),". "),(0,r.kt)("p",{parentName:"div"},"Once your file has been ",(0,r.kt)("strong",{parentName:"p"},"completely synced with the network"),", you will be able to turn off your computer and other nodes will take over to serve the data for you!"))),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("p",null,"Once your file is uploaded into the swarm, it can be retrieved with a\nsimple HTTP GET request."),(0,r.kt)("p",null,"Substitute the ",(0,r.kt)("em",{parentName:"p"},"hash")," in the last part of the URL with the reference\nto your own data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OJ http://localhost:1633/bzz/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4\n")),(0,r.kt)("p",null,"You may even simply navigate to the URL in your browser:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00"},"http://localhost:1633/bzz/22cb...aa00")),(0,r.kt)("h2",{id:"public-gateways"},"Public Gateways"),(0,r.kt)("p",null,"To share files with someone who isn't running a Ant node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://download.gateway.ethswarm.org/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00/"},"https://download.gateway.ethswarm.org/bzz/22cb...aa00/")))}d.isMDXComponent=!0}}]);