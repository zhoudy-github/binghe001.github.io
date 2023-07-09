(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{897:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第10章-基于ddd快速搭建秒杀系统项目并测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第10章-基于ddd快速搭建秒杀系统项目并测试"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第10章：基于DDD快速搭建秒杀系统项目并测试")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：基于DDD快速搭建秒杀系统项目框架，并对搭建的项目框架进行测试，旨在让小伙伴们从实战过程中快速了解基于DDD架构模式的项目搭建过程，以及掌握DDD架构模式与MVC架构模式的区别。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("经过前面对研发秒杀系统的一系列准备工作，终于到了正式研发秒杀系统的阶段，相信各位小伙伴已经迫不及待想一起研发秒杀系统了。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("截止到目前，我们已经清楚的了解到为何要学习秒杀系统，明确了秒杀系统的目标与挑战、秒杀系统高并发大流量的应对之道，梳理了秒杀系统的需求与业务流程、秒杀系统的技术流程，制定了秒杀系统的总体方案目标，对秒杀系统进行了架构设计，搭建了秒杀系统的基础环境和研发环境以及对秒杀系统的数据模型进行了设计。接下来，就可以搭建秒杀系统的项目结构了。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("在做足充分准备的基础上，基于DDD快速搭建秒杀系统的项目结构，后续基于DDD架构模式开发秒杀系统。项目结构搭建完成后，以获取用户信息为例对项目结构进行测试。旨在让小伙伴们从项目实战过程中快速了解基于DDD架构模式的项目搭建过程，以及掌握DDD架构模式与MVC架构模式的区别。")]),t._v(" "),r("h2",{attrs:{id:"三、项目结构划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、项目结构划分"}},[t._v("#")]),t._v(" 三、项目结构划分")]),t._v(" "),r("p",[t._v("在第6章秒杀系统总体方案目标与架构设计一文中，介绍了DDD业务架构设计，这里，再来回顾下DDD架构模式，DDD架构模式下会将项目总体上分成：展示层、应用层、领域层和基础设施层，如图10-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-10-004.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("在第6章中，提到了，秒杀系统会借鉴DDD的设计思想，但是不会完全按照DDD的方式进行设计，也算是一种对DDD架构设计的灵活变通。秒杀系统借鉴DDD架构设计思想后，总体上会将整个项目对照DDD划分成四层，每一层提供的功能与DDD架构设计中每一层提供的功能类似，但在领域层的职责上与DDD架构设计略有不同。")]),t._v(" "),r("p",[r("strong",[t._v("（1）展示层（seckill-interfaces工程）")])]),t._v(" "),r("p",[t._v("展示层，也叫做用户UI层，是DDD设计的最上层，对外提供API接口，接收客户端请求，解析参数，返回结果数据，并对异常进行处理。")]),t._v(" "),r("p",[r("strong",[t._v("（2）应用层（seckill-application工程）")])]),t._v(" "),r("p",[t._v("应用层，也叫做Application层，应用层主要处理容易变化的业务场景，可对相关的事件、调度和其他聚合操作进行相关的处理。")]),t._v(" "),r("p",[r("strong",[t._v("（3）领域层（seckill-domain工程）")])]),t._v(" "),r("p",[t._v("领域层，也叫做Domain层，领域层可以说是DDD设计的精髓所在，它是将业务系统中相对不变的部分抽象出来封装成领域模型。")]),t._v(" "),r("p",[r("strong",[t._v("在秒杀系统的设计中，领域层基本不会依赖其他层，也不会依赖基础设施层，这里秒杀系统是与DDD设计存在区别的地方。")])]),t._v(" "),r("p",[r("strong",[t._v("（4）基础设施层（seckill-infrastructure工程）")])]),t._v(" "),r("p",[t._v("基础设施层，也叫做Infrastructure层，基础设施层会对其他各层提供通用的基础能力，在秒杀系统中，就包括了缓存、通用工具类、消息、系统的持久化机制等。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);