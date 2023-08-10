---
sidebar_position: 4
---
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

## 1. 怎样新建一个SDK仿真项目？

首先，我们需要导入All-in-One SDK包来进行光学仿真计算。

```python
import maxoptics_sdk.all as mo
```

随后在*Region 1*中，新建一个仿真项目。其中`name`为项目名字；`location`为服务器的位置/运行模式，此时`run_mode="local"`或`run_mode="cloud"`。

```python
# region --- 1. Project ---
pj = mo.Project(name=project_name, location=run_mode)
# endregion
```

## 2. 怎样在SDK仿真中添加材料?

接下来，我们需要添加仿真过程中所用到的材料，代码如下*Region 2*中所示。其中其中`name`为材料名字；`data`为材料库的材料对象；`order`为材料覆盖的优先级，在不同材料的结构发生重叠时，大`order`数值的材料能覆盖小数值材料，当数值相同时，则默认后来居上。

```python
# region --- 2. Material ---
mt = pj.Material()
mt.add_lib(name='Si', data=mo.Material.Si_Palik, order=2)
# endregion
```

### 2.1 怎样添加一个非色散材料？

此外，可以通过`add_nondispersion`添加非色散材料。`data=[(real, imag)]`中的数据为折射率的实部和虚部。

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)
```

### 2.2 怎样添加一个色散材料？

通过`add_dispersion`添加色散材料，代码如下所示。`data=[(wavelength, real, imag)]`为不同波长下的折射率实部和虚部。可以通过`fitting`对不同波长下的材料折射率进行拟合

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2",data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=1)
```

### 2.3 怎样添加一个各向异性材料？

通过`add_anisotropy`来添加各向异性材料。其中`data=[ (wavelength, nx_real, nx_imag, ny_real, ny_imag, nz_real, nz_imag ) ]`代表不同波长下，材料的各向异性折射率实部和虚部。同样的，也可以通过`fitting`进行拟合。

```python
mt = pj.Material()
mt.add_anisotropy(name="LN", fitting=None,
      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2
      )
```

## 3. 怎样在SDK仿真中添加几何结构？

下面我们学习如何在SDK中新建一个几何结构，如*Region 3*中所示。

### 3.1 怎样添加背景折射率？

如下所示在`Structure`中定义背景折射率，`background_material` 为背景材料；`mesh_type`为材料的网格类型，可选`"curve_mesh"` 和 `"staircase"`；`mesh_factor`为材料的网格因子。

```
# region --- 3. Structure ---
    st = pj.Structure(mesh_type="curve_mesh", mesh_factor=1.4,
                      background_material=mt["Air"])
# endregion
```

### 3.2 怎样添加一个矩形结构？

如下代码所示，在`Structure`函数内通过`add_geometry`来添加结构。使用代码`type='Rectangle'` 即可添加一个矩形结构，其中`material`为之前定义过的材料种类，`mesh_order`为材料的覆盖优先级，和之前添加材料部分中的的order作用相同。在`geometry`的参数列表下，`x/y/z`为三个方向上结构的中心坐标；`x_span/y_span/z_span`为三个方向上结构的宽度。

```python
st.add_geometry(name="rectangle", type="Rectangle", 
                property={"material": {"material": mt["Si"], "mesh_order": 2},
						  "geometry": {"x": 0, "x_span": size, "y": space, "y_span": wg_width, "z": 0, "z_span": wg_height, }})
```

### 3.3 怎样添加一个圆弧波导？

同样的，我们可以在SDK中添加一个圆弧波导结构。在`geometry`中，`inner_radius/out_radius`分别为圆弧结构的内部半径和外部半径；`angle`为弯曲角度，角度的正负分别为顺时针方向和逆时针方向；`xyz`为三个方向上结构的中心位置，`z_span`为波导的厚度。

```python
st.add_geometry(name="arc", type="ArcWaveguide", 
                property={"material": {"material": mt["Si"], "mesh_order": 2},
						  "geometry": {"inner_radius": size-wg_width/2, "outer_radius": size+wg_width/2, "angle": 90,
             "x": 0, "y": 0, "z": 0, "z_span": wg_height}})
```

### 3.4 怎样添加一个圆形结构？

接下来，我们在下列代码中学习如何添加一个圆形结构。其中`radius`为园形的半径，`x/y`为圆心坐标。

