(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{711:function(a,s,t){"use strict";t.r(s);var n=t(7),i=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"armitage控制metasploit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#armitage控制metasploit"}},[a._v("#")]),a._v(" Armitage控制Metasploit")]),a._v(" "),s("p",[a._v("Cortana能很好的控制Metasploit的功能。可以使用Cortana对Metasploit发出各种命令。")]),a._v(" "),s("p",[a._v("这里，我们以一个简单的脚本说明，比如这里我们创建了一个脚本ready.cna，内容如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('cmd_async("hosts");\ncmd_async("services");\non console_hosts{\n    println("Hosts in the Database");\n    println(" $3 ");\n}\n\non console_services{\n    println("Service in the Database");\n    println(" $3 ");\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("这段脚本中，命令cmd_async发送hosts命令和services命令道Metasploit并确保它们被执行。"),s("code",[a._v("此外，这些console_*函数被用来打印这条命令的输出。Metasploit将执行这些命令。然而为了打印这个输出内容，需要定义console_*函数。 $3是一个变量")]),a._v("，在其中保存了命令的输出内容")]),a._v(" "),s("p",[a._v("接下来就是在Armitage中加载ready.cna脚本文件")]),a._v(" "),s("p",[a._v("依次单击Armitage->Scripts")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211532403.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("单击Load按钮")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211547763.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("选择read.cna脚本后单击打开按钮")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211606475.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("此时，我们选中ready.cna后单击Console按钮，如下：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211621474.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("此时，我们发现在Cornata命令行中输出了相关的信息，如下：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211636564.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=i.exports}}]);