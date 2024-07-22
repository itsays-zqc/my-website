# Simulation

<font face = "Calibri">

<div class="text-justify">

Our platform offer support for a variety of simulation modules, encompassing both optical and electrical simulation. These may include FDE, EME, FDTD, OEDevice modules, ensuring an expansive electro-optical simulation capabilities.

Using `Simulation()` to instance simulation module to the project, the available solver types include "FDE", "EME", "FDTD", "FDTDSmatrix", "FDTDSweep", "EMESweep", and "FDESweep".

## 6.1 FDE

The syntax for adding a finite difference eigenmode (FDE) solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
simu = pj.Simulation()
simu.add(        
        name: str,
        type: Literal["FDE"],
        property: dict
    )
```
### General
Choose the 1D or 2D eigenmode solver, with available types including "2d_x_normal","2d_y_normal","2d_z_normal", "x_y_prop", "x_z_prop", "y_x_prop", "y_z_prop", "z_x_prop" and "z_y_prop".

### Background material
Selects a material object from the material database as the background medium for the simulation region.<br/>
refractive_index: If not selecting a material, this field can directly set the refractive index of the background medium. The default value is 1.

### Geometry
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| x, y, z               | number  |     -    | The center position of the simulation region. |
| x_span, y_span, z_span  | number  |     -   | X span, Y span and Z span of the simulation region. |
| x_min, x_max           | number  |     -     | X min, X max position of the simulation region. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the simulation region. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the simulation region. |

### Mesh settings
mesh_refinement:<br/>
mesh_refinement: Selects "curve_mesh" or "staircase" to refine the mesh.<br/>    
mesh_grading:<br/>
grading_factor: The maximum rate at which the mesh size can be changed.<br/>                                
minimum_mesh_step_settings:<br/>
min_mesh_step: Specify the minimum mesh size for the entire simulation region, including localmesh region. <br/>                                                                                              
global_mesh_uniform_grid:<br/>
dx/dy/dz: Specify the maximum grid size along the x, y or z directions throughout the entire simulation region.           

### Boundary conditions
Select the override default boundary conditions to True, and each boundary condition can be set separately. The optional boundary conditions include "PEC", "PMC", "PML", "symmetric" or "anti symmetric". 

### Advanced

Dispersion settings:
Fractional offset for group delay
Remove PML mode settings:
Automatically Remove PML Modes
Threshold for PML Mode Removal

**Example:**

The following script adds a FDE solver for the xy plane, sets its dimension and mesh of the simulation region, and run the solver. This script assumes that the project has already been added, and the pj is an instance of the project. 


```python
simu_name = "FDE_solver"
simu = pj.Simulation() 
simu.add(name=simu_name, type="FDE",
             property={"general": {"solver_type": "2d_z_normal"},
                       "geometry": {"x": 0, "x_span": 3, "y": 0, "y_span": 3, "z": 0, "z_span": 0},
                       "mesh_settings": {"global_mesh_uniform_grid": {"dx": 0.02, "dy": 0.02}}})
simu_res = simu[simu_name].run()
```

## 6.2 EME

The syntax for adding an eigenmode expansion (EME) solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
add(        
        name: str,
        type: Literal["EME"],
        property: dict
    )
```

### General
wavelength: The wavelength in the simulation calculation.    
use wavelength sweep: Enabling wavelength sweep will automatically calculate the group refractive index of modes in the simulation and allow setting wavelength sweep parameters. 

### Background material
background_material: Selects a material object from the material database as the background medium for the simulation region.
refractive_index: If not selecting a material, this field can directly set the refractive index of the background medium. The default value is 1.

### Geometry
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| x_min          | number  | -     |The minimum x position of the EME simulation region. |
|  y, z               | number  |     -    | The y and z center position of the EME simulation region. |
|  y_span, z_span         | number  |     -   | The y and z span of the EME simulation region. |
|  y min, y max           | number  |     -     | The maximum and minimum y position of the EME simulation region. |
|  z min, z max           | number  |     -     | The maximum and minimum z position of the EME simulation region. |

### EME setup
cell_geometrysettings are as follows:<br/>
energy conservation: Choose the type of energy conservation for the interface S matrix, which is calculated by the modes on both sides of each adjacent cells interface. The options are "none", "passive", or "conserve energy".<br/>
- None: Not using energy conservation.<br/>
- Make passive: If the norm of the interface S matrix is less than or equal to 1, do not perform the operation; otherwise, force norm to be equal to 1.<br/>
- conserve energy: force the norm of the interface S-matrix to be 1.It is usually used with periodic devices.<br/>
  
allow_custom_eigensolver_settings: Allow you to set different number of modes to be solved for all cell groups, as well as the properties settings for mode analysis.<br/>
number_of_modes_for_all_cell_group: Sets the number of modes to be solved for all cells.   <br/> 
cell_group_definition: <br/>

| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
|span| number  |        -          | Sets the span for each cell group. |
| cell_number     | integer | 10                |   Sets number of cells for the cell group.   |
| number_of_modes                                     | integer | 10               |In the cell group, sets the required number of modes to be solved for all cells.|
| sc                                                 | string  | none             | Selections are ["none", "sub_cell"]                                          |
| search                                            | string  | max_index        |      Select "max_index" or "near_n" to specify the effective refractive index for mode calculation.        |

<br/>

display_groups: Enable displaying the span of each cell group using wireframes to separate them.<br/>
display_cells: Enable displaying the boundaries of each cell and use wireframes to separate them.<br/>

