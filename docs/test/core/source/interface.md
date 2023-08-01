
## SourceInterface

```py
class maxoptics_sdk.core.source.interface.SourceInterface(*args, **kwargs)
```

Bases: __Protocol__

### Syntax
abstract __add__(*, type: Literal['mode_source'], name: str, axis: Literal['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward'], property: PostProcessModeSource)

abstract __add__(*, type: Literal['gaussian_source'], name: str, axis: Literal['x_forward', 'y_forward', 'z_forward', 'x_backward', 'y_backward', 'z_backward'], property: PostProcessGaussianSource)

### Usage

`Add a source to current project`

<!-- Here's the representation of the given parameters as a Markdown table: -->

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">name</td>
    <td class="second-column">Source name</td>
  </tr>
  <tr>
    <td>type</td>
    <td>Source type</td>
  </tr>
  <tr>
    <td>axis</td>
    <td>Source axis</td>
  </tr>
  <tr>
    <td>property</td>
    <td>Source property</td>
  </tr>
</table>



## MODE_SOURCE

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">default</td>
    <td class="typeface">type</td>
    <td class="typeface">notes</td>
  </tr>
  <tr>
    <td>general.inject_axis</td>
    <td>x_axis</td>
    <td>string</td>
    <td>Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].</td>
  </tr>
  <tr>
    <td>general.direction</td>
    <td>forward</td>
    <td>string</td>
    <td>Selections are ['forward', 'backward'].</td>
  </tr>
  <tr>
    <td>general.amplitude</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.phase</td>
    <td>0.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.mode_selection</td>
    <td></td>
    <td>string</td>
    <td>Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import'].</td>
  </tr>
  <tr>
    <td>general.mode_removal.threshold</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.mode_index</td>
    <td>0</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general.search</td>
    <td>max_index</td>
    <td>string</td>
    <td>Selections are ['near_n', 'max_index'].</td>
  </tr>
  <tr>
    <td>general.n</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.number_of_trial_modes</td>
    <td>20</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>general.waveform.waveform_id_select</td>
    <td></td>
    <td>any</td>
    <td></td>
  </tr>
  <tr>
    <td>general.rotations.theta</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.rotations.phi</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.rotations.rotation_offset</td>
    <td>0</td>
    <td>float</td>
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



## GAUSSIAN_SOURCE

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Default</td>
    <td class="typeface">Type</td>
    <td class="typeface">Notes</td>
  </tr>
  <tr>
    <td>general.inject_axis</td>
    <td>x_axis</td>
    <td>string</td>
    <td>Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z'].</td>
  </tr>
  <tr>
    <td>general.direction</td>
    <td>forward</td>
    <td>string</td>
    <td>Selections are ['forward', 'backward'].</td>
  </tr>
  <tr>
    <td>general.amplitude</td>
    <td>1.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.phase</td>
    <td>0.0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.waveform.waveform_id_select</td>
    <td></td>
    <td>waveform</td>
    <td></td>
  </tr>
  <tr>
    <td>general.angle_theta</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.angle_phi</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.rotation_offset</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.polarization_angle</td>
    <td>0</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.beam_settings.calculation_method</td>
    <td>use_scalar_approximation</td>
    <td>string</td>
    <td>Selections are ['use_scalar_approximation', 'use_vector_approximation'].</td>
  </tr>
  <tr>
    <td>general.beam_settings.beam_parameters</td>
    <td>waist_size_and_position</td>
    <td>string</td>
    <td>Selections are ['waist_size_and_position', 'beam_size_and_divergence'].</td>
  </tr>
  <tr>
    <td>general.beam_settings.waist_radius</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.beam_settings.distance_from_waist</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.beam_settings.beam_radius</td>
    <td></td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>general.beam_settings.divergence_angle</td>
    <td></td>
    <td>float</td>
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


