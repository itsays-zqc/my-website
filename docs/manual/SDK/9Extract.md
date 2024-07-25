# Extract result

<font face = "Calibri">

<div class="text-justify">



|                        **Parameters**                        |                         Description                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                       PowerAttributes                        | The following are power related physical attributes. Literal["E", "Ex", "Ey", "Ez", "H", "Hx", "Hy", "Hz", "Px", "Py", "Pz", "Energy density"] |
|                        ModeAttributes                        | The following are mode related physical attributes. Literal["a", "b", "n", "p", "N", "P", "t_forward", "t_backward", "T_forward", "T_backward"] |
|                                                              | The following are other attributes which can be extracted. Literal["TEratio", "neff_real", "neff_imag", "ng_real", "ng_imag", "wavelength_nm", "loss_dBpcm"] |

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|      data      |          To decide what type/field data will be extracted.           |
|   export_csv   |          Whether to export a csv. Default as False.          |
|      show      | Whether to show the picture. If set to False, the picture will be saved instead. Default as False. |
|    savepath    |              The save path of picture . Default as "a".              |
|     target     |    How the data is organized/displayed. Default as None.     |
|   attribute    | Which attribute will extracted, in few cases this parameter is not needed. Default as None. |
|      real      |      Whether to add real part of data. Default as True.      |
|      imag      | Whether to add imag part of data. If both real and imag is activate, "ABS" data will be extracted. Default as True. |
|     plot_x     |         The selection of x axis of heatmap or line plot.         |
|     plot_y     |               The selection of y axis of heatmap.                |
|     **kwargs     | Other visualization parameters. For example: "monitor_name" , "mode_expansion_name" for "fdtd:mode_expansion". |



## 8.1 FDE

In this section, we will provide examples for extracting simulation result data from FDE simulation, along with a description table of parameters.


### 8.1.1 Calculate mode result

Get the result of calculated mode.

```python

extract(
        self,
        data: Literal["fdtd:power_monitor"],
        savepath: str,
        target: Optional[enums.TargetType],
        attribute: Optional[str],
        real: bool,
        imag: bool,
        monitor_name: str,
        wavelength: Optional[Union[StrictInt, StrictStr]] = None,
        plot_x: Optional[str] = None,
        plot_y: Optional[str] = None,
        show: bool = False,
        export_csv: bool = False,
        export_mat: bool = False,
        export_zbf: bool = False,
    )
```

**Example:**

```python
result_fde.extract(data="calculate_modes", savepath=f"{plot_path}{k}_mode{m}",
                   attribute="E", mode=m, real=True, imag=True, **export_options, show=False)
```



### 8.1.2 Far-field FDE result

Get the result of  calculated far-field FDE.

```python
extract(
        self,
        *,
        # target - table
        data: Literal["farfield_fde"],
        attribute: PowerAttributes,
        
        show=False, 
        export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = "a",
        mode: int,
    )
```

**Example:**

```python
fde_res.extract(data="farfield_fde", savepath=f"{plot_path}05_{simu_name}_far_field",
                                attribute="E", mode=0, export_csv=True)
```



### 8.1.3 Mesh structure result

To extract the result of meshing structure.

```python
extract(
        self,
        *,
        data: Literal["mesh_structure"],
        savepath:Any = "a",
        target: Literal["intensity"] = "intensity",
        export_csv=False, export_mat=False, export_zbf=False,
        show=False,
    )
```

**Example:**

```python
simu.add(name=simu_name+"_cal_mode", type="mode_selection:user_select", simulation_name=simu_name, source_name="source",
                 property={"modal_analysis": {"mesh_structure": True, "calculate_modes": True,
                                              "wavelength": wavelength, "number_of_trial_modes": 10, "search": "max_index", "calculate_group_index": True}})
```



### 8.1.4 Frequency analysis result

To extract the result of frequency analysis.

