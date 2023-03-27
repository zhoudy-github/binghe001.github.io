(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{718:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第38章-基于spi扩展cglib反射机制调用真实方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第38章-基于spi扩展cglib反射机制调用真实方法"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第38章：基于SPI扩展CGLib反射机制调用真实方法")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们在服务消费者端基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM动态代理机制。在服务提供者端，基于SPI扩展了JDK反射机制调用真实方法的功能。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("之前基于SPI扩展了JDK反射机制调用真实方法，还能扩展其他的方式调用真实方法吗？")])]),t._v(" "),a("p",[t._v("在前面的文章中，我们基于SPI扩展了JDK反射机制调用真实方法的功能，并且已经完美经过了测试的验证。其实，小伙伴们都知道，之前我们实现了基于JDK和CGLib两种方式调用真实方法。所以，接下来，我们就要实现基于SPI扩展CGLib反射机制调用真实方法。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展CGLib反射机制调用真实方法！")])]),t._v(" "),a("p",[t._v("在上一章中，在服务提供者端基于SPI扩展了JDK反射机制调用真实方法的功能。在服务提供者端实现了调用真实方法高度的扩展性，今天，我们就再次基于SPI扩展CGLib反射机制调用真实方法。")]),t._v(" "),a("p",[t._v("好了，目标明确了，接下来就是撸起袖子加油干了！")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展CGLib反射机制调用真实方法，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展CGLib反射机制调用真实方法的流程图如图38-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图38-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-15-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图38-1可以看到，服务提供者会以SPI的形式引用调用真实方法的SPI接口，基于JDK和CGLib的反射机制调用真实方法的类是SPI接口的实现类，服务提供者会通过SPI加载JDK和CGLib反射机制调用真实方法的实现类。而JDK和CGLib反射机制调用真实方法的实现类会实现SPI接口，最终调用真实方法。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI扩展CGLib反射机制调用真实方法的核心类关系如图38-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图38-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-15-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);