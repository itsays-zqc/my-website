---
sidebar_position: 6
---

# Port

## 1 FDTD Port

**Feature description:**
Ports are usually viewed as a combination of mode source, field monitor and mode expansion monitor. Ports can be used either separately or together with the S-parameter sweep tool to compute the S-parameters for a device by means of the mode expansion method.

**Notes:**
Press the "Port" button in the menu bar, and select "FDTD Port" from the drop-down menu to add a port. Note that the prerequisite is that an FDTD simulation region must be already there. Upon adding a port, a port group named “Ports” is automatically generated as the child of the “Object Tree” , and all port objects are enclosed in this group. In particular, the port hierarchy is arranged in such a manner that ports cannot be moved outside the “Ports group”, and other objects are not allowed to be moved into the group.

### 1.1 FDTD Port Group tab

1) **Source Port:**This option enables you to choose one from a list of the existing ports as the source port.

2) **Source Mode:**The mode of each port can be selected through “Mode Selection” in its “Modal Properties” tab, after which the mode number is recorded in “Source Mode” automatically

3) **Waveform Name:**
Waveform name is identified by **“Waveform ID”**.

<div class="centered">

!['Port1'](../../static/img/tutorial/Port/Port1.png )

</div>

### 1.2 The Geometry tab of FDTD Port

|!['Port1'](../../static/img/tutorial/Port/Port2.png)|
| :------------------------------------------------------------: |

1) **X,Y,Z:**
The center position of the simulation region.

1) **X Min, X Max:**
X min, X max position.

1) **Y Min, Y Max:**
Y min, Y max position.

1) **Z Min, Z Max:**
Z min, Z max position.

5)**X Span, Y SP, Z Span:**
X, Y, Z span of the simulation region.

### 1.3 The Modal properties tab of FDTD port tab

|!['Port3'](../../static/img/tutorial/Port/Port3.png )|
| :------------------------------------------------------------: |

1)**Injection Axis:**
This indicates the axis of propagation. The geometry parameters that will work under the "Geometry" tab may depend on this setting (For instance, if the incident wave is along the x-axis, the port object possesses accordingly a 2D x-normal geometry).

2)**Direction:**
This field indicates the direction of source propagation. Forward means the propagation is along a positive direction, while Backward means the propagation is along a negative direction.

3)**Amplitude:**
 "Amplitude" specifies the peak magnitude of electric field measured by V/m in the beam sources. (Default :1)

4)**Phase:**
This refers to the phase of the source measured by degrees.

5)**Mode Selection:**
This enables the user to select the modes used in the mode expansion computations. The eigenmode solver, with which the user may compute and visualize the supported modes (See “Mode Analysis”), is launched by checking the "User Select" option---this option can also be used to select the desired mode among multiple ones. Besides, the eigenmode solver offers a toolkit of frequency analysis. (See "Frequency Analysis")

6)**Bent Waveguide:**
Selecting this option enables the bent waveguide solver to work with the following settings:.

->**Bend Radius**:This specifies the bend radius in units of um counted from the center of the port region. (Default value: 1.000e+6 um)

->**Bend Orientation**: This specifies the orientation of the cylindrical coordinates employed for the computation of modes.Orientation of the cylindrical coordinate system used for calculating modes.

->**Bend Location**: This option specifies the location of bend. (Note that only the simulation center is supported at present)

### 1.4 Mode Analysis window

|!['Port4'](../../static/img/tutorial/Port/Port4.png )|
| :------------------------------------------------------------: |

### 1.5 Frequency Analysis window

|!['Port5'](../../static/img/tutorial/Port/Port5.png)|
| :------------------------------------------------------------: |

1)**Track Selected Mode**: By checking this box, the selected mode from the list will be tracked.

->**Start / Stop Frequency (THz)**: The beginning and final frequencies at which the modes will be solved for. The start frequency value defaults to the one for initial computations of modes inside the Modal Analysis tab, whenever a particular mode is being tracked.

->**Start / Stop Wavelength (μm)**: The beginning and final wavelengths at which the modes will be solved for. The start wavelength value defaults to the one for initial computations of modes inside the Modal Analysis tab, whenever a particular mode is being tracked.

->**Number of Points**: The number of sampling frequencies/wavelengths to be included in the sweep.

->**Number of Trial Modes**: This number specifies the maximum amount of modes to be swept. To track a single mode, this number is recommended to be about 3 in order to reduce the computation time to its minimum (this number will need to be raised a little bit in case there are discontinuities in the sweep data). When “Track Selected Mode” is not selected, this number determines the maximum amount of modes to be swept over the domain of frequency/wavelength within our attention scope.

