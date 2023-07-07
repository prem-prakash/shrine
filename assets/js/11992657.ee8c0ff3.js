"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=i(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),p=["components"],l={title:"Shrine 2.4.0"},s=void 0,i={unversionedId:"release_notes/2.4.0",id:"release_notes/2.4.0",title:"Shrine 2.4.0",description:"New features",source:"@site/../doc/release_notes/2.4.0.md",sourceDirName:"release_notes",slug:"/release_notes/2.4.0",permalink:"/docs/release_notes/2.4.0",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/2.4.0.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 2.4.0"},sidebar:"release_notes",previous:{title:"Shrine 2.4.1",permalink:"/docs/release_notes/2.4.1"},next:{title:"Shrine 2.3.1",permalink:"/docs/release_notes/2.3.1"}},m={},c=[{value:"New features",id:"new-features",level:2},{value:"Other improvements",id:"other-improvements",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],d={toc:c},k="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)(k,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"default_url_options")," plugin accepts a block for dynamically generating\noptions.")),(0,o.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":default_url_options"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", store"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(io, "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options) "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  {response_content_disposition"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"attachment; filename="),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},'\\"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"#{"),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"io.original_filename"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"}"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},'\\"'),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"activerecord")," plugin supports JSON and JSONB PostgreSQL columns.")),(0,o.kt)("h2",{id:"other-improvements"},"Other improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The FileSystem storage doesn't raise an error when attempting to delete a\nfile that doesn't exist anymore. This behaviour has also been added to the\nstorage linter.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed ",(0,o.kt)("inlineCode",{parentName:"p"},"copy")," plugin running file validations when assigning copied file,\nwhich makes it not work with ",(0,o.kt)("inlineCode",{parentName:"p"},"versions")," plugin.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The S3 storage automatically sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header with the\noriginal filename when uploading files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<attachment>_data")," attribute name has been extracted into\n",(0,o.kt)("inlineCode",{parentName:"p"},"Attacher#data_attribute"),", so that it's possible to override.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The value conversion around the data attribute has been refactored into\n",(0,o.kt)("inlineCode",{parentName:"p"},"#convert_before_write")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#convert_after_read")," on the Attacher, so that\nit can be easily overriden in ORM plugins.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Work around aws-sdk gem failing if the ",(0,o.kt)("inlineCode",{parentName:"p"},":content_disposition")," upload option\nwas passed to the S3 storage containing non-ASCII characters. This is also\nhandled better when generating an URL or presign using the\n",(0,o.kt)("inlineCode",{parentName:"p"},":response_content_disposition")," option, by URL-encoding the header value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The previous change also makes the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," option handle\nproperly filenames with double quotes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"UploadedFile#open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UploadedFile#download")," don't swallow errors raised\nby ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#open")," anymore.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sequel")," plugin now uses less memory when creating large amount of\nrecords (see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jeremyevans/sequel/commit/ead5e5e09e647f3089ea9e161e99b608c2c6ee02"},"Sequel commit")," for more details).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin uses Roda's streaming endpoint, which\nintegrates better with EventMachine.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Shrine::Attachment#to_s")," has been added for better introspection when listing\nmodel ancestors with ",(0,o.kt)("inlineCode",{parentName:"p"},"puts"),"."))),(0,o.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"download_endpoint")," plugin doesn't use the obsolete ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#stream"),"\nmethod anymore, and instead relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#open")," to implement streaming.\nAll of the public Shrine storages plugins already support streaming ",(0,o.kt)("inlineCode",{parentName:"p"},"#open"),"\nfor some time, by using ",(0,o.kt)("inlineCode",{parentName:"p"},"Down::ChunkedIO"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Shrine doesn't anymore explicitly unlink Tempfiles returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage#open"),"\nafter closing them. All external storages already use ",(0,o.kt)("inlineCode",{parentName:"p"},"Down::ChunkedIO")," for\nquite some time, which automatically unlinks the underlying Tempfile when\n",(0,o.kt)("inlineCode",{parentName:"p"},"#close")," is called. But even if your storage returns Tempfiles, these should\nbe automatically unlinked on garbage collection by your Ruby implementation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},":host")," option on FileSystem and S3 storage has been moved from a\nfirst-class storage option passed on ",(0,o.kt)("inlineCode",{parentName:"p"},"#initialize")," to an URL option. The\noriginal ",(0,o.kt)("inlineCode",{parentName:"p"},":host")," option still works, but will be removed in Shrine 3."))),(0,o.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,o.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,o.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# now deprecated")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"S3"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(host"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://abc123.cloudfront.net"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"s3_options)")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"}),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# can be passed to #url")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"s3 "),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Storage"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"S3"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"s3_options)")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"s3.url(host"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://abc123.cloudfront.net"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"}),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or can be set automatically using `default_url_options` plugin")),"\n",(0,o.kt)("span",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,o.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":default_url_options"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", store"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {host"),(0,o.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"http://abc123.cloudfront.net"),(0,o.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,o.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accepting data in form of a JSON string by ",(0,o.kt)("inlineCode",{parentName:"li"},"Shrine.uploaded_file")," has been\ndeprecated, ",(0,o.kt)("inlineCode",{parentName:"li"},"Attacher#uploaded_file")," should be used for it instead. Note that\n",(0,o.kt)("inlineCode",{parentName:"li"},"Shrine.uploaded_file")," will still continue to accept Hash or ",(0,o.kt)("inlineCode",{parentName:"li"},"UploadedFile"),"\nobjects.")))}u.isMDXComponent=!0}}]);