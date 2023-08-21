---
sidebar_position: 2
---
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

---

### 怎样安装软件Max-Optics GUI？

Max-Optics Studio Local Passive Software Installation

#### 1. Open the Installation Package

Find the Setup.exe package, double-click to open the MOPassive-x.x.x.x+build.xxxxxxxx-setup
installation package.

!['install1'](../../static/img/faq/Installation/install1.png)

If there is a pop-up window come out, please press the “Run” button and wait to run.

![mediul](../../static/img/faq/Installation/install2.png)

Check the contents and click "I Accept The Agreement" item, then click "Next".

!['install3'](../../static/img/faq/Installation/install3.png )

#### 2. Select Destination Location

User can custom destination location by pressing “Browse...” button , or just use the auto-default
location, then press the “Next” button.

!['install4'](../../static/img/faq/Installation/install4.png )


#### 3. Select Start Menu Folder & Create a Shortcut

In the "Select Start Menu Folder" window, users can either click the "Next" button directly or
customize the location for shortcuts by clicking the "Browse..." button.

!['install5'](../../static/img/faq/Installation/install5.png )

In the "Select Additional Tasks" window, users can choose to create a desktop shortcut by selecting
the "Create a desktop shortcut" option, and then proceed by clicking the "Next" button. Alternatively,
users can simply uncheck the option and click the "Next" button directly.

!['install6'](../../static/img/faq/Installation/install6.png )

#### 4. Ready to Install

In the "Ready to Install" window, click the "Install" button to proceed with the installation.
!['install7'](../../static/img/faq/Installation/install7.png )

#### 5. Installing

Please wait, until installation is complete.

!['install8'](../../static/img/faq/Installation/install8.png )

#### 6. Restart

Check either the “yes, restart the computer now” or “No, I will restart the computer later” to invoke
the software. Then press “Finish” button.

!['install9'](../../static/img/faq/Installation/install9.png )

#### 7. Complete

Once the installation is complete, the user can find a shortcut to the software on their desktop.

!['install10'](../../static/img/faq/Installation/install10.png )

Notes:
User can double click the shortcut to invoke the software;

User also can double click a .passive file to open the software automatically

### 怎样安装软件 Max-Optics SDK

#### 1. 安装Python

&emsp;&emsp;AIO SDK仅支持Python3.8.x，如已安装Python，请确认Python的版本。如安装了多个版本的Python，请确认环境变量中PATH里的Python版本是否为Python3.8.x。如未安装Python，请根据下面引导进行操作。

①打开试用包中的"python-3.8.X-amd64.exe"；

![](../../static/img/faq/Installation/2.png)

②选择“Customize installation”；

③勾选“Add Python 3.8 to PATH”；

![](../../static/img/faq/Installation/3.png)

注意：自定义安装路径时，请确认安装路径的文件夹命名没有空格。空格会导致SDK无法找到Python路径（代码语法的原因）。建议使用的安装路径：''D:\Python\Python38''，此路径与SDK中settings.json默认设置路径一致。

#### 2. 安装VScode

&emsp;&emsp;Python代码环境下，使用代码编辑器利于SDK仿真脚本结果的管理。这里，我们选择免费代码编辑器Visual Studio Code（vscode）作为SDK脚本编辑器。此部分为vscode的安装引导流程及注意事项。

① 安装"VSCodeUserSetup-x64-1.74.3.exe"，选择默认设置即可；

![](../../static/img/faq/Installation/4.png)

② 在扩展中搜索并安装python插件，使vscode更好地支持Python编译环境。

![](../../static/img/faq/Installation/5.png)

注意：之后SDK的安装和后续模型仿真，均在vscode的界面中完成。

#### 3. 安装SDK
SDK的目录结构：
```python
├─.vscode
│   settings.json
│   tasks.json
│
├─ci
│   requirements.txt
│
└─wheels
    SDK的依赖包.whl
```
`.vscode`为使SDK支持VSCode中运行任务的配置文件；
`ci`中的`requirements.txt`为安装SDK所需的依赖及版本信息；
`wheels`为安装SDK所需的所有所有依赖；
P.S.依赖为SDK实现各种功能所需的各种模块包。

