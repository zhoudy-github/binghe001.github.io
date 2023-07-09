(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{592:function(a,s,n){"use strict";n.r(s);var e=n(7),t=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"amap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amap"}},[a._v("#")]),a._v(" Amap")]),a._v(" "),s("p",[a._v("对服务版本探查")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("amap -B IP PORT\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("对服务版本探查")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("amap -b ip port\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Amap是第首款针对渗透测试人员的下一代扫描工具， 它尝试识别即使在不同于正常端口的端口上运行应用程序。")]),a._v(" "),s("p",[a._v("Amap还可以通过发送触发数据包并在响应字符串列表中查找响应来识别基于非ascii编码的应用程序。")]),a._v(" "),s("p",[a._v("amapcrap - 将随机数据发送到UDP，TCP或SSL端口以获取非法响应:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("root@kali:~# amapcrap\n\namapcrap v5.4 (c) 2011 by van Hauser/THC <vh@thc.org>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("语法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("amapcrap [-S] [-u] [-m 0ab] [-M min，max] [-n connections] [-N delay] [-w delay] [-e] [-v] TARGET PORT\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("选项：")]),a._v(" "),s("ul",[s("li",[a._v("-S TCP连接后使用SSL（不能与 -u 同时使用）")]),a._v(" "),s("li",[a._v("-u 使用UDP协议（默认值：TCP）（不能与 -c 同时使用）")]),a._v(" "),s("li",[a._v("-n 连接最大连接数（默认值：无限制）")]),a._v(" "),s("li",[a._v("-N 连接之间的延迟（ms）（默认值：0）")]),a._v(" "),s("li",[a._v("-w 延迟关闭端口之前的延迟（默认值：250）")]),a._v(" "),s("li",[a._v("-e 当服务器做出响应时不停止发送")]),a._v(" "),s("li",[a._v("-v 详细模式")]),a._v(" "),s("li",[a._v("-m 0ab 发送为随机垃圾数据：0-空字节，a-字母+空格，b-二进制")]),a._v(" "),s("li",[a._v("-M min,max 随机垃圾数据的最小和最大长度")])]),a._v(" "),s("p",[a._v("TARGET PORT 发送随机垃圾数据的目标（ip或dns）和端口")]),a._v(" "),s("p",[a._v("此工具将随机数据发送到静默端口以获取非法响应以便下一步amap检测， 它输出适用于amap定义的形式。")]),a._v(" "),s("p",[a._v("注意：默认情况下所有模式都将被激活（0：10%，a：40% b：50%），模式'a'总是发送以字母和空格结尾的行。")]),a._v(" "),s("p",[s("strong",[a._v("amapcrap用法示例")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('root@kali:~# amapcrap -n 20 -m a 192.168.1.15 80 -v\n\n#Starting AmapCrap on 192.168.1.15 port 80\n#Writing a "+" for every 10 connect attempts\n#++\ndone\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("strong",[a._v("amap – Application MAPper:渗透测试人员的下一代扫描工具")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("root@kali:~# amap\namap v5.4 (c) 2011 by van Hauser <vh@thc.org>www.thc.org/thc-amap\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("语法:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("amap [-A|-B|-P|-W] [-1buSRHUdqv] [[-m] -o ] [-D ] [-t/-T sec] [-c cons] [-C retries] [-p proto] [-i ] [target port [port] ...]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("模式：")]),a._v(" "),s("ul",[s("li",[a._v("-A 地图应用程序：发送触发包和分析响应（默认）")]),a._v(" "),s("li",[a._v("-B 只抓取标识信息，不发送触发包")]),a._v(" "),s("li",[a._v("-P 不抓取标识信息横幅或应用程序的东西 - （全连接）端口扫描器")])]),a._v(" "),s("p",[a._v("选项：")]),a._v(" "),s("ul",[s("li",[a._v("-1 只发送触发到端口，直到第一次标识。")]),a._v(" "),s("li",[a._v("-6 使用IPv6而不是IPv4")]),a._v(" "),s("li",[a._v("-b 打印响应的ascii标识信息")]),a._v(" "),s("li",[a._v("-i FILE 输出Nmap可读文件")]),a._v(" "),s("li",[a._v("-u 在命令行上指定的端口UDP（默认为TCP）")]),a._v(" "),s("li",[a._v("-R 不标识RPC服务")]),a._v(" "),s("li",[a._v("-H 不发送被应用程序标记为潜在有害的触发包")]),a._v(" "),s("li",[a._v("-U 不要转储无法识别的响应（更脚本处理）")]),a._v(" "),s("li",[a._v("-d 转储所有响应")]),a._v(" "),s("li",[a._v("-v 详细模式，使用两次（或更多！）进行调试（不推荐:-)")]),a._v(" "),s("li",[a._v("-q 不报告关闭的端口，并且不将其打印为不识别的")]),a._v(" "),s("li",[a._v("-o FILE [-m] 将输出写入文件FILE，-m创建机器可读输出")]),a._v(" "),s("li",[a._v("-c CONS 要进行的并行连接数（默认32，最大256）")]),a._v(" "),s("li",[a._v("-C RETRIES 连接超时的重新连接数（请参见-T）（默认3）")]),a._v(" "),s("li",[a._v("-T SEC 连接尝试的连接超时（以秒为单位）（默认为5）")]),a._v(" "),s("li",[a._v("-t SEC 响应等待超时（以秒为单位）（默认值为5）")]),a._v(" "),s("li",[a._v("-p PROTO 仅发送此协议的触发包（例如ftp）")])]),a._v(" "),s("p",[s("strong",[a._v("TARGET PORT 要扫描的目标地址和端口（除-i之外）")])]),a._v(" "),s("p",[a._v("amap是用于标识目标端口上的应用程序协议的工具。")]),a._v(" "),s("p",[a._v("注意：此版本不是使用SSL支持编译的！")]),a._v(" "),s("p",[a._v("使用提示：建议使用选项“-bqv”，“-1”快速检查。")]),a._v(" "),s("p",[s("strong",[a._v("Amap用法示例")])]),a._v(" "),s("p",[a._v("扫描192.168.1.15 80端口，显示接收的标识（b），不显示关闭端口（Q），并使用详细输出（V）：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("root@kali:~# amap -bqv 192.168.1.15 21\n\nUsing trigger file /etc/amap/appdefs.trig ... loaded 30 triggers\nUsing response file /etc/amap/appdefs.resp ... loaded 346 responses\nUsing trigger file /etc/amap/appdefs.rpc ... loaded 450 triggers\namap v5.4 (www.thc.org/thc-amap) started at 2016-10-18 14:24:02 - APPLICATION MAPPING mode\nTotal amount of tasks to perform in plain connect mode: 23\n\nWaiting for timeout on 23 connections ...\nProtocol on 192.168.1.15 :21/tcp matches ftp - banner: 220---------- Welcome to Pure-FTPd [privsep] ----------\\r\\n220-You are user number 7 of 5000 allowed.\\r\\n220-Local time is now 0224. Server port 21.\\r\\n220-This is a private system - No anonymous login\\r\\n220-IPv6 connections are also welcome on this ser\n\nProtocol on 192.168.1.15 :21/tcp matches smtp - banner: 220---------- Welcome to Pure-FTPd [privsep] ----------\\r\\n220-You are user number 7 of 5000 allowed.\\r\\n220-Local time is now 0224. Server port 21.\\r\\n220-This is a private system - No anonymous login\\r\\n220-IPv6 connections are also welcome on this ser\n\namap v5.4 finished at 2016-10-18 14:24:02\n\nroot@kali:~# amap -bqv 192.168.1.15 80\nUsing trigger file /etc/amap/appdefs.trig ... loaded 30 triggers\nUsing response file /etc/amap/appdefs.resp ... loaded 346 responses\nUsing trigger file /etc/amap/appdefs.rpc ... loaded 450 triggers\namap v5.4 (www.thc.org/thc-amap) started at 2016-10-18 14:25:57 - APPLICATION MAPPING mode\n\nTotal amount of tasks to perform in plain connect mode: 23\nWaiting for timeout on 23 connections ...\n\nProtocol on 192.168.1.15 :80/tcp matches http - banner: HTTP/1.1 400 Bad Request\\r\\nServer nginx\\r\\nDate Tue, 18 Oct 2016 182558 GMT\\r\\nContent-Type text/html\\r\\nContent-Length 166\\r\\nConnection close\\r\\n\\r\\n\\r\\n400 Bad Request\\r\\n\\r\\n400 Bad\n\namap v5.4 finished at 2016-10-18 14:25:57\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=t.exports}}]);