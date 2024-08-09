"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8165],{47731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(87617);const i={},l="Grating Coupler",o={unversionedId:"examples/SDK Examples/PIC/GratingCoupler/GratingCoupler",id:"examples/SDK Examples/PIC/GratingCoupler/GratingCoupler",title:"Grating Coupler",description:"Introduction:",source:"@site/docs/examples/SDK Examples/PIC/GratingCoupler/GratingCoupler.md",sourceDirName:"examples/SDK Examples/PIC/GratingCoupler",slug:"/examples/SDK Examples/PIC/GratingCoupler/",permalink:"/my-website/docs/examples/SDK Examples/PIC/GratingCoupler/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Directional Coupler",permalink:"/my-website/docs/examples/SDK Examples/PIC/DirectionalCoupler/"},next:{title:"Multi-Mode Interference",permalink:"/my-website/docs/examples/SDK Examples/PIC/MMI/"}},s={},p=[{value:"Introduction:",id:"introduction",level:2},{value:"Simulation",id:"simulation",level:2},{value:"1 Code Description",id:"1-code-description",level:3},{value:"1.1 Import Toolkit",id:"11-import-toolkit",level:4},{value:"1.2  Define Simulation Function and parameters",id:"12--define-simulation-function-and-parameters",level:4},{value:"1.3 Create project",id:"13-create-project",level:4},{value:"1.4 Add Material",id:"14-add-material",level:4},{value:"1.5 Add waveform",id:"15-add-waveform",level:4},{value:"1.6 Add Structure",id:"16-add-structure",level:4},{value:"1.7 Add Simulation",id:"17-add-simulation",level:4},{value:"1.8 Add source",id:"18-add-source",level:4},{value:"1.9 Add Monitor",id:"19-add-monitor",level:4},{value:"1.10 Run",id:"110-run",level:4},{value:"1.11 Run and Extract Results",id:"111-run-and-extract-results",level:4},{value:"1.12 Control Switch",id:"112-control-switch",level:4},{value:"2. Output results",id:"2-output-results",level:3},{value:"Electric profile",id:"electric-profile",level:4},{value:"Transmission",id:"transmission",level:4},{value:"References",id:"references",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grating-coupler"},"Grating Coupler"),(0,r.kt)("font",{face:"Calibri"},(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("h2",{id:"introduction"},"Introduction:"),(0,r.kt)("p",null,"Grating coupling is a simple method for connecting photonic integrated chips with optical fibers."),(0,r.kt)("h2",{id:"simulation"},"Simulation"),(0,r.kt)("h3",{id:"1-code-description"},"1 Code Description"),(0,r.kt)("h4",{id:"11-import-toolkit"},"1.1 Import Toolkit"),(0,r.kt)("p",null,"First, we need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"maxoptics_sdk")," and Python's third-party package. The import module for FDE and FDTD simulation are shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import maxoptics_sdk.all as mo\nfrom maxoptics_sdk.helper import timed, with_path\nimport os\nimport time\nimport numpy as np\nfrom typing import NamedTuple\n")),(0,r.kt)("h4",{id:"12--define-simulation-function-and-parameters"},"1.2  Define Simulation Function and parameters"),(0,r.kt)("p",null,"To facilitate parameter changes, we can define function to encapsulate the entire simulation project. Before starting the simulation, you can define variables to control the parameters. Set as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@timed\n@with_path\ndef simulation(*,wavelength,wavelength_span,grids_per_lambda,run_options: 'RunOptions',**kwargs):\n    # region --- General Parameters ---\n    waveform_name = f'wv{wavelength*1e3}'\n    path = kwargs['path']\n    simu_name = 'GratingCoupler'\n    time_str = time.strftime('%Y%m%d_%H%M%S', time.localtime())\n    project_name = f'{simu_name}_{time_str}'\n    plot_path = f'{path}/plots/{project_name}/'\n    gds_file_root_path = os.path.abspath(os.path.join(path, '..'))\n    gds_file = gds_file_root_path + '/examples_gds/gc.gds'\n    # endregion\n")),(0,r.kt)("h4",{id:"13-create-project"},"1.3 Create project"),(0,r.kt)("p",null,"You can create a new project using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," function of Max's software development toolkit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Project ---\npj = mo.Project(name=project_name)\n# endregion\n")),(0,r.kt)("h4",{id:"14-add-material"},"1.4 Add Material"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"Here we demonstrate using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," function to create material and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_lib")," function to add materials from the material library. You can refer to the following script to set material.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Material ---\nmt = pj.Material()\nmt.add_nondispersion(name='Si', data=[(3.47656, 0)], order=2)\nmt.add_nondispersion(name='SiO2', data=[(1.44402, 0)], order=2)\nmt.add_lib(name='Air', data=mo.Material.Air, order=2)\n# endregion\n")),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is used to define the name of the added material.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is used to receive refractive index data extracted from the material library.",(0,r.kt)("br",null),"The ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," is used to set the material priority of the grid.")),(0,r.kt)("h4",{id:"15-add-waveform"},"1.5 Add waveform"),(0,r.kt)("p",null,"Adding a light source for simulating in 3D FDTD, and we use ",(0,r.kt)("inlineCode",{parentName:"p"},"Waveform")," to set the waveform parameters of the light source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Waveform ---\nwv = pj.Waveform()\nwv.add(name=waveform_name,type='gaussian_waveform',\n        property={'set': 'frequency_wavelength',  # selections are ['frequency_wavelength','time_domain']\n                    'set_frequency_wavelength': {\n                        'range_type': 'wavelength',  # selections are ['frequency','wavelength']\n                        'range_limit': 'center_span',  # selections are ['min_max','center_span']\n                        'wavelength_center': wavelength,\n                        'wavelength_span': wavelength_span,},})\n# endregion\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," sets the name of the waveform, ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength_center")," sets the center wavelength of the light source, and ",(0,r.kt)("inlineCode",{parentName:"p"},"wavelength_span")," sets the wavelength range of the light source."),(0,r.kt)("h4",{id:"16-add-structure"},"1.6 Add Structure"),(0,r.kt)("div",{class:"text-justify"},"Microring resonator is typical filter, including two straight optical waveguides and a coupled ring-shaped waveguide.",(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure")," to create structure , where ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh_type")," is the type of mesh, ",(0,r.kt)("inlineCode",{parentName:"p"},"mesh_factor")," is the growth factor of the mesh, and ",(0,r.kt)("inlineCode",{parentName:"p"},"background_material")," is the background material of the structure. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"add_geometry")," function to add geometric structures and select the type from the structural components. The specific properties can be set as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Structure ---\nst = pj.Structure()\nst.add_geometry(name='top_cladding',type='gds_file',\n                property={'general': { 'path': gds_file, 'cell_name': 'gc', 'layer_name': (1, 0)},\n                            'geometry': {'z': 0.11, 'z_span': 0.22},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name='middle_cladding',type='gds_file',\n                    property={'general': {'path': gds_file, 'cell_name': 'gc', 'layer_name': (2, 0)},\n                            'geometry': {'z': 0.075, 'z_span': 0.15},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name='grating',type='gds_file',\n                property={'general': {'path': gds_file, 'cell_name': 'gc', 'layer_name': (3, 0)},\n                            'geometry': {'z': 0.185, 'z_span': 0.07},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\nst.add_geometry(name='SiO2_TOX_UP',type='gds_file',\n                property={'general': {'path': gds_file, 'cell_name': 'gc', 'layer_name': (4, 0)},\n                            'geometry': {'z': 0.5, 'z_span': 1.0},\n                            'material': {'material': mt['SiO2'], 'mesh_order': 1}})\nst.add_geometry(name='SiO2_TOX_DOWN',type='gds_file',\n                property={'general': {'path': gds_file, 'cell_name': 'gc', 'layer_name': (5, 0)},\n                            'geometry': {'z': -1, 'z_span': 2},\n                            'material': {'material': mt['SiO2'], 'mesh_order': 2}})\nst.add_geometry(name='Si_substrate',type='gds_file',\n                property={'general': {'path': gds_file, 'cell_name': 'gc', 'layer_name': (6, 0)},\n                            'geometry': {'z': -6, 'z_span': 8},\n                            'material': {'material': mt['Si'], 'mesh_order': 2}})\n# endregion\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"top_cladding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name the added geometry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"gds_file"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"select the type of structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x","\u2003","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"0","\u2003","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"float","\u2003","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"center position in the x-direction of the geometric structure","\xa0","\u2003","\u2003","\u2003","\u2003","\u2003","\u2003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"gds_file"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"file path of GDS file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cell_name"),(0,r.kt)("td",{parentName:"tr",align:null},"SSC"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the GDS cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"(1,0)"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the GDS layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"0.11"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"center position in the z-direction of the geometric structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z_span"),(0,r.kt)("td",{parentName:"tr",align:null},"0.22"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"length of the geometric structure in the z-direction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"material"),(0,r.kt)("td",{parentName:"tr",align:null},"mt",'["Si"]'),(0,r.kt)("td",{parentName:"tr",align:null},"material"),(0,r.kt)("td",{parentName:"tr",align:null},"select the material added Materials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mesh_order"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"set the priority of the material")))),(0,r.kt)("h4",{id:"17-add-simulation"},"1.7 Add Simulation"),(0,r.kt)("div",{class:"text-justify"},"We use the `Simulation` function to create a simulation and the `add` function to add a solver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- Simulation ---\nsimu = pj.Simulation()\nsimu.add(name=simu_name, type="FDTD",\n            property={"background_material": mt["Air"],\n                    "geometry": {\'x\': -3.5, \'x_span\': 47,\'y\': 0, \'y_span\': 28,\'z\': -0.5, \'z_span\': 5},\n                    "boundary_conditions": {"x_min_bc": "PML", "x_max_bc": "PML", "y_min_bc": "PML", "y_max_bc": "PML", "z_min_bc": "PML", "z_max_bc": "PML",\n                                            "pml_settings": {"all_pml": {"layers": 8, "kappa": 2, "sigma": 0.8, "polynomial": 3, "alpha": 0, "alpha_polynomial": 1, }}},\n                    "general": {\'simulation_time\': 30000, },\n                    "mesh_settings": {"mesh_factor": 1.2,"mesh_type": "auto_non_uniform",\n                                        "mesh_accuracy": {"cells_per_wavelength": grids_per_lambda},"minimum_mesh_step_settings": {"min_mesh_step": 1e-4},\n                                        "mesh_refinement": {"mesh_refinement": "curve_mesh",}},})\n# endregion\n')),(0,r.kt)("h4",{id:"18-add-source"},"1.8 Add source"),(0,r.kt)("div",{class:"text-justify"},"In 3D FDTD simulation, a light source is required. We use `Source` to create the light source and `add` to add the required light source. The settings for the light source as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- GaussianSource ---\nso = pj.Source()\nso.add(name='source',type='gaussian_source',\n        property={'general': {'angle_theta': 12,'angle_phi': 0,'polarization_angle': 90,\n                    \"waveform\": {\"waveform_id\": wv[waveform_name]}, \"inject_axis\": \"x_axis\", \"direction\": \"forward\",\n                    'beam_settings': {'beam_parameters': \"waist_size_and_position\",  # [waist_size_and_position,beam_size_and_divergence]\n                                    'waist_radius': 5.2,\n                                    'distance_from_waist': 1.5,}},\n                    'geometry': {'x': 4, 'x_span': 20, 'y': 0, 'y_span': 20, 'z': 1.5, 'z_span': 0}})\n# endregion\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to select the type of light source, and ",(0,r.kt)("inlineCode",{parentName:"p"},"axis")," to set the direction of the mode light source."),(0,r.kt)("h4",{id:"19-add-monitor"},"1.9 Add Monitor"),(0,r.kt)("p",null,"In the simulation, ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitor")," function is used to create monitor and ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," function is used to add a monitor. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to select a power monitor, the transmittance and field distribution of the cross-section can be obtained. It is necessary to add a time monitor to check the field strength at the end of the simulation to determine the accuracy of the simulation results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- Monitor ---\nmn = pj.Monitor()\nmn.add(name='Global Option', type='global_option',\n        property={'frequency_power': {'spacing_type': 'wavelength', 'spacing_limit': 'center_span',\n                                        'wavelength_center': wavelength, 'wavelength_span': wavelength_span, 'frequency_points': 5}})\nmn.add(name='x_normal', type='power_monitor',\n        property={'general': {'frequency_profile': {'spacing_type': 'wavelength', 'spacing_limit': 'center_span',\n                                                    'wavelength_center': wavelength, 'wavelength_span': wavelength_span, 'frequency_points': 101}},\n                    'geometry': {'monitor_type': '2d_x_normal', 'x': -26, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0.11, 'z_span': 3}})\nmn.add(name='y_normal', type='power_monitor',\n        property={'geometry': {'monitor_type': '2d_y_normal', 'x': -5, 'x_span': 44, 'y': 0, 'y_span': 0, 'z': 0.2, 'z_span': 3.5}})\n# endregion\n")),(0,r.kt)("h4",{id:"110-run"},"1.10 Run"),(0,r.kt)("p",null,"Pass in the name of the simulation and use ",(0,r.kt)("inlineCode",{parentName:"p"},"simu[simu_name].run")," function to run the simulation.We support the GPU acceleration for FDTD simlation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# region --- Run ---\nif run_options.run:\n    fdtd_res = simu[simu_name].run(resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0},{"id": 1},{"id": 2},{"id": 3}]})\n# endregion\n# endregion\n')),(0,r.kt)("h4",{id:"111-run-and-extract-results"},"1.11 Run and Extract Results"),(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"Extract data using ",(0,r.kt)("inlineCode",{parentName:"p"},"extract"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is the calculation result data, ",(0,r.kt)("inlineCode",{parentName:"p"},"savepath")," is the storage path, ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," is the classification of the data, and ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor_name")," is the name of the monitor. The data extraction reference is as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# region --- See Results ---\nif run_options.extract and run_options.run:\n    fdtd_res.extract(data='fdtd:power_monitor',savepath=f'{plot_path}02_x_normal_abs(T)',\n                        monitor_name='x_normal',attribute='T',target='line',plot_x='wavelength',real=True,imag=True,export_csv=True,show=False)\n    fdtd_res.extract(data='fdtd:power_monitor',savepath=f'{plot_path}02_y_normal_E_{wavelength}_um',\n                        monitor_name='y_normal',target=\"intensity\",attribute=\"E\",real=True,imag=False,\n                        wavelength=f\"{wavelength}\",plot_x=\"x\",plot_y=\"z\",show=False,export_csv=True,)\n# endregion\nreturn fdtd_res if run_options.run else None\n")),(0,r.kt)("h4",{id:"112-control-switch"},"1.12 Control Switch"),(0,r.kt)("p",null,'We can control the operation of the simulation by passing in bool values through tuple, as shown in the following code. In every simulation, only one solver will be enabled. When using the FDE solver, set "run_fde" to True and "run_fdtd" to False; When using the FDTD solver, set "run_fdtd" to True and "run_fde" to False.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class RunOptions(NamedTuple):\n    index_preview: bool\n    run: bool\n    extract: bool\n\nif __name__ == '__main__':\n    simulation(wavelength=1.55, wavelength_span=0.1, grids_per_lambda=8,\n               run_options=RunOptions(index_preview=True, run=True, extract=True))\n\n")),(0,r.kt)("h3",{id:"2-output-results"},"2. Output results"),(0,r.kt)("h4",{id:"electric-profile"},"Electric profile"),(0,r.kt)("p",null,"When the wavelength of the incident light meets the Bragg condition, the incident light will enter the waveguide through grating coupling."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{src:n(4941).Z,width:"640",height:"480"}))))),(0,r.kt)("h4",{id:"transmission"},"Transmission"),(0,r.kt)("p",null,"The transmittance of grating coupling varies with wavelength as shown in the following figure."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{src:n(74567).Z,width:"640",height:"480"}))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"D. Taillaert, F. Van Laere, M. Ayre, W. Bogaerts, D. Van Thourhout, P. Bienstman and R. Baets, \u201cGrating Couplers for Coupling between Optical Fibers and Nanophotonic Waveguides,\u201d Japanese Journal of Applied Physics, vol. 45, no. 8a, pp. 6071-6077, 2006."))))}u.isMDXComponent=!0},4941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Grating-e817ef3fea646c40fbda6ddbbe98f93b.png"},74567:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/T_grating-1c0a0a10f915bb43c99c8ae98ff2b5ec.png"}}]);