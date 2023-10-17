import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Passive  Device Simulation

<font face = "Calibri">

## 1. How to create a new SDK simulation project?

First, we need to import the SDK package to perform optical simulation calculations.

```python
import maxoptics_sdk.all as mo
```

Following that, as shown in the following list, create a simulation project. In this list, `name` represents the project's name, and `location` represents the server's location/run mode, which can be set to `run_mode="local"` or `run_mode="cloud"` at this point.

```python
# region --- Project ---
pj = mo.Project(name=project_name, location=run_mode)
# endregion
```

## 2. How to add materials in SDK simulation?

Next, we need to add the materials used in the simulation process, as shown in the following code. Here, `name` represents the material's name, `data` represents the material object from the material library, and `order` is the priority of material coverage. When structures of different materials overlap, materials with higher `order` values will take precedence over those with lower values. In the case of equal values, the one added later takes precedence.

```python
# region --- Material ---
mt = pj.Material()
mt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)
# endregion
```

### 2.1 How to add a non-dispersive material?

Additionally, you can add a non-dispersive material using `add_nondispersion`. The data in `data=[(real, imag)]` represents the real and imaginary parts of the refractive index.

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)
```

### 2.2 How to add a dispersive material?

You can add a dispersive material using `add_dispersion`, as shown in the following code. `data=[(wavelength, real, imag)]` represents the real and imaginary parts of the refractive index at different wavelengths. You can perform fitting to obtain the refractive index of the material at different wavelengths.

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2",data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=1)
```

### 2.3 How to add an anisotropic material?

You can add an anisotropic material using `add_anisotropy`. In this case, `data=[(wavelength, nx_real, nx_imag, ny_real, ny_imag, nz_real, nz_imag)]` represents the anisotropic refractive index's real and imaginary parts at different wavelengths. Similarly, you can use fitting to obtain the anisotropic refractive index of the material at various wavelengths.

```python
mt = pj.Material()
mt.add_anisotropy(name="LN", fitting=None,
      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2
      )
```

## 3. How to add geometric structures in SDK simulation?

Next, let's learn how to create a geometric structure in SDK.

### 3.1 How to add background refractive index?

Define the background refractive index in `Structure` as shown below. `background_material` represents the background material, `mesh_type` is the material's mesh type, which can be `"curve_mesh"` or `"staircase"`, and `mesh_factor` determines the maximum mesh gradient that can be generated.


```
# region --- 3. Structure ---
    st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.4,
                      background_material=mt["Air"])
# endregion
```

### 3.2 How to add a rectangular structure?

As shown in the code below, you can add a structure within the `Structure` function using `add_geometry`. To add a rectangular structure, use `type='Rectangle'`. Specify the `material` from the previously defined material types, and set the `mesh_order` to determine the material coverage priority, as explained earlier in the material addition section. Within the parameters of the `geometry` section, `x/y/z` represent the center coordinates of the structure in three directions, while `x_span/y_span/z_span` determine the width of the structure in these three directions.


```python
st.add_geometry(name="rectangle", type="Rectangle", 
                property={"material": {"material": mt["Si"], "mesh_order": 2},
						  "geometry": {"x": 0, "x_span": size, "y": space, "y_span": wg_width, "z": 0, "z_span": wg_height, }})
```

### 3.3 How to add an arc waveguide in SDK simulation?

Similarly, we can add an arc waveguide structure in SDK. In the `geometry` section, `inner_radius` and `out_radius` represent the inner and outer radii of the arc structure, `angle` specifies the bending angle (with positive and negative values indicating clockwise and counterclockwise directions, respectively), and `xyz` determines the center position of the structure in three directions. `z_span` defines the thickness of the waveguide.

```python
st.add_geometry(name="arc", type="ArcWaveguide", 
                property={"material": {"material": mt["Si"], "mesh_order": 2},
						  "geometry": {"inner_radius": size-wg_width/2, "outer_radius": size+wg_width/2, "angle": 90,
             "x": 0, "y": 0, "z": 0, "z_span": wg_height}})
```

### 3.4 How to add a circular structure?

Next, we'll learn how to add a circular structure using the following code. In this code, `radius` represents the radius of the circle, and `x/y` denote the coordinates of the center of the circle.


```python
st.add_geometry(name="circle", type="Circle", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"radius": size, "x": 4*space, "y": 0, "z": 0, "z_span": wg_height}})
```

