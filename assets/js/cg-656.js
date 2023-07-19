(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{953:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第44章-基于数据库设计并实现库存防超卖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第44章-基于数据库设计并实现库存防超卖"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第44章：基于数据库设计并实现库存防超卖")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：基于数据库实现下单扣减库存时的防超卖问题，重点掌握基于数据库实现商品防超卖的原理和方法，并能将其灵活运用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("下单扣减商品库存在业务上是非常简单的，但是这种简单的业务放到秒杀系统这种超大流量的并发场景，就显得不是那么容易了，一不小心，就可能会出现商品超卖的问题，一旦出现商品超卖，那么后果就是非常严重的了。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("在前面的文章中，我们分析了秒杀系统扣减库存一般采用下单减库存的方式。用户选择商品进行下单时，秒杀系统会扣除用户下单时设置的要购买的商品数量，这看似简单的业务，在高并发大流量的秒杀系统中，如果不经过精心的设计，可能就会造成用户实际下单购买的商品数量远远大于商品参加秒杀活动的实际库存数量，出现库存超卖问题。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("用户下单时，可以借助数据库来解决商品的防超卖问题，在更新数据库中的商品库存时，为更新数据的SQL语句再添加一个条件：只有当前商品的剩余库存大于或者等于用户下单的商品数量时，才会扣减库存，否则，直接提示库存不足，以此来实现防止商品的超卖问题。")]),t._v(" "),r("p",[r("strong",[t._v("在具体的实现过程中，使用一个小技巧，而不是将判断商品的剩余库存是否大于或者等于用户下单的商品数量和扣减商品库存在业务上分成两个步骤执行。如果将判断商品的剩余库存是否大于或者等于用户下单的商品数量和扣减商品库存在业务上分成两个步骤执行，仅仅依靠数据库的话，大概率还是会出现商品超卖的问题。")])]),t._v(" "),r("p",[t._v("那这个小技巧是啥呢？本章，就基于数据库设计并实现库存防超卖的落地方案。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("本节，就从下单流程扩展设计，下单减库存流程设计和下单减库存类结构设计三个方面对流程设计进行简单的介绍。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-下单流程扩展设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下单流程扩展设计"}},[t._v("#")]),t._v(" 3.1 下单流程扩展设计")]),t._v(" "),r("p",[t._v("在下单扣减库存的流程设计中，最终会实现多种方案来防止商品超卖问题，本章，会基于数据库设计并实现商品库存防超卖，除此之外，还会有其他的方案实现商品库存防超卖。如图44-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-24-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("在商品库存防超卖的设计中，会借助SpringBoot的@ConditionalOnProperty注解为每种设计方案的实现指定配置项和对应的Value值，比如基于数据库设计并实现商品库存防超卖的方案借助@ConditionalOnProperty注解指定的配置项为place.order.type，配置的Value值为db。")]),t._v(" "),r("p",[t._v("此时，当SpringBoot的application.yml或者application.properties中的place.order.type配置项的值为db时，项目在启动时，就会默认加载并实例化基于数据库设计并实现商品库存防超卖的方案实现类。最终就会基于数据库实现商品库存防超卖的方案。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-下单减库存流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-下单减库存流程设计"}},[t._v("#")]),t._v(" 3.2 下单减库存流程设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，基于数据库实现库存防超卖时，下单减库存的流程设计如图44-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);