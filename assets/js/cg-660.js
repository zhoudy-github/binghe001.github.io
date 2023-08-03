(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{958:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第29章-混合型缓存通用代码设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第29章-混合型缓存通用代码设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第29章：混合型缓存通用代码设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：混合型缓存就是本地缓存+分布式缓存，本章就从代码层面来设计和实现混合型缓存的通用代码，旨在让小伙伴们学会良好的代码设计，提升编码能力。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("具备良好的编码能力是对一个程序员最基本的要求，对于企业来说，谁也不想招一个只会写CRUD，不注重代码优雅和性能的程序员，不然，久而久之，项目就成了“屎山”，及其难以维护。对于程序员来说，谁也不想自己写的代码被别人说成是“垃圾”和”狗屎“。所以，写代码的时候兼顾代码的优雅性和性能是非常重要的。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于一个系统来说，无论设计的多么优雅，也或是功能多么强大，性能和并发多么高，可靠性多么稳固，最终都是要落地到代码上的。代码健壮，在一定程度上系统稳定性就高。代码优雅，在一定程度上维护性就高。代码性能高，在一定程度上系统整体并发度就高，性能就高。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("本地缓存+分布式缓存的混合型缓存架构设计，不仅能够提升秒杀系统读写数据的性能，还能在代码层面抗住秒杀系统的大部分流量，不至于让流量直接打入数据库。那么，如果要将本地缓存+分布式缓存的混合型缓存落地到代码，该怎么实现呢？")]),t._v(" "),r("p",[t._v("本章，就从代码层面对秒杀系统混合型缓存进行代码设计与实现。")]),t._v(" "),r("h2",{attrs:{id:"三、代码设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、代码设计"}},[t._v("#")]),t._v(" 三、代码设计")]),t._v(" "),r("p",[t._v("在设计混合型通用代码时，将会从流量缓存防线设计、代码扩展性设计和代码类结构设计等方面进行详细的说明。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-流量缓存防线设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-流量缓存防线设计"}},[t._v("#")]),t._v(" 3.1 流量缓存防线设计")]),t._v(" "),r("p",[t._v("在正式设计代码之前，先来回顾一张图，如图29-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-04-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，在秒杀系统中本地缓存和分布式缓存相结合，能够抗住进入秒杀系统内部的大部分流量。并且在技术选型上，本地缓存默认基于Guava Cache实现，分布式缓存则默认基于Redis实现。并且本地缓存不仅仅只是支持Guava Cache，分布式缓存不仅仅只是支持Redis，在代码层面，都是面向接口编程，而非面向具体实现类编程，不管是本地缓存还是分布式缓存，都可以根据简单的配置切换具体的实现方式。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-代码扩展性设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-代码扩展性设计"}},[t._v("#")]),t._v(" 3.2 代码扩展性设计")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);