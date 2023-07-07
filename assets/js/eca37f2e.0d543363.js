"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),f=r,u=m["".concat(o,".").concat(f)]||m[f]||d[f]||l;return a?n.createElement(u,p(p({ref:t},c),{},{components:a})):n.createElement(u,p({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],s={title:"Tempfile"},o=void 0,i={unversionedId:"plugins/tempfile",id:"plugins/tempfile",title:"Tempfile",description:"The tempfile plugin makes it easier to reuse a single copy of an",source:"@site/../doc/plugins/tempfile.md",sourceDirName:"plugins",slug:"/plugins/tempfile",permalink:"/docs/plugins/tempfile",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/tempfile.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Tempfile"},sidebar:"plugins",previous:{title:"Rack Response",permalink:"/docs/plugins/rack_response"},next:{title:"Cached Attachment Data",permalink:"/docs/plugins/cached_attachment_data"}},c={},m=[],d={toc:m},f="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/tempfile.rb"},(0,l.kt)("inlineCode",{parentName:"a"},"tempfile"))," plugin makes it easier to reuse a single copy of an\nuploaded file on disk."),(0,l.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,l.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,l.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,l.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":tempfile"))))),(0,l.kt)("p",null,"The plugin provides the ",(0,l.kt)("inlineCode",{parentName:"p"},"UploadedFile#tempfile")," method, which when called on an\nopen uploaded file will return a copy of its content on disk. The first time\nthe method is called the file content will cached into a temporary file and\nreturned. On any subsequent method calls the cached temporary file will be\nreturned directly. The temporary file is deleted when the uploaded file is\nclosed."),(0,l.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,l.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,l.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,l.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,l.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  uploaded_file.tempfile "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...> (file is cached)")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  uploaded_file.tempfile "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...> (cache is returned)")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"),(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# tempfile is deleted")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"}),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# OR")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"}),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,l.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.tempfile "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...> (file is cached)")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.tempfile "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...> (cache is returned)")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,l.kt)("span",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.close "),(0,l.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# tempfile is deleted"))))),(0,l.kt)("p",null,"This plugin also modifies ",(0,l.kt)("inlineCode",{parentName:"p"},"Shrine.with_file")," to call ",(0,l.kt)("inlineCode",{parentName:"p"},"UploadedFile#tempfile"),"\nwhen the given IO object is an open ",(0,l.kt)("inlineCode",{parentName:"p"},"UploadedFile"),". Since ",(0,l.kt)("inlineCode",{parentName:"p"},"Shrine.with_file")," is\ntypically called on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Shrine")," class directly, it's recommended to load this\nplugin globally."))}u.isMDXComponent=!0}}]);