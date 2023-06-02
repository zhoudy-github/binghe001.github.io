(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{902:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第20章-秒杀商品用户端业务开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第20章-秒杀商品用户端业务开发"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第20章：秒杀商品用户端业务开发")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：完成秒杀商品用户端业务开发，用户登录系统后能够查看秒杀商品，对符合条件的商品进行抢购，并将前后端代码联调成功。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在用户端，用户登录秒杀系统后，能够通过秒杀活动查看秒杀商品，对符合条件的秒杀商品进行抢购。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于秒杀系统来说，用户端才是真正承接高并发、大流量的端口，对于用户端来说，追求的是极致的性能、稳定性和可靠性，业务流程要尽量简化，不要有过多的复杂逻辑，用户在商品页面，即可直接发起抢购操作。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对于秒杀商品业务来说，用户端也会比运营端更加精简。用户端不会对秒杀商品进行更新操作，只会查看秒杀活动下的商品，并对符合条件的商品进行抢购下单。当然，本章，只是先从商品角度简单实现符合抢购的逻辑，在后续不断的完善中，还会校验用户是否有资格抢购相应的商品。")]),t._v(" "),r("h2",{attrs:{id:"三、用户端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、用户端流程设计"}},[t._v("#")]),t._v(" 三、用户端流程设计")]),t._v(" "),r("p",[t._v("用户在登录秒杀系统后，能够通过秒杀活动查看秒杀商品，并对符合条件的商品进行抢购，简化后的流程如图20-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-24-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，用户在抢购商品时，会对秒杀商品和秒杀活动的状态进行校验，流程如下所示。")]),t._v(" "),r("p",[t._v("（1）用户进入商品页面，如果商品为已发布状态，则抢购按钮置灰，不可点击，否则进入下一步。")]),t._v(" "),r("p",[t._v("（2）如果商品为下线状态，则抢购按钮置灰，不可点击，否则进入下一步。")]),t._v(" "),r("p",[t._v("（3）如果秒杀活动未开始，则提示秒杀活动未开始不能抢购，否则进入下一步。")]),t._v(" "),r("p",[t._v("（4）如果秒杀活动已结束，则提示秒杀活动已结束不能抢购，否则进入下一步。")]),t._v(" "),r("p",[t._v("（5）提交抢购的商品信息，跳转到商品下单页面。")]),t._v(" "),r("p",[r("strong",[t._v("注意：只是站在商品的角度检验了是否符合抢购条件，在后续不断的完善中，还会实现校验用户是否具备资格进行抢购。")])]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);