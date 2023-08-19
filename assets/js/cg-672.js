(window.webpackJsonp=window.webpackJsonp||[]).push([[672],{970:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第12章-访问登录授权限制接口的流程设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第12章-访问登录授权限制接口的流程设计与实现"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第12章：访问登录授权限制接口的流程设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10f5mZiOl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10f5mZiOl"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：从实战角度完成访问登录授权限制接口的流程设计，并完成代码开发，理解访问登录授权限制接口的流程在实际场景的应用。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10f5mZiOl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10f5mZiOl"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("一般情况下，大部分系统的接口总体上都会分成两部分，一部分接口是不需要登录授权就能够访问的系统，另一部分就是需要登录授权后才能访问的接口，对于需要登录授权后才能访问的接口，又会根据实际情况细分为各种权限。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("在前面的文章中，已经基于JWT实现了用户登录流程的设计和编码，此时从业务上对于秒杀系统来说，整个系统的访问入口接口已经开发完成，要想在秒杀系统中参与抢购功能，就必须登录，并且在访问接口时要带上授权的JWT Token信息。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("在成功登录并返回JWT Token的基础上，从实战角度完成访问登录授权限制接口的流程设计，并完成代码开发。只有登录过的用户才能正常访问系统中的其他接口，如果用户未登录，就直接访问除登录以外的其他接口，则提示用户未登录，不继续执行后续的业务逻辑。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("用户访问登录授权限制的接口时，需要在请求头中带上JWT Token，服务端会对JWT Token进行验证，验证通过则继续执行后续业务逻辑，向客户端返回正确的结果数据。否则，向客户端返回对应的错误信息。用户访问登录授权限制接口的流程如图12-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-16-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("从图12-1其实也可以看出，用户访问登录授权限制接口的流程，本质上就是基于JWT实现的登录授权认证流程的下半部分流程。")]),t._v(" "),r("p",[t._v("（1）客户端在访问服务端接口时，每次请求都会在请求头中添加JWT Token。")]),t._v(" "),r("p",[t._v("（2）服务端会拦截请求，并对请求头中的JWT Token进行验证，如果验证成功，则执行具体业务逻辑，并向客户端返回正确的结果数据。如果验证失败，则向客户端返回错误信息。")]),t._v(" "),r("p",[t._v("（3）客户端根据服务端返回的是正确的结果数据还是错误的信息来执行不同的业务流程，如果客户端从服务端接收到的是正确的结果数据，则进行展示。如果客户端从服务端接收到的是错误的信息，则展示错误信息并返回登录页面。")]),t._v(" "),r("h2",{attrs:{id:"四、代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、代码实现"}},[t._v("#")]),t._v(" 四、代码实现")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);