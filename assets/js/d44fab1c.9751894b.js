"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9148],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(a),k=r,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],p={title:"Shrine 2.12.0"},s=void 0,i={unversionedId:"release_notes/2.12.0",id:"release_notes/2.12.0",title:"Shrine 2.12.0",description:"New features",source:"@site/../doc/release_notes/2.12.0.md",sourceDirName:"release_notes",slug:"/release_notes/2.12.0",permalink:"/docs/release_notes/2.12.0",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/2.12.0.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 2.12.0"},sidebar:"release_notes",previous:{title:"Shrine 2.13.0",permalink:"/docs/release_notes/2.13.0"},next:{title:"Shrine 2.11.0",permalink:"/docs/release_notes/2.11.0"}},d={},m=[{value:"New features",id:"new-features",level:2},{value:"Other improvements",id:"other-improvements",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],c={toc:m},k="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(k,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Shrine::Attacher#assign_remote_url")," method has been added, which acts the\nsame as ",(0,o.kt)("inlineCode",{parentName:"li"},"#remote_url=")," but allows you to also dynamically provide options to\nthe underlying downloader (",(0,o.kt)("inlineCode",{parentName:"li"},"Down.download")," by default).")),(0,o.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.assign_remote_url("),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"https://example.com/image.jpg"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", downloader"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"Cookie"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"abc123"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," })"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download_url")," method has been added to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin for explicitly generating the file URL through\nthe download endpoint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":redirect")," option has been added to ",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin, which\nmakes download URLs redirect directly to the uploaded file on its storage.\nThis allows you to avoding streaming the file through your app, and thus not\nhaving it impact your request throughput.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Plugins::ValidationHelpers::PRETTY_FILESIZE")," callbable has been\nadded, which takes the filesize in bytes and returns the representation in\ncorrect unit. This can be used when providing custom validation error messages."))),(0,o.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"pretty_filesize "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Plugins"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ValidationHelpers"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"PRETTY_FILESIZE")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"pretty_filesize.call("),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")           "),(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "1.0 KB"')),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"pretty_filesize.call("),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1.5"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")    "),(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "1.5 MB"')),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"pretty_filesize.call("),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"2"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "2.0 GB"'))))),(0,o.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Storage::FileSystem#open")," now forwards any additional options to\n",(0,o.kt)("inlineCode",{parentName:"p"},"File.open"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Storage::S3#open")," method now accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},":rewindable")," option to\ndisable caching read content to disk.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In validation error messages in filesize validators in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"validation_helpers")," plugin show specified limits in the appropriate unit,\ninstead of always using megabytes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#open")," will now always open a new IO object, and close\nthe previous one. This way the uploaded file will be reopened if it's closed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed possible encoding issues in ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Storage::S3#upload")," when filesize\nis unknown.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The registered storage resolvers in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic_storage")," plugin are now\ncorrectly inherited upon subclassing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":file")," MIME type analyzer from ",(0,o.kt)("inlineCode",{parentName:"p"},"determine_mime_type")," plugin will now\nraise an explicit ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Error")," when the subprocess from the shell command\nfailed to be spawned.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Attacher#data_uri=")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Attacher#remote_url=")," in addition to ",(0,o.kt)("inlineCode",{parentName:"p"},'""')," now also\nignore ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," values, instead of raising an exception."))),(0,o.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":storages")," option has been deprecated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin\nin favour of the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::UploadedFile#download_url")," method.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The deprecation of assigning cached versions has been undone, as it can be a\nuseful feature."))))}u.isMDXComponent=!0}}]);