import 'katex/dist/katex.min.css';
import {InlineMath, BlockMath} from 'react-katex';

# Polarization split rotator

## Introduction
<div class="text-justify">
绝缘体上的硅波导具有强的双折射效应，但是很多光学器件对光的偏振十分敏感，因此在光子集成回路常需要增加偏振分束与旋转的设计来获得高性能的器件。

在本例中，我们演示了使用EME求解器计算模式耦合与转换器件的仿真流程。利用非对称的定向耦合器结构将正交偏振的光耦合分开，然后将旋转到我们需要的结构。
Silicon waveguides on insulators have strong birefringence effects, but many optical devices are very sensitive to the polarization of light. Therefore, in photonic integrated circuits, it is often necessary to increase the design of polarization splitting and rotation to obtain high-performance devices.
In this example, we demonstrated the simulation process of using an EME solver to calculate mode coupling and conversion devices. Using an asymmetric directional coupler structure to separate the orthogonal polarized light coupling, and then rotate it to the desired structure.
</div>

## Simulation
### 1. Code Description
#### 1.1 Import Toolkit
<div class="text-justify">

First, we need to import `maxoptics_sdk` and Python's third-party package. The import module for EME simulation is shown below.
</div>

```python
import maxoptics_sdk.all as mo
from maxoptics_sdk.helper import timed, with_path
import os
import time
from typing import NamedTuple

```

#### 1.2 Define Simulation Function 
<div class="text-justify">
To facilitate parameter changes, we can define function to encapsulate the entire simulation project.

</div>

```python
def simulation(*, run_mode, wavelength=1.54, global_mesh_grid=0.02, local_mesh_grid=0.01, number_of_modes=10, run_options: "RunOptions", **kwargs):
```

<div class="text-justify">

The `run_mode` variable parameter is used to define the location of the simulation run.<br/>The `wavelength` variable is defined as wavelength of the optical source.<br/>The `grid` variable is defined as grid size.<br/>The `number_of_modes` variable is used to define the number of modes of calculation.

</div>

#### 1.3 Define Parameters

Before starting the simulation, we can define parameters to facilitate modeling and parameterization sweep. The defined parameters are as follows.
```python
# region --- 0. General Parameters ---
cell_number = 72
wavelength_start = 1.50
wavelength_stop = 1.58
wavelength_points = 3

path = kwargs["path"]
simu_name = "EME_PSR"
time_str = time.strftime("%Y%m%d_%H%M%S", time.localtime())
project_name = f'{simu_name}_{run_mode}_{time_str}'
plot_path = f'{path}/plots/{project_name}/'
gds_file_root_path = os.path.abspath(os.path.join(path, '..'))
gds_file = gds_file_root_path + "/examples_gds/PSR.gds"
# endregion
```

<div class="text-justify">

The `path` variable is used to store the path of this Python file.<br/>The `simu_name` variable is used to store simulation names.<br/>The `time_str` variable is used to store the timestamp.<br/>The `project_name` variable is used to store the project name.<br/>The `plot_path` variable is used to store the result path.<br/>The `gds_file` variable is used to store the file path of GDS.

</div>

#### 1.4 Create project
You can create a new project using the `Project` function of Max's software development toolkit.
```python
# region --- 1. Project ---
pj = mo.Project(name=project_name, location=run_mode,)
# endregion
```


#### 1.5 Add Material
<div class="text-justify">

 Here we demonstrate using the `Material` function to create material and using the `add_nondispersion` function to add non dispersive materials, as well as using the `add_lib` function to add materials from the material library. You can refer to the following script to set material.
</div>

```python
# region --- 2. Material ---
mt = pj.Material()
mt.add_nondispersion(name="Si", data=[(3.454996, 0)], order=2)
mt.add_nondispersion(name="SiO2", data=[(1.444991, 0)], order=2)
mt.add_lib(name="Air", data=mo.Material.Air, order=2)
# endregion
```