```python
extract(
        self,
        *,
        target: Literal["line"] = "line",
        data: Literal["frequency_analysis"],
        attribute: Literal["neff", "group_index", "loss", "polarization"],
        
        export_csv=False, export_mat=False, export_zbf=False, 
        show=False, 
        real=True, 
        imag=True, 
        savepath:Any = "a",
        plot_x: OptStr=None
    )
```

**Example:**

```python
result_fde.extract(data="frequency_analysis", savepath=f"{plot_path}{k}_freq_sweep_neff",
                                   attribute="neff", real=True, imag=True, export_csv=True, export_mat=True, show=False)

```



## 8.2 EME

To extract the relevant data of EME module. 

### 8.2.1 EME propagate:facet data

Get the result of calculated facet data of EME propagation.

```python
extract(
            self,
            *,
            data: Literal[
                "eme_propagate:facet_data",
            ],
            export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = "a",
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:facet_data", savepath=plot_path, real=True, imag=True, export_csv=True)
```



### 8.2.2 EME propagate:monitor

Get the result of monitor data of EME propagation.

```
extract(
        self,
        *,
        data: Literal[
            "eme_propagate:monitor",
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(
                data="eme_propagate:monitor", savepath=plot_path + "013_eme_y_normal",
                monitor_name="y_normal", attribute="E", export_csv=True)

```



### 8.2.3 Propagation sweep:monitor

Get the result of monitor data of propagation sweep.

```python
extract(
        self,
        *,
        data: Literal[
            "propagation_sweep:monitor",
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_z_normal",
                            monitor_name="z_normal", attribute="E", export_csv=True)

```



### 8.2.4 Wavelength sweep:monitor

Get the result of monitor data of wavelength sweep.

```python
extract(
        self,
        *,
        data: Literal[
            "wavelength_sweep:monitor",
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data="wavelength_sweep:sweep", savepath=plot_path + "20_wavelength_sweep",
                            plot_x="wavelength", export_csv=True)
```



### 8.2.5 EME propagate:smatrix

Get the result of smatrix data of EME propagation.

```python
extract(
        self,
        *,
        data: Literal[
            "eme_propagate:smatrix",
        ],
        target: Literal["intensity"] = "intensity",
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",
                            target="intensity", export_csv=True)
```



### 8.2.6 EME propagate:port mode infomation

Get the result of port mode data of EME propagation.

```python
extract(
        self,
        *,
        # target - intensity
        data: Literal["eme_propagate:port_mode_info"],
        target: Literal["intensity"] = "intensity",
        attribute: Literal["E", "H"],
        port_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Any = None,
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",
                            target="intensity", export_csv=True)
```



### 8.2.7 EME propagate:port mesh structure

Get the result of port mesh structure data of EME propagation.

```python
extract(
        self,
        *,
        # target - intensity
        data: Literal["eme_propagate:port_mesh_structure"],
        port_name: str,
        target: Literal["line", "intensity"] = "intensity",
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:port_mesh_structure",
                                      savepath=f"{plot_path}{kL[3]}_eme_structure_{port_name}",
                                      port_name=port_name, target="intensity",
                                      # plot_x="y", plot_y="z", export_csv=False, show=False
                                      )
```



### 8.2.8 EME propagate:cell mesh structure

Get the result of cell mesh structure data of EME propagation.

```python
extract(
        self,
        *,
        data: Literal[
            "eme_propagate:cell_mesh_structure",
        ],
        target: Literal["intensity", "line"],
        cell_params: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data="eme_propagate:cell_mesh_structure",
                                      savepath=f"{plot_path}{kL[4]}_eme_c{cell_index}_index",
                                      cell_params="c" + str(cell_index), target="intensity", plot_x="y", plot_y="z",
                                      # export_csv=False, show=False
                                      )
```

### 8.2.9 EME propagate:port overlap

Get the result of port overlap data of EME propagation.

