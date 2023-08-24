(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{966:function(t,r,e){"use strict";e.r(r);var a=e(7),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第9章-秒杀系统数据模型设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第9章-秒杀系统数据模型设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第9章：秒杀系统数据模型设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10AGHUgg8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10AGHUgg8"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：万事俱备，开始对秒杀系统的数据模型进行设计，主要会涉及到用户、秒杀活动、秒杀商品和秒杀订单的数据模型设计。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10AGHUgg8",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10AGHUgg8"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("经过前面对秒杀系统的需求、业务流程、技术流程的梳理，完成了对秒杀系统的架构设计，并对秒杀系统的基础环境和研发环境进行了安装和配置，可以这么说，秒杀系统的前置准备工作基本已经完成。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("正所谓：万事俱备，只欠东风，前面我们为设计和研发秒杀系统做了那么多的准备，目前在正式搭建项目并研发代码之前，还需要梳理清楚整个秒杀系统所包含的数据模型，只有将这些数据模型梳理清楚，才能更好的指导我们研发秒杀系统。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("在整个秒杀系统的设计中，尽量简化复杂的流程设计和无关紧要的业务设计，保留最核心的功能，让大家从秒杀系统的设计中领略如何编写高并发程序，并从总体上对系统的优化处理做到心中有数。秒杀系统简化无关紧要的业务后，主要涉及到用户、秒杀活动、秒杀商品和秒杀订单。")]),t._v(" "),r("p",[r("strong",[t._v("另外，这个秒杀系统专栏不仅仅是带着大家写业务代码，更重要的是的系统的调优过程和解决并发瓶颈的思路和方法，好了，马上开始今天的正题。")])]),t._v(" "),r("h2",{attrs:{id:"三、数据模型设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、数据模型设计"}},[t._v("#")]),t._v(" 三、数据模型设计")]),t._v(" "),r("p",[t._v("数据模型对于系统的建设是至关重要的，无论一个系统如何建设和运行，最终这个系统所产生的价值，几乎都是以数据的形式呈现出来，要想体现系统的数据价值，就需要将这些数据收集并存储起来，而无论是对数据的采集、清洗，还是对数据的存储、分析和统计，都是需要建立对应的数据模型。就连时下非常火热的ChatGPT，都是需要建立在非常丰富的数据模型之上来运行的。")]),t._v(" "),r("p",[t._v("本节，就本着最简化的原则来设计用户、秒杀活动、秒杀商品和秒杀订单的数据模型。")]),t._v(" "),r("p",[r("strong",[t._v("注意：数据库脚本已经存放到项目的"),r("code",[t._v("environment/mysql/init")]),t._v("目录下，脚本文件为"),r("code",[t._v("seckill_init.sql")]),t._v("，在搭建秒杀研发环境时，会自动将数据脚本导入到MySQL数据库，无需自己重新运行脚本。")])]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=n.exports}}]);