```python
st.add_geometry(name="circle", type="Circle", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"radius": size, "x": 4*space, "y": 0, "z": 0, "z_span": wg_height}})
```

### 3.6 怎样添加一个拉锥Taper结构？

在`add_geometry`调用`type="LinearTrapezoid"`来建立一个Taper拉锥结构，其中`point_{1,2,3,4} _{x,y}`分别为拉锥结构的四个顶点坐标；`x/y/z`为拉锥结构的的3D参考点，`z_span`为拉锥波导厚度。

```python
st.add_geometry(name="linear_trapezoid", type="LinearTrapezoid", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"point_1_x": 0, "point_1_y": 0, "point_2_x": 0, "point_2_y": size/2,
                 "point_3_x": size, "point_3_y": size, "point_4_x": size, "point_4_y": 0,
                 "x": 2*space, "y": space, "z": 0, "z_span": wg_height,
                 }})
```

### 3.7 怎样添加一个自定义函数的几何结构？

以一个自定义函数曲线的拉锥结构为例，在`add_geometry`调用`type="AnalyticalWaveguide"`来使用该功能。其中`equation1`为波导边界函数表达式；`x/y/z` 为中心坐标；`x span/y span`为定义域范围；`resolution`为分辨率；`nonsymmetric`定义了结构是否上下对称；`tilt_location`决定了梯形拉伸位置；`tilt_angle`为结构的倾角。

```
st.add_geometry(name="taper_symmetric", type="AnalyticalWaveguide", property={
    "material": {"material": mt["Si"], "mesh_order": 2},
    "geometry": {"x": 0, "x_span": L, "y": 0, "y_span": taper_width,
                 "z": 0, "z_sapn": 0.22,
                 "equation1": f'{str(A)*({str(L/2)}-x)^{str(m)}+1.5, "nonsymmetric": False,
                 "tilt_location": "user_defined", "tilt_angle": 80, "user_defined": 0.5, "resolutionn": 1000
                 }})
```

### 3.8 怎样在SDK中通过导入gds文件并建立相应模型？

下面代码案例给出了如何在SDK中，通过导入gds文件建立相应结构的代码。其中，获取了`gds_file`gds文件完整的路径名后；通过`add_geometry`函数下的`type="gds_file"`导入来相应的gds文件；`path`为gds文件对应的完整路径名；`cell_name`为待导入gds的cell名，`layer_name`为待导入的图层类型和数据类型，`material`为结构对应的材料。

```python
gds_file_root_path = os.path.abspath(os.path.join(path, '..'))
gds_file = gds_file_root_path + "/examples_gds/DC.gds"
st.add_geometry(name="box", type="gds_file",
                property={"general": {"path": gds_file, "cell_name": "TOP", "layer_name": (1, 1)},
                          "geometry": {"x": 0, "y": 0, "z": 0.11, "z_span": 6},
                          "material": {"material": mt["SiO2"], "mesh_order": 1}})
```

在导入gds文件建模的过程中，需要注意材料`mesh_order`的设置，确保重叠结构的覆盖顺序是正确的。

## 4. 怎样在SDK中设置FDE仿真？

### 4.1 怎样设置FDE仿真中各个参数？

下面我们学习在SDK中通过`Simulation`添加一个FDE仿真并设置其仿真参数。<br/>首先，需要通过`OBoundary`设置边界条件，`geometry`为边界几何参数，`boundary`为截面仿真边界参数。<br/>随后，在`simu.add`下分别设置仿真名称`name`，仿真类型`type`，以及仿真的各项参数`property`。`property`中通过`general`设置仿真求解器的类型，默认值为`2d_x_normal`；在`mesh_settings`下设置网格参数，通过`global_mesh_uniform_grid`设置各方向上的网格大小；`calculate_modes`确定是否计算模式； `mesh_structure`确定是否计算折射率轮廓；`wavelength`为 频域波长；通过`wavelength_offset`计算群折射率的波长偏移；`number_of_trial_modes`为FDE计算的模式数目；通过`search` 寻找模式折射率，可选用`[‘max_index’, ‘near n’]`两种方式，默认为`‘max_index’`；`calculate_group_index` 确定 是否计算群折射率；`bent_waveguide`为是否计算弯曲波导的模式；`radius`为波导的弯曲半径；`orientation`为弯曲波导的位置。可以通过`frequency_analysis`扫描各个频率下的折射率，`start_wavelength`，`stop_wavelength`，`number_of_points`，分别为起始扫描波长，结束扫描波长和扫描取点个数。

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

