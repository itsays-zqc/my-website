# Analysis

<font face = "Calibri">

<div class="text-justify">

Analysis is an extension function for three basic solvers. In this section, we will introduce the coding method of analysis corresponding to FDE, FDTD and EME.

```python
add_analysis(
        self,
        name: str,
        type: str,
        property: unions.AllAnalysisTypes,
    )
```

| Parameters |                         Description                          |
| :--------: | :----------------------------------------------------------: |
|    name    |                       The name of analysis defined in the project.                       |
|    type    |                       To decide the type of analysis.                       |
|  property  |                     The property of analysis defined.                    |

## 7.1 FDEAnalysis

The code contained in this module enables a preview of the refractive index images with various structures.

```python
add(
            self,
            *,
            name: str,
            type: FDEAnalysis,
            property: FdePostProcess,
    )
```

**Example:**

```python
analysis.add_analysis(name="fast_FDE_Analysis", type="FDEAnalysis",
                        props={"workflow_id": simu_res.workflow_id, "simulation_name": "FDE",
                                "modal_analysis": {"calculate_modes": run_options.run, "mesh_structure": True,
                                                "wavelength": wavelength, "wavelength_offset": 0.0001, "number_of_trial_modes": number_of_trial_modes,
                                                # ['near_n','max_index']
                                                "search": "max_index",  # "n": 1,
                                                "calculate_group_index": False,
                                                "bent_waveguide": {"bent_waveguide": False, "radius": 1, "orientation": 0, "location": "simulation_center", }
                                                },
                                "frequency_analysis": {"frequency_analysis": run_options.run_frequency_sweep,
                                                    "start_wavelength": 1.50, "stop_wavelength": 1.60, "number_of_points": 3,
                                                    "effective_index": 1, "detailed_dispersion_calculation": False,
                                                    }})
```

|      Parameters       | Default |  Type  |                            Notes                             |
| :-------------------: | :-----: | :----: | :----------------------------------------------------------: |
| workflow_id |    -     | string | The link between the modules in the script. |
|     simulation_name      |    -     |  string   |  The name of the simulation with the upon workflow_id.    |
|          modal_analysis.mesh_structure          |       false       |  bool   |     Confirm whether to generate a refractive index diagram for the structure.   |
|         modal_analysis.calculate_modes          |       false       |  bool   |            Determine whether to calculate the modes.          |
|            modal_analysis.wavelength            |       1.55        |  float  |               The mode wavelength for FDE calculation.              |
|        modal_analysis.wavelength_offset         |       0.002       |  float  |                The mode wavelength offset for FDE calculation.                                              |
|      modal_analysis.number_of_trial_modes       |         5         | integer |           When calculating modes, determine the calculated number of modes around the refractive index.                |
|              modal_analysis.search              |     max_index     | string  |           Calculate the mode based on the maximum refractive index or user defined refractive index in the structure. Selections are ['near_n', 'max_index'].            |
|                modal_analysis.n                 |         1         |  float  |     Under the 'near_n' condition, use this value of refractive index to search the source mode.                                        |
|      modal_analysis.calculate_group_index       |       false       |  bool   |    Determine whether to calculate the group refractive index.          |
|      frequency_analysis.frequency_analysis      |       false       |  bool   |      Determine whether to invoke frequency analysis.                      |
|       frequency_analysis.start_wavelength       |      -      |  float  |          Set the start frequency of the frequency analysis.                 |
|       frequency_analysis.stop_wavelength        |      -     |  float  |          Set the stop frequency of the frequency analysis.                         |
|       frequency_analysis.number_of_points       |        10         | integer |         Set the number of points in the frequency analysis             |
|       frequency_analysis.effective_index        |        1.0        |  float  |            To search the mode near this refractive index.                        |
| frequency_analysis.detailed_dispersion_calculation |       false       |  bool   |      Determine whether to calculate the dispersion of structure.                                 |

### 7.1.1 Bent Waveguide FDE simulation

Calculating the mode of a bent waveguide within the FDE module.

```python
simu = pj.Simulation()
    simu.add(name=simu_name, type='FDE',
             property={'general': {'solver_type': '2d_x_normal'},
                       'mesh_settings': {'global_mesh_uniform_grid': {'dy': grid, 'dz': grid}},
                       'fde_analysis': {
                           'modal_analysis': {
                               'calculate_modes': run_options.run, 'mesh_structure': True,
                               'wavelength': wavelength, 'wavelength_offset': 0.0001, 'number_of_trial_modes': number_of_trial_modes, 'calculate_group_index': True,
                               'bent_waveguide': {'bent_waveguide': True, 'radius': 5.25, 'orientation': 0, 'location': 'simulation_center'}}}})
```

|                     Parameters                     |      Default      |  Type   |                  Notes                  |
| :------------------------------------------------: | :---------------: | :-----: | :-------------------------------------: |
|  modal_analysis.bent_waveguide.bent_waveguide   |       false       |  bool   |        Select whether to calculate modes in bent waveguides.                     |
|      modal_analysis.bent_waveguide.radius       |        0.0        |  float  |  Set the waveguide radius for bent waveguides.              |
|    modal_analysis.bent_waveguide.orientation    |        0.0        |  float  |            The bent direction of the waveguide.               |
|     modal_analysis.bent_waveguide.location      | simulation_center | string  |            Set the bent center position of bent waveguides. Selections are ['simulation_center'].             |

