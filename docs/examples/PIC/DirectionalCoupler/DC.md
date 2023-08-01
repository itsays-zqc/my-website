import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Directional Coupler

![DC introduction](DC_intro.png 'DC introduction')

## Introduction:

<div class="text-justify">
&emsp;&emsp;Directional couplers are an important category of optical splitters. They commonly consist of two adjacent single-mode waveguides. The coupling coefficient of a directional coupler is determined by both the length of the coupler and the spacing between them. This feature allows for effective control of the splitting ratio.

&emsp;&emsp;The main parameters of directional coupler include `insertion loss`, `splitting ratio`,`device dimensions` and `operating bandwidth`.
</div>

## Simulation Methods: 

&emsp;&emsp;The symmetric and antisymmetric mode field distributions of the directional coupler‘s (DC) two arms can be calculated using the 
`FDE module`. From these calculations, the effective refractive index can be determined, allowing for the theoretical calculation of the coupling length required to achieve the target splitting ratio.

&emsp;&emsp;It is possible to perform precise calculations of light propagation in the DC using the `FDTD module`. The light field transmission images in the monitor allows for a visual assessment. This data facilitates further optimization and validation of the coupling length and spacing parameters in the DC splitter.

&emsp;&emsp;After data processing, the directional coupler's splitting ratio, insertion loss, and operating bandwidth can be obtained. These calculations and optimization processes are instrumental in designing high-performance directional couplers for various optical communication and integrated photonics applications.

##  Directional Coupler(FDE module)
&emsp;&emsp;Below, we will learn how to model a Directional Coupler using the SDK and perform calculations of the symmetric and antisymmetric modes in the structure using the FDE module.

###  1.Basic Operations:

#### 1.1 import file

&emsp;&emsp;After installing and configuring the environment, import the relevant SDK code file "DC_FDE.py" and the layout of the model "DC.gds".

&emsp;&emsp;The example library and related model code are usually located in the directory `"AIO_SDK/.venv_maxoptics/site-packages/maxoptics_sdk/examples"`, and the GDS file is generally imported into the `"../examples/examples_gds"` folder.

#### 1.2 SDK initialization
&emsp;&emsp;After importing the py and GDS files, you can create a new terminal and run the code. Please note that the first run may require some time for Max-Optics SDK initialization.

```
Version of Max-Optics sdk is 2.3.0.4.630.2000
Max-Optics SDK is initializing...
```

### 2.Code description

&emsp;&emsp;Next, let's learn the functions corresponding to the specific code.

#### 2.1 import modules

&emsp;&emsp;To begin, we need to use the "import" command to call the relevant functional modules.

```
import maxoptics_sdk.all as mo
from maxoptics_sdk.helper import timed, with_path
from typing import List, Literal, NamedTuple
import os
import time
```

#### 2.2  Define simulation function

&emsp;&emsp;Inside the simulation function, we define parameters related to the simulation wavelength and grid accuracy. For example, in the provided case, the simulation is performed with a grid accuracy of 0.02 um and calculates the results for an expected 20 modes at a wavelength of 1.55 um.

```
def simulation(*, run_mode='local', wavelength=1.55, grid=0.02, number_of_trial_modes=20, run_options: 'RunOptions', `kwargs):
```

&emsp;&emsp;The provided code contains comments that define the simulation parameters. Let's explain each of these parameters. <br/>&emsp;&emsp;The function `"simulation"` is used to define the simulation parameters for the program. <br/>&emsp;&emsp;The `"run_mode"` parameter determines the type of calculation resources to be used. <br/>&emsp;&emsp;The `"wavelength"` parameter specifies the wavelength of the incident light in micrometers. <br/>&emsp;&emsp;The `"grid"` parameter represents the grid accuracy in micrometers. <br/>&emsp;&emsp;Lastly, the `"number_of_trial_modes"` parameter sets the number of modes to be calculated.

#### 2.3 Define parameters

&emsp;&emsp;Define commonly used parameters in region 0, such as the width and height of the simulation boundary, the start time of the simulation, the path and name for the simulation output, the path to the imported GDS layout, and other parameters needed for structural parameterized modeling.

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

&emsp;&emsp;The code defines several parameters and variables necessary for the simulation process. <br/>&emsp;&emsp;The `"yspan_solver"` parameter represents the width of the simulation boundary, specified in micrometers. <br/>&emsp;&emsp;Similarly, the `"zspan_solver"` parameter denotes the height of the simulation boundary in micrometers. <br/>&emsp;&emsp;The `"time_str"` variable is used to obtain the current time as a timestamp for the simulation.<br/>&emsp;&emsp;The `"path"` variable defines the file path for the simulation, while `"simu_name"` specifies the name of the simulation file.<br/>&emsp;&emsp;The `"gds_file_root_path"` variable defines the path for importing the GDS layout. <br/>&emsp;&emsp;The `"project_name"` variable assigns a name to the project for the simulation output. <br/>&emsp;&emsp;The `"plot_path"` variable determines the directory where the simulation result plots will be saved. <br/>&emsp;&emsp;The `"export_options"` parameter allows for the definition of options for exporting the simulation results.<br/>&emsp;&emsp;Lastly, the variables `"l_bend"` ,`"l_beam"`, and `"l_input"` represent the lengths of specific components within the simulation, such as the length of the z-bend, the length of the two beams, and the length of the input waveguide, respectively. <br/>&emsp;&emsp;These parameters and variables together facilitate the successful execution and organization of the simulation process.

#### 2.4 Define Materials

&emsp;&emsp;Certainly, let's proceed to the next step, where we set up the materials required for the simulation in region 2. In this case, we will directly use relevant materials from the MO library.

```
# region --- 2. Material ---
  mt = pj.Material()
  mt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)
  mt.add_lib(name='SiO2', data=mo.Material.SiO2_Palik, order=2)
  mt.add_lib(name='Air', data=mo.Material.Air, order=2)