### 4.2 怎样在FDE仿真中进行overlap的计算？

可以通过下列代码中将如下图所示模式光和高斯光源进行overlap。

| ![image-20230809145029868](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230809145029868.png) | ![image-20230809145033960](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230809145033960.png) |
| :----------------------------------------------------------: | :----------------------------------------------------------: |



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

### 4.3 怎样在FDE/FDTD/EME模块中查看折射率轮廓？

如下代码中所示为如何对器件截面进行`run_index`仿真，首先假设我们对器件x方向上截面计算折射率轮廓，通过`x=0`确定截面在x方向上的位置，并设置`x_span=0`；随后设置截面轮廓图计算区域的中心点`y/z`坐标,以及截面尺寸`y_span/z_span`的数值。y/z方向上截面折射率轮廓计算区域的设置同上。

```python
simu[simu_name].run_index(name=f'{simu_name}_x_0', savepath=f'{plot_path}{k}IndexPreview_x=0',
                                  # export_csv=False, show=False,
                                  property={'geometry': {'x': 0, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 2}})
```

### 4.4 怎样在SDK中的FDE模块中获取仿真数据？

首先通过`result_fde.extract`下的`data='calculate_modes'`来获取仿真模场并保存在`savepath`路径下，通过`export_csv`确定是否导出模场数据的csv格式文件；设置`attribute`，`mode`，`real`，`imag`来提取所需要模式相关数据。当使用FDE模块中频率扫描功能时，通过`data=’frequency_analysis’`提取数据。如代码中所示，可以提取`"neff", "loss", "group_index", "polarization"`等等各个分量。

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

## 5. 怎样在SDK中设置EME仿真？

### 5.1 怎样设置EME仿真中添加边界条件和端口？

首先需要通过`OBoundary`对边界条件进行设置，再用`geometry`，`boundary`分别对边界的几何尺寸和各个维度的边界参数进行设置。<br/>随后需要通过`Port`对EME的端口进行设置，`pj.Port.add`能够添加一个新端口。`port_location`为端口的位置；可通过`mode_selection`选择该端口的模式，如`fundamental_TE`或者`fundamental_TM`；此外，还支持`user_select`自定义端口的模式，通过`mode_index`选定端口模式的阶数，需要保证是正整数；`use_full_simulation_span` 为是否使用全仿真区域；`offset`为端口相对仿真边界的偏移；`number_of_trial_modes` 为EME求解模式。

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

### 5.2 怎样在EME仿真中添加一个profile monitor？

如下方代码所示，首先需要通过`add`添加一个新的监视器，再用`type='profile_monitor'`调用不同种类的监视器。在`property`中对监视器各个参数进行设置，如`monitor_type`设置监视器的方向；`x/y/z`以及`x_span/y_span/z_span`确定监视器的坐标和尺寸且监视器法向span宽度需要为零。<br/>此外，还需要注意的是，监视器的区域需要小于等于仿真区域的大小，对于XY平面的profile monitor，一般令其监视区域尺寸与仿真区域相同。FDTD的profile monitor设置与此相同。

```python
# region --- Monitor ---
mn = pj.Monitor()
mn.add(name='x_normal', type='profile_monitor',
       property={'geometry': {'monitor_type': '2d_x_normal',  # 'x_resolution': 100,
                         'x': 0.9, 'x_span': 0, 'y': 0, 'y_span': 3, 'z': 0, 'z_span': 3}})
# endregion
```

### 5.3 怎样设置EME仿真的参数？

接下来我们学习如何在EME仿真模块中设置相应的参数，代码如下所示。其中`general`参数列表下的`wavelength`为EME仿真波长。随后在通过`cell_group_definition`进行对EME仿真cell的定义，其中`span`为cell的长度，`cell_number`确定该长度均分为多少个cell， `number_of_modes`为计算时求解的模式数，`sub_cell_method`确定了计算cell之间S矩阵的方法。在`transverse_mesh_setting`中进行横向网格设置。在`eme_analysis`下，`eme_propagate`确定是否计算eme传播图像，`propagation_sweep`为是否进行eme长度扫描，`wavelength_sweep`为是否进行eme波长扫描。

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

