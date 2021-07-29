(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/ldk-block-processing-c85b691514ae87f6361e692672f9ebc6.svg"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),o=(t(0),t(88)),c=t(96),r=t(97),l={id:"blockdata",title:"Blockchain Data"},s={unversionedId:"blockdata",id:"blockdata",isDocsHomePage:!1,title:"Blockchain Data",description:"Introduction",source:"@site/docs/blockdata.md",slug:"/blockdata",permalink:"/docs/blockdata",editUrl:"https://github.com/lightningdevkit/lightningdevkit.org/tree/main/docs/blockdata.md",version:"current",sidebar:"someSidebar",previous:{title:"Key Management",permalink:"/docs/key_mgmt"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Chain Activity",id:"chain-activity",children:[{value:"Block Source",id:"block-source",children:[]},{value:"Full Blocks",id:"full-blocks",children:[]},{value:"Pre-filtered Blocks",id:"pre-filtered-blocks",children:[]},{value:"Confirmed Transactions",id:"confirmed-transactions",children:[]}]},{value:"Transaction Broadcast",id:"transaction-broadcast",children:[]}],d={toc:b};function u(e){var n=e.components,l=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,l,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"In this guide, we'll explore how to provide chain data to LDK upon startup and\nas new blocks are mined. This allows LDK to maintain channel state and monitor\nfor on-chain channel activity."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"LDK maintains channels with your node's peers during the course of node\noperation. When a new channel is opened, the ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelManager")," will keep track of\nthe channel's state and tell the ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," that a new channel should be\nwatched. The ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," does so by maintaining a ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelMonitor")," for each\nchannel."),Object(o.b)("p",null,"When a new block is mined, it is connected to the chain while other blocks may\nbe disconnected if reorganized out. Transactions are confirmed or unconfirmed\nduring this process. You are required to feed this activity to LDK which will\nprocess it by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updating channel state"),Object(o.b)("li",{parentName:"ul"},"Signaling back transactions to filter"),Object(o.b)("li",{parentName:"ul"},"Broadcasting transactions if necessary")),Object(o.b)("p",null,"We will walk through this process as depicted here:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"LDK block processing",src:t(131).default})),Object(o.b)("h2",{id:"chain-activity"},"Chain Activity"),Object(o.b)("p",null,"Initially, our node doesn't have any channels and hence has no data to monitor\nfor on-chain. When a channel is opened with a peer, the ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelManager")," creates\na ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelMonitor")," and passes it to the ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," to watch."),Object(o.b)("p",null,"At this point, you need to feed LDK any chain data of interest so that it can\nrespond accordingly. It supports receiving either full blocks or pre-filtered\nblocks using the ",Object(o.b)("inlineCode",{parentName:"p"},"chain::Listen")," interface. While block data can sourced from\nanywhere, it is your responsibility to call the ",Object(o.b)("inlineCode",{parentName:"p"},"block_connected")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"block_disconnected")," methods on ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelManager")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor"),". This allows\nthem to update channel state and respond to on-chain events, respectively."),Object(o.b)("p",null,"LDK comes with a ",Object(o.b)("inlineCode",{parentName:"p"},"lightning-block-sync")," utility that handles polling a block\nsource for the best chain tip, detecting chain forks, and notifying listeners\nwhen blocks are connected and disconnected. It can be configured to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Poll a custom ",Object(o.b)("inlineCode",{parentName:"li"},"BlockSource")),Object(o.b)("li",{parentName:"ul"},"Notify ",Object(o.b)("inlineCode",{parentName:"li"},"ChannelManager")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ChainMonitor")," of block events")),Object(o.b)("p",null,"It is your choice as to whether you use this utility or your own to feed the\nrequired chain data to LDK. If you choose to use it, you will need to implement\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"BlockSource")," interface or use one of the samples that it provides."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Currently, ",Object(o.b)("inlineCode",{parentName:"p"},"lightning-block-sync")," is only available in Rust."))),Object(o.b)("h3",{id:"block-source"},"Block Source"),Object(o.b)("p",null,"Implementing the ",Object(o.b)("inlineCode",{parentName:"p"},"BlockSource")," interface requires defining methods for fetching\nheaders, blocks, and the best block hash."),Object(o.b)(c.a,{defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl BlockSource for Blockchain {\n    fn get_header<'a>(&'a mut self, header_hash: &'a BlockHash, _height: Option<u32>) -> AsyncBlockSourceResult<'a, BlockHeaderData> {\n        // <insert code for fetching block headers>\n    }\n\n    fn get_block<'a>(&'a mut self, header_hash: &'a BlockHash) -> AsyncBlockSourceResult<'a, Block> {\n        // <insert code for fetching block>\n    }\n\n    fn get_best_block<'a>(&'a mut self) -> AsyncBlockSourceResult<'a, (BlockHash, Option<u32>)> {\n        // <insert code for fetching the best block hash>\n    }\n}\n"))),Object(o.b)(r.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// TODO\n")))),Object(o.b)("p",null,"For instance, you may implement this interface by querying Bitcoin Core's JSON\nRPC interface, which happens to be a sample implementation provided by\n",Object(o.b)("inlineCode",{parentName:"p"},"lightning-block-sync"),"."),Object(o.b)("p",null,"Let's walk through the use case where LDK receives full blocks."),Object(o.b)("h3",{id:"full-blocks"},"Full Blocks"),Object(o.b)("p",null,"If your Lightning node is backed by a Bitcoin full node, the operation is\nstraight forward: call the appropriate methods on ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelManager")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," as blocks are connected and disconnected. LDK will handle the\nrest!"),Object(o.b)("p",null,"So what happens? The ",Object(o.b)("inlineCode",{parentName:"p"},"ChannelManager")," examines the blocks transactions and\nupdates the internal channel state as needed. The ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," will detect\nany spends of the channel funding transaction or any pertinent transaction\noutputs, tracking them as necessary."),Object(o.b)("p",null,"If necessary, LDK will broadcast a transaction on your behalf. More on that\nlater. For now, let's look at the more interesting case of pre-filtered blocks."),Object(o.b)("h3",{id:"pre-filtered-blocks"},"Pre-filtered Blocks"),Object(o.b)("p",null,"For environments that are resource constrained, receiving and processing all\ntransaction data may not be feasible. LDK handles this case by signaling back\nwhich transactions and outputs it is interested in. This information can then be\nused to filter blocks prior to sending them to your node."),Object(o.b)("p",null,"For example, if your block source is an Electrum client, you can pass along this\ninformation to it. Or if you are making use of a BIP 157 client, you can check\nif a block contains relevant transactions before fetching it."),Object(o.b)("p",null,"So how does this work in practice? ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," is parameterized by an\noptional type that implements ",Object(o.b)("inlineCode",{parentName:"p"},"chain::Filter"),":"),Object(o.b)(c.a,{defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl chain::Filter for Blockchain {\n    fn register_tx(&self, txid: &Txid, script_pubkey: &Script) {\n        // <insert code for you to watch for this transaction on-chain>\n    }\n\n    fn register_output(&self, output: WatchedOutput) -> Option<(usize, Transaction)> {\n        // <insert code for you to watch for any transactions that spend this\n        // output on-chain>\n        // If you are fetching pre-filtered blocks, and do not fetch in-block\n        // descendants of transactions, return any in-block spend of the given\n        // output.\n        // Otherwise return None.\n    }\n}\n"))),Object(o.b)(r.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Filter tx_filter = Filter.new_impl(new Filter.FilterInterface() {\n    @Override\n    public void register_tx(byte[] txid, byte[] script_pubkey) {\n        // <insert code for you to watch for this transaction on-chain>\n    }\n\n    @Override\n    Option_C2Tuple_usizeTransactionZZ register_output(WatchedOutput output) {\n        // <insert code for you to watch for any transactions that spend this\n        // output on-chain>\n        // If you are fetching pre-filtered blocks, and do not fetch in-block\n        // descendants of transactions, return any in-block spend of the given\n        // output.\n        // Otherwise return Option_C2Tuple_usizeTransactionZZ.none().\n    }\n});\n")))),Object(o.b)("p",null,"When this is provided, ",Object(o.b)("inlineCode",{parentName:"p"},"ChainMonitor")," will call back to the filter as channels\nare opened and blocks connected. This gives the opportunity for the source to\npre-filter blocks as desired."),Object(o.b)("p",null,"Regardless, when a block is connected, its header must be processed by LDK."),Object(o.b)("h3",{id:"confirmed-transactions"},"Confirmed Transactions"),Object(o.b)("p",null,"Up until this point, we've explored how to notify LDK of chain activity using\nblocks. But what if you're sourcing chain activity from a place that doesn't\nprovide a block-centric interface, like Electrum?"),Object(o.b)("p",null,"LDK has a ",Object(o.b)("inlineCode",{parentName:"p"},"chain::Confirm")," interface to support this use case, analogous to the\nblock-oriented ",Object(o.b)("inlineCode",{parentName:"p"},"chain::Listen")," interface which we've been using up until now.\nWith this alternative approach, you still need to give LDK block headers but\nonly for blocks containing transactions of interest. These are identified by\n",Object(o.b)("inlineCode",{parentName:"p"},"chain::Filter")," as before. You also need to notify LDK of any transactions with\ninsufficient confirmation that have been reorganized out of the chain. Use the\n",Object(o.b)("inlineCode",{parentName:"p"},"transactions_confirmed")," and ",Object(o.b)("inlineCode",{parentName:"p"},"transaction_unconfirmed")," methods, respectively."),Object(o.b)("p",null,"Additionally, you must notify LDK whenever a new chain tip is available using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"best_block_updated")," method. See the documentation for a full picture of how\nthis interface is intended to be used."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Be advised that ",Object(o.b)("inlineCode",{parentName:"p"},"chain::Confirm")," is a less mature interface than\n",Object(o.b)("inlineCode",{parentName:"p"},"chain::Listen"),". As such, there is not yet a utility like ",Object(o.b)("inlineCode",{parentName:"p"},"lightning-block-sync"),"\nto use for interacting with clients like Electrum."))),Object(o.b)("h2",{id:"transaction-broadcast"},"Transaction Broadcast"),Object(o.b)("p",null,"Inevitably, LDK will need to broadcast transactions on your behalf. As you\nnotify it of blocks, it will determine if it should broadcast a transaction and\ndo so using an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"BroadcasterInterface")," that you have provided."),Object(o.b)("p",null,"And as those transactions or those from your peers are confirmed on-chain, they\nwill be likewise processed when notified of a connected block. Thus, continuing\nthe cycle."))}u.isMDXComponent=!0},86:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return t?i.a.createElement(h,r(r({ref:n},s),{},{components:t})):i.a.createElement(h,r({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<o;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";var a=t(0),i=t(92);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},96:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(91),c=t(86),r=t(53),l=t.n(r);const s=37,b=39;n.a=function(e){const{lazy:n,block:t,defaultValue:r,values:d,groupId:u,className:p}=e,{tabGroupChoices:h,setTabGroupChoices:f}=Object(o.a)(),[m,O]=Object(a.useState)(r),j=a.Children.toArray(e.children);if(null!=u){const e=h[u];null!=e&&e!==m&&d.some((n=>n.value===e))&&O(e)}const y=e=>{O(e),null!=u&&f(u,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},p)},d.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},n)))),n?Object(a.cloneElement)(j.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},j.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==m})))))}},97:function(e,n,t){"use strict";var a=t(3),i=t(0),o=t.n(i);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:t}),e)}}}]);