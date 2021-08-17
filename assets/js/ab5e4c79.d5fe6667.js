"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49792],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=p,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64354:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],l={},u=void 0,i={unversionedId:"puppeteer.page.__",id:"version-10.1.0/puppeteer.page.__",isDocsHomePage:!1,title:"puppeteer.page.__",description:"Home &gt; puppeteer &gt; Page &gt; $$",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.__.md",sourceDirName:".",slug:"/puppeteer.page.__",permalink:"/puppeteer/docs/puppeteer.page.__",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.__.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page._",permalink:"/puppeteer/docs/puppeteer.page._"},next:{title:"puppeteer.page.__eval",permalink:"/puppeteer/docs/puppeteer.page.__eval"}},c=[{value:"Page.$$() method",id:"page-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.__"},"$$")),(0,a.kt)("h2",{id:"page-method"},"Page.$$() method"),(0,a.kt)("p",null,"The method runs ",(0,a.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll")," within the page. If no elements match the selector, the return value resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"$$<T extends Element = Element>(selector: string): Promise<Array<ElementHandle<T>>>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("code",null,"selector")," to query page for")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","Array","<",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle"),"<","T",">",">",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.frame.__"},"Page.mainFrame().$$(selector)"),"."))}m.isMDXComponent=!0}}]);