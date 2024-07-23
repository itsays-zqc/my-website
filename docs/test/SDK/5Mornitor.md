
# Monitor

<font face = "Calibri">

<div class="text-justify">

The monitor is used to record or extract the results of interest in the simulation. Using `Monitor()` to instance the monitor module to the projec, the available monitor types are "index_monitor", "time_monitor", "power_monitor", "profile_monitor" and "global_option".


## 5.1 Index Monitor

The syntax and properties for adding index monitor are as follows. This function does not return any data.

```python
add(
        name: str,
        typename: Literal["index_monitor"],
        property: dict,
    ):
```

#### Geometry
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| monitor_type          | string  | -          | The types of index monitor that can be selected are "2d_x_normal","2d_y_normal" and "2d_z_normal".   |
| x, y, z                | number  |     -    | The center position of the index monitor. |
| X span, Y span, z_span | number  |     -   | Xspan, Y span, Z span of the index monitor. |
| x_min, x_max           | number  |     -     | X min, X max position of the index monitor. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the index monitor. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the index monitor. |

**Example:**
The following script add a 2D index monitor and set its dimension and position. This script assumes that FDTD or EME solver has been added to the simulation environment, and the pj is an instance of the project.

```python
mn = pj.Monitor()
mn.add(name="x_normal_index", type="index_monitor",
        property={"geometry": {"monitor_type": "2d_x_normal",
                              "x": 0, "x_span": 0, "y": 0, "y_span": 3, "z": 0, "z_span": 6}
                    })
```

## 5.2 Time monitor

The syntax and properties for adding time monitor are as follows. This function does not return any data.

```python
add(
        name: str,
        typename: Literal["time_monitor"],
        property: dict,
    ):
```
### General
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  stop_method                | string  | "end_of_simulation" | Selects "end_of_simulation", "choose_stop_time" or "choose_number_of_snapshots" to stop recording data.  |
|  start_time                | number  | 0                 |  The time to start recording data.                                              |
|   stop_time               | number  | 1000             |   The time to stop recording data.         |
|  number_of_snapshots       | integer |10 |       The number of time step to record, related to the dt setting in mesh settings.   |

### Geometry 
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| monitor_type    | string | -          | Selects "point", "2d_x_normal","2d_y_normal","2d_z_normal", "x_linear", "y_linear", "z_linear" or "three_dimension" to control of spatial setting.|
| x, y, z               | number  |     -    | The center position of the time monitor. |
| x_span,  y_span, z_span | number  |     -   | X span, Y span, Z span of the time monitor. |
| x_min, x_max           | number  |     -     | X min, X max position of the time monitor. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the time monitor. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the time monitor. |

<!-- ### Data to record                                                                                                                   -->

### Advancd 

sampling_rate: Sets "min_stampling_per_cycle" to control the minimum sampling amount that can be used for each optical cycle.

**Example:**
The following script add a time monitor and set its dimension and position. This script assumes that FDTD solver has been added to the simulation environment, and the pj is an instance of the project.

```python
mn = pj.Monitor()
mn.add(name="time_monitor1", type="time_monitor",
           property={"general": {
               "stop_method": "end_of_simulation", "start_time": 0, "stop_time": 100, "number_of_snapshots": 10},
               "geometry": {"monitor_type": "point", "x": 0, "x_span": 0, "y": 0, "y_span": 0, "z": 0, "z_span": 0},
               "advanced": {"sampling_rate": {"min_sampling_per_cycle": 10}}})
```

## 5.3 Power monitor

The syntax and properties for adding power monitor are as follows. This function does not return any data.

```python
add(
        name: str,
        typename: Literal["power_monitor"],
        property: dict,
    ):
```


### Frequency profile 
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  use_source_limits                         | boolean | False             |    Choose whether to use light source limits to set the wavelength/frequency range for recording data.      |
|   spacing type                              | string  | wavelength        | Selects are "wavelength" or "frequency" to control the interval at which data is recorded.           |
|   spacing_limit                             | string  | min_max           | Selects "min_max" or "center_span" to control of spacing limit setting.                    |
| wavelength center, frequency center     | number  |      -             |Set frequency or wavelength center for recording data.                                            |
|  wavelength span, frequency span     | number  |-                   | Sets frequency or wavelength span for recording data.           |
|  wavelength min, wavelength wax                            | number  | -                  | Set the minimum and maximum wavelength for recording data.       |
| frequency min, frequency max       | number  | -                  |Sets the minimum and maximum frequency for recording data.        |
| frequency_points                | integer | 5                 |    Sets the number of frequency points for recording data.     |

