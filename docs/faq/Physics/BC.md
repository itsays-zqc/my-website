import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

# How to set boundary condition?

<font face = "Calibri">
<div class="text-justify">

In MaxOptics Studio, the boundary conditions available include Perfectly Matched Layer (PML), Perfect Electric Conductor (PEC), symmetric, antisymmetric, and periodic boundary conditions. Note that periodic boundary conditions are supported only in the EME modules.

## 1.PML(Perfectly Matched Layer)

PML (Perfectly Matched Layer) is a boundary condition used for absorbing the electromagnetic waves, which is designed to absorb the electromagnetic waves entering the boundary without reflection.The core concept is to design an artificial medium such that when electromagnetic waves propagate into it, the reflection coefficient becomes zero, thereby allowing for effective absorption of the electromagnetic waves energy.The ideal PML boundary produces zero reflection, but in fact, there is always a small amount of reflection due to the discretization of the PML equations.

In the PML region, the propagation direction of the electromagnetic wave gradually turns to the absorption direction by stretching transformation of the dielectric constant 𝜀 and the magnetic permeability 𝜇. This process can be achieved through complex coordinate transformations in either time or spatial variables.

Assuming that in a Cartesian coordinate system, the PML primarily acts in the 𝑥 direction, the stretching factor <InlineMath math="S_𝑥" /> can be defined as follows:

<BlockMath math="S_{x}=1+\frac{\sigma_{x}}{j \omega \varepsilon_{0}}" />

where <InlineMath math="\sigma_{x}" /> is the conductivity in the PML direction, 𝜔 is the angular frequency, j is the imaginary unit, and <InlineMath math="\varepsilon_{0}" /> is the permittivity of free space.

After transformation, the dielectric constant and magnetic permeability change to:

<BlockMath math="\tilde{\varepsilon}=\frac{\varepsilon}{s_{x}}" />
<BlockMath math="\tilde{\mu}=\frac{\mu}{s_{x}}" />

Maxwell equations for electric and magnetic field in the PML region:

<BlockMath math="\nabla \times \boldsymbol{H}=j \omega \tilde{\varepsilon} \boldsymbol{E}" />
<BlockMath math="\nabla \times \boldsymbol{E}=-j \omega \tilde{\mu} \boldsymbol{H}" />

When implementing the PML (Perfectly Matched Layer) boundary conditions, we usually need to set multiple parameters to optimize their absorption effect. These parameters include Layers, Kappa, Sigma, Alpha, and the associated polynomial coefficients. The significance and effects of these parameters are presented as follows:

* **Layers** is the number of PML layers, referring to the number of PML grid layers added outside of the simulation boundary. Increasing the quantity of Layers  can improve the absorption effect of PML, but also increase the calculation.

* **Kappa**(κ) is a stretching parameter that controls the stretching coefficient of the dielectric constant and magnetic permeability in the PML region:

<BlockMath math="S_{x}=\kappa+\frac{\sigma_{x}}{j \omega \varepsilon_{0}}" />

The larger the Kappa value, the stronger the stretching, usually ranging from 1 to a certain upper limit. A larger Kappa can enhance the absorption of high-frequency components, but the reflection is also greater.

* **Sigma** (σ) conductivity, controls the loss factor in the PML region:

<BlockMath math="\sigma_{x}=\sigma_{max} (\frac{x}{L})^n" />

The value of 𝜎 determines the absorption strength. A larger σ value can enhance absorption efficiency, but it also increases reflection. Typically, σ increases gradually from 0 to <InlineMath math="\sigma_{max}" /> according to a polynomial distribution.

* **Polynomial** refers to the order of the polynomial that controls the shape of the distribution curves for **Sigma (σ)** and **Kappa (κ)**. Commonly used orders are 2, 3, and 4. Higher orders can enhance the absorption efficiency of the absorbing layer.

