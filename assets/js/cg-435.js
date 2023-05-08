(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{728:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第23章-服务消费者整合注册中心实现服务发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第23章-服务消费者整合注册中心实现服务发现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第23章：服务消费者整合注册中心实现服务发现")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("我们写的RPC框架不仅实现了服务消费者与服务提供者之间正常的数据交互，也实现了注册中心的基础服务功能，同时，服务提供者也正常整合了注册中心的功能，整体上越来越完善了。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("服务提供者都整合了注册中心，服务消费者怎么能落下呢？")])]),t._v(" "),s("p",[t._v("在前面的章节中，我们实现了注册中心的基础服务功能，也对这些基础服务功能进行了测试，能够正常向Zookeeper中注册和移除对应的元数据服务。在服务提供者端也整合了注册中心的基础功能，当服务提供者启动时，就会将自身标注有@RpcService注解的服务注册到注册中心。")]),t._v(" "),s("p",[t._v("既然服务提供者都整合了注册中心，那服务消费者又怎么能落下呢？在前面的章节中，我们在RPC框架的服务消费者中，都是将服务消费者要连接的服务提供者监听的IP和端口写死在了bhrpc-consumer-common工程下的io.binghe.rpc.consumer.common.RpcConsumer类中的sendRequest()方法中，源码如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RPCFuture")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcProtocol")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO 暂时写死，后续在引入注册中心时，从注册中心获取")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" serviceAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27880")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//#############省略其他代码#################")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOneway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("通过这章之后，我们不再在服务消费者中写死任何服务监听的IP地址或端口号，通过订阅注册中心的服务来自动感知服务提供者发布的服务所监听的IP地址和端口号。")]),t._v(" "),s("p",[t._v("说干就干，我们开始吧。")]),t._v(" "),s("h2",{attrs:{id:"二、目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),s("p",[s("code",[t._v("目前相当明确：就是将注册中心的基础服务功能整合到服务消费者，实现服务发现功能！")])]),t._v(" "),s("p",[t._v("目前，我们一起手写的RPC框架，在服务提供者端实现了不依赖任何第三方框架的包扫描功能，能够将标注有@RpcService的注解注册到本地Map中。在服务消费者端能够实现通过直接调用接口的方法来实现远程方法调用，服务消费者整合动态代理后支持同步调用和异步调用两种方式。")]),t._v(" "),s("p",[t._v("同时，实现了服务注册中心的基础服务功能，并且将注册中心的基础服务功能整合到了服务提供者，实现了服务注册功能。当启动服务提供者时，服务提供者会使用自定义扫描器来扫描标注有@RpcService注解的类，并解析@RpcService注解，根据解析出的信息构建服务元数据，将服务元数据注册到注册中心，从而实现服务注册的功能。")]),t._v(" "),s("p",[t._v("本章，我们就一起实现将注册中心的基础服务功能整合到服务消费者，进而实现服务发现功能。")]),t._v(" "),s("h2",{attrs:{id:"三、设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),s("p",[s("code",[t._v("如果让你设计如何整合服务消费者与注册中心，你会怎么设计呢？")])]),t._v(" "),s("p",[t._v("服务消费者整合注册中心实现服务发现的整体流程如图23-1所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图23-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-24-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由图23-1可以看出如下信息：")]),t._v(" "),s("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),s("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),s("p",[t._v("（3）服务注册与发现接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现接口的方法实现服务注册功能。")]),t._v(" "),s("p",[t._v("（4）基于服务注册与发现的接口，服务提供者会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),s("p",[t._v("（5）服务消费者会通过服务注册与发现接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),s("p",[t._v("（7）服务消费者从注册中心获取到服务提供者发布的服务信息后，会直接与服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),s("h2",{attrs:{id:"四、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),s("p",[s("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),s("h3",{attrs:{id:"核心类实现关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),s("p",[t._v("服务消费者整合注册中心实现服务发现的核心类关系如图23-2所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图23-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-24-002.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=n.exports}}]);