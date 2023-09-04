
# Structure

The code within the "Structure" section is designed to assist you in incorporating the necessary structures during the EO(Electro-Optic) simulation process. 

```python
st = pj.Structure(mesh_type, 
                  mesh_factor,
                  background_material
                 )
```

<table class="custom-table ">
  <tr>
    <th>Parameters</th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td align="center">mesh_type</td>
    <td align="center">curve_mesh</td>
    <td align="center">string</td>
    <td align="center">Selections are ['curve_mesh', 'staircase'].</td>
  </tr>
  <tr>
    <td align="center">mesh_factor</td>
    <td align="center">1.2</td>
    <td align="center">float</td>
    <td align="center">Restrained by condition: &ge;1.05, &le;1.6.</td>
  </tr>
  <tr>
    <td align="center">background_material</td>
    <td align="center"></td>
    <td align="center">material</td>
    <td></td>
  </tr>
</table>


You can choose to create models using GDS files. Meanwhile, you can also utilize various methods in this "Structure" module such as Bézier curves, tapering, and circular rings for your simulation project.



## 2.1 Add geometry

Add a geometry structure to current project.

```python
add_geometry(
            self, *,
            name: str,
            type: str,
            property: "StructureGeometryPropertyDict"
    )
```

<table class="custom-table">
  <thead>
    <tr>
      <th align="center">Parameters</th>
      <th align="center">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">name</td>
      <td align="center">Geometry name.</td>
    </tr>
    <tr>
      <td align="center">type</td>
      <td align="center">Geometry type.</td>
    </tr>
    <tr>
      <td align="center">property</td>
      <td align="center">Geometry property.</td>
    </tr>
  </tbody>
</table>



|           Parameters         |              Description               |
| :------------: | :----------------: |
|      name      |   Geometry name.   |
|      type      |   Geometry type.   |
|    property    | Geometry property. |

### 2.1.1 GDS file/GDS file3D

The following codes can import the structure in Max-Optics SDK from GDS layout files.

**Example:**

```python
st.add_geometry(name="gds_file", type="gds_file", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 3 * space, "y": 2 * space, "z": 0, "z_span": wg_height},
    "general": {"path": gds_file, "cell_name": "EXTEND_1", "layer_name": (3, 0)}})
```

|       **Parameters**        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|     geometry.x      |    0    |  float   |                               |
|     geometry.y      |    0    |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |
|    general.path     |         |  string  |                               |
|  general.cell_name  |         |  string  |                               |
| general.layer_name  |         |   list   |                               |

Meanwhile, we also offer support for basic operations to GDS layout modeling using `type="gds_file3D"`. The code for this function is provided below:

