(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{670:function(s,e,t){"use strict";t.r(e);var a=t(7),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"msf-meterpreter清理日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msf-meterpreter清理日志"}},[s._v("#")]),s._v(" MSF-Meterpreter清理日志")]),s._v(" "),e("p",[s._v("在我们用MSF成功对目标进行了渗透之后，不要忘记要清理渗透过程中留下的日志，下面就如何清理日志和大家分享下。")]),s._v(" "),e("p",[s._v("步骤如下：")]),s._v(" "),e("ul",[e("li",[s._v("删除之前添加的账号")]),s._v(" "),e("li",[s._v("删除所有在渗透过程中使用的工具")]),s._v(" "),e("li",[s._v("删除应用程序、系统和安全日志")]),s._v(" "),e("li",[s._v("关闭所有的Meterpreter连接")])]),s._v(" "),e("h2",{attrs:{id:"删除之前添加的账号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除之前添加的账号"}},[s._v("#")]),s._v(" 删除之前添加的账号")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("C:\\Windows\\system32> net user 添加的用户名 /del\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"退出目标服务器的shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出目标服务器的shell"}},[s._v("#")]),s._v(" 退出目标服务器的shell")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("C:\\Windows\\system32> exit\n或者\nC:\\Windows\\system32> logoff\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"删除日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除日志"}},[s._v("#")]),s._v(" 删除日志")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("meterpreter > clearev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"退出meterpreter-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出meterpreter-shell"}},[s._v("#")]),s._v(" 退出meterpreter shell")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("meterpreter > exit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看所有的msf连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有的msf连接"}},[s._v("#")]),s._v(" 查看所有的MSF连接")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf exploit(multi/handler) > sessions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"关闭所有的msf链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭所有的msf链接"}},[s._v("#")]),s._v(" 关闭所有的MSF链接")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf exploit(multi/handler) > sessions -K\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);