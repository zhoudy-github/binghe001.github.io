(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{764:function(a,t,s){"use strict";s.r(t);var r=s(24),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第9章-服务容错-服务雪崩与容错方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第9章-服务容错-服务雪崩与容错方案"}},[a._v("#")]),a._v(" SA实战 ·《SpringCloud Alibaba实战》第9章-服务容错：服务雪崩与容错方案")]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("blockquote",[s("p",[a._v("一不小心《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),s("OutboundLink")],1),a._v("》专栏都更新到第9章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),a._v(" "),s("p",[a._v("注意：本项目完整源码加入 "),s("strong",[s("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1)]),a._v(" 知识星球即可获取，文末有优惠券。")])]),a._v(" "),s("p",[a._v("在《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),s("OutboundLink")],1),a._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。但是，现在系统中存在着一个很明显的问题，那就是如果系统的并发量上来后，系统并没有容错的能力，这可能会导致系统不可用或者直接宕机，所以，我们的系统需要支持容错的能力。")]),a._v(" "),s("p",[a._v("本文主要内容如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-009","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-009.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"并发对系统的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发对系统的影响"}},[a._v("#")]),a._v(" 并发对系统的影响")]),a._v(" "),s("p",[a._v("当一个系统的架构设计采用微服务架构模式时，会将庞大而复杂的业务拆分成一个个小的微服务，各个微服务之间以接口或者RPC的形式进行互相调用。在调用的过程中，就会涉及到网路的问题，再加上微服务自身的原因，例如很难做到100%的高可用等。如果众多微服务当中的某个或某些微服务出现问题，不可用或者宕机了，那么其他微服务调用这些微服务的接口时就会出现延迟。如果此时有大量请求进入系统，就会造成请求任务的大量堆积，甚至会造成整体服务的瘫痪。")]),a._v(" "),s("h3",{attrs:{id:"压测说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压测说明"}},[a._v("#")]),a._v(" 压测说明")]),a._v(" "),s("p",[a._v("为了更加直观的说明当系统没有容错能力时，高并发、大流量场景对于系统的影响，我们在这里模拟一个并发的场景。在订单微服务shop-order的"),s("code",[a._v("io.binghe.shop.order.controller.OrderController")]),a._v("类中新增一个concurrentRequest()方法，源码如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/concurrent_request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("concurrentRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"测试业务在高并发场景下是否存在问题"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"binghe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("接下来，为了更好的演示效果，我们限制下Tomcat处理请求的最大并发数，在订单微服务shop-order的resources目录下的application.yml文件中添加如下配置。")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tomcat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("max-threads")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("限制Tomcat一次最多只能处理20个请求。接下来，我们就使用JMeter对 "),s("code",[a._v("http://localhost:8080/order/submit_order")]),a._v(" 接口进行压测，由于订单微服务中没有做任何的容错处理，当对 "),s("code",[a._v("http://localhost:8080/order/submit_order")]),a._v(" 接口的请求压力过大时，我们再访问"),s("code",[a._v("http://localhost:8080/order/concurrent_request")]),a._v(" 接口时，会发现"),s("code",[a._v("http://localhost:8080/order/concurrent_request")]),a._v(" 接口会受到并发请求的影响，访问很慢甚至根本访问不到。")]),a._v(" "),s("h3",{attrs:{id:"压测实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压测实战"}},[a._v("#")]),a._v(" 压测实战")]),a._v(" "),s("p",[a._v("使用JMeter对 "),s("code",[a._v("http://localhost:8080/order/submit_order")]),a._v(" 接口进行压测，JMeter的配置过程如下所示。")]),a._v(" "),s("p",[a._v("（1）打开JMeter的主界面，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-001","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-001.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("（2）在JMeter中右键测试计划添加线程组，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-002","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-002.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("（3）在JMeter中的线程组中配置并发线程数，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-003","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-003.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("如上图所示，将线程数配置成50，Ramp-Up时间配置成0，循环次数为100。表示JMeter每次会在同一时刻向系统发送50个请求，发送100次为止。")]),a._v(" "),s("p",[a._v("（4）在JMeter中右键线程组添加HTTP请求，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-004","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-004.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("（5）在JMeter中配置HTTP请求，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-005","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-005.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("具体配置如下所示。")]),a._v(" "),s("ul",[s("li",[a._v("协议：http")]),a._v(" "),s("li",[a._v("服务器名称或IP：localhost")]),a._v(" "),s("li",[a._v("端口号：8080")]),a._v(" "),s("li",[a._v("方法：GET")]),a._v(" "),s("li",[a._v("路径：/order/submit_order?userId=1001&productId=1001&count=1")]),a._v(" "),s("li",[a._v("内容编码：UTF-8")])]),a._v(" "),s("p",[a._v("（6）配置好JMeter后，点击JMeter上的绿色小三角开始压测，如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-006","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-006.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("点击后会弹出需要保存JMeter脚本的弹出框，根据实际需要点击保存即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-28-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-007.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("点击保存后，开始对 "),s("code",[a._v("http://localhost:8080/order/submit_order")]),a._v(" 接口进行压测，在压测的过程中会发现订单微服务打印日志时，会比较卡顿，同时在浏览器或其他工具中访问"),s("code",[a._v("http://localhost:8080/order/concurrent_request")]),a._v(" 接口会卡顿，甚至根本访问不到。")]),a._v(" "),s("p",[a._v("说明订单微服务中的某个接口一旦访问的并发量过高，其他接口也会受到影响，进而导致订单微服务整体不可用。为了说明这个问题，我们再来看看服务雪崩是个什么鬼。")]),a._v(" "),s("h2",{attrs:{id:"服务雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务雪崩"}},[a._v("#")]),a._v(" 服务雪崩")]),a._v(" "),s("p",[a._v("系统采用分布式或微服务的架构模式后，由于网络或者服务自身的问题，一般服务是很难做到100%高可用的。如果一个服务出现问题，就可能会导致其他的服务级联出现问题，这种故障性问题会在整个系统中不断扩散，进而导致服务不可用，甚至宕机，最终会对整个系统造成灾难性后果。")]),a._v(" "),s("p",[a._v("这里，小伙伴们可以对比冰河写的《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=1664731130786316294&scene=173&from_msgid=2247489193&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("一起进大厂系列"),s("OutboundLink")],1),a._v("》专栏中的《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247489193&idx=1&sn=6d8912a62f5fd09c85a3d44a189e7ef9&chksm=cf55a1a8f82228be7c76699df36377e57347249e1d15b48bad9ef15f2497e9254a36b8d24bad&token=170000552&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("【高并发】面试官：讲讲什么是缓存穿透？击穿？雪崩？如何解决？"),s("OutboundLink")],1),a._v("》一文进行记忆。")]),a._v(" "),s("p",[a._v("为了最大程度的预防服务雪崩，组成整体系统的各个微服务需要支持服务容错的功能。")]),a._v(" "),s("h2",{attrs:{id:"服务容错方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务容错方案"}},[a._v("#")]),a._v(" 服务容错方案")]),a._v(" "),s("p",[a._v("服务容错在一定程度上就是尽最大努力来兼容错误情况的发生，因为在分布式和微服务环境中，不可避免的会出现一些异常情况，我们在设计分布式和微服务系统时，就要考虑到这些异常情况的发生，使得系统具备服务容错能力。")]),a._v(" "),s("p",[a._v("常见的服务错误方案包含：服务限流、服务隔离、服务超时、服务熔断和服务降级等。")]),a._v(" "),s("h3",{attrs:{id:"服务限流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务限流"}},[a._v("#")]),a._v(" 服务限流")]),a._v(" "),s("p",[a._v("服务限流就是限制进入系统的流量，以防止进入系统的流量过大而压垮系统。其主要的作用就是保护服务节点或者集群后面的数据节点，防止瞬时流量过大使服务和数据崩溃（如前端缓存大量实效），造成不可用；还可用于平滑请求。")]),a._v(" "),s("p",[a._v("限流算法有两种，一种就是简单的请求总量计数，一种就是时间窗口限流（一般为1s），如令牌桶算法和漏牌桶算法就是时间窗口的限流算法。")]),a._v(" "),s("h3",{attrs:{id:"服务隔离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务隔离"}},[a._v("#")]),a._v(" 服务隔离")]),a._v(" "),s("p",[a._v("服务隔离有点类似于系统的垂直拆分，就按照一定的规则将系统划分成多个服务模块，并且每个服务模块之间是互相独立的，不会存在强依赖的关系。如果某个拆分后的服务发生故障后，能够将故障产生的影响限制在某个具体的服务内，不会向其他服务扩散，自然也就不会对整体服务产生致命的影响。")]),a._v(" "),s("p",[a._v("互联网行业常用的服务隔离方式有：线程池隔离和信号量隔离。")]),a._v(" "),s("h3",{attrs:{id:"服务超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务超时"}},[a._v("#")]),a._v(" 服务超时")]),a._v(" "),s("p",[a._v("整个系统采用分布式和微服务架构后，系统被拆分成一个个小服务，就会存在服务与服务之间互相调用的现象，从而形成一个个调用链。形成调用链关系的两个服务中，主动调用其他服务接口的服务处于调用链的上游，提供接口供其他服务调用的服务处于调用链的下游。")]),a._v(" "),s("p",[a._v("服务超时就是在上游服务调用下游服务时，设置一个最大响应时间，如果超过这个最大响应时间下游服务还未返回结果，则断开上游服务与下游服务之间的请求连接，释放资源。")]),a._v(" "),s("h3",{attrs:{id:"服务熔断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务熔断"}},[a._v("#")]),a._v(" 服务熔断")]),a._v(" "),s("p",[a._v("在分布式与微服务系统中，如果下游服务因为访问压力过大导致响应很慢或者一直调用失败时，上游服务为了保证系统的整体可用性，会暂时断开与下游服务的调用连接。这种方式就是熔断。")]),a._v(" "),s("p",[a._v("服务熔断一般情况下会有三种状态：关闭、开启和半熔断。")]),a._v(" "),s("ul",[s("li",[a._v("关闭状态：服务一切正常，没有故障时，上游服务调用下游服务时，不会有任何限制。")]),a._v(" "),s("li",[a._v("开启状态：上游服务不再调用下游服务的接口，会直接返回上游服务中预定的方法。")]),a._v(" "),s("li",[a._v("半熔断状态：处于开启状态时，上游服务会根据一定的规则，尝试恢复对下游服务的调用。此时，上游服务会以有限的流量来调用下游服务，同时，会监控调用的成功率。如果成功率达到预期，则进入关闭状态。如果未达到预期，会重新进入开启状态。")])]),a._v(" "),s("h3",{attrs:{id:"服务降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务降级"}},[a._v("#")]),a._v(" 服务降级")]),a._v(" "),s("p",[a._v("服务降级，说白了就是一种服务托底方案，如果服务无法完成正常的调用流程，就使用默认的托底方案来返回数据。例如，在商品详情页一般都会展示商品的介绍信息，一旦商品详情页系统出现故障无法调用时，会直接获取缓存中的商品介绍信息返回给前端页面。")]),a._v(" "),s("h2",{attrs:{id:"关于星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[a._v("#")]),a._v(" 关于星球")]),a._v(" "),s("p",[a._v("《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),s("OutboundLink")],1),a._v("》专栏一不小心就更新了9章了，如何更好的跟上冰河的节奏，一起搞定《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),s("OutboundLink")],1),a._v("》呢？")]),a._v(" "),s("p",[a._v("最近，冰河创建了【冰河技术】知识星球，《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),s("OutboundLink")],1),a._v("》专栏的源码获取方式会放到知识星期中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),a._v(" "),s("h3",{attrs:{id:"星球提供的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[a._v("#")]),a._v(" 星球提供的服务")]),a._v(" "),s("p",[a._v("冰河整理了星球提供的一些服务，如下所示。")]),a._v(" "),s("p",[a._v("加入星球，你将获得：")]),a._v(" "),s("p",[a._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),a._v(" "),s("p",[a._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),a._v(" "),s("p",[a._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),a._v(" "),s("p",[a._v("4.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),a._v(" "),s("p",[a._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),a._v(" "),s("p",[a._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),a._v(" "),s("p",[a._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),a._v(" "),s("p",[a._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),a._v(" "),s("p",[a._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),a._v(" "),s("h3",{attrs:{id:"星球门票价格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[a._v("#")]),a._v(" 星球门票价格")]),a._v(" "),s("p",[a._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),a._v(" "),s("p",[a._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 冰河技术 公众号回复“星球”，领取入场优惠券。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),a._v(" "),s("p",[s("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);