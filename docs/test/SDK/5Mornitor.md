
# Monitor

<font face = "Calibri">

<div class="text-justify">

This section provides guidance on adding a monitor to your simulation project. We offer a variety of monitors designed to enhance your ability to gather simulation data. The subsequent content will be presented below, offering an introduction to each monitor.

Type of the monitor, Selections are ['index_monitor', 'time_monitor', 'power_monitor', 'profile_monitor', 'global_option']


## 5.1 Index Monitor

```python
add(
        name: str,
        typename: Optional[str],
        property: dict,
    ):
```

| title           | type   | default   | description                                                                  |
|:----------------|:-------|:----------|:-----------------------------------------------------------------------------|
| monitor_type    | string | -          | Selections are ['2d_x_normal','2d_y_normal','2d_z_normal']                   |
| geometry.x      | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_span | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_min  | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_max  | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y      | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_span | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_min  | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_max  | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z      | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_span | number |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_min  | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_max  | number | -          | A float, or a parameter, or a parameter expression that evaluates to a float |

**Example:**
The following script add a 2D index monitor and set its dimension and position.

```python
mn = Project.Monitor()
mn.add(name="x_normal_index", type="index_monitor",
        property={"geometry": {"monitor_type": "2d_x_normal","x": 0, "x_span": 0, "y": 0, "y_span": 3, "z": 0, "z_span": 6}
                    })
```

## 5.2 Time monitor


# TimeMonitor

| title                                              | type    | default           | description                                                                                                                 |
|:---------------------------------------------------|:--------|:------------------|:----------------------------------------------------------------------------------------------------------------------------|
| general.stop_method                                | string  | end_of_simulation | Selections are ['end_of_simulation', 'choose_stop_time', 'choose_number_of_snapshots']                                      |
| general.start_time                                 | number  | 0                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.stop_time                                  | number  | 1000             | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.number_of_snapshots                        | integer | 0                 |                                                                                                                             |
| geometry.monitor_type                              | string  | -                  | Selections are ['point', '2d_x_normal','2d_y_normal','2d_z_normal', 'x_linear', 'y_linear', 'z_linear', '3d']               |
| geometry.x                                         | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y                                         | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z                                         | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_span                                    | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_min                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_max                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_span                                    | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_min                                     | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_max                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_span                                    | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_min                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_max                                     | number  |  -                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| data_to_record.fields.output_ex                    | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_ey                    | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_ez                    | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hx                    | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hy                    | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hz                    | boolean | True              |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_px | boolean | False             |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_py | boolean | False             |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_pz | boolean | False             |                                                                                                                             |
| advanced.sampling_rate.min_sampling_per_cycle      | integer | 10                |            

**Example:**

```python
mn = pj.Monitor()
mn.add(name='time_monitor1', type='time_monitor',
           property={'general': {
               'stop_method': 'end_of_simulation', 'start_time': 0, 'stop_time': 100, 'number_of_snapshots': 10},
               'geometry': {'monitor_type': 'point', 'x': 0, 'x_span': 0, 'y': 0, 'y_span': 0, 'z': 0, 'z_span': 0},
               'advanced': {'sampling_rate': {'min_sampling_per_cycle': 10}}})
```

## 5.3 Power monitor

As demonstrated in the following code, add a power monitor to the current project.



