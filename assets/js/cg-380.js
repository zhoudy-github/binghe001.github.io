(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{670:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第33章-基于spi扩展cglib动态代理机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第33章-基于spi扩展cglib动态代理机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第33章：基于SPI扩展CGLib动态代理机制")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客1："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客2："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI扩展了JDK动态代理机制，但这远远不够，我还想扩展其他的动态代理机制。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("继续扩展其他的动态代理机制？")])]),t._v(" "),a("p",[t._v("在前面的文章中，已经实现了基于SPI扩展JDK动态代理的功能，但是对于一个较为成熟和完善的RPC框架来说，只支持JDK动态代理是远远不够的，我们还需要内置更多的动态代理功能，让用户有所选择的使用某一种动态代理功能。")]),t._v(" "),a("p",[t._v("那怎么办呢？撸起袖子加油干吧，冲！！")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展CGLib动态代理机制。")])]),t._v(" "),a("p",[t._v("动态代理机制能够在原有方法的基础上增强很多功能，比如在执行方法的前后执行一些其他的逻辑。在不修改原有逻辑的情况下新增一些功能等等。")]),t._v(" "),a("p",[t._v("为了进一步增强动态代理的功能，在原有基于SPI扩展JDK动态代理的基础上，我们还要基于SPI进一步扩展CGLib动态代理功能，让用户对动态代理功能有更多的选择。")]),t._v(" "),a("p",[t._v("开始吧，基于SPI扩展CGLib动态代理功能。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展CGLib动态代理机制，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展CGLib动态代理机制的流程如图33-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图33-1","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-11-08-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图33-1可以看出，使用SPI机制扩展CGLib动态代理的功能后，与图32-1一样，服务消费者RPC客户端会引用动态代理工厂接口，并基于SPI动态加载代理工厂接口的实现类。这种方式能够极大的增强动态代理功能的扩展性。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI再次扩展CGLib动态代理机制的核心类关系如图33-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图33-2","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-11-08-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);