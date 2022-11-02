(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{663:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第26章-基于spi扩展jdk序列化与反序列化机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第26章-基于spi扩展jdk序列化与反序列化机制"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第26章：基于SPI扩展JDK序列化与反序列化机制")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("我们写的RPC框架不仅实现了服务消费者与服务提供者之间正常的数据交互，也实现了注册中心的基础服务功能，同时，服务提供者正常整合了注册中心，实现了服务注册功能，服务消费者也正常整合了注册中心，实现了服务发现功能。并且在服务消费者端实现了负载均衡功能。并实现了对标Dubbo的SPI扩展机制的基础功能。整体功能越来越完善了。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("我想以SPI扩展机制的方式加载JDK序列化与反序列化功能，可以吗？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们实现了服务提供者与服务消费者的数据交互，并且基于注册中心，服务提供者实现了服务注册的功能，服务消费者实现了服务发现的功能。服务消费者端实现了基于随机算法的负载均衡策略，能够从获取到的多个服务提供者服务中，随机选择一个建立网络连接，进行远程通信。")]),t._v(" "),a("p",[t._v("同时，对标Dubbo实现了SPI扩展机制的基础功能，我们自己手写的RPC框架的功能正在一步步完善中。但是，目前很多功能都是写死在代码里的，比如在实现数据的编解码时，需要实现序列化与反序列化功能，我们在程序中还是写死使用JDK的序列化方式，所以，针对这种在代码中写死的功能，我们需要使用SPI进行动态扩展。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目前很明确：使用SPI动态加载JDK序列化与反序列化机制！")])]),t._v(" "),a("p",[t._v("目前我们实现的数据编解码功能，会使用序列化与反序列化机制对数据进行序列化与反序列化。例如，服务消费者将请求协议数据序列化成二进制字节流，二进制字节流通过网络传输到服务提供者，服务提供者将二进制字节流反序列化成对应的数据。")]),t._v(" "),a("p",[t._v("服务提供者调用真实方法处理后，将真实方法返回的结果封装成响应协议数据，并将响应协议数据序列化成二进制字节流，二进制字节流会通过网络传输给服务消费者，服务消费者获取到二进制字节流数据后，会通过反序列化机制将其解码成对应的数据。")]),t._v(" "),a("p",[t._v("但是目前在数据的编解码中实现序列化与反序列化时，我们写死了使用基于JDK的序列化与反序列化机制。如果后续需要扩展其他的序列化与反序列化机制，那就要修改框架的源代码了，所以，这种方式是非常不可取的。")]),t._v(" "),a("p",[t._v("需要使用SPI动态加载基于JDK的序列化与反序列化机制，这样也方便后续动态扩展其他方式的序列化与反序列化机制。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展JDK序列化与反序列化机制，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展JDK的序列化与反序列化机制后，整体流程如图26-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图26-1","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-27-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图26-1可以看出，在实现数据的编解码过程中，基于JDK实现的数据序列化与反序列化机制，会通过SPI的方式进行加载，不再在程序中写死相应的代码了。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI扩展JDK序列化与反序列化机制的核心类关系如图26-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图26-2","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-27-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);