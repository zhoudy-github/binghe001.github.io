(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{391:function(_,v,t){"use strict";t.r(v);var s=t(7),e=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"《mysql核心知识》第19章-安全地关闭mysql实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第19章-安全地关闭mysql实例"}},[_._v("#")]),_._v(" 《MySQL核心知识》第19章：安全地关闭MySQL实例")]),_._v(" "),v("p",[v("strong",[_._v("大家好，我是冰河~~")])]),_._v(" "),v("p",[_._v("今天是《MySQL核心知识》专栏的第19章，今天为大家系统的讲讲如何安全的关闭MySQL实例，希望通过本章节的学习，小伙伴们能够举一反三，彻底掌握如何安全的关闭MySQL实例相关的知识。好了，开始今天的正题吧。")]),_._v(" "),v("h2",{attrs:{id:"关闭过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关闭过程"}},[_._v("#")]),_._v(" 关闭过程")]),_._v(" "),v("p",[_._v("（1）发起shutdown，发出 SIGTERM信号")]),_._v(" "),v("p",[_._v("（2）有必要的话，新建一个关闭线程(shutdown thread)")]),_._v(" "),v("p",[_._v("如果是客户端发起的关闭，则会新建一个专用的关闭线程。如果是直接收到 SIGTERM 信号进行关闭的话，专门负责信号处理的线程就会负责关闭工作，或者新建一个独立的线程负责这个事当无法创建独立的关闭线程时（例如内存不足），MySQL Server会发出类似下面的告警信息：")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[_._v("Error: Can’t "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("create")]),_._v(" thread "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("to")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("kill")]),_._v(" server\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("（3）MySQL Server不再响应新的连接请求")]),_._v(" "),v("p",[_._v("关闭TCP/IP网络监听，关闭Unix Socket等渠道")]),_._v(" "),v("p",[_._v("（4）逐渐关闭当前的连接、事务")]),_._v(" "),v("ul",[v("li",[_._v("空闲连接，将立刻被终止；")]),_._v(" "),v("li",[_._v("当前还有事务、SQL活动的连接，会将其标识为 killed，并定期检查其状态，以便下次检查时将其关闭；（参考 KILL 语法）")]),_._v(" "),v("li",[_._v("当前有活跃事务的，该事物会被回滚，如果该事务中还修改了非事务表，则已经修改的数据无法回滚，可能只会完成部分变更；")]),_._v(" "),v("li",[_._v("如果是Master/Slave复制场景里的Master，则对复制线程的处理过程和普通线程也是一样的；")]),_._v(" "),v("li",[_._v("如果是Master/Slave复制场景里的Slave，则会依次关闭IO、SQL线程，如果这2个线程当前是活跃的，则也会加上 killed 标识，然后再关闭；")]),_._v(" "),v("li",[_._v("Slave服务器上，SQL线程是允许直接停止当前的SQL操作的（为了避免复制问题），然后再关闭该线程；在MySQl 5.0.80及以前的版本里，如果SQL线程当时正好执行一个事务到中间，该事务会回滚；从5.0.81开始，则会等待所有的操作结束，除非用户发起KILL操作。")]),_._v(" "),v("li",[_._v("当Slave的SQL线程对非事务表执行操作时被强制 KILL了，可能会导致Master、Slave数据不一致；")])]),_._v(" "),v("p",[_._v("（5）MySQL Server进程关闭所有线程，关闭所有存储引擎；")]),_._v(" "),v("p",[_._v("刷新所有表cache，关闭所有打开的表；每个存储引擎各自负责相关的关闭操作，例如MyISAM会刷新所有等待写入的操作；InnoDB会将buffer pool刷新到磁盘中（从MySQL 5.0.5开始，如果innodb_fast_shutdown不设置为 2 的话），把当前的LSN记录到表空间中，然后关闭所有的内部线程。")]),_._v(" "),v("p",[_._v("（6）MySQL Server进程退出")]),_._v(" "),v("p",[_._v("关于KILL指令")]),_._v(" "),v("p",[_._v("从5.0开始，KILL 支持指定 CONNECTION | QUERY两种可选项：")]),_._v(" "),v("ul",[v("li",[_._v("KILL CONNECTION和原来的一样，停止回滚事务，关闭该线程连接，释放相关资源；")]),_._v(" "),v("li",[_._v("KILL QUERY则只停止线程当前提交执行的操作，其他的保持不变；")])]),_._v(" "),v("p",[_._v("提交KILL操作后，该线程上会设置一个特殊的 kill标记位。通常需要一段时间后才能真正关闭线程，因为kill标记位只在特定的情况下才检查：")]),_._v(" "),v("ul",[v("li",[_._v("执行SELECT查询时，在ORDER BY或GROUP BY循环中，每次读完一些行记录块后会检查 kill标记位，如果发现存在，该语句会终止；")]),_._v(" "),v("li",[_._v("执行ALTER TABLE时，在从原始表中每读取一些行记录块后会检查 kill 标记位，如果发现存在，该语句会终止，删除临时表；")]),_._v(" "),v("li",[_._v("执行UPDATE和DELETE时，每读取一些行记录块并且更新或删除后会检查 kill 标记位，如果发现存在，该语句会终止，回滚事务，若是在非事务表上的操作，则已发生变更的数据不会回滚；")]),_._v(" "),v("li",[_._v("GET_LOCK() 函数返回NULL；")]),_._v(" "),v("li",[_._v("INSERT DELAY线程会迅速内存中的新增记录，然后终止；")]),_._v(" "),v("li",[_._v("如果当前线程持有表级锁，则会释放，并终止；")]),_._v(" "),v("li",[_._v("如果线程的写操作调用在等待释放磁盘空间，则会直接抛出“磁盘空间满”错误，然后终止；")]),_._v(" "),v("li",[_._v("当MyISAM表在执行REPAIR TABLE 或 OPTIMIZE TABLE 时被 KILL的话，会导致该表损坏不可用，指导再次修复完成。")])]),_._v(" "),v("h2",{attrs:{id:"安全关闭mysql几点建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全关闭mysql几点建议"}},[_._v("#")]),_._v(" 安全关闭MySQL几点建议")]),_._v(" "),v("p",[_._v("想要安全关闭 mysqld 服务进程，建议按照下面的步骤来进行：")]),_._v(" "),v("ul",[v("li",[_._v("用具有SUPER、ALL等最高权限的账号连接MySQL，最好是用 unix socket 方式连接；")]),_._v(" "),v("li",[_._v("在5.0及以上版本，设置innodb_fast_shutdown = 1，允许快速关闭InnoDB（不进行full purge、insert buffer merge），如果是为了升级或者降级MySQL版本，则不要设置；")]),_._v(" "),v("li",[_._v("设置innodb_max_dirty_pages_pct = 0，让InnoDB把所有脏页都刷新到磁盘中去；")]),_._v(" "),v("li",[_._v("设置max_connections和max_user_connections为1，也就最后除了自己当前的连接外，不允许再有新的连接创建；")]),_._v(" "),v("li",[_._v("关闭所有不活跃的线程，也就是状态为Sleep 且 Time 大于 1 的线程ID；")]),_._v(" "),v("li",[_._v("执行 SHOW PROCESSLIST 确认是否还有活跃的线程，尤其是会产生表锁的线程，例如有大数据集的SELECT，或者大范围的UPDATE，或者执行DDL，都是要特别谨慎的；")]),_._v(" "),v("li",[_._v("执行 SHOW ENGINE INNODB STATUS 确认History list length的值较低（一般要低于500），也就是未PURGE的事务很少，并且确认Log sequence number、Log flushed up to、Last checkpoint at三个状态的值一样，也就是所有的LSN都已经做过检查点了；")]),_._v(" "),v("li",[_._v("然后执行FLUSH LOCKAL TABLES 操作，刷新所有 table cache，关闭已打开的表（LOCAL的作用是该操作不记录BINLOG）；")]),_._v(" "),v("li",[_._v("如果是SLAVE服务器，最好是先关闭 IO_THREAD，等待所有RELAY LOG都应用完后，再关闭 SQL_THREAD，避免 SQL_THREAD 在执行大事务被终止，耐心待其全部应用完毕，如果非要强制关闭的话，最好也等待大事务结束后再关闭SQL_THREAD；")]),_._v(" "),v("li",[_._v("最后再执行 mysqladmin shutdown。")]),_._v(" "),v("li",[_._v("紧急情况下，可以设置innodb_fast_shutdown = 1，然后直接执行 mysqladmin shutdown 即可，甚至直接在操作系统层调用 kill 或者 kill -9 杀掉 mysqld 进程（在innodb_flush_log_at_trx_commit = 0 的时候可能会丢失部分事务），不过mysqld进程再次启动时，会进行CRASH RECOVERY工作，需要有所权衡。")])]),_._v(" "),v("p",[_._v("以上说了那么多，其实正常情况下执行 mysqladmin shutdown 就够了，如果发生阻塞，再参考上面的内容进行分析和解决吧。")]),_._v(" "),v("p",[v("strong",[_._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),_._v(" "),v("h2",{attrs:{id:"关于星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[_._v("#")]),_._v(" 关于星球")]),_._v(" "),v("p",[v("strong",[_._v("冰河技术")]),_._v(" 知识星球《RPC手撸专栏》已经开始了，我会将《RPC手撸专栏》的源码放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),_._v(" "),v("h3",{attrs:{id:"星球提供的服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[_._v("#")]),_._v(" 星球提供的服务")]),_._v(" "),v("p",[_._v("冰河整理了星球提供的一些服务，如下所示。")]),_._v(" "),v("p",[_._v("加入星球，你将获得：")]),_._v(" "),v("p",[_._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),_._v(" "),v("p",[_._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),_._v(" "),v("p",[_._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),_._v(" "),v("p",[_._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),_._v(" "),v("p",[_._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),_._v(" "),v("p",[_._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),_._v(" "),v("p",[_._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),_._v(" "),v("p",[_._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),_._v(" "),v("p",[_._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),_._v(" "),v("h3",{attrs:{id:"如何加入星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[_._v("#")]),_._v(" 如何加入星球")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("链接")]),_._v(" ：打开链接 "),v("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[_._v("http://m6z.cn/6aeFbs"),v("OutboundLink")],1),_._v(" 加入星球。")]),_._v(" "),v("li",[v("strong",[_._v("回复")]),_._v(" ：在公众号 "),v("strong",[_._v("冰河技术")]),_._v(" 回复 "),v("strong",[_._v("星球")]),_._v(" 领取优惠券加入星球。")])]),_._v(" "),v("p",[v("strong",[_._v("特别提醒：")]),_._v(" 苹果用户进圈或续费，请加微信 "),v("strong",[_._v("hacker_binghe")]),_._v(" 扫二维码，或者去公众号 "),v("strong",[_._v("冰河技术")]),_._v(" 回复 "),v("strong",[_._v("星球")]),_._v(" 扫二维码加入星球。")]),_._v(" "),v("p",[v("strong",[_._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])])])}),[],!1,null,null,null);v.default=e.exports}}]);