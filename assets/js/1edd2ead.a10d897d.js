"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5604],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(a),g=n,f=d["".concat(p,".").concat(g)]||d[g]||h[g]||i;return a?r.createElement(f,o(o({ref:e},m),{},{components:a})):r.createElement(f,o({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2241:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Extensions"},p=void 0,s={unversionedId:"external/extensions",id:"external/extensions",title:"Extensions",description:"Storages",source:"@site/../doc/external/extensions.md",sourceDirName:"external",slug:"/external/extensions",permalink:"/docs/external/extensions",draft:!1,editUrl:"https://github.com/shrinerb/shrine/edit/master/doc/../doc/external/extensions.md",tags:[],version:"current",lastUpdatedBy:"Aurel Branzeanu",lastUpdatedAt:1661671495,formattedLastUpdatedAt:"Aug 28, 2022",frontMatter:{title:"Extensions"},sidebar:"external",next:{title:"Articles",permalink:"/docs/external/articles"}},m={},d=[{value:"Storages",id:"storages",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Libraries",id:"libraries",level:2}],h={toc:d},g="wrapper";function f(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)(g,(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"storages"},"Storages"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Gem"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/zillou/shrine-aliyun-oss"},"shrine-aliyun-oss")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/product/oss"},"Alibaba Cloud OSS"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-cloudinary"},"shrine-cloudinary")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://cloudinary.com/"},"Cloudinary"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-flickr"},"shrine-flickr")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://flickr.com/"},"Flickr"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-fog"},"shrine-fog")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"http://fog.io/"},"Fog"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ProjectResound/shrine-ftp"},"shrine-ftp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using an FTP server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/renchap/shrine-google_cloud_storage"},"shrine-google_cloud_storage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/edwardsharp/shrine-gdrive_storage"},"shrine-gdrive_storage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://www.google.com/drive/"},"Google Drive"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-gridfs"},"shrine-gridfs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/core/gridfs/"},"Mongo GridFS"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/dbongo/shrine-redis"},"shrine-redis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://redis.io/"},"Redis"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jordanandree/shrine-scp"},"shrine-scp")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("inlineCode",{parentName:"td"},"scp"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-sql"},"shrine-sql")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using an SQL database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-uploadcare"},"shrine-uploadcare")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://uploadcare.com"},"Uploadcare"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-url"},"shrine-url")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage for handling remote URLs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/thedyrt/shrine-storage-you_tube"},"shrine-storage-you_tube")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using ",(0,i.kt)("a",{parentName:"td",href:"https://www.youtube.com/"},"YouTube"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/funbox/shrine-webdav"},"shrine-webdav")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage using a ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/WebDAV"},"WebDAV")," server")))),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Gem"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/catsky/administrate-field-shrine"},"administrate-field-shrine")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/thoughtbot/administrate"},"Administrate"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/iquest/rails_admin_shrine"},"rails_admin_shrine")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sferik/rails_admin"},"RailsAdmin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/renchap/shrine-blurhash"},"shrine-blurhash")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for computing ",(0,i.kt)("a",{parentName:"td",href:"https://blurha.sh/"},"Blurhash")," on images")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/janklimo/shrine-cloudimage"},"shrine-cloudimage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://www.cloudimage.io/"},"Cloudimage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jnylen/shrine-color"},"shrine-color")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for finding dominant color in an image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/SleeplessByte/shrine-configurable_storage"},"shrine-configurable_storage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for lazy storage registration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/SleeplessByte/shrine-content_addressable"},"shrine-content_addressable")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for generating content addressable locations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-imgix"},"shrine-imgix")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://www.imgix.com/"},"Imgix"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-transloadit"},"shrine-transloadit")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://transloadit.com/"},"Transloadit"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/texpert/shrine-aws-lambda"},"shrine-aws-lambda")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/katafrakt/hanami-shrine"},"hanami-shrine")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://hanamirb.org/"},"Hanami"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-mongoid"},"shrine-mongoid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://mongoid.org"},"Mongoid"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/abepetrillo/shrine-rails"},"shrine-rails")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://rubyonrails.org/"},"Rails"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-rom"},"shrine-rom")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://rom-rb.org/"},"ROM"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/shrinerb/shrine-tus"},"shrine-tus")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Plugin for ",(0,i.kt)("a",{parentName:"td",href:"https://tus.io"},"tus")," server integration")))),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Gem"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/galetahub/ckeditor"},"ckeditor")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integration for ",(0,i.kt)("a",{parentName:"td",href:"https://ckeditor.com/ckeditor-4/"},"CKEditor"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jrochkind/faster_s3_url"},"faster_s3_url")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optimized generation of public and presigned AWS S3 GET URLs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/imgproxy/imgproxy.rb"},"imgproxy")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integration for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/imgproxy/imgproxy"},"imgproxy"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/sferik/rails_admin"},"rails_admin")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integration for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sferik/rails_admin"},"RailsAdmin"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/janko/uppy-s3_multipart"},"uppy-s3_multipart")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Integration for ",(0,i.kt)("a",{parentName:"td",href:"https://uppy.io/docs/aws-s3-multipart/"},"Uppy AWS S3 Multipart"))))))}f.isMDXComponent=!0}}]);