(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{546:function(t,a,s){"use strict";s.r(a);var i=s(7),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nessus的整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nessus的整理"}},[t._v("#")]),t._v(" Nessus的整理")]),t._v(" "),a("p",[t._v("Nessus号称是世界上最流行的漏洞扫描程序，全世界有超过75000个组织在使用它。该工具提供完整的电脑漏洞扫描服务，并随时更新其漏洞数据库。Nessus不同于传统的漏洞扫描软件，Nessus可同时在本机或远端上遥控，进行系统的漏洞分析扫描。Nessus也是渗透测试重要工具之一。所以，本章将介绍安装、配置并启动Nessus。")]),t._v(" "),a("h2",{attrs:{id:"安装和配置nessus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置nessus"}},[t._v("#")]),t._v(" 安装和配置Nessus")]),t._v(" "),a("p",[t._v("为了定位在目标系统上的漏洞，Nessus依赖feeds的格式实现漏洞检查。Nessus官网提供了两种版本：家庭版和专业版。")]),t._v(" "),a("ul",[a("li",[t._v("家庭版：家庭版是供非商业性或个人使用。家庭版比较适合个人使用，可以用于非专业的环境。")]),t._v(" "),a("li",[t._v("专业版：专业版是供商业性使用。它包括支持或附加功能，如无线并发连接等。")])]),t._v(" "),a("p",[t._v("本小节使用Nessus的家庭版来介绍它的安装。具体操作步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）下载Nessus软件包。Nessus的官方下载地址是http://www.tenable.com/products/ nessus/select-your-operating-system。在浏览器中输入该地址，将显示如图5.1所示的界面。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00193.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（2）在该界面左侧的Download Nessus下，单击Linux，并选择下载Nessus-5.2.6- debian6_i386.deb包")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00194.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（3）单击Nessus-5.2.6-debian6_i386.deb")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00195.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（4）在该界面单击Agree按钮，将开始下载。然后将下载的包，保存到自己想要保存的位置。")]),t._v(" "),a("p",[t._v("（5）下载完Nessus软件包，现在就可以来安装该工具。执行命令如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@kali:~# dpkg -i Nessus-5.2.6-debian6_i386.deb\nSelecting previously unselected package nessus.\n(正在读取数据库 … 系统当前共安装有 276380 个文件和目录。)\n正在解压缩 nessus (从 Nessus-5.2.6-debian6_i386.deb) …\n正在设置 nessus (5.2.6) …\nnessusd (Nessus) 5.2.6 [build N25116] for Linux\nCopyright (C) 1998 - 2014 Tenable Network Security, Inc\n \nProcessing the Nessus plugins…\n[##################################################]\n \nAll plugins loaded\n \n - You can start nessusd by typing /etc/init.d/nessusd start\n - Then go to https://kali:8834/ to configure your scanner\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("看到以上类似的输出信息，表示Nessus软件包安装成功。Nessus默认将被安装在/opt/nessus目录中。")]),t._v(" "),a("p",[t._v("（6）启动Nessus。执行命令如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@kali:~# /etc/init.d/nessusd start\n$Starting Nessus : .\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("从输出的信息中可以看到Nessus服务已经启动。")]),t._v(" "),a("p",[t._v("注意：使用Nessus之前，必须有一个注册码。关于获取激活码的方法在第2章已经介绍过，这里就不再赘述。")]),t._v(" "),a("p",[t._v("（7）激活Nessus。执行命令如下所示")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@Kali:~# /opt/nessus/bin/nessus-fetch --register 9CC8-19A0-01A7-D4C1- 4521\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("（8）为Nessus创建一个用户。执行命令如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("root@Kali:~# /opt/nessus/sbin/nessus-adduser\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("（9）登录Nessus。在浏览器中输入地址"),a("a",{attrs:{href:"https://xn--ip:8834//%E4%B8%BB%E6%9C%BA%E5%90%8D:8834%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://主机IP:8834或https://主机名:8834。"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("通过以上步骤的详细介绍，Nessus就配置好了，现在就可以使用Nessus扫描各种的漏洞。使用Nessus扫描漏洞之前需要新建扫描策略和扫描任务，为了后面能顺利的扫描各种漏洞，接下来将介绍新建策略和扫描任务的方法。")]),t._v(" "),a("p",[a("strong",[t._v("1.添加策略")])]),t._v(" "),a("p",[t._v("添加策略的具体操作步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）登录Nessus。Nessus是一个安全链接，所以需要添加信任后才允许登录。在浏览器地址栏中输入"),a("code",[t._v("https://192.168.41.234:8834")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00197.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（2）在该界面单击I Understand the Risks按钮。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00198.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（3）该界面显示了所存在的风险，单击Add Exception按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00199.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（4）在该界面单击Confirm Security Exception按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00200.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（5）在该界面输入前面创建的用户名和密码，然后单击Sign In按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00201.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（6）在该界面使用鼠标切换到Policies选项卡上")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00202.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（7）在该界面单击New Policy按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00203.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（8）该界面选择创建策略类型。Nessus默认支持10种策略类型，在策略类型上有绿色条的表示订阅。这里选择Advanced Policy类型。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00204.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（9）在该界面设置策略名、可见性和描述信息（可选项）。这里设置策略名为Local VulnerabilityAssessment、可见性为private。然后单击左侧的Plugins标签")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00205.jpeg",loading:"lazy"}})]),t._v(" "),a("ul",[a("li",[t._v("private：仅自己能使用该策略扫描。")]),t._v(" "),a("li",[t._v("shared：其他用户也能使用该策略扫描")])]),t._v(" "),a("p",[t._v("（10）该界面显示了所有插件程序，默认全部是启动的。在该界面可以单击Disable  All按钮，禁用所有启动的插件程序。然后指定需要启动的插件程序，如启动Debian Local Security Checks和Default  Unix Accounts插件程序")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00206.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（11）在该界面单击Save按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00207.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（12）从该界面可以看到新建的策略Local Vulnerability Assessment，表示该策略已创建成功。")]),t._v(" "),a("p",[a("strong",[t._v("2.新建扫描任务")])]),t._v(" "),a("p",[t._v("策略创建成功后，必须要新建扫描任务才能实现漏洞扫描。下面将介绍新建扫描任务的具体操作步骤。")]),t._v(" "),a("p",[t._v("（1）在 "),a("strong",[t._v("添加策略")]),t._v("第（11）步的图中， 将鼠标切换到Scans选项卡上")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00208.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（2）从该界面可以看到当前没有任何扫描任务，所以需要添加扫描任务后才能扫描。在该界面单击New Scan按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00209.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（3）在该界面设置扫描任务名称、使用策略、文件夹和扫描的目标。这里分别设置为Sample Scan、Local Vulnerability Assessment（前面新建的策略）、My Scans和192.168.41.0/24。然后单击Launch按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00210.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（4）从该界面可以看到扫描任务的状态为Running（正在运行），表示Sample Scan扫描任务添加成功。如果想要停止扫描，可以单击"),a("img",{staticClass:"lazy",attrs:{alt:"135-01","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00211.jpeg",loading:"lazy"}}),t._v("（停止一下）按钮。如果暂停扫描任务，单击"),a("img",{staticClass:"lazy",attrs:{alt:"135-02","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00212.jpeg",loading:"lazy"}}),t._v("按钮。")]),t._v(" "),a("h2",{attrs:{id:"扫描本地漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描本地漏洞"}},[t._v("#")]),t._v(" 扫描本地漏洞")]),t._v(" "),a("p",[t._v("在前面介绍了Nessus的安装、配置、登录及新建策略和扫描任务，现在可以开始第一次测试组的安全漏洞。对于新建策略和扫描任务这里就不再赘述，本小节中只列出扫描本地漏洞所需添加的插件程序及分析扫描信息。")]),t._v(" "),a("p",[t._v("【实例】扫描本地漏洞具体操作步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）新建名为Local Vulnerability Assessment策略。")]),t._v(" "),a("p",[t._v("（2）添加所需的插件程序。")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu Local Security Checks：扫描本地Ubuntu安全检查。")]),t._v(" "),a("li",[t._v("Default Unix Accounts：扫描默认Unix账户。")])]),t._v(" "),a("p",[t._v("（3）新建名为Sample Scan扫描任务。")]),t._v(" "),a("p",[t._v("（4）扫描漏洞。扫描任务执行完成后，将显示如图5.18所示的界面。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00213.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（5）在该界面双击扫描任务名称Sample Scan，将显示扫描的详细信息")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00214.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（6）从该界面可以看到总共扫描了三台主机。扫描主机的漏洞情况，可以查看Vulnerability列，该列中的数字表示扫描到的信息数。右侧显示了扫描的详细信息，如扫描任务名称、状态、策略、目标主机和时间等。右下角以圆形图显示了漏洞的危险情况，分别使用不同颜色显示漏洞的严重性。本机几乎没任何漏洞，所以显示是蓝色（Info）。关于漏洞的信息使用在该界面可以单击Host列中的任何一个地址，显示该主机的详细信息，包括IP地址、操作系统类型、扫描的起始时间和结束时间等。本例中选择192.168.41.234地址")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00215.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（7）在该界面单击INFO按钮，将显示具体的漏洞信息")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00216.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（8）该界面显示了漏洞的描述信息及扫描到的信息。例如，该主机上开启了68、8834和15774等端口。使用Nessus还可以通过导出文件的方式查看漏洞信息，导出的文件格式包括Nessus、PDF、HTML、CSV和Nessus DB。导出文件的方式如下所示：")]),t._v(" "),a("p",[t._v("选择导出文件的格式。这里选择PDF格式，单击PDF命令")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00217.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（9）该界面分为两部分，包括Available Content（可用的内容）和Report  Content（报告内容）。该界面显示了导出的PDF文件中可包括的内容有主机摘要信息、主机漏洞和插件漏洞。在图5.22中将要导出的内容用鼠标拖到Report Content框中")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00218.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（10）在该界面显示了将要导出的内容。此时单击Export按钮")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00219.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（11）在该界面单击Save File按钮，指定该文件的保存位置，即PDF文件导出成功。")]),t._v(" "),a("h2",{attrs:{id:"扫描网络漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描网络漏洞"}},[t._v("#")]),t._v(" 扫描网络漏洞")]),t._v(" "),a("p",[t._v("如果用户想要使用Nessus攻击一个大范围的漏洞，需要配置评估漏洞列表并指定获取信息的评估列表。本小节将介绍配置Nessus在目标主机寻找网络漏洞，这些漏洞指目标主机或其他网络协议。")]),t._v(" "),a("p",[t._v("【实例】扫描网络漏洞的具体操作步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）新建名为Internal Network Scan策略。")]),t._v(" "),a("p",[t._v("（2）添加所需的插件程序，如表5-1所示。")]),t._v(" "),a("p",[t._v("下表为所需插件程序")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("CISCO")]),t._v(" "),a("th",[t._v("扫描CISCO系统")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DNS")]),t._v(" "),a("td",[t._v("扫描DNS服务器")])]),t._v(" "),a("tr",[a("td",[t._v("Default Unix Accounts")]),t._v(" "),a("td",[t._v("扫描本地默认用户账户和密码")])]),t._v(" "),a("tr",[a("td",[t._v("FTP")]),t._v(" "),a("td",[t._v("扫描FTP服务器")])]),t._v(" "),a("tr",[a("td",[t._v("Firewalls")]),t._v(" "),a("td",[t._v("扫描代理防火墙")])]),t._v(" "),a("tr",[a("td",[t._v("Gain a shell remotely")]),t._v(" "),a("td",[t._v("扫描远程获取的Shell")])]),t._v(" "),a("tr",[a("td",[t._v("Geeral")]),t._v(" "),a("td",[t._v("扫描常用的服务")])]),t._v(" "),a("tr",[a("td",[t._v("Netware")]),t._v(" "),a("td",[t._v("扫描网络操作系统")])]),t._v(" "),a("tr",[a("td",[t._v("Peer-To-Peer File Sharing")]),t._v(" "),a("td",[t._v("扫描共享文件检测")])]),t._v(" "),a("tr",[a("td",[t._v("Policy Compliance")]),t._v(" "),a("td",[t._v("扫描PCI DSS和SCAP信息")])]),t._v(" "),a("tr",[a("td",[t._v("SCADA")]),t._v(" "),a("td",[t._v("扫描设置管理工具")])]),t._v(" "),a("tr",[a("td",[t._v("SMTP Problems")]),t._v(" "),a("td",[t._v("扫描SMTP问题")])]),t._v(" "),a("tr",[a("td",[t._v("SNMP")]),t._v(" "),a("td",[t._v("扫描SNMP相关信息")])]),t._v(" "),a("tr",[a("td",[t._v("Service Detection")]),t._v(" "),a("td",[t._v("扫描服务侦察")])]),t._v(" "),a("tr",[a("td",[t._v("Settings")]),t._v(" "),a("td",[t._v("扫描基本设置")])])])]),t._v(" "),a("p",[t._v("（3）新建名为Network Scan扫描任务。")]),t._v(" "),a("p",[t._v("（4）扫描结果")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00220.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（5）从该界面可以看到有两个比较严重的漏洞。如果想要详细地分析该漏洞，建议将该信息使用文件的形式导出。")]),t._v(" "),a("h2",{attrs:{id:"扫描指定linux的系统漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描指定linux的系统漏洞"}},[t._v("#")]),t._v(" 扫描指定Linux的系统漏洞")]),t._v(" "),a("p",[t._v("本小节将介绍使用Nessus扫描指定Linux系统上的漏洞。")]),t._v(" "),a("p",[t._v("【实例】扫描指定Linux系统漏洞的具体操作步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）使用Metasploitable 2.0作为目标主机。用户也可以使用其他版本的Linux系统。")]),t._v(" "),a("p",[t._v("（2）新建名为Linux Vulnerability Scan策略。")]),t._v(" "),a("p",[t._v("（3）添加所需的插件程序，如表所示。")]),t._v(" "),a("p",[t._v("所需插件程序")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Backdoors")]),t._v(" "),a("th",[t._v("扫描秘密信息")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Brute Force Attacks")]),t._v(" "),a("td",[t._v("暴力攻击")])]),t._v(" "),a("tr",[a("td",[t._v("CentOSo Local Security Checks")]),t._v(" "),a("td",[t._v("扫描CentOS系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("DNS")]),t._v(" "),a("td",[t._v("扫描DNS服务器")])]),t._v(" "),a("tr",[a("td",[t._v("Debian Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Debian系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Default Unix Accounts")]),t._v(" "),a("td",[t._v("扫描默认Unix用户账号")])]),t._v(" "),a("tr",[a("td",[t._v("Denial of Service")]),t._v(" "),a("td",[t._v("扫描拒绝的服务")])]),t._v(" "),a("tr",[a("td",[t._v("FTP")]),t._v(" "),a("td",[t._v("扫描FTP服务器")])]),t._v(" "),a("tr",[a("td",[t._v("Fedora Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Fedora系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Firewalls")]),t._v(" "),a("td",[t._v("扫描防火墙")])]),t._v(" "),a("tr",[a("td",[t._v("FreeBSD Local Security Checks")]),t._v(" "),a("td",[t._v("扫描FreeBSD系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Gain a shell remotely")]),t._v(" "),a("td",[t._v("扫描远程获得的Shell")])]),t._v(" "),a("tr",[a("td",[t._v("General")]),t._v(" "),a("td",[t._v("扫描漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Gentoo Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Gentoo系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("HP-UX Local Security Checks")]),t._v(" "),a("td",[t._v("扫描HP-UX系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Mandriva Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Mandriva系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Misc")]),t._v(" "),a("td",[t._v("扫描复杂的漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Red Hat Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Red Hat系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("SMTP Porblems")]),t._v(" "),a("td",[t._v("扫描SMTP问题")])]),t._v(" "),a("tr",[a("td",[t._v("SNMP")]),t._v(" "),a("td",[t._v("扫描SNMP漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Scientific Linux Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Scientific Linux系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Slackware Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Slackware系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Solaris Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Solaris系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("SuSE Local Security Checks")]),t._v(" "),a("td",[t._v("扫描SuSE系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Ubuntu Local Security Checks")]),t._v(" "),a("td",[t._v("扫描Ubuntu系统的本地安全漏洞")])]),t._v(" "),a("tr",[a("td",[t._v("Web Servers")]),t._v(" "),a("td",[t._v("扫描Web服务器")])])])]),t._v(" "),a("p",[t._v("（4）新建名为Linux Vulnerability Scan扫描任务。")]),t._v(" "),a("p",[t._v("（5）扫描漏洞，扫描结果如图所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00221.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（6）从该界面可以看到总共扫描了6台主机上的漏洞信息。其中，主机192.168.41.142上存在7个比较严重的漏洞。关于漏洞的百分比情况，可以从右下角的扇形图中了解到。同样，用户可以使用前面介绍过的两种方法，查看漏洞的详细信息。")]),t._v(" "),a("h2",{attrs:{id:"扫描指定windows的系统漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描指定windows的系统漏洞"}},[t._v("#")]),t._v(" 扫描指定Windows的系统漏洞")]),t._v(" "),a("p",[t._v("本节将介绍使用Nessus扫描指定Windows系统上的漏洞。")]),t._v(" "),a("p",[t._v("【实例】使用Nessus扫描指定Windows系统漏洞。本例中使用Windows 7系统作为目标主机。具体扫描步骤如下所示。")]),t._v(" "),a("p",[t._v("（1）新建名为Windows Vulnerability Scan策略。")]),t._v(" "),a("p",[t._v("（2）添加所需的插件程序，如表5-3所示。")]),t._v(" "),a("p",[t._v("表5-3 所需插件程序")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("DNS")]),t._v(" "),a("th",[t._v("扫描DNS服务器")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Databases")]),t._v(" "),a("td",[t._v("扫描数据库")])]),t._v(" "),a("tr",[a("td",[t._v("Denial of Service")]),t._v(" "),a("td",[t._v("扫描拒绝的服务")])]),t._v(" "),a("tr",[a("td",[t._v("FTP")]),t._v(" "),a("td",[t._v("扫描FTP服务器")])]),t._v(" "),a("tr",[a("td",[t._v("SMTP Problems")]),t._v(" "),a("td",[t._v("扫描SMTP问题")])]),t._v(" "),a("tr",[a("td",[t._v("SNMP")]),t._v(" "),a("td",[t._v("扫描SNMP")])]),t._v(" "),a("tr",[a("td",[t._v("Settings")]),t._v(" "),a("td",[t._v("扫描设置信息")])]),t._v(" "),a("tr",[a("td",[t._v("Web Servers")]),t._v(" "),a("td",[t._v("扫描Web Servers")])]),t._v(" "),a("tr",[a("td",[t._v("Windows")]),t._v(" "),a("td",[t._v("扫描Windows")])]),t._v(" "),a("tr",[a("td",[t._v("Windows:Microsoft Bulletins")]),t._v(" "),a("td",[t._v("扫描Windows中微软公告")])]),t._v(" "),a("tr",[a("td",[t._v("Windows:User management")]),t._v(" "),a("td",[t._v("扫描Windows用户管理")])])])]),t._v(" "),a("p",[t._v("（3）开始扫描漏洞。扫描结果如图所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://wizardforcel.gitbooks.io/daxueba-kali-linux-tutorial/content/img/00222.jpeg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("（4）从该界面可以看到主机192.168.41.1的漏洞情况，该主机中存在一个比较严重的漏洞。同样用户可以使用前面介绍过的两种方法查看漏洞的详细信息，进而修改主机中存在的漏洞。")]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);