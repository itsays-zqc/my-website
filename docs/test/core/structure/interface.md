
# maxoptics_sdk.core.structure.interface module

```py
class maxoptics_sdk.core.structure.interface.GdsExportTableData(*args, **kwargs)
```

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td>datatype</td>
    <td>int</td>
  </tr>
  <tr>
    <td class="first-coluumn">layer</td>
    <td class="second-column">int
    </td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>float</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>float</td>
  </tr>
</table>

Bases: **dict**
  
```py
class maxoptics_sdk.core.structure.interface.StructureInterface
```

Bases: **object**



### Example

```py
None
```

## STRUCTURE_PROPERTY 
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>mesh_type</td>
    <td>curve_mesh</td>
    <td>string</td>
    <td>Selections are ['curve_mesh', 'staircase'].&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>mesh_factor</td>
    <td>1.2</td>
    <td>float</td>
    <td>Restrained by condition:(1.05,1.6)</td>
  </tr>
  <tr>
    <td>background_material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
</table>

## 1. EBoundary and OBoundary

### Syntax

abstract EBoundary(*, `property`: StructureEBoundaryPropertyDict)
Not Implemented

abstract OBoundary(*, `pml_same_settings`: bool = True, `property`: OBoundarySameSettingsPostProcess | OBoundaryNotSameSettingsPostProcess)

### Usage

`Add a set of default optical boundary’s property to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>property</td>
    <td>Default optical boundary property.</td>
  </tr>
  <tr>
    <td class="first-coluumn">pml_same_settings</td>
    <td class="second-column">Use same pml settings on every directions or not.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## OBOUNDARY_SAME_SETTINGS
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>general_pml.pml_same_settings</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>boundary.x_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.x_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.y_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.y_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.z_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.z_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
</table>

## OBOUNDARY_NOT_SAME_SETTINGS
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>general_pml.pml_same_settings</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_min_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.x_max_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_min_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.y_max_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_min_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_profile</td>
    <td>standard</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_layer</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_kappa</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_sigma</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_alpha</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_alpha_polynomial</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_min_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general_pml.z_max_bc.pml_max_layers</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>boundary.x_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.x_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.y_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.y_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.z_max</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'periodic'].</td>
  </tr>
  <tr>
    <td>boundary.z_min</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['PML', 'PEC', 'metal', 'PMC', 'symmetric', 'anti_symmetric', 'periodic'].</td>
  </tr>
</table>

## 2. add_doping

### Syntax

abstract **add_doping**(*, `name`: str, `type`: Literal['p', 'n', 'file'], `property`: StructureDopingPropertyDictUsingFile | StructureDopingPropertyDictUsingNP | StructureDopingPropertyDictUsingNPVolume)

### Usage

`Add a set of default optical boundary’s property to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Doping name</td>
  </tr>
  <tr>
    <td class="first-coluumn">type</td>
    <td class="second-column">Doping type
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td>Doping property</td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## FILE
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>general.format</td>
    <td></td>
    <td>str</td>
    <td>Selections are ['DOP']&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>general.file_path</td>
    <td></td>
    <td>str</td>
    <td></td>
  </tr>
  <tr>
    <td>general.species</td>
    <td></td>
    <td>str</td>
    <td>Selections are ['n', 'p']</td>
  </tr>
  <tr>
    <td>volume.volume_type</td>
    <td>'all'</td>
    <td>str</td>
    <td>Selections are ['all', 'material', 'region']</td>
  </tr>
  <tr>
    <td>volume.material_list</td>
    <td></td>
    <td>list</td>
    <td>Available when volume_type is 'material'</td>
  </tr>
  <tr>
    <td>volume.region_list</td>
    <td></td>
    <td>list</td>
    <td>Available when volume_type is 'region'</td>
  </tr>
</table>

## N/P
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.distribution_function</td>
    <td></td>
    <td>str</td>
    <td>Selections are ['constant', 'gaussian']</td>
  </tr>
  <tr>
    <td>general.concentration</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.source_face</td>
    <td></td>
    <td>str</td>
    <td>Available when distribution_function is 'gaussian'</td>
  </tr>
  <tr>
    <td>general.junction_width</td>
    <td></td>
    <td>float</td>
    <td>Available when distribution_function is 'gaussian'</td>
  </tr>
  <tr>
    <td>general.ref_concentration</td>
    <td></td>
    <td>float</td>
    <td>Available when distribution_function is 'gaussian'</td>
  </tr>
  <tr>
    <td>volume.volume_type</td>
    <td>'all'</td>
    <td>str</td>
    <td>Selections are ['all', 'material', 'region']</td>
  </tr>
  <tr>
    <td>volume.material_list</td>
    <td></td>
    <td>list</td>
    <td>Available when volume_type is 'material'</td>
  </tr>
  <tr>
    <td>volume.region_list</td>
    <td></td>
    <td>list</td>
    <td>Available when volume_type is 'region'</td>
  </tr>
