
# Monitor

This section provides guidance on adding a monitor to your simulation project. We offer a variety of monitors designed to enhance your ability to gather simulation data. The subsequent content will be presented below, offering an introduction to each monitor.

## 5.1 Profile monitor

Incorporate a profile monitor into the current project. The profile monitor is solely used for the EME simulation.

```python
add(
            self,
            *,
            type: Literal["profile_monitor"],
            name: str,
            property: PostProcessProfileMonitor,
    )
```

| **Parameters** |        Description        |
| :------------: | :-----------------------: |
|      name      |    The name of profile monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of profile monitor. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name="y_normal", type="profile_monitor",
       property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,
                              "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0.5, "z_span": 7}})
```

|    **Parameters**     | Default |  Type   |                            Notes                             |
| :-------------------: | :-----: | :-----: | :----------------------------------------------------------: |
| geometry.monitor_type |   -    | string  | Select the profile monitor type and the orientation.Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
| geometry.x_resolution |   100   | integer |      The resolution of output simulation results in profile monitor.                   |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the profile monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the profile monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the profile monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the profile monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the profile monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the profile monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the profile monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the profile monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the profile monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the profile monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the profile monitor.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the profile monitor.     |


## 5.2 Global monitor/Global option

Integrate a global monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["global_monitor", "global_option"],
            name: str,
            property: PostProcessGlobalMonitor,
    )
```

| **Parameters** |       Description        |
| :------------: | :----------------------: |
|      name      |    The name of global monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of global monitor. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name='Global Option', type='global_option',
       property={'frequency_power': {  # 'sample_spacing': 'uniform', 'use_wavelength_spacing': True,
           # ['min_max','center_span']
           'spacing_type': 'wavelength', 'spacing_limit': 'center_span',
           'wavelength_center': wavelength, 'wavelength_span': 0.1, 'frequency_points': 11}})
```

|             **Parameters**             |  Default   |  Type   |                    Notes                    |
| :------------------------------------: | :--------: | :-----: | :-----------------------------------------: |
|     frequency_power.sample_spacing     |  uniform   | string  |         Set the type of frequency interval for the frequency monitor. Selections are ['uniform'].         |
| frequency_power.use_wavelength_spacing |    true    |  bool   |   Select whether to use wavelength as a variable for result output.     |
|      frequency_power.spacing_type      | wavelength | string  |   The different spacing type for result output. Selections are ['wavelength', 'frequency']. |
|     frequency_power.spacing_limit      |  min_max   | string  | Select the way to set wavelength interval or frequency interval.Selections are ['min_max', 'center_span'].  |
|     frequency_power.wavelength_min     |    -      |  float  |        Set the minimum value of the wavelength range.                                     |
|     frequency_power.wavelength_max     |     -       |  float  | Set the maximum value of the wavelength range.   |
|   frequency_power.wavelength_center    |     -       |  float  |       Set the center wavelength.    |
|    frequency_power.wavelength_span     |     -       |  float  |  Set the wavelength span.      |
|     frequency_power.frequency_min      |      -      |  float  |   Set the minimum value of the frequency range.         |
|     frequency_power.frequency_max      |     -       |  float  |     Set the maximum value of the frequency range.       |
|    frequency_power.frequency_center    |     -       |  float  |       Set the center value of the frequency range.            |
|     frequency_power.frequency_span     |      -     |  float  |   Set the frequency span.           |
|    frequency_power.frequency_points    |     5      | integer |   Set the number of points in the frequency range or wavelength range.    |
|    advanced.min_sampling_per_cycle     |     2      | integer |         Set the minimum sampling number of points within the optical cycle.          |



## 5.3 Time monitor

Incorporate a time monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["time_monitor"],
            name: str,
            property: PostProcessTimeMonitor,
    )
```

| **Parameters** |      Description       |
| :------------: | :--------------------: |
|      name      |    The name of time monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of time monitor. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name='time_monitor1', type='time_monitor',
           property={'general': {
               'stop_method': 'end_of_simulation', 'start_time': 0, 'stop_time': 100, 'number_of_snapshots': 0},
               'geometry': {'monitor_type': 'point', 'x': 0, 'x_span': 0, 'y': 0, 'y_span': 0, 'z': 0, 'z_span': 0},
               'advanced': {'sampling_rate': {'min_sampling_per_cycle': 10}}})
