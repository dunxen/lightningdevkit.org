(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(89)),o=n(93),c={id:"getting_started",title:"Getting Started"},l={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Introduction",source:"@site/docs/getting_started.md",slug:"/getting_started",permalink:"/docs/getting_started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Use Cases for LDK",permalink:"/docs/use_cases"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"How To Use These Docs",id:"how-to-use-these-docs",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"LDK Batteries",id:"ldk-batteries",children:[]}],s={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This guide will give an entrypoint to LDK as a whole, an introduction to the architecture of LDK and what\nbatteries need to be plugged into it to get it working. These batteries\ncan be supplied by the user or by one of LDK's sample modules."),Object(i.b)("h2",{id:"how-to-use-these-docs"},"How To Use These Docs"),Object(i.b)("p",null,'"Getting Started" + "Overview" provide an introduction to the architecture and\ndesign philosophy of LDK. '),Object(i.b)("p",null,'"Build a Node: Checklist" walks through how to specifically integrate LDK into\nyour application, as well as documentation for what features are currently available\nand not available for LDK in Java. "Opening a Channel" is a follow-up to "Build a Node"\nthat walks through an example of opening a channel with LDK.'),Object(i.b)("p",null,'"Key Management", "Spending On-Chain Funds", and "Block Data" dive into more depth on their topics.'),Object(i.b)("p",null,"Throughout these docs, if any piece of code is used or mentioned, the most in-depth docs can be\nfound by searching ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.rs/lightning/0.0.12/lightning/index.html"}),"the Rust docs"),"."),Object(i.b)("h2",{id:"architecture"},"Architecture"),Object(i.b)("img",{alt:"LDK Architecture",src:Object(o.a)("img/ldk_arch.svg")}),Object(i.b)("p",null,"The big blue box in the center contains all of LDK's core objects."),Object(i.b)("p",null,"The green boxes and Data Storage are all of LDK's batteries that must be provided."),Object(i.b)("h2",{id:"ldk-batteries"},"LDK Batteries"),Object(i.b)("p",null,"This section will be updated as support for LDK batteries changes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Networking (lightning-net-tokio in the diagram)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sample modules are available in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/tree/main/lightning-net-tokio"}),"Rust")," and ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-garbagecollected/tree/main/src/main/java/org/ldk/batteries"}),"Java")))),Object(i.b)("li",{parentName:"ul"},"KeysManager",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LDK supplies an implementation called ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.rs/lightning/0.0.10/lightning/chain/keysinterface/struct.KeysManager.html"}),"KeysManager")))),Object(i.b)("li",{parentName:"ul"},"Data storage",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sample module is available in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/tree/main/lightning-persister"}),"Rust")))),Object(i.b)("li",{parentName:"ul"},"BlockSource",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"sample module is almost available in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/pull/763"}),"Rust")))),Object(i.b)("li",{parentName:"ul"},"Randomness",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"currently only supplied by the user"))),Object(i.b)("li",{parentName:"ul"},"FeeEstimator",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"currently only supplied by the user"))),Object(i.b)("li",{parentName:"ul"},"TxFilter",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"currently only supplied by the user"))),Object(i.b)("li",{parentName:"ul"},"TxBroadcaster",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"currently only supplied by the user")))),Object(i.b)("p",null,"EventHandler in the diagram is not so much a necessary LDK battery, but instead\nrefers to the fact that LDK generates events that the user should handle (e.g.\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"PaymentReceived")," event)."))}b.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(h,c(c({ref:t},u),{},{components:n})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(22),a=n(95);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},95:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);