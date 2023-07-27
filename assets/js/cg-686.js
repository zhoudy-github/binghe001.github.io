(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{984:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第55章-异步化下单流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第55章-异步化下单流程设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第55章：异步化下单流程设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点理解并掌握异步化下单的流程设计，实现同步下单流程与异步下单流程的无缝切换设计，掌握在异步化下单流程中的下单许可流程设计。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面实现的秒杀下单流程中，实现了基于数据库防超卖下单，基于分布式锁防超卖下单和基于Lua脚本防超卖下单，但是这些下单方式可以认为是按照同步下单的方式设计的，只不过在秒杀下单时，我们支持基于可靠消息最终一致性分布式事务解决方案来解决分布式事务问题。如果在高并发大流量场景下，采用同步的思想设计下单流程，可能就会由于巨大的瞬时流量而造成系统卡顿甚至宕机。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于秒杀系统来说，需要承接瞬时的高并发、大流量业务，除了需要保证数据的一致性以外，系统能否承受超高的并发量，能否有极致的响应性能，这些都是衡量秒杀系统的重要指标。因为秒杀系统短时间内就会涌入大量的用户来抢购数量有限的部分商品，这就对秒杀系统的并发量和性能有极高的要求。所以，在秒杀系统最核心的抢购下单流程中，需要进行精心的设计。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("进一步优化秒杀系统下单流程设计，将秒杀系统下单流程扩展成同时兼容同步下单流程和异步下单流程，并支持两种下单流程的无缝切换。并且，为了进一步优化真正进入秒杀系统的下单流量，对下单流程增加下单许可设计，进入秒杀系统的流量只有获取到下单许可时，才有资格抢购下单。")]),t._v(" "),r("h2",{attrs:{id:"三、异步下单概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、异步下单概述"}},[t._v("#")]),t._v(" 三、异步下单概述")]),t._v(" "),r("p",[t._v("在前面实现的秒杀下单流程中，基本是通过缓存预扣减库存+数据库扣减库存的方案，当流量到来时，缓存可以抵挡一部分流量，这种方案的优点是实现简单，适合中小型秒杀活动，能应对中小型秒杀活动流量的同时，也能在一定程度上保证数据的安全。")]),t._v(" "),r("p",[t._v("但是如果需要进一步提升下单流量应对高并发、大流量的业务场景，进一步提升系统的处理能力，并提升用户体验，那该怎么做呢？")]),t._v(" "),r("p",[t._v("了解过秒杀系统的小伙伴一般都知道，秒杀系统存在流量突刺现象。例如，每年春运时，12306网站的访问量是非常大的，但是网站平时的访问量却是比较平缓的，也就是说，每年春运时节，12306网站的访问量会出现瞬时突增的现象。又比如，各大头部电商平台平时的访问量是比较平缓的，当每年的618和双11时，尤其是618和双11的前几分钟，访问量会呈现瞬时突增的现象。再比如，小米秒杀系统，在上午10点开售商品，10点前的访问量比较平缓，10点时同样会出现并发量瞬时突增的现象。如图55-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-20-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("通过对这种瞬时并发流量进行异步削峰，可以将瞬时突刺流量变得平缓，如图55-2所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-20-002.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("通过对比图55-1和图55-2可以看出，对瞬时秒杀流量进行异步削峰后，能够拉长瞬时流量的处理时间，削平流量突刺，最终提升系统的整体吞吐量。")]),t._v(" "),r("h2",{attrs:{id:"四、异步下单设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、异步下单设计"}},[t._v("#")]),t._v(" 四、异步下单设计")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);