# endregion
```

#### 2.5 Create model

&emsp;&emsp;In the next step, we will create the Directional Coupler model in region 3. We have two options for modeling the structure:

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

&emsp;&emsp;Here, we import the DC layout from the GDS file. we can create the DC model directly within the SDK using the `Structure` function.<br/>&emsp;&emsp;The `"name"` parameter defines the structure name.<br/>&emsp;&emsp;The `"type"` parameter specifies the structure type.<br/>&emsp;&emsp;The `"path"`, `"cell_name"`, and `"layer_name"` parameters point to the GDS file and specify the relevant layers and cell names used in the layout.<br/>&emsp;&emsp;The `"geometry"` parameter sets the structure's coordinates. <br/>&emsp;&emsp;The `"material"` parameter specifies the material properties <br/>&emsp;&emsp;The `"mesh_order"` parameter sets the mesh order for the simulation. 

#### 2.6 Boundary

&emsp;&emsp;After establishing the model, we can add the simulation region in region 4 and define the simulation boundary conditions. This involves specifying the geometry of the simulation region, the boundary conditions in the xyz directions, and detailed parameters.

```
# region --- 4. Boundary ---
st.OBoundary(property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': yspan_solver, 'z': 0, 'z_span': zspan_solver},
                        'boundary': {'y_min': 'PML', 'y_max': 'PML', 'z_min': 'PML', 'z_max': 'PML'},
                        'general_pml': {'pml_layer': 12, 'pml_kappa': 1, 'pml_sigma': 15, 'pml_polynomial': 3}
                        })
# endregion
```

&emsp;&emsp;In this code segment, we define simulation region using the `OBoundary` function.<br/>&emsp;&emsp;First, we define the size of the boundary with `"geometry"` function.<br/>&emsp;&emsp;Next, we define the boundary conditions for the simulation using the `"boundary"` dictionary, where the x ,y and the z directions all have PML boundary conditions.<br/>&emsp;&emsp;Finally, we set detailed parameters for the PML boundary using the `"general_pml"` dictionary, specifying the `"pml_layer"`,`"pml_kappa "`, `"pml_sigma"`and `"pml_polynomial"`, which  specific the order of the polynomial.

#### 2.7  Add sub-mesh

&emsp;&emsp;To achieve more accurate calculations of the model's modal fields, we can add a sub-mesh in region 5.

```
# region --- 5. Sub Mesh ---
st.add_mesh(name='sub_mesh',
            property={'general': {'dx': 0.002, 'dy': 0.002, 'dz': 0.002},
                      'geometry': {'x': 0, 'x_span': 6, 'y': 0, 'y_span': 2, 'z': 0, 'z_span': 0.2}})