### Mesh settings

mesh_refinement:<br/>
mesh_refinement: Selects "curve_mesh" or "staircase" to refine the mesh.                                                                                               
mesh_grading:<br/>
grading_factor: The maximum rate at which the mesh size can be changed.                              
minimum_mesh_step_settings: <br/>
min_mesh_step: Specify the minimum mesh size for the entire simulation region, including localmesh region. <br/>

### Transverse mesh settings 
global_mesh_uniform_grid: The EME solver propagates along the x-axis, so only the mesh step size of the yz plane needs to be set.<br/>
dy/dz: Sets the mesh size in the y and z directions.
### Boundary conditions
Selects the override default boundary conditions to True, and each boundary condition can be set separately. The optional boundary conditions include "PEC", "PMC", "PML", "symmetric" or "anti symmetric". 

<!-- ### Advanced -->


**Example:**

The following script adds an EME solver, sets its geometry, mesh, background material, and cell geometry settings, and run solver. This script assumes that the structure and EME ports have been added to the project environment.

```python
simu_name = "EME_solver"
simu = Project.Simulation()
simu.add(name=simu_name, type="EME",
        property={"background_material": "object_defined_dielectric", "refractive_index": 1,
                "mesh_settings": {"mesh_factor": 1.2, "mesh_refinement": {"mesh_refinement": "curve_mesh"}},
                "transverse_mesh_setting": {"global_mesh_uniform_grid": {"dy": 0.02, "dz": 0.02}}},
                "geometry": {"x_min": 0, "y": 0, "y_span": 4, "z": 0, "z_span": 3},
                "general": {"wavelength": 1.5, "use_wavelength_sweep": True},
                "eme_setup": {"cell_geometry": {"energy_conservation": "make_passive", "allow_custom_eigensolver_settings": True,
                                                "cell_group_definition": [{"span": 2.5, "cell_number": 1, "number_of_modes": 10, "sc": "none"}]}})
                
simu_res = simu[simu_name].run()
```

## 6.3 FDTD

The syntax for adding a finite difference time domain (FDTD) solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
add(        
        name: str,
        type: Literal["FDTD"],
        property: dict
    )
```

### General
Dimension: Select the dimension of the simulation region, with options of "2d" and "3d".     
Using_optical_path_estimate_time: Use optical path length to estimate simulation duration.                                     
Simulation_time: Set the maximum running time of FDTD solver, in fs units.

### Background material
background_material: Selects a material object from the material database as the background medium for the simulation region.<br/>
refractive_index: If not selecting a material, this field can directly set the refractive index of the background medium. The default value is 1.

### Geometry
| Parameter                | Type    | Default   | Description        |
|:---------------|:--------|:----------:|:----------------------|
| x, y, z               | number  |     -    | The center position of the simulation region. |
| x_span, y_span, z_span  | number  |     -   | X span, Y span and Z span of the simulation region. |
| x_min, x_max           | number  |     -     | X min, X max position of the simulation region. |
| y_min, y_max           | number  |     -     | Y min, Y max position of the simulation region. |
| z_min, z_max           | number  |     -     | Z min, Z max position of the simulation region. |

### Mesh settings
mesh_type: The types of mesh generation algorithms available for FDTD solver are "auto_non_uniform" and "uniform".<br/>                                                 
mesh_accuracy：<br/>cells_per_wavelength: Using the wavelength in the material to set the mesh size, with cells per wavelength limited to integer >=6. <br/>

mesh_step_settings:<br/>
dx/dy/dz: Allow setting the grid step size in the x/y/z direction when selecting uniform type mesh.<br/>

mesh_refinement:<br/>
mesh_refinement: Selects "curve_mesh" or "staircase" to refine the mesh.<br/>                                                                                                  
mesh_grading:<br/>
grading: After activation, the growth rate of mesh size can be customized.<br/>
grading_factor: The maximum rate at which the mesh size can be changed.<br/>                                
minimum_mesh_step_settings:<br/>
min_mesh_step: Specify the minimum mesh size for the entire simulation region, including localmesh region.                 
                 

### Boundary conditions
Select the override default boundary conditions to True, and each boundary condition can be set separately. The optional boundary conditions include "PEC", "PMC", "PML", "symmetric" or "anti symmetric". 

### advanced_options.
auto_shutoff:<br/>
use_early_shutoff: Use the conditions of shutoff to terminate the simulation in advance. <br/>
auto_shutoff_min: When the total energy in the simulation region drops to this fraction, the simulation will end.<br/>
down_sample_time: Check the early shutoff conditions for each down sample time step. 

**Example:**

The following script adds a FDTD solver, sets its simulation time, background material, geometry, and mesh settings, and run solver. This script assumes that the project has already been added , and the pj is an instance of the project. 

```python
simu_name = "FDTD_solver"
simu = pj.Simulation()
simu.add(name=simu_name, type="FDTD",
            property={"general": {"simulation_time": 1000},
                      "background_material": "object_defined_dielectric", "refractive_index": 1,
                      "geometry": {"x": 0, "x_span": 6, "y": 0, "y_span": 3, "z": 0, "z_span": 3 },
                      "boundary_conditions": {"x_min_bc": "PML", "x_max_bc": "PML", "y_min_bc": "PML", "y_max_bc": "PML", "z_min_bc": "PML", "z_max_bc": "PML",
                                            "pml_settings": {"all_pml": {"layers": 8, "kappa": 2, "sigma": 0.8, "polynomial": 3, "alpha": 0, "alpha_polynomial": 1}}},
                      "mesh_settings": {"mesh_factor": 1.2, "mesh_type": "auto_non_uniform",
                                        "mesh_accuracy": {"cells_per_wavelength": 10},
                                        "minimum_mesh_step_settings": {"min_mesh_step": 1e-4},
                                        "mesh_refinement": {"mesh_refinement": "curve_mesh"}}})
