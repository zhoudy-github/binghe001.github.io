(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{700:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第53章-基于spi扩展增强型加权hash算法负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第53章-基于spi扩展增强型加权hash算法负载均衡策略"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第53章：基于SPI扩展增强型加权Hash算法负载均衡策略")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI扩展了JDK、Json、Hessian2、FST、Kryo和Protostuff序列化与反序列化机制，在服务消费者端基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM动态代理机制。在服务提供者端，基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM反射机制调用真实方法的功能。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("实现增强型负载均衡策略，我们继续肝...")])]),t._v(" "),a("p",[t._v("在前面的文章中，我们一起实现了基于SPI扩展随机算法、加权随机算法、轮询算法、加权轮询算法、Hash算法、加权Hash算法、基于源IP地址Hash算法、基于源IP地址加权Hash算法和基于Zookeeper的一致性Hash算法负载均衡策略，服务消费者可以根据这些算法实现的负载均衡策略，从多个服务提供者中选择一个，与其进行连接从而实现数据交互。")]),t._v(" "),a("p",[t._v("在增强型负载均衡策略中，我们一起实现了基于SPI扩展增强型加权随机算法和增强型加权轮询算法负载均衡策略，本章，我们继续往下肝，小伙伴们别掉队，一起加油！")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展增强型加权Hash算法负载均衡策略！")])]),t._v(" "),a("p",[t._v("增强型负载均衡策略最核心的实现逻辑就是：根据权重重新生成服务元数据列表，权重越高的元数据，会在最终的列表中出现的次数越多。例如，权重为1，最终出现1次，权重为2，最终出现2次，权重为3，最终出现3次，依此类推。此时，不管是使用何种算法，出现次数越多的服务元数据，被选中的概率越大，一个服务元数据就代表了一个服务提供者实例。")]),t._v(" "),a("p",[t._v("这样，使用增强型加权Hash算法负载均衡策略时，权重越高的服务提供者实例，被选中的概率越大。这样，使用RPC框架时，可以根据服务提供者所在的服务器资源情况，为当前服务器上部署的RPC服务提供者实例配置权重信息。权重越大，使用Hash算法被选中的概率越大。")]),t._v(" "),a("p",[t._v("这一章，我们就一起手撸实现基于SPI扩展增强型加权Hash算法负载均衡策略。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展增强型加权Hash算法的负载均衡策略，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展增强型加权Hash算法的负载均衡策略的流程如图53-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图53-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-02-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图53-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),a("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（3）服务注册与发现接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现接口的方法实现服务注册功能。")]),t._v(" "),a("p",[t._v("（4）基于服务注册与发现的接口，服务提供者会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（5）服务消费者会通过服务注册与发现接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),a("p",[t._v("（7）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于SPI机制动态加载普通算法（我们将第42章~第50章实现的负载均衡算法统称为普通算法）、基于增强型加权随机算法、基于增强型加权轮询算法和基于增强型加权Hash算法的负载均衡策略，从多个服务中选择一个进行远程网络连接。")]),t._v(" "),a("p",[t._v("（8）服务消费者会直接与根据基于SPI机制动态加载的负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI扩展增强型加权Hash算法负载均衡策略的核心类关系如图53-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图53-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-02-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);