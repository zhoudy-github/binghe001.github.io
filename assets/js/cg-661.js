(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{957:function(t,r,e){"use strict";e.r(r);var a=e(7),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第49章-基于tcc模型解决分布式事务问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第49章-基于tcc模型解决分布式事务问题"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第49章：基于TCC模型解决分布式事务问题")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点理解并掌握TCC模型解决分布式事务问题的流程，并能够将其灵活运用到自身实际项目中，熟悉并掌握几款常用的TCC分布式事务框架。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("解决分布式事务问题的方案有很多，总体上可以分成强一致性分布式事务解决方案和最终一致性分布式事务解决方案。在大型电商平台，尤其像秒杀系统这种承受瞬时高并发、大流量的场景下，不太适合使用强一致性分布式事务解决方案来处理分布式事务问题。此时就需要使用最终一致性分布式事务解决方案来处理分布式事务问题。")]),t._v(" "),r("p",[r("strong",[t._v("注意：如果想系统、深入的学习分布式事务相关的知识，可以阅读《"),r("a",{attrs:{href:"https://binghe.gitcode.host/md/knowledge/book/2022-03-29-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解分布式事务：原理与实战"),r("OutboundLink")],1),t._v("》一书。")])]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀系统由单体应用拆分为微服务后，由于订单微服务和商品微服务不在同一个服务内。如果只是使用Spring来管理事务的话，用户下单时，扣减完商品库存，如果订单微服务由于某种原因抛出异常导致事务回滚，则可能会导致商品库存与订单数据不一致的问题，此时就会产生分布式事务的问题。所以，我们要解决秒杀拆分后产生的分布式事务问题。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("业界对分布式事务问题提出了很多可靠的解决方案，不少互联网公司和开源社区也开源了解决分布式事务问题的框架，相比来说，解决分布式事务问题就变得相对比较简单了。本节，我们就使用Dromara社区开源的Hmily框架来解决秒杀系统中下单扣减库存产生的分布式事务问题。")]),t._v(" "),r("h2",{attrs:{id:"三、tcc解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、tcc解决方案"}},[t._v("#")]),t._v(" 三、TCC解决方案")]),t._v(" "),r("p",[t._v("在秒杀系统正式整合TCC分布式事务框架之前，我们先简单的聊聊TCC分布式事务解决方案，本节，主要介绍TCC分布式事务解决方案的适用场景、执行流程、优缺点和需要注意的问题。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-适用场景"}},[t._v("#")]),t._v(" 3.1 适用场景")]),t._v(" "),r("p",[t._v("TCC方案主要适用于具有强隔离性、严格一致性的业务场景，并且适用于执行时间比较短的业务中，例如：电商业务场景中的下单减库存等业务，如果使用TCC分布式事务，则会经过Try-Confirm-Cancel三个阶段。")]),t._v(" "),r("p",[r("strong",[t._v("（1）Try阶段")])]),t._v(" "),r("p",[t._v("提交订单并将订单的状态设置为待提交，调用库存服务预扣减库存，具体操作为在库存数据表中将商品库存字段的数据减去提交订单时传递的商品数量，同时，在预扣减库存字段中增加提交订单时传递的商品数量。")]),t._v(" "),r("p",[r("strong",[t._v("（2）Confirm阶段")])]),t._v(" "),r("p",[t._v("如果Try阶段的操作全部执行成功，则执行Confirm阶段。在Confirm阶段，订单服务将订单数据的状态标记为已提交。库存服务则将库存数据表中的预扣减库存字段的数据减去提交订单时传递的商品数量，达到真正扣减库存的目标。")]),t._v(" "),r("p",[r("strong",[t._v("（3）Cancel阶段")])]),t._v(" "),r("p",[t._v("如果Try阶段执行失败，或者抛出异常，则执行Cancel阶段。在Cancel阶段，订单服务将订单数据的状态标记为已取消。库存服务将库存数据表中的商品库存字段的数据增加提交订单时传递的商品数量，同时，在预扣减库存字段的数据减去提交订单时传递的商品数量，达到事务回滚的目标。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-执行流程"}},[t._v("#")]),t._v(" 3.2 执行流程")]),t._v(" "),r("p",[t._v("TCC从本质上讲，是一种应用层实现的二阶段提交协议，主要分为三个阶段，分别为Try阶段、Confirm阶段和Cancel阶段。TCC方案的执行流程如图所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-08-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[r("strong",[t._v("（1）Try 阶段")])]),t._v(" "),r("p",[t._v("不会执行任务业务逻辑，仅仅是做业务的一致性检查和预留相应的资源，这些资源能够和其他操作保持隔离。")]),t._v(" "),r("p",[r("strong",[t._v("（2）Confirm 阶段")])]),t._v(" "),r("p",[t._v("做确认提交，当Try阶段所有分支事务执行成功后开始执行 Confirm阶段。通常情况下，采用TCC方案解决分布式事务时会认为 Confirm阶段是不会出错的。也就是说，只要Try阶段的操作执行成功了，Confirm阶段就一定会成功。如果Confirm阶段出错了，此时，就需要引入重试机制或人工处理，对出错的事务进行干预。")]),t._v(" "),r("p",[r("strong",[t._v("（3）Cancel阶段")])]),t._v(" "),r("p",[t._v("是在业务执行异常或出现错误的情况下，需要回滚事务的操作，执行分支事务的取消操作，并且将Try阶段预留的资源释放。通常情况下，采用TCC方案解决分布式事务时，同样会认为Cancel阶段也是一定能够成功的。如果Cancel阶段出错了，也需要引入重试机制或人工处理，对出错的事务进行干预。")]),t._v(" "),r("h3",{attrs:{id:"_3-3-优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-优缺点"}},[t._v("#")]),t._v(" 3.3 优缺点")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);