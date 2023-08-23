(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{823:function(a,t,s){"use strict";s.r(t);var e=s(7),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《rpc手撸专栏》第25章-对标dubbo实现spi扩展机制的基础功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第25章-对标dubbo实现spi扩展机制的基础功能"}},[a._v("#")]),a._v(" 《RPC手撸专栏》第25章：对标Dubbo实现SPI扩展机制的基础功能")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("我们写的RPC框架不仅实现了服务消费者与服务提供者之间正常的数据交互，也实现了注册中心的基础服务功能，同时，服务提供者正常整合了注册中心，实现了服务注册功能，服务消费者也正常整合了注册中心，实现了服务发现功能。并且在服务消费者端实现了负载均衡功能，整体功能越来越完善了。")]),a._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[a._v("#")]),a._v(" 一、前言")]),a._v(" "),t("p",[t("code",[a._v("我想进一步提升程序的扩展性，怎么办呢？")])]),a._v(" "),t("p",[a._v("在前面的章节中，服务提供者整合了注册中心，能够在启动时，使用自定义类扫描器扫描标注有@RpcService注解的类，并解析@RpcService注解，将发布的服务的元数据注册到注册中心。同时，服务消费者也整合了注册中心，实现了服务的动态发现功能。")]),a._v(" "),t("p",[a._v("服务消费者整合注册中心之后，再也不用在服务消费者的代码里写死服务提供者监听的IP地址和端口号了。服务消费者实现了无需提前知道，也无需提前关注服务提供者部署在哪台服务器，服务提供者到底是监听的哪个IP和哪个端口号，只需要从注册中心获取服务提供者注册的元数据信息，从元数据信息中解析出对应的IP地址和端口号即可直接与服务提供者建立网络连接。")]),a._v(" "),t("p",[a._v("服务消费者端实现了基于随机算法的负载均衡策略，能够从获取到的多个服务提供者服务中，随机选择一个建立网络连接，进行远程通信。")]),a._v(" "),t("p",[a._v("至此，我们自己手写的RPC框架的功能正在一步步完善中。但是，真要想在实际项目中使用的话，还是有很多工作要做的。比如，需要进一步提升程序的扩展性该如何实现呢？")]),a._v(" "),t("h2",{attrs:{id:"二、目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[a._v("#")]),a._v(" 二、目标")]),a._v(" "),t("p",[t("code",[a._v("目标很明确：实现SPI的基础功能，以便后续基于SPI扩展框架各模块的功能！")])]),a._v(" "),t("p",[a._v("截止到目前，我们自己写的RPC框架中，预留了大量的扩展点，这些扩展点大部分都是基于某一种特定的实现方式来实现的。也就是在程序中写死了某一种实现方式。")]),a._v(" "),t("p",[a._v("例如，在bhrpc-registry-zookeeper工程下的io.binghe.rpc.registry.zookeeper.ZookeeperRegistryService类中的init()方法中，创建ServiceLoadBalancer接口的对象serviceLoadBalancer时，就写死创建的是RandomServiceLoadBalancer对象，源码片段如下所示。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//负载均衡接口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceLoadBalancer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceMeta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" serviceLoadBalancer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RegistryConfig")]),a._v(" registryConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//############省略其他代码#############")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//TODO 默认创建基于随机算法的负载均衡策略，后续基于SPI扩展")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("serviceLoadBalancer "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RandomServiceLoadBalancer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ServiceMeta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("如果框架中使用这种方式实现代码的功能，后续是很难扩展的。就拿上面这代代码来说，如果我们要在服务消费者端实现基于轮询策略的负载均衡，那就要修改框架的源代码了，这种方式是万万不可取的。")]),a._v(" "),t("p",[a._v("好在Java中提供了SPI机制能够动态扩展对应的功能，在我们实现的RPC框架中，会进一步扩展SPI的基础功能，实现对标Dubbo的SPI扩展机制。")]),a._v(" "),t("h2",{attrs:{id:"三、设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[a._v("#")]),a._v(" 三、设计")]),a._v(" "),t("p",[t("code",[a._v("如果让你设计对标Dubbo的SPI扩展机制，你会怎么设计呢？")])]),a._v(" "),t("p",[a._v("基于SPI机制加载接口实现类的总体流程如图25-1所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图25-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-26-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("由图25-1可以看出如下信息：")]),a._v(" "),t("p",[a._v("（1）使用SPI机制时需要定义一个SPI接口，SPI接口与Java中的普通接口相比，一般会在SPI接口上标注一个特殊的注解。")]),a._v(" "),t("p",[a._v("（2）SPI接口会有多个SPI实现类，同样的，SPI实现类与SPI接口一样，一般也会在SPI实现类上标注一个特殊的注解。")]),a._v(" "),t("p",[a._v("（3）具体功能里会引用SPI接口。")]),a._v(" "),t("p",[a._v("（4）具体功能里不会直接创建SPI实现类的对象，而是通过SPI加载机制来动态加载SPI的实现类。")]),a._v(" "),t("p",[a._v("（5）通过SPI加载机制加载的SPI实现类对象，会赋值给SPI接口引用。")]),a._v(" "),t("p",[a._v("（6）在具体功能里通过SPI接口调用的就是通过SPI加载机制加载的SPI实现类实现的具体逻辑。")]),a._v(" "),t("p",[a._v("接下来，以负载均衡策略为例，看看对标Dubbo的SPI扩展机制后，实现的效果如图25-2所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图25-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-15-003.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到，实现的效果就是对标了Dubbo的SPI扩展机制。")]),a._v(" "),t("h2",{attrs:{id:"四、实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[a._v("#")]),a._v(" 四、实现")]),a._v(" "),t("p",[t("code",[a._v("说了这么多，具体要怎么实现呢？")])]),a._v(" "),t("h3",{attrs:{id:"核心类实现关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[a._v("#")]),a._v(" 核心类实现关系")]),a._v(" "),t("p",[a._v("对标Dubbo实现SPI扩展机制的基础功能核心类关系如图25-3所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图25-3","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-26-002.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),t("p",[a._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=n.exports}}]);