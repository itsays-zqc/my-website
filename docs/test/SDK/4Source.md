# Source/Port

<font face = "Calibri">

<div class="text-justify">

The subsequent code will exemplify the process of incorporating a light source and port within a simulation project.

As of now, the source module accommodates the inclusion of mode source and Gaussian source. Furthermore, our platform extends support for ports into both EME and FDTD simulations.  

## 4.1 Waveform

In FDTD simulations, waveforms are utilized to control the bandwidth of the source pluse. You can simply enter the central wavelength and range into the added waveform, and the bandwidth and shape of the pulse source will be automatically calculated.


The syntax and properties for adding waveform is as follows. This function does not return any data.

```python
wv = Project.Waveform()
wv.add(        
        self,
        name: str,
        type: Optional[str],
        property: dict
    ):

```

| parameter                                 | type    | default   | description                                                                  |
|:------------------------------------------|:--------|:----------|:-----------------------------------------------------------------------------|
| set                                       | string  |  -         | selections are ['frequency_wavelength','time_domain']                        |
| set_frequency_wavelength.range_type       | string  |  -         | selections are ['frequency','wavelength']                                    |
| set_frequency_wavelength.range_limit      | string  |  -         | selections are ['min_max','center_span']                                     |
| set_frequency_wavelength.wavelength_center| number  |-          | A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.                         |
| set_frequency_wavelength.wavelength_span  | number  |  -         | A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >=0.               |
| set_frequency_wavelength.wavelength_min   | number  | -          |     A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.          |
| set_frequency_wavelength.wavelength_max   | number  | -          |  A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.   |
| set_frequency_wavelength.frequency_center | number  | -          |   A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.  |
| set_frequency_wavelength.frequency_span   | number  |-           |   A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >=0.    |
| set_frequency_wavelength.frequency_min    | number  | -          |    A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0. |
| set_frequency_wavelength.frequency_max    | number  |  -         |    A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.  |
| set_time_domain.pulse_type                | string  |   -        | selections are ['standard','broadband']                                      |
| set_time_domain.frequency                 | number  |      -     | A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0. |
| set_time_domain.pulselength               | number  |    -       |   A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.  |
| set_time_domain.offset                    | number  |     -      |  A float, or a parameter, or a parameter expression that evaluates to a float. |
| set_time_domain.bandwidth                 | number  |      -     |  A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0. |


Example:

The following command adds a Gaussian waveform by setting the wavelength to 1.55 um and the wavelength span to 0.1 um.

```python
waveform_name = "wv1550"
wv = Project.Waveform()
wv.add(name=waveform_name, type='gaussian_waveform',
        property={'set': 'frequency_wavelength',  # selections are ['frequency_wavelength','time_domain']
                    'set_frequency_wavelength': {
                        'range_type': 'wavelength',  # selections are ['frequency','wavelength']
                        'range_limit': 'center_span',  # selections are ['min_max','center_span']
                        'wavelength_center': 1.55,
                        'wavelength_span': 0.1,
                    }})
```

## 4.2 Mode source

The syntax and properties for adding mode source is as follows. This function does not return any data.

```python
add(
            self,
            *,
            name: str,
            type: Optional[str],
            property: dict,
    )
```

| title                                           | type    | default           | description                                                                                     |
|:------------------------------------------------|:--------|:------------------|:------------------------------------------------------------------------------------------------|
| general.inject_axis                             | string  |                   | Selections are ['x_axis', 'y_axis', 'z_axis']                                                   |
| general.direction                               | string  | forward           | Selections are ['forward', 'backward']                                                          |
| general.amplitude                               | number  | 1.0               |Specify the peak amplitude of the electric field, with the unit in V/m.            |
| general.phase                                   | number  | 0.0               |  pecify the initial phase of the  source, with the unit in degrees.                                             |
| general.mode_selection                          | string  |                   | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select', 'user_import']|
| general.mode_index                              | integer | 0                 |         Select the mode number from the list of calculated modes.                                                  |
| general.search                                  | string  | max_index         | Selections are ['max_index', 'near_n']                                                          |
| general.n                                       | number  | 1.0               |  Search mode near the specified effective refractive index.                        |
| general.number_of_trial_modes                   | integer | 20                |  Record the maximum number of modes in the mode list.    |
| general.waveform.waveform_id                    | object  |                   |  Select the ID of the added source pulse waveform.                                                                        |
| general.rotations.theta                         | number  | 0                 |   The angle between the propagation direction and the injection axis of source, with the unit in degrees.                  |
| general.rotations.phi                           | number  | 0                 |    In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.    |
| general.rotations.rotation_offset               | number  | 0                 |  Set an offset for the plane where the mode is calculated.   |
| bent_waveguide.bent_waveguide                   | boolean | False             |                                                                                                 |
| bent_waveguide.radius                           | number  | 1                 |  A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.                   |
| bent_waveguide.orientation                      | number  | 0                 |                                                                                                 |
| bent_waveguide.location                         | string  | simulation_center | Selections are ['simulation_center']                                                            |
| geometry.x                                      | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.y                                      | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.z                                      | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.z_span                                 | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.z_min                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.z_max                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.x_span                                 | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.x_min                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.x_max                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.y_span                                 | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.y_min                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| geometry.y_max                                  | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| override_default_boundary_conditions            | boolean | False             |                                                                                                 |
| boundary_conditions.x_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| boundary_conditions.x_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| boundary_conditions.y_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| boundary_conditions.y_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| boundary_conditions.z_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| boundary_conditions.z_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                |
| modal_analysis.calculate_group_index            | boolean | False             |                                                                                                 |
| modal_analysis.mode_removal.threshold           | number  |                   | A float, or a parameter, or a parameter expression that evaluates to a float                    |
| import_data.name                                | string  |                   | Input the name of the data                                                                      |
| import_data.path                                | string  |                   | Input file path                                                                                 |
| import_data.inject_axis                         | string  |                   | Selections are ['x_axis', 'y_axis', 'z_axis'], this setting overrides general.inject_axis       |
| import_data.reverse                             | boolean | False             |                                                                                                 |

 
Example:

