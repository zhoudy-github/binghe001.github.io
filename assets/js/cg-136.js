(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{589:function(a,t,s){"use strict";s.r(t);var i=s(24),l=Object(i.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装kali系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装kali系统"}},[a._v("#")]),a._v(" 安装Kali系统")]),a._v(" "),s("p",[a._v("Kali系统作为必备的渗透利器，是每个从事信息安全职业人员的首先操作系统，为了更好的结合本书的实战内容，这里，先带领小伙伴们安装一下Kali操作系统。")]),a._v(" "),s("p",[a._v("这里，我是使用的VMWare虚拟机安装的Kali操作系统。")]),a._v(" "),s("h2",{attrs:{id:"下载镜像及相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像及相关"}},[a._v("#")]),a._v(" 下载镜像及相关")]),a._v(" "),s("p",[s("strong",[a._v("下载镜像文件")])]),a._v(" "),s("p",[a._v("下载链接："),s("a",{attrs:{href:"https://www.kali.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.kali.org/downloads/"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"kali各版本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kali各版本说明"}},[a._v("#")]),a._v(" kali各版本说明")]),a._v(" "),s("ul",[s("li",[a._v("Kali2.0使用Linux4.0内核，基于Debian 8（Debian Jessie）")]),a._v(" "),s("li",[a._v("Kali—默认版本，Gnome 3桌面，我一直对Gnome 3能提高工作效率的说法深表怀疑。")]),a._v(" "),s("li",[a._v("Light—轻量级版本，比完全版少了些软件。")]),a._v(" "),s("li",[a._v("E17-e17桌面，类Mac桌面，比较炫。")]),a._v(" "),s("li",[a._v("Mate—Mate桌面，类Gnome 2。")]),a._v(" "),s("li",[a._v("Xface—Xface桌面，类Mac桌面，没有那么炫。")]),a._v(" "),s("li",[a._v("LXDE—LXDE桌面，类kde或者xp桌面。")]),a._v(" "),s("li",[a._v("Armel和armhf—这两个是用于装在arm架构处理器设备上的，前旧后新，一般选hf。")])]),a._v(" "),s("h2",{attrs:{id:"安装kali"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装kali"}},[a._v("#")]),a._v(" 安装Kali")]),a._v(" "),s("p",[a._v("硬盘安装和虚拟机安装其实基本都一样，可以参看"),s("a",{attrs:{href:"https://docs.kali.org/installation/kali-linux-hard-disk-install",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方安装文档"),s("OutboundLink")],1),a._v("，不同的一步只是要制作U盘启动盘，制作工具上"),s("a",{attrs:{href:"https://docs.kali.org/downloading/kali-linux-live-usb-install",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方推荐"),s("OutboundLink")],1),s("a",{attrs:{href:"https://ncu.dl.sourceforge.net/project/win32diskimager/Archive/win32diskimager-1.0.0-install.exe",target:"_blank",rel:"noopener noreferrer"}},[a._v("Win32 Disk Imager"),s("OutboundLink")],1),a._v("。(UltraISO制作的一般启动不了)")]),a._v(" "),s("p",[a._v("制作U盘启动盘没什么好说的，都是一样傻瓜式的选择镜像文件--选择U盘--点击写入--等待完成即可。")]),a._v(" "),s("p",[a._v("（Win32 SDK Imanger默认只认.img文件，.img是.iso的超集，支持.img也就支持.iso所以在选择镜像文件时将过滤后辍改成*.*再选.iso即可）")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"001","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-001.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"配置虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟机"}},[a._v("#")]),a._v(" 配置虚拟机")]),a._v(" "),s("p",[a._v("VMWare—文件—新建虚拟机。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"002","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-002.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"003","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-003.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"004","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-004.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"005","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-005.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("在backtrace年代，遇到过选择“安装光盘映像文件”安装成功而选“稍后安装系统”安装成功的，如果安装出了问题，可以试一下。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"006","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-006.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"007","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-007.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"008","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-008.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"009","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-009.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"010","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-010.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"011","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-011.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"012","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-012.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-013.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"014","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-014.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"015","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-015.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"016","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-016.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"安装虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装虚拟机"}},[a._v("#")]),a._v(" 安装虚拟机")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"017","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-017.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"018","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-018.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("文本模式安装，“Esc”--后退，“Tab”--下一项，“回车”--“前进”")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"019","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-019.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"020","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-020.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"021","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-021.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"022","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-022.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"023","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-023.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"024","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-024.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"025","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-025.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"026","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-026.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"027","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-027.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"028","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-028.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"029","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-029.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"030","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-030.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"031","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-031.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"032","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-032.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"033","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-033.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"034","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-034.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"035","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-035.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"036","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-036.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"037","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-037.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"038","data-src":"https://binghe001.github.io/assets/images/hack/2022-04-17-038.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("整个过程安装成功（安装过程参考：cnblogs.com/lsdb/p/6501063.html）")]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);