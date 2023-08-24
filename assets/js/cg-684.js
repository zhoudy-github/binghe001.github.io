(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{981:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第24章-秒杀订单运营端业务开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第24章-秒杀订单运营端业务开发"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第24章：秒杀订单运营端业务开发")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/11XOlCu6d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/11XOlCu6d"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：完成秒杀订单运营端业务开发，运营人员登录系统后能够通过秒杀活动查看秒杀订单，并将前后端代码联调成功。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/11XOlCu6d",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/11XOlCu6d"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在运营端，运营人员登录秒杀系统后，能够通过秒杀活动查看秒杀订单，以此了解某场活动下的订单数据，从而分析出这场秒杀活动的收益。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("运营人员对于秒杀系统中订单业务的需求与用户是不同的，用户可以在秒杀系统中抢购商品下单，查看自己下单的订单数据。而运营人员则是查看某种活动下的订单数据，以此来分析这场秒杀活动的收益。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对于秒杀订单业务来说，用户端的业务会比运营端简单些，运营端会通过秒杀活动查看活动下的订单数据。本章，就从运营角度实现最简化的秒杀订单业务，并将前后端代码联调成功。")]),t._v(" "),r("h2",{attrs:{id:"三、运营端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、运营端流程设计"}},[t._v("#")]),t._v(" 三、运营端流程设计")]),t._v(" "),r("p",[t._v("运营人员在登录秒杀系统后，在活动页面点击查看订单，就会跳转到查看订单页面，以此来分析当前秒杀活动下产生的订单收益等。简化后的流程如图24-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-28-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("运营人员在查看订单数据时，会进行如下逻辑校验：")]),t._v(" "),r("p",[t._v("（1）如果未登录，则提示请登录后操作，并跳转到登录页面，否则进行下一步。")]),t._v(" "),r("p",[t._v("（2）如果获取订单信息失败，则提示获取订单失信息失败，否则进行下一步。")]),t._v(" "),r("p",[t._v("（3）如果遇到网络异常的情况，则提示获取订单失信息失败，否则进行下一步。")]),t._v(" "),r("p",[t._v("（4）如果抛出了其他异常，则提示获取订单失信息失败，否则进行下一步。")]),t._v(" "),r("p",[t._v("（5）后端返回活动维度的订单列表数据，前端填充查看订单页面的数据。")]),t._v(" "),r("h2",{attrs:{id:"四、运营端页面开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、运营端页面开发"}},[t._v("#")]),t._v(" 四、运营端页面开发")]),t._v(" "),r("p",[t._v("在我们实现的秒杀系统中，关于秒杀订单运营端页面精简会只包含一个查看订单页面。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);