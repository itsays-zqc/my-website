
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Directional Coupler

## Introduction

<div class="text-justify">

&emsp;&emsp;Directional couplers (DC) are an important category of optical splitters. They are typically composed of two adjacent single-mode waveguides, and the coupling coefficient is determined by both the length of the coupler and the spacing between them. This feature allows for effective control of the splitting ratio.

&emsp;&emsp;When it comes to directional couplers, we pay close attention to several key parameters, including **insertion loss**, **splitting ratio**, **device dimensions**, and **operating bandwidth**. 

</div>

![DC introduction](DC_intro.png 'DC introduction')

## Simulation Methods

<div class="text-justify">

&emsp;&emsp;The `FDE module` can be used to calculate the symmetric and anti-symmetric mode field distributions of the directional coupler’s two arms. From these calculations, the effective index can be determined, allowing for the theoretical calculation of the coupling length required to achieve the target splitting ratio. 

&emsp;&emsp; And the `FDTD module` can be used to perform precise calculations of light propagation in the DC. The light field transmission images in the monitor allow for a visual assessment,the related data of which facilitate further optimization and validation of the coupling length and spacing parameters in the DC splitter.

&emsp;&emsp;After data processing, it can be obtained that the splitting ratio, insertion loss, and operating bandwidth of DC. In designing high-performance directional couplers for various optical communication and integrated photonics applications, these calculations and optimization processes are instrumental.

</div>

##  Directional Coupler(FDE module)

<div class="text-justify">

&emsp;&emsp;Using the `FDE module`, we will calculate symmetric and antisymmetric modes in a Directional Coupler modeled with the SDK. The input light can be considered a combination of the symmetric mode and the antisymmetric mode so that we can precisely calculate the coupling coefficient by effective index from the FDE module. Referring to the *Silicon Photonics Design* written by Lukas Chrostowski, we build the structure of the Directional coupler in the simulation.

</div>

###  1.Basic Operations

#### 1.1 Import File

<div class="text-justify">

&emsp;&emsp;Once you have installed and configured the environment, import the `DC_FDE.py` SDK code and the `DC.gds layout`.

&emsp;&emsp;The example library and related model code are usually located in the directory `AIO_SDK/.venv_maxoptics/site-packages/maxoptics_sdk/examples`, and the GDS file is generally imported into the `../examples/examples_gds` folder.

</div>

#### 1.2 SDK Initialization

<div class="text-justify">

&emsp;&emsp;Create a new terminal and run the code after you import the Python and GDS files. Max-Optics SDK may take some time to initialize on the first run.

</div>

```
Version of Max-Optics sdk is 2.3.0.4.630.2000
Max-Optics SDK is initializing...
```

### 2.Code Description

<div class="text-justify">

&emsp;&emsp;Now let's learn the meaning of functions and parameters that correspond to the specific code.

</div>

#### 2.1 import Modules

<div class="text-justify">

&emsp;&emsp;To begin, we need to use the `import` command to call the relevant functional modules.

</div>

```
import maxoptics_sdk.all as mo
from maxoptics_sdk.helper import timed, with_path
from typing import List, Literal, NamedTuple
import os
import time
```

#### 2.2  Define Simulation 

<div class="text-justify">

&emsp;&emsp;Firstly, We define parameters and give them a default value, such as the simulation wavelength and grid accuracy. Note that we can override this value in the following code. 

</div>

```
def simulation(*, run_mode='local', wavelength=1.55, grid=0.02, number_of_trial_modes=20, run_options: 'RunOptions', `kwargs):
```

<div class="text-justify">

&emsp;&emsp;The provided code contains comments that define the simulation parameters. Let's explain each of these parameters. <br/>&emsp;&emsp;The function `simulation` is used to define the simulation parameters for the program. <br/>&emsp;&emsp;The `run_mode` parameter determines the type of calculation resources to be used. <br/>&emsp;&emsp;The `wavelength` parameter specifies the wavelength of the input light in micrometers. <br/>&emsp;&emsp;The `grid` parameter represents the grid accuracy in micrometers. <br/>&emsp;&emsp;Lastly, the `number_of_trial_modes` parameter sets the number of modes to be calculated.

</div>

#### 2.3 Define Parameters

<div class="text-justify">

&emsp;&emsp;Define commonly used parameters in region 0, such as the width and height of the simulation boundary, the start time of the simulation, the path and name for the simulation output, the path to the imported GDS layout, and other parameters required for structural parameterized modeling.

</div>

```
# region --- 0. General Parameters ---
  yspan_solver = 5 
  zspan_solver = 2
  time_str = time.strftime('%Y%m%d_%H%M%S', time.localtime())
  path = kwargs['path']
  simu_name = f'FDE_DC_yspan={yspan_solver}_{time_str}'
  gds_file_root_path = os.path.abspath(os.path.join(path, '..'))
  gds_file = gds_file_root_path + '/examples_gds/DC.gds' 
  project_name = f'{simu_name}_{run_mode}_{time_str}'
  plot_path = kwargs.get('plot_dir', path) + '/plots/' + project_name + '/'
  kL = [f'0{k}' for k in range(5)]
  export_options = {"export_csv": True, "export_mat": True, "export_zbf": True}
  l_bend=5.6 # the length of z bend
  l_beam=15 # the length of 2 beams 
  l_input=2.5 # the length of input wg 