### 3.6 How to add a linear taper (Taper) structure?

To create a linear taper structure, use the `add_geometry` function with `type="LinearTrapezoid"`. Specify the coordinates of the four vertices of the taper structure using `point_{1,2,3,4}_x` and `point_{1,2,3,4}_y`. `x/y/z` determine the 3D reference point of the taper structure, and `z_span` sets the thickness of the taper waveguide.

```python
st.add_geometry(name="linear_trapezoid", type="LinearTrapezoid", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"point_1_x": 0, "point_1_y": 0, "point_2_x": 0, "point_2_y": size/2,
                 "point_3_x": size, "point_3_y": size, "point_4_x": size, "point_4_y": 0,
                 "x": 2*space, "y": space, "z": 0, "z_span": wg_height,
                 }})
```

### 3.7 How to add a custom function-based geometric structure?

Let's take the example of a taper structure with a custom function curve. To do this, use the `add_geometry` function with `type="AnalyticalWaveguide"`. In this case, `equation1` represents the expression of the waveguide boundary function. The parameters `x/y/z` denote the center coordinates, `x span/y span` define the domain range, `resolution` sets the resolution, `nonsymmetric` determines if the structure is non-symmetric, `tilt_location` specifies the location of the tilt, and `tilt_angle` represents the angle of the structure.

```python
st.add_geometry(name="taper_symmetric", type="AnalyticalWaveguide", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 0, "x_span": L, "y": 0, "y_span": taper_width,
                 "z": 0, "z_sapn": 0.22,
                 "equation1": f'{str(A)*({str(L/2)}-x)^{str(m)}+1.5, "nonsymmetric": False,
                 "tilt_location": "user_defined", "tilt_angle": 80, "user_defined": 0.5, "resolutionn": 1000
                 }}})
```

### 3.8 How to import a GDS file and create the corresponding model in SDK?

The following code example demonstrates how to import a GDS file and create the corresponding structure in SDK. First, you need to obtain the full file path of the GDS file (`gds_file`). Then, use the `add_geometry` function with `type="gds_file"` to import the GDS file. The `path` parameter should contain the full path to the GDS file, `cell_name` is the name of the cell to be imported from the GDS file, `layer_name` specifies the layer type and data type to be imported, and `material` is the material associated with the structure.


```python
gds_file_root_path = os.path.abspath(os.path.join(path, '..'))
gds_file = gds_file_root_path + "/examples_gds/DC.gds"
st.add_geometry(name="box", type="gds_file",
                property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (1, 1)},
                          "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 6},
                          "material": {"material": mt["SiO2"], "mesh_order": 1}})
```

During the process of modeling by importing GDS files, it's important to pay attention to the setting of the material's `mesh_order` to ensure that the overlapping structures are covered in the correct order.

## 4. How to set up FDE simulation in SDK? 

### 4.1 How to configure various parameters for FDE simulation?

Next, we will learn how to add an FDE simulation and set its simulation parameters in SDK using the `Simulation` function.

First, you need to set the boundary conditions through `OBoundary`, where `geometry` defines the boundary geometry parameters, and `boundary` specifies the cross-sectional simulation boundary parameters.

Next, within the `simu.add` section, you can set the simulation name `name`, simulation type `type`, and various simulation parameters in the `property` field. Within `property`, you can set the simulation solver type through `general` (with the default value as `2d_x_normal`). In the `mesh_settings` section, you can configure mesh parameters, including setting the grid sizes in different directions using `global_mesh_uniform_grid`.

Here are the other parameters you can configure:

- `calculate_modes`: Determines whether to calculate modes.
- `mesh_structure`: Determines whether to compute refractive index profiles.
- `wavelength`: Represents the wavelength in the frequency domain.
- `wavelength_offset`: Calculates the wavelength offset for group index computation.
- `number_of_trial_modes`: Sets the number of modes for FDE calculations.
- `search`: Specifies the mode index search method, with two options: `['max_index', 'near n']`.
- `calculate_group_index`: Decides whether to compute group index.
- `bent_waveguide`: Indicates whether to calculate modes for bent waveguides.
- `radius`: Specifies the curvature radius of the waveguide.
- `orientation`: Determines the orientation of the bent waveguide.

You can use `frequency_analysis` to compute modes at various frequencies, with parameters such as `start_wavelength`, `stop_wavelength`, and `number_of_points` representing the starting wavelength, ending wavelength, and the number of sampled points.

