# Modulator



##  Introduction

​	We have developed an electro-optic modulator based on carrier-depletion mechanism in silicon to simulate carrier and index distribution in a global structure. The drift and diffusion of carriers result in depletion at the PN junction. Applying a reverse bias voltage at the cathode broadens the depletion region, altering the carrier concentration and modulating the material's refractive index. Gaussian doping was employed in this model. Modulation efficiency, capacitance, and resistance were calculated to analyze the electro-optic characteristics of the modulator.

## Simulation Methods



## Simulation Structure

​	The present structural file provides a comprehensive guide for constructing a simulation structure and establishing a Gaussian doping distribution. Initially, one must construct the geometric structure of the device, incorporate materials and physical field models, specify the doping distribution, and simulation boundary conditions, and set the light source and simulation solver. Eventually, the simulation result data should be extracted and output. 

​	Our simulation is designed with a light source entering along the X-axis, and the primary optoelectronic characteristic analysis takes place within the three-dimensional structure on the YZ plane. Gaussian doping method is employed to enhance the bandwidth and improve the performance of high-speed devices. The FDE solver is utilized to solve the distribution of effective refractive index, and the OEedvice solver is used to solve the doping distribution of the device. Finally, we generate ad output the  distribution map iof doping and index in modulator structure.

Application Library path: `:\SDK\V2.3.0.4\examples\active_demo\doping_function\MOD\MOD00_structure.py`

### 1. Basic Operations

​	It is essential to incorporate materials for structure. Although module of `maxoptics_sdk.all` provides default values for standard semiconductors, these values can be customized in `MOD_material.py` . 

​	The module of `basic` specifies the electron affinity and relative dielectric permittivity of the material. It is crucial to define the mode type and parameter values, if another model is used instead of the default. The default mobility model of Silicon is `Analytic` , but we use the mobility model of `Masetti` in this modulator. The `band` module includes the model of bandgap, bandgap narrowing , and recombination of  Auger, SRH, and Radiative. 

```python
elec_Si_properties = {"basic": {"model": "Default",
                                "Default": {"affinity": 4.2-1.11452/2.0, "permitti": 11.7}, "print": 1},
                      "mobility": {"model": "Masetti",
                                   "Masetti": {"mu_min2_h": 44.9, "mumax_e": 1471, "mumax_h": 470.5, "pc_h": 0}, "print": 1},
                      "band": {"model": "Default",
                               "Default": {
                                   # DOS
                                   "dos_formula": 2, "nc300": 3.21657e19, "nv300": 1.82868e19,
                                   # Bandgap
                                   "eg0": 1.16, "chi0": 4.2-1.16/2,
                                   # Bandgap Narrowing
                                   "bgn_model": "OldSlotboom", "e0_bgn_oldslotboom": 0.0045, "n0_bgn_oldslotboom": 1.00e17, "deg0_oldslotboom": 0,
                                   # Auger Recombination
                                   "augan": 2.8e-31, "augap": 9.9e-32, "augbn": 0, "augbp": 0, "augcn": 0, "augcp": 0, "aughn": 0, "aughp": 0,
                                   # SRH Recombination
                                   "taunmax": 3.3e-6, "taupmax": 4e-6, "nsrh_n": 7.1e15, "nsrh_p": 7.1e15, "nc_f": 1.5, "nv_f": 1.5, 
                                   # Radiative Recombination
                                   "c_direct": 1.6e-14,}, "print": 1}}
```

​	The parameter values of `matparas_1550` and `matparas_1310` are used for converting carrier distribution to a change in refractive index.

```python
matparas_1550 = {
    "dn_an": -8.8e-22,
    "dn_en": 1,
    "dn_ap": -8.5e-18,
    "dn_ep": 0.8,
    "dalpha_an": 8.5e-18,
    "dalpha_en": 1,
    "dalpha_ap": 6.0e-18,
    "dalpha_ep": 1
}

matparas_1310 = {
    "dn_an": -6.2e-22,
    "dn_en": 1,
    "dn_ap": -6e-18,
    "dn_ep": 0.8,
    "dalpha_an": 6e-18,
    "dalpha_en": 1,
    "dalpha_ap": 4e-18,
    "dalpha_ep": 1
}
```

