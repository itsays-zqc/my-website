# interface

# maxoptics_sdk.core.material.interface module

```py
class maxoptics_sdk.core.material.interface.MaterialInterface(*args, **kwargs)
```

- Bases: **Protocol**
  
## 1. add_anisotropy

### Syntax

abstract add_anisotropy(*, `name`: str, `data`: List[Tuple[float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float]], `color`: str | None = None, alpha: float | None = None, `fitting`: Literal[None, 'linear'], `order`: int = 2)

abstract add_anisotropy(*, `name`: str, `data`: List[Tuple[float, float, float, float, float, float, float]], `color`: str | None = None, alpha: float | None = None, `fitting`: Literal[None, 'linear'], `order`: int = 2)

### Usage

`Add a project anisotropy material.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>material name</td>
  </tr>
  <tr>
    <td>data</td>
    <td>Material data. Format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), …] or [(wavelength, xx index real, xx index imag, xy index real, xy index imag, …), …].
    </td>
  </tr>
  <tr>
    <td>color</td>
    <td>Material color. If not filled, color will be calculated from index parameters.</td>
  </tr>
  <tr>
    <td>fitting</td>
    <td>Material fitting mode.</td>
  </tr>
  <tr>
    <td>order</td>
    <td>Material mesh order.</td>
  </tr>
</table>
<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
mt = pj.Material()
mt.add_anisotropy(name="LN", fitting=None,
      data=[(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)], order=2
      )
```


  
## 2. add_dispersion

### Syntax

abstract add_dispersion(*, `name`: str, `data`: List[Tuple[float, float, float]], `color`: str | None = None, alpha: float | None = None, `fitting`: Literal[None, 'linear'], `order`: int = 2)

### Usage

`Add a project dispersion material.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>material name</td>
  </tr>
  <tr>
    <td>data</td>
    <td style={{width: '50rem'}}>Material data. Format is [(wavelength, index real, index imag), …].
    </td>
  </tr>
  <tr>
    <td>color</td>
    <td>Material color. If not filled, color will be calculated from index parameters.</td>
  </tr>
  <tr>
    <td>fitting</td>
    <td>Material fitting mode.</td>
  </tr>
  <tr>
    <td>order</td>
    <td>Material mesh order.</td>
  </tr>
</table>

<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
mt = pj.Material()
mt.add_nondispersion(name="SiO2",
    data=[(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)], order=1
    )
```



## 3. add_lib

### Syntax

abstract add_lib(*, `name`: str, `data`: Any, `override`: dict | None = None, `color`: str | None = None, alpha: float | None = None, `order`: int = 2)


### Usage

`Add a project material with existing material in library.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>material name</td>
  </tr>
  <tr>
    <td>data</td>
    <td style={{width: '50rem'}}>A existing material in library.
    </td>
  </tr>

  <tr>
    <td>override</td>
    <td style={{width: '50rem'}}>override.
    </td>
  </tr>

  <tr>
    <td>color</td>
    <td>Material color. If not filled, color will be calculated from index parameters.</td>
  </tr>
  
  <tr>
    <td>order</td>
    <td>Material mesh order.</td>
  </tr>
</table>

<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
mt = pj.Material()
mt.add_lib(name="Air", data=mo.Material.Air, order=2)
```

## 4. add_nondispersion

### Syntax

abstract add_nondispersion(*, `name`: str, `data`: List[Tuple[float, float]], `color`: str | None = None, alpha: float | None = None, `order`: int = 2)


### Usage

`Add a project non-dispersion material.`

### Parameters and Returns

<table class="custom-table">
  <tr>
    <td class="typeface">Parameters</td>
    <td class="typeface">Explanation</td>
  </tr>
  <tr>
    <td>name</td>
    <td>material name</td>
  </tr>
  <tr>
    <td>data</td>
    <td style={{width: '50rem'}}>Material data. Format is [(index real, index imag)].
    </td>
  </tr>
  
  <tr>
    <td>color</td>
    <td>Material color. If not filled, color will be calculated from index parameters.</td>
  </tr>

  <tr>
    <td>order</td>
    <td>Material mesh order.</td>
  </tr>
</table>
<br/>
<table class="custom-table">
  <tr>
    <td class="third-column">Returns:</td>
    <td class="fourth-column">No return.</td>
  </tr>
</table>

### Example

```py
mt = pj.Material()
    mt.add_nondispersion(name="SiO2", data=[(1.444, 0)], order=1)
```
