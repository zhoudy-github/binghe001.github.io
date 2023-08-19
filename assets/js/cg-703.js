(window.webpackJsonp=window.webpackJsonp||[]).push([[703],{1001:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第43章-秒杀扣减库存设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第43章-秒杀扣减库存设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第43章：秒杀扣减库存设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：介绍下单扣减库存的三种方案，对扣减库存可能出现的问题列出简单的解决方案，并对秒杀系统中通常采用的库存扣减方案进行简单的介绍。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("提交订单扣减商品库存的逻辑看上去非常简单，但是在秒杀系统这种超大流量的并发场景下，简单的扣减库存逻辑如果设计不当，也会出现各种问题。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("提交订单扣减商品库存的逻辑虽然听起来非常简单，但是在秒杀系统这种超大流量的并发场景下，如果对下单扣减库存的逻辑设计不当，就会出现各种出问题，甚至会出现非常严重的商品超卖问题。一旦出现商品超卖问题，就会问商家和平台带来巨额经济损失。所以，在秒杀系统这种超大流量的并发场景下，一定要对提交订单扣减商品库存进行精心的设计，尽最大程度避免出现商品库存超卖问题。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("总体来说，扣减库存可以分为下单减库存、付款减库存和预扣减库存三种方式。本章，就简单介绍一下这三种扣减库存的方式，每种方式存在的问题和对应的解决方案，以及秒杀系统中通常会使用的扣减库存方案。")]),t._v(" "),r("h2",{attrs:{id:"三、下单减库存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、下单减库存"}},[t._v("#")]),t._v(" 三、下单减库存")]),t._v(" "),r("p",[t._v("下单扣减库存的方式比较容易理解，就是用户提交订单后，在商品的总库存中减去用户购买的商品数量。这种减库存的方式是最简单的，也是将商品库存统计得最准确的。但是经常会碰到用户提交订单之后不付款的问题。")]),t._v(" "),r("p",[t._v("这就会存在一个问题：恶意刷单。例如，用户A作为商家参与了某平台的“双11”秒杀活动，该平台扣减库存的方式为下单减库存，如果用户A的竞争对手通过恶意下单的方式将用户A参与秒杀的商品全部下单，让用户A的商品库存减为0，但是并不付款，那么用户A参与“双11”秒杀的商品就不能正常售卖了。这就是下单减库存存在的问题。")]),t._v(" "),r("h2",{attrs:{id:"四、付款减库存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、付款减库存"}},[t._v("#")]),t._v(" 四、付款减库存")]),t._v(" "),r("p",[t._v("既然下单减库存存在问题，那么再来分析一下付款减库存。库存减库存就是在用户提交订单后，并不会立刻扣减商品的库存，而是等到用户真正付款后才会扣减库存。这种方式会经常遇到用户明明下单成功了，却提示不能付款的问题。 其原因就是当某个用户下单后，执行付款操作时，相应的商品可能已经被其他人买走了。")]),t._v(" "),r("p",[t._v("付款减库存有可能造成另一个更为严重的后果：库存超卖。因为在用户提交订单时，系统不会扣减库存，所以最终用户成功下单的订单数量可能远远大于商品的库存数量。")]),t._v(" "),r("h2",{attrs:{id:"五、预扣减库存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、预扣减库存"}},[t._v("#")]),t._v(" 五、预扣减库存")]),t._v(" "),r("p",[t._v("预扣减库存比前面两种方式复杂一些。用户提交订单后，为用户预留购买数量的商品库存，例如预留10min，一旦超过10min就释放为用户预留的库存，其他的用户可以继续下单购买。用户下单预扣减库存之后，在付款时，系统会检验对应的订单是否存在有效的预留库存，如果存在，则真正扣减库存并付款。如果不存在，则再次尝试预扣减库存。如果库存不足，则不再付款。如果预扣减库存成功，则真正扣减库存并付款。")]),t._v(" "),r("p",[t._v("那么，预扣减库存是否能够解决下单减库存和付款减库存两种方式中的问题呢？答案是，并没有彻底解决。")]),t._v(" "),r("p",[t._v("例如，对恶意下单来说，虽然将有效的付款时间控制在一小段时间内，但是恶意用户完全有可能在一段时间后再次下单。也有可能在开始下单时，就一次性选择所有的库存下单。仍然不能彻底解决问题。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);