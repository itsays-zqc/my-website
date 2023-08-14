"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[863],{9913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var i=a(7462),r=(a(7294),a(3905));a(7617);const n={},s="How to set mesh?",l={unversionedId:"faq/physics/mesh",id:"faq/physics/mesh",title:"How to set mesh?",description:"1 Mesh type",source:"@site/docs/faq/physics/mesh.md",sourceDirName:"faq/physics",slug:"/faq/physics/mesh",permalink:"/my-website/docs/faq/physics/mesh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/physics/mesh.md",tags:[],version:"current",frontMatter:{},sidebar:"faqSidebar",previous:{title:"How to set the position of the light source and monitor?",permalink:"/my-website/docs/faq/physics/location"},next:{title:"What is Mode expansion monitor?",permalink:"/my-website/docs/faq/physics/mode expansion monitor"}},o={},h=[{value:"1 Mesh type",id:"1-mesh-type",level:2},{value:"1.1 Uniform",id:"11-uniform",level:3},{value:"1.2 Auto non-uniform",id:"12-auto-non-uniform",level:3},{value:"2 Mesh type refinement",id:"2-mesh-type-refinement",level:2},{value:"2.1Staircase",id:"21staircase",level:3},{value:"2.2 Curve mesh",id:"22-curve-mesh",level:3},{value:"3 Mesh accuracy",id:"3-mesh-accuracy",level:2},{value:"4 Mesh factor",id:"4-mesh-factor",level:2}],d={toc:h},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-set-mesh"},"How to set mesh?"),(0,r.kt)("h2",{id:"1-mesh-type"},"1 Mesh type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Solver"),(0,r.kt)("th",{parentName:"tr",align:null},"FDE"),(0,r.kt)("th",{parentName:"tr",align:null},"EME"),(0,r.kt)("th",{parentName:"tr",align:null},"FDTD"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uniform"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"The grid size in the x, y, and z directions are the same in the structure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto non-uniform"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'The size of the non-uniform grid is determined by "cells per wavelength", and the grid size is the wavelength in the structure divided by "cells per wavelength".')))),(0,r.kt)("h3",{id:"11-uniform"},"1.1 Uniform"),(0,r.kt)("p",null,"The grid is evenly distributed in the x, y, and z directions, and the step size of the grid is set by the user."),(0,r.kt)("h3",{id:"12-auto-non-uniform"},"1.2 Auto non-uniform"),(0,r.kt)("p",null,'Global automatic non-uniform grid distribution, with "cells per wavelength" determining the grid size at different positions. The grid division uses the same "cells per wavelength", so the grid step size is smaller in areas with high refractive index.'),(0,r.kt)("h2",{id:"2-mesh-type-refinement"},"2 Mesh type refinement"),(0,r.kt)("p",null,'According to the different ways in which the refractive index of materials is filled in hexahedral and rectangular grids, they can be divided into "staircase" and "curve mesh" types of grids.'),(0,r.kt)("h3",{id:"21staircase"},"2.1Staircase"),(0,r.kt)("p",null,"When multiple materials appear in a grid, one of them will be selected as the filling material for the grid. The size of the divided grid is too large, which can easily create a stepped shape in curved structures. As shown in the figure below, the refractive index distribution of the structure is observed, and a stepped shape appears at the boundary of the curved waveguide."),(0,r.kt)("h3",{id:"22-curve-mesh"},"2.2 Curve mesh"),(0,r.kt)("p",null,'In the case of multiple materials in the grid, the equivalent refractive index within the grid is calculated based on the electromagnetic field equation at the boundary, and then filled into the grid. Using "curve mesh" can significantly improve the accuracy of calculations with the same grid accuracy.\n',(0,r.kt)("img",{src:a(2318).Z,width:"5669",height:"2303"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The refractive index of different materials in the "staircase" type of mesh varies directly at the interface, while the interface of the "curve mesh" material is gradient.'),(0,r.kt)("li",{parentName:"ul"},'Under the same grid size, using a "curve mesh" type of grid is more accurate in characterizing the structure, and the accuracy of the calculation results is significantly improved. From the following example, it can be seen that using a grid size of "cells per wavelength" of 15 for the "curve mesh" type mesh is equivalent to using a grid size of "cells per wavelength" of 22 for the "staircase" type mesh, but the simulation time is saved by four times.'),(0,r.kt)("li",{parentName:"ul"},"The \u201ccurve mesh\u201d is applicable to FDE, EME, and FDTD solvers.")),(0,r.kt)("h2",{id:"3-mesh-accuracy"},"3 Mesh accuracy"),(0,r.kt)("p",null,"The mesh accuracy represents the size of the mesh, and the commonly used grid accuracy is shown in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},'Mesh Accuracy of "Gloden"'),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"3"),(0,r.kt)("th",{parentName:"tr",align:null},"4"),(0,r.kt)("th",{parentName:"tr",align:null},"5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003",'cells per wavelength of "Max-optics" ',"\u2003","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003","6","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003","10","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003","14","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003","18","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2003","\u2003","22","\u2003","\u2003")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'To meet the accuracy requirements of the calculation, it is recommended to set "cells per wavelength" to 14 or above.'),(0,r.kt)("li",{parentName:"ol"},'If we only focus on the transmission rate, it is not necessary to set "cells per wavelength" above 22. Generally, the transmission rate set to 18 is within \xb10.01 of the transmission rate error for higher grid accuracy.'),(0,r.kt)("li",{parentName:"ol"},'If more accurate reflectivity (-60dB) is required, "cells per wavelength" should be set to be greater than 26.')),(0,r.kt)("h2",{id:"4-mesh-factor"},"4 Mesh factor"),(0,r.kt)("p",null,"The grid growth factor is only applicable to non-uniform grids and is used to control the rate of grid size change at the junction of different sizes of grids.To ensure the accuracy of the calculation results, the change rate of the grid should not be too large, and the default value of mesh factor is 1.2."),(0,r.kt)("p",null,"In the area where the global mesh and local mesh are connected, the gradient trend of grid size with different growth factors is as follows. It is obvious that the larger the growth factor, the faster the grid change rate in the connected areas, and the corresponding number of meshs is smaller. If the size of the local area network grid is a, the size of the global grid is b, and the grid factor is, then there will be a grid gradient process of a, a ",(0,r.kt)("em",{parentName:"p"}," m, a ")," m ^ 2, a * m ^3, '''b in the connected areas."),(0,r.kt)("p",null,"The mesh factor cannot be too small. If the mesh factor is 1, the grid will be evenly distributed throughout the entire space without any changes in size, and the number of meshs will increase significantly."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3078).Z,width:"5669",height:"2303"})))}u.isMDXComponent=!0},3078:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mesh_factor-889b1bf8105d8ba197dad1d5fe187108.png"},2318:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mesh_type-77f8fa3b7290f33ffcfa7a06c35a4eb7.png"}}]);