### 2. Code description

#### 2.1 Import Modules

​	To begion, we need to use the `import` command to call the relevant functional modules and  parameter values of material from previously defined file.

```python
import maxoptics_sdk.all as mo
import os
import time
from maxoptics_sdk.helper import timed
from pathlib import Path
from MOD_material import matparas_1550, matparas_1310, elec_Si_properties
```

#### 2.2 Define Parameters

##### 2.2.1 General Parameters

We define these parameters for entire simulation process.

```python
wavelength = 1.31   
egrid_local = 0.01  
ogrid_global_y = 0.02   
ogrid_global_z = 0.02   
ogrid_local = 0.002   
temperature = 300   
normal_length = 10000   
ssac_amplitude = 0.001  # V
run_mode = "local"
simu_name = "MOD00_struc"
```

| Parameter      | Units | Description                                                  |
| -------------- | ----- | ------------------------------------------------------------ |
| wavelength     | um    | Specifies the optical wavelength of the source beam (in the vacuum) for mono-spectral simulations. |
| egrid_loacal   | um    | Specifies the appropriate size of mesh in the Y and Z direction for overall region of FDE simulation. |
| ogrid_global_y | um    | Specifies the mesh spacing in the Y direction for region of optical simulation. |
| ogrid_global_z | um    | Specifies the mesh spacing in the Z direction for region of optical simulation. |
| ogrid_local    | um    | Specifies the mesh spacing in the Y and Z direction for local region of optical simulation. |
| temperature    | K     | Specifies the temperature in Kelvin.                         |
| normal_length  | um    | Specifies the extent of a mesh section in the X direction.   |
| ssac_amplitude | V     |                                                              |
| run_mode       |       | Specifies the simulate model.                                |
| simu_name      |       | Specifies this file name to define name of output result folder. |

​	since we explore two communication wavelength, you should define the wavelength, and use next code to choose  relavent parameters values, which we defines in `MOD_material.py` .

```python
if wavelength > 1.4:
    Si_index_vs_doping = matparas_1550
else:
    Si_index_vs_doping = matparas_1310
```

##### 2.2.2 Structure Geometry

​	You should define the location of material in X, Y and Z direction about the modulator structure.

```python
st_x_min = -0.3
st_x_max = 0.3
st_x_mean = 0.5*(st_x_min+st_x_max)
st_x_span = st_x_max-st_x_min

st_y_min = -5
st_y_max = 5
st_y_mean = 0.5*(st_y_min+st_y_max)
st_y_span = st_y_max-st_y_min

st_z_min = -0.3
st_z_max = 0.8

slab_height = 0.09
rg_height = 0.22
rg_width = 0.5
elec_height = 0.5
elec_width = 1.2
```

| Parameter                                      | Units | Description                                                  |
| ---------------------------------------------- | ----- | ------------------------------------------------------------ |
| x_min, x_max, y_min, y_max, z_min, z_max       | um    | Specifies the minimum or maximum value in X/Y boundary of modulator structure. |
| x_mean, x_span, y_mean, y_span, z_mean, z_span | um    | Specifies the center or spacing value in X/Y boundary of modulator structure. |
| slab_height                                    | um    | Specifies the height of slab layer in Z direction.           |
| rg_height                                      | um    | Specifies the height of RG layer in Z direction.             |
| elec_height, elec_width                        | um    | Specifies the Z-direction height and Y-direction width of electron. |

##### 2.2.3 Electrical Simulation Boundary

​	Specifies the  boundary of electrical simulation for `OEDevice` solver in 3D direction.

```python
oe_x_min = -0.3
oe_x_max = 0.3
oe_x_mean = 0.5*(oe_x_min+oe_x_max)
oe_x_span = oe_x_max-oe_x_min

oe_y_min = -4.9
oe_y_max = 4.9
oe_y_mean = 0.5*(oe_y_min+oe_y_max)
oe_y_span = oe_y_max-oe_y_min

oe_z_min = -0.3
oe_z_max = 0.8
oe_z_mean = 0.5*(oe_z_min+oe_z_max)
oe_z_span = oe_z_max-oe_z_min
```

​	Specifies the  concentration of uniform doping by `constant_con` and its boundary throuth `center` and `span` in Y-Z plane.

