# Photodetector

<font face = "Calibri">

<div class="text-justify">

This example introduces the modeling and optoelectronic simulation of a vertical Ge-Si photodetector.


<br/>

## 1. Overview

This example utilizes FDTD simulation to obtain the optical field distribution in the Ge absorption layer. Subsequently, the photo-induced carrier generation rate is calculated based on the optical field, which is then imported into the OEDevice simulation to obtain the photo current. We also provide scripts for dark current, capacitance and resistance, frequency response, and saturation power. These simulations are divided into separate scripts, and they all call a unified script for modeling and material setup, making it convenient for modifications and management.


<br/>

## 2. Modeling

The modeling is completed by a callable function in the script file `VPD00_structure.py`.


<br/>

### 2.1 Import simulation toolkit

First, import `maxoptics_sdk` and other packages.

```
[1]
```
```python
import maxoptics_sdk.all as mo
import os
import time
from maxoptics_sdk.helper import timed
from pathlib import Path
from VPD_material import *
```
The script file `VPD_material.py` stores some modified electronic parameters of the materials, which are referenced to override default parameters in the modeling script.


<br/>

### 2.2 Set general parameters

Set some general parameters before modeling. At the beginning are those that need frequent modification during testing and optimization.

```
[2]
```
```python
# region --- 0. General Parameters ---
wavelength_center = 1.55    # um
wavelength_span = 0.1   # um
source_fraction = 0.001
temperature = 298.15    # K
normal_length = 20  # um
egrid_local = 0.1  # um egrid_global is not supported so far
egrid_genrate = 0.02 # um
egrid_interface = 0.002 # um
remesh_thickness = 0.004 # um
omesh_grid_Ge = 0.02 # um
omesh_grid_Si = 0.025    # um
cells_per_wavelength = 14
Ge_SiO2_recombination_velocity = 225000    # cm/s
run_mode = "local"
simu_name = "VPD00_struc"
```
Wavelength, temperature, the mesh grid size and some other parameters are defined above. They will be detailed in the subsequent settings.

<br/>

```
[3]
```
``` python
# --- structure geometry ---
SiO2_x_center = 0
SiO2_x_span = 100
SiO2_y_center = 0
SiO2_y_span = 20
SiO2_z_center = 0
SiO2_z_span = 10

input_wg_x_center = -42.5
input_wg_length = 5
input_wg_width = 0.5
Si_z_span = 0.22
Si_y_center = 0
taper_x_min = input_wg_x_center+input_wg_length/2
taper_length = 40
taper_width = 4

Si_slab_length = 22
Si_slab_x_center = taper_x_min+taper_length+Si_slab_length/2
Si_slab_width = 20

Ge_x_center = 10.75
Ge_x_span_bottom = 20
Ge_x_span_top = 19.5
Ge_y_span_bottom = 4
Ge_y_span_top = 3
Ge_z_span = 0.5
Ge_z_center = Si_z_span+Ge_z_span/2

anode_x_center = 10.75
anode_x_span = 19
anode_y_center = 3.7
anode_y_span_top = 2
anode_y_span_bottom = 2
anode_z_span = 1.37
anode_z_center = Si_z_span+anode_z_span/2

cathode_x_center = 10.75
cathode_x_span = 19
cathode_y_center = 0
cathode_y_span_top = 2.2
cathode_y_span_bottom = 2.2
cathode_z_span = 1
cathode_z_center = Si_z_span+Ge_z_span+cathode_z_span/2
```
These are geometric parameters of the structures.

<br/>


```
[4]
```

```pyton
# --- electrical simulation boundary ---
oe_x_min = 10
oe_x_max = 10
oe_x_mean = 0.5*(oe_x_min+oe_x_max)
oe_x_span = oe_x_max-oe_x_min

oe_y_min = 0
oe_y_max = 3.7
oe_y_mean = 0.5*(oe_y_min+oe_y_max)
oe_y_span = oe_y_max-oe_y_min

oe_z_min = -0.15
oe_z_max = 1.25
oe_z_mean = 0.5*(oe_z_min+oe_z_max)
oe_z_span = oe_z_max-oe_z_min
```
These are geometric parameters of the electrical simulation region.

<br/>


```
[5]
```
```python
# --- doping parameters ---
p_uniform_x_center = 10.75
p_uniform_x_span = 22.5
p_uniform_y_center = 0
p_uniform_y_span = 15
p_uniform_z_center = Si_z_span/2
p_uniform_z_span = Si_z_span
p_uniform_con = 1e15

p_well_x_center = 10.75
p_well_x_span = 22.5
p_well_y_center = 0
p_well_y_span = 15
p_well_z_center = -0.035
p_well_z_span = 0.53
p_well_junction_width = 0.05
p_well_con = 7e18

p_pplus_x_center = 10.75
p_pplus_x_span = 22.5
p_pplus_y_center = 4.75
p_pplus_y_span = 4.5
p_pplus_z_center = 0.1675
p_pplus_z_span = 0.115
p_pplus_junction_width = 0.2
p_pplus_con = 3e19

n_pplus_x_center = 10.75
n_pplus_x_span = 19.7
n_pplus_y_center = 0
n_pplus_y_span = 3
n_pplus_z_center = 0.72
n_pplus_z_span = 0.02
n_pplus_junction_width = 0.02
n_pplus_con = 1e20
n_pplus_ref = 1e16
```
These are parameters for doping setup, including doping box, concentration and the diffusion junction width.

<br/>



```
[6]
```
```python
# --- optical simulation boundary  ---
x_min = -43  # light direction
x_max = 21
x_mean = 0.5*(x_min+x_max)
x_span = x_max-x_min

y_min = -3.2  # lateral
y_max = 3.2
y_mean = 0.5*(y_min+y_max)
y_span = y_max-y_min

z_min = -0.5  # vertical
z_max = 1
z_mean = 0.5*(z_min+z_max)
z_span = z_max-z_min
# endregion
```
These are geometry parameters for the optical simulation region.

<br/>



### 2.3 Define the function for creating a new project

A function is defined for creating a project, setting materials, modeling, doping, setting boundary conditions, etc., which can be called by other simulation script files.

```
[7]
```
```python
def pd_project(project_name, run_mode, material_property):
```


<br/>

#### 2.3.1 Create a new project

Create a new simulation project.

```
[8]
```
```python
	# region --- 1. Project ---
    pj = mo.Project(name=project_name, location=run_mode)
	# endregion
```

`mo.Project()` parameters:

- `name`--Project name, which is also the folder name for the project files to be saved.
- `location`--The location of the computing resources. The active device simulation only support the option of `"local"` currently, which means the simulation uses the local computing resources.


<br/>

#### 2.3.2 Set materials

```
[9]
```
```python
	# region --- 2. Material ---
    if material_property == "normal":
        si_override = elec_Si_properties
        ge_override = elec_Ge_properties

    elif material_property == "transient":
        si_override = elec_Si_properties
        ge_override = elec_Ge_properties_for_transient
    else:
        print("material_property must be chosen from 'normal', 'transient'")
        raise
```

The `elec_Si_properties` and `elec_Ge_properties` are both variables imported from `VPD_material.py`, storing the modified electronic parameters for Silicon and Germanium respectively. Besides, more physics models for Germanium are applied in transient simulation, with the `elec_Ge_properties_for_transient` specified for it. The `material_property` is used to determine which type of material parameters to choose. For details of the physics model and electronic parameter settings, please refer to the appendix.

<br/>



```
[10]
```
```python
    mt = pj.Material()
    mt.add_lib(name="mat_sio2", data=mo.OE_Material.SiO2, order=1)
    mt.add_lib(name="mat_air", data=mo.OE_Material.Air, order=1)
    mt.add_lib(name="pec", data=mo.OE_Material.Al, order=2, override={
               "basic": {"model": "Default", "Default": {"affinity": 4.28}, "print": 1}})
    mt.add_lib(name="mat_si", data=mo.OE_Material.Si,
               order=2, override=si_override)
    mt.add_lib(name="mat_ge", data=mo.OE_Material.Ge,
               order=2, override=ge_override)

    mt["mat_sio2"].set_optical_material(data=mo.Material.SiO2_Palik)
    mt["mat_air"].set_optical_material(data=mo.Material.Air)
    mt["pec"].set_optical_material(data=mo.Material.PEC)
    mt["mat_si"].set_optical_material(data=mo.Material.Si_Palik)
    mt["mat_ge"].set_optical_material(data=mo.Material.Ge_Palik)
	# endregion
```

When adding materials, start by using the `add_lib` function to add electrical materials from the material library.

`add_lib()` parameters:
- `name`--Custom material name
- `data`--Material data, requiring one of the built-in materials in the electrical material library, namely `mo.OE_Material`
- `order`--`mesh_order` of the material, default to be 2
- `override`--Override the default electronic parameters by custom values. It's empty by default, which means default models and parameters are applied

<br/>

Then, use the `set_optical_material` function to set the optical property for the material.

`set_optical_material()` parameters：

- `data`--Optical material property，which can be one of the built-in materials in the optical material library `mo.Material`, or be from the custom optical material.

<br/>


*Example of using custom optical material properties*

```
[11]
```
```python
mt.add_lib(name="mat_sio2", data=mo.OE_Material.SiO2, order=1)
mt.add_nondispersion(name="mat_sio2_op", data=[(1.444, 0)], order=1)
mt["mat_sio2"].set_optical_material(data=mt["mat_sio2_op"].passive_material)
```

<br/>


Note:

1. Although the electrical and optical material properties are bound together through a two-step setting, in reality, there is no inherent connection between them. For instance, it is possible to set both the electrical properties of SiO2 and the optical properties of Si for the same material. The simulation will not generate errors or warnings in such cases, so users need to determine by themselves whether the material settings align with physics.

2. The FDTD simulation currently doesn't support metal materials. Therefore, the optical property of metal materials should be set to `mo.Material.PEC` and the material name should also be `"pec"`.


<br/>

#### 2.3.3 Create structures

First, initialize an object of `pj.Structure()`.

```
[12]
```
```python
# region --- 3. Structure ---
    st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.4, background_material=mt["mat_sio2"])
```

`pj.Structure()` parameters:

- `mesh_type`--Type of mesh refinement for optical simulation
- `mesh_factor`--The grading factor of non-uniform grid
- `background_material`--Background material

<br/>


```
[13]
```
```python
    st.add_geometry(name="BOX", type="Rectangle", property={
        "material": {"material": mt["mat_sio2"]},
        "geometry": {"x": SiO2_x_center, "x_span": SiO2_x_span, "y": SiO2_y_center, "y_span": SiO2_y_span, "z_min": -SiO2_z_span/2, "z_max": SiO2_z_center}})

    st.add_geometry(name="SOX", type="Rectangle", property={
        "material": {"material": mt["mat_sio2"]},
        "geometry": {"x": SiO2_x_center, "x_span": SiO2_x_span, "y": SiO2_y_center, "y_span": SiO2_y_span, "z_min": SiO2_z_center, "z_max": SiO2_z_span/2}})
    
    st.add_geometry(name="Si_input", type="Rectangle", property={
        "material": {"material": mt["mat_si"]},
        "geometry": {"x": input_wg_x_center, "x_span": input_wg_length, "y": Si_y_center, "y_span": input_wg_width, "z": Si_z_span/2, "z_span": Si_z_span}})

    st.add_geometry(name="Si_taper", type="LinearTrapezoid", property={
        "material": {"material": mt["mat_si"]},
        "geometry": {"point_1_x": taper_x_min+taper_length, "point_1_y": taper_width/2, "point_2_x": taper_x_min+taper_length, "point_2_y": -taper_width/2,
                     "point_3_x": taper_x_min, "point_3_y": -input_wg_width/2, "point_4_x": taper_x_min, "point_4_y": input_wg_width/2,
                     "z_min": 0, "z_max": Si_z_span, "x": 0, "y": 0}})

    st.add_geometry(name="Si_base", type="Rectangle", property={
        "material": {"material": mt["mat_si"]},
        "geometry": {"x": Si_slab_x_center, "x_span": Si_slab_length, "y": Si_y_center, "y_span": Si_slab_width, "z": Si_z_span/2, "z_span": Si_z_span}})

    st.add_geometry(name="Ge", type="Pyramid", property={
        "material": {"material": mt["mat_ge"]},
        "geometry": {"x": Ge_x_center, "x_span_bottom": Ge_x_span_bottom, "x_span_top": Ge_x_span_top,
                     "y": 0, "y_span_bottom": Ge_y_span_bottom, "y_span_top": Ge_y_span_top, "z": Ge_z_center, "z_span": Ge_z_span}})

    st.add_geometry(name="Cathode", type="Pyramid", property={
        "material": {"material": mt["pec"]},
        "geometry": {"x": cathode_x_center, "x_span_bottom": cathode_x_span, "x_span_top": cathode_x_span,
                     "y": cathode_y_center, "y_span_bottom": cathode_y_span_bottom, "y_span_top": cathode_y_span_top,
                     "z": cathode_z_center, "z_span": cathode_z_span}})

    st.add_geometry(name="Anode", type="Pyramid", property={
        "material": {"material": mt["pec"]},
        "geometry": {"x": anode_x_center, "x_span_bottom": anode_x_span, "x_span_top": anode_x_span,
                     "y": anode_y_center, "y_span_bottom": anode_y_span_bottom, "y_span_top": anode_y_span_top,
                     "z": anode_z_center, "z_span": anode_z_span}})
```

