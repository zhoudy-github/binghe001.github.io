(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{396:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"《mysql核心知识》第14章-数据备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第14章-数据备份与恢复"}},[s._v("#")]),s._v(" 《MySQL核心知识》第14章：数据备份与恢复")]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("p",[s._v("今天是《MySQL核心知识》专栏的第14章，今天为大家系统的讲讲MySQL中的数据备份与恢复，希望通过本章节的学习，小伙伴们能够举一反三，彻底掌握MySQL中的数据备份与恢复相关的知识。好了，开始今天的正题吧。")]),s._v(" "),a("h2",{attrs:{id:"备份-恢复策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份-恢复策略"}},[s._v("#")]),s._v(" 备份/恢复策略")]),s._v(" "),a("p",[s._v("1.定期做 mysql备份，并考虑系统可以承受的恢复时间。")]),s._v(" "),a("p",[s._v("2.确保 mysql 打开log-bin，有了 binarylog，mysql才可以在必要的时候做完整恢复，或基于时间点的恢复，或基于位置的恢复。")]),s._v(" "),a("p",[s._v("3.要经常做备份恢复测试，确保备份是有效的，并且是可以恢复的。")]),s._v(" "),a("h2",{attrs:{id:"冷备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冷备份"}},[s._v("#")]),s._v(" 冷备份")]),s._v(" "),a("h3",{attrs:{id:"备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),a("p",[s._v("1.停掉 mysql服务，在操作系统级别备份 mysql的数据文件。")]),s._v(" "),a("p",[s._v("2.重启 mysql服务，备份重启以后生成的 binlog。")]),s._v(" "),a("h3",{attrs:{id:"恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复"}},[s._v("#")]),s._v(" 恢复")]),s._v(" "),a("p",[s._v("1.停掉 mysql服务，在操作系统级别恢复 mysql的数据文件。")]),s._v(" "),a("p",[s._v("2.重启 mysql服务，使用 mysqlbinlog恢复自备份以来的 binlog。")]),s._v(" "),a("h2",{attrs:{id:"逻辑备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑备份"}},[s._v("#")]),s._v(" 逻辑备份")]),s._v(" "),a("h3",{attrs:{id:"备份-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份-2"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),a("p",[s._v("1.选择在系统空闲时，比如在夜间，使用 mysqldump –F(flush-logs)备份数据库。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldump –u root –p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pointcard –F "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pointcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.并备份 mysqldump开始以后生成的 binlog。")]),s._v(" "),a("h3",{attrs:{id:"恢复-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复-2"}},[s._v("#")]),s._v(" 恢复")]),s._v(" "),a("p",[s._v("1.停掉应用，执行 mysql 导入备份文件.")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql –u root –p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pointcard "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" pointcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.使用 mysqlbinlog 恢复自mysqldump 备份以来的binlog。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqlbinlog $HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u root –p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"单个表的备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个表的备份"}},[s._v("#")]),s._v(" 单个表的备份")]),s._v(" "),a("h3",{attrs:{id:"备份-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份-3"}},[s._v("#")]),s._v(" 备份")]),s._v(" "),a("p",[s._v("1.方法 1：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),s._v(" ‘"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("order_tab’ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("’ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_tab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.方法 2：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldump –u root –p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" –T "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp pointcard order_tab "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--fields-terminated-by=’,’;")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"恢复-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复-3"}},[s._v("#")]),s._v(" 恢复")]),s._v(" "),a("p",[s._v("1.方法 1：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("load")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("infile")]),s._v(" ‘"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("order_tab’ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" order_tab "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fields")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("terminated")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.方法 2：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqlimport –u root –p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--local] pointcatd order_tab.txt --fields-terminated-by=’,’;")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意：如果导入和导出是跨平台操作的（windows和 linux），那么要注意设置参数line-terminated-by， windows上设置为 line-terminated-by=’\\r\\n’，linux上设置为line-terminated-by=’\\n’.")]),s._v(" "),a("h2",{attrs:{id:"使用备份工具ibbackup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用备份工具ibbackup"}},[s._v("#")]),s._v(" 使用备份工具ibbackup")]),s._v(" "),a("p",[s._v("ibbackup是 innodb公司（www.innodb.com)的一个热备份工具，专门对 innodb存储引擎进行物理热备份，此工具是收费的，不能免费使用。现在innodb 公司已经被oracle收购")]),s._v(" "),a("p",[s._v("使用方法：")]),s._v(" "),a("p",[s._v("编辑用于启动的配置文件my.cnf和用于备份的配置文件my2.cnf")]),s._v(" "),a("p",[s._v("my.cnf的例子如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndatadir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/data \n\ninnodb_data_home_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/data\ninnodb_data_file_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ibdata1:10M:autoextend\ninnodb_log_group_home_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/data\nset-variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_log_files_in_group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nset-variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_log_file_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果想备份到/home/heikki/backup，则my2.cnf的例子如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndatadir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/backup\ninnodb_data_home_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/backup\ninnodb_data_file_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ibdata1:10M:autoextend\ninnodb_log_group_home_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /home/heikki/backup\nset-variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_log_files_in_group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nset-variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_log_file_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20M\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("开始备份ibbackup my.cnf my2.cnf如果需要恢复，则进行日志重做ibbackup --apply-log my2.cnf恢复后重启数据库服务./bin/mysqld_saft --defaults-file=my2.cnf &")]),s._v(" "),a("h2",{attrs:{id:"时间点恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间点恢复"}},[s._v("#")]),s._v(" 时间点恢复")]),s._v(" "),a("p",[s._v("1.如果上午 10点发生了误操作，可以用以下语句用备份和 binglog将数据恢复到故障前：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqlbinlog --stop-date"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-07-08 9:59:59"')]),s._v(" /var/log/mysql/bin.123456 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root –pmypwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.跳过故障时的时间点，继续执行后面的 binlog，完成恢复")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqlbinlog --start-date"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-07-08 10:01:00"')]),s._v(" /var/log/mysql/bin.123456"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pmypwd")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"位置恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置恢复"}},[s._v("#")]),s._v(" 位置恢复")]),s._v(" "),a("p",[s._v("和时间点恢复类似，但是更精确，步骤如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqlbinlog --start-date"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-07-08 9:55:00"')]),s._v(" --stop-date"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-07-08 10:05:00"')]),s._v(" /var/log/mysql/bin.123456 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/mysql_restore.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("该命令将在/tmp目录创建小的文本文件，编辑此文件，找到出错语句前后的位置号 ，例如前后位置号分别是368312 和368315。恢复了以前的备份文件后，你应从命令行输入下面内容：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqlbinlog "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--stop-position="368312" /var/log/mysql/bin.123456 | mysql -u root -pmypwd')]),s._v("\nmysqlbinlog "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('--start-position="368315" /var/log/mysql/bin.123456 | mysql -u root -pmypwd')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上面的第1 行将恢复到停止位置为止的所有事务。下一行将恢复从给定的起始位置直到二进制日志结束的所有事务。因为mysqlbinlog 的输出包括每个SQL 语句记录之前的SET TIMESTAMP 语句，恢复的数据和相关MySQL 日志将反应事务执行的原时间。")]),s._v(" "),a("p",[s._v("MyISAM表修复：\n一张损坏的表的症状通常是查询意外中断并且能看到下述错误：")]),s._v(" "),a("ul",[a("li",[s._v("“tbl_name.frm”被锁定不能更改。")]),s._v(" "),a("li",[s._v("不能找到文件“tbl_name.MYI”（Errcode：nnn）。")]),s._v(" "),a("li",[s._v("文件意外结束。")]),s._v(" "),a("li",[s._v("记录文件被毁坏。")]),s._v(" "),a("li",[s._v("从表处理器得到错误nnn")])]),s._v(" "),a("p",[s._v("解决方法如下：")]),s._v(" "),a("p",[s._v("方法一：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("myisamchk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r tablename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的方法几乎能解决所有问题，如果不行，则使用：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("myisamchk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o tablename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("方法二：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHECK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tbl_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("QUICK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FAST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" MEDIUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXTENDED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CHANGED}\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" REPAIR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NO_WRITE_TO_BINLOG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v("\ntbl_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tbl_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("QUICK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXTENDED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("USE_FRM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意：有关更多MySQL数据备份与恢复的知识，大家可以查阅《MySQL技术大全：开发、优化与运维实战》一书。")]),s._v(" "),a("p",[a("strong",[s._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),s._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[s._v("#")]),s._v(" 星球服务")]),s._v(" "),a("p",[s._v("加入星球，你将获得：")]),s._v(" "),a("p",[s._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),s._v(" "),a("p",[s._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),s._v(" "),a("p",[s._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),s._v(" "),a("p",[s._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),s._v(" "),a("p",[s._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),s._v(" "),a("p",[s._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),s._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[s._v("#")]),s._v(" 星球重磅福利")]),s._v(" "),a("p",[s._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[s._v("直接立减149元，相当于5折，")]),s._v(" 这已经是星球最大优惠力度！")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),s._v(" "),a("br")]),s._v(" "),a("p",[s._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),s._v(" "),a("p",[a("strong",[s._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),s._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[s._v("#")]),s._v(" 其他方式加入星球")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("链接")]),s._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" 加入星球。")]),s._v(" "),a("li",[a("strong",[s._v("回复")]),s._v(" ：在公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 领取优惠券加入星球。")])]),s._v(" "),a("p",[a("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[s._v("hacker_binghe")]),s._v(" 扫二维码，或者去公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 扫二维码加入星球。")]),s._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[s._v("#")]),s._v(" 星球规划")]),s._v(" "),a("p",[s._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),s._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[s._v("#")]),s._v(" 中间件项目")]),s._v(" "),a("ul",[a("li",[s._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写Redis》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写JVM》全程手撸代码。")])]),s._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[s._v("#")]),s._v(" 超硬核项目")]),s._v(" "),a("ul",[a("li",[s._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[s._v("已上新")]),s._v("）。")]),s._v(" "),a("li",[s._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),s._v(" "),a("li",[s._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),s._v(" "),a("p",[s._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),s._v(" "),a("p",[s._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),s._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[s._v("#")]),s._v(" 联系冰河")]),s._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[s._v("#")]),s._v(" 加群交流")]),s._v(" "),a("p",[s._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[s._v("星球编号")]),s._v("。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("冰河微信")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),a("p",[s._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[s._v("冰河技术")]),s._v(" 微信公众号首发，强烈建议大家关注。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("公众号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[s._v("#")]),s._v(" 视频号")]),s._v(" "),a("p",[s._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("视频号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[s._v("#")]),s._v(" 星球")]),s._v(" "),a("p",[s._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1)]),s._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[s._v("hacker_binghe")]),s._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[s._v("实战项目")]),s._v("！")]),s._v(" "),a("p",[s._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1),s._v("公众号，回复 "),a("code",[s._v("星球")]),s._v(" 可以获取入场优惠券。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("知识星球：冰河技术")]),s._v(" "),a("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);