# PowerMonitor
| title                                                               | type    | default           | description                                                                                                                 |
|:--------------------------------------------------------------------|:--------|:------------------|:----------------------------------------------------------------------------------------------------------------------------|
| geometry.monitor_type                                               | string  |  -                 | Selections are ['point', '2d_x_normal','2d_y_normal','2d_z_normal', 'x_linear', 'y_linear', 'z_linear', 'three_dimensional']               |                                                                            |
| geometry.x                                                          | number  |  -                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y                                                          | number  |  -                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z                                                          | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_span                                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_min                                                      | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.z_max                                                      | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_span                                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_min                                                      | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.x_max                                                      | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_span                                                     | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_min                                                      | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| geometry.y_max                                                      | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.override_global_options                                     | boolean | False             |                                                                                                                             |
| general.frequency_profile.sample_spacing                            | integer | 0                 |                                                                                                                             |
| general.frequency_profile.use_wavelength_spacing                    | boolean | True              |                                                                                                                             |
| general.frequency_profile.use_source_limits                         | boolean | False             |                                                                                                                             |
| general.frequency_profile.spacing_type                              | string  | wavelength        | Selections are ['wavelength', 'frequency']                                                                                  |
| general.frequency_profile.spacing_limit                             | string  | min_max           | Selections are ['min_max', 'center_span']                                                                                   |
| general.frequency_profile.wavelength_min                            | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.wavelength_max                            | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.wavelength_center                         | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.wavelength_span                           | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.frequency_min                             | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.frequency_max                             | number  | -                  | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.frequency_center                          | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.frequency_span                            | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| general.frequency_profile.frequency_points                          | integer | 5                 |                                                                                                                             |
| data_to_record.fields.output_ex                                     | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_ey                                     | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_ez                                     | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hx                                     | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hy                                     | boolean | True              |                                                                                                                             |
| data_to_record.fields.output_hz                                     | boolean | True              |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_px                  | boolean | False             |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_py                  | boolean | False             |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_pz                  | boolean | False             |                                                                                                                             |
| data_to_record.poynting_vector_and_power.output_power               | boolean | True              |                                                                                                                             |
| advanced.sampling_frequency.min_sampling_per_cycle                  | integer | 2                 |                                                                                                                             |
| preview_index_and_modes.wavelength                                  | number  | 1.55              |                                                                                                                             |
| preview_index_and_modes.bent_waveguide.bent_waveguide               | boolean | False             |                                                                                                                             |
| preview_index_and_modes.bent_waveguide.radius                       | number  | 1                 |                                                                                                                             |
| preview_index_and_modes.bent_waveguide.orientation                  | number  | 0                 |                                                                                                                             |
| preview_index_and_modes.bent_waveguide.location                     | string  | simulation_center | Selections are ['simulation_center']                                                                                        |
| preview_index_and_modes.boundary_conditions.x_max_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.x_min_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.y_max_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.y_min_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.z_max_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.z_min_bc                | string  | PEC               | Selections are ['PEC','PMC', 'PML', 'periodic']                                                                             |
| preview_index_and_modes.boundary_conditions.pml_settings.kappa      | number  | 2                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| preview_index_and_modes.boundary_conditions.pml_settings.sigma      | number  | 5                 | A float, or a parameter, or a parameter expression that evaluates to a float                                                |
| preview_index_and_modes.boundary_conditions.pml_settings.layers     | integer | 12                |                                                                                                                             |
| preview_index_and_modes.boundary_conditions.pml_settings.polynomial | integer | 3                 |                                                                                                                             |
| preview_index_and_modes.mode_removal.threshold                      | number  | -                  |                                                                                                                             |
| preview_index_and_modes.mode_index                                  | integer | 0                 |                                                                                                                             |
| preview_index_and_modes.search                                      | string  | max_index         |                                                                                                                             |
| preview_index_and_modes.n                                           | number  | 1.0               |                                                                                                                             |
| preview_index_and_modes.number_of_trial_modes                       | integer | 20                |                                                                                                                             |
| preview_index_and_modes.calculate_group_index                       | boolean | False             |                                                                                                                             |


```python
mn = Project.Monitor()
mn.add(name="z_normal", type="power_monitor",
        property={"geometry": {"monitor_type": "2d_z_normal","x": 0, "x_span": 5, "y": 0, "y_span": 5, "z": 0, "z_span": 0}})
```

## 5.4 Profile monitor

Incorporate a profile monitor into the current project. The profile monitor is solely used for the EME simulation.


# ProfileMonitor

| title                 | type    | default   | description                                                                  |
|:----------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| geometry.monitor_type | string  |-           | Selections are ['2d_x_normal','2d_y_normal','2d_z_normal']                   |
| geometry.x            | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y            | number  |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z            | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_span       | number  |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_min        | number  |-          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_max        | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_span       | number  |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_min        | number  |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_max        | number  |-           | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_span       | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_min        | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_max        | number  | -          | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_resolution | integer | 100       |   The resolution of output simulation results of profile monitor.        |

**Example:**

```python
mn = pj.Monitor()
mn.add(name="y_normal", type="profile_monitor",
       property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,
                              "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0, "z_span": 7}})
```

## 5.5 Global monitor/Global option

# GlobalMonitor

| title                                   | type    | default        | description                                                                  |
|:----------------------------------------|:--------|:---------------|:-----------------------------------------------------------------------------|
| frequency_power.sample_spacing          | integer | 0              |  Set the type of frequency interval for the frequency monitor. Selections are ['uniform'].  |
| frequency_power.use_wavelength_spacing  | boolean | True           |                                                                              |
| frequency_power.use_source_limits       | boolean | False          |                                                                              |
| frequency_power.spacing_type            | string  | wavelength     | Selections are ['wavelength', 'frequency']                                   |
| frequency_power.spacing_limit           | string  | min_max        | Selections are ['min_max', 'center_span']                                    |
| frequency_power.wavelength_min          | number  | -               | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.wavelength_max          | number  | -               | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.wavelength_center       | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.wavelength_span         | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.frequency_min           | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.frequency_max           | number  | -               | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.frequency_center        | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.frequency_span          | number  | -               | A float, or a parameter, or a parameter expression that evaluates to a float |
| frequency_power.frequency_points        | integer | 5              |                                                                              |
| advanced.min_sampling_per_cycle         | integer | 2              |                                                                              |

**Example:**

```python
mn = pj.Monitor()
mn.add(name='Global Option', type='global_option',
       property={'frequency_power': {  # 'sample_spacing': 'uniform', 'use_wavelength_spacing': True,
           # ['min_max','center_span']
           'spacing_type': 'wavelength', 'spacing_limit': 'center_span',
           'wavelength_center': 1.5, 'wavelength_span': 0.1, 'frequency_points': 11}})
```





