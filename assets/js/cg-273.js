(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{570:function(v,_,t){"use strict";t.r(_);var d=t(7),e=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"kali中各项菜单的功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kali中各项菜单的功能"}},[v._v("#")]),v._v(" Kali中各项菜单的功能")]),v._v(" "),_("h2",{attrs:{id:"说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[v._v("#")]),v._v(" 说明")]),v._v(" "),_("p",[v._v("各工具kali官方简介（竖排）："),_("a",{attrs:{href:"https://tools.kali.org/tools-listing",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://tools.kali.org/tools-listing"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("pentestbox：虚拟机还是比较耗内存的，内存不够可以试试"),_("a",{attrs:{href:"https://pentestbox.org/zh",target:"_blank",rel:"noopener noreferrer"}},[v._v("pentestbox"),_("OutboundLink")],1),v._v("，从功能上可以理解为运行在windows上的kali发行版，kali主流工具"),_("a",{attrs:{href:"https://tools.pentestbox.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("它都具备"),_("OutboundLink")],1),v._v("。官方下载页面似乎有点问题，可直接到其"),_("a",{attrs:{href:"https://sourceforge.net/projects/pentestbox/files/",target:"_blank",rel:"noopener noreferrer"}},[v._v("sourceforge主页"),_("OutboundLink")],1),v._v("下载。另外注意可能是因为metasploit太大默认版本没有mtetasploit，with-metasploit版本才有metasploit。")]),v._v(" "),_("p",[v._v("更多渗透测试资源可参考："),_("a",{attrs:{href:"https://github.com/enaqx/awesome-pentest",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://github.com/enaqx/awesome-pentest"),_("OutboundLink")],1)]),v._v(" "),_("h2",{attrs:{id:"kali工具列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kali工具列表"}},[v._v("#")]),v._v(" kali工具列表")]),v._v(" "),_("p",[v._v("使用模式中，cmd-line表示单条命令形式，shell表示交互shell形式，gui表示是图形界面形式。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("使用模式")]),v._v(" "),_("th",[v._v("功能")]),v._v(" "),_("th",[v._v("功能评价")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("dmitry")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("whois查询/子域名收集/端口扫描")]),v._v(" "),_("td",[v._v("whois并不简单明了；子域名和邮箱依赖google；端口扫描速度一般")])]),v._v(" "),_("tr",[_("td",[v._v("dnmap")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("用于组建分布式nmap，dnmap_server为服务端；dnmap_client为客户端")]),v._v(" "),_("td",[v._v("用起来并不是那么方便，不是实在不行不是很必要")])]),v._v(" "),_("tr",[_("td",[v._v("ike-scan")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("收集ipsec vpn server指纹信息")]),v._v(" "),_("td",[v._v("好像用于攻击vpn，不太懂")])]),v._v(" "),_("tr",[_("td",[v._v("maltegoce")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("域名/账号等关联性收集展示")]),v._v(" "),_("td",[v._v("关联性展示功能确实很好，但效果可能没有那么理想，特别是对国内而言")])]),v._v(" "),_("tr",[_("td",[v._v("netdiscover")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("主动发出arp包和截获arp包")]),v._v(" "),_("td",[v._v("就arp探测功能就此功能本身而言做得算很好了")])]),v._v(" "),_("tr",[_("td",[v._v("nmap")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("端口服务探测和端口漏洞扫描")]),v._v(" "),_("td",[v._v("端口扫描集大成者")])]),v._v(" "),_("tr",[_("td",[v._v("p0f")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("监听网卡收发的数据包，从数据包中读取远端机器操作系统服务版本等信息")]),v._v(" "),_("td",[v._v("毕竟只是截取数据 包中的版本信息，效果期望不要很大")])]),v._v(" "),_("tr",[_("td",[v._v("regon-ng")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("模仿msf的信息侦查框架")]),v._v(" "),_("td",[v._v("类似将站长工具等东西命令行化，想法挺好但是用起来感觉不是那么直观")])]),v._v(" "),_("tr",[_("td",[v._v("sparta")]),v._v(" "),_("td",[v._v("暴力破解")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("图形版的hydra，加了端口服务扫描功能")]),v._v(" "),_("td",[v._v("还行图形界面聊胜于无")])]),v._v(" "),_("tr",[_("td",[v._v("zenmap")]),v._v(" "),_("td",[v._v("信息收集")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("图形界面版的nmap")]),v._v(" "),_("td",[v._v("还行图形界面聊胜于无")])]),v._v(" "),_("tr",[_("td",[v._v("golismero")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("就是一个文本版的类似awvs的web扫描器")]),v._v(" "),_("td",[v._v("感觉可以提升对扫描器原理的认识")])]),v._v(" "),_("tr",[_("td",[v._v("lynis")]),v._v(" "),_("td",[v._v("系统审计")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("感觉有点像360首页的“立即体验”，不过只是扫描告警不能一键修复")]),v._v(" "),_("td",[v._v("shell脚本写成颇为有趣")])]),v._v(" "),_("tr",[_("td",[v._v("nikto")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("web扫描器")]),v._v(" "),_("td",[v._v("就喜欢这种直接告漏洞的扫描器（不过事实上很少能有可用的漏洞）")])]),v._v(" "),_("tr",[_("td",[v._v("unix-privesc-check")]),v._v(" "),_("td",[v._v("系统审计")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("审计系统中的关键文件权限是否有异常")]),v._v(" "),_("td",[v._v("还是没有总结性展示和修复功能")])]),v._v(" "),_("tr",[_("td",[v._v("bed")]),v._v(" "),_("td",[v._v("系统扫描")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("通过发送各种模糊数据测试多种服务的缓冲区溢出漏洞的工具")]),v._v(" "),_("td",[v._v("可能还不错")])]),v._v(" "),_("tr",[_("td",[v._v("burpsuite")]),v._v(" "),_("td",[v._v("web代理")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("常用web代理截包工具")]),v._v(" "),_("td",[v._v("功能强大不能要求更多")])]),v._v(" "),_("tr",[_("td",[v._v("commix")]),v._v(" "),_("td",[v._v("注入检测")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("sqlmap检测sql注入此工具检测系统命令注入")]),v._v(" "),_("td",[v._v("两相搭配那注入基本覆盖了")])]),v._v(" "),_("tr",[_("td",[v._v("httrack")]),v._v(" "),_("td",[v._v("网站克隆")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("将网站克隆到本地")]),v._v(" "),_("td",[v._v("钓鱼乌云等可能有用")])]),v._v(" "),_("tr",[_("td",[v._v("owasp-zap")]),v._v(" "),_("td",[v._v("web代理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("owasp组织开发的工具")]),v._v(" "),_("td",[v._v("和burpsuite相比弱化了截包功能，强化了web漏洞扫描功能，不过感觉也没扫出什么东西")])]),v._v(" "),_("tr",[_("td",[v._v("paros")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("一个web爬行和漏扫工具")]),v._v(" "),_("td",[v._v("和owasp-zap差不多")])]),v._v(" "),_("tr",[_("td",[v._v("skipfish")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("一个全自动化的web漏洞扫描工具")]),v._v(" "),_("td",[v._v("其工作一是爬行网站页面，然后分析页面漏洞，最后生html报告")])]),v._v(" "),_("tr",[_("td",[v._v("sqlmap")]),v._v(" "),_("td",[v._v("sql注入扫描")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("一个强大的sql注入扫描工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("w3af")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td",[v._v("shell/gui")]),v._v(" "),_("td",[v._v("一个web漏洞扫描框架")]),v._v(" "),_("td",[v._v("所谓框架就是有一堆扫描模块，然后你选定其中一些模块去扫描网站；感觉一般没说的那么好")])]),v._v(" "),_("tr",[_("td",[v._v("webscarab")]),v._v(" "),_("td",[v._v("http代理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("更专业的网站树型结构分析工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("wpscan")]),v._v(" "),_("td",[v._v("web扫描")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("针对wordpress的漏洞扫描工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("bbqsql")]),v._v(" "),_("td",[v._v("盲注扫描")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("一个高度可配置的交互式的sql盲注工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("hexorbase")]),v._v(" "),_("td",[v._v("数据库管理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("一个支持多种数据库的客户端有多个数据库的口令破解功能")]),v._v(" "),_("td",[v._v("作为客户端只能将就着用。暴破口令需要自己准备字典")])]),v._v(" "),_("tr",[_("td",[v._v("jsql")]),v._v(" "),_("td",[v._v("数据库探测")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("根据url探测数据库类型/参数注入测试/探测后台页而/探测重要文件")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("mdb-sql")]),v._v(" "),_("td",[v._v("数据库管理")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("可用来连接access数据库文件（mdb）然后通过sql语句查询数据")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("oscaner")]),v._v(" "),_("td",[v._v("数据库猜解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用字典探查oracle数据库是否监听及猜解服务名")]),v._v(" "),_("td",[v._v("参数很少。测试sid和默认用户是可以的，默认的字典基本没法看还是得自己写字典")])]),v._v(" "),_("tr",[_("td",[v._v("sidguesser")]),v._v(" "),_("td",[v._v("数据库猜解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用字典探测oracle数据库存在的sid")]),v._v(" "),_("td",[v._v("参数很少。测试验证如果字典里有sid，可以探测出sid。基于字典的工具还是得自己准备字典")])]),v._v(" "),_("tr",[_("td",[v._v("sqllite database")]),v._v(" "),_("td",[v._v("数据库管理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("sqlite数据库客户端")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("sqlinja")]),v._v(" "),_("td",[v._v("数据库猜解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于猜解ms sql")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("sqlsus")]),v._v(" "),_("td",[v._v("sql注入检测")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于mysql的盲注检测")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("tnscmd10g")]),v._v(" "),_("td",[v._v("数据库探测")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于探测oracle是否监听及其他一些信息")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("cewl")]),v._v(" "),_("td",[v._v("口令文件制作")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("爬取给定的URL并依据限制条件截取网页中的单词生成口令集合")]),v._v(" "),_("td",[v._v("这种想法是可取的。但有点遗憾只是截取网页中的单词，没有a转@等等智能变换")])]),v._v(" "),_("tr",[_("td",[v._v("crunch")]),v._v(" "),_("td",[v._v("口令文件制作")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("依据限定的条件生成口令集合")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("hashcat")]),v._v(" "),_("td",[v._v("hash爆破")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("多种hash的爆力猜解工具，速度快所耗CPU小（相对）")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("john")]),v._v(" "),_("td",[v._v("系统口令破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于对系统口令文件的破解（如/etc/passwd）还原出密码明文")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("johnny")]),v._v(" "),_("td",[v._v("系统口令破解")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("john的gui版本")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("medusa")]),v._v(" "),_("td",[v._v("口令猜解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("可对IMAP, rlogin, SSH等进行口令猜解，类似hydra")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("ncrack")]),v._v(" "),_("td",[v._v("口令猜解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("可对IMAP, rlogin, SSH等进行口令猜解，类似hydra")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("ophcrack")]),v._v(" "),_("td",[v._v("系统口令破解")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("基于彩虹表的windows口令破解工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("pyrit")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("WPA/WPA2加密的wifi的密码破解工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("rainbowcrack")]),v._v(" "),_("td",[v._v("hash破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("具有彩虹表的生成、排序和使用排序好换彩虹表进行破解的功能")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("rcracki_mt")]),v._v(" "),_("td",[v._v("hash破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("基于彩虹表的hash破解工具，可能蚲rainbowcrack一部份")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("wordlist")]),v._v(" "),_("td",[v._v("口令文件")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("打印kali自带的一些口令文件存放的位置")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("aircrack-ng")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("针对WEP、 WPA加密方式的wifi密码破解套件")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("chirp")]),v._v(" "),_("td",[v._v("无线电拦截")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("各种无线电数据包的拦截工具（？）")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("cowpatty")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("基于已捕获握手包和密码字典的WPA-PSK加密的wifi密码的猜解")]),v._v(" "),_("td",[v._v("不能自己拦截数据包也只能破解WPA-PSK类加密方式功能有点弱")])]),v._v(" "),_("tr",[_("td",[v._v("Fern WIFI Cracker")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("基于字典的WEP和WPA加密的wifi破解工具")]),v._v(" "),_("td",[v._v("能自动发现wifi能拦截数据包，图形界面操作，简单易用")])]),v._v(" "),_("tr",[_("td",[v._v("Ghost Phiser")]),v._v(" "),_("td",[v._v("AP假冒")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("能发现AP并使与AP连接的设备断开连接然后假冒AP让设备重新连接")]),v._v(" "),_("td",[v._v("图形界面除了AP外还有假冒DNS、http服务器等，较为好用")])]),v._v(" "),_("tr",[_("td",[v._v("giskismet")]),v._v(" "),_("td",[v._v("可视化")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("Kismet输出结果的可视化工具，即较成text、html等各种格式")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("kismet")]),v._v(" "),_("td",[v._v("AP发现")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("交互式的AP发现工具，列出周围AP的各种信息")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[_("a",{attrs:{href:"http://www.360doc.com/content/15/1229/16/29791812_523958566.shtml",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDK3"),_("OutboundLink")],1)]),v._v(" "),_("td",[v._v("AP扰乱")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("可向AP发送大量连接、断开请求，可向周围设备告知存在根本不存在的大量AP")]),v._v(" "),_("td",[v._v("这工具的攻击方法简直是发了疯")])]),v._v(" "),_("tr",[_("td",[v._v("mfor")]),v._v(" "),_("td",[v._v("IC卡破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("IC卡密钥破解程序")]),v._v(" "),_("td",[v._v("各种免费吃饭充钱教程里用的工具你想不想学")])]),v._v(" "),_("tr",[_("td",[v._v("mfterm")]),v._v(" "),_("td",[v._v("IC卡破解")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("交互式IC卡文件写入工具")]),v._v(" "),_("td",[v._v("要修改卡内数据才是最终的IC卡破解")])]),v._v(" "),_("tr",[_("td",[v._v("pixiewps")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("针对开启WPS的wifi利用WPS随机数生成中的bug来破解")]),v._v(" "),_("td",[v._v("有说很快有说成功率比较低")])]),v._v(" "),_("tr",[_("td",[v._v("reaver")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("针对开启WPS的wifi进行暴力破解的工具")]),v._v(" "),_("td",[v._v("aircrack-ng后排名第二的wifi破解工具")])]),v._v(" "),_("tr",[_("td",[v._v("wifite")]),v._v(" "),_("td",[v._v("wifi破解")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("较为自动化的wifi破解工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("apktool")]),v._v(" "),_("td",[v._v("安卓逆向")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("从apk文件中还原出xml和图版等资源文件")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("clang")]),v._v(" "),_("td",[v._v("编译器")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("类似gcc的编译器，更轻量，可编译c、c++、Objective-C")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("clang++")]),v._v(" "),_("td",[v._v("编译器")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("C++编译器，与clang的关系类似gcc和g++的类系")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("dex2jar")]),v._v(" "),_("td",[v._v("安卓逆向")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("apktool把apk还原成了资源文件和dex，dex2jar把dex还原成jar文件（.class）")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("edb-debug")]),v._v(" "),_("td",[v._v("动态调试")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("软件逆向动态调试工具")]),v._v(" "),_("td",[v._v("Linux版Ollydbg")])]),v._v(" "),_("tr",[_("td",[v._v("flashm")]),v._v(" "),_("td",[v._v("反汇编")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v(".swf文件的反汇编工具可反汇编出.swf中的脚本代码")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("jad")]),v._v(" "),_("td",[v._v("反编译")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("dex2jar把文件还原成了.class，jad进一步把文件还原成.java文件")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("javasnoop")]),v._v(" "),_("td",[v._v("fuzz")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("java程序漏洞评估工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("nasm shell")]),v._v(" "),_("td",[v._v("汇编")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("nasm是32位汇编编译器，这是一个nasm的shell")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("ollydbg")]),v._v(" "),_("td",[v._v("动态调试")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("windows平台大名鼎鼎的动态调试工具，Linux上是通过wine运行有点水土不服")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("radare2")]),v._v(" "),_("td",[v._v("静态分析")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("类似ida的静态反汇编分析工具，功能强大，开源")]),v._v(" "),_("td",[v._v("但是命令行操作这难度有点大")])]),v._v(" "),_("tr",[_("td",[v._v("armitage")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("measploit的gui界面")]),v._v(" "),_("td",[v._v("嗯好像是比原来的msf-gui好点，不过叫人自己去启动msf还要登录，还是不用算了")])]),v._v(" "),_("tr",[_("td",[v._v("beef")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("利用msf的exp结合xss构造有攻击性的html页面，当浏览器访问即会受到攻击并获取shell")]),v._v(" "),_("td",[v._v("这可以啊，不过不懂对现在浏览器效果怎么样")])]),v._v(" "),_("tr",[_("td",[v._v("metasploit")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("就是启动msfconsole咯")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("msf payload center")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("生成包含exp的windows/android等各平台的可执行文件，木马制作利器")]),v._v(" "),_("td",[v._v("那这东西和msfvenom的区别是什么")])]),v._v(" "),_("tr",[_("td",[v._v("searchsploit")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于搜索已从exploitdb下载到本地的漏洞利用脚本")]),v._v(" "),_("td",[v._v("可以理解msf都是ruby写的可执行代码，exploit不一定用ruby写，也可能只是扫描述而非代码")])]),v._v(" "),_("tr",[_("td",[v._v("Social-Engineering")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("一般用于生成各种插入了exp的文件，诱使目标打开而中招")]),v._v(" "),_("td",[v._v("社会工程学总说得很厉害，不过我总觉得社会工程学和DDOS就是最名不副实的")])]),v._v(" "),_("tr",[_("td",[v._v("termineter")]),v._v(" "),_("td",[v._v("漏洞利用")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("智能电表攻击框架")]),v._v(" "),_("td",[v._v("这需要硬件搭配吧，没玩过")])]),v._v(" "),_("tr",[_("td",[v._v("bdfproxy")]),v._v(" "),_("td",[v._v("中间人攻击")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("处于中间人身份时可对经过的流量插入payload")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("driftnet")]),v._v(" "),_("td",[v._v("图版嗅探")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于嗅探流量中的图版并展示到x-window上")]),v._v(" "),_("td",[v._v("配上arp欺骗作为中间人才能发挥威力，自己拦自己的就好玩而已")])]),v._v(" "),_("tr",[_("td",[v._v("ettercap")]),v._v(" "),_("td",[v._v("流量拦截")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("听说可以截持同子网的流量，强无敌，原理是什么")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("hampster")]),v._v(" "),_("td",[v._v("代理")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("好像也是代理转发流量的")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("macchanger")]),v._v(" "),_("td",[v._v("mac欺骗")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("修改本机上网时的mac地址，一用作身份隐藏，二可用来绕过wifi mac黑名单")]),v._v(" "),_("td",[v._v("应该只是软修改mac地址不可能可写吧")])]),v._v(" "),_("tr",[_("td",[v._v("mitmproxy")]),v._v(" "),_("td",[v._v("代理")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("好像也是代理转发流量的")]),v._v(" "),_("td",[v._v("感觉没什么特色啊")])]),v._v(" "),_("tr",[_("td",[v._v("netsniff-ng")]),v._v(" "),_("td",[v._v("流量捕获")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("高性能的流量捕获套件，可能大流量时的捕获效果比较稳定")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("responder")]),v._v(" "),_("td",[v._v("主机嗅探")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("被动嗅探与所在主机交互的主机的操作系统版本等信息")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("wireshark")]),v._v(" "),_("td",[v._v("流量捕获")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("拦截经过指定网卡的所有流量")]),v._v(" "),_("td",[v._v("sectools常年排行第一的工具，这就不用多说了吧")])]),v._v(" "),_("tr",[_("td",[v._v("backdoor")]),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td"),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("exe2hex")]),v._v(" "),_("td",[v._v("编码转换")]),v._v(" "),_("td",[v._v("cmd")]),v._v(" "),_("td",[v._v("顾名思义就是把exe文件转成十六进制文件")]),v._v(" "),_("td",[v._v("不过这样的意义是什么，不是以十六进制就能打开了吗")])]),v._v(" "),_("tr",[_("td",[v._v("Intersect")]),v._v(" "),_("td",[v._v("脚本生成")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("感觉是SQL 有攻击性Intersect语句的生成工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("mimikatz")]),v._v(" "),_("td",[v._v("密码提取")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于从windows内存中提取密码")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("nishang")]),v._v(" "),_("td",[v._v("后渗透")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("基于powershell的后渗透攻击工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("PowerSploit")]),v._v(" "),_("td",[v._v("后渗透")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("也是一个基于powershell的后渗透攻击工具")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("proxychains")]),v._v(" "),_("td",[v._v("多重代理")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("好像用来配置多种代理的")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("weevely")]),v._v(" "),_("td",[v._v("webshell")]),v._v(" "),_("td",[v._v("shell")]),v._v(" "),_("td",[v._v("webshell连接工具不过好像要用自己生成的小马")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("autopsy")]),v._v(" "),_("td",[v._v("网页分析")]),v._v(" "),_("td",[v._v("web")]),v._v(" "),_("td",[v._v("启动一个服务通过浏览器访问使用，感觉是分析网页各种元素的不是很懂")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("binwalk")]),v._v(" "),_("td",[v._v("文件识别")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于分析一个文件中是否其实有多个文件")]),v._v(" "),_("td",[v._v("ctf的key文件提取就常用到的")])]),v._v(" "),_("tr",[_("td",[v._v("bulk_extractor")]),v._v(" "),_("td",[v._v("要素提取")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("扫描给定的目录或文件，如果发现一些如电话号码网址等关键的信息则输出到文件")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("chkrootkit")]),v._v(" "),_("td",[v._v("系统检查")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("扫描本机，查看本机是否存在受rootkit影响的地方")]),v._v(" "),_("td",[v._v("理解成360的木马查杀也差不多")])]),v._v(" "),_("tr",[_("td",[v._v("foremost")]),v._v(" "),_("td",[v._v("文件恢复")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("文件恢复工具，用于被删除的文件的恢复，就是360等的那个文件恢复功能")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("galleta")]),v._v(" "),_("td",[v._v("cookie文件")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于分析IE的cookie文件输出其中的有用信息")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("hashdeep")]),v._v(" "),_("td",[v._v("hash计算")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("用于计算文件hash值，支持多种散列算法")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("volafox")]),v._v(" "),_("td",[v._v("内存分析")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("针对Mac OS X的内存分析工具，可从其内存镜像中读取进程列表等各种主机信息")]),v._v(" "),_("td",[v._v("先用工具把当前内存抓取下来，然后再用来分析；内存数据容易被破坏所以这确实很有意义")])]),v._v(" "),_("tr",[_("td",[v._v("volatility")]),v._v(" "),_("td",[v._v("内存分析")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("volafox的扩展，支持Mac OS X/Linux/Windows")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("casefile")]),v._v(" "),_("td",[v._v("报告编写")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("一个画图工具，packet tracer用来画网络拓扑，这用来画场景拓扑")]),v._v(" "),_("td",[v._v("这写出高大上的报告啊")])]),v._v(" "),_("tr",[_("td",[v._v("cutycapt")]),v._v(" "),_("td",[v._v("网页截屏")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("一个基于WebKit内核的网页截图工具，就是指定一个url它就能用解析url并把url界面截下来")]),v._v(" "),_("td",[v._v("各种扫描器中的截图就是使用类似的工具完成的，并不会真用个浏览器访问再截图下来")])]),v._v(" "),_("tr",[_("td",[v._v("dradis")]),v._v(" "),_("td",[v._v("报告生成")]),v._v(" "),_("td",[v._v("web")]),v._v(" "),_("td",[v._v("可解析burpsuite/nmap等生成的扫描文件，并可将扫描结果转存为pdf或html")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("faraday IDE")]),v._v(" "),_("td",[v._v("报告管理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td"),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("keepnote")]),v._v(" "),_("td",[v._v("笔记本")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("较之记事本，可建文件夹，支持富文本，可导出为其他格式")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("magictree")]),v._v(" "),_("td",[v._v("报告管理")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td"),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("pipal")]),v._v(" "),_("td",[v._v("词频统计")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("说词频统计并不是很准确，文命令可分析统计给定文件中的词语的“"),_("a",{attrs:{href:"http://www.freebuf.com/sectool/49592.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("各种最"),_("OutboundLink")],1),v._v("”")]),v._v(" "),_("td")]),v._v(" "),_("tr",[_("td",[v._v("recordmydesktop")]),v._v(" "),_("td",[v._v("屏幕录制")]),v._v(" "),_("td",[v._v("cmd-line")]),v._v(" "),_("td",[v._v("屏幕录制，输出.ogv格式视频")]),v._v(" "),_("td",[v._v("不过感觉这视频格式占用磁盘有点大啊")])]),v._v(" "),_("tr",[_("td",[v._v("maltegoce")]),v._v(" "),_("td",[v._v("关系分析")]),v._v(" "),_("td",[v._v("gui")]),v._v(" "),_("td",[v._v("通过网络搜索，获取某个IP或邮箱与其他IP或邮箱的拓扑关系")]),v._v(" "),_("td",[v._v("这东西有那么强，但社工的东西还是没那么强，而且还是外国的工具在天朝的网络")])])])]),v._v(" "),_("h2",{attrs:{id:"写在最后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[v._v("#")]),v._v(" 写在最后")]),v._v(" "),_("blockquote",[_("p",[v._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),_("strong",[v._v("冰河技术")]),v._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),_("strong",[v._v("冰河技术")]),v._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),_("strong",[v._v("冰河技术")]),v._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),_("strong",[v._v("冰河技术")]),v._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),v._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);_.default=e.exports}}]);