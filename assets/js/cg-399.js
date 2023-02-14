(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{692:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第42章-基于spi扩展随机算法负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第42章-基于spi扩展随机算法负载均衡策略"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第42章：基于SPI扩展随机算法负载均衡策略")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们基于SPI扩展了序列化与反序列化机制，在服务消费者端基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM动态代理机制。在服务提供者端，基于SPI扩展了JDK、CGLib、Javassist、ByteBuddy和ASM反射机制调用真实方法的功能。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("搞完序列化与反序列化、动态代理和反射机制的SPI扩展，接下来搞搞负载均衡的SPI扩展？")])]),t._v(" "),a("p",[t._v("在前面的文章中，我们基于SPI分别扩展了序列化与反序列化机制、动态代理机制和反射机制，做到了序列化与反序列化、动态代理和反射机制功能的高度扩展性，如果框架内置的序列化与反序列化、动态代理和反射功能不能满足大家的实际场景需求，各位小伙伴也可以根据RPC框架提供的SPI机制自行扩展相应的功能。")]),t._v(" "),a("p",[t._v("接下来，我们一起对负载均衡功能下手，对这些功能进行SPI扩展。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：基于SPI扩展随机算法负载均衡策略！")])]),t._v(" "),a("p",[t._v("经过前面文章对一些功能进行的SPI扩展，相信很多小伙伴都对SPI扩展机制有了更加深刻的理解，很多小伙伴应该也能够将SPI机制熟练的运用到自己的项目中。")]),t._v(" "),a("p",[t._v("还是那句话：我们学习知识，学习框架，学习自己手写中间件不能只是为了学习这个框架，学习这个技术而已，而是要将学习到的知识运用到自己的实际项目中，学会举一反三，学以致用。")]),t._v(" "),a("p",[t._v("好了，我们一起基于SPI扩展随机算法的负载均衡策略吧。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于SPI扩展随机算法负载均衡策略，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("基于SPI扩展随机算法负载均衡策略的流程如图42-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图42-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-19-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图42-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),a("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（3）服务注册与发现接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现接口的方法实现服务注册功能。")]),t._v(" "),a("p",[t._v("（4）基于服务注册与发现的接口，服务提供者会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（5）服务消费者会通过服务注册与发现接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),a("p",[t._v("（7）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于SPI机制动态加载随机算法的负载均衡策略从多个服务中选择一个进行远程网络连接。")]),t._v(" "),a("p",[t._v("（8）服务消费者会直接与根据基于SPI机制动态加载的负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("基于SPI扩展随机算法负载均衡策略的核心类关系如图42-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图42-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-11-19-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);