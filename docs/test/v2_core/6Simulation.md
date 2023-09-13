# Simulation

In the forthcoming code segment, we will showcase examples of simulation, accompanied by their parameter lists. This will aid you in achieving a simulation project.

Our platform will offer support for a variety of simulation modules, encompassing both optical and electrical simulation. These may include FDE, FDTD, OEDevice modules, ensuring an expansive electro-optical simulation capabilities.


```python
add(
            self,
            *,
            name: str,
            type: "SimulationTypeSelection",
            property: Any,
            **kwargs,
    )
```

| Parameters |                         Description                          |
| :--------: | :----------------------------------------------------------: |
|    name    |                       Simulation name.                       |
|    type    |                       Simulation type.                       |
|  location  |   Simulation run mode, cloud or local.Simulation property.   |
|  property  |                     Simulation property.                     |
|   kwargs   | Other simulation parameters. "source_name" is needed for "mode_selection:user_select" type simulation. |

## 6.1 FDE

Incorporate an FDE solver into the current project using the code `type='FDE'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["FDE"],
            property: FdePostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name=simu_name, type='FDE',
     property={
         # 'general': {'solver_type': '2d_x_normal'},  # default is '2d_x_normal' ['2d_x_normal','2d_y_normal','2d_z_normal']
         'mesh_settings': {
             'global_mesh_uniform_grid': {'dy': grid, 'dz': grid},  # 'minimum_mesh_step_settings': {'min_mesh_step': 1.0e-4}
         },
         'fde_analysis': {
             'modal_analysis': {
                 'calculate_modes': run_options.run, 'mesh_structure': True,
                 'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes,
                 'search': 'max_index',  # ['near_n','max_index']
                 # 'n': 2,
                 'calculate_group_index': False,
                 'mode_removal': {'threshold': 0.02},
                 # 'bent_waveguide': {'bent_waveguide': False, 'radius': 1, 'orientation': 0, 'location': 'simulation_center'}
             },
             "frequency_analysis": {
                 "frequency_analysis": run_options.run_frequency_sweep,
                 "start_wavelength": 1.50, "stop_wavelength": 1.60, "number_of_points": 3,
                 "effective_index": 2.7, "detailed_dispersion_calculation": False
             }}})
```

|                          Parameters                          |      Default      |  Type   |                            Notes                             |
| :----------------------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|                     general.solver_type                      |    2d_x_normal    | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
|          mesh_settings.global_mesh_uniform_grid.dx           |       0.02        |  float  |                                                              |
|          mesh_settings.global_mesh_uniform_grid.dy           |       0.02        |  float  |                                                              |
|          mesh_settings.global_mesh_uniform_grid.dz           |       0.02        |  float  |                                                              |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001       |  float  |                                                              |
|                    thread_setting.thread                     |         4         | integer |                                                              |
|          fde_analysis.modal_analysis.mesh_structure          |       false       |  bool   |                                                              |
|         fde_analysis.modal_analysis.calculate_modes          |       false       |  bool   |                                                              |
|  fde_analysis.modal_analysis.[]far_field_settings.calculate  |       true        |  bool   |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.mode_selection |                   | integer |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.projection_method |      planar       | string  |                  Selections are ['planar'].                  |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_filter |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.material_index |        1.4        |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.projection_distance |      4430.65      |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_x |        50         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_y |        50         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x  |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x_span |      26.1834      |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y  |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y_span |      18.1231      |  float  |                                                              |
|            fde_analysis.modal_analysis.wavelength            |       1.55        |  float  |                                                              |
|        fde_analysis.modal_analysis.wavelength_offset         |       0.002       |  float  |                                                              |
|      fde_analysis.modal_analysis.number_of_trial_modes       |         5         | integer |                                                              |
|              fde_analysis.modal_analysis.search              |     max_index     | string  |           Selections are ['near_n', 'max_index'].            |
|                fde_analysis.modal_analysis.n                 |         1         |  float  |                                                              |
|      fde_analysis.modal_analysis.calculate_group_index       |       false       |  bool   |                                                              |
|  fde_analysis.modal_analysis.bent_waveguide.bent_waveguide   |       false       |  bool   |                                                              |
|      fde_analysis.modal_analysis.bent_waveguide.radius       |        0.0        |  float  |                                                              |
|    fde_analysis.modal_analysis.bent_waveguide.orientation    |        0.0        |  float  |                                                              |
|     fde_analysis.modal_analysis.bent_waveguide.location      | simulation_center | string  |            Selections are ['simulation_center'].             |
|      fde_analysis.modal_analysis.mode_removal.threshold      |                   |  float  |                                                              |
|      fde_analysis.frequency_analysis.frequency_analysis      |       false       |  bool   |                                                              |
|       fde_analysis.frequency_analysis.start_wavelength       |       1.55        |  float  |                                                              |
|       fde_analysis.frequency_analysis.stop_wavelength        |      1.49896      |  float  |                                                              |
|       fde_analysis.frequency_analysis.number_of_points       |        10         | integer |                                                              |
|       fde_analysis.frequency_analysis.effective_index        |        1.0        |  float  |                                                              |
| fde_analysis.frequency_analysis.detailed_dispersion_calculation |       false       |  bool   |                                                              |



