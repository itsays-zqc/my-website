# Release Log
![mo-logo](../static/img/mo_logo.jpg)
## V2.3.0.4
Release Date: 2023/06/30
### Dependent Software
- Passive
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDTD_GPU: V0.91.0.1 build 0626.0819

	 - FDE: Version: 00.09.08.1 Build: 0613.1936

	 - EME: Version: 00.09.22.01 Build: 0618.1400

	 - ModeExpansion: 1.16.0.4 Build: 20230606.1841

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDE: Version: 00.09.08.1 Build: 0613.1936

	 - GenRate: v0.2.3 06/06/2023

	 - OEDevice: 20230324

### New Feature
- Passive
	 - None.

- Active
	 - None.

### Fixed Bugs
- Passive
	 - Added exception catch for eme_propagate:facet_data.

	 - Fixed the support issue of the whl installation package for the fourth paragraph of the version number.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.3.0.3
Release Date: 2023/06/21
### Dependent Software
- Passive
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDTD_GPU: V0.81.2.1 build 0609.0839

	 - FDE: Version: 00.09.08.1 Build: 0613.1936

	 - EME: Version: 00.09.22.01 Build: 0618.1400

	 - ModeExpansion: 1.16.0.4 Build: 20230606.1841

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDE: Version: 00.09.08.1 Build: 0613.1936

	 - GenRate: v0.2.3 06/06/2023

	 - OEDevice: 20230324

### New Feature
- Passive
	 - None.

- Active
	 - None.

### Fixed Bugs
- Passive
	 - Fixed the boundary condition processing logic problem in the mode_selection:user_select method, and the logic after the fix was:

	 - Support setting boundary conditions in the mode_selection:user_select method, the default boundary condition is PEC, where the PML boundary condition parameter is the same as ‘FDE’.

	 - If the user specifies a boundary condition, use that condition for calculate mode, otherwise use PEC.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.3.0.2
Release Date: 2023/06/21
### Dependent Software
- Passive
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDTD_GPU: V0.81.2.1 build 0609.0839

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - EME: Version: 00.09.22.01 Build: 0618.1400

	 - ModeExpansion: 1.16.0.4 Build: 20230606.1841

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - GenRate: v0.2.3 06/06/2023

	 - OEDevice: 20230324

### New Feature
- Passive
	 - None.

- Active
	 - None.

### Fixed Bugs
- Passive
	 - When the relevant parameters of demodulation in the mode_selection:user_select method are not set, the default value is wrong. -> fast_EME.py

	 - ModeSource/FDTDPort/EMEPort/ModeExpansion does not have parameters such as n/number_of_trial_modes/bent_waveguide. -> fast_FDTD.py/fast_EME.py

	 - Some models report errors in the eme_propagate:facet_data method.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.3.0.1
Release Date: 2023/06/19
### Dependent Software
- Passive
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDTD_GPU: V0.81.1.1 build 0517.0828

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - EME: Version: 00.09.22.01 Build: 0618.1400

	 - ModeExpansion: 1.16.0.4 Build: 20230606.1841

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - GenRate: v0.2.3 06/06/2023

	 - OEDevice: 20230324

### New Feature
- Passive
	 - None.

- Active
	 - None.

### Fixed Bugs
- Passive
	 - The Source/Port setting is not overridden by the parameters related to demodulation in the mode_selection:user_select method. -> fast_EME.py

- Active
	 - Solve the problem that OEDevice does not support long paths through temporary folders.

### Unrealized/Planning Functions
- Passive
	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.3.0.0
Release Date: 2023/06/15
### Dependent Software
- Passive
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDTD_GPU: V0.81.1.1 build 0517.0828

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - EME: Version: 00.09.21.01 Build: 0614.1925

	 - ModeExpansion: 1.16.0.4 Build: 20230606.1841

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0614.1839

	 - FDTD_CPU: V1.17.1.1 build 0517.0828

	 - FDE: Version: 00.09.07.1 Build: 0613.0209

	 - GenRate: v0.2.3 06/06/2023

	 - OEDevice: 20230324

### New Feature
- Passive
	 - Modified the PML model and parameters for FDE.

	 - FDE/EMEPort supports Mode Removal function under PML boundary conditions. -> fast_FDE.py/fast_EME.py

	 - Add Periodic Structure function in EME. -> EME_Periodic_Structure.py

	 - StructureShow supports custom Border. -> maxoptics.toml

	 - Add simu[simu_name].show3d(show_with="local_gui") method calls LocalGUI. -> fast_FDE.py

	 - Add simulation log aggregation of passive file siblings. -> fast_FDE.py

- Active
	 - Use Solver to output absolute coordinates for result extraction.

	 - Updated some Linux operating system adaptations.

	 - OEDevice Solver is included by default and requires no additional installation.

### Fixed Bugs
- Passive
	 - passive file after SDK FDE simulation, white screen when opened with LocalGUI.

	 - The parameter limit of the PML boundary condition in FDE/EME is unreasonable.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.2.3.0
Release Date: 2023/05/31
### Dependent Software
- Passive
	 - meshgen: 1.1.0505.1842

	 - FDTD_CPU: V1.17.1.0 build 0517.0826

	 - FDTD_GPU: V0.81.0.0 build 0514.2151

	 - FDE: 00.09.03.1 Build: 0213.1440

	 - EME: 00.09.17.01 Build: 0525.0011

	 - ModeExpansion: 1.16.0.3 Build: 20230525.2010

	 - FarField: Version: 0.4.2 Build: 0510.1103

	 - Overlap: Version: 0.4.1 Build: 0518.1308

- Active
	 - meshgen: 1.1.0320.1930

	 - FDTD_CPU: V1.15.4.1 build 0414.2214

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1 12/16/2022

	 - OEDevice: 20230324

### New Feature
- Passive
	 - AnalyticalWaveguide type in Structure, supporting tilt_angle and location.

	 - GaussianSource supports ModeExpansion.

	 - StructureShow supports custom colors.

- Active
	 - Result export file format changes from json to csv.

	 - Support Schenk trap-assisted tunneling model for Si.

	 - Support Schenk and Hurkx band to band tunneling model for Ge.

	 - Optimize extraction of photo induced carrier generation rate.

### Fixed Bugs
- Passive
	 - FDTD extracts the ModeProfile coordinate value offset.

	 - SDK simulation results are automatically Remesh when LocalGUI is opened.

- Active
	 - Fix extraction of electric field intensity for electric monitor.

### Unrealized/Planning Functions
- Passive
	 - Periodic Group Definition function in EME.

	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - Setting the surface recombination velocity of Ge/Si.

### Remained Bugs
- Passive
	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

	 - The DividingLine of the structure in the echo echo has incorrect coordinates in the case of symmetric/antisymmetric boundaries, etc.

- Active
	 - None.

## V2.2.2.0
Release Date: 2023/04/28
### Dependent Software
- Passive
	 - meshgen: 1.1.0320.1930

	 - FDTD_CPU: V1.15.4.1 build 0414.2214

	 - FDTD_GPU: V0.80.2.1 build 0422.2215

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - EME: Version: 00.09.12.01 Build: 0228.1810

	 - ModeExpansion: 0.93.0.4 Build: 20230410.1606

- Active
	 - meshgen: 1.1.0320.1930

	 - FDTD_CPU: V1.15.4.1 build 0414.2214

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1 12/16/2022

	 - OEDevice: 20230324

