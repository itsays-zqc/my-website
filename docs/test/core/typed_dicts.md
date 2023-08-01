# typed_dicts

## maxoptics_sdk.core.typed_dicts.BoundaryDict
```py
class maxoptics_sdk.core.typed_dicts.BoundaryDict(*args, **kwargs)
```
- Bases: **dict**

<!-- Description -->

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Type</td>
    <td class="typeface">Description</td>
  </tr>
  <tr>
    <td>pml_kappa</td>
    <td>int</td>
    <td>The kappa value for PML (Perfectly Matched Layer)</td>
  </tr>
  <tr>
    <td>pml_layer</td>
    <td>int</td>
    <td>The number of layers in PML</td>
  </tr>
  <tr>
    <td>pml_polynomial</td>
    <td>int</td>
    <td>The polynomial degree of PML</td>
  </tr>
  <tr>
    <td>pml_sigma</td>
    <td>int</td>
    <td>The sigma value for PML</td>
  </tr>
  <tr>
    <td>x_max</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The maximum value for x boundary condition</td>
  </tr>
  <tr>
    <td>x_min</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The minimum value for x boundary condition</td>
  </tr>
  <tr>
    <td>y_max</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The maximum value for y boundary condition</td>
  </tr>
  <tr>
    <td>y_min</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The minimum value for y boundary condition</td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The maximum value for z boundary condition</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>Literal['metal', 'PEC', 'PML']</td>
    <td>The minimum value for z boundary condition</td>
  </tr>
</table>


## maxoptics_sdk.core.typed_dicts.FDEDict

```py
class maxoptics_sdk.core.typed_dicts.FDEDict(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr> 
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>calculate_group_index</td>
    <td>bool</td>
    <td>Flag indicating whether to calculate the group index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>detailed_dispersion_calculation</td>
    <td>bool</td>
    <td>Flag indicating whether to perform detailed dispersion calculation</td>
  </tr>
  <tr>
    <td>number_of_trial_modes</td>
    <td>int</td>
    <td>Number of trial modes for dispersion calculation</td>
  </tr>
  <tr>
    <td>use_max_index</td>
    <td>bool</td>
    <td>Flag indicating whether to use the maximum index for dispersion calculation</td>
  </tr>
</table>

## maxoptics_sdk.core.typed_dicts.GeometryDict

```py
class maxoptics_sdk.core.typed_dicts.GeometryDict(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
  </tr>
  <tr>
    <td>rotate_x</td>
    <td>float</td>
    <td>Rotation angle around the x-axis</td>
  </tr>
  <tr>
    <td>rotate_y</td>
    <td>float</td>
    <td>Rotation angle around the y-axis</td>
  </tr>
  <tr>
    <td>rotate_z</td>
    <td>float</td>
    <td>Rotation angle around the z-axis</td>
  </tr>
  <tr>
    <td>x</td>
    <td>float</td>
    <td>The value of x</td>
  </tr>
  <tr>
    <td>x_max</td>
    <td>float</td>
    <td>The maximum value for x</td>
  </tr>
  <tr>
    <td>x_min</td>
    <td>float</td>
    <td>The minimum value for x</td>
  </tr>
  <tr>
    <td>x_span</td>
    <td>float</td>
    <td>The span of x</td>
  </tr>
  <tr>
    <td>y</td>
    <td>float</td>
    <td>The value of y</td>
  </tr>
  <tr>
    <td>y_max</td>
    <td>float</td>
    <td>The maximum value for y</td>
  </tr>
  <tr>
    <td>y_min</td>
    <td>float</td>
    <td>The minimum value for y</td>
  </tr>
  <tr>
    <td>y_span</td>
    <td>float</td>
    <td>The span of y</td>
  </tr>
  <tr>
    <td>z</td>
    <td>float</td>
    <td>The value of z</td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>float</td>
    <td>The maximum value for z</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>float</td>
    <td>The minimum value for z</td>
  </tr>
  <tr>
    <td>z_span</td>
    <td>float</td>
    <td>The span of z</td>
  </tr>
</table>


## maxoptics_sdk.core.typed_dicts.MaterialDict

```py
class maxoptics_sdk.core.typed_dicts.MaterialDict(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
  </tr>
  <tr>
    <td>material</td>
    <td>Material</td>
    <td>The material used</td>
  </tr>
  <tr>
    <td>mesh_order</td>
    <td>int</td>
    <td>The mesh order</td>
  </tr>
  <tr>
    <td>override_mesh_order</td>
    <td>bool</td>
    <td>Flag indicating whether to override the mesh order</td>
  </tr>
</table>