### 6.1.1 Mode selection

Integrate a mode selection into the current project.

```python
add(
            self,
            *,
            name: str,
            simulation_name: str,
            source_name: str = "",
            cell_group_index: int = 0,
            type: Literal["mode_selection:user_select"],
            property: ModeSelectionUserSelectPostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name=simu_name+'_cal_mode', simulation_name=simu_name, source_name='source', type='mode_selection:user_select',
                 property={'modal_analysis': {'calculate_modes': True, 'mesh_structure': True,
                                              'wavelength': wavelength, 'number_of_trial_modes': 20, 'search': 'max_index', 'calculate_group_index': True
                                              }})
        src_res = simu[f'{simu_name}_cal_mode'].run()
        src_res.extract(data='calculate_modes', savepath=f'{plot_path}{kL[2]}_Preview_SourceMode',
                        attribute='E', mode=0, real=True, imag=True, **export_options, show=False)
```

|                     Parameters                     |      Default      |  Type   |                  Notes                  |
| :------------------------------------------------: | :---------------: | :-----: | :-------------------------------------: |
|           modal_analysis.mesh_structure            |       false       |  bool   |                                         |
|           modal_analysis.calculate_modes           |       false       |  bool   |                                         |
|             modal_analysis.wavelength              |       1.55        |  float  |                                         |
|          modal_analysis.wavelength_offset          |       0.002       |  float  |                                         |
|        modal_analysis.number_of_trial_modes        |        20         | integer |                                         |
|               modal_analysis.search                |     max_index     | string  | Selections are ['near_n', 'max_index']. |
|                  modal_analysis.n                  |         1         |  float  |                                         |
|        modal_analysis.calculate_group_index        |       false       |  bool   |                                         |
|    modal_analysis.bent_waveguide.bent_waveguide    |       false       |  bool   |                                         |
|        modal_analysis.bent_waveguide.radius        |        1.0        |  float  |                                         |
|     modal_analysis.bent_waveguide.orientation      |        0.0        |  float  |                                         |
|       modal_analysis.bent_waveguide.location       | simulation_center | string  |  Selections are ['simulation_center'].  |
|       modal_analysis.mode_removal.threshold        |                   |  float  |                                         |
|       frequency_analysis.frequency_analysis        |       false       |  bool   |                                         |
|        frequency_analysis.start_wavelength         |       1.55        |  float  |                                         |
|         frequency_analysis.stop_wavelength         |      1.49896      |  float  |                                         |
|        frequency_analysis.number_of_points         |        10         | integer |                                         |
|         frequency_analysis.effective_index         |        1.0        |  float  |                                         |
| frequency_analysis.detailed_dispersion_calculation |       false       |  bool   |                                         |



### 6.1.2 Beam overlap

Calculating beam overlap within the FDE module involves a two-step process.

Firstly, it's necessary to acquire the FDE beam results and  extract the relevant data.

```python
run_fde_beam_and_extract(self, *, property, export_csv=False, show=False, savepath="")
```

| **Parameters** |                 Description                  |
| :------------: | :------------------------------------------: |
|    property    |                Beam settings                 |
|   export_csv   |    Whether to save csv, defaults to False    |
|      show      |    Show figure or not, defaults as False     |
|    savepath    | Save path of heatmap and csv, defaults to "" |

Subsequently, we can execute the FDE overlap function and extract the result.

```python
run_fde_overlap_and_extract(self, *, property, savepath="a", export_csv=False)
```

