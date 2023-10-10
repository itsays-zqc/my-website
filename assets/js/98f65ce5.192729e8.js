"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,u=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2},o="FDTD Solver",l={unversionedId:"tutorial/4Simulation/2FDTD",id:"tutorial/4Simulation/2FDTD",title:"FDTD Solver",description:"Solver Physics: The numerical method of computational electrodynamics that provides approximate solutions to the system of Maxwell's equations is known as Finite-Difference Time-Domain (FDTD). It is also referred to as Yee's method, named after Kane S. Yee, a Chinese-American applied mathematician. As a time-domain method, FDTD handles nonlinear material properties in a rather natural way and can cover a wide frequency range by running only a single simulation.",source:"@site/docs/tutorial/4Simulation/2FDTD.md",sourceDirName:"tutorial/4Simulation",slug:"/tutorial/4Simulation/2FDTD",permalink:"/my-website/docs/tutorial/4Simulation/2FDTD",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/4Simulation/2FDTD.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FDE Solver",permalink:"/my-website/docs/tutorial/4Simulation/1FDE"},next:{title:"EME Solver",permalink:"/my-website/docs/tutorial/4Simulation/3EME"}},s={},d=[{value:"1 Tool bar",id:"1-tool-bar",level:2},{value:"1.1 General tab",id:"11-general-tab",level:3},{value:"1.2 Geometry tab:",id:"12-geometry-tab",level:3},{value:"1.3 Mesh Settings tab:",id:"13-mesh-settings-tab",level:3},{value:"1.4 Boundary Conditions tab:",id:"14-boundary-conditions-tab",level:3},{value:"1.5 Advanced Options tab:",id:"15-advanced-options-tab",level:3},{value:"1.6 Thread Settings tab:",id:"16-thread-settings-tab",level:3},{value:"2 Simulation Cases:",id:"2-simulation-cases",level:2},{value:"2.1 Modeling",id:"21-modeling",level:3},{value:"2.1.1 Material database settings",id:"211-material-database-settings",level:4},{value:"2.1.2 Add a rectangle",id:"212-add-a-rectangle",level:4},{value:"2.1.3 Waveforms setting",id:"213-waveforms-setting",level:4},{value:"2.2 Add FDTD",id:"22-add-fdtd",level:3},{value:"2.3 Add Mode Source",id:"23-add-mode-source",level:3},{value:"2.4 Add Power Monitor",id:"24-add-power-monitor",level:3},{value:"2.5 Run",id:"25-run",level:3},{value:"2.6 Result View",id:"26-result-view",level:3},{value:"2.6.1 FDTD Monitor-&gt;Power Monitor-&gt;Image tab",id:"261-fdtd-monitor-power-monitor-image-tab",level:4},{value:"2.6.2 FDTD Monitor-&gt; Power Monitor-&gt;Line tab",id:"262-fdtd-monitor--power-monitor-line-tab",level:4}],m={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fdtd-solver"},"FDTD Solver"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solver Physics"),": The numerical method of computational electrodynamics that provides approximate solutions to the system of Maxwell's equations is known as Finite-Difference Time-Domain (FDTD). It is also referred to as Yee's method, named after Kane S. Yee, a Chinese-American applied mathematician. As a time-domain method, FDTD handles nonlinear material properties in a rather natural way and can cover a wide frequency range by running only a single simulation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features Description"),": Adds or sets FDTD simulation region and boundary conditions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")," : When FDTD solver is selected, user cannot add FDE solver and EME solver at the same time. "),(0,r.kt)("h2",{id:"1-tool-bar"},"1 Tool bar"),(0,r.kt)("h3",{id:"11-general-tab"},"1.1 General tab"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;fde1&#39;",src:a(88323).Z,width:"1080",height:"747"}))))),(0,r.kt)("p",null,"1)",(0,r.kt)("strong",{parentName:"p"},"Dimension"),": Number of dimensions of the simulation region. (Default: 3D)"),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"Using Optical Path Estimate Time"),": It is the switch button that the estimation of simulation time based on optical path."),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Estimate Time"),": Estimated simulation time. (when \u201cUsing Optical Path Estimate Time\u201d is enabled, it is displayed and non-editable."),(0,r.kt)("p",null,"4)",(0,r.kt)("strong",{parentName:"p"},"Simulation Time"),": Simulation time indicates the maximum duration of the simulation to be implemented. In reality the simulation may end earlier when some of the auto-shutoff conditions are satisfied before running till this maximum simulation time. (Default: 1000 fs)"),(0,r.kt)("p",null,"5)",(0,r.kt)("strong",{parentName:"p"},"Background Material"),": The combo box allows user to set the background material from drop down menu. \u201cProject\u201d, \u201cObject Defined Dielectric\u201d, and \u201cGo to Material Library\u201d can be operated."),(0,r.kt)("p",null,"6)",(0,r.kt)("strong",{parentName:"p"},"Project"),": The \u201cBackground Material\u201d can be selected from the \u201cProject\u201d sublist in the \u201cMaterial Database\u201d based upon the needs."),(0,r.kt)("p",null,"7)",(0,r.kt)("strong",{parentName:"p"},"Object Defined Dielectric"),": The object-defined dielectric material, a default setting if user forgets to set background material, is defined for the current object background material setting, and once the user chooses this option, he does not need to set any material from the standard, user, or project material database. And the object-defined dielectric will not be loaded into any material database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Go to Material Library"),": If selected, user can go to standard material database to set background material according to needs. And the selected material relative property from standard material database will be displayed in the material data list."),(0,r.kt)("p",null,"8)",(0,r.kt)("strong",{parentName:"p"},"Index"),": The refractive index of the surrounding, background medium in the simulation region.\uff08Default: 1)"),(0,r.kt)("h3",{id:"12-geometry-tab"},"1.2 Geometry tab:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:a(57892).Z,width:"954",height:"647"}))))),(0,r.kt)("p",null,"1)",(0,r.kt)("strong",{parentName:"p"},"X, Y, Z"),": The center position of the simulation region."),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"X Min, X Max:")," X min, X max position."),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Y Min, Y Max:")," Y min, Y max position."),(0,r.kt)("p",null,"4)",(0,r.kt)("strong",{parentName:"p"},"Z Min, Z Max:")," Z min, Z max position."),(0,r.kt)("p",null,"5)",(0,r.kt)("strong",{parentName:"p"},"X Span, Y Span, Z Span:")," X, Y, Z span of the simulation region."),(0,r.kt)("h3",{id:"13-mesh-settings-tab"},"1.3 Mesh Settings tab:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:a(97060).Z,width:"1330",height:"824"}))))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"Mesh Type:"),"\nTwo types of mesh generation algorithms are available, as described below;"),(0,r.kt)("p",null,"\u2460 ",(0,r.kt)("strong",{parentName:"p"},"Auto non-uniform (Default)")),(0,r.kt)("p",null,"A non-uniform mesh is automatically generated based on the mesh accuracy slider bar."),(0,r.kt)("p",null,"\u2461 ",(0,r.kt)("strong",{parentName:"p"},"Uniform")),(0,r.kt)("p",null,"A uniform mesh is applied to the entire simulation volume, regardless of any material properties. If a mesh override region is used in conjunction with this option, the override region will force the mesh size everywhere, not just within the override region (the mesh is uniform)."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},"Mesh Accuracy:")," Sets cells per wavelength. The default set is 15."),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},"Minimum Mesh Step Settings:")," Set the absolute minimum mesh size for the entire solver region. "),(0,r.kt)("p",null,"4) ",(0,r.kt)("strong",{parentName:"p"},"Mesh Refinement:")," Mesh refinement can give sub-cell accuracy for a simulation."),(0,r.kt)("p",null,"\u2460 ",(0,r.kt)("strong",{parentName:"p"},"Staircase:"),' The material at each position of the Yee cell is evaluated to determine which material it is in, and the E field at that location uses only that single material property. The resulting discretized structure is unable to account for structure variations that occur within any single Yee cell, resulting in a "staircase" permittivity mesh that coincides with the Cartesian mesh furthermore, any layers are effectively moved to the nearest E field position on the Yee cell, meaning that layer thickness cannot be resolved to better than dx.'),(0,r.kt)("p",null,"\u2461 ",(0,r.kt)("strong",{parentName:"p"},"Curve Mesh:")," Effective permittivities are derived using a contour path approach that accounts for the boundary conditions of the electromagnetic field at dielectric interfaces."),(0,r.kt)("p",null,"5) ",(0,r.kt)("strong",{parentName:"p"},"Grading:")," Grading factor, determines the maximum ratio of the neighboring spatial steps."),(0,r.kt)("h3",{id:"14-boundary-conditions-tab"},"1.4 Boundary Conditions tab:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:a(41287).Z,width:"953",height:"810"}))))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"PML:")," Perfectly matched layer (PML) boundaries absorb electromagnetic waves incident upon them. They essentially model open (or reflectionless) boundaries."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},"PEC:")," PEC boundary conditions are used to specify boundaries that behave as a Perfect Electric Conductor (PEC). Metal boundaries are perfectly reflecting, allowing no energy to escape the simulation volume along that boundary."),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},"PML settings:")," When the state of the Same Settings on All Boundary Conditions is on, all PML boundaries share the same profile based on the properties listed in the table, including \u201cLayers\u201d, \u201cKappa\u201d, \u201cSigma\u201d, \u201cPolynomial\u201d, \u201cAlpha\u201d, \u201cAlpha Polynomial\u201d, \u201cMin Layers\u201d, and \u201cMax Layers\u201d; otherwise, each PML boundary can be set individually."),(0,r.kt)("p",null,"4) ",(0,r.kt)("strong",{parentName:"p"},"X/Y/Z min/ max PML:")," These fields describe the boundary conditions to be applied along the perimeter of the simulation region."),(0,r.kt)("h3",{id:"15-advanced-options-tab"},"1.5 Advanced Options tab:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:a(54959).Z,width:"1087",height:"598"}))))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"Auto Shutoff :")," Stops the simulation when the energy in the simulation goes below the \u201cAuto Shutoff Min\u201d when the \u201cUse Early Shutoff \u201d state is on , you can set min auto shutoff (Default: 1e-4) and down sample time (Default: 200)"),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"Down sample time:")," The time step down sampling. (It is default: 200, and 10 <= it <= 1000)"),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Live Slice Field Display Settings")),(0,r.kt)("p",null,"\u2460 ",(0,r.kt)("strong",{parentName:"p"},"Show Field:")," Real-time filed slice display switch. (Default: on)"),(0,r.kt)("p",null,"\u2461 ",(0,r.kt)("strong",{parentName:"p"},"Select Field Section:")," Combo box allows you to choose from a list of 2D planes normal to the axes for field display. ( 2D Z Normal by default\uff09"),(0,r.kt)("p",null,"\u2462 ",(0,r.kt)("strong",{parentName:"p"},"Select Component"),"\uff1aCombo box allows you to choose from a list of the existing field components ( Ex by default)"),(0,r.kt)("p",null,"\u2463 ",(0,r.kt)("strong",{parentName:"p"},"Time Interval:")," The time step down sampling (200 fs by default)"),(0,r.kt)("p",null,"\u2464 ",(0,r.kt)("strong",{parentName:"p"},"Position:")," The position of slice (0 \u03bcm by default)"),(0,r.kt)("h3",{id:"16-thread-settings-tab"},"1.6 Thread Settings tab:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{src:a(94274).Z,width:"953",height:"642"}))))),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"Thread"),"\uff1aThrough thread setting can improve running effects, which makes simulation significantly faster than prior. (Default: 4)"),(0,r.kt)("h2",{id:"2-simulation-cases"},"2 Simulation Cases:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objectives"),":In this example, we show how to use Max-Optics to run FDTD and view the simulation result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Works Flow"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(67548).Z,width:"362",height:"702"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h3",{id:"21-modeling"},"2.1 Modeling"),(0,r.kt)("h4",{id:"211-material-database-settings"},"2.1.1 Material database settings"),(0,r.kt)("p",null,'Press on "',(0,r.kt)("strong",{parentName:"p"},"Material"),'" button, the material database window will bring out, and import new materials from standard material database or user material database into project material database according to user needs.( when import success a prompt information will pop out informs that ',(0,r.kt)("inlineCode",{parentName:"p"},"Import Success. Success: 1/1, Fail: 0/1 (duplicated)"),")."),(0,r.kt)("p",null,"Material work flows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(98723).Z,width:"1951",height:"1262"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h4",{id:"212-add-a-rectangle"},"2.1.2 Add a rectangle"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Structures"),"\u201d button, and select a Rectangle from the drop-down menu. Set the properties of the substrate rectangle according to the following table."),(0,r.kt)("p",null,"Menu bar->Structures->Rectangle->Geometry->Material"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(12693).Z,width:"993",height:"288"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h4",{id:"213-waveforms-setting"},"2.1.3 Waveforms setting"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Waveforms"),"\u201d button in the menu bar, then add the waveform with name: \u201dWaveform0\u201d under the project waveform and set the properties in Waveforms dialog box."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(36970).Z,width:"1074",height:"885"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(55036).Z,width:"1057",height:"170"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(34958).Z,width:"1142",height:"820"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h3",{id:"22-add-fdtd"},"2.2 Add FDTD"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Simulation"),"\u201d button in the menu bar, and select \u201c",(0,r.kt)("strong",{parentName:"p"},"FDTD"),"\u201d from the drop-down menu, and set the properties according to the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(8154).Z,width:"1113",height:"648"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h3",{id:"23-add-mode-source"},"2.3 Add Mode Source"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Mode Source"),"\u201d button in the menu bar, and select \u201c",(0,r.kt)("strong",{parentName:"p"},"Mode Source"),"\u201d from the drop-down menu. Set the properties of mode source according to the following table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(89978).Z,width:"1019",height:"411"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(86643).Z,width:"1097",height:"756"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h3",{id:"24-add-power-monitor"},"2.4 Add Power Monitor"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Monitor"),"\u201d button in the menu bar, and select \u201c",(0,r.kt)("strong",{parentName:"p"},"Frequency-Domain Field and Power"),"\u201d from the drop-down menu. Set the properties of power monitor according to the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(81385).Z,width:"1117",height:"461"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),": Before simulation, please press \u201c",(0,r.kt)("strong",{parentName:"p"},"File"),"\u201d button, and select \u201c",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u201d from drop-down manual, manually. (File -> Save)"),(0,r.kt)("h3",{id:"25-run"},"2.5 Run"),(0,r.kt)("p",null,"Press arrow on the \u201c",(0,r.kt)("strong",{parentName:"p"},"Run"),"\u201d button in the menu bar and select \u201c",(0,r.kt)("strong",{parentName:"p"},"Run FDTD"),"\u201d from drop-down menu. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(79642).Z,width:"118",height:"172"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h3",{id:"26-result-view"},"2.6 Result View"),(0,r.kt)("p",null,"You can check the simulation result via clicking items in the \u201c",(0,r.kt)("strong",{parentName:"p"},"Result View"),"\u201d."),(0,r.kt)("h4",{id:"261-fdtd-monitor-power-monitor-image-tab"},"2.6.1 FDTD Monitor->Power Monitor->Image tab"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(65452).Z,width:"896",height:"642"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("h4",{id:"262-fdtd-monitor--power-monitor-line-tab"},"2.6.2 FDTD Monitor-> Power Monitor->Line tab"),(0,r.kt)("p",null,"In these windows, you can view different plot types, and they are interested in via settings in relative sections."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(70398).Z,width:"1351",height:"972"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003"))))))}c.isMDXComponent=!0},88323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-2959df621609a43ee02db6b8c02a2919.png"},98723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mworkflow-b8928e98d7099439d714253d74728b6a.png"},70398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/RLine-234e99cf2e1c859d5fd4fe905d58dab5.png"},65452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Rpower-591ec9c169df6efe07588da553b63378.png"},8154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addfdtd-56beb15dc72552b5fc2c4e16e33efc18.png"},81385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addmonitor-a082bc91a976054b82bd5aec52eacb51.png"},54959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/advancedOptionsTab-6d44b42304e89b1ed448830f383a0e5e.png"},41287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boundaryConditionTab-89e1ee4603825c8e5a22a75615175e05.png"},57892:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geometryTab-d453b4655e1e358671f523fe06059ad5.png"},97060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/meshSetting-9abd096bb683725308301c8909c82570.png"},89978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modesource-7eb98909cc76430e844780a3f8841612.png"},86643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/modesource1-a38a870ed79ba592a215025725aa7e82.png"},79642:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},12693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tablerect-04fdc28371c18023db28a8cb460ae901.png"},94274:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/threadSettingsTab-9842f206dc0ee30236427cb3919c2a4e.png"},36970:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waveform-937b14e7cecd6563a11cefb58f53489d.png"},55036:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waveform1-a46dd84ba2598cc6195375184c2ef87c.png"},34958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waveform2-28d7f5d7203b1a5c52efa8d048100563.png"},67548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-d5a93c3fcedbcf235de6fd67d3bce39f.png"}}]);