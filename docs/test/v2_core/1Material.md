

# Material

<div class="text-justify">

In this section, the code instructions aim to assist you in adding the required simulation materials into your simulation project. We can use this module with the code `mt = pj.Material() `. 

These instructions enable you to incorporate dispersion/non-dispersion materials and anisotropic materials into the simulation project. Additionally, you have the options to directly access the necessary materials from the Max-Optics material library.



## 1.1 Add anisotropy material

Add anisotropy material to a project.

```python
add_anisotropy(
            self,
            *,
            name: str,
            data: List[
                Tuple[
                    float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float],
            ],
            color: Optional[str] = None,
            alpha: Optional[float] = None,
            fitting: Literal[None, "linear"],
            order: int = 2,
   			)
```
 <table align="center">
  <tr>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td align="center">name</td>
    <td align="center">The name of material in the project.</td>
  </tr>
  <tr>
    <td align="center">data</td>
    <td align="center">Material data. Format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), …] or [(wavelength, xx index real, xx index imag, xy index real, xy index imag, …), …].</td>
  </tr>
  <tr>
    <td align="center">color</td>
    <td align="center">The color of materials in the visual model. If it is not set, the color will be automatically calculated based on the refractive index.</td>
  </tr>
  <tr>
    <td align="center">fitting</td>
    <td align="center">The fitting mode of material data.</td>
  </tr>
  <tr>
    <td align="center">order</td>
    <td align="center">The coverage order of materials when modeling a geometric structure.
    </td>
  </tr>
</table>

**Example:** 

```python
mt = pj.Material()
mt.add_anisotropy(name="LN", fitting=None,
      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2
      )
```



## 1.2 Add dispersion material

Add dispersion material to a project.

```python
add_dispersion(
            self,
            *,
            name: str,
            data: List[
                Tuple[float, float, float],
            ],
            color: Optional[str] = None,
            alpha: Optional[float] = None,
            fitting: Literal[None, "linear"],
            order: int = 2
			)
```
 <table align="center">
  <tr>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td align="center">name</td>
    <td align="center">The name of material in the project.</td>
  </tr>
  <tr>
    <td align="center">data</td>
    <td align="center">Material data. Format is [(wavelength, index real, index imag), …].</td>
  </tr>
  <tr>
    <td align="center">color</td>
    <td align="center">The color of materials in the visual model. If it is not set, the color will be automatically calculated based on the refractive index.</td>
  </tr>
  <tr>
    <td align="center">fitting</td>
    <td align="center">The fitting mode of material data.</td>
  </tr>
  <tr>
    <td align="center">order</td>
    <td align="center">The coverage order of materials when modeling a geometric structure.</td>
  </tr>
</table>


**Example:**

```python
mt = pj.Material()
mt.add_dispersion(name="SiO2",
    data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=2
    )
```



## 1.3 Add material in Max-Optics material library

Add material in the Max-Optics material library to a project.

```python
add_lib(
            self,
            *,
            name: str,
            data: Any,
            override: Optional[dict]=None,
            color: Optional[str] = None,
            alpha: Optional[float] = None,
            order: int = 2
            )
```
 <table align="center">
  <tr>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td align="center">name</td>
    <td align="center">The name of material in the project.</td>
  </tr>
  <tr>
    <td align="center">data</td>
    <td align="center">An existing material in the library.</td>
  </tr>
  <tr>
    <td align="center">override</td>
    <td align="center">Override.</td>
  </tr>
  <tr>
    <td align="center">color</td>
    <td align="center">The color of materials in the visual model. If not set, the color will be automatically calculated based on the index parameters.</td>
  </tr>
  <tr>
    <td align="center">order</td>
    <td align="center">The coverage order of materials when modeling a geometric structure.</td>
  </tr>
</table>

**Example:**

```python
mt = pj.Material()
mt.add_lib(name="Air", data=mo.Material.Air, order=2)
```



## 1.4 Add nondispersion material

Add non-dispersion material to a project.

```python
add_nondispersion(
        self,
        *,
        name: str,
        data: List[Tuple[float, float]],
        color: Optional[str] = None,
        alpha: Optional[float] = None,
        order: int = 2
		)
```
 <table align="center">
  <tr>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td align="center"><strong>name</strong></td>
    <td align="center">The name of material in the project.</td>
  </tr>
  <tr>
    <td align="center"><strong>data</strong></td>
    <td align="center">Material data. Format is [(index real, index imag)].</td>
  </tr>
  <tr>
    <td align="center"><strong>color</strong></td>
    <td align="center">The color of materials in the visual model. If not set, the color will be automatically calculated based on the refractive index.</td>
  </tr>
  <tr>
    <td align="center"><strong>order</strong></td>
    <td align="center">The coverage order of materials when modeling a geometric structure.</td>
  </tr>
</table>


**Example:**

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)
```

</div>