`add_geometry()` parameters:

- `name`--Structure name
- `type`--Structure type
- `property`--Other properties, listed below


<br/>



`Rectangle` property list：

|                     | default   | type     | notes                         |
|:--------------------|:----------|:---------|:------------------------------|
| geometry.x_span     |           | float    | Restrained by condition: >0.  |
| geometry.x_min      |           | float    |                               |
| geometry.x_max      |           | float    |                               |
| geometry.y_span     |           | float    | Restrained by condition: >0.  |
| geometry.y_min      |           | float    |                               |
| geometry.y_max      |           | float    |                               |
| geometry.x          |           | float    |                               |
| geometry.y          |           | float    |                               |
| geometry.z          |           | float    |                               |
| geometry.z_span     |           | float    | Restrained by condition: >0.  |
| geometry.z_min      |           | float    |                               |
| geometry.z_max      |           | float    |                               |
| geometry.rotate_x   | 0         | float    |                               |
| geometry.rotate_y   | 0         | float    |                               |
| geometry.rotate_z   | 0         | float    |                               |
| material.material   |           | material |                               |
| material.mesh_order |           | integer  | Restrained by condition: >=0. |

<br/>


`LinearTrapezoid` property list：

|                     | default | type     | notes                         |
| :------------------ | :------ | :------- | :---------------------------- |
| geometry.point_1_x  |         | float    |                               |
| geometry.point_1_y  |         | float    |                               |
| geometry.point_2_x  |         | float    |                               |
| geometry.point_2_y  |         | float    |                               |
| geometry.point_3_x  |         | float    |                               |
| geometry.point_3_y  |         | float    |                               |
| geometry.point_4_x  |         | float    |                               |
| geometry.point_4_y  |         | float    |                               |
| geometry.x          |         | float    |                               |
| geometry.y          |         | float    |                               |
| geometry.z          |         | float    |                               |
| geometry.z_span     |         | float    | Restrained by condition: >0.  |
| geometry.z_min      |         | float    |                               |
| geometry.z_max      |         | float    |                               |
| geometry.rotate_x   | 0       | float    |                               |
| geometry.rotate_y   | 0       | float    |                               |
| geometry.rotate_z   | 0       | float    |                               |
| material.material   |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |

<br/>


`Pyramid` property list：

|                        | default | type     | notes                         |
| :--------------------- | :------ | :------- | :---------------------------- |
| geometry.x_span_bottom |         | float    | Restrained by condition: >=0. |
| geometry.y_span_bottom |         | float    | Restrained by condition: >=0. |
| geometry.x_span_top    |         | float    | Restrained by condition: >=0. |
| geometry.y_span_top    |         | float    | Restrained by condition: >=0. |
| geometry.theta_x       | 0       | float    |                               |
| geometry.theta_y       | 0       | float    |                               |
| geometry.x             |         | float    |                               |
| geometry.y             |         | float    |                               |
| geometry.z             |         | float    |                               |
| geometry.z_span        |         | float    | Restrained by condition: >0.  |
| geometry.z_min         |         | float    |                               |
| geometry.z_max         |         | float    |                               |
| geometry.rotate_x      | 0       | float    |                               |
| geometry.rotate_y      | 0       | float    |                               |
| geometry.rotate_z      | 0       | float    |                               |
| material.material      |         | material |                               |
| material.mesh_order    |         | integer  | Restrained by condition: >=0. |

<br/>


Note:

1. The `mesh_order` of a structure is default to be the mesh order of its material. And the default value will be overridden when the structure's `mesh_order` is set explicitly.
2. The larger of the `mesh_order` of a structure, the higher of its priority. With `mesh_order` of two structures being the same, the structure created later has a higher priority than the one created earlier. When structures overlap, the one with higher priority overrides the one with lower priority.


<br/>

#### 2.3.4 Add doping

```
[14]
```
```python
    st.add_doping(name="Uniform", type="p", property={
        "geometry": {"x": p_uniform_x_center, "x_span": p_uniform_x_span,
                     "y": p_uniform_y_center, "y_span": p_uniform_y_span,
                     "z": p_uniform_z_center, "z_span": p_uniform_z_span},
        "general": {"distribution_function": "constant", "concentration": p_uniform_con}})
    st.add_doping(name="p_well", type="p", property={
        "geometry": {"x": p_well_x_center, "x_span": p_well_x_span, "y": p_well_y_center, "y_span": p_well_y_span,
                     "z": p_well_z_center, "z_span": p_well_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": p_well_junction_width,
                    "concentration": p_well_con, "ref_concentration": 1e6}})
    st.add_doping(name="p_pplus", type="p", property={
        "geometry": {"x": p_pplus_x_center, "x_span": p_pplus_x_span, "y": p_pplus_y_center, "y_span": p_pplus_y_span,
                     "z": p_pplus_z_center, "z_span": p_pplus_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": p_pplus_junction_width,
                    "concentration": p_pplus_con, "ref_concentration": 1e6}})
    st.add_doping(name="n_pplus", type="n", property={
        "geometry": {"x": n_pplus_x_center, "x_span": n_pplus_x_span, "y": n_pplus_y_center, "y_span": n_pplus_y_span,
                     "z": n_pplus_z_center, "z_span": n_pplus_z_span},
        "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": n_pplus_junction_width,
                    "concentration": n_pplus_con, "ref_concentration": n_pplus_ref}})
```



`add_doping()` parameters:

- `name`--Doping name
- `type`--Doping type. Options are `"n"` or `"p"` for n-type, p-type doping respectively
- `property`--Other properties

According to the selection of `general.distribution_function`, doping is divided into constant doping and gaussian doping. Detailed properties are listed below.

<br/>


Doping property list:

|                               | default | type  | notes                                              |
| :---------------------------- | :------ | :---- | :------------------------------------------------- |
| geometry.x                    |         | float |                                                    |
| geometry.x_span               |         | float |                                                    |
| geometry.y                    |         | float |                                                    |
| geometry.y_span               |         | float |                                                    |
| geometry.z                    |         | float |                                                    |
| geometry.z_span               |         | float |                                                    |
| geometry.rotate_x             |         | float |                                                    |
| geometry.rotate_y             |         | float |                                                    |
| geometry.rotate_z             |         | float |                                                    |
| geometry.x_min                |         | float |                                                    |
| geometry.x_max                |         | float |                                                    |
| geometry.y_min                |         | float |                                                    |
| geometry.y_max                |         | float |                                                    |
| geometry.z_min                |         | float |                                                    |
| geometry.z_max                |         | float |                                                    |
| general.distribution_function |         | str   | Selections are ['constant', 'gaussian']            |
| general.concentration         |         | float |                                                    |
| general.source_face           |         | str   | Available when distribution_function is 'gaussian' |
| general.junction_width        |         | float | Available when distribution_function is 'gaussian' |
| general.ref_concentration     |         | float | Available when distribution_function is 'gaussian' |
| volume.volume_type            | 'all'   | str   | Selections are ['all', 'material', 'region']       |
| volume.material_list          |         | list  | Available when volume_type is 'material'           |
| volume.region_list            |         | list  | Available when volume_type is 'region'             |

Description:

- `geometry`--Set the geometry parameters of doping box

- `general`--Set the distribution function, concentration and so on

  - `distribution_function`:
    - When it's set to `"constant"`, only `concentration` is required
    - When it's set to `"gaussian"`: `concentration`, `ref_concentration`, `junction_width`, `source_face` are required
  - `concentration`--Concentration in the non-diffusion area
  - `ref_concentration`--Concentration on the edge of diffusion area (edge of doping box)
  - `junction_width`--Diffusion junction width
  - `source_face`--The doping source face. Options are `"lower_x"`, `"lower_y"`, `"lower_z"`, `"upper_x"`, `"upper_y"` or `"upper_z"`. `"lower_x"` means the source face is `x=x_min`. Similarly for the rest. There is no diffusion area on the edge of source face. As for the other edges, there is a diffusion area within the doping box.

- `volume`--Set a list of regions or materials to be doped

  - `volume_type`:

    - When it's set to `"all"`(by default)，the doping is applied to all the (semiconductor) structures, restricted by the doping box

    - When it's set to `"material"`, `material_list` is required, which means the doping is applied to the structures with one of the specified materials and restricted by the doping box

    - When it's set to `"region"`, `region_list` is required, which means the doping is applied to the specified structures and restricted by the doping box

<br/>


*Examples for complete doping setting syntax*

```
[15]
```

```python
st.add_doping(name="p_pplus", type="p", property={
    "geometry": {"x": p_pplus_x_center, "x_span": p_pplus_x_span, "y": p_pplus_y_center, "y_span": p_pplus_y_span,
                 "z": p_pplus_z_center, "z_span": p_pplus_z_span},
    "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": p_pplus_junction_width,
                "concentration": p_pplus_con, "ref_concentration": 1e6},
    "volume": {"volume_type": "material", "material_list": [mt["mat_si"], mt["mat_ge"]]}})
st.add_doping(name="n_pplus", type="n", property={
    "geometry": {"x": n_pplus_x_center, "x_span": n_pplus_x_span, "y": n_pplus_y_center, "y_span": n_pplus_y_span,
                 "z": n_pplus_z_center, "z_span": n_pplus_z_span},
    "general": {"distribution_function": "gaussian", "source_face": "upper_z", "junction_width": n_pplus_junction_width,
                "concentration": n_pplus_con, "ref_concentration": n_pplus_ref},
    "volume": {"volume_type": "region", "region_list": ["Si_base", "Ge"]}})
```


<br/>

#### 2.3.5 Add surface recombination

```
[16]
```
```python
	# surface recombination
    st.add_surface_recombination(name="Cathode_Ge", property={
        "surface_type": "domain_domain", "interface_type": "MetalOhmicInterface",
        "domain_1": "Cathode", "domain_2": "Ge", "infinite_recombination": False, "velocity_electron": 1e7, "velocity_hole": 1e7})

    st.add_surface_recombination(name="Anode_Si", property={
        "surface_type": "domain_domain", "interface_type": "MetalOhmicInterface",
        "domain_1": "Anode", "domain_2": "Si_base", "infinite_recombination": False, "velocity_electron": 1e7, "velocity_hole": 1e7})

    st.add_surface_recombination(name="Ge_SiO2", property={
        "surface_type": "domain_domain", "interface_type": "InsulatorInterface",
        "domain_1": "Ge", "domain_2": "SOX", "velocity_electron": Ge_SiO2_recombination_velocity, "velocity_hole": Ge_SiO2_recombination_velocity})

    st.add_surface_recombination(name="Ge_Si", property={
        "surface_type": "domain_domain", "interface_type": "HeteroJunction", "domain_1": "Ge", "domain_2": "Si_base"})
	# endregion
```

`add_surface_recombination()` parameters：

- `name`--Custom name
- `property`--Other properties

<br/>


Surface recombination property list:

|                        | default             | type   | notes                                                                                                                |
|:-----------------------|:--------------------|:-------|:---------------------------------------------------------------------------------------------------------------------|
| surface_type           | domain_domain       | string | Selections are ['domain_domain', 'material_material'].                                                               |
| interface_type         | null                | string | Selections are ['null', 'InsulatorInterface', 'HomoJunction', 'HeteroJunction', 'MetalOhmicInterface', 'SolderPad']. |
| infinite_recombination | true                | bool   | Available when interface_type is 'MetalOhmicInterface'                                                               |
| velocity_hole          | 0                   | float  | Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface'                                          |
| velocity_electron      | 0                   | float  | Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface'                                          |
| domain_1               |                     | string | Available when surface_type is 'domain_domain'                                                                       |
| domain_2               |                     | string | Available when surface_type is 'domain_domain'                                                                       |
| material_1             |                     | material | Available when surface_type is 'material_material'                                                                 |
| material_2             |                     | material | Available when surface_type is 'material_material'                                                                 |

Description:

