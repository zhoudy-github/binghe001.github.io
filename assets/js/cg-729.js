(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1026:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第69章-预约系统业务流程与接口设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第69章-预约系统业务流程与接口设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第69章：预约系统业务流程与接口设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：从运营端和用户端两个角度梳理预约系统的业务流程，从整体上了解预约系统的业务流程后，对预约系统的后端接口进行相应的设计。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("对于预约系统来说，首先需要在秒杀活动开始前设置秒杀商品的预约配置信息，只有配置了预约信息的秒杀商品，用户在抢购秒杀商品前，才会对其进行预约。在下单时，才会校验用户是否已经预约过对应的商品，如果没有对秒杀商品配置预约信息，则用户在抢购秒杀商品前，不需要提前进行预约，秒杀开始时直接抢购即可。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("预约系统从业务上来讲，主要分为C端和B端业务，以及定时调度业务。C端业务主要是面向用户端的预约入口，B端业务主要是面向运营端的预约管理，定时调度业务主要是在秒杀开始前，对成功预约秒杀商品的用户发送短信或者消息通知，提醒其及时参与秒杀抢购活动，同时，对于秒杀商品当前预约人数，也会通过定时调度任务来同步数据。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("从用户端和运营端两种不同的角度梳理预约系统的业务流程，了解用户和运营分别可以在预约系统中执行哪些操作，并对预约系统提供的接口进行简单的设计。")]),t._v(" "),r("p",[r("strong",[t._v("注意：对于预约系统的定时调度业务来说，会基于XXL-JOB单独进行实现，这里不再赘述。")])]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("对于预约系统而言，需要充分考虑使用预约系统的场景和人群，毫无疑问，用户在预约系统中可以预约秒杀商品，取消预约，并且能够查看自己预约了哪些商品。对于运营人员来说，需要对秒杀商品发布的预约配置信息进行全面管理，并且能够查看某件秒杀商品下的预约用户。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-运营端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-运营端流程设计"}},[t._v("#")]),t._v(" 3.1 运营端流程设计")]),t._v(" "),r("p",[t._v("可以想象一下，如果你是运营人员，你最想如何管理预约系统呢？接下来，就站在运营人员的角度来简单梳理下，预约系统需要为运营提供的功能。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-08-10-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，运营人员可以在预约系统中发布秒杀商品的预约配置、更新秒杀商品的预约配置、上线和下线秒杀商品的预约配置、查看秒杀商品的预约配置和查看秒杀商品预约用户列表。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-用户端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-用户端流程设计"}},[t._v("#")]),t._v(" 3.2 用户端流程设计")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);