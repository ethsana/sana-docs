(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[8600],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,a.useState)(u),k=g[0],b=g[1],y=a.Children.toArray(e.children),N=[];if(null!=m){var w=h[m];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;b(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,i,l,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9415:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(1395),o=n(8215),s=["components"],c={title:"Sana Clef",id:"ant-clef"},u={unversionedId:"installation/ant-clef",id:"installation/ant-clef",isDocsHomePage:!1,title:"Sana Clef",description:"Sana makes use of Go Ethereum's external signer, Clef.",source:"@site/docs/installation/bee-clef.md",sourceDirName:"installation",slug:"/installation/ant-clef",permalink:"/docs/installation/ant-clef",editUrl:"https://github.com/ethsana/sana-docs/blob/master/sidebars.js/docs/installation/bee-clef.md",version:"current",frontMatter:{title:"Sana Clef",id:"ant-clef"}},p=[{value:"Packages",id:"packages",children:[{value:"Configuring Sana Clef",id:"configuring-sana-clef",children:[]},{value:"Interact With Ant Clef",id:"interact-with-ant-clef",children:[]}]},{value:"Data Locations",id:"data-locations",children:[]},{value:"Manual Installation",id:"manual-installation",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sana makes use of Go Ethereum's external signer, ",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/clef/tutorial"},"Clef"),"."),(0,i.kt)("p",null,"Because Sana must sign a lot of transactions automatically and quickly, a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethsana/sana-clef"},"Sana specific version of Clef, Sana Clef")," has been packaged which includes all the relevant configuration needed to make Clef work with Sana."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sana Clef will create a new Ethereum key pair for you during installation. Make sure you keep a ",(0,i.kt)("a",{parentName:"p",href:"/docs/access-the-ant/backups"},"backup")," of your key pair somewhere safe and secure!"))),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Sana Clef can be installed automatically using your system's package manager."),(0,i.kt)(l.Z,{defaultValue:"debian",values:[{label:"Ubuntu",value:"debian"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"debian",mdxType:"TabItem"},(0,i.kt)("h4",{id:"amd64"},"AMD64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethsana/sana-clef/releases/download/v0.5.0/sana-clef_0.5.0_amd64.deb\nsudo dpkg -i sana-clef_0.5.0_amd64.deb\n")))),(0,i.kt)("h3",{id:"configuring-sana-clef"},"Configuring Sana Clef"),(0,i.kt)("p",null,"Configuration files are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/default/sana-clef/")," on Linux and ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/sana-clef/default")," on MacOS."),(0,i.kt)("p",null,"To install clef for Sana mainnet, change ",(0,i.kt)("inlineCode",{parentName:"p"},"ANT_CLEF_CHAIN_ID")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," in order to interact with the XDAI network. For testnet, use chain id ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("p",null,"For a normal installation using a package manager, this should be the only configuration changes necessary to start using Ant Clef."),(0,i.kt)("h3",{id:"interact-with-ant-clef"},"Interact With Ant Clef"),(0,i.kt)("p",null,"Once Ant Clef has been installed, it will begin running as a service."),(0,i.kt)("p",null,"To check Ant Clef is running ok, we may use ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," (on Linux) or ",(0,i.kt)("inlineCode",{parentName:"p"},"launchctl")," (on MacOS) to query the status of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ant-clef")," service."),(0,i.kt)(l.Z,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status ant-clef\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u25cf ant-clef.service - Ant Clef\n     Loaded: loaded (/lib/systemd/system/ant-clef.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago\n")),(0,i.kt)("p",null,"And if you want to get Ant Clef's logs, you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u ant-clef.service\n"))),(0,i.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"launchctl list | grep sana-clef\n")))),(0,i.kt)("p",null,"When Ant Clef first starts, you should see something very similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'Feb 21 19:52:43 comp-name systemd[1]: Started Ant Clef.\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: WARNING!\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: Clef is an account management tool. It may, like any software, contain bugs.\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: Please take care to\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: - backup your keystore files,\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: - verify that the keystore(s) can be opened with your password.\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: Clef is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: PURPOSE. See the GNU General Public License for more details.\nFeb 21 19:52:43 comp-name ant-clef-service[494678]: INFO [02-21|19:52:43.862] Using stdin/stdout as UI-channel\nFeb 21 19:52:44 comp-name ant-clef-service[494678]: INFO [02-21|19:52:44.036] Loaded 4byte database                    embeds=146841 locals=3 local=/etc/ant-clef/4byte.json\nFeb 21 19:52:44 comp-name ant-clef-service[494678]: {"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}\nFeb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.048] Rule engine configured                   file=/etc/ant-clef/rules.js\nFeb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.048] Starting signer                          chainid=5 keystore=/var/lib/ant-clef/keystore light-kdf=false advanced=false\nFeb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.049] IPC endpoint opened                      url=/var/lib/ant-clef/clef.ipc\nFeb 21 19:54:25 comp-name ant-clef-service[494678]: {"jsonrpc":"2.0","method":"ui_onSignerStartup","params":[{"info":{"extapi_http":"n/a","extapi_ipc":"/var/lib/ant-clef/clef.ipc","extapi_version":"6.1.0","intapi_version":"7.0.1"}}]}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This line can be safely ignored, there is no action required: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}')))),(0,i.kt)("p",null,"As soon as ",(0,i.kt)("inlineCode",{parentName:"p"},"ant")," starts interacting with ",(0,i.kt)("inlineCode",{parentName:"p"},"ant-clef")," you should start to see log messages populate, for a regularly active and connected node they will appear every few seconds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Feb 24 22:29:15 comp-name ant-clef-service[1118]: INFO [02-24|22:29:15.118] Op approved\nFeb 24 22:30:17 comp-name ant-clef-service[1118]: INFO [02-24|22:30:17.371] Op approved\nFeb 24 22:30:19 comp-name ant-clef-service[1118]: INFO [02-24|22:30:19.344] Op approved\n...\n")),(0,i.kt)("h2",{id:"data-locations"},"Data Locations"),(0,i.kt)("p",null,"Key material and other data is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/ant-clef/")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ant can communicate with Ant Clef in a variety of ways. The default way, if installed via the packages, will use an Inter-process communication (IPC) file. This is a special file that ",(0,i.kt)("inlineCode",{parentName:"p"},"ant-clef")," creates on startup that Ant will use to send requests back-and-forth. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"ant-clef")," service is running you'll notice that a ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/ant-clef/clef.ipc")," file is created."))),(0,i.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,i.kt)("p",null,"Try the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/ant-clef/releases"},"Github releases page")," for binaries for your platform. Otherwise to install Clef manually first retrieve the relevant Clef binary from Ethereum's ",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/downloads/"},"Geth & Tools")," download page, or build directly from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum"},"source"),"."),(0,i.kt)("p",null,"Because Ant needs Clef to sign many transactions automatically, we must run Clef as a service with relaxed permissions and rules set. To ensure Clef only signs transactions from Ant, we must protect the ",(0,i.kt)("inlineCode",{parentName:"p"},"clef.ipc")," file by ",(0,i.kt)("strong",{parentName:"p"},"creating a Ant user and setting permissions so that it is only possible for this user to make use of the ipc socket.")),(0,i.kt)("p",null,"Additionally, Clef requires transaction signatures for the Ant's chequebook interaction."),(0,i.kt)("p",null,"A shell script automating the post-initialisation permission changing and including the Clef config, ",(0,i.kt)("inlineCode",{parentName:"p"},"clef-service"),", as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"4byte.json")," transaction signature file and ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.js")," file can all be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/ant-clef/tree/master/packaging"},"ant-clef repository"),"."),(0,i.kt)("p",null,"Finally, once Clef is running, simply ",(0,i.kt)("a",{parentName:"p",href:"/docs/access-the-ant/configuration"},"configure your Ant node")," to enable Clef using ",(0,i.kt)("inlineCode",{parentName:"p"},"--clef-signer-enable")," and point Ant to the correct ipc socket using ",(0,i.kt)("inlineCode",{parentName:"p"},"--clef-signer-endpoint"),"."))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);