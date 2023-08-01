# PortInterface

```py
class maxoptics_sdk.core.ports.interface.PortInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
##  add a port

### Syntax

abstract add(*, `type`: Literal['eme_port'], `name`: str, `property`: PostProcessEmePort)

abstract add(*, `type`: Literal['fdtd_port'], `name`: str, `property`: PostProcessFdtdPort)

### Usage

`Add a port to current project.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td> Port name</td>
  </tr>
  <tr>
    <td class="first-column">type</td>
    <td class="second-column">Port type.
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td> Port property</td>
  </tr>
</table>

<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

## FDTD_PORT
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
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
    <td>modal_properties.general.inject_axis</td>
    <td>x_axis</td>
    <td>string</td>
    <td>Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].</td>
  </tr>
  <tr>
    <td>modal_properties.general.direction</td>
    <td>forward</td>
    <td>string</td>
    <td>Selections are ['forward', 'backward'].</td>
  </tr>
  <tr>
    <td>modal_properties.general.amplitude</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.general.phase</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.general.mode_selection</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].</td>
  </tr>
  <tr>
    <td>modal_properties.general.mode_removal.threshold</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.general.mode_index</td>
    <td>1</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.general.search</td>
    <td>max_index</td>
    <td>string</td>
    <td>Selections are ['near_n', 'max_index'].</td>
  </tr>
  <tr>
    <td>modal_properties.general.n</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.general.number_of_trial_modes</td>
    <td>20</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.bent_waveguide.bent_waveguide</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.bent_waveguide.radius</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.bent_waveguide.orientation</td>
    <td>20</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>modal_properties.bent_waveguide.location</td>
    <td>simulation_center</td>
    <td>string</td>
    <td>Selections are ['simulation_center'].</td>
  </tr>
</table>

## EME_PORT
<table class="custom-table">
 <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>geometry.port_location</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['left', 'right'].</td>
  </tr>
  <tr>
    <td>geometry.use_full_simulation_span</td>
    <td>true</td>
    <td>bool</td>
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
    <td>eme_port.general.mode_selection</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].</td>
  </tr>
  <tr>
    <td>eme_port.general.mode_index</td>
    <td>1</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.general.search</td>
    <td>max_index</td>
    <td>string</td>
    <td>Selections are ['near_n', 'max_index'].</td>
  </tr>
  <tr>
    <td>eme_port.general.n</td>
    <td>1.0</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.bent_waveguide.bent_waveguide</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.bent_waveguide.radius</td>
    <td>1</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.bent_waveguide.orientation</td>
    <td>20</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.bent_waveguide.location</td>
    <td>simulation_center</td>
    <td>string</td>
    <td>Selections are ['simulation_center'].</td>
  </tr>
  <tr>
    <td>eme_port.advanced.offset</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.advanced.number_of_trial_modes</td>
    <td>20</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>eme_port.advanced.mode_removal.threshold</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
</table>
