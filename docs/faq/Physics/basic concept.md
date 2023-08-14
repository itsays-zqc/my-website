import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# What is the meaning of basic concept?

## Mode
Modes refer to the stable transmission of electromagnetic waves in a waveguide, with each mode corresponding to a characteristic solution of Maxwell's equation in the waveguide. Each mode has a stable field distribution and different modes are orthogonal to each other.

## Propagation constant
The real part of the propagation constant represents the phase velocity, while the imaginary part represents the loss or gain.


## Effective refractive index
The direction and velocity of propagation vary with wavelength, medium structure, and refractive index. The ratio of propagation constant to vacuum wave vector is defined as the effective refractive index of the propagation direction.



<BlockMath math="β = n_eff \frac{2π}{λ}" />



## Phase velocity

The propagation speed of light of a certain mode at a single frequency.
                                                
<BlockMath math="V_p = \frac{c}{n_eff}" /> 

## Group refractive index

A type of average refractive index formed by changes in the speed and direction of light propagation due to factors such as non-uniformity of the propagation medium and wavelength of light.

<BlockMath math="n_g=n_eff-λ\frac{dn}{dλ}" />                                               


## Coupling

When power transmission occurs within or between waveguides, it is called coupling between two modes. Two conditions need to be met:
* The mode overlap integral is not zero.
* the phase matching condition.