3.1 存放SDK文件夹

&emsp;&emsp;将SDK文件夹放在希望管理模型脚本和仿真数据的目录中；建议放在D盘根目录。

3.2 使用vscode打开SDK文件夹

（1）单击vscode的"文件";

（2）在下拉框中选择“打开文件夹”；

（3）选择AIO_SDK文件夹。

3.3 配置SDK所需的vscode环境

（1）在vscode的资源管理器中打开“.vscode”文件中的settings.json文件；

![](../../static/img/faq/Installation/6.png)

（2）在编辑区将路径设为python3.8.x.exe所在路径；默认路径为"D:\\Python\\Python38\\python.exe"。详见python安装部分的说明。

![](../../static/img/faq/Installation/7.png)

3.4 创建Python虚拟环境的原因

&emsp;&emsp;虚拟环境是独立于整个电脑操作系统的环境。在虚拟环境中安装、运行AIO_SDK，可以保证AIO_SDK调用依赖时，不与Windows环境中已存在的依赖产生冲突。依赖冲突可能导致SDK无法正常运行。

&emsp;&emsp;我们已配置好生成虚拟环境并安装AIO_SDK的脚本（tasks.json)，但是Windows为了保证系统安全，可能会阻止该配置脚本的运行。因此这里我们先修改Windows脚本的运行策略，保证后续的步骤能顺利进行。

3.5 修改Windows脚本的运行策略

(1) 以管理员身份运行“Windows PowerShell”；

![](../../static/img/faq/Installation/8.png)

(2) 输入"Set-ExecutionPolicy RemoteSigned"后按回车键。如提示是否变换策略，请输入"Y"并回车。此时，Windows脚本运行安全策略已改变。

![](../../static/img/faq/Installation/9.png)

3.6 通过Create PIP任务进行创建。

&emsp;&emsp;点击终端，在下拉菜单中点击运行任务；后会在vscode中弹出新的菜单；在该菜单中选择Create PIP。

![](../../static/img/faq/Installation/10.png)

![](../../static/img/faq/Installation/11.png)

&emsp;&emsp;VSCode会自动打开终端进行SDK的安装, 安装结束后, 按任意键退出。

![](../../static/img/faq/Installation/12.png)

#### 4. 启用虚拟环境

&emsp;&emsp;通过上面的步骤，在vscode资源管理器中应出现.venv_maxoptics的文件夹；我们需要调用安装好SDK的虚拟环境进行仿真，下面是配置步骤。

![](../../static/img/faq/Installation/13.png)

（1）在vscode中单击F1键，弹出菜单栏，如图所示。

![](../../static/img/faq/Installation/14.png)

(2) 单击Python：选择解释器；在新的菜单中选择如图所示的解释器。此解释器即为安装好SDK的虚拟环境。

![](../../static/img/faq/Installation/15.png)

(3) 启动新的终端，在终端栏看到出现（.venv_maxoptics）的虚拟环境标识，即成功启动虚拟环境。

![](../../static/img/faq/Installation/16.png)

#### 5. 查看Handbook的方法

&emsp;&emsp;在VSCode中打开一个终端, 此时会激活.venv_maxoptics虚拟环境, 通过输入“mo.sdk doc“命令即可查看手册。此步骤亦可作为软件正确安装的测试方法。

![](../../static/img/faq/Installation/17.png)

![](../../static/img/faq/Installation/18.png)

#### 6. Copy Examples的方法

&emsp;&emsp;在VSCode中打开一个终端, 此时会激活.venv_maxoptics虚拟环境, 通过输入”mo.sdk init -n examples”命令，可导入仿真模型案例。

&emsp;&emsp;其中, -n为要拷贝的目标文件夹名称

![](../../static/img/faq/Installation/19.png)

&emsp;&emsp;此时, 会在AIO_SDK文件夹下创建一份名为examples的脚本样例。

