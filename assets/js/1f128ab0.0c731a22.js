"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1676],{1946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(7617);const i={},l="Spot Size Converter",o={unversionedId:"examples/PIC/ssc/SSC",id:"examples/PIC/ssc/SSC",title:"Spot Size Converter",description:"Introduction",source:"@site/docs/examples/PIC/ssc/SSC.md",sourceDirName:"examples/PIC/ssc",slug:"/examples/PIC/ssc/",permalink:"/my-website/docs/examples/PIC/ssc/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/PIC/ssc/SSC.md",tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Microring Resonator",permalink:"/my-website/docs/examples/PIC/ring_resonator/"},next:{title:"Y branch",permalink:"/my-website/docs/examples/PIC/ybranch/"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Simulation Structure",id:"simulation-structure",level:2},{value:"1. Code Description",id:"1-code-description",level:3},{value:"1.1 Import Toolkit",id:"11-import-toolkit",level:4},{value:"1.2 Define Simulation Function",id:"12-define-simulation-function",level:4},{value:"1.3 Define Parameters",id:"13-define-parameters",level:4},{value:"1.4 Create project",id:"14-create-project",level:4},{value:"1.5 Add Material",id:"15-add-material",level:4},{value:"1.6 Add Structure",id:"16-add-structure",level:4},{value:"1.7 Set Boundary",id:"17-set-boundary",level:4},{value:"1.8 Add Sub Mesh",id:"18-add-sub-mesh",level:4},{value:"1.9 Add EME port",id:"19-add-eme-port",level:4},{value:"1.10 Add Monitor",id:"110-add-monitor",level:4},{value:"1.11 Add EME solver",id:"111-add-eme-solver",level:4},{value:"1.12 Run and Extract Results",id:"112-run-and-extract-results",level:4},{value:"2 Output Results",id:"2-output-results",level:3},{value:"Analysis and Discuss",id:"analysis-and-discuss",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spot-size-converter"},"Spot Size Converter"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8472).Z,width:"11338",height:"4252"}),"\nThe spot size converter is an important device for connecting silicon photonic integrated chips and external optical fibers, which can couple the light transmitted in the fiber into the waveguide with low loss. As shown in the figure, low refractive index SiON is used to cover the long conical silicon waveguide, and the entire waveguide device is placed in a silica environment. After passing through a conical silicon waveguide, the large-sized spot is limited to a size similar to the waveguide size, which can effectively couple into the waveguide."),(0,r.kt)("p",null,"The EME method has great advantages in calculating long conical waveguides. By dividing the structure into multiple cells and calculating the mode and bidirectional transmission at the cell boundary, the S-matrix of the entire device is obtained. And when using length scanning, only the bidirectional transmission part needs to be calculated to obtain the S parameter of length scanning.")),(0,r.kt)("h2",{id:"simulation-structure"},"Simulation Structure"),(0,r.kt)("h3",{id:"1-code-description"},"1. Code Description"),(0,r.kt)("h4",{id:"11-import-toolkit"},"1.1 Import Toolkit"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"First, we need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"maxoptics_sdk")," and Python's function packages.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import maxoptics_sdk.all as mo\nfrom maxoptics_sdk.helper import timed, with_path\nimport os\nimport time\nfrom typing import NamedTuple\n")),(0,r.kt)("h4",{id:"12-define-simulation-function"},"1.2 Define Simulation Function"),(0,r.kt)("div",{class:"text-justify"},"We can define functions to encapsulate the entire simulation project and facilitate parameter assignment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def simulation(*, run_mode="local", wavelength=1.55, grid=0.08, number_of_modes=10, run_options: "RunOptions", **kwargs):\n')),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run_mode")," variable parameter is used to define the location of the simulation run.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength")," variable is defined as wavelength of the optical source.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"grid")," variable is defined as grid size.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"number_of_modes")," variable is used to define the number of modes of calculation.")),(0,r.kt)("h4",{id:"13-define-parameters"},"1.3 Define Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 0. General Parameters ---\npath = kwargs["path"]\nsimu_name = "EME_SSC"\ntime_str = time.strftime("%Y%m%d_%H%M%S", time.localtime())\nproject_name = f\'{simu_name}_{run_mode}_{time_str}\'\nplot_path = f\'{path}/plots/{project_name}/\'\ngds_file_root_path = os.path.abspath(os.path.join(path, \'..\'))\ngds_file = gds_file_root_path + "/examples_gds/SSC.gds"\n# endregion\n')),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," variable is used to store the path of this Python file.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"simu_name")," variable is used to store simulation names.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"time_str")," variable is used to store the timestamp.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"project_name")," variable is used to store the project name.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"plot_path")," variable is used to store the result path.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gds_file")," variable is used to store the file path of GDS.")),(0,r.kt)("h4",{id:"14-create-project"},"1.4 Create project"),(0,r.kt)("p",null,"Create a new project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- 1. Project ---\npj = mo.Project(name=project_name, location=run_mode,)\n# endregion\n")),(0,r.kt)("h4",{id:"15-add-material"},"1.5 Add Material"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Here we demonstrate using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," function to create materials and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_nondispersion")," function to add non dispersive materials, as well as using the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_lib")," function to add materials from the material library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 2. Material ---\nmt = pj.Material()\nmt.add_nondispersion(name="Si", data=[(3.476, 0)], order=2)\nmt.add_nondispersion(name="SiO2", data=[(1.465, 0)], order=2)\nmt.add_nondispersion(name="SiON", data=[(1.50, 0)], order=2)\nmt.add_lib(name="Air", data=mo.Material.Air, order=2)\n# endregion\n')),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to define the name of the added material.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"data")," is used to input the real and imaginary parts of the refractive index of the material.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"order")," is used to set the grid order of the material.")),(0,r.kt)("h4",{id:"16-add-structure"},"1.6 Add Structure"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The structure is composed of a substrate, a conical waveguide with high refractive index, and a cladding. Add\ngeometric structures using ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add_geometry"),"function, and select the method of importing GDS to establish the model. It is necessary to set geometric and material parameters in the property.\nSelect simulation materials by using ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh_order")," in areas where geometry overlaps. The higher the number, the higher the priority of the material.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 3. Structure ---\nst = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.2, background_material=mt["SiO2"])\nst.add_geometry(name="sub", type="gds_file",\n                    property={"general": {"path": gds_file, "cell_name": "SSC", "layer_name": (1, 0)},\n                              "geometry": {"x": 0, "y": 0, "z": -1.5, "z_span": 3},\n                              "material": {"material": mt["SiO2"], "mesh_order": 1}})\nst.add_geometry(name="ssc", type="gds_file",\n                property={"general": {"path": gds_file, "cell_name": "SSC", "layer_name": (2, 0)},\n                              "geometry": {"x": 0, "y": 0, "z": 0.1, "z_span": 0.2},\n                              "material": {"material": mt["Si"], "mesh_order": 2}})\nst.add_geometry(name="cover", type="gds_file",\n                property={"general": {"path": gds_file, "cell_name": "SSC", "layer_name": (3, 0)},\n                              "geometry": {"x": 0, "y": 0, "z": 1.5, "z_span": 3},\n                              "material": {"material": mt["SiON"], "mesh_order": 1}})\n# endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name the added geometry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"gds_file"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the type of structure to add")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"gds_file"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"file path of gds file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cell_name"),(0,r.kt)("td",{parentName:"tr",align:null},"SSC"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the gds cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"(1,0)"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The center position in the x-direction of the geometric structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"center position in the y-direction of the geometric structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"-1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"center position in the z-direction of the geometric structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z_span"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"length of the geometric structure in the z-direction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"material"),(0,r.kt)("td",{parentName:"tr",align:null},"mt",'["Si"]'),(0,r.kt)("td",{parentName:"tr",align:null},"material"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the material in Material")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mesh_order"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the priority of the grid.")))),(0,r.kt)("h4",{id:"17-set-boundary"},"1.7 Set Boundary"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"OBoundary")," optical boundary to set the boundaries and boundary conditions of the geometric structure.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 4. Boundary ---\nst.OBoundary(property={"geometry": {"x": 0, "x_span": 206, "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7}})\n# endregion\n')),(0,r.kt)("h4",{id:"18-add-sub-mesh"},"1.8 Add Sub Mesh"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"After light passes through a conical silicon waveguide, the spot becomes a very small spot, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_mesh")," function can be used to add grids to the silicon waveguide to calculate the contracted spot.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 5. Sub Mesh ---\nst.add_mesh(\n         name="sub_mesh",\n         property={"general": {"dx": grid, "dy": grid, "dz": grid},\n                   "geometry": {"x": 0, "x_span": 206, "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7}})\n# endregion\n')),(0,r.kt)("h4",{id:"19-add-eme-port"},"1.9 Add EME port"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Port")," function to create a port and set the source port in the property, which is used as input for calculating the s parameter.You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function to add ports, and the specific parameters are shown in the table below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 6. Port ---\npjp = pj.Port(property={"source_port": "left_port"})\npjp.add(name="left_port", type="eme_port",\n            property={"geometry": {"port_location": "left", "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7},\n                      "eme_port": {"general": {"mode_selection": "fundamental_TE"},\n                                   "advanced": {"number_of_trial_modes":  15}}})\npjp.add(name="right_port", type="eme_port",\n            property={"geometry": {"port_location": "right", "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7},\n                      "eme_port": {"general": {"mode_selection": "fundamental_TE"},\n                                   "advanced": {"number_of_trial_modes":  15}}})\n# endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"left_port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"eme_port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select type of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port_location"),(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the location of the port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"center position of port width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y_span"),(0,r.kt)("td",{parentName:"tr",align:null},"5.5"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"port width")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"center position of port height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z_span"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"port height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode_selection"),(0,r.kt)("td",{parentName:"tr",align:null},"fundamental_TE"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the mode of port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number_of_trial_modes"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"set the mode of port")))),(0,r.kt)("h4",{id:"110-add-monitor"},"1.10 Add Monitor"),(0,r.kt)("p",null,"Create a monitor using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitor")," function and add a field profile monitor using ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," to view the electric field profile and s parameters. The specific parameters are shown in the table below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 7. Monitor ---\nmn = pj.Monitor()\nfor i, _pos in enumerate([-102, -99, 102]):\n    mn.add(name="section"+str(i+1), type="profile_monitor",\n            property={"geometry": {"monitor_type": "2d_x_normal", "x_resolution": 100,\n                                  "x": _pos, "x_span": 0, "y": 0, "y_span": 5.5, "z": 0.5, "z_span": 7}})\nmn.add(name="y_normal", type="profile_monitor",\n           property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,\n                                  "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0.5, "z_span": 7}})\nmn.add(name="z_normal", type="profile_monitor",\n           property={"geometry": {"monitor_type": "2d_z_normal", "x_resolution": 100,\n                                  "x": 0, "x_span": 206, "y": 0, "y_span": 5.5, "z": 0.1, "z_span": 0}})\n# endregion\n')),(0,r.kt)("h4",{id:"111-add-eme-solver"},"1.11 Add EME solver"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Simulation")," function to create a simulation and the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function to add a solver. Select the EME solver in the type, and the property of the solver are shown in the table below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 8. solver ---\nsimu = pj.Simulation()\nsimu.add(name=simu_name, type="EME",\n        property={"general": {"wavelength": wavelength, "use_wavelength_sweep": True},\n            "eme_setup": {\n                "cell_geometry": {\n                    "energy_conservation": "make_passive",  # ["none","make_passive"]\n                    "cell_group_definition": [\n                        {"span": 2, "cell_number": 1, "number_of_modes": 15, "sc": "none"},\n                        {"span": 1, "cell_number": 1, "number_of_modes":  15, "sc": "none"},\n                        {"span": 200, "cell_number": 30, "number_of_modes":  15, "sc": "sub_cell"},\n                        {"span": 3, "cell_number": 1, "number_of_modes":  15, "sc": "none"}]}},\n            "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": grid, "dz": grid}},\n            "eme_analysis": {\n                "eme_propagate": True,\n                "propagation_sweep": {"propagation_sweep": True,\n                                        "parameter": "group_span_3", "start": 50, "stop": 250, "number_of_points": 5},\n                "select_source": {"phase": 0, "select_mode": "TE"}}})\n\n# endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"simu_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"name of simulation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"EME"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"select the type of solver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wavelength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"wavelength of mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"use_wavelength_sweep"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"center"},"select to enable wavelength sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"the span of area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cell_number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number of structural slices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number_of_modes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number of modes in the crosss-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"none"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"select to enable subcell method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.05"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"horizontal grid of cross-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dz"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.05"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Longitudinal grid of cross-section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eme _propagate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"center"},"select to enable EME propagation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"propagation_sweep"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"center"},"select to enable propagation sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"parameter"),(0,r.kt)("td",{parentName:"tr",align:"center"},"grop_span_3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"the area of propagation sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"start"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"starting length of sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"stop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"250"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"stoping length of sweep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"number_of_points"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number of sweep lengths")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"phase"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"the initial phase of optical source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"select_mode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"mode of optical source")))),(0,r.kt)("p",null,"According to the shape of structural, the SSC is divided into four cell groups using ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_group_definition"),". Set the length of the cell group in ",(0,r.kt)("inlineCode",{parentName:"p"},"span"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_number")," to set the number of cell group. The divided cell structure is shown in the following figure. To set the number of modes in the cell interface using ",(0,r.kt)("inlineCode",{parentName:"p"},"number_of_modes"),", it is necessary to set a sufficient number of modes to obtain accurate results."),(0,r.kt)("p",null,"The area where the structure has not changed, because the cross-section is the same everywhere, the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"cell_number")," is set to 1, and ",(0,r.kt)("inlineCode",{parentName:"p"},"sc"),' is set to "none". In the area of structural changes, multiple cell number need to be used to characterize the structure, and the "sub_cell" method is used to reduce the step effect caused by discrete changes in the cross-section.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5057).Z,width:"5669",height:"2126"})),(0,r.kt)("h4",{id:"112-run-and-extract-results"},"1.12 Run and Extract Results"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"Run the EME simulation using ",(0,r.kt)("inlineCode",{parentName:"p"},"simu[simu_name].run()"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"simu_name")," is the name of the EME simulation.\nExtract data using ",(0,r.kt)("inlineCode",{parentName:"p"},"extract()"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is the calculation result data, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath")," is the storage path, ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," is the classification of the data, and ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name")," is the name of the monitor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 9. see result ---\neme_res = simu[simu_name].run()\neme_res.extract(data=\'eme_propagate:facet_data\', savepath=plot_path, real=True, imag=True, export_csv=True)\neme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",\n                target="intensity", export_csv=True)\neme_res.extract(\n    data="eme_propagate:monitor", savepath=plot_path + "013_eme_y_normal",\n    monitor_name="y_normal", attribute="E", export_csv=True)\neme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "014_eme_z_normal",\n                monitor_name="z_normal", attribute="E", export_csv=True)\nfor i in range(3):\n    eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "0"+str(15+i)+"_eme_section"+str(i+1),\n                    monitor_name="section"+str(i+1), attribute="E", export_csv=True)\n# endregion\n')),(0,r.kt)("h3",{id:"2-output-results"},"2 Output Results"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null," The EME solver first calculates the mode of the cell boundary cross-section, and then obtains the scattering matrix for each cross-section by matching the tangential electric and magnetic fields. After bidirectional transmission of the scattering matrix for each cross-section, the S-matrix of the entire device can be obtained. To ensure the accuracy of the calculation results, the number of calculated modes in the cross-section can be gradually increased until the results converge."),(0,r.kt)("p",null,"After the propagation calculation is completed, the extracted results can be viewed in the storage path, and the extraction of the results can only be set before the program runs. The electric field profile of the light passing through the template converter on the cross-section is shown in the figure below, and it is obvious that the outgoing light spot is much smaller than the incoming light spot."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3537).Z,width:"5669",height:"2303"})),(0,r.kt)("p",null,"After bidirectional transmission calculation in the mode, the electric field distribution in the transmission direction can be constructed.\n",(0,r.kt)("img",{src:a(8777).Z,width:"11338",height:"4252"})," "),(0,r.kt)("p",null,"Similarly, after EME propagation calculation, the S-matrix of the entire device can be obtained, and the result only outputs the S-matrix of the light source mode at the port."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6615).Z,width:"11338",height:"4252"}))),(0,r.kt)("h2",{id:"analysis-and-discuss"},"Analysis and Discuss"),(0,r.kt)("p",null,"When calculating the area of structural change in EME, it is necessary to divide the structure into multiple cells, and the calculated mode is located at the boundary of the cells. The more cells divided, the more accurate the characterization of the structure. In the long conical waveguide region, the number of cells divided is too small, and the calculated cross-sectional area varies greatly, resulting in a strong staircase effect."),(0,r.kt)("p",null,"As shown in the figure below, I conducted a length scan of 50-250 um on the conical waveguide area. When the scan length was greater than 100 um, I divided it into 50 cells to obtain a fluctuation in the transmission rate of SSC; When we increase the number of cells divided into conical regions, the change in transmittance becomes smooth. Therefore, in EME simulation, in addition to ensuring the number of modes at the cell cross-section, there should also be sufficient number of cells."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(756).Z,width:"5669",height:"2303"})),(0,r.kt)("p",null,"If necessary, length can be used_ Sweep sets wavelength scanning in the EME solver. The mode and EME propagation part of the cell boundary section need to be recalculated at each wavelength."))}c.isMDXComponent=!0},5057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EME_SSC-a589dcbeeadd8d353b2338eed4c1c18d.png"},756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/S21-d4f860bbccddfcd29c13977a0bc11313.png"},3537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SSC_E-cd2a60820e5ce13b423977a02b3a361e.png"},8777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SSC_xy-3c73448cefa825f6cea53d58bbad75c8.png"},6615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/S_matrix-e32bb2755237d24e9a7e0c0a3eb1d386.png"},8472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure_ps-7626010275c9980650e808a5a80bac57.png"}}]);