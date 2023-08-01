# post_process_fdtd_port_typing

## PostProcessFdtdPort
```py
class 
maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPort(*args, **kwargs)
```
- Bases: **dict**

**geometry:** [PostProcessFdtdPortGeometry](#PostProcessFdtdPortGeometry)

**modal_properties:** [PostProcessFdtdPortModalProperties](#PostProcessFdtdPortModalProperties)

<span id='PostProcessFdtdPortGeometry'></span>

## PostProcessFdtdPortGeometry
```py
class maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortGeometry(*args, **kwargs)
```
- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>

  <tr>
    <td class="first-column">x</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>x_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>y_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>z_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

<span id='PostProcessFdtdPortModalProperties'></span>


## PostProcessFdtdPortModalProperties

```py
class maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalProperties(*args, **kwargs)
```
- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>

  <tr>
    <td>bent_waveguide</td>
    <td><a href='#PostProcessFdtdPortModalPropertiesBentWaveguide'>PostProcessFdtdPortModalPropertiesBentWaveguide</a></td>
  </tr>
  <tr>
    <td>general</td>
    <td><a href='#PostProcessFdtdPortModalPropertiesGeneral'>PostProcessFdtdPortModalPropertiesGeneral</a></td>
  </tr>

</table>

<span id='PostProcessFdtdPortModalPropertiesBentWaveguide'></span>


## PostProcessFdtdPortModalPropertiesBentWaveguide
```py
class maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesBentWaveguide(*args, **kwargs)
```
- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>

  <tr>
    <td class="first-column">bent_waveguide</td>
    <td class="second-column">bool</td>
  </tr>
  <tr>
    <td>location</td>
    <td>Literal['simulation_center']</td>
  </tr>
  <tr>
    <td>orientation</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>radius</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

<span id='PostProcessFdtdPortModalPropertiesGeneral'></span>


## PostProcessFdtdPortModalPropertiesGeneral
```py
class maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneral(*args, **kwargs)
```
- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td class="first-column">amplitude</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>Literal['forward', 'backward']</td>
  </tr>
  <tr>
    <td>inject_axis</td>
    <td>Literal['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']</td>
  </tr>
  <tr>
    <td>mode_index</td>
    <td>int</td>
  </tr>
  <tr>
    <td>mode_removal</td>
    <td><a href='#PostProcessFdtdPortModalPropertiesGeneralModeRemoval'>PostProcessFdtdPortModalPropertiesGeneralModeRemoval</a></td>
  </tr>
  <tr>
    <td>mode_selection</td>
    <td>Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']</td>
  </tr>
  <tr>
    <td>n</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>number_of_trial_modes</td>
    <td>int</td>
  </tr>
  <tr>
    <td>phase</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Literal['near_n', 'max_index']</td>
  </tr>
</table>
<br/>

<span id='PostProcessFdtdPortModalPropertiesGeneralModeRemoval'></span>


## PostProcessFdtdPortModalPropertiesGeneralModeRemoval
```py
class maxoptics_sdk.core.ports.post_process_fdtd_port_typing.PostProcessFdtdPortModalPropertiesGeneralModeRemoval(*args, **kwargs)
```
- Bases: **dict**

<!-- **threshold:** *float | int | FloatParameter | FloatParameterExpression* -->

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td class="first-column">threshold</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>