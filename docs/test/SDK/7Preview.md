# Preview

<font face = "Calibri">

<div class="text-justify">

In this section, we currently offer the capability to provide an advanced preview of structural models, refractive index and doping profile.

This preview serves to validate the structues before initiating the formal simulation, thereby assisting in verifying the accuracy of the structures. Consequently, it leads to reduced simulation time and an overall enhancement of simulation efficiency.

## 8.1 Preview index


Preview the index plot of a source or port or monitor in the project by using the  `preview_index` function. The syntax and properties of this function are shown below, and it return visualizer.

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
| monitor_name                   | string  |  -         | Only one of monitor_name, port_name and source_name can be set               |
| port_name                      | string  |-           |                                                                              |
| source_name                    | string  |  -         |                                                                              |
| savepath                       | string  |  -         |                                                                              |
| export_n                       | boolean | True      | If True, export the index.                                                   |
| export_c                       | boolean | False     | If True, export the conductivity.                                            |
| export_csv                     | boolean | False     |                                                                              |
| export_mat                     | boolean | False     |                                                                              |


**Example:**

The following command previews the refractive index distribution of the "test_preview" monitor and saves the data to the specified path.

```python
simu_name = 'preview_index'
path = f"{plot_path}"
m_name = "power monitor"
path_name = path + "preview_index"

simu = Project.Simulation()
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
| monitor_name                   | string  |  -         | Only one of monitor_name, port_name and source_name can be set               |
| port_name                      | string  | -          |                                                                              |
| source_name                    | string  | -          |                                                                              |
| savepath                       | string  |  -         |                                                                              |
| target                         | string  |  -         | Selections are ["intensity","target"]                                                                             |
| attribute                      | string  |  -         | Selections are ['E', 'H', 'Ex', 'Ey', 'Ez', 'Hx', 'Hy', 'Hz']                |
| mode                           | integer | 0         |                                                                              |
| export_csv                     | boolean | False     |                                                                              |
| export_mat                     | boolean | False     |                                                                              |

**Example:**

The following command previews the mode field distribution of the 'mode_source' light source fundamental mode and saves the data to the specified path.

```python
simu_name = 'preview_mode'
path = f"{plot_path}"
s_name = "mode_source"
path_name = path + "preview_index"

simu = Project.Simulation()
simu[simu_name].preview_modes(source_name=s_name, savepath=path_name,
                                      target="intensity", attribute="E", real=True, imag=True, mode=0, show=False, export_csv=True)   
```


## 8.3 Structure show and show 3D

This portion of the code is primarily intended for show structure. Please note that this method becomes invalid if the current structure manager contains Pyramid or Arc-Waveguide 3D type geometries.

```python
structure_show(
            mode: str,
            fig_type: Optional[str],
            show: bool,
            savepath: str,

    )
```
Show the structure.

:param mode: Mode of show
:param show: Whether to show the structure
:param savepath: Path to save the structure
:param fig_type: Type of the figure
:param disabled_components: Components to disable
:param xyratio: Ratio of x and y
:param celldisplay: Whether to display the cell
:param view: Whether to view the structure
:return: None

| parameter                      | type    | default   | description                                                                  |
|:-------------------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| mode                           | string  | XY        | Only XY is supported at present                                              |
| show                           | boolean |-           | If True, show the picture of the structure                                   |
| savepath                       | string  |-           |                                                                              |
| fig_type                       | string  | png       | Selections are ['png', 'svg']                                                |
| disabled_components            | tuple   | -          | Currently invalid                                                            |
| xyratio                        | tuple   | (1,1)     | Currently invalid                                                            |
| celldisplay                    | boolean | False     | Currently invalid                                                            |

 

Show 3D structure in a pop up windows.

```python
show3d(self, show_with: Literal["webviewer", "matplotlib"，"local_gui"] = "webviewer")
    st.structure_show(fig_type="png", show=False,
                      savepath=f"{plot_path}00_{simu_name}")
```

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|   show_with    | Choose the type of display. The selection are "webviewer", "matplotlib"，"local_gui". The "webviewer" will start a server and toggle a browser windows. "matplotlib" will toggle a Axes3D windows. Default as "webviewer". |

**Example:**

```python
st.structure_show(fig_type='png', show=False,
                  savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name)
simu[simu_name].show3d(show_with="local_gui")
```




## 8.4 Preview doping

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