| **Parameters** |               Description                |
| :------------: | :--------------------------------------: |
|    property    |             Overlap settings             |
|    savepath    |    Save path of csv, defaults to "a"     |
|   export_csv   | Whether to export csv, defaults to False |

**Example:**

```python
beam_res = simu[simu_name].run_fde_beam_and_extract(
                property={
                    "define_gaussian_beam_by": "waist_size_and_position", # [waist_size_and_position,beam_size_and_divergence],
                    "waist_radius": 10, "distance_from_waist": 0, "refractive_index": 1,
                    "theta": 0, "phi": 0, "polarization_angle": 0,
                    "sample_span": 10, "sample_resolution": 200},
                savepath=plot_path + 'beam_heatmap')
            overlap_res = simu[simu_name].run_fde_overlap_and_extract(
                property={"add_global_mode": {"task_path": beam_res.task_path, "mode": 0}, "mode": 0, "optimize_position": True},
                export_csv=True,
                savepath=plot_path + 'overlap')
```



### 6.1.3 Bent Waveguide FDE simulation

Calculating the mode of a bent waveguide within the FDE module.

```python
simu = pj.Simulation()
    simu.add(name=simu_name, type='FDE',
             property={'general': {'solver_type': '2d_x_normal'},
                       'mesh_settings': {'global_mesh_uniform_grid': {'dy': grid, 'dz': grid}},
                       'fde_analysis': {
                           'modal_analysis': {
                               'calculate_modes': run_options.run, 'mesh_structure': True,
                               'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes, 'calculate_group_index': True,
                               'bent_waveguide': {'bent_waveguide': True, 'radius': 5.25, 'orientation': 0, 'location': 'simulation_center'}}}})
```



### 6.1.4 Far field

To compute the far-field pattern within the FDE module.

```python
simu = pj.Simulation()
simu.add(name=simu_name, type='FDE',
         property={'general': {'solver_type': '2d_z_normal'},
                   'mesh_settings': {'global_mesh_uniform_grid': {'dx': grid, 'dy': grid}},
                   'fde_analysis': {
                       'modal_analysis': {
                           'calculate_modes': run_options.run, 'mesh_structure': True,
                           'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes,
                           'far_field_settings': [{'calculate': run_options.run_far_field, 'mode_selection': 0, 'material_index': 3.7, 'farfield_filter': 0,
                                                   'projection_distance': 8000, 'points_in_x': 50, 'points_in_y': 50,
                                                   'farfield_x_span': 40, 'farfield_y_span': 40, 'farfield_x': 0, 'farfield_y': 0}]}}})
```



## 6.2 EME

Incorporate an EME solver into the current project using the code `type='EME'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["EME"],
            property: EmePostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name=simu_name, type="EME",
         property={"general": {"wavelength": wavelength, "use_wavelength_sweep": True},
                   "eme_setup": {
                       "cell_geometry": {
                           "energy_conservation": "make_passive",  # ["none","make_passive"]
                           "cell_group_definition": [
                               {"span": 2, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"},
                               {"span": 1, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"},
                               {"span": 200, "cell_number": 30, "number_of_modes": number_of_modes, "sc": "sub_cell"},
                               {"span": 3, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"}]}},
                   "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": grid, "dz": grid}},
                   "eme_analysis": {
                       "eme_propagate": run_options.run,
                       "propagation_sweep": {"propagation_sweep": run_options.run_length_sweep,
                                             "parameter": "group_span_3", "start": 50, "stop": 250, "number_of_points": 5},
                       "select_source": {"phase": 0, "select_mode": "TE"}}})
```