simu_res = simu[simu_name].run()
```



## 6.4 FDESweep

The syntax for adding FDESweep solver to the project and its properties settings are as follows. The `add` function does not return any data.


```python
add(        
        name: str,
        type: Literal["FDESweep"],
        property: dict
    )
```

### Simulation name
Specifies the name of the simulation solver used for parameter sweep.   

### sweep type   
Selects the type of parameter sweep settings, with options of "ranges" and "values".

### Parameters
Variable: Specifies the global parameter names used in the simulation.<br/>
Number_of_points: When using the sweep type of ranges, the number of variable changes in parameter sweep.<br/>
Start/Stop: When using the sweep type of ranges, sets the start and stop value of the variable.<br/>
Values: When using the sweep type of values, specifies the sweep values by a list.

### Result 
name: Specifies the name of the parameter sweep result.<br/>
result: Specifies the name of the analysis that has been added.<br/>
component: Specifies the result component to be extracted.

**Example:**
The following script adds a FDESweep solver to obtain the effective refractive index of FDE analysis results, where the sweep range must be set through global parameters. This script assumes that the FDE solver and FDE analysis have been set up. 

```python   
simu_name = "FDE_Solver"         # The name of FDE solver
analysis_name = "FDE_Analysis"   # The name of FDE analysis
sweep_name = "FDE_Sweep"         # The name of FDE sweep
para = pj.GlobalParameter()
width = para.add(name="width", expression=0.5, description="")  # The setting of parameter sweep must use global parameters.
simu = pj.Simulation()
simu.add(name=sweep_name, type="FDESweep",
             property={"simulation_name": simu_name,
                       "sweep_type": "ranges", 
                       "parameters": [ {"variable": width, "number_of_points": 3, "start": 0.5, "stop": 0.6} ],
                        "result": [{"name": "Neff", "result": analysis_name, "component": "mode0/neff"}]})
swp_res = simu["FDESweep"].run()
```

## 6.5 EMESweep

The syntax for adding EMESweep solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
add(        
        name: str,
        type: Literal["EMESweep"],
        property: dict
    )
```

### Simulation name
Specifies the name of the simulation solver used for parameter sweep.   

### Sweep type   
Selects the type of parameter sweep settings, with options of "ranges" and "values".

### Parameters
Variable: Specifies the global parameter names used in the simulation.<br/>
Number_of_points: When using the sweep type of ranges, the number of variable changes in parameter sweep.<br/>
Start/Stop: When using the sweep type of ranges, sets the start and stop value of the variable.<br/>
Values: When using the sweep type of values, specifies the sweep values by a list.

### Result 
name: Specifies the name of the parameter sweep result.<br/>
result: Specifies the name of the analysis that has been added.<br/>
component: Specifies the result component to be extracted.


**Example:**

The following script adds an EMESweep solver to obtain the S-Matrix of EME analysis results, where the sweep range must be set through global parameters. This script assumes that the EME solver and EME analysis have been set up. 

```python
simu_name = "EME_Solver"         # The name of EME solver
analysis_name = "EME_Analysis"   # The name of EME analysis
sweep_name = "EME_Sweep"         # The name of EME sweep
para = pj.GlobalParameter()
gap = para.add(name="gap", expression=0.45, description="")  # The setting of parameter sweep must use global parameters.
simu = pj.Simulation()
simu.add(name=sweep_name, type="EMESweep", 
            property={"simulation_name": simu_name,
                    "sweep_type": "values", 
                    "parameters": [{"variable": gap, "values": [0.45, 0.55, 0.65]}],
                    "result": [{"name": "SMatrix", "component": "S", "result": "S-Matrix"}]})
swp_res = simu["EMESweep"].run()

```

## 6.6 FDTDSweep

The syntax for adding FDTDSweep solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
simu = pj.Simulation()
simu.add(        
        name: str,
        type: Literal["FDTDSweep"],
        property: dict
    )
```

### Simulation name
Specifies the name of the simulation solver used for parameter sweep.   

### sweep type   
Selects the type of parameter sweep settings, with options of "ranges" and "values".

### Parameters
Variable: Specifies the global parameter names used in the simulation.<br/>
Number_of_points: When using the sweep type of ranges, the number of variable changes in parameter sweep.<br/>
Start/Stop: When using the sweep type of ranges, sets the start and stop value of the variable.<br/>
Values: When using the sweep type of values, specifies the sweep values by a list.

### Result 
name: Specifies the name of the parameter sweep result.<br/>
result: Specifies the name of the analysis that has been added.<br/>
component: Specifies the result component to be extracted.

**Example:**

The following script adds a FDTDSweep solver to obtain the results of the power monitor and the mode expansion analysis, where the sweep range must be set through global parameters. This script assumes that the FDTD solver and Mode Expansion analysis have been set up. 

```python
simu_name = "FDTD_Solver"        # The name of FDTD solver
monitor_name = "Power_Monitor"   # The name of power monitor 
analysis_name = "ModeExpansion"  # The name of mode expansion analysis
sweep_name = "FDTD_Sweep"        # The name of sweep name
res1 = "T"                       # The name of the sweep result
res2 = "T_forward"               # The name of the sweep result
para = pj.GlobalParameter()
gap = para.add(name="gap", expression=0.5, description="")  # The setting of parameter sweep must use global parameters.
simu = pj.Simulation()
simu.add(name=sweep_name, type="FDTDsweep", property={
            "simulation_name": simu_name, 
            "parameters": [{"variable": gap, "number_of_points": 3, "start": 0.5, "stop": 0.6 }],
            "result": [{"name": res1, "result": monitor_name, "component": "T"},
                       {"name": res2, "result": analysis_name, "component": "T_forward"}]})