### New Feature
- Passive
	 - Add PASSIVE_FDTD_GPU authorization limit.

	 - Structure export as GDSII file. -> Structure_Export_GDS.py

	 - Import the GDSII file and stretch it at Middle. -> Rect_Trapezoidal_Extend.py

	 - Structure adds the AnalyticalWaveguide type to support the equation formula. -> Analytical_Waveguide.py

	 - The extract function supports export mat and zbf format file. -> fast_FDE.py/fast_FDTD.py

- Active
	 - None.

### Fixed Bugs
- Passive
	 - FDE/FDTD simulation results are offset under the Symmetric/Anti-Symmetric boundary conditions.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - Periodic Group Definition function in EME.

	 - ModeSource/FDTDPort/EMEPort support UserImport.

- Active
	 - None.

### Remained Bugs
- Passive
	 - FDTD does not support ModeExpansion in the case of Gaussian source excitation.

	 - FDTD has problems with FarField calculations at the Symmetric/Anti-Symmetric boundary.

	 - When the installation path is too deep or the project file name is too long, the simulation fails due to the limit of the longest path to Windows (260 characters).

- Active
	 - None.

## V2.2.1.2
Release Date: 2023/04/14
### Dependent Software
- Passive
	 - meshgen: 1.1.0320.1930

	 - FDTD_CPU: V1.15.4.1 build 0414.2214

	 - FDTD_GPU: V0.80.1.1 build 0414.2224

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - EME: Version: 00.09.12.01 Build: 0228.1810

	 - ModeExpansion: 0.93.0.4 Build: 20230410.1606

- Active
	 - meshgen: 1.1.0320.1930

	 - FDTD_CPU: V1.15.4.1 build 0414.2214

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1 12/16/2022

	 - OEDevice: 20230324

### New Feature
- Passive
	 - Added the ability to specify the passive file path for simulation, preparing for third-party schedulers -> mo.sdk run.

	 - After generating passive by importing GDS, it supports automatic display of groupings in LocalGUI.

	 - In structure_show, view=True can directly evoke the GUI for modeling and viewing (simulation results do not support real-time synchronization at the moment).

- Active
	 - Support for GDS file import (Beta version).

	 - Support for adding electrical local mesh along a line.

### Fixed Bugs
- Passive
	 - None.

- Active
	 - None.

### Unrealized/Planning Functions
- Passive
	 - None.

- Active
	 - None.

### Remained Bugs
- Passive
	 - None.

- Active
	 - None.

## V2.2.1.0
Release Date: 2023/03/31
### Dependent Software
- Passive
	 - meshgen: 1.1.0320.1930

	 - FDTD: V1.15.2.1 build 0301.2202

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - EME: Version: 00.09.12.01 Build: 0228.1810

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.1.0320.1930

	 - FDTD: V1.15.2.1 build 0301.2202

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1

	 - OEDevice: 20230324

### New Feature
- Passive
	 - Add FarField calculation for PowerMonitor in FDTD. -> FDTD_Far_Field.py

	 - Add Symmetric/Anti-Symmetric boundary condition in FDTD.

	 - requirements.txt depends only need to set max_optics_sdk~=2.2.1.0.

- Active
	 - run_doping set geometry for doping preview.

	 - add_doping supports selected areas or specified material lists.

### Fixed Bugs
- Passive
	 - None.

- Active
	 - Supplement some of the note information.

	 - Results such as LPD are output slowly.

	 - run_index does not support LocalMesh.

### Unrealized/Planning Functions
- Passive
	 - None.

- Active
	 - None.

### Remained Bugs
- Passive
	 - None.

- Active
	 - None.

## V2.2.0.0
Release Date: 2023/03/15
### Dependent Software
- Passive
	 - meshgen: 1.1.0213.1427

	 - FDTD: V1.15.2.1 build 0301.2202

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - EME: Version: 00.09.12.01 Build: 0228.1810

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.1.0213.1427

	 - FDTD: V1.15.2.1 build 0301.2202

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1

	 - OEDevice: 20221220

### New Feature
- Passive
	 - Enable new authorization controls.

	 - Export the historical result file in Local mode. -> Extract_History_Results.py

	 - EME supports Custom Setting of Cell Group. -> EME_CellGroup_Custom_Setting.py

	 - run_index adds max_index/max_sigma parameter to filter the display results. -> Run_Index_Filter.py

- Active
	 - Enable new authorization controls.

	 - When importing DOP doping files, additional Gaussian doping is supported.

### Fixed Bugs
- Passive
	 - None.

- Active
	 - In some electrical simulation scenarios, the boundary file generation error caused the electrical simulation to fail. When the simulation area exceeds the structure boundary, the probability of error will increase.

	 - The code comments of some new functions are not completed, such as add_doping, etc.

### Unrealized/Planning Functions
- Passive
	 - None.

- Active
	 - None.

### Remained Bugs
- Passive
	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> V2.2.1.0 by 2023/3/31

	 - In the FDTD_Oblique_Input.py, the material boundary condition and starting position is incorrect in the inclined incidence ModeSource mode calculation result. -> V2.2.1.0 by 2023/3/31

	 - ModeExpansion ‘s calculation results are labeled incorrectly. -> V2.2.1.0 by 2023/3/31

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - delete waveform in fast_FDTD -> Tianchi V200

	 - run_doping in fast_FDE.py -> Tianchi V200

	 - The structure model supports user custom function model import. -> Tianchi V200

	 - run_index figure qty 3pcs-> 1pcs -> Tianchi V200

- Active
	 - None.

## V2.1.1.0
Release Date: 2023/02/28
### Dependent Software
- Passive
	 - meshgen: 1.1.0213.1427

	 - FDTD: V1.15.1.1 build 0220.0954

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - EME: Version: 00.09.12.01 Build: 0228.1810

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.1.0213.1427

	 - FDTD: V1.15.0.1 build 0219.2157

	 - FDE: Version: 00.09.03.1 Build: 0213.1440

	 - GenRate: V0.2.1

	 - OEDevice: 20221220

### New Feature
- Passive
	 - Adjust FDTD ModeExpansion as a submodule of PowerMonitor, which can inherit the geometric parameters of PowerMonitor in SDK/LocalGUI/CloudGUI simulation process. -> fast_FDTD.py

	 - Support Overlap/Beam calculation. -> FDE_Beam_Overlap.py

- Active
	 - Support for selecting a specific material or region when adding doping. -> MOD00_doping_import_DOP.py

	 - Doping import supports pure doping data files, and at this time also supports setting uniform doping in SDK. -> MOD00_doping_import_DOP.py

### Fixed Bugs
- Passive
	 - When the simulation results of SDK are run and viewed in LocalGUI, an error is reported when viewing the results of ModeSource in FDTD, the results in FDE Parameter Sweep are not imported, and the intensity graph of SMatrix in EME Parameter Sweep cannot view.

	 - The default value of stop_wavelength in FDE Frequency Sweep is smaller than start_wavelength -> scan according to the interval between start_wavelength and stop_wavelength, support stop_wavelength to be smaller than start_wavelength, see fast_FDE.py.

- Active
	 - The current results output by the same script are positive and negative.

	 - In Modulator, only max_index is supported, and near_n is not supported.

	 - Only the mesh_order of the material is effective in electrical simulation, and the mesh_order of the structure is not effective.

	 - When setting the frequency scan for small signals, the literal meaning of the num_frequency_points_per_dec field does not match the actual meaning in the SDK. Change the field to log_num_frequency_points to indicate the total number of frequency scan points including the start frequency and stop frequency.

	 - SDK electrical Solver version check fails.

