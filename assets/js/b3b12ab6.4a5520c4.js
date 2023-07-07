"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1177],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},F=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=c(t),F=s,k=i["".concat(o,".").concat(F)]||i[F]||y[F]||p;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var p=t.length,r=new Array(p);r[0]=F;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[i]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<p;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}F.displayName="MDXCreateElement"},3233:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(7462),s=t(3366),p=(t(7294),t(3905)),r=["components"],l={id:"file-system",title:"File System"},o=void 0,c={unversionedId:"storage/file-system",id:"storage/file-system",title:"File System",description:"The FileSystem storage handles uploads to the filesystem, and it is most",source:"@site/../doc/storage/file_system.md",sourceDirName:"storage",slug:"/storage/file-system",permalink:"/docs/storage/file-system",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/storage/file_system.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571919057,formattedLastUpdatedAt:"Oct 24, 2019",frontMatter:{id:"file-system",title:"File System"},sidebar:"guides",previous:{title:"Using Attacher",permalink:"/docs/attacher"},next:{title:"AWS S3",permalink:"/docs/storage/s3"}},m={},i=[{value:"Host",id:"host",level:2},{value:"Moving",id:"moving",level:2},{value:"Path",id:"path",level:2},{value:"Deleting prefixed",id:"deleting-prefixed",level:2},{value:"Clearing cache",id:"clearing-cache",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Heroku",id:"heroku",level:2}],y={toc:i},F="wrapper";function k(e){var a=e.components,t=(0,s.Z)(e,r);return(0,p.kt)(F,(0,n.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,'The FileSystem storage handles uploads to the filesystem, and it is most\ncommonly initialized with a "base" folder and a "prefix":'),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"shrine/storage/file_system"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"public"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", prefix"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"uploads"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.url("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "/uploads/image.jpg"'))))),(0,p.kt)("p",null,'This storage will upload all files to "public/uploads", and the URLs of the\nuploaded files will start with "/uploads/',"*",'". This way you can use FileSystem\nfor both cache and store, one having the prefix "uploads/cache" and other\n"uploads/store". If you\'re uploading files to the ',(0,p.kt)("inlineCode",{parentName:"p"},"public")," directory itself,\nyou need to set ",(0,p.kt)("inlineCode",{parentName:"p"},":prefix")," to ",(0,p.kt)("inlineCode",{parentName:"p"},'"/"'),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"public"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", prefix"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"/"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# no prefix")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.url("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "/image.jpg"'))))),(0,p.kt)("p",null,'You can also initialize the storage just with the "base" directory, and then\nthe FileSystem storage will generate absolute URLs to files:'),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Dir"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".tmpdir)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.url("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "/var/folders/k7/6zx6dx6x7ys3rv3srh0nyfj00000gn/T/image.jpg"'))))),(0,p.kt)("h2",{id:"host"},"Host"),(0,p.kt)("p",null,"It's generally a good idea to serve your files via a CDN, so an additional\n",(0,p.kt)("inlineCode",{parentName:"p"},":host")," option can be provided to ",(0,p.kt)("inlineCode",{parentName:"p"},"#url"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"public"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", prefix"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"uploads"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.url("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", host"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://abc123.cloudfront.net"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "http://abc123.cloudfront.net/uploads/image.jpg"'))))),(0,p.kt)("p",null,"If you're not using a CDN, it's recommended that you still set ",(0,p.kt)("inlineCode",{parentName:"p"},":host")," to your\napplication's domain (at least in production)."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},":host")," option can also be used wihout ",(0,p.kt)("inlineCode",{parentName:"p"},":prefix"),", and is useful if you for\nexample have files located on another server:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"/opt/files"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.url("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", host"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://943.23.43.1"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "http://943.23.43.1/opt/files/image.jpg"'))))),(0,p.kt)("h2",{id:"moving"},"Moving"),(0,p.kt)("p",null,"If you're uploading files on disk and want to improve performance, you can tell\nthe ",(0,p.kt)("inlineCode",{parentName:"p"},"FileSystem#upload")," method to ",(0,p.kt)("strong",{parentName:"p"},"move")," files instead of copying them:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.upload(file, "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"/path/to/destination"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", move"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"true"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# performs the `mv` command")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"File"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".exist?(file.path) "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> false"))))),(0,p.kt)("p",null,"If you want to make this option default, you can use the\n",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/upload_options"},(0,p.kt)("inlineCode",{parentName:"a"},"upload_options"))," plugin, provided that both ",(0,p.kt)("inlineCode",{parentName:"p"},":cache")," and\n",(0,p.kt)("inlineCode",{parentName:"p"},":store")," storages are ",(0,p.kt)("inlineCode",{parentName:"p"},"FileSystem"),"):"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":upload_options"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", cache"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { move"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"true"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }, store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { move"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"true"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }"))))),(0,p.kt)("h2",{id:"path"},"Path"),(0,p.kt)("p",null,"You can retrieve path to the file using ",(0,p.kt)("inlineCode",{parentName:"p"},"#path"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.path("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"image.jpg"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Pathname:public/image.jpg>"))))),(0,p.kt)("h2",{id:"deleting-prefixed"},"Deleting prefixed"),(0,p.kt)("p",null,"If you want to delete all files in some directory, you can use\n",(0,p.kt)("inlineCode",{parentName:"p"},"FileSystem#delete_prefixed"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"storage.delete_prefixed("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"some_directory/"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'# deletes all files in "some_directory/"'))))),(0,p.kt)("h2",{id:"clearing-cache"},"Clearing cache"),(0,p.kt)("p",null,"If you're using FileSystem as cache, you will probably want to periodically\ndelete old files which aren't used anymore. You can run something like this\nperiodically:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file_system "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".storages["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":cache"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"]")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file_system.clear! { |path| path.mtime "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Time"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".now "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"-"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"7"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"24"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"60"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"60"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," } "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# delete files older than 1 week"))))),(0,p.kt)("h2",{id:"permissions"},"Permissions"),(0,p.kt)("p",null,"The storage sets the default UNIX permissions to 0644 for files and 0755 for\ndirectories, but you can change that:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"directory"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", permissions"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"0644"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"directory"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", directory_permissions"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"0755"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")"))))),(0,p.kt)("h2",{id:"heroku"},"Heroku"),(0,p.kt)("p",null,'Note that Heroku has a read-only filesystem, and doesn\'t allow you to upload\nyour files to the "public" directory, you can however upload to "tmp"\ndirectory:'),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FileSystem"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"tmp/uploads"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")"))))),(0,p.kt)("p",null,"Note that this approach has a couple of downsides. For example, you can only\nuse it for cache, since Heroku wipes this directory between app restarts. This\nalso means that deploying the app can cancel someone's uploading if you're\nusing backgrounding. Also, by default you cannot generate URLs to files in the\n\"tmp\" directory, but you can with the ",(0,p.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin."))}k.isMDXComponent=!0}}]);