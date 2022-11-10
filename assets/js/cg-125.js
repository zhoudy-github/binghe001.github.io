(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{416:function(t,v,_){"use strict";_.r(v);var e=_(7),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"【spring】看了这篇spring事务原理-我才知道我对spring事务的误解有多深"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【spring】看了这篇spring事务原理-我才知道我对spring事务的误解有多深"}},[t._v("#")]),t._v(" 【Spring】看了这篇Spring事务原理，我才知道我对Spring事务的误解有多深！")]),t._v(" "),v("h2",{attrs:{id:"写在前面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[t._v("#")]),t._v(" 写在前面")]),t._v(" "),v("blockquote",[v("p",[t._v("有很多小伙伴们留言说，冰河，你能不能写一篇关于Spring事务的文章呢？我：可以啊，安排上了！那还等什么呢？走起啊！！")])]),t._v(" "),v("h2",{attrs:{id:"事务的基本原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务的基本原理"}},[t._v("#")]),t._v(" 事务的基本原理")]),t._v(" "),v("p",[t._v("Spring事务的本质其实就是数据库对事务的支持，没有数据库的事务支持，spring是无法提供事务功能的。对于纯JDBC操作数据库，想要用到事务，可以按照以下步骤进行：")]),t._v(" "),v("ol",[v("li",[t._v("获取连接 Connection con = DriverManager.getConnection()")]),t._v(" "),v("li",[t._v("开启事务con.setAutoCommit(true/false);")]),t._v(" "),v("li",[t._v("执行CRUD")]),t._v(" "),v("li",[t._v("提交事务/回滚事务 con.commit() / con.rollback();")]),t._v(" "),v("li",[t._v("关闭连接 conn.close();")])]),t._v(" "),v("p",[t._v("使用Spring的事务管理功能后，我们可以不再写步骤 2 和 4 的代码，而是由Spirng  自动完成。\n那么Spring是如何在我们书写的 CRUD  之前和之后开启事务和关闭事务的呢？解决这个问题，也就可以从整体上理解Spring的事务管理实现原理了。下面简单地介绍下，注解方式为例子")]),t._v(" "),v("ol",[v("li",[t._v("配置文件开启注解驱动，在相关的类和方法上通过注解@Transactional标识。")]),t._v(" "),v("li",[t._v("spring 在启动的时候会去解析生成相关的bean，这时候会查看拥有相关注解的类和方法，并且为这些类和方法生成代理，并根据@Transaction的相关参数进行相关配置注入，这样就在代理中为我们把相关的事务处理掉了（开启正常提交事务，异常回滚事务）。")]),t._v(" "),v("li",[t._v("真正的数据库层的事务提交和回滚是通过binlog或者redo log实现的。")])]),t._v(" "),v("h2",{attrs:{id:"二、spring-事务的传播属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、spring-事务的传播属性"}},[t._v("#")]),t._v(" 二、Spring 事务的传播属性")]),t._v(" "),v("p",[t._v("所谓spring事务的传播属性，就是定义在存在多个事务同时存在的时候，spring应该如何处理这些事务的行为。这些属性在TransactionDefinition中定义，具体常量的解释见下表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("常量名称")]),t._v(" "),v("th",[t._v("常量解释")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("PROPAGATION_REQUIRED")]),t._v(" "),v("td",[t._v("支持当前事务，如果当前没有事务，就新建一个事务。这是最常见的选择，也是 Spring 默认的事务的传播。")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_REQUIRES_NEW")]),t._v(" "),v("td",[t._v("新建事务，如果当前存在事务，把当前事务挂起。新建的事务将和被挂起的事务没有任何关系，是两个独立的事务，外层事务失败回滚之后，不能回滚内层事务执行的结果，内层事务失败抛出异常，外层事务捕获，也可以不处理回滚操作")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_SUPPORTS")]),t._v(" "),v("td",[t._v("支持当前事务，如果当前没有事务，就以非事务方式执行。")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_MANDATORY")]),t._v(" "),v("td",[t._v("支持当前事务，如果当前没有事务，就抛出异常。")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_NOT_SUPPORTED")]),t._v(" "),v("td",[t._v("以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_NEVER")]),t._v(" "),v("td",[t._v("以非事务方式执行，如果当前存在事务，则抛出异常。")])]),t._v(" "),v("tr",[v("td",[t._v("PROPAGATION_NESTED")]),t._v(" "),v("td",[t._v("如果一个活动的事务存在，则运行在一个嵌套的事务中。如果没有活动事务，则按REQUIRED属性执行。它使用了一个单独的事务，这个事务拥有多个可以回滚的保存点。内部事务的回滚不会对外部事务造成影响。它只对DataSourceTransactionManager事务管理器起效。")])])])]),t._v(" "),v("h2",{attrs:{id:"三、数据库隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、数据库隔离级别"}},[t._v("#")]),t._v(" 三、数据库隔离级别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("隔离级别")]),t._v(" "),v("th",[t._v("隔离级别的值")]),t._v(" "),v("th",[t._v("导致的问题")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Read-Uncommitted")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("导致脏读")])]),t._v(" "),v("tr",[v("td",[t._v("Read-Committed")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("避免脏读，允许不可重复读和幻读")])]),t._v(" "),v("tr",[v("td",[t._v("Repeatable-Read")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("避免脏读，不可重复读，允许幻读")])]),t._v(" "),v("tr",[v("td",[t._v("Serializable")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("串行化读，事务只能一个一个执行，避免了脏读、不可重复读、幻读。执行效率慢，使用时慎重")])])])]),t._v(" "),v("p",[t._v("脏读：一事务对数据进行了增删改，但未提交，另一事务可以读取到未提交的数据。如果第一个事务这时候回滚了，那么第二个事务就读到了脏数据。")]),t._v(" "),v("p",[t._v("不可重复读：一个事务中发生了两次读操作，第一次读操作和第二次操作之间，另外一个事务对数据进行了修改，这时候两次读取的数据是不一致的。")]),t._v(" "),v("p",[t._v("幻读：第一个事务对一定范围的数据进行批量修改，第二个事务在这个范围增加一条数据，这时候第一个事务就会丢失对新增数据的修改。")]),t._v(" "),v("p",[v("strong",[t._v("总结：")])]),t._v(" "),v("p",[t._v("隔离级别越高，越能保证数据的完整性和一致性，但是对并发性能的影响也越大。")]),t._v(" "),v("p",[t._v("大多数的数据库默认隔离级别为 Read Commited，比如 SqlServer、Oracle")]),t._v(" "),v("p",[t._v("少数数据库默认隔离级别为：Repeatable Read 比如： MySQL InnoDB")]),t._v(" "),v("h2",{attrs:{id:"四、spring中的隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、spring中的隔离级别"}},[t._v("#")]),t._v(" 四、Spring中的隔离级别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("常量")]),t._v(" "),v("th",[t._v("解释")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ISOLATION_DEFAULT")]),t._v(" "),v("td",[t._v("这是个 PlatfromTransactionManager 默认的隔离级别，使用数据库默认的事务隔离级别。另外四个与 JDBC 的隔离级别相对应。")])]),t._v(" "),v("tr",[v("td",[t._v("ISOLATION_READ_UNCOMMITTED")]),t._v(" "),v("td",[t._v("这是事务最低的隔离级别，它充许另外一个事务可以看到这个事务未提交的数据。这种隔离级别会产生脏读，不可重复读和幻像读。")])]),t._v(" "),v("tr",[v("td",[t._v("ISOLATION_READ_COMMITTED")]),t._v(" "),v("td",[t._v("保证一个事务修改的数据提交后才能被另外一个事务读取。另外一个事务不能读取该事务未提交的数据。")])]),t._v(" "),v("tr",[v("td",[t._v("ISOLATION_REPEATABLE_READ")]),t._v(" "),v("td",[t._v("这种事务隔离级别可以防止脏读，不可重复读。但是可能出现幻像读。")])]),t._v(" "),v("tr",[v("td",[t._v("ISOLATION_SERIALIZABLE")]),t._v(" "),v("td",[t._v("这是花费最高代价但是最可靠的事务隔离级别。事务被处理为顺序执行。")])])])]),t._v(" "),v("h2",{attrs:{id:"五、事务的嵌套"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、事务的嵌套"}},[t._v("#")]),t._v(" 五、事务的嵌套")]),t._v(" "),v("p",[t._v("通过上面的理论知识的铺垫，我们大致知道了数据库事务和spring事务的一些属性和特点，接下来我们通过分析一些嵌套事务的场景，来深入理解spring事务传播的机制。")]),t._v(" "),v("p",[t._v("假设外层事务 Service A 的 Method A() 调用 内层Service B 的 Method B()")]),t._v(" "),v("p",[v("strong",[t._v("PROPAGATION_REQUIRED(spring 默认)")])]),t._v(" "),v("p",[t._v("如果ServiceB.methodB() 的事务级别定义为 PROPAGATION_REQUIRED，那么执行  ServiceA.methodA() 的时候spring已经起了事务，这时调用  ServiceB.methodB()，ServiceB.methodB() 看到自己已经运行在 ServiceA.methodA()  的事务内部，就不再起新的事务。")]),t._v(" "),v("p",[t._v("假如 ServiceB.methodB() 运行的时候发现自己没有在事务中，他就会为自己分配一个事务。")]),t._v(" "),v("p",[t._v("这样，在 ServiceA.methodA() 或者在 ServiceB.methodB() 内的任何地方出现异常，事务都会被回滚。")]),t._v(" "),v("p",[v("strong",[t._v("PROPAGATION_REQUIRES_NEW")])]),t._v(" "),v("p",[t._v("比如我们设计 ServiceA.methodA() 的事务级别为 PROPAGATION_REQUIRED，ServiceB.methodB() 的事务级别为 PROPAGATION_REQUIRES_NEW。")]),t._v(" "),v("p",[t._v("那么当执行到 ServiceB.methodB() 的时候，ServiceA.methodA() 所在的事务就会挂起，ServiceB.methodB() 会起一个新的事务，等待 ServiceB.methodB() 的事务完成以后，它才继续执行。")]),t._v(" "),v("p",[t._v("他与 PROPAGATION_REQUIRED 的事务区别在于事务的回滚程度了。因为 ServiceB.methodB()  是新起一个事务，那么就是存在两个不同的事务。如果 ServiceB.methodB() 已经提交，那么 ServiceA.methodA()  失败回滚，ServiceB.methodB() 是不会回滚的。如果 ServiceB.methodB() 失败回滚，如果他抛出的异常被  ServiceA.methodA() 捕获，ServiceA.methodA() 事务仍然可能提交(主要看B抛出的异常是不是A会回滚的异常)。")]),t._v(" "),v("p",[v("strong",[t._v("PROPAGATION_SUPPORTS")])]),t._v(" "),v("p",[t._v("假设ServiceB.methodB() 的事务级别为  PROPAGATION_SUPPORTS，那么当执行到ServiceB.methodB()时，如果发现ServiceA.methodA()已经开启了一个事务，则加入当前的事务，如果发现ServiceA.methodA()没有开启事务，则自己也不开启事务。这种时候，内部方法的事务性完全依赖于最外层的事务。")]),t._v(" "),v("p",[v("strong",[t._v("PROPAGATION_NESTED")])]),t._v(" "),v("p",[t._v("现在的情况就变得比较复杂了, ServiceB.methodB() 的事务属性被配置为 PROPAGATION_NESTED,  此时两者之间又将如何协作呢? ServiceB#methodB 如果 rollback, 那么内部事务(即 ServiceB#methodB) 将回滚到它执行前的 SavePoint 而外部事务(即 ServiceA#methodA) 可以有以下两种处理方式:")]),t._v(" "),v("p",[t._v("a、捕获异常，执行异常分支逻辑")]),t._v(" "),v("div",{staticClass:"language-java line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceB")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeException")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行其他业务, 如 ServiceC.methodC(); ")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br")])]),v("p",[t._v("这种方式也是嵌套事务最有价值的地方, 它起到了分支执行的效果, 如果 ServiceB.methodB 失败, 那么执行  ServiceC.methodC(), 而 ServiceB.methodB 已经回滚到它执行之前的 SavePoint,  所以不会产生脏数据(相当于此方法从未执行过), 这种特性可以用在某些特殊的业务中, 而 PROPAGATION_REQUIRED 和  PROPAGATION_REQUIRES_NEW 都没有办法做到这一点。")]),t._v(" "),v("p",[t._v("b、 外部事务回滚/提交 代码不做任何修改, 那么如果内部事务(ServiceB#methodB) rollback, 那么首先  ServiceB.methodB 回滚到它执行之前的 SavePoint(在任何情况下都会如此), 外部事务(即  ServiceA#methodA) 将根据具体的配置决定自己是 commit 还是 rollback")]),t._v(" "),v("p",[t._v("另外三种事务传播属性基本用不到，在此不做分析。")]),t._v(" "),v("h2",{attrs:{id:"六、总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、总结"}},[t._v("#")]),t._v(" 六、总结")]),t._v(" "),v("p",[t._v("对于项目中需要使用到事务的地方，我建议开发者还是使用spring的TransactionCallback接口来实现事务，不要盲目使用spring事务注解，如果一定要使用注解，那么一定要对spring事务的传播机制和隔离级别有个详细的了解，否则很可能发生意想不到的效果。")]),t._v(" "),v("h2",{attrs:{id:"重磅福利"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重磅福利"}},[t._v("#")]),t._v(" 重磅福利")]),t._v(" "),v("p",[t._v("关注「 "),v("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，后台回复 “"),v("strong",[t._v("设计模式")]),t._v("” 关键字领取《"),v("strong",[t._v("深入浅出Java 23种设计模式")]),t._v("》PDF文档。回复“"),v("strong",[t._v("Java8")]),t._v("”关键字领取《"),v("strong",[t._v("Java8新特性教程")]),t._v("》PDF文档。回复“"),v("strong",[t._v("限流")]),t._v("”关键字获取《"),v("strong",[t._v("亿级流量下的分布式限流解决方案")]),t._v("》PDF文档，三本PDF均是由冰河原创并整理的超硬核教程，面试必备！！")]),t._v(" "),v("p",[v("font",{attrs:{color:"#FF0000"}},[v("strong",[t._v("好了，今天就聊到这儿吧！别忘了点个赞，给个在看和转发，让更多的人看到，一起学习，一起进步！！")])])],1),t._v(" "),v("h2",{attrs:{id:"写在最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),v("blockquote",[v("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),v("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),v("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),v("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),v("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);v.default=a.exports}}]);