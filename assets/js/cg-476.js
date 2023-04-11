(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{768:function(t,e,a){"use strict";a.r(e);var r=a(7),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《rpc手撸专栏》第64章-服务提供者增强型心跳检测机制的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第64章-服务提供者增强型心跳检测机制的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第64章：服务提供者增强型心跳检测机制的实现")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客1："),e("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客2："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("在心跳机制章节，我们完成了数据模型、网络协议解析的设计并完成了服务消费者向服务提供者发送心跳信息并接收心跳响应，并对心跳时间间隔和定时扫描并移除无效连接的时间间隔进行了配置化。同时，完成了服务提供者主动向服务消费者发送心跳信息，并接收服务消费者响应的心跳结果数据，也对定时任务的时间间隔进行了配置话。")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[e("code",[t._v("有没有什么方式不手动写定时任务实现心跳检测呢？")])]),t._v(" "),e("p",[t._v("在前面的文章中，我们实现了服务消费者和服务提供者之间的双向心跳检测机制，服务消费者可以主动向服务提供者发送心跳，而服务提供者也可以主动向服务消费者发送心跳。同时，无论是服务消费者向服务提供者发送心跳，还是服务提供者向服务消费者发送心跳，都实现了定时任务的时间间隔配置化。")]),t._v(" "),e("p",[t._v("除了自己写定时任务实现心跳检测外，有没有一种方式是不需要自己手动写定时任务，就能够实现心跳检测呢？")]),t._v(" "),e("h2",{attrs:{id:"二、目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),e("p",[e("code",[t._v("目标很明确：实现服务提供者增强型心跳检测机制!")])]),t._v(" "),e("p",[t._v("我们自己手写的RPC框架，服务消费者与服务提供者的底层通信使用的框架是Netty，并且服务消费者与服务提供者之间建立的是长连接。当服务消费者与服务提供者之间建立连接后，就需要使用心跳检测机制判断双方是否在线。在前面的文章中，我们已经实现了手动编写定时任务的方式实现了服务消费者与服务提供者之间双向的心跳检测机制。")]),t._v(" "),e("p",[t._v("除了手动写定时任务实现心跳检测机制外，借助于Netty的IdleStateHandler，也可以实现心跳检测机制。")]),t._v(" "),e("p",[t._v("Netty中的IdleStateHandler对象本质上是一个Handler处理器，配置在Netty的责任链里面，当发送请求或者收到响应时，都会经过该对象处理。在双方通讯开始后该对象会创建一些空闲检测定时器，用于检测读事件（收到请求会触发读事件）和写事件（连接、发送请求会触发写事件）。当在指定的空闲时间内没有收到读事件或写事件，便会触发超时事件，然后IdleStateHandler将超时事件交给责任链里面的下一个Handler。")]),t._v(" "),e("p",[t._v("如果是在服务提供者端，检测到超时事件，可以直接关闭超时的连接。如果是在服务消费者端，检测到超时事件，可以构造一个心跳请求对象，向服务提供者发起心跳数据。")]),t._v(" "),e("p",[t._v("本章，我们就基于Netty的IdleStateHandler实现服务提供者端的心跳检测机制。")]),t._v(" "),e("h2",{attrs:{id:"三、设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),e("p",[e("code",[t._v("如果让你设计实现服务提供者增强型心跳检测机制的流程，你会怎么设计呢？")])]),t._v(" "),e("p",[t._v("实现服务提供者增强型心跳检测机制的流程如图64-1所示。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"图64-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-20-001.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("由图64-1可以看出如下信息：")]),t._v(" "),e("p",[t._v("（1）服务提供者会通过自定义类扫描器整合注册中心，将服务注册到注册中心。")]),t._v(" "),e("p",[t._v("（2）服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),e("p",[t._v("（3）服务注册与发现SPI接口对外提供服务注册与发现的方法，服务提供者通过自定义扫描器会调用服务注册与发现SPI接口的方法实现服务注册功能。")]),t._v(" "),e("p",[t._v("（4）基于服务注册与发现的SPI接口，服务提供者会基于SPI接口实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),e("p",[t._v("（5）服务消费者会通过服务注册与发现的SPI接口订阅注册中心的服务，会从注册中心获取到服务提供者发布的服务信息，实现服务发现的功能。")]),t._v(" "),e("p",[t._v("（6）服务消费者从注册中心获取到服务提供者发布的服务信息后，会基于SPI机制动态加载普通算法（我们将第42章~第50章实现的负载均衡算法统称为普通算法）、基于增强型加权随机算法、基于增强型加权轮询算法、基于增强型加权Hash算法、基于增强型加权源IP地址Hash算法、基于增强型Zookeeper一致性Hash算法和最少连接数算法的负载均衡策略，从多个服务中选择一个进行远程网络连接。")]),t._v(" "),e("p",[t._v("（7）服务消费者会直接与根据基于SPI机制动态加载的负载均衡策略选择出的服务提供者建立连接，实现数据交互。也就是说，后续服务消费者会与服务提供者直接实现数据交互。")]),t._v(" "),e("p",[t._v("（8）服务消费者向服务提供者发送心跳ping消息，服务提供者响应服务消费者pong消息。服务提供者向服务消费者发送心跳ping消息，服务消费者向服务提供者响应pong消息。")]),t._v(" "),e("p",[t._v("（9）服务消费者发送心跳和服务提供者发送心跳，定时任务的时间间隔都是配置化的。")]),t._v(" "),e("p",[t._v("（10）服务提供者除了手动实现定时任务来实现心跳检测外，还基于Netty的IdleStateHandler实现了心跳检测机制。")]),t._v(" "),e("h2",{attrs:{id:"四、实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),e("p",[e("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),e("h3",{attrs:{id:"核心类实现关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),e("p",[t._v("实现服务提供者增强型心跳检测机制的核心类关系如图64-2所示。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"图64-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-12-20-002.png",loading:"lazy"}})]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=_.exports}}]);