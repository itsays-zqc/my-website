

# Material

The purpose of this section of code instructions is to assist you in adding the required simulation materials to meet your simulation needs. We can use this module with code `mt = pj.Material() `. 

These instructions enable you to incorporate dispersion/non-dispersion materials and anisotropic materials into the simulation. Additionally, you have the option to directly access the necessary materials from the Max-Optics material library.



## 1.1 Add anisotropy material

Add non-dispersion material to a project.

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

| **Parameters** |                         Description                          |
| :------------: | :----------------------------------------------------------: |
|      name      |                        Material name.                        |
|      data      | Material data. Format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), …] or [(wavelength, xx index real, xx index imag, xy index real, xy index imag, …), …]. |
|     color      | Material color. If not filled, color will be calculated from index parameters. |
|    fitting     |                    Material fitting mode.                    |
|     order      |                     Material mesh order.                     |

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

| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;**Parameters**&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;|               &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;         Description    &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;                    |
| :------------: | :----------------------------------------------------------: |
|      name      |                        Material name.                        |
|      data      | Material data. Format is [(wavelength, index real, index imag), …]. |
|     color      | Material color. If not filled, color will be calculated from index parameters. |
|    fitting     |                    Material fitting mode.                    |
|     order      |                     Material mesh order.                     |

**Example:**

```python
mt = pj.Material()
mt.add_dispersion(name="SiO2",
    data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=1
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

|  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;**Parameters**&emsp;&emsp; &emsp;&emsp;&emsp;&emsp; |                       &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;  Description &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;                         |
| :------------: | :----------------------------------------------------------: |
|      name      |                        Material name.                        |
|      data      |               A existing material in library.                |
|    override    |                          override.                           |
|     color      | Material color. If not filled, color will be calculated from index parameters. |
|     order      |                     Material mesh order.                     |

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

| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;**Parameters**&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |                         &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Description&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                          |
| :------------: | :----------------------------------------------------------: |
|    **name**    |                        Material name.                        |
|    **data**    |     Material data. Format is [(index real, index imag)].     |
|   **color**    | Material color. If not filled, color will be calculated from index parameters. |
|   **order**    |                     Material mesh order.                     |

**Example:**

```python
mt = pj.Material()
mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)
```