<div class="text-justify">

The `name` is used to define the name of the added material.<br/>The `data` is used to input the real and imaginary parts of the refractive index of the material.<br/>The `order` is used to set the grid order of the material.

</div>

#### 1.6 Add Structure
<div class="text-justify">

The structure is composed of silicon dioxide substrate, tapered silicon waveguide and polymer covered waveguide. We use `Structure` to create structure , where `mesh_type` is the type of mesh, `mesh_factor` is the growth factor of the mesh, and `background_material` is the background material of the structure. Use the `add_geometry` function to add geometric structures and select "gds_file" in `type` to establish the model by importing the GDS file. The properties of GDS modeling are shown in the table below.

</div>

```python
# region --- 3. Structure ---
st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.2, background_material=mt["Air"])

st.add_geometry(name="box", type="gds_file",
                property={"general": {"path": gds_file, "cell_name": "PSR", "layer_name": (1, 0)},
                            "geometry": {"x": 0, "y": 0, "z": -2, "z_span": 4},
                            "material": {"material": mt["SiO2"], "mesh_order": 2}})
st.add_geometry(name="psr", type="gds_file",
                property={"general": {"path": gds_file, "cell_name": "PSR", "layer_name": (2, 0)},
                            "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 0.22},
                            "material": {"material": mt["Si"], "mesh_order": 2}})
# endregion

```
|Key| Value |type|Description|
|-----|------|---------------|-----|
|name|sub|string|name the added geometry|
|type|gds_file|string|select the type of structure |
|path|gds_file|string|file path of GDS file|
|cell_name|SSC|string| name of the GDS cell |
|layer_name|(1,0)|list|name of the GDS layer |
|x&emsp;&emsp;&emsp;&emsp;|0&emsp;&emsp;&emsp;&emsp;|float&emsp;&emsp;&emsp;&emsp;|center position in the x-direction of the geometric structure &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|
|y|0|float|center position in the y-direction of the geometric structure|
|z|-1.5|float|center position in the z-direction of the geometric structure|
|z_span|3|float| length of the geometric structure in the z-direction|
|material|mt["Si"]|material | select the material in Material|
|mesh_order|2|integer|set the priority of the mesh|

Select simulation material by using `mesh_order` in areas where geometry overlaps, the higher the number of `mesh_order`, the higher the priority of the material.

#### 1.7 Set Boundary
<div class="text-justify">

Set the boundary size of the simulation structure using optical boundary condition `OBoundary`. The properties are shown below.
</div>

```python
# region --- 4. Boundary ---
st.OBoundary(property={"geometry": {"x": 6.05, "x_span": 73.1, "y": 1.256, "y_span": 8, "z": 0, "z_span": 6},
                        "boundary": {"y_min": "PEC", "y_max": "PEC", "z_min": "PEC", "z_max": "PEC"},
                        "general_pml": {"pml_same_settings":True,"pml_kappa": 1, "pml_sigma": 5, "pml_layer": 10, "pml_polynomial": 3}})
# endregion
```

#### 1.8 Add Sub Mesh
<div class="text-justify">

After light passes through tapered silicon waveguide gradually becoming smaller, the mode field is strongly limited to a very small range. Therefore, it is necessary to use `add_mesh` to add a transverse grid to accurately calculate the limited light field. Add local mesh as shown below.
</div>

```python
# region --- 5. Sub Mesh ---
st.add_mesh(
    name="sub_mesh",
    property={"general": {"dy": local_mesh_grid, "dz": local_mesh_grid},
                "geometry": {"x": 6.05, "x_span": 73.1, "y": 1.256, "y_span": 5, "z": 0.11, "z_span": 0.4}})
# endregion
``` 
The `dx`,`dy`,`dz` are the mesh sizes in the x, y, and z directions, respectively.

#### 1.9 Add EME port
<div class="text-justify">