- `surface_type`--Type of selection for the surface
  - When `surface_type` is `"domain_domain"`, the surface is the interface between two structures 
  - When `surface_type` is "material_material"`, the surface is the interface between two materials

- `interface_type`--Type of contact for the surface
  - `"InsulatorInterface"`--Semiconductor-insulator interface
  - `"HomoJunction"`--Homogeneous semiconductor-semiconductor interface
  - `"HeteroJunction"`--Heterogeneous semiconductor-semiconductor interface
  - `"MetalOhmicInterface"`--Semiconductor-conductor interface
  - `"SolderPad"`--Conductor-insulator interface

- `infinite_recombination`--Only available when `interface_type` is `"MetalOhmicInterface"`. The surface recombination velocity of holes and electrons will be available when `infinite_recombination` is `False`

- `velocity_hole`, `velocity_electron`--Surface recombination velocity of holes and electrons. Available when `interface_type` is `"MetalOhmicInterface"` or `"InsulatorInterface"`

- `domain_1`, `domain_2`--Names of the two structures at the interface. They must be set explicitly when `surface_type` is `"domain_domain"`

- `material_1`, `material_2`--The two materials at the interface. They must be set explicitly when `surface_type` is `"material_material"`


<br/>

#### 2.3.6 Set waveform

```
[17]
```
```python
	# region --- 4. Waveform ---
    wv = pj.Waveform()
    wv.add(name="waveform", wavelength_center=wavelength_center, wavelength_span=wavelength_span)
	# endregion
```

`wv.add()` parameters：

- `name`--Name of the waveform
- `wavelength_center`--Center of wavelength
- `wavelength_span`--Span of wavelength
- `unit`--Unit of wavelength. Options are`"um"` and `"nm"`，default to be`"um"`


<br/>

#### 2.3.7 Set boundary conditions of optical simulation

```
[18]
```
```python
	# region --- 5. oboundary --- for FDTD simulation
    st.OBoundary(property={
        "geometry": {"x": x_mean, "y": y_mean, "z": z_mean, "x_span": x_span, "y_span": y_span, "z_span": z_span}})
 	# endregion
```
<br/>


Boundary conditions of optical simulation property list:

|                                  | default   | type    | notes                                                                                     |
|:---------------------------------|:----------|:--------|:------------------------------------------------------------------------------------------|
| general_pml.pml_same_settings    | true      | bool    |                                                                                           |
| general_pml.pml_profile          | standard  | string  |                                                                                           |
| general_pml.pml_layer            |           | integer |                                                                                           |
| general_pml.pml_kappa            |           | float   |                                                                                           |
| general_pml.pml_sigma            |           | float   |                                                                                           |
| general_pml.pml_polynomial       |           | integer |                                                                                           |
| general_pml.pml_alpha            |           | float   |                                                                                           |
| general_pml.pml_alpha_polynomial |           | integer |                                                                                           |
| general_pml.pml_min_layers       |           | integer |                                                                                           |
| general_pml.pml_max_layers       |           | integer |                                                                                           |
| geometry.x                       |           | float   |                                                                                           |
| geometry.x_span                  |           | float   | Restrained by condition: >=0.                                                             |
| geometry.x_min                   |           | float   |                                                                                           |
| geometry.x_max                   |           | float   |                                                                                           |
| geometry.y                       |           | float   |                                                                                           |
| geometry.y_span                  |           | float   | Restrained by condition: >=0.                                                             |
| geometry.y_min                   |           | float   |                                                                                           |
| geometry.y_max                   |           | float   |                                                                                           |
| geometry.z                       |           | float   |                                                                                           |
| geometry.z_span                  |           | float   | Restrained by condition: >=0.                                                             |
| geometry.z_min                   |           | float   |                                                                                           |
| geometry.z_max                   |           | float   |                                                                                           |
| boundary.x_max                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].                                |
| boundary.x_min                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
| boundary.y_max                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].                                |
| boundary.y_min                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
| boundary.z_max                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].                                |
| boundary.z_min                   |           | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |

Description:

- `geometry`--Set the optical simulation region

- `boundary`--Set the optical boundary conditions, default to be `"PML"` for all the boundaries

- `general_pml`--Set pml-related parameters


<br/>

#### 2.3.8 Set local mesh

```
[19]
```
```python
	# region --- 6. mesh ---
    st.add_mesh(name="OMesh_Ge", property={
        "geometry": {"x": x_min+1, "x_span": 0, "y": 0, "y_span": 0, "z": Ge_z_center, "z_span": Ge_z_span},
        "general": {"dz": omesh_grid_Ge}})

    st.add_mesh(name="OMesh_Si", property={
        "geometry": {"x": x_min+1, "x_span": 0, "y": 0, "y_span": 0, "z": Si_z_span/2, "z_span": Si_z_span},
        "general": {"dz": omesh_grid_Si}})

    st.add_emesh(name="EMesh_Local", property={
        "y_min": oe_y_min, "y_max": oe_y_max, "z_min": oe_z_min, "z_max": oe_z_max, "mesh_size": egrid_local})
    
    st.add_emesh(name="EMesh_Genrate", property={
        "y_min": oe_y_min, "y_max": Ge_y_span_top/2, "z_min": Si_z_span, "z_max": Ge_z_span+Si_z_span, "mesh_size": egrid_genrate})

    st.add_emesh(name="EMesh_Ge_SiO2_Interface", property={
        "y": 0, "y_span": Ge_y_span_top, "z": Si_z_span+Ge_z_span, "z_span": remesh_thickness, "mesh_size": egrid_interface})

    st.add_emesh(name="EMesh_Ge_Si_Interface", property={
        "y": 0, "y_span": Si_slab_width, "z": Si_z_span, "z_span": remesh_thickness, "mesh_size": egrid_interface})
    
    st.add_emesh_along_line(name="EMesh_Ge_SiO2_Slope_Interface", property={
        "start_x": oe_x_mean, "start_y": Ge_y_span_bottom/2, "start_z": Si_z_span, "end_x": oe_x_mean, "end_y": Ge_y_span_top/2, "end_z": Si_z_span+Ge_z_span, "mesh_size": egrid_interface})
	# endregion
```

`add_mesh()` set the local mesh for optical simulation, parameters:

- `name`--Custom name
- `property`--Other properties


<br/>


Optical local mesh property list:

|                         | default | type  | notes                         |
| :---------------------- | :------ | :---- | :---------------------------- |
| general.dx              |         | float | Restrained by condition: >0.  |
| general.dy              |         | float | Restrained by condition: >0.  |
| general.dz              |         | float | Restrained by condition: >0.  |
| geometry.x              |         | float |                               |
| geometry.x_span         |         | float | Restrained by condition: >=0. |
| geometry.x_min          |         | float |                               |
| geometry.x_max          |         | float |                               |
| geometry.y              |         | float |                               |
| geometry.y_span         |         | float | Restrained by condition: >=0. |
| geometry.y_min          |         | float |                               |
| geometry.y_max          |         | float |                               |
| geometry.z              |         | float |                               |
| geometry.z_span         |         | float | Restrained by condition: >=0. |
| geometry.z_min          |         | float |                               |
| geometry.z_max          |         | float |                               |

Description:

- `geometry`--Set the region of local mesh. When `x_span` doesn't vanish, the mesh setting will be applied to the range along the x axis. Similarly for the rest

- `general`--Set the mesh size in the corresponding direction

<br/>


`add_emesh()` set a rectangle region for local mesh of electrical simulation. Parameters:

- `name`--Custom name
- `property`--Other properties

<br/>


Local mesh of electrical simulation in rectangle region property list:

|           | default | type  | notes                                  |
| :-------- | :------ | :---- | :------------------------------------- |
| x         |         | float |                                        |
| x_span    |         | float | Restrained by condition: >=0.          |
| x_min     |         | float |                                        |
| x_max     |         | float |                                        |
| y         |         | float |                                        |
| y_span    |         | float | Restrained by condition: >=0.          |
| y_min     |         | float |                                        |
| y_max     |         | float |                                        |
| z         |         | float |                                        |
| z_span    |         | float | Restrained by condition: >=0.          |
| z_min     |         | float |                                        |
| z_max     |         | float |                                        |
| mesh_size |         | float | max size of electrical simulation mesh |



Note:

1. When the simulation region is in the xy plane, only the parameters in the x, y direction are effective, and parameters in the z direction will be ignored. Similarly for the rest.

<br/>


`add_emesh_along_line()` set a line region for local mesh of electrical simulation. Parameters：

- `name`--Custom name
- `property`--Other properties

<br/>


Local mesh of electrical simulation in line region property list:

|           | default | type  | notes                         |
| :-------- | :------ | :---- | :---------------------------- |
| start_x   | 0       | float |                               |
| start_y   | 0       | float | Restrained by condition: >=0. |
| start_z   | 0       | float |                               |
| end_x     | 1       | float |                               |
| end_y     | 1       | float |                               |
| end_z     | 1       | float | Restrained by condition: >=0. |
| mesh_size | 0.01    | float |                               |



Note:

1. When the simulation region is in the xy plane, besides `start_x`, `start_y`, `end_x` and  `end_y`, it is also required to set the `start_z` and  `end_z`, which should both be the same as the z coordinate of the plane. Similarly for the rest.


<br/>

#### 2.3.9 Set optical sources

```
[20]
```

```python
	# region --- 7. source ---
    src = pj.Source()
    src.add(name="Mode Source", axis="x_forward", type="mode_source", property={
        "geometry": {"x": x_min+1, "x_span": 0, "y": y_mean, "y_span": y_span, "z": z_mean, "z_span": z_span},
        "general": {"mode_selection": "user_select", "waveform": {"waveform_id_select": wv["waveform"]}}})
	# endregion
```



`src.add()` parameters：

- `name`--Name of the source
- `axis`--Direction of the source. `"x_forward"` means light propagating along x axis and in the direction of increasing x coordinate. `"x_forward"` means the opposite direction. Similarly for the rest
- `type`--Type of the source. It is mode source in this example
- `property`--Other properties

<br/>


Mode source property list:

|                                     | default           | type    | notes                                                        |
| :---------------------------------- | :---------------- | :------ | :----------------------------------------------------------- |
| general.amplitude                   | 1.0               | float   |                                                              |
| general.phase                       | 0.0               | float   |                                                              |
| general.mode_selection              |                   | string  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
| general.mode_index                  | 0                 | integer |                                                              |
| general.search                      | max_index         | string  | Selections are ['near_n', 'max_index'].                      |
| general.n                           | 1.0               | float   |                                                              |
| general.number_of_trial_modes       | 20                | integer |                                                              |
| general.waveform.waveform_id_select |                   | any     |                                                              |
| general.rotations.theta             | 0                 | float   |                                                              |
| general.rotations.phi               | 0                 | float   |                                                              |
| general.rotations.rotation_offset   | 0                 | float   |                                                              |
| bent_waveguide.bent_waveguide       | false             | bool    |                                                              |
| bent_waveguide.radius               | 1                 | float   |                                                              |
| bent_waveguide.orientation          | 20                | float   |                                                              |
| bent_waveguide.location             | simulation_center | string  | Selections are ['simulation_center'].                        |
| geometry.x                          |                   | float   |                                                              |
| geometry.x_span                     |                   | float   | Restrained by condition: >=0.                                |
| geometry.x_min                      |                   | float   |                                                              |
| geometry.x_max                      |                   | float   |                                                              |
| geometry.y                          |                   | float   |                                                              |
| geometry.y_span                     |                   | float   | Restrained by condition: >=0.                                |
| geometry.y_min                      |                   | float   |                                                              |
| geometry.y_max                      |                   | float   |                                                              |
| geometry.z                          |                   | float   |                                                              |
| geometry.z_span                     |                   | float   | Restrained by condition: >=0.                                |
| geometry.z_min                      |                   | float   |                                                              |
| geometry.z_max                      |                   | float   |                                                              |

Description:

- `geometray`--Set geometric parameters of optical source

- `bent_waveguide`--Set parameters related to bent waveguide

- `general`：

  - `mode_selection`--Set the type of selection for the eigen mode. When it is `"user_select"`, the mode of index in `mode_index` is selected
  - `waveform`--Set the waveform of the source
    - `waveform_id_select`--Set to be a specified waveform


<br/>

#### 2.3.10 Set monitors

```
[21]
```
```python
	# region ---8.monitor ---
    mn = pj.Monitor()
    mn.add(name="Power Monitor", type="power_monitor", property={
        "general": {"frequency_profile": {"wavelength_center": wavelength_center, "wavelength_span": wavelength_span}},
        "geometry": {"monitor_type": "3d", "x_min": Ge_x_center-Ge_x_span_bottom/2, "x_max": Ge_x_center+Ge_x_span_bottom/2,
                     "y": 0, "y_span": Ge_y_span_bottom, "z": Ge_z_center, "z_span": Ge_z_span}})
    
    mn.add(name="y=0", type="power_monitor", property={
        "general": {"frequency_profile": {"wavelength_center": wavelength_center, "wavelength_span": wavelength_span}},
        "geometry": {"monitor_type": "2d_y_normal", "x_min": Ge_x_center-Ge_x_span_bottom/2, "x_max": Ge_x_center+Ge_x_span_bottom/2,
                     "y": 0, "y_span": 0, "z": Ge_z_center, "z_span": Ge_z_span}})
    
    mn.add(name="z=0.47", type="power_monitor", property={
        "general": {"frequency_profile": {"wavelength_center": wavelength_center, "wavelength_span": wavelength_span}},
        "geometry": {"monitor_type": "2d_z_normal", "x_min": Ge_x_center-Ge_x_span_bottom/2, "x_max": Ge_x_center+Ge_x_span_bottom/2,
                     "y": 0, "y_span": Ge_y_span_bottom, "z": Ge_z_center, "z_span": 0}})
	# endregion
