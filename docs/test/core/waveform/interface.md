
# interface

## WaveformInterface

```py
class maxoptics_sdk.core.waveform.interface.WaveformInterface(*args, **kwargs)
```
Bases: **Protocol**

### syntax
**add**(*, name: str, wavelength_center: float, wavelength_span: float, unit: Literal['um', 'nm'] = 'um')

__add__(*, name: str, wavelength_min: float, wavelength_max: float, unit: Literal['um', 'nm'] = 'um')

__add__(*, name: str, frequency_center: float, frequency_span: float)

__add__(*, name: str, frequency_min: float, frequency_max: float)



Add a project waveform.

<table class="custom-table">
  <tr>
    <td class="typeface">Parameter</td>
    <td class="typeface">Description</td>
  </tr>
  <tr>
    <td class="first-column">name</td>
    <td class="second-column">Waveform name</td>
  </tr>
  <tr>
    <td>kwargs</td>
    <td>Waveform data</td>
  </tr>
</table>

<br/>


```py
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)
```