### Unrealized/Planning Functions
- Passive
	 - SDK script supports the extraction of historical simulation results. -> V2.2.1.0 by 2023/3/31

- Active
	 - None

### Remained Bugs
- Passive
	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> V2.2.0.0 by 2023/3/15

	 - In the FDTD_Oblique_Input.py, the material boundary condition and starting position is incorrect in the inclined incidence ModeSource mode calculation result. -> V2.2.0.0 by 2023/3/15

	 - ModeExpansion ‘s calculation results are labeled incorrectly. -> V2.2.0.0 by 2023/3/15

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - delete waveform in fast_FDTD -> Tianchi V200

	 - run_doping in fast_FDE.py -> Tianchi V200

	 - The structure model supports user custom function model import. -> Tianchi V200

	 - run_index figure qty 3pcs-> 1pcs -> Tianchi V200

- Active
	 - In some electrical simulation scenarios, the boundary file generation error caused the electrical simulation to fail. When the simulation area exceeds the structure boundary, the probability of error will increase.

	 - The code comments of some new functions are not completed, such as add_doping, etc.

## V2.1.0.0
Release Date: 2023/02/10
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.2 build 0104.2052

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221220

### New Feature
- Passive
	 - Provide FDTD Parameter Sweep/EME Parameter Sweep/FDE Parameter Sweep -> DC_FDTD_ParameterSweep.py/wg_FDE_ParameterSweep.py/DC_EME_ParameterSweep.py

	 - The simulation result of SDK can be viewed in LocalGUI(FDTD Parameter Sweep not support)

- Active
	 - Input parameter of GFile changes from folder path to the absolute path of the file.

	 - [46] Modulator Analysis supports users to adjust the voltage interpolation step.

	 - Add error reporting for some parameters when no setup.

	 - [42] OEDevice license support remote desktop.

### Fixed Bugs
- Passive
	 - None

- Active
	 - [45] The wavelength is 1550 by default in some scenarios.

	 - Material index of refraction not interpolated by wavelength.

	 - OEDevice doesn’t support cross section other than 2d_x_normal.

	 - When the electrical section is set at certain positions, the bnd file generation error occurs due to floating-point errors and the electrical simulation is stuck.

	 - norm_length doesn’t support floating numbers.

### Unrealized/Planning Functions
- Passive
	 - Adjust FDTD ModeExpansion as a submodule of PowerMonitor, which can inherit the geometric parameters of PowerMonitor in SDK/LocalGUI/CloudGUI simulation process. -> V2.1.0.1 by 2023/2/28

- Active
	 - None

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - In the FDTD_Oblique_Input.py, the material boundary condition and starting position is incorrect in the inclined incidence ModeSource mode calculation result. -> V2.1.0.1 by 2023/2/28

	 - ModeExpansion ‘s calculation results are labeled incorrectly. -> V2.1.0.1 by 2023/2/28

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - delete waveform in fast_FDTD -> Tianchi V200

	 - run_doping in fast_FDE.py -> Tianchi V200

	 - The structure model supports user custom function model import. -> Tianchi V200

	 - run_index figure qty 3pcs-> 1pcs -> Tianchi V200

- Active
	 - The output current results sometimes have redundant negative signs. -> V2.1.0.1 by 2023/2/28

	 - The Mode Calculate of Modulator just support max_index, not support near_n -> V2.1.0.1 by 2023/2/28

## V2.0.1.0
Release Date: 2023/01/12
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.2 build 0104.2052

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221102

### New Feature
- Passive
	 - None

- Active
	 - None

### Fixed Bugs
- Passive
	 - mesh_factor parameter did not add input parameter range check, modified to [1.05,1.6]. -> fast_FDE.py

	 - Fixed FDE FarField in the cloud mode, the parameter settings were displayed incorrectly. -> FDE_Far_Field.py

	 - Modify fast_fdtd.gds, put ModeSource at the straight waveguide. -> fast_FDTD.py

- Active
	 - Fix the problem that active emulation occupies passive authorization.

	 - Active doping file import run result extraction error.

### Unrealized/Planning Functions
- Passive
	 - AIO features include FDTD Parameter Sweep/FDE Parameter Sweep/EME Parameter Sweep-> V2.1.0.0 by 2023/2/10

	 - The simulation result of AIO can be viewed in LocalGUI-> V2.1.0.0 by 2023/2/10

	 - The frequency port setting in the FDTD Port inherits from Global Monitor, which does not support parameter setting alone. -> V2.1.0.0 by 2023/2/10

	 - Modify FDTD ModeExpansion as PowerMonitor sub-attribute and participate in AIO/LocalGUI/CloudGUI simulation process. -> by 2023/2/28

- Active
	 - None

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - In the FDTD_Oblique_Input.py, the material boundary condition is incorrect in the inclined incidence ModeSource mode calculation result. -> V2.1.0.0 by 2023/2/10

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - delete waveform in fast_FDTD -> Tianchi V200

	 - run_doping in fast_FDE.py -> Tianchi V200

	 - The structure model supports user custom function model import. -> Tianchi V200

	 - run_index figure qty 3pcs-> 1pcs -> Tianchi V200

- Active
	 - The structure edge of the carrier concentration intensity exists sawtooth-shaped edges in the result image. -> by 2023/2/28

	 - The output current results sometimes have redundant negative signs. -> by 2023/2/28

## V2.0.0.1
Release Date: 2023/01/10
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.2 build 0104.2052

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221102

### New Feature
- Passive
	 - FDE Far Field -> FDE_Far_Field.py

	 - Adds material boundary condition into FDTD ModeSource/FDTDPort/ModeExpansion and EME Port/Cell mode calculation result. -> fast_FDTD.py/FDTD_Matrix_Sweep.py/fast_EME.py

	 - Add export_c parameter to control σ output result of run_index function . -> fast_FDTD.py

	 - Modifies the EME Port/EME Cell legends’ description in the structure_show. -> fast_EME.py

- Active
	 - None

### Fixed Bugs
- Passive
	 - The run_index result is incorrect when setting GDS as the bottom to perform trapezoidal extend. (The trapezoidal section imported by GDS currently only supports the real trapezoidal structure) -> LN_anisotropy_BENT_FDTD_GDS.py

	 - The mode calculation result is incorrect, when selecting near_n in the FDE. -> fast_FDE.py

	 - After running mode source in the FDTD, finding that the neff/profile shown in the source-preview-mode is different with neff/profile shown in the source mode.-> fast_FDTD.py

- Active
	 - The title name of Doping Concentration[cm^-3] has been changed to Net Doping[cm^-3] in the run_doping plot.

### Unrealized/Planning Functions
- Passive
	 - AIO features include FDTD Parameter Sweep/FDE Parameter Sweep/EME Parameter Sweep-> by 2023/2/10

	 - The simulation result of AIO can be viewed in LocalGUI-> by 2023/2/10

	 - The frequency port setting in the FDTD Port inherits from Global Monitor, which does not support parameter setting alone. -> by 2023/2/10

	 - Modify FDTD ModeExpansion as PowerMonitor sub-attribute and participate in AIO/LocalGUI/CloudGUI simulation process. -> by 2023/2/28

