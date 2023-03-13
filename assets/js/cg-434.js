(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{726:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第61章-服务消费者心跳间隔时间配置化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第61章-服务消费者心跳间隔时间配置化"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第61章：服务消费者心跳间隔时间配置化")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客1："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客2："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI扩展了JDK、Json、Hessian2、FST、Kryo和Protostuff序列化与反序列化机制，在服务消费者端基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM动态代理机制。在服务提供者端，基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM反射机制调用真实方法的功能，并且基于SPI扩展实现了负载均衡策略和增强型负载均衡策略，以及以Zookeeper为例，基于SPI扩展了注册中心，其他类型的注册中心，例如Nacos、Euraka、Etcd和Consul等，则以作业的形式交给小伙伴们自行实现。")]),t._v(" "),a("p",[t._v("在心跳机制章节，我们完成了数据模型、网络协议解析的设计并完成了服务消费者向服务提供者发送心跳信息并接收心跳响应，但是有个美中不足的地方，本章，我们就进一步优化。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("已经实现了服务消费者向服务提供者发送心跳信息并接收心跳响应，还要干啥呢？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们已经实现了服务消费者主动向服务提供者发送心跳数据，并接收服务提供者响应的心跳结果数据。同时，在服务消费者端也实现了定时扫描和清理空闲连接的功能。但是，在之前实现的功能中，无论是服务消费者定时发送心跳数据，还是定时服务消费者定时扫描并清理空闲的连接，这些时间间隔是硬编码写死在了代码中。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：服务消费者心跳间隔时间配置化！")])]),t._v(" "),a("p",[t._v("在前面文章实现的功能中，服务消费者每隔30秒会向服务提供者发送一次心跳数据，并接收从服务提供者返回的心跳结果数据。服务消费者每隔60秒扫描并清理一次空闲的连接。这些时间间隔都是硬编码写死在代码中。正常使用RPC框架实现远程通信时，无法对这些参数进行修改和调优，不利于框架的扩展和调优。")]),t._v(" "),a("p",[t._v("本章，我们就一起将服务消费者心跳间隔的时间配置化，扩展和优化RPC框架。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计服务消费者心跳间隔时间配置化的流程，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("服务消费者心跳间隔时间配置化的流程如图61-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图61-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-12-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图61-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),a("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（3）服务注册与发现SPI接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现SPI接口的方法实现服务注册功能。")]),t._v(" "),a("p",[t._v("（4）基于服务注册与发现的SPI接口，服务提供者会基于SPI接口实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（5）服务消费者会通过服务注册与发现的SPI接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),a("p",[t._v("（6）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于SPI机制动态加载普通算法（我们将第42章~第50章实现的负载均衡算法统称为普通算法）、基于增强型加权随机算法、基于增强型加权轮询算法、基于增强型加权Hash算法、基于增强型加权源IP地址Hash算法、基于增强型Zookeeper一致性Hash算法和最少连接数算法的负载均衡策略，从多个服务中选择一个进行远程网络连接。")]),t._v(" "),a("p",[t._v("（7）服务消费者会直接与根据基于SPI机制动态加载的负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),a("p",[t._v("（8）服务消费者向服务提供者发送心跳ping消息，服务提供者响应服务消费者pong消息。")]),t._v(" "),a("p",[t._v("（9）服务消费者向服务提供者发送心跳ping消息的定时间隔时间由外部配置化，方便后续对框架的扩展和调优。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("服务消费者心跳间隔时间配置化的核心类关系如图61-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图61-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-12-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);