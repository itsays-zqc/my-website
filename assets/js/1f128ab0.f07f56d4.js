"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1676],{1946:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(7617);const l={},i="Spot Size Converter",o={unversionedId:"examples/PIC/ssc/SSC",id:"examples/PIC/ssc/SSC",title:"Spot Size Converter",description:"Introduction:",source:"@site/docs/examples/PIC/ssc/SSC.md",sourceDirName:"examples/PIC/ssc",slug:"/examples/PIC/ssc/",permalink:"/my-website/docs/examples/PIC/ssc/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/PIC/ssc/SSC.md",tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"ring_resonator",permalink:"/my-website/docs/examples/PIC/ring_resonator/"},next:{title:"Y branch",permalink:"/my-website/docs/examples/PIC/ybranch/"}},p={},s=[{value:"Introduction:",id:"introduction",level:2},{value:"Simulation:",id:"simulation",level:2},{value:"step 1: Add Project",id:"step-1-add-project",level:3},{value:"step 2: Add Material",id:"step-2-add-material",level:3},{value:"step 3: Add Structure",id:"step-3-add-structure",level:3},{value:"step 4: Add Boundary",id:"step-4-add-boundary",level:3},{value:"step 5: Add EME port",id:"step-5-add-eme-port",level:3},{value:"step 6: Add Monitor",id:"step-6-add-monitor",level:3},{value:"step 7: Add EME solver",id:"step-7-add-eme-solver",level:3},{value:"step 8: Run and export results",id:"step-8-run-and-export-results",level:3},{value:"Result and Analysis",id:"result-and-analysis",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spot-size-converter"},"Spot Size Converter"),(0,r.kt)("h2",{id:"introduction"},"Introduction:"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8691).Z,width:"5669",height:"1949"}),"\nThe spot size converter is an important device connecting the silicon photonic integrated chip and the external optical fiber. The slow changing waveguide structure is used to reduce the light spot in the optical fiber to the size matching the waveguide mode field, which greatly reduces the coupling loss.")),(0,r.kt)("h2",{id:"simulation"},"Simulation:"),(0,r.kt)("div",{class:"text-justify"},"The eigenmode expansion (EME) solver is very suitable for solving long-distance transmission problems such as spot size  converter, and devices can be quickly designed through length scanning."),(0,r.kt)("h3",{id:"step-1-add-project"},"step 1: Add Project"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," First, we need to import the software development kit and use its ",(0,r.kt)("inlineCode",{parentName:"p"},"Project()")," to build a project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 1. Project ---\nimport maxoptics_sdk.all as mo\npj = mo.Project(name=project_name, location="local")\n# endregion\n')),(0,r.kt)("h3",{id:"step-2-add-material"},"step 2: Add Material"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Here we demonstrate ",(0,r.kt)("inlineCode",{parentName:"p"},"Material()")," adding materials to the project and using ",(0,r.kt)("inlineCode",{parentName:"p"},"add_lib()")," to add materials from the material library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# region --- 2. Material ---\nmt = pj.Material()\nmt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)\nmt.add_lib(name='SiO2', data=mo.Material.SiO2_Palik, order=2)\nmt.add_lib(name='Air', data=mo.Material.Air, order=2)\n# endregion\n")),(0,r.kt)("h3",{id:"step-3-add-structure"},"step 3: Add Structure"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," The structure is composed of a substrate, a conical waveguide with high refractive index, and a cladding. Add\ngeometric structures using ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add_geometry()"),", and select the method of importing GDS to establish the model. It is necessary to set geometric and material parameters in the property. Select simulation materials by using ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh_order")," in areas where geometry overlaps.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 3. Structure ---\nst = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.2, background_material=mt["SiO2"])\nst.add_geometry(name="ssc", type="gds_file",\n                property={"general": {"path": gds_file, "cell_name": "SSC", "layer_name": (2, 0)},\n                              "geometry": {"x": 0, "y": 0, "z": 0.1, "z_span": 0.2},\n                              "material": {"material": mt["Si"], "mesh_order": 2}})\nst.add_geometry(name="cover", type="gds_file",\n                property={"general": {"path": gds_file, "cell_name": "SSC", "layer_name": (3, 0)},\n                              "geometry": {"x": 0, "y": 0, "z": 1.5, "z_span": 3},\n                              "material": {"material": mt["SiON"], "mesh_order": 1}})\n# endregion\n')),(0,r.kt)("h3",{id:"step-4-add-boundary"},"step 4: Add Boundary"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"OBoundary()")," optical boundary to set the boundaries and boundary conditions of the geometric structure.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 4. Boundary ---\nst.OBoundary(property={"geometry": {"x": 0, "x_span": 206, "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7,\n                        "boundary":{"y_min":"PEC","y_max":"PEC","z_min":"PEC,"z_max":"PEC"}}})\n# endregion\n')),(0,r.kt)("h3",{id:"step-5-add-eme-port"},"step 5: Add EME port"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Add ports using ",(0,r.kt)("inlineCode",{parentName:"p"},"Port()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add()")," in the project, and set the port type, geometric structure size, transmission mode, and quantity in the port.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 5. Port ---\npjp = pj.Port()\npjp.add(name="left_port", type="eme_port",\n            property={"geometry": {"port_location": "left", "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7},\n                      "eme_port": {"general": {"mode_selection": "fundamental_TE"},\n                                   "advanced": {"number_of_trial_modes":  15}}})\npjp.add(name="right_port", type="eme_port",\n            property={"geometry": {"port_location": "right", "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7},\n                      "eme_port": {"general": {"mode_selection": "fundamental_TE"},\n                                   "advanced": {"number_of_trial_modes":  15}}})\n# endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"left_port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"eme_port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select type of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port_location"),(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the location of the port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"center position of port width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y_span"),(0,r.kt)("td",{parentName:"tr",align:null},"5.5"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"port width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"center position of port height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z_span"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"port height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode_selection"),(0,r.kt)("td",{parentName:"tr",align:null},"fundamental_TE"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the mode of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_trial_modes"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"set the mode of port")))),(0,r.kt)("h3",{id:"step-6-add-monitor"},"step 6: Add Monitor"),(0,r.kt)("p",null," Add a monitor using engineering's ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add()"),", and set up  ",(0,r.kt)("inlineCode",{parentName:"p"},"profile_monitor")," type in the monitor to view the transmittance and field distribution at both ends of the spot converter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 6. Monitor ---\nmn = pj.Monitor()\nfor i, _pos in enumerate([-102, -99, 102]):\n    mn.add(name="section"+str(i+1), type="profile_monitor",\n            property={"geometry": {"monitor_type": "2d_x_normal", "x_resolution": 100,\n                                  "x": _pos, "x_span": 0, "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7}})\nmn.add(name="y_normal", type="profile_monitor",\n           property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,\n                                  "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0.5, "z_span": 7}})\nmn.add(name="z_normal", type="profile_monitor",\n           property={"geometry": {"monitor_type": "2d_z_normal", "x_resolution": 100,\n                                  "x": 0, "x_span": 206, "y": 0, "y_span": 5.5, "z": 0.1, "z_span": 0}})\n# endregion\n')),(0,r.kt)("h3",{id:"step-7-add-eme-solver"},"step 7: Add EME solver"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Add a simulation using engineering's ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulation()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add()"),", and select the EME simulation type. Divide the geometric structure into four regions in ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_grop_definition"),", set the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_number")," in the slowly changing geometric structure, and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sub_cell")," method."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2219).Z,width:"5669",height:"2303"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n# region --- 7. solver ---\nsimu = pj.Simulation()\nsimu.add(name=simu_name, type="EME",\n        property={"general": {"wavelength": wavelength, "use_wavelength_sweep": True},\n            "eme_setup": {\n                "cell_geometry": {\n                    "energy_conservation": "make_passive",  # ["none","make_passive"]\n                    "cell_group_definition": [\n                        {"span": 2, "cell_number": 1, "number_of_modes": 15, "sc": "none"},\n                        {"span": 1, "cell_number": 1, "number_of_modes":  15, "sc": "none"},\n                        {"span": 200, "cell_number": 30, "number_of_modes":  15, "sc": "sub_cell"},\n                        {"span": 3, "cell_number": 1, "number_of_modes":  15, "sc": "none"}]}},\n            "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": grid, "dz": grid}},\n            "eme_analysis": {\n                "eme_propagate": True,\n                "propagation_sweep": {"propagation_sweep": True,\n                                        "parameter": "group_span_3", "start": 50, "stop": 250, "number_of_points": 5},\n                "select_source": {"phase": 0, "select_mode": "TE"}}})\n\n# endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"simu_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of simulation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"EME"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the type of solver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wavelength"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"wavelength of mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_wavelength_sweep"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"select to enable wavelength sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"span"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"the span of area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cell_number"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"number of structural slices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_modes"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"number of modes in the crosss-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sc"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select to enable subcell method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dy"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"horizontal grid of cross-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dz"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitudinal grid of cross-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eme _propagate"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"select to enable EME propagation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"propagation_sweep"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"select to enable propagation sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"grop_span_3"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the area of propagation sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"starting length of sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop"),(0,r.kt)("td",{parentName:"tr",align:null},"250"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"stoping length of sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_points"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"number of sweep lengths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phase"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"the initial phase of optical source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"select_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"TE"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"mode of optical source")))),(0,r.kt)("h3",{id:"step-8-run-and-export-results"},"step 8: Run and export results"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Run the EME simulation using ",(0,r.kt)("inlineCode",{parentName:"p"},"simu[simu_name].run()"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"simu_name")," is the name of the EME simulation.\nExtract data using ",(0,r.kt)("inlineCode",{parentName:"p"},"extract()"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is the calculation result data, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath")," is the storage path, ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," is the classification of the data, and ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name")," is the name of the monitor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# region --- 8. see result ---\neme_res = simu[simu_name].run()\neme_res.extract(data=\'eme_propagate:facet_data\', savepath=plot_path, real=True, imag=True, export_csv=True)\neme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",\n                target="intensity", export_csv=True)\neme_res.extract(\n    data="eme_propagate:monitor", savepath=plot_path + "013_eme_y_normal",\n    monitor_name="y_normal", attribute="E", export_csv=True)\neme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "014_eme_z_normal",\n                monitor_name="z_normal", attribute="E", export_csv=True)\nfor i in range(3):\n    eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "0"+str(15+i)+"_eme_section"+str(i+1),\n                    monitor_name="section"+str(i+1), attribute="E", export_csv=True)\n# endregion\n')),(0,r.kt)("h2",{id:"result-and-analysis"},"Result and Analysis"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," The EME solver calculates the template converter by using multiple elements in the region of geometric changes, calculating the cross-sectional patterns of the elements, and calculating the S-matrix by comparing the matching of electromagnetic fields.To verify the accuracy of the calculation results, it is possible to gradually increase the number of transmission modes in the cross-section to determine whether the results converge."),(0,r.kt)("p",null," The electric field distribution at the input and output ends of the mode spot converter is shown in the figure, and it is obvious that the light spot decreases significantly after passing through the silicon waveguide."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3774).Z,width:"5669",height:"2303"})),(0,r.kt)("p",null," EME can quickly scan the length without calculating the mode at the cross-section, and can quickly obtain the S parameter."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(756).Z,width:"5669",height:"2126"}))))}u.isMDXComponent=!0},2219:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/EMESSCPS-23bbd9dfc7e6b17f8b29c6e74c6c7cc8.png"},756:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/S21-1b36e7fc0d3742b8ab9d47167991c9f6.png"},3774:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/SSCE-457c28b66cf934aa037ba4f5323aafef.png"},8691:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/structureps-abe1fa699a36def67aa75513cd42f126.png"}}]);