"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6002],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(t),k=r,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||p;return t?n.createElement(N,s(s({ref:a},m),{},{components:t})):n.createElement(N,s({ref:a},m))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,s=new Array(p);s[0]=k;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<p;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3008:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(7462),r=t(3366),p=(t(7294),t(3905)),s=["components"],l={title:"Shrine 1.4.0"},o="New features",i={unversionedId:"release_notes/1.4.0",id:"release_notes/1.4.0",title:"Shrine 1.4.0",description:"* Added delete_promoted plugin for deleting files that have been promoted, which",source:"@site/../doc/release_notes/1.4.0.md",sourceDirName:"release_notes",slug:"/release_notes/1.4.0",permalink:"/docs/release_notes/1.4.0",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/1.4.0.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 1.4.0"},sidebar:"release_notes",previous:{title:"Shrine 1.4.1",permalink:"/docs/release_notes/1.4.1"},next:{title:"Shrine 1.3.0",permalink:"/docs/release_notes/1.3.0"}},m={},c=[],d={toc:c},k="wrapper";function N(e){var a=e.components,t=(0,r.Z)(e,s);return(0,p.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"new-features"},"New features"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added delete_promoted plugin for deleting files that have been promoted, which\napplies to any cached files that have been uploaded to store.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Added ",(0,p.kt)("inlineCode",{parentName:"p"},":fallbacks")," option to versions plugin, which allows specifying\nfallback URLs for versions which haven't finished processing yet."))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":versions"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", fallbacks"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"thumb_2x "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":thumb"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"large_2x "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":large"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ... (background job is working)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user.avatar_url("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":thumb_2x"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# returns :thumb URL until :thumb_2x becomes available")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user.avatar_url("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":large_2x"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# returns :large URL until :large_2x becomes available"))))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Added ability to do custom backgrounding via ",(0,p.kt)("inlineCode",{parentName:"li"},"Attacher.dump")," and\n",(0,p.kt)("inlineCode",{parentName:"li"},"Attacher.load"),".")),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Record"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Sequel::Model")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"after_commit")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"if"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," something_happened?")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      data "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".dump(image_attacher)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"SomethingJob"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".perform_async(data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"SomethingJob")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Sidekiq"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Worker")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"perform"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"data"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    attacher "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"load"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Added ",(0,p.kt)("inlineCode",{parentName:"li"},":presign_location")," to direct_upload plugin for generating the location\nfor presigned upload.")),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":direct_upload"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", presign"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"true"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", presign_location"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(r) { "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"${filename}"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }"))))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Added ",(0,p.kt)("inlineCode",{parentName:"li"},":filename")," to data_uri for generating filenames based on content type\nof the data URI, in order for filename's extension to be automatically used\nin uploaded file's location.")),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"mime/types"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":data_uri"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", filename"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(content_type) "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  extension "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MIME"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Types"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"[content_type].first.preferred_extension")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"data_uri."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"#{"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"extension"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"}"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("h1",{id:"other-improvements"},"Other improvements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The download_endpoint now sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Length")," response header, if the\nsize of the uploaded file is available (S3 now supports it).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"It's now possible to swap S3 storage with FileSystem when using presigns in\ndirect_upload plugin, without changing any code, which is very useful in\ntests.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The backup plugin now waits for the record to be saved with stored files\nbefore it starts uploading to backup storage.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The logging plugin now logs both number of input and output files for\nprocessing.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The migration_helpers now has a ",(0,p.kt)("inlineCode",{parentName:"p"},":delegate")," option, which when set to false\ndoesn't add any additional methods to the model.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"In restore_cached_data plugin the cached file is now closed after the\nmetadata has been extracted.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#promote")," can now accept a phase, which makes it more generic and\ncan now be used for securely reuploading stored files (no processing, aborts\nif attachment changes, old file is deleted with delete_promoted plugin),\nwhich is useful for moving to new location.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The ",(0,p.kt)("inlineCode",{parentName:"p"},":presign_options")," now accepts a static hash in addition to a block.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The direct_upload endpoint has now been refactored into methods, which means\nits now easier to override parts of its behaviour.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The user-defined hooks will now happen outside logging, regardless of the\nload order of logging and hooks plugins.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The parallelize plugin doesn't depend on the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/meh/ruby-thread"},"thread")," gem anymore, it now\nuses threads directly.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Improved the storage linter; it now accounts for some subtleties which could\npotentially make some storages error, it fails fast, and it tests the content\nlength in streaming.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The ",(0,p.kt)("inlineCode",{parentName:"p"},"before_*")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"after_*")," hooks now always happen around ",(0,p.kt)("inlineCode",{parentName:"p"},"around_*")," hooks.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The IO is now automatically rewinded when custom analyzer is used with\ndetermine_mime_type and store_dimensions plugins."))),(0,p.kt)("h1",{id:"bug-fixes"},"Bug fixes"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Fixed logger not being inherited in the logging plugin.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"In validation_helpers plugin the dimensions validations now don't do anything\nwhen dimensions are missing from metadata (previously they were erroring).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The keep_files plugin doesn't spawn delete background jobs anymore for files\nthat are to be kept.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Deleting backed up files now actually works with backgrounding plugin.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Shrine now ignores validations when promoting, which means it will work when\nsaving the record when it is invalid (but validations are skipped).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"S3 storage now properly encodes the URL when ",(0,p.kt)("inlineCode",{parentName:"p"},":host")," option is used, which\nwould previously cause errors if location contained URL-unsafe characters.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Eliminate a tiny chance of a race condition during promoting, which could\nhappen with subsequent attachment updates on the same record when using the\nbackgrounding plugin.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"S3 storage now uses an assigned SSL certificate when downloading."))),(0,p.kt)("h1",{id:"backwards-compatibility"},"Backwards compatibility"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},'The restore_cached plugin has been renamed to "restore_cached_data". The\nplugin will stop being loadable with the old name in Shrine 2.')),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"In direct_upload presign options are now accepted via ",(0,p.kt)("inlineCode",{parentName:"p"},":presign_options"),"\n(instead of ",(0,p.kt)("inlineCode",{parentName:"p"},":presign"),"). Accepting them via ",(0,p.kt)("inlineCode",{parentName:"p"},":presign")," will stop working in\nShrine 2.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The direct_upload's endpoint has now been changed from ",(0,p.kt)("inlineCode",{parentName:"p"},"/:storage/:name")," to\n",(0,p.kt)("inlineCode",{parentName:"p"},"/:storage/upload"),". The old endpoint is still accessible and will stay in\nShrine 2, but will be removed in Shrine 3.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The ",(0,p.kt)("inlineCode",{parentName:"p"},":delegate")," option is now mandatory to pass for migration_helpers,\nuntil Shrine 2 where it will default to false.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},'The delete_uploaded plugin has been renamed to "delete_raw". The plugin can\nstill be loaded via "delete_uploaded", but this won\'t be possible anymore in\nShrine 2.')),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The moving plugin now deprecates \"fake\" moving, where in case the storage\ndidn't support moving the file would be uploaded and deleted. In Shrine 2\nthe file won't be deleted anymore (you can use the delete_raw plugin for\nthis functionality).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"The ",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine.versions!")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine.versions")," methods have been removed, as\nthey were part of internal API of versions plugin, but accidentally made\npublic."))))}N.isMDXComponent=!0}}]);