
# Structure

The code within the "Structure" section is designed to assist you  incorporating the necessary structures during the EO(Electro-Optic) simulation process. 

```python
st = pj.Structure(mesh_type, 
                  mesh_factor,
                  background_material
                 )
```

 <table align="center">
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
    <td align="center">Different mesh types for iterative calculations. Selections are ['curve_mesh', 'staircase'].</td>
  </tr>
  <tr>
    <td align="center">mesh_factor</td>
    <td align="center">1.2</td>
    <td align="center">float</td>
    <td align="center">Maximum rate when the mesh changes.</td>
  </tr>
  <tr>
    <td align="center">background_material</td>
    <td align="center">-</td>
    <td align="center">material</td>
    <td align="center">Background material</td>
  </tr>
</table>


You can choose to create geometry models using GDS files. Meanwhile, you can also utilize various methods in this "Structure" module such as Bézier curves, tapering, and circular rings for your simulation project.



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

 <table align="center">
  <thead>
    <tr>
      <th align="center">Parameters</th>
      <th align="center">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">name</td>
      <td align="center">The name of a specific geometric structure.</td>
    </tr>
    <tr>
      <td align="center">type</td>
      <td align="center">The type of a specific geometric structure.</td>
    </tr>
    <tr>
      <td align="center">property</td>
      <td align="center">The property of a specific geometric structure, including the materials, geometric dimensions, and so on.</td>
    </tr>
  </tbody>
</table>




### 2.1.1 GDS file/GDS file3D

The following codes can import the structure in Max-Optics SDK from GDS layout files.

**Example:**

```python
st.add_geometry(name="gds_file", type="gds_file", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": { "z": 0, "z_span": wg_height},
    "general": {"path": gds_file, "cell_name": "EXTEND_1", "layer_name": (3, 0)}})
```

|       Parameters        |     Default     |       Type       |                 Notes                 |
| :-----------------: | :-----: | :------: | :---------------------------: |
|     geometry.x      |    0    |  float   |    The x-coordinate of the center point position of structures in the imported GDS file.          |
|     geometry.y      |    0    |  float   |    The y-coordinate of the center point position of structures in the imported GDS file.      |
|     geometry.z      |    -   |  float   | The z-coordinate of the center point position of structures in the imported GDS file. |
|   geometry.z_span   |     -    |  float   | Setting the height of structures in the imported GDS file. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |   The z-coordinate of the bottom position of the height of structures in the imported GDS file.      |
|   geometry.z_max    |     -    |  float   |   The z-coordinate of the top position of the height of structures in the imported GDS file.    |
|  material.material  |     -    | material |     Material of the geometric structure.         |
| material.mesh_order |    -     | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |
|    general.path     |    -     |  string  |    The path of the imported GDS file.   |
|  general.cell_name  |     -    |  string  |  The cell name of imported GDS file.  |
| general.layer_name  |     -    |   list   |   The layer name of imported GDS file.     |

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
|   geometry.tilt_angle    |   90   |  float   | Tilt angle of waveguide sidewall.   |
|  geometry.tilt_location  |   top   |  string  | To ensure that the models within the GDS layout are placed at the specified sizes on the different ratio of sidewalls when importing GDS layout. Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined']. |
|  geometry.user_defined   |    1    |  float   |      To decide the ratio of sidewalls when importing GDS layout.                                                    |
| geometry.mirror_normal_z |    0    |  float   | The posiotion of z-normal plane for mirror symmetry.                                      |
| geometry.mirror_plane_z0 |    0    |  float   |       The center point position of z normal palne.                                                       |
|    geometry.rotate_x     |    0    |  float   | The angle around the x-axis in the rotation operation.                                  |
|    geometry.rotate_y     |    0    |  float   |  The angle around the y-axis in the rotation operation.                                        |
|    geometry.rotate_z     |    0    |  float   | The angle around the z-axis in the rotation operation.                                      |
| general.construct_method |     -    |  string  |     The method around constructing the GDS after choosing to import the GDS file. Selections are ['method1', 'method2']             |



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
| geometry.inner_radius |     -    |  float   | The inner radius of arc waveguide. Restrained by condition: >0.  |
| geometry.outer_radius |    -     |  float   | The outer radius of arc waveguide. Restrained by condition: >0.  |
|    geometry.angle     |    -     |  float   |   The angle corresponding to the arc length of an arc waveguide.     |
|      geometry.x       |    -     |  float   |  The x-coordinate of the center point position of arc waveguide.                       |
|      geometry.y       |    -     |  float   |       The y-coordinate of the center point position of arc waveguide.                        |
|      geometry.z       |    -     |  float   |     The z-coordinate of the center point position of arc waveguide.        |
|    geometry.z_span    |     -    |  float   | Setting the height of arc waveguide. Restrained by condition: >0.  |
|    geometry.z_min     |    -     |  float   | The z-coordinate of the bottom position of the height of arc waveguide.   |
|    geometry.z_max     |     -    |  float   |   The z-coordinate of the top position of the height of arc waveguide.    |
|   geometry.rotate_x   |    0    |  float   |    The angle around the x-axis in the rotation operation.     |
|   geometry.rotate_y   |    0    |  float   |   The angle around the y-axis in the rotation operation.      |
|   geometry.rotate_z   |    0    |  float   |      The angle around the z-axis in the rotation operation.       |
|   material.material   |     -    | material |  Material of the geometric structure.     |
|  material.mesh_order  |     -    | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |

