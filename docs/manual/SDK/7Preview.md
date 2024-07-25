# Preview

<font face = "Calibri">

<div class="text-justify">

In this section, we currently offer the capability to provide an advanced preview of structural models, refractive index and doping profile.

This preview serves to validate the structues before initiating the formal simulation, thereby assisting in verifying the accuracy of the structures. Consequently, it leads to reduced simulation time and an overall enhancement of simulation efficiency.

## 8.1 Preview index


Preview the index profile of a source or port or monitor in the project by using the  `preview_index` function. The syntax and properties of this function are shown below, and it return visualizer.

```python
preview_index(
                monitor_name: str="",
                port_name: str="",
                source_name: str="",
                savepath: str,
                export_n: bool
                export_c: bool
                export_csv: bool
                export_mat: bool
        )
```

| parameter                      | type    | default   | description                                                                  |
|:-------------------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| monitor_name                   | string  |  -         | Only one of monitor_name, port_name and source_name can be specify.               |
| port_name                      | string  |-           |  Only one of monitor_name, port_name and source_name can be specify.           |
| source_name                    | string  |  -         |  Only one of monitor_name, port_name and source_name can be specify.          |
| savepath                       | string  |  -         |   Savepath of the preview result.                           |
| export_n                       | boolean | True      | Choose whether to export the refractive index component of the results.                                               |
| export_c                       | boolean | False     | Choose whether to export the conductivity component of the results.                                      |
| export_csv                     | boolean | False     |  Choose whether to export the results in csv format.                                |
| export_mat                     | boolean | False     |   Choose whether to export the results in mat format.                           |


**Example:**

The following command previews the refractive index profile of the "power monitor" monitor and saves the data to the specified path. This script assumes that the structure and  power monitor have been set up, and the pj is an instance of the Project.

```python
simu_name = 'preview_index'
m_name = "power monitor"
path_name = f'path/preview_index'

simu = pj.Simulation()
simu[simu_name].preview_index(
    monitor_name=m_name, savepath=path_name, export_csv=True, show=False, )

```

        
## 8.2 Preview mode


Preview the modal amplitude plot of a source or port or monitor in the project by using the  `preview_mode` function. The syntax and properties of this function are shown below, and it return visualizer.

```python
preview_index(
                monitor_name: str="",
                port_name: str="",
                source_name: str="",
                savepath: str,
                target: str,
                attribute: str,
                mode: int,
                export_csv: bool,
                export_mat: bool
        )
```

| parameter                      | type    | default   | description                                                                  |
|:-------------------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| monitor_name                   | string  |  -         |  Only one of monitor_name, port_name and source_name can be specify.               |
| port_name                      | string  | -          |  Only one of monitor_name, port_name and source_name can be specify.       |
| source_name                    | string  | -          |   Only one of monitor_name, port_name and source_name can be specify.        |
| savepath                       | string  |  -         |   Savepath of the preview result.                      |
| target                         | string  |  -         | The options include "intensity" and "target" to extract two-dimensional and one-dimensional data.        |
| attribute                      | string  |  -         | Selections are 'E', 'H', 'Ex', 'Ey', 'Ez', 'Hx', 'Hy', 'Hz'.               |
| mode                           | integer | 0         |   Extract the mode from the mode list and sort it from 0.                               |
| export_csv                     | boolean | False     |  Choose whether to export the results in csv format.                          |
| export_mat                     | boolean | False     |   Choose whether to export the results in mat format.                                  |

**Example:**

The following command previews the fundamental mode of the mode source and saves the data to the specified path. This script assumes that the mode source has been set up, and the pj is an instance of the Project.

```python
simu_name = 'preview_mode'
path = f"{plot_path}"
s_name = "mode_source"
path_name = path + "preview_index"

simu = pj.Simulation()
simu[simu_name].preview_modes(source_name=s_name, savepath=path_name,
                                      target="intensity", attribute="E", real=True, imag=True, mode=0, show=False, export_csv=True)   
```


## 8.3 Structure show 

This portion of the code is primarily intended for show structure. Please note that this method becomes invalid if the current structure manager contains Pyramid or Arc-Waveguide 3D type geometries.

```python
structure_show(
            mode: str,
            fig_type: Optional[str],
            show: bool,
            savepath: str,

    )
```
<!-- Show the structure.

:param mode: Mode of show
:param show: Whether to show the structure
:param savepath: Path to save the structure
:param fig_type: Type of the figure
:param disabled_components: Components to disable
:param xyratio: Ratio of x and y
:param celldisplay: Whether to display the cell
:param view: Whether to view the structure
:return: None -->

| parameter                      | type    | default   | description                                                                  |
|:-------------------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| show                           | boolean |-           | If True, show the picture of the structure                                   |
| savepath                       | string  |-           |  Savepath of the preview result.                     |
| fig_type                       | string  | png       | Selections are ['png', 'svg']                                                |
| disabled_components            | tuple   | -          | Currently invalid                                                            |
| xyratio                        | tuple   | (1,1)     | Currently invalid                                                            |
| celldisplay                    | boolean | False     | Currently invalid                                                            |



**Example:**

The following command shows the physical structure in the simulation, including the simulation area and monitor, etc. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project.

