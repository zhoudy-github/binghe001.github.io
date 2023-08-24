(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{1018:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第61章-下单流程整合商品库存分桶"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第61章-下单流程整合商品库存分桶"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第61章：下单流程整合商品库存分桶")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点理解并掌握秒杀系统抢购下单流程整合商品库存分桶的逻辑实现，重点掌握商品分桶库存在下单流程中的实现，并能够将分库分表与分桶设计的核心思想与落地方案灵活运用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，我们已经实现了商品库存的分库分表设计与编码，从实现方案到代码落地，完美的实现了商品库存在高并发、大流量下的分库分表与分桶的设计和实现。商品库存服务的性能从数据存储层面又得到了大幅度的提升。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于商品库存来说，我们已经将商品库存服务从商品服务中独立出来，并从存储层面实现了商品库存的分库分表和分桶的设计与实现。可以这么说，商品的库存服务的整体性能得到了极大的提升。既然商品的库存服务采用了独立服务、分库分表和分桶的模式进行了重新实现。那又要如何在尽量不影响之前功能的基础上，将分库分表和分桶后的库存整合到下单流程呢？")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("在不影响基于数据库下单、基于分布式锁下单和基于Lua脚本下单的前提下，将分库分表和分桶后的库存服务整合到下单流程中。也就是说，在原有下单模式的基础上，新增基于分桶库存的下单模式。")]),t._v(" "),r("p",[t._v("对于新增的分桶库存下单流程中，要支持分布式事务的实现，确保商品订单和商品库存的数据一致性。")]),t._v(" "),r("p",[r("strong",[t._v("注意：由于本章涉及到的源码细节比较多，本章只会给出下单流程整合分桶库存最核心的源码部分，对应的源码其他细节部分，大家可以阅读本章对应的源码分支，这里不再赘述。")])]),t._v(" "),r("h2",{attrs:{id:"三、分桶模式下单流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、分桶模式下单流程"}},[t._v("#")]),t._v(" 三、分桶模式下单流程")]),t._v(" "),r("p",[t._v("对于分桶模式下单流程来说，真正下单前扣减的是分桶库存的缓存数据，要与之前扣减商品的库存缓存数据分开。对于基于数据库下单、基于分布式锁下单和基于Lua脚本下单来说，下单之前还是扣减商品的库存缓存数据。而基于库存分桶模式下单时，扣减的是商品分桶库存的缓存数据。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-用户分桶路由设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-用户分桶路由设计"}},[t._v("#")]),t._v(" 3.1 用户分桶路由设计")]),t._v(" "),r("p",[t._v("当用户抢购下单时，会根据分桶的数量对用户的id进行取模来定位对应的库存分桶，比如用户的id为10001，目前库存的分桶数量设置为5，则用户抢购下单时，会将当前用户抢购下单时，扣减商品库存的请求路由到分桶1，如图61-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-25-004.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("用户id为10002的用户抢购下单时，扣减商品库存的请求会被路由到分桶2，如图61-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);