```

The monitor `"Power Monitor"` is of the 3D type, set to record the optical field profile in the `"Ge"` structure, which will be used to calculate the optical generation rate. The monitors `"y=0"` and `"z=0.47"` are both of the 2D type, set to visualize the optical field profile at the specified cross-sections.



`mn.add()` parameters：

- `name`--Name of the monitor
- `type`--Type of the monitor
- `property`--Other properties

<br/>


Power monitor property list:

|                                                    | default    | type    | notes                                                        |
| :------------------------------------------------- | :--------- | :------ | :----------------------------------------------------------- |
| general.frequency_profile.sample_spacing           | uniform    | string  | Selections are ['uniform'].                                  |
| general.frequency_profile.use_wavelength_spacing   | true       | bool    |                                                              |
| general.frequency_profile.spacing_type             | wavelength | string  | Selections are ['wavelength', 'frequency'].                  |
| general.frequency_profile.wavelength_min           |            | float   |                                                              |
| general.frequency_profile.wavelength_max           |            | float   |                                                              |
| general.frequency_profile.wavelength_center        |            | float   |                                                              |
| general.frequency_profile.wavelength_span          |            | float   |                                                              |
| general.frequency_profile.frequency_min            |            | float   |                                                              |
| general.frequency_profile.frequency_max            |            | float   |                                                              |
| general.frequency_profile.frequency_center         |            | float   |                                                              |
| general.frequency_profile.frequency_span           |            | float   |                                                              |
| general.frequency_profile.frequency_points         |            | integer |                                                              |
| geometry.monitor_type                              |            | string  | Selections are ['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d']. |
| geometry.x                                         |            | float   |                                                              |
| geometry.x_span                                    |            | float   | Restrained by condition: >=0.                                |
| geometry.x_min                                     |            | float   |                                                              |
| geometry.x_max                                     |            | float   |                                                              |
| geometry.y                                         |            | float   |                                                              |
| geometry.y_span                                    |            | float   | Restrained by condition: >=0.                                |
| geometry.y_min                                     |            | float   |                                                              |
| geometry.y_max                                     |            | float   |                                                              |
| geometry.z                                         |            | float   |                                                              |
| geometry.z_span                                    |            | float   | Restrained by condition: >=0.                                |
| geometry.z_min                                     |            | float   |                                                              |
| geometry.z_max                                     |            | float   |                                                              |
| advanced.sampling_frequency.min_sampling_per_cycle | 2          | integer |                                                              |

Description:

- `geometry`--Set the geometric parameters of the monitor, including the dimension and the size

- `general`--Set the frequency points of the monitor

  - `frequency_profile`:

    - `sample_spacing`--Only support `"uniform"` currently, which means the frequency points are uniformly sampled in either wavelength or frequency

    - `use_wavelength_spacing`--Default to be `True`. When it' `True`, the frequency points in sampled in wavelength, otherwise, in frequency.

    - `spacing_type`--Default to be `"wavelength"`. When it's `"wavelength"`, the frequency range is set in wavelength; When it's `"frequency"`, the frequency range is set in frequency

    - `frequency_points`--Number of frequency points



<br/>

#### 2.3.11 Preview the structures


<br/>

##### 2.3.11.1 Define the preview function
```
[22]
```
```python
# -------------    preview    --------------
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

@timed
def preview():
    pj = pd_project(project_name=simu_name + time_str, run_mode="local", material_property="normal")

    plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
    if not os.path.exists(plot_path):
        os.makedirs(plot_path)
```

Call the `pd_project` function defined earlier to create a new project `pj`. `simu_name` is set in the general parameters. `time_str` is the time stamp when the function started running and is added to the project name, to make the project name unique for each simulation and the simulation results not overwritten by each other.

`plot_path` will be set to the save path of the result extraction. Here, it is set to the 'plots' folder located in the same directory as this script. If the path doesn't exist, `os.makedirs()` should be called to create it.


<br/>

##### 2.3.11.2 Add solvers

Optical and electrical solvers are added within the preview function. The corresponding structure preview is only available when the solvers are present.

```
[23]
```
```python
    simu = pj.Simulation()
    simu.add(name="preview_fdtd", type="AFDTD", property={
        "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": cells_per_wavelength}}})

    simu.add(name="preview_oedevice", type="OEDevice", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
        "genrate": {"genrate_path": "", "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
        "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
        "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})
```

`simu.add()` parameters：

- `name`--Name of the solver
- `type`--Type of the solver. For active device simulation, the type of FDTD solver is `"AFDTD"`, and the type of carrier transport solver is `"OEDevice"`
- `property`--Other properties

<br/>


For `AFDTD`，`mesh_settings.mesh_accuracy.cells_per_wavelength` means the number of mesh cells per wavelength. The larger the number, the smaller the mesh size and the longer the simulation time.

For `OEDevice`，other properties are not necessary. So `property` can be empty. Detailed parameter settings for `OEDevice` can be found in the appendix.


<br/>

##### 2.3.11.3 Preview doping profile

Preview the doping profile by the `run_doping` function of the `OEDevice` solver.

```
[24]
```

```python
    simu["preview_oedevice"].run_doping(name="x_in", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max}},
        norm="log", scale="equal", superimpose=False, show=False,
        material_list=["Ge", "Si"], cmin=8e5, savepath=plot_path + simu_name + "_" + time_str + "doping_x_in")
```

`run_doping()` parameters:

- `name`--Custom name
- `norm`--Set the normalization method for the intensity plot, default to be `"linear"`, which means linear normalization. It can also be set to `"log"`, which means taking the logarithm of the intensity first, and then performing linear normalization. The net doping is calculated as $N_D-N_A$, where $N_D$ denotes the donor concentration and $N_A$ denotes the acceptor concentration
- `scale`--Set the scaling method of the vertical and horizontal axes, default to be `"equal"`, which means the two axes are scaled proportional. It can also be set to `"auto"`, which means the two axes are scaled automatically
- `superimpose`--Set whether the structure plot and the doping plot superimpose or not, default to be `"True"`
- `show`--Set whether the result plot should be displayed in a popup window, default to be `False`, which means not and it will be saved to the `savepath` automatically. When it is `True`, the result plot won't pop up and will not be saved unless operated manually
- `material_list`--Specify a list of materials to preview the doping profile. And each item in the list should be the chemical formula of the material. Default to be empty, which means all the materials will be previewed
- `region_list`--Specify a list of structures to preview the doping profile. And each item in the list is the name of the structure. Default to be empty, which means all the structures will be previewed. When it's not empty, it will override the `material_list` setting
- `cmax`--Set the maximum of the colorbar for the intensity plot. When the concentration is greater than this value, it will be displayed as this value. It is ineffective for net doping
- `cmin`--Set the minimum of the colorbar for the intensity plot. When the concentration is smaller than this value, it will be displayed as this value. It is ineffective for net doping
- `savepath`--The save path for the result
- `property`--Other properties

<br/>


`run_doping` property list:

|                    | default | type   | notes                                                        |
| :----------------- | :------ | :----- | :----------------------------------------------------------- |
| geometry.dimension |         | string | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
| geometry.x         |         | float  |                                                              |
| geometry.x_span    |         | float  | Restrained by condition: >=0.                                |
| geometry.x_min     |         | float  |                                                              |
| geometry.x_max     |         | float  |                                                              |
| geometry.y         |         | float  |                                                              |
| geometry.y_span    |         | float  | Restrained by condition: >=0.                                |
| geometry.y_min     |         | float  |                                                              |
| geometry.y_max     |         | float  |                                                              |
| geometry.z         |         | float  |                                                              |
| geometry.z_span    |         | float  | Restrained by condition: >=0.                                |
| geometry.z_min     |         | float  |                                                              |
| geometry.z_max     |         | float  |                                                              |

Description:

- `geometry`--Set the region of doping preview

  - `dimension`--Set the dimension of doping preview. The electrical simulation only supports the 2D type currently, so the doping and its preview are all considered in a plane. When `dimension` is `"2d_x_normal"`, it means the preview is in the yz plane. Similarly for the rest.

<br/>


*Result show of the doping preview*

![Net doping preview](./img/netdoping.jpg)
<center>Fig 1. Net doping</center>

<!-- import image01 from "./img/image01.jpg"
<img src={image01} width='300' height='200' align='middle' />
<center>Fig 1. Net doping</center> -->


<br/>

##### 2.3.11.4 Preview index profile

Preview the index profile by the `run_index` function of the `AFDTD` solver.

```
[25]
```

```python
    simu["preview_fdtd"].run_index(name="index_preview_x_10", property={
        "geometry": {"x": 10, "x_span": 0, "y": 0, "y_span": 4, "z_min": -0.5, "z_max": 0.72}},
        savepath=plot_path + simu_name + "_" + time_str + "MeshView/" + "x=10", export_csv=False, show=False)

    simu["preview_fdtd"].run_index(name="index_preview_z_0.11", property={
        "geometry": {"x_min": -43, "x_max": 19, "y": 0, "y_span": 6.4, "z": 0.11, "z_span": 0}},
        savepath=plot_path + simu_name + "_" + time_str + "MeshView/" + "z=0.11", export_csv=False, show=False)
```

`run_index()` parameters：

- `name`--Custom name
- `export_csv`--Whether to export csv file, default to be `False`
- `savepath`--Save path of the result extraction
- `show`--Whether to show the plot in a popup window, default to be `False`
- `export_n`--Whether to export nx, ny, nz, default to be `True`
- `export_c`--Whether to export σx, σy, σz, default to be `False`
- `max_index`--Set the maximum of the intensity plot of index, default to be `None`
- `max_sigma`--Set the maximum of the intensity plot of conductivity, default to be `None`
- `property`--Other properties

<br/>


`run_index` property list：

|                       | default | type   | notes                                                        |
| :-------------------- | :------ | :----- | :----------------------------------------------------------- |
| geometry.monitor_type |         | string | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
| geometry.x            |         | float  |                                                              |
| geometry.x_span       |         | float  | Restrained by condition: >=0.                                |
| geometry.x_min        |         | float  |                                                              |
| geometry.x_max        |         | float  |                                                              |
| geometry.y            |         | float  |                                                              |
| geometry.y_span       |         | float  | Restrained by condition: >=0.                                |
| geometry.y_min        |         | float  |                                                              |
| geometry.y_max        |         | float  |                                                              |
| geometry.z            |         | float  |                                                              |
| geometry.z_span       |         | float  | Restrained by condition: >=0.                                |
| geometry.z_min        |         | float  |                                                              |
| geometry.z_max        |         | float  |                                                              |

Description:

- `geometry`--Set the region of index preview. The `run_index` function currently only supports the index preview in a 2D plane. If `x_span` is set to `0`, the preview will be performed in the yz plane. Similarly for the rest.

<br/>


*Result show of the index preview*

![Index Preview](./img/nx.png)

<center>Fig 2. nx</center>


<br/>

## 3. Simulation


<br/>

### 3.1 Dark current

This section performs the simulation of dark current in the `VPD0B_Id.py` script by invoking the `pd_project` function.


<br/>

#### 3.1.1 Import simulation toolkit

```
[26]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
```

All the variables and functions from `VPD00_structure.py` are imported.


<br/>

#### 3.1.2 Set general parameters

```
[27]
```

```python
start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# region --- 0. General Parameters ---
tcad_vmin = 0  # unit:Volt
tcad_vmax = 4      # unit:Volt
tcad_vstep = 0.5   # unit:Volt
# endregion

# ----------------------   set project_path
simu_name = "VPD0B_Id"
project_name = simu_name + "_" + run_mode + "_" + time_str
material_property = "normal"
genrate_file_path = ""
# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)
```


<br/>

#### 3.1.3 Create a new project

```
[28]
```

```python
pj = pd_project(project_name, run_mode, material_property)
```


<br/>

#### 3.1.4 Add electrodes

```
[29]
```

```python
st = pj.Structure()

st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state", "sweep_type": "range",
    "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "none"})
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})
```

`add_electrode()` parameters:

- `name`--Name of the electrode
- `property`--Other properties

The detailed property list of electrode can be found in the appendix. Here a range of voltage from 0V to 4V is applied to the electrode `"cathode"`, and the step of the voltage is 0.5V.


<br/>

#### 3.1.5 Add the solver

```
[30]
```
```python
# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
    "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})
