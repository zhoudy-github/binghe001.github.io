(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{619:function(t,s,a){"use strict";a.r(s);var n=a(24),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iis-403-404问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis-403-404问题"}},[t._v("#")]),t._v(" IIS 403 404问题")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("本机访问IIS只能访问HTML文件等一系列静态文件.如访问ASP或ASPX文件IIS就会在IE上报错提示说404错误，说文件无法找到。")]),t._v(" "),a("p",[t._v("别的机器来访问服务器提示403错误。")]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("IIS不能访问ASPX文件有两种可能。一是IIS映射没有设置。有可能有人会说IIS可以处理ASPX文件啊。那你打错特错了。IIS是不能处理ASP和ASPX文件的。IIS只能处理HTML或gif等文件")]),t._v(" "),a("p",[t._v("如果IIS碰到扩展名是ASPX或则是ASP的就会到映射表里找到这个映射指定的文件处理")]),t._v(" "),a("p",[t._v("如图")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181216002921596.jpg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("给ASP.NET注册映射的方法需要输入CMD命令")]),t._v(" "),a("p",[t._v("在开始运行里输出CMD之后输入命令")]),t._v(" "),a("p",[t._v("转到。net freamwork框架下如")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" c:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" c:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("windwos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("microsoft.net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("freamwork"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v2.050727"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("（注意大小写，根据你的地址，我的地址不一定和你的相同）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在这个目录下里有一个文件 aspnet_regiis.exe")]),t._v(" "),a("p",[t._v("在到CMD窗口把这个文件名输入进去 aspnet_regiis.exe 在后面加一个参数 -i就可以了")]),t._v(" "),a("p",[t._v("aspnet_regiis.exe -i这样")]),t._v(" "),a("p",[t._v("如图\n"),a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181216003025657.jpg",loading:"lazy"}})]),t._v(" "),a("p",[t._v("如果IIS注册了还不能访问就有可能是WEB扩展上的关闭了")]),t._v(" "),a("p",[t._v("找到")]),t._v(" "),a("p",[t._v("Internet信息服务->WEB服务扩展->ASP.NET V2.0.50727->允许")]),t._v(" "),a("p",[t._v("这个我也不去做多的解释了")]),t._v(" "),a("p",[t._v("如果别的机器不能访问IIS")]),t._v(" "),a("p",[t._v("就在WEB服务扩展上看Active server pages允许了没")]),t._v(" "),a("p",[t._v("如图")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181216003200576.jpg",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);