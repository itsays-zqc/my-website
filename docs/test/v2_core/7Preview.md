# Preview

In this section, we currently offer the capability to provide an advanced preview of structural models, refractive index and doping profile.

This preview serves to validate the structues before initiating the formal simulation, thereby assisting in verifying the accuracy of the structures. Consequently, it leads to reduced simulation time and an overall enhancement of simulation efficiency.
## 7.1 Run index

The code contained in this module enables a preview of the refractive index images with various structures.

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
|    property    |             To set the properties of index monitor.              |
|      name      |                    The name of index monitor in the simulation.                    |
|   export_csv   |       Decide whether to export the data as csv format or not. The default is False.         |
|      show      |        Decide whether to show index preview figure or not. The default is False.        |
|    savepath    |   Define the save path for the csv data and the picture. The default is 'a'.    |
|    export_n    | Decide whether to export the real part of index ,such as nx, ny, nz... . The default is True.  |
|    export_c    | Decide whether to export the imaginary part of index, such as σx, σy, σz... . The default is False. |
|   max_index    | The maximum index of heatmap colorbar. The default is None. |
|   max_sigma    | The maximum sigma of heatmap colorbar.The default is  None. |

**Example:**

```python
simu[simu_name].run_index(name=f'{simu_name}_x_0', savepath=f'{plot_path}{k}IndexPreview_x=0',
                                  # export_csv=False, show=False,
                                  property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 2}})
```

|      Parameters       | Default |  Type  |                            Notes                             |
| :-------------------: | :-----: | :----: | :----------------------------------------------------------: |
| geometry.monitor_type |    -     | string | Set the orientation of the index monitor. The selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the index monitor.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the index monitor. Restrained by condition: >0.  |
|   geometry.x_min    |     -    |  float   | The minimum x-coordinate endpoint data of the index monitor.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the index monitor.     |
|     geometry.y      |    -     |  float   |  The y-coordinate of the center point position of the index monitor.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the index monitor. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the index monitor.       |
|   geometry.y_max    |    -     |  float   |  The maximum y-coordinate endpoint data of the index monitor.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the index monitor.    |
|   geometry.z_span   |    -     |  float   | The thinckness in z direction of the index monitor. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the index monitor.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the index monitor.     |

## 7.2 Structure show and show 3D

This portion of the code is primarily intended for show structure. Please note that this method becomes invalid if the current structure manager contains Pyramid or Arc-Waveguide 3D type geometries.

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
|                     mode                     |     Specify the orientation of the structure preview function.                                             |
|                     show                     |Decide whether to show directly the preview of structure directly in the related software.If set to False, the picture will be saved instead. |
|                   savepath                   |                       Decide the save path of the preivew.                      |
|                   fig_type                   |                    Decide the suffix(type) of Picture.                     |
|               simulation_name                |                       The simulation name.                       |
|             disabled_components              |               Disable the components from showing.               |
| xyratioZoom multiplier of x and y direction. |            Zoom multiplier of x and y direction.             |
|                 celldisplay                  |                  Whether to show eme cells.                  |

Show 3D structure in a pop up windows.

```python
show3d(self, show_with: Literal["webviewer", "matplotlib"，"local_gui"] = "webviewer")
```

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|   show_with    | Choose the type of display. The selection are "webviewer", "matplotlib"，"local_gui". The "webviewer" will start a server and toggle a browser windows. "matplotlib" will toggle a Axes3D windows. Default as "webviewer". |

**Example:**

```python
st.structure_show(fig_type='png', show=False,
                  savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name)
simu[simu_name].show3d(show_with="local_gui")
```



## 7.3 Run doping

The code within this module enables the preview of doping results for the respective structures.

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
|    property    |                  The properties of doping preview.                  |
|      name      |                     The name of doping preview.                     |
|      show      |            Decide whether to show directly the preview of structure directly in the related software.If set to False, the picture will be saved instead.            |
|    savepath    |               The save path for picture.              |
|      norm      | The normalization of colorbar. Selections are ['linear', 'log']. Default as 'linear'. |
|     scale      | The type of  pcture scale. Selections are ['equal', 'auto']. Default as 'equal'. |
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
| geometry.dimension |         | string | Set the orientation of the doping region. The selections are ['2d_x_normal', '2d_y_normal', '2d_z_normal']. |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the doping region.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the doping region. Restrained by condition: >0.  |
|   geometry.x_min    |     -    |  float   | The minimum x-coordinate endpoint data of the doping region.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the doping region.     |
|     geometry.y      |    -     |  float   |  The y-coordinate of the center point position of the doping region.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the doping region. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the doping region.       |
|   geometry.y_max    |    -     |  float   |  The maximum y-coordinate endpoint data of the doping region.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the doping region.    |
|   geometry.z_span   |    -     |  float   | The thinckness in z direction of the doping region. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the doping region.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the doping region.     |
