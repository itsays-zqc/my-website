# Source/Port

The following code will demonstrate how to add light source and  port in a simulation project.  

Currently, for the source module it supports the addition of modal sources and Gaussian sources. And we support to add ports in EME simulation and FDTD simulation. 

## 4.1 Mode source

Add a mode source into the project using code `type="mode_source"`.

```python
add(
            self,
            *,
            type: Literal["mode_source"],
            name: str,
            axis: AxisSelection,
            property: PostProcessModeSource,
    )
```

| **Parameters** |      Description      |
| :------------: | :-------------------: |
|      name      |   Mode source name.   |
|      type      |     Source type.      |
|      axis      |   Mode source axis.   |
|    property    | Mode source property. |

**Example:**

```python
src.add(name='source', type='mode_source', axis='x_forward',
                property={'general': {
                    # 'amplitude': 1, 'phase': 0, 'mode_index': 0, 'rotations': {'theta': 0, 'phi': 0, 'rotation_offset': 0}
                    'mode_selection': 'user_select', 'waveform': {'waveform_id_select': wv_struct}
                },
                    'geometry': {'x': ports['op_0']['position'][0], 'x_span': 0,
                                 'y': ports['op_0']['position'][1], 'y_span': monitor_w,
                                 'z': 0, 'z_span': monitor_h}})
```

|           **Parameters**            |  Default  |  Type   |                            Notes                             |
| :---------------------------------: | :-------: | :-----: | :----------------------------------------------------------: |
|         general.inject_axis         |  x_axis   | string  | Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|          general.direction          |  forward  | string  |           Selections are ['forward', 'backward'].            |
|          general.amplitude          |    1.0    |  float  |                                                              |
|            general.phase            |    0.0    |  float  |                                                              |
|       general.mode_selection        |           | string  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
|   general.mode_removal.threshold    |           |  float  |                                                              |
|         general.mode_index          |     0     | integer |                                                              |
|           general.search            | max_index | string  |           Selections are ['near_n', 'max_index'].            |
|              general.n              |    1.0    |  float  |                                                              |
|    general.number_of_trial_modes    |    20     | integer |                                                              |
| general.waveform.waveform_id_select |           |   any   |                                                              |
|       general.rotations.theta       |     0     |  float  |                                                              |
|        general.rotations.phi        |     0     |  float  |                                                              |
|  general.rotations.rotation_offset  |     0     |  float  |                                                              |
|             geometry.x              |           |  float  |                                                              |
|           geometry.x_span           |           |  float  |                Restrained by condition: >=0.                 |
|           geometry.x_min            |           |  float  |                                                              |
|           geometry.x_max            |           |  float  |                                                              |
|             geometry.y              |           |  float  |                                                              |
|           geometry.y_span           |           |  float  |                Restrained by condition: >=0.                 |
|           geometry.y_min            |           |  float  |                                                              |
|           geometry.y_max            |           |  float  |                                                              |
|             geometry.z              |           |  float  |                                                              |
|           geometry.z_span           |           |  float  |                Restrained by condition: >=0.                 |
|           geometry.z_min            |           |  float  |                                                              |
|           geometry.z_max            |           |  float  |                                                              |



## 4.2 Gaussian source

Add a Gaussian source into the project using code `type="mode_source"`.

```python
add(
            self,
            *,
            type: Literal["gaussian_source"],
            name: str,
            axis: AxisSelection,
            property: PostProcessGaussianSource,
    )
```

| **Parameters** |       Description        |
| :------------: | :----------------------: |
|      name      |  Gaussian source name.   |
|      type      |       Source type.       |
|      axis      |  Gaussian source axis.   |
|    property    | Gaussian source property |

**Example:**

```python
so.add(name='source', type='gaussian_source', axis='z_backward',
           property={'general': {'angle_theta': 12, 'angle_phi': 0, 'polarization_angle': 90, 'waveform': {'waveform_id_select': wv[waveform_name]},
                                 'beam_settings': {'calculation_method': 'use_scalar_approximation',  # [use_scalar_approximation,use_vector_approximation]
                                                   'beam_parameters': 'waist_size_and_position',  # [waist_size_and_position,beam_size_and_divergence]
                                                   'waist_radius': 5.2, 'distance_from_waist': 1.5, 'beam_radius': 5.2, 'divergence_angle': 5.41444}},
                     'geometry': {'x': 4, 'x_span': 20, 'y': 0, 'y_span': 20, 'z': 1.5, 'z_span': 0}})

```

