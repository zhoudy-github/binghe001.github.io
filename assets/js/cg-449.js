(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{741:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第37章-基于spi扩展jdk反射机制调用真实方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第37章-基于spi扩展jdk反射机制调用真实方法"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第37章：基于SPI扩展JDK反射机制调用真实方法")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM动态代理机制，细心的读者可以发现，我们基于SPI扩展动态代理机制时，基本都是侧重于服务消费者来说的。其实，在服务提供者端也有很多可以基于SPI动态扩展的功能。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("我想在服务提供者端基于SPI扩展调用真实方法的方式，你能搞定吗？")])]),t._v(" "),r("p",[t._v("在服务提供者一端，尽管在之前的文章中，我们实现了基于JDK和CGLib的反射机制调用真实方法，但是在之前的文章中，我们通过传入反射方式reflectType参数的形式，来选择使用JDK或者CGLib的方式来调用真实方法。")]),t._v(" "),r("p",[t._v("这里，存在着一个问题就是，不管是使用JDK的方式调用真实方法，还是使用CGLib的方式调用真实方法。这两种方式都是直接将方法写到了服务提供者的"),r("code",[t._v("io.binghe.rpc.provider.common.handler.RpcProviderHandler")]),t._v("类中，只是通过传入的反射方式reflectType参数进行区分，是使用JDK方式调用真实方法，还是使用CGLib方式调用真实方法。")]),t._v(" "),r("p",[t._v("这种方式不利于程序的扩展，如果需要支持其他的方式调用真实方法，就不得不修改框架的源代码来扩展对应的功能。")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("本章目标很明确：基于SPI扩展JDK反射机制调用真实方法。")])]),t._v(" "),r("p",[t._v("目前，我们手写的RPC框架中，将服务提供者调用真实方法的代码直接写到了服务提供者的"),r("code",[t._v("io.binghe.rpc.provider.common.handler.RpcProviderHandler")]),t._v("类中。")]),t._v(" "),r("p",[t._v("这种直接将调用真实方法的代码写到提供者的"),r("code",[t._v("io.binghe.rpc.provider.common.handler.RpcProviderHandler")]),t._v("类中，非常不利于程序后续的扩展，尤其是对于像RPC这种底层基础通信设施框架来说，不具备扩展性，后期的维护和升级就比较麻烦。")]),t._v(" "),r("p",[t._v("例如，我们自己手写的RPC框架中实现了通过JDK和CGLib调用真实方法的功能。但是，如果在真实场景中，需要支持其他的方式调用真实方法，此时，就不得不修改框架的源代码了，这种方式是非常不友好的。")]),t._v(" "),r("p",[t._v("所以，我们需要对服务提供者端调用真实方法的代码进行优化，使其能够基于SPI进行扩展。")]),t._v(" "),r("p",[t._v("本章，就先基于SPI扩展JDK反射机制调用真实方法。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你设计基于SPI扩展JDK反射机制调用真实方法，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("基于SPI扩展JDK反射机制调用真实方法的流程图如图37-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图37-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-14-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图37-1可以看到，服务提供者会以SPI的形式引用调用真实方法的SPI接口，基于JDK的反射机制调用真实方法是SPI接口的一种实现，服务提供者会通过SPI加载JDK反射机制调用真实方法的实现类。而JDK反射机制调用真实方法的实现类会实现SPI接口，最终调用真实方法。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),r("p",[t._v("基于SPI扩展JDK反射机制调用真实方法的核心类关系如图37-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图37-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-14-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);