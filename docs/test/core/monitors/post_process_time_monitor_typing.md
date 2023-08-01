# post_process_time_monitor_typing

## PostProcessTimeMonitor

```py
class maxoptics_sdk.core.monitors.post_process_time_monitor_typing.PostProcessTimeMonitor(*args, **kwargs)
```
Bases: **dict**

**advanced:** *PostProcessTimeMonitorAdvanced*

**general:** *PostProcessTimeMonitorGeneral*

**geometry:** *PostProcessTimeMonitorGeometry*

## PostProcessTimeMonitorAdvanced

```py
class maxoptics_sdk.core.monitors.post_process_time_monitor_typing.PostProcessTimeMonitorAdvanced(*args, **kwargs)
```
Bases: **dict**

**sampling_rate:** *PostProcessTimeMonitorAdvancedSamplingRate*

## PostProcessTimeMonitorAdvancedSamplingRate

```py
class maxoptics_sdk.core.monitors.post_process_time_monitor_typing.PostProcessTimeMonitorAdvancedSamplingRate(*args, **kwargs)
```

Bases: **dict**

**min_sampling_per_cycle:** *int*

## PostProcessTimeMonitorGeneral

```py
class maxoptics_sdk.core.monitors.post_process_time_monitor_typing.PostProcessTimeMonitorGeneral(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  
  <tr>
    <td>number_of_snapshots</td>
    <td>int</td>
  </tr>
  <tr>
    <td>start_time</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>stop_method</td>
    <td>Literal['end_of_simulation', 'choose_stop_time', 'choose_number_of_snapshots']</td>
  </tr>
  <tr>
    <td>stop_time</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>
<br/>

## PostProcessTimeMonitorGeometry

```py
class maxoptics_sdk.core.monitors.post_process_time_monitor_typing.PostProcessTimeMonitorGeometry(*args, **kwargs)
```
Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  
  <tr>
    <td>monitor_type</td>
    <td>Literal['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d']</td>
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