```

Description:

The detailed property list of `OEDevice` solver can be found in the appendix. Here:

- `genrate`--Set the properties for optical generation rate

  - `genrate_path`--It's set to `genrate_file_path`, which is `""`, an empty string. That means no optical generation rate is imported to the `OEDevice` solver. Therefore, the simulation is for dark current. And the rest properties in `genrate` is ineffective in this case

- `geometry`--Set the geometric parameters for the simulation region

  - `dimension`--It's set to `2d_x_normal`, which means the simulation is in the yz plane

- `general`:

  - `norm_length`--It's set to `normal_length`, which is `20`, meaning that the size of the device in the third dimension is 20μm. That is to say its length in the x-direction is 20μm
  - `solver_mode`--It's set to `"steady_state"`, which means a steady state simulation


<br/>

#### 3.1.6 Run the solver

```
[31]
```

```python
# --- Run ---
# check license and print version before & after simulation.
result_device = simu["oedevice"].run()

```

`result_device` stores the information of the simulation result, which can be used to perform result extraction.


<br/>

#### 3.1.7 Extract the result

```
[32]
```

```python
# --- Extract ---
result_device.extract(data="I", electrode="cathode", export_csv=True,
                      show=False, savepath=plot_path + project_name + "IV_cathode")
```

`result_device.extract()` parameters：

- `data`--Type of the result. Here it's set to `"I"` to extract the I-V curve from the simulation result
- `electrode`--Name of an electrode, which means the current data is from the electrode
- `export_csv`--Whether to export the csv result
- `show`--Whether to show the plot in a popup window
- `savepath`--The save path for the result extraction

<br/>


*Result show of the dark current extraction*

![Dark Current](./img/darkcurrent.png)

<center>Fig 3. Dark Current</center>


<br/>

#### 3.1.8 Print the simulation time

```
[33]
```

```python
print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```


<br/>

### 3.2 Resistance

This simulation applies a forward bias to the electrode `"anode"`. And then the I-V curve is extracted and fitted to obtain the resistance. The script is in the `VPD0C_Rs.py` file.


<br/>

#### 3.2.1 Simulate and extract the I-V curve

```
[34]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
import numpy as np
from matplotlib import pyplot as plt

# region --- 0. General Parameters ---
tcad_vmin = 0  # unit:Volt
tcad_vmax = 1.5      # unit:Volt
tcad_vstep = 0.25   # unit:Volt
# endregion

start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# ----------------------   set project_path
simu_name = "VPD0C_Rs"
material_property = "normal"
project_name = simu_name + "_" + run_mode + "_" + time_str
genrate_file_path = ""

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)

# --- Project from pd_structure.py ---
pj = pd_project(project_name, run_mode, material_property)
st = pj.Structure()

st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state", "sweep_type": "range",
    "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "none"})
st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})

# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
    "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})

# --- Run ---
# check license and print version before & after simulation.
result_device = simu["oedevice"].run()

# --- Extract IV ---
IV_file_folder = plot_path + project_name + "IV_anode"
result_device.extract(data="I", electrode="anode",
                      export_csv=True, show=False, savepath=IV_file_folder)
```

A range of voltage from 0V to 1.5V is applied to the electrode `"anode"`, with a step of 0.25V. No optical generation rate is applied. And a steady state simulation is performed to extract the I-V curve, which is saved to the folder `IV_file_folder`.


<br/>

*Result show of the I-V curve*
![I-V curve](./img/resistanceIV.png)
<center>Fig 4. I-V curve</center>

<br/>


#### 3.2.2 Fit V-I curve to obtain resistance

<br/>

##### 3.2.2.1 Read the saved I-V data

```
[35]
```

```python
# region --- calculate R ---
IV_file = os.path.join(IV_file_folder, "0_I_Real.csv")
for i in range(10):
    IV_file = os.path.join(IV_file_folder, str(i) + "_I_Real.csv")
    if os.path.exists(IV_file):
        break
rawdata = np.genfromtxt(IV_file, skip_header=3, delimiter=',')
I = rawdata[:,1]
V = rawdata[:,0]
```

`"0_I_Real.csv"` is filename generated automatically of the I-V result. The `"0"` in the beginning indicates the index of the electrode. When the I-V curve is from a different electrode, the index will change. Therefore, a iteration from 0 to 9 is applied to find the saved I-V data file.


<br/>

##### 3.2.2.2 Fit the data to obtain resistance

```
[36]
```

```python
start_idx = len(V)//2
coeffs = np.polyfit(I[start_idx:], V[start_idx:], 1)
V_fit = coeffs[0]*I + coeffs[1]
R = abs(coeffs[0])
```

Fit the data after the index `start_idx`, which is the start index of the approximately linear portion of the curve. A first-order polynomial fitting is performed on the V-I data. Then the coefficient of the first-order term is the device resistance.


<br/>




##### 3.2.2.3 Save data and plots

```
[37]
```

```python
Rdata_folder = os.path.join(plot_path, project_name, "resistance")
if not os.path.exists(Rdata_folder):
    os.makedirs(Rdata_folder)
Rdata_file = os.path.join(Rdata_folder, "Rdata.dat")
Rdata_fig = os.path.join(Rdata_folder, "resistance.jpg")

with open(Rdata_file, "w") as fp:
    fp.write("Resistance: " + f"{R} Ohm\n")

fontsize = 20
linewidth = 1
plt.rcParams.update({"font.size": fontsize})
fig, ax = plt.subplots()
fig.set_size_inches(12, 8)
ax.plot(I, V, c="b", linewidth=linewidth, label="V-I")
ax.plot(I, V_fit, c="g", linewidth=linewidth, label="V_fit-I")
ax.set_xlabel("I[A]")
ax.set_ylabel("V[V]")
plt.legend()
plt.ticklabel_format(style="sci", scilimits=(-1, 2))
ax.grid()
plt.savefig(Rdata_fig)
plt.close()
# endregion

print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```


<br/>

*Result show of the V-I fitting*
![resistance](./img/resistance.jpg)
<center>Fig 5. V-I fitting</center>

<br/>


### 3.3 Capacitance

This section performs a SSAC simulation, and extracts the capacitance. The script is in the `VPD0A_C.py` file.

```
[38]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path

# region --- 0. General Parameters ---
tcad_vmin = 0  # unit:Volt
tcad_vmax = 3      # unit:Volt
tcad_vstep = 0.5   # unit:Volt
# endregion

start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())
simu_name = "VPD0A_C"
project_name = simu_name + "_" + run_mode + "_" + time_str

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)

# ----------------------   set project_path
material_property = "normal"
genrate_file_path = ""
# --- Project from pd_structure.py ---
pj = pd_project(project_name, run_mode, material_property)
st = pj.Structure()

st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state",
    "sweep_type": "range", "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "All"})
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})

# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
    "general": {"norm_length": normal_length, "solver_mode": "SSAC", "simulation_temperature": temperature},
    "small_signal_ac": {"frequency_spacing": "single", "frequency": 1e8},
    # "small_signal_ac": {"frequency_spacing": "log", "log_start_frequency": 1e6, "log_stop_frequency": 1e10, "log_num_frequency_points": 3},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})

# ----------------------   run
# check license and print version before & after simulation.
result_device = simu["oedevice"].run()

# ----------------------   extract
result_device.extract(data="C", electrode="cathode", export_csv=True, show=False, savepath=plot_path + project_name + "C")

print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```

Description:

For `OEDevice` solver, the detailed properties can be found in the appendix. Here:

- `general`:

  - `solver_mode`--It's set to `"SSAC"`, which means a SSAC simulation
  
  - `small_signal_ac`--Set the frequency points
    
    - `frequency_spacing`--It's set to `"single"`, which means a single frequency point
    
    - `frequency`--Set the value of the single frequency

<br/>


For the electrode `"cathode"`, a range of voltage from 0V to 3V is applied to it, with a step of 0.5V.

- `apply_AC_small_signal`--It's set to `All`, which means the small signal analysis is applied at each voltage step

<br/>


For the result extraction:

- `data`--It's set to `"C"`, which is available after the SSAC simulation and is used to extract the capacitance


<br/>

*Result show of the capacitance*
![Capacitance](./img/capacitance.png)
<center>Fig 6. Capacitance</center>

<br/>


### 3.4 Optical generation rate

This section performs a FDTD simulation to obtain the optical field profile in the structure of `"Ge"`, and then calculate the photo-induced carrier generation rate. The average of the optical generation rate in the light propagating direction, which is the x-direction, is then taken to obtain the profile in the yz plane to be imported to the OEDevice simulation. The script is in the `VPD01_FDTD.py` file.


<br/>

#### 3.4.1 Import simulation toolkit

```
[39]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
```


<br/>

#### 3.4.2 Set general parameters

```
[40]
```

```python
start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# ----------------------   set project_path
simu_name = "VPD01_FDTD"
material_property = "normal"
project_name = simu_name + "_" + run_mode + "_" + time_str

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
genrate_file_folder = plot_path + project_name + "genrate"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)
```


<br/>

#### 3.4.3 Create a new project

```
[41]
```

```python
# --- Project from pd_structure.py ---
pj = pd_project(project_name, run_mode, material_property)
```


<br/>

#### 3.4.4 Add the solver

```
[42]
```

```python
# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="fdtd", type="FDTD", property={
    "general": {"simulation_time": 2000},
    "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": cells_per_wavelength}}})

simu.add(name="afdtd", type="AFDTD", property={
    "general": {"simulation_time": 2000},
    "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": cells_per_wavelength}}})
```

The `AFDTD` solver for active device simulation can be used to extract the optical generation rate, but can't export the optical field profile. And the usage of the `FDTD` solver is exactly the opposite. Therefore, both solvers are added here to serve the different purposes.


<br/>

#### 3.4.5 Run and extract the result

```
[43]
```

```python
# --- Run ---
# check license and print version before & after simulation.
# result_fdtd = simu["fdtd"].run()

# result_fdtd.extract(data="fdtd:power_monitor", monitor_name="y=0", savepath=plot_path + project_name + "E_y=0",
#                     attribute="E", target="intensity", wavelength=str(wavelength_center), export_csv=True)

# result_fdtd.extract(data="fdtd:power_monitor", monitor_name="z=0.47", savepath=plot_path + project_name + "E_z=0.47",
#                     attribute="E", target="intensity", wavelength=str(wavelength_center), export_csv=True)


result_afdtd = simu["afdtd"].run()
result_genrate = result_afdtd.run_generation_rate_analysis(name="genrate", monitor="Power Monitor", average_dimension="x", light_power=1, 
                                                          coordinate_unit="m", field_length_unit="m")  # unit： m, cm, um, nm #average_dimension: x/y/z
result_genrate.extract(data="generation_rate", export_csv=True, show=False, log=False, savepath=genrate_file_folder)
result_genrate.extract(data="pabs_total", export_csv=True, show=False, log=False, savepath=genrate_file_folder)


print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```

`run_generation_rate_analysis()` parameters：

- `name`--Custom name
- `monitor`--Name of the `power_monitor` for calculating optical generation rate. The `power_monitor` is required to be of 3D type
- `average_dimension`--Set the direction to take the average of the optical generate rate
- `light_power`--Set the power of the light source, measured in W. The optical generation rate will be scaled based on the power
- `coordinate_unit`--Set the coordinate unit in the optical generation rate file (gfile)
- `field_length_unit`--Set the length unit in the generation rate unit in the optical generation rate file (gfile).  If it's set to `"m"`, the generation rate unit in the gfile will be `/m^3/s`. Similarly for the rest

<br/>


`result_genrate.extract()` parameters：

- `data`--Type of the result
  - When `data` is set to `"generation_rate"`, besides an image file and a csv file, the result files also include a text file in `.gfile` format. The coordinate unit in the csv and the image file is `um`, and the generation rate unit in the two files is `/cm^3/s`. These units can't be modified when extracting the result. However, the units in the gfile are controlled by `coordinate_unit`、`field_length_unit`. And only the gfile can be imported to the OEDevice solver
  - When data is set to `"pabs_total"`, the total absorption power is extracted

- `export_csv`--Whether to export csv file
- `show`--Whether to show the plot in a popup window
- `log`--Whether to apply a logarithmic normalization in the intensity plot
- `savepath`--The save path of the result extraction


<br/>

*Result show of the optical generation rate*
![Optical generation rate](./img/generation.png)
<center>Fig 7. Optical generation rate</center>

<br/>


### 3.5 Photo current

This section imports the optical generation rate to the `OEDevice` solver, and performs a steady state simulation to obtain the photo current. The script is in the `VPD02_Ip.py` file.


<br/>

#### 3.5.1 Import simulation toolkit

```
[44]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
```


<br/>

#### 3.5.2 Set general parameters

```
[45]
```

```python
start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# region --- 0. General Parameters ---
tcad_vmin = 0  # unit:Volt
tcad_vmax = 4      # unit:Volt
tcad_vstep = 0.5   # unit:Volt
# endregion

