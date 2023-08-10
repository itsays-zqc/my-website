---
sidebar_position: 2
---
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

---
## 怎样安装 Max-Optics 的软件？
### 1. How to install Max-Optics GUI

Max-Optics Studio Local Passive Software Installation

(1) Open the Installation Package

Find the Setup.exe package, double-click to open the MOPassive-x.x.x.x+build.xxxxxxxx-setup
installation package.

!['install1'](../../static/img/faq/Installation/install1.png)

If there is a pop-up window come out, please press the “Run” button and wait to run.

!['install2'](../../static/img/faq/Installation/install2.png)

Check the contents and click "I Accept The Agreement" item, then click "Next".

!['install3'](../../static/img/faq/Installation/install3.png )

(2) Select Destination Location

User can custom destination location by pressing “Browse...” button , or just use the auto-default
location, then press the “Next” button.

!['install4'](../../static/img/faq/Installation/install4.png )


(3) Select Start Menu Folder & Create a Shortcut

In the "Select Start Menu Folder" window, users can either click the "Next" button directly or
customize the location for shortcuts by clicking the "Browse..." button.

!['install5'](../../static/img/faq/Installation/install5.png )

In the "Select Additional Tasks" window, users can choose to create a desktop shortcut by selecting
the "Create a desktop shortcut" option, and then proceed by clicking the "Next" button. Alternatively,
users can simply uncheck the option and click the "Next" button directly.

!['install6'](../../static/img/faq/Installation/install6.png )

(4) Ready to Install

In the "Ready to Install" window, click the "Install" button to proceed with the installation.
!['install7'](../../static/img/faq/Installation/install7.png )

(5) Installing

Please wait, until installation is complete.

!['install8'](../../static/img/faq/Installation/install8.png )

(6) Restart

Check either the “yes, restart the computer now” or “No, I will restart the computer later” to invoke
the software. Then press “Finish” button.

!['install9'](../../static/img/faq/Installation/install9.png )

(7) Complete

Once the installation is complete, the user can find a shortcut to the software on their desktop.

!['install10'](../../static/img/faq/Installation/install10.png )

Notes:
User can double click the shortcut to invoke the software;

User also can double click a .passive file to open the software automatically

### 2. How to install Max-Optics Python SDK

(1) Python Environment Prepare

通过以下命令, 确保本地环境`Python`版本为`3.8.x`

```py
python --version
```

(2) Copy handover

目录结构如下

```
├─.vscode
│      settings.json
│      tasks.json
│
├─ci
│      requirements.txt
│
└─wheels
        aiohttp-3.8.3-cp38-cp38-win_amd64.whl
        aiosignal-1.3.1-py3-none-any.whl
        async_timeout-4.0.2-py3-none-any.whl
        attrs-22.1.0-py2.py3-none-any.whl
        bidict-0.22.0-py3-none-any.whl
        cairocffi-1.4.0.tar.gz
        CairoSVG-2.5.2-py3-none-any.whl
        certifi-2022.9.24-py3-none-any.whl
        cffi-1.15.1-cp38-cp38-win_amd64.whl
        charset_normalizer-2.0.12-py3-none-any.whl
        colorama-0.4.6-py2.py3-none-any.whl
        contourpy-1.0.6-cp38-cp38-win_amd64.whl
        cssselect2-0.7.0-py3-none-any.whl
        cycler-0.11.0-py3-none-any.whl
        defusedxml-0.7.1-py2.py3-none-any.whl
        drawSvg-1.8.3-py3-none-any.whl
        fonttools-4.38.0-py3-none-any.whl
        frozenlist-1.3.3-cp38-cp38-win_amd64.whl
        gdspy-1.6.12-cp38-cp38-win_amd64.whl
        idna-3.4-py3-none-any.whl
        imageio-2.22.4-py3-none-any.whl
        kiwisolver-1.4.4-cp38-cp38-win_amd64.whl
        matplotlib-3.6.2-cp38-cp38-win_amd64.whl
        max_optics_local_sdk-1.4.0.xxxx.xxxx-cp38-cp38-win_amd64.whl
        max_optics_sdk-1.9.0.0.xxxx.xxxx-py3-none-any.whl
        max_optics_whale-1.2.0.xxxx.xxxx-cp38-cp38-win_amd64.whl
        multidict-6.0.2-cp38-cp38-win_amd64.whl
        numpy-1.22.4-cp38-cp38-win_amd64.whl
        packaging-21.3-py3-none-any.whl
        pandas-1.4.2-cp38-cp38-win_amd64.whl
        Pillow-9.1.1-cp38-cp38-win_amd64.whl
        pycairo-1.21.0-cp38-cp38-win_amd64.whl
        pycparser-2.21-py2.py3-none-any.whl
        pyparsing-3.0.9-py3-none-any.whl
        python_dateutil-2.8.2-py2.py3-none-any.whl
        python_engineio-4.3.4-py3-none-any.whl
        python_socketio-5.6.0-py3-none-any.whl
        pytz-2022.6-py2.py3-none-any.whl
        PyYAML-6.0-cp38-cp38-win_amd64.whl
        requests-2.27.1-py2.py3-none-any.whl
        scipy-1.8.1-cp38-cp38-win_amd64.whl
        seaborn-0.11.2-py3-none-any.whl
        setuptools-65.5.1-py3-none-any.whl
        setuptools_scm-7.0.5-py3-none-any.whl
        six-1.16.0-py2.py3-none-any.whl
        tinycss2-1.2.1-py3-none-any.whl
        toml-0.10.2-py2.py3-none-any.whl
        tomli-2.0.1-py3-none-any.whl
        typing_extensions-4.4.0-py3-none-any.whl
        urllib3-1.26.12-py2.py3-none-any.whl
        webencodings-0.5.1-py2.py3-none-any.whl
        yarl-1.8.1-cp38-cp38-win_amd64.whl
        zipfile36-0.1.3-py3-none-any.whl
```

