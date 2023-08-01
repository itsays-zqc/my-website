# maxoptics_sdk.core.structure.post_process_structure_property_typing module

```py
class maxoptics_sdk.core.structure.post_process_structure_property_typing.PostProcessStructureProperty(*args, **kwargs)
```

Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>background_material</td>
        <td>Material</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>mesh_factor</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 1.2, check: [1.05,1.6] </td>
    </tr>
    <tr>
        <td>mesh_type</td>
        <td>Literal["curve_mesh", "staircase"]</td>
        <td>default: curve_mesh</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
