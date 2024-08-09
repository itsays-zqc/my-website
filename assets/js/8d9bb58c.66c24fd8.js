"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4560],{20105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(87617);const r={},o="Y branch",s={unversionedId:"examples/SDK Examples/PIC/ybranch/ybranch",id:"examples/SDK Examples/PIC/ybranch/ybranch",title:"Y branch",description:"Introduction",source:"@site/docs/examples/SDK Examples/PIC/ybranch/ybranch.md",sourceDirName:"examples/SDK Examples/PIC/ybranch",slug:"/examples/SDK Examples/PIC/ybranch/",permalink:"/kb/docs/examples/SDK Examples/PIC/ybranch/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Spot Size Converter",permalink:"/kb/docs/examples/SDK Examples/PIC/ssc/"},next:{title:"Active Devices",permalink:"/kb/docs/category/active-devices-1"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Simulation Methods",id:"simulation-methods",level:2},{value:"Y branch(FDTD module)",id:"y-branchfdtd-module",level:2},{value:"1. Basic Operations",id:"1-basic-operations",level:3},{value:"1.1 Import File",id:"11-import-file",level:4},{value:"1.2 SDK Initialization",id:"12-sdk-initialization",level:4},{value:"2.Code Description",id:"2code-description",level:3},{value:"2.1 import Modules",id:"21-import-modules",level:4},{value:"2.2 Define Simulation",id:"22-define-simulation",level:4},{value:"2.3 Define Parameters",id:"23-define-parameters",level:4},{value:"2.4 Creat Project",id:"24-creat-project",level:4},{value:"2.5 Define Materials",id:"25-define-materials",level:4},{value:"2.6 Waveform",id:"26-waveform",level:4},{value:"2.7 Create Model",id:"27-create-model",level:4},{value:"2.8 Simulation",id:"28-simulation",level:4},{value:"2.9 Source",id:"29-source",level:4},{value:"2.10 Monitor",id:"210-monitor",level:4},{value:"2.11 Run",id:"211-run",level:4},{value:"2.12 Extract Results",id:"212-extract-results",level:4},{value:"2.13 Switches",id:"213-switches",level:4},{value:"3.Output Results",id:"3output-results",level:3},{value:"Supplement",id:"supplement",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"y-branch"},"Y branch"),(0,i.kt)("font",{face:"Calibri"},(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The Y branch is a fundamental component of integrated optics. Its primary function is to split the incoming light from a single input waveguide into two separate waveguides (splitter). Likewise, it can also combine light from two waveguides into a single waveguide (combiner)."),(0,i.kt)("p",null,"The main performance parameters of the Y branch include ",(0,i.kt)("strong",{parentName:"p"},"insertion loss"),", ",(0,i.kt)("strong",{parentName:"p"},"device dimensions"),", and ",(0,i.kt)("strong",{parentName:"p"},"operating bandwidth"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(63477).Z,width:"1044",height:"573"})),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(71394).Z,width:"640",height:"480"}))))),(0,i.kt)("h2",{id:"simulation-methods"},"Simulation Methods"),(0,i.kt)("p",null,"Through the FDTD module or EME module, the Y branch's structure can be optimized to obtain the transmittance of fundamental mode or S-parameters of each output port. This allows the verification of the optimized results for the multi-mode interferometer.This optimization process aims to improve the Y branch's insertion loss and bandwidth performance."),(0,i.kt)("h2",{id:"y-branchfdtd-module"},"Y branch(FDTD module)"),(0,i.kt)("h3",{id:"1-basic-operations"},"1. Basic Operations"),(0,i.kt)("h4",{id:"11-import-file"},"1.1 Import File"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Once you have installed and configured the environment, import the python code and the GDS layout. The example library and related model code are usually located in the directory :",(0,i.kt)("inlineCode",{parentName:"p"},"examples/func_demo"),". The GDS file is generally imported into the path :",(0,i.kt)("inlineCode",{parentName:"p"},"examples/examples_gds"))),(0,i.kt)("h4",{id:"12-sdk-initialization"},"1.2 SDK Initialization"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Create a new terminal and run the code after you import the python script and GDS file. Max-Optics SDK may take some time to connect the service.")),(0,i.kt)("h3",{id:"2code-description"},"2.Code Description"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Now let's learn the meaning of functions and parameters that correspond to the code.")),(0,i.kt)("h4",{id:"21-import-modules"},"2.1 import Modules"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"To begin, we need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," command to call the relevant functional modules. For instance, we import the  ",(0,i.kt)("inlineCode",{parentName:"p"},"typing")," ,  ",(0,i.kt)("inlineCode",{parentName:"p"},"os")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," module in python. At the same time ,we import the customized module ",(0,i.kt)("inlineCode",{parentName:"p"},"maxoptics_sdk.all "),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxoptics_sdk.helper"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import maxoptics_sdk.all as mo\nfrom maxoptics_sdk.helper import timed, with_path\nimport os\nimport time\nimport json\nfrom typing import NamedTuple\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"maxoptics_sdk")," package provides all in one optical simulation with Python.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"os")," module provides a way to use operating system-dependent functionality such as reading or writing to the file system, working with environment variables, and executing system commands.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," module provides various functions to work with time-related operations and to measure time intervals.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"typing")," module provides support for type hints and annotations, which are used to indicate the expected types of variables, function arguments, and return values in your code.")),(0,i.kt)("h4",{id:"22-define-simulation"},"2.2 Define Simulation"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Firstly, We define parameters and give them a default value, such as the simulation wavelength and number of modes. Note that we can override this value in the following code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@timed\n@with_path\ndef simulation(*, wavelength=1.575,grids_per_lambda=25,run_options: 'RunOptions',**kwargs):\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The provided code contains comments that define the simulation parameters. Let's explain each of these parameters. ",(0,i.kt)("br",null),"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"simulation")," is used to define the simulation parameters for the program.  ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wavelength")," parameter specifies the wavelength of the input light in micrometers. ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"grids_per_lambda")," parameter sets the simulation mesh grid.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"**kwargs")," is a special syntax used in function definitions to accept an arbitrary number of keyword arguments as a dictionary.")),(0,i.kt)("h4",{id:"23-define-parameters"},"2.3 Define Parameters"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Define commonly used parameters, such as the mesh grid of the simulation boundary, the start time of the simulation, the path and name for the simulation output, the path to the imported GDS layout, and other parameters required for structural parameterized modeling."),(0,i.kt)("p",null,"If you need to calculate the bandwith of the device in the EME simulation, you can also decide the wavelength for sweeping in this section.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- General Parameters --\nwaveform_name = f'wv{wavelength * 1e3}'\npath = kwargs['path']\nsimu_name = 'FDTD_y_branch'\ntime_str = time.strftime('%Y%m%d_%H%M%S', time.localtime())\nproject_name = f'{simu_name}_{time_str}'\nplot_path = f'{path}/plots/{project_name}/'\ngds_file_root_path = os.path.abspath(os.path.join(path, '..'))\ngds_file = gds_file_root_path + '/examples_gds/ybranch.gds'\n# endregion\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The code defines several parameters and variables necessary for the simulation process. The ",(0,i.kt)("inlineCode",{parentName:"p"},"waveform_name")," parameter is the name of waveform. ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," variable defines the file path for the simulation, while ",(0,i.kt)("inlineCode",{parentName:"p"},"simu_name")," specifies the name of the simulation file.",(0,i.kt)("br",null)," The ",(0,i.kt)("inlineCode",{parentName:"p"},"time_str")," variable is used to obtain the current time as a timestamp for the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"project_name")," variable assigns a name to the project for the simulation output. ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"plot_path")," variable determines the directory where the simulation result plots will be saved.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gds_file_root_path")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"gds_file")," variable defines the path for importing the GDS layout.")),(0,i.kt)("h4",{id:"24-creat-project"},"2.4 Creat Project"),(0,i.kt)("p",null,"You can create a new project using the Project function of Max's software development toolkit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Project ---\npj = mo.Project(name=project_name)\n# endregion\n")),(0,i.kt)("h4",{id:"25-define-materials"},"2.5 Define Materials"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Let's proceed to the next step, where we set up the materials required for the simulation. In this case, we will directly use relevant materials from the MO  material library.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Material ---\nmt = pj.Material()\nmt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)\nmt.add_lib(name='SiO2', data=mo.Material.SiO2_Palik, order=2)\nmt.add_lib(name='Air', data=mo.Material.Air, order=2)\n# endregion\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"add_lib")," contains three parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),",",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),". ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," calls up the property of simulation materials in the MO material library. ",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Order")," parameter determines the mesh order for the material during the simulation."),(0,i.kt)("h4",{id:"26-waveform"},"2.6 Waveform"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"In this section, we will define the property of wave.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Waveform ---\nwv = pj.Waveform()\nwv.add(name=waveform_name,type='gaussian_waveform',\n        property={'set': 'frequency_wavelength',  # selections are ['frequency_wavelength','time_domain']\n                    'set_frequency_wavelength': {\n                        'range_type': 'wavelength',  # selections are ['frequency','wavelength']\n                        'range_limit': 'center_span',  # selections are ['min_max','center_span']\n                        'wavelength_center': wavelength,\n                        'wavelength_span': 0.15,},})\nwv_struct = wv[waveform_name]\n# endregion\n")),(0,i.kt)("h4",{id:"27-create-model"},"2.7 Create Model"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Next, we will create the structure of Y branch.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Structure ---\nst = pj.Structure()\nst.add_geometry(name='in', type='Rectangle',\n                property={'geometry': {'x': -1.5, 'x_span': 1, 'y': 0, 'y_span': 0.5, 'z': 0, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name=\"gds_file\", type=\"gds_file\",\n                property={\"material\": {\"material\": mt[\"Si\"], \"mesh_order\": 2},\n                            \"geometry\": {\"x\": 1, \"y\": 0, \"z\": 0, \"z_span\": 0.22},\n                            \"general\": {\"path\": gds_file, \"cell_name\": \"splitter1\", \"layer_name\": (0, 0)}})\nst.add_geometry(name='out_up', type='Rectangle',\n                property={'geometry': {'x': 3.1, 'x_span': 0.2, 'y': 0.35, 'y_span': 0.5, 'z': 0, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name='out_down', type='Rectangle',\n                property={'geometry': {'x': 3.1, 'x_span': 0.2, 'y': -0.35, 'y_span': 0.5, 'z': 0, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name=\"waveguide_up\", type=\"BezierWaveguide\",\n                property={\"material\": {\"material\": mt[\"Si\"], \"mesh_order\": 2},\n                            \"geometry\": {\"x\": 0, \"y\": 0, \"z\": 0, \"z_span\": 0.22, \"width\": 0.5,\n                            \"control_points\":[{\"x\": 3.2, \"y\": 0.35}, {\"x\": 4, \"y\": 0.35}, {\"x\": 4, \"y\": 0.85},{\"x\": 5.2, \"y\": 0.85}]}})\nst.add_geometry(name=\"waveguide_down\", type=\"BezierWaveguide\",\n                property={\"material\": {\"material\": mt[\"Si\"], \"mesh_order\": 2},\n                            \"geometry\": {\"x\": 0, \"y\": 0, \"z\": 0, \"z_span\": 0.22, \"width\": 0.5,\n                            \"control_points\":[{\"x\": 3.2, \"y\": -0.35}, {\"x\": 4, \"y\": -0.35}, {\"x\": 4, \"y\": -0.85},{\"x\": 5.2, \"y\":-0.85}]                 }})\nst.add_geometry(name='wg_up', type='Rectangle',\n                property={'geometry': {'x': 5.4, 'x_span': 0.8, 'y': 0.85, 'y_span': 0.5, 'z': 0, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name='wg_down', type='Rectangle',\n                property={'geometry': {'x': 5.4, 'x_span': 0.8, 'y': -0.85, 'y_span': 0.5, 'z': 0, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\n# endregion\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"We import the core of Y branch from the GDS file when other part is created by MO ",(0,i.kt)("inlineCode",{parentName:"p"},"add_geometry")," function.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter defines the structure name.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter specifies the structure type.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cell_name"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"layer_name")," parameters point to the GDS file and specify the relevant layers and cell names used in the layout.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry"),"\xa0parameter\xa0sets\xa0the\xa0structure's\xa0coordinates. ",(0,i.kt)("br",null),"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"material"),"\xa0parameter\xa0specifies\xa0the\xa0material\xa0properties ",(0,i.kt)("br",null),"The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"mesh_order"),"\xa0parameter\xa0sets\xa0the\xa0mesh\xa0order\xa0for\xa0the\xa0simulation.")),(0,i.kt)("h4",{id:"28-simulation"},"2.8 Simulation"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"After establishing the model, we can add the simulation and define the simulation boundary conditions. This involves specifying the geometry of the simulation region, the boundary conditions in the xyz directions, and the other detailed parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# region --- Simulation ---\nsimu = pj.Simulation()\nsimu.add(name=simu_name,type="FDTD",\n            property={"background_material": mt["SiO2"],\n                    "geometry": {"x": 2,"x_span": 7,"y": 0,"y_span": 3,"z": 0,"z_span": 3,},\n                    "boundary_conditions": {"x_min_bc": "PML", "x_max_bc": "PML", "y_min_bc": "PML", "y_max_bc": "PML", "z_min_bc": "PML", "z_max_bc": "PML",\n                                            "pml_settings": {"all_pml": {"layers": 8, "kappa": 2, "sigma": 0.8, "polynomial": 3, "alpha": 0, "alpha_polynomial": 1, }}},\n                    "general": {"simulation_time": 10000,},\n                    "mesh_settings": {"mesh_factor": 1.2,"mesh_type": "auto_non_uniform",\n                                        "mesh_accuracy": {"cells_per_wavelength": grids_per_lambda},\n                                        "minimum_mesh_step_settings": {"min_mesh_step": 1e-4},\n                                        "mesh_refinement": {"mesh_refinement": "curve_mesh",}},},)\n# endregion\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Simulation")," manager is critical for setting up and running simulations in the current project.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter allows users to assign a unique name to the simulation for identification purposes.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter defines the type of the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"simulation_time")," parameter specifies the duration of the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mesh_settings")," parameter enables users to configure various settings related to the simulation mesh. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mesh_accuracy")," parameter controls the precision of the mesh used in the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cells_per_wavelength")," parameter determines the wavelength precision used in the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"minimum_mesh_step_settings")," parameter sets the minimum mesh step, allowing users to define the smallest allowable size for mesh elements.",(0,i.kt)("br",null),"Users can tailor the simulation setup to meet their requirements by utilizing these input parameters, enabling accurate and efficient electromagnetic simulations of complex optical structures."),(0,i.kt)("h4",{id:"29-source"},"2.9 Source"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Then we need to establish the light source in the input waveguide, as shown below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- ModeSource ---\nsrc = pj.Source()\nsrc.add(name='source',type='mode_source',\n        property={'general': {'mode_selection': 'fundamental',\n                                'waveform': {'waveform_id': wv_struct},\n                                \"inject_axis\": \"x_axis\",\"direction\": \"forward\",},\n                    'geometry': {'x': -1.2, 'x_span': 0,'y': 0, 'y_span': 1,'z': 0, 'z_span':1.2,}})\n# endregion\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," function is utilized to retrieve the source manager for the current project.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter specifies the type of the source and is formatted as either ",(0,i.kt)("inlineCode",{parentName:"p"},'["mode_source"] or ["gaussian_source"]'),".",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter represents the name assigned to the source.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"inject_axis")," parameter defines the axis of the source.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"property")," parameter allows for defining specific properties associated with the source.")),(0,i.kt)("h4",{id:"210-monitor"},"2.10 Monitor"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"In this region, we set up the monitors.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Monitor ---\nmn = pj.Monitor()\nmn.add(name='Global Option',type='global_option',\n        property={'frequency_power': {'spacing_type': 'wavelength', 'spacing_limit': 'center_span',\n                                        'wavelength_center': wavelength,'wavelength_span': 0.15,'frequency_points': 100}})\nmn.add(name='monitor_out', type='power_monitor',\n        property={'general': {'frequency_profile': {'wavelength_center': wavelength, 'wavelength_span': 0.15,'frequency_points': 200},},\n                    'geometry': {'monitor_type': '2d_x_normal','x': 5.4, 'x_span': 0, 'y': 0.85, 'y_span': 1.2, 'z': 0, 'z_span': 1.2}})\nmn.add(name='filed_power', type='power_monitor',\n        property={'general': {'frequency_profile': {'wavelength_center': wavelength, 'wavelength_span': 0.15,'frequency_points': 100}, },\n                    'geometry': {'monitor_type': '2d_z_normal','x': 2, 'x_span': 7, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 0}})\n# endregion\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"For the global monitor, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Monitor")," function is utilized to retrieve the monitor manager for the current project, which allows users to access and manage various types of monitors used during simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter represents the name of the Global Option associated with the monitor.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter defines the type of the Global Option and is formatted as a list containing one of several monitor types. The ",(0,i.kt)("inlineCode",{parentName:"p"},"property")," parameter is used to define and set the relevant parameters specific to the chosen monitor type. These parameters control the monitor's behavior and data collection settings during the simulation."),(0,i.kt)("p",null,"The power monitor is a configuration setting that allows users to specify various simulation parameters.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter assigns a name to the power monitor.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," parameter defines the type of power monitor.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"general")," parameter pertains to settings related to the frequency domain and frequency-dependent behaviors of the simulation.",(0,i.kt)("br",null),"The ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry")," parameter is used to define the geometric characteristics of the simulated structure.")),(0,i.kt)("h4",{id:"211-run"},"2.11 Run"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"In the region ,we can recall the simulation name to run it. we\xa0run\xa0the\xa0simulation.We also support users to calculate the simulation with GPU by ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," to improve the simulation efficiency.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# region --- 8. Run ---\nif run_options.run:\n    fdtd_res = simu[simu_name].run(\n        # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0},{"id": 1},{"id": 2},{"id": 3}]}\n    )\n# endregion\n')),(0,i.kt)("h4",{id:"212-extract-results"},"2.12 Extract Results"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"Next, we can retrieve and store the simulation results.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# region --- See Results ---\nif run_options.extract:\n    if run_options.run:\n        fdtd_res.extract(data='fdtd:mode_source_mode_info', savepath=f'{plot_path}_source_modeprofile',\n                            source_name='source', attribute='E', target='intensity', mode=0, export_csv=True)\n        fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}_monitor_out_abs(T)',\n                            monitor_name='monitor_out', attribute='T', target='line', plot_x='wavelength',\n                            export_csv=True)\n        fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}_filed_power_abs(T)',\n                            monitor_name='filed_power', attribute='E', target='intensity', plot_x='x', plot_y='y',\n                            real=True, imag=True, export_csv=True, show=False)\nreturn fdtd_res\n# endregion\n\n# endregion\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," function allows you to extract specific simulation results and store them for further analysis.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," parameter is to decide what type/field data will be extracted.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"savepath")," parameter specifies the save path of picture.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"monitor_name")," parameter specifies the name of monitor which provides the data needed.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute")," parameter specifies which attribute will extracted.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"plot_x")," parameter specifies the data of x axis.",(0,i.kt)("br",null),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"export_csv")," parameter is to decide whether to export a csv. Default as False.",(0,i.kt)("br",null))),(0,i.kt)("h4",{id:"213-switches"},"2.13 Switches"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"In this section of the code, the ",(0,i.kt)("inlineCode",{parentName:"p"},"simulation")," function is called and executed, which allows you to reset relevant parameters for more convenient parameter scanning and optimization design. We also support control switches for various functionalities at the end of the code, and you can use configuration flags(True or False). These flags can be used to turn specific functionalities on or off, making it easier to check the model and perform efficient calculations.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class RunOptions(NamedTuple):\n    run: bool\n    extract: bool\n\nif __name__ == '__main__':\n    out_file_path=simulation(run_mode='local', wavelength=1.575, grids_per_lambda=25,\n               run_options=RunOptions(run=True, extract=True))\n")),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"By turning on/off the relevant functionalities, you can control the simulation process and obtain the desired results.")),(0,i.kt)("h3",{id:"3output-results"},"3.Output Results"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,"1.The electric intensity profile of the input fundamental TE mode and the transimission at different wavelengths.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(90881).Z,width:"640",height:"480"})),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(27235).Z,width:"640",height:"480"}))))),(0,i.kt)("p",null,"2.The z-normal E intensity of Y branch structure."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("img",{src:n(90117).Z,width:"1895",height:"799"}))))),(0,i.kt)("p",null,"Above all,the insert loss of this Y branch device is about 0.628 dB at 1.55 micrometer wavelength."),(0,i.kt)("h2",{id:"supplement"},"Supplement"),(0,i.kt)("div",{class:"text-justify"},(0,i.kt)("p",null,'To view a function\'s definition and supported parameters or a parameter dictionary, you can right-click on its name and select "Go to Definition"  or press "Ctrl" while left-clicking on its name to view its definition, showing the available parameters and their descriptions.')))))}u.isMDXComponent=!0},27235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/_monitor_out_abs(T)-278e0ea384ce45c14a0de4c9507d6f81.png"},90881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/_source_modeprofile-200f5a2db7c054f97312c6ece99c5720.png"},63477:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yintro1-4bd3e47e485ec1383b280fa751d0e515.png"},71394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yintro2-5588b67cde81740ef8f72f595f785093.png"},90117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zplot-e3d07d63f388bab19251dffea49f628d.png"}}]);