</table>

## 3. add_electrode

### Syntax

abstract **add_electrode**(*, `name`: str, `property`: StructureElectrodeProperty)

### Usage

`_summary_`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">name</td>
    <td class="second-column">Electric boundary condition name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property </td>
    <td class="second-column">Electric boundary condition property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## STEADY_STATE
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>force_ohmic</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>bc_mode</td>
    <td>steady_state</td>
    <td>string</td>
    <td>Selections are ['steady_state'].</td>
  </tr>
  <tr>
    <td>apply_AC_small_signal</td>
    <td>none</td>
    <td>string</td>
    <td>Selections are ['none'].</td>
  </tr>
  <tr>
    <td>sweep_type</td>
    <td>single</td>
    <td>string</td>
    <td>Selections are ['single', 'range', 'value'].</td>
  </tr>
  <tr>
    <td>v_step_max</td>
    <td>0.5</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>voltage</td>
    <td>0</td>
    <td>float</td>
    <td>Available when sweep_type is 'single'.</td>
  </tr>
  <tr>
    <td>range_start</td>
    <td>0</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_stop</td>
    <td>1</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_interval</td>
    <td>1</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_num_points</td>
    <td>2</td>
    <td>integer</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>[]sweep_value_table.index</td>
    <td></td>
    <td>integer</td>
    <td>Available when sweep_type is 'value'.</td>
  </tr>
  <tr>
    <td>[]sweep_value_table.number</td>
    <td></td>
    <td>float</td>
    <td>Available when sweep_type is 'value'.</td>
  </tr>
  <tr>
    <td>surface_type</td>
    <td>solid</td>
    <td>string</td>
    <td>Selections are ['solid'].</td>
  </tr>
  <tr>
    <td>solid</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## SSAC
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>force_ohmic</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>bc_mode</td>
    <td>steady_state</td>
    <td>string</td>
    <td>Selections are ['steady_state'].</td>
  </tr>
  <tr>
    <td>apply_AC_small_signal</td>
    <td>none</td>
    <td>string</td>
    <td>Selections are ['none', 'All'].</td>
  </tr>
  <tr>
    <td>sweep_type</td>
    <td>single</td>
    <td>string</td>
    <td>Selections are ['single', 'range', 'value'].</td>
  </tr>
  <tr>
    <td>v_step_max</td>
    <td>0.5</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>voltage</td>
    <td>0</td>
    <td>float</td>
    <td>Available when sweep_type is 'single'.</td>
  </tr>
  <tr>
    <td>range_start</td>
    <td>0</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_stop</td>
    <td>1</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_interval</td>
    <td>1</td>
    <td>float</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>range_num_points</td>
    <td>2</td>
    <td>integer</td>
    <td>Available when sweep_type is 'range'.</td>
  </tr>
  <tr>
    <td>[]sweep_value_table.index</td>
    <td></td>
    <td>integer</td>
    <td>Available when sweep_type is 'value'.</td>
  </tr>
  <tr>
    <td>[]sweep_value_table.number</td>
    <td></td>
    <td>float</td>
    <td>Available when sweep_type is 'value'.</td>
  </tr>
  <tr>
    <td>surface_type</td>
    <td>solid</td>
    <td>string</td>
    <td>Selections are ['solid'].</td>
  </tr>
  <tr>
    <td>solid</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## TRANSIENT
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>force_ohmic</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>bc_mode</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['transient'].&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>voltage</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>[]time_table.time_start</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>[]time_table.time_stop</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>[]time_table.initial_step</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>[]time_table.max_step</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>[]time_table.optical.enabled</td>
    <td>0</td>
    <td>integer</td>
    <td>Selections are [0, 1]</td>
  </tr>
  <tr>
    <td>[]time_table.optical.envelop</td>
    <td></td>
    <td>integer</td>
    <td>Selections are [0]</td>
  </tr>
  <tr>
    <td>[]time_table.optical.source_fraction</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>surface_type</td>
    <td>solid</td>
    <td>string</td>
    <td>Selections are ['solid'].</td>
  </tr>
  <tr>
    <td>solid</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
