# Source/Port

The subsequent code will exemplify the process of incorporating a light source and port within a simulation project.

As of now, the source module accommodates the inclusion of mode source and Gaussian source. Furthermore, our platform extends support for ports into both EME and FDTD simulations.  

## 4.1 Waveform

Before adding a light source, firstly we define the relevant parameters of the waveform in this section of the project.

```python
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)
wv_struct = wv[waveform_name]
```

|    Parameters     | Description |
| :---------------: | :---------: |
|       name        | Use waveform name to get a Waveform from all waveforms. |
| wavelength_center |Determine the center wavelength of the waveform. |
|  wavelength_span  |        Determine the wavelength span of the waveform.     |
|  wavelength_min   |   Determine the minimun wavelength of the waveform.   |
|  wavelength_max   | Determine the maximum wavelength of the waveform. |
| frequency_center  |  Determine the center frequency of the waveform.   |
|  frequency_span   |  Determine the frequency span of the waveform.            |
|   frequency_min   |  Determine the minimun frequency  of the waveform.            |
|   frequency_max   |  Determine the maximum frequency  of the waveform.            |

## 4.2 Mode source

Incorporate a model source into the project by utilizing the provided code with the attribute `type="mode_source"`.

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

| Parameters |      Description      |
| :------------: | :-------------------: |
|      name      |   The name of mode source defined in the project.  |
|      type      |   To decide the type of source.      |
|      axis      |   Determining the propagation direction of the mode source. Literal["x_forward","y_forward","z_forward","x_backward","y_backward","z_backward"].    |
|    property    | The property of mode source. |

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

|           Parameters            |  Default  |  Type   |                            Notes                             |
| :---------------------------------: | :-------: | :-----: | :----------------------------------------------------------: |
|         general.inject_axis         |  x_axis   | string  | To set the inject axis of mode source. Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|          general.direction          |  forward  | string  |To set the propagation direction of mode source. Selections are ['forward', 'backward'].            |
|          general.amplitude          |    1.0    |  float  |To set the amplitude of mode source.             |
|            general.phase            |    0.0    |  float  |       To set the initial phase value for the mode source.                                                      |
|       general.mode_selection        |      -     | string  | To decide the mode which propagates in the waveguide. Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
|   general.mode_removal.threshold    |     -      |  float  |   Screen the mode source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission mode.                    |
|         general.mode_index          |     0     | integer |               Under the 'user_import' condition, use this parameter to decide the source mode.                                                  |
|           general.search            | max_index | string  |          Calculate the mode based on the maximum refractive index in the structure. Selections are ['near_n', 'max_index'].            |
|              general.n              |    1.0    |  float  |Under the 'near_n' condition, use this value of refractive index to search the source mode.               |
|    general.number_of_trial_modes    |    20     | integer |   When calculating modes, determine the calculated number of modes around the refractive index.                       |
| general.waveform.waveform_id_select |     -      |   any   |   Call the previously defined wavelength-related parameters.            |
|       general.rotations.theta       |     0     |  float  |          Set the theta rotation angle of the mode source.               |
|        general.rotations.phi        |     0     |  float  |          Set the phi rotation angle of the mode source.    |
|  general.rotations.rotation_offset  |     0     |  float  |          Set the rotation offset of the mode source.           |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the mode source.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the mode source. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the mode source.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the mode source.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the mode source.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the mode source. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the mode source.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the mode source.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the mode source.    |
|   geometry.z_span   |     -    |  float   | The thinckness in z direction of the mode source. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the mode source.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the thickness of the mode source.     |



## 4.3 Gaussian source

Integrate a Gaussian source into the project by applying the code `type="Gaussian_source"`.



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
|      name      |  The name of Gaussian source defined in the project.   |
|      type      |       The type of Gaussian source.       |
|      axis      |  Determining the propagation direction of the Gaussian source. Literal["x_forward","y_forward","z_forward","x_backward","y_backward","z_backward"].   |
|    property    | The property of Gaussian source. |

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
|         general.inject_axis         |  x_axis   | string  | To set the inject axis of Gaussian source. Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|          general.direction          |  forward  | string  |To set the propagation direction of Gaussian source. Selections are ['forward', 'backward'].            |
|          general.amplitude          |    1.0    |  float  |To set the amplitude of Gaussian source.             |
|            general.phase            |    0.0    |  float  |       To set the initial phase value for the Gaussian source.                                                      |
| general.waveform.waveform_id_select |     -      |   any   |   Call the previously defined wavelength-related parameters.            |
|       general.rotations.theta       |     0     |  float  |          Set the theta rotation angle of the Gaussian source.               |
|        general.rotations.phi        |     0     |  float  |          Set the phi rotation angle of the Gaussian source.    |
|  general.rotations.rotation_offset  |     0     |  float  |          Set the rotation offset of the Gaussian source.           |
|        general.polarization_angle         |            0             |  float   |    Set the polarization angle of Gaussian source.                |
| general.beam_settings.calculation_method  | use_scalar_approximation |  string  | Choose a method for calculating Gaussian source. Selections are ['use_scalar_approximation', 'use_vector_approximation']. |
|   general.beam_settings.beam_parameters   | waist_size_and_position  |  string  | Choose a method for determining the relevant parameters of Gaussian source. Selections are ['waist_size_and_position', 'beam_size_and_divergence']. |
|    general.beam_settings.waist_radius     |       -          |  float   |         The beam waist radius of the Gaussian source. The corresponding position when the field attenuates to 1/e.       |
| general.beam_settings.distance_from_waist |            -           |  float   |       The distance from the center of the Gaussian source to the beam waist radius.               |
|     general.beam_settings.beam_radius     |             -             |  float   |         The beam waist radius of the Gaussian source. The corresponding position when the field attenuates to 1/e.               |
|  general.beam_settings.divergence_angle   |       -              |  float   |          The divergence angle of Gaussian beam.              |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the Gaussian source.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the Gaussian source. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the Gaussian source.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the Gaussian source.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the Gaussian source.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the Gaussian source. Restrained by condition: >0.  |
|   geometry.y_min    |      -   |  float   |The minimum y-coordinate endpoint data of the Gaussian source.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the Gaussian source.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the Gaussian source.    |
|   geometry.z_span   |     -    |  float   | The thinckness in z direction of the Gaussian source. Restrained by condition: >0.  |
|   geometry.z_min    |    -     |  float   |The z-coordinate of the bottom position of the thickness of the Gaussian source.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the Gaussian source.     |