swp_res = simu["FDTDSweep"].run()
```

## 6.7 FDTDSmatrix

The syntax for adding FDTDSmatrix solver to the project and its properties settings are as follows. The `add` function does not return any data.

```python
simu = pj.Simulation()
simu.add(        
        name: str,
        type: "FDTDSmatrix",
        property: dict
    )
```

 ### Simulation name
Specifies the name of the simulation solver used for parameter sweep.   

### S_matrix_setup  
Port: Specifies the name of port in the FDTD simulation region.<br/>
Active: Selects the enabled port as the excitation source, and the number of ""Active" port determines the number of simulation sweep.
   
**Example:**

The following script add an FDTDSmatrix solver to obtain the S matrix of the FDTD port, and enable the calculated port through "active". This script assumes that the FDTD solver and FDTD port have already been added, and the pj is an instance of the project.

```python
simu_name = "FDTD_solver"     # the name of FDTD solver
sweep_name = "matrix_sweep"   # the name of FDTD Smatrix sweep
port1_name = "port1"          # the name of port1
port2_name = "port2"          # the name of port2
simu = pj.Simulation()
smatrix_res = simu.add(name=sweep_name, type="FDTDSmatrix",
                            property={"simulation_name": simu_name,
                                        "s_matrix_setup": [{"port": port1_name, "active": True},
                                                        {"port": port2_name, "active": True}]})

```

## 6.5 DDM

Incorporate a DDM solver into the current project using the code `type="DDM`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["DDM"],
            property: OeDevicePostProcess,
    )
```

**Example:**

```python
    simu = pj.Simulation()
    simu.add(name=simu_name, type="DDM", property={
        "background_material": mt["mat_sio2"], 
        "general": {"solver_mode": "steady_state", 
                    "norm_length": 20,
                    "temperature_dependence": "isothermal",
                    "temperature": 298.15,
                    },
        "geometry": {"dimension": "2d_x_normal", "x": 10, "x_span": 0, "y_min": 0, "y_max": 3.7, "z_min": -0.15, "z_max": 1.25},
        "mesh_settings": {"mesh_size": 0.06},
        "advanced": {"non_linear_solver": "newton",
                     "linear_solver": "mumps",
                     "fermi_statistics": "disabled", # or "enabled"
                     "damping": "potential", # or "none"
                     "potential_update": 1.0,
                     "max_iterations": 15,
                     "relative_tolerance": 1e-5,
                     "tolerance_relax": 1e5,
                     "divergence_factor": 1e25
                     }
    })
