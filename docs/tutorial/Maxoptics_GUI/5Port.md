---
sidebar_position: 5
---


# Port

<font face = "Calibri">

## 1 FDTD Port

<div class="text-justify">

**Feature description:**
Ports are usually viewed as a combination of mode source and field monitor. Ports can be used either separately or together with the S-parameter sweep tool.

**Notes:**
Press the "Port" button in the menu bar, and select "FDTD Port" from the drop-down menu to add a port. Note that the prerequisite is that an FDTD simulation region must be already there. Upon adding a port, a port group named “Ports” is automatically generated as the child of the “Object Tree” , and all port objects are enclosed in this group. In particular, the port hierarchy is arranged in such a manner that ports cannot be moved outside the “Ports group”, and other objects are not allowed to be moved into the group.

### 1.1 Geometry tab

|!['Port1'](../../../static/img/tutorial/Port/Port1.png)|
| :------------------------------------------------------------: |

1) **X,Y,Z:**
The center position of the simulation region.

2) **X Min, X Max:**
X min, X max position.

3) **Y Min, Y Max:**
Y min, Y max position.

4) **Z Min, Z Max:**
Z min, Z max position.

5) **X Span, Y SP, Z Span:**
X, Y, Z span of the simulation region.

### 1.2 Modal properties tab

|!['Port3'](../../../static/img/tutorial/Port/Port3.png )|
| :------------------------------------------------------------: |

1) **Injection Axis:**
This indicates the axis of propagation. The geometry parameters that will work under the "Geometry" tab may depend on this setting (For instance, if the incident wave is along the x-axis, the port object possesses accordingly a 2D x-normal geometry).

2) **Direction:**
This field indicates the direction of source propagation. Forward means the propagation is along a positive direction, while Backward means the propagation is along a negative direction.

3) **Amplitude:**
"Amplitude" specifies the peak magnitude of electric field measured by V/m in the beam sources. (Default :1)

4) **Phase:**
This refers to the phase of the source measured by degrees.

5) **Mode Selection:**
This enables the user to select the modes used in the mode expansion computations. The eigenmode solver, with which the user may compute and visualize the supported modes , is launched by checking the "User Select" option---this option can also be used to select the desired mode among multiple ones.

6) **Number of Trial Modes**: The number of solving modes.

7) **Mode Index**: Find the sequence number of the pattern.

8) **Bent Waveguide:**
Selecting this option enables the bent waveguide solver to work with the following settings:

① **Bend Radius**:This specifies the bend radius in units of um counted from the center of the port region. (Default value: 1.0 um)

② **Bend Orientation**: This specifies the orientation of the cylindrical coordinates employed for the computation of modes.Orientation of the cylindrical coordinate system used for calculating modes.

③ **Bend Location**: This option specifies the location of bend. (Note that only the simulation center is supported at present)


## 2 EME Port

**Feature Description**: The EME solver region contains 2 ports by default. The ports button found in the menu bar adds additional ports to the solver.

### 2.1 Geometry tab

|!['Port8'](../../../static/img/tutorial/Port/emeport1.png)|
| :------------------------------------------------------------: |

1) **Port Location**: The port can be selected to locate at the left or right end of the EME solver region.

2) **Use Full Simulation Span**: By checking this option, the whole
simulation span inheritted from the EME simulation region is employed. (Default: on) You need to uncheck this option if you wish to specify your own spans for the port. Therefore the following parameters settings are invalid when "Use Full Simulation Span" is enabled.

3) **X, Y, Z**: The center position of the simulation region.

4) **X MIN, X MAX**: X min, X max position.

5) **Y MIN, Y MAX**: Y min, Y max position.

6) **Z MIN, Z MAX**: Z min, Z max position.

7) **X SPAN, Y SPAN, Z SPAN**: X, Y, Z span of the simulation region.

### 2.2 EME Port tab

|!['Port8'](../../../static/img/tutorial/Port/emeport2.png)|
| :------------------------------------------------------------: |

1) **Mode Selection:**

①　Allow you to select the modes to use for the mode expansion calculation. The "user select" option launches the eigenmode solver where the user can calculate and visualize the supported modes; use this option to select multiple modes. The "Mode calculation" section Allow you to select a mode they are interested in. The user S-matrix result returns the S-matrix for these selected modes. A selected mode can also be used as an input source in the EME propagation stage of the analysis, Fundamental Mode, Fundamental TE Mode, Fundamental TM Mode, Fundamental TE and TM Mode, Use Select and User Import are included. (Default: fundamental mode)

②　Checking the "user select" option enables you to specify mode parameters in the ``Select Mode'' window. The number of trial modes will be displayed in the mode list after they are solved by computation. The plot options of the user's interest can be specified in the mode plot options section.

③　User import: Import arbitrary source fields into EME ports. It is possible to use a custom field profile from a .mat file, .datx file or .zbf file as the source in an EME simulation. The field profile data can be from another simulation. To set this as a port mode, open the Edit EME port tab, select “User import” under mode selection and click on “Import Field”.

1) **Number of Trial Modes:** This specifies the number of modes to search for finding a fundamental mode. The modes eventually found by the solver may depend on that. If one uses a too small number, the expected modes could be missing. Usually, setting this number to 100 suffices to guarantee no physical modes would have been missed. However, users who are interested in higher order modes should set a even larger value, since in such cases more than 100 modes may be present. (Default value: 20)

2) **Offset:** An offset can be endowed to the plane upon which the modes are computed. This guarantees that monitors placed at an angle do not interfere with unexpected structures.


</div>

</font>