```python
# region --- Boundary ---
st.OBoundary(property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': yspan_solver, 'z': 0, 'z_span': zspan_solver},
                       'boundary': {'y_min': 'PEC', 'y_max': 'PEC', 'z_min': 'PEC', 'z_max': 'PEC'},

                       })
# endregion

# region --- Simulation ---
simu = pj.Simulation()
simu.add(name=simu_name, type='FDE',
         property={
             # 'general': {'solver_type': '2d_x_normal'},  # default is '2d_x_normal' ['2d_x_normal','2d_y_normal','2d_z_normal']
             'mesh_settings': {
                 'global_mesh_uniform_grid': {'dy': grid, 'dz': grid},  # 'minimum_mesh_step_settings': {'min_mesh_step': 1.0e-4}
             },
             'fde_analysis': {
                 'modal_analysis': {
                     'calculate_modes': run_options.run, 'mesh_structure': True,
                     'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes,
                     'search': 'max_index',  # ['near_n','max_index']
                     # 'n': 2,
                     'calculate_group_index': False,
                     'mode_removal': {'threshold': 0.02},
                     # 'bent_waveguide': {'bent_waveguide': False, 'radius': 1, 'orientation': 0, 'location': 'simulation_center'}
                 },
                 "frequency_analysis": {
                     "frequency_analysis": run_options.run_frequency_sweep,
                     "start_wavelength": 1.50, "stop_wavelength": 1.60, "number_of_points": 3,
                     "effective_index": 2.67, "detailed_dispersion_calculation": False
                 }}})
# endregion
```

### 4.2 How to calculate the overlap in FDE simulation?

Overlap calculations in FDE simulation can be performed by utilizing the following code to calculate the overlap between the mode light and a Gaussian light source, as illustrated in the figure below.

```python
if run_options.run:
    fde_res = simu[simu_name].run()
if run_options.run_overlap:
    if run_options.run_beam:
        beam_res = simu[simu_name].run_fde_beam_and_extract(
            property={
                "define_gaussian_beam_by": "waist_size_and_position", # [waist_size_and_position,beam_size_and_divergence],
                "waist_radius": 10, "distance_from_waist": 0, "refractive_index": 1,
                "theta": 0, "phi": 0, "polarization_angle": 0,
                "sample_span": 10, "sample_resolution": 200},
            savepath=plot_path + 'beam_heatmap')
        overlap_res = simu[simu_name].run_fde_overlap_and_extract(
            property={"add_global_mode": {"task_path": beam_res.task_path, "mode": 0}, "mode": 0, "optimize_position": True},
            export_csv=True,
            savepath=plot_path + 'overlap')
    if not run_options.run_beam:
        overlap_res = simu[simu_name].run_fde_overlap_and_extract(
            property={"add_global_mode": {"mode": 0}, "mode": 0},
            export_csv=True,
            savepath=plot_path + 'overlap')
```

### 4.3 How to view the refractive index profile in the FDE/FDTD/EME modules?

As demonstrated in the code below, you can visualize the refractive index profile of a device's cross-section using the `run_index` simulation. First, assume that you want to calculate the refractive index profile on the x-direction cross-section of the device. Set the position of the cross-section along the x-axis by specifying `x=0` and setting `x_span=0`. Then, configure the center coordinates `y/z` and the dimensions `y_span/z_span` for the cross-sectional refractive index profile calculation area. The setup for calculating the refractive index profile in the y/z-direction cross-section is analogous.


```python
simu[simu_name].run_index(name=f'{simu_name}_x_0', savepath=f'{plot_path}{k}IndexPreview_x=0',
                                  # export_csv=False, show=False,
                                  property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 2}})
```

### 4.4 How to retrieve simulation data in the FDE module of SDK?

To obtain simulation data in the FDE module of SDK, you can first use `result_fde.extract` with `data='calculate_modes'` to retrieve simulation mode fields, which can be saved in the `savepath` directory. You can choose to export the mode field data as a CSV file by using `export_csv`. Set the `attribute`, `mode`, `real`, and `imag` parameters to extract the specific mode-related data you need. When using the frequency scan feature in the FDE module, you can extract data by specifying `data='frequency_analysis'`. As shown in the code, you can retrieve various components such as `"neff," "loss," "group_index," "polarization,"` and more.

