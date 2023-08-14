# basic principles

## FDE 
The eigenmode expansion method is a numerical solution algorithm that discretizes the Maxwell equation in the frequency domain and constructs a feature matrix.
Define the calculation area. Define physical parameters. Define boundary conditions. Solve the intrinsic mode. Analyze simulation results. Optimize simulation parameters.
* Calculate the propagation of electromagnetic waves and the field distribution of harmonic modes with high accuracy.
* The calculation cost is relatively low.
![](FDE_yz.png)
## EME
The eigenmode expansion （EME） method is a frequency-domain method for solving Maxwell equations, which has significant advantages over FDTD in simulating long photon devices。
Establish an optical device model. Define physical parameters. Divide several simulation areas. The mode at the junction of computing units. Perform bidirectional transmission calculation for the mode. Analyze simulation results. Optimize simulation parameters.

* Calculate the transmission characteristics of the device and quickly scan and optimize the device.
* Compared to FDTD methods, the treatment of nonlinearity and dispersion equivalence has certain disadvantages.
![](EME_xy.png)

## FDTD

![](FDTD.png)



## What is mode?
Modes refer to the stable transmission of electromagnetic waves in a waveguide, with each mode corresponding to a characteristic solution of Maxwell's equation in the waveguide. Each mode has a stable field distribution and different modes are orthogonal to each other.

## What is the propagation constant?
The real part represents the phase velocity, while the imaginary part represents the loss or gain.


## What is the effective refractive index?


## What is phase velocity?

Reflects the propagation speed of light of a certain mode at a single frequency.
## What is the group refractive index?

The propagation speed of the signal envelope.
## What is coupling?

When power transmission occurs within or between waveguides, it is called coupling between two modes. Two conditions need to be met:
* The mode overlap integral is not zero.
* the phase matching condition.