### 5.4 怎样设置预览EME仿真结构图像？

通过`structure_show`可以预览EME仿真结构和图像。如下案例代码所示，其中`fig_type`为生成图片类型，通常为"png"，通过`show`来确认是否生成图像，`savepath`为结果图像的路径，`simulation_name`为结果图像名，`celldisplay`确认图像中是否生成cell，`xyratio`为图像中x坐标和y坐标的比例，默认值为 (1,1)。

```python
# region --- Structure Show ---
st.structure_show(fig_type='png', show=False, savepath=f'{plot_path}{kL[0]}{simu_name}', simulation_name=simu_name,
                  celldisplay=True, xyratio=(1, 1))
# simu[simu_name].show3d(show_with="local_gui")
# endregion
```

### 5.5 怎样获取EME端口的模式结果？

通过`eme_res.extract`获取仿真计算后的结果。如下案例代码所示，从结果中提取端口模式，其中设置`data='eme_propagate:port_mode_info'`确定所需获取结果为EME端口模式，`save_path`为数据保存路径，用`attribute`确定提取数据内容。`plot_x/ plot_y`为画线图或热度图的x, y轴纵坐标。`real, imag`控制输出数据：全为`False`时，结果值原样输出；全为`True`时，结果值取abs；有一个为`True`时，输出对应的实部/虚部。`show`控制是否显示图片，`export_csv `为是否保存数据为csv文件。

```python
for port_name in ['eme_in', 'eme_out']:
    res =  eme_res.extract(data='eme_propagate:port_mesh_structure',
                           savepath=f'{plot_path}	{kL[3]}_eme_structure_{port_name}',
                           port_name=port_name,  target='intensity', attribute="E",
                           # plot_x='y', plot_y='z', real=True, imag=True, 
                           # export_csv=False, show=False
                          )
```

如图所示，为输出结果的模场图。

