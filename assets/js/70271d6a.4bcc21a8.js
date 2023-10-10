"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5095],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>_});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(a),c=n,_=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(_,l(l({ref:t},m),{},{components:a})):r.createElement(_,l({ref:t},m))}));function _(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},l="Extract result",p={unversionedId:"test/v2_core/8Extract",id:"test/v2_core/8Extract",title:"Extract result",description:"In this section, we support to extract simulation result data, exporting data results in various formats, facilitating more efficient data processing.",source:"@site/docs/test/v2_core/8Extract.md",sourceDirName:"test/v2_core",slug:"/test/v2_core/8Extract",permalink:"/my-website/docs/test/v2_core/8Extract",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/v2_core/8Extract.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"Preview",permalink:"/my-website/docs/test/v2_core/7Preview"}},s={},i=[{value:"8.1 FDE",id:"81-fde",level:2},{value:"8.1.1 Calculate mode result",id:"811-calculate-mode-result",level:3},{value:"8.1.2 Far-field FDE result",id:"812-far-field-fde-result",level:3},{value:"8.1.3 Mesh structure result",id:"813-mesh-structure-result",level:3},{value:"8.1.4 Frequency analysis result",id:"814-frequency-analysis-result",level:3},{value:"8.2 EME",id:"82-eme",level:2},{value:"8.2.1 EME propagate:facet data",id:"821-eme-propagatefacet-data",level:3},{value:"8.2.2 EME propagate:monitor",id:"822-eme-propagatemonitor",level:3},{value:"8.2.3 Propagation sweep:monitor",id:"823-propagation-sweepmonitor",level:3},{value:"8.2.4 Wavelength sweep:monitor",id:"824-wavelength-sweepmonitor",level:3},{value:"8.2.5 EME propagate:smatrix",id:"825-eme-propagatesmatrix",level:3},{value:"8.2.6 EME propagate:port mode infomation",id:"826-eme-propagateport-mode-infomation",level:3},{value:"8.2.7 EME propagate:port mesh structure",id:"827-eme-propagateport-mesh-structure",level:3},{value:"8.2.8 EME propagate:cell mesh structure",id:"828-eme-propagatecell-mesh-structure",level:3},{value:"8.2.9 EME propagate:port overlap",id:"829-eme-propagateport-overlap",level:3},{value:"8.2.10 EME propagate:cell mode information",id:"8210-eme-propagatecell-mode-information",level:3},{value:"8.2.11 EME propagate:propagation field",id:"8211-eme-propagatepropagation-field",level:3},{value:"8.2.12 EME propagate:internal S",id:"8212-eme-propagateinternal-s",level:3},{value:"8.2.13 EME propagate:cell p matrix/cell overlap/cell S/propagation S",id:"8213-eme-propagatecell-p-matrixcell-overlapcell-spropagation-s",level:3},{value:"8.3 FDTD",id:"83-fdtd",level:2},{value:"8.3.1 FDTD:power monitor",id:"831-fdtdpower-monitor",level:3},{value:"8.3.2 FDTD:time monitor",id:"832-fdtdtime-monitor",level:3},{value:"8.3.3 FDTD:mode expansion",id:"833-fdtdmode-expansion",level:3},{value:"8.3.4 FDTD:port mode information",id:"834-fdtdport-mode-information",level:3},{value:"8.3.5 FDTD:mode source information",id:"835-fdtdmode-source-information",level:3},{value:"8.3.6 FDTD:mode expansion information",id:"836-fdtdmode-expansion-information",level:3},{value:"8.4 Sweep",id:"84-sweep",level:2},{value:"8.4.1 parameter sweep",id:"841-parameter-sweep",level:3},{value:"8.4.2 smatrix sweep",id:"842-smatrix-sweep",level:3}],m={toc:i},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"extract-result"},"Extract result"),(0,n.kt)("p",null,"In this section, we support to extract simulation result data, exporting data results in various formats, facilitating more efficient data processing."),(0,n.kt)("p",null,"We support the atrributes to extract as below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"PowerAttributes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The following are power related physical attributes. Literal","['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density']")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ModeAttributes"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The following are mode related physical attributes. Literal",'["a", "b", "n", "p", "N", "P", "t_forward", "t_backward", "T_forward", "T_backward"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"The following are other attributes which can be extracted. Literal",'["TEratio", "neff_real", "neff_imag", "ng_real", "ng_imag", "wavelength_nm", "loss_dBpcm"]')))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"data"),(0,n.kt)("td",{parentName:"tr",align:"center"},"To decide what type/field data will be extracted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"export_csv"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether to export a csv. Default as False.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"show"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether to show the picture. If set to False, the picture will be saved instead. Default as False.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"savepath"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The save path of picture . Default as 'a'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"target"),(0,n.kt)("td",{parentName:"tr",align:"center"},"How the data is organized/displayed. Default as None.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attribute"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Which attribute will extracted, in few cases this parameter is not needed. Default as None.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"real"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether to add real part of data. Default as True.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"imag"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether to add imag part of data. If both real and imag is activate, 'ABS' data will be extracted. Default as True.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plot_x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The selection of x axis of heatmap or line plot.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plot_y"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The selection of y axis of heatmap.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"**kwargs"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Other visualization parameters. For example: 'monitor_name' , 'mode_expansion_name' for 'fdtd:mode_expansion'.")))),(0,n.kt)("h2",{id:"81-fde"},"8.1 FDE"),(0,n.kt)("p",null,"In this section, we will provide examples for extracting simulation result data from FDE simulation, along with a description table of parameters."),(0,n.kt)("h3",{id:"811-calculate-mode-result"},"8.1.1 Calculate mode result"),(0,n.kt)("p",null,"Get the result of calculated mode."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        # target - intensity\n        data: Literal['calculate_modes'],\n        attribute: PowerAttributes/ModeAttributes/OtherAttributes\n        export_csv=False, export_mat=False, export_zbf=False, \n        show=False, \n        real=True, \n        imag=True, \n        savepath:Any = 'a',\n        mode: int,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_mode{m}',\n                   attribute='E', mode=m, real=True, imag=True, **export_options, show=False)\n")),(0,n.kt)("h3",{id:"812-far-field-fde-result"},"8.1.2 Far-field FDE result"),(0,n.kt)("p",null,"Get the result of  calculated far-field FDE."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        # target - table\n        data: Literal['farfield_fde'],\n        attribute: PowerAttributes,\n        \n        show=False, \n        export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = 'a',\n        mode: int,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fde_res.extract(data='farfield_fde', savepath=f'{plot_path}05_{simu_name}_far_field',\n                                attribute='E', mode=0, export_csv=True)\n")),(0,n.kt)("h3",{id:"813-mesh-structure-result"},"8.1.3 Mesh structure result"),(0,n.kt)("p",null,"To extract the result of meshing structure."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['mesh_structure'],\n        savepath:Any = 'a',\n        target: Literal['intensity'] = 'intensity',\n        export_csv=False, export_mat=False, export_zbf=False,\n        show=False,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'simu.add(name=simu_name+"_cal_mode", type="mode_selection:user_select", simulation_name=simu_name, source_name="source",\n                 property={"modal_analysis": {"mesh_structure": True, "calculate_modes": True,\n                                              "wavelength": wavelength, "number_of_trial_modes": 10, "search": "max_index", "calculate_group_index": True}})\n')),(0,n.kt)("h3",{id:"814-frequency-analysis-result"},"8.1.4 Frequency analysis result"),(0,n.kt)("p",null,"To extract the result of frequency analysis."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        target: Literal['line'] = 'line',\n        data: Literal['frequency_analysis'],\n        attribute: Literal['neff', 'group_index', 'loss', 'polarization'],\n        \n        export_csv=False, export_mat=False, export_zbf=False, \n        show=False, \n        real=True, \n        imag=True, \n        savepath:Any = 'a',\n        plot_x: OptStr=None\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'result_fde.extract(data="frequency_analysis", savepath=f\'{plot_path}{k}_freq_sweep_neff\',\n                                   attribute="neff", real=True, imag=True, export_csv=True, export_mat=True, show=False)\n\n')),(0,n.kt)("h2",{id:"82-eme"},"8.2 EME"),(0,n.kt)("p",null,"To extract the relevant data of EME module. "),(0,n.kt)("h3",{id:"821-eme-propagatefacet-data"},"8.2.1 EME propagate:facet data"),(0,n.kt)("p",null,"Get the result of calculated facet data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n            self,\n            *,\n            data: Literal[\n                'eme_propagate:facet_data',\n            ],\n            export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = 'a',\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"eme_res.extract(data='eme_propagate:facet_data', savepath=plot_path, real=True, imag=True, export_csv=True)\n")),(0,n.kt)("h3",{id:"822-eme-propagatemonitor"},"8.2.2 EME propagate:monitor"),(0,n.kt)("p",null,"Get the result of monitor data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"extract(\n        self,\n        *,\n        data: Literal[\n            'eme_propagate:monitor',\n        ],\n        attribute: PowerAttributes,\n        monitor_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'eme_res.extract(\n                data="eme_propagate:monitor", savepath=plot_path + "013_eme_y_normal",\n                monitor_name="y_normal", attribute="E", export_csv=True)\n\n')),(0,n.kt)("h3",{id:"823-propagation-sweepmonitor"},"8.2.3 Propagation sweep:monitor"),(0,n.kt)("p",null,"Get the result of monitor data of propagation sweep."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            'propagation_sweep:monitor',\n        ],\n        attribute: PowerAttributes,\n        monitor_name: str,\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_z_normal",\n                            monitor_name="z_normal", attribute="E", export_csv=True)\n\n')),(0,n.kt)("h3",{id:"824-wavelength-sweepmonitor"},"8.2.4 Wavelength sweep:monitor"),(0,n.kt)("p",null,"Get the result of monitor data of wavelength sweep."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            'wavelength_sweep:monitor',\n        ],\n        attribute: PowerAttributes,\n        monitor_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'eme_res.extract(data="wavelength_sweep:sweep", savepath=plot_path + "20_wavelength_sweep",\n                            plot_x="wavelength", export_csv=True)\n')),(0,n.kt)("h3",{id:"825-eme-propagatesmatrix"},"8.2.5 EME propagate:smatrix"),(0,n.kt)("p",null,"Get the result of smatrix data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            'eme_propagate:smatrix',\n        ],\n        target: Literal['intensity'] = 'intensity',\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'eme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",\n                            target="intensity", export_csv=True)\n')),(0,n.kt)("h3",{id:"826-eme-propagateport-mode-infomation"},"8.2.6 EME propagate:port mode infomation"),(0,n.kt)("p",null,"Get the result of port mode data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        # target - intensity\n        data: Literal['eme_propagate:port_mode_info'],\n        target: Literal['intensity'] = 'intensity',\n        attribute: Literal['E', 'H'],\n        port_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        mode: Any = None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'eme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",\n                            target="intensity", export_csv=True)\n')),(0,n.kt)("h3",{id:"827-eme-propagateport-mesh-structure"},"8.2.7 EME propagate:port mesh structure"),(0,n.kt)("p",null,"Get the result of port mesh structure data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        # target - intensity\n        data: Literal['eme_propagate:port_mesh_structure'],\n        port_name: str,\n        target: Literal['line', 'intensity'] = 'intensity',\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"eme_res.extract(data='eme_propagate:port_mesh_structure',\n                                      savepath=f'{plot_path}{kL[3]}_eme_structure_{port_name}',\n                                      port_name=port_name, target='intensity',\n                                      # plot_x='y', plot_y='z', export_csv=False, show=False\n                                      )\n")),(0,n.kt)("h3",{id:"828-eme-propagatecell-mesh-structure"},"8.2.8 EME propagate:cell mesh structure"),(0,n.kt)("p",null,"Get the result of cell mesh structure data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            'eme_propagate:cell_mesh_structure',\n        ],\n        target: Literal[\"intensity\", \"line\"],\n        cell_params: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"eme_res.extract(data='eme_propagate:cell_mesh_structure',\n                                      savepath=f'{plot_path}{kL[4]}_eme_c{cell_index}_index',\n                                      cell_params='c' + str(cell_index), target='intensity', plot_x='y', plot_y='z',\n                                      # export_csv=False, show=False\n                                      )\n")),(0,n.kt)("h3",{id:"829-eme-propagateport-overlap"},"8.2.9 EME propagate:port overlap"),(0,n.kt)("p",null,"Get the result of port overlap data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def extract(\n        self,\n        *,\n        data: Literal[\n            'eme_propagate:port_overlap',\n        ],\n        target: Literal['line'] = 'line',\n        port_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    ) \n")),(0,n.kt)("h3",{id:"8210-eme-propagatecell-mode-information"},"8.2.10 EME propagate:cell mode information"),(0,n.kt)("p",null,"Get the result of cell mode information of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        target: Literal['intensity'] = 'intensity',\n        data: Literal[\n            'eme_propagate:cell_mode_info',\n        ],\n        attribute: Literal['E', 'H'],\n        cell_params: str,\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        mode: Any = None,\n    )\n")),(0,n.kt)("h3",{id:"8211-eme-propagatepropagation-field"},"8.2.11 EME propagate:propagation field"),(0,n.kt)("p",null,"Get the result of propagation field of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            'eme_propagate:prop_field',\n        ],\n        # target: intensity\",\n        attribute:PowerAttributes,\n        cell_params: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("h3",{id:"8212-eme-propagateinternal-s"},"8.2.12 EME propagate:internal S"),(0,n.kt)("p",null,"Get the result of internal S data of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal[\n            \"eme_propagate:internal_s\",\n        ],\n        target: Literal['intensity'] = 'intensity',\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    ) \n")),(0,n.kt)("h3",{id:"8213-eme-propagatecell-p-matrixcell-overlapcell-spropagation-s"},"8.2.13 EME propagate:cell p matrix/cell overlap/cell S/propagation S"),(0,n.kt)("p",null,"Get the result of cell p matrix/cell overlap/cell S/propagation S\ndata of EME propagation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'    def extract(\n        self,\n        *,\n        data: Literal[\n            "eme_propagate:cell_p_matrix",\n            "eme_propagate:cell_overlap",\n            "eme_propagate:cell_s",\n            "eme_propagate:prop_s",\n        ],\n        target: Literal[\'intensity\'] = \'intensity\',\n        cell_params: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = \'a\',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n')),(0,n.kt)("h2",{id:"83-fdtd"},"8.3 FDTD"),(0,n.kt)("p",null,"To extract the relevant data of FDTD module. "),(0,n.kt)("h3",{id:"831-fdtdpower-monitor"},"8.3.1 FDTD:power monitor"),(0,n.kt)("p",null,"Get the result of power monitor data of FDTD."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:power_monitor'],\n        target: Literal['intensity', 'line'],\n        attribute: Union[PowerAttributes, Literal[\"T\"]],\n        monitor_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        wavelength: Optional[Any] = None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[6]}_TransVsLambda_power',\n                         monitor_name='through', target='line', plot_x='wavelength', attribute='T', real=True, imag=False, export_csv=True, export_mat=True, show=False)\n")),(0,n.kt)("h3",{id:"832-fdtdtime-monitor"},"8.3.2 FDTD:time monitor"),(0,n.kt)("p",null,"Get the result of FDTD time monitor data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:time_monitor'],\n        target: Literal['intensity', 'line'],\n        attribute: Union[PowerAttributes, Literal[\"T\"]],\n        monitor_name: str,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        wavelength: Optional[Any] = None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:time_monitor', savepath=f'{plot_path}{kL[6]}_TransVstime',\n                         monitor_name='through', target='line', plot_x='time(fs)', attribute='E', real=True, imag=False, export_csv=True, export_mat=True, show=False)\n")),(0,n.kt)("h3",{id:"833-fdtdmode-expansion"},"8.3.3 FDTD:mode expansion"),(0,n.kt)("p",null,"Get the result of FDTD mode expansion data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:mode_expansion'],\n        target: Literal[\"intensity\", \"line\"],\n        attribute: ModeAttributes,\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        mode: Optional[Any] = None,\n        wavelength: Optional[Any] = None,\n        monitor_name: str,\n        mode_expansion_name: str,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:mode_expansion', savepath=f'{plot_path}{kL[5]}_TransVsLambda_mode=0',\n                         monitor_name='through', target='line', plot_x='wavelength', mode=0, attribute='T_forward', real=True, imag=True, export_csv=True, export_mat=True, show=False)\n\n")),(0,n.kt)("h3",{id:"834-fdtdport-mode-information"},"8.3.4 FDTD:port mode information"),(0,n.kt)("p",null,"Get the result of FDTD port mode information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:port_mode_info'],\n        target: Literal['intensity', 'line'],\n        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        port_name: str,\n        mode: Any = None,\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:port_mode_info', savepath=f'{plot_path}{kL[3]}_left_port_mode',\n                             port_name='left_port', target='intensity', attribute='E', mode=0, export_csv=True)\n")),(0,n.kt)("h3",{id:"835-fdtdmode-source-information"},"8.3.5 FDTD:mode source information"),(0,n.kt)("p",null,"Get the result of FDTD mode source information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:mode_source_mode_info'],\n        target: Literal['intensity', 'line'],\n        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        source_name: str,\n        mode: Any = None,\n        plot_x: OptStr=None, plot_y: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:mode_source_mode_info', savepath=f'{plot_path}{kL[2]}_source_modeprofile',\n                         source_name='source', target='intensity', attribute='E', mode=0, real=True, imag=True, **export_options, show=False)\n\n")),(0,n.kt)("h3",{id:"836-fdtdmode-expansion-information"},"8.3.6 FDTD:mode expansion information"),(0,n.kt)("p",null,"Get the result of FDTD mode expansion information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['fdtd:mode_expansion_mode_info'],\n        target: Literal['intensity', 'line'],\n        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],\n        \n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        monitor_name: str,\n        mode_expansion_name: str,\n        plot_x: OptStr=None, plot_y: OptStr=None,\n        mode: Any = None,\n        wavelength: Any = None,\n        )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"fdtd_res.extract(data='fdtd:mode_expansion_mode_info', savepath=f'{plot_path}{kL[3]}_me_throughmode_info',\n                         monitor_name='through', target='intensity', attribute='E', mode=0, wavelength=f'{wavelength}', real=True, imag=True, **export_options, show=False)\n")),(0,n.kt)("h2",{id:"84-sweep"},"8.4 Sweep"),(0,n.kt)("p",null,"To extract the relevant data of sweep function. "),(0,n.kt)("h3",{id:"841-parameter-sweep"},"8.4.1 parameter sweep"),(0,n.kt)("p",null,"Get the result of sweep data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['sweep'],\n        target: Literal['intensity', 'line'],\n        attribute: str,\n        monitor_name: Optional[str] = None,\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None,\n        **kwargs,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"swp_res.extract(data='sweep', target='line', attribute='S', plot_x='sweep_gap',\n                        savepath=f'{plot_path}/01 S', export_csv=True)\n\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"swp_res.extract(data='mode_expansion', target='line', attribute='T_forward', plot_x='sweep_gap', monitor_name='through',\n                savepath=f'{plot_path}/03 {resultL[2]}', export_csv=True, )\n")),(0,n.kt)("h3",{id:"842-smatrix-sweep"},"8.4.2 smatrix sweep"),(0,n.kt)("p",null,"Get the result of smatrix sweep data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"extract(\n        self,\n        *,\n        data: Literal['smatrix_sweep'],\n        target: Literal['intensity', 'line'],\n        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',\n        plot_x: OptStr=None,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"smatrix_res.extract(data='smatrix_sweep', savepath=f'{plot_path}{kL[8]}_smatrix_sweep',\n                            target='line', plot_x='wavelength', real=True, imag=True, export_csv=True, export_mat=True, show=False)\n")))}d.isMDXComponent=!0}}]);