"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},13886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},o="EME Solver",l={unversionedId:"tutorial/4Simulation/3EME",id:"tutorial/4Simulation/3EME",title:"EME Solver",description:"Solver Physics",source:"@site/docs/tutorial/4Simulation/3EME.md",sourceDirName:"tutorial/4Simulation",slug:"/tutorial/4Simulation/3EME",permalink:"/my-website/docs/tutorial/4Simulation/3EME",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/4Simulation/3EME.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"FDTD Solver",permalink:"/my-website/docs/tutorial/4Simulation/2FDTD"},next:{title:"Mesh",permalink:"/my-website/docs/tutorial/4Simulation/4Mesh"}},s={},p=[{value:"1 Tool bar",id:"1-tool-bar",level:2},{value:"1.1 General tab",id:"11-general-tab",level:3},{value:"1.2 EME Setup tab",id:"12-eme-setup-tab",level:3},{value:"1.3 Transverse mesh settings tab",id:"13-transverse-mesh-settings-tab",level:3},{value:"2 Simulation Cases:",id:"2-simulation-cases",level:2},{value:"2.1 Modeling",id:"21-modeling",level:3},{value:"2.1.1 Material database settings",id:"211-material-database-settings",level:4},{value:"2.1.2 Add a rectangle",id:"212-add-a-rectangle",level:4},{value:"2.2 Add EME",id:"22-add-eme",level:3},{value:"2.3 Add EME Port",id:"23-add-eme-port",level:3},{value:"2.4 Add Monitor (EME Profile monitor)",id:"24-add-monitor-eme-profile-monitor",level:3},{value:"2.5 Run &amp; Result View",id:"25-run--result-view",level:3},{value:"3 Notes",id:"3-notes",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eme-solver"},"EME Solver"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solver Physics"),": As an attractive substitute to FDTD-based techniques for numerical solutions of Maxwell's equations, the EME method operates in the frequency domain and is highly dept at dealing with scenarios involving long propagation distances. The EME method comprises two significant steps:"),(0,r.kt)("p",null,"\u2460\u3000In the first step of the EME method, the electromagnetic fields are decomposed into a series of eigenmodes using a modal approach. To compute these modes, the geometry is partitioned into several cells, and the modes at the interfaces between adjacent cells are calculated. The next step involves constructing scattering matrices for each section by matching the tangential E and H fields at the cell boundaries. This is the most computationally intensive stage of the EME calculation, and it employs the FDE solver;"),(0,r.kt)("p",null,"\u2461\u3000After completing the first two steps, the simulation enters the analysis mode, allowing for the bi-directional propagation of the solution for each section to compute the S matrix of the entire device. If needed, the internal fields can be reconstructed as well. This stage can be executed expeditiously. Furthermore, once in analysis mode, the propagation distance of each section can be altered as desired, without the need to repeat step 1. This is why the EME method is highly efficient when scanning the lengths of devices. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Feature Description"),": Adds or sets EME simulation area and boundary conditions."),(0,r.kt)("h2",{id:"1-tool-bar"},"1 Tool bar"),(0,r.kt)("h3",{id:"11-general-tab"},"1.1 General tab"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(81621).Z,width:"1082",height:"751"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("p",null,"1)",(0,r.kt)("strong",{parentName:"p"},"Algorithm"),": The type of mesh algorithm used (Currently\uff0cit is not available ). "),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"Solver Type"),": \u201c",(0,r.kt)("strong",{parentName:"p"},"3D X Property"),"\u201d is currently the option, two-dimensional solver is not available present."),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Background Material")," : The combo box allow user to set the background material from drop down menu. Project, object defined dielectric, and go to material library can be operated."),(0,r.kt)("p",null,"\u2460",(0,r.kt)("strong",{parentName:"p"},"Project"),": The background material inherits from the project\u2019s material setting."),(0,r.kt)("p",null,"\u2461",(0,r.kt)("strong",{parentName:"p"},"Object Defined Dielectric"),": The object-defined dielectric material, a default setting if user forgets to set background material, is defined for the current object background material setting, and once the user chooses this option, he does not need to set any material from the standard, user, or project material database. And the object-defined dielectric will not be loaded into any material database."),(0,r.kt)("p",null,"\u2462",(0,r.kt)("strong",{parentName:"p"},"Go to Material Library"),": If selected, user can go to standard material database to set background material according to needs. And the selected material relative property from standard material database will be displayed in the material data list."),(0,r.kt)("p",null,"\u2463",(0,r.kt)("strong",{parentName:"p"},"Index"),": This refers to the refractive index of the ambient background medium inside the simulation window (Default: 1)"),(0,r.kt)("p",null,"4)",(0,r.kt)("strong",{parentName:"p"},"Set frequency/wavelength"),": Sets the frequency (Default: 193.414 THz) or wavelength (Default:1.55 \u03bcm) to calculate."),(0,r.kt)("p",null,"5)",(0,r.kt)("strong",{parentName:"p"},"Use Wavelength Sweep off/on"),": If checked, the wavelength sweep function is on, which used for wavelength sweep in EME analysis window."),(0,r.kt)("h3",{id:"12-eme-setup-tab"},"1.2 EME Setup tab"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(14485).Z,width:"795",height:"861"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("p",null,"1)",(0,r.kt)("strong",{parentName:"p"},"Y, Z"),": The center position of the simulation region."),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"Y Min, Y Max"),": Y min, Y max position."),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Z Min, Z Max"),": Z min, Z max position."),(0,r.kt)("p",null,"4)",(0,r.kt)("strong",{parentName:"p"},"Y Span, Z Span"),": Y, Z span of the simulation region."),(0,r.kt)("p",null,"5)",(0,r.kt)("strong",{parentName:"p"},"Cell geometry"),"\uff1a"),(0,r.kt)("p",null,"\u2460",(0,r.kt)("strong",{parentName:"p"},"X Min"),": Minimum x position of solver region. The first cell group starts from this position."),(0,r.kt)("p",null,"\u2461",(0,r.kt)("strong",{parentName:"p"},"Energy Conversation"),": This admits you to choose the energy conservation type for the Page S-matrix. The Page S-matrix is calculated at every Page of the neighboring cells accounting for the modes at the left- and right- hand sides of the Page. Two options \u201cNone\u201d and \u201cMake Passive\u201d are available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"->",(0,r.kt)("strong",{parentName:"p"},"None"),": Energy conservation is not applied.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"->",(0,r.kt)("strong",{parentName:"p"},"Make passive"),": Nothing is done when the norm of the Page S-matrix is less than or equal to 1; otherwise the norm is mandatorily altered to be identical to 1."))),(0,r.kt)("p",null,"\u2462",(0,r.kt)("strong",{parentName:"p"},"Unified Mode Settings"),': When the switch is on, the user can modify only the first line of "Number of Modes", the values in other lines of "Number of Modes" are forced to be identical to the first line in the Cell Group Definition. If the switch is off, everything in "Number of Modes" can be modified as freely as the user wishes.'),(0,r.kt)("p",null,"\u2463",(0,r.kt)("strong",{parentName:"p"},"Cell Group Definition"),": This enables you to specify the span of every cell group, the number of cells in every cell group, which sub-cell method to employ (None or Sub Cell), and the number of modes to be solved for each cell. Besides, it displays the cell range of the group, as well as the begin and end positions of the cell group."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"->",(0,r.kt)("strong",{parentName:"p"},"Number of Modes"),":This value cannot be beyond the maximum amount of stord modes. Otherwise, it will be mandatorily altered to be identical to the latter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"->",(0,r.kt)("strong",{parentName:"p"},"Delete button"),": Clears the custom settings for the selected cell group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"->",(0,r.kt)("strong",{parentName:"p"},"Add button"),": Allow you to make custom settings for the selected cell group."))),(0,r.kt)("p",null,"\u2464",(0,r.kt)("strong",{parentName:"p"},"Display Groups"),": Displays cell boundaries in the CAD."),(0,r.kt)("p",null,"\u2465",(0,r.kt)("strong",{parentName:"p"},"Periodicity tab"),"\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(58934).Z,width:"1073",height:"399"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("p",null,"\u2460",(0,r.kt)("strong",{parentName:"p"},"Periodicity Group Definition"),': This defines cell regions with periodic features and specifies the number of periods in each of them. The "start cell group" and the "end cell group" refer to the sequential numbers from "cell group definition".'),(0,r.kt)("h3",{id:"13-transverse-mesh-settings-tab"},"1.3 Transverse mesh settings tab"),(0,r.kt)("p",null,"Since the propagation in the EME solver is along the x-direction, the mesh settings are applicable merely along the y and/or z axes, depending on the solver type (3DX2D)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2002","\u2003","\u2003","\u2003","\u2003","\u2003",(0,r.kt)("img",{src:a(76817).Z,width:"960",height:"457"}),"\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")))),(0,r.kt)("p",null,"1)",(0,r.kt)("strong",{parentName:"p"},"Mesh definition"),": Currently there is only the option of global uniform mesh step, meaning that the mesh steps are uniform throughout the entire simulation volume."),(0,r.kt)("p",null,"2)",(0,r.kt)("strong",{parentName:"p"},"Define Y Mesh/ Define Z Mesh"),": Maximum mesh step."),(0,r.kt)("p",null,"3)",(0,r.kt)("strong",{parentName:"p"},"Mesh Refinement"),": Select an approach to calculate refined mesh properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2460",(0,r.kt)("strong",{parentName:"p"},"Staircase"),": Any point inside a Yee cell might be evaluated to determine of which material it is consisted, and the properties for that single material are used for depicting the E field at that point. As a consequence, the discretized structure hardly accounts for structure variations that arises inside a single Yee cell, therefore leading to a ``Staircase'' permittivity grid which agrees exactly with the Cartesian grid. Besides, all layers are effectively shifted to the closest E field position inside the Yee cell, implying that there is no way for the thickness to be resolved as finer than dx.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2461",(0,r.kt)("strong",{parentName:"p"},"Curve Mesh"),": Effective permittivities can be derived via a contour path recipe, which effectively takes the dielectric interface shapes, as well as material weight inside a cell into account."))),(0,r.kt)("p",null,"4)",(0,r.kt)("strong",{parentName:"p"},"Mesh Grading"),": In the case of a non-uniform mesh, Mesh Grading specifies the maximum ratio at which a neighboring grid can be enlarged or reduced. For instance, if dx(k+1) = c*dx(k), then 1/(GRADING FACTOR) <= c <= GRADING FACTOR. It is recommended that 1 <= GRADING FACTOR <= sqrt(2). (Default: 1.2)"),(0,r.kt)("p",null,"5)",(0,r.kt)("strong",{parentName:"p"},"DY/DZ"),": Maximum mesh step settings . The default setting is 0.02 \u03bcm."),(0,r.kt)("p",null,"6)",(0,r.kt)("strong",{parentName:"p"},"Minimum mesh step settings"),": This indicates the minimum mesh step for the whole region managed by the solver (including also the mesh override regions). (Default: 0.0001\u03bcm)."),(0,r.kt)("h2",{id:"2-simulation-cases"},"2 Simulation Cases:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objectives"),": In this example, we show how to use Max-Optics to run EME and view the simulation result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Works Flow"),":"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme1&#39;",src:a(94567).Z,width:"350",height:"641"}))),(0,r.kt)("h3",{id:"21-modeling"},"2.1 Modeling"),(0,r.kt)("h4",{id:"211-material-database-settings"},"2.1.1 Material database settings"),(0,r.kt)("p",null,'Press on "',(0,r.kt)("strong",{parentName:"p"},"Material"),'" button, the material database window will bring out, and import new materials from standard material database or user material database into project material database according to user needs.( when import success a prompt information will pop out informs that ',(0,r.kt)("inlineCode",{parentName:"p"},"Import Success. Success: 1/1, Fail: 0/1 (duplicated)"),"."),(0,r.kt)("p",null,"Material work flows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme2&#39;",src:a(74788).Z,width:"1114",height:"720"}))))),(0,r.kt)("h4",{id:"212-add-a-rectangle"},"2.1.2 Add a rectangle"),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cStructures\u201d")," button, and select a Rectangle from the drop-down menu. Set the\nproperties of the substrate rectangle according to the following table."),(0,r.kt)("p",null,"Menu bar->Structures->Rectangle->Geometry->Material"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(50956).Z,width:"1069",height:"305"}))))),(0,r.kt)("h3",{id:"22-add-eme"},"2.2 Add EME"),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cSimulation\u201d")," button, and select the ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME\u201d")," from the drop-down menu, and set\nthe properties according to the following table."),(0,r.kt)("div",{class:"centered"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(63915).Z,width:"1071",height:"735"})))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General Tab"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(14457).Z,width:"1077",height:"681"}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EME Setup Tab"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme4&#39;",src:a(97397).Z,width:"1210",height:"720"}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transverse Mesh Setting Tab"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme5&#39;",src:a(8822).Z,width:"1083",height:"684"}))))),(0,r.kt)("h3",{id:"23-add-eme-port"},"2.3 Add EME Port"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(25975).Z,width:"1126",height:"687"})))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of EME Port 1(Left)"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme6&#39;",src:a(6963).Z,width:"1166",height:"720"}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of EME Port 2(Right)"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme7&#39;",src:a(28221).Z,width:"1214",height:"720"}))))),(0,r.kt)("h3",{id:"24-add-monitor-eme-profile-monitor"},"2.4 Add Monitor (EME Profile monitor)"),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cMonitor\u201d")," button and select ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME Profile Monitor\u201d")," from drop-down manual.\nAnd set the properties according to the following table"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme3&#39;",src:a(26345).Z,width:"1194",height:"316"})))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geometry Tab of Profile Monitor"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme8&#39;",src:a(23302).Z,width:"1208",height:"720"}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")," Before simulation, please press ",(0,r.kt)("strong",{parentName:"p"},"\u201cFile\u201d")," button, and select ",(0,r.kt)("strong",{parentName:"p"},"\u201cSave\u201d")," from drop-down manual,\nmanually. (File -> Save)"),(0,r.kt)("h3",{id:"25-run--result-view"},"2.5 Run & Result View"),(0,r.kt)("p",null,"Press arrow on the \u201cRun\u201d button and select \u201cRun EME\u201d from drop-down menu."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme9&#39;",src:a(98896).Z,width:"2071",height:"985"}))))),(0,r.kt)("p",null,"After running, the ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME Analysis\u201d")," window will pop out, in this window, you can run ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME Propagate\u201d"),", ",(0,r.kt)("strong",{parentName:"p"},"\u201cPropagation Sweep\u201d")," and ",(0,r.kt)("strong",{parentName:"p"},"\u201cWavelength Sweep\u201d")," via press buttons respectively."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme10&#39;",src:a(14537).Z,width:"1147",height:"631"}))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme11&#39;",src:a(50091).Z,width:"1144",height:"628"}))))),(0,r.kt)("p",null,"\u2460 ",(0,r.kt)("strong",{parentName:"p"},"EME propagate")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME propagate\u201d")," button, and you can view the EME propagate result via clicking EME result in Result View."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme12&#39;",src:a(28429).Z,width:"897",height:"641"}))))),(0,r.kt)("p",null,"You can view different plot types via ",(0,r.kt)("strong",{parentName:"p"},"\u201cScalar Operation\u201d")," options, and in attributes list, you can\nchoose parameter which is interested in to view"),(0,r.kt)("div",{class:"centered"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;eme13&#39;",src:a(21807).Z,width:"339",height:"524"}))),(0,r.kt)("p",null,"\u2461 ",(0,r.kt)("strong",{parentName:"p"},"Run Propagation sweep")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cPropagation Sweep\u201d")," button, and after running, ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME Propagation Sweep\u201d")," window will pop out, you can view the result about Propagation Sweep. User can view different view via clicking options in S11, S12, S21 or S22 port box."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme14&#39;",src:a(71125).Z,width:"889",height:"639"}))))),(0,r.kt)("p",null,"\u2462 ",(0,r.kt)("strong",{parentName:"p"},"Run Wavelength Sweep")),(0,r.kt)("p",null,"Press arrow on the ",(0,r.kt)("strong",{parentName:"p"},"\u201cWavelength Sweep\u201d")," button, and after running, ",(0,r.kt)("strong",{parentName:"p"},"\u201cEME Wavelength Sweep\u201d")," window will pop out, you can view the result about Wavelength Sweep."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme15&#39;",src:a(36897).Z,width:"891",height:"638"}))))),(0,r.kt)("p",null,"You can view different results via the options in S11/S12/S21/S22 Port box."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme16&#39;",src:a(31160).Z,width:"893",height:"641"}))))),(0,r.kt)("p",null,"\u2463 ",(0,r.kt)("strong",{parentName:"p"},"Matrix Index Mapping")),(0,r.kt)("p",null,"Show the information about the mode corresponding to the port."),(0,r.kt)("p",null,"\u2464 ",(0,r.kt)("strong",{parentName:"p"},"zbf Export")),(0,r.kt)("p",null,"The EME port and EME cell results support exporting mode information in a zbf format file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Works flows: Result View->EME port/EME Cell->Mode Fields->Export ->OK"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"&#39;eme17&#39;",src:a(93646).Z,width:"1066",height:"691"}))))),(0,r.kt)("h2",{id:"3-notes"},"3 Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The simulation cases involved in the manual are only limited to guiding user how to use Max-Optics Studio silicon-based passive product running simulation, not for other purposes;")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The screenshot pictures are gained, under Hardware environment: Name: LAPTOP-MHBJS336 (MateB ook 14), Windows11, and software environment: Google browser, version:108.0.5359.125."))))}c.isMDXComponent=!0},94567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme1-a39e66fbb1ab3149c30c43825f0f9bb2.png"},14537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme10-42598a5c0a8497c8088d846db4bcbfcf.png"},50091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme11-6e4aeafec082a19c69461cf0fc328f16.png"},28429:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme12-bc3064285418ed5f4b36c4a2ea1348eb.png"},21807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme13-f3dc45a4aa3301ff7d5e88d9e3878a57.png"},71125:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme14-ee3ae0b9542a5eb809623f9d1080547b.png"},36897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme15-271628fdf4280bf0e3705fba7bfd8571.png"},31160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme16-3bd3f0a11c1057310729047d0041470c.png"},93646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme17-5f48161c42c42b04e3d80214a20f8dc0.png"},74788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme2-3d427fee8de8d9e5394a4175482a55b7.png"},14457:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme3-13c3a6c962ee3c8f8010c07a94c10d1d.png"},97397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme4-6ef08b20fe27e48acb474cb53ea45d2f.png"},8822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme5-ef7d4d7546cefef60776e68145b2fcff.png"},6963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme6-3fdff17d070a90459d68a176e2414fdd.png"},28221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme7-5cbd6caff45451ef32202de18e0f072d.png"},23302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme8-4c4a894d4afcbfeccd3be61f1f490b13.png"},98896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eme9-61865fde73e71b5225c50c6b778fa014.png"},81621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EME1-bc1dd9e1fdd80b281b241d79e16100d9.png"},58934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Period-0d3858d307d819f34eb17522337fe8ec.png"},63915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addeme-98fae2d4c5c3cbf3f26f797547d13566.png"},25975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addemeport-7b95d0d6b6b0ba7e73656fbe71bf44db.png"},26345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addmonitor-3b2a783fd063795cf62405d25f40666e.png"},50956:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rect-e572b68fa8006a5ead660defa422a429.png"},14485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/setuptab-83f66410d51de1085af3bbc0ee6a3b3c.png"},76817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transtab-361857aa2b4ac7e74bc00dc44721b30f.png"}}]);