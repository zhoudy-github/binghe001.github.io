(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{930:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第22章-秒杀订单后端业务与接口开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第22章-秒杀订单后端业务与接口开发"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第22章：秒杀订单后端业务与接口开发")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：完成秒杀订单业务后端接口的功能开发，了解秒杀订单业务后端逻辑落地实践方案。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("秒杀订单的业务流程已经梳理完毕，并且对秒杀订单的后端接口进行了相关的设计，接下来就是开发秒杀订单的后端接口了。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("用户和运营对于秒杀订单的需求是不同的，用户可以在秒杀系统中抢购下单商品，通过用户维度查看订单，运营则可以通过活动维度查看订单数据。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("结合实际业务场景，从实际需求出发，完成秒杀订单的后端接口开发，从整体上了解秒杀订单提供的功能，并从用户和运营两种不同的角色出发，整体上理解秒杀订单提供的功能。")]),t._v(" "),r("h2",{attrs:{id:"三、后端业务开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、后端业务开发"}},[t._v("#")]),t._v(" 三、后端业务开发")]),t._v(" "),r("p",[t._v("对于秒杀订单的后端业务来说，还是从领域层、基础设施层、应用层和展示层出发，开发每一层的业务逻辑，从接口的访问权限角度来说，秒杀订单接口对于用户和运营来说，还是有所区别的。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-接口权限梳理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-接口权限梳理"}},[t._v("#")]),t._v(" 3.1 接口权限梳理")]),t._v(" "),r("p",[t._v("在前面的文章中，已经梳理出秒杀订单总体上提供的接口包含：保存秒杀订单、获取用户维度的订单列表和获取活动维度的订单列表。为了更加直观的体现用户端和运营端所需要的接口，这里，将用户端和运营端所需要的接口整理成如图22-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-26-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，在用户端可以通过秒杀商品页面对商品进行抢购，跳转到下单页面后进行下单，并可以在订单列表页面查看订单数据。运营端则可以通过秒杀活动查看当前秒杀活动下的订单数据。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-领域层开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-领域层开发"}},[t._v("#")]),t._v(" 3.2 领域层开发")]),t._v(" "),r("p",[t._v("领域层为秒杀订单提供领域驱动模型，具体的开发步骤如下所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);