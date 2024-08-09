"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[628],{70661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),o=a(87617);const r={sidebar_position:8},s="Analysis",l={unversionedId:"tutorial/Maxoptics_GUI/8Analysis",id:"tutorial/Maxoptics_GUI/8Analysis",title:"Analysis",description:"1 EME Analysis",source:"@site/docs/tutorial/Maxoptics_GUI/8Analysis.md",sourceDirName:"tutorial/Maxoptics_GUI",slug:"/tutorial/Maxoptics_GUI/8Analysis",permalink:"/docs/tutorial/Maxoptics_GUI/8Analysis",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Local Mesh",permalink:"/docs/tutorial/Maxoptics_GUI/7Mesh"},next:{title:"Run",permalink:"/docs/tutorial/Maxoptics_GUI/9Run"}},h={},d=[{value:"1 EME Analysis",id:"1-eme-analysis",level:2},{value:"2 FDE Analysis",id:"2-fde-analysis",level:2},{value:"2.1 Modal Analysis Tab",id:"21-modal-analysis-tab",level:3},{value:"2.1.1 Set Calculation parameters",id:"211-set-calculation-parameters",level:4},{value:"2.1.2 Power and Impedance Integration",id:"212-power-and-impedance-integration",level:4},{value:"2.2 Frequency Analysis Tab",id:"22-frequency-analysis-tab",level:3},{value:"3 Far Field",id:"3-far-field",level:2},{value:"4 Overlap",id:"4-overlap",level:2},{value:"5 Mode Expansion",id:"5-mode-expansion",level:2},{value:"5 Generation Rate",id:"5-generation-rate",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analysis"},"Analysis"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("h2",{id:"1-eme-analysis"},"1 EME Analysis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features Description"),": The EME analysis window can be opened in the \u201cAnalyses\u201d of \u201cObjects Tree\u201d. By right clicking \u201cEME Analysis\u201d to add a new  analysis in this project. But before running the analysis, it\u2019s necessary to run the EME solver first. in the drop-down menu \u201cRun\u201d which will calculate the modes at each cell of the EME solver region, changing the simulation to Analysis mode. In Analysis mode, we can use the EME analysis window to propagate the fields and calculate scattering parameters (s-matrix) for the structure. The propagation distances can be changed in analysis mode, and the fields can be propagated without recalculating the modes. In addition, it is possible to compare the s-matrix results for a different number of modes (up to the number used in the simulation), without having to recalculate the modes."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(44798).Z,width:"798",height:"693"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Make Passive/None/Energy Conservation"),": Choose the energy conservation type for the Page S-matrix. The Page S-matrix is calculated at every Page of the neighboring cells accounting for the modes at the left- and right- hand sides of the Page."),(0,i.kt)("p",null,"\u2460 Make passive: Nothing is done when the norm of the Page S-matrix is less than or equal to 1; otherwise the norm is mandatorily altered to be identical to 1."),(0,i.kt)("p",null,"\u2461 Energy Conservation: Set the norm of Page S-matrix to 1."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Cell Group Definition"),': The cell group definition section exhibits the location of the cell groups and every group span using a tabular format. This information will be identical to that in the EME setup tab of the EME solver object which was configured under the layout mode. Right from here, the user can modify the group spans and sub-cell method for any cell group then propagate the fields and calculate the s-matrix using the new settings with the "EME propagate" button (and does not need to again compute the modes in every cell).'),(0,i.kt)("p",null,"\u2460 Override Group Spans: Decide whether to override the group spans."),(0,i.kt)("p",null,"\u2461 Reset Group Spans: To recover the group spans the same as the default values in EME simulations."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Periodicity"),': This part enables the user to define cell regions with periodic features and specifies the number of periods in each of them. The "start cell group" and the "end cell group" refer to the sequential numbers from "cell group definition".The user acquires the new monitor and s-matrix results by clicking the "EME Propagate" button, and hence does not have to recompute any modes. Under this option, the periodic sequence specified in the tabular format in the periodicity section will be displayed in the cell group sequence box.'),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Select Source"),": The select source section allow you to select the input source port with corresponding mode to inject at the input port."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"EME Propagate"),": When you press the \u201cEME propagate\u201d button it calculates the device using all the current settings shown in the EME Analysis Window.\n6) ",(0,i.kt)("strong",{parentName:"p"},"Sweep"),": This box gives you the opportunity to scan the span of a specified group or wavelength that you might obtain additional information on the EME propagation.Two options \u201cGroup Span Sweep\u201d and \u201cWavelength Sweep\u201d (when opening \u201cUse Wavelength Sweep\u201d in the \u201cEdit EME\u201d dialog box) are available."),(0,i.kt)("p",null,"\u2460 Group Span Sweep: This option allows the results for a range of spans to be calculated without having to recalculate the modes at each cell. To set up the sweep, select the cell group whose length will be varied, and set the start and stop lengths of the cell group, and either the length interval between each sweep point or the number of points to sweep over in the range."),(0,i.kt)("p",null,'\u2461 Wavelength Sweep: Upon choosing "Wavelength Sweep" and then specifying a start and stop wavelength as well as a number of points to compute, the S-matrix will be swept as a function of wavelength. Once the calculation is completed, the user may view  the results in \u201cResult View\u201d.'),(0,i.kt)("p",null,"7) S-matrix Index Mapping: The entries of the s-matrix enclose key information associated with the transmission and reflection coefficients between ports and the selected modes there. The size of the user s-matrix is thus dependent on both the number of ports and the number of modes selected for every port. Since the big amount of ports and selected modes result naturally in a user s-matrix also of large size, the S-matrix index mapping, as its name suggests, makes a viewable table mapping the user s-matrix indices to the modes and ports of the structure. The left & right indices of the S-parameter refer to the modes of output & input, respectively."),(0,i.kt)("h2",{id:"2-fde-analysis"},"2 FDE Analysis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features Description"),": The FDE analysis window can be opened by pressing the run button and choosing \u201cRun FDE\u201d in the drop-down menu \u201cRun\u201d which will calculate the frequency dependent mode field under a specified kind of boundary condition. The FDE Analysis Window supports modal analysis, frequency analysis and overlap analysis. In this window you can calculate modal analysis via pressing \u201cCalculate modes\u201d button after relative parameters setting. You can also calculate frequency analysis and overlap analysis in a similar way."),(0,i.kt)("h3",{id:"21-modal-analysis-tab"},"2.1 Modal Analysis Tab"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(5200).Z,width:"1383",height:"768"}))))),(0,i.kt)("p",null,"This tab provides two options \u201cSet Calculation parameters\u201d and \u201cPower and Impedance Integration\u201d, where you can calculate the integration of specific mode in selected region."),(0,i.kt)("h4",{id:"211-set-calculation-parameters"},"2.1.1 Set Calculation parameters"),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Frequency"),": The modes will be solved for this specified frequency. (Default 193.414 THz)"),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Wavelength"),": The modes will be solved for this specified wavelength. (Default 1.55 um)"),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Number of Trial Modes"),": When calculating modes, determine the calculated number of modes around the refractive index.  (Default:20)"),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Search"),": This defines the target value(s) of effective index around which the modes will be calculated. (Default: max index)"),(0,i.kt)("p",null,"\u2460 Near n: To find all the modes close to a certain value of effective index."),(0,i.kt)("p",null,"\u2461 Max index: Being checked by default, this enables you to search the modes having the highest possible effective indices; typically, the fundamental modes will be stored in the search results. If unchecked, the user should manage to define N and find other modes."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"Calculate group index"),": Upon checking this, the group index is computed and the result will be returned to the mode list."),(0,i.kt)("p",null,"6) ",(0,i.kt)("strong",{parentName:"p"},"Bent waveguide"),": Three parameters, radius, orientation and central location as illustrated in the figure below, suffice for a description of the bent waveguide structure."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(26131).Z,width:"559",height:"480"}))))),(0,i.kt)("p",null,"\u2460 Radius: The radius terminates at the center of the eigenmode simulation region. Given the orientation and radius, math is performed by the solver to determine the bent waveguide center."),(0,i.kt)("p",null,"\u2461 Orientation (\u03b8): This is the angle made by the bend direction and the +horizontal direction. 0 <= theta <= 90 measured by degrees is supported by the solver, and this exhausts all the possibilities we may encounter."),(0,i.kt)("p",null,"\u2462 Location: In the current version, as a default setting, the end radius is located at the simulation center. It can be alternatively viewed as the center of a waveguide."),(0,i.kt)("p",null,"We have XY, YZ, and ZX coordinate systems, in which the horizontal direction is +x, +y, and +z, respectively."),(0,i.kt)("p",null,"7) ",(0,i.kt)("strong",{parentName:"p"},"Mesh Structure"),": User can view structure and material information about mesh. When clicking the button, the result view will be shown, and attribute drop-down list includes: Index x, Index y, Index z."),(0,i.kt)("p",null,"8) ",(0,i.kt)("strong",{parentName:"p"},"Calculate Modes"),":  After setting the number of trial modes in the modal analysis tab, user clicks the calculate modes button and then the modes will be calculated and the results along with their effective index, group index, wavelength, loss, and TE polarization will be displayed in the mode list."),(0,i.kt)("p",null,"9) ",(0,i.kt)("strong",{parentName:"p"},"Mode Plot Area"),"\uff1aTo view the results in the Mode Plot Area."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(36448).Z,width:"709",height:"366"}))))),(0,i.kt)("p",null,"10) ",(0,i.kt)("strong",{parentName:"p"},"Mode List"),":The mode list shows all of the modes that were calculated in the modal analysis tab along with your effective index, group index (if applicable), wavelength, loss and TE polarization."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(57534).Z,width:"888",height:"215"}))))),(0,i.kt)("h4",{id:"212-power-and-impedance-integration"},"2.1.2 Power and Impedance Integration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(54685).Z,width:"1075",height:"595"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Integration Shape"),"\uff1aTo calculate the integration of the mode distribution within the selected region. This selected region provides two options: \u201cRectangular\u201d and \u201cCircular\u201d."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Integrate"),": \u201cPower\u201d and \u201cElectric\u201d intensity filed are supported in this tab."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"X Min/X Max/Y Min/Y Max"),": Define the geometry of the rectangular shape."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Center X/Center Y /Radius"),": Define the geometry of the circular shape."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"Fraction Integrated"),": To show the integration result of the mode distribution within the selected region."),(0,i.kt)("p",null,"6) ",(0,i.kt)("strong",{parentName:"p"},"Define Integration Region"),": Under this option, you can choose the selected region directly in the mode plot area by right long press."),(0,i.kt)("p",null,"7) ",(0,i.kt)("strong",{parentName:"p"},"Zoom Mode"),": Under this option, you can zoom in the mode plot."),(0,i.kt)("h3",{id:"22-frequency-analysis-tab"},"2.2 Frequency Analysis Tab"),(0,i.kt)("p",null,"This tab is used to analyse the attributes of modes in the range of start frequency and stop frequency."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(21489).Z,width:"970",height:"1051"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Track selected mode"),": Check this option to enable tracking the modes selected from the mode list."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Start/ Stop Frequency"),": The beginning and final frequencies at which the modes will be solved for. The start frequency value is locked to the one for initial computations of modes inside the \u201cModal Analysis\u201d tab, whenever a particular mode is being tracked."),(0,i.kt)("p",null,"3) Start/Stop Wavelength: The beginning and final wavelengths at which the modes will be solved for. The start wavelength value is locked to the one for initial computations of modes inside the Modal Analysis tab, whenever a particular mode is being tracked."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Number of Points"),": This counts the sampling frequency/wavelength points to be swept."),(0,i.kt)("p",null,"5) ",(0,i.kt)("strong",{parentName:"p"},"Number of Trial modes"),":This number specifies the maximum amount of modes to be swept. To track a single mode, this number is recommended to be about 3 in order to reduce the computation time to its minimum (this number will need to be raised a little bit in case there are discontinuities in the sweep data). When \u201cTrack Selected Mode\u201d is not selected, this number determines the maximum amount of modes to be swept at per frequency/wavelength within our attention scope."),(0,i.kt)("p",null,"6) ",(0,i.kt)("strong",{parentName:"p"},"Effective index"),": This parameter indicates the effective index value around which the modes will be solved for. It takes effect only when the selected modes are not being tracked."),(0,i.kt)("p",null,"7) ",(0,i.kt)("strong",{parentName:"p"},"Detailed Dispersion Calculation"),": Mode properties at extra frequencies are computed for collecting more accurate dispersion data over the domain of frequency/ wavelength within our attention scope. This produces more precise results with extra cost of time."),(0,i.kt)("p",null,"8) ",(0,i.kt)("strong",{parentName:"p"},"Bent Waveguide"),": Checking this option enables the user to configure the bent waveguide."),(0,i.kt)("p",null,"\u2460 Radius: The radius of bent waveguide"),(0,i.kt)("p",null,"\u2461 Orientation: The orientation of bent waveguide"),(0,i.kt)("p",null,"\u2462 Location: The location of bent waveguide (Default: Simulation Center)\nThese settings are same as bent waveguide inside modal analysis tab."),(0,i.kt)("h2",{id:"3-far-field"},"3 Far Field"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(81538).Z,width:"860",height:"459"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Field Data"),":Import the near-field data.There are two selections. The \u201cData Space\u201d means importing the near-field data from this simulation project, which user already import from simulation results. The \u201cNew Data\u201d allows user to import a new data."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Import File")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(16506).Z,width:"448",height:"622"}))))),(0,i.kt)("p",null,"\u2460 Name: To set the name of imported near-field data."),(0,i.kt)("p",null,"\u2461 Path: The path of the near-field data."),(0,i.kt)("p",null,"\u2462 Attribute & Opration: To set the attribute and opration of the near-field data."),(0,i.kt)("p",null,"\u2463 Add to DataSpace: Decide whether to import the near-field data to DataSpace."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Frequency Settings"),":"),(0,i.kt)("p",null,"\u2460 Auto: Decide whether to calculate the far field in all wavelength span."),(0,i.kt)("p",null,"\u2461 Frequency: When Auto is off, you can choose the specific frequency here."),(0,i.kt)("p",null,"\u2462 Wavelength: When Auto is off, you can choose the specific wavelength here."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Material"),":"),(0,i.kt)("p",null,"\u2460 Material Index: This specifies the refractive index in far field during the course of computation."),(0,i.kt)("p",null,"4) ",(0,i.kt)("strong",{parentName:"p"},"Far Field Settings"),":"),(0,i.kt)("p",null,"\u2460 Projection Method: Two types of projection method, planar and angular methods are included."),(0,i.kt)("p",null,"--\x3e Angular: In this method, the near-field is projected into an angular coordinate system using a vectorial algorithm which is exactly accurate. The far field data is plotted as a function in Cartesian coordinates for slab waveguides, but in polar coordinates for waveguides with a 2D cross-section."),(0,i.kt)("p",null,"--\x3e Planar: In this method, the near-field is projected into a Cartesian coordinate system using a vectorial algorithm which is exactly accurate."),(0,i.kt)("p",null,"\u2461 Far field Filter: When calculating far-field data, the near-field data at the edge may not be zero, which causes high-frequency waves generated from far-field projection results. Thus, the far-field filter is used to truncate the near-field data effectively, making the near-field data at the edge more smoothly approach to zero, to get rid of the high-frequency wave."),(0,i.kt)(o.BlockMath,{math:"filter=\\frac{a}{(a+b)} ",mdxType:"BlockMath"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(59732).Z,width:"568",height:"502"}))))),(0,i.kt)("p",null,"\u2462 Projection Direction: To set the direction of projection, including \u201cForward\u201d and \u201cBackward\u201d."),(0,i.kt)("p",null,"\u2463 Horizontal Points (only for angular): Sets the number of points in the projection."),(0,i.kt)("p",null,"\u2464 Projection Distance (only for planar): Sets the distance to the projection plane.(Default: 8000 \u03bcm)"),(0,i.kt)("p",null,"\u2465 Points in X/Y (only for planar): Sets the number of points in the projection plane. The larger the number of points, the longer it will take to calculate the far field projection."),(0,i.kt)("p",null,"\u2466 Far-field X/Y span (Only for planar): Sets the span of far-field plane."),(0,i.kt)("p",null,"\u2467 Far-field X/Y center(only for planar): Sets the center of far-field plane."),(0,i.kt)("p",null,"\u2468 Recenter: After setting the center of far-field plane, clicking the recenter button, the far-field projection will be recalculated."),(0,i.kt)("h2",{id:"4-overlap"},"4 Overlap"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Features Description"),": This yields the overlap result. The overlap calculation evaluates the fractional power coupling from the profile of the Field_Data_2 (E2, H2) into the mode (E1, H1). The overlap does not account for the reflections originated from a mismatch in effective indices between the mode and the Field_Data_2 profile. The overlap is calculated in terms of:"),(0,i.kt)(o.BlockMath,{math:"\\text { overlap }=\\left|\\operatorname{Re}\\left[\\frac{\\left(\\int \\overrightarrow{E_{1}} \\times \\overrightarrow{H_{2}^{*}} \\cdot d \\vec{S}\\right)\\left(\\int \\overrightarrow{E_{2}} \\times \\overrightarrow{H_{1}^{*}} \\cdot d \\vec{S}\\right)}{\\int \\overrightarrow{E_{1}} \\times \\overrightarrow{H_{1}^{*}} \\cdot d \\vec{S}}\\right] \\frac{1}{\\operatorname{Re}\\left(\\int \\overrightarrow{E_{2}} \\times \\overrightarrow{H_{2}^{*}} \\cdot d \\vec{S}\\right)}\\right| ",mdxType:"BlockMath"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(42459).Z,width:"1208",height:"530"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Import Data"),":"),(0,i.kt)("p",null,"\u2460 ",(0,i.kt)("strong",{parentName:"p"},"Field Data 1/2"),": To import the field data .There are four selections,shown as the picture below. The \u201cData Space(Project)\u201d means importing the near-field data from this simulation project, which user already import from simulation results. The \u201cData Space(Shared)\u201d supports importing the near-field data from other simulation projects, which data already add to the Data Space shared part. The \u201cNew Data\u201d allows user to import a new data from simulation results. Now we support the data from Passive Field and ZBF Field. Refer to the Chapter 10.3 for The detail information. The \u201cCreate Beam\u201d enables the user to modify the default Gaussian beam for overlap evaluations."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Analysis"),":"),(0,i.kt)("p",null,"\u2460 ",(0,i.kt)("strong",{parentName:"p"},"Calculate Overlap/Power Coupling"),": Clicking this button launches the computation for the overlap and the power coupling of the currently specified mode with the currently selected Field_Data_2. The Field_Data_2 profile is displaced in the x, y and z directions by the specified amounts of X Shift, Y Shift and Z Shift, respectively. The power coupling, compared to overlap function, considers the reflection of the two modes."),(0,i.kt)("p",null,"\u2461 ",(0,i.kt)("strong",{parentName:"p"},"Shift Field_Data_2 Center"),": Upon clicking this, the user can displace the Field_Data_2 profile in the XYZ-coordinate by the specified values of X Shift, Y Shift and Z Shift.\nRecenter: This pull-down button enables the user to recenter the X Shift, Y Shift and Z Shift to (0,0,0), or such that the center of the Field_Data_2 profile comes out to be the same with that of the selected mode at present. It is recommended to perform the latter before optimizing the positions of X Shift, Y Shift and Z Shift."),(0,i.kt)("p",null,"--\x3e X Shift: the actual amount of displacement in the x-direction."),(0,i.kt)("p",null,"--\x3e Y Shift: the actual amount of displacement in the y-direction."),(0,i.kt)("p",null,"--\x3e Z Shift: the actual amount of displacement in the z-direction."),(0,i.kt)("p",null,"\u2462 ",(0,i.kt)("strong",{parentName:"p"},"Optimize Position"),": Clicking this button a set of values of X Shift, Y Shift and Z Shift will be evaluated for maximizing the overlap of the currently specified mode with the currently selected Field_Data_2."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"Create Beam"),": The Beam tab enables the user to modify the default Gaussian beam for overlap evaluations, as well as to generate Gaussian beams in the deck which can be accessed via scripting. There are two options for defining Gaussian beams: the scalar approximation for the electric field or the fully vectorial beam profile(currently not supported)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(45973).Z,width:"409",height:"524"}))))),(0,i.kt)("p",null,"\u2460 ",(0,i.kt)("strong",{parentName:"p"},"Beam Direction"),": Options available for the direction of beam are 2D X normal, 2D Y normal and 2D Z normal."),(0,i.kt)("p",null,"\u2461 ",(0,i.kt)("strong",{parentName:"p"},"Wavelength"),":To set the wavelength of beam."),(0,i.kt)("p",null,"\u2462 ",(0,i.kt)("strong",{parentName:"p"},"Define Gaussian Beam by"),": Work under this menu to define the scalar beam in terms of either Waist Size+Position or Beam size+Divergence."),(0,i.kt)("p",null,"--\x3e Waist radius: This is either the radius at which the field magnitude decays to 1/e of the maximum (or power magnitude decays to 1/e^2 of the maximum) for a Gaussian beam, or a half-width half-maximum (HWHM) position for the Cauchy/Lorentzian beam."),(0,i.kt)("p",null,"--\x3e Distance from waist: The Distance from waist is illustrated in the figure below. Positive/Negative values of this distance correspond to diverging/converging beams, respectively."),(0,i.kt)("p",null,"--\x3e Beam radius: This is either the radius at which the field magnitude decays to 1/e of the maximum (or power magnitude decays to 1/e^2 of the maximum) for a Gaussian beam, or a half-width half-maximum (HWHM) position for the Cauchy/Lorentzian beam."),(0,i.kt)("p",null,"--\x3e Divergence angle: This is the angle of radiation spreading into the far field as measured, illustrated in the figure below. Positive/Negative angles correspond to diverging/converging beams, respectively."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(67985).Z,width:"768",height:"397"}))))),(0,i.kt)("p",null,"\u2463 ",(0,i.kt)("strong",{parentName:"p"},"Refractive index"),": This is the refractive index of the homogeneous material inside which the Gaussian beam is present."),(0,i.kt)("p",null,"\u2464 ",(0,i.kt)("strong",{parentName:"p"},"Theta"),": This is the angle made by the normal-vector and the propagating direction."),(0,i.kt)("p",null,"\u2465 ",(0,i.kt)("strong",{parentName:"p"},"Phi"),": This is the angle made by the horizontal axis and the propagation direction projected into the Eigenmode Solver plane."),(0,i.kt)("p",null,"\u2466 ",(0,i.kt)("strong",{parentName:"p"},"Polarization Angle"),": The polarization angle is defined with respect to the horizontal-axis if the fields are normal-incident. In the case of an off-axis incidence, the polarization angle comes out to be 0 for a p-polarized light and 90 degrees for a s-polarized light."),(0,i.kt)("p",null,"\u2467 ",(0,i.kt)("strong",{parentName:"p"},"Sample Span"),": This specifies the span of the beam on each axis.\nSample Resolution: This specifies the beam resolution, the number of sampling points on each axis."),(0,i.kt)("h2",{id:"5-mode-expansion"},"5 Mode Expansion"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:a(28930).Z,width:"831",height:"667"}))))),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"Import Data"),":"),(0,i.kt)("p",null,"\u2460 ",(0,i.kt)("strong",{parentName:"p"},"Binding Monitor"),": Select the power monitor which provides the mode field data in the simulation project."),(0,i.kt)("p",null,"\u2461 ",(0,i.kt)("strong",{parentName:"p"},"Direction"),": Direction of the Mode expansion monitor. Two options \u201cNegative\u201d and \u201cPositive\u201d are available. (Default value: Positive)"),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"Mode Calculation"),":"),(0,i.kt)("p",null,"\u2460\u3000",(0,i.kt)("strong",{parentName:"p"},"Mode Selection & Mode List"),": Allow you to select the modes for the mode expansion calculation. The \u201cFundamental Mode\u201d, \u201cFundamental TE Mode\u201d , \u201cFundamental TM Mode\u201d and \u201cUser Select\u201d are included. (Default: Fundamental Mode). When Selection is \u201cUser Select\u201d, you need to input the number of mode in \u201cMode List\u201d."),(0,i.kt)("p",null,"\u2461\u3000",(0,i.kt)("strong",{parentName:"p"},"Override Global Monitor Settings"),":To decide whether to override the global monitor settings.If this switch is on, reset the related properties below."),(0,i.kt)("p",null,"--\x3e Sample spacing: The sampling frequency or wavelength is determined somehow based on this combo-choice parameter."),(0,i.kt)("p",null,"--\x3e Use wavelength spacing: As a default setting, data is recorded at certain spatially discretized points depending on the involved wavelengths."),(0,i.kt)("p",null,"--\x3e Use source limits: When checked, the source limits are used by the monitors. Otherwise one uses the pull down menus and their underlying boxes to specify the frequencies/wavelengths at which to collect data."),(0,i.kt)("p",null,"\u2462\u3000",(0,i.kt)("strong",{parentName:"p"},"Frequency Points"),": Sets to choose the number of frequency points at which to record data. (Default: 5)"),(0,i.kt)("p",null,"\u2463\u3000",(0,i.kt)("strong",{parentName:"p"},"Bent Waveguide"),": Upon checking this option, the user can define a bent waveguide."),(0,i.kt)("p",null,"--\x3e Radius: Radius of the bent waveguide. (Default value: 1.000e+6 \u03bcm)."),(0,i.kt)("p",null,"--\x3e Orientation: Orientation of the bent waveguide."),(0,i.kt)("p",null,"--\x3e Location: Location of the bent waveguide. (at Simulation Center by default)"),(0,i.kt)("p",null,"\u2464\u3000",(0,i.kt)("strong",{parentName:"p"},"Rotations"),":"),(0,i.kt)("p",null,"--\x3e Theta\uff1aThis refers to the angle of propagation measured by degrees, with respect to the incident axis of the source in a 3D simulation. In a 2D simulation, it is the angle of propagation measured by degrees revolved around the global Z-axis in compliance with the right-hand rule, that is, the angle of propagation in the XY plane."),(0,i.kt)("p",null,"--\x3e Phi\uff1aThis refers to the angle of propagation measured by degrees revolved around the incident axis of the source in compliance with the right-hand rule in a 3D simulation. In a 2D simulation, this value does not take effect."),(0,i.kt)("p",null,"--\x3e Rotation Offset: A rotation offset can be endowed to the plane upon which the mode is computed. This guarantees that mode sources at an angle do not interfere with structures not belonging to the waveguide/fiber."),(0,i.kt)("h2",{id:"5-generation-rate"},"5 Generation Rate"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Feature Description"),":\nThe user can use the Power monitor simulation objects to extract the distribution of photogeneration rates in the device."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(25954).Z,width:"629",height:"445"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Import Data"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Power Monitor: Choice 3D power monitor from Monitors of Simulations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Average Dimension: Choice one\u2019s average dimension of ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),",",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," for 2D simulation of power monitor. Choice the travels through injection plane of optical generation in source injuction direction.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Light Power: Define the amount of source power injected into the simulation."))))))}u.isMDXComponent=!0},44798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-c7b4a4f518aca1183a12ffed30c649bb.png"},16506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-ac11b6897993f0a548b32a2c3318869d.png"},59732:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-da3df81cc37eaf33c915015ffc6cd977.png"},42459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-9ab87f2763b84088e40f4e0b3846b9df.png"},45973:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-ff7464d4690d7a34960567c58d11401e.png"},67985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-fcf7096dc74a65ef7974cfb8370ed696.png"},28930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-0edb474bcbcacf5e11bd0e0654953517.png"},5200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-a80e167055ec12a5ddf5bb5de7ace289.png"},26131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-75641d9609137bff4c298a9185e34da9.png"},36448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-646f109044562dabf9bf20a1ff36a49c.png"},57534:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-376bbf051e2528218957b30952cdc8ff.png"},54685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-aaf158e2154e6c572ce0f92eedd4ef29.png"},21489:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-ccc85e2d8d8fa1a46bd8ea8acd022c91.png"},81538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-bad254768dd1ad3e54f5b4726f41915c.png"},25954:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/GenerRate-068c3dd18f30e2160df4693f57614e43.png"}}]);