- Active
	 - None

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - In the FDTD_Oblique_Input.py, the material boundary condition is incorrect in the inclined incidence ModeSource mode calculation result. -> by 2023/2/10

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - delete waveform in fast_FDTD -> Tianchi V200

	 - run_doping in fast_FDE.py -> Tianchi V200

	 - The structure model supports user custom function model import. -> Tianchi V200

	 - run_index figure qty 3pcs-> 1pcs -> Tianchi V200

- Active
	 - The structure edge of the carrier concentration intensity exists sawtooth-shaped edges in the result image. -> by 2023/2/28

## V2.0.0.0
Release Date: 2023/01/05
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.2 build 0104.2052

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221102

### New Feature
- Passive
	 - None

- Active
	 - Support plot net doping

	 - Support plot doping of selected materials

	 - Optimizing plot of doping

	 - Adjust the authorization method and cancel the old authorization and local configuration file

### Fixed Bugs
- Passive
	 - When ModeSource run fde only , the mesh is 3D Mesh but not 2D Mesh -> fast_FDTD.py

	 - The subscript of EME SMatrix does not use determinant -> fast_EME.py

	 - The source mode profile of FDE Only is different from source mode profile of FDTD run -> fast_FDTD.py

	 - after EME.run(), need one command to extract index for p0,p1, c0, c1, … cxx. also to extract profile, modes -> fast_EME.py

	 - When the comment out code is recover，the script is not run -> fast_FDE.py

	 - When the background_material of OBoundary is not set to mt or public material, the error message is unclear in meaning -> fast_FDE.py

	 - In Cloud run_mode, the plot axis position of FDE result in ModeSource/FDTDPort and EMEPort/EMECell is wrong -> fast_FDTD.py/fast_EME.py

	 - The σy output data of run_index in Rect_Trapezoidal_Extend.py script is wrong -> Rect_Trapezoidal_Extend.py

	 - ModeExpansion’s mode_list parameter and the mode_index parameter of ModeSource/FDTDPort/EMEPort begin with 1 change to begin with0 -> fast_FDTD.py/fast_EME.py

	 - The number of run_indexmesh setting is fixed( 1000*1000), does not inherit from simulation mesh setting. -> fast_FDTD.py

- Active
	 - There is too much messages printed out of result options in running log.

	 - The scale and title font of the axis is small in the result image.

### Unrealized/Planning Functions
- Active
	 - Supports run_doping method. -> V2.0.0.2 by 2023/2/10

- Active
	 - Modulator Analysis supports optical simulation in designated mode. -> V2.0.0.2 by 2023/2/10

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> Tianchi V200

	 - The frequency point setting of FDTD Port inherits from Gloabal Monitor, can not be set individually. -> V2.0.0.2 by 2023/2/10

- Active
	 - The structure edge of the carrier concentration intensity exists sawtooth-shaped edges in the result image. -> V2.0.0.2 by 2023/2/10

## V1.9.1.1
Release Date: 2022/12/27
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.1 build 1106.1945

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221102

### New Feature
- Passive
	 - supports script run in cloud mode -> fast_FDE.py/fast_FDTD.py/fast_EME.py

- Active
	 - supports run_index(The type of Terraceneeds changing into Pyramid)

### Fixed Bugs
- Passive
	 - The order does not start from 0 in the FDE result. -> fast_FDE.py

	 - The background material of EME failed to deliver correctly. -> fast_EME.py

	 - Script reports an error in Cloud mode : ERROR: Connection Failed -> fast_FDE.py

	 - The project gets from Cloud finding that, material does not display in the GUI object tree. -> fast_FDE.py

	 - The project gets from Cloud finding that, the color of material does not show in the GUI. -> fast_FDE.py

	 - The background material of FDE displays incorrectly in Cloud mode. -> fast_FDE.py

	 - FDEresult check reports an error, in Cloud mode. : ERROR: Cannot load backend TkAgg -> fast_FDE.py

	 - The result of run_index export reports an error, in Cloud mode. -> fast_FDTD.py

	 - The coordinate displays incorrectly in the result image of PowerMonitor, in Cloudmode. -> fast_FDTD.py

- Active
	 - During electrical stimulation, the name of the MY’s temp file can not be changed, causing electrical files to occur conflicts.

	 - The parameters of norm and scale do not work in run_doping function.

	 - The result image of small signal capacitance is incorrect.

	 - Unit is lost in the generation rate result image.

	 - Parts of the results’ values extract incorrectly from PD voltage scanning.

	 - The show3dmethod in PD, informs that materialID reports an error.

	 - The linear image of carrier can not match with golden aims, the reason is that the highest interpolation of chager_monitor , while lower of its precision.

	 - Run run_doping directly, while no doping is imported, the electric simulation will be executed.

### Unrealized/Planning Functions
- Passive
	 - Supports run_doping method. -> V1.9.1.3 by 2023/1/10

- Active
	 - Modulator Analysis supports optical simulation in designated mode. -> V1.9.1.2 by 2023/1/3

	 - Supports DC static capacitance calculation. -> V1.9.1.2 by 2023/1/3

	 - The authorized integration of MY needs to be verified -> V1.9.1.2 by 2023/1/3

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The start parameters of mode_listof ModeExpansion andmode_index of ModeSource/FDTDPort/EMEPort are 1 -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - The inner/external box of the run_indexsimulation boundary can not be shown. -> TBD

	 - The number of run_indexmesh setting is fixed( 1000*1000), does not inherit from simulation mesh setting.-> WebAPP(V1.4.0.0)+AIO(V2.0.0.0) by 2022/12/31

	 - The Release Log and Install Doc are not fully translated into English. The format of the parameter list in handbook is not standardized, and the Chinese translation is incomplete. -> V1.9.1.2 by 2023/1/3

	 - The frequency point setting of FDTD Port inherits from Gloabal Monitor, can not be set individually. -> V1.9.1.2 by 2023/1/3

	 - The coordinate is incorrect for the mode calculation of FDTD’s source/port and EME’s port/cell in cloud mode. -> WebAPP(V1.4.0.1) by 2022/12/31

	 - The value of mode index of ModeExpansion in FDTDdoes not start from 0-> V1.9.1.2 by 2023/1/3

	 - In the Rect_Trapezoidal_Extend.py script, the output data of run_index is σy, which is incorrect. -> V1.9.1. by 2023/1/3

- Active
	 - The structure edge of the carrier concentration intensity exists sawtooth-shaped edges in the result image. -> V1.9.1.3 by 2023/1/10

	 - There is too much messages printed out of result options in running log. -> V1.9.1.2 by 2023/1/3

	 - The scale and title font of the axis is small in the result image. -> V1.9.1.2 by 2023/1/3

	 - add_emesh lacks of notes -> V1.9.1.2 by 2023/1/3

## V1.9.1.0
Release Date: 2022/12/19 is
### Dependent Software
- Passive
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.94.0.1 build 1124.0823

	 - FDE: Version: 00.09.00.1 Build: 1207.1935

	 - EME: Version: 00.09.08.01 Build: 1130.1718

	 - ModeExpansion: V0.82.0.0.2

- Active
	 - meshgen: 1.0.1206.1835

	 - FDTD: V0.93.0.1 build 1106.1945

	 - FDE: Version: 00.08.11.1 Build: 1103.1658

	 - GenRate: V0.2.1

	 - OEDevice: 20221102

