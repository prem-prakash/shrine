"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6924],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>F});var n=t(7294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=m(t),k=p,F=i["".concat(o,".").concat(k)]||i[k]||d[k]||r;return t?n.createElement(F,s(s({ref:a},c),{},{components:t})):n.createElement(F,s({ref:a},c))}));function F(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=t.length,s=new Array(r);s[0]=k;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[i]="string"==typeof e?e:p,s[1]=l;for(var m=2;m<r;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2709:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>F,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var n=t(7462),p=t(3366),r=(t(7294),t(3905)),s=["components"],l={title:"Remote URL"},o=void 0,m={unversionedId:"plugins/remote_url",id:"plugins/remote_url",title:"Remote URL",description:"The remoteurl plugin allows you to attach files from a remote",source:"@site/../doc/plugins/remote_url.md",sourceDirName:"plugins",slug:"/plugins/remote_url",permalink:"/docs/plugins/remote_url",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/remote_url.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1578574300,formattedLastUpdatedAt:"Jan 9, 2020",frontMatter:{title:"Remote URL"},sidebar:"plugins",previous:{title:"Rack File",permalink:"/docs/plugins/rack_file"},next:{title:"Remove Invalid",permalink:"/docs/plugins/remove_invalid"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Downloader",id:"downloader",level:2},{value:"Calling downloader",id:"calling-downloader",level:3},{value:"Uploader options",id:"uploader-options",level:2},{value:"Maximum size",id:"maximum-size",level:2},{value:"Errors",id:"errors",level:2},{value:"Background",id:"background",level:2},{value:"File extension",id:"file-extension",level:2},{value:"Instrumentation",id:"instrumentation",level:2}],d={toc:i},k="wrapper";function F(e){var a=e.components,t=(0,p.Z)(e,s);return(0,r.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/remote_url.rb"},(0,r.kt)("inlineCode",{parentName:"a"},"remote_url"))," plugin allows you to attach files from a remote\nlocation."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", max_size"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"20"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"))))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The plugin will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"#<name>_remote_url")," writer to your model, which\ndownloads the remote file and uploads it to temporary storage."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image_remote_url "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://example.com/cool-image.png"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.mime_type         "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "image/png"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.size              "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 43423")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.original_filename "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "cool-image.png"'))))),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine::Attacher")," directly, you can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"Attacher#assign_remote_url"),":"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.assign_remote_url("),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://example.com/cool-image.png"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file.mime_type         "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "image/png"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file.size              "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 43423")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file.original_filename "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "cool-image.png"'))))),(0,r.kt)("h2",{id:"downloader"},"Downloader"),(0,r.kt)("p",null,"By default, the file will be downloaded using ",(0,r.kt)("inlineCode",{parentName:"p"},"Down.download")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janko/down"},"Down"),"\ngem. This will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janko/down#downnethttp"},"Down::NetHttp")," backend by default, which is a wrapper\naround ",(0,r.kt)("a",{parentName:"p",href:"https://ruby-doc.org/stdlib/libdoc/open-uri/rdoc/OpenURI.html"},"open-uri"),"."),(0,r.kt)("p",null,"You can pass options to the downloader via the ",(0,r.kt)("inlineCode",{parentName:"p"},":downloader")," option:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.assign_remote_url url, downloader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  headers"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"Authorization"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"Basic ..."),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," },")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  read_timeout"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"30"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", open_timeout"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"30"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  max_redirects"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"5"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},",")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("p",null,"You can also change the downloader:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# Gemfile")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"gem "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'))))),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"down/http"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", downloader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (url, "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options) {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Down"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Http"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".download(url, "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options) "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |client|")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    client.follow(max_hops"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"2"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},").timeout(connect"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"2"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", read"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"2"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("p",null,"Any ",(0,r.kt)("inlineCode",{parentName:"p"},"Down::NotFound")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Down::TooLarge")," exceptions will be rescued and\nconverted into validation errors. If you want to convert any other exceptions\ninto validation errors, you can raise them as\n",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine::Plugins::RemoteUrl::DownloadError"),":"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", downloader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (url, "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options) {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"begin")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"RestClient"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".get(url)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"rescue"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"RestClient"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"ExceptionWithResponse"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," error")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"raise"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Plugins"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"RemoteUrl"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"DownloadError"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"remote file not found"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("h3",{id:"calling-downloader"},"Calling downloader"),(0,r.kt)("p",null,"You can call the downloader directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine.remote_url"),":"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or YourUploader.remote_url(...)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".remote_url("),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"https://example.com/image.jpg"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Tempfile:...>"))))),(0,r.kt)("p",null,"You can pass additional options as well:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or YourUploader.remote_url(...)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".remote_url("),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"https://example.com/image.jpg"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", headers"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"Cookie"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"..."),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," })"))))),(0,r.kt)("h2",{id:"uploader-options"},"Uploader options"),(0,r.kt)("p",null,"Any additional options passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Attacher#assign_remote_url")," will be forwarded\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"Attacher#assign")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine#upload"),"):"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.assign_remote_url(url, metadata"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"mime_type"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"=>"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"text/plain"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," })"))))),(0,r.kt)("h2",{id:"maximum-size"},"Maximum size"),(0,r.kt)("p",null,"It's a good practice to limit the maximum filesize of the remote file:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", max_size"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"20"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# 20 MB"))))),(0,r.kt)("p",null,'Now if a file that is bigger than 20MB is assigned, download will be terminated\nas soon as it gets the "Content-Length" header, or the size of currently\ndownloaded content surpasses the maximum size. However, if for whatever reason\nyou don\'t want to limit the maximum file size, you can set ',(0,r.kt)("inlineCode",{parentName:"p"},":max_size")," to nil:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", max_size"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"))))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"If download errors, the error is rescued and a validation error is added equal\nto the error message. You can change the default error message:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", error_message"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"download failed"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", error_message"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (url, error) { "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"I18n"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".t("),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"errors.download_failed"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") }"))))),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"If you want the file to be downloaded from the URL in the background, you can\nuse the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine-url"},"shrine-url")," storage which allows you to assign a custom URL as cached\nfile ID, and pair that with the ",(0,r.kt)("inlineCode",{parentName:"p"},"backgrounding")," plugin."),(0,r.kt)("h2",{id:"file-extension"},"File extension"),(0,r.kt)("p",null,"When attaching from a remote URL, the uploaded file location will inherit the\nextension from the URL. However, some URLs might not have an extension. To\nhandle this case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"infer_extension")," plugin to infer the\nextension from the MIME type."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":infer_extension"))))),(0,r.kt)("h2",{id:"instrumentation"},"Instrumentation"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"instrumentation")," plugin has been loaded, the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote_url")," plugin adds\ninstrumentation around remote URL downloading."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# instrumentation plugin needs to be loaded *before* remote_url")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":instrumentation")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"))))),(0,r.kt)("p",null,"Downloading remote URLs will trigger a ",(0,r.kt)("inlineCode",{parentName:"p"},"remote_url.shrine")," event with the\nfollowing payload:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":remote_url")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The remote URL string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":download_options")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any download options passed in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":uploader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The uploader class that sent the event")))),(0,r.kt)("p",null,"A default log subscriber is added as well which logs these events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Remote URL (1550ms) \u2013 {:remote_url=>"https://example.com/image.jpg",:download_options=>{},:uploader=>Shrine}\n')),(0,r.kt)("p",null,"You can also use your own log subscriber:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", log_subscriber"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (event) {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".logger.info "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"JSON"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".generate(name"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," event.name, duration"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," event.duration, "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"event.payload)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"name":"remote_url","duration":5,"remote_url":"https://example.com/image.jpg","download_options":{},"uploader":"Shrine"}\n')),(0,r.kt)("p",null,"Or disable logging altogether:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remote_url"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", log_subscriber"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"))))))}F.isMDXComponent=!0}}]);