(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[6354],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3385:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={title:"Connectivity",id:"connectivity"},l={unversionedId:"installation/connectivity",id:"installation/connectivity",isDocsHomePage:!1,title:"Connectivity",description:"To fully connect to the sana, your Sana node needs to be able to both",source:"@site/docs/installation/connectivity.md",sourceDirName:"installation",slug:"/installation/connectivity",permalink:"/docs/installation/connectivity",editUrl:"https://github.com/ethsana/sana-docs/blob/master/sidebars.js/docs/installation/connectivity.md",version:"current",frontMatter:{title:"Connectivity",id:"connectivity"}},p=[{value:"Networking Basics",id:"networking-basics",children:[]},{value:"Your IP Address",id:"your-ip-address",children:[{value:"Datacenters and Computers Connected Directly to the Internet",id:"datacenters-and-computers-connected-directly-to-the-internet",children:[]},{value:"Home, Commercial and Business Networks and Other Networks Behind NAT",id:"home-commercial-and-business-networks-and-other-networks-behind-nat",children:[]},{value:"Debugging Connectivity",id:"debugging-connectivity",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To fully connect to the sana, your Sana node needs to be able to both\nsend and receive messages from the outside world. Normally, your\nrouter will not allow other IP's on the Internet to connect, unless\nyou have initiated the connection. Ants welcome newcomers in the\nsana, as long as they play by the rules! If a node misbehaves, we\nwill simply add it to a list of blocked nodes and refuse future\nconnections from them."),(0,r.kt)("p",null,"Here at Sana, every Sana counts! To make sure all Sanas can join the\nSana, below you will find a detailed guide to navigating your way\nthrough your network and making out into the wild so you can buzz\naround fellow antss and maximise your chances of earning those SANAs. If\nyou still have problems, please join us in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord\nserver")," and we'll help you find the\nway! "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To ensure your Ant has the best chance of particpating in the sana,\nyou must ensure your Ant is able to handle ",(0,r.kt)("strong",{parentName:"p"},"both incoming and\noutgoing connections from the global Internet to its p2p port\n(",(0,r.kt)("inlineCode",{parentName:"strong"},"1634")," by default)"),". See below for a detailed guide on how to make sure\nthis is the case, or for the 1337: check your\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:1635/addresses")," to see which public ip and port\nlibp2p is advertising and verify its connectivity to the rest of the\nInternet! You may need to alter your Ant nodes ",(0,r.kt)("inlineCode",{parentName:"p"},"nat-addr"),"\nconfiguration. \ud83e\udd13"))),(0,r.kt)("h3",{id:"networking-basics"},"Networking Basics"),(0,r.kt)("p",null,"In a network, each computer is assigned an IP address. Each IP address\nis then subdivided into thousands of ",(0,r.kt)("em",{parentName:"p"},"sockets")," or ",(0,r.kt)("em",{parentName:"p"},"ports"),", each of\nwhich has an incoming and outgoing component."),(0,r.kt)("p",null,"In a completely trusted network of computers, any connections to or\nfrom any of these ports are allowed. However, to protect ourselves\nfrom nefarious actors when we join the wider Internet, it is sometimes\nimportant to filter this traffic so that some of these ports are off\nlimits to the public."),(0,r.kt)("p",null,"In order to allow messages to our p2p port from other Ant nodes that\nwe have previously not connected, we must ensure that our network is\nset up to receive incoming connections (on port ",(0,r.kt)("inlineCode",{parentName:"p"},"1634")," by default)."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are also some ports which you should never expose to the outside\nInternet. Make sure that your ",(0,r.kt)("inlineCode",{parentName:"p"},"api-addr")," (default ",(0,r.kt)("inlineCode",{parentName:"p"},"1633"),") is only ever\nexposed in ",(0,r.kt)("inlineCode",{parentName:"p"},"Gateway Mode")," and your ",(0,r.kt)("inlineCode",{parentName:"p"},"debug-api-addr")," (default ",(0,r.kt)("inlineCode",{parentName:"p"},"1635"),")\nis never exposed to the Internet. It is good practice to employ one or\nmore firewalls that block traffic on every port except for those you\nare expecting to be open."))),(0,r.kt)("h2",{id:"your-ip-address"},"Your IP Address"),(0,r.kt)("p",null,"When you connect to the Internet, you are assigned a unique number\ncalled an IP Address. IP stands for ",(0,r.kt)("strong",{parentName:"p"},"Internet Protocol"),". The most\nprevalent IP version used is ",(0,r.kt)("em",{parentName:"p"},"still")," the archaic\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPv4"},"IPv4")," which was invented way back\nin 1981. IPv6 is available but not well used. Due to the mitigation of\nthe deficiencies inherent in the IPv4 standard, we may encounter some\ncomplications."),(0,r.kt)("h3",{id:"datacenters-and-computers-connected-directly-to-the-internet"},"Datacenters and Computers Connected Directly to the Internet"),(0,r.kt)("p",null,"If you are renting space in a datacenter, the chances are that your computer will be connected directly to the real Internet. This means that the IP of your networking interface will be directly set to be the same as your public IP."),(0,r.kt)("p",null,"You can investigate this by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig\n")),(0,r.kt)("p",null,"or "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ip address\n")),(0,r.kt)("p",null,"Your output should contain something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 178.128.196.191  netmask 255.255.240.0  broadcast 178.128.207.255\n")),(0,r.kt)("p",null,"Here we can see our computer's ",(0,r.kt)("strong",{parentName:"p"},"public IP address"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"178.128.196.191"),". This is the address that is used by other computers\nwe connect to over the Internet. We can verify this using a third\nparty service such as ",(0,r.kt)("em",{parentName:"p"},"icanhazip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl icanhazip.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"178.128.196.191\n")),(0,r.kt)("p",null,"With Ant running, try to connect to your Ant's p2p port using the public IP adddress from another computer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -zv 178.128.196.191 1634\n")),(0,r.kt)("p",null,"If you have success, congratulations!"),(0,r.kt)("p",null,"If this still doesn't work for you, see the last part of ",(0,r.kt)("em",{parentName:"p"},"Manual: Configure Your Router and Ant")," section below, as you may need to configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"nat-addr"),"."),(0,r.kt)("h3",{id:"home-commercial-and-business-networks-and-other-networks-behind-nat"},"Home, Commercial and Business Networks and Other Networks Behind NAT"),(0,r.kt)("p",null,"To address the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPv4_address_exhaustion"},"scarcity of IP numbers"),",\nNetwork Address Translation (NAT) was implemented. This approach\ncreates a smaller, private network which many devices connect to in\norder to share a public IP address. Traffic destined for the Internet\nat large is then mediated by another specialised computer. In the\ncases of the a home network, this computer is the familiar home\nrouter, normally also used to provide a WiFi network."),(0,r.kt)("p",null,"If we run the above commands to find the computer's IP in this scenario, we will see a different output."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ip address\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500\n    ...\n    inet 192.168.0.10 netmask 0xffffff00 broadcast 192.168.0.255\n    ...\n")),(0,r.kt)("p",null,"Here we can see that, instead of the public IP address, we can see\nthat our computer's IP address is ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.10"),". This is part of the\nIP address space that the Internet Engineering Task Force has\ndesignated for\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Private_network"},"private networks"),"."),(0,r.kt)("p",null,"As this IP won't work on the global Internet, our router remembers\nthat our computer has been assigned this IP. It then uses ",(0,r.kt)("em",{parentName:"p"},"Network\nAddress Translation")," (NAT) to modify all requests from our computer to\nanother computer somewhere in the Internet. As the requests pass\nthrough the router it changes our local IP to the public IP of the\nrouter, and vice versa when the responses are sent back, from the\npublic IP to the local one."),(0,r.kt)("h4",{id:"navigating-through-the-nat"},"Navigating Through the NAT"),(0,r.kt)("p",null,"The presence of NAT presents two problems for p2p networking. "),(0,r.kt)("p",null,"The first is that it can be difficult for programs running on our computer to know our real public IP as it is not explicitly known by our computer's networking interface, which is configured with a private network IP. This is a relatively easy problem to solve as we can simply discover our public IP and then specify it in Ant's configuration, or indeed determine it using other means."),(0,r.kt)("p",null,"The second issue is that our router has only 65535 ports to expose to\nthe public network, however, ",(0,r.kt)("em",{parentName:"p"},"each device on your private network")," is\ncapable of exposing 65535 ",(0,r.kt)("em",{parentName:"p"},"each"),". To the global Internet, it appears\nthat there is only one set of ports to connect to, whereas, in actual\nfact, there is a full set of ports for each of the devices which are\nconnected to the private network. To solve this second problem,\nrouters commonly employ an approach known as ",(0,r.kt)("em",{parentName:"p"},"port forwarding"),"."),(0,r.kt)("p",null,"Ant's solution to these problems come in two flavours, automatic and manual."),(0,r.kt)("h5",{id:"automatic-universal-plug-and-play-upnp"},"Automatic: Universal Plug and Play (UPnP)"),(0,r.kt)("p",null,"UPnP is a protocol designed to simplify the administration of NAT and\nport forwarding for the end user by providing an API from which\nsoftware running within the network can use to ask the router for the\npublic IP and to request for ports to be forwarded to the private IP\nof the computer running the software."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"UPnP is a security risk!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"UPnP is a security risk as it allows any host or process inside\n(sometimes also outside) your network to open arbitrary ports which\nmay be used to transfer malicious traffic, for example a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remote_desktop_software#RAT"},"RAT"),". UPnP\ncan also be used to determine your IP, and in the case of using ToR or\na VPN, your ",(0,r.kt)("em",{parentName:"p"},"real")," public IP. We urge you to disable UPnP on your\nrouter and use manual port forwarding as described below."))),(0,r.kt)("p",null,"Ant will use UPnP to determine your public IP, which is required for various internal processes."),(0,r.kt)("p",null,"In addition to this, a request will be sent to your router to ask it\nto forward a random one of its ports, which are exposed directly to\nthe Internet, to the Ant p2p port (default ",(0,r.kt)("inlineCode",{parentName:"p"},"1634"),") which your computer\nis exposing only to the private network. Doing this creates a tunnel\nthrough which other Ant's may connect to your computer safely."),(0,r.kt)("p",null,"If you start your Ant node in a private network with UPnP available, the output of the addresses endpoint of your Debug API will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/86.98.94.9/tcp/20529/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP"\n]\n')),(0,r.kt)("p",null,"Note that the port in the external\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/addressing/"},"multiaddress")," is the\nrouter's randomly selected ",(0,r.kt)("inlineCode",{parentName:"p"},"20529")," which is forwarded by the router to\n",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.10:1634"),". These addresses in this multiaddress are also\nknown as the underlay addresses."),(0,r.kt)("h5",{id:"manual-configure-your-router-and-ant"},"Manual: Configure Your Router and Ant"),(0,r.kt)("p",null,"Inspecting the underlay addresses in the output of the addresses\nendpoint of our Debug API, we can see addresses only for ",(0,r.kt)("em",{parentName:"p"},"localhost"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and our ",(0,r.kt)("em",{parentName:"p"},"private network IP")," ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.10"),". Ant must be\nhaving trouble navigating our NAT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n]\n')),(0,r.kt)("p",null,"To help fix the first problem, let's determine our public IP address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl icanhazip.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"86.98.94.9\n")),(0,r.kt)("p",null,"Now we can simply supply this IP in our Ant configuration on startup."),(0,r.kt)("p",null,"Solving our second problem is a little more difficult as we will need to interact with our router's firmware, which is a little cranky."),(0,r.kt)("p",null,"Each router is different, but the concept is usually the same. Log in to your router by navigating your browser to your router's configuration user interface, usually at ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.0.1"},"http://192.168.0.1"),". You will need to log in with a password. Sadly, passwords are often left to be the defaults, which can be found readily on the Internet."),(0,r.kt)("p",null,"Once logged in, find the interface to set up port forwarding. The ",(0,r.kt)("a",{parentName:"p",href:"https://portforward.com/router.htm"},"Port Forward")," website provides some good information, or you may refer to your router manual or provider."),(0,r.kt)("p",null,"Here, we will then set up a rule that forwards port ",(0,r.kt)("inlineCode",{parentName:"p"},"1634")," of our\nprivate IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.10")," to the same port ",(0,r.kt)("inlineCode",{parentName:"p"},"1634")," of our\npublic IP."),(0,r.kt)("p",null,"Now, when requests arrive at our public address ",(0,r.kt)("inlineCode",{parentName:"p"},"86.98.94.9:1634")," they\nare modified by our router and forwarded to our private IP and port\n",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.10:1634"),"."),(0,r.kt)("p",null,"Sometimes this can be a little tricky, so let's verify we are able to make a TCP connection using ",(0,r.kt)("a",{parentName:"p",href:"https://nmap.org/ncat/"},"netcat"),"."),(0,r.kt)("p",null,"First, with Ant ",(0,r.kt)("strong",{parentName:"p"},"not")," running, let's set up a simple TCP listener using Netcat on the same machine we would like to run Ant on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -l 0.0.0.0 1634\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -zv 86.98.94.9 1634\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Connection to 86.98.94.9 port 1834 [tcp/*] succeeded!\n")),(0,r.kt)("p",null,"Success! \u2728"),(0,r.kt)("p",null,"If this didn't work for you, check out our Debugging Connectivity guide below."),(0,r.kt)("p",null,"If it did, let's start our Ant node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--nat-addr")," configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ant start --nat-addr 86.98.94.9:1634\n")),(0,r.kt)("p",null,"Checking our addresses endpoint again, we can now see that Ant has been able to successfully assign a public address! Congratulations, your Ant is now connected to the outside world!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/86.98.94.9/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB"\n]\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are regularly connecting and disconnecting to a network, you\nmay also want to use your router's firmware to configure the router to\nreserve and only assign the same local network IP from its DHCP pool\nto your computer's MAC address. This will ensure that your Ant\nseamlessly connects when you rejoin the network!"))),(0,r.kt)("h3",{id:"debugging-connectivity"},"Debugging Connectivity"),(0,r.kt)("p",null,"The above guide navigates your NAT, but there are still a few hurdles to overcome. To make sure there is a clear path from your computer to the outside world, let's follow our Ant's journey from the inside out."),(0,r.kt)("p",null,"Let's set up a netcat listener on all interfaces on the computer we'd\nlike to run Ant on as we have above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -l 0.0.0.0 1634\n")),(0,r.kt)("p",null,"Now, let's verify we're able to connect to netcat by checking the connection from our local machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -zv 127.0.0.1 1634\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Connection to 127.0.0.1 port 1634 [tcp/*] succeeded!\n")),(0,r.kt)("p",null,"This should be a no brainer, the connection between localhost in not normally mediated. "),(0,r.kt)("p",null,"If there is a problem here, the problem is with some other software running on your operating system or your operating system itself. Try a different port, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"1734")," and turning off any unneccesary software. If this doesn't work, you may need to try a different operating system environment. Please get in touch and we'll try to help!"),(0,r.kt)("p",null,"If we were successful, let's move on to the next stage."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are not able to get access to some firewall settings, or\notherwise debug incoming connectivity, don't worry! All is not\nlost. Ant can function just fine with just outgoing\nconnections. However, if you can, it is worth the effort to allow\nincoming connections, as the whole sana will benefit from the\nincreased connectivity."))),(0,r.kt)("p",null,"Let's find out what our IP looks like to the Internet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl icanhazip.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"86.98.94.9\n")),(0,r.kt)("p",null,"Now try to connect to your port using the global IP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nc -zv 86.98.94.9 1634\n")),(0,r.kt)("p",null,"If this is successful, our Ant node's path is clear!"),(0,r.kt)("p",null,"If not, we can try a few things to make sure there are no barriers stopping us from getting through."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your computer's firewall."),(0,r.kt)("p",{parentName:"li"},"Sometimes your computer is configured to prevent connections. If you\nare on a private network mediated by NAT, you can check if this is\nthe problem by trying to connect from another device on your network\nusing the local IP ",(0,r.kt)("inlineCode",{parentName:"p"},"nc -zv 192.168.0.10 1634"),"."),(0,r.kt)("p",{parentName:"li"},"Ubuntu uses ",(0,r.kt)("a",{parentName:"p",href:"https://help.ubuntu.com/community/UFW"},"UFW"),", MacOS can\nbe configured using the ",(0,r.kt)("em",{parentName:"p"},"Firewall")," tab in the ",(0,r.kt)("em",{parentName:"p"},"Security & Privacy"),"\nsection of ",(0,r.kt)("em",{parentName:"p"},"System Preferences"),". Windows uses\n",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/help/4028544/windows-10-turn-microsoft-defender-firewall-on-or-off"},"Defender Firewall"),"."),(0,r.kt)("p",{parentName:"li"},"For each of these firewalls, set a special rule to allow UDP and TCP\ntraffic to pass through on port ",(0,r.kt)("inlineCode",{parentName:"p"},"1634"),". You may want to limit this\ntraffic to the Ant application only.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your ingress' firewall."),(0,r.kt)("p",{parentName:"li"},"For a datacenter hired server, this configuration will often take\nplace in somewhere in the web user interface. Refer to your server\nhosting provider's documentation to work out how to open ports to\nthe open Internet. Ensure that both TCP and UDP traffic are allowed."),(0,r.kt)("p",{parentName:"li"},"Similarly, if you are connecting from within a private network, you\nmay find that the port is blocked by the router. Each router is\ndifferent, so consult your router's firware documentation to make\nsure there are no firewalls in place blocking traffic on your Ant's\ndesignated p2p port."),(0,r.kt)("p",{parentName:"li"},"You may check this using netcat by trying to connect using your\ncomputer's public IP, as above ",(0,r.kt)("inlineCode",{parentName:"p"},"nc -zv 86.98.94.9 1634"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Docker"),(0,r.kt)("p",{parentName:"li"},"Docker adds another level of complexity."),(0,r.kt)("p",{parentName:"li"},"To debug docker connectivity issues, we may use netcat as above to\ncheck port connections are working as expected. Double check that\nyou are exposing the right ports to your local network, either by\nusing the command line flags or in your docker-compose.yaml. You\nshould be able to successfully check the connection locally using\neg. ",(0,r.kt)("inlineCode",{parentName:"p"},"nc -zv localhost 1634")," then follow instructions above to make\nsure your local network has the correct ports exposed to the\nInternet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Something else entirely?"),(0,r.kt)("p",{parentName:"li"},"Networking is a complex topic, but it keeps us all together. If you\nstill can't connect to your Ant, get in touch via ",(0,r.kt)("a",{parentName:"p",href:"http://anthive.ethsana.org/"},"The\nAnthive")," and we'll do our best to get\nyou connected. In the sana, no Ant is left behind."))))}u.isMDXComponent=!0}}]);