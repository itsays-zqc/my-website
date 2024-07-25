
# Localmesh

<font face = "Calibri">

<div class="text-justify">

The area of the added local mesh will override the default automatic mesh, regardless of the mesh step. <br/>

The setting of the minimum mesh step in the solver is the globally smallest mesh size allowed in the simulation. This setting takes priority over other mesh constraints, including local mesh regions.

## 3.1 Add local mesh

The syntax and properties of adding local mesh are shown below. This function does not return any data.

```python
add(
        name: str,
        property: dict,
    )
```

### General properties
 dx/dy/dz: Specify the mesh size in the x/y/z direction.

### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  x, y, z               | number  |     -    | The center position of the local mesh region. |
|  x_span, y_span, z_span         | number  |     -   | X span, Y span, Z span of the local mesh region. |
|  x_min, x_max           | number  |     -     | X min, X max position of the local mesh region. |
|  y_min, y_max           | number  |     -     | Y min, Y max position of the local mesh region. |
|  z_min, z_max           | number  |     -     | Z min, Z max position of the local mesh region. |


**Example:**

The following command sets the local mesh region to 6 um * 3 um * 3 um and the local mesh step to 0.2 um in the x, y and z directions. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project.

```python
lm = pj.LocalMesh()
lm.add(name="sub_mesh",
        property={"general": {"dx": 0.2, "dy": 0.2, "dz": 0.2},
                    "geometry": {"x": 0, "x_span": 6, "y": 0, "y_span":3, "z": 0, "z_span": 3 } } )
```


## 3.2 Add Electrical Local Mesh

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
st.add_emesh(name="local_mesh", type="EMesh", property={
        "general": {"mesh_size": 0.01},
        "geometry": {"geometry_type": "directly_defined", "x": st_x_mean, "x_span": 0,
                     "y": 0, "y_span": 0.8, "z_min": -0.1, "z_max": 0.3}})
```

Property list of electrical local mesh in a rectangle region:

|                       |         default     |  type  | notes                                          |
| :-------------------: | :-----------------: | :----: | :--------------------------------------------: |
| general.mesh_size     |           0.01      |  float |  The minimum value of the local mesh region.   |
| general.geometry_type |    directly defined | string | Selections are ['directly defined', 'solid','solid_solid']  |
| solid_solid           |          -           |string  |Names of the two structures at the interface.|
| solid_1               |          -           | string | Available when geometry_type is 'solid_solid'    |
| solid_2               |           -          | string | Available when geometry_type is 'solid_solid'    |

Local mesh of electrical simulation in rectangle region property list, when `geometry_type` is `directly defined`:

| **Parameters** | Default | Type  |                 Notes                  |
| :------------: | :-----: | :---: | :------------------------------------: |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the electrical mesh.    |
|   geometry.x_span   |    -     |  float   | The length in x direction of the electrical mesh. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the electrical mesh.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the electrical mesh.     |
|     geometry.y      |    -     |  float   |  The y-coordinate of the center point position of the electrical mesh.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the electrical mesh. Restrained by condition: >0.  |
|   geometry.y_min    |    -     |  float   |The minimum y-coordinate endpoint data of the electrical mesh.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the electrical mesh.      |
|     geometry.z      |    -     |  float   |   The z-coordinate of the center point position of the electrical mesh.    |
|   geometry.z_span   |    -     |  float   | The thinckness in z direction of the electrical mesh. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the electrical mesh.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the electrical mesh.     |
|   mesh_size    |       -  | float | The max size of electrical simulation mesh. |

Note: When the simulation region is in the xy plane, only the parameters in the x, y direction are effective, and parameters in the z direction will be ignored. Similarly for the rest.

By implementing an electric mesh in solid or its boundary, enhancing the comprehensiveness of your simulation results.

**Example:**

```python
# Example of electrical local mesh in a solid

   lm = pj.LocalMesh()
    
    lm.add(name="EMesh_Si", type="EMesh", property={
        "general": {"mesh_size": 0.02},
        "geometry": {"geometry_type": "solid", "solid": st["Si_base"]}
    })

# Example of electrical local mesh in the solid boundary

   lm = pj.LocalMesh()

    lm.add(name="Ge_Boundary", type="EMesh", property={
        "general": {"mesh_size": 0.002},
        "geometry": {"geometry_type": "solid_solid", 
                     "solid_1": st["Ge"],
                     "solid_2": st["Ge"],
                     "growth_ratio": 2}
    })
```

</div>

</font>