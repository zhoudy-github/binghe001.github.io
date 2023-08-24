(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{989:function(t,e,r){"use strict";r.r(e);var a=r(7),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《seckill秒杀系统》第31章-混合型缓存通用模型设计与实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第31章-混合型缓存通用模型设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第31章：混合型缓存通用模型设计与实现")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("源码获取地址："),e("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("ul",[e("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),e("li",[t._v("本章重点：设计并实现本地缓存+分布式缓存的混合型缓存通用模型，将缓存的数据模型抽象成通用的类模型，在模型设计上，就需要尽最大程度避免缓存击穿、缓存穿透和缓存雪崩的问题，并且要掌握在实际项目中设计缓存数据模型的方法和注意事项。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("秒杀系统要想抗住瞬时高并发、大流量的冲击，除了前置的流量管控、流量清洗和限流等措施外，就需要使用缓存，但是使用缓存又会带来一定的风险，比如：缓存击穿、缓存穿透和缓存雪崩的问题。一旦缓存出现问题，在高并发、大流量场景下，会为秒杀系统带来致命的影响。至于缓存中到底要存储什么样的数据，什么样的数据结构，这些都是需要经过精心设计的。")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[t._v("使用缓存不仅仅可以提升秒杀系统的并发和性能，还能为秒杀系统抗住进入系统内部的大部分流量，但是如果对缓存使用不当，极有可能会出现缓存击穿、缓存穿透和缓存雪崩的问题，轻则系统宕机不可用，重则会为公司带来巨大的经济损失。所以，在缓存设计上，一定要避免缓存出现严重的问题而导致的一系列事故。")]),t._v(" "),e("h2",{attrs:{id:"二、本章诉求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),e("p",[t._v("像秒杀系统这种承载高并发、大流量的系统，只是简单的将数据存储的缓存是远远不够的，缓存的数据模型是需要精心设计的，一方面缓存的数据结构要非常方便后续的业务开发和维护扩展，另一方面也需要尽最大程度避免缓存击穿、缓存穿透和缓存雪崩的问题。")]),t._v(" "),e("p",[t._v("所以，本章，我们就单独对秒杀系统中混合型缓存通用模型进行设计与实现。")]),t._v(" "),e("h2",{attrs:{id:"三、缓存模型设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存模型设计"}},[t._v("#")]),t._v(" 三、缓存模型设计")]),t._v(" "),e("p",[t._v("为了有效避免缓存击穿、缓存穿透和缓存雪崩的问题，一个最基本的缓存设计就是从数据库中查询数据时，无论数据库中是否存在数据，都会将查询的结果信息缓存起来，并设置一定的有效期。后续请求访问缓存时，如果缓存中存在指定Key时，哪怕对应的Value值为空，也会将数据返回给客户端，客户端根据具体情况进行处理。")]),t._v(" "),e("p",[t._v("在缓存模型的业务设计上，如果从数据库中未查询到对应的数据，直接将null或者空字符串等保存到缓存中，一方面是在代码的可能读性上比较差，不便于后期的维护，另一方面对于混合型缓存的实现上缺乏有效的逻辑处理能力。所以，对于缓存的数据模型需要进行精心的设计。")]),t._v(" "),e("p",[t._v("本节，会从缓存通用模型设计与缓存流程设计两个方面对缓存模型进行设计。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-缓存通用模型结构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-缓存通用模型结构设计"}},[t._v("#")]),t._v(" 3.1 缓存通用模型结构设计")]),t._v(" "),e("p",[t._v("在缓存通用模型的设计上，除了最基本的业务数据外，还会提供缓存业务数据是否存在、缓存版本号，后续是否需要重试的通用字段，并且具体的业务数据会通过一个泛型进行设计，总体上做到通用化设计与实现。")]),t._v(" "),e("p",[t._v("缓存通用模型的类结构设计如图31-1所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-08-001.png?raw=true",width:"40%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("可以看到，在秒杀活动列表的缓存模型类结构设计中，包含两个类，分别是SeckillCommonCache类和SeckillBusinessCache类。其中SeckillBusinessCache是一个泛型类，并且会继承SeckillCommonCache类。")]),t._v(" "),e("ul",[e("li",[t._v("exist：boolean类型，表示缓存中是否存在具体的业务数据，true：缓存中存在具体的业务数据，false：缓存中不存在具体的业务数据。")]),t._v(" "),e("li",[t._v("version：Long类型，表示缓存数据的版本号，当接收到客户端请求数据时的版本号大于缓存中的版本号，则说明当前缓存中的数据失效，需要从数据库查询数据后更新到缓存，否则直接返回缓存中的数据。")]),t._v(" "),e("li",[t._v("retryLater：boolean类型，表示是否需要重试，当服务出现异常时，将此值设置为true，告诉客户端需要刷新缓存，客户端接收到需要刷新缓存时，静默处理，稍后重新请求接口即可。")]),t._v(" "),e("li",[t._v("data：泛型T类型，表示具体的业务数据，当从数据库中查询出的数据为空时，此字段为空，exist字段为false，表示缓存中不存在具体的业务数据。")])]),t._v(" "),e("p",[t._v("这种设计能够实现无论数据库中是否存在要查询的数据，缓存中都会存在通用模型结构的数据，能够有效避免缓存穿透的问题，再加上缓存数据失效时，在程序上能够保证同时只能有一个线程去更新缓存中的数据，这就有效避免了缓存击穿和缓存雪崩的问题。")]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=s.exports}}]);