```python
st = pj.Structure()
st.structure_show(fig_type='png', show=False,
                  savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name)
```

## 8.4 Show 3D

 show_with: Choose the type of display. The selection are "webviewer", "matplotlib"，"local_gui". The "webviewer" will start a server and toggle a browser windows. "matplotlib" will toggle a Axes3D windows. Default as "webviewer". 

**Example:**

The following script uses a local GUI to show simulation settings, and the project needs to be saved before use.. This script assumes that the project has been added to the simulation environment, and the pj is an instance of the Project.

```python
simu = pj.Simulation()
pj.save_project()
simu[simu_name].show3d(show_with="local_gui")
```

## 8.5 Preview doping

The code within this module enables the preview of doping results for the respective structures.

```python
run_doping(
            self,
            name: str,
            property: RunDopingPostProcess,
            norm: str,
            scale: str,
            superimpose: bool,
            show: bool,
            material_list: list,
            cmin: float,
            savepath: str
    )
```

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|    property    |                  The properties of doping preview.                  |
|      name      |                     The name of doping preview.                     |
|      show      |            Decide whether to show directly the preview of structure directly in the related software.If set to False, the picture will be saved instead.            |
|    savepath    |               The save path for picture.              |
|      norm      | The normalization of colorbar. Selections are ['linear', 'log']. Default as 'linear'. |
|     scale      | The type of  pcture scale. Selections are ['equal', 'auto']. Default as 'equal'. |
|  superimpose   |   Superimpose doping on structure or not. Default as True.   |
| material_list  |         Specified material type list. Default as [].         |
|  region_list   | Specified region name list. Default as []. Superior to material_list when not empty. |
|      cmax      | Maximum concentration of heatmap colorbar. Default as None.  |
|      cmin      | Minimum concentration of heatmap colorbar. Default as None.  |

**Example:**

```python
@timed
@with_path
def preview_doping(**kwargs):
    # region --- 6. Preview Doping ---
    run_options = RunOptions(index_preview=False, doping_preview=True, calculate_modes=False, run=False, extract=False)

    vsource = "Cathode" # electrode solid
    gnd = "Anode"       # electrode solid  
    path = kwargs["path"]
    time_str = time.strftime("%Y%m%d_%H%M%S", time.localtime())
    simu_name = "MOD00_structure_doping"
    project_name = f"{simu_name}_{time_str}"
    plot_path = f"{path}/plots/{project_name}/"
    current_file_path = os.path.abspath(__file__)

    pj: Project = create_project(project_name, run_options)

    create_structures(pj, run_options)

    mt = pj.Material()
    st = pj.Structure()

    simu = pj.Simulation()
    simu.add(name=simu_name, type="DDM", property={
        "background_material": mt["mat_sio2"], 
        "general": {"solver_mode": "steady_state",
                    "norm_length": normal_length,
                    "temperature_dependence": "isothermal",
                    "temperature": temperature,
                    },
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y_min": oe_y_min, "y_max": oe_y_max, "z_min": oe_z_min, "z_max": oe_z_max},
        "mesh_settings": {"mesh_size": egrid_global},
        "advanced": {"non_linear_solver": "newton",
                     "linear_solver": "mumps",
                     "fermi_statistics": "disabled", # or "enabled"
                     "damping": "none", # or "potential"
                     "potential_update": 1.0,
                     "max_iterations": 15,
                     "relative_tolerance": 1e-5,
                     "tolerance_relax": 1e5,
                     "divergence_factor": 1e25
                     }
    })

    add_ddm_settings(pj, run_options)

    bd = pj.BoundaryCondition()

    bd.add(name=vsource,type="electrode", property={
        "geometry": {"surface_type": "solid", "solid": st[vsource]},
        "general": {"electrode_mode": "steady_state",  
                    "contact_type": "ohmic_contact",
                    "sweep_type": "single", "voltage": 0,
                    "apply_ac_small_signal": "none", 
                    # "envelop": "uniform",
                    }
    })
    bd.add(name=gnd,type="electrode", property={
        "geometry": {"surface_type": "solid", "solid": st[gnd]},
        "general": {"electrode_mode": "steady_state",  
                    "contact_type": "ohmic_contact",
                    "sweep_type": "single", "voltage": 0,
                    "apply_ac_small_signal": "none",
                    # "envelop": "uniform",
                    }
    })

    simu[simu_name].preview_doping(monitor_name="doping_monitor", savepath=f"{plot_path}doping", export_csv=True, real=True, imag=False)
    # endregion
```

|     Parameters     | Default |  Type  |                            Notes                             |
| :----------------: | :-----: | :----: | :----------------------------------------------------------: |
| geometry.dimension |         | string | Set the orientation of the doping region. The selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the doping region.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the doping region. Restrained by condition: >0.  |
|   geometry.x_min    |     -    |  float   | The minimum x-coordinate endpoint data of the doping region.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the doping region.     |
|     geometry.y      |    -     |  float   |  The y-coordinate of the center point position of the doping region.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the doping region. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the doping region.       |
|   geometry.y_max    |    -     |  float   |  The maximum y-coordinate endpoint data of the doping region.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the doping region.    |
|   geometry.z_span   |    -     |  float   | The thinckness in z direction of the doping region. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the doping region.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the doping region.     |

</div>

</font>