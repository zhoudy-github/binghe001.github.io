(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{668:function(t,r,a){"use strict";a.r(r);var e=a(7),s=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第30章-基于spi扩展kryo序列化与反序列化机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第30章-基于spi扩展kryo序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第30章：基于SPI扩展Kryo序列化与反序列化机制")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK、Json、Hessian2与FST的序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。来吧，我们进一步扩展序列化与反序列化机制。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("这次又要怎么扩展呢？")])]),t._v(" "),r("p",[t._v("在前面的章节中，在涉及到数据的编解码过程中，我们实现了基于SPI扩展JDK、Json、Hessian2与FST的序列化与反序列化方式。这次我还想继续扩展序列化与反序列化的类型，怎么办呢？")]),t._v(" "),r("p",[t._v("还能怎么办呢？撸起袖子加油干吧！")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("目标很明确：新增Kryo序列化与反序列化方式！")])]),t._v(" "),r("p",[t._v("对于RPC这种远程调用的底层基础设施框架来说，其性能的高低直接影响着整套分布式系统的性能。数据在网络中传输就涉及到数据的编解码，数据的编解码又会涉及到数据的序列化与反序列化，使用一款高效的序列化与反序列化框架有助于提升RPC框架的性能。")]),t._v(" "),r("p",[t._v("本章，我们就再次在RPC框架中集成一款高效的序列化与反序列化框架——Kryo。")]),t._v(" "),r("p",[t._v("Kryo是一个快速且高效的针对Java对象序列化的框架，具有比较多的有点，其中典型的优点如下所示。")]),t._v(" "),r("ul",[r("li",[t._v("序列化的性能非常高。")]),t._v(" "),r("li",[t._v("序列化结果体积较小。")]),t._v(" "),r("li",[t._v("提供了简单易用的API。")])]),t._v(" "),r("p",[t._v("好了，本章就基于SPI扩展支持Kryo序列化与反序列化方式。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你设计基于SPI扩展Kryo序列化与反序列化，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("基于SPI再次扩展Kryo的序列化与反序列化机制后，整体流程如图30-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图30-1","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-11-02-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图30-1可以看出，在实现数据的编解码过程中，再次扩展基于Kryo的序列化和反序列化方式后，自定义的编解码器会通过SPI机制加载序列化与反序列化的具体实现方式，程序会根据具体需要加载某一种特定的序列化与反序列化方式，同样不会在程序中硬编码写死。")]),t._v(" "),r("ul",[r("li",[t._v("基于JDK的序列化与反序列化方式的Key为jdk。")]),t._v(" "),r("li",[t._v("基于Json的序列化与反序列化方式的Key为json。")]),t._v(" "),r("li",[t._v("基于Hessian2的序列化与反序列化方式的Key为hessian2。")]),t._v(" "),r("li",[t._v("基于FST的序列化与反序列化方式的Key为fst。")]),t._v(" "),r("li",[t._v("基于Kryo的序列化与反序列化方式的Key为kryo。")])]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),r("p",[t._v("基于SPI再次扩展Kryo的序列化与反序列化机制的核心类关系如图30-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图30-2","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-11-02-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);