```

|                **Parameters**                 |      Default      |  Type   |                            Notes                             |
| :-------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|              general.stop_method              | end_of_simulation | string  | Set the method to stop data collection for the time monitor. Selections are ['end_of_simulation', 'choose_stop_time', 'choose_number_of_snapshots']. |
|              general.start_time               |         0         |  float  |          The start time for data collection by the time monitor.                |
|               general.stop_time               |       1000        |  float  |    The stop time for data collection by the time monitor.      |
|          general.number_of_snapshots          |         0         | integer |           The number of time snapshots for data collection.                             |
|             geometry.monitor_type             |                   | string  | The type and orientation of the time monitor. Selections are ['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the time monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the time monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the time monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the time monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the time monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the time monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the time monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the time monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the time monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the time monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The bottom position of the height of the time monitor in z direction.      |
|   geometry.z_max    |      -   |  float   |  The top position of the height of the time monitor in z direction.      |
| advanced.sampling_rate.min_sampling_per_cycle |        10         | integer |    Set the minimum sampling number of points within the optical cycle.                   |



## 5.4 Power monitor 

Incorporate a power monitor into the current project. Additionally, you can utilize the `'mode_expansion'` to compute the mode expansion associated with its corresponding relative power monitor.

```python
add(
            self,
            *,
            type: Literal["power_monitor"],
            name: str,
            property: PostProcessPowerMonitor,
    )
```

| **Parameters** |    Description    |
| :------------: | :---------------: |
|      name      |    The name of power monitor defined in the project.   |
|      type      |       To decide the type of monitor.       |
|    property    | The property of power monitor. |

### 5.4.1 Power monitor

As demonstrated in the following code, add a power monitor to the current project.

```python
mn = pj.Monitor()
mn.add(name="z_normal", type="power_monitor",
        property={"geometry": {"monitor_type": "2d_z_normal","x": 0, "x_span": 2*(l_input+l_bend+l_beam/2-0.5), "y": 0, "y_span": 5, "z": 0.11, "z_span": 0}})
```

### 5.4.2 Mode expansion

As demonstrated code below, add a mode expansion for the related power monitor.

```python
mn.add(name='through', type='power_monitor',
           property={'general': {'frequency_profile': {'wavelength_center': wavelength, 'wavelength_span': 0.1,
                                                       'frequency_points': 11}, },
                     'geometry': {'monitor_type': '2d_x_normal',
                                  'x': ports['op_1']['position'][0], 'x_span': 0, 'y': ports['op_1']['position'][1],
                                  'y_span': monitor_w, 'z': 0, 'z_span': monitor_h},
                     'mode_expansion': {"enable": True, 'direction': 'positive',
                                        'mode_calculation': {
                                            'mode_selection': 'user_select', 'mode_index': [0, 1, 2, 3],
                                            'override_global_monitor_setting': {'wavelength_center': wavelength, 'wavelength_span': 0.1, 'frequency_points': 11}}}})
