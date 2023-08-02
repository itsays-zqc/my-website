import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# PSR

## Introduction:

<div class="text-justify">

&emsp;&emsp;Polarization control devices are essential components in Silicon-based Photonic Integrated Circuits (PICs), as they effectively mitigate the polarization sensitivity of Silicon-based nanophotonic waveguides. Among these devices, the Polarization Splitter-Rotator (PSR) not only separates TE and TM polarizations but also rotates the polarization state from one polarization to another.

&emsp;&emsp;The key performance parameters of the PSR include **insertion loss**, **extinction ratio**, **device dimensions**, and **operating bandwidth**.

</div>

![MMI introduction](PSR_intro.png 'MMI introduction')

## Simulation Methods

<div class="text-justify">

&emsp;&emsp;The PSR structure can be optimized using either the `EME module` or `FDTD module`. 

&emsp;&emsp;With the `EME module`, relevant cell groups and cell numbers can be defined in the structure, and a parameter sweep in the propagation sweep can be conducted to obtain the S-parameters of the device. This process helps optimize the PSR's extinction ratio and insertion loss and allows wavelength scans to optimize the device's operating bandwidth to achieve the desired TE and TM polarization separation and conversion.

&emsp;&emsp;The `FDTD module` can also be used to optimize the design of special PSR structures, such as subwavelength gratings and photonic crystal-based polarization beam splitters and rotators. Additionally, FDTD simulations can validate the results obtained from the EME module. It can allow the visualization of the optical field intensity distribution and the fundamental mode transmittance at each port in the monitor.

</div>
