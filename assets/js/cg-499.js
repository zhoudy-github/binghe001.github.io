(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{795:function(t,a,r){"use strict";r.r(a);var s=r(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第27章-基于spi扩展json序列化与反序列化机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第27章-基于spi扩展json序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第27章：基于SPI扩展Json序列化与反序列化机制")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("我想在序列化模块扩展支持基于Json的序列化与反序列化方式，可以不？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI机制扩展支持了JDK序列化与反序列化方式。对于一个比较成熟和完善的RPC框架而言，默认自带的序列化与反序列化方式肯定不只有一种方式，本章，我们就基于SPI机制再次扩展序列化与反序列化方式。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展支持Json序列化与反序列化！")])]),t._v(" "),a("p",[t._v("服务消费者与服务提供者之间进行数据交互时，都会涉及到对数据的编解码操作，而对数据的编解码又会使用到序列化与反序列化机制。在前面的章节中，已经支持基于SPI扩展JDK序列化与反序列化了。这种基于SPI的扩展机制，能够避免在程序中硬编码实现某些功能，并且会具备高度的可扩展性，这种SPI扩展机制是在开发通用型框架时，提升框架扩展性非常提倡使用的一种技术。")]),t._v(" "),a("p",[t._v("本章，我们就再次基于SPI机制扩展框架的序列化与反序列化方式，本章，我们要基于SPI机制扩展的是Json序列化与反序列化方式。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你基于SPI机制扩展Json序列化与反序列化方式，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI再次扩展Json的序列化与反序列化机制后，整体流程如图27-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图27-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-28-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图27-1可以看出，在实现数据的编解码过程中，再次扩展基于Json的序列化和反序列化方式后，自定义的编解码器会通过SPI机制加载序列化与反序列化的具体实现方式，程序会根据具体需要加载某一种特定的序列化与反序列化方式，不会在程序中硬编码写死。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI再次扩展Json序列化与反序列化机制的核心类关系如图27-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图27-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-28-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);