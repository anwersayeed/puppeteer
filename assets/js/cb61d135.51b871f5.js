"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[715],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<p;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17480:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),p=(n(67294),n(3905)),a=["components"],u={},l=void 0,i={unversionedId:"puppeteer.mouse.wheel",id:"version-9.1.1/puppeteer.mouse.wheel",isDocsHomePage:!1,title:"puppeteer.mouse.wheel",description:"Home &gt; puppeteer &gt; Mouse &gt; wheel",source:"@site/versioned_docs/version-9.1.1/puppeteer.mouse.wheel.md",sourceDirName:".",slug:"/puppeteer.mouse.wheel",permalink:"/puppeteer/docs/9.1.1/puppeteer.mouse.wheel",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.mouse.wheel.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.mouse.up",permalink:"/puppeteer/docs/9.1.1/puppeteer.mouse.up"},next:{title:"puppeteer.touchscreen",permalink:"/puppeteer/docs/9.1.1/puppeteer.touchscreen"}},s=[{value:"Mouse.wheel() method",id:"mousewheel-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.mouse"},"Mouse")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.mouse.wheel"},"wheel")),(0,p.kt)("h2",{id:"mousewheel-method"},"Mouse.wheel() method"),(0,p.kt)("p",null,"Dispatches a ",(0,p.kt)("inlineCode",{parentName:"p"},"mousewheel")," event."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"wheel(options?: MouseWheelOptions): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.mousewheeloptions"},"MouseWheelOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"Optional: ",(0,p.kt)("code",null,"MouseWheelOptions"),".")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("p",null,"An example of zooming into an element:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"await page.goto('https://mdn.mozillademos.org/en-US/docs/Web/API/Element/wheel_event$samples/Scaling_an_element_via_the_wheel?revision=1587366');\n\nconst elem = await page.$('div');\nconst boundingBox = await elem.boundingBox();\nawait page.mouse.move(\n  boundingBox.x + boundingBox.width / 2,\n  boundingBox.y + boundingBox.height / 2\n);\n\nawait page.mouse.wheel({ deltaY: -100 })\n\n")))}m.isMDXComponent=!0}}]);