</table>

## 4. add_emesh

### Syntax

abstract add_emesh(*, `name`: str, `property`: Dict[str, Any])

### Usage

`Add electric mesh.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Electric local mesh name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Electric local mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_EMESH
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mesh_size</td>
    <td></td>
    <td>float</td>
    <td>max size of electrical simulation mesh</td>
  </tr>
</table>

## 5. add_emesh_along_line

### Syntax

abstract add_emesh_along_line(*, `name`: str, `property`: Dict[str, Any])

### Usage

`Add electric mesh along line.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Electric local mesh name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Electric local mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_EMESH_ALONG_LINE
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>start_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>start_y</td>
    <td>0</td>
    <td>float</td>
    <td>Restrained by condition: >=0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>start_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>end_x</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>end_y</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>end_z</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>mesh_size</td>
    <td>0.01</td>
    <td>float</td>
    <td></td>
  </tr>
</table>

## 6. add_geometry

### Syntax

abstract add_geometry(*, `name`: str, `type`: str, `property`: StructureGeometryPropertyDict)

### Usage

`Add a geometry(structure) to current project.`

### Parameters and Returns

<table class="custom-table">

  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td>name</td>
    <td>Geometry name.</td>
  </tr>

  <tr>
    <td class="first-coluumn">type</td>
    <td class="second-column">Geometry type.</td>
  </tr>

  <tr>
    <td> property</td>
    <td> Geometry property.</td>
  </tr>
  
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## GDS_FILE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
  <tr>
    <td>general.path</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general.cell_name</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general.layer_name</td>
    <td></td>
    <td>list</td>
    <td></td>
  </tr>
</table>

## GDS_FILE3D_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.tilt_angle</td>
    <td>90</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.tilt_location</td>
    <td>top</td>
    <td>string</td>
    <td>Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined'].</td>
  </tr>
  <tr>
    <td>geometry.user_defined</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.mirror_normal_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.mirror_plane_z0</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
  <tr>
    <td>general.path</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general.cell_name</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>general.layer_name</td>
    <td></td>
    <td>list</td>
    <td></td>
  </tr>
  <tr>
    <td>general.construct_method</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['method1', 'method2']</td>
  </tr>
</table>

## ARC_WAVEGUIDE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.inner_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.outer_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.angle</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## ARC_WAVEGUIDE_3D_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.angle</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0,≤360.</td>
  </tr>
  <tr>
    <td>geometry.base_height</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.top_width</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.bottom_width</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## BEZIER_CURVE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.point_1_x</td>
    <td></td>
    <td>float</td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.point_1_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_4_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_4_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.width</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## BEZIER_CURVE_3D_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.base_height</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.top_width</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.bottom_width</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.[control_points.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.[control_points.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## CIRCLE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## CUSTOM_POLYGON_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.size</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.sides</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=3.</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## ELLIPSE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.y_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## LINEAR_TRAPEZOID_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.point_1_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_1_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_4_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_4_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: &gt;0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: &gt;=0.</td>
  </tr>
</table>

## PYRAMID_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x_span_bottom</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.y_span_bottom</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_span_top</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_span_top</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.theta_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.theta_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## ANALYTICAL_WAVEGUIDE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.equation1</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.equation2</td>
    <td>1</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.nonsymmetric</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.resolution</td>
    <td>10</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.tilt_angle</td>
    <td>90</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.tilt_location</td>
    <td>top</td>
    <td>string</td>
    <td>Selections are ['top', 'TOP', 'Top', 'bottom', 'BOTTOM', 'Bottom', 'middle', 'MIDDLE', 'Middle', 'user_defined'].</td>
  </tr>
  <tr>
    <td>geometry.user_defined</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## RECTANGLE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## RING_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.inner_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.outer_radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## SECTOR_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.radius</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.angle</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## TRIANGLE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.point_1_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_1_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_2_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.point_3_y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
</table>

## TERRACE_PROPERTY
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>geometry.top_width</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.top_length</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.bottom_width</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.bottom_length</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.height</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.theta_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.theta_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_x</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_y</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.rotate_z</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>material.material</td>
    <td></td>
    <td>material</td>
    <td></td>
  </tr>
  <tr>
    <td>material.mesh_order</td>
    <td></td>
    <td>integer</td>
    <td>Restrained by condition: >=0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