# endregion
```

<div class="text-justify">

&emsp;&emsp;The code defines several parameters and variables necessary for the simulation process. The `yspan_solver` parameter represents the width of the simulation boundary specified in micrometers. Similarly, the `zspan_solver` parameter denotes the height of the simulation boundary in micrometers. The `time_str` variable is used to obtain the current time as a timestamp for the simulation.<br/>&emsp;&emsp;The `path` variable defines the file path for the simulation, while `simu_name` specifies the name of the simulation file.<br/>&emsp;&emsp;The `gds_file_root_path` variable defines the path for importing the GDS layout. <br/>&emsp;&emsp;The `project_name` variable assigns a name to the project for the simulation output. <br/>&emsp;&emsp;The `plot_path` variable determines the directory where the simulation result plots will be saved. <br/>&emsp;&emsp;The `export_options` parameter allows for the definition of options for exporting the simulation results.<br/>&emsp;&emsp;Lastly, the variables `l_bend` ,`l_beam`, and `l_input` represent the lengths of specific components within the simulation, such as the length of the z-bend, the length of the two beams, and the length of the input waveguide, respectively. <br/>&emsp;&emsp;These parameters and variables together facilitate the successful execution and organization of the simulation process.

</div>

#### 2.4 Define Materials

<div class="text-justify">

&emsp;&emsp;Indeed, let's proceed to the next step, where we set up the materials required for the simulation in region 2. In this case, we will directly use relevant materials from the MO library.

</div>

```
# region --- 2. Material ---
  mt = pj.Material()
  mt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)
  mt.add_lib(name='SiO2', data=mo.Material.SiO2_Palik, order=2)
  mt.add_lib(name='Air', data=mo.Material.Air, order=2)
# endregion
```

#### 2.5 Create Model

<div class="text-justify">

&emsp;&emsp;Next, we will create the Directional Coupler model in region 3. We have two options for modeling the structure:

![DC klayout](DC_gds.png 'DC klayout')

</div>

```
# region --- 3. Structure ---
    st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.2, background_material=mt["SiO2"])
    st.add_geometry(name="box", type="gds_file",
                    property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (1, 1)},
                              "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 6},
                              "material": {"material": mt["SiO2"], "mesh_order": 1}})
 
    st.add_geometry(name="dc", type="gds_file",
                    property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (0, 0)},
                              "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 0.22},
                              "material": {"material": mt["Si"], "mesh_order": 2}})
    st.add_geometry(name='slab', type='Rectangle',
                    property={'geometry': {'x_min': -l_input-l_bend-l_beam/2-3, 'x_max':l_input+l_bend+l_beam/2+3, 'y': 0, 'y_span': 8, 'z': 0.045, 'z_span': 0.09},
                              'material': {'material': mt['Si'], 'mesh_order': 2}} )
# endregion
```

<div class="text-justify">

&emsp;&emsp;Here, we import the DC layout from the GDS file. we can create the DC model directly within the SDK using the `Structure` function.<br/>&emsp;&emsp;The `name` parameter defines the structure name.<br/>&emsp;&emsp;The `type` parameter specifies the structure type.<br/>&emsp;&emsp;The `path`, `cell_name`, and `layer_name` parameters point to the GDS file and specify the relevant layers and cell names used in the layout.<br/>&emsp;&emsp;The `geometry` parameter sets the structure's coordinates. <br/>&emsp;&emsp;The `material` parameter specifies the material properties <br/>&emsp;&emsp;The `mesh_order` parameter sets the mesh order for the simulation. 

</div>

#### 2.6 Boundary

<div class="text-justify">

&emsp;&emsp;After establishing the model, we can add the simulation region in region 4 and define the simulation boundary conditions. This involves specifying the geometry of the simulation region, the boundary conditions in the xyz directions, and detailed parameters.

</div>

```
# region --- 4. Boundary ---
st.OBoundary(property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': yspan_solver, 'z': 0, 'z_span': zspan_solver},
                        'boundary': {'y_min': 'PML', 'y_max': 'PML', 'z_min': 'PML', 'z_max': 'PML'},
                        'general_pml': {'pml_layer': 12, 'pml_kappa': 1, 'pml_sigma': 15, 'pml_polynomial': 3}
                        })