```python
# region --- See Results ---
if run_options.extract:
    # region --- calculate_modes ---
    if run_options.run:
        k = kL[2]
        res = result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_neff_table', export_csv=True)
        print(res.to_string(index=False))
        for m in range(len(res)):
            k = kL[3]
            result_fde.extract(data='calculate_modes', savepath=f'{plot_path}{k}_mode{m}',
                               attribute='E', mode=m, real=True, imag=True, **export_options, show=False)
    # endregion

    if run_options.run_frequency_sweep:
        attr_selections: List[Literal["neff", "loss", "group_index", "polarization"]] = ["neff", "loss", "group_index", "polarization"]
        for i, a in enumerate(attr_selections):
            k = kL[4]
            result_fde.extract(data="frequency_analysis", savepath=f'{plot_path}{k}_freq_sweep_{a}}',
                               attribute="a", real=True, imag=True, export_csv=True, export_mat=True, show=False)
# endregion

```

## 5. How to set up EME simulation in SDK? 

### 5.1 How to configure boundary conditions and ports in EME simulation?

To begin with, you need to define the boundary conditions using `OBoundary`. Then, you can set the geometric dimensions of the boundaries with `geometry` and configure the boundary parameters for each dimension with `boundary`.

Next, you should configure the EME ports using `Port`. You can add a new port using `add`. Specify the `port_location` for the port's location. You can choose the mode for this port through `mode_selection`, such as `fundamental_TE` or `fundamental_TM`. 

Additionally, you can select `user_select` to define a custom mode for the port by setting `mode_index` to a positive integer value. Use `use_full_simulation_span` to determine whether the full simulation span should be used. Specify the `offset` to set the port's offset relative to the simulation boundaries, and set `number_of_trial_modes` for EME mode solving.

```python
# region --- Boundary ---
st.OBoundary(property={'geometry': {'x': 0, 'x_span': 2, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 3},
                       'boundary': {'y_min': 'PEC', 'y_max': 'PEC', 'z_min': 'PEC', 'z_max': 'PEC'} 
                       })

# region --- Port ---
pjp = pj.Port(property={'source_port': 'eme_in'})

# region --- eme_in ---
pjp.add(name='eme_in', type='eme_port',
        property={'geometry': {'port_location': 'left',  # 'use_full_simulation_span': True,
                               'y': 0, 'y_span': 3, 'z': 0, 'z_span': 3},
                  'eme_port': {
                      'general': {'mode_selection': 'fundamental_TE',  # 'mode_index': 0, 'search': 'max_index'
                                  },
                      'advanced': {'offset': 0, 'number_of_trial_modes': number_of_modes,
                                   # 'mode_removal': {'is_used': False, 'threshold': 0.01}
                                   }}})
# endregion

# region --- eme_out ---
pjp.add(name='eme_out', type='eme_port',
        property={'geometry': {'port_location': 'right',  # 'use_full_simulation_span': True,
                               'y': 0, 'y_span': 3, 'z': 0, 'z_span': 3},
                  'eme_port': {
                      'general': {'mode_selection': 'fundamental_TE',  # 'mode_index': 0, 'search': 'max_index'
                                  },
                      'advanced': {'offset': 0, 'number_of_trial_modes': number_of_modes,
                                   # 'mode_removal': {'is_used': False, 'threshold': 0.01}
                                   }}})
# endregion
# endregion

```

### 5.2 How to add a profile monitor in EME simulation?

As shown in the code below, you can add a new monitor to your EME simulation. Use `type='profile_monitor'` to specify the type of monitor you want to add. In the `property` section, you can configure various parameters for the monitor. For example, set `monitor_type` to determine the direction of the monitor. Define the coordinates and dimensions of the monitor using `x/y/z` and `x_span/y_span/z_span`, with the normal span width set to zero.

It's important to note that the monitor region must be smaller than or equal to the simulation region's size. For XY-plane profile monitors, it's common to set the monitoring region's dimensions to be the same as the simulation region. The setup for profile monitors in FDTD is the same as in EME.

```python
# region --- Monitor ---
mn = pj.Monitor()
mn.add(name='x_normal', type='profile_monitor',
       property={'geometry': {'monitor_type': '2d_x_normal',  # 'x_resolution': 100,
                         'x': 0.9, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 3}})
# endregion
```

### 5.3 How to configure parameters for EME simulation?