|              **Parameters**               |         Default          |   Type   |                            Notes                             |
| :---------------------------------------: | :----------------------: | :------: | :----------------------------------------------------------: |
|            general.inject_axis            |          x_axis          |  string  | Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|             general.direction             |         forward          |  string  |           Selections are ['forward', 'backward'].            |
|             general.amplitude             |           1.0            |  float   |                                                              |
|               general.phase               |           0.0            |  float   |                                                              |
|    general.waveform.waveform_id_select    |                          | waveform |                                                              |
|            general.angle_theta            |            0             |  float   |                                                              |
|             general.angle_phi             |            0             |  float   |                                                              |
|          general.rotation_offset          |            0             |  float   |                                                              |
|        general.polarization_angle         |            0             |  float   |                                                              |
| general.beam_settings.calculation_method  | use_scalar_approximation |  string  | Selections are ['use_scalar_approximation', 'use_vector_approximation']. |
|   general.beam_settings.beam_parameters   | waist_size_and_position  |  string  | Selections are ['waist_size_and_position', 'beam_size_and_divergence']. |
|    general.beam_settings.waist_radius     |                          |  float   |                                                              |
| general.beam_settings.distance_from_waist |                          |  float   |                                                              |
|     general.beam_settings.beam_radius     |                          |  float   |                                                              |
|  general.beam_settings.divergence_angle   |                          |  float   |                                                              |
|                geometry.x                 |                          |  float   |                                                              |
|              geometry.x_span              |                          |  float   |                Restrained by condition: >=0.                 |
|              geometry.x_min               |                          |  float   |                                                              |
|              geometry.x_max               |                          |  float   |                                                              |
|                geometry.y                 |                          |  float   |                                                              |
|              geometry.y_span              |                          |  float   |                Restrained by condition: >=0.                 |
|              geometry.y_min               |                          |  float   |                                                              |
|              geometry.y_max               |                          |  float   |                                                              |
|                geometry.z                 |                          |  float   |                                                              |
|              geometry.z_span              |                          |  float   |                Restrained by condition: >=0.                 |
|              geometry.z_min               |                          |  float   |                                                              |
|              geometry.z_max               |                          |  float   |                                                              |

## 4.3 FDTD port

Add a port to current project.

```python
add(
            self,
            *,
            type: Literal["eme_port"],
            name: str,
            property: PostProcessEmePort,
    )
```

| **Parameters** |   Description   |
| :------------: | :-------------: |
|      name      | FDTD port name. |
|      type      |   Port type.    |
|    property    | FDTD port axis. |

**Example:**

```python
pt = pj.Port(property={'waveform_id': wv_struct, 'source_port': 'port_left'})
pt.add(name='port_left', type='fdtd_port',
       property={'geometry': {'x': ports['op_0']['position'][0], 'x_span': 0, 'y': ports['op_0']['position'][1],
                              'y_span': monitor_w, 'z': 0, 'z_span': monitor_h},
                 'modal_properties': {'general': {'inject_axis': 'x_axis', 'direction': 'forward',
									  'mode_selection': 'fundamental',
                                                                              }}})
```