```python
def extract(
        self,
        *,
        data: Literal[
            "eme_propagate:port_overlap",
        ],
        target: Literal["line"] = "line",
        port_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    ) 
```

### 8.2.10 EME propagate:cell mode information

Get the result of cell mode information of EME propagation.

```python
extract(
        self,
        *,
        target: Literal["intensity"] = "intensity",
        data: Literal[
            "eme_propagate:cell_mode_info",
        ],
        attribute: Literal["E", "H"],
        cell_params: str,
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Any = None,
    )
```

### 8.2.11 EME propagate:propagation field

Get the result of propagation field of EME propagation.

```python
extract(
        self,
        *,
        data: Literal[
            "eme_propagate:prop_field",
        ],
        # target: intensity",
        attribute:PowerAttributes,
        cell_params: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

### 8.2.12 EME propagate:internal S

Get the result of internal S data of EME propagation.

```python
extract(
        self,
        *,
        data: Literal[
            "eme_propagate:internal_s",
        ],
        target: Literal["intensity"] = "intensity",
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    ) 
```
    
### 8.2.13 EME propagate:cell p matrix/cell overlap/cell S/propagation S

Get the result of cell p matrix/cell overlap/cell S/propagation S
 data of EME propagation.

```python
    def extract(
        self,
        *,
        data: Literal[
            "eme_propagate:cell_p_matrix",
            "eme_propagate:cell_overlap",
            "eme_propagate:cell_s",
            "eme_propagate:prop_s",
        ],
        target: Literal["intensity"] = "intensity",
        cell_params: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```


## 8.3 FDTD

To extract the relevant data of FDTD module. 

### 8.3.1 FDTD:power monitor

Get the result of power monitor data of FDTD.

```python
extract(
        self,
        *,
        data: Literal["fdtd:power_monitor"],
        target: Literal["intensity", "line"],
        attribute: Union[PowerAttributes, Literal["T"]],
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
        wavelength: Optional[Any] = None,
    )
```

**Example:**

```python

fdtd_res.extract( data="fdtd:power_monitor", savepath="path_name",
                target="intensity", attribute="E", real=True, imag=False, monitor_name="monitor_name", plot_x="x", plot_y="y", show=False, export_csv=True)

fdtd_res.extract( data="fdtd:power_monitor", savepath="path_name",
                target="line", attribute="T", real=True, imag=False, monitor_name="monitor_name", plot_x="wavelength", show=False, export_csv=True)
            
```



### 8.3.2 FDTD:time monitor

Get the result of FDTD time monitor data.

```python
extract(
        self,
        *,
        data: Literal["fdtd:time_monitor"],
        target: Literal["intensity", "line"],
        attribute: Union[PowerAttributes, Literal["T"]],
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
        wavelength: Optional[Any] = None,
    )
```

**Example:**

```python

fdtd_res.extract(data='fdtd:time_monitor', savepath=f'{plot_path}08_TransVstime',
                         monitor_name='time_monitor_name', target='line', attribute='E',plot_x='time', real=True, imag=False, export_csv=True, show=False)

fdtd_res.extract( data="fdtd:time_monitor", savepath=f"{plot_path}08_linear",
                target="line", attribute="E", real=True, imag=False, monitor_name="time_monitor_1D", time=f"{0}", plot_x="y", show=False, export_csv=True)

fdtd_res.extract( data="fdtd:time_monitor", savepath=f"{plot_path}08_2D",
                target="intensity", attribute="E", real=True, imag=False, monitor_name="time_monitor_2D", time=f"{0}", plot_x="y",plot_y="z", show=False, export_csv=True)

fdtd_res.extract( data="fdtd:time_monitor", savepath=f"{plot_path}08_time_3D",
                target="intensity", attribute="E", real=True, imag=False, monitor_name="time_monitor_3D", time=f"{0}", x=f"{0}", plot_x="y",plot_y="z", show=False, export_csv=True)

```



### 8.3.3 FDTD:mode expansion

Get the result of FDTD mode expansion data.

```python
extract(
        self,
        *,
        data: Literal["fdtd:mode_expansion"],
        target: Literal["intensity", "line"],
        attribute: ModeAttributes,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Optional[Any] = None,
        wavelength: Optional[Any] = None,
        monitor_name: str,
        mode_expansion_name: str,
    )
```

**Example:**

```python

me_res.extract( data="fdtd:mode_expansion", savepath=f"{plot_path}04_TransVsOrder",
                target="line", attribute="T_forward", real=True, imag=True, monitor_name="through", mode_expansion_name="me_through", wavelength=f"{wavelength}", plot_x="mode", show=False, export_csv=True, )
me_res.extract( data="fdtd:mode_expansion", savepath=f"{plot_path}05_TransVsLambda_mode=1",
                target="line", attribute="T_forward", real=True, imag=True, mode_expansion_name="me_through", mode=0, plot_x="wavelength", show=False, export_csv=True, )
me_res.extract( data="fdtd:mode_expansion", savepath=f"{plot_path}05_mode_expansion",
                target="intensity", attribute="T_forward", real=True, imag=False, monitor_name="through", mode_expansion_name="me_through", plot_x="mode", plot_y="wavelength", show=False, **export_options, )
            

```
### 8.3.6 FDTD:mode expansion information

Get the result of FDTD mode expansion information.

```python
extract(
        self,
        *,
        data: Literal["fdtd:mode_expansion_mode_info"],
        target: Literal["intensity", "line"],
        attribute: Literal["E", "H", "Loss", "Neff", "TE Polarization Fraction"],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        monitor_name: str,
        mode_expansion_name: str,
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Any = None,
        wavelength: Any = None,
        )
```

**Example:**

```python
me_res.extract( data="fdtd:mode_expansion_mode_info", savepath=f"{plot_path}05_TransVsLambda_modeinfo",
                target="line", attribute="Neff", real=True, imag=False, monitor_name="through", mode_expansion_name="me_through", plot_x="wavelength", show=False, **export_options, )
me_res.extract( data="fdtd:mode_expansion_mode_info", savepath=f"{plot_path}03_me_throughmode_info",
                monitor_name="through", mode_expansion_name="me_through", target="intensity", attribute="E", mode=0, wavelength=f"{wavelength}", real=True, imag=True, **export_options, show=False, )
           
```




### 8.3.4 FDTD:port mode information

Get the result of FDTD port mode information.

```python
extract(
        self,
        *,
        data: Literal["fdtd:port_mode_info"],
        target: Literal["intensity", "line"],
        attribute: Literal["E", "H", "Loss", "Neff", "TE Polarization Fraction"],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        port_name: str,
        mode: Any = None,
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
""" 02_top_profile """
fdtd_res.extract(data="fdtd:power_monitor", savepath=f"{plot_path}{kL[2]}_profile", monitor_name="z_normal", 
                    target="intensity", attribute="E", wavelength=f"{wavelength}",  export_csv=True)

""" 03port1_modeprofile """
fdtd_res.extract(data="fdtd:port_mode_info", savepath=f"{plot_path}{kL[3]}_port_1_profile",
                    target="intensity", attribute="E", port_name="port_1", mode=0, export_csv=True)
                       
```



### 8.3.5 FDTD:mode source information

Get the result of FDTD mode source information.

```python
extract(
        self,
        *,
        data: Literal["fdtd:mode_source_mode_info"],
        target: Literal["intensity", "line"],
        attribute: Literal["E", "H", "Loss", "Neff", "TE Polarization Fraction"],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        source_name: str,
        mode: Any = None,
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
fdtd_res.extract( data="fdtd:mode_source_mode_info", savepath=f"{plot_path}02_source_modeprofile",
                target="intensity", attribute="E", real=True, imag=True, source_name="source", show=False, **export_options, )

fdtd_res.extract( data="fdtd:mode_source_mode_info", savepath=f"{plot_path}02_source_modeinfo",
                target="line", attribute="Neff", real=True, imag=True, source_name="source", plot_x="wavelength", show=False, **export_options, )

            

```

## 8.4 Sweep

<div class="text-justify">

To extract the relevant data of sweep function. 

### 8.4.1 parameter sweep

Get the result of sweep data.

```python
extract(
        self,
        *,
        data: Literal["sweep"],
        target: Literal["intensity", "line"],
        attribute: str,
        monitor_name: Optional[str] = None,
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None,
        **kwargs,
    )
```

**Example:**

```python
swp_res.extract(data="sweep", target="line", attribute="S", plot_x="sweep_gap",
                        savepath=f"{plot_path}/01 S", export_csv=True)

```

```python
swp_res.extract(data="mode_expansion", target="line", attribute="T_forward", plot_x="sweep_gap", monitor_name="through",
                savepath=f"{plot_path}/03 {resultL[2]}", export_csv=True, )
```



### 8.4.2 smatrix sweep

Get the result of smatrix sweep data.

```python
extract(
        self,
        *,
        data: Literal["smatrix_sweep"],
        target: Literal["intensity", "line"],
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = "a",
        plot_x: OptStr=None,
    )
```

**Example:**

```python
smatrix_res.extract(data="smatrix_sweep", savepath=f"{plot_path}{kL[8]}_smatrix_sweep",
                            target="line", plot_x="wavelength", real=True, imag=True, export_csv=True, export_mat=True, show=False)
```


The simulation results are extracted by the `extract` function in SDK.

<br/>

## 8.5 DDM
### 8.5.1 Extract generation rate

Generation Rate is extracted from result_afdtd (result of FDTD simulation). 

```python
result_generate = result_afdtd.run_generation_rate_analysis(name, monitor, average_dimension, light_power, coordinate_unit, field_length_unit)
result_generate.extract(data, export_csv, show, log, savepath)
```

```python
    add_fdtd_settings(pj, run_options)

    mn = pj.Monitor()

    # region --- 4. Run ---
    if run_options.run:
        result_fdtd = simu[simu_name].run(
            # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0}]}
        )

        """ Analysis """
        analysis = pj.Analysis()
        analysis.add(name, type="generation_rate",
                     property={"power_monitor", "average_dimension", "light_power", "workflow_id"})
        gen_res = analysis["generation_rate"].run()
    # endregion

    # region --- 5. Extract ---
        export_options = {"export_csv": True,
                          "export_mat": True, "export_zbf": True}
        gen_res.extract(data="fdtd:generation_rate", savepath, generation_rate_name,
                        target="intensity", attribute="G", real=True, imag=False, **export_options, show=False)
        gen_res.extract(data="fdtd:generation_rate", savepath, generation_rate_name,
                        target="line", attribute="Pabs_total", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)
        gen_res.extract(data="fdtd:generation_rate", savepath=, generation_rate_name,
                        target="line", attribute="Jsc", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)
```

`analysis.add()` parameters:

- `name`--Custom name
- `monitor`--Name of the `power_monitor` for calculating optical generation rate. The `power_monitor` is required to be of 3D type
- `average_dimension`--Set the direction to take the average of the optical generate rate
- `light_power`--Set the power of the light source, measured in W. The optical generation rate will be scaled based on the power

<br/>

`gen_res.extract()` parameters：

- `data`--Type of the result
  - When `data` is set to `"generation_rate"`, besides an image file and a csv file, the result files also include a text file in `.gfile` format. The coordinate unit in the csv and the image file is `um`, and the generation rate unit in the two files is `/cm^3/s`. These units can't be modified when extracting the result. However, the units in the gfile are controlled by `coordinate_unit`、`field_length_unit`. And only the gfile can be imported to the DDM solver
  - When data is set to `"pabs_total"`, the total absorption power is extracted

- `export_csv`--Whether to export csv file
- `show`--Whether to show the plot in a popup window
- `log`--Whether to apply a logarithmic normalization in the intensity plot
- `savepath`--The save path of the result extraction

<br/>

#### Example of extracting generation rate

```python
    # region --- 1. Simulation Settings ---
    add_fdtd_settings(pj, run_options)

    mn = pj.Monitor()

    # endregion

    # region --- 2. Run ---
    if run_options.run:
        result_fdtd = simu[simu_name].run(
            # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0}]}
        )

        """ Analysis """
        analysis = pj.Analysis()
        analysis.add(name="generation_rate", type="generation_rate",
                     property={"power_monitor": "power_monitor", "average_dimension": "x", "light_power": 1, "workflow_id": result_fdtd.workflow_id})
        gen_res = analysis["generation_rate"].run()
    # endregion


    # region --- 3. Extract ---
        export_options = {"export_csv": True,
                          "export_mat": True, "export_zbf": True}
        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}genrate", generation_rate_name="generation_rate",
                        target="intensity", attribute="G", real=True, imag=False, **export_options, show=False)
        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}pabs_total", generation_rate_name="generation_rate",
                        target="line", attribute="Pabs_total", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)
        gen_res.extract(data="fdtd:generation_rate", savepath=f"{plot_path}jsc", generation_rate_name="generation_rate",
                        target="line", attribute="Jsc", plot_x="frequency", real=True, imag=False, show=False, export_csv=True)
    # endregion