The following script adds a mode source in FDTD, sets the position and dimension of the light source, as well as the mode profile and waveform.

```python

src = Project.Source()
src.add(name="source", type="mode_source",
                property={"general": {
                    "amplitude": 1, "phase": 0, "rotations": {"theta": 0, "phi": 0, "rotation_offset": 0},
                    "mode_selection": "fundamental", "waveform": {"waveform_id": wv[waveform_name]}, 
                    "inject_axis": "x_axis", "direction": "forward"},
                    "geometry": {"x": 0, "x_span": 0, "y": 0, "y_span": 3, "z": 0, "z_span": 3},
                    "modal_analysis": {"mode_removal": {"threshold": 0.01}}})
```

## 4.3 Gaussian source

The syntax and properties for adding gaussian source are as follows. This function does not return any data.

```python
add(
            self,
            *,
            name: str,
            type: Optional[str],
            property: dict,
    )
```

| Parameters |      Description      |
| :------------: | :-------------------: |
|      name      |   Assigning a name to the added source allows for differentiation between all sources that have been incorporated. |
|      type      |    Select the type of source, with options "mode_source" and "gaussian_source" available.|
|    property    | Enter the basic properties that define the source; if not entered, default parameters will be referenced.|


| Parameter                                 | Type    | Default                  | Description                                                                  |
|:------------------------------------------|:--------|:-------------------------|:-----------------------------------------------------------------------------|
| general.inject_axis                       | string  |                          | Selections are ['x_axis', 'y_axis', 'z_axis']                                |
| general.direction                         | string  | forward                  | Selections are ['forward', 'backward']                                       |
| general.amplitude                         | number  | 1.0                      |  Specify the peak amplitude of the electric field, with the unit in V/m.               |
| general.phase                             | number  | 0.0                      |   Specify the initial phase of the source, with the unit in degrees.     |
| general.waveform.waveform_id              | object  |  -                        | Select a waveform object                                                     |
| general.angle_theta                       | number  | 0                        | The angle between the propagation direction and the injection axis of source, with the unit in degrees.           |
| general.angle_phi                         | number  | 0                        |  In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.  |
| general.rotation_offset                   | number  | 0                        |   |
| general.polarization_angle                | number  | 0                        |  The polarization angle defines the orientation of the injected electric field. A polarization angle of zero degrees indicates P-polarized radiation, while an angle of 90 degrees indicates S-polarized radiation.                                                                              |
| general.beam_settings.beam_parameters     | string  | waist_size_and_position  | Selections are ['waist_size_and_position', 'beam_size_and_divergence']       |
| general.beam_settings.waist_radius        | number  |  -                        |     1/e field (1/e2 power) radius of the beam for a Gaussian beam .    |
| general.beam_settings.distance_from_waist | number  |  -                        | The distance between the injection plane and the beam waist. A positive distance indicates a diverging beam, while a negative distance indicates a converging beam.    |
| general.beam_settings.beam_radius         | number  | -                         |  1/e field (1/e2 power) radius of the beam for a Gaussian beam .   |
| general.beam_settings.divergence_angle    | number  |  -                        | The radiation divergence angle measured in the far field. A positive angle indicates a diverging beam, while a negative angle indicates a converging beam. |
| geometry.x                                | number  |   -                       | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y                                | number  |  -                        | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z                                | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_span                           | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_min                            | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.z_max                            | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_span                           | number  |  -                        | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_min                            | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.x_max                            | number  |  -                        | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_span                           | number  | -                         | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_min                            | number  |  -                        | A float, or a parameter, or a parameter expression that evaluates to a float |
| geometry.y_max                            | number  |-                          | A float, or a parameter, or a parameter expression that evaluates to a float |

