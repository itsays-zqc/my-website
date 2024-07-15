"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8473],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(a),h=n,k=s["".concat(o,".").concat(h)]||s[h]||c[h]||i;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[s]="string"==typeof e?e:n,l[1]=m;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},65377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},l="Mesh",m={unversionedId:"test/SDK/3Mesh",id:"test/SDK/3Mesh",title:"Mesh",description:"In this section, we will discuss how to add meshing to the simulation. This step is crucial to ensure the precision and dependability of the simulation outcomes.",source:"@site/docs/test/SDK/3Mesh.md",sourceDirName:"test/SDK",slug:"/test/SDK/3Mesh",permalink:"/my-website/docs/test/SDK/3Mesh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test/SDK/3Mesh.md",tags:[],version:"current",frontMatter:{},sidebar:"testSidebar",previous:{title:"Structure",permalink:"/my-website/docs/test/SDK/2Structure"},next:{title:"Source",permalink:"/my-website/docs/test/SDK/4Source"}},o={},p=[{value:"3.1 Add mesh",id:"31-add-mesh",level:2},{value:"General properties",id:"general-properties",level:3},{value:"Geometry properties",id:"geometry-properties",level:4},{value:"2.1.12 Mesh order",id:"2112-mesh-order",level:3},{value:"3.2 Add emesh",id:"32-add-emesh",level:2},{value:"3.2.3 Add emesh along line",id:"323-add-emesh-along-line",level:3}],d={toc:p},s="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(s,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mesh"},"Mesh"),(0,n.kt)("font",{face:"Calibri"},(0,n.kt)("div",{class:"text-justify"},(0,n.kt)("p",null,"In this section, we will discuss how to add meshing to the simulation. This step is crucial to ensure the precision and dependability of the simulation outcomes."),(0,n.kt)("h2",{id:"31-add-mesh"},"3.1 Add mesh"),(0,n.kt)("p",null,"Add sub mesh to the simulation project with the code below (for optical simulation)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"lm = Project.LocalMesh()\nlm.add(\n        self,\n        *,\n        name: str,\n        property: dict,\n    )\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:"),"\nThe following command sets the size of the local mesh area to 6 um ",(0,n.kt)("em",{parentName:"p"}," 3 um ")," 3 um and the local mesh size of 0.2 um in the x, y, and z directions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'lm = pj.LocalMesh()\nlm.add(name="sub_mesh",\n        property={"general": {"dx": 0.2, "dy": 0.2, "dz": 0.2},\n                    "geometry": {"x": 0, "x_span": 6, "y": 0, "y_span":3, "z": 0, "z_span": 3 } } )\n')),(0,n.kt)("p",null,"wget ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mikefarah/yq/releases/download/v4.16.2/yq_linux_amd64"},"https://github.com/mikefarah/yq/releases/download/v4.16.2/yq_linux_amd64")," && chmod +x yq_linux_amd64 && mv yq_linux_amd64 /usr/local/bin/yq"),(0,n.kt)("h3",{id:"general-properties"},"General properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"dx, dy, dz"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h4",{id:"geometry-properties"},"Geometry properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x, y, z"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The center position of the geometry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x_span, y_span, z_span"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X span, Y span, Z span of the geometry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x_min, x_max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X min, X max position of the geometry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"y_min, y_max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y min, Y max position of the geometry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"z_min, z_max"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Z min, Z max position of the geometry.")))),(0,n.kt)("h3",{id:"2112-mesh-order"},"2.1.12 Mesh order"),(0,n.kt)("p",null,"The mesh order decides the coverage when creating a geometric structure."),(0,n.kt)("p",null,"When the mesh order of two structures are same, the structure which is established later has a higher priority. When the mesh order of two structures are different, the large numerical value of mesh order has greater priority than the small one. That is, The large mesh order of structure is able to cover small mesh order of structure.\nFor example, the mesh order=2 structure will cover the mesh order=1."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(54770).Z,width:"846",height:"261"})),(0,n.kt)("p",null,"The advantage is that increasing the value of mesh order allows user to make new nested structures in the complex model."),(0,n.kt)("h2",{id:"32-add-emesh"},"3.2 Add emesh"),(0,n.kt)("p",null,"In the context of electrical simulation, we present guidelines on how to incorporate meshing to ensure the precision and dependability of the simulation outcomes. The code explanations and a practical example provided below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"add_emesh(\n            self,\n            *,\n            name: str,\n            property: Dict[str, Any],\n         )\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Electric local mesh name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"property"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Electric local mesh property.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'st.add_emesh(name="EMesh_Local", property={\n    "y_min": oe_y_min, "y_max": oe_y_max, "z_min": oe_z_min, "z_max": oe_z_max, "mesh_size": egrid_local})\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The x-coordinate of the center point position of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.x_span"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The length in x direction of the electrical mesh. Restrained by condition: >0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.x_min"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The minimum x-coordinate endpoint data of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.x_max"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The maximum x-coordinate endpoint data of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.y"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The y-coordinate of the center point position of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.y_span"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The width in y direction of the electrical mesh. Restrained by condition: >0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.y_min"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The minimum y-coordinate endpoint data of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.y_max"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The maximum y-coordinate endpoint data of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.z"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the center point position of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.z_span"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The thinckness in z direction of the electrical mesh. Restrained by condition: >0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.z_min"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the bottom position of the thickness of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"geometry.z_max"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The z-coordinate of the top position of the thickness of the electrical mesh.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"mesh_size"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The max size of electrical simulation mesh.")))),(0,n.kt)("h3",{id:"323-add-emesh-along-line"},"3.2.3 Add emesh along line"),(0,n.kt)("p",null,"By implementing an electric mesh along line, you can accurately capture intricate electrical phenomena and variations, enhancing the comprehensiveness of your simulation results."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"add_emesh_along_line(\n            self,\n            *,\n            name: str,\n            property: Dict[str, Any],\n    )\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The name of electric mesh along line.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"property"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The property of electric mesh along line.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'st.add_emesh_along_line(name="EMesh_Ge_SiO2_Interface_Slope_Left", property={\n    "start_x": oe_x_mean, "start_y": -Ge_y_span_bottom/2, "start_z": Si_z_span,\n    "end_x": oe_x_mean, "end_y": -Ge_y_span_top/2, "end_z": Si_z_span+Ge_z_span,\n    "mesh_size": egrid_interface})\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"start_x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The minimum value of mesh region in x axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"start_y"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The minimum value of mesh region in y axis. Restrained by condition: >=0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"start_z"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The minimum value of mesh region in z axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"end_x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The maximum value of mesh region in x axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"end_y"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The maximum value of mesh region in y axis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"end_z"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The maximum value of mesh region in z axis.  Restrained by condition: >=0.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"mesh_size"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0.01"),(0,n.kt)("td",{parentName:"tr",align:"center"},"float"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The size of the unit grid.")))))))}c.isMDXComponent=!0},54770:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/mesh_order-45c1b50211336e6bd5cc2eea2aaaba53.png"}}]);