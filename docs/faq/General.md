---
sidebar_position: 1
---
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

---
## What is Max-Optics?

![mologo](../../static/img/mo_logo.jpg)
### 公司简介：
上海曼光信息科技有限公司，成立于2018年8月。公司依托山东大学科研团队力量，凭借坚实的电磁场仿真与分析理论与技术基础，以及完备的自动化设备设计与制造、软件设计与开发能力研发出覆盖微波及光学频段的电磁场可视化软硬件产品，为客户提供完善的电磁场相关的仿真、设计、分析、测量解决方案。

公司业务面向5G、光通信、光电传感、光计算、工业物联网、国防安全等领域，主要涵盖电磁场仿真与测量两大业务。电磁仿真业务主要产品包括无源/有源光电芯片及系统仿真设计软件、光电芯片仿真设计服务、微波/射频天线仿真设计服务。电磁场测量业务光电子器件测量与参数提取平台；微波毫米波测量业务主要产品包括5G NR OTA测试系统、平面/柱面/球面近远场天线测试系统；公司以客户为中心，从客户直接需求出发，完成涵盖自动化测量设备软硬件定制化设计、制造、开发、交付的交钥匙工程，并提供电磁场相关设计与测量分析增值服务。


### Company Profile:
<div class="text-justify">
Shanghai Max-Optics Information Technology Co.,Ltd was established in August 2018. With the support of the research team from Shandong University, the company has developed electromagnetic field visualization software and hardware products covering microwave and optical frequency bands, based on solid electromagnetic field simulation and analysis theory and technology foundation, as well as comprehensive capabilities in automated equipment design and manufacturing, software design and development. These products provide customers with comprehensive solutions for electromagnetic field simulation, design, analysis, and measurement.

The company's business focuses on 5G, optical communication, optoelectronic sensing, optical computing, industrial IoT, and defense security. It mainly covers two major businesses: electromagnetic field simulation and measurement. The electromagnetic simulation business includes simulation design software for passive/active optoelectronic chips and systems, optoelectronic chip simulation design services, and microwave/radio frequency antenna simulation design services. The electromagnetic field measurement business includes optoelectronic device measurement and parameter extraction platforms. The microwave millimeter wave measurement business mainly includes 5G NR OTA testing systems, planar/cylindrical/spherical near-field and far-field antenna testing systems. The company is customer-oriented, starting from the direct needs of customers, and completes turnkey projects that cover customized design, manufacturing, development, and delivery of automated measurement equipment hardware and software. It also provides value-added services for electromagnetic field design and measurement analysis.
</div>

<!-- | 曼光     | 曼光     | 曼光科技     |
| ------- | ------- | ------- |
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
 -->
<!-- 这是一个行内公式： <InlineMath math="E=mc^2" />

这是一个块级公式：

<BlockMath math="\sum_{i=1}^{n} i = \frac{n(n+1)}{2}" /> -->

## 我们具有哪些优势？
​	我们是第一家基于“本地+云”计算平台的光子集成电路(PIC)仿真软件公司，能够为行业提供随时随地的软件+资源+技术支持的一站式服务。

软件仿真的重要性：

​	随着半导体器件向更小尺寸和更复杂结构方向发展，采用仿真软件解决方案相较于实验室测量法具有众多优势，在研发半导体器件过程中发挥着关键作用。通过高度精确的算法能够快速建模仿真器件，而且能够观察到器件内部的物理过程。客户通过仿真软件不仅可以设计新型复杂的器件结构，还可以通过改变器件的工作条件或者器件模型中各种物理量及其参数，来提出优化器件性能的方案。光电集成芯片模拟设计到从材料到系统的不同领域的不同类型的模拟，使用仿真软件不仅能够降低生产成本、缩短开发周期并提高生产力，而且清晰简明的结果数据也方便不同领域的研究人员们共同交流协作完成较为复杂的工程。

软件独特性：

​	我们推出了基于“本地+云”的两种软件形式，一种是基于python脚本的软件开发工具包SDK，具有建模、仿真、后处理和数据显示的功能，能够调用所有模块并且简单易学易扩展；另一种是GUI用户页面，您可以利用两者的交互来进行仿真。同时我们还搭配先进的网格优化和GPU加速功能来缩短仿真时间。我们还推出了虚拟机版本和Windows版本用于满足客户不同的仿真搭建环境。

产品优势：

​	我们目前结合多种仿真算法为无源器件和有源器件提供高效、可靠的一站式解决方案。我们的仿真具有跟行业领先相媲美的精度和速度。