```python
st.add_geometry(name="gds_file_3D", type="gds_file3D", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "general": {"path": gds_file, "cell_name": "EXTEND_1", "layer_name": (3, 0)},
    "geometry": {"tilt_angle": 60,"tilt_location": "bottom",
                 "x": 4*space, "y": 2*space, "z": 0.05, "z_span": 0.1,
                 "mirror_normal_z": 0,"mirror_plane_z0": 0,"rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|      **Parameters**      | Default |   Type   |                            Notes                             |
| :----------------------: | :-----: | :------: | :----------------------------------------------------------: |
|        geometry.x        |    0    |  float   |                                                              |
|        geometry.y        |    0    |  float   |                                                              |
|        geometry.z        |         |  float   |                                                              |
|     geometry.z_span      |         |  float   |                 Restrained by condition: >0.                 |
|      geometry.z_min      |         |  float   |                                                              |
|      geometry.z_max      |         |  float   |                                                              |
|   geometry.tilt_angle    |   90    |  float   |                                                              |
|  geometry.tilt_location  |   top   |  string  | Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined']. |
|  geometry.user_defined   |    1    |  float   |                                                              |
| geometry.mirror_normal_z |    0    |  float   |                                                              |
| geometry.mirror_plane_z0 |    0    |  float   |                                                              |
|    geometry.rotate_x     |    0    |  float   |                                                              |
|    geometry.rotate_y     |    0    |  float   |                                                              |
|    geometry.rotate_z     |    0    |  float   |                                                              |
|    material.material     |         | material |                                                              |
|   material.mesh_order    |         | integer  |                Restrained by condition: >=0.                 |
|       general.path       |         |  string  |                                                              |
|    general.cell_name     |         |  string  |                                                              |
|    general.layer_name    |         |   list   |                                                              |
| general.construct_method |         |  string  |            Selections are ['method1', 'method2']             |



### 2.1.2 Arc waveguide/Arc waveguide 3D

To establish an arc waveguide within the project, utilize the code `type="ArcWaveguide"`.

**Example:**

```python
st.add_geometry(name="arc", type="ArcWaveguide", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"inner_radius": size-wg_width/2, "outer_radius": size+wg_width/2, "angle": 90,
                 "x": 0, "y": 0, "z": 0, "z_span": wg_height, "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|        Parameters         |     Default     |       Type       |                 Notes                 |
| :-------------------: | :-----: | :------: | :---------------------------: |
| geometry.inner_radius |         |  float   | Restrained by condition: >0.  |
| geometry.outer_radius |         |  float   | Restrained by condition: >0.  |
|    geometry.angle     |         |  float   |                               |
|      geometry.x       |         |  float   |                               |
|      geometry.y       |         |  float   |                               |
|      geometry.z       |         |  float   |                               |
|    geometry.z_span    |         |  float   | Restrained by condition: >0.  |
|    geometry.z_min     |         |  float   |                               |
|    geometry.z_max     |         |  float   |                               |
|   geometry.rotate_x   |    0    |  float   |                               |
|   geometry.rotate_y   |    0    |  float   |                               |
|   geometry.rotate_z   |    0    |  float   |                               |
|   material.material   |         | material |                               |
|  material.mesh_order  |         | integer  | Restrained by condition: >=0. |

Similarly, we offer support for using code  `type="ArcWaveguide3D"` to adjust the arc waveguide structure in the thickness direction.

```python
st.add_geometry(name="arc_3d", type="ArcWaveguide3D", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"radius": size, "angle": 180, "base_height": wg_height,
                 "top_width": wg_width_top, "bottom_width": wg_width,
                 "x": space, "y": 0, "z": 0, "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|        **Parameters**         | &ensp;   Default   &ensp; |      Type      |                   Notes                    |
| :-------------------: | :-----: | :------: | :--------------------------------: |
|    geometry.radius    |         |  float   |    Restrained by condition: >0.    |
|    geometry.angle     |         |  float   | Restrained by condition: >0,<=360. |
| geometry.base_height  |         |  float   |    Restrained by condition: >0.    |
|  geometry.top_width   |         |  float   |    Restrained by condition: >0.    |
| geometry.bottom_width |         |  float   |    Restrained by condition: >0.    |
|      geometry.x       |         |  float   |                                    |
|      geometry.y       |         |  float   |                                    |
|      geometry.z       |         |  float   |                                    |
|    geometry.z_min     |         |  float   |                                    |
|    geometry.z_max     |         |  float   |                                    |
|   geometry.rotate_x   |    0    |  float   |                                    |
|   geometry.rotate_y   |    0    |  float   |                                    |
|   geometry.rotate_z   |    0    |  float   |                                    |
|   material.material   |         | material |                                    |
|  material.mesh_order  |         | integer  |   Restrained by condition: >=0.    |

### 2.1.3 Bezier curve/ Bezier curve 3D

Within the project, we can incorporate a Bezier curve structure by employing the code `type="BezierCurve"`.

**Example:**

```python
st.add_geometry(name="bezier", type="BezierCurve", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 2*space, "y": 0, "z": 0, "z_span": wg_height, "width": wg_width,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "point_1_x": 0, "point_1_y": 0, "point_2_x": 0, "point_2_y": size/2,
                 "point_3_x": size, "point_3_y": size/2, "point_4_x": size, "point_4_y": size}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
| geometry.point_1_x  |         |  float   |                               |
| geometry.point_1_y  |         |  float   |                               |
| geometry.point_2_x  |         |  float   |                               |
| geometry.point_2_y  |         |  float   |                               |
| geometry.point_3_x  |         |  float   |                               |
| geometry.point_3_y  |         |  float   |                               |
| geometry.point_4_x  |         |  float   |                               |
| geometry.point_4_y  |         |  float   |                               |
|   geometry.width    |         |  float   |                               |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |

Similarly, we offer support for using code  `type="BezierCurve3D"` to adjust the Bézier curve structure in the thickness direction.

```python
st.add_geometry(name="bezier_3d", type="BezierCurve3D", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 3*space, "y": 0, "z": 0, "rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "base_height": wg_height, "top_width": wg_width_top, "bottom_width": wg_width,
                 "control_points":
                     [{"x": 0, "y": 0}, {"x": 0, "y": size/2}, {"x": size, "y": size/2}, {"x": size, "y": size}]}})
```

|           Parameters            |     Default     |       Type       |                 Notes                 |
| :-------------------------: | :-----: | :------: | :---------------------------: |
|    geometry.base_height     |         |  float   | Restrained by condition: >0.  |
|     geometry.top_width      |         |  float   | Restrained by condition: >0.  |
|    geometry.bottom_width    |         |  float   | Restrained by condition: >0.  |
| geometry.[]control_points.x |         |  float   |                               |
| geometry.[]control_points.y |         |  float   |                               |
|         geometry.x          |         |  float   |                               |
|         geometry.y          |         |  float   |                               |
|         geometry.z          |         |  float   |                               |
|       geometry.z_min        |         |  float   |                               |
|       geometry.z_max        |         |  float   |                               |
|      geometry.rotate_x      |    0    |  float   |                               |
|      geometry.rotate_y      |    0    |  float   |                               |
|      geometry.rotate_z      |    0    |  float   |                               |
|      material.material      |         | material |                               |
|     material.mesh_order     |         | integer  | Restrained by condition: >=0. |



### 2.1.4 Circle

Integrate a circular structure into the simulation project by employing the code `type="Circle"`.


**Example:**

```python
st.add_geometry(name="circle", type="Circle", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "radius": size, "x": 4*space, "y": 0, "z": 0, "z_span": wg_height}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|   geometry.radius   |         |  float   | Restrained by condition: >0.  |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.5 Custom polygon

By utilizing the code `type="CustomPolygon"`, it becomes possible to incorporate a custiomized polygon into the project.

**Example:**

```python
st.add_geometry(name="custom_polygon", type="CustomPolygon", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"size": size, "sides": 6,
                 "x": 4*space, "y": space, "z": 0, "z_span": wg_height,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|    geometry.size    |         |  float   | Restrained by condition: >0.  |
|   geometry.sides    |         | integer  | Restrained by condition: >=3. |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.6 Ellipse

Incorporate an ellipse into the project by implementing the code `type="Ellipse"`.

**Example:**

```python
st.add_geometry(name="ellipse", type="Ellipse", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x_radius": size, "y_radius": 1.5*size,
                 "x": 3*space, "y": space, "z": 0, "z_span": wg_height,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|       Parameters        |     Default     |       Type       |               Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|  geometry.x_radius  |         |  float   | Restrained by condition: >0.  |
|  geometry.y_radius  |         |  float   | Restrained by condition: >0.  |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.7 Linear trapezoid

Integrate a linear trapezoid shape into the project using the code `type="LinearTrapezoid"`.

**Example:**

```python
st.add_geometry(name="linear_trapezoid", type="LinearTrapezoid", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"point_1_x": 0, "point_1_y": 0, "point_2_x": 0, "point_2_y": size/2,
                 "point_3_x": size, "point_3_y": size, "point_4_x": size, "point_4_y": 0,
                 "x": 2*space, "y": space, "z": 0, "z_span": wg_height,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
| geometry.point_1_x  |         |  float   |                               |
| geometry.point_1_y  |         |  float   |                               |
| geometry.point_2_x  |         |  float   |                               |
| geometry.point_2_y  |         |  float   |                               |
| geometry.point_3_x  |         |  float   |                               |
| geometry.point_3_y  |         |  float   |                               |
| geometry.point_4_x  |         |  float   |                               |
| geometry.point_4_y  |         |  float   |                               |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.8 Pyramid

Incorporate a pyramid structure into the project by employing the code `type="Pyramid"`.

**Example:**

```python
st.add_geometry(name="pyramid", type="Pyramid", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "x": space, "y": space, "z": 0, "z_span": wg_height, "theta_x": 0, "theta_y": 0,
                 "x_span_bottom": 2*size, "x_span_top": size, "y_span_bottom": 2*size, "y_span_top": size}})
```

|         Parameters         |     Default     |       Type       |                 Notes                 |
| :--------------------: | :-----: | :------: | :---------------------------: |
| geometry.x_span_bottom |         |  float   | Restrained by condition: >=0. |
| geometry.y_span_bottom |         |  float   | Restrained by condition: >=0. |
|  geometry.x_span_top   |         |  float   | Restrained by condition: >=0. |
|  geometry.y_span_top   |         |  float   | Restrained by condition: >=0. |
|    geometry.theta_x    |    0    |  float   |                               |
|    geometry.theta_y    |    0    |  float   |                               |
|       geometry.x       |         |  float   |                               |
|       geometry.y       |         |  float   |                               |
|       geometry.z       |         |  float   |                               |
|    geometry.z_span     |         |  float   | Restrained by condition: >0.  |
|     geometry.z_min     |         |  float   |                               |
|     geometry.z_max     |         |  float   |                               |
|   geometry.rotate_x    |    0    |  float   |                               |
|   geometry.rotate_y    |    0    |  float   |                               |
|   geometry.rotate_z    |    0    |  float   |                               |
|   material.material    |         | material |                               |
|  material.mesh_order   |         | integer  | Restrained by condition: >=0. |



### 2.1.9 Analytical waveguide 

Integrate an analytical waveguide structure into the project by implementing the code `type='AnalyticalWaveguide'`.

**Example:**

```python
st.add_geometry(name='taper_symmetric_test', type='AnalyticalWaveguide',
                property={'geometry': {'x': 0, 'x_span': L, 'y': 0, 'y_span': taper_width, 'z': 0, 'z_span': 0.22,
                                       'equation1': f'{str(A)}*({str(L/2)}-x)^{str(m)}+1.5', 'nonsymmetric': False,
                                       'tilt_location': 'user_defined', 'tilt_angle': 80, 'user_defined': 0.5, 'resolution': 1000},
                          'material': {'material': mt['Si'], 'mesh_order': 2}})
```

|Parameters|Default|Type|Notes|                            |
| :--------------------: | :-----: | :------: | :----------------------------------------------------------: |
|    geometry.x_span     |         |  float   |                 Restrained by condition: >0.                 |
|     geometry.x_min     |         |  float   |                                                              |
|     geometry.x_max     |         |  float   |                                                              |
|    geometry.y_span     |         |  float   |                 Restrained by condition: >0.                 |
|     geometry.y_min     |         |  float   |                                                              |
|     geometry.y_max     |         |  float   |                                                              |
|   geometry.equation1   |         |  string  |                                                              |
|   geometry.equation2   |    1    |  string  |                                                              |
| geometry.nonsymmetric  |  false  |   bool   |                                                              |
|  geometry.resolution   |   10    | integer  |                                                              |
|  geometry.tilt_angle   |   90    |  float   |                                                              |
| geometry.tilt_location |   top   |  string  | Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined']. |
| geometry.user_defined  |    1    |  float   |                                                              |
|       geometry.x       |         |  float   |                                                              |
|       geometry.y       |         |  float   |                                                              |
|       geometry.z       |         |  float   |                                                              |
|    geometry.z_span     |         |  float   |                 Restrained by condition: >0.                 |
|     geometry.z_min     |         |  float   |                                                              |
|     geometry.z_max     |         |  float   |                                                              |
|   geometry.rotate_x    |    0    |  float   |                                                              |
|   geometry.rotate_y    |    0    |  float   |                                                              |
|   geometry.rotate_z    |    0    |  float   |                                                              |
|   material.material    |         | material |                                                              |
|  material.mesh_order   |         | integer  |                Restrained by condition: >=0.                 |



### 2.1.10 Rectangle

Incorporate a rectangle structure into the project by utilizing the code `type="Rectangle"`.

**Example:**

```python
st.add_geometry(name="rectangle", type="Rectangle", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "x": 0, "x_span": size, "y": space, "y_span": wg_width, "z": 0, "z_span": wg_height, }})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|   geometry.x_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.x_min    |         |  float   |                               |
|   geometry.x_max    |         |  float   |                               |
|   geometry.y_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.y_min    |         |  float   |                               |
|   geometry.y_max    |         |  float   |                               |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.11 Ring

Integrate a ring structure into the project by implementing the code `type="Ring" `. 

**Example:**

```python
st.add_geometry(name="ring", type="Ring", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 0, "y": 2*space, "z": 0, "z_span": wg_height,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "inner_radius": size-wg_width/2, "outer_radius": size+wg_width/2,}})
```

|        Parameters         |     Default     |       Type       |                 Notes                 |
| :-------------------: | :-----: | :------: | :---------------------------: |
| geometry.inner_radius |         |  float   | Restrained by condition: >0.  |
| geometry.outer_radius |         |  float   | Restrained by condition: >0.  |
|      geometry.x       |         |  float   |                               |
|      geometry.y       |         |  float   |                               |
|      geometry.z       |         |  float   |                               |
|    geometry.z_span    |         |  float   | Restrained by condition: >0.  |
|    geometry.z_min     |         |  float   |                               |
|    geometry.z_max     |         |  float   |                               |
|   geometry.rotate_x   |    0    |  float   |                               |
|   geometry.rotate_y   |    0    |  float   |                               |
|   geometry.rotate_z   |    0    |  float   |                               |
|   material.material   |         | material |                               |
|  material.mesh_order  |         | integer  | Restrained by condition: >=0. |



### 2.1.12 Sector

Incorporate a sector structure into the project by employing the code `type="Sector"`.

**Example:**

```python
st.add_geometry(name="sector", type="Sector", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"radius": size, "angle": 75,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0,
                 "x": space, "y": 2*space, "z": 0, "z_span": wg_height}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|   geometry.radius   |         |  float   | Restrained by condition: >0.  |
|   geometry.angle    |         |  float   |                               |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |



### 2.1.13 Triangle

Integrate a triangle structure into the project by implementing the code `type="Triangle"`.

**Example:**

```python
st.add_geometry(name="triangle", type="Triangle", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"point_1_x": 0, "point_1_y": 0, "point_2_x": 0, "point_2_y": size,
                 "point_3_x": size, "point_3_y": size,
                 "x": 2*space, "y": 2*space, "z": 0, "z_span": wg_height,
                 "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
| geometry.point_1_x  |         |  float   |                               |
| geometry.point_1_y  |         |  float   |                               |
| geometry.point_2_x  |         |  float   |                               |
| geometry.point_2_y  |         |  float   |                               |
| geometry.point_3_x  |         |  float   |                               |
| geometry.point_3_y  |         |  float   |                               |
|     geometry.x      |         |  float   |                               |
|     geometry.y      |         |  float   |                               |
|     geometry.z      |         |  float   |                               |
|   geometry.z_span   |         |  float   | Restrained by condition: >0.  |
|   geometry.z_min    |         |  float   |                               |
|   geometry.z_max    |         |  float   |                               |
|  geometry.rotate_x  |    0    |  float   |                               |
|  geometry.rotate_y  |    0    |  float   |                               |
|  geometry.rotate_z  |    0    |  float   |                               |
|  material.material  |         | material |                               |
| material.mesh_order |         | integer  | Restrained by condition: >=0. |


## 2.2 Add doping

When participating in optoelectronic simulation, you have the option to utilize the provided code for introducing doping into the simulation structure. 

Our platform offers assistance in importing doping data from  files and also allows for the customization of doping regions according to your requirements.

```python
add_doping(
            self,
            *,
            name: str,
            type: "StructureDopingTypeSelection",
            property: "StructureDopingPropertyDict"
			)
```

|            Parameters         &ensp; |   &ensp;          Description          &ensp;   |
| :------------: | :-------------: |
|      name      |   Doping name   |
|      type      |   Doping type   |
|    property    | Doping property |

For instance, the code for importing doping from a file is demonstrated as follows.

**Example:**

```python
st.add_doping(name="import_n", type="file", property={
    "general": {"format": "DOP", "file_path": n_dop_file, "species": "n"}})
```

You can configure parameters related to importing doping files by adjusting settings under the `property.general` sections.

|       Parameters       |    Default    | &ensp;   Type   &ensp; |                        Notes                         |
| :------------------: | :-----: | :--: | :------------------------------------------: |
|    general.format    |         | str  |            Selections are ['DOP']            |
|  general.file_path   |         | str  |                                              |
|   general.species    |         | str  |          Selections are ['n', 'p']           |
|  volume.volume_type  |  'all'  | str  | Selections are ['all', 'material', 'region'] |
| volume.material_list |         | list |   Available when volume_type is 'material'   |
|  volume.region_list  |         | list |    Available when volume_type is 'region'    |

The code for utilizing custom region doping is provided below.

**Example:**

```python
st.add_doping(name="Uniform", type="p", property={
    "geometry": {"x": p_uniform_x_center, "x_span": p_uniform_x_span,
                 "y": p_uniform_y_center, "y_span": p_uniform_y_span,
                 "z": p_uniform_z_center, "z_span": p_uniform_z_span},
    "general": {"distribution_function": "constant", "concentration": p_uniform_con},
    "volume": {"volume_type": "material", "material_list": [mt["mat_si"]]}})
```

|   Parameters   |  Default  |   Type  &ensp;  |   Notes   |
| :---------------------------: | :-----: | :---: | :------------------------------------------------: |
|          geometry.x           |         | float |                                                    |
|        geometry.x_span        |         | float |                                                    |
|          geometry.y           |         | float |                                                    |
|        geometry.y_span        |         | float |                                                    |
|          geometry.z           |         | float |                                                    |
|        geometry.z_span        |         | float |                                                    |
|       geometry.rotate_x       |         | float |                                                    |
|       geometry.rotate_y       |         | float |                                                    |
|       geometry.rotate_z       |         | float |                                                    |
|        geometry.x_min         |         | float |                                                    |
|        geometry.x_max         |         | float |                                                    |
|        geometry.y_min         |         | float |                                                    |
|        geometry.y_max         |         | float |                                                    |
|        geometry.z_min         |         | float |                                                    |
|        geometry.z_max         |         | float |                                                    |
| general.distribution_function |         |  str  |      Selections are ['constant', 'gaussian']       |
|     general.concentration     |         | float |                                                    |
|      general.source_face      |         |  str  | Available when distribution_function is 'gaussian' |
|    general.junction_width     |         | float | Available when distribution_function is 'gaussian' |
|   general.ref_concentration   |         | float | Available when distribution_function is 'gaussian' |
|      volume.volume_type       |  'all'  |  str  |    Selections are ['all', 'material', 'region']    |
|     volume.material_list      |         | list  |      Available when volume_type is 'material'      |
|      volume.region_list       |         | list  |       Available when volume_type is 'region'       |



## 2.3 Add electrode

In this section, we will demonstrate how to integrate electrode structures into optoelectronic simulations using the provided code. Currently, the platform allows configuring both steady-state and transient voltages for the electrodes. 

Detailed code descriptions and specific examples are provided below for reference.

```python
add_electrode(
            self,
            *,
            name: str,
            property: StructureElectrodeProperty,
    )
```

|          Parameters         &ensp; |             &ensp;           Description           &ensp;              |
| :------------: | :-----------------------------------: |
|      name      |   Electric boundary condition name.   |
|    property    | Electric boundary condition property. |

### 2.3.1 Steady state

```python
st = pj.Structure()
st.add_electrode(name="anode", property={
    "solid": "Anode", "bc_mode": "steady_state", "sweep_type": "range",
    "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "none"})
st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state",
    "sweep_type": "single", "voltage": 0, "apply_AC_small_signal": "none"})
```

|          Parameters          |      Default       |     Type      |                          Notes                           |
| :------------------------: | :----------: | :-----: | :------------------------------------------: |
|        force_ohmic         |     true     |  bool   |                                              |
|          bc_mode           | steady_state | string  |       Selections are ['steady_state'].       |
|   apply_AC_small_signal    |     none     | string  |           Selections are ['none'].           |
|         sweep_type         |    single    | string  | Selections are ['single', 'range', 'value']. |
|         v_step_max         |     0.5      |  float  |                                              |
|          voltage           |      0       |  float  |    Available when sweep_type is 'single'     |
|        range_start         |      0       |  float  |     Available when sweep_type is 'range'     |
|         range_stop         |      1       |  float  |     Available when sweep_type is 'range'     |
|       range_interval       |      1       |  float  |     Available when sweep_type is 'range'     |
|      range_num_points      |      2       | integer |     Available when sweep_type is 'range'     |
| []sweep_value_table.index  |              | integer |    Available when sweep_type is 'value'.     |
| []sweep_value_table.number |              |  float  |    Available when sweep_type is 'value'.     |
|        surface_type        |    solid     | string  |          Selections are ['solid'].           |
|           solid            |              | string  |                                              |

### 2.3.2 SSAC (Small signal alternating current)

```python
st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state",
    "sweep_type": "range", "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "All"})
```
|         Parameters         |   default    |  type   |                    notes                     |
| :------------------------: | :----------: | :-----: | :------------------------------------------: |
|        force_ohmic         |     true     |  bool   |                                              |
|          bc_mode           | steady_state | string  |       Selections are ['steady_state'].       |
|   apply_AC_small_signal    |     none     | string  |       Selections are ['none', 'All'].        |
|         sweep_type         |    single    | string  | Selections are ['single', 'range', 'value']. |
|         v_step_max         |     0.5      |  float  |                                              |
|          voltage           |      0       |  float  |    Available when sweep_type is 'single'     |
|        range_start         |      0       |  float  |     Available when sweep_type is 'range'     |
|         range_stop         |      1       |  float  |     Available when sweep_type is 'range'     |
|       range_interval       |      1       |  float  |     Available when sweep_type is 'range'     |
|      range_num_points      |      2       | integer |     Available when sweep_type is 'range'     |
| []sweep_value_table.index  |              | integer |    Available when sweep_type is 'value'.     |
| []sweep_value_table.number |              |  float  |    Available when sweep_type is 'value'.     |
|        surface_type        |    solid     | string  |          Selections are ['solid'].           |
|           solid            |              | string  |                                              |

### 2.3.3 Transient

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
```

|               Parameters               |    Default    |     type      |             &ensp;      Notes      &ensp;&ensp;             |
| :----------------------------------: | :-----: | :-----: | :---------------------------: |
|             force_ohmic              |  true   |  bool   |                               |
|               bc_mode                |         | string  | Selections are ['transient']. |
|               voltage                |    0    |  float  |                               |
|       []time_table.time_start        |         |  float  |                               |
|        []time_table.time_stop        |         |  float  |                               |
|      []time_table.initial_step       |         |  float  |                               |
|        []time_table.max_step         |         |  float  |                               |
|     []time_table.optical.enabled     |    0    | integer |     Selections are [0, 1]     |
|     []time_table.optical.envelop     |         | integer |      Selections are [0]       |
| []time_table.optical.source_fraction |         |  float  |                               |
|             surface_type             |  solid  | string  |   Selections are ['solid'].   |
|                solid                 |         | string  |                               |







## 2.4 Add surface recombination

While conducting optoelectronic simulations, you can incorporate surface recombination into the simulation structure using the following code.

```python
add_surface_recombination(
            self,
            *,
            name: str,
            property: AddSurfaceRecombination,
    )
```

| Parameters |           Description           |
| :------------: | :-----------------------------: |
|      name      |   Surface recombination name.   |
|    property    | Surface recombination property. |

**Example:**

```python
st.add_surface_recombination(name="Cathode_Si", property={
        "surface_type": "domain_domain", "interface_type": "MetalOhmicInterface",
        "domain_1": "Cathode", "domain_2": "Si_base", "infinite_recombination": False, "velocity_electron": 1e7, "velocity_hole": 1e7})
```

|     **Parameters**     |    Default    |   Type   |                            Notes                             |
| :--------------------: | :-----------: | :------: | :----------------------------------------------------------: |
|      surface_type      | domain_domain |  string  |    Selections are ['domain_domain', 'material_material'].    |
|     interface_type     |     null      |  string  | Selections are ['null', 'InsulatorInterface', 'HomoJunction', 'HeteroJunction', 'MetalOhmicInterface', 'SolderPad']. |
| infinite_recombination |     true      |   bool   |    Available when interface_type is 'MetalOhmicInterface'    |
|     velocity_hole      |       0       |  float   | Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface' |
|   velocity_electron    |       0       |  float   | Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface' |
|        domain_1        |               |  string  |        Available when surface_type is 'domain_domain'        |
|        domain_2        |               |  string  |        Available when surface_type is 'domain_domain'        |
|       material_1       |               | material |      Available when surface_type is 'material_material'      |
|       material_2       |               | material |      Available when surface_type is 'material_material'      |