# ----------------------   set project_path
simu_name = "VPD02_Ip"
project_name = simu_name + "_" + run_mode + "_" + time_str
material_property = "normal"
genrate_file_folder = str(Path(__file__).parent.as_posix())
genrate_file_path = genrate_file_folder + "/VPD01_FDTD.gfile"

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)
```

`genrate_file_path` is the absolute path of the gfile to be imported to the `OEDevice` solver. Here it's set to the absolute path of `VPD01_FDTD.gfile` in the same directory. And  this can be changed to the path of the gfile extracted by the `AFDTD` simulation.


<br/>

#### 3.5.3 Create a new project

```
[46]
```

```python
# --- Project from pd_structure.py ---
pj = pd_project(project_name, run_mode, material_property)
```


<br/>

#### 3.5.4 Add electrodes

```
[47]
```

```python
st = pj.Structure()

st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state", "sweep_type": "range",
    "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "none"})
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})
```


<br/>

#### 3.5.5 Add the solver

```
[48]
```

```python
# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
    "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})
```

Description:

- `genrate`:

  - `genrate_path`--Here it's not empty, meaning that the file at the path will be imported to the `OEDevice` solver
  - `coordinate_unit`--Set the coordinate unit in the gfile
  - `field_length_unit`--Set the length unit in the generation rate unit in the gfile
  - `source_fraction`--Set the scaling factor for the light power. The imported optical generation rate will be multiplied by this factor first, and then be used to solve the carrier transport


<br/>

#### 3.5.6 Run and extract the result

```
[49]
```

```python
# --- Run ---
# check license and print version before & after simulation.
result_device = simu["oedevice"].run()

# --- Extract ---
result_device.extract(data="I", electrode="cathode", export_csv=True,
                      show=False, savepath=plot_path + project_name + "IV_cathode")

print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```


<br/>

*Result show of the photo current*
![Photo current](./img/photocurrent.png)
<center>Fig 8. Photo current</center>
<br/>


### 3.6 Bandwidth

This section performs a transient simulation to extract the step response of the photo current. Then the bandwidth is obtained by postprocessing the I-t curve. The script is in the `VPD03_bw.py` file.


<br/>

#### 3.6.1 Import simulation toolkit

```
[50]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
import numpy as np
from scipy import interpolate as scip, fft as scfft
from matplotlib import pyplot as plt
```


<br/>

#### 3.6.2 Set general parameters

```
[51]
```

```python
start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# region --- 0. General Parameters ---
tcad_vbias = 1       # the bias voltage on cathode
source_fraction = 1e-4   # the source generation rate is multiplied by this factor
# endregion

# ----------------------   set project_path
simu_name = "VPD03_bw"
project_name = simu_name + "_" + run_mode + "_" + time_str
material_property = "transient"
genrate_file_folder = str(Path(__file__).parent.as_posix())
genrate_file_path = genrate_file_folder + "/VPD01_FDTD.gfile"

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)
```


<br/>

#### 3.6.3 Create a new project

```
[52]
```

```python
# --- Project from pd_structure.py ---
pj = pd_project(project_name, run_mode, material_property)
```


<br/>

#### 3.6.4 Add electrodes

```
[53]
```

```python
st = pj.Structure()

