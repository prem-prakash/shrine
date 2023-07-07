"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(y,p(p({ref:t},i),{},{components:a})):n.createElement(y,p({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,p=new Array(s);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<s;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),p=["components"],o={title:"Restore Cached Data"},l=void 0,c={unversionedId:"plugins/restore_cached_data",id:"plugins/restore_cached_data",title:"Restore Cached Data",description:"The restorecacheddata plugin re-extracts metadata",source:"@site/../doc/plugins/restore_cached_data.md",sourceDirName:"plugins",slug:"/plugins/restore_cached_data",permalink:"/docs/plugins/restore_cached_data",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/restore_cached_data.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Restore Cached Data"},sidebar:"plugins",previous:{title:"Refresh Metadata",permalink:"/docs/plugins/refresh_metadata"},next:{title:"Signature",permalink:"/docs/plugins/signature"}},i={},d=[],m={toc:d},u="wrapper";function y(e){var t=e.components,a=(0,r.Z)(e,p);return(0,s.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/restore_cached_data.rb"},(0,s.kt)("inlineCode",{parentName:"a"},"restore_cached_data"))," plugin re-extracts metadata\nwhen assigning already cached files, i.e. when the attachment has been retained\non validation errors or assigned from a direct upload. In both cases you may\nwant to re-extract metadata on the server side, mainly to prevent tempering,\nbut also in case of direct uploads to obtain metadata that couldn't be\nextracted on the client side."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":restore_cached_data"))))),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"id"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"path/to/image.jpg"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"storage"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"cache"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"metadata"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {} }")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.metadata "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> { "size" => 4823763, "mime_type" => "image/jpeg", ... }'))))),(0,s.kt)("p",null,"It uses the ",(0,s.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/refresh_metadata"},(0,s.kt)("inlineCode",{parentName:"a"},"refresh_metadata"))," plugin to re-extract\nmetadata."))}y.isMDXComponent=!0}}]);