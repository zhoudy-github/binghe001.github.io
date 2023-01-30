(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{675:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第28章-基于spi扩展hessian2序列化与反序列化机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第28章-基于spi扩展hessian2序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第28章：基于SPI扩展Hessian2序列化与反序列化机制")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK与Json的序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("这次又要怎么扩展呢？")])]),t._v(" "),s("p",[t._v("在前面的章节中，在涉及到数据的编解码过程中，我们实现了基于SPI扩展JDK与Json的序列化与反序列化方式。但是，JDK序列化与反序列化方式不能跨语言调用，Json序列化与反序列化虽然可以跨语言调用，但是其性能不是很高，今天我们再次对序列化与反序列化方式进行扩展。")]),t._v(" "),s("h2",{attrs:{id:"二、目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),s("p",[s("code",[t._v("目标：新增Hessian2序列化与反序列化方式！")])]),t._v(" "),s("p",[t._v("Hessian2提供了完整的序列化规范，可以允许跨语言实现序列化和反序列化。能够将类的描述信息写入序列化文件中，这种方式可以保证反序列化时新旧版本对象的兼容性。同时，Hessian2在内容的序列化上做了优化，能够将需要序列化的多个相同的对象只写入一次，其他用到该对象的地方只使用对象的引用，而不重新写入对象的描述信息和值信息。")]),t._v(" "),s("p",[t._v("本章，我们就在实现原有序列化与反序列化方式的基础上，新增基于Hessian2的序列化方式。")]),t._v(" "),s("h2",{attrs:{id:"三、设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),s("p",[s("code",[t._v("如果让你设计基于SPI扩展Hessian2序列化与反序列化方式，你会怎么做呢？")])]),t._v(" "),s("p",[t._v("基于SPI再次扩展Hessian2的序列化与反序列化机制后，整体流程如图28-1所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图28-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-31-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由图28-1可以看出，在实现数据的编解码过程中，再次扩展基于Hessian2的序列化和反序列化方式后，自定义的编解码器会通过SPI机制加载序列化与反序列化的具体实现方式，程序会根据具体需要加载某一种特定的序列化与反序列化方式，同样不会在程序中硬编码写死。")]),t._v(" "),s("ul",[s("li",[t._v("基于JDK的序列化与反序列化方式的Key为jdk。")]),t._v(" "),s("li",[t._v("基于Json的序列化与反序列化方式的Key为json。")]),t._v(" "),s("li",[t._v("基于Hessian2的序列化与反序列化方式的Key为hessian2。")])]),t._v(" "),s("h2",{attrs:{id:"四、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),s("p",[s("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),s("h3",{attrs:{id:"核心类实现关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),s("p",[t._v("基于SPI再次扩展Hessian2的序列化与反序列化机制的核心类关系如图28-2所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图28-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-31-002.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=r.exports}}]);