Similarly, we offer support for using code  `type="ArcWaveguide3D"` to adjust the arc waveguide structure in the height direction.

```python
st.add_geometry(name="arc_3d", type="ArcWaveguide3D", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"radius": size, "angle": 180, "base_height": wg_height,
                 "top_width": wg_width_top, "bottom_width": wg_width,
                 "x": space, "y": 0, "z": 0, "rotate_x": 0, "rotate_y": 0, "rotate_z": 0}})
```

|        Parameters         |   Default   |      Type      |                   Notes                    |
| :-------------------: | :-----: | :------: | :--------------------------------: |
|    geometry.radius    |      -   |  float   |    The radius of the central width of the arc. Restrained by condition: >0.    |
|    geometry.angle     |    -     |  float   | The angle corresponding to the arc length of an arc waveguide. Restrained by condition: >0,<=360. |
| geometry.base_height  |     -    |  float   |    The height of the arc waveguide. Restrained by condition: >0.    |
|  geometry.top_width   |    -     |  float   |    The top width of the arc waveguide. Restrained by condition: >0.    |
| geometry.bottom_width |   -      |  float   |    The bottom width of the arc waveguide. Restrained by condition: >0.    |

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
| geometry.point_1_x  |    -     |  float   |  The x-coordinate of the first point for generating a Bezier curve.      |
| geometry.point_1_y  |    -     |  float   | The y-coordinate of the first point for generating a Bezier curve.   |
| geometry.point_2_x  |    -     |  float   |   The x-coordinate of the second point for generating a Bezier curve.       |
| geometry.point_2_y  |     -    |  float   | The y-coordinate of the second point for generating a Bezier curve.   |
| geometry.point_3_x  |     -    |  float   | The x-coordinate of the third point for generating a Béezier curve.   |
| geometry.point_3_y  |     -    |  float   |The y-coordinate of the third point for generating a Béezier curve.    |
| geometry.point_4_x  |     -    |  float   |   The x-coordinate of the forth point for generating a Bezier curve.      |
| geometry.point_4_y  |     -    |  float   | The y-coordinate of the forth point for generating a Bezier curve.   |
|   geometry.width    |     -    |  float   |  The width of the Bezier curve.     |
|     geometry.x      |     -    |  float   |  The center point x-coordinate the Bezier curve.    |
|     geometry.y      |     -    |  float   |    The center point y-coordinate the Bezier curve.     |
|     geometry.z      |      -   |  float   |  The center point z-coordinate the Bezier curve.    |
|   geometry.z_span   |     -    |  float   | The thinckness of the Bezier curve. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |  The bottom position of the height of the Bezier curve in the z-coordinate.   |
|   geometry.z_max    |     -    |  float   | The top position of the height of the Bezier curve in the z-coordinate.   |
|  geometry.rotate_x  |    0    |  float   | The angle around the x-axis in the rotation operation.     |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.  |
|  geometry.rotate_z  |    0    |  float   |   The angle around the z-axis in the rotation operation.   |
|  material.material  |     -    | material |  Material of the geometric structure.    |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |

Similarly, we offer support for using code  `type="BezierCurve3D"` to adjust the Bézier curve structure in the height direction.

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
|    geometry.base_height     |   -      |  float   | The height of the Bezier curve. Restrained by condition: >0.  |
|     geometry.top_width      |    -     |  float   | The top width of the Bezier curve. Restrained by condition: >0.  |
|    geometry.bottom_width    |    -     |  float   | The bottom width of the Bezier curve. Restrained by condition: >0.  |
| geometry.[]control_points.x |    -     |  float   | The x-coordinate of the points for generating a Bezier curve.   |
| geometry.[]control_points.y |    -     |  float   |  The y-coordinate of the points for generating a Bezier curve. |



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
|   geometry.radius   |    -     |  float   | The radius of the circle. Restrained by condition: >0.  |
|     geometry.x      |     -    |  float   | The x-coordinate of the center point position of circle.    |
|     geometry.y      |     -    |  float   |    The y-coordinate of the center point position of circle.      |
|     geometry.z      |    -     |  float   |   The z-coordinate of the center point position of circle.       |
|   geometry.z_span   |     -    |  float   | The thinckness of the circle. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The bottom position of the height of the circle in z-coordinate.      |
|   geometry.z_max    |    -     |  float   |  The top position of the height of the circle in z-coordinate.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |     -    | material | Material of the geometric structure. |
| material.mesh_order |    -     | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |



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
|    geometry.size    |    -     |  float   | The side length of the polygon. Restrained by condition: >0.  |
|   geometry.sides    |    -     | integer  |To set the number of custom polygon sides. Restrained by condition: >=3. |
|     geometry.x      |    -     |  float   |  The center point x-coordinate the custom polygon.    |
|     geometry.y      |    -     |  float   |    The center point y-coordinate the custom polygon.     |
|     geometry.z      |     -    |  float   |  The center point z-coordinate the custom polygon.    |
|   geometry.z_span   |    -     |  float   | The thinckness of the custom polygon. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |  The z-coordinate of the bottom position of the height of the custom polygon.   |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the custom polygon.   |
|  geometry.rotate_x  |    0    |  float   | The angle around the x-axis in the rotation operation.     |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.  |
|  geometry.rotate_z  |    0    |  float   |   The angle around the z-axis in the rotation operation.   |
|  material.material  |      -   | material |  Material around the geometric structure.    |
| material.mesh_order |      -   | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |


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
|  geometry.x_radius  |     -    |  float   | The length in the x direction of the ellipse. Restrained by condition: >0.  |
|  geometry.y_radius  |    -     |  float   | The width in the y direction of the ellipse.Restrained by condition: >0.  |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the ellipse.    |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the ellipse.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the ellipse.    |
|   geometry.z_span   |     -    |  float   | The thinckness of the ellipse. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the height of the ellipse.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the height of the ellipse.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |     -    | material | Material of the geometric structure. |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |



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
| geometry.point_1_x  |     -    |  float   |     The x-coordinate of one point when constructing a linear trapezoid structure.          |
| geometry.point_1_y  |     -    |  float   | The y-coordinate of one point when constructing a linear trapezoid structure.      |
| geometry.point_2_x  |    -     |  float   |    The x-coordinate of one point when constructing a linear trapezoid structure.      |
| geometry.point_2_y  |     -    |  float   |  The y-coordinate of one point when constructing a linear trapezoid structure.      |
| geometry.point_3_x  |     -    |  float   |    The x-coordinate of one point when constructing a linear trapezoid structure.    |
| geometry.point_3_y  |     -    |  float   |   The y-coordinate of one point when constructing a linear trapezoid structure.    |
| geometry.point_4_x  |    -     |  float   |       The x-coordinate of one point when constructing a linear trapezoid structure.     |
| geometry.point_4_y  |   -      |  float   |     The y-coordinate of one point when constructing a linear trapezoid structure.     |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the linear trapezoid.    |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the linear trapezoid.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the linear trapezoid.    |
|   geometry.z_span   |     -    |  float   | The thinckness of the linear trapezoid. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the height of the linear trapezoid.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the height of the linear trapezoid.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The around the z-axis in the rotation operation.        |
|  material.material  |     -    | material | Material of the geometric structure. |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |



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
| geometry.x_span_bottom |    -     |  float   | The length in the x-direction at the bottom of the pyramid. Restrained by condition: >=0. |
| geometry.y_span_bottom |     -    |  float   | The width in the y-direction at the bottom of the pyramid. Restrained by condition: >=0. |
|  geometry.x_span_top   |    -     |  float   | The length in the x-direction at the top of the pyramid. Restrained by condition: >=0. |
|  geometry.y_span_top   |    -     |  float   |  The width in the y-direction at the top of the pyramid. Restrained by condition: >=0. |
|    geometry.theta_x    |    0    |  float   | The tilt angle of the top pyramid structure along the x+ axis.  |
|    geometry.theta_y    |    0    |  float   | The tilt angle of the top pyramid structure along the y+ axis.                              |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the pyramid.    |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the pyramid.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the pyramid.    |
|   geometry.z_span   |     -    |  float   | The thinckness of the pyramid. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the height of the pyramid.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the height of the pyramid.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |    -     | material | Material of the geometric structure. |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |



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
|    geometry.x_span     |     -    |  float   |                 The length of the waveguide in the x-direction. Restrained by condition: >0.                 |
|     geometry.x_min     |     -    |  float   | The x-coordinate  value of the endpoint for the waveguide length.                                   |
|     geometry.x_max     |      -   |  float   | The x-coordinate  value of the endpoint for the waveguide length.                                  |
|    geometry.y_span     |      -   |  float   |                 The width of the waveguide in the y-direction. Restrained by condition: >0.                 |
|     geometry.y_min     |    -     |  float   |  The y-coordinate  value of the endpoint for the waveguide width.                                          |
|     geometry.y_max     |     -    |  float   |  The y-coordinate  value of the endpoint for the waveguide width.                                    |
|   geometry.equation1   |    -     |  string  | The customed function 1 used in modeling the analytical waveguide.                                     |
|   geometry.equation2   |    -   |  string  |  When the geometry is asymmetric(`'nonsymmetric': True`), the customed function 2 used in modeling the analytical waveguide.      |
| geometry.nonsymmetric  |  false  |   bool   |    To Control whether the waveguide is symmetric.                                 |
|  geometry.resolution   |   10    | integer  | The resolution in modeling the analytical waveguide when working with functions.                                                             |
|  geometry.tilt_angle   |   90    |  float   |  Tilt angle of the structure sidewall.        |
| geometry.tilt_location |   top   |  string  | Different ways of tilting the sidewalls of the waveguide. Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined']. |
| geometry.user_defined  |    1    |  float   |            To decide the ratio of sidewalls.                            |
|     geometry.x      |    0    |  float   |    The x-coordinate of the center point position of the analytical waveguide.          |
|     geometry.y      |    0    |  float   |    The y-coordinate of the center point position of the analytical waveguide.      |
|     geometry.z      |     -    |  float   | The z-coordinate of the center point position of the analytical waveguide. |
|   geometry.z_span   |     -    |  float   | Setting the height of the analytical waveguide. Restrained by condition: >0.  |
|   geometry.z_min    |      -   |  float   |   The z-coordinate of the bottom position of the height of the analytical waveguide.      |
|   geometry.z_max    |     -    |  float   |   The z-coordinate of the top position of the height of the analytical waveguide.    |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |      -   | material |     Material of the geometric structure.         |
| material.mesh_order |      -   | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |



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
|    geometry.x_span     |         |  float   |                 The length of the rectangle in the x-direction. Restrained by condition: >0.                 |
|     geometry.x_min     |     -    |  float   | The x-coordinate  value of the endpoint for the rectangle length.                                   |
|     geometry.x_max     |    -     |  float   | The x-coordinate  value of the endpoint for the rectangle length.                                  |
|    geometry.y_span     |    -     |  float   |                 The width of the rectangle in the y-direction. Restrained by condition: >0.                 |
|     geometry.y_min     |     -    |  float   |  The y-coordinate  value of the endpoint for the rectangle width.                                          |
|     geometry.y_max     |     -    |  float   |  The y-coordinate  value of the endpoint for the rectangle width.                                    |
|     geometry.x      |    0    |  float   |    The x-coordinate of the center point position of the rectangle.          |
|     geometry.y      |    0    |  float   |    The y-coordinate of the center point position of the rectangle.      |
|     geometry.z      |     -    |  float   | The z-coordinate of the center point position of the rectangle. |
|   geometry.z_span   |    -     |  float   | Setting the height of the rectangle. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |   The z-coordinate of the bottom position of the height of the rectangle.      |
|   geometry.z_max    |     -    |  float   |   The z-coordinate of the top position of the height of the rectangle.    |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |    -     | material |     Material of the geometric structure.         |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |



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
| geometry.inner_radius |    -     |  float   | The inner radius of the ring. Restrained by condition: >0.  |
| geometry.outer_radius |    -     |  float   | The outer radius of the ring. Restrained by condition: >0.  |
|     geometry.x      |    0    |  float   |    The x-coordinate of the center point position of the ring.          |
|     geometry.y      |    0    |  float   |    The y-coordinate of the center point position of the ring.      |
|     geometry.z      |    -     |  float   | The z-coordinate of the center point position of the ring. |
|   geometry.z_span   |     -    |  float   | Setting the height of the ring. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |   The z-coordinate of the bottom position of the height of the ring.      |
|   geometry.z_max    |     -    |  float   |   The z-coordinate of the top position of the height of the ring.    |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |     -    | material |     Material of the geometric structure.         |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |



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
|   geometry.radius   |   -      |  float   | The radius of the sector. Restrained by condition: >0.  |
|   geometry.angle    |     -    |  float   |   The angle of the sector.        |
|     geometry.x      |    0    |  float   |    The x-coordinate of the center point position of the sector.          |
|     geometry.y      |    0    |  float   |    The y-coordinate of the center point position of the sector.      |
|     geometry.z      |     -    |  float   | The z-coordinate of the center point position of the sector. |
|   geometry.z_span   |     -    |  float   | Setting the height of the sector. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |   The z-coordinate of the bottom position of the height of the sector.      |
|   geometry.z_max    |     -    |  float   |   The z-coordinate of the top position of the height of the sector.    |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |     -    | material |     Material of the geometric structure.         |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure.Restrained by condition: >=0. |


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
| geometry.point_1_x  |     -    |  float   |     The x-coordinate of endpoint when constructing a triangle.          |
| geometry.point_1_y  |     -    |  float   | The y-coordinate of endpoint when constructing a triangle.      |
| geometry.point_2_x  |     -    |  float   |    The x-coordinate of endpoint when constructing a triangle.      |
| geometry.point_2_y  |     -    |  float   |  The y-coordinate of endpoint when constructing a triangle.      |
| geometry.point_3_x  |     -    |  float   |    The x-coordinate of endpoint when constructing a triangle.    |
| geometry.point_3_y  |     -    |  float   |   The y-coordinate of endpoint when constructing a triangle.    |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the triangle.    |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the triangle.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the triangle.    |
|   geometry.z_span   |     -    |  float   | The thinckness of the triangle. Restrained by condition: >0.  |
|   geometry.z_min    |      -   |  float   |The z-coordinate of the bottom position of the height of the triangle.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the height of the triangle.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
|  material.material  |     -    | material | Material of the geometric structure. |
| material.mesh_order |     -    | integer  | The order of material coverage when creating a geometric structure. Restrained by condition: >=0. |

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

