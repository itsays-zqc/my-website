# post_process_power_monitor_typing

<!-- # maxoptics_sdk.core.monitors.post_process_power_monitor_typing -->
## PostProcessPowerMonitor

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitor(*args, **kwargs)
```
Bases: **dict**

**advanced:** *PostProcessPowerMonitorAdvanced*

**general:** *PostProcessPowerMonitorGeneral*

**geometry:** *PostProcessPowerMonitorGeometry*

**mode_expansion:** *PostProcessPowerMonitorModeExpansion*

## PostProcessPowerMonitorAdvanced

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorAdvanced(*args, **kwargs)
```

Bases: **dict**

**sampling_frequency:** *PostProcessPowerMonitorAdvancedSamplingFrequency*

## PostProcessPowerMonitorAdvancedSamplingFrequency
```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorAdvancedSamplingFrequency(*args, **kwargs)
```

Bases: **dict**

**min_sampling_per_cycle:** *int*

## PostProcessPowerMonitorGeneral
```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorGeneral(*args, **kwargs)
```
Bases: **dict**

**frequency_profile:** *PostProcessPowerMonitorGeneralFrequencyProfile*

**override_global_options:** *bool*

## PostProcessPowerMonitorGeneralFrequencyProfile

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorGeneralFrequencyProfile(*args, **kwargs)
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

## PostProcessPowerMonitorGeometry
```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorGeometry(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">monitor_type</td>
    <td class="second-column">Literal['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d']</td>
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

## PostProcessPowerMonitorModeExpansion
```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorModeExpansion(*args, **kwargs)
```
Bases: **dict**

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
    <td>enable</td>
    <td>bool</td>
  </tr>
  <tr>
    <td>mode_calculation</td>
    <td>PostProcessPowerMonitorModeExpansionModeCalculation</td>
  </tr>
</table>
<br/>

## PostProcessPowerMonitorModeExpansionModeCalculation
```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorModeExpansionModeCalculation(*args, **kwargs)
 ```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">bent_waveguide</td>
    <td class="second-column">PostProcessPowerMonitorModeExpansionModeCalculationBentWaveguide</td>
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
    <td>PostProcessPowerMonitorModeExpansionModeCalculationOverrideGlobalMonitorSetting</td>
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

## PostProcessPowerMonitorModeExpansionModeCalculationBentWaveguide

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorModeExpansionModeCalculationBentWaveguide(*args, **kwargs)
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

## PostProcessPowerMonitorModeExpansionModeCalculationOverrideGlobalMonitorSetting

```py
class maxoptics_sdk.core.monitors.post_process_power_monitor_typing.PostProcessPowerMonitorModeExpansionModeCalculationOverrideGlobalMonitorSetting(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Type</td>
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

