"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={},l="Material",o={unversionedId:"manual/SDK/1Material",id:"manual/SDK/1Material",title:"Material",description:"The material module can create materials to be used in your simulation. Using Material() to instance the material module into the project, you can create new materials or utilize materials from the material library. The material database allows the creation of non dispersive, dispersive, and anisotropic types of materials.",source:"@site/docs/manual/SDK/1Material.md",sourceDirName:"manual/SDK",slug:"/manual/SDK/1Material",permalink:"/kb/docs/manual/SDK/1Material",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Max-Optics SDK",permalink:"/kb/docs/category/max-optics-sdk"},next:{title:"Structure",permalink:"/kb/docs/manual/SDK/2Structure"}},d={},m=[{value:"1.1 Add nondispersion material",id:"11-add-nondispersion-material",level:2},{value:"1.2 Add dispersion material",id:"12-add-dispersion-material",level:2},{value:"1.3 Add anisotropy material",id:"13-add-anisotropy-material",level:2},{value:"1.4 Add material from the material library",id:"14-add-material-from-the-material-library",level:2},{value:"1.5 Electrical Material Properties",id:"15-electrical-material-properties",level:2}],s={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"material"},"Material"),(0,r.kt)("font",{face:"Calibri"},(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The material module can create materials to be used in your simulation. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Material()")," to instance the material module into the project, you can create new materials or utilize materials from the material library. The material database allows the creation of non dispersive, dispersive, and anisotropic types of materials."),(0,r.kt)("h2",{id:"11-add-nondispersion-material"},"1.1 Add nondispersion material"),(0,r.kt)("p",null,"The syntax and properties of adding non dispersive material are shown below. This function does not return any data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add_nondispersion(\n        name: str,\n        data: List[Tuple[float, float]],\n        order: int = 2,\n        color: Optional[str] = None      \n    )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the name of the material.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"data"),(0,r.kt)("td",{parentName:"tr",align:"center"},"tuple"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Input a tuple, format is ","[(index real, index imag)]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"order"),(0,r.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Priority of the material, with larger number indicating higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"color"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Set the color for material display, format is "#RRGGBB" .')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),"\nThe following command adds non dispersive material to the project and sets data to ","[(1.444, 0)]",", where the real part of the refractive index is 1.444 and the imaginary part is 0. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nmt = pj.Material()\nmt.add_nondispersion(name="nondispersion_material", data=[(1.444, 0)], order=1,color="#654321")\n'))),(0,r.kt)("h2",{id:"12-add-dispersion-material"},"1.2 Add dispersion material"),(0,r.kt)("p",null,"The syntax and properties of adding dispersive material are shown below. This function does not return any data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add_dispersion(\n        name: str,\n        data: List[Tuple[float, float, float]],\n        order: int = 2,\n        color: Optional[str] = None\n    )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the name of the material.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tuple"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of tuple, format is ","[(wavelength, index real, index imag), ...]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"order"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates the priority of the material, with higher numbers indicating higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Set the color for material display, format is "#RRGGBB" .')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following command adds dispersive material to the project and sets data to ","[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)]",". This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'w_index = [(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)]\nmt = pj.Material()\nmt.add_dispersion(name="dispersion",\n    data=w_index, order=2, color="#654321"\n    )\n')),(0,r.kt)("h2",{id:"13-add-anisotropy-material"},"1.3 Add anisotropy material"),(0,r.kt)("p",null,"The syntax and properties of adding non anisotropy material are shown below. This function does not return any data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add_anisotropy(\n        name: str,\n        data: Union[List],\n        order: int = 2,\n        color: Optional[str] = None\n   )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the name of the material.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tuple"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of tuple, format is ","[(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), ...]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"order"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Priority of the material, with larger number indicating higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"color"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Set the color for material display, format is "#RRGGBB" .')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:"),"\nThe following command adds anisotropy material to the project and sets data to ","[(1.55, 2.211, 0, 2.138, 0, 2.211, 0)]",". This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nw_xyz = [(1.55, 2.211, 0, 2.138, 0, 2.211, 0)]\nmt = pj.Material()\nmt.add_anisotropy(name="anisotropy_material", \n      data=w_xyz, order=2\n      )\n')),(0,r.kt)("h2",{id:"14-add-material-from-the-material-library"},"1.4 Add material from the material library"),(0,r.kt)("p",null,"The syntax and properties of adding material from material library are shown below. This function does not return any data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add_lib(\n        name: str,\n        data: Optional[str],\n        order: int = 2\n    )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the name of the material.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A library material object, format is mo.Material.Air")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"order"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Priority of the material, with larger number indicating higher priority.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following command adds Si from material library to the project and sets order to 2. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'mt = pj.Material()\nmt.add_lib(name="Si", data=mo.Material.Si_Palik, order=2)\n\n')),(0,r.kt)("h2",{id:"15-electrical-material-properties"},"1.5 Electrical Material Properties"),(0,r.kt)("p",null,"To conduct simulations accurately, users are required to specify various electrical parameters and models corresponding to different material types. For insulators, defining permittivity is essential, while for conductors, specifying work function is necessary. When dealing with semiconductors, users have the flexibility to define DC permittivity, work function, and fundamental parameters including mobility and recombination."),(0,r.kt)("p",null,'In addition to the properties mentioned above, users can also define temperature dependencies for many parameters using the adjacent "f(T)" buttons. This action triggers a parameter editor displaying the associated formula.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nelec_Si_properties = {\n    "permittivity": {\n        "permittivity": 11.7,\n    },\n    "work_function":4.59,\n    "fundamental": {\n        "electron": "density_of_states",  \n        "hole": "density_of_states",  \n        "nc": {\n            # "constant": 3.21657e19,\n            "enable_model": True,\n            "nc300": 3.21657e19\n        },\n        "nv": {\n            # "constant": 1.82868e19,\n            "enable_model": True,\n            "nv300": 1.82868e19\n        },\n        "eg": {\n            # "constant": 1.12416,\n            "enable_model": True,\n            "alpha": 0.000473,\n            "beta": 636,\n            "eg0": 1.16\n        },\n        "narrowing": {\n            "model": "slotboom",  \n            "slotboom": {\n                "e0": 0.0045,\n                "n0": 1.0e17\n            }\n        },\n    },\n    "recombination":{\n        "trap_assisted": {\n            "enabled": True,\n            "taun": {\n                "enable_model": True,\n                # "constant": 1e-5,\n                "alpha": -1.5,\n                "dopant": {\n                    "model": "scharfetter",  \n                    "scharfetter": {\n                        "nref": 7.1e15,\n                        "taumax": 1.5e-9,\n                        "taumin":0\n                    }\n                },\n                "field": {\n                    "model": "none",  \n                    # "schenk": {\n                    #     "hbar_omega": 0.068,\n                    #     "mt": 0.258,\n                    #     "s": 3.5\n                    # }\n                }\n            },\n            "taup": {\n                "enable_model": True,\n                # "constant": 3e-6,\n                "alpha": -1.5,\n                "dopant": {\n                    "model": "scharfetter",  \n                    "scharfetter": {\n                        "nref": 7.1e15,\n                        "taumax": 1.5e-9,\n                        "taumin": 0\n                    }\n                },\n                "field": {\n                    "model": "none",  # or "none"\n                    # "schenk": {\n                    #     "hbar_omega": 0.068,\n                    #     "mt": 0.24,\n                    #     "s": 3.5\n                    # }\n                }\n            },\n            "ei_offset": 0.0\n        },\n        "radiative": {\n            "enabled": True,\n            "copt": 1.6e-14\n        },\n        "auger": {\n            "enabled": True,\n            "caun": {\n                "constant": 2.8e-31,\n                "enable_model": False,\n                # "a": 6.7e-32,\n                # "b": 2.45e-31,\n                # "c": -2.2e-32,\n                # "h": 3.46667,\n                # "n0": 1e18 \n            },\n            "caup": {\n                "constant": 9.9e-32,\n                "enable_model": False,\n                # "a": 7.2e-32,\n                # "b": 4.5e-33,\n                # "c": 2.63e-32,\n                # "h": 8.25688,\n                # "n0": 1e18\n            }\n        },\n        "band_to_band_tunneling": {\n            "enabled": False,\n            # "model": "hurkx",  # or "schenk"\n            # "hurkx": {\n            #     "agen": 3.5e21,\n            #     "arec": 3.5e21,\n            #     "bgen": 2.25e7,\n            #     "brec": 2.25e7,\n            #     "pgen": 2.0,\n            #     "prec": 2.0,\n            #     "alpha": 0\n            # },\n            # "schenk": {\n            #     "a": 8.977e20,\n            #     "b": 2.1466e7,\n            #     "hbar_omega": 0.0186\n            # }\n        }\n\n    },\n    "mobility":{\n        "mun": {\n            "lattice": {\n                # "constant": 1417,\n                "enable_model": True,\n                "eta": -2.5,\n                "mumax": 1471\n            },\n            "impurity": {\n                "model": "masetti", \n                "masetti": {\n                    "alpha": 0.68,\n                    "beta": 2,\n                    "cr": 9.68e16,\n                    "cs": 3.43e20,\n                    "mu1": 43.4,\n                    "mumin1": 52.2,\n                    "mumin2": 52.2,\n                    "pc": 0\n                }\n            },\n            "high_field": {\n                "model": "none",  \n                # "canali": {\n                #     "alpha": 0,\n                #     "beta0": 1.109,\n                #     "eta": 0.66\n                # },\n                # "driving_field": {\n                #     "model": "e_dot_j",  # or "grad_phi",\n                #     "grad_phi": {\n                #         "nref": 1e5\n                #     }\n                # },\n                # "vsat": {\n                #     "constant": 1.07e7,\n                #     "enable_model": False,\n                #     "gamma": 0.87,\n                #     "vsat0": 1.07e7\n                # }\n            }\n        },\n        "mup": {\n            "lattice": {\n                # "constant": 470.5,\n                "enable_model": True,\n                "eta": -2.2,\n                "mumax": 470.5\n            },\n            "impurity": {\n                "model": "masetti",  # or "none"\n                "masetti": {\n                    "alpha": 0.719,\n                    "beta": 2,\n                    "cr": 2.23e17,\n                    "cs": 6.1e20,\n                    "mu1": 29,\n                    "mumin1": 44.9,\n                    "mumin2": 44.9,\n                    "pc": 0\n                }\n            },\n            "high_field": {\n                "model": "none",  \n                # "canali": {\n                #     "alpha": 0,\n                #     "beta0": 1.213,\n                #     "eta": 0.17\n                # },\n                # "driving_field": {\n                #     "model": "e_dot_j",  # or "grad_phi",\n                #     "grad_phi": {\n                #         "nref": 1e5\n                #     }\n                # },\n                # "vsat": {\n                #     "constant": 8.37e6,\n                #     "enable_model": True,\n                #     "gamma": 0.52,\n                #     "vsat0": 8.37e6\n                # },\n            },\n        },\n    },\n}\n\n')),(0,r.kt)("p",null,"Description:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permittivity"),":\nSpecifies the relative dielectric permittivity of the material, represented by a 3x3 matrix."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"work_function"),":\nSpecifies the intrinsic work function of the material. Failure to specify a work function will result in Ohmic contacts irrespective of the material."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fundamental"),":\nSemiconductors must have basic properties defining their electronic behavior, including relative band gap, effective mass, or density of states."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"effective_mass/density_of_tates"),":\nUsers can specify the effective mass of electrons and holes, as well as the density of states for the conduction and valence bands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"band_gap"),":\nUsers can specify the band gap at 300K and choose a model of bandgap narrowing from the available options. The effective intrinsic carrier concentration (Ni) is calculated by combining the effective mass or equivalent density of states."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mobility"),":\nDefines the mobility of electrons and holes, accounting for corrections due to scattering and supporting velocity saturation effects under strong electric fields."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lattice"),":\nUser can define the low-field mobility model of electrons and holes at lattice, correct the charge carriers from lattice thermal vibration scattering at \u201cf(T)\u201d. The Masetti model in the pull-down box of impurity to correct the heavier doped scattering."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"high_field"),':\nUsers can opt for the Canali model to calculate mobility changes due to the drift speed reaching saturation under the influence of strong electric fields in the semiconductor. To specify the carrier\'s saturation velocity (vsat), users need to select either the size of the Quasi-Fermi level gradient or the component of the electric field in the direction of the current density from the "Driving Field" drop-down box.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recombination"),":\nThe continuous transition and recombination of different bands are crucial in simulation design. Users can enable or disable the corresponding composite model based on their preferences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trap_assisted"),":\nUsers can activate the trap-assisted composite, allowing them to directly define the temperature-dependent lifetime of electrons and holes or correct it using the carrier concentration-dependent Scharfetter model or the field effect model Schenk."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"radiative"),":\nUsers can activate the Radiative model and define the parameters of copt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auger"),':\nUsers can enable auger recombination of band-to-band, which is temperature-dependent by activating the "Enable Model" option.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"band_to_and_tunneling"),":\nUsers can activate the band-to-band tunneling model of Hurkx or Schenk."))))}c.isMDXComponent=!0}}]);