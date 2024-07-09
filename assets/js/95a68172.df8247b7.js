"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),f=n,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return a?r.createElement(m,c(c({ref:t},u),{},{components:a})):r.createElement(m,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={},c="What is the difference between Staircase and Subcell methods?",s={unversionedId:"faq/Physics/Subcell",id:"faq/Physics/Subcell",title:"What is the difference between Staircase and Subcell methods?",description:"Staircase approximation",source:"@site/docs/faq/Physics/Subcell.md",sourceDirName:"faq/Physics",slug:"/faq/Physics/Subcell",permalink:"/my-website/docs/faq/Physics/Subcell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/Physics/Subcell.md",tags:[],version:"current",frontMatter:{},sidebar:"faqSidebar",previous:{title:"How to set simulation time?",permalink:"/my-website/docs/faq/Physics/Simulation time"},next:{title:"About the basic concept",permalink:"/my-website/docs/faq/Physics/basic concept"}},o={},l=[{value:"Staircase approximation",id:"staircase-approximation",level:2},{value:"Subcell approximation",id:"subcell-approximation",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-the-difference-between-staircase-and-subcell-methods"},"What is the difference between Staircase and Subcell methods?"),(0,n.kt)("h2",{id:"staircase-approximation"},"Staircase approximation"),(0,n.kt)("font",{face:"Calibri"},(0,n.kt)("div",{class:"text-justify"},"The Staircase approximation simply uses the mode field of discrete points to represent the mode field of the entire element, which has high computational efficiency. When the cell undergoes discontinuous changes, it can cause non physical reflections at the interface of the cell. The Staircase approximation method is applicable to staircase waveguides, mosaic type photonic devices, and square wave modulated waveguide gratings.",(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5945).Z,width:"5669",height:"1949"}))),(0,n.kt)("h2",{id:"subcell-approximation"},"Subcell approximation"),(0,n.kt)("div",{class:"text-justify"},"The Subcell approximation calculates the mode at the interface of each cell as a first-order interpolation of adjacent cells, and can simulate continuously changing photonic structures with smaller cells.The Subcell approximation method is suitable for gradient waveguides, tapers, and sinusoidal modulated waveguide gratings. When using the Subcell method, it is important to perform convergence analysis on the number of cells in the structural change area to ensure that the number of slices is sufficient.",(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6818).Z,width:"11338",height:"3898"})))))}d.isMDXComponent=!0},5945:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/staircase-eb859e90351c374952dac3da073dd065.png"},6818:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/subcell-21f15b686e1a76b807337c0c4e4acc1c.png"}}]);