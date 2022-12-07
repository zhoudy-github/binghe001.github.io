(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{585:function(s,t,n){"use strict";n.r(t);var e=n(7),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"tcpdump用法说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump用法说明"}},[s._v("#")]),s._v(" tcpdump用法说明")]),s._v(" "),t("p",[s._v("tcpdump采用命令行方式对接口的数据包进行筛选抓取，其丰富特性表现在灵活的表达式上。")]),s._v(" "),t("p",[s._v("不带任何选项的tcpdump，默认会抓取第一个网络接口，且只有将tcpdump进程终止才会停止抓包。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("shell> tcpdump -nn -i eth0 icmp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下面是详细的tcpdump用法。")]),s._v(" "),t("h3",{attrs:{id:"tcpdump选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump选项"}},[s._v("#")]),s._v(" tcpdump选项")]),s._v(" "),t("p",[s._v("它的命令格式为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('tcpdump [ -DenNqvX ] [ -c count ] [ -F file ] [ -i interface ] [ -r file ]\n        [ -s snaplen ] [ -w file ] [ expression ]\n\n抓包选项：\n-c：指定要抓取的包数量。注意，是最终要获取这么多个包。例如，指定"-c 10"将获取10个包，但可能已经处理了100个包，只不过只有10个包是满足条件的包。\n-i interface：指定tcpdump需要监听的接口。若未指定该选项，将从系统接口列表中搜寻编号最小的已配置好的接口(不包括loopback接口，要抓取loopback接口使用tcpdump -i lo)，\n            ：一旦找到第一个符合条件的接口，搜寻马上结束。可以使用\'any\'关键字表示所有网络接口。\n-n：对地址以数字方式显式，否则显式为主机名，也就是说-n选项不做主机名解析。\n-nn：除了-n的作用外，还把端口显示为数值，否则显示端口服务名。\n-N：不打印出host的域名部分。例如tcpdump将会打印\'nic\'而不是\'nic.ddn.mil\'。\n-P：指定要抓取的包是流入还是流出的包。可以给定的值为"in"、"out"和"inout"，默认为"inout"。\n-s len：设置tcpdump的数据包抓取长度为len，如果不设置默认将会是65535字节。对于要抓取的数据包较大时，长度设置不够可能会产生包截断，若出现包截断，\n      ：输出行中会出现"[|proto]"的标志(proto实际会显示为协议名)。但是抓取len越长，包的处理时间越长，并且会减少tcpdump可缓存的数据包的数量，\n      ：从而会导致数据包的丢失，所以在能抓取我们想要的包的前提下，抓取长度越小越好。\n\n输出选项：\n-e：输出的每行中都将包括数据链路层头部信息，例如源MAC和目标MAC。\n-q：快速打印输出。即打印很少的协议相关信息，从而输出行都比较简短。\n-X：输出包的头部数据，会以16进制和ASCII两种方式同时输出。\n-XX：输出包的头部数据，会以16进制和ASCII两种方式同时输出，更详细。\n-v：当分析和打印的时候，产生详细的输出。\n-vv：产生比-v更详细的输出。\n-vvv：产生比-vv更详细的输出。\n\n其他功能性选项：\n-D：列出可用于抓包的接口。将会列出接口的数值编号和接口名，它们都可以用于"-i"后。\n-F：从文件中读取抓包的表达式。若使用该选项，则命令行中给定的其他表达式都将失效。\n-w：将抓包数据输出到文件中而不是标准输出。可以同时配合"-G time"选项使得输出文件每time秒就自动切换到另一个文件。可通过"-r"选项载入这些文件以进行分析和打印。\n-r：从给定的数据包文件中读取数据。使用"-"表示从标准输入中读取。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("所以常用的选项也就这几个：")]),s._v(" "),t("ul",[t("li",[s._v("tcpdump -D")]),s._v(" "),t("li",[s._v("tcpdump -c num -i int -nn -XX -vvv")])]),s._v(" "),t("h3",{attrs:{id:"tcpdump表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump表达式"}},[s._v("#")]),s._v(" tcpdump表达式")]),s._v(" "),t("p",[s._v("表达式用于筛选输出哪些类型的数据包，如果没有给定表达式，所有的数据包都将输出，否则只输出表达式为true的包。在表达式中出现的shell元字符建议使用单引号包围。")]),s._v(" "),t("p",[s._v('tcpdump的表达式由一个或多个"单元"组成，每个单元一般包含ID的修饰符和一个ID(数字或名称)。有三种修饰符：')]),s._v(" "),t("p",[s._v("(1).type：指定ID的类型。")]),s._v(" "),t("p",[s._v('可以给定的值有host/net/port/portrange。例如"host foo"，"net 128.3"，"port 20"，"portrange 6000-6008"。默认的type为host。')]),s._v(" "),t("p",[s._v("(2).dir：指定ID的方向。")]),s._v(" "),t("p",[s._v('可以给定的值包括src/dst/src or dst/src and dst，默认为src or dst。例如，"src foo"表示源主机为foo的数据包，"dst net 128.3"表示目标网络为128.3的数据包，"src or dst port 22"表示源或目的端口为22的数据包。')]),s._v(" "),t("p",[s._v("(3).proto：通过给定协议限定匹配的数据包类型。")]),s._v(" "),t("p",[s._v('常用的协议有tcp/udp/arp/ip/ether/icmp等，若未给定协议类型，则匹配所有可能的类型。例如"tcp port 21"，"udp portrange 7000-7009"。')]),s._v(" "),t("p",[s._v('所以，一个基本的表达式单元格式为"proto dir type ID"')]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190222181456413.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("除了使用修饰符和ID组成的表达式单元，还有关键字表达式单元：gateway，broadcast，less，greater以及算术表达式。")]),s._v(" "),t("p",[s._v('表达式单元之间可以使用操作符" and / && / or / || / not / ! "进行连接，从而组成复杂的条件表达式。如"host foo and not port ftp and not port ftp-data"，这表示筛选的数据包要满足"主机为foo且端口不是ftp(端口21)和ftp-data(端口20)的包"，常用端口和名字的对应关系可在linux系统中的/etc/service文件中找到。')]),s._v(" "),t("p",[s._v('另外，同样的修饰符可省略，如"tcp dst port ftp or ftp-data or domain"与"tcp dst port ftp or tcp dst port ftp-data or tcp dst port domain"意义相同，都表示包的协议为tcp且目的端口为ftp或ftp-data或domain(端口53)。')]),s._v(" "),t("p",[s._v('使用括号"()"可以改变表达式的优先级，但需要注意的是括号会被shell解释，所以应该使用反斜线""转义为"()"，在需要的时候，还需要包围在引号中。')]),s._v(" "),t("h3",{attrs:{id:"tcpdump示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump示例"}},[s._v("#")]),s._v(" tcpdump示例")]),s._v(" "),t("p",[s._v("注意，tcpdump只能抓取"),t("strong",[s._v("流经本机")]),s._v("的数据包。")]),s._v(" "),t("p",[t("strong",[s._v("(1).默认启动")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认情况下，直接启动tcpdump将监视第一个网络接口(非lo口)上所有流通的数据包。这样抓取的结果会非常多，滚动非常快。")]),s._v(" "),t("p",[t("strong",[s._v("(2).监视指定网络接口的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump -i eth1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果不指定网卡，默认tcpdump只会监视第一个网络接口，如eth0。")]),s._v(" "),t("p",[t("strong",[s._v("(3).监视指定主机的数据包，例如所有进入或离开longshuai的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump host longshuai\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(4).打印helios<--\x3ehot或helios<--\x3eace之间通信的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump host helios and \\( hot or ace \\)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(5).打印ace与任何其他主机之间通信的IP数据包,但不包括与helios之间的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump ip host ace and not helios\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(6).截获主机hostname发送的所有数据")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump src host hostname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(7).监视所有发送到主机hostname的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump dst host hostname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(8).监视指定主机和端口的数据包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump tcp port 22 and host hostname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(9).对本机的udp 123端口进行监视(123为ntp的服务端口)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump udp port 123\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v('(10).监视指定网络的数据包，如本机与192.168网段通信的数据包，"-c 10"表示只抓取10个包')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tcpdump -c 10 net 192.168\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(11).打印所有通过网关snup的ftp数据包(注意,表达式被单引号括起来了,这可以防止shell对其中的括号进行错误解析)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("shell> tcpdump 'gateway snup and (port ftp or ftp-data)'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("(12).抓取ping包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@server2 ~]# tcpdump -c 5 -nn -i eth0 icmp \n\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes\n12:11:23.273638 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16422, seq 10, length 64\n12:11:23.273666 IP 192.168.100.62 > 192.168.100.70: ICMP echo reply, id 16422, seq 10, length 64\n12:11:24.356915 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16422, seq 11, length 64\n12:11:24.356936 IP 192.168.100.62 > 192.168.100.70: ICMP echo reply, id 16422, seq 11, length 64\n12:11:25.440887 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16422, seq 12, length 64\n5 packets captured\n6 packets received by filter\n0 packets dropped by kernel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("如果明确要抓取主机为192.168.100.70对本机的ping，则使用and操作符。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@server2 ~]# tcpdump -c 5 -nn -i eth0 icmp and src 192.168.100.62\n\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes\n12:09:29.957132 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16166, seq 1, length 64\n12:09:31.041035 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16166, seq 2, length 64\n12:09:32.124562 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16166, seq 3, length 64\n12:09:33.208514 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16166, seq 4, length 64\n12:09:34.292222 IP 192.168.100.70 > 192.168.100.62: ICMP echo request, id 16166, seq 5, length 64\n5 packets captured\n5 packets received by filter\n0 packets dropped by kernel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("注意不能直接写icmp src 192.168.100.70，因为icmp协议不支持直接应用host这个type。")]),s._v(" "),t("p",[t("strong",[s._v("(13).抓取到本机22端口包")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@server2 ~]# tcpdump -c 10 -nn -i eth0 tcp dst port 22  \n\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes\n12:06:57.574293 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 535528834, win 2053, length 0\n12:06:57.629125 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 193, win 2052, length 0\n12:06:57.684688 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 385, win 2051, length 0\n12:06:57.738977 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 577, win 2050, length 0\n12:06:57.794305 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 769, win 2050, length 0\n12:06:57.848720 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 961, win 2049, length 0\n12:06:57.904057 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 1153, win 2048, length 0\n12:06:57.958477 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 1345, win 2047, length 0\n12:06:58.014338 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 1537, win 2053, length 0\n12:06:58.069361 IP 192.168.100.1.5788 > 192.168.100.62.22: Flags [.], ack 1729, win 2052, length 0\n10 packets captured\n10 packets received by filter\n0 packets dropped by kernel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("strong",[s._v("(14).解析包数据")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@server2 ~]# tcpdump -c 2 -q -XX -vvv -nn -i eth0 tcp dst port 22\ntcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 65535 bytes\n12:15:54.788812 IP (tos 0x0, ttl 64, id 19303, offset 0, flags [DF], proto TCP (6), length 40)\n    192.168.100.1.5788 > 192.168.100.62.22: tcp 0\n        0x0000:  000c 2908 9234 0050 56c0 0008 0800 4500  ..)..4.PV.....E.\n        0x0010:  0028 4b67 4000 4006 a5d8 c0a8 6401 c0a8  .(Kg@.@.....d...\n        0x0020:  643e 169c 0016 2426 5fd6 1fec 2b62 5010  d>....$&_...+bP.\n        0x0030:  0803 7844 0000 0000 0000 0000            ..xD........\n12:15:54.842641 IP (tos 0x0, ttl 64, id 19304, offset 0, flags [DF], proto TCP (6), length 40)\n    192.168.100.1.5788 > 192.168.100.62.22: tcp 0\n        0x0000:  000c 2908 9234 0050 56c0 0008 0800 4500  ..)..4.PV.....E.\n        0x0010:  0028 4b68 4000 4006 a5d7 c0a8 6401 c0a8  .(Kh@.@.....d...\n        0x0020:  643e 169c 0016 2426 5fd6 1fec 2d62 5010  d>....$&_...-bP.\n        0x0030:  0801 7646 0000 0000 0000 0000            ..vF........\n2 packets captured\n2 packets received by filter\n0 packets dropped by kernel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("总的来说，tcpdump对基本的数据包抓取方法还是较简单的。只要掌握有限的几个选项(-nn -XX -vvv -i -c -q)，再组合表达式即可。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);