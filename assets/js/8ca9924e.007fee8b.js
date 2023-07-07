"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5502],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>N});var t=n(7294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},i="mdxType",F={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,p=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),i=c(n),d=s,N=i["".concat(o,".").concat(d)]||i[d]||F[d]||p;return n?t.createElement(N,l(l({ref:a},m),{},{components:n})):t.createElement(N,l({ref:a},m))}));function N(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var p=n.length,l=new Array(p);l[0]=d;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[i]="string"==typeof e?e:s,l[1]=r;for(var c=2;c<p;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1291:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var t=n(7462),s=n(3366),p=(n(7294),n(3905)),l=["components"],r={id:"creating-plugins",title:"Writing a Plugin"},o=void 0,c={unversionedId:"creating-plugins",id:"creating-plugins",title:"Writing a Plugin",description:"Shrine has a lot of plugins built-in, but you can use Shrine's plugin system to",source:"@site/../doc/creating_plugins.md",sourceDirName:".",slug:"/creating-plugins",permalink:"/docs/creating-plugins",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/creating_plugins.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571049580,formattedLastUpdatedAt:"Oct 14, 2019",frontMatter:{id:"creating-plugins",title:"Writing a Plugin"},sidebar:"guides",previous:{title:"Migrating File Storage",permalink:"/docs/changing-storage"},next:{title:"Writing a Persistence Plugin",permalink:"/docs/creating-persistence-plugins"}},m={},i=[{value:"Definition",id:"definition",level:2},{value:"Methods",id:"methods",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2}],F={toc:i},d="wrapper";function N(e){var a=e.components,n=(0,s.Z)(e,l);return(0,p.kt)(d,(0,t.Z)({},F,n,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Shrine has a lot of plugins built-in, but you can use Shrine's plugin system to\ncreate your own."),(0,p.kt)("h2",{id:"definition"},"Definition"),(0,p.kt)("p",null,"Simply put, a plugin is a module:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyPlugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"MyPlugin"))))),(0,p.kt)("p",null,"If you would like to load plugins with a symbol (like you already do with\nplugins that ship with Shrine), you need to put the plugin in\n",(0,p.kt)("inlineCode",{parentName:"p"},"shrine/plugins/my_plugin.rb")," in your load path and register it:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# shrine/plugins/my_plugin.rb")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Shrine")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Plugins")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyPlugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    register_plugin("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"MyPlugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"))))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("p",null,"The way to make plugins actually extend Shrine's core classes is by defining\nspecial modules inside the plugin. Here's a list of all \"special\" modules:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"InstanceMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"        "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets included into `Shrine`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"ClassMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"           "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets extended into `Shrine`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"AttachmentMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets included into `Shrine::Attachment`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"AttachmentClassMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets extended into `Shrine::Attachment`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"AttacherMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"        "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets included into `Shrine::Attacher`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"AttacherClassMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"   "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets extended into `Shrine::Attacher`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"FileMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"            "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets included into `Shrine::UploadedFile`")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"FileClassMethods"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"       "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# gets extended into `Shrine::UploadedFile`"))))),(0,p.kt)("p",null,"For example, this is how you would make your plugin add some logging to\nuploading:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyPlugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"InstanceMethods")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"upload"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"io"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      time "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Time"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".now")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      result "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"super")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      duration "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Time"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".now "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"-"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," time")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"puts"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"Upload duration: "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"#{"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"duration"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"}"),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"s"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("p",null,"Notice that we can call ",(0,p.kt)("inlineCode",{parentName:"p"},"super")," to get the original behaviour."),(0,p.kt)("h2",{id:"configuration"},"Configuration"),(0,p.kt)("p",null,"You'll likely want to make your plugin configurable. You can do that by\noverriding the ",(0,p.kt)("inlineCode",{parentName:"p"},".configure")," class method and storing received options into\n",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine.opts"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyPlugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"self.configure"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"uploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"opts)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    uploader.opts["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"] "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"||="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," {}")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    uploader.opts["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"].merge!(opts)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"InstanceMethods")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"upload"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"io"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"options)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      opts["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"] "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> { ... }")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("p",null,"Users can now pass these configuration options when loading your plugin:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":my_plugin"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", foo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"bar"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'))))),(0,p.kt)("h2",{id:"dependencies"},"Dependencies"),(0,p.kt)("p",null,"If your plugin depends on other plugins, you can load them inside of\n",(0,p.kt)("inlineCode",{parentName:"p"},".load_dependencies"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"module"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"MyPlugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"self.load_dependencies"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#FFB86C",fontStyle:"italic"}},"uploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"opts)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    uploader.plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":derivatives"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# depends on the derivatives plugin")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("p",null,"The dependencies will get loaded before your plugin, allowing you to override\nmethods of your dependencies in your method modules."),(0,p.kt)("p",null,"The same configuration options passed to ",(0,p.kt)("inlineCode",{parentName:"p"},".configure")," are passed to\n",(0,p.kt)("inlineCode",{parentName:"p"},".load_dependencies")," as well."))}N.isMDXComponent=!0}}]);