## 我们目前有哪些产品？

​	我们目前支持的器件包括无源器件、调制器、探测器和激光器。我们改进经典CEM算法来分析光的行为，并且基于“本地+云”的新颖UI配置将无源模块用于模拟光波导和无源光学器件。并且将载流子输运仿真算法和电磁仿真算法相结合，为光电有源器件的仿真提供了高效可靠的一站式解决方案。



​	若希望了解更多相关器件产品的具体信息，请移步网站的 "Example Library"模块查看相关器件的案例说明。
​	若希望了解更多相关软件产品SDK的具体信息，请移步网站的 "Max-Optics SDK"模块查看相关器件的案例说明

## 无源器件仿真有哪些功能？
我们改进经典CEM算法和基于“本地+云”的新颖UI配置将无源模块用于模拟光波导和无源光学器件。以下是无源器件支持的模块。

| FDTD模块                                                     | 共享模块                                                     | EME模块                                                      |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| • Mode/Gaussian/Import source<br/>• PML/PEC boundary<br/>• 0D/1D/2D/3D frequency monitor<br/>• 0D/1D/2D/3D time monitor <br/>• Early Shutoff<br/>• Transmission calculation<br/>• Mode expansion<br/>• S-parameters calculation<br/>• Global parameter sweeping<br/>• Multi-threaded computing | • 3D Modeling• GDS import<br/>• Tilt slope of waveguide profile<br/>• Non-Uniform/Uniform Mesh<br/>• Conformal Mesh Refinement<br/>• Standard material library<br/>• Custom isotropic/diagonally<br/>anisotropic materials<br/>• Far field | • Effective Index Calculation<br/>• Group Index Calculation<br/>• Arbitrary port settings<br/>• PEC/PMC/PML boundary<br/>• 2D frequency domain monitor<br/>• S-parameter calculation<br/>• Frequency Sweeping<br/>• Group span quick sweeping<br/>• Overlap Analysis<br/>• Multi-threaded Computing |


## 有源器件仿真有哪些功能？
我们有源模块将光模块和电模块真正集成在一起，结合载流子输运仿真算法和电磁仿真算法，通过一次建模实现多次不同仿真为光电有源器件的仿真提供了高效可靠的一站式解决方案。以下是有源器件支持的模块。

| AFDTD模块                                                    | AFDE模块                                                     | OEDevice模块                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| • Mode Source<br/>• PML/PEC Boundary<br/>• 0D/1D/2D/3D Frequency Monitor<br/>• Early Shutoff<br/>• Transmission Calculation<br/>• Multi-thread Computing<br/>• Generation Rate Extraction | • Effective Index Calculation<br/>• Group Index Calculation<br/>• VpiL, VpiLoss Extraction | • Steady State / SSAC / Transient Simulation<br/>• Physical Models and Parameters of Electrical <br/>• Materials<br/>• Multi-thread Computing<br/>• Convergence Control<br/>• Carrier / Potential / Band Profile Monitor<br/>• Doping Import<br/>• Generation Rate Import |

| 共享模块                       | AFDTD与AFDE共享模块                                          |
| ------------------------------ | ------------------------------------------------------------ |
| • 3D Modeling<br/>• GDS Import | • Non-Uniform/Uniform Mesh<br/>• Conformal Mesh Refinement<br/>• Standard Material Library<br/>• Custom Isotropic Optical Materials |

## 应用到的仿真模块有哪些？
​	我们对器件结构和掺杂、仿真区域划分网格并采用有限差分的数值方法，用差分代替微分进行近似求解。使用有限差分本征模（FDE）方法探究本征模的场分布以及器件的折射率和损耗。时域有限差分法（FDED）探究小中型器件的传输速率、反射率和损耗等特性。使用本征模扩展算法（EME）讨论较长型器件的传输速率、反射率和损耗等特性。

***<font size = "4" color = "#0000dd">1、Max-Optics Studio-FDTD </font><br />***

​	Max-Optics Studio FDTD 是国产微纳光电子器件仿真利器。具有领先的 GPU 加速能力，可高速求解三维 / 二维麦克斯韦方程。能够精确分析各种具有亚波长结构的微纳光电子器件、材料中的电磁场传播以及光和物质的相互作用，同时支持图形界面和脚本操作，是您光电子创新的得力助手。

独有 FDTD 实时场图叠加功能，将光场迭代进度直接叠加在 3D CAD 结构上，仿真进度一目了然。