st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "transient", "voltage": tcad_vbias, "v_step_max": 0.5,
    "time_table": [{"time_start": 0, "time_stop": 2e-12, "initial_step": 1e-12, "max_step": 5e-12},
                   {"time_start": 2e-12, "time_stop": 2.001e-12, "initial_step": 30e-18, "max_step": 30e-18,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": source_fraction}},
                   {"time_start": 2.001e-12, "time_stop": 2.01e-12, "initial_step": 30e-18, "max_step": 60e-18,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": source_fraction}},
                   {"time_start": 2.01e-12, "time_stop": 2.03e-12, "initial_step": 60e-18, "max_step": 2e-15,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": source_fraction}},
                   {"time_start": 2.03e-12, "time_stop": 10e-12, "initial_step": 2e-15, "max_step": 50e-15,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": source_fraction}},
                   {"time_start": 10e-12, "time_stop": 500e-12, "initial_step": 50e-15, "max_step": 10e-12,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": source_fraction}}]})

st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})
```

Description:

For the electrode `"cathode"`:

- `bc_mode`--Here it's set to `"transient"`, which means a transient boundary condition is applied to this electrode. Then the time dependence of the optical generation rate can be set at this electrode
- `voltage`--Here it's set to `tcad_vbias`, which is `1`, meaning that the voltage is applied to the electrode and a steady state simulation is performed first. The transient simulation is based on the steady state result. The optical generation rate is not applied during the steady state simulation.
- `v_step_max`--Set the max step of the voltage from the equilibrium state to steady state at the bias of `voltage`.
- `time_table`--Set the time dependence of optical generation rate. It's of a list type, whose item is of a dictionary type. In each of its item:
  - `time_start`--Set the start time point of the range. The value of `0` represents the steady state of the earlier simulation.
  - `time_stop`--Set the stop time point of the range
  - `initial_step`--Set the initial time step of the range
  - `max_step`--Set the max time step of the range
  - `optical`--Set the optical generation rate during the time range
    - `enabled`--Whether to apply optical generation rate during the time range. The value of `1` means `True`, and `0` means `False`
    - `envelop`--The envelop of the scaling factor of the light power during the time range. When it's set to `0`, the envelop is uniform
    - `source_fraction`--When `envelop` is set to`0`, this value is the scaling factor of the light power during the time range


Note:

1. The dependency of scaling factor of light power on time is a step function here.


<br/>

#### 3.6.5 Add the solver

```
[54]
```

```python
# ----------------------   set simu
simu = pj.Simulation()

simu.add(name="oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": 0},
    "general": {"norm_length": normal_length, "solver_mode": "transient", "simulation_temperature": temperature},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "use_global_max_iterations": False, "poisson_max_iterations": 50, "ddm_max_iterations": 20,
                 "use_quasi_fermi": "enabled", "damping": "potential", "potential_update": 2, "relative_tolerance": 1e-5, "tolerance_relax": 1e7}})
```

Description:

- `general`:

  - `solver_mode`--Here it's set to `"transient"`, which means a transient simulation

- `advanced`:

  - `use_global_max_iterations`--Whether to use global max iterations during the initialization of solving the Poisson equations and the subsequent computing for solving the drift-diffusion equations coupling with Poisson equations
  - `poisson_max_iterations`--Set the max iterations during the initialization of solving the Poisson equations, available when `use_global_max_iterations` is `False`
  - `ddm_max_iterations`--Set the max iterations during the subsequent computing for solving the drift-diffusion equations coupling with Poisson equations, available when `use_global_max_iterations` is `False`
  - `use_quasi_fermi`--Whether to directly solve for the quasi-Fermi potential instead of carrier concentration as unkowns. `"enabled"` means `True`, and `"disabled"` means `False`
  - `damping`--Set the nonlinear update damping scheme. `"potential"` means the damping is based on the potential variation
  - `potential_update`--Set the threshold potential for potential damping. The large value will reduce the strength of damping effect
  - `relative_tolerance`--Set the relative update tolerance
  - `tolerance_relax`--Set the tolerance relaxation factor for convergence on relative tolerance criteria



<br/>

#### 3.6.6 Run the solver

```
[55]
```

```python
# --- Run ---
# check license and print version before & after simulation.
result_device = simu["oedevice"].run()
```


<br/>

#### 3.6.7 Extract the result

The I-t curve is extracted. Because the dependency of the light power on time is a step function, the I-t curve here represents the step response of the photo current.

```
[56]
```

```python
# --- Extract ---
It_file_folder = plot_path + project_name + "I"
result_device.extract(data="I", electrode="cathode", show=False, export_csv=True, savepath=It_file_folder)
# result_device.extract(data="In", electrode="cathode", show=False, export_csv=True, savepath=plot_path + project_name + "In")
# result_device.extract(data="Ip", electrode="cathode", show=False, export_csv=True, savepath=plot_path + project_name + "Ip")
```


<br/>

*Result show of the step response*
![Step response](./img/stepresponse.png)
<center>Fig 9. Step response</center>

<br/>


#### 3.6.8 Postprocess

By taking the derivative of the step response, the impulse response is obtained. Then the Fast Fourier Transform is applied to the impulse response, resulting in the frequency response, which allows to determine the device bandwidth.


<br/>

##### 3.6.8.1 Obtain the impulse response

```
[57]
```

```python
# region Calculate 3dB bandwidth
It_file = os.path.join(It_file_folder, "0_I_Real.csv")
for i in range(10):
    It_file = os.path.join(It_file_folder, str(i) + "_I_Real.csv")
    if os.path.exists(It_file):
        break
rawdata = np.genfromtxt(It_file, skip_header=3, delimiter=',')
I = rawdata[:,1]
t = rawdata[:,0]*1e-15

start_idx = 2
t = t[start_idx:]
I = I[start_idx:]

# Calculate impulse response dI/dt from step response I(t)
# Impulse response at t[i] is the average of dI[i-1]/dt[i-1] and dI[i]/dt[i] 
dt = np.diff(t)
dI = np.diff(I)
dIdt = (dI[1:] + (dt[1:]/dt[:-1])**2*dI[:-1])/(dt[1:]*(1+dt[1:]/dt[:-1]))
delta_t = 1e-13
th = t[1:len(t)-1]
nt = int(np.ceil((th[-1]-th[0])/delta_t))
t_interp = np.linspace(th[0], th[-1], nt)
interp1d_func = scip.interp1d(th, dIdt)
dIdt_interp = interp1d_func(t_interp)
```

First, take the derivative of the step response to obtain the impulse response. And then uniform time intervals and perform interpolation on the impulse response to facilitate the subsequent application of the Fast Fourier Transform.


<br/>

##### 3.6.8.2 Export the impulse response result

```
[58]
```

```python
# Output impulse response
bandwidth_folder = str(Path(It_file_folder).parent.as_posix()) + "/3dB_bandwidth"
if not os.path.exists(bandwidth_folder):
    os.makedirs(bandwidth_folder)
impulse_fig = os.path.join(bandwidth_folder, "impulse_response.jpg")
fontsize = 20
linewidth = 1
plt.rcParams.update({"font.size": fontsize})
fig, ax = plt.subplots()
fig.set_size_inches(12, 8)
ax.plot(t_interp*1e12, dIdt_interp/np.max(np.abs(dIdt_interp)), c='b', linewidth=linewidth, label="Impulse response")
ax.set_ylabel("Impulse response")
ax.set_xlabel("Time [ps]")
ax.grid()
plt.legend()
plt.ticklabel_format(style='sci', scilimits=(-1,2))
plt.savefig(impulse_fig)
plt.close()
```


<br/>

*Result show of the impulse response*
![Impulse response](./img/impulseresponse.jpg)
<center>Fig 10. Impulse response</center>

<br/>


##### 3.6.8.3 Obtain the frequency response

```
[59]
```

```python
fresponse = scfft.rfft(dIdt_interp)
freq = scfft.rfftfreq(len(t_interp), t_interp[1]-t_interp[0])
fresponse = np.abs(fresponse)/np.max(np.abs(fresponse))

# Calculate 3dB bandwidth by interpolation
log_freq = np.log10(freq[1:])
log_fresp = 20*np.log10(np.abs(fresponse[1:]))
resp_3dB = -3

log_freq_3dB = scip.interp1d(log_fresp, log_freq)(resp_3dB)

bandwidth_GHz = 10**log_freq_3dB*1e-9
```

Obtain the frequency response by Fast Fourier Transform. And then calculate the 3dB bandwidth by interpolation.


<br/>

##### 3.6.8.4 Export the frequency response result

```
[60]
```

```python
bandwidth_file = os.path.join(bandwidth_folder, "3dB_bandwidth.txt")
bandwidth_fig = os.path.join(bandwidth_folder, "3dB_bandwidth.jpg")

with open(bandwidth_file, 'w') as fp:
    fp.write("3dB bandwidth: " + f"{bandwidth_GHz:.6f} GHz\n")

fig, ax = plt.subplots()
fig.set_size_inches(12, 8)
ax.plot(freq[1:]*1e-9, 20*np.log10(np.abs(fresponse[1:])), 'b', linewidth=linewidth, label="Normalized response")
ax.plot(freq[1:]*1e-9, resp_3dB*np.ones(len(freq[1:])), 'g', linewidth=linewidth)
ax.set_xlim(left = 1, right = 300)
ax.set_ylim(bottom = -25)
ax.set_xscale('log')
ax.set_ylabel('Normalized response [dB]')
ax.set_xlabel('Frequency [GHz]')
ax.grid(which='both', axis='both')
plt.savefig(bandwidth_fig)
# endregion

print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```


<br/>

*Result show of the frequency response*
![Frequency response](./img/frequencyresponse.jpg)
<center>Fig 11. Frequency response</center>

<br/>


### 3.7 Saturation power

This section scans the input light power and obtains the I-P curve, thereby roughly determining the saturation light power. The script is in the `VPD04_Psat.py` file.


<br/>

#### 3.7.1 Import simulation toolkit

```
[61]
```

```python
from VPD00_structure import *
import time
import os
from pathlib import Path
import numpy as np
from matplotlib import pyplot as plt
```


<br/>

#### 3.7.2 Set general parameters

```
[62]
```

```python
# region --- 0. General Parameters ---
sweep_parameter_name = "source_fraction"
sweep_value_table = np.linspace(0.001, 0.02, 20)
vbias = 1  # unit:Volt, voltage on cathode
# endregion

start = time.time()
time_str = time.strftime("%Y%m%d_%H%M%S/", time.localtime())

# --- set path ---
plot_path = str(Path(__file__).parent.as_posix()) + "/plots/"
if not os.path.exists(plot_path):
    os.makedirs(plot_path)

simu_name = "VPD04_Psat"
material_property = "normal"
genrate_file_folder = str(Path(__file__).parent.as_posix())
genrate_file_path = genrate_file_folder + "/VPD01_FDTD.gfile"
```


<br/>

#### 3.7.3 Define a sweeping function

```
[63]
```

```python
def sweep_simulation(sweep_value):
```


<br/>

##### 3.7.3.1 Set the sweeping parameter

```
[64]
```

```python
    # ----------------------   set sweep parameter
    if not sweep_parameter_name in globals():
        raise Exception(f"Parameter {sweep_parameter_name} not found!")
    exec(f"global {sweep_parameter_name}; {sweep_parameter_name} = sweep_value")

```

Using the features of Python, modify the value of parameter `source_fraction` corresponding to `sweep_parameter_name` to the value of `sweep_value`  which is passed from the `sweep_simulation` function.


<br/>

##### 3.7.3.2 Create a new project

```
[65]
```

```python
    # ----------------------   set project_path
    project_name = simu_name + "_" + run_mode + "_" + time_str + sweep_parameter_name + "_" + str(sweep_value) + "/"

    # --- Project from pd_structure.py ---
    pj = pd_project(project_name, run_mode, material_property)
```


<br/>

##### 3.7.3.3 Add electrodes

```
[66]
```

```python
    st = pj.Structure()

    st.add_electrode(name="cathode", property={
        "solid": "Cathode", "bc_mode": "steady_state",
        "sweep_type": "single", "voltage": vbias, "apply_AC_small_signal": "none"})
    st.add_electrode(name="anode", property={
        "solid": "Anode", "bc_mode": "steady_state",
        "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})
```

Apply a voltage of 1V to the electrode `"cathode"` to perform a steady state simulation.


<br/>

##### 3.7.3.4 Add the solver

```
[67]
```

```python
    # ----------------------   set simu
    simu = pj.Simulation()

    simu.add(name="oedevice", type="OEDevice", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": oe_x_span, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
        "genrate": {"genrate_path": genrate_file_path, "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
        "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
        "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})

```


<br/>

##### 3.7.3.5 Run the solver

```
[68]
```

```python
    # --- Run ---
    # check license and print version before & after simulation.
    result_device = simu["oedevice"].run()
```


<br/>

##### 3.7.3.6 Extract and return the I-V result

```
[69]
```

```python
    # --- Extract ---
    IV_file_folder = plot_path + project_name + "IV_cathode"
    result_device.extract(data="I", electrode="cathode", export_csv=True,
                        show=False, savepath=IV_file_folder)
    
    IV_file = os.path.join(IV_file_folder, "0_I_Real.csv")
    for i in range(10):
        IV_file = os.path.join(IV_file_folder, str(i) + "_I_Real.csv")
        if os.path.exists(IV_file):
            break
    
    data = np.genfromtxt(IV_file, skip_header=3, delimiter=',')

    return data
```


<br/>


#### 3.7.4 Run the sweeping function and export the result

```
[70]
```

```python
# region --- sweep result postprocess ---
fontsize = 20
linewidth = 1
sweep_parameter_label = sweep_parameter_name
sweep_parameter_unit = ""

Isweep = []
voltages = np.zeros(0)
for sweep_value in sweep_value_table:
    data = sweep_simulation(sweep_value)
    if len(data.shape) == 1:
        data = data.reshape((1, len(data)))
    voltages = data[:,0]
    Isweep.append(data[:, 1])

Isweep_folder = os.path.join(plot_path, simu_name + "_" + run_mode + "_" + time_str + "Isweep")
if not os.path.exists(Isweep_folder):
    os.makedirs(Isweep_folder)

Isweep = np.array(Isweep)
sweep_value_table = np.array(sweep_value_table)

plt.rcParams.update({"font.size": fontsize})
for i in range(len(voltages)):
    Isweep_fig = os.path.join(Isweep_folder, "Isweep_" + str(voltages[i]) + "V.jpg")
    Isweep_file = os.path.join(Isweep_folder, "Isweep_" + str(voltages[i]) + "V.csv")
    Iresp = Isweep[:,i]

    with open(Isweep_file, "w") as fp:
        fp.write(f"Vbias={voltages[i]}V,\n")
        fp.write(f"{sweep_parameter_name}" + (f"[{sweep_parameter_unit}]" if sweep_parameter_unit else "") + ",Current[A]\n")
        for j in range(len(Iresp)):
            fp.write(f"{sweep_value_table[j]:.15e},{Iresp[j]:.15e}\n")

    fig, ax = plt.subplots()
    fig.set_size_inches(12, 8)
    ax.plot(sweep_value_table, Iresp, c='b', linewidth=0.5, label=f"Vbias={voltages[i]}V")
    ax.plot(sweep_value_table, Iresp, 'bo')
    ax.set_ylabel("I[A]")
    ax.set_xlabel(f"{sweep_parameter_name}" + (f"[{sweep_parameter_unit}]" if sweep_parameter_unit else ""))
    plt.legend()
    plt.ticklabel_format(style="sci", scilimits=(-1, 2))
    ax.grid()
    plt.savefig(Isweep_fig)
    plt.close()

# endregion

print("\x1b[6;30;42m" + "[Finished in %(t)s mins]" % {"t": round((time.time() - start)/60, 2)} + "\x1b[0m")
```




<br/>

*Result show of the I-P curve*
![I-P curve](./img/sweeppower.jpg)
<center>Fig 12. I-P curve</center>

<br/>


## 4. Appendix


<br/>

### 4.1 Electronic parameters of the materials

The parameter settings in the `VPD_material.py` file:

```
[71]
```

```python
elec_Si_properties = {"basic": {"model": "Default",
                                "Default": {"affinity": 4.59-1.11452/2.0, "permitti": 11.7}, "print": 1},
                      "mobility": {"model": "Masetti",
                                   "Masetti": {"mu_min2_h": 44.9, "mumax_e": 1471, "mumax_h": 470.5, "pc_h": 0}, "print": 1},
                      "band": {"model": "Default",
                               "Default": {
                                   # DOS
                                   "dos_formula": 2, "nc300": 3.21657e19, "nv300": 1.82868e19,
                                   # Bandgap
                                   "eg0": 1.16, "chi0": 4.59-1.16/2,
                                   # Bandgap Narrowing
                                   "bgn_model": "OldSlotboom", "e0_bgn_oldslotboom": 0.0045, "n0_bgn_oldslotboom": 1.00e17, "deg0_oldslotboom": 0,
                                   # Auger Recombination
                                   "augan": 2.8e-31, "augap": 9.9e-32, "augbn": 0, "augbp": 0, "augcn": 0, "augcp": 0, "aughn": 0, "aughp": 0,
                                   # SRH Recombination
                                   "taunmax": 1.5e-9, "taupmax": 1.5e-9, "nsrh_n": 7.1e15, "nsrh_p": 7.1e15, "nc_f": 1.5, "nv_f": 1.5,
                                   # Radiative Recombination
                                   "c_direct": 1.6e-14}, "print": 1}}
elec_Ge_properties = {"model": {"high_field": False},
                      "basic": {"model": "Default",
                                "Default": {"affinity": 4.5-0.65969/2.0, "permitti": 16.0}, "print": 1},
                      "mobility": {"model": "Analytic",
                                   "Analytic": {"alphan": 0.56, "alphap": 1.0, "mun_max": 3900, "mun_min": 850, "mup_max": 1800, "mup_min": 300,
                                                "nrefn": 2.6e17, "nrefp": 1e17, "nun": -1.66, "nup": -2.33}, "print": 1},
                      "band": {"model": "Default",
                               "Default": {
                                   # DOS
                                   "nc300": 1.0516e19, "nv300": 3.9189e+18,
                                   # Bandgap
                                   "eg300": 0.65969, "chi300": 4.5-0.65969/2.0,
                                   # Bandgap Narrowing
                                   "v0_bgn": 0,
                                   # Auger Recombination
                                   "augan": 1e-30, "augap": 1e-30, "augbn": 0, "augbp": 0, "augcn": 0, "augcp": 0, "aughn": 0, "aughp": 0,
                                   # SRH Recombination
                                   "taunmax": 1.5e-9, "taupmax": 1.5e-9, "nsrhn": 7.1e15, "nsrhp": 7.1e15,
                                   # Radiative Recombination
                                   "c_direct": 6.41e-14}, "print": 1}}
elec_Ge_properties_for_transient = {"model": {"high_field": True, "mobility_force": "EQF"},
                                    "basic": {"model": "Default",
                                              "Default": {"affinity": 4.5-0.65969/2.0, "permitti": 16.0}, "print": 1},
                                    "mobility": {"model": "Masetti",
                                                 "Masetti": {"pc_e": 0, "mu_min1_e": 850, "mu_min2_e": 850, "mu1_e": 0, "mumax_e": 3900,
                                                             "cr_e": 2.6e17, "alpha_e": 0.56, "pc_h": 0, "mu_min1_h": 300,
                                                             "mu_min2_h": 300, "mu1_h": 0, "mumax_h": 1800, "cr_h": 1e17, "alpha_h": 1}, "print": 1},
                                    "band": {"model": "Default",
                                             "Default": {
                                                 # DOS
                                                 "nc300": 1.1372e+19, "nv300": 3.9189e+18,
                                                 # Bandgap
                                                 "eg300": 0.65969, "chi300": 4.5-0.65969/2.0,
                                                 # Bandgap Narrowing
                                                 "v0_bgn": 0,
                                                 # Auger Recombination
                                                 "augan": 1e-30, "augap": 1e-30, "augbn": 0, "augbp": 0, "augcn": 0, "augcp": 0, "aughn": 0, "aughp": 0,
                                                 # SRH Recombination
                                                 "taunmax": 1.5e-9, "taupmax": 1.5e-9, "nsrhn": 7.1e15, "nsrhp": 7.1e15,
                                                 # Radiative Recombination
                                                 "c_direct": 6.41e-14}, "print": 1},
                                    "vsat": {"model": "Canali",
                                             "Canali": {"beta0n": 2, "beta0p": 1, "betaexpn": 0, "betaexpp": 0, "alpha": 0, "vsatn0": 6e6, "vsatp0": 5.4e6,
                                                        "vsatn_exp": 0, "vsatp_exp": 0}, "print": 1}}
```

Description:

- `basic`--Set the permittivity and affinity

- `band`--Set models and parameters of the band and the recombination

- `mobility`--Set the model and parameters of mobility

- `model`--Set the switch of high field mobility model and Fermi-Dirac statistics model

- `vsat`--Set the model and parameters of velocity saturation



For the detailed introduction about electronic parameters, please refer to the document `examples/active_demo/Physics_Model_in_OEDevice.pdf`.


<br/>

### 4.2 OEDevice settings

`OEDevice` property list：

|                                          | default           | type    | notes                                                        |
| :--------------------------------------- | :---------------- | :------ | :----------------------------------------------------------- |
| general.norm_length                      | 1.0               | float   |                                                              |
| general.solver_mode                      | steady_state      | string  | Selections are ['steady_state', 'transient', 'SSAC'].        |
| general.temperature_dependence           | Isothermal        | string  | Selections are ['Isothermal'].                               |
| general.simulation_temperature           | 300               | float   |                                                              |
| advanced.non_linear_solver               | Newton            | string  | Selections are ['Newton'].                                   |
| advanced.linear_solver                   | MUMPS             | string  | Selections are ['MUMPS', 'LU', 'BCGS'].                      |
| advanced.use_quasi_fermi                 | disabled          | string  | Selections are ['disabled', 'enabled'].                      |
| advanced.damping                         | none              | string  | Selections are ['none', 'potential'].                        |
| advanced.potential_update                | 1.0               | float   |                                                              |
| advanced.multi_threads                   | let_solver_choose | string  | Selections are ['let_solver_choose', 'set_thread_count'].    |
| advanced.thread_count                    | 4                 | integer |                                                              |
| advanced.max_iterations                  | 30                | integer |                                                              |
| advanced.use_global_max_iterations       | true              | bool    |                                                              |
| advanced.poisson_max_iterations          | 30                | integer |                                                              |
| advanced.ddm_max_iterations              | 30                | integer |                                                              |
| advanced.relative_tolerance              | 1.0e-5            | float   |                                                              |
| advanced.tolerance_relax                 | 1.0e+5            | float   |                                                              |
| advanced.divergence_factor               | 1.0e+25           | float   |                                                              |
| genrate.genrate_path                     |                   | string  |                                                              |
| genrate.source_fraction                  |                   | float   |                                                              |
| genrate.coordinate_unit                  | m                 | string  | Selections are ['m', 'cm', 'um', 'nm'].                      |
| genrate.field_length_unit                | m                 | string  | Selections are ['m', 'cm', 'um', 'nm'].                      |
| geometry.dimension                       | 2d_x_normal       | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
| geometry.x                               |                   | float   |                                                              |
| geometry.x_span                          |                   | float   |                                                              |
| geometry.x_min                           |                   | float   |                                                              |
| geometry.x_max                           |                   | float   |                                                              |
| geometry.y                               |                   | float   |                                                              |
| geometry.y_span                          |                   | float   |                                                              |
| geometry.y_min                           |                   | float   |                                                              |
| geometry.y_max                           |                   | float   |                                                              |
| geometry.z                               |                   | float   |                                                              |
| geometry.z_span                          |                   | float   |                                                              |
| geometry.z_min                           |                   | float   |                                                              |
| geometry.z_max                           |                   | float   |                                                              |
| small_signal_ac.perturbation_amplitude   | 0.001             | float   |                                                              |
| small_signal_ac.frequency_spacing        | single            | string  | Selections are ['single', 'linear', 'log'].                  |
| small_signal_ac.frequency                | 1.0e+6            | float   |                                                              |
| small_signal_ac.start_frequency          | 1.0e+06           | float   |                                                              |
| small_signal_ac.stop_frequency           | 1.0e+09           | float   |                                                              |
| small_signal_ac.frequency_interval       | 9.9999e+10        | float   |                                                              |
| small_signal_ac.num_frequency_points     | 2                 | integer |                                                              |
| small_signal_ac.log_start_frequency      | 1.0e+06           | float   |                                                              |
| small_signal_ac.log_stop_frequency       | 1.0e+10           | float   |                                                              |
| small_signal_ac.log_num_frequency_points | 2                 | integer |                                                              |

Description:

- `geometry`：

  - `dimension`--Set the dimension of the simulation region. Only 2D simulation is supportd currently. When it's set to `"2d_x_normal"`, the simulation is on the yz plane. Similarly for the rest

- `general`:

  - `norm_length`--Set the length in the third dimension, default to be 1
  - `solver_mode`--Set the simulation mode. Steady state, transient and SSAC simulations are supported
  - `temperature`--Set the simulation temperature
  - `temperature_dependence`--Set the type of the temperature dependence. Only `"Isothermal"` is supported currently 

- `genrate`:

  - `genrate_path`--Set the absolute path of the optical generation rate file (gfile)
    - When it's set to `""` (by default), and empty string , no optical generation rate will be applied
    - When it's not empty, the gfile at the path will be imported to apply the optical generation rate

  - `coordinate_unit`--Set the coordinate unit in the gfile
  - `field_length_unit`--Set the length unit in the generation rate unit in the gfile
  - `source_fraction`--Set the scaling factor for the light power. The imported optical generation rate will be multiplied by this factor first, and then be used to solve the carrier transport

- `small_signal_ac`:

  - `perturbation_amplitude`--Set the voltage amplitude of the small signal
  - `frequency_spacing`--Set the spacing type of the frequency
    - When it's set to `"single"`, the frequency point is single
    - When it's set to `"linear"`, the frequency points are uniformly sampled
    - When it's set to `"log"`，the frequency points are uniformly sampled base on the logarithm of frequency
  - `frequency`--Set the value of the single frequency
  - `start_frequency`--Set the start frequency of linear spacing
  - `stop_frequency`--Set the stop frequency of linear spacing
  - `frequency_interval`--Set the frequency interval of linear spacing
  - `num_frequency_points`--Set the number of frequency points of linear spacing
  - `log_start_frequency`--Set the start frequency of logarithmic spacing

  - `log_stop_frequency`--Set the stop frequency of logarithmic spacing

  - `log_num_frequency_points`--Set the number of frequency points of logarithmic spacing

- `advanced`:

  - `non_linear_solver`--Set the non-linear solver, only Newton method is supported currently
  - `linear_solver`--Set the linear solver. Options are `"MUMPS"`, `"LU"`, `"BCGS"`.  `MUMPS` and `LU` are direct linear solvers which usually give the exact solution. However, `MUMPS` supports parallel computation while `LU` doesn't. ；`"BCGS"` is a Krylov subspace (KSP) iterative solver, which also supports parallel computation and is more efficient but can only give approximate results.
  - `use_quasi_fermi`--Whether to directly solve for the quasi-Fermi potential instead of carrier concentration as unkowns. `"enabled"` means `True`, and `"disabled"` means `False`
  - `damping`--Set the nonlinear update damping scheme. `"potential"` means the damping is based on the potential variation
  - `potential_update`--Set the threshold potential for potential damping. The large value will reduce the strength of damping effect
  - `multi_threads`:
    - When it's set to `"let_solver_choose"`, the solver will determine the number of threads to use. The default maximum number of threads is 4
    - When it's set to `"set_thread_count"`, the number of threads is set by the user to `thread_count`
  - `thread_count`--Custom number of threads
  - `max_iterations`--Set global maximum number of iterations, available when `use_global_max_iterations` is `True`
  - `use_global_max_iterations`--Whether to use global max iterations during the initialization of solving the Poisson equations and the subsequent computing for solving the drift-diffusion equations coupling with Poisson equations, default to be `True`
  - `poisson_max_iterations`--Set the max iterations during the initialization of solving the Poisson equations, available when `use_global_max_iterations` is `False`
  - `ddm_max_iterations`--Set the max iterations during the subsequent computing for solving the drift-diffusion equations coupling with Poisson equations, available when `use_global_max_iterations` is `False`
  - `relative_tolerance`--Set the relative update tolerance
  - `tolerance_relax`--Set the tolerance relaxation factor for convergence on relative tolerance criteria
  - `divergence_factor`--Nonlinear solver fault with divergence when each individual function norm exceeds the threshold as its absolute tolerance multiply by this factor

<br/>


### 4.3 Electrode settings

Electrodes are added and set up through the `add_electrode` function. The format of the function is

```
[72]
```
```python
st.add_electrode(name, property)
```

`add_electrode()` parameters:

- `name`--Electrode name
- `property`--Other properties

<br/>

There are two different type of electrical boundary conditions, which are `"steady_state"`and `"transient"`, specified by the property `bc_mode`.

<br/>

#### 4.3.1 Steady state boundary condition

When the property `bc_mode` is set to `"steady_state"`, the steady state boundary condition is applied.

<br/>

Property list of steady state boundary condition:

|                               | default      | type    | notes                                            |
|:------------------------------|:-------------|:--------|:-------------------------------------------------|
| force_ohmic                   | true         | bool    |                                                  |
| bc_mode                       | steady_state | string  | Selections are ['steady_state'].                 |
| apply_AC_small_signal         | none         | string  | Selections are ['none', 'All'].                         |
| sweep_type                    | single       | string  | Selections are ['single', 'range', 'value'].     |
| voltage                       | 0            | float   | Available when sweep_type is 'single'            |
| range_start                   | 0            | float   | Available when sweep_type is 'range'             |
| range_stop                    | 1            | float   | Available when sweep_type is 'range'             |
| range_interval                | 1            | float   | Available when sweep_type is 'range'             |
| range_num_points              | 2            | integer | Available when sweep_type is 'range'             |
| []sweep_value_table.index     |              | integer | Available when sweep_type is 'value'.            |
| []sweep_value_table.number    |              | float   | Available when sweep_type is 'value'.            |
| surface_type                  | solid        | string  | Selections are ['solid'].                        |
| solid                         |              | string  |                                                  |

Description:

- `surface_type`--Type of the surface to be set as an electrode. Currently only `"solid"` is supported, meaning that all the surfaces of a structure are selected
- `solid`--Name of the structure to be set as an electrode. Available when `surface_type` is set to `"solid"`
- `force_ohmic`--Whether the electrode is ohmic, default to be `True`. Currently only ohmic contact is supported, so `force_ohmic` can't be set to `False`
- `bc_mode`--Set to `"steady_state"` for steady state boundary condition
- `apply_AC_small_signal`:
  - When it's set to `"none"` (as default), no AC small signal is applied at each sweeping voltage
  - When it's set to "All", the AC small signal is applied after steady state simulation at each sweeping voltage

- `sweep_type`--Type of sweeping voltage. Options are `"single"`, `"range"` and `"value"`
  - When it's set to `"single"`, `voltage` is required
  - When it's set to `"range"`, `range_start`, `range_stop`, and `range_interval` or `range_num_points` are required
  - When it's set to `"value"`, `sweep_value_table` is required
- `voltage`--Set the value of the single voltage
- `range_start`--Set the start value of the voltage range
- `range_stop`--Set the stop value of the voltage range
- `range_interval`--Set the voltage interval of the voltage range
- `range_num_points`--Set the number of points of the voltage range
- `sweep_value_table`--Table of voltage values. It's a list, whose item is a dictionay. In each of its item:
  - `index`--Set the index of the voltage value
  - `number`--Set the value of the voltage

<br/>

*Example for single voltage*

```
[73]
```
```python
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state", "sweep_type": "single",
    "voltage": 0, "apply_AC_small_signal": "none"})
```

<br/>

*Example for voltage range*

```
[74]
```
```python
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state", "sweep_type": "range",
    "range_start": 0, "range_stop": 1, "range_interval": 0.5, "apply_AC_small_signal": "none"})
```

<br/>

*Example for voltage table*

```
[75]
```
```python
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state", "sweep_type": "value",
    "sweep_value_table": [{"index": 0, "number": 0}, {"index": 1, "number": 0.5}, {"index": 2, "number": 1}]})
