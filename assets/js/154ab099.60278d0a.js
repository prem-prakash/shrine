"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[279],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>N});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},p=Object.keys(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},c=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},m="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,p=a.originalType,o=a.parentName,c=l(a,["components","mdxType","originalType","parentName"]),m=i(t),k=r,N=m["".concat(o,".").concat(k)]||m[k]||d[k]||p;return t?n.createElement(N,s(s({ref:e},c),{},{components:t})):n.createElement(N,s({ref:e},c))}));function N(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var p=t.length,s=new Array(p);s[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l[m]="string"==typeof a?a:r,s[1]=l;for(var i=2;i<p;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},74:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=t(7462),r=t(3366),p=(t(7294),t(3905)),s=["components"],l={title:"Column"},o=void 0,i={unversionedId:"plugins/column",id:"plugins/column",title:"Column",description:"The column plugin provides interface for serializing and",source:"@site/../doc/plugins/column.md",sourceDirName:"plugins",slug:"/plugins/column",permalink:"/docs/plugins/column",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/column.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1577225879,formattedLastUpdatedAt:"Dec 24, 2019",frontMatter:{title:"Column"},sidebar:"plugins",previous:{title:"Active Record",permalink:"/docs/plugins/activerecord"},next:{title:"Entity",permalink:"/docs/plugins/entity"}},c={},m=[{value:"Serializing",id:"serializing",level:2},{value:"Deserializing",id:"deserializing",level:2},{value:"Serializer",id:"serializer",level:2}],d={toc:m},k="wrapper";function N(a){var e=a.components,t=(0,r.Z)(a,s);return(0,p.kt)(k,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/column.rb"},(0,p.kt)("inlineCode",{parentName:"a"},"column"))," plugin provides interface for serializing and\ndeserializing attachment data in format suitable for persisting in a database\ncolumn (JSON by default)."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":column"))))),(0,p.kt)("h2",{id:"serializing"},"Serializing"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#column_data")," method returns attached file data in serialized\nformat, ready to be persisted into a database column."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.attach(io)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.column_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"...","storage":"...","metadata":{...}}\''))))),(0,p.kt)("p",null,"If there is no attached file, ",(0,p.kt)("inlineCode",{parentName:"p"},"nil")," is returned."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.column_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> nil"))))),(0,p.kt)("p",null,"If you want to retrieve this data as a Hash, use ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#data")," instead."),(0,p.kt)("h2",{id:"deserializing"},"Deserializing"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher.from_column")," method instantiates the attacher from serialized\nattached file data."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".from_column("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},'{"id":"...","storage":"...","metadata":{...}}'),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Shrine::UploadedFile>"))))),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"nil")," is given, it means no attached file."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".from_column("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> nil"))))),(0,p.kt)("p",null,"Any additional options are forwarded to ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#initialize"),"."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".from_column("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"{...}"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":other_store"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.store_key "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> :other_store"))))),(0,p.kt)("p",null,"If you want to load attachment data into an existing attacher, use\n",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#load_column"),"."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> nil")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.load_column("),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},'{"id":"...","storage":"...","metadata":{...}}'),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},"'"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Shrine::UploadedFile>"))))),(0,p.kt)("p",null,"If you want to load attachment from a Hash, use ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher.from_data")," or\n",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#load_data")," instead."),(0,p.kt)("h2",{id:"serializer"},"Serializer"),(0,p.kt)("p",null,"By default, the ",(0,p.kt)("inlineCode",{parentName:"p"},"JSON")," standard library is used for serializing hash data. With\nthe ",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/model"},(0,p.kt)("inlineCode",{parentName:"a"},"model"))," and ",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/entity"},(0,p.kt)("inlineCode",{parentName:"a"},"entity"))," plugin, the data is serialized\nbefore writing to and deserialized after reading from the data attribute."),(0,p.kt)("p",null,"You can also use your own serializer via the ",(0,p.kt)("inlineCode",{parentName:"p"},":serializer")," option. The\nserializer object needs to implement ",(0,p.kt)("inlineCode",{parentName:"p"},"#dump")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"#load")," methods:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"MyDataSerializer")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"self.dump"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"data"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> { "id" => "...", "storage" => "...", "metadata" => { ... } }')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"JSON"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".generate(data) "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# serialize data, e.g. into JSON")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"self.load"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"data"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"...", "storage":"...", "metadata": {...}}\'')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"JSON"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".parse(data) "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# deserialize data, e.g. from JSON")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":column"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", serializer"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"MyDataSerializer"))))),(0,p.kt)("p",null,"Some serialization libraries such as ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ohler55/oj"},"Oj")," and ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/msgpack/msgpack-ruby"},"MessagePack")," already implement\nthis interface, which simplifies the configuration:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"oj"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# https://github.com/ohler55/oj")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":column"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", serializer"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Oj"))))),(0,p.kt)("p",null,"If you want to disable serialization and work with hashes directly, you can set\n",(0,p.kt)("inlineCode",{parentName:"p"},":serializer")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"nil"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":column"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", serializer"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# disable serialization"))))),(0,p.kt)("p",null,"The serializer can also be changed for a particular attacher instance:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(column_serializer"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Oj"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")  "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# use custom serializer")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(column_serializer"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# disable serialization"))))))}N.isMDXComponent=!0}}]);