# endregion
```

<div class="text-justify">

&emsp;&emsp;In this code segment, we define simulation region using the `OBoundary` function.<br/>&emsp;&emsp;First, we define the size of the boundary with the `geometry` parameter .<br/>&emsp;&emsp;Next, we define the boundary conditions for the simulation using the `boundary` dictionary, where the x ,y and the z directions all have PML boundary conditions.<br/>&emsp;&emsp;Finally, we set detailed parameters for the PML boundary using the `general_pml` dictionary, specifying the `pml_layer`,`pml_kappa`, `pml_sigma`and `pml_polynomial`, which  specific the order of the polynomial.

</div>

#### 2.7  Add Sub-mesh

<div class="text-justify">

&emsp;&emsp;To achieve more accurate calculations of the model's modal fields, we can add a sub-mesh in region 5.

</div>

```
# region --- 5. Sub Mesh ---
st.add_mesh(name='sub_mesh',
            property={'general': {'dx': 0.002, 'dy': 0.002, 'dz': 0.002},
                      'geometry': {'x': 0, 'x_span': 6, 'y': 0, 'y_span': 2, 'z': 0, 'z_span': 0.2}})
# endregion
```

<div class="text-justify">

&emsp;&emsp;In this code segment, we use the `add_mesh` function to add a sub-mesh in region 5.<br/>&emsp;&emsp;The `name` parameter defines the name of the mesh.<br/>&emsp;&emsp;The `general` parameter specifies the grid accuracy in the xyz directions (in this case, 0.02 micrometers in each direction).<br/>&emsp;&emsp;The `geometry` parameter sets the coordinates of the sub-mesh.

</div>

#### 2.8  FDE Simulation

<div class="text-justify">

&emsp;&emsp;In region 6, we add the FDE simulation module to support mode calculations and frequency scans.

</div>

```
# region --- 6. Simulation ---
simu = pj.Simulation()
simu.add(name=simu_name, type='FDE',
          property={
              # 'general': {'solver_type': '2d_x_normal'},  # default is '2d_x_normal' 
              'mesh_settings': {
                  'global_mesh_uniform_grid': {'dy': grid, 'dz': grid},  # 'minimum_mesh_step_settings': {'min_mesh_step': 1.0e-4}
              },
              'fde_analysis': {
                  'modal_analysis': {
                      'calculate_modes': run_options.run, 'mesh_structure': True,
                      'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes,
                      'search': 'max_index',  
                      # 'n': 2,
                      'calculate_group_index': False,
                      'mode_removal': {'threshold': 0.02},
                      # 'bent_waveguide': {'bent_waveguide': False, 'radius': 1, 'orientation': 0, 'location': 'simulation_center'}
                  },
                  "frequency_analysis": {
                      "frequency_analysis": run_options.run_frequency_sweep,
                      # "start_wavelength": 1.50, "stop_wavelength": 1.60, "number_of_points": 3,
                      # "effective_index": 1, "detailed_dispersion_calculation": False
                  }}})
# endregion
```

<div class="text-justify">

&emsp;&emsp;In this code segment, the `name` parameter defines the name of the simulation module.<br/>&emsp;&emsp;The `general` parameter specifies the type of the simulation module within the structure. It supports the following list selection`['2d_x_normal','2d_y_normal','2d_z_normal']`.<br/>&emsp;&emsp;The `mesh_settings` parameter is set to the previously defined sub_mesh.<br/>&emsp;&emsp;The `wavelength` parameter sets the wavelength-related parameters for the simulation.<br/>&emsp;&emsp;The `search` parameter specifies the mode search type. It supports the following list selection['near_n','max_index'].<br/>&emsp;&emsp;In this case, we use `max_index` to automatically search for the mode with max index in the structure. To use the ‘near_n’, we need to set the data in ‘n’.<br/>&emsp;&emsp;The `bent_waveguide` parameter can be used to set parameters for a bent waveguide.<br/>&emsp;&emsp;The `frequency_analysis` parameter allows us to set parameters for frequency scans or mode calculations with varying wavelengths.

</div>

#### 2.9  Structure Image

<div class="text-justify">

&emsp;&emsp;In region 7, you can generate an image of the structure which contains the specific coordinates.
</div>

```
# region --- 7. Structure Show ---
  st.structure_show(fig_type='png', show=False, savepath=f'{plot_path}{kL[0]}_{simu_name}', simulation_name=simu_name)
  # simu[simu_name].show3d(show_with="local_gui")
