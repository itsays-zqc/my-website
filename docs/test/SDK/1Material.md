

# Material

<font face = "Calibri">

<div class="text-justify">

Use `Material()` to instance a material into the project, use `add_nondispersion`, `add_dispersion` and `add_anisotropy` functoin to add new materials or use `add_lib` utilize materials from the material library.


## 1.1 Add nondispersion material

The syntax and properties of adding non dispersive material are shown below. This function does not return any data.


```python
add_nondispersion(
        name: str,
        data: List[Tuple[float, float]],
        order: int = 2,
        color: Optional[str] = None      
	)
```

| Parameter  | Type | Default | Description|
|:------------:|:-----:|:-----:|:--------------------|
|name |string | - |Define the name of the material.|
| data |tuple | - | Input a tuple, format is [(index real, index imag)] | 
| order | integer | 2  | Priority of the material, with larger number indicating higher priority.|
| color     | string  |    -     | Set the color for material display, format is "#RRGGBB" .   |

**Example:**
The following command adds non dispersive material to the material of the instance, sets the material name to "SiO2", data to [(1.444, 0)], mesh order to 1 and color to "#654321".

```python

mt = Project.Material()
mt.add_nondispersion(name="nondispersion_material", data=[(1.444, 0)], order=1,color="#654321")
```

</div>

## 1.2 Add dispersion material

The syntax and properties of adding dispersive material are shown below. This function does not return any data.


```python
add_dispersion(
        name: str,
        data: List[Tuple[float, float, float]],
        order: int = 2,
        color: Optional[str] = None
	)
```

| Parameter      | Type    | Default   | Description    |
|:---------|:--------|:----------:|:--------------|    
| name      | string  |  -  |   Define the name of the material.             |
| data      | tuple |     -      |A list of tuple, format is [(wavelength, index real, index imag), ...]       |
| order       | integer | 2         |  Indicates the priority of the material, with higher numbers indicating higher priority.      | 
| color   | string  |    -     | Set the color for material display, format is "#RRGGBB" .   |


**Example:**

The following command adds dispersive material to the material of the instance, sets the material name to "SiO2", data to [(1.55e-06,, 1.444, 0), (1.30e-06, 1.81, 0.227)], mesh order to 2 and color to "#654321".

```python
w_index = [(1.55e-06, 1.444, 0), (1.30e-06, 1.81, 0.227)]
mt = pj.Material()
mt.add_dispersion(name="dispersion",
    data=w_index, order=2, color="#654321"
    )
```

## 1.3 Add anisotropy material

The syntax and properties of adding non anisotropy material are shown below. This function does not return any data.


```python
add_anisotropy(
        name: str,
        data: Union[List],
        order: int = 2,
        color: Optional[str] = None
   )
```
| Parameter | Type | Default | Description |
|:------------------|:--------|:----------:|:-------------------------|
| name   | string  |    -   |   Define the name of the material.           |
| data  | tuple   | - | A list of tuple, format is [(wavelength, xx index real, xx index imag, yy index real, yy index imag, zz index real, zz index imag), ...] |
| order   | integer | 2         |  Priority of the material, with larger number indicating higher priority.  |
| color   | string  |    -     | Set the color for material display, format is "#RRGGBB" .   |

**Example:** 
The following command adds anisotropy material to the material of the instance, sets the material name to "LN", data to [(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)] and mesh order to 2.

```python
wavelength = 1.55
w_xyz = [(wavelength * 1e-6, 2.211, 0, 2.138, 0, 2.211, 0)]
mt = pj.Material()
mt.add_anisotropy(name="anisotropy_material", 
      data=w_xyz, order=2
      )
```

## 1.4 Add material from the material library

The syntax and properties of adding material from material library are shown below. This function does not return any data.


```python
add_lib(
        name: str,
        data: Optional[str],
        order: int = 2
    )
```

| Parameter               | Type    | Default   | Description                    |
|:-----------------|:--------|:----------:|:---------------------|
| name         | string  |     -      |    Define the name of the material.    |                  
| data   | object  | -  | A library material object, format is mo.Material.Air       |
| order     | integer | 2      |     Priority of the material, with larger number indicating higher priority.    |

