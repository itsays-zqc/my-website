---
sidebar_position: 3
---
# post_process_mode_expansion_typing
<!-- # maxoptics_sdk.core.monitors.post_process_mode_expansion_typing -->

## PostProcessModeExpansion

<span id='PostProcessModeExpansion'>PostProcessModeExpansion</span>

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansion(*args, **kwargs)
```

Bases: **dict**
  
**geometry:** [PostProcessModeExpansionGeometry](#jump1)

**frequency_power:** [PostProcessModeExpansionModeExpansion](#jump2)

<span id="jump1"></span>

## PostProcessModeExpansionGeometry
```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionGeometry(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">monitor_type</td>
    <td class="second-column">Literal['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']</td>
  </tr>
  <tr>
    <td>rotate_settings</td>
    <td>PostProcessModeExpansionGeometryRotateSettings</td>
  </tr>
  <tr>
    <td>x</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
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



## PostProcessModeExpansionGeometryRotateSettings

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionGeometryRotateSettings(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">phi</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>rotation_offset</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>theta</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

## PostProcessModeExpansionModeExpansion

```py
class 
maxoptics_sdk.core.monitors.post_process_mode_expansion_typing PostProcessModeExpansionModeExpansion(*args, **kwargs)
```
- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">direction</td>
    <td class="second-column">Literal['positive', 'negative']</td>
  </tr>
  <tr>
    <td>mode_calculation</td>
    <td>PostProcessModeExpansionModeExpansionModeCalculation</td>
  </tr>
  <tr>
    <td>monitors_for_expansion</td>
    <td>List[PostProcessModeExpansionModeExpansionmonitorsForExpansion]</td>
  </tr>
</table>
<br/>

## PostProcessModeExpansionModeExpansionModeCalculation

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing PostProcessModeExpansionModeExpansionModeCalculation(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">bent_waveguide</td>
    <td class="second-column">PostProcessModeExpansionModeExpansionModeCalculationBentWaveguide</td>
  </tr>
  <tr>
    <td>mode_index</td>
    <td>Tuple[Any, ...] | List[Any]</td>
  </tr>
  <tr>
    <td>mode_selection</td>
    <td>Literal['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']</td>
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
    <td>override_global_monitor_setting</td>
    <td>PostProcessModeExpansionModeExpansionModeCalculationOverrideGlobalMonitorSetting</td>
  </tr>
  <tr>
    <td>override_global_options</td>
    <td>bool</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Literal['near_n', 'max_index']</td>
  </tr>
</table>
<br/>

## PostProcessModeExpansionModeExpansionModeCalculationBentWaveguide

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionModeExpansionModeCalculationBentWaveguide(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
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

## PostProcessModeExpansionModeExpansionModeCalculationOverrideGlobalMonitorSetting

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionModeExpansionModeCalculationOverrideGlobalMonitorSetting(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">frequency_center</td>
    <td class="second-column">float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>frequency_points</td>
    <td>int</td>
  </tr>
  <tr>
    <td>frequency_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>sample_spacing</td>
    <td>Literal['uniform']</td>
  </tr>
  <tr>
    <td>spacing_limit</td>
    <td>Literal['min_max', 'center_span']</td>
  </tr>
  <tr>
    <td>spacing_type</td>
    <td>Literal['wavelength', 'frequency']</td>
  </tr>
  <tr>
    <td>use_wavelength_spacing</td>
    <td>bool</td>
  </tr>
  <tr>
    <td>wavelength_center</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_max</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_min</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>wavelength_span</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

## PostProcessModeExpansionModeExpansionmonitorsForExpansion

```py
class maxoptics_sdk.core.monitors.post_process_mode_expansion_typing.PostProcessModeExpansionModeExpansionmonitorsForExpansion(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">frequency_monitor</td>
    <td class="second-column">str</td>
  </tr>
  <tr>
    <td>name</td>
    <td>str</td>
  </tr>
</table>