### 7.1.2 Beam overlap

Calculating beam overlap involves a two-step process within the FDE module.

Firstly, it's necessary to acquire the FDE beam results and extract the relevant data.

```python
run_fde_beam_and_extract(self, *, property, export_csv=False, show=False, savepath="")
```

| **Parameters** |                 Description                  |
| :------------: | :------------------------------------------: |
|    property    |               Set the property of beam to calculate overlap.              |
|   export_csv   |    Whether to save a file as csv format, defaults to False.     |
|      show      |    Whether to show figure or not, defaults as False     |
|    savepath    | The save path of heatmap and csv. |

**Example:**

```python
beam_res = simu[simu_name].run_fde_beam_and_extract(
    property={"define_gaussian_beam_by": "waist_size_and_position",  # [waist_size_and_position,beam_size_and_divergence],
                "waist_radius": 5.2, "distance_from_waist": 1.5, "refractive_index": 1.45, "theta": 0, "phi": 0,
                "polarization_angle": 90, "sample_span": 6, "sample_resolution": 200, },
    savepath=plot_path + "beam_heatmap", )
analysis.add(name="overlap", type="overlap",
                property={"field_1": {"workflow_id": beam_res.workflow_id, "mode": 0},
                        "field_2": {"workflow_id": fde_res.workflow_id, "mode": 0},
                        "optimize_position": True, }, )
overlap_res = analysis["overlap"].run()

overlap_res.extract(export_csv=True, savepath=plot_path + "overlap", )
```

|                     Parameters                     |      Default      |  Type   |                  Notes                  |
| :------------------------------------------------: | :---------------: | :-----: | :-------------------------------------: |
| define_gaussian_beam_by |      -       | string  |                  Work under this menu to define the scalar beam in terms of either Waist Size+Position or Beam size+Divergence.                  |
| waist_radius |         -         |  float  |      The radius at which the field magnitude decays to 1/e of the maximum for a Gaussian beam                                                        |
| Distance from waist |        -        |  float  |    The Distance from waist to beam            |
| Beam radius |      -      |  float  |  The radius at which the field magnitude decays to 1/e of the maximum for a Gaussian beam                         |
| Divergence angle |        -         |  float  |           The angle of radiation spreading into the far field               |
|       refractive_index       |     -     |  float  |          The refractive index of the homogeneous material inside which the Gaussian beam is present.               |
|       theta       |     -     |  float  |           The angle made by the normal-vector and the propagating direction.               |
|        phi        |     -     |  float  |          The angle made by the horizontal axis and the propagation direction projected into the Eigenmode Solver plane.    |
|  Polarization Angle  |     -     |  float  |        Set the polarization angle of Gaussian source.                |
|  sample_span  |     -     |  float  |        The span of the beam on each axis.                |
|  sample_resolution  |     -     |  float  |        Rhe number of sampling points on each axis.                |

### 7.1.3 Far field

**Example:**

```python
if run_options.run_far_field:
    analysis.add(name="Far_Field Simulation", type="far_field_planar",
                    property={"workflow_id": far_field_base_workflow_id,
                            "fde_analysis_name": "FDEAnalysis", "mode": 0,
                            "far_field_settings": {"material_index": 3.7, "farfield_filter": 0, "projection_distance": 8000,
                                                    "points_in_x": 50, "points_in_y": 50, "farfield_x_span": 40, "farfield_y_span": 40, "farfield_x": 0, "farfield_y": 0, }, }, )
    far_field_res = analysis["Far_Field Simulation"].run()
```

|                     Parameters                     |      Default      |  Type   |                  Notes                  |
| :------------------------------------------------: | :---------------: | :-----: | :-------------------------------------: |
| far_field_settings.projection_method |      planar       | string  |                  Specify the projection type for calculating the far-field.Selections are ['planar'].                  |
| far_field_settings.farfield_filter |         0         |  float  |      Configure this parameter to filter near field data for eliminating high frequency ripples in the results. Its value ranging from 0 to 1.                                                        |
| far_field_settings.material_index |        1.4        |  float  |    Set the material refractive index for projection.            |
| far_field_settings.projection_distance |      4430.65      |  float  |  The distance for far-field projection calculation.                         |
| far_field_settings.points_in_x |        50         |  float  |          In x direction, the number of points in the far field.               |
| far_field_settings.points_in_y |        50         |  float  |          In y direction, the number of points in the far field.                                                     |
| far_field_settings.farfield_x  |         0         |  float  |          In x direction, the position of far field center point.            |
| far_field_settings.farfield_x_span |      26.1834      |  float  |            In x direction, the span of far field range.             |
| far_field_settings.farfield_y  |         0         |  float  |             In y direction, the position of far field center point.    |
| far_field_settings.farfield_y_span |      18.1231      |  float  |              In y direction, the span of far field range.     |

## 7.2 EMEAnalysis




</div>

</font>