<!-- |  sample spacing                            |    string              |                                            | -->
<!-- |  use_wavelength_spacing                    | boolean | True              |                             | -->

### Geometry
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| monitor_type    | string | -          | Selects "point", "2d_x_normal","2d_y_normal","2d_z_normal", "x_linear", "y_linear" or "z_linear" to control of spatial setting.|
| x, y, z               | number  |     -    | The center position of the power monitor. |
| X span, Y span, z_span | number  |     -   | Xspan, Y span, Z span of the power monitor. |
| x_min, x_max           | number  |     -     | X min, X max position of the power monitor. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the power monitor. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the power monitor. |

### Data to record 
Fields: <br/>   
output ex, ey, ez, hx, hy, hz: Choose whether to measure that field component. In 2D simulation, only some field components are non-zero.   <br/>                    
poynting_vector_and_power: <br/>   
output px, py, pz, power: Choose whether to output the results of poynting vector and transmittance. In 2D simulation, only some components are non-zero.
                                                                                   

**Example:**
The following script add a power monitor and set its dimension and position. This script assumes that FDTD solver has been added to the simulation environment, and the pj is an instance of the project.

```python
mn = pj.Monitor()
mn.add(name="z_normal", type="power_monitor",
        property={"geometry": {"monitor_type": "2d_z_normal","x": 0, "x_span": 5, "y": 0, "y_span": 5, "z": 0, "z_span": 0}})
```

## 5.4 Profile monitor

The syntax and properties for adding properties monitor are as follows. This function does not return any data.


```python
add(
        name: str,
        typename: Literal["profile_monitor"],
        property: dict,
    ):
```

### Geometry properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| monitor type    | string | -          | Selects are "2d_x_normal","2d_y_normal" and "2d_z_normal" to control of spatial setting.      |
| x_resolution | integer | 100       |   The resolution of output simulation results of profile monitor.        |
| x, y, z               | number  |     -    | The center position of the profile monitor. |
| x_span, y_span, z_span | number  |     -   | X span, Y span, Z span of the profile monitor. |
| x_min, x_max           | number  |     -     | X min, X max position of the profile monitor. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the profile monitor. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the profile monitor. |

**Example:**
The following script add a profile monitor and set its dimension and position. This script assumes that EME solver has been added to the simulation environment, and the pj is an instance of the project.

```python
mn = pj.Monitor()
mn.add(name="y_normal", type="profile_monitor",
       property={"geometry": {"monitor_type": "2d_y_normal", "x_resolution": 100,
                              "x": 0, "x_span": 206, "y": 0, "y_span": 0, "z": 0, "z_span": 7}})
```

## 5.5 Global monitor/option

The syntax and properties for adding global monitor/option are as follows. This function does not return any data.

```python
add(
        name: str,
        typename: Literal["global_monitor, global_optional"],
        property: dict,
    ):
```

### Frequency power properties
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|  use_source_limits                         | boolean | False             |    Choose whether to use light source limits to set the wavelength/frequency range for recording data.      |
|   spacing type                              | string  | wavelength        | Selects are "wavelength" or "frequency" to control the interval at which data is recorded.           |
|   spacing_limit                             | string  | min_max           | Selects "min_max" or "center_span" to control of spacing limit setting.                    |
| wavelength center, frequency center     | number  |      -             |Set frequency or wavelength center for recording data.                                            |
|  wavelength span, frequency span     | number  |-                   | Sets frequency or wavelength span for recording data.           |
|  wavelength min, wavelength wax                            | number  | -                  | Set the minimum and maximum wavelength for recording data.       |
| frequency min, frequency max       | number  | -                  |Sets the minimum and maximum frequency for recording data.        |
| frequency_points                | integer | 5                 |    Sets the number of frequency points for recording data.     |

