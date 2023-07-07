"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4349],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>F});var n=t(7294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},i=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,s=e.originalType,o=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),m=d(t),k=p,F=m["".concat(o,".").concat(k)]||m[k]||c[k]||s;return t?n.createElement(F,l(l({ref:a},i),{},{components:t})):n.createElement(F,l({ref:a},i))}));function F(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var s=t.length,l=new Array(s);l[0]=k;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[m]="string"==typeof e?e:p,l[1]=r;for(var d=2;d<s;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3168:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>F,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=t(7462),p=t(3366),s=(t(7294),t(3905)),l=["components"],r={id:"retrieving-uploads",title:"Retrieving Uploads"},o=void 0,d={unversionedId:"retrieving-uploads",id:"retrieving-uploads",title:"Retrieving Uploads",description:"Uploaded file content is typically retrieved from the storage using a",source:"@site/../doc/retrieving_uploads.md",sourceDirName:".",slug:"/retrieving-uploads",permalink:"/docs/retrieving-uploads",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/retrieving_uploads.md",tags:[],version:"current",lastUpdatedBy:"Stephan Leibelt",lastUpdatedAt:1667332266,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{id:"retrieving-uploads",title:"Retrieving Uploads"},sidebar:"guides",previous:{title:"The Design of Shrine",permalink:"/docs/design"},next:{title:"Using Attacher",permalink:"/docs/attacher"}},i={},m=[{value:"IO-like interface",id:"io-like-interface",level:2},{value:"<code>Storage#open</code>",id:"storageopen",level:2},{value:"Opening",id:"opening",level:2},{value:"Streaming",id:"streaming",level:2},{value:"Downloading",id:"downloading",level:2}],c={toc:m},k="wrapper";function F(e){var a=e.components,t=(0,p.Z)(e,l);return(0,s.kt)(k,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Uploaded file content is typically retrieved from the storage using a\n",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile")," object. This guide explains the various methods of\nretrieving file content and how do they work."),(0,s.kt)("p",null,"For context, ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile")," object is what is returned by the\nattachment reader method on the model instance (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"photo.image"),"),\n",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::Attacher#get")," if you're using the attacher directly, or\n",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine#upload")," if you're using the uploader directly."),(0,s.kt)("h2",{id:"io-like-interface"},"IO-like interface"),(0,s.kt)("p",null,"In order for ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile")," objects to be uploadable to a storage, they\ntoo conform to Shrine's IO-like interface, meaning they implement ",(0,s.kt)("inlineCode",{parentName:"p"},"#read"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"#rewind"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"#eof?"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"#close")," matching the behaviour of the same methods on\nRuby's IO class."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.eof?   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# => false")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.read   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'# => "..."')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.eof?   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# => true")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.rewind "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# rewinds the underlying IO object")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.eof?   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# => false")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.close  "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# closes the underlying IO object (this should be called when you're done)"))))),(0,s.kt)("p",null,"These methods are simply delegated on the IO object returned by the\n",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," method of the underlying Shrine storage. ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," is\nimplicitly called when any of these IO methods are called for the first time."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"10"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# calls `Storage#open` and assigns result to an instance variable")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"10"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ..."))))),(0,s.kt)("p",null,"You can retrieve the underlying IO object returned by ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," with\n",(0,s.kt)("inlineCode",{parentName:"p"},"#to_io"),":"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.to_io "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# the underlying IO object returned by `Storage#open`"))))),(0,s.kt)("h2",{id:"storageopen"},(0,s.kt)("inlineCode",{parentName:"h2"},"Storage#open")),(0,s.kt)("p",null,"The underlying IO object that ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile")," will use depends on the\nstorage. The ",(0,s.kt)("inlineCode",{parentName:"p"},"FileSystem")," storage will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"File")," object, while ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," and\nmost other remote storages will return ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/janko/down#streaming"},(0,s.kt)("inlineCode",{parentName:"a"},"Down::ChunkedIO"))," that downloads file\ncontent on-demand."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".storages "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  file_system"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(...),")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  s3"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"          "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"S3"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(...),")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"local_file "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(file, "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":file_system"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"local_file.to_io "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<File:/path/to/file>")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(file, "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":s3"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.to_io "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Down::ChunkedIO> (opens HTTP connection)")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# downloads first 1MB")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# downloads next 1MB")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.close "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# closes HTTP connection"))))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Down::ChunkedIO")," object will cache downloaded content to disk in order to\nbe rewindable, which is used in a places such as metadata extraction."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# downloads and caches first 1MB")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.rewind")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# reads first 1MB from the cache")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# downloads and caches next 1MB"))))),(0,s.kt)("p",null,"If you want to turn off caching to disk, most storages allow you to pass\n",(0,s.kt)("inlineCode",{parentName:"p"},":rewindable")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open"),":"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(rewindable"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# downloads first 1MB (no caching to disk)")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"remote_file.rewind "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#~> IOError: this Down::ChunkedIO is not rewindable"))))),(0,s.kt)("h2",{id:"opening"},"Opening"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open")," method can be used to open the uploaded file\nexplicitly:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# calls `Storage#open` and assigns result to an instance variable")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.read")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.close"))))),(0,s.kt)("p",null,"This is useful if you want to control where ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," will be called. It's\nalso useful if you want to pass additional parameters to ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open"),", which\nwill depend on the storage. For example, if you're using S3 storage and\nserver-side encryption, you can pass the necessary server-side-encryption\nparameters to ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::Storage::S3#open"),":"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# server-side encryption parameters for S3 storage")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," sse_customer_algorithm"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"AES256"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," sse_customer_key"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"       "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"secret_key"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," sse_customer_key_md5"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"   "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"secret_key_md5"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")"))))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open")," also accepts a block, which will ensure that the\nunderlying IO object is closed at the end of the block."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  uploaded_file.read("),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1000"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# underlying IO object is closed"))))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open")," will return the result of a given block.\nWe can use that to safely retrieve the whole content of a file, without\nleaving any temporary files lying around."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"content "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"&"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":read"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# open, read, and close")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"content "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# uploaded file content"))))),(0,s.kt)("h2",{id:"streaming"},"Streaming"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#stream")," method can be used to stream uploaded file\ncontent to a writable destination object."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"destination "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"StringIO"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'# from the "stringio" standard library')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.stream(destination)")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"destination.rewind")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"destination "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# holds the file content"))))),(0,s.kt)("p",null,"The destination object can be any object that responds to ",(0,s.kt)("inlineCode",{parentName:"p"},"#write")," and returns\nnumber of bytes written, or a path string."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#stream")," will play nicely with\n",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open"),", meaning it will not re-open the uploaded file if\nit's already opened."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  uploaded_file.stream(destination)")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("p",null,"Any additional parameters to ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadeFile#stream")," are forwarded to\n",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open"),". For example, if you're using S3 storage, you can tell AWS S3 to\nuse HTTP compression for the download request:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.stream(destination, response_content_encoding"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"gzip"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")"))))),(0,s.kt)("p",null,"If you want to stream uploaded file content to the response body in a Rack\napplication (Rails, Sinatra, Roda etc), see the ",(0,s.kt)("inlineCode",{parentName:"p"},"rack_response")," plugin."),(0,s.kt)("h2",{id:"downloading"},"Downloading"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download")," method can be used to download uploaded\nfile content do disk. Internally a temporary file will be created (using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"tempfile")," standard library) and passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#stream"),". The\nreturn value is an open ",(0,s.kt)("inlineCode",{parentName:"p"},"Tempfile")," object (a delegate of the ",(0,s.kt)("inlineCode",{parentName:"p"},"File")," class)."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tempfile "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," uploaded_file.download")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tempfile "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...>")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tempfile.path   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "/var/folders/k7/6zx6dx6x7ys3rv3srh0nyfj00000gn/T/20181227-2915-m2l6c1"')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tempfile.read   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "..."')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tempfile.close! "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# close and unlink"))))),(0,s.kt)("p",null,"Like ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download")," accepts a\nblock as well. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Tempfile")," object is yielded to the block, and after the\nblock finishes it's automatically closed and deleted."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.download "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |tempfile|")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  tempfile.path   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "/var/folders/k7/6zx6dx6x7ys3rv3srh0nyfj00000gn/T/20181227-2915-m2l6c1"')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  tempfile.read   "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "..."')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# tempfile is closed and deleted"))))),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download")," internally uses\n",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#stream"),", it plays nicely with ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open"),"\nas well, meaning it will only open the uploaded file if it's not already\nopened."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file."),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"open"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  tempfile "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," uploaded_file.download")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("p",null,"Any options passed to ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download")," are forwarded to\n",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," (unless the uploaded file was already opened, in which case\n",(0,s.kt)("inlineCode",{parentName:"p"},"Storage#open")," was already called). For example, if you're using S3 storage,\nyou can tell AWS S3 to use HTTP compression for the download request:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.download(response_content_encoding"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"gzip"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")"))))),(0,s.kt)("p",null,"Every time ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download")," is called, it will make a new copy\nof the uploaded file content. If you plan to retrieve uploaded file content\nmultiple times for the same ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile")," instance, consider using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"tempfile")," plugin."))}F.isMDXComponent=!0}}]);