| ![image-20230810093827258](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230810093827258.png) | ![image-20230810093833919](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230810093833919.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



### 5.6 怎样获取EME/FDTD的模场图？

同样的，我们可以通过`eme_res.extract`获取仿真计算后的结果。如下案例代码所示，设置`data='eme_propagate:monitor'`确定所需获取监视器结果，`save_path`为数据保存路径，用`attribute`确定提取数据内容。`plot_x/ plot_y`为画线图或热度图的x, y轴纵坐标。`real, imag`控制输出数据：全为`False`时，结果值原样输出；全为`True`时，结果值取abs；有一个为`True`时，输出对应的实部/虚部。`show`控制是否显示图片，`export_csv `为是否保存数据为csv文件。

```python
eme_res.extract(data="eme_propagate:monitor", savepath=plot_path + "013_eme_z_normal",
                monitor_name="z_normal", attribute="E", 
                # plot_x='y', plot_y='z', 
                # real=True, imag=True, 
                # export_csv=False, show=False)
```

### 5.7 怎样进行EME长度扫描？

如下代码所示，通过`data="propagation_sweep:sweep"`生成N × N张S参数矩阵长度扫描图，N为端口数。

```python
# region --- EME Propagation Sweep Results ---
if run_options.run_length_sweep:
    eme_res.extract(data="propagation_sweep:sweep", savepath=plot_path + "10_length_sweep", export_csv=True)
# endregion
```

| ![image-20230810105522646](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230810105522646.png) | ![image-20230810105525963](C:\Users\wangjinyi\AppData\Roaming\Typora\typora-user-images\image-20230810105525963.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

### 5.8 怎样进行EME波长扫描？

如下代码所示，通过`data="wavelength_sweep:sweep"`生成N × N张S参数矩阵波长扫描图，N为端口数。

```python
# region --- EME Wavelength Sweep Results ---
if run_options.run_wavelength_sweep:
    eme_res.extract(data="wavelength_sweep:sweep", savepath=plot_path + "20_wavelength_sweep", plot_x="wavelength", export_csv=True)
# endregion
```

## 6. 怎样在SDK中设置FDTD仿真？

### 6.1 怎样设置FDTD仿真中波长？

`Waveform`支持1550nm, 1310nm和可见光三种类型。`name`为waveform 的名字，`wavelength_center`为中心波长，`wavelength_span`为带宽

```python
# region --- Waveform ---
wv = pj.Waveform()
wv.add(name=waveform_name, wavelength_center=wavelength, wavelength_span=0.1)
wv_struct = wv[waveform_name]
# endregion
```

### 6.2 怎样设置FDTD仿真光源？

通过`source`设置FDTD的仿真光源，代码如下所示。其中，`type`定义光源类型，在波导中常用模式源，在自由空间中常用高斯源；`axis`确定光的参考轴，其可选参数列表有xyz三个方向，即`x_forward/x_forward/x_forward`；通过`mode_selection`, `mode_index`选择特定的模式；`waveform`可选择特定的waveform；`geometry`设置光源几何尺寸。

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

### 6.3 怎样设置FDTD的监视器？

下面简单介绍FDTD监视器的设置，包含全局监视器、功率监视以及模式展开监视器的设置。如下代码所示，其中通过`type='global_option'`选取为全局监视器，`wavelength_center`为监视器获取波长中心值，`wavelength_span`为波长范围，`frequency_points`为监视器在该波段下所取点数。

```python
mn = pj.Monitor()
mn.add(name='Global Option', type='global_option',
       property={'frequency_power': {  # 'sample_spacing': 'uniform', 'use_wavelength_spacing': True,
           # ['min_max','center_span']
           'spacing_type': 'wavelength', 'spacing_limit': 'center_span',
           'wavelength_center': wavelength, 'wavelength_span': 0.1, 
```

如下列代码所示，通过代码`type='power_monitor'`设置FDTD仿真中功率监视器和模式展开监视器。其中`name`为监视器名称。在`property`中设置监视器的各个参数，如波长相关参数`wavelength_center`、`wavelength_span`以及`frequency_points`；通过`geometry`下`monitor_type`、`x/y/z`、`x_span/y_span/z_span`的设置监视器的朝向、位置以及尺寸。

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

### 6.4 怎样设置FDTD的Port相关参数？

如下列代码所示，设置FDTD仿真中端口的相关参数。其中`waveform_id`确定输入光波长，`source_port`确定输入端口。随后在`add`下通过`type='fdtd_port'`添加相应的port，name为port名，在`property`中设置其相关参数，在`geometry`中设置端口的位置和尺寸，`modal_properties`设置输入光的相关属性，如`inject_axis`入射光光轴，`direction`入射光方向，`mode_selection`光的模式选择。

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

### 6.5 怎样抽取FDTD的相关结果？

如下列代码，`savepath` 为保存的路径，`target='line'`为线图，`target='intensity'`为强度图像，`attribute`确定了需要提取的参数，`wavelength`指定波长。

提取功率监视器的某一个波长下的模场：

```python
fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[3]}_monitorT_modeprofile_fdtd',
                         monitor_name='through', target='intensity', plot_x='y', plot_y='z', attribute='E', wavelength=f'{wavelength}', real=True, imag=False, export_csv=True, show=False)
```

提取功率监视器的不同波长下的透过率:

```python
fdtd_res.extract(data='fdtd:power_monitor', savepath=f'{plot_path}{kL[7]}_RlVsLambda_power',
                 monitor_name='reflection', target='line', plot_x='wavelength', attribute='T', real=True, imag=False, export_csv=True, export_mat=True, show=False)
```

提取模式展开监视器对某个功率监视器某个模式的响应的结果:

```python
fdtd_res.extract(data='fdtd:mode_expansion', savepath=f'{plot_path}{kL[5]}_TransVsLambda_mode=0',
                         monitor_name='through', target='line', plot_x='wavelength', mode=0, attribute='T_forward', real=True, imag=True, export_csv=True, export_mat=True, show=False)

```

提取FDTD的S矩阵结果：

```python
smatrix_res.extract(data='smatrix_sweep', savepath=f'{plot_path}{kL[8]}_smatrix_sweep',
                        target='line', plot_x='wavelength', real=True, imag=True, export_csv=True, export_mat=True, show=False)
```

### 6.6 为什么FDTD的Smatrix会出现大于1的情况？

当FDTD仿真区域存在光源时，会导致Smatrix矩阵会出现错误结果，例如某些端口响应大于1。在进行Smatrix的计算时，需要保证仿真区域中不存在光源。