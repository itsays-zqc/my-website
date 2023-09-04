
# Boundary/Mesh

The code provided in this section can be utilized to incorporate  boundary and mesh into the current project.
## 3.1 Boundary

The following content comprises code explanations and specific examples of boundary conditions in optical simulation.

```python
OBoundary(
            self,
            *,
            pml_same_settings: bool = True,
            property: Union['OBoundarySameSettingsPostProcess', 'OBoundaryNotSameSettingsPostProcess'],
    )
```

|  **Parameters**   |                    Description                    |
| :---------------: | :-----------------------------------------------: |
|     property      |        Default optical boundary property.         |
| pml_same_settings | Use same pml settings on every directions or not. |

As demonstrated in the following examples, we also provide support for customizing boundary conditions in different directions. 

**Example:**

```python
st.OBoundary(property={"geometry": {"x": 0, "x_span": 2*(l_input+l_bend+l_beam/2-0.5), "y": 0, "y_span": 6, "z": 0.11, "z_span": monitor_h},
                        "boundary": {"x_min": "PML", "x_max": "PML", "y_min": "PML", "y_max": "PML", "z_min": "PML", "z_max": "PML"},
                        "general_pml": {"pml_same_settings": True, "pml_kappa": 2, "pml_sigma": 0.8, "pml_layer": 8, "pml_polynomial": 3}})
 
```

|          **Parameters**          | Default  |  Type   |                            Notes                             |
| :------------------------------: | :------: | :-----: | :----------------------------------------------------------: |
|  general_pml.pml_same_settings   |   true   |  bool   |                                                              |
|     general_pml.pml_profile      | standard | string  |                                                              |
|      general_pml.pml_layer       |          | integer |                                                              |
|      general_pml.pml_kappa       |          |  float  |                                                              |
|      general_pml.pml_sigma       |          |  float  |                                                              |
|    general_pml.pml_polynomial    |          | integer |                                                              |
|      general_pml.pml_alpha       |          |  float  |                                                              |
| general_pml.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.pml_min_layers    |          | integer |                                                              |
|    general_pml.pml_max_layers    |          | integer |                                                              |
|            geometry.x            |          |  float  |                                                              |
|         geometry.x_span          |          |  float  |                Restrained by condition: >=0.                 |
|          geometry.x_min          |          |  float  |                                                              |
|          geometry.x_max          |          |  float  |                                                              |
|            geometry.y            |          |  float  |                                                              |
|         geometry.y_span          |          |  float  |                Restrained by condition: >=0.                 |
|          geometry.y_min          |          |  float  |                                                              |
|          geometry.y_max          |          |  float  |                                                              |
|            geometry.z            |          |  float  |                                                              |
|         geometry.z_span          |          |  float  |                Restrained by condition: >=0.                 |
|          geometry.z_min          |          |  float  |                                                              |
|          geometry.z_max          |          |  float  |                                                              |
|          boundary.x_max          |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|          boundary.x_min          |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
|          boundary.y_max          |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|          boundary.y_min          |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
|          boundary.z_max          |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|          boundary.z_min          |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |

If you need to customize the boundary conditions for simulation requirements, you can also refer to the table below for modifying boundary conditions in different directions. 


|              **Parameters**               | Default  |  Type   |                            Notes                             |
| :---------------------------------------: | :------: | :-----: | :----------------------------------------------------------: |
|       general_pml.pml_same_settings       |   true   |  bool   |                                                              |
|     general_pml.x_min_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.x_min_bc.pml_layer       |          | integer |                                                              |
|      general_pml.x_min_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.x_min_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.x_min_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.x_min_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.x_min_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.x_min_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.x_min_bc.pml_max_layers    |          | integer |                                                              |
|     general_pml.x_max_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.x_max_bc.pml_layer       |          | integer |                                                              |
|      general_pml.x_max_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.x_max_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.x_max_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.x_max_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.x_max_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.x_max_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.x_max_bc.pml_max_layers    |          | integer |                                                              |
|     general_pml.y_min_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.y_min_bc.pml_layer       |          | integer |                                                              |
|      general_pml.y_min_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.y_min_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.y_min_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.y_min_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.y_min_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.y_min_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.y_min_bc.pml_max_layers    |          | integer |                                                              |
|     general_pml.y_max_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.y_max_bc.pml_layer       |          | integer |                                                              |
|      general_pml.y_max_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.y_max_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.y_max_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.y_max_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.y_max_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.y_max_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.y_max_bc.pml_max_layers    |          | integer |                                                              |
|     general_pml.z_min_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.z_min_bc.pml_layer       |          | integer |                                                              |
|      general_pml.z_min_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.z_min_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.z_min_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.z_min_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.z_min_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.z_min_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.z_min_bc.pml_max_layers    |          | integer |                                                              |
|     general_pml.z_max_bc.pml_profile      | standard | string  |                                                              |
|      general_pml.z_max_bc.pml_layer       |          | integer |                                                              |
|      general_pml.z_max_bc.pml_kappa       |          |  float  |                                                              |
|      general_pml.z_max_bc.pml_sigma       |          |  float  |                                                              |
|    general_pml.z_max_bc.pml_polynomial    |          | integer |                                                              |
|      general_pml.z_max_bc.pml_alpha       |          |  float  |                                                              |
| general_pml.z_max_bc.pml_alpha_polynomial |          | integer |                                                              |
|    general_pml.z_max_bc.pml_min_layers    |          | integer |                                                              |
|    general_pml.z_max_bc.pml_max_layers    |          | integer |                                                              |
|                geometry.x                 |          |  float  |                                                              |
|              geometry.x_span              |          |  float  |                Restrained by condition: >=0.                 |
|              geometry.x_min               |          |  float  |                                                              |
|              geometry.x_max               |          |  float  |                                                              |
|                geometry.y                 |          |  float  |                                                              |
|              geometry.y_span              |          |  float  |                Restrained by condition: >=0.                 |
|              geometry.y_min               |          |  float  |                                                              |
|              geometry.y_max               |          |  float  |                                                              |
|                geometry.z                 |          |  float  |                                                              |
|              geometry.z_span              |          |  float  |                Restrained by condition: >=0.                 |
|              geometry.z_min               |          |  float  |                                                              |
|              geometry.z_max               |          |  float  |                                                              |
|              boundary.x_max               |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|              boundary.x_min               |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
|              boundary.y_max               |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|              boundary.y_min               |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |
|              boundary.z_max               |          | string  |  Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].  |
|              boundary.z_min               |          | string  | Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic']. |



