(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[7766],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,h=u["".concat(c,".").concat(m)]||u[m]||l[m]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9951:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var a=t(2122),s=t(9756),r=(t(7294),t(3905)),o=["components"],i={title:"PSS Messaging",id:"pss"},c={unversionedId:"dapps-on-sana/pss",id:"dapps-on-sana/pss",isDocsHomePage:!1,title:"PSS Messaging",description:"Out of the ashes of Ethereum's vision for a leak-proof decentralised anonymous messaging system - Whisper - comes PSS (or BZZ, whispered! \ud83e\udd2b). Sana provides the ability to send messages that appear to be normal Sana traffic, but are in fact messages that may be received and decrypted to reveal their content only by the specific nodes they were intended to be received by.",source:"@site/docs/dapps-on-sana/pss.md",sourceDirName:"dapps-on-sana",slug:"/dapps-on-sana/pss",permalink:"/docs/dapps-on-sana/pss",editUrl:"https://github.com/ethsana/sana-docs/blob/master/sidebars.js/docs/dapps-on-sana/pss.md",version:"current",frontMatter:{title:"PSS Messaging",id:"pss"}},p=[{value:"Subscribe and Receive Messages",id:"subscribe-and-receive-messages",children:[]},{value:"Send Messages",id:"send-messages",children:[]},{value:"Send Messages in a Test Network",id:"send-messages-in-a-test-network",children:[]}],d={toc:p};function l(e){var n=e.components,t=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Out of the ashes of Ethereum's vision for a leak-proof decentralised anonymous messaging system - Whisper - comes PSS (or BZZ, whispered! \ud83e\udd2b). Sana provides the ability to send messages that appear to be normal Sana traffic, but are in fact messages that may be received and decrypted to reveal their content only by the specific nodes they were intended to be received by."),(0,r.kt)("p",null,"PSS provides a pub-sub facility that can be used for a variety of tasks. Nodes are able to listen to messages received for a specific topic in their nearest neighbourhood and create messages destined for another neighbourhood which are sent over the network using Sana's usual data dissemination protocols."),(0,r.kt)("h3",{id:"subscribe-and-receive-messages"},"Subscribe and Receive Messages"),(0,r.kt)("p",null,"Once your Ant node is up and running, you will be able to subscribe to feeds using WebSockets. For testing, it is useful to use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/crate/websocat/1.0.1"},"websocat")," command line utility."),(0,r.kt)("p",null,"Here we subscribe to the topic ",(0,r.kt)("inlineCode",{parentName:"p"},"test-topic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ws://localhost:1633/pss/subscribe/test-topic\n")),(0,r.kt)("p",null,"Our node is now watching for new messages received in its nearest neighbourhood."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Because a message is disguised as a normal chunk in Sana, you will receive the message upon syncing the chunk, even if your node is not online at the moment when the message was send to you."))),(0,r.kt)("h3",{id:"send-messages"},"Send Messages"),(0,r.kt)("p",null,"Messages can be sent simply by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the PSS API endpoint."),(0,r.kt)("p",null,"When sending messages, we must specify a 'target' prefix of the\nrecipient's Sana address, a partial address representing their\nneighbourhood. Currently the length of this prefix is recommended to\nbe two bytes, which will work well until the network has grown to a\nsize of ca. 20-50K nodes. We must also provide the public key, so that\nAnt can encrypt the message in such a way that it may only be read by\nthe intended recipient."),(0,r.kt)("p",null,"For example, if we want to send a PSS message with ",(0,r.kt)("strong",{parentName:"p"},"topic")," ",(0,r.kt)("inlineCode",{parentName:"p"},"test-topic")," to a node with address..."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"7bc50a5d79cb69fa5a0df519c6cc7b420034faaa61c175b88fc4c683f7c79d96")," "),(0,r.kt)("p",null,"...and public key..."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd")),(0,r.kt)("p",null,"...we must include the ",(0,r.kt)("strong",{parentName:"p"},"target")," ",(0,r.kt)("inlineCode",{parentName:"p"},"7bc5")," and the public key itself as a query argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST \\\nlocalhost:1833/pss/send/test-topic/7bc5?recipient=0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd \\\n--data "Hello Sana"\n')),(0,r.kt)("h3",{id:"send-messages-in-a-test-network"},"Send Messages in a Test Network"),(0,r.kt)("p",null,"Now, let's see this in action by setting up two Ant nodes on a test network, connecting them, and sending PSS messages from one to the other."),(0,r.kt)("p",null,"First start two Ant nodes. We will start them with distinct ports for\nthe API, Debug API, and p2p port, since they will be running on the\nsame computer."),(0,r.kt)("p",null,"Run the following command to start the first node. Note that we are passing ",(0,r.kt)("inlineCode",{parentName:"p"},'""')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"--bootnode")," argument so that our nodes will not connect to a network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ant start \\\n    --api-addr=:1833 \\\n    --debug-api-enable \\\n    --debug-api-addr=:1835 \\\n    --data-dir=/tmp/ant2 \\\n    --bootnode="" \\\n    --p2p-addr=:1834 \\\n    --swap-endpoint=https://stake.getblock.io/mainnet/?api_key=your-api-key\n')),(0,r.kt)("p",null,"We must make a note of the Sana overlay address, underlay address and public key which are created once each node has started. We find this information from the addresses endpoint of the Debug API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1835/addresses | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overlay": "46275b02b644a81c8776e2459531be2b2f34a94d47947feb03bc1e209678176c",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/7072/p2p/16Uiu2HAmTbaZndBa43PdBHEekjQQEdHqcyPgPc3oQwLoB2hRf1jq",\n    "/ip4/192.168.0.10/tcp/7072/p2p/16Uiu2HAmTbaZndBa43PdBHEekjQQEdHqcyPgPc3oQwLoB2hRf1jq",\n    "/ip6/::1/tcp/7072/p2p/16Uiu2HAmTbaZndBa43PdBHEekjQQEdHqcyPgPc3oQwLoB2hRf1jq"\n  ],\n  "ethereum": "0x0b546f2817d0d889bd70e244c1227f331f2edf74",\n  "public_key": "03660e8dbcf3fda791e8e2e50bce658a96d766e68eb6caa00ce2bb87c1937f02a5"\n}\n')),(0,r.kt)("p",null,"Now the same for the second node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ant start \\\n    --api-addr=:1933 \\\n    --debug-api-enable \\\n    --debug-api-addr=:1935 \\\n    --data-dir=/tmp/ant3 \\\n    --bootnode="" \\\n    --p2p-addr=:1934 \\\n    --swap-endpoint=https://stake.getblock.io/mainnet/?api_key=your-api-key\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1935/addresses | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overlay": "085b5cf15a08f59b9d64e8ce3722a95b2c150bb6a2cef4ac8b612ee8b7872253",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/7073/p2p/16Uiu2HAm5RwRgkZWxDMAff2io6L4Qd1uL9yNgZSNTCdPsukcg5Qr",\n    "/ip4/192.168.0.10/tcp/7073/p2p/16Uiu2HAm5RwRgkZWxDMAff2io6L4Qd1uL9yNgZSNTCdPsukcg5Qr",\n    "/ip6/::1/tcp/7073/p2p/16Uiu2HAm5RwRgkZWxDMAff2io6L4Qd1uL9yNgZSNTCdPsukcg5Qr"\n  ],\n  "ethereum": "0x9ec47bd86a82276fba57f3009c2f6b3ace4286bf",\n  "public_key": "0289634662d3ed7c9fb1d7d2a3690b69b4075cf138b683380023d2edc2e6847826"\n}\n')),(0,r.kt)("p",null,"Because we configured the nodes to start with no bootnodes, neither node should have peers yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1835/peers | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1935/peers | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peers": []\n}\n')),(0,r.kt)("p",null,"Let's connect node 2 to node 1 using the localhost (127.0.0.1) underlay address for node 1 that we have noted earlier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XPOST \\\n  localhost:1935/connect/ip4/127.0.0.1/tcp/1834/p2p/16Uiu2HAmP9i7VoEcaGtHiyB6v7HieoiB9v7GFVZcL2VkSRnFwCHr\n")),(0,r.kt)("p",null,"Now, if we check our peers endpoint for node 1, we can see our nodes are now peered together."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1835/peers | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peers": [\n    {\n      "address": "a231764383d7c46c60a6571905e72021a90d506ef8db06750f8a708d93fe706e"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Of course, since we are p2p, node 2 will show node 1 as a peer too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s localhost:1935/peers | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peers": [\n    {\n      "address": "7bc50a5d79cb69fa5a0df519c6cc7b420034faaa61c175b88fc4c683f7c79d96"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"websocat")," to listen for the PSS messages' Topic ID\n",(0,r.kt)("inlineCode",{parentName:"p"},"test-topic")," on our first node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ws://localhost:1833/pss/subscribe/test-topic\n")),(0,r.kt)("p",null,"Now we can use PSS to send a message from our second node to our first node. "),(0,r.kt)("p",null,"Since our first node has a 2 byte address prefix of ",(0,r.kt)("inlineCode",{parentName:"p"},"a231"),", we will specify this as the ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," section in our POST request's URL. We must also include the public key of the recipient as a query parameter so that the message can be encrypted in a way only our recipient can decrypt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n  -XPOST "localhost:1933/pss/send/test-topic/7bc5?recipient=0349f7b9a6fa41b3a123c64706a072014d27f56accd9a0e92b06fe8516e470d8dd" \\\n  --data "Hello Sana"\n')),(0,r.kt)("p",null,"The PSS API endpoint will now create a PSS message for its recipient\nin the form of a 'Trojan Chunk' and send this into the network so that\nit may be pushed to the correct neighbourhood. Once it is received by\nits recipient it will be decrypted and determined to be a message with\nthe topic we are listening for. Our second node will decrypt the data\nand we'll see a message pop up in our ",(0,r.kt)("inlineCode",{parentName:"p"},"websocat")," console!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ws://localhost:1833/pss/subscribe/test-topic\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello Sana\n")),(0,r.kt)("p",null,"Congratulations! \ud83c\udf89 You have sent your first encrypted, zero leak message over Sana!"))}l.isMDXComponent=!0}}]);