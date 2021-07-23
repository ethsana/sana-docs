(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[1739],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(n),m=a,h=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3123:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={title:"Dapps On Swarm",id:"introduction"},p={unversionedId:"dapps-on-sana/introduction",id:"dapps-on-sana/introduction",isDocsHomePage:!1,title:"Dapps On Swarm",description:"Swarm is designed with dapps in mind, and much time has been devoted to designing patterns and prototying ways to build 2nd layer dapps on top of the DISC that Bee provides! Read much more about how to structure your data and build unstoppable dapps in The Book of Swarm .",source:"@site/docs/dapps-on-sana/introduction.md",sourceDirName:"dapps-on-sana",slug:"/dapps-on-sana/introduction",permalink:"/docs/dapps-on-sana/introduction",editUrl:"https://github.com/ethsana/sana-docs/blob/master/sidebars.js/docs/dapps-on-sana/introduction.md",version:"current",frontMatter:{title:"Dapps On Swarm",id:"introduction"}},c=[{value:"Developing on Bee",id:"developing-on-bee",children:[]},{value:"Bee JS",id:"bee-js",children:[]},{value:"Chunk Types",id:"chunk-types",children:[]},{value:"Feeds",id:"feeds",children:[]},{value:"PSS",id:"pss",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Swarm is designed with dapps in mind, and much time has been devoted to designing patterns and prototying ways to build 2nd layer dapps on top of the DISC that Bee provides! Read much more about how to structure your data and build unstoppable dapps in ",(0,o.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm")," ."),(0,o.kt)("h2",{id:"developing-on-bee"},"Developing on Bee"),(0,o.kt)("p",null,"Bee isn't just for mining BZZ - learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-sana/develop-on-bee"},"use Bee for all your dapp development, production infrastructure and deployment needs"),"!"),(0,o.kt)("h2",{id:"bee-js"},"Bee JS"),(0,o.kt)("p",null,"Our maverick JavaScript team, the Bee-Gees (\ud83d\udd7a), have been working hard in the last few months to build some impressive tools for all you budding dapp developer Bees to get stuck into! Find out how to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-sana/bee-js"},"bee-js")," JavaScript library to start creating your own that live and work on Swarm!"),(0,o.kt)("h2",{id:"chunk-types"},"Chunk Types"),(0,o.kt)("p",null,"Swarm contains 3 types of chunks which enable us to build novel\nstructures of how data can be stored in the swarm - in a completely\ndecentralised way. Learn more about\n",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-sana/chunk-types"},"chunk types"),"\nto change the way you deal with data in your dapps forever!"),(0,o.kt)("h2",{id:"feeds"},"Feeds"),(0,o.kt)("p",null,"Swarm's single owner chunks have been cleverly combined to create user\ngenerated ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-sana/feeds"},"feeds")," in the swarm, see this\nexample of how chunks are combined into a useful data structure you\ncan use to build amazing applications."),(0,o.kt)("h2",{id:"pss"},"PSS"),(0,o.kt)("p",null,"Hey there! Pss! \ud83e\udd2b Swarm's trojan chunks are implemented in Bee to\ndeliver ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-sana/pss"},"Postal Service on Swarm")," - a\npub-sub system that provides a totally leak-proof messaging system\nover the swarm."))}u.isMDXComponent=!0}}]);