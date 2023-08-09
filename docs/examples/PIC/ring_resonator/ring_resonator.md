import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# Microring Resonator


<div class="text-justify">

</div>

## Introduction
![](mr.png)
The microring resonator consists of a waveguide and a micro ring. When light propagates in a waveguide, the evanescent field on its surface is coupled into adjacent microrings. When the transmission wavelength meets the resonance condition, a change in light intensity occurs at the output end.

## Simulation
The input end of the waveguide uses a Mode Source to regulate parameters such as the gap size and radius between the micro ring and the waveguide. The transmission of the mode light source in the micro ring resonator is calculated using FDTD, and the variation of transmittance with wavelength can be obtained using a power monitor at the through and drop ends.
## Output Results

After the light that meets the resonance conditions is coupled from the waveguide into the ring resonator, it passes through the drop end. As shown in the figure below, there is the maximum electric field at the drop end at the resonant wavelength.
![](mr_xy.png)

Scan the wavelength to find the wavelength with the highest transmission at the drop end.

![](drop.png)