**Example:**

The following command adds material from material library to the material of the instance, sets the material name to "Air", data to mo.Material.Air and mesh order to 2.

```python
mt = Project.Material()
mt.add_lib(name="Air", data=mo.Material.Air, order=2)

```

### 2.3 Electrical Material Properties

To conduct simulations accurately, users are required to specify various electrical parameters and models corresponding to different material types. For insulators, defining permittivity is essential, while for conductors, specifying work function is necessary. When dealing with semiconductors, users have the flexibility to define DC permittivity, work function, and fundamental parameters including mobility and recombination.

In addition to the properties mentioned above, users can also define temperature dependencies for many parameters using the adjacent "f(T)" buttons. This action triggers a parameter editor displaying the associated formula.

```python

elec_Si_properties = {
    "permittivity": {
        "permittivity": 11.7,
    },
    "work_function":4.59,
    "fundamental": {
        "electron": "density_of_states",  
        "hole": "density_of_states",  
        "nc": {
            # "constant": 3.21657e19,
            "enable_model": True,
            "nc300": 3.21657e19
        },
        "nv": {
            # "constant": 1.82868e19,
            "enable_model": True,
            "nv300": 1.82868e19
        },
        "eg": {
            # "constant": 1.12416,
            "enable_model": True,
            "alpha": 0.000473,
            "beta": 636,
            "eg0": 1.16
        },
        "narrowing": {
            "model": "slotboom",  
            "slotboom": {
                "e0": 0.0045,
                "n0": 1.0e17
            }
        },
    },
    "recombination":{
        "trap_assisted": {
            "enabled": True,
            "taun": {
                "enable_model": True,
                # "constant": 1e-5,
                "alpha": -1.5,
                "dopant": {
                    "model": "scharfetter",  
                    "scharfetter": {
                        "nref": 7.1e15,
                        "taumax": 1.5e-9,
                        "taumin":0
                    }
                },
                "field": {
                    "model": "none",  
                    # "schenk": {
                    #     "hbar_omega": 0.068,
                    #     "mt": 0.258,
                    #     "s": 3.5
                    # }
                }
            },
            "taup": {
                "enable_model": True,
                # "constant": 3e-6,
                "alpha": -1.5,
                "dopant": {
                    "model": "scharfetter",  
                    "scharfetter": {
                        "nref": 7.1e15,
                        "taumax": 1.5e-9,
                        "taumin": 0
                    }
                },
                "field": {
                    "model": "none",  # or "none"
                    # "schenk": {
                    #     "hbar_omega": 0.068,
                    #     "mt": 0.24,
                    #     "s": 3.5
                    # }
                }
            },
            "ei_offset": 0.0
        },
        "radiative": {
            "enabled": True,
            "copt": 1.6e-14
        },
        "auger": {
            "enabled": True,
            "caun": {
                "constant": 2.8e-31,
                "enable_model": False,
                # "a": 6.7e-32,
                # "b": 2.45e-31,
                # "c": -2.2e-32,
                # "h": 3.46667,
                # "n0": 1e18 
            },
            "caup": {
                "constant": 9.9e-32,
                "enable_model": False,
                # "a": 7.2e-32,
                # "b": 4.5e-33,
                # "c": 2.63e-32,
                # "h": 8.25688,
                # "n0": 1e18
            }
        },
        "band_to_band_tunneling": {
            "enabled": False,
            # "model": "hurkx",  # or "schenk"
            # "hurkx": {
            #     "agen": 3.5e21,
            #     "arec": 3.5e21,
            #     "bgen": 2.25e7,
            #     "brec": 2.25e7,
            #     "pgen": 2.0,
            #     "prec": 2.0,
            #     "alpha": 0
            # },
            # "schenk": {
            #     "a": 8.977e20,
            #     "b": 2.1466e7,
            #     "hbar_omega": 0.0186
            # }
        }

    },
    "mobility":{
        "mun": {
            "lattice": {
                # "constant": 1417,
                "enable_model": True,
                "eta": -2.5,
                "mumax": 1471
            },
            "impurity": {
                "model": "masetti", 
                "masetti": {
                    "alpha": 0.68,
                    "beta": 2,
                    "cr": 9.68e16,
                    "cs": 3.43e20,
                    "mu1": 43.4,
                    "mumin1": 52.2,
                    "mumin2": 52.2,
                    "pc": 0
                }
            },
            "high_field": {
                "model": "none",  
                # "canali": {
                #     "alpha": 0,
                #     "beta0": 1.109,
                #     "eta": 0.66
                # },
                # "driving_field": {
                #     "model": "e_dot_j",  # or "grad_phi",
                #     "grad_phi": {
                #         "nref": 1e5
                #     }
                # },
                # "vsat": {
                #     "constant": 1.07e7,
                #     "enable_model": False,
                #     "gamma": 0.87,
                #     "vsat0": 1.07e7
                # }
            }
        },
        "mup": {
            "lattice": {
                # "constant": 470.5,
                "enable_model": True,
                "eta": -2.2,
                "mumax": 470.5
            },
            "impurity": {
                "model": "masetti",  # or "none"
                "masetti": {
                    "alpha": 0.719,
                    "beta": 2,
                    "cr": 2.23e17,
                    "cs": 6.1e20,
                    "mu1": 29,
                    "mumin1": 44.9,
                    "mumin2": 44.9,
                    "pc": 0
                }
            },
            "high_field": {
                "model": "none",  
                # "canali": {
                #     "alpha": 0,
                #     "beta0": 1.213,
                #     "eta": 0.17
                # },
                # "driving_field": {
                #     "model": "e_dot_j",  # or "grad_phi",
                #     "grad_phi": {
                #         "nref": 1e5
                #     }
                # },
                # "vsat": {
                #     "constant": 8.37e6,
                #     "enable_model": True,
                #     "gamma": 0.52,
                #     "vsat0": 8.37e6
                # },
            },
        },
    },
}

```