|            Parameters         |             Description             |
| :------------: | :-------------: |
|      name      |   To set the name of doping in simulation   |
|      type      |   The method type of setting up doping. Selections are ['type', 'n', 'p'].    |
|    property    | The property of doping. |

### 2.2.1 Function doping
When `type` is set to `"n"` or `"p"`, function doping is applied. In this case, `type` also means the doping species, with `"n"` for donor and `"p"` for acceptor.

You can configure parameters related to importing doping files by adjusting settings under the `property.general` sections.

**Example:**

```python
st.add_doping(name="Uniform", type="p", property={
    "geometry": {"x": p_uniform_x_center, "x_span": p_uniform_x_span,
                 "y": p_uniform_y_center, "y_span": p_uniform_y_span,
                 "z": p_uniform_z_center, "z_span": p_uniform_z_span},
    "general": {"distribution_function": "constant", "concentration": p_uniform_con},
    "volume": {"volume_type": "material", "material_list": [mt["mat_si"]]}})
```

|   Parameters   |  Default  |   Type   |   Notes   |
| :---------------------------: | :-----: | :---: | :------------------------------------------------: |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of doping box.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the doping. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data doping box.      |
|   geometry.x_max    |    -     |  float   |  The maximum x-coordinate endpoint data of doping box.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of doping box.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the doping. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of doping box.       |
|   geometry.y_max    |    -     |  float   |  The maximum y-coordinate endpoint data of doping box.      |
|     geometry.z      |    -     |  float   |   The z-coordinate of the center point position of doping box.    |
|   geometry.z_span   |     -    |  float   | The thinckness in z direction of doping box. Restrained by condition: >0.  |
|   geometry.z_min    |    -     |  float   |The z-coordinate of the bottom position of the height of doping box.      |
|   geometry.z_max    |    -     |  float   |  The z-coordinate of the top position of the height of doping box.     |
|  geometry.rotate_x  |    0    |  float   |    The angle around the x-axis in the rotation operation.        |
|  geometry.rotate_y  |    0    |  float   |  The angle around the y-axis in the rotation operation.    |
|  geometry.rotate_z  |    0    |  float   |  The angle around the z-axis in the rotation operation.        |
| general.distribution_function |      -   |  str  |    To set the type of distribution function for doping region. Selections are ['constant', 'gaussian']. When it's set to 'constant', constant doping is applied and only 'concentration' is required. When it's set to 'gaussian', Gaussian function doping is applied, and 'concentration', 'ref_concentration', 'junction_width', 'source_face'  are required.       |
|     general.concentration     |     -    |  float |  To set the doping concentration in non-diffusion area.    |
|      general.source_face      |     -    |  str  | To set the doping source surface. Available when distribution_function is 'gaussian'. Selections are ['low_x', 'low_y','low_z'].'lower_x' means the source face is 'x=x_min'. Similarly for the rest. There is no diffusion area on the edge of source face. As for the other edges, there is a diffusion area respectively within the doping box. |
|    general.junction_width     |     -    | float | To set the junction width. Available when distribution_function is 'gaussian' |
|   general.ref_concentration   |     -    | float | Concentration on the edge of diffusion area (edge of doping box). Available when distribution_function is 'gaussian'. |
|      volume.volume_type       |  'all'  |  str  |   The default of 'all' means the doping is applied to all the (semiconductor) structures, restricted by the doping box. Selections are ['all', 'material', 'region']    |
|     volume.material_list      |    -     | list  |     It means the doping is applied to the structures of the specified materials and restricted by the doping box. Available when volume_type is 'material'.      |
|      volume.region_list       |      -   | list  |    It  means the doping is applied to the specified structures and restricted by the doping box.   Available when volume_type is 'region'       |