![](../../static/img/faq/Installation/20.png)

#### 7. Run File

&emsp;&emsp;在examples文件夹中，打开一个案例脚本的.py文件, 在终端中运行Run File任务，即可执行脚本，进行仿真。

![](../../static/img/faq/Installation/21.png)

#### 8. License配置

&emsp;&emsp;注意：试用License与无源单机版相同，如已配置好无源单机版的License，无需重复配置。

（1）在线方式激活授权码

①打开授权管理工具“MaxOpticsSDK__LicenseManager_x64.exe”；

②点击激活（左上第一个按钮），选择“通过联网方式自动激活“，确定；

（2）离线方式激活授权码
①打开授权管理工具“MaxOpticsSDK__LicenseManager_x64.exe”；

②点击激活（左上第一个按钮），选择“不能连接互联网，通过离线方式激活“，确定；

③选择“使用激活文件“，将文件类型换为*.txt，打开”ZAKT5VW6LY37KNU7-pre.txt“文件；

④弹出授权成功对话框，并提示保存确定文件。点击确定选择任意文件夹保存“确认文件”。


## Create PIP时报错找不到相应版本怎么办？

&emsp;&emsp;如果您在安装SDK的过程中Creat PIP时出现报错：

```python
ERROR: Could not find a version that satisfies the requirement max_optics_sdk~
```

&emsp;&emsp;您需要先检查一下Python的版本号是否是3.8.*，目前我们不支持除此之外的版本。其次wheel文件夹中是否包含以下三个文件：

max_optics_local_sdk-2.3.0.4.630.2001-cp38-cp38-win_amd64.whl

max_optics_sdk-2.3.0.4.630.2000-py3-none-any.whl

max_optics_whale-2.3.0.4.630.2003-cp38-cp38-win_amd64.whl

&emsp;&emsp;最后再查看一下requirements.txt中的版本信息是否与以上三个文件中的版本信息相符。

## 安装软件后首次打开时报错Tunnel Breakoff怎么办？

&emsp;&emsp;您可以检查是否将软件误装在中文路径下，是否已关闭不支持安装使用的杀毒软件目前腾讯管家和Windows Defender支持MO软件使用），并且检查是否已启动服务。

&emsp;&emsp;然后重启电脑，重装软件检查是否装在C盘（部分用户C盘权限不够）。

&emsp;&emsp;最后以管理员身份运行..\\MOService\bin\Release\mol-mid-pas-console.exe（中间件服务）。



## 怎样去配置和使用集团服务？

&emsp;&emsp;我们Max-Optics系列产品采用集团授权服务来提供安全又可靠的软件保护和授权管理方案，并且在用户端具有相同的license配置方法。由于单机有源软件产品中涉及并使用到第三方软件，需要单独配置第三方软件的license。
&emsp;&emsp;集团授权是指部署在集团用户的局域网内部，并且用户需要安装单独的集团授权服务程序，来为集团内用户提供整体授权支持。

&emsp;&emsp;在安装好相应的Max-Optics软件产品之后，配置集团服务的过程如下：

1、首先你需要向贵公司的管理员获取License服务器IP地址和端口号，形式如：192.168.91.67:8273。

2、在软件安装包中找到BitAnswer用户端配置软件，一般是在BitAnswer文件夹下。

![](../../static/img/faq/Installation/37.png)

3、双击配置软件，打开配置界面。

![](../../static/img/faq/Installation/38.png)

4、你可以选择“自动查找”或“手动设置”的方式配置License服务地址。

(1)自动查找

①在“集团服务器列表”中选择对应的IP地址行，如果没有对应的IP地址，点“刷新”按钮。

![](../../static/img/faq/Installation/39.png)

②在“集团服务器列表”中选择对应的IP地址行，点“应用”按钮

![](../../static/img/faq/Installation/40.png)

③提示“服务器设置成功”，点“确定”按钮。

![](../../static/img/faq/Installation/41.png)

④在“集团服务器设置工具”窗口，点“退出”按钮，至此配置完成。

![](../../static/img/faq/Installation/42.png)