Description:

`permittivity`: 
Specifies the relative dielectric permittivity of the material, represented by a 3x3 matrix.
`work_function`: 
Specifies the intrinsic work function of the material. Failure to specify a work function will result in Ohmic contacts irrespective of the material.
`Fundamental`: 
Semiconductors must have basic properties defining their electronic behavior, including relative band gap, effective mass, or density of states.
`effective_mass/density_of_tates`: 
Users can specify the effective mass of electrons and holes, as well as the density of states for the conduction and valence bands.
`band_gap`: 
Users can specify the band gap at 300K and choose a model of bandgap narrowing from the available options. The effective intrinsic carrier concentration (Ni) is calculated by combining the effective mass or equivalent density of states.
`mobility`: 
Defines the mobility of electrons and holes, accounting for corrections due to scattering and supporting velocity saturation effects under strong electric fields.
`lattice`: 
User can define the low-field mobility model of electrons and holes at lattice, correct the charge carriers from lattice thermal vibration scattering at “f(T)”. The Masetti model in the pull-down box of impurity to correct the heavier doped scattering.
`high_field`: 
Users can opt for the Canali model to calculate mobility changes due to the drift speed reaching saturation under the influence of strong electric fields in the semiconductor. To specify the carrier's saturation velocity (vsat), users need to select either the size of the Quasi-Fermi level gradient or the component of the electric field in the direction of the current density from the "Driving Field" drop-down box.
`recombination`: 
The continuous transition and recombination of different bands are crucial in simulation design. Users can enable or disable the corresponding composite model based on their preferences.
`trap_assisted`: 
Users can activate the trap-assisted composite, allowing them to directly define the temperature-dependent lifetime of electrons and holes or correct it using the carrier concentration-dependent Scharfetter model or the field effect model Schenk.
`radiative`: 
Users can activate the Radiative model and define the parameters of copt.
`auger`: 
Users can enable auger recombination of band-to-band, which is temperature-dependent by activating the "Enable Model" option.
`band_to_and_tunneling`: 
Users can activate the band-to-band tunneling model of Hurkx or Schenk.



</font>