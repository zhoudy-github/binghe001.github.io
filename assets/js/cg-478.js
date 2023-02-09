(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{768:function(t,r,e){"use strict";e.r(r);var a=e(7),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第107章-服务容错效果测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第107章-服务容错效果测试"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第107章：服务容错效果测试")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客1："),r("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客2："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("目前，我们自己手写的RPC框架已经完成了整体设计、服务提供者的实现、服务消费者的实现、注册中心的实现、负载均衡的实现、SPI扩展序列化机制、SPI扩展动态代理机制、SPI扩展反射机制、SPI扩展负载均衡策略、SPI扩展增强型负载均衡策略、SPI扩展实现注册中心、心跳机制、增强型心跳机制、重试机制、整合Spring、整合SpringBoot、整合Docker、整合SpringCloud Alibaba、结果缓存、路由控制、延迟连接、并发控制、流控分析、连接控制、SPI扩展连接淘汰策略和数据缓冲等篇章。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("RPC框架实现了服务容错，该如何测试呢？")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们已经在RPC框架中完成了服务容错的功能，那接下来，要如何进行测试呢？")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("目标很明确：就是对服务容错功能进行测试！")])]),t._v(" "),r("p",[t._v("在RPC框架中，为保证RPC框架的容错性，我们可以在服务消费者端指定服务容错实现类，服务容错实现类是在服务消费者端的业务系统层的一个实现了目标业务接口的实现类，同时在服务容错类中实现了目标业务接口的方法。当RPC框架由于网络故障或者目标业务系统异常导致调用失败时，RPC框架检测到异常就会自动调用服务容错类的方法，进行容错处理。")]),t._v(" "),r("p",[t._v("本章，我们就一起对服务的容错功能就是测试。")]),t._v(" "),r("h2",{attrs:{id:"三、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、实现"}},[t._v("#")]),t._v(" 三、实现")]),t._v(" "),r("p",[r("code",[t._v("整个测试过程要怎么实现呢？")])]),t._v(" "),r("p",[t._v("整个测试过程需要分为如下几步实现：")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=n.exports}}]);