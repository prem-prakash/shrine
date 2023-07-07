"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6108],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>N});var n=t(7294);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(t),k=p,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||r;return t?n.createElement(N,l(l({ref:a},m),{},{components:t})):n.createElement(N,l({ref:a},m))}));function N(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=t.length,l=new Array(r);l[0]=k;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:p,l[1]=s;for(var i=2;i<r;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7144:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(7462),p=t(3366),r=(t(7294),t(3905)),l=["components"],s={title:"Shrine 1.0.0"},o="Backwards compatibility",i={unversionedId:"release_notes/1.0.0",id:"release_notes/1.0.0",title:"Shrine 1.0.0",description:"* The delete_invalid plugin was removed, because it was unstable since next",source:"@site/../doc/release_notes/1.0.0.md",sourceDirName:"release_notes",slug:"/release_notes/1.0.0",permalink:"/docs/release_notes/1.0.0",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/release_notes/1.0.0.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{title:"Shrine 1.0.0"},sidebar:"release_notes",previous:{title:"Shrine 1.1.0",permalink:"/docs/release_notes/1.1.0"}},m={},c=[],d={toc:c},k="wrapper";function N(e){var a=e.components,t=(0,p.Z)(e,l);return(0,r.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backwards-compatibility"},"Backwards compatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_invalid")," plugin was removed, because it was unstable since next\nform submission would cause errors of trying to delete the cached file which\nwas already deleted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The callback code has been changed, which means that any external ORM plugins\nshould be updated (",(0,r.kt)("inlineCode",{parentName:"p"},"sequel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"activerecord")," plugins which ship with\nShrine have been updated and continue to work).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},":max_size")," option was removed from ",(0,r.kt)("inlineCode",{parentName:"p"},"direct_upload")," plugin. It was\nredundant since it can still be bypassed by uploading the file without the\nplugin, the proper solution is limiting the request body size in\n(nginx/apache), or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks")," plugin to raise an error when file is\ntoo big. For presigned uploads you should limit the filesize by passing a\nblock to ",(0,r.kt)("inlineCode",{parentName:"p"},":presign"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"direct_upload")," doesn't detect the ",(0,r.kt)("inlineCode",{parentName:"p"},"content_type")," query parameter anymore\nwith presigned uploads, instead it should be implemented directly by passing\na block to ",(0,r.kt)("inlineCode",{parentName:"p"},":presign"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine.delete")," method has been removed, as it was redundant, instead\n",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine#delete")," should always be used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine.io!")," method has been removed, as it was meant for internal use\nonly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assigning cached files with parsed JSON hashes is now extracted into a\n",(0,r.kt)("inlineCode",{parentName:"p"},"parsed_json")," plugin, so now if your web framework parses JSON query\nparameters you should load this plugin."))),(0,r.kt)("h1",{id:"new-plugins"},"New plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"rack_file")," plugin has been added, which gives models the ability to accept\nRack's uploaded file hashes (useful in non-Rails web frameworks):")),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"MyUploader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":rack_file")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"User")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyUploader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attachment"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":resume"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"rack_file "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# a Rack file received with the request")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#   :tempfile => #<File:/var/folders/3n/3asd/-Tmp-/RackMultipart201-1476-nfw2-0>,")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#   :filename => "resume.pdf",')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#   :type => "application/pdf",')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# }")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"User"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user.resume "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," rack_file")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user.resume.original_filename "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "resume.pdf"')),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"user.resume.mime_type         "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "application/pdf"'))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"module_include")," plugin has been which adds the ability to extend core\nclasses for the current uploader or all uploaders.")),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"MyUploader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":module_include")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  file_methods "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#62E884"}},"base64")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Base64"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".encode64(read)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyUploader"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":storage"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},").upload(some_file)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"uploaded_file.base64 "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> "sd93K4230sDfsk0POd9..."'))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"default_url_options")," plugin has been added which allows you to provide\ndefault options for file URLs.")),(0,r.kt)("h1",{id:"new-features"},"New features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"determine_mime_type")," plugin can now accept IOs which are not files when\nused with the ",(0,r.kt)("inlineCode",{parentName:"p"},":file")," analyzer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added ",(0,r.kt)("inlineCode",{parentName:"p"},":host")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage::S3#initialize")," for specifying CDNs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added ",(0,r.kt)("inlineCode",{parentName:"p"},":public")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage::S3#url")," for returning an S3 URL stripped\nof credential query parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"direct_upload")," plugin now accepts a block for the ",(0,r.kt)("inlineCode",{parentName:"p"},":presign")," option,\nwhich can be used to return additional presign options (passed directly to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Storage::S3#presign"),"):"))),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":direct_upload"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", presign"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(request) "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# yields a Roda request object")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  {content_length_range"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"0"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"..("),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"5"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")} "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# limit filesize to 5 MB")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"(before|around|after)_upload")," hook to the ",(0,r.kt)("inlineCode",{parentName:"li"},"hooks")," plugin, which\nis wrapped around both processing and storing.")),(0,r.kt)("h1",{id:"other-improvements"},"Other improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed the ",(0,r.kt)("inlineCode",{parentName:"p"},"recache")," plugin not working at all when used with an ORM plugin.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed the ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," plugin not working with PORO models (which don't have an\n",(0,r.kt)("inlineCode",{parentName:"p"},"#id"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The inspect output of ",(0,r.kt)("inlineCode",{parentName:"p"},"UploadedFile")," is now cleaner and doesn't show\nduplicated info anymore.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cached files aren't automatically deleted anymore. This removes issues which\ncan happen with background promoting when cached file is deleted while it's\nbeing promoted, and it also required a monkey patch for the ",(0,r.kt)("inlineCode",{parentName:"p"},"moving")," plugin\nto not attempt to delete the cached file twice.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed a DoS vulnerability with background promoting where the job would get\ntriggered each time the record is saved with the cached attachment, until\nthe first job finishes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"p"},"migration_helpers")," plugin to properly detect when attachment has\nchanged while executing the block, and aborting the update in that case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added the ability to use Postgres' JSON/JSONB columns for the attachment\ncolumn when using Sequel.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed files with nested paths (generated either manually or using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"pretty_location")," plugin) raising errors when trying to download them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed downloading files not preserving the file extension.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," plugin now logs for processing the number of ",(0,r.kt)("em",{parentName:"p"},"input")," files\ninstead of output.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The gem should now work with Rubinius as well.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage::S3#multi_delete")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage::S3#clear!")," not using ",(0,r.kt)("inlineCode",{parentName:"p"},":prefix"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fixed the ",(0,r.kt)("inlineCode",{parentName:"p"},"keep_files")," plugin requiring context for ",(0,r.kt)("inlineCode",{parentName:"p"},"Shrine#delete"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Improved Windows compatibility with the FileSystem storage."))))}N.isMDXComponent=!0}}]);