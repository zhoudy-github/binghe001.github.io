(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{571:function(a,t,s){"use strict";s.r(t);var i=s(7),l=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"armitage基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armitage基本原理"}},[a._v("#")]),a._v(" Armitage基本原理")]),a._v(" "),t("p",[a._v("Armitage是一个攻击管理工具，它以图形化方式实现了Metasploit框架的自动化攻击。Armitage采用Java构建，拥有跨平台特性。")]),a._v(" "),t("h3",{attrs:{id:"入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[a._v("#")]),a._v(" 入门")]),a._v(" "),t("h4",{attrs:{id:"开启armitage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启armitage"}},[a._v("#")]),a._v(" 开启Armitage")]),a._v(" "),t("p",[a._v("在命令行输入armitage命令会弹出如下对话框：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128125737481.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"连接到metasploit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接到metasploit"}},[a._v("#")]),a._v(" 连接到Metasploit")]),a._v(" "),t("p",[a._v("单击对话框上的Connect按钮建立一个Metasploit的连接。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128125801387.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"启动metasploit的rpc服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动metasploit的rpc服务"}},[a._v("#")]),a._v(" 启动Metasploit的RPC服务")]),a._v(" "),t("p",[a._v("单击COnnect按钮后，一个新的对话框就会弹出来，询问我们是否想启动Metasploit的RPC服务，这里，我们单击是。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128125819364.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这时，会看到消息Connection refused不断出现。这时因为Armitage一直在测试到目标的连接是否已经建立。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012812583258.png",loading:"lazy"}})]),a._v(" "),t("p",[t("strong",[a._v("注意：")])]),a._v(" "),t("p",[a._v("必须使用一个root用户权限进行工作；")]),a._v(" "),t("p",[a._v("如果在Kali Linux环境下工作，必须先启动PostgreSQL数据库服务和Metasploit服务。可用过如下命令完成：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("service postgresql start\nservice metasploit start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"用户界面一览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户界面一览"}},[a._v("#")]),a._v(" 用户界面一览")]),a._v(" "),t("p",[a._v("经过以上步骤，Armitage就和Metasploit建立了连接，此时，我们就可以看到Armitage界面了。如下所示：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128125917746.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"工作区的管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作区的管理"}},[a._v("#")]),a._v(" 工作区的管理")]),a._v(" "),t("p",[a._v("如果想创建一个新的工作区，首先导航到Workspaces选项卡，然后单击Manage")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128125940920.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样会在Armitage中产生一个新的Workspace选项卡，如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130003863.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("现在来创建一个新的工作区，单击Add按钮后，弹出如下窗口：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130026966.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这里，我们填入Name和Hosts，然后单击Add按钮，如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130044320.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("添加完之后的效果如下图：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130101696.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以随时切换工作区，只需要选中要操作的工作区，然后单击Activate按钮即可。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130123805.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("切换到Internal Scan工作区的效果图如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128130149751.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);