|                          Parameters                          |   Default    |  Type   |                   Notes                    |
| :----------------------------------------------------------: | :----------: | :-----: | :----------------------------------------: |
|                      general.wavelength                      |              |  float  |                                            |
|                  general.wavelength_offset                   |    0.002     |  float  |                                            |
|                 general.use_wavelength_sweep                 |    false     |  bool   |                                            |
|         eme_setup.cell_geometry.energy_conservation          | make_passive | string  |  Selections are ['none', 'make_passive'].  |
|            eme_setup.cell_geometry.display_cells             |    false     |  bool   |                                            |
|            eme_setup.cell_geometry.display_groups            |    false     |  bool   |                                            |
|     eme_setup.cell_geometry.[]cell_group_definition.span     |              |  float  |                                            |
| eme_setup.cell_geometry.[]cell_group_definition.cell_number  |              | integer |                                            |
| eme_setup.cell_geometry.[]cell_group_definition.number_of_modes |              | integer |                                            |
|      eme_setup.cell_geometry.[]cell_group_definition.sc      |     none     | string  | Selections are ['none', 'sub_cell', 'sc']. |
|    eme_setup.cell_geometry.[]cell_group_definition.search    |  max_index   | string  |  Selections are ['near_n', 'max_index'].   |
|      eme_setup.cell_geometry.[]cell_group_definition.n       |     1.0      |  float  |                                            |
|     transverse_mesh_setting.global_mesh_uniform_grid.dx      |     0.02     |  float  |                                            |
|     transverse_mesh_setting.global_mesh_uniform_grid.dy      |     0.02     |  float  |                                            |
|     transverse_mesh_setting.global_mesh_uniform_grid.dz      |     0.02     |  float  |                                            |
| transverse_mesh_setting.minimum_mesh_step_settings.min_mesh_step |    0.0001    |  float  |                                            |
|            advanced.eme_settings.max_stored_modes            |     1000     | integer |                                            |
|                    thread_settings.thread                    |      4       | integer |                                            |
|                  eme_analysis.eme_propagate                  |    false     |  bool   |                                            |
|             eme_analysis.periodicity.periodicity             |    false     |  bool   |                                            |
| eme_analysis.periodicity.[]periodic_group_definition.start_cell_group |              | integer |                                            |
| eme_analysis.periodicity.[]periodic_group_definition.end_cell_group |              | integer |                                            |
| eme_analysis.periodicity.[]periodic_group_definition.periods |              | integer |                                            |
|       eme_analysis.propagation_sweep.propagation_sweep       |    false     |  bool   |                                            |
|           eme_analysis.propagation_sweep.parameter           | group_span_1 | string  |                                            |
|             eme_analysis.propagation_sweep.start             |      0       |  float  |                                            |
|             eme_analysis.propagation_sweep.stop              |      1       |  float  |                                            |
|       eme_analysis.propagation_sweep.number_of_points        |      3       | integer |                                            |
|        eme_analysis.wavelength_sweep.wavelength_sweep        |    false     |  bool   |                                            |
|             eme_analysis.wavelength_sweep.start              |     1.5      |  float  |                                            |
|              eme_analysis.wavelength_sweep.stop              |     1.6      |  float  |                                            |
|  eme_analysis.wavelength_sweep.number_of_wavelength_points   |      3       | integer |                                            |
|               eme_analysis.select_source.phase               |      0       |  float  |                                            |
|            eme_analysis.select_source.select_mode            |              |         |                                            |



### 6.2.1 EME CellGroup Custom Setting

This section provides guidance on configuring a customized EME cell group according to your specifications.

```python
simu = pj.Simulation()
simu.add(name=simu_name, type="EME",
         property={"general": {"wavelength": wavelength, "use_wavelength_sweep": True},
                   "eme_setup": {"cell_geometry": {
                       "energy_conservation": "make_passive",
                       "cell_group_definition": [
                           {"span": 2.5, "cell_number": cell_number, "number_of_modes": 30, "sc": sc_method, "search": "max_index"},
                           {"span": 5.2, "cell_number": cell_number, "number_of_modes": 50, "sc": sc_method, "search": "max_index", "n": 1.5},
                           {"span": 2.5, "cell_number": cell_number, "number_of_modes": 30, "sc": sc_method, "search": "max_index"}]}},
                   "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": grid, "dz": grid}},
                   "eme_analysis": {
                       "eme_propagate": run_options.run,
                       "propagation_sweep": {"propagation_sweep": run_options.run_length_sweep,
                                             "parameter": "group_span_2", "start": 41, "stop": 61, "number_of_points": 11},
                       "wavelength_sweep": {"wavelength_sweep": run_options.run_wavelength_sweep,
                                            "start": wavelength - 0.05, "stop": wavelength + 0.05, "number_of_wavelength_points": 11},
                       "select_source": {"phase": 0, "select_mode": "TE"}}})
```



### 6.2.2 EME Periodic Structure

This section can guide you in configuring an EME periodic structure.

