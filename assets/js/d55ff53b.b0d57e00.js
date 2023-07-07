"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5890],{3905:(a,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},p=Object.keys(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),c=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},m=function(a){var e=c(a.components);return n.createElement(o.Provider,{value:e},a.children)},i="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,p=a.originalType,o=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),i=c(t),N=s,k=i["".concat(o,".").concat(N)]||i[N]||d[N]||p;return t?n.createElement(k,r(r({ref:e},m),{},{components:t})):n.createElement(k,r({ref:e},m))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var p=t.length,r=new Array(p);r[0]=N;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l[i]="string"==typeof a?a:s,r[1]=l;for(var c=2;c<p;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},1261:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=t(7462),s=t(3366),p=(t(7294),t(3905)),r=["components"],l={title:"Active Record"},o=void 0,c={unversionedId:"plugins/activerecord",id:"plugins/activerecord",title:"Active Record",description:"The activerecord plugin adds [Active Record] integration to",source:"@site/../doc/plugins/activerecord.md",sourceDirName:"plugins",slug:"/plugins/activerecord",permalink:"/docs/plugins/activerecord",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/plugins/activerecord.md",tags:[],version:"current",lastUpdatedBy:"Janko Marohni\u0107",lastUpdatedAt:1571442013,formattedLastUpdatedAt:"Oct 18, 2019",frontMatter:{title:"Active Record"},sidebar:"plugins",next:{title:"Column",permalink:"/docs/plugins/column"}},m={},i=[{value:"Attachment",id:"attachment",level:2},{value:"Callbacks",id:"callbacks",level:3},{value:"After Save",id:"after-save",level:4},{value:"After Destroy",id:"after-destroy",level:4},{value:"Caveats",id:"caveats",level:4},{value:"Overriding callbacks",id:"overriding-callbacks",level:4},{value:"Skipping Callbacks",id:"skipping-callbacks",level:4},{value:"Validations",id:"validations",level:3},{value:"Attachment Presence",id:"attachment-presence",level:4},{value:"I18n",id:"i18n",level:4},{value:"Skipping Validations",id:"skipping-validations",level:4},{value:"Attacher",id:"attacher",level:2},{value:"Persistence",id:"persistence",level:3}],d={toc:i},N="wrapper";function k(a){var e=a.components,t=(0,s.Z)(a,r);return(0,p.kt)(N,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/shrinerb/shrine/blob/master/lib/shrine/plugins/activerecord.rb"},(0,p.kt)("inlineCode",{parentName:"a"},"activerecord"))," plugin adds ",(0,p.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/active_record_basics.html"},"Active Record")," integration to\nthe attachment interface. It is built on top of the ",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/model"},(0,p.kt)("inlineCode",{parentName:"a"},"model"))," plugin."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":activerecord"))))),(0,p.kt)("h2",{id:"attachment"},"Attachment"),(0,p.kt)("p",null,"Including a ",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine::Attachment")," module into an ",(0,p.kt)("inlineCode",{parentName:"p"},"ActiveRecord::Base")," subclass\nwill:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"add ",(0,p.kt)("a",{parentName:"li",href:"https://shrinerb.com/docs/plugins/model"},"model")," attachment methods"),(0,p.kt)("li",{parentName:"ul"},"add ",(0,p.kt)("a",{parentName:"li",href:"#validations"},"validations")," and ",(0,p.kt)("a",{parentName:"li",href:"#callbacks"},"callbacks")," to tie attachment\nprocess to the record lifecycle")),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ActiveRecord::Base"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# has `image_data` column")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Attachment"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},") "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# adds methods, callbacks & validations")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," file "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# cache attachment")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> #<Shrine::UploadedFile id="bc2e13.jpg" storage=:cache ...>')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"bc2e13.jpg","storage":"cache","metadata":{...}}\'')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.save "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# persist, promote attachment, then persist again")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image      "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> #<Shrine::UploadedFile id="397eca.jpg" storage=:store ...>')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"397eca.jpg","storage":"store","metadata":{...}}\'')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.destroy "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# delete attachment")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.exists? "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> false"))))),(0,p.kt)("h3",{id:"callbacks"},"Callbacks"),(0,p.kt)("h4",{id:"after-save"},"After Save"),(0,p.kt)("p",null,"After a record is saved and the transaction is committed, ",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#finalize"),"\nis called, which promotes cached file to permanent storage and deletes previous\nfile if any."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," file")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.storage_key "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> :cache")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.save")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.storage_key "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> :store"))))),(0,p.kt)("h4",{id:"after-destroy"},"After Destroy"),(0,p.kt)("p",null,"After a record is destroyed and the transaction is committed,\n",(0,p.kt)("inlineCode",{parentName:"p"},"Attacher#destroy_attached")," method is called, which deletes stored attached\nfile if any."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".find(photo_id)")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> #<Shrine::UploadedFile>")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.exists? "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> true")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.destroy")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image.exists? "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"#=> false"))))),(0,p.kt)("h4",{id:"caveats"},"Caveats"),(0,p.kt)("p",null,"Active Record currently has a ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/issues/14493"},"bug with transaction callbacks"),', so if you have\nany "after commit" callbacks, make sure to include Shrine\'s attachment module\n',(0,p.kt)("em",{parentName:"p"},"after")," they have all been defined."),(0,p.kt)("h4",{id:"overriding-callbacks"},"Overriding callbacks"),(0,p.kt)("p",null,"You can override any of the following attacher methods to modify callback\nbehaviour:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Attacher#activerecord_before_save")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Attacher#activerecord_after_save")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Attacher#activerecord_after_destroy"))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Shrine::Attacher")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"def"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#62E884"}},"activerecord_after_save")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"super")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# ...")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("h4",{id:"skipping-callbacks"},"Skipping Callbacks"),(0,p.kt)("p",null,"If you don't want the attachment module to add any callbacks to your model, you\ncan set ",(0,p.kt)("inlineCode",{parentName:"p"},":callbacks")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":activerecord"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", callbacks"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"))))),(0,p.kt)("h3",{id:"validations"},"Validations"),(0,p.kt)("p",null,"If you're using the ",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/validation"},(0,p.kt)("inlineCode",{parentName:"a"},"validation"))," plugin, the attachment module\nwill automatically merge attacher errors with model errors."),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":validation_helpers")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_max_size "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"10"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," file")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.valid?")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.errors "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> { image: ["size must not be greater than 10.0 MB"] }'))))),(0,p.kt)("h4",{id:"attachment-presence"},"Attachment Presence"),(0,p.kt)("p",null,"If you want to validate presence of the attachment, you can use Active Record's\npresence validator:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ActiveRecord::Base")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"include"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"Attachment"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"("),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  validates_presence_of "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":image")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("h4",{id:"i18n"},"I18n"),(0,p.kt)("p",null,"If you want Active Record to translate attacher error messages, you can use\nsymbols or arrays of symbols and options for validation errors:"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Shrine")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":validation_helpers")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".validate "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"do")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_max_size "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"10"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"*"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"1024"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", message"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"->"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," (max) { ["),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":too_large"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", max"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," max] }")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    validate_mime_type "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"%"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"w[image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"jpeg image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"/"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"png], message"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":not_image")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"yml","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"yml","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"en"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"  "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"activerecord"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"    "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"errors"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"      "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"models"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"        "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"          "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"attributes"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"            "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"              "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"max_size"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"must not be larger than %{max_size} bytes"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"              "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"not_image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'),(0,p.kt)("span",{parentName:"span",style:{color:"#E7EE98"}},"must be a common image format"),(0,p.kt)("span",{parentName:"span",style:{color:"#DEE492"}},'"'))))),(0,p.kt)("h4",{id:"skipping-validations"},"Skipping Validations"),(0,p.kt)("p",null,"If don't want the attachment module to merge file validations errors into\nmodel errors, you can set ",(0,p.kt)("inlineCode",{parentName:"p"},":validations")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"plugin "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":activerecord"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},", validations"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},":"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},"false"))))),(0,p.kt)("h2",{id:"attacher"},"Attacher"),(0,p.kt)("p",null,"You can also use ",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine::Attacher")," directly (with or without the\n",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine::Attachment")," module):"),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"class"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"<"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ActiveRecord::Base"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# has `image_data` column")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"end"))))),(0,p.kt)("div",{"data-rehype-pretty-code-fragment":""},(0,p.kt)("pre",{parentName:"div","data-language":"rb","data-theme":"default"},(0,p.kt)("code",{parentName:"pre","data-language":"rb","data-theme":"default"},(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo    "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Photo"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"."),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"new")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher "),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"="),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}}," "),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"ImageUploader"),(0,p.kt)("span",{parentName:"span",style:{color:"#F286C4"}},"::"),(0,p.kt)("span",{parentName:"span",style:{color:"#97E1F1",fontStyle:"italic"}},"Attacher"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},".from_model(photo, "),(0,p.kt)("span",{parentName:"span",style:{color:"#BF9EEE"}},":image"),(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},")")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.assign(file) "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# cache")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> #<Shrine::UploadedFile id="bc2e13.jpg" storage=:cache ...>')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"bc2e13.jpg","storage":"cache","metadata":{...}}\'')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.save        "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# persist")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.finalize "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# promote")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.save        "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},"# persist")),"\n",(0,p.kt)("span",{parentName:"code",className:"line"}),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"attacher.file    "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> #<Shrine::UploadedFile id="397eca.jpg" storage=:store ...>')),"\n",(0,p.kt)("span",{parentName:"code",className:"line"},(0,p.kt)("span",{parentName:"span",style:{color:"#F6F6F4"}},"photo.image_data "),(0,p.kt)("span",{parentName:"span",style:{color:"#7B7F8B"}},'#=> \'{"id":"397eca.jpg","storage":"store","metadata":{...}}\''))))),(0,p.kt)("h3",{id:"persistence"},"Persistence"),(0,p.kt)("p",null,"The following persistence methods are added to ",(0,p.kt)("inlineCode",{parentName:"p"},"Shrine::Attacher"),":"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Attacher#atomic_promote")),(0,p.kt)("td",{parentName:"tr",align:"left"},"calls ",(0,p.kt)("inlineCode",{parentName:"td"},"Attacher#promote")," and persists if the attachment hasn't changed")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Attacher#atomic_persist")),(0,p.kt)("td",{parentName:"tr",align:"left"},"saves changes if the attachment hasn't changed")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"Attacher#persist")),(0,p.kt)("td",{parentName:"tr",align:"left"},"saves any changes to the underlying record")))),(0,p.kt)("p",null,"See ",(0,p.kt)("a",{parentName:"p",href:"https://shrinerb.com/docs/plugins/persistence"},"persistence")," docs for more details."))}k.isMDXComponent=!0}}]);