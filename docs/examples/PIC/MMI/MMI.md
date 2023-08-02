import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# 1X2 MMI

## Introduction:

<div class="text-justify">

&emsp;&emsp;Multi-mode interferometer, due to their advantages of low insertion loss, wide bandwidth, simple fabrication process, and good tolerance, have been widely used in important optical devices such as optical switches and wavelength-division multiplexers.

&emsp;&emsp;The main performance parameters of multi-mode interference couplers include **insertion Loss**, **imbalance**, **device dimensions**, **operating bandwidth**.

</div>

![MMI introduction](MMI_intro.png 'MMI introduction')

## Simulation Methods

<div class="text-justify">

&emsp;&emsp;With the `EME module`, the corresponding cell groups and cell numbers can be set up with the structure, and a parameter sweep can be performed in the propagation sweep to obtain the S-parameters of the device. This parameter sweep helps optimize the core dimensions of the multi-mode interferometer, ensuring desired performance characteristics. 

&emsp;&emsp;Alternatively, `FDTD module` can be conducted to obtain the intensity distribution of the optical field and the transmittance at each port. This allows the verification of the optimized results for the multi-mode interferometer. 

&emsp;&emsp;After data processing, performance parameters such as the imbalance, insertion loss, and bandwidth of the device can be determined.


</div>
