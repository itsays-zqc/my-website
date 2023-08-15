"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1078],{3905:(t,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>f});var n=e(67294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function d(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),o=function(t){var l=n.useContext(k),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},s=function(t){var l=o(t.components);return n.createElement(k.Provider,{value:l},t.children)},i="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,k=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),i=o(e),m=r,f=i["".concat(k,".").concat(m)]||i[m]||c[m]||u;return e?n.createElement(f,a(a({ref:l},s),{},{components:e})):n.createElement(f,a({ref:l},s))}));function f(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,a=new Array(u);a[0]=m;var d={};for(var k in l)hasOwnProperty.call(l,k)&&(d[k]=l[k]);d.originalType=t,d[i]="string"==typeof t?t:r,a[1]=d;for(var o=2;o<u;o++)a[o]=e[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1879:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>k,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>d,toc:()=>o});var n=e(87462),r=(e(67294),e(3905));const u={},a=void 0,d={unversionedId:"test/core/source/interface",id:"test/core/source/interface",title:"interface",description:"SourceInterface",source:"@site/docs/test/core/source/interface.md",sourceDirName:"test/core/source",slug:"/test/core/source/interface",permalink:"/my-website/docs/test/core/source/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/core/source/interface.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"maxoptics_sdk.core.simulation.simu_task.interface module",permalink:"/my-website/docs/test/core/simulation/simu_task"},next:{title:"post_process_gaussian_source_typing",permalink:"/my-website/docs/test/core/source/post_process_gaussian_source_typing"}},k={},o=[{value:"SourceInterface",id:"sourceinterface",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Usage",id:"usage",level:3},{value:"MODE_SOURCE",id:"mode_source",level:2},{value:"GAUSSIAN_SOURCE",id:"gaussian_source",level:2}],s={toc:o},i="wrapper";function c(t){let{components:l,...e}=t;return(0,r.kt)(i,(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sourceinterface"},"SourceInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class maxoptics_sdk.core.source.interface.SourceInterface(*args, **kwargs)\n")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("strong",{parentName:"p"},"Protocol")),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"abstract ",(0,r.kt)("strong",{parentName:"p"},"add"),"(*, type: Literal","['mode_source']",", name: str, axis: Literal","['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward']",", property: PostProcessModeSource)"),(0,r.kt)("p",null,"abstract ",(0,r.kt)("strong",{parentName:"p"},"add"),"(*, type: Literal","['gaussian_source']",", name: str, axis: Literal","['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward']",", property: PostProcessGaussianSource)"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Add a source to current project")),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"Explanation")),(0,r.kt)("tr",null,(0,r.kt)("td",{class:"first-column"},"name"),(0,r.kt)("td",{class:"second-column"},"Source name")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,"Source type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"axis"),(0,r.kt)("td",null,"Source axis")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"property"),(0,r.kt)("td",null,"Source property"))),(0,r.kt)("h2",{id:"mode_source"},"MODE_SOURCE"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"default"),(0,r.kt)("td",{class:"typeface"},"type"),(0,r.kt)("td",{class:"typeface"},"notes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.inject_axis"),(0,r.kt)("td",null,"x_axis"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.direction"),(0,r.kt)("td",null,"forward"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['forward', 'backward'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.amplitude"),(0,r.kt)("td",null,"1.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.phase"),(0,r.kt)("td",null,"0.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.mode_selection"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.mode_removal.threshold"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.mode_index"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.search"),(0,r.kt)("td",null,"max_index"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['near_n', 'max_index'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.n"),(0,r.kt)("td",null,"1.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.number_of_trial_modes"),(0,r.kt)("td",null,"20"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.waveform.waveform_id_select"),(0,r.kt)("td",null),(0,r.kt)("td",null,"any"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.rotations.theta"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.rotations.phi"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.rotations.rotation_offset"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null))),(0,r.kt)("h2",{id:"gaussian_source"},"GAUSSIAN_SOURCE"),(0,r.kt)("table",{class:"custom-table"},(0,r.kt)("tr",null,(0,r.kt)("td",{class:"typeface"},"Parameters"),(0,r.kt)("td",{class:"typeface"},"Default"),(0,r.kt)("td",{class:"typeface"},"Type"),(0,r.kt)("td",{class:"typeface"},"Notes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.inject_axis"),(0,r.kt)("td",null,"x_axis"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.direction"),(0,r.kt)("td",null,"forward"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['forward', 'backward'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.amplitude"),(0,r.kt)("td",null,"1.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.phase"),(0,r.kt)("td",null,"0.0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.waveform.waveform_id_select"),(0,r.kt)("td",null),(0,r.kt)("td",null,"waveform"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.angle_theta"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.angle_phi"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.rotation_offset"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.polarization_angle"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.calculation_method"),(0,r.kt)("td",null,"use_scalar_approximation"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['use_scalar_approximation', 'use_vector_approximation'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.beam_parameters"),(0,r.kt)("td",null,"waist_size_and_position"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Selections are ['waist_size_and_position', 'beam_size_and_divergence'].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.waist_radius"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.distance_from_waist"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.beam_radius"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"general.beam_settings.divergence_angle"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.x_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.y_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_span"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"Restrained by condition: >=0.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_min"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"geometry.z_max"),(0,r.kt)("td",null),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null))))}c.isMDXComponent=!0}}]);