You can use the `port` function to create a port and use the "source_port" property to set the location of the source port. You can use the `add` function to add ports and the properties of port are shown in the table below.
</div>

```python
 # region --- 6. Port ---
pjp = pj.Port(property={"source_port": "input_te_tm"})

# region --- input_te_tm ---
pjp.add(name="input_te_tm", type="eme_port",
        property={"geometry": {"port_location": "left", "use_full_simulation_span": True, "y": 1.256, "y_span": 8, "z": 0, "z_span": 6},
                    "eme_port": {"general": {"mode_selection": "fundamental_TE_and_TM", "mode_index": 1},
                                "advanced": {"offset": 0.1, "number_of_trial_modes": number_of_modes}}})
# endregion

# region --- output_up_te_tm ---
pjp.add(name="output_up_te_tm", type="eme_port",
        property={
            "geometry": {"port_location": "right", "use_full_simulation_span": False, "y": 2.6785, "y_span": 2, "z": 0.11, "z_span": 2},
            "eme_port": {"general": {"mode_selection": "fundamental_TE_and_TM", "mode_index": 1},
                            "advanced": {"offset": 0, "number_of_trial_modes": number_of_modes}}})
# endregion

# region --- output_down_te_tm ---
pjp.add(name="output_down_te_tm", type="eme_port",
        property={"geometry": {"port_location": "right", "use_full_simulation_span": False, "y": 0, "y_span": 2, "z": 0.11, "z_span": 2},
                    "eme_port": {"general": {"mode_selection": "fundamental_TE_and_TM", "mode_index": 1, "search": "max_index"},
                                "advanced": {"offset": 0, "number_of_trial_modes": number_of_modes}}})
# endregion
# endregion
```
| key | value | type | description |
|-----------| ----- | ---- | -------------------------|
| name       | left_port     | string    | the name of port                |
|  type |  eme_port | string | select type of port |
|  port_location | left  | string   |select the location of the port  |
| y   |  0 | float | center position of port width |
| y_span| 5.5 | float | port width |
| y | 0.5 | float | center position of port height |
| z_span | 7 | float | port height |
| mode_selection | fundamental_TE | string |select the mode of port |
| number_of_trial_modes&emsp;&emsp;&emsp;&emsp; | 15&emsp;&emsp;| string&emsp;&emsp;| set the mode of port &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|


#### 1.10 Add Monitor

In the simulation, `Monitor`function is used to create monitor and `add` function is used to add a monitor. Select profile_monitor `type` monitor from the added monitors to view the mode field distribution.
```python
# region --- 7. Monitor ---
mn = pj.Monitor()
mn.add(name="z_normal", type="profile_monitor",
        property={"geometry": {"monitor_type": "2d_z_normal", "x_resolution": 100,
                                "x": 6.05, "x_span": 73.1, "y": 1.256, "y_span": 8, "z": 0.11, "z_span": 0}})
for i, pos in enumerate([-29.5, 17.5, 23.5, 34.5, 39.5]):
    mn.add(name="section"+str(i+1), type="profile_monitor",
            property={"geometry": {"monitor_type": "2d_x_normal", "x_resolution": 100,
                                    "x": pos, "x_span": 0, "y": 1.256, "y_span": 8, "z": 0, "z_span": 6}})
# endregion
```

#### 1.11 Add EME solver
<div class="text-justify">

We use the `Simulation` function to create a simulation and the `add` function to add a solver. Select the EME solver in the type, and the properties of the solver are shown in the table below.

</div>


