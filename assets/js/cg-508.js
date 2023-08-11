(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{804:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第32章-基于spi扩展jdk动态代理机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第32章-基于spi扩展jdk动态代理机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第32章：基于SPI扩展JDK动态代理机制")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("在前面的章节中，我们实现了对标Dubbo的SPI基础功能，并基于SPI扩展了JDK、Json、Hessian2、FST、Kryo与Protostuff的序列化与反序列化方式，就序列化模块而言，整体具备了高度的可扩展性。今天，我们基于SPI扩展动态代理模块。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("动态代理要怎么扩展呢？")])]),t._v(" "),s("p",[t._v("在RPC框架的服务消费者端，实现了动态代理的功能，在动态代理中会将传递的参数封装成请求协议对象，由服务消费者发送到服务提供者。在前面的文章中，我们在代码中写死了使用JDK的方式实现动态代理功能。例如，在bhrpc-consumer-native工程下的io.binghe.rpc.consumer.RpcClient类中的create()方法，就写死了使用JDK动态代理的功能，代码如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" interfaceClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProxyFactory")]),t._v(" proxyFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdkProxyFactory")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxyFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProxyConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interfaceClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serviceVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serviceGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serializationType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registryService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oneway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" proxyFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("interfaceClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("尤其是下面这行代码，对于程序的扩展性是非常差的。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProxyFactory")]),t._v(" proxyFactory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JdkProxyFactory")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("接下来的几章，我们就要对动态代理下手了。")]),t._v(" "),s("h2",{attrs:{id:"二、目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),s("p",[s("code",[t._v("目标很明确：基于SPI扩展JDK动态代理机制。")])]),t._v(" "),s("p",[t._v("动态代理机制能够在原有方法的基础上增强很多功能，比如在执行方法的前后执行一些其他的逻辑。在不修改原有逻辑的情况下新增一些功能等等。")]),t._v(" "),s("p",[t._v("在前面的文章中，我们只是在服务消费者端实现了JDK动态代理功能，并且还是在代码中写死了创建JDK动态代理的对象。本章，我们就扩展服务消费者动态代理功能，基于SPI扩展JDK的动态代理机制。")]),t._v(" "),s("h2",{attrs:{id:"三、设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),s("p",[s("code",[t._v("如果让你设计基于SPI扩展动态代理机制，你会怎么设计呢？")])]),t._v(" "),s("p",[t._v("基于SPI扩展动态代理机制的流程如图32-1所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图32-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-07-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由图32-1可以看出，使用SPI机制扩展动态代理的功能后，服务消费者RPC客户端会引用动态代理工厂接口，并基于SPI动态加载代理工厂接口的实现类。这种方式能够极大的增强动态代理功能的扩展性。")]),t._v(" "),s("h2",{attrs:{id:"四、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),s("p",[s("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),s("h3",{attrs:{id:"核心类实现关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),s("p",[t._v("基于SPI再次扩展JDK动态代理机制的核心类关系如图32-2所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图32-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-07-002.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);