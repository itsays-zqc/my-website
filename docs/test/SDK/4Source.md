# Source/Port

<font face = "Calibri">

<div class="text-justify">

The subsequent code will exemplify the process of incorporating a light source and port within a simulation project.

As of now, the source module accommodates the inclusion of mode source and Gaussian source. Furthermore, our platform extends support for ports into both EME and FDTD simulations.  

## 4.1 Waveform

In FDTD simulations, waveforms are utilized to control the bandwidth of the source pluse. You can simply enter the central wavelength and range into the added waveform, and the bandwidth and shape of the pulse source will be automatically calculated.

```python
    add(        
                self,
                name: str,
                wavelength_center: float,
                wavelength_span: float,
    ):

```

|    Parameters     | Description |
| :----------------------: | :--------------: |
|       name        |                Defining the name of the waveform.               |
| wavelength_center |The central wavelength of the spectrum. |
|wavelength_span |The wavelength range of the spectrum.|

Example:

```python
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)
```



## 4.2 Mode source

Incorporate a model source into the project by utilizing the provided code with the attribute `type="mode_source"`.

```python
add(
            self,
            *,
            name: str,
            type: Optional[str] = None,
            property: unions,
    )
```

| Parameters |      Description      |
| :------------: | :-------------------: |
|      name      | Assigning a name to the added source allows for differentiation between all sources that have been incorporated.|
|      type      |    Select the type of source, with options "mode_source" and "gaussian_source" available.|
|    property    | Enter the basic properties that define the source; if not entered, default parameters will be referenced.|

Properties of the mode source are as follows:

|           Parameters            |  Default  |  Type   |                            Notes                             |
| :---------------------------------: | :-------: | :-----: | :----------------------------------------------------------: |
|         general.inject_axis         |  -  | string  | The inject axis of mode source, with options "x_axis", "y_axis", and "z_axis" available. |
|          general.direction          |  forward  | string  |The propagation direction of mode source, with options "forward" and "backward" available.            |
|          general.amplitude          |    1.0    |  float  |Specify the peak amplitude of the electric field, with the unit in V/m.         |
|            general.phase            |    0.0    |  float  |      Specify the initial phase of the  source, with the unit in degrees.                                                     |
|       general.mode_selection        |      -     | string  | Choose the method for finding the mode by selecting either the fundamental mode or through user-selected, with options "fundamental", "fundamental_TE", "fundamental_TM", "fundamental_TE_and_TM" and "user_select" available.|
|           general.search            | max_index | string  |        Select the method for solving the mode, with options "max_index" and "near_n" available.            |
|              general.n              |    1.0    |  float  |Search for the specified value of the effective index.            |
|         general.mode_index          |     0     | integer |         Select the mode number from the list of calculated modes.                   |
|    general.number_of_trial_modes    |    20     | integer |   Record the maximum number of modes in the mode list.                       |
| general.waveform.waveform_id |     -      |   any   |  Select the ID of the added source pulse waveform.         |
|       general.rotations.theta       |     0     |  float  |         The angle between the propagation direction and the injection axis of source, with the unit in degrees.           |
|        general.rotations.phi        |     0     |  float  |         In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.  |
|  general.rotations.rotation_offset  |     0     |  float  |        Set an offset for the plane where the mode is calculated.    |
|     geometry.x      |    -     |  float   | The center position of the mode source along the x-coordinate axis. |
|   geometry.x_span   |     -    |  float   | The size of the mode source along the x-coordinate axis.  |
|   geometry.x_min    |    -     |  float   | The minimum position of the mode source along the x-coordinate axis.     |
|   geometry.x_max    |     -    |  float   |  The maximum position of the mode source along the x-coordinate axis.   |
|     geometry.y     |    -     |  float   | The center position of the mode source along the y-coordinate axis. |
|   geometry.y_span   |     -    |  float   | The size of the mode source along the y-coordinate axis.  |
|   geometry.y_min    |    -     |  float   | The minimum position of the mode source along the y-coordinate axis.     |
|   geometry.y_max    |     -    |  float   |  The maximum position of the mode source along the y-coordinate axis.   |
|     geometry.z      |    -     |  float   | The center position of the mode source along the z-coordinate axis. |
|   geometry.z_span   |     -    |  float   | The size of the mode source along the z-coordinate axis.  |
|   geometry.z_min    |    -     |  float   | The minimum position of the mode source along the z-coordinate axis.     |
|   geometry.z_max    |     -    |  float   |  The maximum position of the mode source along the z-coordinate axis.   |
|   modal_analysis.mode_removal.threshold    |     -      |  float  | Set the threshold within the PML layer, and modes with magnetic field intensity exceeding this threshold in the PML layer will be discarded. |

Example:

```python
src.add(name="source", type="mode_source",
                property={"general": {
                    "amplitude": 1, "phase": 0, "rotations": {"theta": 0, "phi": 0, "rotation_offset": 0},
                    "mode_selection": "fundamental", "waveform": {"waveform_id": wv[waveform_name]}, 
                    "inject_axis": "x_axis", "direction": "forward"},
                    "geometry": {"x": 0, "x_span": 0, "y": 0, "y_span": 3, "z": 0, "z_span": 3},
                    "modal_analysis": {"mode_removal": {"threshold": 0.01}}})
```