Example:

The following script adds a gaussian source in FDTD, sets the position and dimension of the light source, as well as the mode profile and waveform.


```python
so.add(name="source", type="gaussian_source", axis="z_backward",
           property={"general": {"angle_theta": 0, "angle_phi": 0, "polarization_angle": 0, "waveform": {"waveform_id": wv[waveform_name]},
                                 "beam_settings": {"calculation_method": "use_scalar_approximation", 
                                                   "beam_parameters": "waist_size_and_position", 
                                                   "waist_radius": 5.2, "distance_from_waist": 1.5}},
                     "geometry": {"x": 4, "x_span": 20, "y": 0, "y_span": 20, "z": 1.5, "z_span": 0}})

```

# DipoleSource

| Parameter                                    | Type    | Default                  | Description                                                                  |
|:------------------------------------------|:--------|:-------------------------|:-----------------------------------------------------------------------------|
| general.dipole_type                       | string  |  -                        | Selections are ['electric_dipole', 'magnetic_dipole']                        |
| general.amplitude                         | number  |   -                       |                                                                              |
| general.phase                             | number  |  -                        |                                                                              |
| general.rotations.theta                   | number  | -                         |                                                                              |
| general.rotations.phi                     | number  | -                         |                                                                              |
| geometry.x                                | number  |-                          |                                                                              |
| geometry.y                                | number  |-                          |                                                                              |
| geometry.z                                | number  | -                         |                                                                              |
| waveform.waveform_id                      | object  |-                         | Select a waveform object                                                     |
      
## 4.3 FDTD port

Incorporate a port into the current FDTD simulation project. 

```python
add(
            self,
            *,
            type: Literal["fdtd_port"],
            name: str,
            property: dict,
    )
```

 # FDTDPort
        | title                                           | type    | default           | description                                                                      |
        |:------------------------------------------------|:--------|:------------------|:---------------------------------------------------------------------------------|
        | geometry.x                                      | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float.       |
        | geometry.x_span                                 | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.     |
        | geometry.x_min                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.x_max                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.y                                      | number  |  -                 |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.y_span                                 | number  | -                  |    A float, or a parameter, or a parameter expression that evaluates to a float.    |
        | geometry.y_min                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.y_max                                  | number  |-                   |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.z                                      | number  |-                   |   A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.z_span                                 | number  | -                  |    A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | geometry.z_min                                  | number  |-                   |   A float, or a parameter, or a parameter expression that evaluates to a float.      |
        | geometry.z_max                                  | number  |  -                 |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
        | override_default_boundary_conditions            | boolean | False             |       |
        | boundary_conditions.x_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | boundary_conditions.x_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | boundary_conditions.y_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | boundary_conditions.y_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | boundary_conditions.z_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | boundary_conditions.z_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
        | modal_properties.general.inject_axis            | string  | x_axis            |  To set the  inject axis of FDTD port source. Selections are ["x_axis", "y_axis", "z_axis"].    |
        | modal_properties.general.direction              | string  | forward           | To set the inject axis of FDTD port source. Selections are ["forward","banckward"]          |
        | modal_properties.general.amplitude              | number  | 1                 |                                                                                  |
        | modal_properties.general.phase                  | number  | 0                 |                                                                                  |
        | modal_properties.general.mode_selection         | string  | -                  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']|
        | modal_properties.general.mode_index             | integer | 0                 |                                                                                  |
        | modal_properties.general.search                 | string  | max_index         | Selections are ['max_index', 'near_n']                                           |
        | modal_properties.general.n                      | number  | 1.0               |                                                                                  |
        | modal_properties.general.number_of_trial_modes  | integer | 20                |                                                                                  |
        | modal_properties.bent_waveguide.bent_waveguide  | boolean | False             |                                                                                  |
        | modal_properties.bent_waveguide.radius          | number  | 1                 |   Set the waveguide radius for curved waveguide.                            |
        | modal_properties.bent_waveguide.orientation     | number  | 0                 |                                                                                  |
        | modal_properties.bent_waveguide.location        | string  | simulation_center | Set the bent center position of bent waveguides. Selections are ['simulation_center']  |
        | modal_analysis.calculate_group_index            | boolean | False             |                                                                                  |
        | modal_analysis.mode_removal.threshold           | number  |  -                 | A float, or a parameter, or a parameter expression that evaluates to a float     |