其中:

`.vscode`为支持`VSCode`中运行任务所需的配置文件

`ci`中的`requirements.txt`为安装`AIO`所需的依赖及版本信息

`wheels`为安装`AIO`所需的所有所有依赖

(3) Check/Modify settings.json config of VSCode

`python.defaultInterpreterPath`为本地环境中的`python`运行时地址, 请根据本地环境确认或修改

`python.findLinkFrom`为安装依赖包的路径, 无需修改

`python.analysis.typeCheckingMode`为是否开启类型开关, 默认为`basic`

(4) Open handover directory

!['install11'](../../static/img/faq/Installation/install11.png)
!['install12'](../../static/img/faq/Installation/install12.png)

(5) Create PIP

若为首次安装, 即未创建`Python`虚拟环境, 则通过`Create PIP`任务进行创建

!['install13'](../../static/img/faq/Installation/install13.png)
!['install14'](../../static/img/faq/Installation/install14.png)

VSCode会自动打开终端进行AIO SDK的安装, 安装结束后, 按任意键退出

!['install15'](../../static/img/faq/Installation/install15.png)

(6) Update PIP

若收到新的安装文件, 则将安装文件`xxx.whl`保存至`wheels`文件夹, 同时修改`requirements.txt`中的版本, 然后执行`VSCode`的`Update PIP`任务

!['install16'](../../static/img/faq/Installation/install16.png)

(7) handbook

在`VSCode`中打开一个终端, 此时会激活`.venv_maxoptics`虚拟环境, 通过输入如下命令可进行手册查看

```py
mo.sdk doc
```

!['install17'](../../static/img/faq/Installation/install17.png)

!['install18'](../../static/img/faq/Installation/install18.png)

(8) Copy examples
   
在`VSCode`中打开一个终端, 此时会激活`.venv_maxoptics`虚拟环境, 通过输入如下命令可进行`examples`拷贝

```py
mo.sdk init -n examples
```

其中, `-n`为要拷贝的目标文件夹名称

!['install19'](../../static/img/faq/Installation/install19.png)

此时, 会在handover文件夹下创建一份名为examples的脚本样例

!['install20'](../../static/img/faq/Installation/install20.png)

(9) Run File

打开脚本样例中的一个`py`文件, 在终端中运行`Run File`任务可执行脚本

!['install21'](../../static/img/faq/Installation/install21.png)

(10) MaxOptics License Instruction

授权设置终端 [MaxOptics SDK__SetLocalServer.exe](../../MaxOpticsSDK__SetLocalServer.exe)

## 怎样安装本地SDK许可证？

### Server: Install Group Licensing Local Service

1. Unzip the Release Packages
Local Service Installer: `bit_service.exe`

    Group licensing local service.
Extension Module: `MaxOptics SDK_.ext`

    The group licensing product extension module. 
    Users should install the Extension along with the Local Service Installer to support the product.
    
