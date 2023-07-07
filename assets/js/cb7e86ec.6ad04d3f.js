"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3559],{3905:(a,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>N});var n=t(7294);function p(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){p(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,p=function(a,e){if(null==a)return{};var t,n,p={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(p[t]=a[t]);return p}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(p[t]=a[t])}return p}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},m=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},F=n.forwardRef((function(a,e){var t=a.components,p=a.mdxType,s=a.originalType,o=a.parentName,m=r(a,["components","mdxType","originalType","parentName"]),c=i(t),F=p,N=c["".concat(o,".").concat(F)]||c[F]||d[F]||s;return t?n.createElement(N,l(l({ref:e},m),{},{components:t})):n.createElement(N,l({ref:e},m))}));function N(a,e){var t=arguments,p=e&&e.mdxType;if("string"==typeof a||p){var s=t.length,l=new Array(s);l[0]=F;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=a,r[c]="string"==typeof a?a:p,l[1]=r;for(var i=2;i<s;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}F.displayName="MDXCreateElement"},1625:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),p=t(3366),s=(t(7294),t(3905)),l=["components"],r={title:"File Validation"},o=void 0,i={unversionedId:"validation",id:"validation",title:"File Validation",description:"Shrine allows validating assigned files using the validation",source:"@site/../doc/validation.md",sourceDirName:".",slug:"/validation",permalink:"/docs/validation",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/validation.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571478196,formattedLastUpdatedAt:"Oct 19, 2019",frontMatter:{title:"File Validation"},sidebar:"guides",previous:{title:"File Processing",permalink:"/docs/processing"},next:{title:"Multiple Files",permalink:"/docs/multiple-files"}},m={},c=[{value:"Validation helpers",id:"validation-helpers",level:2},{value:"Custom validations",id:"custom-validations",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Removing invalid files",id:"removing-invalid-files",level:2}],d={toc:c},F="wrapper";function N(a){var e=a.components,t=(0,p.Z)(a,l);return(0,s.kt)(F,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Shrine allows validating assigned files using the ",(0,s.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/validation"},(0,s.kt)("inlineCode",{parentName:"a"},"validation")),"\nplugin. Validation code is defined inside an ",(0,s.kt)("inlineCode",{parentName:"p"},"Attacher.validate")," block:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":validation"))))),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ... perform validation ...")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("p",null,"The validation block is run when a new file is assigned, and any validation\nerrors are stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"Shrine::Attacher#errors"),". Persistence plugins like\n",(0,s.kt)("inlineCode",{parentName:"p"},"sequel")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"activerecord")," will automatically merge these validation errors\ninto the ",(0,s.kt)("inlineCode",{parentName:"p"},"#errors")," hash on the model instance."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," image_file")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.valid? "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> false")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.errors["),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"] "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> [...]"))))),(0,s.kt)("h2",{id:"validation-helpers"},"Validation helpers"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/validation_helpers"},(0,s.kt)("inlineCode",{parentName:"a"},"validation_helpers"))," plugin provides convenient\nvalidators for built-in metadata:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":validation_helpers"))))),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_size      "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".."),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"5"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_mime_type "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"%"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"w[image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"jpeg image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"png image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"webp image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"tiff]")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_extension "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"%"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"w[jpg jpeg png webp tiff tif]")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("p",null,"Note that for secure MIME type validation it's recommended to also load\n",(0,s.kt)("inlineCode",{parentName:"p"},"determine_mime_type")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"restore_cached_data")," plugins."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/validation_helpers"},(0,s.kt)("inlineCode",{parentName:"a"},"validation_helpers"))," plugin documentation for\nmore details."),(0,s.kt)("h2",{id:"custom-validations"},"Custom validations"),(0,s.kt)("p",null,"You can also do your own custom validations:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# Gemfile")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"gem "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"streamio-ffmpeg"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'))))),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"require"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"streamio-ffmpeg"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"VideoUploader"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":add_metadata")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  add_metadata "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":duration"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," |io|")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    movie "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".with_file(io) { |file| "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"FFMPEG"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Movie"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"(file.path) }")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    movie.duration")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"}),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"if"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," file.duration "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},">"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"5"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"60"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"60")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      errors "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,s.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"duration must not be longer than 5 hours"),(0,s.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("h2",{id:"inheritance"},"Inheritance"),(0,s.kt)("p",null,"Validations are inherited from superclasses, but you need to call them manually\nwhen defining more validations:"),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ApplicationUploader"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate { validate_max_size "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"5"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," }")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ApplicationUploader")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"super"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"() "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# empty parentheses are required")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_mime_type "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"%"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"w[image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"jpeg image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"png image"),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"webp]")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,s.kt)("h2",{id:"removing-invalid-files"},"Removing invalid files"),(0,s.kt)("p",null,"By default, an invalid file will remain assigned after validation failed, but\nyou can have it automatically removed and deleted by loading the\n",(0,s.kt)("inlineCode",{parentName:"p"},"remove_invalid")," plugin."),(0,s.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,s.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,s.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,s.kt)("span",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,s.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":remove_invalid"),(0,s.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,s.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# remove and delete files that failed validation"))))))}N.isMDXComponent=!0}}]);