```python
constant_y_center = 0
constant_y_span = 10
constant_z_center = 0.1
constant_z_span = 0.3
constant_con = 1e15
```

​	Specifies the  junction width and peak concentration of gaussian doping by`_jw` and  `_con` , its boundary throuth `center` and `span` in Y-Z plane of slab.

```python
p_slab_y_center = -2.575
p_slab_y_span = 4.85
p_slab_z_center = -0.105
p_slab_z_span = 0.39
p_slab_jw = 0.1
p_slab_con = 7e17

n_slab_y_center = 2.575
n_slab_y_span = 4.85
n_slab_z_center = -0.105
n_slab_z_span = 0.39
n_slab_jw = 0.1
n_slab_con = 5e17
```

​	Specifies the doping region of high concentration in slab layer, including boundary、junction width and peak concentration.

```py
p_plus_y_center = -3.5
p_plus_y_span = 3
p_plus_z_center = -0.04
p_plus_z_span = 0.52
p_plus_jw = 0.1
p_plus_con = 1e19

n_plus_y_center = 3.5
n_plus_y_span = 3
n_plus_z_center = -0.04
n_plus_z_span = 0.52
n_plus_jw = 0.1
n_plus_con = 1e19
```

​	Specifies the doping region of high concentration in waveguide structure, including boundary、junction width and peak concentration.

```py
p_wg_y_center = -0.12
p_wg_y_span = 0.36
p_wg_z_center = 0.1275
p_wg_z_span = 0.255
p_wg_jw = 0.12
p_wg_con = 5e17

n_wg_y_center = 0.105
n_wg_y_span = 0.29
n_wg_z_center = 0.12
n_wg_z_span = 0.235
n_wg_jw = 0.11
n_wg_con = 7e17
```

##### 2.2.4 Optical simulation Boundary

​	Specifies the boundary of optical simulation  for `FDE` solver in 3D direction. We only consider optical characteristic of Y-Z plane, since the light travels along X-axis.

```python
x_min = 0
x_max = 0
x_mean = 0.5*(x_min+x_max)
x_span = x_max-x_min

y_min = -2.3
y_max = 2.3
y_mean = 0.5*(y_min+y_max)
y_span = y_max-y_min

z_min = -1.5
z_max = 1.5
z_mean = 0.5*(z_min+z_max)
z_span = z_max-z_min
```

#### 2.3 Define Engineering Function

​	To facilitate the calling of other simulation scripts, it is recommended to define a function that can set materials, model, dope, and add boundary conditions.

##### 2.3.1 Creat Project

​	Create a new simulation project.

```python
def mod_project(project_name, run_mode, st_type):
    pj = mo.Project(name=project_name, location=run_mode)
```

##### 2.3.2 Set Material

​	The electrical and optical parameters of SiO2、Aluminium and Si materials in the material library can be accessed. If the parameters defined in the Si section of `MOD_material.py`  are different from the default parameters in the material library, the former will be prioritized. In the overlapping area of the materials, the material with a higher order value will take precedence over the one with a lower value. If the values are the same, the material defined later will override the one defined earlier. It is worth noting that the material Aluminium will call the PEC material library.

```python
mt = pj.Material()
    mt.add_lib(name="mat_sio2", data=mo.OE_Material.SiO2, order=1)
    mt.add_lib(name="mat_al", data=mo.OE_Material.Al, order=2)
    mt.add_lib(name="mat_si", data=mo.OE_Material.Si, order=2, override=elec_Si_properties)
    mt["mat_sio2"].set_optical_material(data=mo.Material.SiO2_Palik)
    mt["mat_si"].set_optical_material(data=mo.Material.Si_Palik)
    mt["mat_al"].set_optical_material(data=mo.Material.PEC)
```

##### 2.3.3 Define structure

​	To begin with, it is advisable to define the geometric region of the device structure and add materials to this region. The background material, which is usually Air or SiO2, should be added first. You can choose the geometry of structure in `type` ,  call materila library added above by `material` .