```

|                                          | default           | type    | notes                                                        |
| :--------------------------------------- | :---------------- | :------ | :----------------------------------------------------------- |
| general.norm_length                      | 1.0               | float   |                                                              |
| general.solver_mode                      | steady_state      | string  | Selections are ["steady_state", "transient"].        |
| general.temperature_dependence           | Isothermal        | string  | Selections are ["Isothermal"].                               |
| general.simulation_temperature           | 300               | float   |                                                              |
| general.background_material              |                   | string  |                                                              |
| advanced.non_linear_solver               | Newton            | string  | Selections are ["Newton"].                                   |
| advanced.linear_solver                   | MUMPS             | string  |                     |
| advanced.fermi_statistics                | disabled          | string  | Selections are ["disabled", "enabled"].                      |
| advanced.damping                         | none              | string  | Selections are ["none", "potential"].                        |
| advanced.potential_update                | 1.0               | float   |                                                              |
| advanced.multi_threads                   | let_solver_choose | string  | Selections are ["let_solver_choose", "set_thread_count"].    |
| advanced.thread_count                    | 4                 | integer |                                                              |
| advanced.max_iterations                  | 15                | integer |                                                              |
| advanced.relative_tolerance              | 1.0e-5            | float   |                                                              |
| advanced.tolerance_relax                 | 1.0e+5            | float   |                                                              |
| advanced.divergence_factor               | 1.0e+25           | float   |                                                              |
| advanced.saving on divergence            | disabled          | string  | Selections are ["disabled", "enabled"].                      |
| genrate.genrate_path                     |                   | string  |                                                              |
| genrate.source_fraction                  |                   | float   |                                                              |
| genrate.coordinate_unit                  | m                 | string  | Selections are ["m", "cm", "um", "nm"].                      |
| genrate.field_length_unit                | m                 | string  | Selections are ["m", "cm", "um", "nm"].                      |
| geometry.dimension                       | 2d_x_normal       | string  | Selections are ["2d_x_normal", "2d_y_normal", "2d_z_normal"]. |
| geometry.x                               |                   | float   |                                                              |
| geometry.x_span                          |                   | float   |                                                              |
| geometry.x_min                           |                   | float   |                                                              |
| geometry.x_max                           |                   | float   |                                                              |
| geometry.y                               |                   | float   |                                                              |
| geometry.y_span                          |                   | float   |                                                              |
| geometry.y_min                           |                   | float   |                                                              |
| geometry.y_max                           |                   | float   |                                                              |
| geometry.z                               |                   | float   |                                                              |
| geometry.z_span                          |                   | float   |                                                              |
| geometry.z_min                           |                   | float   |                                                              |
| geometry.z_max                           |                   | float   |                                                              |
| small_signal_ac.perturbation_amplitude   | 0.001             | float   |                                                              |
| small_signal_ac.frequency_spacing        | single            | string  | Selections are ["single", "linear", "log"].                  |
| small_signal_ac.frequency                | 1.0e+6            | float   |                                                              |
| small_signal_ac.start_frequency          | 1.0e+06           | float   |                                                              |
| small_signal_ac.stop_frequency           | 1.0e+09           | float   |                                                              |
| small_signal_ac.frequency_interval       | 9.9999e+10        | float   |                                                              |
| small_signal_ac.num_frequency_points     | 2                 | integer |                                                              |
| small_signal_ac.log_start_frequency      | 1.0e+06           | float   |                                                              |
| small_signal_ac.log_stop_frequency       | 1.0e+10           | float   |                                                              |
| small_signal_ac.log_num_frequency_points | 2                 | integer |                                                              |

Description:

- `geometry`：

  - `dimension`--Set the dimension of the simulation region. Only 2D simulation is supportd currently. When it"s set to `"2d_x_normal"`, the simulation is on the yz plane. Similarly for the rest

- `general`:

  - `norm_length`--Set the length in the third dimension, default to be 1
  - `solver_mode`--Set the simulation mode. Steady state, transient and SSAC simulations are supported
  - `temperature`--Set the simulation temperature
  - `temperature_dependence`--Set the type of the temperature dependence. Only `"Isothermal"` is supported currently 

- `small_signal_ac`:

  - `perturbation_amplitude`--Set the voltage amplitude of the small signal
  - `frequency_spacing`--Set the spacing type of the frequency
    - When it"s set to `"single"`, the frequency point is single
    - When it"s set to `"linear"`, the frequency points are uniformly sampled
    - When it"s set to `"log"`，the frequency points are uniformly sampled base on the logarithm of frequency
  - `frequency`--Set the value of the single frequency
  - `start_frequency`--Set the start frequency of linear spacing
  - `stop_frequency`--Set the stop frequency of linear spacing
  - `frequency_interval`--Set the frequency interval of linear spacing
  - `num_frequency_points`--Set the number of frequency points of linear spacing
  - `log_start_frequency`--Set the start frequency of logarithmic spacing

  - `log_stop_frequency`--Set the stop frequency of logarithmic spacing

  - `log_num_frequency_points`--Set the number of frequency points of logarithmic spacing

- `advanced`:

  - `non_linear_solver`--Set the non-linear solver, only Newton method is supported currently
  - `linear_solver`--Set the linear solver. Options are `"MUMPS"`. `MUMPS` is direct linear solvers which usually give the exact solution, and supports parallel computation.
  - `use_quasi_fermi`--Whether to directly solve for the quasi-Fermi potential instead of carrier concentration as unkowns. `"enabled"` means `True`, and `"disabled"` means `False`
  - `damping`--Set the nonlinear update damping scheme. `"potential"` means the damping is based on the potential variation
  - `potential_update`--Set the threshold potential for potential damping. The large value will reduce the strength of damping effect
  - `max_iterations`--Set global maximum number of iterations, available when `use_global_max_iterations` is `True`
  - `relative_tolerance`--Set the relative update tolerance
  - `tolerance_relax`--Set the tolerance relaxation factor for convergence on relative tolerance criteria
  - `divergence_factor`--Nonlinear solver fault with divergence when each individual function norm exceeds the threshold as its absolute tolerance multiply by this factor
  
## 6.6 FDTD

### 6.6.1 FDTD Setting
Incorporate an AFDTD(Active Finite-Difference Time-Domain) solver into the current project using the code `type="FDTD"`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["AFDTD"],
            property: FdtdPostProcess,
    )
```

**Example:**

```python
 simu = pj.Simulation()
    simu.add(name=simu_name, type="FDTD",
             property={"background_material": mt["mat_sio2"],
                       "geometry": {"x": x_mean, "x_span": x_span, "y": y_mean, "y_span": y_span, "z": z_mean, "z_span": z_span, },
                       "general": {"simulation_time": 2000, },
                       "mesh_settings": {"mesh_factor": 1.2, "mesh_type": "auto_non_uniform",
                                         "mesh_accuracy": {"cells_per_wavelength": 14},
                                         "minimum_mesh_step_settings": {"min_mesh_step": 1e-4},
                                         "mesh_refinement": {"mesh_refinement": "curve_mesh", }},
                       "boundary_conditions": {"x_min_bc": "PML", "x_max_bc": "PML", "y_min_bc": "PML", "y_max_bc": "PML", "z_min_bc": "PML", "z_max_bc": "PML",
                                               "pml_settings": {"all_pml": {"profile":"standard","layer": 8, "kappa": 2, "sigma": 0.8, "polynomial": 3, "alpha": 0, "alpha_polynomial": 1, }}},
                       "advanced_options": {"auto_shutoff": {"auto_shutoff_min": 1.00e-4, "down_sample_time": 200}},
                       })
    # endregion
```

