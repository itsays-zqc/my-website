# maxoptics_sdk.core.simulation.simu_task.interface module

```py
class maxoptics_sdk.core.simulation.simu_task.interface.BeamResult(task_id: int | str, task_path: str, mode_area:FDEBeamResultHandler.ModeAreaResult, props: Dict[str, Any], chart: TaskFile)
```

Bases: **object**

## parameter

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>

  <tr>
    <td class="first-column">chart</td>
    <td class="second-column">TaskFile</td>
  </tr>
  <tr>
    <td>mode_area</td>
    <td>FDEBeamResultHandler.ModeAreaResult</td>
  </tr>
  <tr>
    <td>props</td>
    <td>Dict[str, Any]</td>
  </tr>
  <tr>
    <td>task_id</td>
    <td>int | str</td>
  </tr>
  <tr>
    <td>task_path</td>
    <td>str</td>
  </tr>
</table>


## SimulationTaskInterface
``` py
class maxoptics_sdk.core.simulation.simu_task.interface.SimulationTaskInterface(*args, **kwargs)
```
Bases: **Protocol**

### Syntax

abstract **build()** → Tuple[MosProject, Dict[str, bool]]

**props:** Dict[str, Any]

abstract **run()** → SimulationResultInterface

**Returns:** Simulation result manager.

abstract **run_doping**(`name`: str, `property`: RunDopingPostProcess, `norm`: str, `scale`: str, `superimpose`: bool, `show`: bool, `material_list`: list, `cmin`: float, `savepath`: str) → *SimulationTaskInterface*

### Usage

Run doping.

### Parameters and Returns


<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">property</td>
    <td class="second-column">Doping preview properties. See below</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Doping preview name.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Show figure or not. Default as False.</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Save path for picture. Required.</td>
  </tr>
  <tr>
    <td>norm</td>
    <td>Colorbar normalization. Selections are ['linear', 'log']. Default as 'linear'.</td>
  </tr>
  <tr>
    <td>scale</td>
    <td>Scale type. Selections are ['equal', 'auto']. Default as 'equal'.</td>
  </tr>
  <tr>
    <td>superimpose</td>
    <td>Superimpose doping on structure or not. Default as True.</td>
  </tr>
  <tr>
    <td>material_list</td>
    <td>Specified material type list. Default as [].</td>
  </tr>
  <tr>
    <td>region_list</td>
    <td>Specified region name list. Default as []. Superior to material_list when not empty.</td>
  </tr>
  <tr>
    <td>cmax</td>
    <td>Maximum concentration of heatmap colorbar. Default as None.</td>
  </tr>
  <tr>
    <td>cmin</td>
    <td>Minimum concentration of heatmap colorbar. Default as None.</td>
  </tr>
</table>
<br/>


## RUN_DOPING

### Parameters

<table class="custom-table">
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.dimension</td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal'].&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td>float</td>
    <td></td>
  </tr>
</table>
<br/>

### Syntax

abstract **run_fde_beam_and_extract**(*, property, export_csv=False, show=False, savepath='') → BeamResult

### Usage

`Run fde beam and extract result immediately.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">property</td>
    <td class="second-column">Beam settings</td>
  </tr>
  <tr>
    <td>export_csv</td>
    <td>Whether to save csv, defaults to False
    </td>
  </tr>
  <tr>
    <td>savepath </td>
    <td>Save path of heatmap and csv, defaults to “”</td>
  </tr>
</table>
<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">Has attribute “chart”, which is a TaskFile object</td>
  </tr>
</table>

## RUN_FDE_BEAM_AND_EXTRACT

### Parameters

<table class="custom-table">
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>define_gaussian_beam_by</td>
    <td>waist_size_and_position</td>
    <td>string</td>
    <td>Selections are ['waist_size_and_position', 'beam_size_and_divergence'].</td>
  </tr>
  <tr>
    <td>waist_radius</td>
    <td>10</td>
    <td>float</td>
  </tr>
  <tr>
    <td>distance_from_waist</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>beam_radius</td>
    <td>10</td>
    <td>float</td>
  </tr>
  <tr>
    <td>divergence_angle</td>
    <td>2.83063</td>
    <td>float</td>
  </tr>
  <tr>
    <td>refractive_index</td>
    <td>1</td>
    <td>float</td>
  </tr>
  <tr>
    <td>theta</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>phi</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>polarization_angle</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>wavelength_offset</td>
    <td>0.0001</td>
    <td>float</td>
  </tr>
  <tr>
    <td>solved_number_of_trial_modes</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>sample_span</td>
    <td>10</td>
    <td>float</td>
  </tr>
  <tr>
    <td>sample_resolution</td>
    <td>200</td>
    <td>integer</td>
  </tr>
</table>

### Syntax

abstract **run_fde_overlap_and_extract**(*, property, savepath='a', export_csv=False) → OverlapResult

### Usage

`Run fde overlap and extract result immediately.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">property</td>
    <td class="second-column">Overlap settings</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Save path of csv, defaults to “a”
    </td>
  </tr>
  <tr>
    <td>export_csv </td>
    <td>Whether to export csv, defaults to False</td>
  </tr>
