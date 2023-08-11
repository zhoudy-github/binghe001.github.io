(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{720:function(a,t,e){"use strict";e.r(t);var s=e(7),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《面试必问》第05章-聊聊mysql三大核心日志的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第05章-聊聊mysql三大核心日志的实现原理"}},[a._v("#")]),a._v(" 《面试必问》第05章：聊聊MySQL三大核心日志的实现原理？")]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("MySQL几乎成为互联网行业使用的最多的开源关系型数据库，正因如此，MySQL也成为各大互联网公司面试中必问的数据库，尤其是MySQL中的事务实现机制和三大核心日志的实现原理。")]),a._v(" "),t("p",[a._v("有关MySQL的事务实现机制小伙伴们可以参见冰河出版的《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247497263&idx=1&sn=8228a795261b0a90a3f42322368616fc&chksm=cf56412ef821c8389584e9e608aa4d6515cf68e26758b9c578a8f60a796999fafc8686a6a425&token=1996761147&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务：原理与实战"),t("OutboundLink")],1),a._v("》一书。")]),a._v(" "),t("p",[a._v("今天，我们就重点聊聊MySQL三大核心日志的实现原理。")]),a._v(" "),t("p",[a._v("文章已收录到：")]),a._v(" "),t("blockquote",[t("p",[a._v("https://github.com/sunshinelyz/technology-binghe\nhttps://gitee.com/binghe001/technology-binghe")])]),a._v(" "),t("h2",{attrs:{id:"mysql日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql日志"}},[a._v("#")]),a._v(" MySQL日志")]),a._v(" "),t("p",[a._v("说起MySQL的日志，有三种类型的日志对于MySQL来说是至关重要的，这三种日志分别为：Binlog、Undo Log 和 Redo Log。")]),a._v(" "),t("p",[a._v("由于Binlog和UndoLog有类似的地方，所以，我们按照如下顺序依次介绍MySQL中的三大日志原理：Undo Log——> Redo Log ——> Binlog。")]),a._v(" "),t("h2",{attrs:{id:"undo-log日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undo-log日志"}},[a._v("#")]),a._v(" Undo Log日志")]),a._v(" "),t("h3",{attrs:{id:"什么是undo-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是undo-log"}},[a._v("#")]),a._v(" 什么是Undo Log")]),a._v(" "),t("p",[a._v("顾名思义，Undo Log的字面意思就是撤销操作的日志，指的是使MySQL中的数据回到某个状态。")]),a._v(" "),t("p",[a._v("在MySQL数据库中，事务开始之前，MySQL会将待修改的记录保存到Undo Log中，如果数据库崩溃或者事务需要回滚时，MySQL可以通过利用Undo Log日志，将数据库中的数据回滚到之前的状态。")]),a._v(" "),t("p",[a._v("MySQL新增、修改和删除数据时，在事务开始前，就会将信息写入Undo Log中。事务提交时，并不会立刻删除Undo Log， InnoDB存储引擎会将事务对应的Undo Log放入待删除列表中，之后会通过后台的purge thread对待删除的列表进行删除处理。")]),a._v(" "),t("p",[a._v("这里，值得注意的是：Undo Log是一种 "),t("strong",[a._v("逻辑日志")]),a._v("， 记录的是一个变化过程。比如，MySQL执行一个delete操作，Undo Log就会记录一个insert操作；MySQL执行一个insert操作，Undo Log就会记录一个delete操作；MySQL执行一个update操作，Undo Log就会记录一个相反的update操作。")]),a._v(" "),t("p",[a._v("Undo Log以段的方式来管理和记录日志信息，在InnoDB存储引擎的数据文件中，包含了一种叫做rollback segment的回滚段，其内部包含了1024个undo log senment。")]),a._v(" "),t("h3",{attrs:{id:"undo-log作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undo-log作用"}},[a._v("#")]),a._v(" Undo Log作用")]),a._v(" "),t("p",[a._v("Undo Log对于MySQL实现事务来说，起着至关重要的作用，它实现了事务的原子性和多版本并发控制，也就是我们经常说的MVCC。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("实现事务的原子性")])])]),a._v(" "),t("p",[t("strong",[a._v("Undo Log能够实现MySQL事务的原子性")]),a._v("，在事务的处理过程中，如果MySQL出现了错误或者用户手动执行了事务的回滚操作（执行了rollback操作），MySQL可以利用Undo Log日志将数据库中的数据恢复到之前的状态。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("实现MVCC机制")])])]),a._v(" "),t("p",[a._v("Undo Log在MySQL的InnoDB存储引擎中实现了多版本并发控制（MVCC）机制。")]),a._v(" "),t("p",[a._v("为了方便大家理解，这里，我将MVCC的具体实现进行了简化，后续会单独写一篇MVCC的具体实现过程的文章。")]),a._v(" "),t("p",[a._v("事务未提交前，Undo Log保存了未提交之前的版本数据，Undo Log中的数据可以作为旧版本数据的副本或者快照以便其他并发事务进行读取操作。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/7287d0ed97c1d48a71948c26ea1338ad.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("事务A手动开启事务后，对goods数据表中id为1的数据进行更新操作，首先会把更新命中的数据写入到Undo Buffer中。")]),a._v(" "),t("p",[a._v("在事务A未提交之前，此时，事务B手动开启事务，对goods数据表中的id为1的数据进行查询操作，此时的事务B会读取Undo Log中的数据并返回给客户端，这就是MySQL中的MVCC机制。")]),a._v(" "),t("p",[a._v("可以在MySQL中通过下面的命令来查看控制Undo Log日志的参数。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show variables like '%innodb_undo%';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"redo-log日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log日志"}},[a._v("#")]),a._v(" Redo Log日志")]),a._v(" "),t("p",[a._v("说了MySQL中的Undo Log，我们再来看看MySQL中的Redo Log日志。")]),a._v(" "),t("h3",{attrs:{id:"什么是redo-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是redo-log"}},[a._v("#")]),a._v(" 什么是Redo Log")]),a._v(" "),t("p",[a._v("顾名思义Redo Log的字面意思就是重做日志，指的是在数据库出现意外情况时能够对重新执行某种操作。在MySQL中，事务中修改的任何数据，都会将最新的数据写入Redo Log中进行备份。")]),a._v(" "),t("p",[a._v("在MySQL中，随着事务操作的执行，就会产生Redo Log日志，在事务提交时会产生Redo Log并将其写入Redo Buffer，Redo Buffer也并不是随着事务的提交就会被立刻写入到磁盘中，而是等事务操作的脏页写入到磁盘之后，Redo Log的使命也就完成了，此时，Redo Log日志占用的空间可以重新利用，会被后续产生的Redo Log日志覆盖。")]),a._v(" "),t("h3",{attrs:{id:"redo-log的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log的原理"}},[a._v("#")]),a._v(" Redo Log的原理")]),a._v(" "),t("p",[t("strong",[a._v("Redo Log 能够实现事务的持久性")]),a._v("，防止在发生故障的时间点，有脏页未写入表的 ibd 文件中，在重启 MySQL 服务的时候，根据 Redo Log 进行重做，从而将未提交的事务进行持久化。这个过程可以简化为下图所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/a98504ac4c8defcbb0ac6944a3529511.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"redo-log的写机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log的写机制"}},[a._v("#")]),a._v(" Redo Log的写机制")]),a._v(" "),t("p",[a._v("Redo Log文件的内容是以顺序循环的方式写入文件的，写满时就会回到第一个文件，进行覆盖写。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/da1f4d9838f961140673b250ab508c4d.png",loading:"lazy"}})]),a._v(" "),t("ul",[t("li",[a._v("Write Pos 是当前记录的位置，一边写一边后移，写到最后一个文件末尾后就回到 0 号文件开头；")]),a._v(" "),t("li",[a._v("CheckPoint是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数 据文件；")])]),a._v(" "),t("p",[a._v("Write Pos 和 CheckPoint之间还空着的部分，可以用来记录新的操作。如果 Write Pos 追上 CheckPoint，表示已经写满，此时就需要向后移动CheckPoint来擦除数据。")]),a._v(" "),t("p",[a._v("每个InnoDB存储引擎至少有1个重做日志文件组（group），每个文件组至少有2个重做日志文件，默认为ib_logfile0和ib_logfile1 。")]),a._v(" "),t("p",[a._v("可以在MySQL中通过如下命令来查看控制Redo Log的参数。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show variables like '%innodb_log%';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"redo-log写入机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log写入机制"}},[a._v("#")]),a._v(" Redo Log写入机制")]),a._v(" "),t("p",[a._v("在Redo Log日志信息从Redo Buffer持久化到Redo Log时，具体的持久化策略可以通过innodb_flush_log_at_trx_commit 参数进行设置，具体策略如下所示。")]),a._v(" "),t("ul",[t("li",[a._v("0：每秒提交 Redo buffer ->OS cache -> flush cache to disk，可能丢失一秒内的事务数据。由后台Master线程每隔 1秒执行一次操作。")]),a._v(" "),t("li",[a._v("1（默认值）：每次事务提交执行 Redo Buffer -> OS cache -> flush cache to disk，这种方式最安全，性能最差。")]),a._v(" "),t("li",[a._v("2：每次事务提交执行 Redo Buffer -> OS cache，然后由后台Master线程再每隔1秒执行OS cache -> flush cache to disk 的操作。")])]),a._v(" "),t("p",[a._v("一般建议选择取值2，因为 MySQL 挂了数据没有损失，整个服务器挂了才会损失1秒的事务提交数据。")]),a._v(" "),t("h2",{attrs:{id:"binlog日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog日志"}},[a._v("#")]),a._v(" Binlog日志")]),a._v(" "),t("h3",{attrs:{id:"什么是binlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是binlog"}},[a._v("#")]),a._v(" 什么是Binlog")]),a._v(" "),t("p",[a._v("Binlog记录所有MySQL数据库表结构变更以及表数据修改的二进制日志，不会记录select和show这类查询操作的日志。Binlog日志是以事件形式记录，还包含语句所执行的消耗时间。开启Binlog日志有以下两个最重要的使用场景。")]),a._v(" "),t("ul",[t("li",[a._v("主从复制：在主库中开启Binlog功能，这样主库就可以把Binlog传递给从库，从库拿到Binlog后实现数据恢复达到主从数据一致性。")]),a._v(" "),t("li",[a._v("数据恢复：通过mysqlbinlog等工具来恢复数据")])]),a._v(" "),t("p",[a._v("关于Binlog的使用场景可以参见冰河出版的《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247497263&idx=1&sn=8228a795261b0a90a3f42322368616fc&chksm=cf56412ef821c8389584e9e608aa4d6515cf68e26758b9c578a8f60a796999fafc8686a6a425&token=1996761147&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务：原理与实战"),t("OutboundLink")],1),a._v("》与《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247489670&idx=1&sn=fe4e1d4f3db05607e37f35cbd7837fc8&chksm=cf55af87f8222691c42b252444a2d5ec1989aadbc0956463169fe6bc8f77c4977b3a4d2dfe9c&token=1847696338&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL技术大全：开发、优化和运维实战"),t("OutboundLink")],1),a._v("》一书。")]),a._v(" "),t("h3",{attrs:{id:"binlog文件记录模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog文件记录模式"}},[a._v("#")]),a._v(" Binlog文件记录模式")]),a._v(" "),t("p",[a._v("Binlog文件记录模式有STATEMENT、ROW和MIXED三种，具体含义如下。")]),a._v(" "),t("p",[t("strong",[a._v("ROW模式")])]),a._v(" "),t("p",[a._v("ROW（row-based replication, RBR）：日志中会记录每一行数据被修改的情况，然后在slave端对相同的数据进行修改。")]),a._v(" "),t("p",[a._v("优点：能清楚记录每一个行数据的修改细节，能完全实现主从数据同步和数据的恢复。")]),a._v(" "),t("p",[a._v("缺点：批量操作，会产生大量的日志，尤其是alter table会让日志暴涨。")]),a._v(" "),t("p",[t("strong",[a._v("STATMENT模式")])]),a._v(" "),t("p",[a._v("STATMENT（statement-based replication, SBR）：每一条被修改数据的SQL都会记录到master的Binlog中，slave在复制的时候SQL进程会解析成和原来master端执行过的相同的SQL再次执行。简称SQL语句复制。")]),a._v(" "),t("p",[a._v("优点：日志量小，减少磁盘IO，提升存储和恢复速度")]),a._v(" "),t("p",[a._v("缺点：在某些情况下会导致主从数据不一致，比如last_insert_id()、now()等函数。")]),a._v(" "),t("p",[t("strong",[a._v("MIXED模式")])]),a._v(" "),t("p",[a._v("MIXED（mixed-based replication, MBR）：以上两种模式的混合使用，一般会使用STATEMENT模式保存binlog，对于STATEMENT模式无法复制的操作使用ROW模式保存binlog，MySQL会根据执行的SQL语句选择写入模式 。")]),a._v(" "),t("h3",{attrs:{id:"binlog文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog文件结构"}},[a._v("#")]),a._v(" Binlog文件结构")]),a._v(" "),t("p",[a._v("对于MySQL的Binlog文件结构有三种版本，见下图。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/1bab3c8adac5936884f08c99014481e9.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/686491205416aaddff15e83534fb267d.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/5976030b42331f1de0a6ba5b5b73827e.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("关于Binlog文件结构的具体信息，小伙伴们可以参考MySQL的官方文档，具体链接为：https://dev.mysql.com/doc/internals/en/event-header-fields.html")]),a._v(" "),t("h3",{attrs:{id:"binlog写机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog写机制"}},[a._v("#")]),a._v(" Binlog写机制")]),a._v(" "),t("p",[a._v("根据记录模式和操作触发event事件生成log event（事件触发执行机制）。")]),a._v(" "),t("p",[a._v("将事务执行过程中产生的日志时间（log event）写入缓冲区，每个事务线程都有一个缓冲区。Log Event保存在一个binlog_cache_mngr数据结构中，在该结构中有两个缓冲区，一个是stmt_cache，用于存放不支持事务的信息；另一个是trx_cache，用于存放支持事务的信息。")]),a._v(" "),t("p",[a._v("事务在提交阶段会将产生的log event写入到外部binlog文件中。不同事务以串行方式将log event写入Binlog文件中，所以一个事务包含的log event信息在binlog文件中是连续的，中间不会插入其他事务的log event。")]),a._v(" "),t("h3",{attrs:{id:"binlog文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog文件操作"}},[a._v("#")]),a._v(" Binlog文件操作")]),a._v(" "),t("p",[t("strong",[a._v("Binlog状态查看")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show variables like 'log_bin';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("开启Binlog功能，需要修改my.cnf或my.ini配置文件，在[mysqld]下面增加log_bin=mysql_bin_log，重启 MySQL服务。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("binlog-format=ROW\nlog-bin=mysqlbinlog\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[t("strong",[a._v("使用show binlog events命令")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("show binary logs; //等价于show master logs;\nshow master status;\nshow binlog events;\nshow binlog events in 'mysqlbinlog.000001';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("strong",[a._v("使用mysqlbinlog 命令")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('mysqlbinlog "文件名"\nmysqlbinlog "文件名" > "test.sql"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[t("strong",[a._v("使用 binlog 恢复数据")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('//按指定时间恢复\nmysqlbinlog --start-datetime="2021-02-28 18:00:00" --stopdatetime="2021-03-01 00:00:00" mysqlbinlog.000001 | mysql -uroot -p123456\n//按事件位置号恢复\nmysqlbinlog --start-position=1789 --stop-position=2674 mysqlbinlog.000001\n| mysql -uroot -p123456\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[t("strong",[a._v("删除Binlog文件")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("purge binary logs to 'mysqlbinlog.000001'; //删除指定文件\npurge binary logs before '2021-03-01 00:00:00'; //删除指定时间之前的文件\nreset master; //清除所有文件\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("可以通过设置expire_logs_days参数来启动自动清理功能。默认值为0表示没启用。设置为大于0的整数表示超出多少天binlog文件会自动清除。")]),a._v(" "),t("p",[a._v("更多有关于Binlog日志的信息，可以参考冰河出版的《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247497263&idx=1&sn=8228a795261b0a90a3f42322368616fc&chksm=cf56412ef821c8389584e9e608aa4d6515cf68e26758b9c578a8f60a796999fafc8686a6a425&token=1996761147&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务：原理与实战"),t("OutboundLink")],1),a._v("》与《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247489670&idx=1&sn=fe4e1d4f3db05607e37f35cbd7837fc8&chksm=cf55af87f8222691c42b252444a2d5ec1989aadbc0956463169fe6bc8f77c4977b3a4d2dfe9c&token=1847696338&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("MySQL技术大全：开发、优化与运维实战"),t("OutboundLink")],1),a._v("》一书。")]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"星球服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[a._v("#")]),a._v(" 星球服务")]),a._v(" "),t("p",[a._v("加入星球，你将获得：")]),a._v(" "),t("p",[a._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),a._v(" "),t("p",[a._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),a._v(" "),t("p",[a._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),a._v(" "),t("p",[a._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),a._v(" "),t("p",[a._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),a._v(" "),t("p",[a._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),a._v(" "),t("h2",{attrs:{id:"星球重磅福利"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[a._v("#")]),a._v(" 星球重磅福利")]),a._v(" "),t("p",[a._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),t("strong",[a._v("直接立减149元，相当于5折，")]),a._v(" 这已经是星球最大优惠力度！")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),a._v(" "),t("p",[t("strong",[a._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),a._v(" "),t("h2",{attrs:{id:"其他方式加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[a._v("#")]),a._v(" 其他方式加入星球")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("链接")]),a._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" 加入星球。")]),a._v(" "),t("li",[t("strong",[a._v("回复")]),a._v(" ：在公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 领取优惠券加入星球。")])]),a._v(" "),t("p",[t("strong",[a._v("特别提醒：")]),a._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[a._v("hacker_binghe")]),a._v(" 扫二维码，或者去公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 扫二维码加入星球。")]),a._v(" "),t("h2",{attrs:{id:"星球规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[a._v("#")]),a._v(" 星球规划")]),a._v(" "),t("p",[a._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),a._v(" "),t("h3",{attrs:{id:"中间件项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[a._v("#")]),a._v(" 中间件项目")]),a._v(" "),t("ul",[t("li",[a._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写Redis》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写JVM》全程手撸代码。")])]),a._v(" "),t("h3",{attrs:{id:"超硬核项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[a._v("#")]),a._v(" 超硬核项目")]),a._v(" "),t("ul",[t("li",[a._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),t("strong",[a._v("已上新")]),a._v("）。")]),a._v(" "),t("li",[a._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),a._v(" "),t("li",[a._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),a._v(" "),t("p",[a._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),a._v(" "),t("p",[a._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),a._v(" "),t("h2",{attrs:{id:"联系冰河"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[a._v("#")]),a._v(" 联系冰河")]),a._v(" "),t("h3",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[a._v("#")]),a._v(" 加群交流")]),a._v(" "),t("p",[a._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[a._v("星球编号")]),a._v("。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("冰河微信")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[a._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),t("strong",[a._v("冰河技术")]),a._v(" 微信公众号首发，强烈建议大家关注。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("公众号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"视频号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[a._v("#")]),a._v(" 视频号")]),a._v(" "),t("p",[a._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("视频号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[a._v("#")]),a._v(" 星球")]),a._v(" "),t("p",[a._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[a._v("hacker_binghe")]),a._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[a._v("实战项目")]),a._v("！")]),a._v(" "),t("p",[a._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("公众号，回复 "),t("code",[a._v("星球")]),a._v(" 可以获取入场优惠券。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("知识星球：冰河技术")]),a._v(" "),t("br")])])}),[],!1,null,null,null);t.default=n.exports}}]);