### Advanced 
min_sampling_per_cycle: Sets the minimum sampling amount that can be used for each optical cycle.

**Example:**
The following script add the global monitor and set its frequency domain range and number of frequency points. This script assumes that FDTD solver has been added to the simulation environment, and the pj is an instance of the project.

```python
mn = pj.Monitor()
mn.add(name="Global Option", type="global_option",
       property={"frequency_power": {  # "sample_spacing": "uniform", "use_wavelength_spacing": True,
           # ["min_max","center_span"]
           "spacing_type": "wavelength", "spacing_limit": "center_span",
           "wavelength_center": 1.5, "wavelength_span": 0.1, "frequency_points": 11}})
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
    mn.add(name="band_monitor", type="band_monitor", property={
        "general": {"interpolate_accuracy": 1},
        "geometry": {"monitor_type": "y_linear", "x": st_x_mean, "x_span": 0,
                     "y": st_y_mean, "y_span": st_y_span, "z": 0.08, "z_span": 0}
    })

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
|     geometry.monitor_type     |         | string  | Set the dimension type of the monitor. For electrical monitors, only 1D type and 2D type are available currently. Selections are ["linear_x", "linear_y", "linear_z"]. |
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
| geometry.interpolate_accuracy |    1    | integer |  Set the accuracy of the rectangular grid for extracting the monitor result.  Restrained by condition: >=1 && <= 10. Here 1 means the grid size is 10nm, and 10 means the grid size is 1nm, and the grid size varies uniformly with the variation in "interpolate_accuracy".         |


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
    mn.add(name="charge_monitor", type="charge_monitor", property={
        "general": {"interpolate_accuracy": 1},
        "geometry": {"monitor_type": "2d_x_normal", "x": st_x_mean, "x_span": 0,
                     "y": st_y_mean, "y_span": st_y_span, "z": st_z_mean, "z_span": st_z_span}
    })

```

|         **Parameters**         | Default |  Type   |                            Notes                             |
| :----------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|    general.record_electrons    |  true   |  bool   | The distribution of electron concentration in monitor. |
|      general.record_holes      |  true   |  bool   |  The distribution of hole concentration in monitor.     |
| general.integrate_total_charge |  true   |  bool   | Available when monitor_type is in ["2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
|     geometry.monitor_type      |         | string  | Selections are ["linear_x", "linear_y", "linear_z", "2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
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

    mn.add(name="elec_monitor", type="electrical_monitor", property={
        "general": {"interpolate_accuracy": 1},
        "geometry": {"monitor_type": "2d_x_normal", "x": st_x_mean, "x_span": 0,
                     "y": st_y_mean, "y_span": st_y_span, "z": st_z_mean, "z_span": st_z_span}
    })
```

|             **Parameters**             | Default |  Type   |                            Notes                             |
| :------------------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|     general.record_electrics_field     |  true   |  bool   | The distribution of electric field in monitor.       |
| general.record_electrostatic_potential |  true   |  bool   |  The distribution of electric potential in monitor.        |
|      general.calculate_net_charge      |  true   |  bool   | Available when monitor_type is in ["2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
|         geometry.monitor_type          |         | string  | Selections are ["linear_x", "linear_y", "linear_z", "2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
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


## 5.7 Doping monitor

Integrate an electric monitor into the current project.

```python
add(
            self,
            *,
            type: Literal["doping_monitor"],
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

    mn.add(name="doping_monitor", type="doping_monitor", property={
        "general": {"interpolate_accuracy": 4},
        "geometry": {"monitor_type": "2d_x_normal", "x": st_x_mean, "x_span": 0,
                     "y": 0, "y_span": 0.8, "z_min": -0.1, "z_max": 0.3}
    })
```

|             **Parameters**             | Default |  Type   |                            Notes                             |
| :------------------------------------: | :-----: | :-----: | :----------------------------------------------------------: |
|     general.donor     |  true   |  bool   | The distribution of electric field in monitor.       |
| general.acceptorl |  true   |  bool   |  The distribution of electric potential in monitor.        |
|         geometry.monitor_type          |         | string  | Selections are [ "2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
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