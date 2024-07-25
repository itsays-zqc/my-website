"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(m,".").concat(h)]||d[h]||s[h]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="Localmesh",o={unversionedId:"manual/SDK/3Mesh",id:"manual/SDK/3Mesh",title:"Localmesh",description:"The area of the added local mesh will override the default automatic mesh, regardless of the mesh step.",source:"@site/docs/manual/SDK/3Mesh.md",sourceDirName:"manual/SDK",slug:"/manual/SDK/3Mesh",permalink:"/docs/manual/SDK/3Mesh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/manual/SDK/3Mesh.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Structure",permalink:"/docs/manual/SDK/2Structure"},next:{title:"Source",permalink:"/docs/manual/SDK/4Source"}},m={},p=[{value:"3.1 Add local mesh",id:"31-add-local-mesh",level:2},{value:"General properties",id:"general-properties",level:3},{value:"Geometry properties",id:"geometry-properties",level:3},{value:"3.2 Add Electrical Local Mesh",id:"32-add-electrical-local-mesh",level:2}],c={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"localmesh"},"Localmesh"),(0,r.kt)("font",{face:"Calibri"},(0,r.kt)("div",{class:"text-justify"},(0,r.kt)("p",null,"The area of the added local mesh will override the default automatic mesh, regardless of the mesh step. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"The setting of the minimum mesh step in the solver is the globally smallest mesh size allowed in the simulation. This setting takes priority over other mesh constraints, including local mesh regions."),(0,r.kt)("h2",{id:"31-add-local-mesh"},"3.1 Add local mesh"),(0,r.kt)("p",null,"The syntax and properties of adding local mesh are shown below. This function does not return any data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add(\n        name: str,\n        property: dict,\n    )\n")),(0,r.kt)("h3",{id:"general-properties"},"General properties"),(0,r.kt)("p",null," dx/dy/dz: Specify the mesh size in the x/y/z direction."),(0,r.kt)("h3",{id:"geometry-properties"},"Geometry properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x, y, z"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The center position of the local mesh region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x_span, y_span, z_span"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X span, Y span, Z span of the local mesh region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x_min, x_max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X min, X max position of the local mesh region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"y_min, y_max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Y min, Y max position of the local mesh region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"z_min, z_max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Z min, Z max position of the local mesh region.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("p",null,"The following command sets the local mesh region to 6 um ",(0,r.kt)("em",{parentName:"p"}," 3 um ")," 3 um and the local mesh step to 0.2 um in the x, y and z directions. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'lm = pj.LocalMesh()\nlm.add(name="sub_mesh",\n        property={"general": {"dx": 0.2, "dy": 0.2, "dz": 0.2},\n                    "geometry": {"x": 0, "x_span": 6, "y": 0, "y_span":3, "z": 0, "z_span": 3 } } )\n')),(0,r.kt)("h2",{id:"32-add-electrical-local-mesh"},"3.2 Add Electrical Local Mesh"),(0,r.kt)("p",null,"In the context of electrical simulation, we present guidelines on how to incorporate meshing to ensure the precision and dependability of the simulation outcomes. The code explanations and a practical example provided below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"add_emesh(\n            self,\n            *,\n            name: str,\n            property: Dict[str, Any],\n         )\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Parameters")),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Electric local mesh name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"property"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Electric local mesh property.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'st.add_emesh(name="local_mesh", type="EMesh", property={\n        "general": {"mesh_size": 0.01},\n        "geometry": {"geometry_type": "directly_defined", "x": st_x_mean, "x_span": 0,\n                     "y": 0, "y_span": 0.8, "z_min": -0.1, "z_max": 0.3}})\n')),(0,r.kt)("p",null,"Property list of electrical local mesh in a rectangle region:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"general.mesh_size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.01"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The minimum value of the local mesh region.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"general.geometry_type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"directly defined"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Selections are ","['directly defined', 'solid','solid_solid']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"solid_solid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Names of the two structures at the interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"solid_1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available when geometry_type is 'solid_solid'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"solid_2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available when geometry_type is 'solid_solid'")))),(0,r.kt)("p",null,"Local mesh of electrical simulation in rectangle region property list, when ",(0,r.kt)("inlineCode",{parentName:"p"},"geometry_type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"directly defined"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Parameters")),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The x-coordinate of the center point position of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The length in x direction of the electrical mesh. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The minimum x-coordinate endpoint data of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.x_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The maximum x-coordinate endpoint data of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The y-coordinate of the center point position of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The width in y direction of the electrical mesh. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The minimum y-coordinate endpoint data of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.y_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The maximum y-coordinate endpoint data of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the center point position of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_span"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The thinckness in z direction of the electrical mesh. Restrained by condition: >0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the bottom position of the thickness of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"geometry.z_max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the top position of the thickness of the electrical mesh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"mesh_size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The max size of electrical simulation mesh.")))),(0,r.kt)("p",null,"Note: When the simulation region is in the xy plane, only the parameters in the x, y direction are effective, and parameters in the z direction will be ignored. Similarly for the rest."),(0,r.kt)("p",null,"By implementing an electric mesh in solid or its boundary, enhancing the comprehensiveness of your simulation results."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Example of electrical local mesh in a solid\n\n   lm = pj.LocalMesh()\n    \n    lm.add(name="EMesh_Si", type="EMesh", property={\n        "general": {"mesh_size": 0.02},\n        "geometry": {"geometry_type": "solid", "solid": st["Si_base"]}\n    })\n\n# Example of electrical local mesh in the solid boundary\n\n   lm = pj.LocalMesh()\n\n    lm.add(name="Ge_Boundary", type="EMesh", property={\n        "general": {"mesh_size": 0.002},\n        "geometry": {"geometry_type": "solid_solid", \n                     "solid_1": st["Ge"],\n                     "solid_2": st["Ge"],\n                     "growth_ratio": 2}\n    })\n')))))}s.isMDXComponent=!0}}]);