</table>

## 7. add_mesh

### Syntax

abstract add_mesh(*, `name`: str, `property`: PostProcessSubMesh)

### Usage

`Add sub mesh.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Mesh name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Mesh property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SUB_MESH
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>general.override_x_mesh</td>
    <td></td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.override_y_mesh</td>
    <td></td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.override_z_mesh</td>
    <td></td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.dx</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>general.dy</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>general.dz</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >0.</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td></td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
</table>

## 8. add_surface_recombination

### Syntax

abstract add_surface_recombination(*, `name`: str, `property`: AddSurfaceRecombination)

### Usage

`Add surface recombination.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Surface recombination name.</td>
  </tr>
  <tr>
    <td class="first-coluumn">property</td>
    <td class="second-column">Surface recombination property.
    </td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## SURFACE_RECOMBINATION
<table class="custom-table">
  <tr>
    <th></th>
    <th>default</th>
    <th>type</th>
    <th>notes</th>
  </tr>
  <tr>
    <td>surface_type</td>
    <td>domain_domain</td>
    <td>string</td>
    <td>Selections are ['domain_domain', 'material_material'].</td>
  </tr>
  <tr>
    <td>interface_type</td>
    <td>null</td>
    <td>string</td>
    <td>Selections are ['null', 'InsulatorInterface', 'HomoJunction', 'HeteroJunction', 'MetalOhmicInterface', 'SolderPad'].</td>
  </tr>
  <tr>
    <td>infinite_recombination</td>
    <td>true</td>
    <td>bool</td>
    <td>Available when interface_type is 'MetalOhmicInterface'.</td>
  </tr>
  <tr>
    <td>velocity_hole</td>
    <td>0</td>
    <td>float</td>
    <td>Available when interface_type is 'MetalOhmicInterface' or 'InsulatorInterface'.</td>
  </tr>
  <tr>
    <td>velocity_electron</td>
    <td>0</td>
    <td>float</td>
    <td>Available when interface_type is 'MetalOhmicInterface' or 'InsulatorInterface'.</td>
  </tr>
  <tr>
    <td>domain_1</td>
    <td></td>
    <td>string</td>
    <td>Available when surface_type is 'domain_domain'.</td>
  </tr>
  <tr>
    <td>domain_2</td>
    <td></td>
    <td>string</td>
    <td>Available when surface_type is 'domain_domain'.</td>
  </tr>
  <tr>
    <td>material_1</td>
    <td></td>
    <td>material</td>
    <td>Available when surface_type is 'material_material'.</td>
  </tr>
  <tr>
    <td>material_2</td>
    <td></td>
    <td>material</td>
    <td>Available when surface_type is 'material_material'.</td>
  </tr>
</table>

## 9. export_gds

### Syntax

abstract export_gds(`filepath`: str, `top_cell`: str, `layers`: List[GdsExportTableData])

## 10. run_doping

### Syntax

abstract run_doping(*args, **kwargs)

### Usage

`Not Implemented yet.`

## 11. structure_show

### Syntax

abstract structure_show(*, `mode`='XY', `show`: bool, `savepath`: str, `fig_type`: Literal['png', 'svg'] = 'png', `simulation_name`: str | None = None, `disabled_components`: Tuple[Literal['materials', 'helpers', 'box', 'box.coordinate', 'box.cavity', 'ModeSource', 'PowerMonitor', 'ProfileMonitor', 'FDTDPortGroup'], ...] = (), `xyratio`=(1, 1), `celldisplay`=False)

### Usage

`Show Structure. If there are Pyramid or ArcWaveguide3D type geometry in current Structure manager, this method is invalid.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>mode</td>
    <td>Show mode.</td>
  </tr>
  <tr>
    <td class="first-coluumn">show</td>
    <td class="second-column">Whether to show the picture. If set to False, the picture will be saved instead.
    </td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Picture save path.</td>
  </tr>
  <tr>
    <td>fig_type</td>
    <td>Picture suffix(type).</td>
  </tr>
  <tr>
    <td>simulation_name</td>
    <td>Simulation name.</td>
  </tr>
  <tr>
    <td>disabled_components</td>
    <td>Disable components from showing.</td>
  </tr>
  <tr>
    <td>xyratio</td>
    <td>Zoom multiplier of x and y direction.</td>
  </tr>
  <tr>
    <td>celldisplay</td>
    <td>Whether to show eme cells.</td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

