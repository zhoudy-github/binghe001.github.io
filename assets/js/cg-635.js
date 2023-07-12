(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{932:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第40章-秒杀商品发送缓存领域事件的设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第40章-秒杀商品发送缓存领域事件的设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第40章：秒杀商品发送缓存领域事件的设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：介绍秒杀商品发送缓存领域事件的设计与实现，重点掌握在DDD领域架构模式下，采用Cola框架发送秒杀商品事件变更的方法，并能够灵活运用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在秒杀系统运营管理端，添加完秒杀商品和更新秒杀商品状态后，会在领域层对外发送缓存领域事件，应用层会监听这些事件，收到事件后更新缓存中的数据。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀商品监听缓存领域事件的逻辑已经在前面的文章中实现，也就是说，目前已经做好了监听事件的准备，只要有事件发送过来，就会收到相应的事件，从而能够及时更新缓存中的数据。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("实现秒杀系统中添加秒杀商品和变更秒杀商品状态时，由领域层对外发布相应的缓存领域事件。这些缓存领域事件会被发送到Cola中，由应用层监听Cola中的事件，接收到事件后，会及时更新缓存中的数据。本章，就对秒杀商品发送缓存领域事件的流程进行设计与实现。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("本节，从发送缓存领域事件的流程和类结构两个方面来对监听缓存领域事件的流程进行简单的设计。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-发送流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-发送流程设计"}},[t._v("#")]),t._v(" 3.1 发送流程设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，针对秒杀系统中缓存数据的变更，发送领域事件的流程如图40-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-19-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，添加秒杀商品和更新秒杀商品状态后，领域层将事件封装成对应的事件模型发布到Cola，应用层会监听Cola中的事件，并且接收对应的事件，接收到事件后同步商品列表和商品详情的缓存。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-类结构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-类结构设计"}},[t._v("#")]),t._v(" 3.2 类结构设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，发送缓存领域事件涉及到的类结构如图40-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);