"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:8},i="Local Mesh",s={unversionedId:"tutorial/7Mesh",id:"tutorial/7Mesh",title:"Local Mesh",description:"Feature Description:  Adds local mesh to simulation.When the global mesh (solver mesh) is not accurate enough to identify the fine structure of some complex models, the local mesh is used to supplement it to improve the mesh accuracy.",source:"@site/docs/tutorial/7Mesh.md",sourceDirName:"tutorial",slug:"/tutorial/7Mesh",permalink:"/my-website/docs/tutorial/7Mesh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/7Mesh.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Monitor",permalink:"/my-website/docs/tutorial/6Monitor"},next:{title:"Analysis",permalink:"/my-website/docs/tutorial/8Analysis"}},l={},c=[{value:"1 General tab",id:"1-general-tab",level:2},{value:"2 Geometry tab",id:"2-geometry-tab",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-mesh"},"Local Mesh"),(0,a.kt)("div",{class:"text-justify"},(0,a.kt)("font",{face:"Calibri"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Feature Description"),":  Adds local mesh to simulation.When the global mesh (solver mesh) is not accurate enough to identify the fine structure of some complex models, the local mesh is used to supplement it to improve the mesh accuracy."),(0,a.kt)("h2",{id:"1-general-tab"},"1 General tab"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:r(7590).Z,width:"595",height:"448"}))))),(0,a.kt)("p",null,"1)",(0,a.kt)("strong",{parentName:"p"},"Override X/Y/Z mesh"),": When \u201cOverride X/Y/Z mesh\u201d button state is on, you can set dx/dy/dz mesh override region. The smaller the value of dx/dy/dz, the better accuracy you will get."),(0,a.kt)("h2",{id:"2-geometry-tab"},"2 Geometry tab"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:r(8843).Z,width:"591",height:"449"}))))),(0,a.kt)("p",null,"1)",(0,a.kt)("strong",{parentName:"p"},"X, Y, Z"),": The center position of the simulation region."),(0,a.kt)("p",null,"2)",(0,a.kt)("strong",{parentName:"p"},"X Min, X Max"),": X min, X max position."),(0,a.kt)("p",null,"3)",(0,a.kt)("strong",{parentName:"p"},"Y Min, Y Max"),": Y min, Y max position."),(0,a.kt)("p",null,"4)",(0,a.kt)("strong",{parentName:"p"},"Z Min, Z Max"),": Z min, Z max position."),(0,a.kt)("p",null,"5)",(0,a.kt)("strong",{parentName:"p"},"X Span, Y Span, Z Span"),": X, Y, Z span of the simulation region."))))}m.isMDXComponent=!0},7590:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mesh-c51618c0acfed94de8d3bf9e0e8953cd.png"},8843:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/meshg-097b1fd28dcb5ac2557bf76eea4c2ec1.png"}}]);