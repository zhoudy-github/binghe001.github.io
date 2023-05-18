(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{683:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第12章-服务网关：网关概述与核心架构")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("blockquote",[a("p",[t._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏都更新到第12章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),t._v(" "),a("p",[t._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v(" 知识星球即可获取，文末有优惠券。")])]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则 。今天，我们正式进入服务网关章节的学习，首先，我们对服务网关进行简要的概述并对其核心架构进行简要的剖析。")]),t._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[t._v("#")]),t._v(" 本章总览")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-004","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-004.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"网关概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关概述"}},[t._v("#")]),t._v(" 网关概述")]),t._v(" "),a("p",[t._v("当采用分布式、微服务的架构模式开发系统中，服务网关是整个系统中必不可少的一部分。")]),t._v(" "),a("h3",{attrs:{id:"没有网关的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有网关的弊端"}},[t._v("#")]),t._v(" 没有网关的弊端")]),t._v(" "),a("p",[t._v("当一个系统使用分布式、微服务架构后，系统会被拆分为一个个小的微服务，每个微服务专注一个小的业务。那么，客户端如何调用这么多微服务的接口呢？如果不做任何处理，没有服务网关，就只能在客户端记录下每个微服务的每个接口地址，然后根据实际需要去调用相应的接口。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-001","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这种直接使用客户端记录并管理每个微服务的每个接口的方式，存在着太多的问题。比如，这里我列举几个常见的问题。")]),t._v(" "),a("ul",[a("li",[t._v("由客户端记录并管理所有的接口缺乏安全性。")]),t._v(" "),a("li",[t._v("由客户端直接请求不同的微服务，会增加客户端程序编写的复杂性。")]),t._v(" "),a("li",[t._v("涉及到服务认证与鉴权规则时，需要在每个微服务中实现这些逻辑，增加了代码的冗余性。")]),t._v(" "),a("li",[t._v("客户端调用多个微服务，由于每个微服务可能部署的服务器和域名不同，存在跨域的风险。")]),t._v(" "),a("li",[t._v("当客户端比较多时，每个客户端上都管理和配置所有的接口，维护起来相对比较复杂。")])]),t._v(" "),a("h3",{attrs:{id:"引入api网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入api网关"}},[t._v("#")]),t._v(" 引入API网关")]),t._v(" "),a("p",[t._v("API网关，其实就是整个系统的统一入口。网关会封装微服务的内部结构，为客户端提供统一的入口服务，同时，一些与具体业务逻辑无关的通用逻辑可以在网关中实现，比如认证、授权、路由转发、限流、监控等。引入API网关后，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-002","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以看到，引入API网关后，客户端只需要连接API网关，由API网关根据实际情况进行路由转发，将请求转发到具体的微服务，同时，API网关会提供认证、授权、限流和监控等功能。")]),t._v(" "),a("h2",{attrs:{id:"主流的api网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主流的api网关"}},[t._v("#")]),t._v(" 主流的API网关")]),t._v(" "),a("p",[t._v("当系统采用分布式、微服务的架构模式后，API网关就成了整个系统不可分割的一部分。业界通过不断的探索与创新，实现了多种API网关的解决方案。目前，比较主流的API网关有：Nginx+Lua、Kong官网、Zuul网关、Apache Shenyu网关、SpringCloud Gateway网关。")]),t._v(" "),a("h3",{attrs:{id:"nginx-lua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-lua"}},[t._v("#")]),t._v(" Nginx+Lua")]),t._v(" "),a("p",[t._v("Nginx的一些插件本身就实现了限流、缓存、黑白名单和灰度发布，再加上Nginx的反向代理和负载均衡，能够实现对服务接口的负载均衡和高可用。而Lua语言可以实现一些简单的业务逻辑，Nginx又支持Lua语言。所以，可以基于Nginx+Lua脚本实现网关。")]),t._v(" "),a("h3",{attrs:{id:"kong网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kong网关"}},[t._v("#")]),t._v(" Kong网关")]),t._v(" "),a("p",[t._v("Kong网关基于Nginx与Lua脚本开发，性能高，比较稳定，提供多个限流、鉴权等插件，这些插件支持热插拔，开箱即用。Kong网关提供了管理页面，但是，目前基于Kong网关二次开发比较困难。")]),t._v(" "),a("h3",{attrs:{id:"zuul网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zuul网关"}},[t._v("#")]),t._v(" Zuul网关")]),t._v(" "),a("p",[t._v("Zuul网关是Netflix开源的网关，功能比较丰富，主要基于Java语言开发，便于在Zuul网关的基础上进行二次开发。但是Zuul网关无法实现动态配置规则，依赖的组件相对来说也比较多，在性能上不如Nginx。")]),t._v(" "),a("h3",{attrs:{id:"apache-shenyu网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-shenyu网关"}},[t._v("#")]),t._v(" Apache Shenyu网关")]),t._v(" "),a("p",[t._v("Dromara社区开发的网关框架，ShenYu 的前名是 soul，最近正式加入了 Apache 的孵化器，因此改名为 ShenYu。其是一个异步的，高性能的，跨语言的，响应式的API网关，并在此基础上提供了非常丰富的扩展功能：")]),t._v(" "),a("ul",[a("li",[t._v("支持各种语言(http协议)，支持Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars等协议。")]),t._v(" "),a("li",[t._v("插件化设计思想，插件热插拔，易扩展。")]),t._v(" "),a("li",[t._v("灵活的流量筛选，能满足各种流量控制。")]),t._v(" "),a("li",[t._v("内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。")]),t._v(" "),a("li",[t._v("流量配置动态化，性能极高。")]),t._v(" "),a("li",[t._v("支持集群部署，支持 A/B Test，蓝绿发布。")])]),t._v(" "),a("h3",{attrs:{id:"springcloud-gateway网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关"}},[t._v("#")]),t._v(" SpringCloud Gateway网关")]),t._v(" "),a("p",[t._v("Spring为了替换Zuul而开发的网关，SpringCloud Alibaba技术栈中，并没有单独实现网关的组件。在后续的案例实现中，我们会使用SpringCloud Gateway实现网关功能。")]),t._v(" "),a("h2",{attrs:{id:"springcloud-gateway网关-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关-2"}},[t._v("#")]),t._v(" SpringCloud Gateway网关")]),t._v(" "),a("p",[t._v("Spring Cloud Gateway是Spring公司基于Spring 5.0， Spring Boot 2.0 和 Project Reactor 等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。它的目标是替代Netflix Zuul，其不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控和限流、重试等。")]),t._v(" "),a("h3",{attrs:{id:"springcloud-gateway概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway概述"}},[t._v("#")]),t._v(" SpringCloud Gateway概述")]),t._v(" "),a("p",[t._v("Spring  Cloud Gateway是Spring Cloud的一个全新项目，基于Spring 5.0 + Spring Boot 2.0和Project Reactor等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的API路由管理方式。Spring Cloud  Geteway作为Spring Cloud生态系统中的网关，目标是替代Zuul，在Spring  Cloud2.0以上版本中，没有对新版本的Zuul 2.0以上最新高性能版本进行集成，仍然还是使用的Zuul  1.x非Reactor模式的老版本。而为了提升网关性能，Spring Cloud  Gateway是基于WebFlux框架实现的，而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。")]),t._v(" "),a("p",[t._v("Spring Cloud Gateway的目标提供统一的路由方式且基于Filter链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。")]),t._v(" "),a("p",[a("strong",[t._v("总结一句话：Spring Cloud Gateway使用的Webflux中的reactor-netty响应式编程组件，底层使用Netty通讯框架。")])]),t._v(" "),a("h3",{attrs:{id:"springcloud-gateway核心架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway核心架构"}},[t._v("#")]),t._v(" SpringCloud Gateway核心架构")]),t._v(" "),a("p",[t._v("客户端请求到 Gateway 网关，会先经过 Gateway Handler Mapping 进行请求和路由匹配。匹配成功后再发送到  Gateway Web Handler  处理，然后会经过特定的过滤器链，经过所有前置过滤后，会发送代理请求。请求结果返回后，最后会执行所有的后置过滤器。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-003","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由上图可以看出，SpringCloud Gateway的主要流程为：客户端请求会先打到Gateway，具体的讲应该是DispacherHandler（因为Gateway引入了WebFlux，作用可以类比MVC的DispacherServlet），Gateway根据用户的请求找到相应的HandlerMapping，请求和具体的handler之间有一个映射关系，网关会对请求进行路由，handler会匹配到RoutePredicateHandlerMapping，匹配请求对应的Route，然后到达Web处理器，WebHandler代理了一系列网关过滤器和全局过滤器的实例，这些过滤器可以对请求和响应进行修改，最后由代理服务完成用户请求，并将结果返回。")]),t._v(" "),a("p",[a("font",{attrs:{size:"2"}},[t._v("注：SpringCloud Gateway部分参考链接：")])],1),t._v(" "),a("p",[a("font",{attrs:{size:"2"}},[t._v("https://www.csdn.net/tags/NtTagg0sMTk1OTItYmxvZwO0O0OO0O0O.html")])],1),t._v(" "),a("p",[a("font",{attrs:{size:"2"}},[t._v("https://baijiahao.baidu.com/s?id=1685753662803832483")])],1),t._v(" "),a("p",[a("strong",[t._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),t._v(" "),a("p",[a("strong",[t._v("另外，一不小心就写了12章了，小伙伴们你们再不上车就跟不上了！！！")])]),t._v(" "),a("h2",{attrs:{id:"vip服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vip服务"}},[t._v("#")]),t._v(" VIP服务")]),t._v(" "),a("p",[a("strong",[t._v("强烈推荐阅读：《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zp0nI2RyFb_UCYpSsUt2OQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("原来大厂面试官也会在这里偷偷学习！"),a("OutboundLink")],1),t._v("》，如果文中优惠券过期，可长按或扫码下面优惠券二维码加入星球。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-18-008.png?raw=true",width:"70%"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("星球优惠券")]),t._v(" "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("冰河技术")]),t._v(" 知识星球 "),a("strong",[t._v("《SpringCloud Alibaba实战》")]),t._v(" 从零搭建并开发微服务项目已完结；"),a("strong",[t._v("《RPC手撸专栏》")]),t._v(" 已经更新120+篇文章，已提交120+项目工程，120+项目源码Tag分支；"),a("strong",[t._v("《Spring核心技术》")]),t._v(" 专栏以Spring的核心注解为突破口，通过源码执行的时序图带你详细分析Spring底层源码，让你学习Spring底层源码不再枯燥。并这些专栏已经将源码的获取方式放到了知识星球中，同时在微信上创建了专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("目前，星球群已形成良好的技术讨论氛围，后续也会像PRC项目一样全程手撸企业级中间件项目，"),a("strong",[t._v("涉及分布式、高并发、高性能、高可靠、高可扩展，让大家知其然，更知其所以然，从手写企业级中间件项目的过程中，充分掌握分布式、高并发、高性能、高可靠、高可扩展的编程技巧。")])]),t._v(" "),a("p",[a("strong",[t._v("更加值得一提的是：有超过30+的大厂面试官悄悄在这里提升核心竞争力！")])]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),t._v(" "),a("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"如何加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=s.exports}}]);