->**Effective index**: This parameter indicates the effective index value around which the modes will be solved for. It takes effect only when the selected modes are not being tracked. (Default: 1))

->**Detailed Dispersion Calculation**: Mode properties at extra frequencies are computed for collecting more accurate dispersion data over the domain of frequency/ wavelength within our attention scope. This produces more precise results with extra cost of time.

2)**Bent Waveguide**: Check this option to enable sweeping a waveguide with a bend inside. 

->**Bend Radius**: The curvature radius of the waveguide bend.

->**Bend Orientation**: The orientation of the waveguide bend

->**Bend Location**: The location of the waveguide bend.

3)**Plot area**: The plot area where the simulation data is plotted in line or image.

**Mode list**: Mode list where the “ID”, “Effective Index”, “Group Index”, “Wavelength”, “Loss”, and  “TE Polarization Fraction” are shown. How many modes will be shown, will according to the “Number of Trial Modes” setting.

4)**Frequency Plot** : The frequency plot options are used to specify which data to plot in the plot window, and also can be used to modify the current frequency plot options.

<div class="centered">

!['Port8'](../../static/img/tutorial/Port/Port9.png)

</div>



## 2 EME Port

**Feature Description**: The EME solver region contains 2 ports by default. The ports button found in the menu bar adds additional ports to the solver. 

### 2.1 Geometry tab

|!['Port8'](../../static/img/tutorial/Port/emeport1.png)|
| :------------------------------------------------------------: |

1)**Port Location**: The port can be selected to locate at the left or right end of the EME solver region.

2)**Use Full Simulation Span**: By checking this option, the whole 
simulation span inheritted from the EME simulation region is employed. (Default: on) You need to uncheck this option if you wish to specify your own spans for the port. Therefore the following parameters settings are invalid when "Use Full Simulation Span" is enabled.

3)**X, Y, Z**: The center position of the simulation region.

4)**X MIN, X MAX**: X min, X max position.

5)**Y MIN, Y MAX**: Y min, Y max position.

6)**Z MIN, Z MAX**: Z min, Z max position.

7)**X SPAN, Y SPAN, Z SPAN**: X, Y, Z span of the simulation region.

### 2.2 EME Port tab

|!['Port8'](../../static/img/tutorial/Port/emeport2.png)|
| :------------------------------------------------------------: |

1)**Offset:** An offset can be endowed to the plane upon which the modes are computed. This guarantees that monitors placed at an angle do not interfere with unexpected structures.

2)**Number of Trial Modes:** This specifies the number of modes to search for finding a fundamental mode. The modes eventually found by the solver may depend on that. If one uses a too small number, the expected modes could be missing. Usually, setting this number to 100 suffices to guarantee no physical modes would have been missed. However, users who are interested in higher order modes should set a even larger value, since in such cases more than 100 modes may be present. (Default value: 20)

3)**Mode Selection:**

①　Allow you to select the modes to use for the mode expansion calculation. The "user select" option launches the eigenmode solver where the user can calculate and visualize the supported modes; use this option to select multiple modes. The "Mode calculation" section Allow you to select a mode they are interested in. The user S-matrix result returns the S-matrix for these selected modes. A selected mode can also be used as an input source in the EME propagation stage of the analysis, Fundamental Mode, Fundamental TE Mode, Fundamental TM Mode, Fundamental TE and TM Mode, Use Select and User Import are included. (Default: fundamental mode)

②　Checking the "user select" option enables you to specify mode parameters in the ``Select Mode'' window. The number of trial modes will be displayed in the mode list after they are solved by computation. The plot options of the user's interest can be specified in the mode plot options section.

- **Select Mode tab:**

|!['Port6'](../../static/img/tutorial/Port/Port6.png)|
| :------------------------------------------------------------: |

③　**User import**: Import arbitrary source fields into EME ports. It is possible to use a custom field profile from a .mat file, .datx file or .zbf file as the source in an EME simulation. The field profile data can be from another simulation. To set this as a port mode, open the Edit EME port tab, select “User import” under mode selection and click on “Import Field”.


<div class="centered">

!['Port7'](../../static/img/tutorial/Port/Port7.png)

</div>

Click the “Click to upload” button, select a generated custom field profile, if you has imported several profiles in the right section, you can specify one of them from right section, then the custom field profile has been imported successfully. Finally, click the “OK” button to save the custom profile.

<div class="centered">

!['Port8'](../../static/img/tutorial/Port/Port8.png)

</div>