Next, we will learn how to set the parameters for EME simulation within the code below. Under the `general` parameters, you can define the `wavelength` for the EME simulation wavelength.

Following that, you can define the EME simulation cells using `cell_group_definition`. Within this section, `span` represents the length of each cell, `cell_number` specifies how many cells the length should be evenly divided into, `number_of_modes` determines the number of modes to be solved during the calculation, and `sub_cell_method` determines the method for calculating the S-matrix between cells.

The `transverse_mesh_setting` section allows you to configure the transverse mesh settings.

Under `eme_analysis`, you can set `eme_propagate` to determine whether to calculate EME propagation, `propagation_sweep` specifies whether to perform EME length sweeps, and `wavelength_sweep` determines whether to conduct EME wavelength sweeps.



```python
# region --- Simulation ---
simu = pj.Simulation()
simu.add(name=simu_name, type='EME',
         property={
             'general': {'wavelength': wavelength, 'wavelength_offset': 0.0003 },
             'eme_setup': {'cell_geometry': {
                 'cell_group_definition': [
                     {'span': 2, 'cell_number': cell_number, 'number_of_modes': number_of_modes, 'sc': 'sub_cell'}]}},
             'transverse_mesh_setting': {'global_mesh_uniform_grid': {'dy': grid, 'dz': grid} },
             'eme_analysis': {
                 'eme_propagate': run_options.run,
                 'propagation_sweep': {'propagation_sweep': run_options.run_length_sweep,
                                       'parameter': 'group_span_1', 'start': 0, 'stop': 5, 'number_of_points': 6},
                 'wavelength_sweep': {'wavelength_sweep': run_options.run_wavelength_sweep,
                                      'start': wavelength - 0.5, 'stop': wavelength + 0.5,
                                      'number_of_wavelength_points': 3}
             }})
# endregion
```

### 5.4 How to set up a preview of EME simulation structure images?

You can preview the EME simulation structure and images using `structure_show`. In the example code below, the parameter `fig_type` determines the image format, typically "png." Use `show` to specify whether you want to generate images. Set `savepath` for the path where the result images will be saved, and define `simulation_name` for the image's name. You can use `celldisplay` to control whether cells are displayed in the image, and `xyratio` adjusts the aspect ratio between the x and y coordinates in the image, with the default value being (1,1).


```python
# region --- Structure Show ---
st.structure_show(fig_type='png', show=False, savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name,
                  celldisplay=True, xyratio=(1, 1))
# simu[simu_name].show3d(show_with="local_gui")
# endregion
```

### 5.5 How to obtain EME port mode results?

You can retrieve the results of your EME simulation by using `eme_res.extract`. In the example code below, you can extract the port mode information. Set `data='eme_propagate:port_mode_info'` to specify that you want to retrieve EME port mode results. Use `save_path` to specify the data saving path, and define `attribute` to specify the data content you wish to extract. `plot_x` and `plot_y` determine the x and y coordinates for line plots or heat maps. `real` and `imag` control the output data. If both are set to `False`, the program will result in an error, "real and imag are both false," and won't output any results. If both are set to `True`, the output values will be in absolute form. If one of them is set to `True`, it will output either the real or imaginary part of the data. Use `show` to control whether to display the images, and `export_csv` determines whether to save the data as a CSV file.


```python
for port_name in ['eme_in', 'eme_out']:
    res =  eme_res.extract(data='eme_propagate:port_mesh_structure',
                           savepath=f'{plot_path}	{kL[3]}_eme_structure_{port_name}',
                           port_name=port_name,  target='intensity', attribute="E",
                           # plot_x='y', plot_y='z', real=True, imag=True, 
                           # export_csv=False, show=False
                          )
```

### 5.6 How to obtain mode field plots for EME/FDTD?

Similarly, you can use `eme_res.extract` to retrieve simulation results. In the example code below, you can set `data='eme_propagate:monitor'` to specify that you want to obtain monitor results. Define the `save_path` for data storage and use the `attribute` parameter to specify the data to be extracted. `plot_x` and `plot_y` control the x and y-axis coordinates for line or heatmap plots. Use `real` and `imag` to determine how the output data should be handled: when both are `False`, the program will raise an error with `"real and imag are both false"`; when both are `True`, the results will be taken as the absolute value; if one is `True`, either the real or imaginary part will be output. `show` controls whether images are displayed, and `export_csv` determines if data should be saved as a CSV file.


