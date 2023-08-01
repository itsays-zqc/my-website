"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1889],{3905:(t,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>m});var n=e(7294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function d(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),k=function(t){var l=n.useContext(o),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},s=function(t){var l=k(t.components);return n.createElement(o.Provider,{value:l},t.children)},i="mdxType",p={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,o=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),i=k(e),c=r,m=i["".concat(o,".").concat(c)]||i[c]||p[c]||u;return e?n.createElement(m,a(a({ref:l},s),{},{components:e})):n.createElement(m,a({ref:l},s))}));function m(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,a=new Array(u);a[0]=c;var d={};for(var o in l)hasOwnProperty.call(l,o)&&(d[o]=l[o]);d.originalType=t,d[i]="string"==typeof t?t:r,a[1]=d;for(var k=2;k<u;k++)a[k]=e[k];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},6283:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var n=e(7462),r=(e(7294),e(3905));const u={},a="PortInterface",d={unversionedId:"test/core/ports/interface",id:"test/core/ports/interface",title:"PortInterface",description:"- Bases: Protocol",source:"@site/docs/test/core/ports/interface.md",sourceDirName:"test/core/ports",slug:"/test/core/ports/interface",permalink:"/my-website/docs/test/core/ports/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/ports/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"post_process_time_monitor_typing",permalink:"/my-website/docs/test/core/monitors/post_process_time_monitor_typing"},next:{title:"post_process_eme_port_typing",permalink:"/my-website/docs/test/core/ports/post_process_eme_port_typing"}},o={},k=[{value:"add a port",id:"add-a-port",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"Parameters and Returns",id:"parameters-and-returns",level:3},{value:"FDTD_PORT",id:"fdtd_port",level:2},{value:"EME_PORT",id:"eme_port",level:2}],s={toc:k},i="wrapper";function p(t){let{components:l,...e}=t;return(0,r.kt)(i,(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"portinterface"},"PortInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.ports.interface.PortInterface(*args, **kwargs)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bases: ",(0,r.kt)("strong",{parentName:"li"},"Protocol"))),(0,r.kt)("h2",{id:"add-a-port"},"add a port"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"abstract add(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['eme_port']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessEmePort)"),(0,r.kt)("p",null,"abstract add(*, ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),": Literal","['fdtd_port']",", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": str, ",(0,r.kt)("inlineCode",{parentName:"p"},"property"),": PostProcessFdtdPort)"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Add a port to current project.")),(0,r.kt)("h3",{id:"parameters-and-returns"},"Parameters and Returns"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"Explanation")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null," Port name")),(0,r.kt)("tr",null,(0,r.kt)("td",{class:"first-column"},"type"),(0,r.kt)("td",{class:"second-column"},"Port type.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"property"),(0,r.kt)("td",null," Port property"))),(0,r.kt)("br",null),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"third-column"},"Returns:"),(0,r.kt)("td",{class:"fourth-column"},"No return."))),(0,r.kt)("h2",{id:"fdtd_port"},"FDTD_PORT"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"}),(0,r.kt)("td",{class:"typeface"},"default"),(0,r.kt)("td",{class:"typeface"},"type"),(0,r.kt)("td",{class:"typeface"},"notes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.inject_axis"),(0,r.kt)("td",null,"x_axis"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.direction"),(0,r.kt)("td",null,"forward"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['forward', 'backward'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.amplitude"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.phase"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.mode_selection"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.mode_removal.threshold"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.mode_index"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.search"),(0,r.kt)("td",null,"max_index"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['near_n', 'max_index'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.n"),(0,r.kt)("td",null,"1.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.general.number_of_trial_modes"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.bent_waveguide.bent_waveguide"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"bool"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.bent_waveguide.radius"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.bent_waveguide.orientation"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"modal_properties.bent_waveguide.location"),(0,r.kt)("td",null,"simulation_center"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['simulation_center']."))),(0,r.kt)("h2",{id:"eme_port"},"EME_PORT"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"}),(0,r.kt)("td",{class:"typeface"},"default"),(0,r.kt)("td",{class:"typeface"},"type"),(0,r.kt)("td",{class:"typeface"},"notes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.port_location"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['left', 'right'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.use_full_simulation_span"),(0,r.kt)("td",null,"true"),(0,r.kt)("td",null,"bool"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.general.mode_selection"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.general.mode_index"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.general.search"),(0,r.kt)("td",null,"max_index"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['near_n', 'max_index'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.general.n"),(0,r.kt)("td",null,"1.0"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.bent_waveguide.bent_waveguide"),(0,r.kt)("td",null,"false"),(0,r.kt)("td",null,"bool"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.bent_waveguide.radius"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.bent_waveguide.orientation"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.bent_waveguide.location"),(0,r.kt)("td",null,"simulation_center"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['simulation_center'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.advanced.offset"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.advanced.number_of_trial_modes"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"eme_port.advanced.mode_removal.threshold"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null))))}p.isMDXComponent=!0}}]);