|                          Parameters                          |     Default      |  Type   |                      Notes                      |
| :----------------------------------------------------------: | :--------------: | :-----: | :---------------------------------------------: |
|              extra.fdtd_port_group.source_port               |                  | string  |  To extra data of source port from the result of FDTD simulation.   |
|                      general.dimension                       |        3d        | string  |             Selections are ["3d"].              |
|           general.using_optical_path_estimate_time           |      false       |  bool   |                                                 |
|                   general.simulation_time                    |       1000       | integer |   To set the simulation time for transient simulation.                                              |
|                   mesh_settings.mesh_type                    | auto_non_uniform | string  | Selections are ["auto_non_uniform", "uniform"]. |
|       mesh_settings.mesh_accuracy.cells_per_wavelength       |        15        | integer |   Set the mesh accuracy for region of FDTD simulation. |
|             mesh_settings.mesh_step_settings.dx              |       0.1        |  float  |    Set the  miniimum of spacing between mesh step centers in x direction.    |
|             mesh_settings.mesh_step_settings.dy              |       0.1        |  float  |  Set the  miniimum of spacing between mesh step centers in y direction.   |
|             mesh_settings.mesh_step_settings.dz              |       0.1        |  float  |   Set the  miniimum of spacing between mesh step centers in z direction.    |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001      |  float  |     Set the minimum vale of  mesh step.                                            |
|       advanced_options.auto_shutoff.use_early_shutoff        |       true       |  bool   |     Decide whether to use early shutoff.          |
|        advanced_options.auto_shutoff.auto_shutoff_min        |      1.0e-4      |  float  |  Control the simulation shutoff based on the ratio of energy to the maximum input energy.   |
|        advanced_options.auto_shutoff.down_sample_time        |       100        |  float  |   Inspect the auto shutoff conditions every down sample time.   |
| advanced_options.live_slice_filed_display_settings.show_field |      false       |  bool   |   Decide whether to gennerate the electric intensity filed image for the results.    |
| advanced_options.live_slice_filed_display_settings.select_field_section |   2d_z_normal    | string  | Selections are ["2d_y_normal", "2d_z_normal"].  |
| advanced_options.live_slice_filed_display_settings.select_component |        ex        | string  |       Selections are ["ex", "ey", "ez"].        |
| advanced_options.live_slice_filed_display_settings.time_interval |       200        |  float  |  Set the time interval for displaying image.     |
| advanced_options.live_slice_filed_display_settings.position  |        0         |  float  |     Set the center position of the field image.      |
|                    thread_setting.thread                     |        4         | integer |    Determine the number of cores required to run the simulation on the local computer.      |

### 6.6.2 Boundary

The following content comprises code explanations and specific examples of boundary conditions in optical simulation.


|  Parameters   |                    Description                    |
| :---------------: | :-----------------------------------------------: |
|     property      |      The default property of the optical boundary.         |
| pml_same_settings | To decide whether using the same pml settings on every directions or not. |

As demonstrated in the following examples, we also provide support for customizing boundary conditions in different directions. 


|          Parameters          | Default  |  Type   |                            Notes                             |
| :------------------------------: | :------: | :-----: | :----------------------------------------------------------: |
|  general_pml.pml_same_settings   |   true   |  bool   | To decide whether using the same pml settings on every directions or not.                          |
|     general_pml.pml_profile      | standard | string  | To provide the options of PML profile.                            |
|      general_pml.pml_layer       |     -     | integer |   Set the number of layers after discretizing the PML region.                              |
|      general_pml.pml_kappa       |    -      |  float  |  Set the kappa parameter related to the absorption characteristics of the PML region.                                |
|      general_pml.pml_sigma       |     -     |  float  |   Set the sigma parameter related to the absorption characteristics of the PML region.                            |
|    general_pml.pml_polynomial    |    -      | integer | Set the order of the kappa and the sigma parameters.                           |
|      general_pml.pml_alpha       |     -     |  float  |   Set the alpha parameter related to the absorption characteristics of the PML region.                            |
| general_pml.pml_alpha_polynomial |     -     | integer |  Set the order of the alpha parameter.                        |
|    general_pml.pml_min_layers    |     -     | integer |   Set the minimum number of layers within a reasonable range for the PML layers.                                   |
|    general_pml.pml_max_layers    |     -     | integer |   Set themaximum number of layers within a reasonable range for the PML layers.                         |
|     geometry.x      |    -     |  float   |  The x-coordinate of the center point position of the boundary.    |
|   geometry.x_span   |     -    |  float   | The length in x direction of the boundary. Restrained by condition: >0.  |
|   geometry.x_min    |     -    |  float   | The minimum x-coordinate endpoint data of the boundary.      |
|   geometry.x_max    |     -    |  float   |  The maximum x-coordinate endpoint data of the boundary.     |
|     geometry.y      |    -     |  float   |  The y-coordinate of the center point position of the boundary.      |
|   geometry.y_span   |    -     |  float   | The width in y direction of the boundary. Restrained by condition: >0.  |
|   geometry.y_min    |     -    |  float   |The minimum y-coordinate endpoint data of the boundary.       |
|   geometry.y_max    |    -     |  float   |  The maximum y-coordinate endpoint data of the boundary.      |
|     geometry.z      |     -    |  float   |   The z-coordinate of the center point position of the boundary.    |
|   geometry.z_span   |    -     |  float   | The thinckness in z direction of the boundary. Restrained by condition: >0.  |
|   geometry.z_min    |     -    |  float   |The z-coordinate of the bottom position of the thickness of the boundary.      |
|   geometry.z_max    |     -    |  float   |  The z-coordinate of the top position of the thickness of the boundary.     |
|          boundary.x_max          |   -       | string  |  Set the boundary type in the x+ direction. Selections are ["PML", "PEC", "metal", "PMC", "periodic"].  |
|          boundary.x_min          |     -     | string  | Set the boundary type in the x- direction. Selections are ["PML", "PEC", "metal", "PMC", "symmetric", "anti_symmetric", "periodic"]. |
|          boundary.y_max          |    -      | string  |   Set the boundary type in the y+ direction. Selections are ["PML", "PEC", "metal", "PMC", "periodic"].  |
|          boundary.y_min          |     -     | string  |  Set the boundary type in the y- direction. Selections are ["PML", "PEC", "metal", "PMC", "symmetric", "anti_symmetric", "periodic"]. |
|          boundary.z_max          |    -      | string  |   Set the boundary type in the z+ direction. Selections are ["PML", "PEC", "metal", "PMC", "periodic"].  |
|          boundary.z_min          |     -     | string  |  Set the boundary type in the z- direction. Selections are ["PML", "PEC", "metal", "PMC", "symmetric", "anti_symmetric", "periodic"]. |