```python
eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_z_normal",
                monitor_name="z_normal", attribute="E", 
                # plot_x='y', plot_y='z', 
                # real=True, imag=True, 
                # export_csv=False, show=False
                )
```

### 5.7 How to perform EME length sweeps?

As demonstrated in the code below, you can generate N x N S-parameter matrix length sweep plots using `data="propagation_sweep:sweep"`, where N represents the number of ports.


```python
# region --- EME Propagation Sweep Results ---
if run_options.run_length_sweep:
    eme_res.extract(data="propagation_sweep:sweep", savepath=plot_path + "10_length_sweep", export_csv=True)
# endregion
```


### 5.8 How to perform EME wavelength sweeps?

As shown in the code below, you can generate N x N S-parameter matrix wavelength sweep plots using `data="wavelength_sweep:sweep"`, where N represents the number of ports.


```python
# region --- EME Wavelength Sweep Results ---
if run_options.run_wavelength_sweep:
    eme_res.extract(data="wavelength_sweep:sweep", savepath=plot_path + "20_wavelength_sweep", plot_x="wavelength", export_csv=True)
# endregion
```

### 5.9 During EME simulations, is overlap recalculated when wavelength scans are repeated?

During EME simulations, when performing wavelength sweeps, the workflow involves first computing all the modes within the cells, and then during the sweep, calculating overlap and normalization as needed. If you repeat wavelength scans, there is no need to recalculate overlap. The program will perform the overlap calculation only once.

## 6. How to configure FDTD simulations in SDK?

### 6.1 How to set the wavelength for FDTD simulations?

`Waveform` supports defining wavelength, wavelength span, and related parameters. It includes common communication wavelengths like 1550 nm and 1310 nm, as well as visible light wavelengths. The `name` is the waveform's name, `wavelength_center` is the central wavelength, and `wavelength_span` is the bandwidth.

```python
# region --- Waveform ---
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)
wv_struct = wv[waveform_name]
# endregion
```

### 6.2 How to set up light sources for FDTD simulations?

You can configure light sources for FDTD simulations using the `source` function, as shown in the code below. In this setup, the `type` specifies the source type, commonly using mode sources in waveguides and Gaussian sources in free space. The `axis` determines the reference axis for the light source, with options including `x_forward`, `y_forward`, and `z_forward`. You can select specific modes using `mode_selection` and `mode_index`, and choose a specific waveform with `waveform`. The `geometry` parameter defines the geometric dimensions of the light source.

```python
src = pj.Source()
src.add(name='source', type='mode_source', axis='x_forward',
        property={'general': {
            # 'amplitude': 1, 'phase': 0, 'mode_index': 0, 		  'rotations': {'theta': 0, 'phi': 0, 'rotation_offset': 0}
            'mode_selection': 'user_select', 'waveform': {'waveform_id_select': wv_struct}
        },
            'geometry': {'x': ports['op_0']['position'][0], 'x_span': 0,
                         'y': ports['op_0']['position'][1], 'y_span': monitor_w,
                         'z': 0, 'z_span': monitor_h}})
```

### 6.3 How to configure monitors in FDTD simulations?

Let's briefly introduce the setup of FDTD monitors, including global monitors, power monitors, and mode expansion monitors. As shown in the code below, you can use `type='global_option'` to select a global monitor. Set `wavelength_center` to specify the center wavelength for the monitor, `wavelength_span` for the wavelength range, and `frequency_points` to determine the number of points monitored within that wavelength range.

```python
mn = pj.Monitor()
mn.add(name='Global Option', type='global_option',
       property={'frequency_power': {  # 'sample_spacing': 'uniform', 'use_wavelength_spacing': True,
           # ['min_max','center_span']
           'spacing_type': 'wavelength', 'spacing_limit': 'center_span',
           'wavelength_center': wavelength, 'wavelength_span': 0.1, }})
```

As shown in the following code, you can set up power monitors and mode expansion monitors in FDTD simulations using the `type='power_monitor'`. The `name` parameter specifies the monitor's name. In the `property` section, you can configure various monitor parameters, including wavelength-related settings such as `wavelength_center`, `wavelength_span`, and `frequency_points`. The `geometry` section allows you to set the monitor's orientation, position, and dimensions with parameters such as `monitor_type`, `x/y/z`, and `x_span/y_span/z_span`.

