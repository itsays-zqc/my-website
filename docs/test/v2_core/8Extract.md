# Extract result

In this section, we support to extract simulation result data, exporting data results in various formats, facilitating more efficient data processing.

We support the atrributes to extract as below:

|                        **Parameters**                        |                         Description                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                       PowerAttributes                        | The following are power related physical attributes. Literal['E', 'Ex', 'Ey', 'Ez', 'H', 'Hx', 'Hy', 'Hz', 'Px', 'Py', 'Pz', 'Energy density'] |
|                        ModeAttributes                        | The following are mode related physical attributes. Literal["a", "b", "n", "p", "N", "P", "t_forward", "t_backward", "T_forward", "T_backward"] |
|                                                              | The following are other attributes which can be extracted. Literal["TEratio", "neff_real", "neff_imag", "ng_real", "ng_imag", "wavelength_nm", "loss_dBpcm"] |

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|      data      |          To decide what type/field data will be extracted.           |
|   export_csv   |          Whether to export a csv. Default as False.          |
|      show      | Whether to show the picture. If set to False, the picture will be saved instead. Default as False. |
|    savepath    |              The save path of picture . Default as 'a'.              |
|     target     |    How the data is organized/displayed. Default as None.     |
|   attribute    | Which attribute will extracted, in few cases this parameter is not needed. Default as None. |
|      real      |      Whether to add real part of data. Default as True.      |
|      imag      | Whether to add imag part of data. If both real and imag is activate, 'ABS' data will be extracted. Default as True. |
|     plot_x     |         The selection of x axis of heatmap or line plot.         |
|     plot_y     |               The selection of y axis of heatmap.                |
|     kwargs     | Other visualization parameters. 'monitor_name' and 'mode_expansion_name' for 'fdtd:mode_expansion' for example. |



## 8.1 FDE

In this section, we will provide examples for extracting simulation result data from FDE simulation, along with a description table of parameters.


### 8.1.1 Calculate mode result

Get the result of calculated mode.

```python
extract(
        self,
        *,
        # target - intensity
        data: Literal['calculate_modes'],
        attribute: PowerAttributes/ModeAttributes/OtherAttributes
        export_csv=False, export_mat=False, export_zbf=False, 
        show=False, 
        real=True, 
        imag=True, 
        savepath:Any = 'a',
        mode: int,
    )
```

**Example:**

```python
result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_mode{m}',
                   attribute='E', mode=m, real=True, imag=True, **export_options, show=False)
```



### 8.1.2 Far-field FDE result

Get the result of  calculated far-field FDE.

```python
extract(
        self,
        *,
        # target - table
        data: Literal['farfield_fde'],
        attribute: PowerAttributes,
        
        show=False, 
        export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = 'a',
        mode: int,
    )
```

**Example:**

```python
fde_res.extract(data='farfield_fde', savepath=f'{plot_path}05_{simu_name}_far_field',
                                attribute='E', mode=0, export_csv=True)
```



### 8.1.3 Mesh structure result

To extract the result of meshing structure.

```python
extract(
        self,
        *,
        data: Literal['mesh_structure'],
        savepath:Any = 'a',
        target: Literal['intensity'] = 'intensity',
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
        target: Literal['line'] = 'line',
        data: Literal['frequency_analysis'],
        attribute: Literal['neff', 'group_index', 'loss', 'polarization'],
        
        export_csv=False, export_mat=False, export_zbf=False, 
        show=False, 
        real=True, 
        imag=True, 
        savepath:Any = 'a',
        plot_x: OptStr=None
    )
```

**Example:**

```python
result_fde.extract(data="frequency_analysis", savepath=f'{plot_path}{k}_freq_sweep_neff',
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
                'eme_propagate:facet_data',
            ],
            export_csv=False, export_mat=False, export_zbf=False, real=True, imag=True, savepath: Any = 'a',
    )
```

**Example:**

```python
eme_res.extract(data='eme_propagate:facet_data', savepath=plot_path, real=True, imag=True, export_csv=True)
```



### 8.2.2 EME propagate:monitor

Get the result of monitor data of EME propagation.

```
extract(
        self,
        *,
        data: Literal[
            'eme_propagate:monitor',
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
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

Get the result of monitor data of Propagation sweep.

```python
extract(
        self,
        *,
        data: Literal[
            'propagation_sweep:monitor',
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
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
            'wavelength_sweep:monitor',
        ],
        attribute: PowerAttributes,
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
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
            'eme_propagate:smatrix',
        ],
        target: Literal['intensity'] = 'intensity',
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
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
        data: Literal['eme_propagate:port_mode_info'],
        target: Literal['intensity'] = 'intensity',
        attribute: Literal['E', 'H'],
        port_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
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
        data: Literal['eme_propagate:port_mesh_structure'],
        port_name: str,
        target: Literal['line', 'intensity'] = 'intensity',
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data='eme_propagate:port_mesh_structure',
                                      savepath=f'{plot_path}{kL[3]}_eme_structure_{port_name}',
                                      port_name=port_name, target='intensity',
                                      # plot_x='y', plot_y='z', export_csv=False, show=False
                                      )