## 3.2 Mesh

In this section, we will discuss how to add meshing to the simulation. This step is crucial to ensure the precision and dependability of the simulation outcomes. 

### 3.2.1 Add mesh

Add sub mesh to the simulation project with the code below (for optical simulation).

```python
add_mesh(
            self,
            *,
            name: str,
            property: PostProcessSubMesh,
        )
```

| **Parameters** |  Description   |
| :------------: | :------------: |
|      name      |   Mesh name.   |
|    property    | Geometry type. |

**Example:**

```python
st.add_mesh(name='sub_mesh',
            property={'general': {'dx': 0.002, 'dy': 0.002, 'dz': 0.002},
                      'geometry': {'x': 0, 'x_span': 6, 'y': 0, 'y_span': 2, 'z': 0, 'z_span': 0.2}})
```

|     **Parameters**      | Default | Type  |             Notes             |
| :---------------------: | :-----: | :---: | :---------------------------: |
| general.override_x_mesh |         | bool  |                               |
| general.override_y_mesh |         | bool  |                               |
| general.override_z_mesh |         | bool  |                               |
|       general.dx        |         | float | Restrained by condition: >0.  |
|       general.dy        |         | float | Restrained by condition: >0.  |
|       general.dz        |         | float | Restrained by condition: >0.  |
|       geometry.x        |         | float |                               |
|     geometry.x_span     |         | float | Restrained by condition: >=0. |
|     geometry.x_min      |         | float |                               |
|     geometry.x_max      |         | float |                               |
|       geometry.y        |         | float |                               |
|     geometry.y_span     |         | float | Restrained by condition: >=0. |
|     geometry.y_min      |         | float |                               |
|     geometry.y_max      |         | float |                               |
|       geometry.z        |         | float |                               |
|     geometry.z_span     |         | float | Restrained by condition: >=0. |
|     geometry.z_min      |         | float |                               |
|     geometry.z_max      |         | float |                               |



### 3.2.2 Add emesh

In the context of electrical simulation, we present guidelines on how to incorporate meshing to ensure the precision and dependability of the simulation outcomes. The code explanations and a practical example provided below.

```python
add_emesh(
            self,
            *,
            name: str,
            property: Dict[str, Any],
    	 )
```

| **Parameters** |          Description          |
| :------------: | :---------------------------: |
|      name      |   Electric local mesh name.   |
|    property    | Electric local mesh property. |

**Example:**

```python
st.add_emesh(name="EMesh_Local", property={
    "y_min": oe_y_min, "y_max": oe_y_max, "z_min": oe_z_min, "z_max": oe_z_max, "mesh_size": egrid_local})
```

| **Parameters** | Default | Type  |                 Notes                  |
| :------------: | :-----: | :---: | :------------------------------------: |
|       x        |         | float |                                        |
|     x_span     |         | float |     Restrained by condition: >=0.      |
|     x_min      |         | float |                                        |
|     x_max      |         | float |                                        |
|       y        |         | float |                                        |
|     y_span     |         | float |     Restrained by condition: >=0.      |
|     y_min      |         | float |                                        |
|     y_max      |         | float |                                        |
|       z        |         | float |                                        |
|     z_span     |         | float |     Restrained by condition: >=0.      |
|     z_min      |         | float |                                        |
|     z_max      |         | float |                                        |
|   mesh_size    |         | float | max size of electrical simulation mesh |



### 3.2.3 Add emesh along line

By implementing an electric mesh along line, you can accurately capture intricate electrical phenomena and variations, enhancing the comprehensiveness of your simulation results.

```python
add_emesh_along_line(
            self,
            *,
            name: str,
            property: Dict[str, Any],
    )
```

| **Parameters** |             Description             |
| :------------: | :---------------------------------: |
|      name      |   Electric  mesh along line name.   |
|    property    | Electric  mesh along line property. |

**Example:**

```python
st.add_emesh_along_line(name="EMesh_Ge_SiO2_Interface_Slope_Left", property={
    "start_x": oe_x_mean, "start_y": -Ge_y_span_bottom/2, "start_z": Si_z_span,
    "end_x": oe_x_mean, "end_y": -Ge_y_span_top/2, "end_z": Si_z_span+Ge_z_span,
    "mesh_size": egrid_interface})
```

| **Parameters** | Default | Type  |             Notes             |
| :------------: | :-----: | :---: | :---------------------------: |
|    start_x     |    0    | float |                               |
|    start_y     |    0    | float | Restrained by condition: >=0. |
|    start_z     |    0    | float |                               |
|     end_x      |    1    | float |                               |
|     end_y      |    1    | float |                               |
|     end_z      |    1    | float | Restrained by condition: >=0. |
|   mesh_size    |  0.01   | float |                               |