```python
mn.add(name='through', type='power_monitor',
       property={'general': {'frequency_profile': {'wavelength_center': wavelength, 'wavelength_span': 0.1,
                                                   'frequency_points': 11}, },
                 'geometry': {'monitor_type': '2d_x_normal',
                              'x': ports['op_1']['position'][0], 'x_span': 0, 'y': ports['op_1']['position'][1],
                              'y_span': monitor_w, 'z': 0, 'z_span': monitor_h},
                 'mode_expansion': {"enable": True, 'direction': 'positive',
                                    'mode_calculation': {
                                        'mode_selection': 'user_select', 'mode_index': [0, 1, 2, 3],
                                    'override_global_monitor_setting': {'wavelength_center': wavelength, 'wavelength_span': 0.1, 'frequency_points': 11}}}})
```

### 6.4 How to configure Port-related parameters in FDTD?

You can set the parameters related to ports in FDTD simulations as demonstrated in the code below. The `waveform_id` specifies the input wavelength, and `source_port` determines the input port. Then, using the `add` method, you can add the corresponding port with `type='fdtd_port'`, providing a name for the port. In the `property` section, you can configure its relevant parameters, and in the `geometry` section, you can set the port's position and dimensions. The `modal_properties` parameter allows you to specify the properties of the input light, including `inject_axis` for the light's injection axis, `direction` for the direction of the incident light, and `mode_selection` for selecting the light mode.

```python
pt = pj.Port(property={'waveform_id': wv_struct, 'source_port': 'port_left'})
if run_options.matrix_sweep:
    pt.add(name='port_left', type='fdtd_port',
           property={'geometry': {'x': ports['op_0']['position'][0], 'x_span': 0, 'y': ports['op_0']['position'][1],
                                  'y_span': monitor_w, 'z': 0, 'z_span': monitor_h},
                     'modal_properties': {'general': {'inject_axis': 'x_axis', 'direction': 'forward',
                    'mode_selection': 'fundamental',
                                                      }}})
    pt.add(name='port_right', type='fdtd_port',
           property={'geometry': {'x': ports['op_1']['position'][0], 'x_span': 0, 'y': ports['op_1']['position'][1],
                                  'y_span': monitor_w, 'z': 0, 'z_span': monitor_h},
                     'modal_properties': {'general': {'inject_axis': 'x_axis', 'direction': 'backward',
                     'mode_selection': 'fundamental',
                                                          }}})
```

### 6.5 How to extract relevant results from FDTD simulations?

As shown in the following code, you can specify the `savepath` for saving the results. Use `target='line'` for line plots or `target='intensity'` for intensity plots. The `attribute` parameter specifies the parameters to be extracted, and `wavelength` is used to specify the wavelength.

To extract the mode field at a specific wavelength from a power monitor:

```python
fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[3]}_monitorT_modeprofile_fdtd',
                         monitor_name='through', target='intensity', plot_x='y', plot_y='z', attribute='E', wavelength=f'{wavelength}', real=True, imag=False, export_csv=True, show=False)
```

Extracting the transmittance at different wavelengths from a power monitor: 

```python
fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[7]}_RlVsLambda_power',
                 monitor_name='reflection', target='line', plot_x='wavelength', attribute='T', real=True, imag=False, export_csv=True, export_mat=True, show=False)
```

Extracting the response of a mode expansion monitor to a specific mode from a power monitor: 

```python
fdtd_res.extract(data='fdtd:mode_expansion', savepath=f'{plot_path}{kL[5]}_TransVsLambda_mode=0',
                         monitor_name='through', target='line', plot_x='wavelength', mode=0, attribute='T_forward', real=True, imag=True, export_csv=True, export_mat=True, show=False)

```

 Extracting the S-matrix results from FDTD simulations:

```python
smatrix_res.extract(data='smatrix_sweep', savepath=f'{plot_path}{kL[8]}_smatrix_sweep',
                        target='line', plot_x='wavelength', real=True, imag=True, export_csv=True, export_mat=True, show=False)
```

### 6.6 Why does the S-matrix in FDTD simulation sometimes exceed 1?

In FDTD simulations, the presence of a light source in the simulation region can lead to incorrect S-matrix results, such as some port responses exceeding 1. To ensure accurate S-matrix calculations, it's essential to make sure that there are no light sources within the simulation region.


</font>