```python
simu = pj.Simulation()
simu.add(name=simu_name, type='EME',
         property={
             'general': {'wavelength': wavelength},
             'eme_setup': {'cell_geometry': {
                 'cell_group_definition': [
                     {'span': EME_marg, 'cell_number': 1, 'number_of_modes': 10, 'sc': 'none'},
                     {'span': wb, 'cell_number': 1, 'number_of_modes': 10, 'sc': 'none'},
                     {'span': ws, 'cell_number': 1, 'number_of_modes': 10, 'sc': 'none'},
                     {'span': EME_marg, 'cell_number': 1, 'number_of_modes': 10, 'sc': 'none'}]}},
             'transverse_mesh_setting': {'global_mesh_uniform_grid': {'dx':grid, 'dy': grid, 'dz': grid} },
             'eme_analysis': {
                 'eme_propagate': run_options.run,
                 'periodicity': {'periodicity': True,
                                 'periodic_group_definition': [{'start_cell_group': 1, 'end_cell_group': 2, 'periods': grating_periods}]}
             }})
```









## 6.3 FDTD

Incorporate an FDTD solver into the current project using the code `type='FDTD'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["FDTD"],
            property: FdtdPostProcess,
    ) 
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name=simu_name, type='FDTD',
     property={'general': {'simulation_time': 10000, },
               'mesh_settings': {'mesh_type': 'auto_non_uniform',
                                 'mesh_accuracy': {'cells_per_wavelength': grids_per_lambda},
                                 'minimum_mesh_step_settings': {'min_mesh_step': 1e-4}},
               # 'advanced_options': {'auto_shutoff': {'auto_shutoff_min': 1.00e-4, 'down_sample_time': 200}},
               # 'thread_setting': {'thread': 4}
               })
```

|                          Parameters                          |     Default      |  Type   |                      Notes                      |
| :----------------------------------------------------------: | :--------------: | :-----: | :---------------------------------------------: |
|              extra.fdtd_port_group.source_port               |                  | string  |                                                 |
|                      general.dimension                       |        3d        | string  |             Selections are ['3d'].              |
|           general.using_optical_path_estimate_time           |      false       |  bool   |                                                 |
|                   general.simulation_time                    |       1000       | integer |                                                 |
|                   mesh_settings.mesh_type                    | auto_non_uniform | string  | Selections are ['auto_non_uniform', 'uniform']. |
|       mesh_settings.mesh_accuracy.cells_per_wavelength       |        15        | integer |                                                 |
|             mesh_settings.mesh_step_settings.dx              |       0.1        |  float  |                                                 |
|             mesh_settings.mesh_step_settings.dy              |       0.1        |  float  |                                                 |
|             mesh_settings.mesh_step_settings.dz              |       0.1        |  float  |                                                 |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001      |  float  |                                                 |
|       advanced_options.auto_shutoff.use_early_shutoff        |       true       |  bool   |                                                 |
|        advanced_options.auto_shutoff.auto_shutoff_min        |      1.0e-4      |  float  |                                                 |
|        advanced_options.auto_shutoff.down_sample_time        |       100        |  float  |                                                 |
| advanced_options.live_slice_filed_display_settings.show_field |      false       |  bool   |                                                 |
| advanced_options.live_slice_filed_display_settings.select_field_section |   2d_z_normal    | string  | Selections are ['2d_y_normal', '2d_z_normal'].  |
| advanced_options.live_slice_filed_display_settings.select_component |        ex        | string  |       Selections are ['ex', 'ey', 'ez'].        |
| advanced_options.live_slice_filed_display_settings.time_interval |       200        |  float  |                                                 |
| advanced_options.live_slice_filed_display_settings.position  |        0         |  float  |                                                 |
|                    thread_setting.thread                     |                  |         |                                                 |



### 6.3.1 Far field

This section can assist you in computing the far-field pattern within the FDTD module.

```python
fdtd_res = simu[simu_name].run()
        ff_res = fdtd_res.calculate(
            monitor_name="through",
            property={"wavelength": 1.31,
                      "far_field_settings": {
                          "general": {"projection_direction": "forward", "material_index": 1, "far_field_filter": 0,
                                      "resolution": {"horizontal_points": 100, "vertical_points": 100}}}})
```





## 6.4 Sweep:FDTD/FDE/EME

Integrate a sweep module into the current project