### New Feature
- Passive
	 - Modifies the default logic of structure material, and supports simulation even mt without Air material. -> fast_FDE.py

	 - The type of Structure supports case sensitivity -> fast_FDE.py

	 - Supports trapezoidal extending via GDS importing, the parameters include tilt_angle and tilt_location, tilt_angle, limited from 0 to 180 degrees, which means the upward/downward extending trapezoidal tilt angle. The tilt_location means taking the GDS as bottom/top trapezoidal extending, which option is bottom/top. -> Rect_Trapezoidal_Extend.py

	 - Supports wavelength_offset parameter, 0.0001μm by default in FDE/EME to calculate ng . -> fast_FDE.py/fast_EME.py

- Active
	 - Supports simulation in All-In-One SDK template manner.

	 - Supports doping checking method.

	 - Supports a fixed display of the material color and the show3dfunction has been optimized.

	 - Supports transient simulation.

	 - Supports custom naming of electrode.

	 - Supports high field mobility model of material.

	 - Supports customized small signal frequency single-point scanning.

	 - Supports adding electrical monitors.

	 - Fixed Bug
	 - None

### Unrealized/Planning Functions
- Passive
	 - None

- Active
	 - Small-signal frequency multi-point scanning -> V2.0.0.0 by 2022/12/30

	 - Modulator Analysis supports optical simulation in designated mode. -> V2.0.0.0 by 2022/12/31

	 - Supports electrical monitors such asband_monitor/electric_monitor and so on. -> V2.0.0.0 by 2022/12/31

	 - DC static capacitance calculation -> V2.0.0.0 by 2022/12/31

	 - The authorized integration of MY needs to be verified -> V2.0.0.0 by 2022/12/31

### Remained Bugs
- Passive
	 - Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

	 - The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

	 - The start parameters of mode_listof ModeExpansion andmode_index of ModeSource/FDTDPort/EMEPort are 1 -> The logic keeps with Cloud, to be fixed.

	 - The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

	 - The inner/ external box of the run_indexsimulation boundary can not be shown. -> TBD

	 - The scripts reports error, in the Cloud mode. -> WebAPP(V1.4.0.0)+AIO(V2.0.0.0) by 2022/12/31

	 - The number of run_indexmesh setting is fixed( 1000*1000), does not inherit from simulation mesh setting.-> WebAPP(V1.4.0.0)+AIO(V2.0.0.0) by 2022/12/31

	 - The Release Log and Install Doc are not fully translated into English. The format of the parameter list in handbook is not standardized, and the Chinese translation is incomplete. -> V1.9.1.2 by 2023/1/3

	 - The frequency point setting of FDTD Port inherits from Gloabal Monitor, can not be set individually. -> V1.9.1.2 by 2023/1/3

- Active
	 - The structure edge of the carrier concentration intensity exists sawtooth-shaped edges in the result image. -> V2.0.0.0 by 2022/12/31

	 - There is no unit in the generation rate result image. -> V2.0.0.0 by 2022/12/31

	 - The current cannot be read according to the binded electrode, resulting in current positive or negative from time to time -> V2.0.0.0 by 2022/12/31

	 - The resistance calculation results are positive or negative from time to time. -> V2.0.0.0 by 2022/12/31

	 - The effective refractive index precision of Modulator does not meet requirements. -> V1.9.1.1 by 2022/12/26

## V1.9.0.4
Release Date: 2022/12/13
### Dependent Software
- meshgen: 1.0.1206.1835

- FDTD: V0.94.0.1 build 1124.0823

- FDE: Version: 00.09.00.1 Build: 1207.1935

- EME: Version: 00.09.08.01 Build: 1130.1718

- ModeExpansion: V0.82.0.0.2

### New Feature
- Modifies the data format of DataFrame calling from FDE: order/TEratio/neff_real/neff_imag/ng_real/ng_imag/wavelength_nm/loss_dBpcm -> fast_FDE.py

- Removes monitor_type parameter in run_index and takes span==0 as auto judgement logic -> fast_FDE.py

- Modifies geometry assignment method:center/span, center/min, min/max, center/max, span/min and span/maxsix combinations in total.(When there are multiple possible combinations of parameters, the priority is: min/max, min/sfindan , max/span, min/center, max/center, center/span) -> fast_FDE.py

- Modifies the Structure ‘s ’background_material setting logic, which public materials and materials except mt are forbidden to be input. -> fast_FDE.py

- Modifies the OBoundary logic, changes the name of general into general_pml, and moves pml_same_settings into general_pml. -> fast_FDE.py

- The show3dfunction of simu has been optimized, which supports 3D displayed on the webside. (You need to close the webpage and press Enter on the command line to continue the simulation) -> fast_FDE.py

- Modifies material color ofstructure_show, which supports auto RGB function calculation based on index. -> fast_FDTD.py

- Removes the Frequency Sweep in the fast_FDE.pyscript. -> fast_FDE.py

- Adds maxoptics_OEDevice_local_sdk into whl installation package for matching with Active SDK.(Active simulation is not available temporarily)-> wheels/requirements.txt

### Fixed Bugs
- Fixed, coordinate offset of mode calculation result caused by incorrect transmit parameters, when setting PML of FDE. -> fast_FDE.py

- Fixed the PML Region does not show in the Structure_show. -> fast_FDTD.py

- Fixed, simulation result incorrectly caused by wrong transmit parameters from anisotropy materials -> LN(anisotropy)_EOM.py/LN(anisotropy)_EME_MMI.py/LN(anisotropy)_BENT_FDTD.py

- Removed useless print messages for modifying in the LN(anisotropy)_EOM.py script. -> LN(anisotropy)_EOM.py

- Fixed, FDTD would repeat simulation for each Port in the FDTD Matrix Sweep. -> FDTD_Matrix_Sweep.py

- Fixed, FDTDPort does not show in the Structure_show. -> FDTD_Matrix_Sweep.py

- Fixed, DataFrame calling from FDE reports an error, caused by incorrectly complex numbers of ng processing. -> FDE_dispersion.py

- Fixed, when sets y to 0 in the Structure of GratingCoupler , runs run_index , it will report an error. -> GratingCoupler.py

- The output project files of structure_show are placed into simulations file, and the output files of run_index are placed into main simulation file. -> FDTD_HalfRing.py

### Unrealized/Planning Functions
- Supports trapezoidal extending via GDS importing. -> V1.9.1.0 by 2022/12/16

### Remained Bugs
- Thestart_frequency of FDE Frequency Sweep does not work -> The FDE Frequency Sweep function is hidden temporarily, to be fixed.

- The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength . -> The logic keeps with Cloud, to be fixed.

- The start parameters of mode_listof ModeExpansion andmode_index of ModeSource/FDTDPort/EMEPort are 1 -> The logic keeps with Cloud, to be fixed.

- The parameters of Boundary and PMLlack of default values in the Oboundary -> The different parameter settings of FDE’s PML can not be merged with FDTD’s.

- The inner/external box of the run_indexsimulation boundary can not be shown. -> TBD

- Script running reports error in Cloud mode. -> WebAPP(V1.4.0.0)+AIO(V2.0.0.0) by 2022/12/31

- The number of run_indexmesh setting is fixed( 1000*1000), does not inherit from simulation mesh setting.-> WebAPP(V1.4.0.0)+AIO(V2.0.0.0) by 2022/12/31

- The Release Log and Install Doc are not fully translated into English. The format of the parameter list in handbook is not standardized, and the Chinese translation is incomplete-> V1.9.1.1 by 2022/12/23

