"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Shrine 2.6.1"},c=void 0,l={unversionedId:"release_notes/2.6.1",id:"release_notes/2.6.1",title:"Shrine 2.6.1",description:"Bug fixes",source:"@site/../doc/release_notes/2.6.1.md",sourceDirName:"release_notes",slug:"/release_notes/2.6.1",permalink:"/docs/release_notes/2.6.1",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/2.6.1.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 2.6.1"},sidebar:"release_notes",previous:{title:"Shrine 2.7.0",permalink:"/docs/release_notes/2.7.0"},next:{title:"Shrine 2.6.0",permalink:"/docs/release_notes/2.6.0"}},p={},u=[{value:"Bug fixes",id:"bug-fixes",level:2}],d={toc:u},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When ",(0,a.kt)("inlineCode",{parentName:"p"},"download_endpoint")," streams file content into the response body, with\ncertain storages (FileSystem, SQL) it will use a buffer object when reading\neach chunk, which will make that, instead of each read chunk allocating a new\nstring object, ever new chunk is read into the same buffer string object,\nreplacing the content from the previous chunk."),(0,a.kt)("p",{parentName:"li"},"Unfortunately, there are some parts of the Rack/Rails stack which rely on all\nchunks co-existing in the memory at the same time (for example the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Rack::ContentLenth")," middleware). For that reason, and to be consistent in\nbehaviour and memory usage when used with other storages (S3), we modify\n",(0,a.kt)("inlineCode",{parentName:"p"},"download_endpoint")," not to use the buffer object, and have each read chunk be\na new string object."))))}m.isMDXComponent=!0}}]);