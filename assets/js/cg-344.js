(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{635:function(r,t,E){"use strict";E.r(t);var e=E(7),a=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"《rpc手撸专栏》第2章-高性能分布式rpc框架整体架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第2章-高性能分布式rpc框架整体架构设计"}},[r._v("#")]),r._v(" 《RPC手撸专栏》第2章：高性能分布式RPC框架整体架构设计")]),r._v(" "),t("p",[r._v("作者：冰河\n"),t("br"),r._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),r._v(" "),t("br"),r._v("博客："),t("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe001.github.io"),t("OutboundLink")],1)]),r._v(" "),t("p",[t("strong",[r._v("大家好，我是冰河~~")])]),r._v(" "),t("p",[r._v("在《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("RPC手撸专栏"),t("OutboundLink")],1),r._v("》的《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("第1章：从零开始手撸一个能在实际场景使用的高性能RPC框架"),t("OutboundLink")],1),r._v("》一文中，详细介绍了冰河为何转去手撸RPC，各位小伙伴们能够在《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("RPC手撸专栏"),t("OutboundLink")],1),r._v("》中学到哪些技术和知识。并对实现的RPC框架的很少的一部分功能进行了演示。最终，带着小伙伴们一起手撸的RPC框架的功能远不止于此。")]),r._v(" "),t("p",[r._v("最后，《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("第1章：从零开始手撸一个能在实际场景使用的高性能RPC框架"),t("OutboundLink")],1),r._v("》一文中给小伙伴们学习《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("RPC手撸专栏"),t("OutboundLink")],1),r._v("》时，提出了一些小小的建议，那就是：纸上得来终觉浅，绝知此事要躬行。冰河希望大家在学习这个专栏的时候勤动手，跟着专栏一起实现代码。期间要多动脑，多总结，这样才能够加深对各项知识点的理解。切忌眼高手低，学了半天却最终啥也没学会。")]),r._v(" "),t("h2",{attrs:{id:"一、文章总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、文章总览"}},[r._v("#")]),r._v(" 一、文章总览")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-06-30-006","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-06-30-006.png",loading:"lazy"}})]),r._v(" "),t("h2",{attrs:{id:"二、rpc框架的背景知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、rpc框架的背景知识"}},[r._v("#")]),r._v(" 二、RPC框架的背景知识")]),r._v(" "),t("p",[r._v("在《"),t("a",{attrs:{href:"https://binghe001.github.io/md/middleware/rpc/2022-06-25-%E3%80%8ARPC%E6%89%8B%E6%92%B8%E4%B8%93%E6%A0%8F%E3%80%8B-%E7%AC%AC1%E7%AB%A0-%E5%BC%80%E7%AF%87-%E6%89%8B%E6%92%B8%E4%B8%80%E4%B8%AA%E8%83%BD%E5%9C%A8%E5%AE%9E%E9%99%85%E5%9C%BA%E6%99%AF%E4%BD%BF%E7%94%A8%E7%9A%84RPC%E6%A1%86%E6%9E%B6.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("第1章：从零开始手撸一个能在实际场景使用的高性能RPC框架"),t("OutboundLink")],1),r._v("》一文中，我详细的跟大家描述了为何转去手撸RPC框架的原因。除此之外，RPC框架是大型互联网企业使用的非常多的一种中间件框架，主要用于解决分布式系统各模块之间的远程调用问题。")]),r._v(" "),t("p",[r._v("市面上有很多成熟的RPC框架，其中也不乏比较出名的。例如，Dubbo、gRPC、Mina、Thrift等。尽管市面上存在这些成熟并且知名的RPC框架。但是，本着从底层原理和源码的角度彻底理解RPC框架的目标。我们还是一起手撸实现一个分布式高性能的RPC框架项目，一步步完善，争取能够在实际环境中得到应用。")]),r._v(" "),t("h2",{attrs:{id:"三、rpc框架整体架构设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、rpc框架整体架构设计"}},[r._v("#")]),r._v(" 三、RPC框架整体架构设计")]),r._v(" "),t("p",[r._v("RPC的英文全称是Remote Procedure Call，翻译成中文就是远程过程调用，能够使开发人员像调用本地服务一样调用远程服务。一个较完善的RPC框架总体上可以分为 "),t("strong",[r._v("服务提供者、注册中心、服务消费者和监控中心")]),r._v(" 。其中，服务提供者、注册中心和服务消费者是必需的，而监控中心则可以根据实际情况进行增减。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-06-30-001","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-06-30-001.png",loading:"lazy"}})]),r._v(" "),t("p",[r._v("RPC框架在架构和实现上，最重要的三个组件就是服务提供者、注册中心和服务消费者，也就是上图中画实线的部分。另外，可根据实际业务场景和实际情况考虑是否在RPC框架整体的架构和实现中添加监控中心组件，也就是上图中画虚线的部分。")]),r._v(" "),t("p",[r._v("在一次RPC调用的流程中，服务提供者、注册中心和服务消费者之间的交互流程如下所示。")]),r._v(" "),t("p",[r._v("（1）服务提供者启动后，会将其提供的服务列表信息注册到注册中心。")]),r._v(" "),t("p",[r._v("（2）服务消费者启动后，会向注册中心订阅服务的地址。")]),r._v(" "),t("p",[r._v("（3）当注册中心的服务列表发生变更时，注册中心会主动向服务消费者推送服务列表。")]),r._v(" "),t("p",[r._v("（4）服务消费者会从订阅的服务列表中，按照一定的规则选择其中一个地址，并将调用服务提供者的方法需要的数据通过网络发送给服务提供者。")]),r._v(" "),t("p",[r._v("（5）服务消费者会通过动态代理的方式远程调用服务提供者提供的服务，期间，服务消费者的动态代理模块会将远程调用需要的接口名称、方法名称、方法参数类型列表、方法参数列表等信息序列化成二进制字节流，传输到服务提供者。")]),r._v(" "),t("p",[r._v("（6）服务提供者接收到服务消费者发来的数据后，要先将二进制字节流进行解码，反序列化成原始数据。")]),r._v(" "),t("p",[r._v("（7）服务提供者根据解码后的数据，调用对应的服务，然后将调用结果进行编码，序列化成二进制字节流返回给服务消费者。")]),r._v(" "),t("p",[r._v("（8）服务消费者接收到服务提供者返回的数据后，进行解码，将二进制字节流反序列化成原始数据，进行后续的业务处理。")]),r._v(" "),t("h2",{attrs:{id:"四、rpc框架核心技术点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、rpc框架核心技术点"}},[r._v("#")]),r._v(" 四、RPC框架核心技术点")]),r._v(" "),t("p",[r._v("一个较为完善的RPC框架的实现会涉及到众多的技术点，但是最核心的技术点大体上包含：服务注册与发现、网络通信协议、序列化与反序列化、RPC调用方式、线程模型、动态代理、负载均衡等。接下来，就对这些核心技术点进行简单的介绍。")]),r._v(" "),t("h3",{attrs:{id:"_1-服务注册与发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务注册与发现"}},[r._v("#")]),r._v(" 1.服务注册与发现")]),r._v(" "),t("p",[r._v("在分布式或微服务环境中，不同服务之间如何进行通信，这是个值得思考的问题。在早期的分布式系统中，一般是通过在服务消费者一端手动配置服务提供者的地址列表，如果服务提供者的地址列表发生变化之后，还要手动修改服务消费者中配置的服务提供者的地址，之后要重启服务消费者才能使配置生效。")]),r._v(" "),t("p",[r._v("后来可以通过服务消费者HTTP请求调用、保存服务提供者的地址列表，由程序开发人员在服务消费者中主动感知服务提供者暴露的服务信息，这就造成了服务消费者与服务提供者之间严重的耦合问题。")]),r._v(" "),t("p",[r._v("正式由于分布式系统中存在着这些问题，注册中心诞生了。在RPC框架中，主要使用注册中心实现服务的注册与发现。服务提供者上线后将自身的服务列表注册到注册中心，当服务提供者下线时，从注册中心中移除自身的服务列表。服务消费者上线后，向注册中心订阅服务提供和的服务列表，然后通过负载均衡算法选择其中一个服务节点进行调用。")]),r._v(" "),t("p",[r._v("为防止由于断网、系统宕机、程序崩溃等问题造成的注册中心一直残留无效服务列表的问题，在引入注册中心时，要采取 "),t("strong",[r._v("主动通知+心跳检测")]),r._v(" 的方案。")]),r._v(" "),t("p",[t("strong",[r._v("具体实现的方案就是")]),r._v(" ：当服务提供者上线时，主动将自身提供的服务列表注册到注册中心；当服务提供者下线时，主动自身注册到注册中心的服务列表。除此之外，需要实现心跳检测的方案，心跳检测可以在服务提供者实现，也可以由注册中心实现。例如，注册中心可以每隔30秒向服务提供者发送一次心跳检测，如果连续3次未收到服务提供者的响应，则认为该服务提供者已经下线，将其注册到注册中心的服务列表移除，并通知服务消费者服务列表发生了变化。")]),r._v(" "),t("p",[r._v("采用主动通知+心跳检测的方案，当服务提供者或者服务消费者发生变化时，无需重启任何服务即可快速实现服务的注册与发现功能。")]),r._v(" "),t("h3",{attrs:{id:"_2-网络通信协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络通信协议"}},[r._v("#")]),r._v(" 2.网络通信协议")]),r._v(" "),t("p",[r._v("RPC框架最主要的功能就是实现RPC远程过程调用，涉及到远程过程调用，那就一定是通过网络进行的，此时就必须通过某种网络通信协议进行数据交互，需要考虑采用哪些方式实现数据的编解码。")]),r._v(" "),t("p",[r._v("由于在分布式系统中，对RPC框架有着极高的性能要求，所以，在RPC框架中，网络通信协议的实现越简单越好，尽可能减少数据编解码和在网络传输过程中的性能损耗。")]),r._v(" "),t("p",[r._v("通用的网络协议有HTTP、TPC、UDP等，RPC框架可以基于这些通用的网络通信协议实现，也可以根据实际需求，实现自定义的网路通信协议。")]),r._v(" "),t("h3",{attrs:{id:"_3-序列化与反序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-序列化与反序列化"}},[r._v("#")]),r._v(" 3.序列化与反序列化")]),r._v(" "),t("p",[r._v("数据在网路上进行传输时，需要将原始数据采用某种编码方式序列化成二进制字节流在网络上传输，不管是服务提供者还是服务消费者接收到数据后，都需要将二进制字节流数据反序列化成原始数据。为了尽可能降低序列化和反序列化带来的性能问题，一般在RPC框架中会选择比较高效的序列化算法。")]),r._v(" "),t("p",[r._v("常用的序列化框架有："),t("strong",[r._v("FastJson、Kryo、Hessian、Protobuf等。")])]),r._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[r._v("#")]),r._v(" 查看完整文章")]),r._v(" "),t("p",[r._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("冰河技术"),t("OutboundLink")],1),r._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=a.exports}}]);