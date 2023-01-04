(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{468:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kali设置静态ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kali设置静态ip"}},[s._v("#")]),s._v(" Kali设置静态IP")]),s._v(" "),e("p",[s._v("首先把虚拟机的网络适配器设置成桥接模式：直接连接到物理网络\nkali安装完成之后，首先确定你是DHCP还是静态IP。DHCP是用来给大型网络动态分配IP的协议，而大部分中小型网络（如校园网、家庭网络）都是采用网络管理员手工分配静态IP的方法来确定IP地址的。")]),s._v(" "),e("h2",{attrs:{id:"修改-etc-network-interfaces"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改-etc-network-interfaces"}},[s._v("#")]),s._v(" 修改/etc/network/interfaces")]),s._v(" "),e("p",[s._v("在文件系统里找到/etc/network下的interfaces文件，打开后可以看到eth0为dhcp，将其修改为如下形式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This file describes the network interfaces available on your system")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# and how to activate them. For more information， see interfaces（5）。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The loopback network interface")]),s._v("\nauto lo\niface lo inet loopback\nauto eth0\niface eth0 inet static //配置eth0使用默认的静态地址\naddress "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".77.133 //设置eth0的IP地址\nnetmask "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 //配置eth0的子网掩码\ngateway "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".77.254 //配置当前主机的默认网关\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("“interfaces”文件中还有很多其他的设置项，如需要了解更多的信息，可以使用man命令查询“interfaces”文件的手册页。")]),s._v(" "),e("p",[s._v("#man interfaces\n其中eth0指本机以太网卡一，类似的，eth1指本机的以太网卡2。一般一台电脑只有一个eth0。网卡的设备名/dev/eth0 和硬件的MAC 地址52:54:AB:DD:6F:61对应，MAC 地址是生产厂家定的，每个网卡拥有的唯一地址。")]),s._v(" "),e("p",[s._v("linux下，用ifconfig后，能看到eth0，可能还会看到eth0：1。其中eth0：1是指eth0的分ip存储文件，分ip存储文件格式为ifcfg-eth0：X， X为任意正整数（包括0）")]),s._v(" "),e("p",[s._v("具体作用是实现单网卡多ip，类似与windows的多ip。")]),s._v(" "),e("h2",{attrs:{id:"配置dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置dns"}},[s._v("#")]),s._v(" 配置DNS")]),s._v(" "),e("p",[s._v("Kali Linux的DNS服务器地址使用文件“/etc/resovl.conf”进行配置，用户可以通过“nameserver”配置项设置DNS服务器的 IP地址；“resolv.conf”文件中最多可以使用")]),s._v(" "),e("p",[s._v("“nameserver”指定３个DNS服务器，按照先后的顺序，一旦前面的DNS服务器失效，系统将自动使用后面的DNS服务器。")]),s._v(" "),e("p",[s._v("对于“resolv.conf”文件设置“nameserver”的修改是即时生效的，即只要对“resolv.conf”文件的修改进行了保存，在系统下一次需要进行域名的解析时就会按照该文件中指定\n的DNS服务器IP地址进行域名的解析。")]),s._v(" "),e("p",[s._v("在resolv.conf中的格式如下")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("domain\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"重启网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启网络"}},[s._v("#")]),s._v(" 重启网络")]),s._v(" "),e("p",[s._v("在之前的步骤完成后保存，然后在终端里边重启网络，命令如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/etc/init.d/networking restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);