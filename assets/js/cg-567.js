(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{864:function(t,r,a){"use strict";a.r(r);var _=a(7),e=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第101章-基于spi扩展随机连接淘汰策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第101章-基于spi扩展随机连接淘汰策略"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第101章：基于SPI扩展随机连接淘汰策略")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客1："),r("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客2："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("目前，我们自己手写的RPC框架已经完成了整体设计、服务提供者的实现、服务消费者的实现、注册中心的实现、负载均衡的实现、SPI扩展序列化机制、SPI扩展动态代理机制、SPI扩展反射机制、SPI扩展负载均衡策略、SPI扩展增强型负载均衡策略、SPI扩展实现注册中心、心跳机制、增强型心跳机制、重试机制、整合Spring、整合SpringBoot、整合Docker、整合SpringCloud Alibaba、结果缓存、路由控制、延迟连接、并发控制、流控分析和连接控制等篇章。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("随机连接淘汰策略该怎么实现呢？")])]),t._v(" "),r("p",[t._v("前面我们实现了基于SPI扩展最早连接淘汰策略、最晚连接淘汰策略、先进先出连接淘汰策略、使用次数最少连接淘汰策略和最近未被使用连接淘汰策略，接下来，我们继续基于SPI扩展连接淘汰策略，跟上冰河的节奏，一起加油！")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("目标很明确：基于SPI扩展随机连接淘汰策略！")])]),t._v(" "),r("p",[t._v("随机连接淘汰策略就是当服务提供者目前承载的连接数量超过配置的最大连接数时，服务提供者会从连接列表中随机获取一个连接进行淘汰。")]),t._v(" "),r("p",[t._v("本章，我们就基于SPI扩展随机连接淘汰策略。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你设计基于SPI扩展随机连接淘汰策略的流程，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("基于SPI扩展随机连接淘汰策略的流程如图101-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图101-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2023-02-06-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图101-1可以看出如下信息：")]),t._v(" "),r("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),r("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),r("p",[t._v("（3）服务注册与发现SPI接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现SPI接口的方法实现服务注册功能。")]),t._v(" "),r("p",[t._v("（4）基于服务注册与发现的SPI接口，服务提供者会基于SPI接口实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),r("p",[t._v("（5）服务消费者会通过服务注册与发现的SPI接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),r("p",[t._v("（6）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于SPI机制动态加载普通算法（我们将第42章~第50章实现的负载均衡算法统称为普通算法）、基于增强型加权随机算法、基于增强型加权轮询算法、基于增强型加权Hash算法、基于增强型加权源IP地址Hash算法、基于增强型Zookeeper一致性Hash算法和最少连接数算法的负载均衡策略，从多个服务中选择一个进行远程网络连接。")]),t._v(" "),r("p",[t._v("（7）服务消费者会直接与根据基于SPI机制动态加载的负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),r("p",[t._v("（8）服务消费者向服务提供者发送心跳ping消息，服务提供者响应服务消费者pong消息。服务提供者向服务消费者发送心跳ping消息，服务消费者向服务提供者响应pong消息。")]),t._v(" "),r("p",[t._v("（9）服务消费者发送心跳和服务提供者发送心跳，定时任务的时间间隔都是配置化的。")]),t._v(" "),r("p",[t._v("（10）服务提供者与服务消费者除了手动实现定时任务来实现心跳检测外，还基于Netty的IdleStateHandler实现了心跳检测机制。")]),t._v(" "),r("p",[t._v("（11）服务消费者支持服务订阅的重试机制、服务消费者连接服务提供者支持重试机制。")]),t._v(" "),r("p",[t._v("（12）服务提供者支持以Java原生程序方式和整合Spring的方式提供服务，并且实现了基于Spring XML和Spring注解的方式接入RPC框架的服务提供者。")]),t._v(" "),r("p",[t._v("（13）服务消费者支持以Java原生程序方式和整合Spring的方式提供服务。并且实现了基于Spring XML和Spring注解的方式接入RPC框架的服务消费者。")]),t._v(" "),r("p",[t._v("（14）服务提供者支持整合SpringBoot的功能，并支持基于SpringBoot接入服务提供者。服务消费者支持整合SpringBoot的功能，并支持基于SpringBoot接入服务消费者。")]),t._v(" "),r("p",[t._v("（15）RPC框架支持基于Docker接入服务提供者和服务消费者。")]),t._v(" "),r("p",[t._v("（16）结果缓存通用模型中包含：结果缓存的Key和结果缓存管理器。")]),t._v(" "),r("p",[t._v("（17）服务提供者和服务消费者支持结果缓存。")]),t._v(" "),r("p",[t._v("（18）服务消费者支持基于负载均衡延迟/非延迟连接多个服务提供者（这里的多个服务提供者包括从注册中心获取到的服务提供者列表，也包括配置的服务消费者直连的多个服务提供者），或直接延迟/非延迟连接某个服务提供者，调用服务方法（重试机制）")]),t._v(" "),r("p",[t._v("（19）在并发控制基础模型中，会对外暴露核心线程数和最大线程数，对这两个参数进行配置优化，达到并发控制的目的。并且服务提供者和服务消费者支持并发控制。")]),t._v(" "),r("p",[t._v("（20）服务消费者与服务提供者之间的数据交互会异步通过流控分析后置处理器接口的处理。")]),t._v(" "),r("p",[t._v("（21）连接控制基础模型包含两部分：连接管理和淘汰策略，并且连接管理内部会对淘汰策略进行进一步的封装，对外统一提供连接管理的方法。并且，服务提供者整合了连接控制。")]),t._v(" "),r("p",[t._v("（22）连接淘汰策略支持基于SPI扩展最早连接淘汰策略、最晚连接淘汰策略、先进先出连接淘汰策略、使用次数最少连接淘汰策略、最近未被使用连接淘汰策略、随机连接淘汰策略。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),r("p",[t._v("基于SPI扩展随机连接淘汰策略的核心类关系如图101-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图101-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2023-02-06-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=e.exports}}]);