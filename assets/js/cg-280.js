(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{571:function(t,s,a){"use strict";a.r(s);var e=a(7),l=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kali中一键更新metasploit框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kali中一键更新metasploit框架"}},[t._v("#")]),t._v(" Kali中一键更新Metasploit框架")]),t._v(" "),s("p",[t._v("最近，我升级了Kali系统，升级后，尼玛Metasploit各种蛋疼的事情就发生了，我通过Metasploit整合OpenVAS，最后执行导入数据库的时候，尼玛就报出了如下错误：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("opts must include a valid :workspace\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("于是我感觉在msfconsole下，执行banner命令查看版本，我去，竟然是：metasploit v5.0.1-dev-")]),t._v(" "),s("p",[t._v("咋就变成了开发版本了呢？蛋疼，怎么会升级为开发版本？？？！！！，Kali？？！！无语中。。。")]),t._v(" "),s("p",[t._v("那么，如何解决这个问题，我想到了升级Metasploit，于是一顿操作猛如虎，解决了这个问题，下面就如何一键升级Metasploit跟大家分享下：")]),t._v(" "),s("p",[t._v("其实很简单，这里我将各种操作整理成了一个脚本:update_metasploit.sh，内容如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && \\\nchmod 755 msfinstall && \\\n./msfinstall\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("将脚本上传到Kali赋予相应的权限，执行脚本，OK，问题解决！！！")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=l.exports}}]);