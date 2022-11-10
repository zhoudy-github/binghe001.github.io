(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{659:function(t,a,r){"use strict";r.r(a);var e=r(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第22章-服务提供者整合注册中心实现服务注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第22章-服务提供者整合注册中心实现服务注册"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第22章：服务提供者整合注册中心实现服务注册")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("我们写的RPC框架不仅实现了服务消费者与服务提供者之间正常的数据交互，也实现了注册中心的基础服务功能，整体上越来越完善了。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("既然实现了RPC注册中心的基础服务功能，那整合到服务提供者试试？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们实现了注册中心的基础服务功能，也对这些基础服务功能进行了测试，能够正常向Zookeeper中注册和移除对应的元数据服务。")]),t._v(" "),a("p",[t._v("既然实现了注册中心的基础服务功能，那我们将注册中心的这些功能整合到服务提供者，实现服务注册的功能。当服务提供者启动时，就将对应的服务注册到注册中心。")]),t._v(" "),a("p",[t._v("好了，说干就干，我们开始今天的任务。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标相当明确：就是将注册中心的基础服务功能整合到服务提供者，实现服务注册功能！")])]),t._v(" "),a("p",[t._v("目前，我们一起手写的RPC框架，在服务提供者端实现了不依赖任何第三方框架的包扫描功能，能够将标注有@RpcService的注解注册到本地Map中。在服务消费者端能够实现通过直接调用接口的方法来实现远程方法调用，服务消费者整合动态代理后支持同步调用和异步调用两种方式。")]),t._v(" "),a("p",[t._v("同时，也实现了服务注册中心的基础服务功能，本章，我们就是要讲注册中心的基础服务功能整合到服务提供者，实现服务注册功能。当启动服务提供者时，服务提供者会使用自定义扫描器来扫描标注有@RpcService的类，并解析@RpcService注解，根据解析出的信息构建服务元数据，将服务元数据注册到注册中心，从而实现服务注册的功能。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计如何整合服务提供者与注册中心，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("服务提供者整合注册中心实现服务注册的整体流程如图22-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图22-1","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-21-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图22-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),a("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（3）通过服务注册与发现接口对外提供服务注册与发现的方法，自定义扫描器会调用服务注册与发现接口的方法实现服务注册功能。")]),t._v(" "),a("p",[t._v("（4）基于服务注册与发现的接口，会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（5）本章以Zookeeper为例实现服务提供者整合注册中心，进而实现服务注册功能，后续会进行扩展。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("服务提供者整合注册中心实现服务注册的核心类关系如图22-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图22-2","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-21-003.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=_.exports}}]);