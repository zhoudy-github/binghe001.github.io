(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{633:function(s,a,t){"use strict";t.r(a);var e=t(7),p=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nmap-zenmap-amap-zmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nmap-zenmap-amap-zmap"}},[s._v("#")]),s._v(" Nmap+Zenmap+Amap+Zmap")]),s._v(" "),a("h2",{attrs:{id:"第一部分-nmap基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一部分-nmap基础"}},[s._v("#")]),s._v(" 第一部分 Nmap基础")]),s._v(" "),a("p",[a("strong",[s._v("一、Nmap功能")]),s._v(" 基本功能有三个：    1.探测主机是否在线;    2.扫描主机端口，嗅探所提供的网络服务    3.推断主机操作系统")]),s._v(" "),a("p",[s._v("主机探测：    探测网路上的主机，例如列出相应TCP和ICMP请求，icmp请求，开放特别端口的主机")]),s._v(" "),a("p",[s._v("端口扫描：    探测目标主机所开放的端口")]),s._v(" "),a("p",[s._v("版本检测：    探测目标主机的网络服务，判断其服务名称和版本号")]),s._v(" "),a("p",[s._v("系统检测：    探测目标主机的操作系统及网络设备的硬件特性")]),s._v(" "),a("p",[s._v("支持探测脚本的编写：    使用Namp的脚本引擎(NSE)和Lua编程语言")]),s._v(" "),a("p",[a("strong",[s._v("二、安装")]),s._v(" 到https://nmap.org 下载安装即可。")]),s._v(" "),a("p",[a("strong",[s._v("三、更新")]),s._v(" 1.更新nmap    1-1.在windows安装目录下找到nmap-update.exe 基于SVN更新    1-2.手动重新安装")]),s._v(" "),a("p",[s._v("2.更新nmap-script-database")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" nmap --script-updatedb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"第二部分-主机发现扫描技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二部分-主机发现扫描技术"}},[s._v("#")]),s._v(" 第二部分 主机发现扫描技术")]),s._v(" "),a("p",[a("strong",[s._v("一、主机发现")]),s._v(" 发送简单的ICMP回声请求报文，这些探测的目的是获得相应以显示某个IP地址是否是活动的(正在被某主机或者网络设备使用)，主机发现能够找到零星分布与IP地址海洋上的那些机器。")]),s._v(" "),a("p",[a("strong",[s._v("二、网络原理简介")])]),s._v(" "),a("p",[a("strong",[s._v("紧急标识URGent:")]),s._v(' 当URG=1时，表明此报文应尽快传送，而不要按本来的列队次序传送，与"紧急指针"字段共同使用。')]),s._v(" "),a("p",[a("strong",[s._v("紧迫标识PSH:")]),s._v(" 当PSH = 1时，表明请求远程TCP将本报文段立即传送给其应用层，而不要等到全部缓存都填满了之后再向上交付。")]),s._v(" "),a("p",[a("strong",[s._v("确认标识ACK:")]),s._v(" 只有当ACK=1时，确认序号字段才有意义。")]),s._v(" "),a("p",[a("strong",[s._v("复位标识ReSet:")]),s._v(" 当RST=1时，表明出现严重错误，必须释放链接，然后再重建传输连接。复位标识还用来拒绝一个不法的报文或拒绝打开一个连接；")]),s._v(" "),a("p",[a("strong",[s._v("同步标识SYN:")]),s._v(" 在建立连接时使用，当SYN=1而ACK=0时，表明这是一个连接请求报文段。对方若同意建立连接，在发还的报文段中使SYN=1和ACK=1.所以，SYN=1默认是一个连接请求。")]),s._v(" "),a("p",[a("strong",[s._v("终止标识FINal:")])]),s._v(" "),a("p",[s._v("用来释放一个连接，当FIN=1时，表明欲发送的字节串已经发送完成，并请求释放传输连接。")]),s._v(" "),a("p",[a("strong",[s._v("ICMP差错报文")]),s._v("    1.ICMP目标不可达消息    2.ICMP重定向消息    3.ICMP超时消息    4.源抑制消息")]),s._v(" "),a("p",[a("strong",[s._v("ICMP查询报文")]),s._v("    1.ICMP回送消息(echo)    2.ICMP地址掩码消息(Adress mask)    3.ICMP时间戳消息(Time stamp)")]),s._v(" "),a("p",[a("strong",[s._v("三、Nmap选项详解")])]),s._v(" "),a("p",[s._v("-P*选项(用于选择ping的类型)可以被结合使用")]),s._v(" "),a("p",[s._v("可以使用不同的TCP端口/标识位和ICMP码发送许多探测报文，目的是增加穿透防守严密的防火墙的机会。")]),s._v(" "),a("p",[a("strong",[s._v("-P0(无ping)")])]),s._v(" "),a("p",[s._v("完全跳过Nmap发现阶段。用-P0禁止主机发现会使Namp对每一个指定的目标IP地址进行所要求的扫描。所以，如果在命令行指定一个B类目标地址空间(/16)，所有63336个IP地址都会被扫描。")]),s._v(" "),a("p",[a("strong",[s._v("-PS[portlist] (TCP SYN PING)")])]),s._v(" "),a("p",[s._v("发送一个设置了SYN标志位的空TCP报文。默认目的端口是80，但不同的端口也可以作为选项指定。 在Nmap的源码nmap.h中，找到 #define DEFAULT_TCP_PROBE_PORT 80   我们可以将80端口改成我们想要的端口，重新编译，从而可以修改Nmap的扫描的默认端口。")]),s._v(" "),a("p",[s._v("示例如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@binghe:~# nmap -PS80,23,21,22 125.64.43.186-210\nStarting Nmap 7.70 ( https://nmap.org ) at 2018-11-18 16:23 CST\nNmap done: 25 IP addresses (0 hosts up) scanned in 21.17 seconds\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("-PA[portlist] (TCP ACK Ping)")])]),s._v(" "),a("p",[s._v("ACK报文标识确认一个建立连接的尝试，但该连接尚未完全建立。默认端口80，也可以指定目标端口列表。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PA 180.24.67.1-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-PU[portlist] (UDP Ping)")])]),s._v(" "),a("p",[s._v("发送一个空的(除非指定了--data-length)UDP报文到给定的端口。如果不指定，默认是31338")]),s._v(" "),a("p",[s._v("优势：可以穿越只过滤TCP的防火墙和过滤器。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PU 180.24.67.1-254\nnmap -PA12345,2298,3399 180.24.67.1-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("-PE;-PP;-PM(ICMP Ping Types)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PM -PE -PP --send-ip 180.175.10.1-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-PR(ARP Ping)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PR --send-ip 180.175.10.1-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-n(不用域名解析)")])]),s._v(" "),a("p",[s._v("不对发现的IP地址进行反向域名解析")]),s._v(" "),a("p",[a("strong",[s._v("-R(为所有目标解析域名)")])]),s._v(" "),a("p",[s._v("对目标IP地址作反向域名解析")]),s._v(" "),a("h2",{attrs:{id:"第三部分-nmap扫描目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三部分-nmap扫描目标"}},[s._v("#")]),s._v(" 第三部分 Nmap扫描目标")]),s._v(" "),a("p",[s._v("Nmap支持CIDR风格的地址，可以附加一个/"),a("numbit",[s._v("在一个IP地址或主机名后面，Nmap将会扫描所有和该参考IP地址具有"),a("numbit",[s._v("相同比特的所有IP地址或主机。例如：192.168.10.0/24将会扫描192.168.10.0，scanme.nmap.org/16也能成功使用.")])],1)],1),s._v(" "),a("p",[s._v("192.168.1,3,7.1-254等效于： 192.168.1.1-254    192.168.3.1-254    192.168.7.1-254")]),s._v(" "),a("p",[a("strong",[s._v("-iL  (从列表中输入)")])]),s._v(" "),a("p",[s._v("用-iL把文件名作为选项传给Nmap。列表中的项可以是Nmap在命令行上接受的任何格式(IP地址，主机名，CIDR、IPv6或八字节范围)，每一项必须以一个或多个空格，制表符或换行符隔开。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PP -PM -PE -iL ip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中ip就是我们存放IP地址的文件，ip文件的内容如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("172.17.17.24 172.17.17.10\nscanme.nmap.org\n172.17.1-100.1-100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("-iR  (随机选择目标)")])]),s._v(" "),a("p",[a("hostnum",[s._v("告诉Nmap生成多少个IP")])],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sS -PS80 -iR 0 -p 80\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("--exclude (排除主机/网络)")])]),s._v(" "),a("p",[a("strong",[s._v("--excludefile (排除文件中的列表)")])]),s._v(" "),a("p",[s._v("排除的目标文件中的IP是以换行符、空格或制表符分隔的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -PP -excludefile ip 172.17.17.1/16\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"第四部分-端口扫描技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四部分-端口扫描技术"}},[s._v("#")]),s._v(" 第四部分 端口扫描技术")]),s._v(" "),a("p",[s._v("-sS (TCP SYN扫描)")]),s._v(" "),a("p",[s._v("SYN扫描是默认的、执行快、不易被注意到，因为它从来不完成RCP连接")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sS 125.64.43.0-255\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-sT (TCP connect扫描)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sT 125.64.43.0-255\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-sU (UDP扫描)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sU --host-timeout 1 125.64.43.0-255\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-sA (TCP ACK扫描)")])]),s._v(" "),a("p",[a("strong",[s._v("-sW (TCP窗口扫描)")])]),s._v(" "),a("p",[a("strong",[s._v("-sN;-sF-sX (TCP null, FIN, and Xmas)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sN 125.64.43.0-254\nnmap -sF 125.64.43.0-254\nnmap -sX 125.64.43.0-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("-sM (TCP Maimon扫描)")])]),s._v(" "),a("p",[a("strong",[s._v("-sO (IP协议扫描)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--data-length 100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("-sI  (Idlescan,空闲扫描)")])]),s._v(" "),a("p",[s._v("对目标进行真正的TCP端口盲扫描")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  nmap --script ipidseq 125.64.43.0-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("--scanflags(定制的TCP扫描)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap --scanflags URGACK 125.64.43.0-254\nnmap -sS --scanflags URGACK 125.64.43.0-254\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("-b  (FTP弹跳扫描)")])]),s._v(" "),a("p",[s._v("参数格式:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<username>:<password>@<server IP>:<port>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("-p "),a("port",{attrs:{ranges:""}},[s._v("(只扫描指定的端口) 当扫描TCP端口又扫描UDP端口时，可以在端口号前加上T:或者U:指定协议")])],1),s._v(" "),a("p",[s._v("-F (快速(有限的端口)扫描)")]),s._v(" "),a("p",[s._v("-r (按随机顺序扫描端口)")]),s._v(" "),a("h2",{attrs:{id:"第五部分-扫描结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五部分-扫描结果"}},[s._v("#")]),s._v(" 第五部分 扫描结果")]),s._v(" "),a("p",[s._v("open(开放的)")]),s._v(" "),a("p",[s._v("closed(关闭的) 关闭的端口对于Nmap也是可访问的，但没有应用程序在其上监听。")]),s._v(" "),a("p",[s._v("open|filtered(开放或者被过滤的)")]),s._v(" "),a("p",[s._v("closed|filtered(关闭或者被过滤的)")]),s._v(" "),a("h2",{attrs:{id:"第六部分-服务及版本探测扫描技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第六部分-服务及版本探测扫描技术"}},[s._v("#")]),s._v(" 第六部分 服务及版本探测扫描技术")]),s._v(" "),a("p",[a("strong",[s._v("-sV (版本探测)")])]),s._v(" "),a("p",[s._v("打开版本探测。 您也可以用-A同时打开操作系统探测和版本探测。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" nmap -sV www.binghe.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("--allports (不为版本探测排除任何端口)")])]),s._v(" "),a("p",[s._v("默认情况下，Nmap版本探测会跳过9100 TCP端口，因为一些打印机简单地打印送到该端口的 任何数据，这回导致数十页HTTP get请求，二进制 SSL会话请求等等被打印出来。这一行为可以通过修改或删除nmap-service-probes 中的Exclude指示符改变， 您也可以不理会任何Exclude指示符，指定--allports扫描所有端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" nmap -sV --allports www.baidu.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("--version-intensity  (设置 版本扫描强度)")])]),s._v(" "),a("p",[s._v("当进行版本扫描(-sV)时，nmap发送一系列探测报文 ，每个报文都被赋予一个1到9之间的值。 被赋予较低值的探测报文对大范围的常见服务有效，而被赋予较高值的报文 一般没什么用。强度水平说明了应该使用哪些探测报文。数值越高， 服务越有可能被正确识别。 然而，高强度扫描花更多时间。强度值必须在0和9之间。 默认是7。当探测报文通过nmap-service-probes ports指示符 注册到目标端口时，无论什么强度水平，探测报文都会被尝试。这保证了DNS 探测将永远在任何开放的53端口尝试， SSL探测将在443端口尝试，等等。")]),s._v(" "),a("p",[a("strong",[s._v("--version-light (打开轻量级模式)")])]),s._v(" "),a("p",[s._v("这是 --version-intensity 2的方便的别名。轻量级模式使 版本扫描快许多，但它识别服务的可能性也略微小一点。")]),s._v(" "),a("p",[a("strong",[s._v("--version-all (尝试每个探测)")])]),s._v(" "),a("p",[s._v("--version-intensity 9的别名， 保证对每个端口尝试每个探测报文。")]),s._v(" "),a("p",[a("strong",[s._v("--version-trace (跟踪版本扫描活动)")])]),s._v(" "),a("p",[s._v("这导致Nmap打印出详细的关于正在进行的扫描的调试信息。 它是您用--packet-trace所得到的信息的子集。")]),s._v(" "),a("p",[a("strong",[s._v("-sR (RPC扫描)")])]),s._v(" "),a("p",[s._v("这种方法和许多端口扫描方法联合使用。 它对所有被发现开放的TCP/UDP端口执行SunRPC程序NULL命令，来试图 确定它们是否RPC端口，如果是， 是什么程序和版本号。因此您可以有效地获得和rpcinfo -p一样的信息， 即使目标的端口映射在防火墙后面(或者被TCP包装器保护)。Decoys目前不能和RPC scan一起工作。 这作为版本扫描(-sV)的一部分自动打开。 由于版本探测包括它并且全面得多，-sR很少被需要。")]),s._v(" "),a("h2",{attrs:{id:"第七部分-操作系统探测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七部分-操作系统探测"}},[s._v("#")]),s._v(" 第七部分 操作系统探测")]),s._v(" "),a("p",[a("strong",[s._v("-O (启用操作系统检测)")])]),s._v(" "),a("p",[s._v("也可以使用-A来同时启用操作系统检测和版本检测。")]),s._v(" "),a("p",[a("strong",[s._v("--osscan-limit (针对指定的目标进行操作系统检测)")])]),s._v(" "),a("p",[s._v("如果发现一个打开和关闭的TCP端口时，操作系统检测会更有效。 采用这个选项，Nmap只对满足这个条件的主机进行操作系统检测，这样可以 节约时间，特别在使用-P0扫描多个主机时。这个选项仅在使用 -O或-A 进行操作系统检测时起作用。")]),s._v(" "),a("p",[a("strong",[s._v("--osscan-guess; --fuzzy (推测操作系统检测结果)")])]),s._v(" "),a("p",[s._v("当Nmap无法确定所检测的操作系统时，会尽可能地提供最相近的匹配，Nmap默认 进行这种匹配，使用上述任一个选项使得Nmap的推测更加有效。")]),s._v(" "),a("h2",{attrs:{id:"第八部分-nmap脚本扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第八部分-nmap脚本扫描"}},[s._v("#")]),s._v(" 第八部分 Nmap脚本扫描")]),s._v(" "),a("p",[s._v("总体命令格式为：nmap --script 脚本名称 目标")]),s._v(" "),a("p",[a("strong",[s._v("1.获得WHOIS记录信息")])]),s._v(" "),a("p",[s._v("命令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap --script whois 目标\nnmap --script whois-domain 目标\nnmap --script whois-ip 目标\nnmap --script whois-domain 目标1 目标2 目标3 ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("2.Nmap的HTTP方法")])]),s._v(" "),a("p",[s._v("命令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80,443 --script http-medthods scanme.nmap.org\nnmap --script http-enum -p80 目标\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("指定不同的User Agent来绕过某些防火墙")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('nmap -p80 --script http-enum --script-args http.useragent="Mozilla 5" 目标\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("指定HTTP管道数目来加快扫描")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80 --script http-enum --script-args http.pipeline=25 目标\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("爆破HTTP身份认证")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80 --script http-brute --script-args http-brute.path=/admin/<target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("发现使用弱密码账户安全的wordpress，输入命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80 --script http-wordpress-brute <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置线程的数量，使用脚本参数http-wordpress-brute.threads")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" nmap -p80 --script http-wordpress-brute --script-args http-wordpress-brute.threads=5 <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Joomla是在许多国家非常流行的cms，使用http-joomla-brute脚本来检测弱密码账户")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80 --script http-joomla-brute <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3、检测SQL注入")])]),s._v(" "),a("p",[s._v("命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p80 --script http-sql-injection <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("4、检测数据库")])]),s._v(" "),a("p",[s._v("列出数据库名称")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" nmap -sV --script=mysql-databases <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用户审计")]),s._v(" "),a("p",[s._v("用密码进行身份验证，通过爆破或者空口令获得凭据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sV --script=mysql-users\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检查root空口令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo nmap --script mysql-empty-password <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用Nmap脚本爆破用户名和密码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap --script=mysql-brute <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("5、漏洞利用")])]),s._v(" "),a("p",[s._v("使用CVE-2012-2122 MySQL最可怕的漏洞CVE-2012-2122，攻击者使用root尝试300次登录后，成功进入了数据库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap --script=mysql-vuln-cve2012-2122 <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("6.枚举SMTP服务的用户")])]),s._v(" "),a("p",[s._v("将邮箱作为用户名在web应用程序中非常常见，在审计邮件服务器时，收集用户名是一个必要的任务。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -p25 --script smtp-enum-users <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检测SMTP服务器后门")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -sV --script smtp-strangeport <target>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"第九部分-防火墙-ids躲避和哄骗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第九部分-防火墙-ids躲避和哄骗"}},[s._v("#")]),s._v(" 第九部分 防火墙/IDS躲避和哄骗")]),s._v(" "),a("p",[a("strong",[s._v("-f (报文分段); --mtu (使用指定的MTU)")])]),s._v(" "),a("p",[s._v("-f选项要求扫描时(包挺ping扫描)使用 小的IP包分段。其思路是将TCP头分段在几个包中，使得包过滤器、 IDS以及其它工具的检测更加困难。必须小心使用这个选项，有些系 统在处理这些小包时存在问题，例如旧的网络嗅探器Sniffit在接收 到第一个分段时会立刻出现分段错误。该选项使用一次，Nmap在IP 头后将包分成8个字节或更小。因此，一个20字节的TCP头会被分成3个 包，其中2个包分别有TCP头的8个字节，另1个包有TCP头的剩下4个字 节。当然，每个包都有一个IP头。再次使用-f可使用 16字节的分段(减少分段数量)。使用--mtu选项可 以自定义偏移的大小，使用时不需要-f，偏移量必须 是8的倍数。包过滤器和防火墙对所有的IP分段排队，如Linux核心中的 CONFIG-IP-ALWAYS-DEFRAG配置项，分段包不会直接使用。一些网络无法 承受这样所带来的性能冲击，会将这个配置禁止。其它禁止的原因有分段 包会通过不同的路由进入网络。一些源系统在内核中对发送的报文进行 分段，使用iptables连接跟踪模块的Linux就是一个例子。当使用类似Ethereal 的嗅探器时，扫描必须保证发送的报文要分段。如果主机操作系统会产 生问题，尝试使用--send-eth选项以避开IP层而直接 发送原始的以太网帧。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nmap -f 192.168.1.100\nnmap --mtu 16 192.168.1.100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("-D  (使用诱饵隐蔽扫描)")])]),s._v(" "),a("p",[s._v("为使诱饵扫描起作用，需要使远程主机认为是诱饵在扫描目标网络。 IDS可能会报个某个IP的5-10个端口扫描，但并不知道哪个IP在扫描以及 哪些不是诱饵。但这种方式可以通过路由跟踪、响应丢弃以及其它主动 机制在解决。这是一种常用的隐藏自身IP地址的有效技术。")]),s._v(" "),a("p",[s._v("使用逗号分隔每个诱饵主机，也可用自己的真实IP作为诱饵，这时可使用 ME选项说明。如果在第6个位置或 更后的位置使用ME选项，一些常用 端口扫描检测器(如Solar Designer's excellent scanlogd)就不会报告 这个真实IP。如果不使用ME选项，Nmap 将真实IP放在一个随机的位置")]),s._v(" "),a("p",[s._v("注意，作为诱饵的主机须在工作状态，否则会导致目标主机的SYN洪水攻击。 如果在网络中只有一个主机在工作，那就很容易确定哪个主机在扫描。也可 使用IP地址代替主机名(被诱骗的网络就不可能在名字服务器日志中发现)。")]),s._v(" "),a("p",[s._v("诱饵可用在初始的ping扫描(ICMP、SYN、ACK等)阶段或真正的端口扫描 阶段。诱饵也可以用于远程操作系统检测(-O)。在进行版 本检测或TCP连接扫描时，诱饵无效。")]),s._v(" "),a("p",[s._v("使用过多的诱饵没有任何价值，反而导致扫描变慢并且结果不准确。 此外，一些ISP会过滤哄骗的报文，但很多对欺骗IP包没有任何限制。")]),s._v(" "),a("p",[a("strong",[s._v("-S  (源地址哄骗)")])]),s._v(" "),a("p",[s._v("在某些情况下，Nmap可能无法确定你的源地址(如果这样，Nmap会给出 提示)。此时，使用-S选项并说明所需发送包的接口IP地址。")]),s._v(" "),a("p",[s._v("这个标志的另一个用处是哄骗性的扫描，使得目标认为是另 一个地址在进行扫描。可以想象某一个竞争对手在不断扫描某个公司！ -e选项常在这种情况下使用，也可采用-P0选项。")]),s._v(" "),a("p",[a("strong",[s._v("-e  (使用指定的接口)")])]),s._v(" "),a("p",[s._v("告诉Nmap使用哪个接口发送和接收报文，Nmap可以进行自动检测， 如果检测不出会给出提示。")]),s._v(" "),a("p",[a("strong",[s._v("--source-port ; -g  (源端口哄骗)")])]),s._v(" "),a("p",[s._v("仅依赖于源端口号就信任数据流是一种常见的错误配置，这个问题非常 好理解。例如一个管理员部署了一个新的防火墙，但招来了很多用户的不满，因为 他们的应用停止工作了。可能是由于外部的UDP DNS服务器响应无法进入网络，而导致 DNS的崩溃。FTP是另一个常见的例子，在FTP传输时，远程服务器尝试和内部用 建立连接以传输数据。")]),s._v(" "),a("p",[s._v("对这些问题有安全解决方案，通常是应用级代理或协议分析防火墙模块。 但也存在一些不安全的方案。注意到DNS响应来自于53端口，FTP连接 来自于20端口，很多管理员会掉入一个陷阱，即允许来自于这些端口的数据进入 网络。他们认为这些端口里不会有值得注意的攻击和漏洞利用。此外，管理员 或许认为这是一个短期的措施，直至他们采取更安全的方案。但他们忽视了安全的 升级。")]),s._v(" "),a("p",[s._v("不仅仅是工作量过多的网络管理员掉入这种陷阱，很多产品本身也会有这类 不安全的隐患，甚至是微软的产品。Windows 2000和Windows XP中包含的IPsec过滤 器也包含了一些隐含规则，允许所有来自88端口(Kerberos)的TCP和UDP数据流。另 一个常见的例子是Zone Alarm个人防火墙到2.1.25版本仍然允许源端口53(DNS)或 67(DHCP)的UDP包进入。")]),s._v(" "),a("p",[s._v("Nmap提供了-g和--source-port选项(它们是 等价的)，用于利用上述弱点。只需要提供一个端口号，Nmap就可以从这些 端口发送数据。为使特定的操作系统正常工作，Nmap必须使用不同的端口号。 DNS请求会忽略--source-port选项，这是因为Nmap依靠系 统库来处理。大部分TCP扫描，包括SYN扫描，可以完全支持这些选项，UDP扫 描同样如此。")]),s._v(" "),a("p",[a("strong",[s._v("--data-length  (发送报文时 附加随机数据)")])]),s._v(" "),a("p",[s._v("正常情况下，Nmap发送最少的报文，只含一个包头。因此TCP包通常 是40字节，ICMP ECHO请求只有28字节。这个选项告诉Nmap在发送的报文上 附加指定数量的随机字节。操作系统检测(-O)包不受影响， 但大部分ping和端口扫描包受影响，这会使处理变慢，但对扫描的影响较小。")]),s._v(" "),a("p",[a("strong",[s._v("--ttl  (设置IP time-to-live域)")])]),s._v(" "),a("p",[s._v("设置IPv4报文的time-to-live域为指定的值。")]),s._v(" "),a("p",[a("strong",[s._v("--randomize-hosts (对目标主机的顺序随机排列)")])]),s._v(" "),a("p",[s._v("告诉Nmap在扫描主机前对每个组中的主机随机排列，最多可达 8096个主机。这会使得扫描针对不同的网络监控系统来说变得不是很 明显，特别是配合值较小的时间选项时更有效。如果需要对一个较大 的组进行随机排列，需要增大nmap.h文件中 PING-GROUP-SZ的值，并重新编译。另一种方法是使用列表扫描 (-sL -n -oN "),a("filename",[s._v(")，产生目标IP的列表， 使用Perl脚本进行随机化，然后使用-iL提供给Nmap。")])],1),s._v(" "),a("p",[a("strong",[s._v("--spoof-mac  (MAC地址哄骗)")])]),s._v(" "),a("p",[s._v("要求Nmap在发送原以太网帧时使用指定的MAC地址，这个选项隐含了 --send-eth选项，以保证Nmap真正发送以太网包。MAC地址有几 种格式。如果简单地使用字符串“0”，Nmap选择一个完全随机的MAC 地址。如果给定的字符品是一个16进制偶数(使用:分隔)，Nmap将使用这个MAC地址。 如果是小于12的16进制数字，Nmap会随机填充剩下的6个字节。如果参数不是0或16进 制字符串，Nmap将通过nmap-mac-prefixes查找 厂商的名称(大小写区分)，如果找到匹配，Nmap将使用厂商的OUI(3字节前缀)，然后 随机填充剩余的3个节字。正确的--spoof-mac参数有， Apple， 0，01:02:03:04:05:06， deadbeefcafe，0020F2， 和Cisco.")]),s._v(" "),a("h2",{attrs:{id:"第十部分-其它选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第十部分-其它选项"}},[s._v("#")]),s._v(" 第十部分 其它选项")]),s._v(" "),a("p",[a("strong",[s._v("-6 (启用IPv6扫描)")])]),s._v(" "),a("p",[s._v("从2002年起，Nmap提供对IPv6的一些主要特征的支持。ping扫描(TCP-only)、 连接扫描以及版本检测都支持IPv6。除增加-6选项外， 其它命令语法相同。当然，必须使用IPv6地址来替换主机名，如 3ffe:7501:4819:2000:210:f3ff:fe03:14d0。 除“所关注的端口”行的地址部分为IPv6地址。")]),s._v(" "),a("p",[s._v("IPv6目前未在全球广泛采用，目前在一些国家(亚洲)应用较多， 一些高级操作系统支持IPv6。使用Nmap的IPv6功能，扫描的源和目 的都需要配置IPv6。如果ISP(大部分)不分配IPv6地址，Nmap可以采用 免费的隧道代理。一种较好的选择是BT Exact，位于https://tb.ipv6.btexact.com/。 此外，还有Hurricane Electric，位于http://ipv6tb.he.net/。6to4隧道是 另一种常用的免费方法。")]),s._v(" "),a("p",[a("strong",[s._v("-A (激烈扫描模式选项)")])]),s._v(" "),a("p",[s._v("这个选项启用额外的高级和高强度选项，目前还未确定代表 的内容。目前，这个选项启用了操作系统检测(-O) 和版本扫描(-sV)，以后会增加更多的功能。 目的是启用一个全面的扫描选项集合，不需要用户记忆大量的 选项。这个选项仅仅启用功能，不包含用于可能所需要的 时间选项(如-T4)或细节选项(-v)。")]),s._v(" "),a("p",[a("strong",[s._v("--datadir  (说明用户Nmap数据文件位置)")])]),s._v(" "),a("p",[s._v("Nmap在运行时从文件中获得特殊的数据，这些文件有 nmap-service-probes， nmap-services， nmap-protocols， nmap-rpc， nmap-mac-prefixes和 nmap-os-fingerprints。Nmap首先 在--datadir选项说明的目录中查找这些文件。 未找到的文件，将在BMAPDIR环境变量说明的目录中查找。 接下来是用于真正和有效UID的~/.nmap 或Nmap可执行代码的位置(仅Win32)；然后是是编译位置， 如/usr/local/share/nmap 或/usr/share/nmap。 Nmap查找的最后一个位置是当前目录。")]),s._v(" "),a("p",[a("strong",[s._v("--send-eth (使用原以太网帧发送)")])]),s._v(" "),a("p",[s._v("要求Nmap在以太网(数据链路)层而不是IP(网络层)发送 报文。默认方式下，Nmap选择最适合其运行平台的方式，原套接 字(IP层)是UNIX主机最有效的方式，而以太网帧最适合Windows操作 系统，因为Microsoft禁用了原套接字支持。在UNIX中，如果没有其 它选择(如无以太网连接)，不管是否有该选项，Nmap都使用原IP包。")]),s._v(" "),a("p",[a("strong",[s._v("--send-ip (在原IP层发送)")])]),s._v(" "),a("p",[s._v("要求Nmap通过原IP套接字发送报文，而不是低层的以 太网帧。这是--send-eth选项的补充。")]),s._v(" "),a("p",[a("strong",[s._v("--privileged (假定用户具有全部权限)")])]),s._v(" "),a("p",[s._v("告诉Nmap假定其具有足够的权限进行源套接字包发送、 报文捕获和类似UNIX系统中根用户操作的权限。默认状态下， 如果由getuid()请求的类似操作不为0，Nmap将退出。 --privileged在具有Linux内核性能的类似 系统中使用非常有效，这些系统配置允许非特权用户可以进行 原报文扫描。需要明确的是，在其它选项之前使用这些需要权 限的选项(SYN扫描、操作系统检测等)。Nmap-PRIVILEGED变量 设置等价于--privileged选项。")]),s._v(" "),a("p",[a("strong",[s._v("-V; --version (打印版本信息)")])]),s._v(" "),a("p",[s._v("打印Nmap版本号并退出。")]),s._v(" "),a("p",[a("strong",[s._v("-h; --help (打印帮助摘要面)")])]),s._v(" "),a("p",[s._v("打印一个短的帮助屏幕，列出大部分常用的 命令选项，这个功能与不带参数运行Nmap是相同的。")]),s._v(" "),a("p",[a("strong",[s._v("时间和性能")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--min-hostgroup <milliseconds>; --max-hostgroup <milliseconds> (调整并行扫描组的大小)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Nmap具有并行扫描多主机端口或版本的能力，Nmap将多个目标IP地址 空间分成组，然后在同一时间对一个组进行扫描。通常，大的组更有效。缺 点是只有当整个组扫描结束后才会提供主机的扫描结果。如果组的大小定义 为50，则只有当前50个主机扫描结束后才能得到报告(详细模式中的补充信息 除外)。")]),s._v(" "),a("p",[s._v("默认方式下，Nmap采取折衷的方法。开始扫描时的组较小， 最小为5，这样便于尽快产生结果；随后增长组的大小，最大为1024。确切的 大小依赖于所给定的选项。为保证效率，针对UDP或少量端口的TCP扫描，Nmap 使用大的组。")]),s._v(" "),a("p",[s._v("--max-hostgroup选项用于说明使用最大的组，Nmap不 会超出这个大小。--min-hostgroup选项说明最小的组，Nmap 会保持组大于这个值。如果在指定的接口上没有足够的目标主机来满足所 指定的最小值，Nmap可能会采用比所指定的值小的组。这两个参数虽然很少使用， 但都用于保持组的大小在一个指定的范围之内。")]),s._v(" "),a("p",[s._v("这些选项的主要用途是说明一个最小组的大小，使得整个扫描更加快速。通常 选择256来扫描C类网段。对于端口数较多的扫描，超出该值没有意义。对于 端口数较少的扫描，2048或更大的组大小是有帮助的。")]),s._v(" "),a("p",[a("strong",[s._v("--min-parallelism ; --max-parallelism  (调整探测报文的并行度)")])]),s._v(" "),a("p",[s._v("这些选项控制用于主机组的探测报文数量，可用于端口扫描和主机发现。默认状态下， Nmap基于网络性能计算一个理想的并行度，这个值经常改变。如果报文被丢弃， Nmap降低速度，探测报文数量减少。随着网络性能的改善，理想的探测报文数量会缓慢增加。 这些选项确定这个变量的大小范围。默认状态下，当网络不可靠时，理想的并行度值 可能为1，在好的条件下，可能会增长至几百。")]),s._v(" "),a("p",[s._v("最常见的应用是--min-parallelism值大于1，以加快 性能不佳的主机或网络的扫描。这个选项具有风险，如果过高则影响准确度，同时 也会降低Nmap基于网络条件动态控制并行度的能力。这个值设为10较为合适， 这个值的调整往往作为最后的手段。")]),s._v(" "),a("p",[s._v("--max-parallelism选项通常设为1，以防止Nmap在同一时间 向主机发送多个探测报文，和选择--scan-delay同时使用非常有用，虽然 这个选项本身的用途已经很好。")]),s._v(" "),a("p",[a("strong",[s._v("--min-rtt-timeout ， --max-rtt-timeout ， --initial-rtt-timeout  (调整探测报文超时)")])]),s._v(" "),a("p",[s._v("Nmap使用一个运行超时值来确定等待探测报文响应的时间，随后会放弃或重新 发送探测报文。Nmap基于上一个探测报文的响应时间来计算超时值，如果网络延迟比较显著 和不定，这个超时值会增加几秒。初始值的比较保守(高)，而当Nmap扫描无响应 的主机时，这个保守值会保持一段时间。")]),s._v(" "),a("p",[s._v("这些选项以毫秒为单位，采用小的--max-rtt-timeout值，使 --initial-rtt-timeout值大于默认值可以明显减少扫描时间，特别 是对不能ping通的扫描(-P0)以及具有严格过滤的网络。如果使用太 小的值，使得很多探测报文超时从而重新发送，而此时可能响应消息正在发送，这使得整个扫描的时 间会增加。")]),s._v(" "),a("p",[s._v("如果所有的主机都在本地网络，对于--max-rtt-timeout值来 说，100毫秒比较合适。如果存在路由，首先使用ICMP ping工具ping主机，或使用其 它报文工具如hpings，可以更好地穿透防火墙。查看大约10个包的最大往返时间，然后将 --initial-rtt-timeout设成这个时间的2倍，--max-rtt-timeout 可设成这个时间值的3倍或4倍。通常，不管ping的时间是多少，最大的rtt值不得小于100ms， 不能超过1000ms。")]),s._v(" "),a("p",[s._v("--min-rtt-timeout这个选项很少使用，当网络不可靠时， Nmap的默认值也显得过于强烈，这时这个选项可起作用。当网络看起来不可靠时，Nmap仅将 超时时间降至最小值，这个情况是不正常的，需要向nmap-dev邮件列表报告bug。")]),s._v(" "),a("p",[a("strong",[s._v("--host-timeout  (放弃低速目标主机)")])]),s._v(" "),a("p",[s._v("由于性能较差或不可靠的网络硬件或软件、带宽限制、严格的防火墙等原因， 一些主机需要很长的时间扫描。这些极少数的主机扫描往往占 据了大部分的扫描时间。因此，最好的办法是减少时间消耗并且忽略这些主机，使用 --host-timeout选项来说明等待的时间(毫秒)。通常使用1800000 来保证Nmap不会在单个主机上使用超过半小时的时间。需要注意的是，Nmap在这半小时中可以 同时扫描其它主机，因此并不是完全放弃扫描。超时的主机被忽略，因此也没有针对该主机的 端口表、操作系统检测或版本检测结果的输出。")]),s._v(" "),a("p",[a("strong",[s._v("--scan-delay ; --max-scan-delay  (调整探测报文的时间间隔)")])]),s._v(" "),a("p",[s._v("这个选项用于Nmap控制针对一个主机发送探测报文的等待时间(毫秒)，在带宽 控制的情况下这个选项非常有效。Solaris主机在响应UDP扫描探测报文报文时，每秒 只发送一个ICMP消息，因此Nmap发送的很多数探测报文是浪费的。--scan-delay 设为1000，使Nmap低速运行。Nmap尝试检测带宽控制并相应地调整扫描的延迟，但 并不影响明确说明何种速度工作最佳。")]),s._v(" "),a("p",[s._v("--scan-delay的另一个用途是躲闭基于阈值的入侵检测和预防 系统(IDS/IPS)。")]),s._v(" "),a("p",[a("strong",[s._v("-T  (设置时间模板)")])]),s._v(" "),a("p",[s._v("上述优化时间控制选项的功能很强大也很有效，但有些用户会被迷惑。此外， 往往选择合适参数的时间超过了所需优化的扫描时间。因此，Nmap提供了一些简单的 方法，使用6个时间模板，使用时采用-T选项及数字(0 - 5) 或名称。模板名称有paranoid (0)、sneaky (1)、polite (2)、normal(3)、 aggressive (4)和insane (5)。前两种模式用于IDS躲避，Polite模式降低了扫描 速度以使用更少的带宽和目标主机资源。默认模式为Normal，因此-T3 实际上是未做任何优化。Aggressive模式假设用户具有合适及可靠的网络从而加速 扫描。Insane模式假设用户具有特别快的网络或者愿意为获得速度而牺牲准确性。")]),s._v(" "),a("p",[s._v("用户可以根据自己的需要选择不同的模板，由Nmap负责选择实际的时间值。 模板也会针对其它的优化控制选项进行速度微调。例如，-T4 针对TCP端口禁止动态扫描延迟超过10ms，-T5对应的值为5ms。 模板可以和优化调整控制选项组合使用，但模板必须首先指定，否则模板的标准值 会覆盖用户指定的值。建议在扫描可靠的网络时使用 -T4，即使 在自己要增加优化控制选项时也使用(在命令行的开始)，从而从这些额外的较小的优化 中获益。")]),s._v(" "),a("p",[s._v("如果用于有足够的带宽或以太网连接，仍然建议使用-T4选项。 有些用户喜欢-T5选项，但这个过于强烈。有时用户考虑到避免使主机 崩溃或者希望更礼貌一些会采用-T2选项。他们并没意识到-T Polite选项是如何的慢，这种模式的扫描比默认方式实际上要多花10倍的时间。默认时间 选项(-T3)很少有主机崩溃和带宽问题，比较适合于谨慎的用户。不进行 版本检测比进行时间调整能更有效地解决这些问题。")]),s._v(" "),a("p",[s._v("虽然-T0和-T1选项可能有助于避免IDS告警，但 在进行上千个主机或端口扫描时，会显著增加时间。对于这种长时间的扫描，宁可设定确切的时间 值，而不要去依赖封装的-T0和-T1选项。")]),s._v(" "),a("p",[s._v("T0选项的主要影响是对于连续扫描，在一个时间只能扫描一个端口， 每个探测报文的发送间隔为5分钟。T1和T2选项比较类似， 探测报文间隔分别为15秒和0.4秒。T3是Nmap的默认选项，包含了并行扫描。 T4选项与 --max-rtt-timeout 1250 --initial-rtt-timeout 500 等价，最大TCP扫描延迟为10ms。T5等价于 --max-rtt-timeout 300 --min-rtt-timeout 50 --initial-rtt-timeout 250 --host-timeout 900000，最大TCP扫描延迟为5ms。")]),s._v(" "),a("h2",{attrs:{id:"nmap输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nmap输出"}},[s._v("#")]),s._v(" Nmap输出")]),s._v(" "),a("p",[a("strong",[s._v("-oN  (标准输出)")])]),s._v(" "),a("p",[s._v("要求将标准输出直接写入指定 的文件。如上所述，这个格式与交互式输出 略有不同。")]),s._v(" "),a("p",[a("strong",[s._v("-oX  (XML输出)")])]),s._v(" "),a("p",[s._v("要求XML输出直接写入指定 的文件。Nmap包含了一个文档类型定义(DTD)，使XML解析器有效地 进行XML输出。这主要是为了程序应用，同时也可以协助人工解释 Nmap的XML输出。DTD定义了合法的格式元素，列举可使用的属性和 值。最新的版本可在 http://www.insecure.org/nmap/data/nmap.dtd获取。")]),s._v(" "),a("p",[s._v("XML提供了可供软件解析的稳定格式输出，主要的计算机 语言都提供了免费的XML解析器，如C/C++，Perl，Python和Java。 针对这些语言有一些捆绑代码用于处理Nmap的输出和特定的执行程序。 例如perl CPAN中的Nmap::Scanner 和Nmap::Parser。 对几乎所有与Nmap有接口的主要应用来说，XML是首选的格式。")]),s._v(" "),a("p",[s._v("XML输出引用了一个XSL样式表，用于格式化输出结果，类似于 HTML。最方便的方法是将XML输出加载到一个Web浏览器，如Firefox 或IE。由于nmap.xsl文件的绝对 路径，因此通常只能在运行了Nmap的机器上工作(或类似配置的机器)。 类似于任何支持Web机器的HTML文件，--stylesheet 选项可用于建立可移植的XML文件。")]),s._v(" "),a("p",[a("strong",[s._v("-oS  (ScRipT KIdd|3 oUTpuT)")])]),s._v(" "),a("p",[s._v("脚本小子输出类似于交互工具输出，这是一个事后处理，适合于 'l33t HaXXorZ， 由于原来全都是大写的Nmap输出。这个选项和脚本小子开了玩笑，看上去似乎是为了 “帮助他们”。")]),s._v(" "),a("p",[a("strong",[s._v("-oG  (Grep输出)")])]),s._v(" "),a("p",[s._v("这种方式最后介绍，因为不建议使用。XML输格式很强大，便于有经验 的用户使用。XML是一种标准，由许多解析器构成，而Grep输届更简化。XML 是可扩展的，以支持新发布的Nmap特点。使用Grep输出的目的是忽略这些 特点，因为没有足够的空间。")]),s._v(" "),a("p",[s._v("然面，Grep输出仍然很常使用。它是一种简单格式，每行一个主机，可以 通过UNIX工具(如grep、awk、cut、sed、diff)和Perl方便地查找和分解。常可 用于在命令行上进行一次性测式。查找ssh端口打开或运行Sloaris的主机，只需 要一个简单的grep主机说明，使用通道并通过awk或cut命令打印所需的域。")]),s._v(" "),a("p",[s._v("Grep输出可以包含注释(每行由#号开始)。每行由6个标记的域组成，由制表符及 冒号分隔。这些域有主机，端口， 协议，忽略状态， 操作系统，序列号， IPID和状态。")]),s._v(" "),a("p",[s._v("这些域中最重要的是Ports，它提供 了所关注的端口的细节，端口项由逗号分隔。每个端口项代表一个所关注的端口， 每个子域由/分隔。这些子域有：端口号， 状态，协议， 拥有者，服务， SunRPCinfo和版本信息。")]),s._v(" "),a("p",[s._v("对于XML输出，本手册无法列举所有的格式，有关Nmap Grep输出的更详细信息可 查阅http://www.unspecific.com/nmap-oG-output。")]),s._v(" "),a("p",[a("strong",[s._v("-oA  (输出至所有格式)")])]),s._v(" "),a("p",[s._v("为使用方便，利用-oA"),a("basename",[s._v("选项 可将扫描结果以标准格式、XML格式和Grep格式一次性输出。分别存放在 "),a("basename",[s._v(".nmap，"),a("basename",[s._v(".xml和 "),a("basename",[s._v(".gnmap文件中。也可以在文件名前 指定目录名，如在UNIX中，使用~/nmaplogs/foocorp/， 在Window中，使用c:\\hacking\\sco on Windows。")])],1)],1)],1)],1),s._v(" "),a("p",[s._v("细节和调试选项")]),s._v(" "),a("p",[a("strong",[s._v("-v (提高输出信息的详细度)")])]),s._v(" "),a("p",[s._v("通过提高详细度，Nmap可以输出扫描过程的更多信息。 输出发现的打开端口，若Nmap认为扫描需要更多时间会显示估计 的结束时间。这个选项使用两次，会提供更详细的信息。这个选 项使用两次以上不起作用。")]),s._v(" "),a("p",[s._v("大部分的变化仅影响交互式输出，也有一些影响标准和脚本 小子输出。其它输出类型由机器处理，此时Nmap默认提供详细的信 息，不需要人工干预。然而，其它模式也会有一些变化，省略一些 细节可以减小输出大小。例如，Grep输出中的注释行提供所有扫描 端口列表，但由于这些信息过长，因此只能在细节模式中输出。")]),s._v(" "),a("p",[a("strong",[s._v("-d [level] (提高或设置调试级别)")])]),s._v(" "),a("p",[s._v("当详细模式也不能为用户提供足够的数据时，使用调试可以得到更 多的信息。使用细节选项(-v)时，可启用命令行参数 (-d)，多次使用可提高调试级别。也可在-d 后面使用参数设置调试级别。例如，-d9设定级别9。这是 最高的级别，将会产生上千行的输出，除非只对很少的端口和目标进行简单扫描。")]),s._v(" "),a("p",[s._v("如果Nmap因为Bug而挂起或者对Nmap的工作及原理有疑问，调试输出 非常有效。主要是开发人员用这个选项，调试行不具备自我解释的特点。 例如，Timeoutvals: srtt: -1 rttvar: -1 to: 1000000 delta 14987 ==> srtt: 14987 rttvar: 14987 to: 100000。如果对某行输出不明白， 可以忽略、查看源代码或向开发列表(nmap-dev)求助。有些输出行会有自 我解释的特点，但随着调试级别的升高，会越来越含糊。")]),s._v(" "),a("p",[a("strong",[s._v("--packet-trace (跟踪发送和接收的报文)")])]),s._v(" "),a("p",[s._v("要求Nmap打印发送和接收的每个报文的摘要，通常用于 调试，有助于新用户更好地理解Nmap的真正工作。为避免输出过 多的行，可以限制扫描的端口数，如-p20-30。 如果只需进行版本检测，使用--version-trace。")]),s._v(" "),a("p",[a("strong",[s._v("--iflist (列举接口和路由)")])]),s._v(" "),a("p",[s._v("输出Nmap检测到的接口列表和系统路由，用于调试路由 问题或设备描述失误(如Nmap把PPP连接当作以太网对待)。")]),s._v(" "),a("p",[a("strong",[s._v("其它输出选项")])]),s._v(" "),a("p",[a("strong",[s._v("--append-output (在输出文件中添加)")])]),s._v(" "),a("p",[s._v("当使用文件作为输出格式，如-oX或-oN， 默认该文件被覆盖。如果希望文件保留现有内容，将结果添加在现 有文件后面，使用--append-output选项。所有指 定的输出文件都被添加。但对于XML(-oX)扫描输出 文件无效，无法正常解析，需要手工修改。")]),s._v(" "),a("p",[a("strong",[s._v("--resume  (继续中断的扫描)")])]),s._v(" "),a("p",[s._v("一些扩展的Nmap运行需要很长的时间 -- 以天计算，这类扫描 往往不会结束。可以进行一些限制，禁止Nmap在工作时间运行，导致 网络中断、运行Nmap的主机计划或非计划地重启、或者Nmap自己中断。 运行Nmap的管理员可以因其它原因取消运行，按下ctrl-C 即可。从头开始启动扫描可能令人不快，幸运的是，如果标准扫描 (-oN)或Grep扫描(-oG)日志 被保留，用户可以要求Nmap恢复终止的扫描，只需要简单地使用选项 --resume并说明标准/Grep扫描输出文件，不允许 使用其它参数，Nmap会解析输出文件并使用原来的格式输出。使用方式 如nmap --resume "),a("logfilename",[s._v("。 Nmap将把新地结果添加到文件中，这种方式不支持XML输出格式，原因是 将两次运行结果合并至一个XML文件比较困难。")])],1),s._v(" "),a("p",[a("strong",[s._v("--stylesheet  (设置XSL样式表，转换XML输出)")])]),s._v(" "),a("p",[s._v("Nmap提从了XSL样式表nmap.xsl，用于查看 或转换XML输出至HTML。XML输出包含了一个xml-stylesheet， 直接指向nmap.xml文件， 该文件由Nmap安装(或位于Windows当前工作目录)。在Web浏览器 中打开Nmap的XML输出时，将会在文件系统中寻找nmap.xsl文件， 并使用它输出结果。如果希望使用不同的样式表，将它作为 --stylesheet的参数，必段指明完整的路 径或URL，常见的调用方式是--stylesheet "),a("a",{attrs:{href:"http://www.insecure.org/nmap/data/nmap.xsl",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.insecure.org/nmap/data/nmap.xsl"),a("OutboundLink")],1),s._v("。 这告诉浏览器从Insecire.Org中加载最新的样式表。这使得 没安装Nmap(和nmap.xsl) 的机器中可以方便地查看结果。因此，URL更方便使用，本地文件系统 的nmap.xsl用于默认方式。")]),s._v(" "),a("p",[a("strong",[s._v("--no-stylesheet (忽略XML声明的XSL样式表)")])]),s._v(" "),a("p",[s._v("使用该选项禁止Nmap的XML输出关联任何XSL样式表。 xml-stylesheet指示被忽略。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=p.exports}}]);