```



### 8.2.8 EME propagate:cell mesh structure

Get the result of cell mesh structure data of EME propagation.

```python
extract(
        self,
        *,
        data: Literal[
            'eme_propagate:cell_mesh_structure',
        ],
        target: Literal["intensity", "line"],
        cell_params: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
eme_res.extract(data='eme_propagate:cell_mesh_structure',
                                      savepath=f'{plot_path}{kL[4]}_eme_c{cell_index}_index',
                                      cell_params='c' + str(cell_index), target='intensity', plot_x='y', plot_y='z',
                                      # export_csv=False, show=False
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
        data: Literal['fdtd:power_monitor'],
        target: Literal['intensity', 'line'],
        attribute: Union[PowerAttributes, Literal["T"]],
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None, plot_y: OptStr=None,
        wavelength: Optional[Any] = None,
    )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[6]}_TransVsLambda_power',
                         monitor_name='through', target='line', plot_x='wavelength', attribute='T', real=True, imag=False, export_csv=True, export_mat=True, show=False)
```



### 8.3.2 FDTD:time monitor

Get the result of FDTD time monitor data.

```python
extract(
        self,
        *,
        data: Literal['fdtd:time_monitor'],
        target: Literal['intensity', 'line'],
        attribute: Union[PowerAttributes, Literal["T"]],
        monitor_name: str,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None, plot_y: OptStr=None,
        wavelength: Optional[Any] = None,
    )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:time_monitor', savepath=f'{plot_path}{kL[6]}_TransVstime',
                         monitor_name='through', target='line', plot_x='time(fs)', attribute='E', real=True, imag=False, export_csv=True, export_mat=True, show=False)
```



### 8.3.3 FDTD:mode expansion

Get the result of FDTD mode expansion data.

```python
extract(
        self,
        *,
        data: Literal['fdtd:mode_expansion'],
        target: Literal["intensity", "line"],
        attribute: ModeAttributes,
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Optional[Any] = None,
        wavelength: Optional[Any] = None,
        monitor_name: str,
        mode_expansion_name: str,
    )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:mode_expansion', savepath=f'{plot_path}{kL[5]}_TransVsLambda_mode=0',
                         monitor_name='through', target='line', plot_x='wavelength', mode=0, attribute='T_forward', real=True, imag=True, export_csv=True, export_mat=True, show=False)

```



### 8.3.4 FDTD:port mode information

Get the result of FDTD port mode information.

```python
extract(
        self,
        *,
        data: Literal['fdtd:port_mode_info'],
        target: Literal['intensity', 'line'],
        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        port_name: str,
        mode: Any = None,
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:port_mode_info', savepath=f'{plot_path}{kL[3]}_left_port_mode',
                             port_name='left_port', target='intensity', attribute='E', mode=0, export_csv=True)
```



### 8.3.5 FDTD:mode source information

Get the result of FDTD mode source information.

```python
extract(
        self,
        *,
        data: Literal['fdtd:mode_source_mode_info'],
        target: Literal['intensity', 'line'],
        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        source_name: str,
        mode: Any = None,
        plot_x: OptStr=None, plot_y: OptStr=None,
    )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:mode_source_mode_info', savepath=f'{plot_path}{kL[2]}_source_modeprofile',
                         source_name='source', target='intensity', attribute='E', mode=0, real=True, imag=True, **export_options, show=False)

```



### 8.3.6 FDTD:mode expansion information

Get the result of FDTD mode expansion information.

```python
extract(
        self,
        *,
        data: Literal['fdtd:mode_expansion_mode_info'],
        target: Literal['intensity', 'line'],
        attribute: Literal['E', 'H', 'Loss', 'Neff', 'TE Polarization Fraction'],
        
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        monitor_name: str,
        mode_expansion_name: str,
        plot_x: OptStr=None, plot_y: OptStr=None,
        mode: Any = None,
        wavelength: Any = None,
        )
```

**Example:**

```python
fdtd_res.extract(data='fdtd:mode_expansion_mode_info', savepath=f'{plot_path}{kL[3]}_me_throughmode_info',
                         monitor_name='through', target='intensity', attribute='E', mode=0, wavelength=f'{wavelength}', real=True, imag=True, **export_options, show=False)
```



## 8.4 Sweep

To extract the relevant data of sweep function. 

### 8.4.1 parameter sweep

Get the result of sweep data.

```python
extract(
        self,
        *,
        data: Literal['sweep'],
        target: Literal['intensity', 'line'],
        attribute: str,
        monitor_name: Optional[str] = None,
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None,
        **kwargs,
    )
```

**Example:**

```python
swp_res.extract(data='sweep', target='line', attribute='S', plot_x='sweep_gap',
                        savepath=f'{plot_path}/01 S', export_csv=True)

```

```python
swp_res.extract(data='mode_expansion', target='line', attribute='T_forward', plot_x='sweep_gap', monitor_name='through',
                savepath=f'{plot_path}/03 {resultL[2]}', export_csv=True, )
```



### 8.4.2 smatrix sweep

Get the result of smatrix sweep data.

```python
extract(
        self,
        *,
        data: Literal['smatrix_sweep'],
        target: Literal['intensity', 'line'],
        export_csv=False, export_mat=False, export_zbf=False, show=False, real=True, imag=True, savepath:Any = 'a',
        plot_x: OptStr=None,
    )
```

**Example:**

```python
smatrix_res.extract(data='smatrix_sweep', savepath=f'{plot_path}{kL[8]}_smatrix_sweep',
                            target='line', plot_x='wavelength', real=True, imag=True, export_csv=True, export_mat=True, show=False)
```