### 2.2.2 Imported doping

When type is set to 'ile', doping is imported from a file.

**Example:**

```python
st.add_doping(name="import_n", type="file", property={
    "general": {"format": "DOP", "file_path": n_dop_file, "species": "n"}})
```


|       Parameters       |    Default    | &ensp;   Type   &ensp; |                        Notes                         |
| :------------------: | :-----: | :--: | :------------------------------------------: |
|    general.format    |    -     | str  |     Set the format of doping file. Only "DOP" is supported currently. Selections are ['DOP']. When it's set to "DOP", the doping file is a text file that stores a doping profile in rectangular grid. There are three columns in the file, which are the first dimension coordinate [um], the second dimension coordinate [um] and the doping concentration [cm^-3] respectively. Doping concentration should be non-negative.         |
|  general.file_path   |    -     | str  |  The absolute path of the doping file         |
|   general.species    |    -     | str  |  To set the doing species. Selections are ['n', 'p'].            |
|  volume.volume_type  |  'all'  | str  | To set a list of regions or materials for doping. Selections are ['all', 'material', 'region'].  |
| volume.material_list |    -     | list |   Available when volume_type is 'material'   |
|  volume.region_list  |    -     | list |    Available when volume_type is 'region'    |



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
|      name      |    To set the name of eelectrode in simulation.   |
|    property    | To set the property of electrode in simulation. |

