"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2183],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=m(a),g=r,k=s["".concat(p,".").concat(g)]||s[g]||c[g]||o;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},24933:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={},i="Preview",l={unversionedId:"test/SDK/7Preview",id:"test/SDK/7Preview",title:"Preview",description:"In this section, we currently offer the capability to provide an advanced preview of structural models, refractive index and doping profile.",source:"@site/docs/test/SDK/7Preview.md",sourceDirName:"test/SDK",slug:"/test/SDK/7Preview",permalink:"/my-website/docs/test/SDK/7Preview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/SDK/7Preview.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"Simulation",permalink:"/my-website/docs/test/SDK/6Simulation"},next:{title:"Analysis",permalink:"/my-website/docs/test/SDK/8Analysis"}},p={},m=[{value:"8.1 Preview index",id:"81-preview-index",level:2},{value:"8.2 Preview mode",id:"82-preview-mode",level:2},{value:"8.3 Structure show",id:"83-structure-show",level:2},{value:"8.4 Show 3D",id:"84-show-3d",level:2},{value:"8.5 Preview doping",id:"85-preview-doping",level:2}],d={toc:m},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preview"},"Preview"),(0,r.kt)("font",{face:"Calibri"},(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"In this section, we currently offer the capability to provide an advanced preview of structural models, refractive index and doping profile."),(0,r.kt)("p",null,"This preview serves to validate the structues before initiating the formal simulation, thereby assisting in verifying the accuracy of the structures. Consequently, it leads to reduced simulation time and an overall enhancement of simulation efficiency."),(0,r.kt)("h2",{id:"81-preview-index"},"8.1 Preview index"),(0,r.kt)("p",null,"Preview the index profile of a source or port or monitor in the project by using the  ",(0,r.kt)("inlineCode",{parentName:"p"},"preview_index")," function. The syntax and properties of this function are shown below, and it return visualizer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'preview_index(\n                monitor_name: str="",\n                port_name: str="",\n                source_name: str="",\n                savepath: str,\n                export_n: bool\n                export_c: bool\n                export_csv: bool\n                export_mat: bool\n        )\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"monitor_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"savepath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Savepath of the preview result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the refractive index component of the results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_c"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the conductivity component of the results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_csv"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the results in csv format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_mat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the results in mat format.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,'The following command previews the refractive index profile of the "power monitor" monitor and saves the data to the specified path. This script assumes that the structure and  power monitor have been set up, and the pj is an instance of the Project.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"simu_name = 'preview_index'\nm_name = \"power monitor\"\npath_name = f'path/preview_index'\n\nsimu = pj.Simulation()\nsimu[simu_name].preview_index(\n    monitor_name=m_name, savepath=path_name, export_csv=True, show=False, )\n\n")),(0,r.kt)("h2",{id:"82-preview-mode"},"8.2 Preview mode"),(0,r.kt)("p",null,"Preview the modal amplitude plot of a source or port or monitor in the project by using the  ",(0,r.kt)("inlineCode",{parentName:"p"},"preview_mode")," function. The syntax and properties of this function are shown below, and it return visualizer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'preview_index(\n                monitor_name: str="",\n                port_name: str="",\n                source_name: str="",\n                savepath: str,\n                target: str,\n                attribute: str,\n                mode: int,\n                export_csv: bool,\n                export_mat: bool\n        )\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"monitor_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"port_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"source_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Only one of monitor_name, port_name and source_name can be specify.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"savepath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Savepath of the preview result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"target"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The options include "intensity" and "target" to extract two-dimensional and one-dimensional data.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"attribute"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selections are 'E', 'H', 'Ex', 'Ey', 'Ez', 'Hx', 'Hy', 'Hz'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extract the mode from the mode list and sort it from 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_csv"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the results in csv format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"export_mat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose whether to export the results in mat format.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following command previews the fundamental mode of the mode source and saves the data to the specified path. This script assumes that the mode source has been set up, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'simu_name = \'preview_mode\'\npath = f"{plot_path}"\ns_name = "mode_source"\npath_name = path + "preview_index"\n\nsimu = pj.Simulation()\nsimu[simu_name].preview_modes(source_name=s_name, savepath=path_name,\n                                      target="intensity", attribute="E", real=True, imag=True, mode=0, show=False, export_csv=True)   \n')),(0,r.kt)("h2",{id:"83-structure-show"},"8.3 Structure show"),(0,r.kt)("p",null,"This portion of the code is primarily intended for show structure. Please note that this method becomes invalid if the current structure manager contains Pyramid or Arc-Waveguide 3D type geometries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"structure_show(\n            mode: str,\n            fig_type: Optional[str],\n            show: bool,\n            savepath: str,\n\n    )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"show"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If True, show the picture of the structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"savepath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Savepath of the preview result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fig_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"png"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selections are ","['png', 'svg']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled_components"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tuple"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Currently invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"xyratio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tuple"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(1,1)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Currently invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"celldisplay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Currently invalid")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following command shows the physical structure in the simulation, including the simulation area and monitor, etc. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"st = pj.Structure()\nst.structure_show(fig_type='png', show=False,\n                  savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name)\n")),(0,r.kt)("h2",{id:"84-show-3d"},"8.4 Show 3D"),(0,r.kt)("p",null,' show_with: Choose the type of display. The selection are "webviewer", "matplotlib"\uff0c"local_gui". The "webviewer" will start a server and toggle a browser windows. "matplotlib" will toggle a Axes3D windows. Default as "webviewer". '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following script uses a local GUI to show simulation settings, and the project needs to be saved before use.. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'simu = pj.Simulation()\npj.save_project()\nsimu[simu_name].show3d(show_with="local_gui")\n')),(0,r.kt)("h2",{id:"85-preview-doping"},"8.5 Preview doping"),(0,r.kt)("p",null,"The code within this module enables the preview of doping results for the respective structures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"run_doping(\n            self,\n            name: str,\n            property: RunDopingPostProcess,\n            norm: str,\n            scale: str,\n            superimpose: bool,\n            show: bool,\n            material_list: list,\n            cmin: float,\n            savepath: str\n    )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Parameters")),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"property"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The properties of doping preview.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The name of doping preview.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"show"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Decide whether to show directly the preview of structure directly in the related software.If set to False, the picture will be saved instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"savepath"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The save path for picture.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"norm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The normalization of colorbar. Selections are ","['linear', 'log']",". Default as 'linear'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"scale"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The type of  pcture scale. Selections are ","['equal', 'auto']",". Default as 'equal'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"superimpose"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Superimpose doping on structure or not. Default as True.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"material_list"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Specified material type list. Default as [].")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"region_list"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Specified region name list. Default as []. Superior to material_list when not empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cmax"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maximum concentration of heatmap colorbar. Default as None.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cmin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Minimum concentration of heatmap colorbar. Default as None.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@timed\n@with_path\ndef preview_doping(**kwargs):\n    # region --- 6. Preview Doping ---\n    run_options = RunOptions(index_preview=False, doping_preview=True, calculate_modes=False, run=False, extract=False)\n\n    vsource = "Cathode" # electrode solid\n    gnd = "Anode"       # electrode solid  \n    path = kwargs["path"]\n    time_str = time.strftime("%Y%m%d_%H%M%S", time.localtime())\n    simu_name = "MOD00_structure_doping"\n    project_name = f"{simu_name}_{time_str}"\n    plot_path = f"{path}/plots/{project_name}/"\n    current_file_path = os.path.abspath(__file__)\n\n    pj: Project = create_project(project_name, run_options)\n\n    create_structures(pj, run_options)\n\n    mt = pj.Material()\n    st = pj.Structure()\n\n    simu = pj.Simulation()\n    simu.add(name=simu_name, type="DDM", property={\n        "background_material": mt["mat_sio2"], \n        "general": {"solver_mode": "steady_state",\n                    "norm_length": normal_length,\n                    "temperature_dependence": "isothermal",\n                    "temperature": temperature,\n                    },\n        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y_min": oe_y_min, "y_max": oe_y_max, "z_min": oe_z_min, "z_max": oe_z_max},\n        "mesh_settings": {"mesh_size": egrid_global},\n        "advanced": {"non_linear_solver": "newton",\n                     "linear_solver": "mumps",\n                     "fermi_statistics": "disabled", # or "enabled"\n                     "damping": "none", # or "potential"\n                     "potential_update": 1.0,\n                     "max_iterations": 15,\n                     "relative_tolerance": 1e-5,\n                     "tolerance_relax": 1e5,\n                     "divergence_factor": 1e25\n                     }\n    })\n\n    add_ddm_settings(pj, run_options)\n\n    bd = pj.BoundaryCondition()\n\n    bd.add(name=vsource,type="electrode", property={\n        "geometry": {"surface_type": "solid", "solid": st[vsource]},\n        "general": {"electrode_mode": "steady_state",  \n                    "contact_type": "ohmic_contact",\n                    "sweep_type": "single", "voltage": 0,\n                    "apply_ac_small_signal": "none", \n                    # "envelop": "uniform",\n                    }\n    })\n    bd.add(name=gnd,type="electrode", property={\n        "geometry": {"surface_type": "solid", "solid": st[gnd]},\n        "general": {"electrode_mode": "steady_state",  \n                    "contact_type": "ohmic_contact",\n                    "sweep_type": "single", "voltage": 0,\n                    "apply_ac_small_signal": "none",\n                    # "envelop": "uniform",\n                    }\n    })\n\n    simu[simu_name].preview_doping(monitor_name="doping_monitor", savepath=f"{plot_path}doping", export_csv=True, real=True, imag=False)\n    # endregion\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.dimension"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set the orientation of the doping region. The selections are ","['2d_x_normal', '2d_y_normal', '2d_z_normal']",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The x-coordinate of the center point position of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The length in x direction of the doping region. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The minimum x-coordinate endpoint data of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The maximum x-coordinate endpoint data of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The y-coordinate of the center point position of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The width in y direction of the doping region. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The minimum y-coordinate endpoint data of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The maximum y-coordinate endpoint data of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the center point position of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The thinckness in z direction of the doping region. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the bottom position of the thickness of the doping region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the top position of the thickness of the doping region.")))))))}c.isMDXComponent=!0}}]);