```python
 st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.4, background_material=mt["mat_sio2"])

    st.add_geometry(name="BOX", type="Rectangle", property={
        "material": {"material": mt["mat_sio2"]},
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": st_y_mean, "y_span": st_y_span, "z_min": st_z_min, "z_max": slab_height}})

    st.add_geometry(name="SOX", type="Rectangle", property={
        "material": {"material": mt["mat_sio2"]},
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": st_y_mean, "y_span": st_y_span, "z_min": slab_height, "z_max": st_z_max}})

    st.add_geometry(name="Slab", type="Rectangle", property={
        "material": {"material": mt["mat_si"]},
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": st_y_mean, "y_span": st_y_span, "z_min": 0, "z_max": slab_height}})

    st.add_geometry(name="Rg", type="Rectangle", property={
        "material": {"material": mt["mat_si"]},
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": 0, "y_span": rg_width, "z_min": slab_height, "z_max": rg_height}})
```

| Parameter | Units | Description                                                  |
| --------- | ----- | ------------------------------------------------------------ |
| name      |       | Restricts the applicability of the statement to regions with the specified name. |
| material  |       | Restricts the applicability of the statement to regions of the specified material. |
| type      |       | Specifies the  geometry of specified region.                 |
| geometry  |       | Specifies the boundary of specified region in 3D direction   |

​	We offer several alternative electrode region for establishing the electrical simulation area.

```python
if st_type == "normal":
        st.add_geometry(name="Anode", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y_min": st_y_min, "y_max": st_y_min + elec_width,
                         "z_min": slab_height, "z_max": slab_height + elec_height}})

        st.add_geometry(name="Cathode", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y_min": st_y_max - elec_width, "y_max": st_y_max,
                         "z_min": slab_height, "z_max": slab_height + elec_height}})

    elif st_type == "slab_N":
        st.add_geometry(name="Cathode", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y_min": st_y_max - elec_width, "y_max": st_y_max,
                         "z_min": slab_height, "z_max": slab_height + elec_height}})

        st.add_geometry(name="Ground", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": st_y_mean, "y_span": rg_width, "z_min": 0, "z_max": rg_height}})

    elif st_type == "slab_P":
        st.add_geometry(name="Anode", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y_min": st_y_min, "y_max": st_y_min + elec_width,
                         "z_min": slab_height, "z_max": slab_height + elec_height}})

        st.add_geometry(name="Ground", type="Rectangle", property={
            "material": {"material": mt["mat_al"]},
            "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": st_y_mean, "y_span": rg_width, "z_min": 0, "z_max": rg_height}})
    else:
        print("st_type must be chosen from 'normal', 'slab_N', 'slab_P'")
        raise
```

##### 2.3.4 Add Doping

​	You should define the basic parameters of doping module, such as  type、region and model. Then define source face、junction width peak concentration and  reference concentration in gaussian doping, or only concenteration in uniform doping.  `type` specifies the n-type or donor dopant in `"n"` , and  p-type or acceptor dopant in `"p"` , which may be used with gaussian and uniform prodile types.  `ref_concentration` specifies the XXX.

```python
st.add_doping(name="background_doping", type="p", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": constant_y_center, "y_span": constant_y_span, "z": constant_z_center, "z_span": constant_z_span},
        "general": {"distribution_function": "constant", "concentration": constant_con}})

    st.add_doping(name="p_slab", type="p", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": p_slab_y_center, "y_span": p_slab_y_span, "z": p_slab_z_center, "z_span": p_slab_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": p_slab_jw, "concentration": p_slab_con, "ref_concentration": 1e6}})

    st.add_doping(name="n_slab", type="n", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": n_slab_y_center, "y_span": n_slab_y_span, "z": n_slab_z_center, "z_span": n_slab_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": n_slab_jw, "concentration": n_slab_con, "ref_concentration": 1e6}})

    st.add_doping(name="p_plus", type="p", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": p_plus_y_center, "y_span": p_plus_y_span, "z": p_plus_z_center, "z_span": p_plus_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": p_plus_jw, "concentration": p_plus_con, "ref_concentration": 1e6}})

    st.add_doping(name="n_plus", type="n", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": n_plus_y_center, "y_span": n_plus_y_span, "z": n_plus_z_center, "z_span": n_plus_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": n_plus_jw, "concentration": n_plus_con, "ref_concentration": 1e6}})

    st.add_doping(name="p_wg", type="p", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": p_wg_y_center, "y_span": p_wg_y_span, "z": p_wg_z_center, "z_span": p_wg_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "lower_y", "junction_width": p_wg_jw, "concentration": p_wg_con, "ref_concentration": 1e6}})

    st.add_doping(name="n_wg", type="n", property={
        "geometry": {"x": st_x_mean, "x_span": st_x_span, "y": n_wg_y_center, "y_span": n_wg_y_span, "z": n_wg_z_center, "z_span": n_wg_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_y", "junction_width": n_wg_jw, "concentration": n_wg_con, "ref_concentration": 1e6}})

```

