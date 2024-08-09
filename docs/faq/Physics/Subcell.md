# What is the difference between Staircase and Subcell methods in EME Simulation?

|![](../../../static/img/faq/FAQ/eme.png)|
 | :------------------------------------------------------------: |


## 1.Staircase approximation(None)

<font face = "Calibri">

<div class="text-justify">

The Staircase approximation simply uses the mode field of discrete points to represent the mode field of the entire element, which has high computational efficiency. When the cell undergoes discontinuous changes, it can cause non physical reflections at the interface of the cell. The Staircase approximation method is applicable to staircase waveguides, mosaic type photonic devices, and square wave modulated waveguide gratings.

|![](../../../static/img/faq/FAQ/staircase.png)|
 | :------------------------------------------------------------: |



</div>

## 2.Subcell approximation(Sub Cell)

<div class="text-justify">
The Subcell approximation calculates the mode at the interface of each cell as a first-order interpolation of adjacent cells, and can simulate continuously changing photonic structures with smaller cells.The Subcell approximation method is suitable for gradient waveguides, tapers, and sinusoidal modulated waveguide gratings. When using the Subcell method, it is important to perform convergence analysis on the number of cells in the structural change area to ensure that the number of slices is sufficient.

|![](../../../static/img/faq/FAQ/subcell.png)|
 | :------------------------------------------------------------: |




## References

[1] Gallagher, Dominic FG, and Thomas P. Felici. "Eigenmode expansion methods for simulation of optical propagation in photonics: pros and cons." Integrated optics: devices, materials, and technologies VII. Vol. 4987. SPIE, 2003.

</div>

</font>