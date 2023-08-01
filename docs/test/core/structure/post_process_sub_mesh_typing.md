# maxoptics_sdk.core.structure.mesh_typing module

```py
class maxoptics_sdk.core.structure.mesh_typing._MeshGeneral(*args, **kwargs)
```

Bases: **Dict**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Unit</th>
    </tr>
    <tr>
        <td class="third-column">dx</td>
        <td class="fourth-column">um</td>
    </tr>
    <tr>
        <td>dy</td>
        <td>um</td>
    </tr>
    <tr>
        <td>dz</td>
        <td>um</td>
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
class maxoptics_sdk.core.structure.mesh_typing.StructureMeshPropertyDict(*args, **kwargs)
```

- Bases: **Protocol**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
    </tr>
    <tr>
        <td class="third-column">general</td>
        <td class="fourth-column">_MeshGeneral</td>
    </tr>
    <tr>
        <td>geometry</td>
        <td>GeometryDict</td>
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
class maxoptics_sdk.core.structure.mesh_typing._MeshGeneralActive(*args, **kwargs)
```

Bases: **Dict**

### Parameters and Returns
<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Constraint</th>
    </tr>
    <tr>
        <td>x</td>
        <td>Union[float, int]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>x_span</td>
        <td>Union[float, int]</td>
        <td>MUST be filled, check: >=0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr>
        <td>y</td>
        <td>Union[float, int]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>y_span</td>
        <td>Union[float, int]</td>
        <td>MUST be filled, check: >=0</td>
    </tr>
    <tr>
        <td>z</td>
        <td>Union[float, int]</td>
        <td>MUST be filled</td>
    </tr>
    <tr>
        <td>z_span</td>
        <td>Union[float, int]</td>
        <td>MUST be filled, check: >=0</td>
    </tr>
    <tr>
        <td>dz</td>
        <td>Union[float, int]</td>
        <td></td>
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
class maxoptics_sdk.core.structure.mesh_typing.StructureMeshPropertyDictActive(*args, **kwargs)
```

Bases: **Dict**

### Parameters and Returns

<table class="custom-table">
    <tr>
        <th>Parameter</th>
        <th>Type</th>
    </tr>
    <tr>
        <td class="third-column">geometry</td>
        <td class="fourth-column">_MeshGeneralActive</td>
    </tr>
</table>
<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>
