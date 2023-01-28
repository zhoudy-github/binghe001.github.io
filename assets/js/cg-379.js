(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{670:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第24章-服务消费者实现基于随机算法的负载均衡策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第24章-服务消费者实现基于随机算法的负载均衡策略"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第24章：服务消费者实现基于随机算法的负载均衡策略")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("我们写的RPC框架不仅实现了服务消费者与服务提供者之间正常的数据交互，也实现了注册中心的基础服务功能，同时，服务提供者正常整合了注册中心，实现了服务注册功能，服务消费者也正常整合了注册中心，实现了服务发现功能，那接下来，我们还要实现啥功能呢？")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("服务提供者和服务消费者都整合了注册中心，那接下来实现啥？")])]),t._v(" "),a("p",[t._v("在前面的章节中，服务提供者整合了注册中心，能够在启动时，使用自定义类扫描器扫描标注有@RpcService注解的类，并解析@RpcService注解，将发布的服务的元数据注册到注册中心。同时，服务消费者也整合了注册中心，实现了服务的动态发现功能。")]),t._v(" "),a("p",[t._v("服务消费者整合注册中心之后，再也不用在服务消费者的代码里写死服务提供者监听的IP地址和端口号了。服务消费者实现了无需提前知道，也无需提前关注服务提供者部署在哪台服务器，服务提供者到底是监听的哪个IP和哪个端口号，只需要从注册中心获取服务提供者注册的元数据信息，从元数据信息中解析出对应的IP地址和端口号即可直接与服务提供者建立网络连接。")]),t._v(" "),a("p",[t._v("至此，我们写的RPC框架基本可用了，但是如果真的想在项目中使用起来的话，还有很多的工作要做。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标非常明确：服务消费者从注册中心获取到多个相同的RPC服务时，基于随机算法的负载均衡策略选择一个服务，建立远程网络连接。")])]),t._v(" "),a("p",[t._v("在实际部署RPC服务时，服务提供者可能会部署在多台服务器上，也有可能会在同一台服务器上部署同一个服务提供者的多个实例。这样，服务消费者从注册中心获取服务提供者注册的元数据信息时，就会获取到多个元数据信息，也就是会获取到一个服务提供者发布的元数据信息列表。")]),t._v(" "),a("p",[t._v("由于一个服务消费者同时只能跟一个服务提供者的实例进行远程网络连接，因此，服务消费者需要根据一定的负载均衡策略从多个服务提供者实例中选择一个进行通信。这种负载均衡策略可以有多种实现方式，本章，我们就以基于随机算法的负载均衡策略进行实现。后续会根据SPI技术进行动态扩展。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计服务消费者实现基于随机算法的负载均衡策略，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("服务消费者实现基于随机算法的负载均衡策略的整体流程如图24-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图24-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-25-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图24-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),a("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（3）服务注册与发现接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现接口的方法实现服务注册功能。")]),t._v(" "),a("p",[t._v("（4）基于服务注册与发现的接口，服务提供者会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（5）服务消费者会通过服务注册与发现接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),a("p",[t._v("（7）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于随机算法的负载均衡策略从多个服务中选择一个进行远程网络连接。")]),t._v(" "),a("p",[t._v("（8）服务消费者会直接与根据负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("服务消费者实现基于随机算法的负载均衡策略的核心类关系如图24-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图24-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-25-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);