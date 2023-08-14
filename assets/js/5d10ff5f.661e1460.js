"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3963],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(i),p=r,d=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return i?n.createElement(d,a(a({ref:t},u),{},{components:i})):n.createElement(d,a({ref:t},u))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<o;m++)a[m]=i[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},7719:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=i(7462),r=(i(7294),i(3905));const o={},a="How to set simulation time?",s={unversionedId:"faq/physics/Simulation time",id:"faq/physics/Simulation time",title:"How to set simulation time?",description:"When either the maximum simulation time is reached or the energy in the simulation area is less than the convergence threshold, the simulation project will end. In order to obtain convergence results, the simulation time should be set long enough, and it is recommended that the simulation time be no less than 1000 fs.",source:"@site/docs/faq/physics/Simulation time.md",sourceDirName:"faq/physics",slug:"/faq/physics/Simulation time",permalink:"/my-website/docs/faq/physics/Simulation time",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/physics/Simulation time.md",tags:[],version:"current",frontMatter:{},sidebar:"faqSidebar",previous:{title:"How to set up EME scanning?",permalink:"/my-website/docs/faq/physics/EME wavelength sweep"},next:{title:"How to set the position of the light source and monitor?",permalink:"/my-website/docs/faq/physics/location"}},l={},m=[],u={toc:m},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-set-simulation-time"},"How to set simulation time?"),(0,r.kt)("p",null,"When either the maximum simulation time is reached or the energy in the simulation area is less than the convergence threshold, the simulation project will end. In order to obtain convergence results, the simulation time should be set long enough, and it is recommended that the simulation time be no less than 1000 fs."),(0,r.kt)("h1",{id:"relationship-between-structural-dimensions-and-simulation-time"},"Relationship between structural dimensions and simulation time"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The estimated time required for simulating and calculating non resonant devices is:L\ud835\udc5b_\ud835\udc54/c;"),(0,r.kt)("li",{parentName:"ol"},"For SOI devices with a 100 micron length and a group refractive index of 4.23, the simulation time should be at least 1410 fs;"),(0,r.kt)("li",{parentName:"ol"},"For SiN devices with a 100 micron length and a group refractive index of 2.01, the simulation time is at least 670fs."),(0,r.kt)("li",{parentName:"ol"},"In general, we need the light field energy in the simulation to converge below 1e-4. In order to ensure that the energy at the end of the simulation is less than 1e-4, the simulation time should be set sufficiently large.")),(0,r.kt)("h1",{id:"what-is-the-relationship-between-the-step-039-printed-during-the-simulation-process-and-the-simulation-time"},"What is the relationship between the 'step. 0.39%' printed during the simulation process and the simulation time?"),(0,r.kt)("p",null,'At the beginning of the simulation, a maximum simulation time will be estimated based on the number of grid points, simulation time, and current computer performance, corresponding to the sum of "elapsed" and "remaining" times in each row of the following figure. After each iteration, the program will calculate the current elapsed time elapsed time and the maximum required simulation time remaining time until the end of the simulation. When the simulation time is set sufficiently large, the Early shutdown condition will be triggered when the energy of light in the simulation area decreases to the convergence level, and the simulation time used is less than 100%.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                           step = elapsed_time/(elapsed_time + remain_time)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(9806).Z,width:"5669",height:"1063"})))}h.isMDXComponent=!0},9806:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/early_shutoff-f5bc55d9347bf04b70d6b89bd490231f.png"}}]);