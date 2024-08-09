"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[804],{8873:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/release blog","metadata":{"permalink":"/kb/blog/release blog","source":"@site/blog/release blog.md","title":"Release Log","description":"V3.1.5.0","date":"2024-08-09T05:12:02.000Z","formattedDate":"August 9, 2024","tags":[],"readingTime":5.585,"hasTruncateMarker":false,"authors":[],"frontMatter":{}},"content":"![](../static/img/mo_logo.jpg)\\n\\n## V3.1.5.0\\n\\nRelease Date: 2023/07/11\\n\\n## Dependent Software\\n\\n- Passive\\n\\t - **Meshgen**: V1.6.0.0 Build: 240628.1611\\n\\n\\t - **FDTD_CPU**: V1.85.2.1 Build: 240512.2338\\n\\n\\t - **FDTD_GPU**: V1.30.1.1 Build: 240512.2337\\n\\n\\t - **FDE**: V1.4.9.1 Build: 240618.1925\\n\\n\\t - **EME**: V0.9.42.1 Build: 240618.1900\\n\\n\\t - **ModeExpansion**: V1.36.2.0 Build: 240418.1740\\n\\n\\t - **FarField**: V0.7.0.0 Build: 240301.1711\\n\\n\\t - **Overlap**: V0.6.6.0 Build: 240701.1307\\n\\n\x3c!-- - Active\\n\\t - meshgen: 1.1.0614.1839\\n\\n\\t - FDTD_CPU: V1.17.1.1 build 0517.0828\\n\\n\\t - FDE: Version: 00.09.08.1 Build: 0613.1936\\n\\n\\t - GenRate: v0.2.3 06/06/2023\\n\\n\\t - OEDevice: 20230324 --\x3e\\n\\n\\n## V3.2.3.0 2024/07/01\\n\\n- Version: MaxOpticsStudioSetup-3.2.3.0-windows-amd64+build.0701\\n- Update time: 2024/07/01\\n\\n- content:\\n\\n  - Optimize click `Run` to pop up a `Resource` pop-up window\\n  - Optimize expression validation logic\\n  - Optimize the logic of renaming global variables\\n  - Optimize progress bar display\\n  - Optimize some function prompt information\\n  - The default value of `FDTD` adapts according to the size of the structure\\n  - `Ruler`Unit Scale Value Range`[0.001,1000]`\\n  - `Farfield/Overlap`does not require the operation of `Solver` and can be run directly\\n  - Optimize the error messages for common errors in `DDM`\\n  - Import doping supports file formats such a `.txt/.dat`\\n  - The `Charge Monitor` and other results in `SDK` support the `Save As` function, which enables the solution of charge carriers and the import of the complete process of model solving in one script\\n  - Improve the display logic of non input parameter values at the interface of electrical materials\\n\\n- New features added\\n\\n  - Right click on `Version` to add `Delete results only` function\\n  - Object Tree supports right-click `Delete`\\n  - Add `Apply in All Directions` to `FDE/FDTD/EME Boundary Conditions`\\n  - After clicking `Run` on the `Ribbon` menu, a `Stop` function has been added\\n  - Add Animate verification to Sweet\\n  - Add Boundary Conditions setting to View Option\\n  - Object Tree adds `Copy` and `Paste`\\n  - New GUI interface `TFLN/APD` simulation cases\\n  - Add `TFLN/APD` simulation support and case studies in SDK\\n  - Add `Doping Monitor` and support `Doping Monitor`\\n\\n\\n- Correction\\n\\n  - Fix the issue of preventing pop-up windows from closing when running tasks such as `FDE/Overlap`\\n  - Fix the issue where `Global Options` do not support global variables\\n  - Fix invalid settings for `Tolerance Relax`, `Relative Tolerance`, and `Divergence Factor` parameters in `DDM`.\\n\\n- Remaining defects\\n\\n  - Occasional engineering errors using `undo/redo`\\n  - `EME Index Monitor` does not support `Y normal/Z normal`\\n  - When the installation path is too deep or the project file name is too long, simulation failure may occur due to the `Windows` longest path (260 characters) limit.\\n  - Structures made of the same material have different colors from a `CAD` perspective\\n  - The `Mesh grid` display of `Monitor` is not aligned with the mode field\\n  - Global variables do not support uppercase letters and underscores\\n  - Occasional result file opening failure\\n  - `SDK show 3D` occasional error\\n  - The `SDK Structure` setting does not verify whether the tilt angle is self crossing, and opening it in GUI will result in an error\\n  - Occasional simulation progress shows 100% stuck, and the project needs to be manually stopped and restarted\\n  - `EME Profile Monitor` result error\\n  - The mode field `csv` coordinates generated by `SDK` are offset by half of the grid\\n  - Not supporting the `Windows 11` professional workstation version\\n  - SDK does not support extracting the results of `Doping Monitor` after simulation ends\\n  - When importing a larger modex file from Data Space and switching to CAD, it may cause CAD to become blank\\n  - The `Preview` in `Transform` occasionally doesn\'t work\\n  - Part of the `CAD` display shows too many decimal places\\n  - `EME Sweep` occasionally failed to initiate a task and needs to be rerun\\n\\n**Historical Versions**\\n\\n---\\n\\n## V3.2.2.0 2024/05/22\\n\\n- Version: MaxOpticsStudioSetup-3.2.2.0-windows-amd64+build.0522\\n- Update time: 2024/05/22\\n\\n\\n- Improvement\\n\\n  - `Save As`Save Logic Adjustments\\n  - The `Transform` table supports global expressions\\n  - Improve the CAD interface and `Ctrl` key multi selection logic\\n  - Improve the display of the `Import GDS` interface\\n  - Enrich the `Doping` and `Attribute` icons\\n\\n- New features added\\n\\n  - Add dipole source\\n  - Add `Bloch` boundary\\n  - Add `EME port rotation` function\\n  - Added GPU driver inspection function\\n  - New addition of electrical `LiNbO3` material and anisotropic dielectric constant model\\n  - Add `FDE` import electric field distribution decomposition function\\n  - Add `Impact Ionization` model\\n  - Add DDM module function for SDK\\n  - Add DDM license settings for the `Setup` and `License` settings interfaces\\n  - Add interface script\\n\\n- Correction\\n\\n  - Fix the issue where `DDM` simulation does not support `Structure Group`\\n\\n- Remaining defects\\n\\n  - Occasional engineering errors using `undo/redo`\\n  - `EME Index Monitor` does not support `Y normal/Z normal`\\n  - When the installation path is too deep or the project file name is too long, simulation failure may occur due to the `Windows` longest path (260 characters) limit\\n  - Structures made of the same material have different colors from a CAD perspective\\n  - The Mesh grid display of Monitor is not aligned with the mode field\\n  - Global variables do not support uppercase letters and underscores\\n  - Occasional result file opening failure\\n  - `SDK show 3D` occasional error\\n  - The `SDK Structure` setting does not verify whether the tilt angle is self crossing, and opening it in GUI will result in an error\\n  - Occasional simulation progress shows 100% stuck, and the project needs to be manually stopped and restarted\\n  - `EME Profile Monitor` result error\\n  - The mode field `csv` coordinates generated by `SDK` are offset by half of the grid\\n\\n---\\n\\n## V3.1.4.3 2024/05/13\\n\\n- Version: MaxOpticsStudioSetup-3.1.4.3-windows-amd64+build.0513\\n- Update time: 2024/05/13\\n\\n- Improvement\\n\\n  - None\\n\\n- New features added\\n\\n  - None\\n\\n- Correction\\n\\n  - Fixed the issue where the `mode source profile` displayed an error when using the `User Import` feature in FDTD\\n\\n- Remaining defects\\n\\n  - Occasional engineering errors using `undo/redo`\\n  - `EME Index Monitor` does not support `Y normal/Z normal`\\n  - When the installation path is too deep or the project file name is too long, simulation failure may occur due to the `Windows` longest path (260 characters) limit\\n  - Structures made of the same material have different colors from a `CAD` perspective\\n  - The Mesh grid display of Monitor is not aligned with the mode field\\n  - Global variables do not support uppercase letters and underscores\\n  - Calculation error in `Energy Density` of `FDE x-normal`\\n  - Occasional result file opening failure\\n  - SDK show 3D occasional error\\n  - The SDK Structure setting does not verify whether the tilt angle is self crossing, and opening it in GUI will result in an error\\n  - Occasional simulation progress shows 100% stuck, and the project needs to be manually stopped and restarted\\n  - `EME Profile Monitor` result error\\n  - The mode field `csv` coordinates generated by `SDK` are offset by half of the grid\\n\\n---"}]}')}}]);