If you need to customize the boundary conditions for simulation requirements, you can also refer to the table below for modifying boundary conditions in different directions.Taking the x coordinate axis as an example, the parameters invocation is the same for the y/z coordinates.


|              Parameters              | Default  |  Type   |                            Notes                             |
| :---------------------------------------: | :------: | :-----: | :----------------------------------------------------------: |
|       general_pml.pml_same_settings       |   true   |  bool   |    To decide whether using the same pml settings on every directions or not.                   |
|     general_pml.x_min_bc.pml_profile      | standard | string  |  To provide the options of PML profile in x- direction.                           |
|      general_pml.x_min_bc.pml_layer       |    -      | integer |    Set the number of layers after discretizing the PML region in x- direction.                            |
|      general_pml.x_min_bc.pml_kappa       |     -     |  float  |  Set the kappa parameter related to the absorption characteristics of the PML region in x- direction.                           |
|      general_pml.x_min_bc.pml_sigma       |    -      |  float  |     Set the sigma parameter related to the absorption characteristics of the PML region in x- direction.                          |
|    general_pml.x_min_bc.pml_polynomial    |       -   | integer |  Set the order of the kappa and the sigma parameters in x- direction.                                     |
|      general_pml.x_min_bc.pml_alpha       |     -     |  float  |    Set the alpha parameter related to the absorption characteristics of the PML region in x- direction.                                 |
| general_pml.x_min_bc.pml_alpha_polynomial |     -     | integer |  Set the order of the alpha parameter in x- direction.                          |
|    general_pml.x_min_bc.pml_min_layers    |      -    | integer |  Set the minimum number of layers within a reasonable range for the PML layers in x- direction.                       |
|    general_pml.x_min_bc.pml_max_layers    |     -     | integer |         Set the maximum number of layers within a reasonable range for the PML layers in x- direction.                         |
|     general_pml.x_max_bc.pml_profile      | standard | string  |  To provide the options of PML profile in x+ direction.                           |
|      general_pml.x_max_bc.pml_layer       |     -    | integer |    Set the number of layers after discretizing the PML region in x+ direction.                            |
|      general_pml.x_max_bc.pml_kappa       |     -     |  float  |  Set the kappa parameter related to the absorption characteristics of the PML region in x+ direction.                           |
|      general_pml.x_max_bc.pml_sigma       |     -     |  float  |     Set the sigma parameter related to the absorption characteristics of the PML region in x+ direction.                          |
|    general_pml.x_max_bc.pml_polynomial    |     -     | integer |  Set the order of the kappa and the sigma parameters in x+ direction.                                     |
|      general_pml.x_max_bc.pml_alpha       |     -     |  float  |    Set the alpha parameter related to the absorption characteristics of the PML region in x+ direction.                                 |
| general_pml.x_max_bc.pml_alpha_polynomial |     -     | integer |  Set the order of the alpha parameter in x+ direction.                          |
|    general_pml.x_max_bc.pml_min_layers    |     -     | integer |  Set the minimum number of layers within a reasonable range for the PML layers in x+ direction.                       |
|    general_pml.x_max_bc.pml_max_layers    |       -   | integer |         Set the maximum number of layers within a reasonable range for the PML layers in x+ direction.                         |

The code provided in this section can be utilized to incorporate  boundary and mesh into the current project.

## 6.7 FDE

Integrate an AFDE(Active Finite Difference Eigenmode) solver into the current project using the code `type="FDE"`.

```python
add(
            self,
            *,
            name: str,
            type: Literal["FDE"],
            property: AfdePostProcess,
    )
```

**Example:**

```python
    simu = pj.Simulation()
    simu.add(name=simu_name, type="FDE",
             property={"background_material": mt["mat_sio2"],
                       "geometry": {"x": x_mean, "x_span": x_span, "y": y_mean, "y_span": y_span, "z": z_mean, "z_span": z_span, },
                       "boundary_conditions": {"y_min_bc": "PEC", "y_max_bc": "PEC", "z_min_bc": "PEC", "z_max_bc": "PEC",},
                       # "mode_removal": {"threshold": 0.02},
                       # default is "2d_x_normal" ["2d_x_normal","2d_y_normal","2d_z_normal"]
                       "fractional_offset_for_group_delay": 0.0001,
                       "general": {"solver_type": "2d_x_normal"},
                       "mesh_settings": {"mesh_refinement": {"mesh_refinement": "curve_mesh"}, "mesh_factor": 1.2,
                                         "global_mesh_uniform_grid": {"dy": ogrid_global_y, "dz": ogrid_global_z, },
                                         #    "minimum_mesh_step_settings": {"min_mesh_step": 1.0e-4}
                                         }})
    # endregion
```

