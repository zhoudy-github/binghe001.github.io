(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{929:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第37章-秒杀活动监听缓存领域事件的设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第37章-秒杀活动监听缓存领域事件的设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第37章：秒杀活动监听缓存领域事件的设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：介绍秒杀活动监听缓存领域事件的设计与实现，重点掌握在DDD领域架构模式下，采用Cola框架监听秒杀活动事件变更的方法，并能够灵活运用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("像秒杀这种高并发、大流量的业务场景，在同一个方法中更新秒杀活动的数据库数据和缓存数据，可能会造成数据库数据和缓存数据不一致的问题。如果在更新秒杀活动的数据库数据后清除缓存数据，就有可能由于缓存中不存在数据，而导致大量线程直接打入数据库，致使数据库由于扛不住瞬时的高并发流量而宕机崩溃。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于秒杀活动数据的变更，在执行完操作数据库的业务后，对外发布一个事件，然后立即返回。由单独的领域服务监听对应的事件，接收到事件后，去更新秒杀活动对应的缓存数据，这种以发布领域事件的方式更新秒杀活动的缓存，既解耦了更新数据库数据和更新缓存数据的逻辑，又能够提高程序响应的性能，并且又提高了程序的可读性和可维护性，真是一举多得。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("添加秒杀活动和更新秒杀活动状态时，在领域层对外发布一个缓存领域事件，由应用层监听对应的缓存领域事件，在监听到的事件中，更新对应的缓存数据。本章，就对监听秒杀活动缓存领域事件的逻辑进行设计和实现。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("本节，从监听缓存领域事件的流程和类结构两个方面来对监听缓存领域事件的流程进行简单的设计。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-监听流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-监听流程设计"}},[t._v("#")]),t._v(" 3.1 监听流程设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，针对秒杀系统中缓存数据的变更，监听领域事件的流程如图37-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-15-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，领域层将事件封装成对应的事件模型发布到Cola，应用层会监听Cola中的事件，并且接收对应的事件，接收到事件后同步活动列表和活动详情的缓存。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-类结构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-类结构设计"}},[t._v("#")]),t._v(" 3.2 类结构设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，监听缓存领域事件涉及到的类结构如图37-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);