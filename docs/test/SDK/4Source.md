# Source/Port

<font face = "Calibri">

<div class="text-justify">

The subsequent code will exemplify the process of incorporating a light source and port within a simulation project.

As of now, the source module accommodates the inclusion of mode source and Gaussian source. Furthermore, our platform extends support for ports into both EME and FDTD simulations.  

## 4.1 Waveform

In FDTD simulations, waveforms are utilized to control the bandwidth of the source pluse. You can simply enter the central wavelength and range into the added waveform, and the bandwidth and shape of the pulse source will be automatically calculated.


The syntax and properties for adding waveform is as follows. This function does not return any data.

```python
add(        
        self,
        name: str,
        type: Optional[str],
        property: dict
    )

```

#### Set frequency wavelength properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| range_type       | string  |  -         | selections are ['frequency','wavelength']                                    |
| range_limit      | string  |  -         | selections are ['min_max','center_span']                                     |
|  wavelength center, wavelength center  | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
|  wavelength span, frequency span  | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |
|  wavelength min, wavelength max        | number  | -               | A float, or a parameter, or a parameter expression that evaluates to a float |
|  frequency_min, frequency max          | number  |-                | A float, or a parameter, or a parameter expression that evaluates to a float |

#### Set time domain properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| pulse_type                | string  |   -        | selections are ['standard','broadband']                                      |
| frequency                 | number  |      -     | A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0. |
| pulselength               | number  |    -       |   A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.  |
| offset                    | number  |     -      |  A float, or a parameter, or a parameter expression that evaluates to a float. |
| bandwidth                 | number  |      -     |  A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0. |


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
        name: str,
        type: Literal["mode_source"],
        property: dict,
    )
```

#### General properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| inject_axis                             | string  |                   | Selections are ['x_axis', 'y_axis', 'z_axis']                                                   |
| direction                               | string  | forward           | Selections are ['forward', 'backward']                                                          |
| amplitude                               | number  | 1.0               |Specify the peak amplitude of the electric field, with the unit in V/m.            |
| phase                                   | number  | 0.0               |  pecify the initial phase of the  source, with the unit in degrees.                                             |
| mode_selection                          | string  |                   | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select', 'user_import']|
| mode_index                              | integer | 0                 |         Select the mode number from the list of calculated modes.                                                  |
| search                                  | string  | max_index         | Selections are ['max_index', 'near_n']                                                          |
| n                                       | number  | 1.0               |  Search mode near the specified effective refractive index.                        |
| number_of_trial_modes                   | integer | 20                |  Record the maximum number of modes in the mode list.    |
| general.waveform.waveform_id                    | object  |                   |  Select the ID of the added source pulse waveform.                                                                        |
| general.rotations.theta                         | number  | 0                 |   The angle between the propagation direction and the injection axis of source, with the unit in degrees.                  |
| general.rotations.phi                           | number  | 0                 |    In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.    |
| general.rotations.rotation_offset               | number  | 0                 |  Set an offset for the plane where the mode is calculated.   |
| bent_waveguide.bent_waveguide                   | boolean | False             |                                                                                                 |
| bent_waveguide.radius                           | number  | 1                 |  A float, or a parameter, or a parameter expression that evaluates to a float. Restrained by condition: >0.                   |
| bent_waveguide.orientation                      | number  | 0                 |                                                                                                 |
| bent_waveguide.location                         | string  | simulation_center | Selections are ['simulation_center']                                                            |

#### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  x, y, z               | number  |     -    | The center position of the geometry. |
|  x_span, y_span, z_span         | number  |     -   | X span, Y span, Z span of the geometry. |
|  x_min, x_max           | number  |     -     | X min, X max position of the geometry. |
|  y_min, y_max           | number  |     -     | Y min, Y max position of the geometry. |
|  z_min, z_max           | number  |     -     | Z min, Z max position of the geometry. |


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
        name: str,
        type: Literial["gaussian_source"],
        property: dict,
    )
```
#### General properties
| Parameter                                 | Type    | Default                  | Description                                                                  |
|:------------------------------------------|:--------|:-------------------------|:-----------------------------------------------------------------------------|
|  inject_axis                       | string  |                          | Selections are ['x_axis', 'y_axis', 'z_axis']                                |
|  direction                         | string  | forward                  | Selections are ['forward', 'backward']                                       |
|  amplitude                         | number  | 1.0                      |  Specify the peak amplitude of the electric field, with the unit in V/m.               |
|  phase                             | number  | 0.0                      |   Specify the initial phase of the source, with the unit in degrees.     |
| general.waveform.waveform_id              | object  |  -                        | Select a waveform object                                                     |
|  angle_theta                       | number  | 0                        | The angle between the propagation direction and the injection axis of source, with the unit in degrees.           |
|  angle_phi                         | number  | 0                        |  In a right-hand coordinate system, the angle of propagation is rotated around the injection axis of the source.  |
|  rotation_offset                   | number  | 0                        |   |
|  polarization_angle                | number  | 0                        |  The polarization angle defines the orientation of the injected electric field. A polarization angle of zero degrees indicates P-polarized radiation, while an angle of 90 degrees indicates S-polarized radiation.                                                                              |
| general.beam_settings.beam_parameters     | string  | waist_size_and_position  | Selections are ['waist_size_and_position', 'beam_size_and_divergence']       |
| general.beam_settings.waist_radius        | number  |  -                        |     1/e field (1/e2 power) radius of the beam for a Gaussian beam .    |
| general.beam_settings.distance_from_waist | number  |  -                        | The distance between the injection plane and the beam waist. A positive distance indicates a diverging beam, while a negative distance indicates a converging beam.    |
| general.beam_settings.beam_radius         | number  | -                         |  1/e field (1/e2 power) radius of the beam for a Gaussian beam .   |
| general.beam_settings.divergence_angle    | number  |  -                        | The radiation divergence angle measured in the far field. A positive angle indicates a diverging beam, while a negative angle indicates a converging beam. |

#### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  x, y, z               | number  |     -    | The center position of the geometry. |
|  x_span, y_span, z_span         | number  |     -   | X span, Y span, Z span of the geometry. |
|  x_min, x_max           | number  |     -     | X min, X max position of the geometry. |
|  y_min, y_max           | number  |     -     | Y min, Y max position of the geometry. |
|  z_min, z_max           | number  |     -     | Z min, Z max position of the geometry. |

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
     
## 4.3 FDTD port

Incorporate a port into the current FDTD simulation project. 

```python
add(
        type: Literal["fdtd_port"],
        name: str,
        property: dict,
    )
```

### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  x, y, z               | number  |     -    | The center position of the geometry. |
|  x_span, y_span, z_span         | number  |     -   | X span, Y span, Z span of the geometry. |
|  x_min, x_max           | number  |     -     | X min, X max position of the geometry. |
|  y_min, y_max           | number  |     -     | Y min, Y max position of the geometry. |
|  z_min, z_max           | number  |     -     | Z min, Z max position of the geometry. |
| override_default_boundary_conditions            | boolean | False             |       |
### Boundary conditions properties
| x_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
| x_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
| y_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
| y_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
| z_min_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |
| z_max_bc                    | string  | PEC               | Selections are ['PEC', 'PMC', 'PML', 'periodic']                                 |

#### Modal properties
|  inject_axis            | string  | x_axis            |  To set the  inject axis of FDTD port source. Selections are ["x_axis", "y_axis", "z_axis"].    |
|  direction              | string  | forward           | To set the inject axis of FDTD port source. Selections are ["forward","banckward"]          |
|  amplitude              | number  | 1                 |                                                                                  |
|  phase                  | number  | 0                 |                                                                                  |
|  mode_selection         | string  | -                  | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'user_select']|
|  ode_index             | integer | 0                 |                                                                                  |
|  search                 | string  | max_index         | Selections are ['max_index', 'near_n']                                           |
|  n                      | number  | 1.0               |                                                                                  |
|  number_of_trial_modes  | integer | 20                |                                                                                  |
|  bent_waveguide  | boolean | False             |                                                                                  |
|  radius          | number  | 1                 |   Set the waveguide radius for curved waveguide.                            |
|  orientation     | number  | 0                 |                                                                                  |
|  location        | string  | simulation_center | Set the bent center position of bent waveguides. Selections are ['simulation_center']  |
|  calculate_group_index            | boolean | False             |                                                                                  |
|  threshold           | number  |  -                 | A float, or a parameter, or a parameter expression that evaluates to a float     |

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

### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| port_location                       | string  |  -                 |  Set the location of EME port. Selections are ['left', 'right']                      |
| use_full_simulation_span            | boolean | True              |   Set whether the port uses the full simulation area. Selections are ['True', 'False']                         |
| x, y, z               | number  |     -    | The center position of the geometry. |
| x span, y span, z span | number  |     -   | Xspan, Y span, Z span of the geometry. |
| x min, x_max           | number  |     -     | X min, X max position of the geometry. |
| y min, y max           | number  |     -     | Y min, Y max position of the geometry. |
| z min, z max           | number  |     -     | Z min, Z max position of the geometry. |

### EME port properties
|  mode_selection              | string  |  -                 | Selections are ['fundamental', 'fundamental_TE', 'fundamental_TM', 'fundamental_TE_and_TM', 'user_select', 'user_import']|
|  general.mode_index                  | integer | 0                 |    Under the "user_select" condition, use this parameter to decide the source mode.                             |
|  number_of_trial_modes       | integer | 20                |                                                                                                                          |
|  search                      | string  | max_index         | Selections are ['max_index', 'near_n']                                                                                   |
|  n                           | number  | 1.0               |                                                                                                                          |
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


