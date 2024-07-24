"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[287],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:2},o="FDTD Solver",s={unversionedId:"tutorial/Maxoptics_GUI/3Simulation/2FDTD",id:"tutorial/Maxoptics_GUI/3Simulation/2FDTD",title:"FDTD Solver",description:"Solver Physics: The numerical method of computational electrodynamics that provides approximate solutions to the system of Maxwell's equations is known as Finite-Difference Time-Domain (FDTD). It is also referred to as Yee's method, named after Kane S. Yee, a Chinese-American applied mathematician. As a time-domain method, FDTD handles nonlinear material properties in a rather natural way and can cover a wide frequency range by running only a single simulation.",source:"@site/docs/tutorial/Maxoptics_GUI/3Simulation/2FDTD.md",sourceDirName:"tutorial/Maxoptics_GUI/3Simulation",slug:"/tutorial/Maxoptics_GUI/3Simulation/2FDTD",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/3Simulation/2FDTD",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/Maxoptics_GUI/3Simulation/2FDTD.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FDE Solver",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/3Simulation/1FDE"},next:{title:"EME Solver",permalink:"/my-website/docs/tutorial/Maxoptics_GUI/3Simulation/3EME"}},l={},c=[{value:"1 Tool bar",id:"1-tool-bar",level:2},{value:"1.1 General tab",id:"11-general-tab",level:3},{value:"1.2 Geometry tab:",id:"12-geometry-tab",level:3},{value:"1.3 Mesh Settings tab:",id:"13-mesh-settings-tab",level:3},{value:"1.4 Boundary Conditions tab:",id:"14-boundary-conditions-tab",level:3},{value:"1.5 Advanced Options tab:",id:"15-advanced-options-tab",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fdtd-solver"},"FDTD Solver"),(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solver Physics"),": The numerical method of computational electrodynamics that provides approximate solutions to the system of Maxwell's equations is known as Finite-Difference Time-Domain (FDTD). It is also referred to as Yee's method, named after Kane S. Yee, a Chinese-American applied mathematician. As a time-domain method, FDTD handles nonlinear material properties in a rather natural way and can cover a wide frequency range by running only a single simulation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features Description"),": Adds or sets FDTD simulation region and boundary conditions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes")," : When FDTD solver is selected, user cannot add FDE solver and EME solver at the same time."),(0,i.kt)("h2",{id:"1-tool-bar"},"1 Tool bar"),(0,i.kt)("h3",{id:"11-general-tab"},"1.1 General tab"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&#39;fde1&#39;",src:a(88323).Z,width:"1204",height:"753"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Dimension"),": Number of dimensions of the simulation region. (Default: 3D)"),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Using Optical Path Estimate Time"),": It is the switch button that the estimation of simulation time based on optical path."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Simulation Time"),": Simulation time indicates the maximum duration of the simulation to be implemented. In reality the simulation may end earlier when some of the auto-shutoff conditions are satisfied before running till this maximum simulation time. (Default: 1000 fs)"),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Background Material"),": The combo box allows user to set the background material from drop down menu. \u201cProject\u201d, \u201cObject Defined Dielectric\u201d, and \u201cGo to Material Library\u201d can be operated."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"Project"),": The \u201cBackground Material\u201d can be selected from the \u201cProject\u201d sublist in the \u201cMaterial Database\u201d based upon the needs."),(0,i.kt)("p",null,"6) ",(0,i.kt)("strong",{parentName:"p"},"Object Defined Dielectric"),": The object-defined dielectric material, a default setting if user forgets to set background material, is defined for the current object background material setting, and once the user chooses this option, he does not need to set any material from the standard, user, or project material database. And the object-defined dielectric will not be loaded into any material database."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Go to Material Library"),": If selected, user can go to standard material database to set background material according to needs. And the selected material relative property from standard material database will be displayed in the material data list."),(0,i.kt)("p",null,"7) ",(0,i.kt)("strong",{parentName:"p"},"Refractive Index"),": The refractive index of the surrounding, background medium in the simulation region.(Default: 1)"),(0,i.kt)("h3",{id:"12-geometry-tab"},"1.2 Geometry tab:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(57892).Z,width:"797",height:"497"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"X, Y, Z"),": The center position of the simulation region."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"X Min, X Max:")," X min, X max position."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Y Min, Y Max:")," Y min, Y max position."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Z Min, Z Max:")," Z min, Z max position."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"X Span, Y Span, Z Span:")," X, Y, Z span of the simulation region."),(0,i.kt)("h3",{id:"13-mesh-settings-tab"},"1.3 Mesh Settings tab:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(97060).Z,width:"797",height:"496"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Mesh Type:")," Algorithms for generating the mesh are available, to be explained as follows:"),(0,i.kt)("p",null,"\u2460\u3000",(0,i.kt)("strong",{parentName:"p"},"Auto non-uniform (Default)"),": By default, a non-uniform mesh is generated according to the mesh accuracy."),(0,i.kt)("p",null,"\u2461\u3000",(0,i.kt)("strong",{parentName:"p"},"Uniform"),": A uniform mesh is used over the whole simulation region, disregarding any material properties. An override region forces the specified mesh size everywhere instead of inside the override region only, whenever it is used together with this option."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Mesh Accuracy:")," Mesh Accuracy indicates the number of cells per wavelength. (Default: 15)."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Minimum Mesh Step Settings:")," Minimum Mesh Step indicates the absolute minimum grid size inside the entire solver window."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Mesh Refinement:")," Select an approach to calculate refined mesh properties."),(0,i.kt)("p",null,"\u2460\u3000",(0,i.kt)("strong",{parentName:"p"},"Staircase"),": Any point inside a Yee cell might be evaluated to determine of which material it is consisted, and the properties for that single material are used for depicting the E field at that point. As a consequence, the discretized structure hardly accounts for structure variations that arises inside a single Yee cell, therefore leading to a \u201cStaircase\u201d permittivity grid which agrees exactly with the Cartesian grid. Besides, all layers are effectively shifted to the closest E field position inside the Yee cell, implying that there is no way for the thickness to be resolved as finer than dx.thickness cannot be resolved to better than dx."),(0,i.kt)("p",null,"\u2461\u3000",(0,i.kt)("strong",{parentName:"p"},"Curve Mesh"),": Effective permittivities can be derived via a contour path recipe, which effectively takes the dielectric interface shapes, as well as material weight inside a cell into account."),(0,i.kt)("p",null,"\u2462\u3000",(0,i.kt)("strong",{parentName:"p"},"Grading"),": The Grading factor specifies the biggest ratio of the neighboring spatial grids. (Default: 1.2)"),(0,i.kt)("h3",{id:"14-boundary-conditions-tab"},"1.4 Boundary Conditions tab:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(41287).Z,width:"792",height:"280"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"PML:")," A PML (Perfectly Matched Layer) mimics in essence an ideally open (or reflectionless) boundary upon which is  designed to absorb all the incident electromagnetic waves with impedance matched materials to eliminate reflections."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"PEC:")," PEC boundary conditions are introduced to mimic boundaries that behave exactly like a Perfect Electric Conductor (PEC). Metal boundaries reflect all the electromagnetic waves, and hence no energy can get through a simulation volume bounded by metals, simulating ideal metal boundaries, such as metal waveguide, reflector antenna, etc."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Symmetric/Anti-Symmetric"),": The Symmetric or Anti-Symmetric Boundary condition is used for reducing simulation time by the Electromagnetic fields which is symmetric through the middle plane of the simulation region. The specific selection between \u201cSymmetric\u201d and \u201cAnti-Symmetric\u201d is according to the relationship of source polarization and symmetric plane. If the normal of symmetric plane is tangential to source polarization, choose the \u201cSymmetric\u201d option. Otherwise, choose the \u201cAnti-symmetric\u201d option."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"PML settings:")," The properties of every PML boundary can be set separately. However if the state of the Same Settings on All Boundary Conditions is enabled, all PML boundaries will possess the same profile by sharing the common properties in the table, including \u201cLayers\u201d, \u201cKappa\u201d, \u201cAlpha\u201d, \u201cSigma\u201d, \u201cPolynomial\u201d, \u201cAlpha Polynomial\u201d, \u201cMin Layers\u201d, and \u201cMax Layers\u201d. And you can also customize the PML Boundary in Profile\uff0cwhich concludes \u201cCustom\u201d and \u201cStandad\u201d two selections."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"X/Y/Z min/ max PML:")," These fields describe the boundary conditions to be applied along the perimeter of the simulation region."),(0,i.kt)("h3",{id:"15-advanced-options-tab"},"1.5 Advanced Options tab:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(54959).Z,width:"797",height:"499"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Auto Shutoff :")," Stops the simulation when the energy in the simulation goes below the \u201cAuto Shutoff Min\u201d when the \u201cUse Early Shutoff \u201d state is on , you can set min auto shutoff (Default: 1e-4) and down sample time (Default: 200)"),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Down sample time:")," Under the dt time step down sampling, check whether satisfying the auto shutoff conditions. (Default: 200, and 10 <= it <= 1000)"),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Live Slice Field Display Settings")),(0,i.kt)("p",null,"\u2460 ",(0,i.kt)("strong",{parentName:"p"},"Show Field:")," Real-time filed slice display switch. (Default: on)"),(0,i.kt)("p",null,"\u2461 ",(0,i.kt)("strong",{parentName:"p"},"Select Field Section:")," Combo box allows you to choose from a list of 2D planes normal to the axes for field display. ( 2D Z Normal by default)"),(0,i.kt)("p",null,"\u2462\u3000",(0,i.kt)("strong",{parentName:"p"},"Position"),"\uff1aThe position of slice (0 \u03bcm by default)"),(0,i.kt)("p",null,"\u2463\u3000",(0,i.kt)("strong",{parentName:"p"},"Select Component"),"\uff1aCombo box allows you to choose from a list of the existing field components ( Ex by default)"),(0,i.kt)("p",null,"\u2464\u3000",(0,i.kt)("strong",{parentName:"p"},"Down sample time"),": The time step down sampling for displaying field.(200 fs by default)"))))}p.isMDXComponent=!0},88323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-461e08fcdb5986d2c198fa97e40de1a9.png"},54959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/advancedOptionsTab-228ef2c56bd79c912cedbae6049eb0e9.png"},41287:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boundaryConditionTab-9257e897544092e1c836f06011e385d9.png"},57892:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geometryTab-240a8e6e9d64f8ebf32541a30a5cace2.png"},97060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/meshSetting-9dc0b56aeca1502dc381ffde87594d97.png"}}]);