# endregion
```

<div class="text-justify">

&emsp;&emsp;In this code segment, we use the `structure_show` function to form a picture.<br/>&emsp;&emsp;The `fig_type` specifies the type of figure. It supports the following list selection["png", "svg"].<br/>&emsp;&emsp;The `show` , which is a switch that controls whether the picture is generated or not.

If you have already installed the GUI locally, you can automatically pop up the 3D structural model within the GUI using `simu[simu_name].show3d(show_with="local_gui")`. Additionally, `show_with` also supports `matplotlib`, so you can also view the image through python.




</div>

#### 2.10  Index Preview

<div class="text-justify">

&emsp;&emsp;And in region 8, you can generate a material refractive index plot for the structure in different cross-sectional directions(x,y,z).

</div>

```
# region --- 8. Mesh View ---
if run_options.index_preview:
    k = kL[1]
    simu[simu_name].run_index(name=f'{simu_name}_x_0', savepath=f'{plot_path}{k}IndexPreview_x=0',
                              # export_csv=False, show=False,
                              property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 2}})
    simu[simu_name].run_index(name=f'{simu_name}_y_0', savepath=f'{plot_path}{k}IndexPreview_y=0',
                              # export_csv=False, show=False,
                              property={'geometry': {'x': 0, 'x_span': 4, 'y': 0, 'y_span': 0, 'z': 0, 'z_span': 2}})
    simu[simu_name].run_index(name=f'{simu_name}_z_0', savepath=f'{plot_path}{k}IndexPreview_z=0',
                              # export_csv=False, show=False,
                              property={'geometry': {'x': 0, 'x_span': 4, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 0}})
# endregion
```

#### 2.11 Run Simulation

<div class="text-justify">

&emsp;&emsp;In region 9, you can run the simulation. 

</div>

```
# region --- 9. Run ---
result_fde = simu[simu_name].run()
# endregion
```

#### 2.12 Retrieve Results

<div class="text-justify">

&emsp;&emsp;In region 10, you can retrieve and store the simulation results. 

</div>

```
# region --- 10. See Results ---
if run_options.extract:
    # region --- 10.1 calculate_modes ---
    if run_options.run:
        k = kL[2]
        res = result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_neff_table', export_csv=True)
        print(res.to_string(index=False))
        for m in range(len(res)):
            k = kL[3]
            result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_mode{m}',
                                attribute='Ey', mode=m, real=True, imag=False, `export_options, show=False)
    # endregion

    if run_options.run_frequency_sweep:
        attr_selections: List[Literal["neff", "loss", "group_index", "polarization"]] = ["neff", "loss", "group_index", "polarization"]
        for i, a in enumerate(attr_selections):
            k = kL[4]
            result_fde.extract(data="frequency_analysis", savepath=f'{plot_path}{k}_freq_sweep_{a}',
                                attribute=a, real=True, imag=True, export_csv=True, export_mat=True, show=False)
# endregion
```

<div class="text-justify">

&emsp;&emsp;The `extract` function allows you to extract specific simulation results and store them for further analysis.<br/>&emsp;&emsp;The `attribute` parameter specifies the type of simulation results to be extracted.<br/>&emsp;&emsp;The `mode` parameter corresponds to the index of the FDE calculation mode.<br/>&emsp;&emsp;The `real` and `imag` parameters are used to extract the real and imaginary parts of the simulation results, respectively.

</div>

#### 2.13 Switches

<div class="text-justify">

&emsp;&emsp;We also support control switches for various functionalities at the end of the code, and you can use configuration flags(True or False). These flags can be used to turn specific functionalities on or off, making it easier to check the model and perform efficient calculations.

</div>

```
class RunOptions(NamedTuple):
    index_preview: bool
    run: bool
    run_frequency_sweep: bool
    extract: bool


if __name__ == '__main__':
    simulation(
               run_options=RunOptions(index_preview=True,
                                      run=True,
                                      run_frequency_sweep=False,
                                      extract=True)
               )
```

### 3.Output Results

<div class="text-justify">

&emsp;&emsp;1. Schematic diagram of the refractive index of the device.