```python
# region --- 8. Simulation ---
simu = pj.Simulation()
simu.add(name=simu_name, type="EME",
            property={"general": {"wavelength": wavelength, "use_wavelength_sweep": True},
                    "eme_setup": {
                        "cell_geometry": {
                            "energy_conservation": "make_passive",  # ["none","make_passive"]
                            "cell_group_definition": [
                                {"span": 1, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"},
                                {"span": 6, "cell_number": 6, "number_of_modes": number_of_modes, "sc": "sub_cell"},
                                {"span": 30, "cell_number": 6, "number_of_modes": number_of_modes, "sc": "sub_cell"},
                                {"span": 12, "cell_number": 6, "number_of_modes": number_of_modes, "sc": "sub_cell"},
                                {"span": 8.9, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"},
                                {"span": 5, "cell_number": 10, "number_of_modes": number_of_modes, "sc": "sub_cell"},
                                {"span": 5.2, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"},
                                {"span": 5, "cell_number": 1, "number_of_modes": number_of_modes, "sc": "none"}]}},
                    "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": global_mesh_grid, "dz": global_mesh_grid}},
                    "eme_analysis": {
                        "eme_propagate": run_options.run,
                        "wavelength_sweep": {
                            "wavelength_sweep": run_options.run_wavelength_sweep,
                            "start": wavelength_start, "stop": wavelength_stop, "number_of_wavelength_points": wavelength_points},
                        "select_source": {"phase": 0, "select_mode": "TE"}}})
# endregion
```
| key | value | type | description |
|-----------| ----- | ---- | -------- |
| name | simu_name&emsp; | string&emsp; | name of simulation&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |
|  type |  EME | string | select the type of solver |
| wavelength |  1.5 | float | wavelength of mode |
| use_wavelength_sweep | True | bool | select to enable wavelength sweep |
| span | 2 | float | the span of cell group |
| cell_number | 1 | float | number of cell in the cell group |
| number_of_modes| 15| float| Calculate the number of modes per cell |
| sc | none | string | select to enable subcell method | 
| dy | 0.05|  float | horizontal mesh of cross-section |
|dz| 0.05 | float | Longitudinal mesh of cross-section |
| eme _propagate | True | bool | select to enable EME propagation |
| propagation_sweep &emsp;| True | bool | select to enable length sweep |
| parameter | grop_span_3 | string | the area of length sweep |
| start | 50 | float | starting length of sweep |
|stop | 250 | float | stoping length of sweep |
|number_of_points | 50 | float | number of sweep lengths |
| phase | 0 | float | the initial phase of optical source |
| select_mode| TE|string| mode of optical source|

<div class="text-justify">

According to different structures and materials, the SSC is divided into four cell groups using `cell_group_definition`. Set the length of the cell group in `span`, use `cell_number` to set the number of cell. The divided cell structure is shown in the following figure. Use `number_of_modes` to set the number of modes calculated at the interface of adjacent units, and it is necessary to set a sufficient number of modes to obtain the correct results.

The area where the structure has not changed, the number of `cell_number` is set to 1, and `sc` is set to "none". In the area of structural changes, multiple cell number need to be used to characterize the structure and the "sub_cell" method is used to reduce the staircase effect caused by discrete changes in the cross-section.

</div>

#### 1.12 View Structure

You can use the `structure_show` function to view the top view of the structure, or use the `simu[simu_name].show3d()` call gui to view the structure.

```python
# region --- 9. Structure Show ---
st.structure_show(fig_type="png", savepath=plot_path + simu_name, simulation_name=simu_name, celldisplay=True, xyratio=(1, 5), disabled_components=("box.coordinate",), show=False)
#simu[simu_name].show3d()
# endregion
```

The `celldisplay` control whether to display the boundaries of the divided cells.<br/>The `xyration` controls the aspect ratio of the image.

#### 1.13 Calculate Mode

You can create a new simulation using `simu.add` function and run the simulation using `simu.add` function. The `type` of simulation needs to be selected as "mode_selection:user_select", and its properties are shown in the table below. Before running EME simulation calculations, we can calculate the mode field distribution of the port by setting the type of mode selection to True and other simulations to False.