```

<br/>

### 8.5.2 Extract electrode result

The results of electrode are extracted from result_DDM (result of DDM simulation). The format is

```python
    if run_options.extract:
        export_options = {"export_csv": True,
                          "export_mat": True, "export_zbf": True}
        result_DDM.extract(data, electrode, operation, export_csv, show, savepath)
```

Extraction of electrode result parameters:

- `data`--Type of result
  - When it's steady state simulation or SSAC simulation, options `"I"`, `"In"`, `"Ip"` are available, which means the current at the electrode versus voltage is extracted, with
    - `"I"` for the total current
    - `"In"` for the electron current
    - `"Ip"` for the hole current
  - When it's SSAC simulation, options `"Iac"` and `"C"` are available, which means the AC current or capacitance at the electrode versus voltage at different frequency points is extracted, with
    - `"Iac"` for the total AC current
    - `"C"` for the capacitance
  - When it's transient simulation, options `"I"`, `"In"`, `"Ip"` are available, which means the current at the electrode versus time is extracted, with
    - `"I"` for the total current
    - `"In"` for the electron current
    - `"Ip"` for the hole current
- `electrode`--Name of the electrode
- `operation`--Options are `"real"` (by default), `"imag"`, `"abs"`, `"abs2"`. For a result whose value is a real number, this parameter can be omitted. Bur for a result whose value is a complex number, like `"Iac"`, it must be used to extract the real and imaginary part of the result respectively
- `export_csv`--Whether to export csv file
- `show`--Whether to show the plot in a popup window
- `savepath`--The save path of the result extraction

<br/>

#### Example of extracting electrode result

```python
    if run_options.extract:
        export_options = {"export_csv": True,
                          "export_mat": True, "export_zbf": True}

        result_ddm.extract(data="ddm:electrode_ac", electrode_name=vsource, savepath=f"{plot_path}C",
                           target="line", attribute="C", plot_x=f"v_{vsource.lower()}", real=True, imag=False, frequency=1e8, show=False, export_csv=True)
    # endregion
