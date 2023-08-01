# maxoptics_sdk.core.structure.post_process_gds_file_property_typing module

```py
class maxoptics_sdk.core.structure.post_process_gds_file_property_typing.PostProcessGdsFileProperty(*args, **kwargs)
```

- Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Property</th>
        <th>Type</th>
    </tr>
    <tr>
        <td class="third-column">general</td>
        <td class="fourth-column">PostProcessGdsFilePropertyGeneral</td>
    </tr>
    <tr>
        <td>geometry</td>
        <td>PostProcessGdsFilePropertyGeometry</td>
    </tr>
    <tr>
        <td>material</td>
        <td>PostProcessGdsFilePropertyMaterial</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

```py
class maxoptics_sdk.core.structure.post_process_gds_file_property_typing.PostProcessGdsFilePropertyGeneral(*args, **kwargs)
```

- Bases: **Protocol**


<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    </tr>
    <tr>
        <td>cell_name</td>
        <td>str</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>layer_name</td>
        <td>Union[Tuple[Any, ...], List[Any]]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>path</td>
        <td>str</td>
        <td>MUST be filled</td>
    </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

<br/>

```py
class maxoptics_sdk.core.structure.post_process_gds_file_property_typing.PostProcessGdsFilePropertyGeometry(*args, **kwargs)
```

- Bases: **Protocol**


<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>x</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 0</td>
    </tr>
    <tr>
        <td>y</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>default: 0</td>
    </tr>
    <tr>
        <td>z</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>z_max</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td></td>
    </tr>
    <tr>
        <td>z_min</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td></td>
    </tr>
    <tr>
        <td>z_span</td>
        <td>Union[float, int, FloatParameter, FloatParameterExpression]</td>
        <td>MUST be filled, check: &gt;0</td>
    </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
