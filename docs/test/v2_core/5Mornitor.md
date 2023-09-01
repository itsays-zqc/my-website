
# Monitor

This section provides guidance on adding a monitor to your simulation project. We offer a variety of monitors designed to enhance your ability to gather simulation data. The subsequent content will be presented below, offering an introduction to each monitor.

## 5.1 Profile monitor

Incorporate a profile monitor into the current project.

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
|      name      |   Profile monitor name.   |
|      type      |       Monitor type.       |
|    property    | Profile monitor property. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name="y_normal", type="profile_monitor",
       property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,
                              "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0.5, "z_span": 7}})
```

|    **Parameters**     | Default |  Type   |                            Notes                             |
| :-------------------: | :-----: | :-----: | :----------------------------------------------------------: |
| geometry.monitor_type |         | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
| geometry.x_resolution |   100   | integer |                                                              |
|      geometry.x       |         |  float  |                                                              |
|    geometry.x_span    |         |  float  |                Restrained by condition: >=0.                 |
|    geometry.x_min     |         |  float  |                                                              |
|    geometry.x_max     |         |  float  |                                                              |
|      geometry.y       |         |  float  |                                                              |
|    geometry.y_span    |         |  float  |                Restrained by condition: >=0.                 |
|    geometry.y_min     |         |  float  |                                                              |
|    geometry.y_max     |         |  float  |                                                              |
|      geometry.z       |         |  float  |                                                              |
|    geometry.z_span    |         |  float  |                Restrained by condition: >=0.                 |
|    geometry.z_min     |         |  float  |                                                              |
|    geometry.z_max     |         |  float  |                                                              |



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
|      name      |   Global monitor name.   |
|      type      |      Monitor type.       |
|    property    | Global monitor property. |

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
|     frequency_power.sample_spacing     |  uniform   | string  |         Selections are ['uniform'].         |
| frequency_power.use_wavelength_spacing |    true    |  bool   |                                             |
|      frequency_power.spacing_type      | wavelength | string  | Selections are ['wavelength', 'frequency']. |
|     frequency_power.spacing_limit      |  min_max   | string  | Selections are ['min_max', 'center_span'].  |
|     frequency_power.wavelength_min     |            |  float  |                                             |
|     frequency_power.wavelength_max     |            |  float  |                                             |
|   frequency_power.wavelength_center    |            |  float  |                                             |
|    frequency_power.wavelength_span     |            |  float  |                                             |
|     frequency_power.frequency_min      |            |  float  |                                             |
|     frequency_power.frequency_max      |            |  float  |                                             |
|    frequency_power.frequency_center    |            |  float  |                                             |
|     frequency_power.frequency_span     |            |  float  |                                             |
|    frequency_power.frequency_points    |     5      | integer |                                             |
|    advanced.min_sampling_per_cycle     |     2      | integer |                                             |



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
|      name      |   Time monitor name.   |
|      type      |     Monitor type.      |
|    property    | Time monitor property. |

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
|              general.stop_method              | end_of_simulation | string  | Selections are ['end_of_simulation', 'choose_stop_time', 'choose_number_of_snapshots']. |
|              general.start_time               |         0         |  float  |                                                              |
|               general.stop_time               |       1000        |  float  |                                                              |
|          general.number_of_snapshots          |         0         | integer |                                                              |
|             geometry.monitor_type             |                   | string  | Selections are ['point', 'linear_x', 'linear_y', 'linear_z', '2d_x_normal', '2d_y_normal', '2d_z_normal', '3d']. |
|                  geometry.x                   |                   |  float  |                                                              |
|                geometry.x_span                |                   |  float  |                Restrained by condition: >=0.                 |
|                geometry.x_min                 |                   |  float  |                                                              |
|                geometry.x_max                 |                   |  float  |                                                              |
|                  geometry.y                   |                   |  float  |                                                              |
|                geometry.y_span                |                   |  float  |                Restrained by condition: >=0.                 |
|                geometry.y_min                 |                   |  float  |                                                              |
|                geometry.y_max                 |                   |  float  |                                                              |
|                  geometry.z                   |                   |  float  |                                                              |
|                geometry.z_span                |                   |  float  |                Restrained by condition: >=0.                 |
|                geometry.z_min                 |                   |  float  |                                                              |
|                geometry.z_max                 |                   |  float  |                                                              |
| advanced.sampling_rate.min_sampling_per_cycle |        10         | integer |                                                              |



## 5.4 Power monitor and its Mode expansion

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
|      name      |   Monitor name.   |
|      type      |   Monitor type.   |
|    property    | Monitor property. |

**Example:**

```python
mn = pj.Monitor()
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
|                    geometry.monitor_type                     |                   | string  | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal', 'x', 'y', 'z']. |
|                          geometry.x                          |                   |  float  |                                                              |
|                       geometry.x_span                        |                   |  float  |                Restrained by condition: >=0.                 |
|                        geometry.x_min                        |                   |  float  |                                                              |
|                        geometry.x_max                        |                   |  float  |                                                              |
|                          geometry.y                          |                   |  float  |                                                              |
|                       geometry.y_span                        |                   |  float  |                Restrained by condition: >=0.                 |
|                        geometry.y_min                        |                   |  float  |                                                              |
|                        geometry.y_max                        |                   |  float  |                                                              |
|                          geometry.z                          |                   |  float  |                                                              |
|                       geometry.z_span                        |                   |  float  |                Restrained by condition: >=0.                 |
|                        geometry.z_min                        |                   |  float  |                                                              |
|                        geometry.z_max                        |                   |  float  |                                                              |
|                geometry.rotate_settings.theta                |         0         |  float  |              Restrained by condition: >-90,<90.              |
|                 geometry.rotate_settings.phi                 |         0         |  float  |             Restrained by condition: >=0,<=360.              |
|           geometry.rotate_settings.rotation_offset           |         0         |  float  |           Restrained by condition: >=-1e30,<=1e30.           |
|         mode_expansion.[]monitors_for_expansion.name         |                   | string  |                                                              |
|  mode_expansion.[]monitors_for_expansion.frequency_monitor   |                   | string  |                                                              |
|                   mode_expansion.direction                   |     positive      | string  |           Selections are ['positive', 'negative'].           |
|        mode_expansion.mode_calculation.mode_selection        |                   | string  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']. |
|          mode_expansion.mode_calculation.mode_index          |                   |  list   |                                                              |
|            mode_expansion.mode_calculation.search            |     max_index     | string  |           Selections are ['near_n', 'max_index'].            |
|              mode_expansion.mode_calculation.n               |        1.0        |  float  |                                                              |
|    mode_expansion.mode_calculation.number_of_trial_modes     |        20         | integer |                                                              |
|   mode_expansion.mode_calculation.override_global_options    |       false       |  bool   |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.sample_spacing |      uniform      | string  |                 Selections are ['uniform'].                  |
| mode_expansion.mode_calculation.override_global_monitor_setting.use_wavelength_spacing |       true        |  bool   |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.spacing_type |    wavelength     | string  |         Selections are ['wavelength', 'frequency'].          |
| mode_expansion.mode_calculation.override_global_monitor_setting.spacing_limit |      min_max      | string  |          Selections are ['min_max', 'center_span'].          |
| mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_min |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_max |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_center |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.wavelength_span |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.frequency_min |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.frequency_max |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.frequency_center |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.frequency_span |                   |  float  |                                                              |
| mode_expansion.mode_calculation.override_global_monitor_setting.frequency_points |                   | integer |                                                              |
| mode_expansion.mode_calculation.bent_waveguide.bent_waveguide |       false       |  bool   |                                                              |
|    mode_expansion.mode_calculation.bent_waveguide.radius     |        1.0        |  float  |                                                              |
|  mode_expansion.mode_calculation.bent_waveguide.orientation  |        0.0        |  float  |                                                              |
|   mode_expansion.mode_calculation.bent_waveguide.location    | simulation_center | string  |            Selections are ['simulation_center'].             |



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
|      name      |   Band monitor name.   |
|      type      |     Monitor type.      |
|    property    | Band monitor property. |

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
|       general.record_ec       |  true   |  bool   |                                                      |
|       general.record_ev       |  true   |  bool   |                                                      |
|       general.record_ei       |  true   |  bool   |                                                      |
|      general.record_efn       |  true   |  bool   |                                                      |
|      general.record_efp       |  true   |  bool   |                                                      |
|      general.record_evac      |  true   |  bool   |                                                      |
|     geometry.monitor_type     |         | string  | Selections are ['linear_x', 'linear_y', 'linear_z']. |
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
| geometry.interpolate_accuracy |    1    | integer |        Restrained by condition: >=1 && <= 10.        |



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

