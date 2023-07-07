"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7077],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>N});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(t),k=s,N=c["".concat(l,".").concat(k)]||c[k]||d[k]||r;return t?n.createElement(N,p(p({ref:a},m),{},{components:t})):n.createElement(N,p({ref:a},m))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=k;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:s,p[1]=o;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3302:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>N,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),p=["components"],o={title:"Store Dimensions"},l=void 0,i={unversionedId:"plugins/store_dimensions",id:"plugins/store_dimensions",title:"Store Dimensions",description:"The storedimensions plugin extracts dimensions of",source:"@site/../doc/plugins/store_dimensions.md",sourceDirName:"plugins",slug:"/plugins/store_dimensions",permalink:"/docs/plugins/store_dimensions",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/store_dimensions.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1601723956,formattedLastUpdatedAt:"Oct 3, 2020",frontMatter:{title:"Store Dimensions"},sidebar:"plugins",previous:{title:"Signature",permalink:"/docs/plugins/signature"},next:{title:"Type Predicates",permalink:"/docs/plugins/type_predicates"}},m={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Analyzers",id:"analyzers",level:2},{value:"API",id:"api",level:2},{value:"Disabling auto-extraction",id:"disabling-auto-extraction",level:3},{value:"Errors",id:"errors",level:2},{value:"Instrumentation",id:"instrumentation",level:2}],d={toc:c},k="wrapper";function N(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/store_dimensions.rb"},(0,r.kt)("inlineCode",{parentName:"a"},"store_dimensions"))," plugin extracts dimensions of\nuploaded images and stores them into the metadata hash (by default it uses the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sdsykes/fastimage"},"fastimage")," gem)."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"))))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,'The dimensions are stored as "width" and "height" metadata values on the\nShrine::UploadedFile object. For convenience the plugin also adds ',(0,r.kt)("inlineCode",{parentName:"p"},"#width"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"#height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#dimensions")," reader methods."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," uploader.upload(file)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image.metadata["),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"width"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"]  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 300")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image.metadata["),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"height"),(0,r.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"] "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 500")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image.width  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 300")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image.height "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> 500")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"image.dimensions "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> [300, 500]"))))),(0,r.kt)("h2",{id:"analyzers"},"Analyzers"),(0,r.kt)("p",null,"By default the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sdsykes/fastimage"},"fastimage")," gem is used to extract dimensions. You can choose a\ndifferent built-in analyzer via the ",(0,r.kt)("inlineCode",{parentName:"p"},":analyzer")," option:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", analyzer"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mini_magick"))))),(0,r.kt)("p",null,"The following analyzers are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":fastimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Default). Uses the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/sdsykes/fastimage"},"fastimage")," gem to extract dimensions from any IO object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":mini_magick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/minimagick/minimagick"},"mini_magick")," gem to extract dimensions from File objects. If non-file IO object is given it will be temporarily downloaded to disk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":ruby_vips")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Uses the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/libvips/ruby-vips"},"ruby-vips")," gem to extract dimensions from File objects. If non-file IO object is given it will be temporarily downloaded to disk.")))),(0,r.kt)("p",null,"You can also create your own custom dimensions analyzer, where you can reuse\nany of the built-in analyzers. The analyzer is a lambda that accepts an IO\nobject and returns width and height as a two-element array, or ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," if\ndimensions could not be extracted."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", analyzer"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (io, analyzers) "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  dimensions   "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," analyzers["),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":fastimage"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"].call(io)   "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# try extracting dimensions with FastImage")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  dimensions "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"||="),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," analyzers["),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":mini_magick"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"].call(io) "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# otherwise fall back to MiniMagick")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  dimensions")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"You can use methods for extracting the dimensions directly:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or YourUploader.extract_dimensions(io)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".extract_dimensions(io) "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> [300, 400] (calls the defined analyzer)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or just")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".dimensions(io) "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> [300, 400] (calls the defined analyzer)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"}),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# or YourUploader.dimensions_analyzers")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".dimensions_analyzers["),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":fastimage"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"].call(io) "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> [300, 400] (calls a built-in analyzer)"))))),(0,r.kt)("h3",{id:"disabling-auto-extraction"},"Disabling auto-extraction"),(0,r.kt)("p",null,"If you want to use the dimensions extraction methods but not automatically\nextract dimensions on upload, you can setup this plugin with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"auto_extraction: false")," option."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", auto_extraction"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"))))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"By default, any exceptions that the analyzer raises while extracting dimensions\nwill be caught and a warning will be printed out. This allows you to have the\nplugin loaded even for files that are not images."),(0,r.kt)("p",null,"However, you can choose different strategies for handling these exceptions:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", on_error"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":warn"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"        "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# prints a warning (default)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", on_error"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":fail"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"        "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# raises the exception")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", on_error"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":ignore"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ignores exceptions")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", on_error"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (error) { "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# custom handler")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# report the exception to your exception handler")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("h2",{id:"instrumentation"},"Instrumentation"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"instrumentation")," plugin has been loaded, the ",(0,r.kt)("inlineCode",{parentName:"p"},"store_dimensions")," plugin\nadds instrumentation around dimensions extraction."),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# instrumentation plugin needs to be loaded *before* store_dimensions")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":instrumentation")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"))))),(0,r.kt)("p",null,"Extracting metadata will send a ",(0,r.kt)("inlineCode",{parentName:"p"},"image_dimensions.shrine")," event with the\nfollowing payload:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":io")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The IO object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},":uploader")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The uploader class that sent the event")))),(0,r.kt)("p",null,"A default log subscriber is added as well which logs these events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Image Dimensions (108ms) \u2013 {:io=>File, :uploader=>Shrine}\n")),(0,r.kt)("p",null,"You can also use your own log subscriber:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", log_subscriber"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (event) {")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".logger.info "),(0,r.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"JSON"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".generate(name"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," event.name, duration"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," event.duration, "),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"**"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"event.payload)")),"\n",(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"}"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"name":"image_dimensions","duration":114,"io":"#<File:0x00007fc445371d90>","uploader":"Shrine"}\n')),(0,r.kt)("p",null,"Or disable logging altogether:"),(0,r.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,r.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,r.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,r.kt)("span",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":store_dimensions"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", log_subscriber"),(0,r.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,r.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,r.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"nil"))))))}N.isMDXComponent=!0}}]);