```python
add(
            self,
            *,
            name: str,
            type: Literal["FDTD:sweep", "FDE:sweep", "EME:sweep"],
            property: AnyParameterSweepPostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(type='FDTD:sweep', name='FDTDSweep', property={
    'simulation_name': simu_name,
    'sweep_type': 'values',
    'parameters': [{
        'variable': gap,
        'values': [0.45, 0.55, 0.65],
    }],

    'result': [
        {'name': resultL[0], 'result': 'through', 'component': 'T'},
        {'name': resultL[1], 'result': 'cross', 'component': 'T'},
        {'name': resultL[2], 'result': 'through_me', 'component': 'T_forward'},
        {'name': resultL[3], 'result': 'cross_me', 'component': 'T_forward'}
    ]
})
```

A FDE sweep is provided in the subsequent code example.

```python
simu = pj.Simulation()
simu.add(type="FDE:sweep", name="FDESweep", property={
        "simulation_name": simu_name,
        "sweep_type": "values",
        "parameters": [{"variable": width, "values": [0.5, 0.7, 0.9]}],
        "result": [{"name": result[0], "component": "mode2:neff", "result": "FDE:Structure Sweep"},
                     {"name": result[1], "component": "mode1:neff", "result": "FDE:Structure Sweep"},
                     {"name": result[2], "component": "mode1:loss", "result": "FDE:Structure Sweep"},
                  ]
    })
```

An example of EME sweep is presented in the following code.

```python
simu = pj.Simulation()
simu.add(
    type='EME:sweep',
    name='EMESweep',
    property={
        'simulation_name': simu_name,
        'parameters': [
            {'variable': gap, 'number_of_points': 3, 'start': 0.45, 'stop': 0.65}
        ],
        # 'sweep_type': 'values',
        # 'parameters': [ { 'variable': gap, 'values': [0.45, 0.55, 0.65] } ],
        'result': [
            {'name': 'SMatrix', 'component': 'S', 'result': 'S-Matrix'}
        ]
    },
)
```

|          Parameters           | Default |  Type   |                Notes                 |
| :---------------------------: | :-----: | :-----: | :----------------------------------: |
|        simulation_name        |         | string  |                                      |
|          sweep_type           | ranges  | string  | Selections are ['ranges', 'values']. |
|     []parameters.variable     |         |  float  |                                      |
|      []parameters.start       |         |  float  |                                      |
|       []parameters.stop       |         |  float  |                                      |
| []parameters.number_of_points |         | integer |                                      |
|      []parameters.values      |         |  list   |                                      |
|         []result.name         |         | string  |                                      |
|        []result.result        |         | string  |                                      |
|      []result.component       |         | string  |                                      |




## 6.5 OEDevice

Incorporate an OEDevice(Optic Eletrical Devices) solver into the current project using the code `type='OEDevice'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["OEDevice"],
            property: OeDevicePostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name="preview_fdtd", type="AFDTD", property={
    "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": cells_per_wavelength}}})
simu.add(name="preview_oedevice", type="OEDevice", property={
    "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max},
    "genrate": {"genrate_path": "", "coordinate_unit": "m", "field_length_unit": "m", "source_fraction": source_fraction},
    "general": {"norm_length": normal_length, "solver_mode": "steady_state", "simulation_temperature": temperature},
    "advanced": {"non_linear_solver": "Newton", "linear_solver": "MUMPS", "max_iterations": 50}})
```