## 4.3 FDTD port

Incorporate a port into the current FDTD simulation project. 

```python
add(
            self,
            *,
            type: Literal["fdtd_port"],
            name: str,
            property: PostProcessFdtdPort,
    )
```

| **Parameters** |   Description   |
| :------------: | :-------------: |
|      name      |   The name of FDTD port source defined in the project.  |
|      type      |   To decide the type of the FDTD port source.      |
|    property    | The property of the FDTD port source. |

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
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the FDTD port source.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the FDTD port source. Restrained by condition: >0.  |
|   geometry.x_min    |    -     |  float   | The minimum x-coordinate endpoint data of the FDTD port source.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the FDTD port source.     |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the FDTD port source.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the FDTD port source. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the FDTD port source.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the FDTD port source.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the FDTD port source.    |
|   geometry.z_span   |     -    |  float   | The thinckness in z direction of the FDTD port source. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the thickness of the FDTD port source.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the thickness of the FDTD port source.     |
|         modal_properties.general.inject_axis         |  x_axis   | string  | To set the inject axis of FDTD port source. Selections are ['x_axis', 'y_axis', 'z_axis', 'x', 'y', 'z']. |
|          modal_properties.general.direction          |  forward  | string  |To set the propagation direction of FDTD port source. Selections are ['forward', 'backward'].            |
|          modal_properties.general.amplitude          |    1.0    |  float  |To set the amplitude of FDTD port source.             |
|          modal_properties.general.phase            |    0.0    |  float  |       To set the initial phase value for the FDTD port source.                                                      |
|      modal_properties.general.mode_selection    |      -     | string  | To decide the FDTD port mode which propagates in the waveguide. Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
|  modal_properties.general.mode_removal.threshold    |     -      |  float  |   Screen the FDTD port source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission FDTD port mode.                    |
|         modal_properties.general.mode_index         |     0     | integer |               Under the 'user_import' condition, use this parameter to decide the FDTD port source mode.                                                  |
|         modal_properties.general.search          | max_index | string  |          Calculate the FDTD port mode based on the maximum refractive index in the structure. Selections are ['near_n', 'max_index'].            |
|            modal_properties.general.n          |    1.0    |  float  |Under the 'near_n' condition, use this value of refractive index to search the FDTD port source mode.               |
|   modal_properties.general.number_of_trial_modes   |    20     | integer |   When calculating FDTD port mode, determine the calculated number of FDTD port mode around the refractive index.                       |
| modal_properties.bent_waveguide.bent_waveguide  |       false       |  bool   |      Select whether to calculate modes in curved waveguides.          |
|     modal_properties.bent_waveguide.radius      |         1         |  float  |    Set the waveguide radius for curved waveguides.             |
|   modal_properties.bent_waveguide.orientation   |        20         |  float  |       Bent direction of the waveguide.         |
|    modal_properties.bent_waveguide.location     | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ['simulation_center'].             |





## 4.4 EME port

Incorporate a port into the current EME simulation project.

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
|      name      |   The name of EME port source defined in the project.  |
|      type      |   To decide the type of the EME port source.      |
|    property    | The property of the EME port source. |

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
|          geometry.port_location          |      -        | string  |              Set the location type of EME port. Selections are ['left', 'right'].               |
|    geometry.use_full_simulation_span     |       true        |  bool   |     Confirm whether to use full simulation span.             |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the EME port source.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the EME port source. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the EME port source.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the EME port source.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the EME port source.    |
|   geometry.z_span   |     -    |  float   | The thinckness in z direction of the EME port source. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the thickness of the EME port source.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the thickness of the EME port source.     |
|     eme_port.general.mode_selection      |         -         | string  | To decide the mode which propagates in the waveguide. Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']. |
|       eme_port.general.mode_index        |         1         | integer |         Under the 'user_import' condition, use this parameter to decide the source mode.                |
|         eme_port.general.search          |     max_index     | string  |           Calculate the mode based on the maximum refractive index in the structure. Selections are ['near_n', 'max_index']. Selections are ['near_n', 'max_index'].            |
|            eme_port.general.n            |        1.0        | integer |                                     Under the 'near_n' condition, use this value of refractive index to search the source mode.                          |
|  eme_port.bent_waveguide.bent_waveguide  |       false       |  bool   |             Select whether to calculate modes in curved waveguides.                 |
|      eme_port.bent_waveguide.radius      |         1         |  float  |               Set the waveguide radius for curved waveguides.                 |
|   eme_port.bent_waveguide.orientation    |        20         |  float  |        Bent direction of the waveguide.                |
|     eme_port.bent_waveguide.location     | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ['simulation_center'].          |
|         eme_port.advanced.offset         |         0         |  float  |      Set the offset of EME port position.                         |
| eme_port.advanced.number_of_trial_modes  |        20         | integer |      When calculating modes, determine the calculated number of modes around the refractive index.             |
| eme_port.advanced.mode_removal.threshold |          -         |  float  |    Screen the mode source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission mode.          |