***<font size = "2" color = "#0000dd">产品关键特性： </font><br />***

***<font size = "1" color = "#0000dd">—— GPU加速技术 </font><br />***

曼光独有的 GPU FDTD 算法加速技术，通过更高效率的线程管理以及访存规划，充分利用 GPU 众核心资源，将 FDTD 运算速度提升十倍以上。

***<font size = "4" color = "#0000dd">2、Max-Optics Studio-EME </font><br />***

Max-Optics Studio EME 是一款高效计算长距离传输器件的仿真工具，支持有限差分算法下的模式分析 FDE 以及本征模展开，传播重叠积分计算。

***<font size = "2" color = "#0000dd">产品关键特性： </font><br />***

***<font size = "1" color = "#0000dd">—— Curve Mesh网格技术 </font><br />***

曼光独有的 3D curve mesh 网格技术可在使用六面体网格情况下对曲面（曲线）结构进行精确等效，降低网格密度的条件下，不丢失运算精度，进而提高运算效率、

***<font size = "1" color = "#0000dd">—— Curve Mesh网格技术 </font><br />***

• EME 模块所需计算模式数量减少 50%，计算结果稳定性更高

***<font size = "4" color = "#0000dd">3、Max-Optics Studio-OE Device </font><br />***

OE Device 是一站式求解有源光电器件中电磁场和载流子运动的便利工具。可自洽求解电磁场（麦克斯韦方程），静电势（泊松方程）和自由载流子密度（漂移 - 扩散方程）整个建模到仿真过程在一个界面中一次完成。

***<font size = "4" color = "#0000dd">4、Max-Optics Studio-MO Link </font><br />***

MO Link 是光子芯片的链路级仿真工具，支持多模、双向、多通道的仿真。

​	若希望了解更多仿真算法的详细信息，请移步网站的 "Tutorials"模块查看。

## 我们具有哪些产品形态？
​	我们推出了两种形式的软件支持离线模式或者云端使用，其中离线模拟只需要本地计算程序。一种是软件开发工具包SDK，另一种是GUI用户界面。SDK 基于python脚本可以统一规范调用所有模块并且支持GDS文件导入。当你在SDK中搭建仿真时，可以生成GUI文件以提供较为直观的仿真方式。

| 产品形态 | 网页版                                                      | 单机版                                                       | SDK                                                          |
| -------- | ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 页面显示 | ![](../../static/img/faq/General/12.png) | ![](../../static/img/faq/General/13.png)  | ![](../../static/img/faq/General/14.png)  |
| 功能     | • 支持跨平台登录<br/>• 支持灵活调度云上算力资源<br/>        | • 本地算力资源<br/>•操作习惯，简洁传统 <br/>• 全3D建模界面<br/>•仿真历史自动保存回看 <br/>• 支持任意输入框中设定全局变量的运算表达式<br/>• 支持仿真结构的非等比例缩放<br/> | •支持脚本建模 <br/>• 支持GDS Ⅱ导入<br/>• 对接丰富的Python第三方开源库<br/>• 支持调用本地、云上算力资源<br/>• 方便和第三方工具交互工作<br/>• 内置示例代码，快速上手<br/> |


​	若希望了解更多关于SDK的安装和使用说明等详细信息，请移步网站的 "Max-Optics SDK"模块查看。

## 我们提供哪些服务？

公司主营业务主要涵盖光电集成芯片仿真软件与芯片和系统测试两大业务板块，光电集成芯片仿真软件主要产品包
括无源 / 有源光电集成芯片及系统仿真设计软件，光电集成芯片测试系统解决方案和测试服务，光电集成芯片仿真
流程定制服务，微波 / 射频仿真和测试系统定制服务，相关产品和解决方案已经成功应用到国内头部客户，确保国
内产业的业务延续性，在业界取得了良好的声誉。

特别是光电集成芯片仿真设计软件领域，曼光打破了光电芯片核心算法及“know-how”的国际技术壁垒，率先提
出并建立了基于云架构的光电芯片仿真设计平台，可为光通信、光计算、光传感、量子计算、光显示提供高效的
光电集成芯片仿真设计工具，服务于 5G、人工智能、国防安全等领域。

教学与培训：

​	我们在官网提供器件仿真和软件安装相关的常规问题，您可以自主进行在线查询。我们具有详细且典型的器件案例库，并且搭配有教学视频和说明文档，方便用户了解半导体物理和软件使用的专业知识。关于器件案例和计算方法的详细信息，请移步本网站的"Example Library"和“Tutorials”模块。相关软件安装和使用问题请移步本网站的“Max-Optics SDK”模块。

