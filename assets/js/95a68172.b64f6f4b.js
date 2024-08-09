"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={},o="What is the difference between Staircase and Subcell methods in EME Simulation?",c={unversionedId:"faq/Physics/Subcell",id:"faq/Physics/Subcell",title:"What is the difference between Staircase and Subcell methods in EME Simulation?",description:"||",source:"@site/docs/faq/Physics/Subcell.md",sourceDirName:"faq/Physics",slug:"/faq/Physics/Subcell",permalink:"/my-website/docs/faq/Physics/Subcell",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"faqSidebar",previous:{title:"What is the FDTD simulation time?",permalink:"/my-website/docs/faq/Physics/Simulation time"},next:{title:"About the basic concept",permalink:"/my-website/docs/faq/Physics/basic concept"}},s={},l=[{value:"1.Staircase approximation(None)",id:"1staircase-approximationnone",level:2},{value:"2.Subcell approximation(Sub Cell)",id:"2subcell-approximationsub-cell",level:2},{value:"References",id:"references",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-the-difference-between-staircase-and-subcell-methods-in-eme-simulation"},"What is the difference between Staircase and Subcell methods in EME Simulation?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(58613).Z,width:"792",height:"555"}))))),(0,i.kt)("h2",{id:"1staircase-approximationnone"},"1.Staircase approximation(None)"),(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The Staircase approximation simply uses the mode field of discrete points to represent the mode field of the entire element, which has high computational efficiency. When the cell undergoes discontinuous changes, it can cause non physical reflections at the interface of the cell. The Staircase approximation method is applicable to staircase waveguides, mosaic type photonic devices, and square wave modulated waveguide gratings."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(75694).Z,width:"5669",height:"1949"})))))),(0,i.kt)("h2",{id:"2subcell-approximationsub-cell"},"2.Subcell approximation(Sub Cell)"),(0,i.kt)("div",{class:"text-justify"},"The Subcell approximation calculates the mode at the interface of each cell as a first-order interpolation of adjacent cells, and can simulate continuously changing photonic structures with smaller cells.The Subcell approximation method is suitable for gradient waveguides, tapers, and sinusoidal modulated waveguide gratings. When using the Subcell method, it is important to perform convergence analysis on the number of cells in the structural change area to ensure that the number of slices is sufficient.",(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(3122).Z,width:"11338",height:"3898"}))))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"[1]",' Gallagher, Dominic FG, and Thomas P. Felici. "Eigenmode expansion methods for simulation of optical propagation in photonics: pros and cons." Integrated optics: devices, materials, and technologies VII. Vol. 4987. SPIE, 2003.'))))}m.isMDXComponent=!0},58613:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme-de59322947c026e24fbf28666e4e8a16.png"},75694:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/staircase-eb859e90351c374952dac3da073dd065.png"},3122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subcell-21f15b686e1a76b807337c0c4e4acc1c.png"}}]);