## 5.5 Band monitor

Integrate a band monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["band_monitor"],
            name: str,
            property: PostProcessBandMonitor,
    )
```

| **Parameters** |      Description       |
| :------------: | :--------------------: |
|      name      |    The name of band monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of band monitor. |

**Example:**

```python
mn = pj.Monitor()   
mn.add(name="band_line", type="band_monitor", property={
    "geometry": {"monitor_type": "linear_z", "x": oe_x_mean, "x_span": 0, "y_min": 0, "y_max": 0, "z_min": oe_z_min, "z_max": oe_z_max,
                 "interpolate_accuracy": 9}})
# endregion
```

|        **Parameters**         | Default |  Type   |                        Notes                         |
| :---------------------------: | :-----: | :-----: | :--------------------------------------------------: |
|       general.record_ec       |  true   | bool   |   The conduction band edge energy at 300K.                                                    |
|       general.record_ev       |  true   |  bool   |  The valance band edge energy at 300K.                                                    |
|       general.record_ei       |  true   |bool   |   The fermi level for intrinsic doped material.                                                   |
|      general.record_efn       |  true   |  bool   |   The electron quasi-Fermi energy.                                                   |
|      general.record_efp       |  true   |  bool   |  The hole quasi-Fermi energy.                                                    |
|      general.record_evac      |  true   |  bool   |                                                      |
|     geometry.monitor_type     |         | string  | Set the dimension type of the monitor. For electrical monitors, only 1D type and 2D type are available currently. Selections are ['linear_x', 'linear_y', 'linear_z']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the band monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the band monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the band monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the band monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the band monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the band monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the band monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the band monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the band monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the band monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the band monitor.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the band monitor.     |
| geometry.interpolate_accuracy |    1    | integer |  Set the accuracy of the rectangular grid for extracting the monitor result.  Restrained by condition: >=1 && <= 10. Here 1 means the grid size is 10nm, and 10 means the grid size is 1nm, and the grid size varies uniformly with the variation in 'interpolate_accuracy'.         |




## 5.6 Charge monitor

Incorporate a charge monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["charge_monitor"],
            name: str,
            property: PostProcessChargeMonitor,
    )
```

| **Parameters** |      Description       |
| :------------: | :--------------------: |
|      name      |    The name of charge monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of charge monitor. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name="np_line_080nm", type="charge_monitor", property={
       "geometry": {"monitor_type": "linear_y", "x": st_x_mean, "x_span": st_x_span, "y_min": -0.4, "y_max": 0.4, "z": 0.08, "z_span": 0,
                      "interpolate_accuracy": 9}})
```

|         **Parameters**         | Default |  Type   |                            Notes                             |
| :----------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|    general.record_electrons    |  true   |  bool   | The distribution of electron concentration in monitor. |
|      general.record_holes      |  true   |  bool   |  The distribution of hole concentration in monitor.     |
| general.integrate_total_charge |  true   |  bool   | Available when monitor_type is in ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.monitor_type      |         | string  | Selections are ['linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the charge monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the charge monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the charge monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the charge monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the charge monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the charge monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the charge monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the charge monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the charge monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the charge monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the charge monitor.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the charge monitor.     |
| geometry.interpolate_accuracy  |    1    | integer |            Restrained by condition: >=1 && <= 10.            |



## 5.7 Electric monitor

Integrate an electric monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["electric_monitor"],
            name: str,
            property: PostProcessElectricMonitor,
    )
```

| **Parameters** |    Description     |
| :------------: | :----------------: |
|      name      |    The name of electric monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of electric monitor. |

**Example:**

```python
 mn = pj.Monitor()
 mn.add(name="electric_2d", type="electric_monitor", property={
        "geometry": {"monitor_type": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y_min": -Ge_y_span_bottom*3/4, "y_max": Ge_y_span_bottom*3/4, "z_min": 0, "z_max": Si_z_span+Ge_z_span,
                     "interpolate_accuracy": 6}})
```

|             **Parameters**             | Default |  Type   |                            Notes                             |
| :------------------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|     general.record_electrics_field     |  true   |  bool   | The distribution of electric field in monitor.       |
| general.record_electrostatic_potential |  true   |  bool   |  The distribution of electric potential in monitor.        |
|      general.calculate_net_charge      |  true   |  bool   | Available when monitor_type is in ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|         geometry.monitor_type          |         | string  | Selections are ['linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the electric monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the electric monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the electric monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the electric monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the electric monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the electric monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the electric monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the electric monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the electric monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the electric monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the electric monitor.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the electric monitor.     |
|     geometry.interpolate_accuracy      |    1    | integer |            Restrained by condition: >=1 && <= 10.            |

</div>

</font>