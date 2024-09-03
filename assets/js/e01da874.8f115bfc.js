"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>C});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),s=l(n),p=a,C=s["".concat(d,".").concat(p)]||s[p]||g[p]||o;return n?r.createElement(C,i(i({ref:t},A),{},{components:n})):r.createElement(C,i({ref:t},A))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},i="Local Mesh",c={unversionedId:"tutorial/Maxoptics_GUI/7Mesh",id:"tutorial/Maxoptics_GUI/7Mesh",title:"Local Mesh",description:"Feature Description:  Adds local mesh to simulation.When the global mesh (solver mesh) is not accurate enough to identify the fine structure of some complex models, the local mesh is used to supplement it to improve the mesh accuracy.",source:"@site/docs/tutorial/Maxoptics_GUI/7Mesh.md",sourceDirName:"tutorial/Maxoptics_GUI",slug:"/tutorial/Maxoptics_GUI/7Mesh",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/7Mesh",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Monitor",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/6Monitor"},next:{title:"Analysis",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/8Analysis"}},d={},l=[{value:"1 General tab",id:"1-general-tab",level:2},{value:"2 Geometry tab",id:"2-geometry-tab",level:2},{value:"3 DDM Local Mesh",id:"3-ddm-local-mesh",level:2}],A={toc:l},s="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-mesh"},"Local Mesh"),(0,a.kt)("div",{class:"text-justify"},(0,a.kt)("font",{face:"Calibri"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Feature Description"),":  Adds local mesh to simulation.When the global mesh (solver mesh) is not accurate enough to identify the fine structure of some complex models, the local mesh is used to supplement it to improve the mesh accuracy."),(0,a.kt)("h2",{id:"1-general-tab"},"1 General tab"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:n(97590).Z,width:"595",height:"448"}))))),(0,a.kt)("p",null,"1) ",(0,a.kt)("strong",{parentName:"p"},"Override X/Y/Z mesh"),": When \u201cOverride X/Y/Z mesh\u201d button state is on, you can set dx/dy/dz mesh override region. The smaller the value of dx/dy/dz, the better accuracy you will get."),(0,a.kt)("h2",{id:"2-geometry-tab"},"2 Geometry tab"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:n(68843).Z,width:"591",height:"449"}))))),(0,a.kt)("p",null,"1) ",(0,a.kt)("strong",{parentName:"p"},"X, Y, Z"),": The center position of the simulation region."),(0,a.kt)("p",null,"2) ",(0,a.kt)("strong",{parentName:"p"},"X Min, X Max"),": X min, X max position."),(0,a.kt)("p",null,"3) ",(0,a.kt)("strong",{parentName:"p"},"Y Min, Y Max"),": Y min, Y max position."),(0,a.kt)("p",null,"4) ",(0,a.kt)("strong",{parentName:"p"},"Z Min, Z Max"),": Z min, Z max position."),(0,a.kt)("p",null,"5) ",(0,a.kt)("strong",{parentName:"p"},"X Span, Y Span, Z Span"),": X, Y, Z span of the simulation region."),(0,a.kt)("h2",{id:"3-ddm-local-mesh"},"3 DDM Local Mesh"),(0,a.kt)("p",null,"Although the size of the grid in the solver area has been set in \u201cEdit DDM\u201d, the user can choose the Local Mesh mode if the local area secondary encryption grid is required."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"General"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Geometry"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:n(19894).Z,width:"334",height:"340"})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:n(15613).Z,width:"629",height:"445"}))))),(0,a.kt)("p",null,"Users should set the size of mesh in General and define the region of encrypted grid in Geometry."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Geometry Type"),": Options ",(0,a.kt)("inlineCode",{parentName:"li"},"Directly Defined"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Solid")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Solid,Solid"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Directly Defined"),": Users can define follow parameters to make sure region.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Y"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Z"),": The center position of the simulation region."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X Min"),"/ ",(0,a.kt)("inlineCode",{parentName:"li"},"X Max"),": X min, X max position."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Y Min"),"/ ",(0,a.kt)("inlineCode",{parentName:"li"},"Y Max"),": Y min, Y max position."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Z Min"),"/ ",(0,a.kt)("inlineCode",{parentName:"li"},"Z Max"),": Z min, Z max position."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X Span"),"/ ",(0,a.kt)("inlineCode",{parentName:"li"},"Y Span")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"Z Span"),": X, Y, Z span of the simulation region."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Solid"),":\nEncrypt a structure and select the structure already defined in Project in the Solid drop-down box."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Solid,Solid"),":\nEncryption on the surface of the two structures requires the definition of the grid growth rate ",(0,a.kt)("inlineCode",{parentName:"li"},"Growth Ratio"),".")))))}g.isMDXComponent=!0},19894:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},15613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Localmesh_2-068c3dd18f30e2160df4693f57614e43.png"},97590:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mesh-c51618c0acfed94de8d3bf9e0e8953cd.png"},68843:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/meshg-097b1fd28dcb5ac2557bf76eea4c2ec1.png"}}]);