"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3447],{20044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=n(87462),s=(n(67294),n(3905)),i=n(87617);const r={},p="How to set up EME sweep?",o={unversionedId:"faq/Physics/EME sweep",id:"faq/Physics/EME sweep",title:"How to set up EME sweep?",description:"After the EME Solver has completed its calculations, right-click on the EME Analysis in the objects tree and select Add Analysis. Users can analyze mode propagation, length sweep, and wavelength sweep results by running EME Propagate, Group Span Sweep, and Wavelength Sweep, respectively.",source:"@site/docs/faq/Physics/EME sweep.md",sourceDirName:"faq/Physics",slug:"/faq/Physics/EME sweep",permalink:"/my-website/docs/faq/Physics/EME sweep",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"faqSidebar",previous:{title:"How to set boundary condition?",permalink:"/my-website/docs/faq/Physics/BC"},next:{title:"What is the process of simulation?",permalink:"/my-website/docs/faq/Physics/Simulation process"}},l={},h=[{value:"1.Group Span Sweep",id:"1group-span-sweep",level:2},{value:"2.Wavelength Sweep",id:"2wavelength-sweep",level:2}],c={toc:h},d="wrapper";function g(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-set-up-eme-sweep"},"How to set up EME sweep?"),(0,s.kt)("font",{face:"Calibri"},(0,s.kt)("div",{class:"text-justify"},(0,s.kt)("p",null,"After the EME Solver has completed its calculations, right-click on the ",(0,s.kt)("strong",{parentName:"p"},"EME Analysis")," in the objects tree and select ",(0,s.kt)("strong",{parentName:"p"},"Add Analysis"),". Users can analyze mode propagation, length sweep, and wavelength sweep results by running ",(0,s.kt)("strong",{parentName:"p"},"EME Propagate"),", ",(0,s.kt)("strong",{parentName:"p"},"Group Span Sweep"),", and ",(0,s.kt)("strong",{parentName:"p"},"Wavelength Sweep"),", respectively."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{src:n(16897).Z,width:"793",height:"704"}))))),(0,s.kt)("h2",{id:"1group-span-sweep"},"1.Group Span Sweep"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Group Span Sweep"),": EME has great advantages in scanning calculation in the length direction, it does not need to repeatedly calculate the modes at the interface of the divided cells. This allows for the rapid acquisition of the transmitted S-matrix."),(0,s.kt)("p",null,"In the EME Analysis, select ",(0,s.kt)("strong",{parentName:"p"},"Group Span Sweep")," from the drop-down menu for scanning types. and set the ",(0,s.kt)("strong",{parentName:"p"},"Start")," and ",(0,s.kt)("strong",{parentName:"p"},"Stop")," length for the group scan. Additionally, specify the length ",(0,s.kt)("strong",{parentName:"p"},"Interval")," between each scan point or the ",(0,s.kt)("strong",{parentName:"p"},"Number of Points")," to be scanned within the range. Then click the ",(0,s.kt)("strong",{parentName:"p"},"Group Span Sweep")," button to perform the length sweep for the structure group to obtain the s matrix transmitted.")),(0,s.kt)("h2",{id:"2wavelength-sweep"},"2.Wavelength Sweep"),(0,s.kt)("div",{class:"text-justify"},(0,s.kt)("p",null,"To improve computational efficiency, this feature is disabled by default. To use this feature, enable the ",(0,s.kt)("strong",{parentName:"p"},"Use Wavelength Sweep")," switch in the ",(0,s.kt)("strong",{parentName:"p"},"General")," tab of the EME Simulations settings before running the simulation."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{src:n(45024).Z,width:"797",height:"175"}))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Wavelength Sweep"),": In the EME Analysis, Select ",(0,s.kt)("strong",{parentName:"p"},"Wavelength Sweep")," from the drop-down menu for scanning types, and then specify the ",(0,s.kt)("strong",{parentName:"p"},"Start")," and ",(0,s.kt)("strong",{parentName:"p"},"Stop")," wavelength, as well as the ",(0,s.kt)("strong",{parentName:"p"},"Interval")," between each scan point or ",(0,s.kt)("strong",{parentName:"p"},"Number of points")," to be scanned within the range. The S-matrix will be scanned as a function of wavelength. Once the calculation is complete, users can view the results in the ",(0,s.kt)("strong",{parentName:"p"},"Result View"),"."),(0,s.kt)("p",null,"Since the mode field distribution and ",(0,s.kt)(i.InlineMath,{math:"n_{\\text{eff}}^i",mdxType:"InlineMath"})," (where  ",(0,s.kt)(i.InlineMath,{math:"i",mdxType:"InlineMath"}),"  represents the mode index, ",(0,s.kt)(i.InlineMath,{math:"i = 0,1,2,3",mdxType:"InlineMath"}),") vary with wavelength, EME wavelength scanning is not suitable for scenarios with significant material dispersion and mode dispersion."),(0,s.kt)("p",null,"Taking the classic core size 500 nm\u2219200 nm SOI waveguide as an example, the accuracy of wavelength sweep is within 5% in the \xb140 nm wavelength range. However, this result varies depending on the size, structure, and material of the waveguide. Users need to judge and verify based on the usage scenario."))))}g.isMDXComponent=!0},16897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emesweep-52854d64f7ec6daf3ebc315515aacad1.png"},45024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wavelengthsweep1-a333bc5ad0a357d28b180a08ed02bc40.png"}}]);