</div>

![DC index preview](DC_index_str.png 'DC index preview')

<div class="text-justify">

&emsp;&emsp;2. The results of the calculation mode will be stored in a CSV format file for subsequent data processing in Python and Excel.

</div>

![DC data](DC_dataout.png 'DC data')

<div class="text-justify">

&emsp;&emsp;3. Image of the Ey electric field component intensity in symmetric and antisymmetric mode modes.

</div>

![DC mode](DC_modeEy.png 'DC mode')

<div class="text-justify">

&emsp;&emsp;4. According to the effective refractive index of the obtained mode field, Python is used for data processing and drawing.

</div>


<div class="text-justify">

&emsp;&emsp;&emsp;The coupling length under the gap between two waveguides is calculated with the formula:

</div>

<BlockMath math="L_x = \frac{\lambda}{2|neff_1-neff_2|}" />

<div class="text-justify">

&emsp;&emsp;&emsp;We can also get the coupling coefficient by the formula:

</div>

<BlockMath math="\kappa = |sin(\frac{\pi\delta(n)L}{\lambda})|" />

![DC gap,neff,Lx](DC_mode_pic.png 'DC gap,neff,Lx')

<div class="text-justify">

&emsp;&emsp;5.  Similarly, we can obtain the relationship between the gap (distance) between two waveguides and the coupling coefficient and the relationship between the wavelength and the coupling length.

</div>

![DC gap,neff,Lx](DC_mode_pic2.png 'DC gap,neff,Lx')

 






##  Directional Coupler(FDTD module)



<div class="text-justify">

&emsp;&emsp;Next, we will learn how to model a Directional Coupler using the SDK and calculate the light propagation in the structure using the FDTD module.

### 1.Basic Operations


</div>

<div class="text-justify">

&emsp;&emsp;Similarly, after installing and configuring the environment, we import the relevant SDK code file `DC_FDTD.py` and the layout `DC.gds` for the model. The example library and related model code are typically stored in the directory `AIO_SDK/.venv_maxoptics/site-packages/maxoptics_sdk/examples`, and the GDS file is imported into the folder `../examples/examples_gds`.

</div>

### 2.Code Description

<div class="text-justify">

&emsp;&emsp;Next, we will continue to learn about the specific functionalities corresponding to the code.

</div>

#### 2.1 Define Parameters

<div class="text-justify">

&emsp;&emsp;Like the operations with the FDE module, after configuring the simulation wavelength, grid precision, and other parameters, we need to set the relevant parameters for simulation and parameterized modeling in Region 0. This includes defining the paths and names for the simulation files and output results and specifying the path for importing the GDS layout.

</div>

```
# region --- 0. General Parameters ---
l_bend=5.6 # the length of z bend
l_beam=15 # the length of 2 beams 
l_input=2.5 # the length of input wg 
monitor_w = 3.0
monitor_h = 2.0
waveform_name = "wv" + str(round(wavelength * 1000))
time_str = time.strftime("%Y%m%d_%H%M%S", time.localtime())
path = kwargs["path"]
simu_name = "FDTD_DC"
project_name = f'{simu_name}_{run_mode}_{time_str}'
plot_path = f'{path}/plots/{project_name}/'
gds_file_root_path = os.path.abspath(os.path.join(path, '..'))
gds_file = gds_file_root_path + "/examples_gds/DC.gds"
# endregion
```

#### 2.2 Define Materials

<div class="text-justify">

&emsp;&emsp;Subsequently, in Region 2, we define the materials required for the simulation. Here, we specify the refractive indices of Si (Silicon) and SiO2 (Silicon Dioxide) materials.

</div>

```
# region --- 2. Material ---
mt = pj.Material()
mt.add_nondispersion(name="Si", data=[(3.472, 0)], order=2)
mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=2)
mt.add_lib(name="Air", data=mo.Material.Air, order=2)
# endregion
```

<div class="text-justify">

&emsp;&emsp;The `add_nondispersion` function adds a non-dispersion material to the project in the simulation. The `data`, is specified as a list, typically in the format [(index real, index imag)]. This list contains the complex refractive index values for the material, enabling the simulation to model its optical properties accurately. The `Order` parameter determines the mesh order for the material during the simulation. The function allows users to incorporate non-dispersion materials into the simulation, contributing to a comprehensive and precise optical analysis of the system under investigation.

</div>

#### 2.3 Define Waveform

<div class="text-justify">

&emsp;&emsp;In Region 3, we define the parameters relevant to the wavelength.

</div>