- The frequency point setting of FDTD Port inherits from Gloabal Monitor, can not be set individually -> V1.9.1.1 by 2022/12/23

- The Type of Structure.add_geometry does not type in lowercase. -> V1.9.1.0 by 2022/12/16

- FDE does not support ng calculation for incorrect ng parameter transmit. -> V1.9.1.0 by 2022/12/16

- The script reports an error when using the background_material default value of Structure and there is no Air material in the mt. -> V1.9.1.0 by 2022/12/16

## V1.9.0.3
Release Date: 2022/12/06
### Dependent Software
- meshgen: 1.0.1110.1500

- FDTD: V0.94.0.1 build 1124.0823

- FDE: Version: 00.08.13.1 Build: 1128.1845

- EME: Version: 00.09.08.01 Build: 1130.1718

- ModeExpansion: V0.82.0.0.2

### New Feature
- Moves run_index method from Structure to Simulation.

- Removes local sdk and whale version information output, only ALL-In-One version information is left.

- Adds the default values of plot_x and plot_y in the intensity result image.

- Moves the position of the legend to the upper right in the Line image.

- Adds a new file named precision with FDTD_HalfRing/EME_SSC/EME_PSR/dc_dummy_1310 scripts.

- Adds EME_PSR_MMI script in the fast_demo to verify the correctness of EME.

- Adds FDTD_Matrix_Sweep script in the fast_demo as an example of the FDTD Matrix Sweep function.

- Adds show3d function in the Simulation.

### Fixed Bugs
- Fixed,propagation_sweep and wavelength_sweep parameters of EME are processed incorrectly.

- Modified the inappropriate name of material_name in the script.

- Fixed, the detailed_dispersion_calculation does not work for FDE Frequency Sweep in Cloud mode.

- The simulation boundary is lost in thestructure_show.

- The parameter transmit is incorrect in theglobal_mesh_uniform_grid of FDE.

### Unrealized/Planning Functions
- Supports 3DStructure_show . (The 3d Structure_show function has been developed, and plan to release on December 13th of V1.9.0.4)

- Supports trapezoidal extending via GDS importing (The function is in progress, and plan to release on December 20th of V 1.9.0.4 )

- FDTD/FDE/EME Parameter Sweep (TBD)

### Remained Bugs
- Thestart_frequency of FDE Frequency Sweep does not work

- The default value of stop_wavelength in FDE Frequency Sweep is less than start_wavelength

- The Type of Structure.add_geometry does not type in lowercase

- There are no default values of PML and Boundary in the Oboundary.

- Currently, only supports three types for add_geometry with center/span, center/min and min/max.

- The output project files routes of run_index and structure_show are incorrect in the Local mode.

- The name of FDE output file has been modified but Cloud Server does not synchronize with.

- run_index reports an error in Cloud mode, which will be planned to fix after CloudServer updating. -> by 2022/12/31

- Therun_index does not support the inner/external simulation boundary box displayed.

- The column name in the DataFrame returned by the extract method is inappropriate.

- The number of run_indexmesh setting is fixed( 1000*1000), does not inherit from the simulation mesh setting.

- The frequency point setting of FDTD Port inherits from Gloabal Monitor, can not be set individually.

- FDTD simulation will run double times for each port of FDTD Matrix Sweep.

- The useless print messages of LN_EOM in FDE script should be removed.

- The Release Log and Install Doc are not fully translated into English. The format of the parameter list in handbook is not standardized, and the Chinese translation is incomplete.

- The usage logic of project_name and simu_name is in chaos in the Cloud mode.

- The dispersion material does not work, which is caused by theng parameter transmitting incorrectly.

## V1.9.0.2
Release Date: 2022/11/28
### Dependent Software
- meshgen: 1.0.1110.1500

- FDTD: V0.94.0.1 build 1124.0823

- FDE: Version: 00.08.13.1 Build: 1128.1845

- EME: Version: 00.09.07.01 Build: 1128.1830

- ModeExpansion: V0.82.0.0.2

### New Feature
- The transmit parameters of pj.Structure with mesh_type/mesh_factor/background_material have been modified as elective options.

- The maximum_mesh_step_settings name has been changed to global_mesh_uniform_grid.

- Adds FDE/EME/FDTD related results, which return parameters are DataFrame.

- The show parameters will be canceled, when setting target="table" for calculate_modes method, in the fast_FDE.

- Modified transmit parameters of target default value as intensity with eme_propagate:port_mode_info/eme_propagate:port_overlap/eme_propagate:port_mesh_structure /eme_propagate:cell_mode_info/eme_propagate:cell_p_matrix/eme_propagate:cell_overlap/eme_propagate:cell_s/eme_propagate:internal_s method.

- Modified the mode transmit parameter default value as 0 with eme_propagate:cell_mode_info method.

- Modified frequency_analysis method in the FDE . And its attribute includes "neff"/"loss"/"group_index"/"polarization".

- Modified the propagation_sweep in the EME and changed the calculation logic of propagation_sweep as an inner calculation in Slover.

### Fixed Bugs
- An error will occur, when Jupyter imports maxoptics_sdk.all.

- IF x_min is not set in the Simulation, an error will occur, even the simu region of OBoundary has been set in the EME.

- The script reports an error, because uses the default list directly without adding necessary values in the EME_PSR.py program.

- Fixed, set the offset of the port default value to 0 in the EME.

- Fixed, set the detailed_dispersion_calculation default value to False in the FDE.

### Unrealized/Planning Functions
- 3D structure_show.

- Supports trapezoidal extending via GDS importing

- FDTD/FDE/EME Parameter Sweep

### Remained Bugs
- The start_frequency function in the FDE Frequency Sweep does not work yet.

- The detailed_dispersion_calculation in the FDE Frequency Sweep does not work in the Cloud mode.

- The default value of stop_frequency is less than start_wavelength in the FDE Frequency Sweep.

- The Type of Structure.add_geometry does not type in lowercase

- There are no default values of PML and Boundary in the Oboundary.

- Currently, only supports three types for add_geometry with center/span, center/min and min/max.

- The usage logic of name in the Simulation and name in the Project are confused, both in the Local and Cloud modes.

- The name of the FDE output file has been modified but Cloud Server does not synchronize with it .

## V1.9.0.1
Release Date: 2022/11/22
### Dependent Software
- meshgen: 1.0.1110.1500

- FDTD: Version: 0.93.0.1 Build 1106.1945

- FDE: Version: 00.08.11.1 Build: 1103.1658

- EME: Version: 00.09.05.01 Build: 1009.2025

- ModeExpansion: V0.82.0.0.2

### New Feature
- Supports hover function with input parameters, whether the property parameter is checked, and the property default value .

- The parameter default values have been updated.

- Modified the setting of PML, which only permitted setting in the OBoundary.

- Modified the Mesh related settings, which only permitted setting in the Structure.

- The running method of location parameter setting is moved into the project.

- Notes: Compared with AIO V1.9.0.0 features, the V1.9.0.1 has added five new features.

### Fixed Bugs
- Fixed, Jupyrer notebook failed to import maxoptics_sdk.all .

- Fixed, the maximum_mesh_step_settings in the FDE does not transmit correctly.

- Fixed, the pml_alpha setting in the OBoundary in the FDTD does not transmit to FDTD the Solver.json interface.

- Fixed, the GlobalMonitor value is not adopted, when sets the override_global_options of PowerMonitor to False, in the FDTD.