**Example:**

```python
pt = Project.Port(property={"waveform_id": wv_struct, "source_port": "port_left"})
pt.add(name="port_left", type="fdtd_port",
       property={"geometry": {"x": 0, "x_span": 0, "y": 0,
                              "y_span": 3, "z": 0, "z_span": 3},
                 "modal_properties": {"general": {"inject_axis": "x_axis", "direction": "forward",
									  "mode_selection": "fundamental",}}})
```


## 4.4 EME port

Incorporate a port into the current EME simulation project.

```python
add(
            self,
            *,
            type: Literal["eme_port"],
            name: str,
            property: dict,
    )
```

| **Parameters** |    Description     |
| :------------: | :----------------: |
|      name      |   The name of EME port source defined in the project.  |
|      type      |   To decide the type of the EME port source.      |
|    property    | The property of the EME port source. |

         |

# EMEPort
| Parameter                                        | Type    | Default           | Description                                                                                                              |
|:---------------------------------------------|:--------|:------------------|:-------------------------------------------------------------------------------------------------------------------------|
| geometry.port_location                       | string  |  -                 |  Set the location of EME port. Selections are ['left', 'right']                      |
| geometry.use_full_simulation_span            | boolean | True              |   Set whether the port uses the full simulation area. Selections are ['True', 'False']                         |
| geometry.x                                      | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float.       |
| geometry.x_span                                 | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.     |
| geometry.x_min                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.x_max                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.y                                      | number  |  -                 |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.y_span                                 | number  | -                  |    A float, or a parameter, or a parameter expression that evaluates to a float.    |
| geometry.y_min                                  | number  | -                  |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.y_max                                  | number  |-                   |  A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.z                                      | number  |-                   |   A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.z_span                                 | number  | -                  |    A float, or a parameter, or a parameter expression that evaluates to a float.   |
| geometry.z_min                                  | number  |-                   |   A float, or a parameter, or a parameter expression that evaluates to a float.      |
| geometry.z_max                                  | number  |  -                 |  A float, or a parameter, or a parameter expression that evaluates to a float.   | 
| eme_port.general.mode_selection              | string  |  -                 | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']|
| eme_port.general.mode_index                  | integer | 0                 |    Under the "user_select" condition, use this parameter to decide the source mode.                             |
| eme_port.general.number_of_trial_modes       | integer | 20                |                                                                                                                          |
| eme_port.general.search                      | string  | max_index         | Selections are ['max_index', 'near_n']                                                                                   |
| eme_port.general.n                           | number  | 1.0               |                                                                                                                          |
| eme_port.bent_waveguide.bent_waveguide       | boolean | False             |                                                                                                                          |
| eme_port.bent_waveguide.radius               | number  | 1                 |  Set the waveguide radius for curved waveguide.                                                     |
| eme_port.bent_waveguide.orientation          | number  | 0                 |                                                                                                                          |
| eme_port.bent_waveguide.location             | string  | simulation_center | Selections are ['simulation_center']                                                                                     |
| eme_port.import_data.name                    | string  |-                   | Input the name of the data                                                                                               |
| eme_port.import_data.path                    | string  | -                  | Input file path                                                                                                          |
| eme_port.import_data.reverse                 | boolean | False             |                                                                                                                          |
| override_default_boundary_conditions         | boolean | False             |                                                                                                                          |
| boundary_conditions.y_min_bc                 | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                                         |
| boundary_conditions.y_max_bc                 | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                                         |
| boundary_conditions.z_min_bc                 | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                                         |
| boundary_conditions.z_max_bc                 | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                                                         |
| modal_analysis.calculate_group_index         | boolean | False             |                                                                                                                          |
| modal_analysis.mode_removal.threshold        | number  |-                   | A float, or a parameter, or a parameter expression that evaluates to a float                                             |

**Example:**
The following script adds ports in EME, selects the mode of 'port1' as the light source, and sets the calculation port mode to the 0th mode and the size is the span of the full simulation area.
```python
pjp = Project.Port(property={"source_port": "port1"})
pjp.add(name="port1", type="eme_port",
        property={"geometry": {"port_location": "left", "use_full_simulation_span": True},
                  "eme_port": {"general": {"mode_selection": "user_select", "mode_index": 0},
                               "advanced": {"offset": 0, "number_of_trial_modes": 20}}})
pjp.add(name="port2", type="eme_port",
        property={"geometry": {"port_location": "right", "use_full_simulation_span": True},
                  "eme_port": {"general": {"mode_selection": "user_select", "mode_index": 0},
                               "advanced": {"offset": 0, "number_of_trial_modes": 20}}})                         
```

</div>


</font>