```
# region --- 3. Waveform ---
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=wavelength_span)
# endregion
```

<div class="text-justify">

&emsp;&emsp;The `Waveform` function is used to retrieve the waveform manager for the current project. It allows users to access and manipulate the waveform sources used in the simulation. The `name` parameter specifies the name of the waveform source. The `Wavelength_center` parameter defines the center of the wavelength range for the source. The `Wavelength_span` parameter determines the span of the wavelength range for the source. 


</div>

#### 2.4 Create Model\Boundary\Sub-mesh

<div class="text-justify">

&emsp;&emsp;Next, similar to the procedure in the FDE module, in Region 4, we create the model by importing the GDS layout. Subsequently, in Region 5, we establish the boundary conditions. Additionally, in Region 6, we can set the sub-mesh for improved precision.

</div>

```
    # region --- 4. Structure ---
    st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.2, background_material=mt["SiO2"])
    st.add_geometry(name="box", type="gds_file",
                    property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (1, 1)},
                              "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 6},
                              "material": {"material": mt["SiO2"], "mesh_order": 1}})
 
    st.add_geometry(name="dc", type="gds_file",
                    property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (0, 0)},
                              "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 0.22},
                              "material": {"material": mt["Si"], "mesh_order": 2}})
    st.add_geometry(name='slab', type='Rectangle',
                    property={'geometry': {'x_min': -l_input-l_bend-l_beam/2-3, 'x_max':l_input+l_bend+l_beam/2+3, 'y': 0, 'y_span': 8, 'z': 0.045, 'z_span': 0.09},
                              'material': {'material': mt['Si'], 'mesh_order': 2}} )
    # endregion

    # region --- 5. Boundary ---
    st.OBoundary(property={"geometry": {"x": 0, "x_span": 2*(l_input+l_bend+l_beam/2-0.5), "y": 0, "y_span": 6, "z": 0.11, "z_span": monitor_h},
                           "boundary": {"x_min": "PML", "x_max": "PML", "y_min": "PML", "y_max": "PML", "z_min": "PML", "z_max": "PML"},
                           "general_pml": {"pml_same_settings": True, "pml_kappa": 2, "pml_sigma": 0.8, "pml_layer": 8, "pml_polynomial": 3}})
    # endregion

    # region --- 6. Sub Mesh ---
    st.add_mesh(name="sub_mesh",
                property={"general": {"dx": 0.05, "dy": 0.02, "dz": 0.02},
                          "geometry": {"x": 0, "x_span": 2*(l_input+l_bend+l_beam/2-0.5), "y": 0, "y_span": 6, "z": 0.11, "z_span": monitor_h}})
    # endregion
```

#### 2.5 Source  

<div class="text-justify">

&emsp;&emsp;Then we need to establish the light source in the input waveguide, as shown in Region 7.

</div>

```
# region --- 7. ModeSource ---
src = pj.Source()
src.add(name="source", type="mode_source", axis="x_forward",
        property={"general": {"mode_selection": "user_select", "waveform": {"waveform_id_select": wv[waveform_name]}},
                  "geometry": {"x": -l_input-l_beam/2-l_bend+2, "x_span": 0, "y": 1.35, "y_span": monitor_w, "z": 0.11, "z_span": monitor_h}})
# endregion
```

<div class="text-justify">

&emsp;&emsp;The `Source` function is utilized to retrieve the source manager for the current project. The `type` parameter specifies the type of the source and is formatted as either `["mode_source"] or ["gaussian_source"]`. The `name` parameter represents the name assigned to the source. The `axis` parameter defines the axis of the source. The `property` parameter allows for defining specific properties associated with the source.

</div>

#### 2.6 Monitor  

<div class="text-justify">

&emsp;&emsp;In Region 8, we set up the monitors. 

</div>

```
# region --- 8. Monitor ---
  # region --- 8.0 GlobalMonitor ---
  mn = pj.Monitor()
  mn.add(name="Global Option", type="global_option",
          property={"frequency_power": {"spacing_type": "wavelength", "spacing_limit": "center_span",   # ["min_max","center_span"]
                                        "wavelength_center": wavelength, "wavelength_span": , "frequency_points": 3}})
  # endregion

  # region --- 8.2 input ---
  mn.add(
    type="power_monitor",
    name="input_reflect",
    property={"general": {"frequency_profile": {"wavelength_center": wavelength, "wavelength_span": 0.1, "frequency_points": 3}},
              "geometry": {"monitor_type": "2d_x_normal", "x": -l_input-l_beam/2-l_bend+1.5, "x_span": 0, "y": 1.35, "y_span": monitor_w, "z": 0.11, "z_span": monitor_h},
              'mode_expansion': {"enable": True, 'direction': 'positive',
                                  'mode_calculation': {'mode_selection': 'user_select', 'mode_index': [0]}}})
  # endregion
# endregion
```

