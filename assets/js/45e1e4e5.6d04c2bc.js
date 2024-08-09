"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,u=m["".concat(p,".").concat(g)]||m[g]||f[g]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},12342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="Analysis",o={unversionedId:"manual/SDK/8Analysis",id:"manual/SDK/8Analysis",title:"Analysis",description:"Analysis is an extension function for three basic solvers. In this section, we will introduce the coding method of analysis corresponding to FDE, FDTD and EME.",source:"@site/docs/manual/SDK/8Analysis.md",sourceDirName:"manual/SDK",slug:"/manual/SDK/8Analysis",permalink:"/my-website/docs/manual/SDK/8Analysis",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Preview",permalink:"/my-website/docs/manual/SDK/7Preview"},next:{title:"Extract result",permalink:"/my-website/docs/manual/SDK/9Extract"}},p={},s=[{value:"7.1 FDE Analysis",id:"71-fde-analysis",level:2},{value:"7.1.1 Workflow id",id:"711-workflow-id",level:3},{value:"7.1.2 Modal Analysis",id:"712-modal-analysis",level:3},{value:"7.1.3 Frequency Analysis",id:"713-frequency-analysis",level:3},{value:"7.2 EMEAnalysis",id:"72-emeanalysis",level:2},{value:"7.1.1 Workflow id",id:"711-workflow-id-1",level:3},{value:"7.2.2 EME propagate",id:"722-eme-propagate",level:3},{value:"7.2.3 Periodicity",id:"723-periodicity",level:3},{value:"7.2.4 Group span sweep",id:"724-group-span-sweep",level:3},{value:"7.2.5 Wavelength sweep",id:"725-wavelength-sweep",level:3},{value:"7.2.6 Select source",id:"726-select-source",level:3},{value:"7.2.7 Override wavelength",id:"727-override-wavelength",level:3},{value:"7.3  ModeExpansion",id:"73--modeexpansion",level:2},{value:"7.3.1 Workflow id",id:"731-workflow-id",level:3},{value:"7.3.2 Mode expansion",id:"732-mode-expansion",level:3},{value:"7.4 Far field",id:"74-far-field",level:2},{value:"7.4.1 workflow_id",id:"741-workflow_id",level:3},{value:"7.4.2 huygens_source",id:"742-huygens_source",level:3},{value:"7.4.2 field_data",id:"742-field_data",level:3},{value:"7.4.3 far_field_settings",id:"743-far_field_settings",level:3},{value:"7.4 Overlap",id:"74-overlap",level:2},{value:"7.5 Generation Rate",id:"75-generation-rate",level:2}],d={toc:s},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"analysis"},"Analysis"),(0,r.kt)("font",{face:"Calibri"},(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"Analysis is an extension function for three basic solvers. In this section, we will introduce the coding method of analysis corresponding to FDE, FDTD and EME.\nThe types of the analysis are 'fde_analysis', 'eme_analysis', 'overlap', 'far_field', 'mode_expansion'."),(0,r.kt)("h2",{id:"71-fde-analysis"},"7.1 FDE Analysis"),(0,r.kt)("p",null,"In FDE analysis, different modes supported by the structure can be calculated, bent waveguides can also be analyzed, and the evolution of mode characteristics with wavelength can be studied.The properties of FDE analysis are as follows\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'add_analysis(\n        name: str,\n        type: Literal["fde_analysis"],\n        property: dict,\n    )\n')),(0,r.kt)("h3",{id:"711-workflow-id"},"7.1.1 Workflow id"),(0,r.kt)("p",null,"The name of the result folder generated by the simulation solver, which can be obtained when the simulation solver is completed. The script for obtaining the workflow id is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"workflow_id_name = simu_res.workflow_id\n")),(0,r.kt)("h3",{id:"712-modal-analysis"},"7.1.2 Modal Analysis"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"calculate_modes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The eigenmode supported by the structure will be solved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mesh_structure"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generate an images of mesh structure , which is very useful for checking material settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wavelength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.55"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wavelength used to solve the modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wavelength_offset"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wavelength offset used to solve the modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_trial_modes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of modes stored in the mode list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"search"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"max_index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select 'max_index' or 'near_n' to define the effective index for mode calculation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the value of effective index for mode calculation, when 'serach' selects 'near_n '.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"calculate_group_index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculate the group index of the mode.")))),(0,r.kt)("p",null,"bent_waveguide: the setting of the bending attribute is only valid when the bending waveguide is enabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bent_waveguide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether the waveguide is bent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"radius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1e6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The curvature radius of the bend waveguide.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"orientation"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The direction of the bent waveguide is defined by angle, measured in degrees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"location"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"simulation_center"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculate the position of waveguide bending, options is 'simulation_center'.")))),(0,r.kt)("h3",{id:"713-frequency-analysis"},"7.1.3 Frequency Analysis"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"frequency_analysis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to calculate the frequency sweep analysis results of the modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start_wavelength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.55"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start wavelength for the calculation modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stop_wavelength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.499"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The stop wavelength for the calculation modes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_points"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of points to be calculated within the range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"effective_index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the value of effective index for mode calculation. Valid when not tracking a selected mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_trial_modes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the maximum number of modes to use for the frequency sweep.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),"\nThe following script demonstrates how to add FDE analysis and set mode analysis and frequency analysis for it. This script assumes that the FDE solver has already been setup, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nanalysis_name = "FDE_Analysis"\nanalysis = pj.Analysis()\nanalysis.add_analysis(name=analysis_name, type="fde_analysis",\n                        property={"workflow_id": simu_res.workflow_id, \n                                "modal_analysis": {"calculate_modes": True, "mesh_structure": True,\n                                                "wavelength": 1.55,  "number_of_trial_modes": 20,\n                                                "search": "max_index", \n                                                "calculate_group_index": False,\n                                                "bent_waveguide": {"bent_waveguide": False, "radius": 1, "orientation": 0, "location": "simulation_center", }\n                                                },\n                                "frequency_analysis": {"frequency_analysis": False,\n                                                    "start_wavelength": 1.50, "stop_wavelength": 1.60, "number_of_points": 3,\n                                                    "effective_index": 1, "detailed_dispersion_calculation": False,\n                                                    }})\nresult_fde = analysis[analysis_name].run()                                                   \n')),(0,r.kt)("h2",{id:"72-emeanalysis"},"7.2 EMEAnalysis"),(0,r.kt)("h3",{id:"711-workflow-id-1"},"7.1.1 Workflow id"),(0,r.kt)("p",null,"The name of the result folder generated by the simulation solver, which can be obtained when the simulation solver is completed. The script for obtaining the workflow id is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"workflow_id_name = simu_res.workflow_id\n")),(0,r.kt)("h3",{id:"722-eme-propagate"},"7.2.2 EME propagate"),(0,r.kt)("p",null,"eme_propagate: Choose whether to calculation structure S-matrix using all EME solver settings.",(0,r.kt)("br",null),"\noverride_group_spans: Choose whether to override the group spans settings in EME solver and reset them.",(0,r.kt)("br",null),'\ncell_group_settings: In each cell group, the parameters that are allowed to be changed are "span" and "sc".                               '),(0,r.kt)("h3",{id:"723-periodicity"},"7.2.3 Periodicity"),(0,r.kt)("p",null,"periodicity: Calculate the results of the periodic structure.\nperiodic_group_definition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start_cell_group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The cell group at the starting of the periodic structure, 'group_stpan_1' represents the first group, and so on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end_cell_group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The cell group at the ending of the periodic structure, 'group_stpan_1' represents the first group, and so on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"periods"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of periodic structural regions.")))),(0,r.kt)("h3",{id:"724-group-span-sweep"},"7.2.4 Group span sweep"),(0,r.kt)("p",null,"Allow setting the length range of group span to obtain transmission results without recalculating the mode of each cell."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"group_span_sweep"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculate the S-matrix as a function of a group span.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"parameter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"group_span_1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the cell group to sweep, 'group_span_1' represents the first group, and so on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start length of a cell group span.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start length of a cell group span.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_points"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of points to be scanned within the range.")))),(0,r.kt)("h3",{id:"725-wavelength-sweep"},"7.2.5 Wavelength sweep"),(0,r.kt)("p",null,"Using perturbation method to calculate the S-matrix of the structure as a function of wavelength, it assumes that the mode profile does not significantly change with wavelength. It is suitable for devices with significant changes in phase rather than mode distribution within the studied wavelength range, such as MMI and Waveguide Bragg gratings."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wavelength_sweep"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculate the S-matrix as a function of wavelength.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"start"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The start wavelength of wavelength sweep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stop"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The end wavelength  of wavelength sweep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_wavelength_points"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of points to be scanned within the range.")))),(0,r.kt)("h3",{id:"726-select-source"},"7.2.6 Select source"),(0,r.kt)("p",null,"The following settings affect the results of the profile monitor and do not affect the calculation results of the s matrix."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source_port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the port of the input source in the simulation region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"select_mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select the injection mode for the port.")))),(0,r.kt)("h3",{id:"727-override-wavelength"},"7.2.7 Override wavelength"),(0,r.kt)("p",null,"wavelength: Override the wavelength used to calculate modes in the EME solver and use to calculate the s-matrix. This parameter takes effect when 'use_wavelength_sweep' of EME solver is true."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"Here is an example of adding EME analysis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'analysis = pj.Analysis()\nanalysis.add(name="eme_propagate", type="eme_analysis",\n                property={"workflow_id": eme_base_res.workflow_id, "eme_propagate": True,\n                        "periodicity": {"periodicity": True,\n                                        "periodic_group_definition": [{"start_cell_group": "group_span_1",\n                                                                        "end_cell_group": "group_span_1",\n                                                                        "periods": 80}]},\n                        "group_span_sweep": {"group_span_sweep": False,\n                                        "parameter": "group_span_1", "start": 41, "stop": 61, "number_of_points": 11},\n                        "wavelength_sweep": {"wavelength_sweep": False,\n                                        "start": 1.5, "stop": 1.6, "number_of_wavelength_points": 11},\n                        "select_source": {"source_name": "port_1", "select_mode": "TE"}})\neme_res = analysis["eme_propagate"].run()\n')),(0,r.kt)("h2",{id:"73--modeexpansion"},"7.3  ModeExpansion"),(0,r.kt)("h3",{id:"731-workflow-id"},"7.3.1 Workflow id"),(0,r.kt)("p",null,"The name of the result folder generated by the simulation solver\uff0cwhich can be obtained when the simulation solver is completed. The script for obtaining the workflow id is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"workflow_id_name = simu_res.workflow_id\n")),(0,r.kt)("h3",{id:"732-mode-expansion"},"7.3.2 Mode expansion"),(0,r.kt)("p",null,"direction: Selections are 'positive', 'negative'.",(0,r.kt)("br",{parentName:"p"}),"\n","monitors_for_expansion: The name of the power monitor needs to analyze mode expansion."),(0,r.kt)("p",null,"mode_calculation:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mode_selection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selections are 'fundamental', 'fundamental_TE', 'fundamental_TM' 'fundamental_TE_and_TM' and 'user_select'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"number_of_trial_modes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of modes to search for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"override_global_monitor_setting"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects the override settings of the monitor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"use_source_limits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to use light source limits to set the wavelength/frequency range for recording data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"spacing_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"wavelength"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Selects are "wavelength" or "frequency" to control the interval at which data is recorded.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"spacing_limit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"min_max"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Selects "min_max" or "center_span" to control of spacing limit setting.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sample_spacing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uniform"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to record data at uniform intervals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"use_wavelength_spacing"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose to use wavelength or frequency to separate data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"wavelength_min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets frequency or wavelength span for recording data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"frequency_points"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the number of frequency points for recording data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bent_waveguide"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose to study bent structure.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following script is an example of calculating waveguide mode expansion. This script assumes that FDTD solver and the power monitor have already been set up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'fdtd_res = simu[simu_name].run(\n            # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0}]}\n        )\n\nanalysis = pj.Analysis()\nanalysis.add(name="me_through", type="mode_expansion",\n                property={"workflow_id": fdtd_res.workflow_id,\n                        "mode_expansion": {"direction": "positive",\n                                           "monitors_for_expansion": [{"frequency_monitor": "through"}],\n                                           "mode_calculation": {"mode_selection": "user_select", "mode_index": [0, 1, 2, 3],\n                                                                "override_global_monitor_setting": {"wavelength_center": wavelength, "wavelength_span": 0.1, "frequency_points": 11}}}})\nme_res = analysis["me_through"].run()\n')),(0,r.kt)("h2",{id:"74-far-field"},"7.4 Far field"),(0,r.kt)("h3",{id:"741-workflow_id"},"7.4.1 workflow_id"),(0,r.kt)("p",null,"The name of the result folder generated by the simulation solver\uff0cwhich can be obtained when the simulation solver is completed. The script for obtaining the workflow id is shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"workflow_id_name = fde_res.workflow_id\n")),(0,r.kt)("h3",{id:"742-huygens_source"},"7.4.2 huygens_source"),(0,r.kt)("p",null,"You can choose 'from_dataspace' or 'from_monitor' as the data sources for far-field calculation."),(0,r.kt)("h3",{id:"742-field_data"},"7.4.2 field_data"),(0,r.kt)("p",null,"monitor_name: The monitor name was added in the simulation. Only valid when the huygens source selects 'from _monitor'.     ",(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"p"}),"\n","data: Use field data from the dataset to calculate the far field. only valid when the huygens source selects 'from _dataspace'.   "),(0,r.kt)("h3",{id:"743-far_field_settings"},"7.4.3 far_field_settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"projection_method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selects 'planar' or 'angular' to calculate far field projection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"material_index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The refractive index of the medium to use for far field projection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"farfield_filter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The far field filter alpha parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"projection_distance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The distance is used for far field projection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"points_in_x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The resolution of the far field in the x-direction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"points_in_y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The resolution of the far field in the y-direction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"farfield_x_span"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The x span of the far field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"farfield_y_span"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The x span of the far field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"farfield_x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The x center position of the far field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"farfield_y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The y center position of the far field.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),"\nThe following script is an example of calculating the far-field projection of FDE analysis results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nds = pj.DataSpace()\ndata_path = f'{os.path.dirname(__file__)}\\\\projects\\\\{project_name}\\\\{far_field_base_workflow_id}\\\\fde_ana_0.out\\\\fde_ana_0_fde.modex'\nds.import_data(name= 'fde_mode_0',type = 'field_2d',\n                property={'path':data_path, 'mode_id':0})\nanalysis.add(name=\"Far_Field\", type=\"far_field\",\n                property={\n                    'huygens_source': 'from_dataspace',  # selections are ['from_dataspace','from_monitor']\n                    'workflow_id': far_field_base_workflow_id,\n                    'field_data': {\"data\": ds['fde_mode_0']},\n                    'far_field_settings': {'projection_method': 'planar',  # selections are ['planar','angular']\n                                        'material_index': 3.7,\n                                        'farfield_filter': 0,\n                                        'projection_distance': 8000,\n                                        'points_in_x': 50,\n                                        'points_in_y': 50,\n                                        'farfield_x_span': 40,\n                                        'farfield_y_span': 40,\n                                        'farfield_x': 0,\n                                        'farfield_y': 0,}}\n                )\nfar_field_res = analysis[\"Far_Field\"].run()\n\n")),(0,r.kt)("h2",{id:"74-overlap"},"7.4 Overlap"),(0,r.kt)("p",null,"Calculating overlap requires specifying two fields using 'Field_1' and 'Field_2'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),"\nThe following script is an example of calculating the overlap between gaussian beam and mode profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'beam_res = simu[simu_name].run_fde_beam_and_extract(\n                property={"define_gaussian_beam_by": "waist_size_and_position",  # [waist_size_and_position,beam_size_and_divergence],\n                          "waist_radius": 5.2, "distance_from_waist": 1.5, "refractive_index": 1.45, "theta": 0, "phi": 0,\n                          "polarization_angle": 90, "sample_span": 6, "sample_resolution": 200},\n                savepath=plot_path + "beam_heatmap")\nanalysis.add(name="overlap", type="overlap",\n                property={"field_1": {"workflow_id": beam_res.workflow_id, "mode": 0},\n                        "field_2": {"workflow_id": fde_res.workflow_id, "mode": 0},\n                        "optimize_position": True})\noverlap_res = analysis["overlap"].run()\n\noverlap_res.extract(\n    export_csv=True, savepath=plot_path + "overlap")\n\nif not run_options.run_beam:\n    overlap_res = simu[simu_name].run_fde_overlap_and_extract(\n    property={"add_global_mode": {"workflow_id": 291, "mode": 0},\n                "workflow_id": 291, "mode": 0, "optimize_position": True},\n    export_csv=True, savepath=plot_path + "overlap")\n')),(0,r.kt)("h2",{id:"75-generation-rate"},"7.5 Generation Rate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Feature Description"),":\nThe user can use the Power monitor simulation objects to extract the distribution of photogeneration rates in the device. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if run_options.run:\n        result_fdtd = simu[simu_name].run(\n            # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0}]}\n        )\n\n        """ Analysis """\n        analysis = pj.Analysis()\n        analysis.add(name="generation_rate", type="generation_rate",\n                     property={"power_monitor": "power_monitor", "average_dimension": "x", "light_power": 1, "workflow_id": result_fdtd.workflow_id})\n        gen_res = analysis["generation_rate"].run()\n    # endregion\n\n    # region --- 5. Extract ---\n        export_options = {"export_csv": True,\n                          "export_mat": True, "export_zbf": True}\n        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}genrate", generation_rate_name="generation_rate",\n                        target="intensity", attribute="G", real=True, imag=False, **export_options, show=False)\n        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}pabs_total", generation_rate_name="generation_rate",\n                        target="line", attribute="Pabs_total", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)\n        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}jsc", generation_rate_name="generation_rate",\n                        target="line", attribute="Jsc", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Import Data"),":"),(0,r.kt)("p",null,"1) Power Monitor: Choice 3D power monitor from Monitors of Simulations."),(0,r.kt)("p",null,"2) Average Dimension: Choice one\u2019s average dimension of \u201cX\u201d,\u201dY\u201d or \u201cZ\u201d for 2D simulation of power monitor. Choice the travels through injection plane of optical generation in source injuction direction. "),(0,r.kt)("p",null,"3) Light Power: Define the amount of source power injected into the simulation."))))}f.isMDXComponent=!0}}]);