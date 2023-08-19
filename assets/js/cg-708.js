(window.webpackJsonp=window.webpackJsonp||[]).push([[708],{1006:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第48章-重现分布式事务问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第48章-重现分布式事务问题"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第48章：重现分布式事务问题")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点理解分布式事务产生的场景，重现秒杀系统拆分后出现的分布式事务问题，重点理解拆分秒杀系统后出现分布式事务问题的原因。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("秒系系统由单体应用拆分为微服务后，由于订单微服务和商品微服务不在同一个服务内。如果只是使用Spring来管理事务的话，用户下单时，扣减完商品库存，如果订单微服务由于某种原因抛出异常导致事务回滚，则可能会导致商品库存与订单数据不一致的问题，此时就会产生分布式事务的问题。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("星球的小伙伴也说了，秒杀系统咱绝对不能玩单机，太特么low了，咱必须微服务，而且每个微服务的架构也必须是DDD才行。这不，最近将秒杀系统重构了，重构的秒杀系统总体上会分为：用户微服务、秒杀活动微服务、秒杀商品微服务和秒杀订单微服务。将秒杀系统拆分后，第一个要面对的问题就是数据的一致性问题，也就是分布式事务问题。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("将秒杀系统拆分为用户微服务、秒杀活动微服务、秒杀商品微服务和秒杀订单微服务之后，目前默认还是使用Spring来管理事务，用户下单时，如果系统一切正常的话，会成功下单并扣减库存。但如果用户下单时，订单微服务调用商品微服务扣减完商品库存，如果订单微服务由于某种原因抛出异常导致事务回滚，此时商品微服务扣减商品库存的事务已经提交，则可能会导致商品库存与订单数据不一致的问题，此时就会产生分布式事务的问题。")]),t._v(" "),r("p",[t._v("本章，就重现用户下单并扣减商品库存的分布式事务问题。")]),t._v(" "),r("h2",{attrs:{id:"三、分布式事务产生的场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、分布式事务产生的场景"}},[t._v("#")]),t._v(" 三、分布式事务产生的场景")]),t._v(" "),r("p",[t._v("在正式重现拆分秒杀系统后产生的分布式事务问题之前，容我再啰嗦下分布式事务产生的场景，真正理解了分布式事务产生的场景，那重现拆分秒杀系统后产生的分布式事务问题也就不难了。分布式事务产生的场景摘录自《深入理解分布式事务：原理与实战》一书，想看完整内容的话，小伙伴们可以阅读《深入理解分布式事务：原理与实战》一书。好了，不啰嗦了，上菜。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-概述"}},[t._v("#")]),t._v(" 3.1 概述")]),t._v(" "),r("p",[t._v("将一个大的应用系统拆分为多个可以独立部署的应用服务，需要各个服务远程协作才能完成某些事务操作，这就涉及分布式事务的问题。总体来讲，分布式事务会在三种场景产生，分别是跨JVM进程、跨数据库实例和多服务访问单数据库。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-跨jvm进程产生分布式事务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-跨jvm进程产生分布式事务"}},[t._v("#")]),t._v(" 3.2 跨JVM进程产生分布式事务")]),t._v(" "),r("p",[t._v("将单体项目拆分为分布式、微服务项目之后，各个服务之间通过远程REST或者RPC调用来协同完成业务操作。典型的场景就是：商城系统中的订单微服务和库存微服务，用户在下单时会访问订单微服务。订单微服务在生成订单记录时，会调用库存微服务来扣减库存。各个微服务是部署在不同的JVM进程中的，此时，就会产生跨JVM进程而导致的分布式事务问题。")]),t._v(" "),r("p",[t._v("商城系统中跨JVM进程产生分布式事务的场景如图48-1所示")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-05-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);