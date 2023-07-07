"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1458],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),m=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=m(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(r),h=n,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(f,i(i({ref:e},s),{},{components:r})):a.createElement(f,i({ref:e},s))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[d]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9129:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],p={title:"Miscellaneous"},l=void 0,m={unversionedId:"external/misc",id:"external/misc",title:"Miscellaneous",description:"Demos",source:"@site/../doc/external/misc.md",sourceDirName:"external",slug:"/external/misc",permalink:"/docs/external/misc",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/external/misc.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1579432105,formattedLastUpdatedAt:"Jan 19, 2020",frontMatter:{title:"Miscellaneous"},sidebar:"external",previous:{title:"Articles",permalink:"/docs/external/articles"}},s={},d=[{value:"Demos",id:"demos",level:2},{value:"Projects",id:"projects",level:2}],c={toc:d},h="wrapper";function f(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)(h,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"demos"},"Demos"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Demo"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/codyeatworld/example-shrine-dropzone"},"Dropzone demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows direct upload using ",(0,o.kt)("a",{parentName:"td",href:"https://www.dropzonejs.com/"},"Dropzone.js"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/katafrakt/hanami-shrine-example"},"Hanami demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows file attachment in ",(0,o.kt)("a",{parentName:"td",href:"https://hanamirb.org/"},"Hanami"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-crop-example"},"Crop demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows image cropping using ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/fengyuanchen/cropperjs"},"Cropper.js"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/erikdahlstrand/shrine-rails-example"},"Rails demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows direct upload in ",(0,o.kt)("a",{parentName:"td",href:"https://rubyonrails.org/"},"Rails"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-tus-demo"},"Resumable uploads demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows resumable direct upload on ",(0,o.kt)("a",{parentName:"td",href:"https://tus.io/"},"tus"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine/tree/master/demo"},"Roda demo (official)")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows direct upload in ",(0,o.kt)("a",{parentName:"td",href:"https://roda.jeremyevans.net/"},"Roda"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-rom/tree/master/demo"},"rom-rb & dry-rb demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows file attachment with ",(0,o.kt)("a",{parentName:"td",href:"https://rom-rb.org/"},"rom-rb")," and ",(0,o.kt)("a",{parentName:"td",href:"https://dry-rb.org/"},"dry-rb"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-transloadit/tree/master/demo"},"Transloadit demo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Shows file processing using ",(0,o.kt)("a",{parentName:"td",href:"https://transloadit.com/"},"Transloadit"))))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Project"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://docs.cortexcms.org"},"CortexCMS")),(0,o.kt)("td",{parentName:"tr",align:"left"},"An open source, enterprise content management and distribution platform")))))}f.isMDXComponent=!0}}]);