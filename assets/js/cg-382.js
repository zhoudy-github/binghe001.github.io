(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{672:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第29章-基于spi扩展fst序列化与反序列化机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第29章-基于spi扩展fst序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第29章：基于SPI扩展FST序列化与反序列化机制")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK、Json与Hessian2的序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。来吧，我们进一步扩展序列化与反序列化机制。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("这次又要怎么扩展呢？")])]),t._v(" "),a("p",[t._v("在前面的章节中，在涉及到数据的编解码过程中，我们实现了基于SPI扩展JDK、Json与Hessian2的序列化与反序列化方式。这次我还想继续扩展序列化与反序列化的类型，怎么办呢？")]),t._v(" "),a("p",[t._v("还能怎么办呢？撸起袖子加油干吧！")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：新增FST序列化与反序列化方式！")])]),t._v(" "),a("p",[t._v("JDK自带的序列化与反序列化方式存在着诸多的弊端，其中最为严重的就是性能不足和序列化后的字节体积较大，这两个弊端对于网络应用来说，是非常致命的，序列化带来的应用延迟和序列化的数据体积较大造成网络传输延迟，内存消耗较高等问题，会直接导致网络应用性能的低下。")]),t._v(" "),a("p",[t._v("FST序列化全称是Fast Serialization，它是对JDK自带的序列化的替换实现。JDK序列化的两点弊端，在FST中得到了较大的改善，FST的特征如下：")]),t._v(" "),a("ul",[a("li",[t._v("比JDK提供的序列化性能提升了10倍。")]),t._v(" "),a("li",[t._v("序列化后的体积是JDK序列化的1/4~1/3。")]),t._v(" "),a("li",[t._v("支持堆外Map，和堆外Map的持久化。")]),t._v(" "),a("li",[t._v("支持序列化为JSON。")])]),t._v(" "),a("p",[t._v("大名鼎鼎的Dubbo，内部就支持FST的序列化与反序列化方式。")]),t._v(" "),a("p",[t._v("来吧，这章，我们就基于SPI扩展支持FST序列化与反序列化机制。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展FST序列化与反序列化，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI再次扩展FST的序列化与反序列化机制后，整体流程如图29-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图29-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-01-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图29-1可以看出，在实现数据的编解码过程中，再次扩展基于FST的序列化和反序列化方式后，自定义的编解码器会通过SPI机制加载序列化与反序列化的具体实现方式，程序会根据具体需要加载某一种特定的序列化与反序列化方式，同样不会在程序中硬编码写死。")]),t._v(" "),a("ul",[a("li",[t._v("基于JDK的序列化与反序列化方式的Key为jdk。")]),t._v(" "),a("li",[t._v("基于Json的序列化与反序列化方式的Key为json。")]),t._v(" "),a("li",[t._v("基于Hessian2的序列化与反序列化方式的Key为hessian2。")]),t._v(" "),a("li",[t._v("基于FST的序列化与反序列化方式的Key为fst。")])]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#心类实现关系"}},[t._v("#")]),t._v(" 心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI再次扩展FST的序列化与反序列化机制的核心类关系如图29-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图29-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-01-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=r.exports}}]);