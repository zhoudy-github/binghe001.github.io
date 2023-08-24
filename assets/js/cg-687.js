(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{984:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第27章-混合型缓存设计场景与原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第27章-混合型缓存设计场景与原则"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第27章：混合型缓存设计场景与原则")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：对秒杀系统进行缓存设计，采用本地缓存+分布式缓存的混合架构设计方案，来让秒杀系统抗住瞬时高并发、大流量的场景。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("秒杀系统就是为高并发、大流量而生，大部分场景都是瞬时高并发、大流量、读多写少的场景，在这些场景下，如果将流量直接打到数据库，则数据库很有可能扛不住这么大的压力而瞬间崩溃宕机。所以，在秒杀系统的建设中，缓存成了秒杀系统必不可少的设计环节。")]),t._v(" "),r("p",[t._v("从今天开始，正式进入一步步完善和优化秒杀系统的阶段，努力将秒杀系统打造成可抗瞬时百万流量的高并发秒杀系统。好了，开始今天的内容吧。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("在前面的文章中，基本完成了一个秒杀系统的核心业务开发，也重现了秒杀系统中的两个经典问题：刷单流量问题和库存超卖问题。如果没有对秒杀系统进行精心的设计，那很容易出现这两个问题，这两个问题是在建设秒杀系统中需要重点关注和重点解决的问题。")]),t._v(" "),r("p",[t._v("在后续的文章中，会一步步对秒杀系统进行极致的优化，使其一步步成为可抗瞬时百万流量的高并发秒杀系统，在不断完善和优化的过程中，以上两个经典问题自然也就会得到很好的解决。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("秒杀系统在承接瞬时高并发流量时，如果将流量直接打到数据库，那数据库很有可能因为扛不住瞬间的高并发流量而导致崩溃和宕机。所以，需要对秒杀系统进行极致的缓存设计，让大部分流量走缓存。同时，在设计缓存架构方案时，为了进一步提升性能，将采用本地缓存+分布式缓存的混合型缓存设计方案，让本地缓存抗大部分流量，分布式缓存次之，数据库再次之，如图27-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-02-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("并且针对秒杀系统这种瞬时并发量高的场景，在设计缓存时，需要注意的技巧：优先读取本地缓存数据，如果本地缓存失效，则读取分布式缓存数据，并且在同一时刻，只能有一个线程更新本地缓存，防止缓存击穿。没有获取到本地缓存更新机会的其他线程，需要立即返回而不是原地等待。如果分布式缓存失效时，在同一时刻，也只能有一个线程更新分布式缓存，防止缓存击穿。没有获取到分布式缓存更新机会的线程，也需要理解返回而不是原地等待。")]),t._v(" "),r("p",[t._v("本章，就对秒杀系统采用的本地缓存+分布式缓存的混合架构设计方案进行总体设计。")]),t._v(" "),r("h2",{attrs:{id:"三、缓存使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存使用场景"}},[t._v("#")]),t._v(" 三、缓存使用场景")]),t._v(" "),r("p",[t._v("秒杀系统属于典型的读多写少的高并发系统，应对这种场景的一个有效措施就是使用缓存，不管是单机JVM缓存还是以Redis为例的分布式缓存，其读写性能都会比数据库高得多。所以，在秒杀系统中，为了应对高并发、大流量的业务场景，缓存自然也就成为建设秒杀系统过程中必不可少的环节。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-秒杀系统接口分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-秒杀系统接口分析"}},[t._v("#")]),t._v(" 3.1 秒杀系统接口分析")]),t._v(" "),r("p",[t._v("在我们实现的秒杀系统中，主要是对一些读数据的接口设计缓存策略，而在这些读数据的接口中，获取秒杀活动列表、获取秒杀活动详情、获取秒杀商品列表和获取秒杀商品详情的接口流量比其他接口高。尤其是获取秒杀商品列表和获取秒杀商品详情的接口QPS一般会高于获取秒杀活动列表和秒杀活动详情的接口，毕竟大部分用户在秒杀开始前就已经进入到秒杀详情页，当然这也不是绝对的，还是要看秒杀系统对于这些接口的设计。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);