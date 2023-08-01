# MonitorInterface

# maxoptics_sdk.core.monitors.interface module

```py
class maxoptics_sdk.core.monitors.interface.MonitorInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
## 1. add a monitor

## Syntax

abstract add(*, `type`: Literal['electric_monitor'], `name`: str, `property`: PostProcessElectricMonitor)

abstract add(*, `type`: Literal['current_monitor'], `name`: str, `property`: PostProcessCurrentMonitor)

abstract add(*, `type`: Literal['charge_monitor'], `name`: str, `property`: PostProcessChargeMonitor)

abstract add(*, `type`: Literal['band_monitor'], `name`: str, `property`: PostProcessBandMonitor)

abstract add(*, `type`: Literal['profile_monitor'], `name`: str, `property`: PostProcessProfileMonitor)

abstract add(*, `type`: Literal['global_monitor', 'global_option'], `name`: str, `property`: PostProcessGlobalMonitor)

abstract add(*, `type`: Literal['time_monitor'], `name`: str, `property`: PostProcessTimeMonitor)

abstract add(*, `type`: Literal['power_monitor'], `name`: str, `property`: PostProcessPowerMonitor)

abstract add(*, `type`: Literal['mode_expansion'], `name`: str, `property`: PostProcessModeExpansion)

## Usage

`Add a monitor to current project.`

## Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Monitor name</td>
  </tr>
  <tr>
    <td class="first-column">type</td>
    <td class="second-column">Monitor type.
    </td>
  </tr>
  <tr>
    <td>property</td>
    <td>Monitor property</td>
  </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

## MODE_EXPANSION
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z'].</td>
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
    <td>geometry.rotate_settings.theta</td>
    <td>0</td>
    <td>float</td>
    <td>Restrained by condition: >-90,&lt;90.</td>
  </tr>
  <tr>
    <td>geometry.rotate_settings.phi</td>
    <td>0</td>
    <td>float</td>
    <td>Restrained by condition: &gt;=0,&lt;=360.</td>
  </tr>
  <tr>
    <td>geometry.rotate_settings.rotation_offset</td>
    <td>0</td>
    <td>float</td>
    <td>Restrained by condition: &gt;=-1e30,&lt;=1e30.</td>
  </tr>
  <tr>
    <td>mode_expansion.[].monitors_for_expansion.name</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.[].monitors_for_expansion.frequency_monitor</td>
    <td></td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.direction</td>
    <td>positive</td>
    <td>string</td>
    <td>Selections are ['positive', 'negative'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.mode_selection</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.mode_index</td>
    <td></td>
    <td>list</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.search</td>
    <td>max_index</td>
    <td>string</td>
    <td>Selections are ['near_n', 'max_index'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.n</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.number_of_trial_modes</td>
    <td>20</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_options</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.sample_spacing</td>
    <td>uniform</td>
    <td>string</td>
    <td>Selections are ['uniform'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.use_wavelength_spacing</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.spacing_type</td>
    <td>wavelength</td>
    <td>string</td>
    <td>Selections are ['wavelength', 'frequency'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.spacing_limit</td>
    <td>min_max</td>
    <td>string</td>
    <td>Selections are ['min_max', 'center_span'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_points</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.bent_waveguide</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.radius</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.orientation</td>
    <td>0.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.location</td>
    <td>simulation_center</td>
    <td>string</td>
    <td>Selections are ['simulation_center'].</td>
  </tr>
</table>

## GLOBAL_MONITOR

<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>frequency_power.sample_spacing</td>
    <td>uniform</td>
    <td>string</td>
    <td>Selections are ['uniform'].</td>
  </tr>
  <tr>
    <td>frequency_power.use_wavelength_spacing</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.spacing_type</td>
    <td>wavelength</td>
    <td>string</td>
    <td>Selections are ['wavelength', 'frequency'].</td>
  </tr>
  <tr>
    <td>frequency_power.spacing_limit</td>
    <td>min_max</td>
    <td>string</td>
    <td>Selections are ['min_max', 'center_span'].</td>
  </tr>
  <tr>
    <td>frequency_power.wavelength_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.wavelength_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.wavelength_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.wavelength_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.frequency_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.frequency_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.frequency_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.frequency_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>frequency_power.frequency_points</td>
    <td>5</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>advanced.min_sampling_per_cycle</td>
    <td>2</td>
    <td>integer</td>
    <td></td>
  </tr>
</table>

## PROFILE_MONITOR

<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z'].</td>
  </tr>
  <tr>
    <td>geometry.x_resolution</td>
    <td>100</td>
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
</table>

## TIME_MONITOR
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.stop_method</td>
    <td>end_of_simulation</td>
    <td>string</td>
    <td>Selections are ['end_of_simulation', 'choose_stop_time', 'choose_number_of_snapshots'].</td>
  </tr>
  <tr>
    <td>general.start_time</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.stop_time</td>
    <td>1000</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.number_of_snapshots</td>
    <td>0</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d'].</td>
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
    <td>advanced.sampling_rate.min_sampling_per_cycle</td>
    <td>10</td>
    <td>integer</td>
    <td></td>
  </tr>
</table>

## POWER_MONITOR
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.override_global_options</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.sample_spacing</td>
    <td>uniform</td>
    <td>string</td>
    <td>Selections are ['uniform'].</td>
  </tr>
  <tr>
    <td>general.frequency_profile.use_wavelength_spacing</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.spacing_type</td>
    <td>wavelength</td>
    <td>string</td>
    <td>Selections are ['wavelength', 'frequency'].</td>
  </tr>
  <tr>
    <td>general.frequency_profile.spacing_limit</td>
    <td>min_max</td>
    <td>string</td>
    <td>Selections are ['min_max', 'center_span'].</td>
  </tr>
  <tr>
    <td>general.frequency_profile.wavelength_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.wavelength_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.wavelength_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.wavelength_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.frequency_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.frequency_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.frequency_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.frequency_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.frequency_profile.frequency_points</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d'].</td>
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
    <td>advanced.sampling_frequency.min_sampling_per_cycle</td>
    <td>2</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.enable</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.direction</td>
    <td>positive</td>
    <td>string</td>
    <td>Selections are ['positive', 'negative'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.mode_selection</td>
    <td>fundamental</td>
    <td>string</td>
    <td>Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.mode_index</td>
    <td></td>
    <td>list</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_options</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.sample_spacing</td>
    <td>uniform</td>
    <td>string</td>
    <td>Selections are ['uniform'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.use_wavelength_spacing</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.spacing_type</td>
    <td>wavelength</td>
    <td>string</td>
    <td>Selections are ['wavelength', 'frequency'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.spacing_limit</td>
    <td>min_max</td>
    <td>string</td>
    <td>Selections are ['min_max', 'center_span'].</td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_min</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_max</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_center</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_span</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.override_global_monitor_setting.frequency_points</td>
    <td></td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.bent_waveguide</td>
    <td>false</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.radius</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.orientation</td>
    <td>0.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>mode_expansion.mode_calculation.bent_waveguide.location</td>
    <td>simulation_center</td>
    <td>string</td>
    <td>Selections are ['simulation_center'].</td>
  </tr>
</table>

## BAND_MONITOR
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.record_ec</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_ev</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_ei</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_efn</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_efp</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_evac</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['linear_x', 'linear_y', 'linear_z'].</td>
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
    <td>geometry.interpolate_accuracy</td>
    <td>1</td>
    <td>integer</td>
    <td>Restrained by condition: [1,10].</td>
  </tr>
</table>

## CHARGE_MONITOR
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.record_electrons</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_holes</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.integrate_total_charge</td>
    <td>true</td>
    <td>bool</td>
    <td>Available when monitor_type is in ['2d_x_normal', '2d_y_normal', '2d_z_normal'].</td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal'].</td>
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
    <td>geometry.interpolate_accuracy</td>
    <td>1</td>
    <td>integer</td>
    <td>Restrained by condition: [1,10]</td>
  </tr>
</table>

## ELECTRIC_MONITOR
<table class="custom-table">
  <tr>
    <td class="typeface"></td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.record_electrics_field</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.record_electrostatic_potential</td>
    <td>true</td>
    <td>bool</td>
    <td></td>
  </tr>
  <tr>
    <td>general.calculate_net_charge</td>
    <td>true</td>
    <td>bool</td>
    <td>Available when monitor_type is in ['2d_x_normal', '2d_y_normal', '2d_z_normal'].</td>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal'].</td>
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
    <td>geometry.interpolate_accuracy</td>
    <td>1</td>
    <td>integer</td>
    <td>Restrained by condition: [1,10].</td>
  </tr>
</table>








