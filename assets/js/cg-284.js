(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{580:function(s,v,t){"use strict";t.r(v);var _=t(7),a=Object(_.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"xp-iis-问题总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xp-iis-问题总结"}},[s._v("#")]),s._v(" XP IIS 问题总结")]),s._v(" "),v("p",[v("strong",[s._v("提示：您要访问的网页有问题，无法显示的问题")])]),s._v(" "),v("p",[s._v("xp下安装iis，提示：您要访问的网页有问题，无法显示 的问题的完美解决方法")]),s._v(" "),v("p",[s._v("装完后一浏览ASP文件就显示")]),s._v(" "),v("p",[s._v("无法显示网页\n您要访问的网页有问题，无法显示。")]),s._v(" "),v("p",[s._v("请尝试以下操作:")]),s._v(" "),v("p",[s._v("打开 localhost 主页，然后查找指向您感兴趣信息的链接。\n单击刷新按钮，或以后再试。")]),s._v(" "),v("p",[s._v("单击搜索，寻找 Internet 上的信息。")]),s._v(" "),v("p",[s._v("也可查看相关站点列表。")]),s._v(" "),v("p",[s._v("HTTP 500 - 内部服务器错误\nInternet Explorer")]),s._v(" "),v("p",[s._v("1，进入管理工具->[服务]管理器")]),s._v(" "),v("p",[s._v("找到Network DDE DSDM 启动类型改成自动 然后启动它")]),s._v(" "),v("p",[s._v("找到Network DDE 启动类型改成自动 然后启动它")]),s._v(" "),v("p",[s._v("2，在命令提示符里输入")]),s._v(" "),v("p",[s._v("msdtc -resetlog")]),s._v(" "),v("p",[s._v("然后启动Distributed Transaction Coordinator这个服务")]),s._v(" "),v("p",[s._v("3，启动“iis Out-Of-Process Pooled Applications”")]),s._v(" "),v("p",[s._v("“组件服务”->“计算机”->“我的电脑”->“COM+应用程序”->“iis Out-Of-Process Pooled")]),s._v(" "),v("p",[s._v("Applications”。")]),s._v(" "),v("p",[s._v('"COM+ 应用程序中"找不到此项，可以通过下述方法重建：')]),s._v(" "),v("p",[s._v("（1）开始->运行->CMD，打开命令提示窗口，然后使用以下命令切换目录：")]),s._v(" "),v("p",[s._v("（2）cd %windir%/system32/inetsrv")]),s._v(" "),v("p",[s._v("（3） 运行以下命令：")]),s._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("rundll32 wamreg.dll, CreateIISPackage\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v('注意：必须准确键入"CreateIISPackage"；它区分大小写。')]),s._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[s._v("regsvr32 asptxn.dll\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v('（4）关闭并重新打开"组件服务"。您应看到已经重新创建的所有这三个 IIS COM+ 应用程序，先启动iis Out-Of-Process Pooled。')]),s._v(" "),v("p",[s._v("（5）从命令行运行 IISRESET 重启IIS，并对先前未正确加载的任意ASP页进行测试。")]),s._v(" "),v("hr"),s._v(" "),v("p",[s._v("如果测试时需要输入密码，就在IIS属性那里取消匿名访问，然后再加上匿名访问。")]),s._v(" "),v("p",[v("strong",[s._v("出现The specified module could not be found解决方法")])]),s._v(" "),v("p",[s._v("打开IIS 信息服务，找到默认网站，点右键，选择属性，在主属性中选编辑，打开“目录安全性”选项卡，单击“匿名访问和验证控制”里的“编辑”按钮，在弹出的对话框中确保只选中了“匿名访问”和“集成Windows验证”两项，单击匿名访问中的编辑，去掉“允许IIS控制密码”。就ok了。")]),s._v(" "),v("h2",{attrs:{id:"写在最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),v("blockquote",[v("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),v("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),v("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),v("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),v("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);v.default=a.exports}}]);