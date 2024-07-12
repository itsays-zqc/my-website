import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Microring Resonator

<font face = "Calibri">

## Introduction

<div class="text-justify">

As a typical passive device, the ring resonator is widely used in the integrated optics, which has the advantages of small size, wide free spectral range (free spectrum range, FSR), high quality factor (quality factor, Q), high sensitivity and so on. The structure characteristics of the ring resonator fit the large-scale photoelectric integrated system, which is widely used to constitute various functional devices, including filters, sensors, delay lines, wave division multiplexer, etc.

The designer can adjust the resonance wavelength, FSR, Q value and coupling efficiency of the ring resonator by adjusting the ring size, the coupling spacing between the straight waveguide and the ring, and the refractive index distribution. The device is based on the principle of waveguide optics, using the time domain finite difference algorithm (Finite Difference Time Domain, FDTD), coupling mode theory (Coupled-mode theory, CMT).

</div>

| ![](../../../../../static/img/example/Ring_GUI/ringintro.png) |
 ------------------------------------------------------------ |

## Simulation

<div class="text-justify">

The `FDTD module` can be conducted to obtain the intensity distribution of the optical field and the transmittance at each port. This allows the verification of the optimized results for the microring resonator.

Next, we will learn the steps about how to model the microring resonator using the GUI and calculate the light propagation in the structure using the FDTD module.

</div>

###  1. Simulation Structure

<div class="text-justify">

As shown in the picture, there is the structure preivew of the microring resonator building in the simulation project. The parameters which are used in this simulation are listed in the table.

</div>

| ![](../../../../../static/img/example/Ring_GUI/ringstr.png) |
 ------------------------------------------------------------|

| Parameters | Value | Unit | Description |
|------------|-------|------|-------------|
| coupling_length       | 4.5 | *μ*m   | coupling length of the resonator |
| gap       | 0.12   | *μ*m   | gap between the track and bus waveguide |
| waveguide_width | 0.45  | *μ*m | width of waveguide |
| radius        | 5  | *μ*m   | radius of ring |
| waveguide_height        | 0.22  | *μ*m   | height of waveguide |
| wavelength_center       | 1.55   | *μ*m   | wavelength center |
| wavelength_span    | 0.1     | *μ*m   | wavelength span |
| points_number     | 201 | -   | number of frequency points |
| angle|87    | degree  | tilt angle of waveguide sidewall |
| cells_per_wavelength  | 14     | -   |cells per wavelength|




### 2. Simulation Steps


<div class="text-justify">


Now let's learn how to build the whole simulation project of the Microring resonator by the GUI.

</div>

#### 2.1 Add global parameters

<div class="text-justify">


we need to set the relevant parameters for simulation and parameterized modeling in the project. To add a global variable in the “Global Parameter” area, right-click there and select “Add”. In the “Expression” column, you can input functions, and the “Value” column displays the current variable value. You can also provide a description for the variable in the “Description”, as shown in the image below.The "Dependencies Check" can help to check the varible used the in this simulation.