|                Parameters                |      Default      |  Type   |                            Notes                             |
| :--------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|        general.simulation_region         |   Device_Region   | string  |              Selections are ['Device_Region'].               |
|           general.norm_length            |         1         |  float  |                                                              |
|           general.solver_mode            |   steady_state    | string  |    Selections are ['steady_state', 'transient', 'SSAC'].     |
|      general.temperature_dependence      |    Isothermal     | string  |                Selections are ['Isothermal'].                |
|      general.simulation_temperature      |        300        |  float  |                                                              |
|        advanced.non_linear_solver        |      Newton       | string  |                  Selections are ['Newton'].                  |
|          advanced.linear_solver          |       MUMPS       | string  |          Selections are ['MUMPS', ' LU', ' BCGS'].           |
|         advanced.use_quasi_fermi         |     disabled      | string  |           Selections are ['disabled', ' enabled'].           |
|             advanced.damping             |       none        | string  |            Selections are ['none', ' potential'].            |
|        advanced.potential_update         |         1         | integer |                                                              |
|          advanced.multi_threads          | let_solver_choose | string  |  Selections are ['let_solver_choose', 'set_thread_count'].   |
|          advanced.thread_count           |         4         | integer |                                                              |
|         advanced.max_iterations          |        30         | integer |                                                              |
|    advanced.use_global_max_iterations    |       false       | integer |               Selections are ['false', 'true']               |
|     advanced.poisson_max_iterations      |        30         | integer |                                                              |
|       advanced.ddm_max_iterations        |        30         | integer |                                                              |
|       advanced.relative_tolerance        |      1.0e-5       |  float  |                                                              |
|         advanced.tolerance_relax         |      1.0e+5       |  float  |                                                              |
|        advanced.divergence_factor        |      1.0e+25      |  float  |                                                              |
|           genrate.genrate_path           |                   | string  |                                                              |
|         genrate.source_fraction          |                   |  float  |                                                              |
|         genrate.coordinate_unit          |         m         | string  |           Selections are ['m', 'cm', 'um', 'nm'].            |
|        genrate.field_length_unit         |         m         | string  |           Selections are ['m', 'cm', 'um', 'nm'].            |
|            geometry.dimension            |    2d_x_normal    | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|                geometry.x                |                   |  float  |                                                              |
|             geometry.x_span              |                   |  float  |                                                              |
|              geometry.x_min              |                   |  float  |                                                              |
|              geometry.x_max              |                   |  float  |                                                              |
|                geometry.y                |                   |  float  |                                                              |
|             geometry.y_span              |                   |  float  |                                                              |
|              geometry.y_min              |                   |  float  |                                                              |
|              geometry.y_max              |                   |  float  |                                                              |
|                geometry.z                |                   |  float  |                                                              |
|             geometry.z_span              |                   |  float  |                                                              |
|              geometry.z_min              |                   |  float  |                                                              |
|              geometry.z_max              |                   |  float  |                                                              |
|  small_signal_ac.perturbation_amplitude  |       0.001       |  float  |                                                              |
|    small_signal_ac.frequency_spacing     |      single       | string  |         Selections are ['single', 'linear', 'log'].          |
|        small_signal_ac.frequency         |      1.0e+6       |  float  |                                                              |
|     small_signal_ac.start_frequency      |      1.0e+06      |  float  |                                                              |
|      small_signal_ac.stop_frequency      |      1.0e+09      |  float  |                                                              |
|    small_signal_ac.frequency_interval    |    9.9999e+10     |  float  |                                                              |
|   small_signal_ac.num_frequency_points   |         2         | integer |                                                              |
|   small_signal_ac.log_start_frequency    |      1.0e+06      |  float  |                                                              |
|    small_signal_ac.log_stop_frequency    |      1.0e+10      |  float  |                                                              |
| small_signal_ac.log_num_frequency_points |         2         | integer |                                                              |

## 6.6 AFDTD

Incorporate an AFDTD(Active Finite-Difference Time-Domain) solver into the current project using the code `type='AFDTD'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["AFDTD"],
            property: FdtdPostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name="preview_fdtd", type="AFDTD", property={
    "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": cells_per_wavelength}}})
```

|                          Parameters                          |     Default      |  Type   |                      Notes                      |
| :----------------------------------------------------------: | :--------------: | :-----: | :---------------------------------------------: |
|              extra.fdtd_port_group.source_port               |                  | string  |                                                 |
|                      general.dimension                       |        3d        | string  |             Selections are ['3d'].              |
|           general.using_optical_path_estimate_time           |      false       |  bool   |                                                 |
|                   general.simulation_time                    |       1000       | integer |                                                 |
|                   mesh_settings.mesh_type                    | auto_non_uniform | string  | Selections are ['auto_non_uniform', 'uniform']. |
|       mesh_settings.mesh_accuracy.cells_per_wavelength       |        15        | integer |                                                 |
|             mesh_settings.mesh_step_settings.dx              |       0.1        |  float  |                                                 |
|             mesh_settings.mesh_step_settings.dy              |       0.1        |  float  |                                                 |
|             mesh_settings.mesh_step_settings.dz              |       0.1        |  float  |                                                 |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001      |  float  |                                                 |
|       advanced_options.auto_shutoff.use_early_shutoff        |       true       |  bool   |                                                 |
|        advanced_options.auto_shutoff.auto_shutoff_min        |      1.0e-4      |  float  |                                                 |
|        advanced_options.auto_shutoff.down_sample_time        |       100        |  float  |                                                 |
| advanced_options.live_slice_filed_display_settings.show_field |      false       |  bool   |                                                 |
| advanced_options.live_slice_filed_display_settings.select_field_section |   2d_z_normal    | string  | Selections are ['2d_y_normal', '2d_z_normal'].  |
| advanced_options.live_slice_filed_display_settings.select_component |        ex        | string  |       Selections are ['ex', 'ey', 'ez'].        |
| advanced_options.live_slice_filed_display_settings.time_interval |       200        |  float  |                                                 |
| advanced_options.live_slice_filed_display_settings.position  |        0         |  float  |                                                 |
|                    thread_setting.thread                     |        4         | integer |                                                 |