技术支持团队：

​	我们的技术支持团队拥有丰富的专业知识，能够理解、诊断和解决技术相关的问题。我们致力于利用经验证的器件建模方法解决技术开发和制造方面的问题的方式来优化器件，为客户提供了校准、仿真、模型开发和咨询服务。

​	对于独特半导体器件建模需求但没有时间或资源在公司内部使用SDK软件的用户，我们可以提供建模服务，为您提供完整、快速、准确的解决方案。交付内容包括但不限于：图形输出（结构图和特性图）、结构（器件结构和网格）、器件特性数据。您可以网页在线提交反馈的问题，或者通过致电和邮件的方式联系我们。

软件支持团队：

​	我们的软件支持团队由经验丰富的工程师组成，致力于软件产品功能和算法的开发，同时为客户提供许可证验证、软件和计算平台安装的服务。



​	欢迎致电或邮件联系我们：

​	电话：150 6666 1688

​	邮箱：sales@max-optics.com


## 怎样获得技术支持服务？

​	When you need technical support or have inquiries related to using Max-Optics, you can follow these steps to obtain support and write a request for assistance:

Clearly State the Issue or Requirement:
​	Describe the issue or requirement concisely. Use clear language to explain the specific support you are seeking.

Provide Detailed Information: 
​	Provide as much relevant information as possible about the issue, such as error messages, steps taken, software version, operating system, etc. This will assist the support personnel in analyzing and diagnosing the problem.

Include Screenshots or Log Files: 
If applicable, attach relevant screenshots or log files to supplement the problem description. These visual aids provide additional context and facilitate the identification and resolution of the issue.

List Attempted Solutions: 
If you have already attempted some solutions without success, mention them in your request. Provide details of the steps you have taken and the outcomes. This will help the support team understand the efforts you have already made and avoid repetition.

Be Polite and Clear: 
Maintain a polite and clear tone when writing your support request. Use professional language and appropriate etiquette to express your issue or requirement and express gratitude for the support team's assistance.

User Feedback：

Please enter your question and feedback below:

<textarea rows="20" cols="100" placeholder="Enter your question and feedback here"></textarea>

---

Thank you for your feedback! We will address your question as soon as possible. If you need further assistance, please contact our customer support team.

Contact Information:
- Phone: 150 6666 1688
- Email: sales@max-optics.com

## 个人在出差或居家办公时该如何设置授权并使用软件？

​	如果贵公司采用集团授权的方式，将服务器布置在公司内网。本问题解答了个人想要脱离内网异地办公的时候应该如何设置授权从而成功使用我们的软件。

​	您可以使用VPN从异地接入公司网络进行使用。如果没有VPN访问权限，可以向贵公司内部的授权服务器申请开放一个公网访问的权限（有一个公网IP和端口），然后在软件设置中将服务器的IP地址填写为新申请的公网地址。

​	或者我们可以辅导客户里面的授权服务器管理人员，采用“集团授权借出模式”，将其采购的所有license数量中分出来一个license，做成临时离线license。具体操作如以下流程所示。

集团授权借出模式设置：

（1）登录 https://bit.bitanswer.cn

（2）左侧任务栏选择业务选项

![](../../static/img/faq/General/7.png)

（3）在右侧授权信息中选择授权借出

![](../../static/img/faq/General/8.png)

## 如何为AIO SDK 配置 Jupyter 环境?

​	在命令行中，activate All-in-One SDK所在的虚拟环境，然后进行如下操作：
（1）安装 ipykernel

```python
    pip install ipykernel
```

（2）将环境写入notebook的kernel中

```python
    python -m ipykernel install --user --name "mang1903" --display-name "mang1903"
```

（3）打开jupyter notebook

```python
    jupyter notebook
```

（4）点击新建ipynb文件，可看到内核可选”mang1903”，(“mang1903”为之前设置的”mang1903”虚拟环境的display-name，用户可以自行设定)

![](../../static/img/faq/General/9.png)

## Python安装路径中有空格怎么办？

​	如果Python安装路径中有空格，在安装AIO的第一步创建虚拟环境的时候就会报错，系统会把空格前的路径错误识别为一个命令。这种情况下如果不能修改python安装路径怎么办？

​	您可以使用双引号或原生字符串对路径进行包含，如下所示：

```python
path = "C:/Program files/Python/python.exe"
```



