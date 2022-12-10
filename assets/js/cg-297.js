(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{588:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"armitage界面的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armitage界面的使用"}},[s._v("#")]),s._v(" Armitage界面的使用")]),s._v(" "),t("p",[s._v("在需要与界面协同工作的时候，Cortana也提供了十分灵活的方法和一系列选项和功能用来创建快捷方式、图标、切换选项卡等。")]),s._v(" "),t("p",[s._v("这里，我们以实现一个在键盘上按下F1键，Cortana显示目标主机的UID值为例，一起探讨Cornata界面的使用。")]),s._v(" "),t("p",[t("strong",[s._v("同样，运行这个脚本我们需要现在Armitage中获得目标系统的Meterpreter权限。")])]),s._v(" "),t("p",[s._v("首先，我们编写一个link.cna的脚本，内容如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('bind F1{\n    $sid = "1";\n    spawn(&gu, \\$sid);\n}\nsub gu{\n    m_cmd($sid, "getuid");\n    on meterpreter_getuid{\n        show_message(" $3 ");\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("这段程序将会添加一个快捷键F1，当按下F1的时候，系统将会显示当前目标系统的UID值、脚本中的关键字bind表示将F1键与函数的功能绑定到一起。接着，我们定义了一个$sid的值为1(这个值是我们将要进行操作的会话ID)。")]),s._v(" "),t("p",[s._v("函数spawn将创建一个新的Cortana实例，执行gu函数，并将值$sid设定为这个实例中的全局变量。函数gu会向Meterpreter发送getuid命令。命令meterpreter_getuid会处理命令getuid的输出。")]),s._v(" "),t("p",[s._v("命令show_message将会弹出一个关于命令getuid输出的信息。")]),s._v(" "),t("p",[s._v("这里，我们先将脚本加载到Armitage中，然后按下F1键。效果如下所示：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128212909109.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("这里，我们正确获取并弹出了目标主机的UUID值。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);