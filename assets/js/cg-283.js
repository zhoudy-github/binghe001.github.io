(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{575:function(t,a,s){"use strict";s.r(a);var i=s(7),g=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"armitage网络扫描以及主机管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#armitage网络扫描以及主机管理"}},[t._v("#")]),t._v(" Armitage网络扫描以及主机管理")]),t._v(" "),a("p",[t._v("继续上一篇《"),a("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86675559",target:"_blank",rel:"noopener noreferrer"}},[t._v("Armitage之——基本原理"),a("OutboundLink")],1),t._v("》")]),t._v(" "),a("p",[t._v("Armitage中使用独立的Hosts选项卡来实现主机的管理操作和主机的扫描操作。可以单击导航栏上的Hosts按钮选项，然后选中下拉菜单上的Import Host选项从文件中导入主机。可以在Hosts中选中Add Host，手动导入一台主机。")]),t._v(" "),a("p",[t._v("Armitage也提供主机扫描的选项，这些扫描分成了两种类型：Nmap和MSF扫描。")]),t._v(" "),a("h3",{attrs:{id:"使用msf扫描网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用msf扫描网络"}},[t._v("#")]),t._v(" 使用MSF扫描网络")]),t._v(" "),a("p",[t._v("点击导航栏的Hosts->MSF Scans，如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128132848171.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("之后，会启动一个输入网络范围的对话框，这里，我们输入要扫描的网络范围：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128132903360.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("点击确定按钮后，Armitage就会对我们填写的网络范围进行扫描。")]),t._v(" "),a("p",[t._v("扫描过程如下图：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012813291711.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"扫描结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扫描结果"}},[t._v("#")]),t._v(" 扫描结果")]),t._v(" "),a("p",[t._v("扫描结束后，每个目标网络的主机都会以图标的形式展示在Armitage中，这些图表的样式取决于设备和操作系统的类型。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133102420.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"漏洞的建模"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞的建模"}},[t._v("#")]),t._v(" 漏洞的建模")]),t._v(" "),a("p",[t._v("在目标主机上单击鼠标右键，在弹出的菜单中选择Services，可以查看当前主机上正在运行的服务。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133149956.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("查看结果：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133217355.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"查找匹配模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找匹配模块"}},[t._v("#")]),t._v(" 查找匹配模块")]),t._v(" "),a("p",[t._v("依次单击Attacks->Find Attack。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133311802.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("Find Attack会根据主机上运行的服务于渗透模块数据库中的内容进行比对。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133334277.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("结束后，会弹出提示框：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133349923.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，在主机上单击鼠标右键，弹出的菜单中一个名为Attack的选项变得可用了，在它的下一级菜单中会显示出可以用来渗透目标主机的渗透攻击模块。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128133409759.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=g.exports}}]);