### 2.3.1 Steady state

When the property `bc_mode` is set to `"steady_state"`, the steady state boundary condition is applied.

**Example:**

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
|        force_ohmic         |     true     |  bool   |   Whether the electrode is ohmic, default to be True. Currently only ohmic contact is supported, so force_ohmic can't be set to False.   |
|          bc_mode           | steady_state | string  |       To set the type of electircal boundary condition. Selections are ['steady_state',transient].       |
|   apply_AC_small_signal    |     none     | string  |   Determining whether to apply the small-signal alternating current. Selections are ['none', 'All']. When it's set to "none", no AC small signal is applied at each sweeping voltage. When it's set to "All", the AC small signal is applied after steady state simulation at each sweeping voltage      |
|         sweep_type         |    single    | string  | To set the voltage type of the electrode. Selections are ['single', 'range', 'value']. |
|         v_step_max         |     0.5      |  float  |    The maxium step of voltage value.          |
|          voltage           |      0       |  float  |    The value of voltage. Available when sweep_type is 'single'     |
|        range_start         |      0       |  float  |     The  start value of a voltage range. Available when sweep_type is 'range'     |
|         range_stop         |      1       |  float  |     The  stop value of a voltage range. Available when sweep_type is 'range'     |
|       range_interval       |      1       |  float  |     The  interval value of a voltage range. Available when sweep_type is 'range'     |
|      range_num_points      |      2       | integer |     The   The number of points within the voltage range. Available when sweep_type is 'range'     |
| []sweep_value_table.index  |       -       | integer |    The index table of voltage values. Available when sweep_type is 'value'.     |
| []sweep_value_table.number |       -       |  float  |     The value table of voltage. Available when sweep_type is 'value'.     |
|        surface_type        |    solid     | string  |     To set the surface type of electrode. Currently only 'solid' is supported, meaning that all the surfaces of a structure are selected.      |
|           solid            |       -       | string  | Name of the structure to be set as an electrode. Available when surface_type is set to 'solid'.         |