## 4.3 Gaussian source

<!-- Integrate a Gaussian source into the project by applying the code `type="Gaussian_source"`. -->



```python
add(
            self,
            *,
            type: Literal["gaussian_source"],
            name: str,
            property: unions,
    )
```



| Parameters |      Description      |
| :------------: | :-------------------: |
|      name      |   Assigning a name to the added source allows for differentiation between all sources that have been incorporated. |
|      type      |    Select the type of source, with options "mode_source" and "gaussian_source" available.|
|    property    | Enter the basic properties that define the source; if not entered, default parameters will be referenced.|

Example:

```python
so.add(name="source", type="gaussian_source", axis="z_backward",
           property={"general": {"angle_theta": 12, "angle_phi": 0, "polarization_angle": 90, "waveform": {"waveform_id": wv[waveform_name]},
                                 "beam_settings": {"calculation_method": "use_scalar_approximation",  # [use_scalar_approximation,use_vector_approximation]
                                                   "beam_parameters": "waist_size_and_position",  # [waist_size_and_position,beam_size_and_divergence]
                                                   "waist_radius": 5.2, "distance_from_waist": 1.5, "beam_radius": 5.2, "divergence_angle": 5.41444}},
                     "geometry": {"x": 4, "x_span": 20, "y": 0, "y_span": 20, "z": 1.5, "z_span": 0}})

```

|              **Parameters**               |         Default          |   Type   |                            Notes                             |
| :---------------------------------------: | :----------------------: | :------: | :----------------------------------------------------------: |
|         general.inject_axis         |  -  | string  | The inject axis of mode source, with options "x_axis", "y_axis", and "z_axis" available. |
|          general.direction          |  forward  | string  |The propagation direction of mode source, with options "forward" and "backward" available.            |
|          general.amplitude          |    1.0    |  float  |Specify the peak amplitude of the electric field, with the unit in V/m.         |
|            general.phase            |    0.0    |  float  |      Specify the initial phase of the source, with the unit in degrees.                                                     |
| general.waveform.waveform_id |     -      |   any   |  Select the ID of the added source pulse waveform.         |
|       general.angle_theta      |     0     |  float  |         The angle between the propagation direction and the injection axis of source, with the unit in degrees.              |
|        general.angle_phi        |     0     |  float  |         In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.  |
|        general.polarization_angle         |            0             |  float   |  The polarization angle defines the orientation of the injected electric field. A polarization angle of zero degrees indicates P-polarized radiation, while an angle of 90 degrees indicates S-polarized radiation.   |
| general.beam_settings.calculation_method  | use_scalar_approximation |  string  | Choose either "use_scalar_approximation" or "use_vector_approximation" to define a Gaussian source.|
|   general.beam_settings.beam_parameters   | waist_size_and_position  |  string  | Choose either "waist_size_and_position" or "beam_size_and_divergence" to define the scalar beam.|
|    general.beam_settings.waist_radius     |       -          |  float   |         1/e field (1/e2 power) radius of the beam for a Gaussian beam .    |
| general.beam_settings.distance_from_waist |            -           |  float   |    The distance between the injection plane and the beam waist. A positive distance indicates a diverging beam, while a negative distance indicates a converging beam.         |
|     general.beam_settings.beam_radius     |             -             |  float   |         1/e field (1/e2 power) radius of the beam for a Gaussian beam.   |
|  general.beam_settings.divergence_angle   |       -              |  float   |         The radiation divergence angle measured in the far field. A positive angle indicates a diverging beam, while a negative angle indicates a converging beam.             |
|     geometry.x      |    -     |  float   | The center position of the gaussian source along the x-coordinate axis. |
|   geometry.x_span   |     -    |  float   | The size of the gaussian source along the x-coordinate axis.  |
|   geometry.x_min    |    -     |  float   | The minimum position of the gaussian source along the x-coordinate axis.     |
|   geometry.x_max    |     -    |  float   |  The maximum position of the gaussian source along the x-coordinate axis.   |
|     geometry.y     |    -     |  float   | The center position of the gaussian source along the y-coordinate axis. |
|   geometry.y_span   |     -    |  float   | The size of the gaussian source along the y-coordinate axis.  |
|   geometry.y_min    |    -     |  float   | The minimum position of the gaussian source along the y-coordinate axis.     |
|   geometry.y_max    |     -    |  float   |  The maximum position of the gaussian source along the y-coordinate axis.   |
|     geometry.z      |    -     |  float   | The center position of the gaussian source along the z-coordinate axis. |
|   geometry.z_span   |     -    |  float   | The size of the gaussian source along the z-coordinate axis.  |
|   geometry.z_min    |    -     |  float   | The minimum position of the gaussian source along the z-coordinate axis.     |
|   geometry.z_max    |     -    |  float   |  The maximum position of the gaussian source along the z-coordinate axis.   |


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
|      type      |   To decide the type of source.      |
|    property    | The property of the FDTD port source. |

