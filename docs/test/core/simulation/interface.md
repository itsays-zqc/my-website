# maxoptics_sdk.core.simulation.simu_res.interface module

```py
class maxoptics_sdk.core.simulation.simu_res.interface.SimulationResultInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
## 1. calculate

### Syntax

abstract calculate(*, `simulation_name`: str, `monitor_name`: str, `property`: FdtdCalculateMethodPropertyProcess, `cmp_f`: Callable | None = None)

### Usage

`Calculate basing on the simulation result.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">monitor_name</td>
    <td class="second-column">monitor name</td>
  </tr>
  <tr>
    <td>property</td>
    <td>properties for calculation
    </td>
  </tr>
  <tr>
    <td>simulation_name</td>
    <td>simulation name</td>
  </tr>
  <tr>
    <td>cmp_f</td>
    <td>compare function, defaults to None</td>
    </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
None
```

## 2. extract

### Syntax

abstract **extract**(*, `data`: Literal['calculate_modes'], `attribute`: Literal['TEratio', 'neff_real', 'neff_imag', 'ng_real', 'ng_imag', 'wavelength_nm', 'loss_dBpcm', None] = None, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `mode`: int | None = None) → DataFrame

abstract **extract**(*, `data`: Literal['farfield_fde'], `attribute`: Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'], `show`=False, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `mode`: int) → DataFrame

abstract **extract**(*, `data`: Literal['calculate_modes'], `attribute`: Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'], `export_csv`=False, `export_mat`=False, export_zbf=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `mode`: int) → List[DataFrame]

abstract **extract**(*, `data`: Literal['mesh_structure'], `savepath`: Any = 'a', `target`: Literal['intensity'] = 'intensity', `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False) → List[DataFrame]

abstract **extract**(*, `target`: Literal['line'] = 'line', data: Literal['frequency_analysis'], `attribute`: Literal['neff', 'group_index', 'loss', 'polarization'], `export_csv`=False, `export_mat`=False, export_zbf=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:facet_data'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `real`=True, `imag`=True, `savepath`: Any = 'a') → None

abstract **extract**(*, `data`: Literal['eme_propagate:monitor', 'propagation_sweep:monitor', 'wavelength_sweep:monitor'], `attribute`: Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'], `monitor_name`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:smatrix'], `target`: Literal['intensity'] = 'intensity', `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['propagation_sweep:sweep', `wavelength_sweep`:sweep'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:port_mode_info'], `target`: Literal['intensity'] = 'intensity', `attribute`: Literal['E', 'H'], `port_name`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None, `mode`: Any = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:port_mesh_structure'], `port_name`: str, `target`: Literal['line', 'intensity'] = 'intensity', `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:port_effective_index', 'eme_propagate:port_ng'], `port_name`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a') → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:port_overlap'], `target`: Literal['line'] = 'line', `port_name`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:cell_mesh_structure'], `target`: Literal['intensity', 'line'], cell_params: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `target`: Literal['intensity'] = 'intensity', `data`: Literal['eme_propagate:cell_mode_info'], `attribute`: Literal['E', 'H'], `cell_params`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None, `mode`: Any = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:prop_field'], `attribute`: Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'], `cell_params`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:internal_s'], `target`: Literal['intensity'] = 'intensity', `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['eme_propagate:cell_p_matrix', 'eme_propagate:cell_overlap', 'eme_propagate:cell_s', 'eme_propagate:prop_s'], `target`: Literal['intensity'] = 'intensity', `cell_params`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['fdtd:power_monitor', 'fdtd:time_monitor'], `target`: Literal['intensity', 'line'], `attribute`: Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'] | Literal['T'], `monitor_name`: str, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None, `wavelength`: Any | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['fdtd:mode_expansion'], `target`: Literal['intensity', 'line'], `attribute`: Literal['a', 'b', 'n', 'p', 'N', 'P', 't_forward', 't_backward', 'T_forward', 'T_backward'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, `plot_y`: str | None = None, mode: Any | None = None, `wavelength`: Any | None = None, `monitor_name`: str, `mode_expansion_name`: str) → List[DataFrame]

abstract **extract**(*, `data`: Literal['fdtd:port_mode_info'], `target`: Literal['intensity', 'line'], `attribute`: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `port_name`: str, `mode`: Any = None, `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['fdtd:mode_source_mode_info'], `target`: Literal['intensity', 'line'], `attribute`: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `source_name`: str, `mode`: Any = None, `plot_x`: str | None = None, `plot_y`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['fdtd:mode_expansion_mode_info'], `target`: Literal['intensity', 'line'], `attribute`: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `monitor_name`: str, `mode_expansion_name`: str, `plot_x`: str | None = None, `plot_y`: str | None = None, `mode`: Any = None, `wavelength`: Any = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['smatrix_sweep'], `target`: Literal['intensity', 'line'], `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None) → List[DataFrame]

abstract **extract**(*, `data`: Literal['sweep'], `target`: Literal['intensity', 'line'], `attribute`: str, `monitor_name`: str | None = None, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `plot_x`: str | None = None, **`kwargs`) → List[DataFrame]

abstract **extract**(*, `data`: Literal['mode_expansion'], `target`: Literal['line'], `attribute`: Literal['a', 'b', 'n', 'p', 'N', 'P', 't_forward', 't_backward', 'T_forward', 'T_backward'], `monitor_name`: str | None = None, `export_csv`=False, `export_mat`=False, `export_zbf`=False, `show`=False, `real`=True, `imag`=True, `savepath`: Any = 'a', `wavelength`=None, `plot_x`: str | None = None, **`kwargs`) → List[DataFrame]


### Usage

`Extract a result from completed simulation.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>data</td>
    <td>Which type/field data will be extracted.</td>
  </tr>
  <tr>
    <td class="first-coluumn">export_csv</td>
    <td class="second-column">Whether to export a csv. Default as False.
    </td>
  </tr>
  <tr>
    <td>show</td>
    <td>Whether to show the picture. If set to False, the picture will be saved instead. Default as False.</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Picture save path. Default as ‘a’.</td>
  </tr>
  <tr>
    <td>target</td>
    <td>How the data is organized/displayed. Default as None.</td>
    </tr>
     <tr>
    <td>attribute</td>
    <td>Which attribute will extracted, in few cases this parameter is not needed. Default as None.
    </td>
    </tr>
     <tr>
    <td>real</td>
    <td>Whether to add real part of data. Default as True.</td>
    </tr>
     <tr>
    <td>imag</td>
    <td>Whether to add imag part of data. If both real and imag is activate, ‘ABS’ data will be extracted. Default as True.</td>
    </tr>
     <tr>
    <td>plot_x</td>
    <td>selection of x axis of heatmap or line plot.</td>
    </tr>
     <tr>
    <td>plot_y</td>
    <td>selection of y axis of heatmap.</td>
    </tr>
     <tr>
    <td>kwargs</td>
    <td>Other visualization parameters. ‘monitor_name’ and ‘mode_expansion_name’ for ‘fdtd:mode_expansion’ for example.</td>
    </tr>
</table>

<br/> 
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
For detailed usage instruction, please view examples
```
