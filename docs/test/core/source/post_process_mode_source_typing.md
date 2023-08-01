
# post_process_mode_source_typing 

<span id='PostProcessModeSource'></span>

## PostProcessModeSource

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSource(*args, **kwargs)
```

Bases: **dict**



<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td class="first-column">bent_waveguide</td>
    <td class="second-column"><a href='#PostProcessModeSourceBentWaveguide'>PostProcessModeSourceBentWaveguide</a></td>
  </tr>
  <tr>
    <td>general</td>
    <td><a href='#PostProcessModeSourceGeneral'>PostProcessModeSourceGeneral</a></td>
  </tr>
  <tr>
    <td>geometry</td>
    <td><a href='#PostProcessModeSourceGeometry'>PostProcessModeSourceGeometry</a></td>
  </tr>
</table>


<span id='PostProcessModeSourceBentWaveguide'></span>

## PostProcessModeSourceBentWaveguide

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceBentWaveguide(*args, **kwargs)
```

Bases: **dict**


<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
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


<span id='PostProcessModeSourceGeneral'></span>

## PostProcessModeSourceGeneral

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneral(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
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
    <td><a href='#PostProcessModeSourceGeneralModeRemoval'>PostProcessModeSourceGeneralModeRemoval</a></td>
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
    <td>rotations</td>
    <td><a href='#PostProcessModeSourceGeneralRotations'>PostProcessModeSourceGeneralRotations</a></td>
  </tr>
  <tr>
    <td>search</td>
    <td>Literal['near_n', 'max_index']</td>
  </tr>
  <tr>
    <td>waveform</td>
    <td><a href='#PostProcessModeSourceGeneralWaveform'>PostProcessModeSourceGeneralWaveform</a></td>
  </tr>
</table>
                             

<span id='PostProcessModeSourceGeneralModeRemoval'></span>

## PostProcessModeSourceGeneralModeRemoval

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneralModeRemoval(*args, **kwargs)¶
```

- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Type</td>
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


<span id='PostProcessModeSourceGeneralWaveform'></span>

## PostProcessModeSourceGeneralWaveform

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeneralWaveform(*args, **kwargs)
```

  Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">waveform_id_select</td>
    <td class="second-column">Any</td>
  </tr>
</table>



<span id='PostProcessModeSourceGeometry'></span>

## PostProcessModeSourceGeometry

```py
class maxoptics_sdk.core.source.post_process_mode_source_typing.PostProcessModeSourceGeometry(*args, **kwargs)
```

Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
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
