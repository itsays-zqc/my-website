"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8511],{6218:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(87617);const r={},l="Microring Resonator",s={unversionedId:"examples/GUI Examples/PIC/Ring/Ring",id:"examples/GUI Examples/PIC/Ring/Ring",title:"Microring Resonator",description:"Introduction",source:"@site/docs/examples/GUI Examples/PIC/Ring/Ring.md",sourceDirName:"examples/GUI Examples/PIC/Ring",slug:"/examples/GUI Examples/PIC/Ring/",permalink:"/my-website/docs/examples/GUI Examples/PIC/Ring/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Multi-Mode Interference",permalink:"/my-website/docs/examples/GUI Examples/PIC/MMI/"},next:{title:"Active Devices",permalink:"/my-website/docs/category/active-devices"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Simulation",id:"simulation",level:2},{value:"1. Simulation Structure",id:"1-simulation-structure",level:3},{value:"2. Simulation Steps",id:"2-simulation-steps",level:3},{value:"2.1 Add global parameters",id:"21-add-global-parameters",level:4},{value:"2.2 Materials",id:"22-materials",level:4},{value:"2.3 Structures",id:"23-structures",level:4},{value:"2.4 FDTD Simulation",id:"24-fdtd-simulation",level:4},{value:"2.5 Source",id:"25-source",level:4},{value:"2.6 Monitors",id:"26-monitors",level:4},{value:"2.7 Analyses",id:"27-analyses",level:4},{value:"2.8 Check Memory/Run",id:"28-check-memoryrun",level:4},{value:"3. Output Results",id:"3-output-results",level:3}],u={toc:d},m="wrapper";function p(t){let{components:e,...r}=t;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microring-resonator"},"Microring Resonator"),(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"As a typical passive device, the ring resonator is widely used in the integrated optics, which has the advantages of small size, wide free spectral range (free spectrum range, FSR), high quality factor (quality factor, Q), high sensitivity and so on. The structure characteristics of the ring resonator fit the large-scale photoelectric integrated system, which is widely used to constitute various functional devices, including filters, sensors, delay lines, wave division multiplexer, etc."),(0,i.kt)("p",null,"The designer can adjust the resonance wavelength, FSR, Q value and coupling efficiency of the ring resonator by adjusting the ring size, the coupling spacing between the straight waveguide and the ring, and the refractive index distribution. The device is based on the principle of waveguide optics, using the time domain finite difference algorithm (Finite Difference Time Domain, FDTD), coupling mode theory (Coupled-mode theory, CMT).")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(43476).Z,width:"1295",height:"590"}))))),(0,i.kt)("h2",{id:"simulation"},"Simulation"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FDTD module")," can be conducted to obtain the intensity distribution of the optical field and the transmittance at each port. This allows the verification of the optimized results for the microring resonator."),(0,i.kt)("p",null,"Next, we will learn the steps about how to model the microring resonator using the GUI and calculate the light propagation in the structure using the FDTD module.")),(0,i.kt)("h3",{id:"1-simulation-structure"},"1. Simulation Structure"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"As shown in the picture, there is the structure preivew of the microring resonator building in the simulation project. The parameters which are used in this simulation are listed in the table.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(63981).Z,width:"1410",height:"654"}))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Unit"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"coupling_length"),(0,i.kt)("td",{parentName:"tr",align:null},"4.5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"coupling length of the resonator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gap"),(0,i.kt)("td",{parentName:"tr",align:null},"0.12"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"gap between the track and bus waveguide")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waveguide_width"),(0,i.kt)("td",{parentName:"tr",align:null},"0.45"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"width of waveguide")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"radius"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"radius of ring")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"waveguide_height"),(0,i.kt)("td",{parentName:"tr",align:null},"0.22"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"height of waveguide")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wavelength_center"),(0,i.kt)("td",{parentName:"tr",align:null},"1.55"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"wavelength center")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wavelength_span"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"\u03bc"),"m"),(0,i.kt)("td",{parentName:"tr",align:null},"wavelength span")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"points_number"),(0,i.kt)("td",{parentName:"tr",align:null},"201"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"number of frequency points")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"angle"),(0,i.kt)("td",{parentName:"tr",align:null},"87"),(0,i.kt)("td",{parentName:"tr",align:null},"degree"),(0,i.kt)("td",{parentName:"tr",align:null},"tilt angle of waveguide sidewall")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cells_per_wavelength"),(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"cells per wavelength")))),(0,i.kt)("h3",{id:"2-simulation-steps"},"2. Simulation Steps"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Now let's learn how to build the whole simulation project of the Microring resonator by the GUI.")),(0,i.kt)("h4",{id:"21-add-global-parameters"},"2.1 Add global parameters"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,'we need to set the relevant parameters for simulation and parameterized modeling in the project. To add a global variable in the \u201cGlobal Parameter\u201d area, right-click there and select \u201cAdd\u201d. In the \u201cExpression\u201d column, you can input functions, and the \u201cValue\u201d column displays the current variable value. You can also provide a description for the variable in the \u201cDescription\u201d, as shown in the image below.The "Dependencies Check" can help to check the varible used the in this simulation.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(30070).Z,width:"1230",height:"471"})))))),(0,i.kt)("h4",{id:"22-materials"},"2.2 Materials"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Subsequently, before building the structures, we need the materials required for the simulation."),(0,i.kt)("p",null,'In the material library above the GUI, you can import material data in "Material Library" or creat the  new material using "New Material". Once you\u2019ve selected or customized the material, click \u201cExport to Project\u201d to add it to the Objects Tree. This makes it easier to use the material during subsequent modeling processes.'),(0,i.kt)("p",null,"The steps are illustrated in the image below.And in this simulation, we mainly use Si and Air materials in the material library.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(90729).Z,width:"1749",height:"875"}))))),(0,i.kt)("h4",{id:"23-structures"},"2.3 Structures"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,'Next, we can create the model of microring by the geometries in "Structure" part. In this example, we mainly need the "Straight Waveguide" and "Ring", clicking the specific geometry to add it into the Objects Tree.'),(0,i.kt)("p",null,"Moreover, it is conveniently to use the global paramaters changing the structures of microring resonator.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(57080).Z,width:"1315",height:"770"}))))),(0,i.kt)("h4",{id:"24-fdtd-simulation"},"2.4 FDTD Simulation"),(0,i.kt)("p",null,"After adding materials and creating the model, we need to configure the simulation module and its parameters. For this simulation, we primarily use the Finite-Difference Time-Domain (FDTD) algorithm. As shown in the figure below, locate the \u2018FDTD Solver\u2019 under the \u2018Set Solvers\u2019 module, click to open the pop window, and set the relevant parameters, including the \u2018General,\u2019 \u2018Geometry,\u2019 \u2018Mesh Settings,\u2019 \u2018Boundary Condition,\u2019 and \u2018Advanced Options\u2019 tabs. Once configured, click \u2018OK\u2019/\u2018Apply\u2019 to add the FDTD solver to the simulation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(24282).Z,width:"1542",height:"830"}))))),(0,i.kt)("h4",{id:"25-source"},"2.5 Source"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Then we need to establish the light source. In the entire GUI interface, locate the \u2018Source\u2019 section at the top. Currently, it supports adding four types of sources: Mode Source, Gaussian Source, Dipole Source and Optical Generation. For this simulation, we are using a mode source. Click to open the dialog box for the mode source and set its relevant parameters, including the \u2018General,\u2019 \u2018Geometry,\u2019 and \u2018Waveform\u2019 sections. Once configured, click \u2018Apply\u2019 or \u2018OK\u2019 to add the light source to the Objects Tree.\u201d"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(40841).Z,width:"1602",height:"806"})))))),(0,i.kt)("h4",{id:"26-monitors"},"2.6 Monitors"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"After adding the simulation light source, we need to add various types of monitors in the simulation to obtain the necessary simulation data. The currently supported monitor types include the following: Index Monitor, Field Time, Frequency-Domain Field and Power, EME Profile Monitor, Doping Monitor, Charge Monitor, Band Monitor, Electrical Monitor, and the Global Option for settings monitor parameters globally."),(0,i.kt)("p",null,"We primarily utilize the Frequency-Domain Field and Power Monitor in this simulation.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(49964).Z,width:"1785",height:"873"}))))),(0,i.kt)("h4",{id:"27-analyses"},"2.7 Analyses"),(0,i.kt)("p",null,"Subsequently, we can further analyze the simulation results in the \u2018Analysis\u2019 section. Currently, the supported analyses include: Far Field, Mode Expansion, Overlap, Generation Rate, FDE Analysis, EME Analysis, Matrix Sweep, and Parameter Sweep. Select the desired module, complete the analysis settings, and click  \u2018Apply\u2019 or \u2018OK\u2019 to add  it to Objects Tree or Sweep. For this simulation, we primarily use Mode Expansion to obtain the fractional amount of power transmitted into different mode."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(24095).Z,width:"1002",height:"819"}))))),(0,i.kt)("h4",{id:"28-check-memoryrun"},"2.8 Check Memory/Run"),(0,i.kt)("p",null,"After completing the above steps, we can begin running the simulation. Before running, you can estimate the required memory by using the \u2018Check Memory\u2019 feature. Then, in the GUI\u2019s \u2018Run\u2019 module, you can execute the simulation and perform the analysis.For FDTD simulations, the software also supports GPU acceleration."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:a(53804).Z,width:"1053",height:"698"}))))),(0,i.kt)("h3",{id:"3-output-results"},"3. Output Results"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the z-normal normalized E intensity of FDTD propagation at wavelength 1.539 ",(0,i.kt)("em",{parentName:"li"},"\u03bc"),"m and 1.543 ",(0,i.kt)("em",{parentName:"li"},"\u03bc"),"m.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(47847).Z,width:"1396",height:"626"}))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The E intensity of two output ports.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(6359).Z,width:"1461",height:"582"}))))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The TE0 mode transmission at different wavelength of the drop port.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(55113).Z,width:"937",height:"333"}))))))))}p.isMDXComponent=!0},90729:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/material-f47a75b7ae1bfe037e4db8aec671a812.png"},24095:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/expansion-fa9210794d9a0559babbffbafcddb095.png"},30070:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/glopara-ceedf3d2d379856ad11938f36b7ee76e.png"},6359:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/intensity-7975528cc1578d904fba3d942b864f18.png"},49964:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-ab6d28c31e90b5e198d6992afb4d18d7.png"},24282:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ringfdtd-2be692f2c240636488aad8fb839d8b35.png"},43476:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ringintro-c795fc2104f1e264f357e1f7834b59cb.png"},63981:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ringstr-c85764a8f9e7aafa131a48b2e4c44e38.png"},57080:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ringstr2-995fb8ed79299aead2cc9a934be0865a.png"},53804:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/run-7af0b05455e52d5511c08f3e0fcf1562.png"},40841:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/source-a1a78a3aeb5211e3d20480849136b4c6.png"},55113:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tforward-d19caf77f5415330bc133c1be4221f2c.png"},47847:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/znormal-06f11b54f7f95a4c8398ad7810cb8230.png"}}]);