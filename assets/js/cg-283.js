(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{573:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kali-metasploit-连接-postgresql-默认密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kali-metasploit-连接-postgresql-默认密码"}},[s._v("#")]),s._v(" kali Metasploit 连接 Postgresql 默认密码")]),s._v(" "),a("h2",{attrs:{id:"启动-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-postgresql"}},[s._v("#")]),s._v(" 启动 postgresql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service postgresql start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("postgresql开机自启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("update-rc.d postgresql enable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"自行测试-postgresql-是否安装成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自行测试-postgresql-是否安装成功"}},[s._v("#")]),s._v(" 自行测试 postgresql 是否安装成功")]),s._v(" "),a("p",[s._v("根据需要，自行 修改 postgres 默认密码，是否允许远程登录")]),s._v(" "),a("h2",{attrs:{id:"初始化msf数据库-关键步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化msf数据库-关键步骤"}},[s._v("#")]),s._v(" 初始化MSF数据库（关键步骤）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfdb init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动-msfconsole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-msfconsole"}},[s._v("#")]),s._v(" 启动 msfconsole")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"检测-db-连接状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测-db-连接状态"}},[s._v("#")]),s._v(" 检测 db 连接状态")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db_status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"如果连接异常会显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果连接异常会显示"}},[s._v("#")]),s._v(" 如果连接异常会显示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msf > db_status\n[*] postgresql selected, no connection\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"手动连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动连接数据库"}},[s._v("#")]),s._v(" 手动连接数据库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msf > db_connect msf:admin@127.0.0.1/msf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"如果不想每次都手动连接-可以修改配置文件-设置数据库密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果不想每次都手动连接-可以修改配置文件-设置数据库密码"}},[s._v("#")]),s._v(" 如果不想每次都手动连接，可以修改配置文件，设置数据库密码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /usr/share/metasploit-framework/config/database.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将 password 修改为 你的密码")]),s._v(" "),a("h1",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);