（解释各个标题，以及将OED放在最前面，AFDE属于OED）
## 6.7 AFDE

Integrate an AFDE(Active Finite Difference Eigenmode) solver into the current project using the code `type='AFDE'`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["AFDE"],
            property: AfdePostProcess,
    )
```

**Example:**

```python
simu = pj.Simulation()
simu.add(name="preview_fde", type="AFDE", property={
    "mesh_settings": {"global_mesh_uniform_grid": {"dy": ogrid_global_y, "dz": ogrid_global_z}},
    "fde_analysis": {"modal_analysis": {"calculate_modes": False, "mesh_structure": False, "wavelength": wavelength},
                     "modulator_analysis": {"modulator_analysis": True, "wavelength": wavelength, "np_path": ""}},
    "other": {**Si_index_vs_doping}})
```

|                          Parameters                          |      Default      |  Type   |                            Notes                             |
| :----------------------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|                     general.solver_type                      |    2d_x_normal    | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
|          mesh_settings.global_mesh_uniform_grid.dx           |       0.02        |  float  |                                                              |
|          mesh_settings.global_mesh_uniform_grid.dy           |       0.02        |  float  |                                                              |
|          mesh_settings.global_mesh_uniform_grid.dz           |       0.02        |  float  |                                                              |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001       |  float  |                                                              |
|                    thread_setting.thread                     |         4         | integer |                                                              |
|          fde_analysis.modal_analysis.mesh_structure          |       false       |  bool   |                                                              |
|         fde_analysis.modal_analysis.calculate_modes          |       false       |  bool   |                                                              |
|  fde_analysis.modal_analysis.[]far_field_settings.calculate  |       true        |  bool   |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.mode_selection |                   | integer |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.projection_method |      planar       | string  |                  Selections are ['planar'].                  |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_filter |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.material_index |        1.4        |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.projection_distance |      4430.65      |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_x |        50         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_y |        50         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x  |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x_span |      26.1834      |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y  |         0         |  float  |                                                              |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y_span |      18.1231      |  float  |                                                              |
|            fde_analysis.modal_analysis.wavelength            |       1.55        |  float  |                                                              |
|        fde_analysis.modal_analysis.wavelength_offset         |       0.002       |  float  |                                                              |
|      fde_analysis.modal_analysis.number_of_trial_modes       |         5         | integer |                                                              |
|              fde_analysis.modal_analysis.search              |     max_index     | string  |           Selections are ['near_n', 'max_index'].            |
|                fde_analysis.modal_analysis.n                 |         1         |  float  |                                                              |
|      fde_analysis.modal_analysis.calculate_group_index       |       false       |  bool   |                                                              |
|  fde_analysis.modal_analysis.bent_waveguide.bent_waveguide   |       false       |  bool   |                                                              |
|      fde_analysis.modal_analysis.bent_waveguide.radius       |        0.0        |  float  |                                                              |
|    fde_analysis.modal_analysis.bent_waveguide.orientation    |        0.0        |  float  |                                                              |
|     fde_analysis.modal_analysis.bent_waveguide.location      | simulation_center | string  |            Selections are ['simulation_center'].             |
|      fde_analysis.modal_analysis.mode_removal.threshold      |                   |  float  |                                                              |
|      fde_analysis.frequency_analysis.frequency_analysis      |       false       |  bool   |                                                              |
|       fde_analysis.frequency_analysis.start_wavelength       |       1.55        |  float  |                                                              |
|       fde_analysis.frequency_analysis.stop_wavelength        |      1.49896      |  float  |                                                              |
|       fde_analysis.frequency_analysis.number_of_points       |        10         | integer |                                                              |
|       fde_analysis.frequency_analysis.effective_index        |        1.0        |  float  |                                                              |
| fde_analysis.frequency_analysis.detailed_dispersion_calculation |       false       |  bool   |                                                              |


