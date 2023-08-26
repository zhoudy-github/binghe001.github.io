(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{444:function(_,v,t){"use strict";t.r(v);var a=t(7),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"《mysql核心知识》第19章-安全地关闭mysql实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第19章-安全地关闭mysql实例"}},[_._v("#")]),_._v(" 《MySQL核心知识》第19章：安全地关闭MySQL实例")]),_._v(" "),v("p",[v("strong",[_._v("大家好，我是冰河~~")])]),_._v(" "),v("p",[_._v("今天是《MySQL核心知识》专栏的第19章，今天为大家系统的讲讲如何安全的关闭MySQL实例，希望通过本章节的学习，小伙伴们能够举一反三，彻底掌握如何安全的关闭MySQL实例相关的知识。好了，开始今天的正题吧。")]),_._v(" "),v("h2",{attrs:{id:"关闭过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关闭过程"}},[_._v("#")]),_._v(" 关闭过程")]),_._v(" "),v("p",[_._v("（1）发起shutdown，发出 SIGTERM信号")]),_._v(" "),v("p",[_._v("（2）有必要的话，新建一个关闭线程(shutdown thread)")]),_._v(" "),v("p",[_._v("如果是客户端发起的关闭，则会新建一个专用的关闭线程。如果是直接收到 SIGTERM 信号进行关闭的话，专门负责信号处理的线程就会负责关闭工作，或者新建一个独立的线程负责这个事当无法创建独立的关闭线程时（例如内存不足），MySQL Server会发出类似下面的告警信息：")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[_._v("Error: Can’t "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("create")]),_._v(" thread "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("to")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("kill")]),_._v(" server\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("（3）MySQL Server不再响应新的连接请求")]),_._v(" "),v("p",[_._v("关闭TCP/IP网络监听，关闭Unix Socket等渠道")]),_._v(" "),v("p",[_._v("（4）逐渐关闭当前的连接、事务")]),_._v(" "),v("ul",[v("li",[_._v("空闲连接，将立刻被终止；")]),_._v(" "),v("li",[_._v("当前还有事务、SQL活动的连接，会将其标识为 killed，并定期检查其状态，以便下次检查时将其关闭；（参考 KILL 语法）")]),_._v(" "),v("li",[_._v("当前有活跃事务的，该事物会被回滚，如果该事务中还修改了非事务表，则已经修改的数据无法回滚，可能只会完成部分变更；")]),_._v(" "),v("li",[_._v("如果是Master/Slave复制场景里的Master，则对复制线程的处理过程和普通线程也是一样的；")]),_._v(" "),v("li",[_._v("如果是Master/Slave复制场景里的Slave，则会依次关闭IO、SQL线程，如果这2个线程当前是活跃的，则也会加上 killed 标识，然后再关闭；")]),_._v(" "),v("li",[_._v("Slave服务器上，SQL线程是允许直接停止当前的SQL操作的（为了避免复制问题），然后再关闭该线程；在MySQl 5.0.80及以前的版本里，如果SQL线程当时正好执行一个事务到中间，该事务会回滚；从5.0.81开始，则会等待所有的操作结束，除非用户发起KILL操作。")]),_._v(" "),v("li",[_._v("当Slave的SQL线程对非事务表执行操作时被强制 KILL了，可能会导致Master、Slave数据不一致；")])]),_._v(" "),v("p",[_._v("（5）MySQL Server进程关闭所有线程，关闭所有存储引擎；")]),_._v(" "),v("p",[_._v("刷新所有表cache，关闭所有打开的表；每个存储引擎各自负责相关的关闭操作，例如MyISAM会刷新所有等待写入的操作；InnoDB会将buffer pool刷新到磁盘中（从MySQL 5.0.5开始，如果innodb_fast_shutdown不设置为 2 的话），把当前的LSN记录到表空间中，然后关闭所有的内部线程。")]),_._v(" "),v("p",[_._v("（6）MySQL Server进程退出")]),_._v(" "),v("p",[_._v("关于KILL指令")]),_._v(" "),v("p",[_._v("从5.0开始，KILL 支持指定 CONNECTION | QUERY两种可选项：")]),_._v(" "),v("ul",[v("li",[_._v("KILL CONNECTION和原来的一样，停止回滚事务，关闭该线程连接，释放相关资源；")]),_._v(" "),v("li",[_._v("KILL QUERY则只停止线程当前提交执行的操作，其他的保持不变；")])]),_._v(" "),v("p",[_._v("提交KILL操作后，该线程上会设置一个特殊的 kill标记位。通常需要一段时间后才能真正关闭线程，因为kill标记位只在特定的情况下才检查：")]),_._v(" "),v("ul",[v("li",[_._v("执行SELECT查询时，在ORDER BY或GROUP BY循环中，每次读完一些行记录块后会检查 kill标记位，如果发现存在，该语句会终止；")]),_._v(" "),v("li",[_._v("执行ALTER TABLE时，在从原始表中每读取一些行记录块后会检查 kill 标记位，如果发现存在，该语句会终止，删除临时表；")]),_._v(" "),v("li",[_._v("执行UPDATE和DELETE时，每读取一些行记录块并且更新或删除后会检查 kill 标记位，如果发现存在，该语句会终止，回滚事务，若是在非事务表上的操作，则已发生变更的数据不会回滚；")]),_._v(" "),v("li",[_._v("GET_LOCK() 函数返回NULL；")]),_._v(" "),v("li",[_._v("INSERT DELAY线程会迅速内存中的新增记录，然后终止；")]),_._v(" "),v("li",[_._v("如果当前线程持有表级锁，则会释放，并终止；")]),_._v(" "),v("li",[_._v("如果线程的写操作调用在等待释放磁盘空间，则会直接抛出“磁盘空间满”错误，然后终止；")]),_._v(" "),v("li",[_._v("当MyISAM表在执行REPAIR TABLE 或 OPTIMIZE TABLE 时被 KILL的话，会导致该表损坏不可用，指导再次修复完成。")])]),_._v(" "),v("h2",{attrs:{id:"安全关闭mysql几点建议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全关闭mysql几点建议"}},[_._v("#")]),_._v(" 安全关闭MySQL几点建议")]),_._v(" "),v("p",[_._v("想要安全关闭 mysqld 服务进程，建议按照下面的步骤来进行：")]),_._v(" "),v("ul",[v("li",[_._v("用具有SUPER、ALL等最高权限的账号连接MySQL，最好是用 unix socket 方式连接；")]),_._v(" "),v("li",[_._v("在5.0及以上版本，设置innodb_fast_shutdown = 1，允许快速关闭InnoDB（不进行full purge、insert buffer merge），如果是为了升级或者降级MySQL版本，则不要设置；")]),_._v(" "),v("li",[_._v("设置innodb_max_dirty_pages_pct = 0，让InnoDB把所有脏页都刷新到磁盘中去；")]),_._v(" "),v("li",[_._v("设置max_connections和max_user_connections为1，也就最后除了自己当前的连接外，不允许再有新的连接创建；")]),_._v(" "),v("li",[_._v("关闭所有不活跃的线程，也就是状态为Sleep 且 Time 大于 1 的线程ID；")]),_._v(" "),v("li",[_._v("执行 SHOW PROCESSLIST 确认是否还有活跃的线程，尤其是会产生表锁的线程，例如有大数据集的SELECT，或者大范围的UPDATE，或者执行DDL，都是要特别谨慎的；")]),_._v(" "),v("li",[_._v("执行 SHOW ENGINE INNODB STATUS 确认History list length的值较低（一般要低于500），也就是未PURGE的事务很少，并且确认Log sequence number、Log flushed up to、Last checkpoint at三个状态的值一样，也就是所有的LSN都已经做过检查点了；")]),_._v(" "),v("li",[_._v("然后执行FLUSH LOCKAL TABLES 操作，刷新所有 table cache，关闭已打开的表（LOCAL的作用是该操作不记录BINLOG）；")]),_._v(" "),v("li",[_._v("如果是SLAVE服务器，最好是先关闭 IO_THREAD，等待所有RELAY LOG都应用完后，再关闭 SQL_THREAD，避免 SQL_THREAD 在执行大事务被终止，耐心待其全部应用完毕，如果非要强制关闭的话，最好也等待大事务结束后再关闭SQL_THREAD；")]),_._v(" "),v("li",[_._v("最后再执行 mysqladmin shutdown。")]),_._v(" "),v("li",[_._v("紧急情况下，可以设置innodb_fast_shutdown = 1，然后直接执行 mysqladmin shutdown 即可，甚至直接在操作系统层调用 kill 或者 kill -9 杀掉 mysqld 进程（在innodb_flush_log_at_trx_commit = 0 的时候可能会丢失部分事务），不过mysqld进程再次启动时，会进行CRASH RECOVERY工作，需要有所权衡。")])]),_._v(" "),v("p",[_._v("以上说了那么多，其实正常情况下执行 mysqladmin shutdown 就够了，如果发生阻塞，再参考上面的内容进行分析和解决吧。")]),_._v(" "),v("p",[v("strong",[_._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),_._v(" "),v("h2",{attrs:{id:"星球服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[_._v("#")]),_._v(" 星球服务")]),_._v(" "),v("p",[_._v("加入星球，你将获得：")]),_._v(" "),v("p",[_._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),_._v(" "),v("p",[_._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),_._v(" "),v("p",[_._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),_._v(" "),v("p",[_._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),_._v(" "),v("p",[_._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),_._v(" "),v("p",[_._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),_._v(" "),v("h2",{attrs:{id:"星球重磅福利"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[_._v("#")]),_._v(" 星球重磅福利")]),_._v(" "),v("p",[_._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),v("strong",[_._v("直接立减149元，相当于5折，")]),_._v(" 这已经是星球最大优惠力度！")]),_._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),_._v(" "),v("br")]),_._v(" "),v("p",[_._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),_._v(" "),v("p",[v("strong",[_._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),_._v(" "),v("h2",{attrs:{id:"其他方式加入星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[_._v("#")]),_._v(" 其他方式加入星球")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("链接")]),_._v(" ：打开链接 "),v("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[_._v("http://m6z.cn/6aeFbs"),v("OutboundLink")],1),_._v(" 加入星球。")]),_._v(" "),v("li",[v("strong",[_._v("回复")]),_._v(" ：在公众号 "),v("strong",[_._v("冰河技术")]),_._v(" 回复 "),v("strong",[_._v("星球")]),_._v(" 领取优惠券加入星球。")])]),_._v(" "),v("p",[v("strong",[_._v("特别提醒：")]),_._v(" 苹果用户进圈或续费，请加微信 "),v("strong",[_._v("hacker_binghe")]),_._v(" 扫二维码，或者去公众号 "),v("strong",[_._v("冰河技术")]),_._v(" 回复 "),v("strong",[_._v("星球")]),_._v(" 扫二维码加入星球。")]),_._v(" "),v("h2",{attrs:{id:"星球规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[_._v("#")]),_._v(" 星球规划")]),_._v(" "),v("p",[_._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),_._v(" "),v("h3",{attrs:{id:"中间件项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[_._v("#")]),_._v(" 中间件项目")]),_._v(" "),v("ul",[v("li",[_._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),_._v(" "),v("li",[_._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),_._v(" "),v("li",[_._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),_._v(" "),v("li",[_._v("《手写Redis》：全程手撸代码。")]),_._v(" "),v("li",[_._v("《手写JVM》全程手撸代码。")])]),_._v(" "),v("h3",{attrs:{id:"超硬核项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[_._v("#")]),_._v(" 超硬核项目")]),_._v(" "),v("ul",[v("li",[_._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),v("strong",[_._v("已上新")]),_._v("）。")]),_._v(" "),v("li",[_._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),_._v(" "),v("li",[_._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),_._v(" "),v("p",[_._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),_._v(" "),v("p",[_._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),_._v(" "),v("h2",{attrs:{id:"联系冰河"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[_._v("#")]),_._v(" 联系冰河")]),_._v(" "),v("h3",{attrs:{id:"加群交流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[_._v("#")]),_._v(" 加群交流")]),_._v(" "),v("p",[_._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),v("code",[_._v("星球编号")]),_._v("。")]),_._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),_._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[_._v("冰河微信")]),_._v(" "),v("br")]),_._v(" "),v("h3",{attrs:{id:"公众号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[_._v("#")]),_._v(" 公众号")]),_._v(" "),v("p",[_._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),v("strong",[_._v("冰河技术")]),_._v(" 微信公众号首发，强烈建议大家关注。")]),_._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),_._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[_._v("公众号：冰河技术")]),_._v(" "),v("br")]),_._v(" "),v("h3",{attrs:{id:"视频号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[_._v("#")]),_._v(" 视频号")]),_._v(" "),v("p",[_._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),_._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),_._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[_._v("视频号：冰河技术")]),_._v(" "),v("br")]),_._v(" "),v("h3",{attrs:{id:"星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[_._v("#")]),_._v(" 星球")]),_._v(" "),v("p",[_._v("加入星球 "),v("strong",[v("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[_._v("冰河技术"),v("OutboundLink")],1)]),_._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),v("strong",[_._v("hacker_binghe")]),_._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),v("strong",[_._v("实战项目")]),_._v("！")]),_._v(" "),v("p",[_._v("关注 "),v("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[_._v("冰河技术"),v("OutboundLink")],1),_._v("公众号，回复 "),v("code",[_._v("星球")]),_._v(" 可以获取入场优惠券。")]),_._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),_._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[_._v("知识星球：冰河技术")]),_._v(" "),v("br")])])}),[],!1,null,null,null);v.default=r.exports}}]);