```

|                        **Parameters**                        |      Default      |  Type   |                            Notes                             |
| :----------------------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|                    geometry.monitor_type                     |         -          | string  | The type and orientation of the power monitor. Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the power monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the power monitor. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the power monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the power monitor.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the power monitor.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the power monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the power monitor.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the power monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the power monitor.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the power monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The bottom position of the height of the power monitor in z direction.      |
|   geometry.z_max    |      -   |  float   |  The top position of the height of the power monitor in z direction.      |
|                geometry.rotate_settings.theta                |         0         |  float  |              The rotation angle theta of the power monitor. Restrained by condition: >-90,<90.              |
|                 geometry.rotate_settings.phi                 |         0         |  float  |              The rotation angle phi of the power monitor. Restrained by condition: >=0,<=360.              |
|           geometry.rotate_settings.rotation_offset           |         0         |  float  |           The rotation offset of the power monitor.Restrained by condition: >=-1e30,<=1e30.           |


|                        **Parameters**                        |      Default      |  Type   |                            Notes                             |
| :----------------------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|         mode_expansion.[]monitors_for_expansion.name         |          -         | string  |        The name of the power monitor required for individual mode expansion when called separately.              |
|  mode_expansion.[]monitors_for_expansion.frequency_monitor   |          -         | string  |             The name of the frequency monitor required for individual mode expansion when called separately.                     |
|                   mode_expansion.direction                   |     positive      | string  |           Set the direction of the mode expansion. Selections are ['positive', 'negative'].           |
|        mode_expansion.mode_calculation.mode_selection        |          -         | string  | Decide the mode for mode expansion calculation. Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']. |
|          mode_expansion.mode_calculation.mode_index          |         -          |  list   |   Under the 'user_select' condition, use this parameter to decide the related number of source mode.                 |
|            mode_expansion.mode_calculation.search            |     max_index     | string  |           Calculate the mode based on the maximum refractive index or user defined refractive index in the structure. Selections are ['near_n', 'max_index'].            |
|              mode_expansion.mode_calculation.n               |        1.0        |  float  |   Under the 'near_n' condition, use this value of refractive index to search the mode.                               |
|    mode_expansion.mode_calculation.number_of_trial_modes     |        20         | integer |  When calculating modes, determine the calculated number of modes around the refractive index.                   |
|   mode_expansion.mode_calculation.override_global_options    |       false       |  bool   |            Decide whether to override the global monitor settings.                                                 |
|     mode_expansion.mode_calculation.override_global_monitor_setting.sample_spacing     |  uniform   | string  |         Set the type of frequency interval. Selections are ['uniform'].         |
| mode_expansion.mode_calculation.override_global_monitor_setting.use_wavelength_spacing |    true    |  bool   |   Select whether to use wavelength as a variable for result output.     |
|      mode_expansion.mode_calculation.override_global_monitor_setting.spacing_type      | wavelength | string  |   The different spacing type for result output. Selections are ['wavelength', 'frequency']. |
|     mode_expansion.mode_calculation.override_global_monitor_setting.spacing_limit      |  min_max   | string  | Select the way to set wavelength interval or frequency interval.Selections are ['min_max', 'center_span'].  |
|     mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_min     |    -      |  float  |        Set the minimum value of the wavelength range.                                     |
|     mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_max     |     -       |  float  | Set the maximum value of the wavelength range.   |
|   mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_center    |     -       |  float  |       Set the center wavelength.    |
|    mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_span     |     -       |  float  |  Set the wavelength span.      |
|     mode_expansion.mode_calculation.override_global_monitor_setting.frequency_min      |      -      |  float  |   Set the minimum value of the frequency range.         |
|     mode_expansion.mode_calculation.override_global_monitor_setting.frequency_max      |     -       |  float  |     Set the maximum value of the frequency range.       |
|    mode_expansion.mode_calculation.override_global_monitor_setting.frequency_center    |     -       |  float  |       Set the center value of the frequency range.            |
|     mode_expansion.mode_calculation.override_global_monitor_setting.frequency_span     |      -     |  float  |   Set the frequency span.           |
|    mode_expansion.mode_calculation.override_global_monitor_setting.frequency_points    |     -      | integer |   Set the number of points in the frequency range or wavelength range.    |
|  mode_expansion.mode_calculation.bent_waveguide.bent_waveguide  |       false       |  bool   |      Select whether to calculate modes in curved waveguides.          |
|      mode_expansion.mode_calculation.bent_waveguide.radius      |         1         |  float  |    Set the waveguide radius for curved waveguides.             |
|    mode_expansion.mode_calculation.bent_waveguide.orientation   |        20         |  float  |       Bent direction of the waveguide.         |
|     mode_expansion.mode_calculation.bent_waveguide.location     | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ['simulation_center'].             |




## 5.6 Band monitor

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
|          geometry.x           |         |  float  |                                                      |
|        geometry.x_span        |         |  float  |            Restrained by condition: >=0.             |
|        geometry.x_min         |         |  float  |                                                      |
|        geometry.x_max         |         |  float  |                                                      |
|          geometry.y           |         |  float  |                                                      |
|        geometry.y_span        |         |  float  |            Restrained by condition: >=0.             |
|        geometry.y_min         |         |  float  |                                                      |
|        geometry.y_max         |         |  float  |                                                      |
|          geometry.z           |         |  float  |                                                      |
|        geometry.z_span        |         |  float  |            Restrained by condition: >=0.             |
|        geometry.z_min         |         |  float  |                                                      |
|        geometry.z_max         |         |  float  |                                                      |
| geometry.interpolate_accuracy |    1    | integer |  Set the accuracy of the rectangular grid for extracting the monitor result.  Restrained by condition: >=1 && <= 10. Here 1 means the grid size is 10nm, and 10 means the grid size is 1nm, and the grid size varies uniformly with the variation in 'interpolate_accuracy'.         |

## 5.7 Charge monitor

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
|           geometry.x           |         |  float  |                                                              |
|        geometry.x_span         |         |  float  |                Restrained by condition: >=0.                 |
|         geometry.x_min         |         |  float  |                                                              |
|         geometry.x_max         |         |  float  |                                                              |
|           geometry.y           |         |  float  |                                                              |
|        geometry.y_span         |         |  float  |                Restrained by condition: >=0.                 |
|         geometry.y_min         |         |  float  |                                                              |
|         geometry.y_max         |         |  float  |                                                              |
|           geometry.z           |         |  float  |                                                              |
|        geometry.z_span         |         |  float  |                Restrained by condition: >=0.                 |
|         geometry.z_min         |         |  float  |                                                              |
|         geometry.z_max         |         |  float  |                                                              |
| geometry.interpolate_accuracy  |    1    | integer |            Restrained by condition: >=1 && <= 10.            |



## 5.8 Electric monitor

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
|               geometry.x               |         |  float  |                                                              |
|            geometry.x_span             |         |  float  |                Restrained by condition: >=0.                 |
|             geometry.x_min             |         |  float  |                                                              |
|             geometry.x_max             |         |  float  |                                                              |
|               geometry.y               |         |  float  |                                                              |
|            geometry.y_span             |         |  float  |                Restrained by condition: >=0.                 |
|             geometry.y_min             |         |  float  |                                                              |
|             geometry.y_max             |         |  float  |                                                              |
|               geometry.z               |         |  float  |                                                              |
|            geometry.z_span             |         |  float  |                Restrained by condition: >=0.                 |
|             geometry.z_min             |         |  float  |                                                              |
|             geometry.z_max             |         |  float  |                                                              |
|     geometry.interpolate_accuracy      |    1    | integer |            Restrained by condition: >=1 && <= 10.            |
