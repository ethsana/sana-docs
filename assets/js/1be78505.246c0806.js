(self.webpackChunkant_docs=self.webpackChunkant_docs||[]).push([[9514,6979],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5128:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ie}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(5421),c=n(2122),s=n(9756),u=n(6010),d=n(9732),p=n(944),m=n(1839),h=n(3783),f=n(7898),b=n(6742),y=n(3919),v=n(5537),g=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),E=n(4973),C="sidebar_15mo",_="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",x="sidebarLogo_3h0W",S="menu_Bmed",j="menuLinkText_2aKo",Z="menuWithAnnouncementBar_2WvA",O="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",P="sidebarMenuIcon_fgN0",I="sidebarMenuCloseIcon_1lpH",B="menuLinkExternal_1OhN",w=["items"],L=["item","onItemClick","collapsible","activePath"],A=["item","onItemClick","activePath","collapsible"];var D=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},R=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,w);return t.map((function(e,t){return r.createElement(M,(0,c.Z)({key:t,item:e},n))}))}));function M(e){switch(e.item.type){case"category":return r.createElement(H,e);case"link":default:return r.createElement(W,e)}}function H(e){var t,n,a,o=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,s.Z)(e,L),m=o.items,h=o.label,f=D(o,d),b=(n=f,a=(0,r.useRef)(n),(0,r.useEffect)((function(){a.current=n}),[n]),a.current),y=(0,r.useState)((function(){return!!i&&(!f&&o.collapsed)})),v=y[0],g=y[1],k=(0,r.useRef)(null),E=(0,r.useState)(void 0),C=E[0],_=E[1],N=function(e){var t;void 0===e&&(e=!0),_(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){f&&!b&&v&&g(!1)}),[f,b,v]);var x=(0,r.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[j]=!i,t)),onClick:i?x:void 0,href:i?"#!":void 0},p),h),r.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){v||N(!1)}},r.createElement(R,{items:m,tabIndex:v?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function W(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(e.collapsible,(0,s.Z)(e,A)),i=n.href,d=n.label,p=D(n,o);return r.createElement("li",{className:"menu__list-item",key:d},r.createElement(b.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":p},t[B]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:a},l),d))}function z(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",O),onClick:t},r.createElement(g,{className:T}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(P,I)},"\xd7"):r.createElement(k.Z,{className:P,height:24,width:24}))}var U=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,b=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),y=(0,d.LU)(),g=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,j=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,h.Z)();return(0,r.useEffect)((function(){a===h.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),O=j.showResponsiveSidebar,T=j.closeResponsiveSidebar,P=j.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(C,(t={},t[_]=g,t[N]=s,t))},g&&r.createElement(v.Z,{tabIndex:-1,className:x}),r.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":O},n[Z]=!E&&b,n))},r.createElement(F,{responsiveSidebarOpened:O,onClick:P}),r.createElement("ul",{className:"menu__list"},r.createElement(R,{items:o,onItemClick:T,collapsible:i,activePath:a}))),k&&r.createElement(z,{onClick:c}))},K={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:K};function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=V({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=V({},n,{backgroundColor:null}),a};function Q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),J(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),J(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=V({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?V({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),J(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),J(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=V({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?V({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),J(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(Y),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)G(i),c.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return G(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var te=n(7594),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),oe=function(){var e=(0,d.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",ce="codeBlockTitle_eoMF",se="codeBlock_23N8",ue="codeBlockWithTitle_2JqI",de="copyButton_Ue-o",pe="codeBlockLines_39YC",me=/{([\d,-]+)}/,he=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function fe(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,d.LU)().prism,i=(0,r.useState)(!1),s=i[0],p=i[1],m=(0,r.useState)(!1),h=m[0],f=m[1];(0,r.useEffect)((function(){f(!0)}),[]);var b=(0,d.bc)(a)||o,y=(0,r.useRef)(null),v=[],g=oe(),k=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var C=a.match(me)[1];v=ne()(C).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var N=k.replace(/\n$/,"");if(0===v.length&&void 0!==_){for(var x,S="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return he(["js","jsBlock"]);case"jsx":case"tsx":return he(["js","jsBlock","jsx"]);case"html":return he(["js","jsBlock","html"]);case"python":case"py":return he(["python"]);default:return he()}}(_),Z=k.replace(/\n$/,"").split("\n"),O=0;O<Z.length;){var T=O+1,P=Z[O].match(j);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=T+",";break;case"highlight-start":x=T;break;case"highlight-end":S+=x+"-"+(T-1)+","}Z.splice(O,1)}else O+=1}v=ne()(S),N=Z.join("\n")}var I=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(N),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(ee,(0,c.Z)({},$,{key:String(h),theme:g,code:N,language:_}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:le},b&&r.createElement("div",{style:a,className:ce},b),r.createElement("div",{className:(0,u.Z)(ie,_)},r.createElement("div",{tabIndex:0,className:(0,u.Z)(n,se,"thin-scrollbar",(t={},t[ue]=b,t))},r.createElement("div",{className:pe,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(de),onClick:I},s?r.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be="enhancedAnchor_2LWZ",ye=["id"],ve=function(e){return function(t){var n,a=t.id,o=(0,s.Z)(t,ye),l=(0,d.LU)().navbar.hideOnScroll;return a?r.createElement(e,o,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[be]=!l,n)),id:a}),o.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,o)}},ge={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(fe,e):r.createElement("code",e)},a:function(e){return r.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(fe,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:ve("h1"),h2:ve("h2"),h3:ve("h3"),h4:ve("h4"),h5:ve("h5"),h6:ve("h6")},ke=n(4608),Ee=n(5977),Ce="docPage_31aa",_e="docMainContainer_3ufF",Ne="docMainContainerEnhanced_3NYZ",xe="docSidebarContainer_3Kbt",Se="docSidebarContainerHidden_3pA8",je="collapsedDocSidebar_2JMH",Ze="expandSidebarButtonIcon_1naQ",Oe="docItemWrapperEnhanced_2vyJ",Te="docItemWrapper_3FMP";function Pe(e){var t,n,l,c,s,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,f=(0,o.Z)(),b=f.siteConfig,y=f.isClient,v=m.pluginId,k=m.permalinkToSidebar,C=m.docsSidebars,_=m.version,N=k[p.path],x=C[N],S=(0,r.useState)(!1),j=S[0],Z=S[1],O=(0,r.useState)(!1),T=O[0],P=O[1],I=(0,r.useCallback)((function(){T&&P(!1),Z(!j)}),[T]);return r.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:_,tag:(0,d.os)(v,_)}},r.createElement("div",{className:Ce},x&&r.createElement("div",{className:(0,u.Z)(xe,(t={},t[Se]=j,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe)&&j&&P(!0)},role:"complementary"},r.createElement(U,{key:N,sidebar:x,path:p.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:I,isHidden:T}),T&&r.createElement("div",{className:je,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},r.createElement(g,{className:Ze}))),r.createElement("main",{className:(0,u.Z)(_e,(c={},c[Ne]=j||!x,c))},r.createElement("div",{className:(0,u.Z)("container padding-vert--lg",Te,(s={},s[Oe]=j,s))},r.createElement(a.Zo,{components:ge},h)))))}var Ie=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,Ee.LX)(a.pathname,e)}));return o?r.createElement(Pe,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t)):r.createElement(ke.default,e)}},6979:function(e,t,n){"use strict";var r=n(7294),a=n(4184),o=n.n(a),l=n(5977),i=n(2263);t.Z=function(e){var t=(0,r.useRef)(!1),a=(0,r.useRef)(null),c=(0,l.k6)(),s=(0,i.Z)().siteConfig,u=(void 0===s?{}:s).baseUrl,d=function(){t.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(9878),n.e(4452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,3343))]).then((function(e){!function(e,t,n){0!==e.length&&new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var r=u+n.url;document.createElement("a").href=r,c.push(r)}})}(e[0],e[1],e[2].default)})),t.current=!0)},p=(0,r.useCallback)((function(t){a.current.contains(t.target)||a.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:a}))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);