- The mesh_type reports an error, when sets mesh_type of FDTD to staircase and calculates modes alone.

- IF x_min is not set in the Simulation, an error will occur, even the simu region of OBoundary has been set in the EME.

- Fixed, EME_PSR.py reports an error running in the Cloud mode.

- Add a timestamp in the script to create a project to prevent the project and results from being overwritten.

- The mesh.json y and z values are incorrect in the FDE, after setting the OBoundary.

- Fixed, the n of search in the FDE does not transmit correctly into solver.json.

- Fixed, the mesh_type reports an error, when sets mesh_type of FDTD to staircase.

- The default values in the fast_demo have been commented out or removed.

- The anisotropy material parameter transmit is incorrect.

- 3D model structure parameter transmit is incorrect.

### Unrealized/Planning Functions
- FDTD S-Matrix

- FDE/EME/FDTD parameter sweep

- Take the method, which AIO reading from output files of results in the json format，to encapsulate.

- Data reading from json files, and public encapsulation method with searching.

- SDK material database does not synchronize with Cloud ‘s material database with Standard, User and Project .

### Remained Bugs
- The structure_show does not work, when there has a pyramid or ArcWaveguide3D structure in the modeling script.

- The anisotropy results of EME and FDTD are incorrect casing by the worng parameter transmit of LN materials.

- The FDTD S-Matrix feature has not been verified yet.

- The structure boundary displayed in the calculation mode result image is incorrect.

- There has a slight difference of V1.9.0.1 fast_FDTD results both in the local and cloud mode with V1.3.9’s results got in local mode

- The title should be EME in the EME’s monitor result image.

- Logic adjustment of back-end parameters to front-end page.

- The types of boundary conditions that can be used in FDE/EME and FDTD are different. For example, FDE/EME supports symmetric and antisymmetric boundary conditions, while FDTD does not. At present, no comprehensive verification has been done

- The boundary conditions can be set in different ways between FDE/EME and FDTD. For example, there is only one PML parameter for FDE/EME, while FDTD supports setting x/y/z’s PML parameters separately.

- Due to the support of Python 3.8 for TypingCheck is not good, the implemented spelling check cannot continue to be supported, and will be closed in the next version. Currently， the user cannot know the parameter assignment error in the IDE, and can only view the output in the command line window to check the error.

- The display of similar materials of the index is not obvious, due to the RGB color of structure_show in the user’s setting material being set according to the index’s real and imaginary auto RGB assignment method.

- Currently, the run_ index method is based on the 2D mesh created by FDE. When the script is run in cloud mode and viewed in cloud server, finding that there has no results for the index monitor in the result tree. (FDE does not support IndexMonitor in the cloud server)

- The method of inputting wavelength_min and wavelength_max into waveform and monitor and inputting frequency method has not been verified.

- The waist_radius/distance_from_waist settings in the gaussian source do not synchronize with beam_radius/divergence_angle settings.

- When sets x_min>x_span in the geometry, it will report “x_span<0”.

- When sets run_mode to None in the project, the program does not have any error prompt.

- When adds several waveforms in the FDTD, and selects one of mode source to calculate mode,the program will report an error.

- Set the frequency_profile of ModeExpansion in the FDTD finding that the result value is got from the Global monitor.

- EME_PSR.py reports an error:”in get_source_start_stop spatial = solver_json[ports][self.monitor_index][spatial] IndexError: list index out of range”

- The simulation will fail if there exists space in the project_name.

- When getting calculation modes results of cells in the EME, the program will report an error.

- FDTD runs in cloud mode, reporting an error.

- When set mesh type is uniform in the FDTD, it will report the inputting parameter error.

- The Release Log and Install Doc have not been translated into English completely.

## V1.9.0.0
Release Date: 2022/11/15
### Dependent Software
- meshgen: 1.0.1110.1500

- FDTD: Version: 0.93.0.1 Build 1106.1945

- FDE: Version: 00.08.11.1 Build: 1103.1658

- EME: Version: 00.09.05.01 Build: 1009.2025

- ModeExpansion: V0.82.0.0.2

### New Feature
- Supports FDE Frequency Sweep;

- Supports EME Wavelength Sweep;

- Supports FDTD Gaussian Source;

- Supports FDTD Oblique Input ;

- Supports full type structure modeling .

- Notes: Compared with MOL V1.3.9 features, the V1.9.0.0 has added five new features.

### Fixed Bugs
- fast_FDE.py
- Fixed, there are a lot of useless {} that have been output, in the cloud mode.

- Fixed, there are a lot of 1000010000100001 have been output, both in the local and cloud modes.

- Fixed, the json_body has been output in create_material method, in the cloud mode.

- fast_FDTD.py
- The origin coordinates of monitor are incorrect.

- The ModeExpansion result reports an error.

- There is no background material in the mesh.mat

- Adds an ME into Monitor in the mesh.json.

- 11 frequency points have been set in total in the GolbalMonitor, but only 5 of them exist in the Cloud.

- The Region of PML in the structure_show is incorrect.

- The mode_info of the source’s vertical axis is incorrect in the cloud mode.

- The vertical axis coordinates of the E field image of power monitor are incorrect, in the cloud mode.

- When in the local mode, it will report an error：TypeError:”passive_fdtd_mode_source_mode_info_chart() takes 5 positional arguments but 6 were given”

- The horizontal and vertical axes of CSV derived from ModeSource’s independent mode calculation are not absolute coordinate values, in the local mode.

- fast_EME.py
- The Cell’s boundary does not show in the structure_show.

- The port position is incorrect in the structure_show.(The x position of port for solver.json in the EME is incorrect.)

- The MeshStructure is incorrect in the independent mode calculation results.

- The independent mode calculation results are incorrect, and both in the local and cloud modes, the left port and right port simulation results are the same.

- For mode_info of port, the results of leftport and rightport are the same in the cloud mode, while the results are correct in the local mode.

- The Intensity images of cell_overlap/cell_s/cell_p_matrix and internal_s got by interpolation method are incorrect.

- The Simu[project_name].run() reports an error:AssertionError: cannot found matched dependency task! in the cloud mode

- The FDE_passive_parser.py reports an error in the local mode: IndexError: list index out of range.

- When setting the parameter of the use_full_simulation_span to Ture in the cloud mode, but it shows False on the page.

- The meshgen reports an error in the local mode.

- The mode_info of port reports an error:if mode_selection is None and args[-1] in [“TE”, “TM”], im the local mode.

- The meshgen warns:Edge Filling Algorithm Error, in the local mode.

- FDTD_HalfRing.py
- The run_index reports an error: ‘SimulationTaskBase’ object has no attribute ‘run_index’.

- ME result reports an error:The value of attribute must be in [‘T_backward’, ‘P’, ‘N’, ‘T_forward’, ‘b’, ‘a’], but t_forward is given.

- When setting y to -3 of run_index, its nx result is incorrect, in the local mode.