|                 **Parameters**                  |      Default      |  Type   |                            Notes                             |
| :---------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|                   geometry.x                    |                   |  float  |                                                              |
|                 geometry.x_span                 |                   |  float  |                Restrained by condition: >=0.                 |
|                 geometry.x_min                  |                   |  float  |                                                              |
|                 geometry.x_max                  |                   |  float  |                                                              |
|                   geometry.y                    |                   |  float  |                                                              |
|                 geometry.y_span                 |                   |  float  |                Restrained by condition: >=0.                 |
|                 geometry.y_min                  |                   |  float  |                                                              |
|                 geometry.y_max                  |                   |  float  |                                                              |
|                   geometry.z                    |                   |  float  |                                                              |
|                 geometry.z_span                 |                   |  float  |                Restrained by condition: >=0.                 |
|                 geometry.z_min                  |                   |  float  |                                                              |
|                 geometry.z_max                  |                   |  float  |                                                              |
|      modal_properties.general.inject_axis       |      x_axis       | string  | Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|       modal_properties.general.direction        |      forward      | string  |           Selections are ['forward', 'backward'].            |
|       modal_properties.general.amplitude        |         1         |  float  |                                                              |
|         modal_properties.general.phase          |         0         |  float  |                                                              |
|     modal_properties.general.mode_selection     |                   | string  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
| modal_properties.general.mode_removal.threshold |                   |  float  |                                                              |
|       modal_properties.general.mode_index       |         1         | integer |                                                              |
|         modal_properties.general.search         |     max_index     | string  |           Selections are ['near_n', 'max_index'].            |
|           modal_properties.general.n            |        1.0        |  float  |                                                              |
| modal_properties.general.number_of_trial_modes  |        20         | integer |                                                              |
| modal_properties.bent_waveguide.bent_waveguide  |       false       |  bool   |                                                              |
|     modal_properties.bent_waveguide.radius      |         1         |  float  |                                                              |
|   modal_properties.bent_waveguide.orientation   |        20         |  float  |                                                              |
|    modal_properties.bent_waveguide.location     | simulation_center | string  |            Selections are ['simulation_center'].             |





## 4.4 EME port

Add a port to current project.

```python
add(
            self,
            *,
            type: Literal["eme_port"],
            name: str,
            property: PostProcessEmePort,
    )
```

| **Parameters** |    Description     |
| :------------: | :----------------: |
|      name      |   EME port name.   |
|      type      |     Port type.     |
|    property    | EME port property. |

**Example:**

```python
pjp = pj.Port(property={"source_port": "input_te_tm"})
pjp.add(name="input_te_tm", type="eme_port",
        property={"geometry": {"port_location": "left", "use_full_simulation_span": True, "y": 1.256, "y_span": 8, "z": 0, "z_span": 6},
                  "eme_port": {"general": {"mode_selection": "fundamental_TE_and_TM", "mode_index": 1},
                               "advanced": {"offset": 0.1, "number_of_trial_modes": number_of_modes}}})
```

|              **Parameters**              |      Default      |  Type   |                            Notes                             |
| :--------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|          geometry.port_location          |                   | string  |              Selections are ['left', 'right'].               |
|    geometry.use_full_simulation_span     |       true        |  bool   |                                                              |
|                geometry.y                |                   |  float  |                                                              |
|             geometry.y_span              |                   |  float  |                Restrained by condition: >=0.                 |
|              geometry.y_min              |                   |  float  |                                                              |
|              geometry.y_max              |                   |  float  |                                                              |
|                geometry.z                |                   |  float  |                                                              |
|             geometry.z_span              |                   |  float  |                Restrained by condition: >=0.                 |
|              geometry.z_min              |                   |  float  |                                                              |
|              geometry.z_max              |                   |  float  |                                                              |
|     eme_port.general.mode_selection      |                   | string  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
|       eme_port.general.mode_index        |         1         | integer |                                                              |
|         eme_port.general.search          |     max_index     | string  |           Selections are ['near_n', 'max_index'].            |
|            eme_port.general.n            |        1.0        | integer |                                                              |
|  eme_port.bent_waveguide.bent_waveguide  |       false       |  bool   |                                                              |
|      eme_port.bent_waveguide.radius      |         1         |  float  |                                                              |
|   eme_port.bent_waveguide.orientation    |        20         |  float  |                                                              |
|     eme_port.bent_waveguide.location     | simulation_center | string  |            Selections are ['simulation_center'].             |
|         eme_port.advanced.offset         |         0         |  float  |                                                              |
| eme_port.advanced.number_of_trial_modes  |        20         | integer |                                                              |
| eme_port.advanced.mode_removal.threshold |                   |  float  |                                                              |







