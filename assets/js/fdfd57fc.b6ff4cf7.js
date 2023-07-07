"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7657],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},i="mdxType",F={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=c(t),d=r,k=i["".concat(o,".").concat(d)]||i[d]||F[d]||p;return t?n.createElement(k,s(s({ref:a},m),{},{components:t})):n.createElement(k,s({ref:a},m))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,s=new Array(p);s[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[i]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<p;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},550:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(7462),r=t(3366),p=(t(7294),t(3905)),s=["components"],l={title:"Mirroring"},o=void 0,c={unversionedId:"plugins/mirroring",id:"plugins/mirroring",title:"Mirroring",description:"The mirroring plugin enables replicating uploads and deletes to",source:"@site/../doc/plugins/mirroring.md",sourceDirName:"plugins",slug:"/plugins/mirroring",permalink:"/docs/plugins/mirroring",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/mirroring.md",tags:[],version:"current",lastUpdatedBy:"Corn\xe9 Verbruggen",lastUpdatedAt:1601661704,formattedLastUpdatedAt:"Oct 2, 2020",frontMatter:{title:"Mirroring"},sidebar:"plugins",previous:{title:"Keep Files",permalink:"/docs/plugins/keep_files"}},m={},i=[{value:"Multiple storages",id:"multiple-storages",level:2},{value:"Backup storage",id:"backup-storage",level:2},{value:"Backgrounding",id:"backgrounding",level:2},{value:"API",id:"api",level:2}],F={toc:i},d="wrapper";function k(e){var a=e.components,t=(0,r.Z)(e,s);return(0,p.kt)(d,(0,n.Z)({},F,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/mirroring.rb"},(0,p.kt)("inlineCode",{parentName:"a"},"mirroring"))," plugin enables replicating uploads and deletes to\nother storages. This can be useful for setting up a backup storage, or when\nmigrating files from one storage to another."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mirroring"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":other_store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }"))))),(0,p.kt)("p",null,"With the above setup, any upload and delete to ",(0,p.kt)("inlineCode",{parentName:"p"},":store")," will be replicated to\n",(0,p.kt)("inlineCode",{parentName:"p"},":other_store"),"."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(io, "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# uploads to :store and :other_store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.delete                      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# deletes from :store and :other_store"))))),(0,p.kt)("p",null,"You can skip mirroring for a specific upload/delete call by passing ",(0,p.kt)("inlineCode",{parentName:"p"},"mirror:\nfalse"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(io, "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# skips mirroring")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.delete(mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")                      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# skips mirroring"))))),(0,p.kt)("h2",{id:"multiple-storages"},"Multiple storages"),(0,p.kt)("p",null,"You can mirror to multiple storages by specifying an array:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mirroring"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," ["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":other_store_1"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":other_store_2"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"]")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,p.kt)("h2",{id:"backup-storage"},"Backup storage"),(0,p.kt)("p",null,"If you want the mirror storage to act as a backup, you can disable mirroring\ndeletes:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mirroring"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { ... }, delete"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"))))),(0,p.kt)("h2",{id:"backgrounding"},"Backgrounding"),(0,p.kt)("p",null,"You can have mirroring performed in a background job:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".mirror_upload_block "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |file, "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options|")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MirrorUploadJob"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".perform_async(file.shrine_class.name, file.data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".mirror_delete_block "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |file|")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MirrorDeleteJob"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".perform_async(file.shrine_class.name, file.data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"MirrorUploadJob")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Sidekiq"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Worker")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"perform"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"shrine_class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"file_data"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    shrine_class "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Object"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".const_get(shrine_class)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," shrine_class.uploaded_file(file_data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    file.mirror_upload")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"MirrorDeleteJob")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Sidekiq"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Worker")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"perform"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"shrine_class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"file_data"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    shrine_class "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Object"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".const_get(shrine_class)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," shrine_class.uploaded_file(file_data)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    file.mirror_delete")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("p",null,"You can disable automatic mirroring and perform mirroring manually:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# disable automatic mirroring of uploads and deletes")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mirroring"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", mirror"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," { ... }, upload"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", delete"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"))))),(0,p.kt)("p",null,"To perform mirroring, you can call ",(0,p.kt)("inlineCode",{parentName:"p"},"UploadedFile#mirror_upload")," and\n",(0,p.kt)("inlineCode",{parentName:"p"},"UploadedFile#mirror_delete"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(io, "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# upload to :store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.mirror_upload               "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# upload to :other_store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.delete                      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# delete from :store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.mirror_delete               "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# delete from :other_store"))))),(0,p.kt)("p",null,"If you've set up backgrounding, you can use\n",(0,p.kt)("inlineCode",{parentName:"p"},"UploadedFile#mirror_upload_background")," and\n",(0,p.kt)("inlineCode",{parentName:"p"},"UploadedFile#mirror_delete_background")," to call the background block instead:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".upload(io, "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# upload to :store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.mirror_upload_background    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# spawn mirror upload background job")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.delete                      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# delete from :store")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"file.mirror_delete_background    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# spawn mirror delete background job"))))))}k.isMDXComponent=!0}}]);