```

<br/>

### 8.5.3 Extract results of electrical monitor

The electrical monitor result extraction is similar to the electrode result extraction, but a monitor instead of an electrode is required to be specified. The format is

```python
result_DDM.extract(data, monitor, operation, export_csv, show, log, savepath)
```

Extraction of electrode result parameters:

- `data`--Type of result

  - When the monitor is `charge_monitor`, options `"n"`, `"p"` are available, which means the concentration of carriers is extracted, with
    - `"n"` for the electron
    - `"p"` for the hole
  - When the monitor is `electric_monitor`, options `"electric_field"`, `"ex"`, `"ey"`, `"ez"`, `"potential"` are available, which means the concentration of carriers is extracted, with
    - `"electric_field"` for the absolute value of the electric field
    - `"ex"` for the x component of the electric field
    - `"ey"` for the y component of the electric field
    - `"ez"` for the z component of the electric field
    - `"potential"` for the electrostatic potential
  - When the monitor is `band_monitor`, options `"conduction_band"`, `"valence_band"`, `"equasi_fermi"`, `"hquasi_fermi"` are available, which means the band structure is extracted, with
    - `"conduction_band"` for the conduction band energy level
    - `"valence_band"` for the valence band energy level
    - `"equasi_fermi"` for the electron quasi-Fermi potential
    - `"hquasi_fermi"` for the hole quasi-Fermi potential

- `operation`--Options are `"real"` (by default), `"imag"`, `"abs"`, `"abs2"`

- `export_csv`--Whether to export csv file. When the monitor is of 2D type, the result is a distribution in a 2D region, and the plot is an intensity image; When the monitor is of 1D type, the result is a distribution along a 1D range, and the plot is a curve

- `show`--Whether to show the plot in a popup window

- `log`--Whether to take the logarithm of the result

- `savepath`--The save path of the result extraction

<br/>

#### Example of extracting electrical monitor result

```python
for voltage in voltage_list:
            slice_options = {f"v_{vsource.lower()}": voltage, f"v_{gnd.lower()}": 0.0}

            # --- Charge Monitor ---
            attribute = "n"  # "n", "p"
            result_ddm.extract(data="ddm:charge_monitor", monitor_name="charge_monitor", savepath=f"{plot_path}{attribute}/{voltage}V",
                               target="intensity", attribute=attribute, real=True, imag=False, log=False, show=False, **slice_options, **export_options)
            
            # --- Electrical Monitor ---
            attribute = "E"  # "E", "Ex", "Ey", "Ez"
            result_ddm.extract(data="ddm:electrical_monitor", monitor_name="elec_monitor", savepath=f"{plot_path}{attribute}/{voltage}V",
                               target="intensity", attribute=attribute, real=True, imag=False, log=False, show=False, **slice_options, **export_options)

            # --- Band Monitor ---
            attribute = "Ec" # "Ec", "Ev", "Efn", "Efp"                   
            result_ddm.extract(data="ddm:band_monitor", monitor_name="band_monitor", savepath=f"{plot_path}{attribute}/{voltage}V",
                               target="line", attribute=attribute, plot_x="y", real=True, imag=False, log=False, show=False, **slice_options, export_csv=True)
```

<br/>

### 8.5.4 Extract results of modulator analysis

The results of modulator analysis are extracted from result_afde (result of AFDE). The format is

```python
result_fde.extract(data, savepath, export_csv)
```

`result_fde.extract()` parameters:

- `data`--Type of result. Options are `"mesh_structurex"`, `"calculate_modes"`, which means the effective index or loss versus voltage is extracted
- `export_csv`--Whether to export csv file
- `show`--Whether to show the plot in a popup window
- `savepath`--The save path of the result extraction

<br/>

#### Example of extracting modulator analysis result

```python
    result_fde = analysis["fde_analysis"].run()
    # endregion

    # region --- 5. Extract ---
    
    export_options = {"export_csv": True,
                      "export_mat": True, "export_zbf": True}

    if run_options.extract:
        if run_options.index_preview:
            result_fde.extract(
                data="mesh_structure", savepath=f"{plot_path}01_index", export_csv=True)
            
        if run_options.run:
            res = result_fde.extract(
                data="calculate_modes", savepath=f"{plot_path}02_neff_table", export_csv=True)
            return res
```

</div>
</div>
</font>