**Example:**

```python
pt = pj.Port(property={"waveform_id": wv_struct, "source_port": "port_left"})
pt.add(name="port_left", type="fdtd_port",
       property={"geometry": {"x": ports["op_0"]["position"][0], "x_span": 0, "y": ports["op_0"]["position"][1],
                              "y_span": monitor_w, "z": 0, "z_span": monitor_h},
                 "modal_properties": {"general": {"inject_axis": "x_axis", "direction": "forward",
									  "mode_selection": "fundamental",
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
|   geometry.z_span   |     -    |  float   | The height in z direction of the FDTD port source. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the FDTD port source.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the FDTD port source.     |
|         modal_properties.general.inject_axis         |  x_axis   | string  | To set the inject axis of FDTD port source. Selections are ["x_axis", "y_axis", "z_axis", "x", "y", "z"]. |
|          modal_properties.general.direction          |  forward  | string  |To set the propagation direction of FDTD port source. Selections are ["forward", "backward"].            |
|          modal_properties.general.amplitude          |    1.0    |  float  |To set the amplitude of FDTD port source.             |
|          modal_properties.general.phase            |    0.0    |  float  |       To set the initial phase value for the FDTD port source.                                                      |
|      modal_properties.general.mode_selection    |      -     | string  | To decide the FDTD port mode which propagates in the waveguide. Selections are ["fundamental", "fundamental_TE", "fundamental_TM", "fundamental_TE_and_TM", "user_select", "user_import"]. |
|  modal_properties.general.mode_removal.threshold    |     -      |  float  |   Screen the FDTD port source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission FDTD port mode.                    |
|         modal_properties.general.mode_index         |     0     | integer |               Under the "user_select" condition, use this parameter to decide the FDTD port source mode.                                                  |
|         modal_properties.general.search          | max_index | string  |          Calculate the FDTD port mode based on the maximum refractive index or user defined refractive index in the structure. Selections are ["near_n", "max_index"].            |
|            modal_properties.general.n          |    1.0    |  float  |Under the "near_n" condition, use this value of refractive index to search the FDTD port source mode.               |
|   modal_properties.general.number_of_trial_modes   |    20     | integer |   When calculating FDTD port mode, determine the calculated number of FDTD port mode around the refractive index.                       |
| modal_properties.bent_waveguide.bent_waveguide  |       false       |  bool   |      Select whether to calculate modes in bent waveguides.          |
|     modal_properties.bent_waveguide.radius      |         1         |  float  |    Set the waveguide radius for bent  waveguides.             |
|   modal_properties.bent_waveguide.orientation   |        20         |  float  |       The bent direction of the waveguide.         |
|    modal_properties.bent_waveguide.location     | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ["simulation_center"].             |





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
|          geometry.port_location          |      -        | string  |              Set the location type of EME port. Selections are ["left", "right"].               |
|    geometry.use_full_simulation_span     |       true        |  bool   |     Confirm whether to use full simulation span.             |
|     geometry.y      |     -    |  float   |  The y-coordinate of the center point position of the EME port source.      |
|   geometry.y_span   |     -    |  float   | The width in y direction of the EME port source. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the EME port source.       |
|   geometry.y_max    |     -    |  float   |  The maximum y-coordinate endpoint data of the EME port source.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the EME port source.    |
|   geometry.z_span   |     -    |  float   | The height in z direction of the EME port source. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   | The z-coordinate of the bottom position of the height of the EME port source.      |
|   geometry.z_max    |      -   |  float   |  The z-coordinate of the top position of the height of the EME port source.     |
|     eme_port.general.mode_selection      |         -         | string  | To decide the mode which propagates in the waveguide. Selections are ["fundamental", "fundamental_TE", "fundamental_TM", "fundamental_TE_and_TM", "user_select", "user_import"]. |
|       eme_port.general.mode_index        |         1         | integer |         Under the "user_select" condition, use this parameter to decide the source mode.                |
|         eme_port.general.search          |     max_index     | string  |           Calculate the mode based on the maximum refractive index or user defined refractive index in the structure. Selections are ["near_n", "max_index"]. Selections are ["near_n", "max_index"].            |
|            eme_port.general.n            |        1.0        | integer |                                     Under the "near_n" condition, use this value of refractive index to search the source mode.                          |
|  eme_port.bent_waveguide.bent_waveguide  |       false       |  bool   |             Select whether to calculate modes in bent waveguides.                 |
|      eme_port.bent_waveguide.radius      |         1         |  float  |               Set the waveguide radius for curved waveguides.                 |
|   eme_port.bent_waveguide.orientation    |        20         |  float  |        Bent direction of the waveguide.                |
|     eme_port.bent_waveguide.location     | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ["simulation_center"].          |
|         eme_port.advanced.offset         |         0         |  float  |      Set the offset of EME port position.                         |
| eme_port.advanced.number_of_trial_modes  |        20         | integer |      When calculating modes, determine the calculated number of modes around the refractive index.             |
| eme_port.advanced.mode_removal.threshold |          -         |  float  |    Screen the mode source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission mode.          |

</div>


</font>