|                          Parameters                          |      Default      |  Type   |                            Notes                             |
| :----------------------------------------------------------: | :---------------: | :-----: | :----------------------------------------------------------: |
|                     general.solver_type                      |    2d_x_normal    | string  | Selections are ["2d_x_normal", "2d_y_normal", "2d_z_normal", "x", "y", "z"]. |
|          mesh_settings.global_mesh_uniform_grid.dx           |       0.02        |  float  |   The global mesh step in the x direction.                 |
|          mesh_settings.global_mesh_uniform_grid.dy           |       0.02        |  float  |    The global mesh step in the y direction.                  |
|          mesh_settings.global_mesh_uniform_grid.dz           |       0.02        |  float  |     The global mesh step in the z direction.          |
|    mesh_settings.minimum_mesh_step_settings.min_mesh_step    |      0.0001       |  float  |    Set the minimum vale of  mesh step.        |
|                    thread_setting.thread                     |         4         | integer |      Determine the number of cores required to run the simulation on the local computer.    |
|          fde_analysis.modal_analysis.mesh_structure          |       false       |  bool   |   Confirm whether to generate a refractive index diagram for the structure.      |
|         fde_analysis.modal_analysis.calculate_modes          |       false       |  bool   |     Determine whether to calculate the modes.               |
|  fde_analysis.modal_analysis.[]far_field_settings.calculate  |       true        |  bool   |     Determine whether to calculate the far field.         |
| fde_analysis.modal_analysis.[]far_field_settings.mode_selection |                   | integer |    Select the mode for which far-field calculation is needed.          |
| fde_analysis.modal_analysis.[]far_field_settings.projection_method |      planar       | string  |                  Selections are ["planar"].                  |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_filter |         0         |  float  |    Configure this parameter to filter near field data for eliminating high frequency ripples in the results. Its value ranging from 0 to 1.    |
| fde_analysis.modal_analysis.[]far_field_settings.material_index |        1.4        |  float  |     Set the material refractive index for projection.          |
| fde_analysis.modal_analysis.[]far_field_settings.projection_distance |      4430.65      |  float  |      The distance for far-field projection calculation.       |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_x |        50         |  float  |      In x direction, the number of points in the far field.        |
| fde_analysis.modal_analysis.[]far_field_settings.points_in_y |        50         |  float  |   In y direction, the number of points in the far field.         |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x  |         0         |  float  |          In x direction, the position of far field center point.            |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_x_span |      26.1834      |  float  |            In x direction, the span of far field range.             |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y  |         0         |  float  |             In y direction, the position of far field center point.    |
| fde_analysis.modal_analysis.[]far_field_settings.farfield_y_span |      18.1231      |  float  |              In y direction, the span of far field range.     |
|            fde_analysis.modal_analysis.wavelength            |       1.55        |  float  |               The mode wavelength for FDE calculation.              |
|        fde_analysis.modal_analysis.wavelength_offset         |       0.002       |  float  |                The mode wavelength offset for FDE calculation.                                              |
|      fde_analysis.modal_analysis.number_of_trial_modes       |         5         | integer |           When calculating modes, determine the calculated number of modes around the refractive index.                |
|              fde_analysis.modal_analysis.search              |     max_index     | string  |           Calculate the mode based on the maximum refractive index or user defined refractive index in the structure. Selections are ["near_n", "max_index"].            |
|                fde_analysis.modal_analysis.n                 |         1         |  float  |     Under the "near_n" condition, use this value of refractive index to search the source mode.                                        |
|      fde_analysis.modal_analysis.calculate_group_index       |       false       |  bool   |    Determine whether to calculate the group refractive index.          |
|  fde_analysis.modal_analysis.bent_waveguide.bent_waveguide   |       false       |  bool   |        Select whether to calculate modes in bent waveguides.                     |
|      fde_analysis.modal_analysis.bent_waveguide.radius       |        0.0        |  float  |  Set the waveguide radius for bent waveguides.              |
|    fde_analysis.modal_analysis.bent_waveguide.orientation    |        0.0        |  float  |            The bent direction of the waveguide.               |
|     fde_analysis.modal_analysis.bent_waveguide.location      | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ["simulation_center"].             |
|      fde_analysis.modal_analysis.mode_removal.threshold      |        -        |  float  |     Screen the FDTD port source according to the energy arriving at the boundary to ensure the accuracy of the calculated transmission FDTD port mode.                       |
|      fde_analysis.frequency_analysis.frequency_analysis      |       false       |  bool   |      Determine whether to invoke frequency analysis.                      |
|       fde_analysis.frequency_analysis.start_wavelength       |      -      |  float  |          Set the start frequency of the frequency analysis.                 |
|       fde_analysis.frequency_analysis.stop_wavelength        |      -     |  float  |          Set the stop frequency of the frequency analysis.                         |
|       fde_analysis.frequency_analysis.number_of_points       |        10         | integer |         Set the number of points in the frequency analysis             |
|       fde_analysis.frequency_analysis.effective_index        |        1.0        |  float  |            To search the mode near this refractive index.                        |
| fde_analysis.frequency_analysis.detailed_dispersion_calculation |       false       |  bool   |      Determine whether to calculate the dispersion of structure.                                 |

</div>

</font>





