"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9965],{87259:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>k});var l=e(87462),i=(e(67294),e(3905)),r=e(87617);const n={sidebar_position:1},s="Material",d={unversionedId:"tutorial/1Material",id:"tutorial/1Material",title:"Material",description:"Features Description: The Global Material Database allows for the definition of complex materials using experimental data or parameterized models. The Material Database stores the material data to be used in the simulation. It also provides an interface to change material properties like color, mesh order, and fit parameters. User could import materials from \u201cStandard\u201d database to \u201cUser\u201d and \u201cProject\u201d material database, and also from \u201cUser\u201d material database to \u201cProject\u201d material database.",source:"@site/docs/tutorial/1Material.md",sourceDirName:"tutorial",slug:"/tutorial/1Material",permalink:"/my-website/docs/tutorial/1Material",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/1Material.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Structure",permalink:"/my-website/docs/tutorial/3Structure"}},o={},k=[{value:"1 Standard Material Database",id:"1-standard-material-database",level:2},{value:"1.1 Material List",id:"11-material-list",level:3},{value:"1.2 Materials in the Standard Material Database",id:"12-materials-in-the-standard-material-database",level:3},{value:"1.3 Material Properties:",id:"13-material-properties",level:3},{value:"1.1.3.1 Material Data &amp; Model Fitting",id:"1131-material-data--model-fitting",level:4},{value:"2 User Material Database",id:"2-user-material-database",level:2},{value:"2.1 Material List",id:"21-material-list",level:3},{value:"2.2 Material Properties",id:"22-material-properties",level:3},{value:"2.2.1 Material Data &amp; Model Fitting",id:"221-material-data--model-fitting",level:4},{value:"3 Project Material Database",id:"3-project-material-database",level:2}],u={toc:k},m="wrapper";function p(t){let{components:a,...n}=t;return(0,i.kt)(m,(0,l.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"material"},"Material"),(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features Description:")," The Global Material Database allows for the definition of complex materials using experimental data or parameterized models. The Material Database stores the material data to be used in the simulation. It also provides an interface to change material properties like color, mesh order, and fit parameters. User could import materials from \u201cStandard\u201d database to \u201cUser\u201d and \u201cProject\u201d material database, and also from \u201cUser\u201d material database to \u201cProject\u201d material database.")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Standard & User & Project Material Database:"),"Material database includes standard, user, and project material database.")),(0,i.kt)("h2",{id:"1-standard-material-database"},"1 Standard Material Database"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The standard material database includes two parts, one is material list, and another is material property plot. The material list includes a number of common materials, when creating a new simulation, the standard database will be loaded. And the materials in the standard material database can be imported into \u201cUser\u201d and \u201cProject\u201d material database. The default materials cannot be edited directly. ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&#39;figure 1&#39;",src:e(80753).Z,title:"figure 1",width:"1510",height:"1157"}))))),(0,i.kt)("h3",{id:"11-material-list"},"1.1 Material List"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&#39;figure 2&#39;",src:e(86895).Z,width:"965",height:"674"}))))),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ID")," : ID"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name")," : Material Name"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mesh Oder"),": Decides how overlapping objects are meshed in the simulation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Color")," : Material Color"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Type")," : Types of material, three types are included, there are Lossy material, Lossless material and List data as follows.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lossy Material")," : Lossy Material"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lossless Material")," : Lossless Material (insulating material)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"List Data")," : Materials whose dielectric permittivity changes with wavelength settings, displayed in tabular form."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Last Modified")," :Last modified time"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Import"),": Import materials to user or project database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Export"),": Export materials according to user needs."))),(0,i.kt)("h3",{id:"12-materials-in-the-standard-material-database"},"1.2 Materials in the Standard Material Database"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The following materials are included in the standard material database.")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"ID"),(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Mesh Order"),(0,i.kt)("th",null,"Type"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"1"),(0,i.kt)("td",null,"Air"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"Lossless Material")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"Al (Aluminium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"3"),(0,i.kt)("td",null,"Al (Aluminium) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"4"),(0,i.kt)("td",null,"Au (Gold) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"5"),(0,i.kt)("td",null,"Au (Gold) - Johnson and Christy"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"6"),(0,i.kt)("td",null,"Au (Gold) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"7"),(0,i.kt)("td",null,"Ge (Germanium) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"8"),(0,i.kt)("td",null,"Ge (Germanium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"9"),(0,i.kt)("td",null,"Si (Silicon) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"10"),(0,i.kt)("td",null,"SiO2 (Glass) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"11"),(0,i.kt)("td",null,"Si3N4 (Silicon Nitride) - Kischkat"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"12"),(0,i.kt)("td",null,"Si3N4 (Silicon Nitride) - Phillip"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"13"),(0,i.kt)("td",null,"Ag (Silver) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"14"),(0,i.kt)("td",null,"Pt (Platinum) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"15"),(0,i.kt)("td",null,"Ta (Tantalum) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"16"),(0,i.kt)("td",null,"TiN - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"17"),(0,i.kt)("td",null,"Cu (Copper) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"18"),(0,i.kt)("td",null,"Fe (Iron) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"19"),(0,i.kt)("td",null,"W (Tungsten) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"20"),(0,i.kt)("td",null,"Ti (Titanium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"21"),(0,i.kt)("td",null,"Ti (Titanium) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"22"),(0,i.kt)("td",null,"Sn (Tin) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"23"),(0,i.kt)("td",null,"H2O (Water) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"24"),(0,i.kt)("td",null,"Cr (Chromium) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"25"),(0,i.kt)("td",null,"Pd (Palladium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"26"),(0,i.kt)("td",null,"InAs - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"27"),(0,i.kt)("td",null,"Ag (Silver) - Palik (1-10um)"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"28"),(0,i.kt)("td",null,"Ag (Silver) - Johnson and Christy"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"29"),(0,i.kt)("td",null,"W (Tungsten) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"30"),(0,i.kt)("td",null,"Fe (Iron) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"31"),(0,i.kt)("td",null,"Cr (Chromium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"32"),(0,i.kt)("td",null,"Al2O3 - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"33"),(0,i.kt)("td",null,"In (Indium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"34"),(0,i.kt)("td",null,"Cu (Copper) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"35"),(0,i.kt)("td",null,"Ni (Nickel) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"36"),(0,i.kt)("td",null,"V (Vanadium) - CRC"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"37"),(0,i.kt)("td",null,"InP - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"38"),(0,i.kt)("td",null,"GaAs - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"39"),(0,i.kt)("td",null,"Ni (Nickel) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"40"),(0,i.kt)("td",null,"Rh (Rhodium) - Palik"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"41"),(0,i.kt)("td",null,"Ag (Silver) - Palik (0-2um)"),(0,i.kt)("td",null,"2"),(0,i.kt)("td",null,"List Data")))),(0,i.kt)("h3",{id:"13-material-properties"},"1.3 Material Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:e(82039).Z,width:"1524",height:"1161"}))))),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Plot"))," : User can view each material property in this plot area via clicking a certain material in material list, also can view properties they are interested in via two options in the bottom of plot. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index) & Im(refractive index), \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity) & Im(relative permittivity), \u03b5\u2019,\u03c3-Re(relative permittivity) & Im(relative permittivity).")),(0,i.kt)("h4",{id:"1131-material-data--model-fitting"},"1.1.3.1 Material Data & Model Fitting"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Material Data tab: User can view each material property in this list via double clicking a certain material in material list. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index) & Im(refractive index), and \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity) & Im(relative permittivity).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Material Data")," "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:e(26674).Z,width:"1525",height:"1185"}))))),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Model Fitting:")," (Currently, the model fitting feature is not available and is still in the development process.)")),(0,i.kt)("h2",{id:"2-user-material-database"},"2 User Material Database"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The User material database, a database that stores materials used by user. The user material database includes two parts, one is material list, and another is material property plot. User can copy or delete a selected material, The materials in the \u201cUser\u201d material database can be imported to the \u201cProject\u201d material database. And users also can export materials according to their needs.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:e(45276).Z,width:"1519",height:"1156"}))))),(0,i.kt)("h3",{id:"21-material-list"},"2.1 Material List"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ID")," : ID"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name")," : Material Name"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mesh Oder"),": Decides how overlapping objects are meshed in the simulation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Color")," : Material Color"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Type")," : Types of material, three types are included, there are Lossy material, Lossless material and List data as follows.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lossy Material")," : Lossy Material"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lossless Material")," : Lossless Material (insulating material)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"List Data")," : Materials whose dielectric permittivity changes with wavelength settings, displayed in tabular form."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Last Modified")," :Last modified time"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Import"),": Import materials to user or project database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Export"),": Export materials according to user needs."))),(0,i.kt)("h3",{id:"22-material-properties"},"2.2 Material Properties"),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(63498).Z,width:"1507",height:"1157"})),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Plot"))," : User can view each material property in this plot area via clicking a certain material in material list, also can view properties they are interested in via two options in the bottom of plot. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index)&Im(refractive index), \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity)&Im(relative permittivity), \u03b5\u2019,\u03c3-Re(relative permittivity)&Im(relative permittivity)."),(0,i.kt)("h4",{id:"221-material-data--model-fitting"},"2.2.1 Material Data & Model Fitting"),(0,i.kt)("p",null,"Material Data Tab: User can view each material property in this list via double clicking a certain material in material list. Material properties include \u201cColor\u201d, \u201cName\u201d, \u201cMesh Order\u201d, \u201cWavelength\u201d, \u201cFrequency\u201d, \u201cn,k\u201d-Re(refractive index)&Im(refractive index), and \u201c\u03b5r\u2032,\u03b5r\u2033\u201d-Re(relative permittivity)&Im(relative permittivity)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Anisotropy"))," : Two options in this drop-down menu, \u201cNone\u201d and \u201cDiagonal\u201d, when diagonal option is checked, user can create FDTD, FDE, or EME anisotropic optical material in the \u201cUser Material Database\u201d window."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Solver physics"))," :Anisotropic materials react to electric field with directional dependent electric displacement. Permittivity can be represented by a 9 element tensor\xa0",(0,i.kt)(r.InlineMath,{math:"\\varepsilon_{ij}",mdxType:"InlineMath"}),"."),(0,i.kt)(r.BlockMath,{math:"D_i = \\varepsilon_{ij}E_j",mdxType:"BlockMath"}),(0,i.kt)("p",null,"In general, this tensor can be diagnonalized by a proper choice of coordinate system, e.g. in principle dielectric axes. So it is simplified to"),(0,i.kt)(r.BlockMath,{math:"\\varepsilon =\\begin{bmatrix} \\varepsilon_x & 0 & 0\\\\ 0 &  \\varepsilon_y & 0\\\\ 0 & 0 &  \\varepsilon_z\n\\end{bmatrix}",mdxType:"BlockMath"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Diagonal anisotropic materials")),":To define an anisotropic material, set the Anisotropy field in the material database to Diagonal and assign the parameters for each diagonal component."),(0,i.kt)("p",null,(0,i.kt)("img",{src:e(40583).Z,width:"1515",height:"1221"})),(0,i.kt)("h2",{id:"3-project-material-database"},"3 Project Material Database"),(0,i.kt)("p",null,"The project material database stores project materials. The database would inherit materials from the project automatically, which may contain standard materials and user materials in the project. And the materials in the standard and user material database can be imported to project material database. Users also can add, delete and export materials according to their needs."))))}p.isMDXComponent=!0},40583:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/anisoropic-05af3e1e71d0d3c25d9b0c3c78c30047.png"},80753:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/fig1-4bc2809a8c3d9c9d4da5f4dcd25f348b.png"},86895:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/materialList-cf70d312156e85c737c7ad709a1a93ee.png"},26674:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/materialdataAndModelFitting-bc0519202002b628bbd32995895ffee0.png"},82039:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/materialproperties-85b0244add4a69526dc038d9a54bd173.png"},45276:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/userDataBase-75e8348763cbfd83c74de6bcee9617ef.png"},63498:(t,a,e)=>{e.d(a,{Z:()=>l});const l=e.p+"assets/images/usermaterial-b717244a1d1a71f3e5a7dee82881a4d0.png"}}]);