### 2.3.2 SSAC (Small signal alternating current)

When solving the frequency response of optical signal for the device, transient simulation should be performed. In this case, the bc_mode of the corresponding electrode should be set to "transient", and the solver_mode of OEDevice solver should be set to "transient", too.

In most of other cases, steady state or SSAC simulation is needed, the 'bc_mode' of electrodes should be 'steady_state'.

When solving capacitance and resistance with respect to frequency, SSAC simulation is required. The solver_mode of OEDevice solver should be set to "SSAC", and the apply_AC_small_signal of the corresponding electrode should be set to "All".

When running steady state simulation, just set the solver_mode of OEDevice solver to 'steady_state'.

**Example:**

```python
st.add_electrode(name="cathode", property={
    "solid": "Cathode", "bc_mode": "steady_state",
    "sweep_type": "range", "range_start": tcad_vmin, "range_stop": tcad_vmax, "range_interval": tcad_vstep, "apply_AC_small_signal": "All"})
```

### 2.3.3 Transient

When the property bc_mode is set to "transient", the transient boundary condition is applied.

**Example:**

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
|               bc_mode                |    -    | string  | Selections are ['transient']. |
|               voltage                |    0    |  float  | Set the voltage that is applied to the electrode and a steady state simulation is performed first. The transient simulation is based on the steady state result. The optical generation rate is not applied during the steady state simulation.     |
|                v_step_max            |     -    | string  |   Set the max step of the voltage from the equilibrium state to steady state at the bias of voltage.    |
|       []time_table.time_start        |    -     |  float  |  Set the start time point of the range. The value of 0 represents the steady state of the earlier simulation.    |
|        []time_table.time_stop        |    -     |  float  |   Set the stop time point of the range.            |
|      []time_table.initial_step       |    -     |  float  |  Set the initial time step of the range         |
|        []time_table.max_step         |    -     |  float  |  Set the max time step of the range         |
|     []time_table.optical.enabled     |    0     | integer |     Whether to apply optical generation rate during the time range. The value of 1 means True, and 0 means False. Selections are [0, 1].     |
|     []time_table.optical.envelop     |     -    | integer |   The envelop of the scaling factor of the light power during the time range. When it's set to 0, the envelop is uniform.  Selections are [0].  |
| []time_table.optical.source_fraction |    -     |  float  | When envelop is set to0, this value is the scaling factor of the light power during the time range.    |
|             surface_type             |  solid   | string  |   Selections are ['solid'].   |
|                solid                 |     -    | string  |   Available when surface_type is set to 'solid'.    |







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
|      name      |   To set the name of surface recombination in simulation.   |
|    property    | To set the property of surface recombination in simulation.  |

