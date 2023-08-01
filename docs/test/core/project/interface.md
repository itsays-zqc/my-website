## StructureProperty

# maxoptics_sdk.core.project.interface module

## ProjectInterface
```py
class maxoptics_sdk.core.project.interface.ProjectInterface(*args, **kwargs)
```

Bases: **Protocol**

## Common Use

<br/>
<table class= "custom-table">
  <tr>
    <td class="typeface">Method</td>
    <td class="typeface">Explanation</td>
    <td class="typeface">Returns</td>
  </tr>
  
  <tr>
    <td>Material() → MaterialInterface</td>
    <td>Get material manager for current project</td>
    <td>Material manager</td>
  </tr>
  <tr>
    <td>Monitor() → MonitorInterface</td>
    <td>Get monitor manager for current project.</td>
    <td>Monitor manager</td>
  </tr>
  <tr>
    <td>Port(*, property: PostProcessPortGroupProperty | None = None) → PortInterface</td>
    <td>Get port manager for current project.</td>
    <td>Port manager.</td>
  </tr>
  <tr>
    <td>Simulation() → SimulationInterface</td>
    <td>Get simulation manager for current project.</td>
    <td>Simulation manager.</td>
  </tr>
  <tr>
    <td>Source() → SourceInterface</td>
    <td>Get source manager for current project.</td>
    <td>Source manager</td>
  </tr>
  <tr>
    <td>Waveform() → WaveformInterface</td>
    <td>Get waveform manager for current project.</td>
    <td>Waveform manager</td>
  </tr>
</table>
<br/>

## Structure

### Syntax

**Structure**(*, `mesh_type:` Literal['curve_mesh', 'staircase'] = 'curve_mesh', `mesh_factor:` float = 1.2, `background_material:` MaterialType | None = None) → StructureInterface

### Usage

Get structure manager for current project.

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>mesh_type</td>
    <td> Mesh type of structures. Default as curve_mesh.</td>
  </tr>
  <tr>
    <td class="first-column">mesh_factor</td>
    <td class="second-column">Mesh factor. Default as 1.2.
    </td>
  </tr>
  <tr>
    <td>background_material</td>
    <td> Background material. If not filled, program will create a material with Air in lib.</td>
  </tr>
</table>
<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">Structure manager</td>
  </tr>
</table>

## PortGroupProperty
 <table class="custom-table">
   <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>source_port</td>
    <td></td>
    <td>string</td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>waveform_id</td>
    <td></td>
    <td>waveform</td>
    <td></td>
  </tr>
  <tr>
    <td>calculate_group_delay</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>fractional_offset_for_group_delay</td>
    <td>0.0001</td>
    <td>float</td>
    <td></td>
  </tr>
</table>

## StructureProperty

<table class="custom-table">
   <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>mesh_type</td>
    <td>curve_mesh</td>
    <td>string</td>
    <td>Selections are ['curve_mesh', 'staircase'].&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>mesh_factor</td>
    <td>1.2</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>background_material</td>
    <td>mt['Air']</td>
    <td>material</td>
    <td></td>
  </tr>
</table>

 