```

<br/>

#### 4.3.2 Transient boundary condition

When the property `bc_mode` is set to `"transient"`, the transient boundary condition is applied.

<br/>

Property list of transient boundary condition:

|                                      | default      | type    | notes                                            |
|:-------------------------------------|:-------------|:--------|:-------------------------------------------------|
| force_ohmic                          | true         | bool    |                                                  |
| bc_mode                              |              | string  | Selections are ['transient'].                    |
| voltage                              | 0            | float   |                                                  |
| []time_table.time_start              |              | float   |                                                  |
| []time_table.time_stop               |              | float   |                                                  |
| []time_table.initial_step            |              | float   |                                                  |
| []time_table.max_step                |              | float   |                                                  |
| []time_table.optical.enabled         | 0            | integer | Selections are [0, 1]                            |
| []time_table.optical.envelop         |              | integer | Selections are [0]                               |
| []time_table.optical.source_fraction |              | float   |                                                  |
| surface_type                         | solid        | string  | Selections are ['solid'].                        |
| solid                                |              | string  |                                                  |

Description:

- `surface_type`, `solid`, `force_ohmic`--The same as the one in steady state condition
- `bc_mode`--Set to `"transient"` for transient boundary condition. Then the time dependence of the optical generation rate can be set at this electrode
- `voltage`--Set the voltage that  is applied to the electrode and a steady state simulation is performed first. The transient simulation is based on the steady state result. The optical generation rate is not applied during the steady state simulation.
- `v_step_max`--Set the max step of the voltage from the equilibrium state to steady state at the bias of `voltage`.
- `time_table`--Set the time dependence of optical generation rate. It's a list, whose item is a dictionary. In each of its item:
  - `time_start`--Set the start time point of the range. The value of `0` represents the steady state of the earlier simulation.
  - `time_stop`--Set the stop time point of the range
  - `initial_step`--Set the initial time step of the range
  - `max_step`--Set the max time step of the range
  - `optical`--Set the optical generation rate during the time range
    - `enabled`--Whether to apply optical generation rate during the time range. The value of `1` means `True`, and `0` means `False`
    - `envelop`--The envelop of the scaling factor of the light power during the time range. When it's set to `0`, the envelop is uniform
    - `source_fraction`--When `envelop` is set to`0`, this value is the scaling factor of the light power during the time range

<br/>

*Example for transient boundary condition*

```
[76]
```
```python
st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "transient", "voltage": 1, "v_step_max": 0.5,
    "time_table": [{"time_start": 0, "time_stop": 2e-12, "initial_step": 1e-12, "max_step": 5e-12},
                   {"time_start": 2e-12, "time_stop": 50e-12, "initial_step": 1e-15, "max_step": 1e-12,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": 1e-3}},
                   {"time_start": 50e-12, "time_stop": 600e-12, "initial_step": 1e-12, "max_step": 10e-12,
                    "optical": {"enabled": 1, "envelop": 0, "source_fraction": 1e-3}}]})
```

<br/>

</div>

</font>