##### 2.3.5 Set Optical Simulate Boundry

​	You should set the boundry of optical simulation for `FDE` solver.

```python
st.OBoundary(property={
        "geometry": {"x": x_mean, "y": y_mean, "z": z_mean, "x_span": x_span, "y_span": y_span, "z_span": z_span},
        "boundary": {"y_min": "PEC", "y_max": "PEC", "z_min": "PEC", "z_max": "PEC"}})
```

##### 2.3.6 Add Mesh

​	When specifying meshes, a balance must be struck between accuracy and numerical efficiency. Achieving accuracy requires a fine mesh that can resolve all significant features of the solution, while numerical efficiency requires a coarse mesh that minimizes the total number of grid points.  

​	Due to the relatively simple structure of this modulator, a rough initial mesh can be established for electrical and optical simulation of the entire device. In order to obtain more accurate calculation results and better convergence, the `emesh`  module is employed to refine the mesh of the regions with significant electrical characteristics.

```python
st.add_mesh(name="OMesh_Local", property={
        "geometry": {"x": x_mean, "x_span": x_span, "y": 0, "y_span": 2*rg_width, "z_min": -0.5*rg_height, "z_max": 1.5*rg_height},
        "general": {"dy": ogrid_local, "dz": ogrid_local}})
st.add_emesh(name="EMesh_Local", property={
                 "y_min": st_y_min, "y_max": st_y_max, "z_min": st_z_min, "z_max": st_z_max, "mesh_size": egrid_local})
```

##### 2.3.7 Define Structure File

​	You should call the previous defined simulation module and define the name and path of the output file.

```python
return pj

@timed
def preview():
    pj = mod_project(project_name=simu_name + time_str, run_mode="local", st_type="normal")

    plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
    if not os.path.exists(plot_path):
        os.makedirs(plot_path)
```

##### 2.3.8 Set Simulate Solver

 	 add electrical and optical silmulation solver for output structure file. 

```python
simu = pj.Simulation()
simu.add(name="preview_fde", type="AFDE", property={
        "mesh_settings": {"global_mesh_uniform_grid": {"dy": ogrid_global_y, "dz": ogrid_global_z}},
        "fde_analysis": {"modal_analysis": {"calculate_modes": False, "mesh_structure": False, "wavelength": wavelength},
                         "modulator_analysis": {"modulator_analysis": True, "wavelength": wavelength, "np_path": ""}},
        "other": {**Si_index_vs_doping}})

simu.add(name="preview_oedevice", type="OEDevice", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
        "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
        "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})


```



```python
simu["preview_oedevice"].run_doping(name="x_in", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max}},
        norm="log", scale="equal", superimpose=False, show=False,
        material_list=["Si"], cmin=8e14, savepath=plot_path + simu_name + "_" + time_str + "doping")

simu["preview_fde"].run_index(name="index_preview_x_0", property={
        "geometry": {"x": 0, "x_span": 0, "y": 0, "y_span": 6, "z": 0.3, "z_span": 1}},
        savepath=plot_path + simu_name + "_" + time_str + "Index", export_csv=False, show=False)
```



##### 2.6  Set Simulation

##### 2.7 Retrieve Result

### 3 Output Result



​	

## Modulation efficiency

### 1. Basic Operations



### 2. Code description

## Capacitance And Resistance

​	Capacitance and resistance play crucial roles in determining the performance of devices. Optimal capacitance values enable the modulator to selectively allow or block signals within specific frequency ranges, facilitating signal coupling. Suitable resistance values enable adjustment of signal amplitude and modulation current determination.

### 1. Basic Operations



### 2. Code description







