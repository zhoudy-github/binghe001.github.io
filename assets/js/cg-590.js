(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{884:function(t,r,e){"use strict";e.r(r);var _=e(7),v=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第1章-从多个角度聊聊为何要学习秒杀系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第1章-从多个角度聊聊为何要学习秒杀系统"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第1章：从多个角度聊聊为何要学习秒杀系统")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("视频地址："),r("a",{attrs:{href:"https://t.zsxq.com/0e7Vd3gbo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0e7Vd3gbo"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★☆☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点介绍关于秒杀的一些背景知识，包括：为何会出现秒杀系统、大厂为何会单独研发秒杀系统、技术人为何要学习秒杀系统以及如何才能更好的学习秒杀系统几个方面。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("本章目录如下所示。")]),t._v(" "),r("ul",[r("li",[t._v("为何会出现秒杀场景？")]),t._v(" "),r("li",[t._v("大厂为何研发秒杀系统？")]),t._v(" "),r("li",[t._v("技术人为何学习秒杀系统？")]),t._v(" "),r("li",[t._v("如何更好的学习秒杀系统？")]),t._v(" "),r("li",[t._v("本章总结")])]),t._v(" "),r("p",[t._v("说起秒杀系统，相信很多小伙伴都不陌生，毕竟很多互联网大厂，尤其是大型电商平台每年的双11和618都会进行秒杀大促，这些都是秒杀的典型场景。再比如疫情刚刚爆发时，全国人民在同一时刻抢购口罩，每年春运在12306抢购火车票等等，都是秒杀的场景。那作为计数人的你，是否认真思考过为什么各大头部电商平台要研发秒杀系统吗？而作为技术人的你，又为何需要认真学习秒杀系统吗？")]),t._v(" "),r("p",[t._v("本章，主要跟大家探讨一下为何会出现秒杀场景、大厂为何研发秒杀系统、技术人为何要学习秒杀系统以及如何更好的学习秒杀系统三个问题。")]),t._v(" "),r("h2",{attrs:{id:"为何会出现秒杀场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为何会出现秒杀场景"}},[t._v("#")]),t._v(" 为何会出现秒杀场景？")]),t._v(" "),r("p",[t._v("不知道各位小伙伴有没有了解过，随着社会的不断发展，为何会出现电商平台？其实电商的本质就是在线上满足卖方与买方的需求。卖方可以将自己的商品直接发布到电商平台进行售卖，可以直接卖给消费者，避免中间商赚差价。而买方则可以在电商平台按照实际情况筛选符合自己需求的商品，并下单购买。")]),t._v(" "),r("p",[t._v("如果整个过程中卖方发布的商品数量与买方所需的商品数量相差不大，也就是供求关系相对比较平衡时，卖方与买方相对比较平稳，整个交易过程不会存在大的波动。")]),t._v(" "),r("p",[t._v("如果整个过程中卖方发布的商品数量大于买方所需的商品数量时，也就是供大于求，买方就会有更多的选择来购买哪些商品，此时买方更加主动，而卖方就比较被动。")]),t._v(" "),r("p",[t._v("如果整个过程中卖方发布的商品数量小于买方所需的商品数量时，也就是供不应求，买方购买商品时，没有更多的选择，甚至会出现根本买不到商品的情况，此时买方比较被动，而主动权更多的是在卖方一侧。")]),t._v(" "),r("p",[t._v("如果在电商平台中，出现了供大于求的情况，由于卖方发布的商品数量大于买方的需求量，此时卖方一般都会采用优惠、促销、附加赠品、满减（或者单品）优惠、会员优惠等方式让利给买方，尽最大程度吸引更多的买方进行购买。")]),t._v(" "),r("p",[t._v("如果在电商平台中，出现了供不应求的情况，由于卖方发布的商品数量小于买方的需求量，此时卖方一般就需要根据一定的规则设置营销活动，设置一定的购买门槛和规则，尽量让自身的利益达到最大化。")]),t._v(" "),r("p",[t._v("如果出现了极度供不应求的情况，也就是卖方发布的商品数量远远小于买方的需求量，此时就会出现大量的买方用户去抢购少量商品的现象，而这些少量的商品就会成为极度供不应求的爆品，此时就会出现典型的秒杀场景。")]),t._v(" "),r("h2",{attrs:{id:"大厂为何研发秒杀系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大厂为何研发秒杀系统"}},[t._v("#")]),t._v(" 大厂为何研发秒杀系统？")]),t._v(" "),r("p",[t._v("互联网大厂一般用户基数比较大，并且平台流量比较高。对于头部电商平台来说，除了售卖爆品以外，更多的是在售卖普通商品。")]),t._v(" "),r("p",[t._v("爆品和普通商品一个最大的不同点就是流量不同，爆品短时间内，甚至是同一时刻会出现流量激增的现象。比如每年的双11和618，那些参与秒杀的爆品就会出现流量激增的情况，最直接的体现就是在同一时刻会有大量的用户抢购同一件商品。而普通商品的流量则比较平稳。")]),t._v(" "),r("p",[t._v("针对这两种不同的商品来说，如果互联网大厂，尤其是头部电商平台，如果将这两种商品不加区分的放在一起进行售卖，则势必会由于爆品的流量对普通商品造成冲击，甚至会出现P0级别的严重事故。")]),t._v(" "),r("p",[t._v("因此，互联网大厂，尤其是头部电商平台，都会去单独搭建并研发一套支持瞬时高并发、大流量的秒杀系统。并且对这些秒杀系统的建设都会放在非常重要的地位。")]),t._v(" "),r("p",[t._v("另外，电商平台也可以通过秒杀系统对爆品合理的开展秒杀活动，能够为自身带来稳定的热度和流量，如果在秒杀活动的规则中设置为仅限会员参与秒杀，也会为自身带来一笔VIP费用。同时，由于秒杀对于技术的要求比较高，也会为自身赢得比较好的技术口碑，从而不断增大自身平台在行业的影响力。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=v.exports}}]);