* **Alpha** (α) is a complex frequency shift parameter used to control the time decay characteristics. This parameter primarily affects the absorption performance of the PML in the low-frequency range. An appropriate value of **Alpha (α)** can improve the absorption of low-frequency waves.

* **Alpha Polynomial** refers to the order of the polynomial that controls the shape of the distribution curve for Alpha (α).

* **Min Layers** and **Max Layers** describe the minimum and maximum number of PML layers, used to adjust the thickness of the PML in different regions. Different numbers of PML layers can be set for various computational regions to optimize overall computational efficiency and absorption effectiveness. Min Layers indicates the minimum number of layers, while Max Layers indicates the maximum number of layers.

**Note:** In FDE/EME simulation scenarios, the default boundary is PEC (Perfect Electric Conductor). PML (Perfectly Matched Layer) boundaries are typically used in radiation models, such as grating couplers. However, since the primary application of the EME algorithm is for transmission problems rather than radiation problems, it is recommended that users default to PEC boundaries.

FDE/EME with PML boundaries operates in the complex domain, resulting in computation times and memory usage that are typically more than twice as high as those with PEC/PMC boundaries.

In certain FDTD simulation scenarios (such as Grating Couplers), it is necessary for the PML layers to have strong absorption. It is recommended to enhance the absorption of the PML layers by increasing their thickness, which can be achieved by increasing the number of Layers.

Apart from the Layers parameter, it is not recommended for users to modify the default PML parameters. Users should adjust the number of Layers according to the needs of the simulation.

## 2.PEC(Perfect Electric Conductor)

<div class="text-justify">

PEC (Perfect Electric Conductor): The PEC boundary treats the boundaries of the computational domain as ideal conductors. Under these conditions, the tangential electric field and the normal magnetic field at the boundary are zero. PEC Boundary Conditions are used to model ideal metallic boundaries, such as in metal waveguides and reflector antennas.

</div>

## 3.Symmetric and Anti-Symmetric

<div class="text-justify">
When a simulation problem exhibits certain symmetries, the simulation space and time can be significantly reduced by employing symmetric or anti-symmetric boundary conditions, potentially reducing them by factors of 2, 4, or 8.

For electromagnetic fields with symmetry planes, certain field components must be zero on the symmetry plane. Symmetric boundary conditions are achieved by enforcing these components to be zero.

**Symmetric Boundary Conditions:**

The normal electric field is zero.
The tangential magnetic field is zero.

**Anti-Symmetric Boundary Conditions:**

The tangential electric field is zero.
The normal magnetic field is zero.


|                |            Symmetric Boundary   |       Anti-Symmetric Boundary          |
|:-------------------------:|:-------------------------:|:-------------------------:|
|Normal Electric Field|   0 |   |
|Tangential Electric Field|    | 0 |
|Normal Magnetic Field|    | 0 |
|Tangential Magnetic Field|  0  |  |


Other non-zero components remain symmetric with respect to the boundary under symmetric and anti-symmetric boundary conditions, meaning that the electromagnetic field distribution is mirror-symmetric across the boundary.

Note: Incorrect boundary conditions can lead to completely inaccurate results, and simulation software may not issue any warning messages. It is recommended to first perform a lower-precision simulation without symmetric/anti-symmetric boundary conditions to quickly verify the results. Once consistency is confirmed, you can then use symmetric/anti-symmetric boundary conditions and increase the simulation precision.

</div>

## 4.Periodic

Periodic refers to periodic boundary conditions, which are commonly used to simulate models with periodic arrangements. Users can define unit regions with periodic characteristics and specify the number of periods in each region. The Start Cell Group and End Cell Group refer to the sequence numbers in the Cell Group Definition. By clicking the EME Propagate button, users can obtain new results for the monitors and S matrix without needing to recalculate any modes. Under this option, the periodic sequence specified in the table format within the periodic section will be displayed in the cell group sequence box.

</div>

</font>