# endregion
```

&emsp;&emsp;In this code segment, we use the `add_mesh` function to add a sub-mesh in region 5.<br/>&emsp;&emsp;The `"name"` parameter defines the name of the mesh.<br/>&emsp;&emsp;The `"general"` parameter specifies the grid accuracy in the xyz directions (in this case, 0.02 micrometers in each direction).<br/>&emsp;&emsp;The `"geometry"` parameter sets the coordinates of the sub-mesh.

#### 2.8  FDE simulation

&emsp;&emsp;In region 6, we add the FDE simulation module to support mode calculations and frequency scans.

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

&emsp;&emsp;In this code segment, the `"name"` parameter defines the name of the simulation module.<br/>&emsp;&emsp;The `"general"` parameter specifies the type of the simulation module within the structure. It supports the following list selection['2d_x_normal','2d_y_normal','2d_z_normal'].<br/>&emsp;&emsp;The `"mesh_settings"` parameter is set to the previously defined sub_mesh.<br/>&emsp;&emsp;The `"wavelength"` parameter sets the wavelength-related parameters for the simulation.<br/>&emsp;&emsp;The `"search"` parameter specifies the mode search type. It supports the following list selection['near_n','max_index'].<br/>&emsp;&emsp;In this case, we use `"max_index"` to automatically search for the mode with max index in the structure. To use the ‘near_n’, we need to set the data in ‘n’.<br/>&emsp;&emsp;The `"bent_waveguide"` parameter can be used to set parameters for a bent waveguide.<br/>&emsp;&emsp;The `"frequency_analysis"` parameter allows us to set parameters for frequency scans or mode calculations with varying wavelengths.

#### 2.9  Structure schematic

&emsp;&emsp;In region 7, you can generate a schematic representation of the structure.

```
# region --- 7. Structure Show ---
  st.structure_show(fig_type='png', show=False, savepath=f'{plot_path}{kL[0]}_{simu_name}', simulation_name=simu_name)
  # simu[simu_name].show3d(show_with="local_gui")
# endregion
```

&emsp;&emsp;In this code segment, we use the `"structure_show"` function to form a picture.<br/>&emsp;&emsp;The `"fig_type"` specifies the type of figure. It supports the following list selection["png", "svg"].<br/>&emsp;&emsp;The `"show"` , which is a switch that controls whether the picture is generated or not.

#### 2.10  Index Preview

&emsp;&emsp;And in region 8, you can generate a material refractive index plot for the structure in different cross-sectional directions(x,y,z).

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

&emsp;&emsp;In region 9, you can run the simulation. 

```
# region --- 9. Run ---
result_fde = simu[simu_name].run()
# endregion
```

#### 2.12 Retrieve results

&emsp;&emsp;In region 10, you can retrieve and store the simulation results. 

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

&emsp;&emsp;The `"extract"` function allows you to extract specific simulation results and store them for further analysis.<br/>&emsp;&emsp;The `"attribute"` parameter specifies the type of simulation results to be extracted.<br/>&emsp;&emsp;The `"mode"` parameter corresponds to the index of the FDE calculation mode.<br/>&emsp;&emsp;The `"real"` and `"imag"` parameters are used to extract the real and imaginary parts of the simulation results, respectively.


#### 2.13 Function switches

&emsp;&emsp;We also support control switches for various functionalities at the end of the code, you can use configuration flags(True of False). These flags can be used to enable or disable specific functionalities, making it easier to check the model and perform efficient calculations.

```
if __name__ == '__main__':
    simulation(
               run_options=RunOptions(index_preview=True,
                                      run=True,
                                      run_frequency_sweep=False,
                                      extract=True)
               )
```

#### 2.14 Supplement

&emsp;&emsp;To view the definition and supported parameters of a function, you can right-click on a function name and select "Go to Definition"  or press "Ctrl" while left-clicking on the function name to view its definition, showing the available  parameters  and their descriptions.   

### 3.Output results

&emsp;&emsp;1. Schematic diagram of the refractive index of the device.
![DC index preview](DC_index_str.png 'DC index preview')

&emsp;&emsp;2. The results of the calculation mode will be stored in a CSV format file for subsequent data processing in Python and Excel.
![DC data](DC_dataout.png 'DC data')

&emsp;&emsp;3. Image of the Ey electric field component intensity in symmetric and antisymmetric mode modes.
![DC mode](DC_modeEy.png 'DC mode')

&emsp;&emsp;4. According to the effective refractive index of the obtained mode field, Python is used for data processing and drawing.

&emsp;&emsp;&emsp;The coupling length under the gap between two waveguides is calculated with the formula:
<BlockMath math="L_x = \frac{\lambda}{2|neff_1-neff_2|}" />

&emsp;&emsp;&emsp;We can also get the coupling coefficient by the formula:
<BlockMath math="\kappa = |sin(\frac{\pi\delta(n)L}{\lambda})|" />

![DC gap,neff,Lx](DC_mode_pic.png 'DC gap,neff,Lx')

&emsp;&emsp;5. Similarly, we can obtain the relationship of the gap (distance) between two waveguides and the coupling coefficient, as well as the relationship of the wavelength and the coupling length.
![DC gap,neff,Lx](DC_mode_pic2.png 'DC gap,neff,Lx')

##  Directional Coupler(FDTD module)

### 3.Output results

&emsp;&emsp;Next, we will learn how to model a Directional Coupler using the SDK and calculate the light propagation in the structure using the FDTD module. 








<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Mesh Order</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Air</td>
      <td>2</td>
      <td>Lossless Material</td>
    </tr>
  </tbody>
</table>