</table>
<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">Has attribute “result”, which is a float number.</td>
  </tr>
</table>

## RUN_FDE_OVERLAP_AND_EXTRACT

### Parameters

<table class="custom-table">
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>add_global_mode.task_path</td>
    <td>string</td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>add_global_mode.mode</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>task_path</td>
    <td>string</td>
    <td></td>
  </tr>
  <tr>
    <td>mode</td>
    <td>integer</td>
    <td></td>
  </tr>
  <tr>
    <td>optimize_position</td>
    <td>false</td>
    <td>boolean. Priority over shifts.</td>
  </tr>
  <tr>
    <td>x_shift</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>y_shift</td>
    <td>0</td>
    <td>float</td>
  </tr>
  <tr>
    <td>z_shift</td>
    <td>0</td>
    <td>float</td>
  </tr>
</table>

### Syntax

abstract **run_index**(*, `property`: RunIndex, `name`: str, `export_csv`: bool = False, `show`: bool = False, `savepath`: str = 'a', `export_n`: bool = True, `export_c`: bool = False, `max_index`: int | None = None, `max_sigma`: int | None = None)

### Usage

`Run index.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">property</td>
    <td class="second-column">Index monitor properties. See below.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Monitor name.</td>
  </tr>
  <tr>
    <td>export_csv</td>
    <td>Export csv or not. Default as False.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Show figure or not. Default as False.</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Save path for csv and picture. Default as 'a'.</td>
  </tr>
  <tr>
    <td>export_n</td>
    <td>Whether to export nx, ny, nz... . Default as True.</td>
  </tr>
  <tr>
    <td>export_c</td>
    <td>Whether to export σx, σy, σz... . Default as False.</td>
  </tr>
  <tr>
    <td>max_index</td>
    <td>Maximum index of heatmap colorbar. Default as None.</td>
  </tr>
  <tr>
    <td>max_sigma</td>
    <td>Maximum sigma of heatmap colorbar. Default as None.</td>
  </tr>
</table>
<br/>

## RUN_INDEX

### Parameters

<table class="custom-table">
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal'].&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td>float</td>
    <td></td>
  </tr>
</table>

### Syntax

abstract **run_index_sweep**(*, `property`: RunIndex, `name`: str, `export_csv`: bool = False, `show`: bool = False, `savepath`: str = 'a', `export_n`: bool = True, `export_c`: bool = False)

### Usage

`Run index sweep.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td class="first-column">property</td>
    <td class="second-column">Index monitor properties. See below.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>Monitor name.</td>
  </tr>
  <tr>
    <td>export_csv</td>
    <td>Export csv or not. Default as False.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Show figure or not. Default as False.</td>
  </tr>
  <tr>
    <td>savepath</td>
    <td>Save path for csv and picture. Default as 'a'.</td>
  </tr>
  <tr>
    <td>export_n</td>
    <td>Whether to export nx, ny, nz... . Default as True.</td>
  </tr>
  <tr>
    <td>export_c</td>
    <td>Whether to export σx, σy, σz... . Default as False.</td>
  </tr>
</table>


## RUN_INDEX

### Pamameters

<table class="custom-table">
  <tr>
    <th>Default</th>
    <th>Type</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>geometry.monitor_type</td>
    <td>string</td>
    <td>Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal'].&nbsp;&nbsp;&nbsp;&nbsp;</td>
  </tr>
  <tr>
    <td>geometry.x</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.x_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.x_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.y_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.y_max</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_span</td>
    <td>float</td>
    <td>Restrained by condition: >=0.</td>
  </tr>
  <tr>
    <td>geometry.z_min</td>
    <td>float</td>
    <td></td>
  </tr>
  <tr>
    <td>geometry.z_max</td>
    <td>float</td>
    <td></td>
  </tr>
</table>


### Syntax

abstract **show3d**(`show_with`: Literal['webviewer', 'matplotlib'] = 'webviewer')

### Uasge

`Show 3d structure in a pop up windows.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>show_with</td>
    <td> “webviewer” will start a server and toggle a browser windows. “matplotlib” will toggle a Axes3D windows. Default as “webviewer”.</td>
  </tr>
</table>
<br/>

**task_type:** SimulationTypeSelection


