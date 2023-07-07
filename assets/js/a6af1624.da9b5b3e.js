"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5309],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},F=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=c(t),F=s,k=m["".concat(l,".").concat(F)]||m[F]||d[F]||r;return t?n.createElement(k,p(p({ref:a},i),{},{components:t})):n.createElement(k,p({ref:a},i))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=F;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:s,p[1]=o;for(var c=2;c<r;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}F.displayName="MDXCreateElement"},1713:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),p=["components"],o={title:"Processing"},l=void 0,c={unversionedId:"plugins/processing",id:"plugins/processing",title:"Processing",description:"Shrine uploaders can define the #process method, which will get called",source:"@site/../doc/plugins/processing.md",sourceDirName:"plugins",slug:"/plugins/processing",permalink:"/docs/plugins/processing",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/processing.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Processing"}},i={},m=[{value:"Manually Run Processing",id:"manually-run-processing",level:2}],d={toc:m},F="wrapper";function k(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)(F,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Shrine uploaders can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"#process")," method, which will get called\nwhenever a file is uploaded. It is given the original file, and is expected to\nreturn the processed files."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#62E884"}},"process"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,r.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"io"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,r.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"context"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# you can process the original file `io` and return processed file(s)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("p",null,"However, when handling files as attachments, the same file is uploaded to\ntemporary and permanent storage. Since we only want to apply the same\nprocessing once, we need to branch based on the context."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#62E884"}},"process"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,r.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"io"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,r.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"context"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"if"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," context["),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":action"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"] "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# promote phase")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/processing.rb"},(0,r.kt)("inlineCode",{parentName:"a"},"processing"))," plugin simplifies this by allowing us to\ndeclaratively define file processing for specified actions."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":processing")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"process("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |io, context|")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("p",null,"An example of resizing an image using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janko/image_processing"},"image_processing")," library:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image_processing/mini_magick"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"process("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |io, context|")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  io.download "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |original|")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ImageProcessing"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"MiniMagick")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      .source(original)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      .resize_to_limit!("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"800"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"800"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("p",null,"The declarations are additive and inheritable, so for the same action you can\ndeclare multiple blocks, and they will be performed in the same order, with\noutput from previous block being the input to next."),(0,r.kt)("h2",{id:"manually-run-processing"},"Manually Run Processing"),(0,r.kt)("p",null,"You can manually trigger the defined processing via the uploader by calling\n",(0,r.kt)("inlineCode",{parentName:"p"},"#upload")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"#process")," and setting ",(0,r.kt)("inlineCode",{parentName:"p"},":action")," to the name of your processing\nblock:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploader.upload(file, action"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# process and upload")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploader.process(file, action"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# only process"))))),(0,r.kt)("p",null,"If you want the result of processing to be multiple files, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions"),"\nplugin."))}k.isMDXComponent=!0}}]);