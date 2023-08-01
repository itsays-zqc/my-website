


## PostProcessGaussianSource

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSource(*args, **kwargs)
```

Bases: **dict**


general: [PostProcessGaussianSourceGeneral](#PostProcessGaussianSourceGeneral)

geometry: [PostProcessGaussianSourceGeometry](#PostProcessGaussianSourceGeometry)



<span id='PostProcessGaussianSourceGeneral'></span>

## PostProcessGaussianSourceGeneral




```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneral(*args, **kwargs)
```

- Bases: **dict**


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
    <td>angle_phi</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>angle_theta</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>beam_settings</td>
    <td><a href='#PostProcessGaussianSourceGeneralBeamSettings'>PostProcessGaussianSourceGeneralBeamSettings</a></td>
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
    <td>phase</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>polarization_angle</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>rotation_offset</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>waveform</td>
    <td><a href='#PostProcessGaussianSourceGeneralWaveform'>PostProcessGaussianSourceGeneralWaveform</a></td>
  </tr>
</table>



<span id='PostProcessGaussianSourceGeneralBeamSettings'></span>

## PostProcessGaussianSourceGeneralBeamSettings

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneralBeamSettings(*args, **kwargs)
```

- Bases: **dict**

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Type</td>
  </tr>
  <tr>
    <td class="first-column">beam_parameters</td>
    <td class="second-column">Literal['waist_size_and_position', 'beam_size_and_divergence']</td>
  </tr>
  <tr>
    <td>beam_radius</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>calculation_method</td>
    <td>Literal['use_scalar_approximation', 'use_vector_approximation']</td>
  </tr>
  <tr>
    <td>distance_from_waist</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>divergence_angle</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
  <tr>
    <td>waist_radius</td>
    <td>float | int | FloatParameter | FloatParameterExpression</td>
  </tr>
</table>


<span id='PostProcessGaussianSourceGeneralWaveform'></span>

## PostProcessGaussianSourceGeneralWaveform

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeneralWaveform(*args, **kwargs)
```

- Bases: **dict**


<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">waveform_id_select</td>
    <td class="second-column">Waveform</td>
  </tr>
</table>


<span id='PostProcessGaussianSourceGeometry'></span>

## PostProcessGaussianSourceGeometry

```py
class maxoptics_sdk.core.source.post_process_gaussian_source_typing.PostProcessGaussianSourceGeometry(*args, **kwargs)
```

- Bases: **dict**



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

