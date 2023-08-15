# How to set boundary condition?
The boundary conditions include perfectly matched layers (PML), perfect electric conductors (PEC), symmetric and antisymmetric boundary conditions.

## 1.PML

<div class="text-justify">
The intensity of the light field after entering the PML layer will decay, which can be used to absorb the electromagnetic field at the boundary.You can set the absorption of PML through the following parameters.

* Number of layers of PML.
* Kappa Alpha and Sigma are the orders of polynomials.
* Increasing Kappa will enhance the absorption of evanescent waves and weaken the absorption of guided modes.
* Increasing Sigma will reduce reflection and increase dispersion error.
* Increasing the value of Alpha/Sigma improves the stability of absorption, but the absorption effect will decrease.
* Increasing Alpha/Sigma increases stability and reduces absorption capacity.

For the EME solver,Max Optics optimized PML to improve mode orthogonality, which resulted in reduced absorption of guided modes.General PML parameters of FDTD is {"pml_layer":8,"pml_kappa:2,"pml_sigma":0.8,"pml_polynomial":3,"pml_alpha":0,"pml_alpha_polynomial":1}.
</div>

## 2.PEC

<div class="text-justify">
The conductivity  of PEC is infinite and the penetration depth is almost zero, used to reflect electromagnetic fields.

The main application scenario of the EME algorithm is transmission problems. In FDE/EME simulation, the default boundary condition is PEC, and it can greatly reduce simulation time.

</div>

## 3.Symmetric

<div class="text-justify">
When there is a symmetry plane in the structure, certain field components must be zero on the symmetry plane. By forcing the field component to be zero, the simulation time can be reduced by half.
</div>

## 4.Anti-Symmetric


# What situations require strengthening the absorption of PML?

<div class="text-justify">
The default parameters of PML are more accurate for the simulation results of (Bragg grating, spot size converter), and parameter settings that increase guided mode absorption are needed for radiation devices.
For the FDTD solver, the absorption parameters of the PML layer are consistent with the Gloden software.

* Grating coupler is a device with strong radiation, which requires an increase in PML during simulation_ Sigma to improve absorption capacity.
* Users can moderately increase PML as needed_ The number of layers, but having too many layers can greatly increase simulation time.
* The PML boundary is calculated in the complex domain, so the calculation time and memory are generally more than twice that of the PEC/PML boundary.

</div>