**Example:**

```python
st.add_surface_recombination(name="Cathode_Si", property={
        "surface_type": "domain_domain", "interface_type": "MetalOhmicInterface",
        "domain_1": "Cathode", "domain_2": "Si_base", "infinite_recombination": False, "velocity_electron": 1e7, "velocity_hole": 1e7})
```

|     **Parameters**     |    Default    |   Type   |                            Notes                             |
| :--------------------: | :-----------: | :------: | :----------------------------------------------------------: |
|      surface_type      | domain_domain |  string  |    To set the type for calculating surface recombination. Selections are ['domain_domain', 'material_material'].    |
|     interface_type     |     null      |  string  | To set the  interface type of surface recombination. Selections are ['null', 'InsulatorInterface', 'HomoJunction', 'HeteroJunction', 'MetalOhmicInterface', 'SolderPad']. 'InsulatorInterface' is interface between semiconductor and insulator, 'HomoJunction' means the interface between homogeneous semiconductor and semiconductor,'HeteroJunction' means the interface between heterogeneous semiconductor and semiconductor, 'MetalOhmicInterface' means the interface between semiconductor and conductor, 'SolderPad' means the interface between conductor and insulator. |
| infinite_recombination |     true      |   bool   |    Only available when interface_type is "MetalOhmicInterface". The surface recombination velocity of holes and electrons will be available when infinite_recombination is False.    |
|     velocity_hole      |       0       |  float   | To define surface recombination velocity of holes. Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface' |
|   velocity_electron    |       0       |  float   | To define surface recombination velocity of electron. Available when interface_type is 'MetalOhmicInterface'/'InsulatorInterface' |
|        domain_1        |         -      |  string  |        The region 1 for surface recombination. Available when surface_type is 'domain_domain'        |
|        domain_2        |        -       |  string  |        The region 2 for surface recombination. Available when surface_type is 'domain_domain'        |
|       material_1       |        -       | material |       The material 1 for surface recombination. Available when surface_type is 'material_material'      |
|       material_2       |        -       | material |       The material 2 for surface recombination. Available when surface_type is 'material_material'      |