| **Parameters** |       Description        |
| :------------: | :----------------------: |
|      name      |   Charge monitor name.   |
|      type      |      Monitor type.       |
|    property    | Charge monitor property. |

**Example:**

```python
mn = pj.Monitor()
mn.add(name="np_line_080nm", type="charge_monitor", property={
       "geometry": {"monitor_type": "linear_y", "x": st_x_mean, "x_span": st_x_span, "y_min": -0.4, "y_max": 0.4, "z": 0.08, "z_span": 0,
                      "interpolate_accuracy": 9}})
```

|         **Parameters**         | Default |  Type   |                            Notes                             |
| :----------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|    general.record_electrons    |  true   |  bool   |                                                              |
|      general.record_holes      |  true   |  bool   |                                                              |
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
|      name      |   EME port name.   |
|      type      |   EME port type.   |
|    property    | EME port property. |

**Example:**

```python
 mn = pj.Monitor()
 mn.add(name="electric_2d", type="electric_monitor", property={
        "geometry": {"monitor_type": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y_min": -Ge_y_span_bottom*3/4, "y_max": Ge_y_span_bottom*3/4, "z_min": 0, "z_max": Si_z_span+Ge_z_span,
                     "interpolate_accuracy": 6}})
```

|             **Parameters**             | Default |  Type   |                            Notes                             |
| :------------------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|     general.record_electrics_field     |  true   |  bool   |                                                              |
| general.record_electrostatic_potential |  true   |  bool   |                                                              |
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
