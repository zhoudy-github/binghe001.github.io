(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{1021:function(s,t,e){"use strict";e.r(t);var a=e(7),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《seckill秒杀系统》第64章-下单流程整合订单分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第64章-下单流程整合订单分库分表"}},[s._v("#")]),s._v(" 《Seckill秒杀系统》第64章：下单流程整合订单分库分表")]),s._v(" "),t("p",[s._v("作者：冰河\n"),t("br"),s._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),t("ul",[t("li",[s._v("本章难度：★★★☆☆")]),s._v(" "),t("li",[s._v("本章重点：重点理解并掌握秒杀系统下单流程整合订单分库分表的实现方式，重点掌握订单数据的分库分表与下单流程的整合实现，并能够做到举一反三将分库分表设计的核心思想与落地方案灵活运用到自身实际项目中。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("在前面的文章中，我们已经实现了对秒杀商品库存的分库分表和分桶设计实现，对数据进行分库分表和分桶设计后，能够极大的提升库存数据的读写性能。并且对于秒杀订单来说，我们也设计了秒杀订单的分库分表方案，并且对订单分库分表的逻辑进行了实现，那如何整合到秒杀的抢购下单流程中呢？")]),s._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("在秒杀系统中，除了商品库存部分需要承载高并发的读写场景外，订单模块也需要承载一定的并发读写场景，尤其像在异步下单场景下，用户抢购下单后，请求就会立即返回，后续用户会通过轮询的方式查询抢购下单的状态。那么，对于订单数据来说，实现分库分表的逻辑后，那又该如何整合到下单的业务流程中呢？")]),s._v(" "),t("h2",{attrs:{id:"二、本章诉求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[s._v("#")]),s._v(" 二、本章诉求")]),s._v(" "),t("p",[s._v("从源码层面实现下单流程整合订单分库分表，并能够按照用户维度和商品维度对订单数据进行分库分表，最终能够根据用户和商品查看订单数据。")]),s._v(" "),t("p",[t("strong",[s._v("注意：由于本章涉及到的源码细节比较多，本章只会给出实现下单流程整合订单分库分表最核心的源码部分，对应的源码其他细节部分，大家可以阅读本章对应的源码分支，这里不再赘述。")])]),s._v(" "),t("h2",{attrs:{id:"三、整合流程实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、整合流程实现"}},[s._v("#")]),s._v(" 三、整合流程实现")]),s._v(" "),t("p",[s._v("下单流程整合订单分库分表最核心的逻辑就是在订单微服务中，另外，还有一些细节上的调整，比如发送事务消息、下单失败的数据回滚等等。本节，就简单介绍下单流程整合订单分库分表最核心的流程，关于其他细节部分，大家可以阅读本章对应的源码分支。")]),s._v(" "),t("h3",{attrs:{id:"_3-1-修改领域层源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-修改领域层源码"}},[s._v("#")]),s._v(" 3.1 修改领域层源码")]),s._v(" "),t("p",[t("strong",[s._v("（1）修改SeckillOrderRepository接口")])]),s._v(" "),t("p",[s._v("主要是在SeckillOrderRepository接口中添加一个根据商品id获取订单列表数据的getSeckillOrderByGoodsId()方法。")]),s._v(" "),t("p",[s._v("SeckillOrderRepository接口的源码详见：seckill-order-domain工程下的io.binghe.seckill.order.domain.repository.SeckillOrderRepository。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSeckillOrderByGoodsId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("（2）修改SeckillOrderDomainService接口")])]),s._v(" "),t("p",[s._v("主要是在SeckillOrderDomainService接口中添加根据根据商品id获取订单列表的getSeckillOrderByGoodsId()方法，以userId作为分片键删除订单的deleteOrderShardingUserId()方法和以goodsId作为分片键删除订单的deleteOrderShardingGoodsId()方法。")]),s._v(" "),t("p",[s._v("SeckillOrderDomainService接口的源码详见：seckill-order-domain工程下的io.binghe.seckill.order.domain.service.SeckillOrderDomainService。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSeckillOrderByGoodsId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteOrderShardingUserId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" orderId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteOrderShardingGoodsId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" orderId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("（3）修改SeckillOrderDomainServiceImpl类")])]),s._v(" "),t("p",[s._v("主要是在SeckillOrderDomainServiceImpl类中实现在SeckillOrderDomainService接口中新增的方法。")]),s._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[s._v("#")]),s._v(" 查看完整文章")]),s._v(" "),t("p",[s._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=r.exports}}]);