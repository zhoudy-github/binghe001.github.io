(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{710:function(t,r,s){"use strict";s.r(r);var a=s(7),o=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第31章-基于spi扩展protostuff序列化与反序列化机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第31章-基于spi扩展protostuff序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第31章：基于SPI扩展Protostuff序列化与反序列化机制")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK、Json、Hessian2、FST与Kryo的序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。来吧，我们进一步扩展序列化与反序列化机制。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("这次又要怎么扩展呢？")])]),t._v(" "),r("p",[t._v("与前面文章的节奏一样，在前面的章节中，在涉及到数据的编解码过程中，我们实现了基于SPI扩展JDK、Json、Hessian2、FST与Kryo的序列化与反序列化方式。这次我还想继续扩展序列化与反序列化的类型，怎么办呢？")]),t._v(" "),r("p",[t._v("还能怎么办呢？撸起袖子加油干吧！")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("目标很明确：新增Protostuff序列化与反序列化方式！")])]),t._v(" "),r("p",[t._v("在前面的文章中，也已经说明了：对于RPC这种远程调用的底层基础设施框架来说，其性能的高低直接影响着整套分布式系统的性能。数据在网络中传输就涉及到数据的编解码，数据的编解码又会涉及到数据的序列化与反序列化，使用一款高效的序列化与反序列化框架有助于提升RPC框架的性能。")]),t._v(" "),r("p",[t._v("Protocol Buffer是谷歌出品的一种高性能的数据交换格式，独立于语言和平台，类似于json。Google提供了多种语言的实现：java、c++、go和python。对象序列化城Protocol Buffer之后可读性差，但是相比xml，json，它占用小，速度快。适合做数据存储或 RPC 数据交换格式。")]),t._v(" "),r("p",[t._v("但是相对于我们常用的json来说，Protocol  Buffer门槛更高，因为需要编写.proto文件，再把它编译成目标语言，这样使用起来就很麻烦。但是现在有了Protostuff之后，就不需要依赖.proto文件了，他可以直接对POJO进行序列化和反序列化，使用起来非常简单。")]),t._v(" "),r("p",[t._v("好了，本章就基于SPI扩展支持Protostuff序列化与反序列化方式。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你设计基于SPI扩展Protostuff序列化与反序列化，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("基于SPI再次扩展Protostuff的序列化与反序列化机制后，整体流程如图31-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图31-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-04-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图31-1可以看出，在实现数据的编解码过程中，再次扩展基于Protostuff的序列化和反序列化方式后，自定义的编解码器会通过SPI机制加载序列化与反序列化的具体实现方式，程序会根据具体需要加载某一种特定的序列化与反序列化方式，同样不会在程序中硬编码写死。")]),t._v(" "),r("ul",[r("li",[t._v("基于JDK的序列化与反序列化方式的Key为jdk。")]),t._v(" "),r("li",[t._v("基于Json的序列化与反序列化方式的Key为json。")]),t._v(" "),r("li",[t._v("基于Hessian2的序列化与反序列化方式的Key为hessian2。")]),t._v(" "),r("li",[t._v("基于FST的序列化与反序列化方式的Key为fst。")]),t._v(" "),r("li",[t._v("基于Kryo的序列化与反序列化方式的Key为kryo。")]),t._v(" "),r("li",[t._v("基于Protostuff的序列化与反序列化方式的Key为protostuff。")])]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),r("p",[t._v("基于SPI再次扩展Kryo的序列化与反序列化机制的核心类关系如图31-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图31-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-04-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=o.exports}}]);