| ![](../../../../../static/img/example/Ring_GUI//glopara.png) |
 ------------------------------------------------------------|

</div>


#### 2.2 Materials

<div class="text-justify">

Subsequently, before building the structures, we need the materials required for the simulation.

In the material library above the GUI, you can import material data in "Material Library" or creat the  new material using "New Material". Once you’ve selected or customized the material, click “Export to Project” to add it to the Objects Tree. This makes it easier to use the material during subsequent modeling processes.

The steps are illustrated in the image below.And in this simulation, we mainly use Si and Air materials in the material library.

</div>

| ![](../../../../../static/img/example/MMI_GUI/material.png) |
 ------------------------------------------------------------ |

#### 2.3 Structures

<div class="text-justify">

Next, we can create the model of microring by the geometries in "Structure" part. In this example, we mainly need the "Straight Waveguide" and "Ring", clicking the specific geometry to add it into the Objects Tree.

Moreover, it is conveniently to use the global paramaters changing the structures of microring resonator.

</div>

| ![](../../../../../static/img/example/Ring_GUI/ringstr2.png) |
 ------------------------------------------------------------ |

#### 2.4 FDTD Simulation

After adding materials and creating the model, we need to configure the simulation module and its parameters. For this simulation, we primarily use the Finite-Difference Time-Domain (FDTD) algorithm. As shown in the figure below, locate the ‘FDTD Solver’ under the ‘Set Solvers’ module, click to open the pop window, and set the relevant parameters, including the ‘General,’ ‘Geometry,’ ‘Mesh Settings,’ ‘Boundary Condition,’ and ‘Advanced Options’ tabs. Once configured, click ‘OK’/‘Apply’ to add the FDTD solver to the simulation.


| ![](../../../../../static/img/example/Ring_GUI/ringfdtd.png) |
 ------------------------------------------------------------ |

#### 2.5 Source

<div class="text-justify">


Then we need to establish the light source. In the entire GUI interface, locate the ‘Source’ section at the top. Currently, it supports adding four types of sources: Mode Source, Gaussian Source, Dipole Source and Optical Generation. For this simulation, we are using a mode source. Click to open the dialog box for the mode source and set its relevant parameters, including the ‘General,’ ‘Geometry,’ and ‘Waveform’ sections. Once configured, click ‘Apply’ or ‘OK’ to add the light source to the Objects Tree.”

| ![](../../../../../static/img/example/Ring_GUI/source.png) |
 ------------------------------------------------------------ |

</div>


#### 2.6 Monitors

<div class="text-justify">

After adding the simulation light source, we need to add various types of monitors in the simulation to obtain the necessary simulation data. The currently supported monitor types include the following: Index Monitor, Field Time, Frequency-Domain Field and Power, EME Profile Monitor, Doping Monitor, Charge Monitor, Band Monitor, Electrical Monitor, and the Global Option for settings monitor parameters globally.

We primarily utilize the Frequency-Domain Field and Power Monitor in this simulation.

</div>

| ![](../../../../../static/img/example/Ring_GUI/monitor.png) |
 ------------------------------------------------------------ |

#### 2.7 Analyses

Subsequently, we can further analyze the simulation results in the ‘Analysis’ section. Currently, the supported analyses include: Far Field, Mode Expansion, Overlap, Generation Rate, FDE Analysis, EME Analysis, Matrix Sweep, and Parameter Sweep. Select the desired module, complete the analysis settings, and click  ‘Apply’ or ‘OK’ to add  it to Objects Tree or Sweep. For this simulation, we primarily use Mode Expansion to obtain the fractional amount of power transmitted into different mode.

| ![](../../../../../static/img/example/Ring_GUI/expansion.png) |
 ------------------------------------------------------------ |

#### 2.8 Check Memory/Run

After completing the above steps, we can begin running the simulation. Before running, you can estimate the required memory by using the ‘Check Memory’ feature. Then, in the GUI’s ‘Run’ module, you can execute the simulation and perform the analysis.For FDTD simulations, the software also supports GPU acceleration.

| ![](../../../../../static/img/example/Ring_GUI/run.png) |
 ------------------------------------------------------------ |

### 3. Output Results

<div class="text-justify">

1. the z-normal normalized E intensity of FDTD propagation at wavelength 1.539 *μ*m and 1.543 *μ*m.

| ![](../../../../../static/img/example/Ring_GUI/znormal.png) |
| :----------------------------------------------------------: |

1. The E intensity of two output ports.

| ![](../../../../../static/img/example/Ring_GUI/intensity.png) |
| :----------------------------------------------------------: |

3. The TE0 mode transmission at different wavelength of the drop port.

| ![](../../../../../static/img/example/Ring_GUI/tforward.png) |
| :----------------------------------------------------------: |

</div>






</font>