- ERROR:component[“background_material”] = mat_wav_recreation_list[“m”][ ,in the cloud mode.

- The field result image of PowerMonitor at different wavelengths does not change.

- The meshgen prompt: WARNING: nan or inf eps at(77,15,0)

- PowerMonitor coordinates are incorrect, in the cloud mode.

- StraightWaveguide_X_FDTD_Lossy.py
- There is no background material of Air displayed in the structure_show.

- The meshgen prompt: WARNING: nan or inf eps at(77,15,0)

- Exp_Taper_dummy_1550_l_50.py
- ERROR: ‘transverse_mesh_setting.maximum_mesh_step_settings.dy is not filled’

- Input is “layers” You may want to input one of (‘attrs’, ‘base’, ‘name’, ‘order’, ‘pml_layers’)

- The correct format name of run_index should be Exp_Taper_dummy_1550_l_50_localx_0.

- The size of submesh is different in local mode.

- There have two of mesh refinements in the mesh.json, and its data is incorrect.

- The start mesh_structure of cell coordinates are incorrect in the local mode.

- The start mode_info of port coordinates are incorrect in the cloud mode.

- The start mesh_structure of port coordinates are incorrect in the cloud mode.

- The mesh_structure of cell and mode_info results are incorrect.

- The mesh of run_index at x=0 results is incorrect.

- The horizontal axis coordinate of the EME monitor is incorrect, in the cloud mode.

- The S parameter is incorrect, caused by the parameter transmit wrongly.

- LN_EOM.py
- Anisotropic material reports an error: TypeError: Expected 7 arguments, got 18

- When adds a LinearTrapezoid, it reports an error: TypeError: _init_() got an unexpected keyword argument ‘x_span’

- Warning: Exception on ln_up.attrs…: <maxoptics.var.models.meta.LinearTrapezoid.LinearTrapezoidAttrs object at 0x000002638BFCB7C0>: expre_rotate_z=’’ is ignored.

- TypeError: Dimensions of C (583, 481) are incompatible with X (481) and/or Y (584); see help(pcolormesh) -The calculation mode result of border in the mesh_structure is incorrect.

- Ineffective warning: expre_rotate_z=’’ is ignored,etc.

- Ineffective output: Point coordinates

- LN_MMI_EME.py
- When adds a Pyramid, it will report an error:TypeError: _init_() got an unexpected keyword argument ‘x_span’

- ERROR: No such file or directory: ‘e:\develop\js\lonely\maxopt_ofl\flow\template\Pyramid.yaml’

- When sets port to TE and TM, the result of eme_propagate:port_mode_info reports an error: passive_eme_port_mode_info_option request failed Incorrect response: {‘success’: False, ‘result’: {‘code’: 50002, ‘msg’: ‘Invalid Parameter: chec k Port 0 is TE and TM’}} Data: {‘target’: ‘intensity’, ‘pub’: {‘taskId’: 560576, ‘monitorIndex’: 0}}

- The title of monitor should be EME.

- LN_BENT_FDTD.py
- When adds a Pyramid, it will report an error:TypeError: _init_() got an unexpected keyword argument ‘x_span’

- ArcWaveguide3D error: z_min = geo[“z”] - geo[“z_span”] / 2 KeyError: ‘z_span’

- True is not set in the override_x_mesh/override_y_mesh/override_z_mesh,after adding submesh in the cloud mode.

- Grating_Coupler.py
- When adds a LinearTrapezoid, it will report an error: TypeError: _init_() got an unexpected keyword argument ‘x_span’

- When adds a gaussian source, it will report an error: passive_project.create_gaussian_source waveform is necessary for initializing gaussian source

- Gaussian source error: __ind = __waveforms_id.index(waveform) ValueError: 0 is not in list

- Structure_show triggers an error:WARNING: nan or inf eps at (995,72,0)

- FDTD_Oblique_Input.py
- The tilt direction of the straight waveguide is opposite in the structure_show.

- Cloud ERROR: passive_fdtd_mode_source_mode_info_chart request failed Incorrect response: {‘success’: False, ‘result’: {‘code’: 502, ‘msg’: ‘Server Failed’}} Data: {‘target’: ‘intensity’, ‘pub’: {‘taskId’: 558051, ‘monitorIndex’: 0, ‘attribute’: ‘E’, ‘operation’: ‘ABS’}, ‘option’: {‘x’: 0, ‘y’: ‘plotX’, ‘z ‘: ‘plotY’, ‘mode’: 0}}

- AttributeError: ‘dict’ object has no attribute ‘_dict_’

- EME_PSR.py
- The coordinates of the source mode calculation are incorrect.

- The coordinates of the source mode calculation in the mesh_structure are incorrect.

- The S parameters are incorrect caused by parameter transmit worngly.

- EME_SSC.py
- The source mode calculation result is incorrect.

- The coordinates of the source mode calculation in the mesh_structure are incorrect.

- The S parameters are incorrect caused by parameter transmit worngly.

- The two ports in the fde_onely are opposite.

### Unrealized/Planning Functions
- FDTD S-Matrix

- FDE/EME/FDTD parameters sweep

- Data reading from json files, and public encapsulation method with searching

- SDK material database does not synchronize with Cloud ‘s material database with Standard, User and Project

### Remained Bugs
- The Structure_show method does not work, when there have paramid or Arcwaveguide 3D structures in the modeling script.

- The results of EME and FDTD’s anisotropy are incorrect, caused by LN material parameter wrongly transmit.

- The FDTD S-Matrix feature has not been verified.

- There have gaps for structure boundary in the mode calculation result.

- There has a slight difference of V1.9.0.0 fast_FDTD results in the local and cloud mode with localSDK V1.3.9’s results got in local mode.

- The title of EME monitor in the result image should be EME.

- Logic adjustment of back-end parameters to front-end page:

- The processing logic needs to be clarified, when the mesh_ type/grading_ factor/background_ Material exists in both Structure and Simulation.

- The processing logic needs to be clarified, when the boundary conditions are set in both OBoundary and Simulation,

- The types of boundary conditions that can be used in FDE/EME and FDTD are different. For example, FDE/EME supports symmetric and antisymmetric boundary conditions, while FDTD does not. At present, no comprehensive verification has been done

- The boundary conditions can be set in different ways between FDE/EME and FDTD. For example, there is only one PML parameter for FDE/EME, while FDTD supports setting x/y/z’s PML parameters separately.

- The logic needs to be clarified,in which the must inputting options have no default values.

- Because of the old version used in the development process, after the new version parameter list is completed, the configuration check of the default value of the must-inputting options is only partially checked, not completely checked.

- The inkage between parameterslogic has not been completely checked and verified.

- Due to the support of Python 3.8 for TypingCheck is not good, the implemented spelling check cannot continue to be supported, and will be closed in the next version. Currently， the user cannot know the parameter assignment error in the IDE, and can only view the output in the command line window to check the error.

- The display of similar materials of the index is not obvious, due to the RGB color of structure_show in the user’s setting material being set according to the index’s real and imaginary auto RGB assignment method.

- For the result import feature,the feature of auto judgment and creation of the path address of the import file has been developed but wait to be verified.

- Currently, the run_ index method is based on the 2D mesh created by FDE. When the script is run in cloud mode and viewed in cloud server, finding that there has no results for the index monitor in the result tree. (FDE does not support IndexMonitor in the cloud server)

- The run_ index and calculate_ mode methods will create projects separately according to names passed in, which is not convenient to view in the CloudServer.

- The lack of timestamp of project_name in the script will override previous local simulation results.

- There is no limitation for geometry, only (x,x_span) or (x,x_span) can be input, and its linkage logic has not been verified.

- The method of inputting wavelength_min and wavelength_max into waveform and monitor and inputting frequency method has not been verified.

- The waist_radius/distance_from_waist settings in the gaussian source do not synchronize with beam_radius/divergence_angle settings.

