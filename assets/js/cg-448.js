(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{737:function(t,a,r){"use strict";r.r(a);var s=r(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第36章-基于spi扩展asm动态代理机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第36章-基于spi扩展asm动态代理机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第36章：基于SPI扩展ASM动态代理机制")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI扩展了JDK、CGLib、Javassist和ByteBuddy动态代理机制，估计比一般的RPC框架内置的动态代理功能都多了吧。但是，对于我们一起手写的bhrpc这个RPC框架来说，这还不够，我还想扩展支持ASM动态代理机制。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("继续扩展ASM动态代理机制，你能搞定吗？")])]),t._v(" "),a("p",[t._v("在前面的文章中，已经实现了基于SPI扩展JDK、CGLib、Javassist和ByteBuddy动态代理的功能，相信我们一起手写的RPC框架比市面上大部分RPC框架内置的动态代理功能都多。但是，对于我们自己来说，不能满足于这四种内置的动态代理功能，我们还要基于SPI进一步扩展一种功能更为强大的动态代理功能。")]),t._v(" "),a("p",[t._v("我们这次要基于SPI扩展的动态代理就是业界更加出名的ASM。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展ASM动态代理机制。")])]),t._v(" "),a("p",[t._v("何谓ASM？用官方的话说就是：ASM 是一个通用的 Java 字节码操作和分析框架。 它可以用于修改现有类或直接以二进制形式动态生成类。 ASM  提供了一些常见的字节码转换和分析算法，可以从中构建自定义复杂转换和代码分析工具。 ASM 提供与其他 Java  字节码框架类似的功能，但专注于性能。  因为它的设计和实现尽可能小而且快，所以它非常适合在动态系统中使用（但当然也可以以静态方式使用，例如在编译器中）。")]),t._v(" "),a("p",[t._v("ASM功能非常强大，我们在自己手写的RPC框架中，基于SPI扩展ASM动态代理功能。最终基于ASM操作字节码的强大功能实现动态代理。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展ASM动态代理机制，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展ASM动态代理机制的流程如图36-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图36-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-12-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图36-1可以看出，使用SPI机制扩展ASM动态代理的功能后，与图32-1一样，服务消费者RPC客户端会引用动态代理工厂接口，并基于SPI动态加载代理工厂接口的实现类。这种方式能够极大的增强动态代理功能的扩展性。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"_2-核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心类实现关系"}},[t._v("#")]),t._v(" 2.核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI再次扩展ASM动态代理机制的核心类关系如图36-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图36-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-12-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);