Group Licensing Setting Tools: `MaxOptics SDK__SetLocalServer.exe`
    
    The client queries/sets the group server address and port.

2. Installation & Activation

!['1'](../../static/img/how/1.jpg)

（1） Double click `bit_service.exe` for the installation;

（2）Open http://localhost:8274/manager/product.html ;

（3）Add Extension Module;

    !['2'](../../static/img/how/2.jpg)

（4）Activate the license online [Support online and offline];

    !['3'](../../static/img/how/3.jpg)
    !['4'](../../static/img/how/4.jpg)

（5）Search License Info via the Given URL, then enter the License Code on the User Login Page.

    !['5'](../../static/img/how/5.jpg)

### Activation Offline

1. Choose `Activation Offline`

    !['6'](../../static/img/how/6.jpg)

2. Enter your `Authorization Code` to generate the `Request Code`

    !['7'](../../static/img/how/7.jpg)

3. Copy or Export `Request Code`

    !['8'](../../static/img/how/8.jpg)

4. Open a tab with https://user.bitanswer.cn, enter your `Authorization Code`

5. Generate Update Code

    !['9'](../../static/img/how/9.jpg)
    !['10'](../../static/img/how/10.jpg)
    !['11'](../../static/img/how/11.jpg)

6. Copy or Download Update Code, and Import your Update Code

    !['12'](../../static/img/how/12.jpg)
    !['13'](../../static/img/how/13.jpg)

#### Module List: All License Code Features would be listed here

e.g.

!['14'](../../static/img/how/14.jpg)

#### Login List: All current running client machines using the license service would be listed here 
e.g.

!['15'](../../static/img/how/15.jpg)

### Client: Configuration

#### Configure the Group Licensing Service IP

On the client machine, running `MaxOptics SDK__SetLocalServer.exe` to configure
Group Licensing Local Service

It supports the two ways:

    Discovery Automatically
    Configure Manually

#### Create the Local Config File

Create `.sdk` dir on the User HOME

    *nix: HOME is /home/<user>
    Windows: HOME is C:\Users\<user>

```
mkdir -p ~/.sdk/
touch ~/.sdk/config.yml # or ~/.sdk/config.yaml
# or
touch ~/.sdk/config.toml
```

#### Configure Fields

Support YAML and TOML format, please refer to the following code snippets:

for YAML:

```
max_optics:
    is_group_auth: true
    sn: "<Authorization Code> if is_group_auth is false, else
delete this line"
    # the following block is only for group authorization
    group:
    host: "<group auth url>"
    port: "<group auth port>"
```

for TOML:

```
[max_optics]
is_group_auth = true
sn = "<Authorization Code> if is_group_auth is false, else delete
this line"
# the following block is only for group authorization
[max_optics.group]
host = "<group auth url>"
port = "<group auth port>"
```

## Create PIP时报错找不到相应版本怎么办？

如果您在安装SDK的过程中Creat PIP时出现报错：

```python
ERROR: Could not find a version that satisfies the requirement max_optics_local_sdk~
```

​	您需要先检查一下Python的版本号是否是3.8.*，目前我们不支持除此之外的版本。其次wheel文件夹中是否包含以下三个文件：

max_optics_local_sdk-1.4.0.xxxx.xxxx-cp38-cp38-win_amd64.whl
max_optics_sdk-1.9.0.0.xxxx.xxxx-py3-none-any.whl
max_optics_whale-1.2.0.xxxx.xxxx-cp38-cp38-win_amd64.whl

​	最后再查看一下requirements.txt中的版本信息是否与以上三个文件中的版本信息相符。

## 安装软件后首次打开时报错Tunnel Breakoff怎么办？

​	您可以检查软件是否安装在中文路径下，杀毒软件是否支持或关闭（目前腾讯管家和Windows Defender支持MO软件使用），检查服务是否启动、手动是否能起得来服务。

​	然后重启电脑，重装软件检查是否装在C盘（部分用户C盘权限不够）。

​	最后以管理员身份运行..\\MOService\bin\Release\mol-mid-pas-console.exe（中间键服务）。

## 虚拟机版SDK运行mo.sdk init -n examples时报错找不到指定模块怎么办？

​	如果虚拟机版SDK运行mo.sdk init -n examples时出现以下报错：

![](../../static/img/faq/Installation/1.png)

​	您可以在进到虚拟环境前输入命令 

```python
C:\Python\python.exe -m pip install msvc-runtime
```

​	后续正常操作即可	