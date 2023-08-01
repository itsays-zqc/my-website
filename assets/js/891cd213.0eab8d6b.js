"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8997],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>u});var i=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,i)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function r(A,e){if(null==A)return{};var t,i,n=function(A,e){if(null==A)return{};var t,i,n={},a=Object.keys(A);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=i.createContext({}),c=function(A){var e=i.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},s=function(A){var e=c(A.components);return i.createElement(l.Provider,{value:e},A.children)},p="mdxType",g={inlineCode:"code",wrapper:function(A){var e=A.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,l=A.parentName,s=r(A,["components","mdxType","originalType","parentName"]),p=c(t),d=n,u=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return t?i.createElement(u,o(o({ref:e},s),{},{components:t})):i.createElement(u,o({ref:e},s))}));function u(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,o=new Array(a);o[0]=d;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=A,r[p]="string"==typeof A?A:n,o[1]=r;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2741:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(7462),n=(t(7294),t(3905));const a={sidebar_position:3},o="Local SDK License Instructions",r={unversionedId:"faq/faq2",id:"faq/faq2",title:"Local SDK License Instructions",description:"Server: Install Group Licensing Local Service",source:"@site/docs/faq/faq2.md",sourceDirName:"faq",slug:"/faq/faq2",permalink:"/my-website/docs/faq/faq2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"faqSidebar",previous:{title:"How to install Max-Optics",permalink:"/my-website/docs/faq/faq1"},next:{title:"How to Obtaining Technical Support",permalink:"/my-website/docs/faq/faq3"}},l={},c=[{value:"<strong>Server: Install Group Licensing Local Service</strong>",id:"server-install-group-licensing-local-service",level:2},{value:"1. Unzip the Release Packages",id:"1-unzip-the-release-packages",level:3},{value:"2. Installation &amp; Activation",id:"2-installation--activation",level:3},{value:"Activation Offline",id:"activation-offline",level:2},{value:"Module List: All License Code Features would be listed here",id:"module-list-all-license-code-features-would-be-listed-here",level:3},{value:"Login List: All current running client machines using the license service would be listed here",id:"login-list-all-current-running-client-machines-using-the-license-service-would-be-listed-here",level:3},{value:"Client: Configuration",id:"client-configuration",level:2},{value:"Configure the Group Licensing Service IP",id:"configure-the-group-licensing-service-ip",level:3},{value:"Create the Local Config File",id:"create-the-local-config-file",level:3},{value:"Configure Fields",id:"configure-fields",level:3}],s={toc:c},p="wrapper";function g(A){let{components:e,...a}=A;return(0,n.kt)(p,(0,i.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"local-sdk-license-instructions"},"Local SDK License Instructions"),(0,n.kt)("h2",{id:"server-install-group-licensing-local-service"},(0,n.kt)("strong",{parentName:"h2"},"Server: Install Group Licensing Local Service")),(0,n.kt)("h3",{id:"1-unzip-the-release-packages"},"1. Unzip the Release Packages"),(0,n.kt)("p",null,"Local Service Installer: ",(0,n.kt)("inlineCode",{parentName:"p"},"bit_service.exe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Group licensing local service.\n")),(0,n.kt)("p",null,"Extension Module: ",(0,n.kt)("inlineCode",{parentName:"p"},"MaxOptics SDK_.ext")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The group licensing product extension module. \nUsers should install the Extension along with the Local Service Installer to support the product.\n")),(0,n.kt)("p",null,"Group Licensing Setting Tools: ",(0,n.kt)("inlineCode",{parentName:"p"},"MaxOptics SDK__SetLocalServer.exe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"The client queries/sets the group server address and port.\n")),(0,n.kt)("h3",{id:"2-installation--activation"},"2. Installation & Activation"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&#39;1&#39;",src:t(6166).Z,width:"620",height:"45"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Double click ",(0,n.kt)("inlineCode",{parentName:"p"},"bit_service.exe")," for the installation;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open http://localhost:8274/manager/product.html ;")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add Extension Module;"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;2&#39;",src:t(8741).Z,width:"1916",height:"875"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the license online ","[Support online and offline]",";"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;3&#39;",src:t(7750).Z,width:"1910",height:"471"}),"\n",(0,n.kt)("img",{alt:"&#39;4&#39;",src:t(2524).Z,width:"1910",height:"405"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search License Info via the Given URL, then enter the License Code on the User Login Page."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;5&#39;",src:t(2062).Z,width:"763",height:"402"})))),(0,n.kt)("h2",{id:"activation-offline"},"Activation Offline"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Activation Offline")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;6&#39;",src:t(7460).Z,width:"1916",height:"549"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorization Code")," to generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"Request Code")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;7&#39;",src:t(9796).Z,width:"1916",height:"536"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy or Export ",(0,n.kt)("inlineCode",{parentName:"p"},"Request Code")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;8&#39;",src:t(4179).Z,width:"1910",height:"700"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a tab with ",(0,n.kt)("a",{parentName:"p",href:"https://user.bitanswer.cn"},"https://user.bitanswer.cn"),", enter your ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorization Code"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generate Update Code"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;9&#39;",src:t(6869).Z,width:"1897",height:"458"}),"\n",(0,n.kt)("img",{alt:"&#39;10&#39;",src:t(7206).Z,width:"1903",height:"727"}),"\n",(0,n.kt)("img",{alt:"&#39;11&#39;",src:t(1680).Z,width:"1903",height:"760"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy or Download Update Code, and Import your Update Code"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"&#39;12&#39;",src:t(5339).Z,width:"1916",height:"752"}),"\n",(0,n.kt)("img",{alt:"&#39;13&#39;",src:t(1947).Z,width:"1910",height:"886"})))),(0,n.kt)("h3",{id:"module-list-all-license-code-features-would-be-listed-here"},"Module List: All License Code Features would be listed here"),(0,n.kt)("p",null,"e.g."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&#39;14&#39;",src:t(905).Z,width:"1916",height:"542"})),(0,n.kt)("h3",{id:"login-list-all-current-running-client-machines-using-the-license-service-would-be-listed-here"},"Login List: All current running client machines using the license service would be listed here"),(0,n.kt)("p",null,"e.g."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"&#39;15&#39;",src:t(5051).Z,width:"1908",height:"394"})),(0,n.kt)("h2",{id:"client-configuration"},"Client: Configuration"),(0,n.kt)("h3",{id:"configure-the-group-licensing-service-ip"},"Configure the Group Licensing Service IP"),(0,n.kt)("p",null,"On the client machine, running ",(0,n.kt)("inlineCode",{parentName:"p"},"MaxOptics SDK__SetLocalServer.exe")," to configure\nGroup Licensing Local Service"),(0,n.kt)("p",null,"It supports the two ways:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Discovery Automatically\nConfigure Manually\n")),(0,n.kt)("h3",{id:"create-the-local-config-file"},"Create the Local Config File"),(0,n.kt)("p",null,"Create ",(0,n.kt)("inlineCode",{parentName:"p"},".sdk")," dir on the User HOME"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"*nix: HOME is /home/<user>\nWindows: HOME is C:\\Users\\<user>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mkdir -p ~/.sdk/\ntouch ~/.sdk/config.yml # or ~/.sdk/config.yaml\n# or\ntouch ~/.sdk/config.toml\n")),(0,n.kt)("h3",{id:"configure-fields"},"Configure Fields"),(0,n.kt)("p",null,"Support YAML and TOML format, please refer to the following code snippets:"),(0,n.kt)("p",null,"for YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'max_optics:\n    is_group_auth: true\n    sn: "<Authorization Code> if is_group_auth is false, else\ndelete this line"\n    # the following block is only for group authorization\n    group:\n    host: "<group auth url>"\n    port: "<group auth port>"\n')),(0,n.kt)("p",null,"for TOML:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[max_optics]\nis_group_auth = true\nsn = "<Authorization Code> if is_group_auth is false, else delete\nthis line"\n# the following block is only for group authorization\n[max_optics.group]\nhost = "<group auth url>"\nport = "<group auth port>"\n')))}g.isMDXComponent=!0},6166:(A,e,t)=>{t.d(e,{Z:()=>i});const i="data:image/jpeg;base64,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"},7206:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/10-8e10659823f64157a17c43388a01219d.jpg"},1680:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/11-6c4e341f7b8115fa2a03426b9e4a48ac.jpg"},5339:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/12-5a8da9d0ca29c11cbc0699cbf47ffb36.jpg"},1947:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/13-d956ff78307d73a923632354ef1468ec.jpg"},905:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/14-77ecc0a2729de2f4268465bb74bce00a.jpg"},5051:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/15-50725991de1112d64c42d95b4234ffdf.jpg"},8741:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/2-1c56a25940b51def68381774d5cd76f2.jpg"},7750:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/3-2b3ef756f208f322b6089c8687437ccf.jpg"},2524:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/4-fc4f4a9b0a9ceefc4a67f1d54d761cca.jpg"},2062:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/5-eae5cdf55feb6a84a3a5e60fd8d0ba97.jpg"},7460:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/6-3d258e04ec088c8939b51df0aed55ba2.jpg"},9796:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/7-ff42e1e622bd33ae42562696c25b0d8a.jpg"},4179:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/8-1f841bea088a50913f0a7ebd71610e47.jpg"},6869:(A,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/9-db79a9f5c2efeeefb66c4efa4acd47f0.jpg"}}]);