<div class="text-justify">

&emsp;&emsp;For the global monitor, the `Monitor` function is utilized to retrieve the monitor manager for the current project, which allows users to access and manage various types of monitors used during simulation. The `name` parameter represents the name of the Global Option associated with the monitor. The `type` parameter defines the type of the Global Option and is formatted as a list containing one of several monitor types, such as `["electric_monitor"], ["current_monitor"], ["charge_monitor"], ["band_monitor"], ["profile_monitor"], ["global_monitor", "global_option"], ["time_monitor"], ["power_monitor"], or ["mode_expansion"]`. The `property` parameter is used to define and set the relevant parameters specific to the chosen monitor type. These parameters control the monitor's behavior and data collection settings during the simulation. 

</div>

<div class="text-justify">

&emsp;&emsp;The power monitor is a configuration setting that allows users to specify various simulation parameters. The `name` parameter assigns a name to the power monitor. The `type` parameter defines the type of power monitor. The `general` parameter pertains to settings related to the frequency domain and frequency-dependent behaviors of the simulation. The `geometry` parameter is used to define the geometric characteristics of the simulated structure. The `mode_expansion` parameter involves relevant settings for mode expansion simulations. Users can customize the simulation settings by utilizing these input parameters to achieve accurate and comprehensive results based on their specific simulation requirements.

</div>

#### 2.7 FDTD Simulation 

<div class="text-justify">

&emsp;&emsp;In Region 9, we add the FDTD simulation

</div>

```
    # region --- 9. Simulation ---
    simu = pj.Simulation()
    simu.add(name=simu_name, type="FDTD",
             property={"general": {"simulation_time": 1000},
                       "mesh_settings": {"mesh_accuracy": {"cells_per_wavelength": grids_per_lambda, },
                                         "minimum_mesh_step_settings": {"min_mesh_step": 0.01}}})

    # endregion
```

<div class="text-justify">

&emsp;&emsp;The `Simulation` manager is critical for setting up and running simulations in the current project. The `name` parameter allows users to assign a unique name to the simulation for identification purposes. The `type` parameter defines the type of the simulation. The `simulation_time` parameter specifies the duration of the simulation. The `mesh_settings` parameter enables users to configure various settings related to the simulation mesh. The `mesh_accuracy` parameter controls the precision of the mesh used in the simulation. The `cells_per_wavelength` parameter determines the wavelength precision used in the simulation. The `minimum_mesh_step_settings` parameter sets the minimum mesh step, allowing users to define the smallest allowable size for mesh elements. Users can tailor the simulation setup to meet their requirements by utilizing these input parameters, enabling accurate and efficient electromagnetic simulations of complex optical structures.

</div>

#### 2.8  Schematic of Structure

<div class="text-justify">

&emsp;&emsp;As the same, we generate the device structure of the Directional Coupler in Region 10. 

</div>

```
# region --- 10. Structure Show ---
  st.structure_show(fig_type="png", show=False, savepath=plot_path + simu_name, simulation_name=simu_name)
# endregion
```
#### 2.9  Calculate Source

<div class="text-justify">

&emsp;&emsp;To calculate the input mode light and save its electric field intensity data in region 11.  

</div>

```
# region --- 11. Calculate Mode ---
if run_options.calculate_modes:
    simu.add(name=simu_name+"_cal_mode", type="mode_selection:user_select", simulation_name=simu_name, source_name="source",
              property={"modal_analysis": {"mesh_structure": True, "calculate_modes": True,
                                          "wavelength": wavelength, "number_of_trial_modes": 10, "search": "max_index", "calculate_group_index": True}})
    src_res = simu[simu_name+"_cal_mode"].run()
    src_res.extract(data="calculate_modes", savepath=plot_path + "00_source_modeprofile_fdeonly",
                    mode=0, attribute="E", export_csv=True)
# endregion
```
#### 2.10  Run Simulation

<div class="text-justify">

&emsp;&emsp;Then, in Region 12, we run the simulation. 

</div>

```
# region --- 12. Run ---
if run_options.run:
    fdtd_res = simu[simu_name].run(
        # resources={"compute_resources": "gpu", "gpu_devices": [{"id": 0}]}
    )
# endregion
```
#### 2.11  Results