```python
# region --- 10. Calculate Mode ---
if run_options.calculate_modes:
    for port in ["input_te_tm", "output_up_te_tm", "output_down_te_tm"]:
        simu.add(name=simu_name+"_"+port+"_cal_mode", simulation_name=simu_name, source_name=port, type="mode_selection:user_select",
                    property={"modal_analysis": {"calculate_modes": True, "mesh_structure": True,
                                                "wavelength": wavelength, "number_of_trial_modes": number_of_modes, "calculate_group_index": True}})
        port_res = simu[simu_name+"_"+port+"_cal_mode"].run()
        for m in range(number_of_modes):
            port_res.extract(data="calculate_modes", savepath=plot_path + "00_modeprofile_fdeonly_" + port + "_mode#" + str(m),
                                mode=m, attribute="E", export_csv=False)
# endregion
```

|  key  |   Value   |   Type  |   Description  |
|-------| --------- | ------- |   ----------- |
| mesh_structure | True  |  bool  | select to view the refractive index distribution of the port |
| calculate_modes &emsp;&emsp; | True &emsp;&emsp; | bool &emsp;&emsp;|  select to calculate the mode of cross-section&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|
| Wavelength | wavelength |  float |  calculate the wavelength of the mode |
|  number_of_trial_modes | number_of_modes | float  |  number of calculation modes|
| search | "max_index"  |float | method of calculating mode |
| calculate_group_index | True | bool | select to calculate group refractive index |
| bent_waveguide | False |bool|  select to enable bent waveguide in calculation mode|
| radius | 1 | float | set the radius of the bent waveguide |
|orientation | 0 | float | set the bending direction of the waveguide|
|location |"simulation_center"|string| set the position of the bent waveguide|

#### 1.14 Run

Pass in the name of the simulation and use `simu[simu_name].run` function to run the simulation.
```python
# region --- 11. Run ---
eme_res = simu[simu_name].run()
# endregion
```

#### 1.15 Run and Extract Results
<div class="text-justify">

</div>

```python
# region --- 12. See Results --
if run_options.extract:
    # region --- 12.1 EME Results --
    if run_options.run:
        # region --- facet data ---
        eme_res.extract(data='eme_propagate:facet_data', savepath=plot_path, real=True, imag=True, export_csv=True)
        # endregion

        # region --- smatrix_intensity ---
        eme_res.extract(data="eme_propagate:smatrix", savepath=plot_path + "011_eme_smatrix_intensity",
                        target="intensity", export_csv=True)
        # endregion

        # region --- monitor ---
        eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_z_normal",
                        monitor_name="z_normal", attribute="E", export_csv=True)

        for i in range(5):
            eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_section"+str(i+1),
                            monitor_name="section"+str(i+1), attribute="E", export_csv=True)
        # endregion
    # endregion

    # region --- 12.2 EME Wavelength Sweep Results ---
    if run_options.run_wavelength_sweep:
        """ 20_wavelength_sweep """
        eme_res.extract(data="wavelength_sweep:sweep", savepath=plot_path + "20_wavelength_sweep",
                        plot_x="wavelength", export_csv=True)
    # endregion
    # endregion
```


#### 1.16 Control Switch

We can control the operation of the simulation by passing in bool values through tuple, as shown in the following code.

```python
class RunOptions(NamedTuple):
    calculate_modes: bool
    run: bool
    run_wavelength_sweep: bool
    extract: bool

if __name__ == "__main__":
    simulation(run_mode="local", wavelength=1.50, global_mesh_grid=0.05, local_mesh_grid=0.03, number_of_modes=15,
               run_options=RunOptions(calculate_modes=True, run=True, run_wavelength_sweep=True, extract=True))
```

### 2 Output Results

#### 2.1 ModeProfile



#### 2.2 EME Propagation
<div class="text-justify">


</div>

## Analysis and Discuss

其中一个模式在特定波导截面的宽度时，满足模式匹配条件的偏振光耦合进入附近的波导中，另一个偏振模式的光则不满足模式匹配条件继续沿着波导传输。

## References

