(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{245:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return r})),s.d(e,"i",(function(){return a})),s.d(e,"f",(function(){return l})),s.d(e,"g",(function(){return u})),s.d(e,"h",(function(){return c})),s.d(e,"b",(function(){return h})),s.d(e,"e",(function(){return p})),s.d(e,"k",(function(){return d})),s.d(e,"l",(function(){return f})),s.d(e,"c",(function(){return m})),s.d(e,"j",(function(){return b}));const n=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(n),s=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+s}function p(t,e){const s=decodeURIComponent(t.hash),i=function(t){const e=t.match(n);if(e)return e[0]}(e);if(i&&s!==i)return!1;return o(t.path)===o(e)}function d(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");s&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));const n=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,s,n){const{pages:i,themeConfig:r}=s,a=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return g(t);const o=a.sidebar||r.sidebar;if(o){const{base:s,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o);return"auto"===n?g(t):n?n.map(t=>function t(e,s,n,i=1){if("string"==typeof e)return d(s,e,n);if(Array.isArray(e))return Object.assign(d(s,e[0],n),{title:e[1]});{const r=e.children||[];return 0===r.length&&e.path?Object.assign(d(s,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map(e=>t(e,s,n,i+1)),collapsable:!1!==e.collapsable}}}(t,i,s)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},251:function(t,e,s){"use strict";var n={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([s.e(0),s.e(3)]).then(s.t.bind(null,327,7)),Promise.all([s.e(0),s.e(3)]).then(s.t.bind(null,328,7))]).then(([s])=>{s=s.default;const{algoliaOptions:n={}}=t;s(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:{...n,facetFilters:["lang:"+e].concat(n.facetFilters||[])},handleSelected:(t,e,s)=>{const{pathname:n,hash:i}=new URL(s.url),r=n.replace(this.$site.base,"/"),a=decodeURIComponent(i);this.$router.push(`${r}${a}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},i=(s(297),s(6)),r=Object(i.a)(n,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports,a=s(105),o=s.n(a),l=(t,e,s=null)=>{let n=o()(e,"title","");return o()(e,"frontmatter.tags")&&(n+=" "+e.frontmatter.tags.join(" ")),s&&(n+=" "+s),u(t,n)};const u=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(n.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const n=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||n?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var c={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,i=[];for(let r=0;r<e.length&&!(i.length>=s);r++){const a=e[r];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(l(t,a))i.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(i.length>=s);e++){const s=a.headers[e];s.title&&l(t,a,s.title)&&i.push(Object.assign({},a,{path:a.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},h=(s(298),Object(i.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,n){return e("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),p=(s(299),Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img"}},[e("g",{staticClass:"hamburger",attrs:{fill:"currentColor"}},[e("path",{attrs:{d:"M33.75 11.6699H6.25C5.55964 11.6699 5 12.2296 5 12.9199C5 13.6103 5.55964 14.1699 6.25 14.1699H33.75C34.4404 14.1699 35 13.6103 35 12.9199C35 12.2296 34.4404 11.6699 33.75 11.6699Z"}}),t._v(" "),e("path",{attrs:{d:"M28.75 18.752H6.25C5.55964 18.752 5 19.3116 5 20.002C5 20.6923 5.55964 21.252 6.25 21.252H28.75C29.4404 21.252 30 20.6923 30 20.002C30 19.3116 29.4404 18.752 28.75 18.752Z"}}),t._v(" "),e("path",{attrs:{d:"M33.75 25.8301H6.25C5.55964 25.8301 5 26.3897 5 27.0801C5 27.7704 5.55964 28.3301 6.25 28.3301H33.75C34.4404 28.3301 35 27.7704 35 27.0801C35 26.3897 34.4404 25.8301 33.75 25.8301Z"}})]),t._v(" "),e("g",{staticClass:"close",attrs:{stroke:"currentColor"}},[e("path",{attrs:{d:"M10 10L30 30","stroke-width":"2","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M30 10L10 30","stroke-width":"2","stroke-linecap":"round"}})])])])}),[],!1,null,null,null).exports),d=s(272),f=s(296),g=s(106),m=s.n(g),b={name:"DropdownLink",components:{NavLink:d.a,DropdownTransition:f.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>m()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},C=(s(301),Object(i.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(s,n){return e("li",{key:s.link||n,staticClass:"dropdown-item"},["links"===s.type?e("h4",[t._v("\n          "+t._s(s.text)+"\n        ")]):t._e(),t._v(" "),"links"===s.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(s.items,(function(n){return e("li",{key:n.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,s.items)&&t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports),v=s(245),k={name:"NavLinks",components:{NavLink:d.a,DropdownLink:C},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const r=t[i],a=n[i]&&n[i].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(v.j)(t),{items:(t.items||[]).map(v.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"Source"}}},_=(s(302),Object(i.a)(k,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports),w=s(107);function x(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var y={name:"Navbar",components:{SidebarButton:p,NavLinks:_,SearchBox:h,AlgoliaSearchBox:r},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(x(this.$el,"paddingLeft"))+parseInt(x(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},methods:{toggleColorMode(t){t.preventDefault();const e=(document.documentElement.getAttribute(w.THEME_ATTR)||w.COLOR_MODES[0])===w.COLOR_MODES[0]?w.COLOR_MODES[1]:w.COLOR_MODES[0];Object(w.setColorMode)(e)}}},L=(s(303),Object(i.a)(y,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("svg",{staticClass:"logo",attrs:{role:"img",alt:t.$siteTitle}},[e("use",{staticClass:"small",attrs:{href:t.$withBase(t.$site.themeConfig.logo)+"#small"}}),t._v(" "),e("use",{staticClass:"large",attrs:{href:t.$withBase(t.$site.themeConfig.logo)+"#large"}})]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("button",{staticClass:"theme-switch",attrs:{type:"button"},on:{click:function(e){return t.toggleColorMode(e)}}},[e("svg",{attrs:{viewBox:"0 0 30 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{staticClass:"theme-switch-dark"},[e("path",{attrs:{d:"M15 20.4219C12.5187 20.4219 10.5 18.4032 10.5 15.9219C10.5 13.4406 12.5187 11.4219 15 11.4219C17.4813 11.4219 19.5 13.4406 19.5 15.9219C19.5 18.4032 17.4813 20.4219 15 20.4219Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M19.4541 20.3769L21.3644 22.2862M15 24.9219V22.2219V24.9219ZM15 9.62187V6.92188V9.62187ZM6 15.9219H8.7H6ZM21.3 15.9219H24H21.3ZM8.6361 22.2862L10.5454 20.3769L8.6361 22.2862ZM19.4541 11.4678L21.3644 9.55797L19.4541 11.4678ZM8.6361 9.55797L10.5454 11.4678L8.6361 9.55797Z",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}})]),t._v(" "),e("g",{staticClass:"theme-switch-light",attrs:{fill:"currentColor"}},[e("path",{attrs:{d:"M10.1539 8.75585C10.018 8.75585 9.88774 8.70189 9.79168 8.60583C9.69563 8.50977 9.64166 8.37949 9.64166 8.24365V6.19482C9.64166 6.05898 9.69563 5.9287 9.79168 5.83264C9.88774 5.73658 10.018 5.68262 10.1539 5.68262C10.2897 5.68262 10.42 5.73658 10.5161 5.83264C10.6121 5.9287 10.6661 6.05898 10.6661 6.19482V8.24365C10.6661 8.37949 10.6121 8.50977 10.5161 8.60583C10.42 8.70189 10.2897 8.75585 10.1539 8.75585Z"}}),t._v(" "),e("path",{attrs:{d:"M11.1783 7.73144H9.12945C8.9936 7.73144 8.86332 7.67748 8.76726 7.58142C8.6712 7.48536 8.61724 7.35508 8.61724 7.21924C8.61724 7.08339 8.6712 6.95311 8.76726 6.85705C8.86332 6.761 8.9936 6.70703 9.12945 6.70703H11.1783C11.3141 6.70703 11.4444 6.761 11.5405 6.85705C11.6365 6.95311 11.6905 7.08339 11.6905 7.21924C11.6905 7.35508 11.6365 7.48536 11.5405 7.58142C11.4444 7.67748 11.3141 7.73144 11.1783 7.73144ZM6.05621 13.8779C5.92037 13.8779 5.79009 13.8239 5.69403 13.7279C5.59797 13.6318 5.54401 13.5015 5.54401 13.3657V12.3413C5.54401 12.2054 5.59797 12.0752 5.69403 11.9791C5.79009 11.8831 5.92037 11.8291 6.05621 11.8291C6.19206 11.8291 6.32234 11.8831 6.4184 11.9791C6.51445 12.0752 6.56842 12.2054 6.56842 12.3413V13.3657C6.56842 13.5015 6.51445 13.6318 6.4184 13.7279C6.32234 13.8239 6.19206 13.8779 6.05621 13.8779Z"}}),t._v(" "),e("path",{attrs:{d:"M6.56842 13.366H5.544C5.40816 13.366 5.27788 13.312 5.18182 13.216C5.08576 13.1199 5.0318 12.9896 5.0318 12.8538C5.0318 12.7179 5.08576 12.5877 5.18182 12.4916C5.27788 12.3955 5.40816 12.3416 5.544 12.3416H6.56842C6.70426 12.3416 6.83454 12.3955 6.9306 12.4916C7.02666 12.5877 7.08062 12.7179 7.08062 12.8538C7.08062 12.9896 7.02666 13.1199 6.9306 13.216C6.83454 13.312 6.70426 13.366 6.56842 13.366ZM16.8125 23.6101C12.8583 23.6101 9.64165 20.3934 9.64165 16.4392C9.64165 12.8983 12.2851 9.85021 15.7907 9.34876L16.4658 9.25195L16.37 9.92755C16.326 10.218 16.3027 10.5112 16.3003 10.805C16.3003 14.1942 19.0575 16.9514 22.4468 16.9514C22.708 16.9514 22.9872 16.9294 23.3247 16.8813L23.9998 16.7855L23.9035 17.4606C23.401 20.9666 20.3524 23.6101 16.8125 23.6101Z"}})])])])],1),t._v(" "),e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}})],1)])])}),[],!1,null,null,null).exports),$={name:"Sidebar",components:{SidebarLinks:s(295).default,NavLinks:_},props:["items"]},O=(s(306),Object(i.a)($,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),S={name:"Footer",components:{NavLink:d.a},computed:{links(){return this.$site.themeConfig.footer.links},copyright(){return this.$site.themeConfig.footer.copyright}}},j=(s(307),{name:"Layout",components:{Sidebar:O,Navbar:L,Footer:Object(i.a)(S,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"footer-content"},t._l(t.links,(function(s){return e("div",{key:s.title,staticClass:"footer-block"},[e("h4",[t._v(t._s(s.title))]),t._v(" "),t._l(s.children,(function(t){return e("div",{key:t.link},[e("NavLink",{attrs:{item:t}})],1)}))],2)})),0),t._v(" "),t.copyright?e("p",{staticClass:"copyright"},[t._v(t._s(t.copyright))]):t._e()])])])])}),[],!1,null,null,null).exports},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(v.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),I=(s(308),Object(i.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t._t("default")],2)]),t._v(" "),e("Footer")],1)}),[],!1,null,"9ca807bc",null));e.a=I.exports},272:function(t,e,s){"use strict";var n=s(245),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(n.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(n.g)(this.link)||Object(n.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(n.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(n.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},r=s(6),a=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},278:function(t,e,s){},279:function(t,e,s){},280:function(t,e,s){},281:function(t,e,s){},282:function(t,e,s){},283:function(t,e,s){},284:function(t,e,s){},285:function(t,e,s){},286:function(t,e,s){},287:function(t,e,s){},288:function(t,e,s){},289:function(t,e,s){},295:function(t,e,s){"use strict";s.r(e);var n=s(296),i=s(245),r={name:"SidebarGroup",components:{DropdownTransition:n.a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(295).default},methods:{isActive:i.e}},a=(s(304),s(6)),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function l(t,e,s,n,i){const r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,s)}function u(t,e,s,n,r,a=1){return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const o=Object(i.e)(n,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[l(t,s+"#"+e.slug,e.title,o,e.level-1),u(t,e.children,s,n,r,a+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:n,$themeConfig:r,$themeLocaleConfig:a},props:{item:o,sidebarDepth:c}}){const h=Object(i.e)(n,o.path),p="auto"===o.type?h||o.children.some(t=>Object(i.e)(n,o.basePath+"#"+t.slug)):h,d="external"===o.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,o.path,o.title||o.path):l(t,o.path,o.title||o.path,p),f=[e.frontmatter.sidebarDepth,c,a.sidebarDepth,r.sidebarDepth,1].find(t=>void 0!==t),g=a.displayAllHeaders||r.displayAllHeaders;if("auto"===o.type)return[d,u(t,o.children,o.basePath,n,f)];if((p||g)&&o.headers&&!i.d.test(o.path)){return[d,u(t,Object(i.c)(o.headers),o.path,n,f)]}return d}};s(305);function h(t,e){if("group"===e.type){const s=e.path&&Object(i.e)(t,e.path),n=e.children.some(e=>"group"===e.type?h(t,e):"page"===e.type&&Object(i.e)(t,e.path));return s||n}return!1}var p={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if(h(t,n))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(i.e)(this.$route,t.regularPath)}}},d=Object(a.a)(p,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=d.exports},296:function(t,e,s){"use strict";var n={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(s(300),s(6)),r=Object(i.a)(n,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},297:function(t,e,s){"use strict";s(278)},298:function(t,e,s){"use strict";s(279)},299:function(t,e,s){"use strict";s(280)},300:function(t,e,s){"use strict";s(281)},301:function(t,e,s){"use strict";s(282)},302:function(t,e,s){"use strict";s(283)},303:function(t,e,s){"use strict";s(284)},304:function(t,e,s){"use strict";s(285)},305:function(t,e,s){"use strict";s(286)},306:function(t,e,s){"use strict";s(287)},307:function(t,e,s){"use strict";s(288)},308:function(t,e,s){"use strict";s(289)}}]);