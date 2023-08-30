# Preview

## 7.1 Run index

We can use the code below to preview the index of structure. 

```python
run_index(
            self,
            *,
            property: RunIndex,
            name: str,
            export_csv: bool = False,
            show: bool = False,
            savepath: str = 'a',
            export_n: bool = True,
            export_c: bool = False,
            max_index: Optional[int] = None,
            max_sigma: Optional[int] = None,
    )
```

| **Parameters** |                     Description                     |
| :------------: | :-------------------------------------------------: |
|    property    |              Index monitor properties.              |
|      name      |                    Monitor name.                    |
|   export_csv   |        Export csv or not. Default as False.         |
|      show      |        Show figure or not. Default as False.        |
|    savepath    |   Save path for csv and picture. Default as 'a'.    |
|    export_n    | Whether to export nx, ny, nz... . Default as True.  |
|    export_c    | Whether to export σx, σy, σz... . Default as False. |
|   max_index    | Maximum index of heatmap colorbar. Default as None. |
|   max_sigma    | Maximum sigma of heatmap colorbar. Default as None. |

**Example:**

```python
simu[simu_name].run_index(name=f'{simu_name}_x_0', savepath=f'{plot_path}{k}IndexPreview_x=0',
                                  # export_csv=False, show=False,
                                  property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 2}})
```

|      Parameters       | Default |  Type  |                            Notes                             |
| :-------------------: | :-----: | :----: | :----------------------------------------------------------: |
| geometry.monitor_type |         | string | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|      geometry.x       |         | float  |                                                              |
|    geometry.x_span    |         | float  |                Restrained by condition: >=0.                 |
|    geometry.x_min     |         | float  |                                                              |
|    geometry.x_max     |         | float  |                                                              |
|      geometry.y       |         | float  |                                                              |
|    geometry.y_span    |         | float  |                Restrained by condition: >=0.                 |
|    geometry.y_min     |         | float  |                                                              |
|    geometry.y_max     |         | float  |                                                              |
|      geometry.z       |         | float  |                                                              |
|    geometry.z_span    |         | float  |                Restrained by condition: >=0.                 |
|    geometry.z_min     |         | float  |                                                              |
|    geometry.z_max     |         | float  |                                                              |



## 7.2 Structure show and show 3D

Show structure. If there are Pyramid or Arc-Waveguide 3D type geometry in current structure manager, this method is invalid.

```python
structure_show(
            self,
            *,
            mode="XY",
            show: bool,
            savepath: str,
            fig_type: Literal["png", "svg"] = "png",
            simulation_name: Optional[str] = None,
            disabled_components: Tuple[
                Literal[
                    "materials",
                    "helpers",
                    "box",
                    "box.coordinate",
                    "box.cavity",
                    "ModeSource",
                    "PowerMonitor",
                    "ProfileMonitor",
                    "FDTDPortGroup",
                ],
                ...
            ] = tuple(),
            xyratio=(1, 1),
            celldisplay=False
    )
```

|                **Parameters**                |                         Description                          |
| :------------------------------------------: | :----------------------------------------------------------: |
|                     mode                     |                          Show mode.                          |
|                     show                     | Whether to show the picture. If set to False, the picture will be saved instead. |
|                   savepath                   |                      Picture save path.                      |
|                   fig_type                   |                    Picture suffix(type).                     |
|               simulation_name                |                       Simulation name.                       |
|             disabled_components              |               Disable components from showing.               |
| xyratioZoom multiplier of x and y direction. |            Zoom multiplier of x and y direction.             |
|                 celldisplay                  |                  Whether to show eme cells.                  |

Show 3D structure in a pop up windows.

```python
show3d(self, show_with: Literal["webviewer", "matplotlib"] = "webviewer")
```

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|   show_with    | "webviewer" will start a server and toggle a browser windows. "matplotlib" will toggle a Axes3D windows. Default as "webviewer". |

**Example:**

```python
st.structure_show(fig_type='png', show=False,
                  savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name)
simu[simu_name].show3d(show_with="local_gui")
```



## 7.3 Run_doping

Run doping.

```python
run_doping(
            self,
            name: str,
            property: RunDopingPostProcess,
            norm: str,
            scale: str,
            superimpose: bool,
            show: bool,
            material_list: list,
            cmin: float,
            savepath: str
    )
```

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|    property    |                  Doping preview properties.                  |
|      name      |                     Doping preview name.                     |
|      show      |            Show figure or not. Default as False.             |
|    savepath    |               Save path for picture. Required.               |
|      norm      | Colorbar normalization. Selections are ['linear', 'log']. Default as 'linear'. |
|     scale      | Scale type. Selections are ['equal', 'auto']. Default as 'equal'. |
|  superimpose   |   Superimpose doping on structure or not. Default as True.   |
| material_list  |         Specified material type list. Default as [].         |
|  region_list   | Specified region name list. Default as []. Superior to material_list when not empty. |
|      cmax      | Maximum concentration of heatmap colorbar. Default as None.  |
|      cmin      | Minimum concentration of heatmap colorbar. Default as None.  |

**Example:**

```python
simu["preview_oedevice"].run_doping(name="x_in", property={
        "geometry": {"dimension": "2d_x_normal", "x": oe_x_mean, "x_span": 0, "y": oe_y_mean, "y_span": oe_y_span, "z_min": oe_z_min, "z_max": oe_z_max}},
        norm="log", scale="equal", superimpose=False, show=False,
        material_list=["Ge", "Si"], cmin=8e5, savepath=plot_path + simu_name + "_" + time_str + "doping_x_in")
```

|     Parameters     | Default |  Type  |                            Notes                             |
| :----------------: | :-----: | :----: | :----------------------------------------------------------: |
| geometry.dimension |         | string | Selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x     |         | float  |                                                              |
|  geometry.x_span   |         | float  |                Restrained by condition: >=0.                 |
|   geometry.x_min   |         | float  |                                                              |
|   geometry.x_max   |         | float  |                                                              |
|     geometry.y     |         | float  |                                                              |
|  geometry.y_span   |         | float  |                Restrained by condition: >=0.                 |
|   geometry.y_min   |         | float  |                                                              |
|   geometry.y_max   |         | float  |                                                              |
|     geometry.z     |         | float  |                                                              |
|  geometry.z_span   |         | float  |                Restrained by condition: >=0.                 |
|   geometry.z_min   |         | float  |                                                              |
|   geometry.z_max   |         | float  |                                                              |