（2）手动设置

①在“设置集团服务器地址”窗口，输入你获得的IP地址和端口，点“设置”按钮。

![](../../static/img/faq/Installation/43.png)

②在“集团服务器设置工具”窗口，点“退出”按钮，至此配置完成。

![](../../static/img/faq/Installation/44.png)

4、Max-Optics Studio有源单机版及有源SDK额外配置

&emsp;&emsp;Max-Optics Studio有源单机版及有源SDK产品由于用到了第三方的软件，需要额外配置第三方的软件的license文件，其提供的license文件分试用版和正式版。其中试用版是指license文件可支持多人使用，供用户在正式购买前试用。正式版是指license文件只支持用户绑定唯一物理机地址使用。
&emsp;&emsp;如同时安装Max-Optics Studio有源单机版和有源SDK，第三方软件的license只需配置一次。

（1）配置方法一

&emsp;&emsp;首先放置license文件，其次再配置环境变量。这种配置方法仅适用试用版license文件。

①先将license文件，放在一个路径下，这个路径客户可以根据自己习惯设置，本文作者设置路径如下图：

![](../../static/img/faq/Installation/45.png)

②打开系统环境变量配置界面，在系统变量中配置个新的变量，变量名为“LM_LICENSE_FILE”（必须是这个名字），变量的值就是license文件的绝对路径。

打开“搜索”窗口，输入“环境变量”，可以找到“编辑系统环境变量”，选中打开窗口。

![](../../static/img/faq/Installation/46.png)

选择“高级”标签，选择“环境变量”按钮。

![](../../static/img/faq/Installation/47.png)

选择“新建”按钮。

![](../../static/img/faq/Installation/48.png)

填写“变量名”和“变量值”后，点“确定”按钮，返回上级界面。

![](../../static/img/faq/Installation/49.png)

在界面上，点“确定”按钮，返回上级界面。

![](../../static/img/faq/Installation/50.png)

在界面上，点“确定”按钮，至此设置完成。

![](../../static/img/faq/Installation/51.png)

（1）配置方法二

&emsp;&emsp;正式版license文件只适用配置方法二，试用版license也可以用配置方法二。

①查看本机信息

&emsp;&emsp;在命令行中运行 ipconfig /all ，查看Windows IP配置，记录主机名、以太网适配器的物理地址这两个数据，接下来的步骤要用。

![](../../static/img/faq/Installation/52.png)

②修改license文件

需要修改提供给你的license文件（*.lic）内容，正常内容如下：

![](../../static/img/faq/Installation/53.png)

&emsp;&emsp;第一行请根据本机情况，修改相应的数据，其中 MG-SE-limao-01为本机的主机名，1C697AF3CF58 为本机的物理地址（输入时不要带上“-”）；第二行必须是VENDOR COGENDA, 请和上图保持一致；第三行必须是 USE_SERVER, 请和上图保持一致。

③双击启动shell.bat脚本

&emsp;&emsp;找到你安装第三方软件的目录（默认安装路径：C:\Program Files\Genius），进入Bin文件夹，将你修改过的license文件拷贝到这里，之后双击启动同目录下的shell.bat。

![](../../static/img/faq/Installation/54.png)

④输入激活服务的命令

在启动窗口中，输入：lmgrd -c license文件名.lic；其中-c 选项是第三方软件的证书地址路径。

![](../../static/img/faq/Installation/55.png)

验证成功后会跳出两个窗口，使用第三方软件时请勿关闭这些窗口。

![](../../static/img/faq/Installation/56.png)

&emsp;&emsp;集团授权只服务支持特定数量的用户，当使用人数达到上限时，会提示“激活的机器数量已达上限，授权码不能再更多的机器上使用”，具体常见问题和错误信息请访问网址：https://bit.bitanswer.cn/doc/?t=welcome

&emsp;&emsp;如在使用过程中遇到问题，请联系贵公司的管理员或曼光的技术支持人员。

- 电话: 150 6666 1688
- 邮箱: sales@max-optics.com