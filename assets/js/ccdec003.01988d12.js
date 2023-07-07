"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(n),k=r,N=d["".concat(l,".").concat(k)]||d[k]||c[k]||o;return n?a.createElement(N,p(p({ref:t},m),{},{components:n})):a.createElement(N,p({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],s={title:"Shrine 2.16.0"},l=void 0,i={unversionedId:"release_notes/2.16.0",id:"release_notes/2.16.0",title:"Shrine 2.16.0",description:"New Features",source:"@site/../doc/release_notes/2.16.0.md",sourceDirName:"release_notes",slug:"/release_notes/2.16.0",permalink:"/docs/release_notes/2.16.0",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/2.16.0.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 2.16.0"},sidebar:"release_notes",previous:{title:"Shrine 2.17.0",permalink:"/docs/release_notes/2.17.0"},next:{title:"Shrine 2.15.0",permalink:"/docs/release_notes/2.15.0"}},m={},d=[{value:"New Features",id:"new-features",level:2},{value:"Other improvements",id:"other-improvements",level:2}],c={toc:d},k="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)(k,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":download_options")," option has been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint"),"\nplugin, for specifying options passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#open"),"."),(0,o.kt)("div",{parentName:"li","data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":download_endpoint"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  download_options"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    sse_customer_algorithm"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"AES256"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    sse_customer_key"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"       "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"secret_key"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    sse_customer_key_md5"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"   "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"secret_key_md5"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  }")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":upload_open_options")," option has been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation_endpoint"),"\nplugin, for specifying options passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#open")," when downloading a\ncached derivation result."),(0,o.kt)("div",{parentName:"li","data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":download_endpoint"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  upload"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"true"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  upload_open_options"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { response_content_encoding"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"gzip"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }"))))))),(0,o.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rack_response")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation_endpoint")," plugins now don't return any\n",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," response header if the MIME type could not be determined from\nthe file extension. Previously it the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," header would default to\n",(0,o.kt)("inlineCode",{parentName:"p"},"application/octet-stream"),", which would force the browser to view the file\nas generic binary content, as opposed to doing its own MIME type sniffing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed ",(0,o.kt)("inlineCode",{parentName:"p"},"delete_raw")," plugin breaking ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation_endpoint")," when ",(0,o.kt)("inlineCode",{parentName:"p"},":upload")," was\nenabled.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed a few things in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Derivation")," API:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Derivation#upload")," doesn't close the input file anymore"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Derivation#upload")," now requires input file to respond to ",(0,o.kt)("inlineCode",{parentName:"li"},"#path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Derivation#upload")," now deletes the internally generated derivation result"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Derivation#processed")," now works when derivation result is a ",(0,o.kt)("inlineCode",{parentName:"li"},"File")," object"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The official demo app now shows the ",(0,o.kt)("inlineCode",{parentName:"p"},"derivation_endpoint")," plugin.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"#to_rack_response")," method from the ",(0,o.kt)("inlineCode",{parentName:"p"},"rack_response")," plugin now always\nopens the ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadedFile"),", and does so upfront. This means if ther are any\ndownload errors, they will bubble up from ",(0,o.kt)("inlineCode",{parentName:"p"},"#to_rack_response")," as opposed to\nwhen the response body is iterated over.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"store_dimensions")," plugin was overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine#extract_metadata"),", it\nmade the second argument (the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," hash) mandatory. This has been fixed,\nnow the second argument is optional again."))))}N.isMDXComponent=!0}}]);