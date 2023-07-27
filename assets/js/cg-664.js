(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{961:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第33章-活动详情混合型缓存设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第33章-活动详情混合型缓存设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第33章：活动详情混合型缓存设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：秒杀活动详情实现混合型缓存设计与开发，掌握高并发场景下的缓存实现方案，重点了解并掌握如何有效避免缓存击穿、缓存穿透和缓存雪崩的方案。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("用户在参与秒杀活动时，需要进入秒杀活动详情，查看参与当前秒杀活动的商品列表，选择自己心仪的商品进行抢购，在秒杀活动开始前，会有大量用户进入对应的秒杀活动。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀活动开始前，会有大量用户进入对应的秒杀活动详情，查看参与秒杀活动的商品列表，此时会对秒杀活动详情接口产生较大的流量压力。为了系统的稳定性，同样需要对秒杀活动详情接口进行精心的缓存设计。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对秒杀活动详情接口进行本地缓存+分布式缓存的混合型缓存设计与实现，在访问秒杀活动详情接口时，优先从本地缓存获取数据，如果本地缓存不存在具体的业务数据，则从分布式缓存中获取数据，并且同一时刻只能有一个线程更新本地缓存数据。如果从分布式缓存获取数据时，分布式缓存中不存在具体的业务数据，则此时同一时刻只能有一个线程访问数据库，查询到业务数据后，将数据更新到缓存中。其他没有获取到访问数据库机会的线程，快速返回，不占用系统资源。")]),t._v(" "),r("h2",{attrs:{id:"三、混合型缓存设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、混合型缓存设计"}},[t._v("#")]),t._v(" 三、混合型缓存设计")]),t._v(" "),r("p",[t._v("实现秒杀活动详情的混合型缓存时，同样需要重点考虑并避免缓存击穿、穿透和雪崩的问题，因此，在秒杀活动详情接口的混合型缓存的设计上，同样需要对混合型缓存的执行流程进行精心的设计。本节，就对秒杀活动详情混合型缓存的流程设计和和类结构设计进行简单的介绍。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-流程设计"}},[t._v("#")]),t._v(" 3.1 流程设计")]),t._v(" "),r("p",[t._v("关于活动详情混合型缓存的执行流程如图33-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-10-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("整体流程如下所示。")]),t._v(" "),r("p",[t._v("（1）获取秒杀活动详情数据时，先获取本地缓存数据。")]),t._v(" "),r("p",[t._v("（2）如果本地缓存存在数据，则执行第（3）步，否则执行第（5）步。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);