<div class="text-justify">

&emsp;&emsp;In Region 13, we define the desired output results. Lastly, we control the switches of various functional modules at the end of the Python file.


</div>

```
# region --- 13. See Results ---
if run_options.extract and run_options.run:
    # region --- z_normal ---
    """ 01_top_profile """
    for λ in [1.5, 1.55, 1.6]:
        fdtd_res.extract(data="fdtd:power_monitor", savepath=plot_path + "01_top_profile_" + str(λ) + "um",
                          monitor_name="z_normal", target="intensity", attribute="E", wavelength=str(λ), export_csv=True)
    # endregion

    # region --- through ---
    """ 01_monitorThrough_modeprofile_fdtd """
    fdtd_res.extract(data="fdtd:power_monitor", savepath=plot_path + "01_monitorThrough_modeprofile_fdtd",
                      monitor_name="output_up", target="intensity", attribute="E", export_csv=True)

    """ 02_Trans_ThroughVsLambda_power """
    fdtd_res.extract(data="fdtd:power_monitor", savepath=plot_path + "02_Trans_ThroughVsLambda_power",
                      monitor_name="output_up", attribute="T", target="line", plot_x="wavelength", export_csv=True)

    """ 021_ME_ThroughVsLambda_mode """
    fdtd_res.extract(data="fdtd:mode_expansion", savepath=plot_path + "021_ME_ThroughVsLambda_mode",
                      monitor_name="output_up", attribute="t_forward", target="line", plot_x="wavelength", mode=0, export_csv=True)
    # endregion

    # region --- cross ---
    """ 01_monitorThrough_modeprofile_fdtd """
    fdtd_res.extract(data="fdtd:power_monitor", savepath=plot_path + "01_monitorCross_modeprofile_fdtd",
                      monitor_name="output_down", target="intensity", attribute="E", export_csv=True)

    """ 02_Trans_ThroughVsLambda_power """
    fdtd_res.extract(data="fdtd:power_monitor", savepath=plot_path + "02_Trans_CrossVsLambda_power",
                      monitor_name="output_down", attribute="T", target="line", plot_x="wavelength", export_csv=True)

    """ 021_ME_ThroughVsLambda_mode """
    fdtd_res.extract(data="fdtd:mode_expansion", savepath=plot_path + "021_ME_CrossVsLambda_mode",
                      monitor_name="output_down", attribute="t_forward", target="line", plot_x="wavelength", mode=0, export_csv=True)
    # endregion
```

#### 2.11  Switches

<div class="text-justify">

&emsp;&emsp;At the end of all codes, We control the switches of various functional modules at the end of the Python file.

</div>

```
class RunOptions(NamedTuple):
    index_preview: bool
    calculate_modes: bool
    run: bool
    extract: bool


if __name__ == "__main__":
    simulation(
               run_options=RunOptions(index_preview=True, calculate_modes=True, run=True, extract=True))
```

### 3.Output results

<div class="text-justify">

&emsp;&emsp;After running the program, we can obtain a series of corresponding output results:

&emsp;&emsp;1.Incident light electric field intensity, Cross output port electric field intensity, and TRU output port electric field intensity.

</div>

![FDTD mode](fdtd_mode.png 'FDTD mode')

<div class="text-justify">

&emsp;&emsp;2.DC (Directional Coupler)  Z-direction electric field intensity at different wavelengths: 1.5 μm, 1.55 μm, and 1.6 μm.

</div>

![FDTD mode](fdtd_zplot.png 'FDTD mode')

<div class="text-justify">

&emsp;&emsp;3.Cross output port and TRU output port transmittance at different wavelengths: 1.5 μm, 1.55 μm, and 1.6 μm.

</div>

![FDTD mode](fdtd_wavesweep.png 'FDTD mode')

<div class="text-justify">

&emsp;&emsp;4.TE0 mode transmittance at Cross output port and TRU output port for different wavelengths: 1.5 μm, 1.55 μm, and 1.6 μm.

</div>

![FDTD mode](fdtd_wavesweep2.png 'FDTD mode')


## Supplement

<div class="text-justify">

&emsp;&emsp;To view a function's definition and supported parameters or a parameter dictionary, you can right-click on its name and select "Go to Definition"  or press "Ctrl" while left-clicking on its name to view its definition, showing the available parameters and their descriptions.  

</div>

## References

Chrostowski, L., & Hochberg, M. (2015). Silicon Photonics Design: From Devices to Systems. Cambridge: Cambridge University Press. doi:10.1017/CBO9781316084168