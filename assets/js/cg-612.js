(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{905:function(t,r,e){"use strict";e.r(r);var a=e(7),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第23章-秒杀订单用户端业务开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第23章-秒杀订单用户端业务开发"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第23章：秒杀订单用户端业务开发")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：完成秒杀订单用户端业务开发，用户登录系统后能够查看秒杀商品，对符合条件的商品进行抢购下单，并将前后端代码联调成功。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在用户端，用户登录秒杀系统后，能够通过秒杀活动查看秒杀商品，对符合条件的秒杀商品进行抢购下单。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀系统为用户提供了抢购商品的平台，对于秒杀系统来说，最核心，也是最重要的功能就是抢购商品，大量用户在秒杀系统中抢购有限库存的商品，对于系统的并发和性能来说，有一定的挑战。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对于秒杀订单业务来说，用户端的业务会比运营端稍微复杂些，用户端不仅需要查看订单数据，还需要提供主动下单的接口。本章，就从用户角度出发，梳理秒杀订单业务在用户端的流程，实现用户端的页面开发，并将前后端代码联调成功。")]),t._v(" "),r("h2",{attrs:{id:"三、用户端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、用户端流程设计"}},[t._v("#")]),t._v(" 三、用户端流程设计")]),t._v(" "),r("p",[t._v("用户在登录秒杀系统后，在商品页面点击抢购，如果要抢购的商品符合抢购条件，则跳转到下单页面，填写要购买的商品数量，点击下单，就会触发用户下单的业务流程，简化后的流程如图23-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-27-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("用户在商品页面点击抢购，如果要抢购的商品符合抢购条件，则跳转到下单页面，填写要购买的商品数量，点击下单，就会触发用户下单的业务流程，如下所示。")]),t._v(" "),r("p",[t._v("（1）前端判断如果购买数量为空，则提示购买数量不能为空，否则进入下一步。")]),t._v(" "),r("p",[t._v("（2）前端判断如果购买数量小于或者等于0，则提示购买数量不能小于或者等于0，否则进入下一步。")]),t._v(" "),r("p",[t._v("（3）前端判断如果购买数量触发限购，则提示提示购买数量不能超过限购数量，否则进入下一步。")]),t._v(" "),r("p",[t._v("（4）后端判断如果要抢购的商品不存在，则提示商品不存在，否则进入下一步。")]),t._v(" "),r("p",[t._v("（5）后端判断如果商品未上线，则提示商品未上线不能下单，否则进入下一步。")]),t._v(" "),r("p",[t._v("（6）后端判断如果商品已下线，则提示商品已下线不能下单，否则进入下一步。")]),t._v(" "),r("p",[t._v("（7）后端判断如果购买数量触发限购，则提示提示购买数量不能超过限购数量，否则进入下一步。")]),t._v(" "),r("p",[t._v("（8）后端判断如果库存不足，则提示商品库存不足，否则进入下一步。")]),t._v(" "),r("p",[t._v("（9）提交订单信息，扣减商品库存。")]),t._v(" "),r("p",[r("strong",[t._v("注意：这里下单的校验规则只是校验了商品的部分信息，后续在完善过程中，还会对用户的资格等信息进行校验。")])]),t._v(" "),r("h2",{attrs:{id:"四、用户端页面开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、用户端页面开发"}},[t._v("#")]),t._v(" 四、用户端页面开发")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);