(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{729:function(a,t,r){"use strict";r.r(t);var e=r(7),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[a._v("#")]),a._v(" SA实战 ·《SpringCloud Alibaba实战》第12章-服务网关：网关概述与核心架构")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("blockquote",[t("p",[a._v("一不小心《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),a._v("》专栏都更新到第12章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),a._v(" "),t("p",[a._v("注意：本项目完整源码加入 "),t("strong",[t("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v(" 知识星球即可获取，文末有优惠券。")])]),a._v(" "),t("p",[a._v("在《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),a._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则 。今天，我们正式进入服务网关章节的学习，首先，我们对服务网关进行简要的概述并对其核心架构进行简要的剖析。")]),a._v(" "),t("h2",{attrs:{id:"本章总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[a._v("#")]),a._v(" 本章总览")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-004","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-004.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"网关概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关概述"}},[a._v("#")]),a._v(" 网关概述")]),a._v(" "),t("p",[a._v("当采用分布式、微服务的架构模式开发系统中，服务网关是整个系统中必不可少的一部分。")]),a._v(" "),t("h3",{attrs:{id:"没有网关的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有网关的弊端"}},[a._v("#")]),a._v(" 没有网关的弊端")]),a._v(" "),t("p",[a._v("当一个系统使用分布式、微服务架构后，系统会被拆分为一个个小的微服务，每个微服务专注一个小的业务。那么，客户端如何调用这么多微服务的接口呢？如果不做任何处理，没有服务网关，就只能在客户端记录下每个微服务的每个接口地址，然后根据实际需要去调用相应的接口。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-001","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这种直接使用客户端记录并管理每个微服务的每个接口的方式，存在着太多的问题。比如，这里我列举几个常见的问题。")]),a._v(" "),t("ul",[t("li",[a._v("由客户端记录并管理所有的接口缺乏安全性。")]),a._v(" "),t("li",[a._v("由客户端直接请求不同的微服务，会增加客户端程序编写的复杂性。")]),a._v(" "),t("li",[a._v("涉及到服务认证与鉴权规则时，需要在每个微服务中实现这些逻辑，增加了代码的冗余性。")]),a._v(" "),t("li",[a._v("客户端调用多个微服务，由于每个微服务可能部署的服务器和域名不同，存在跨域的风险。")]),a._v(" "),t("li",[a._v("当客户端比较多时，每个客户端上都管理和配置所有的接口，维护起来相对比较复杂。")])]),a._v(" "),t("h3",{attrs:{id:"引入api网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入api网关"}},[a._v("#")]),a._v(" 引入API网关")]),a._v(" "),t("p",[a._v("API网关，其实就是整个系统的统一入口。网关会封装微服务的内部结构，为客户端提供统一的入口服务，同时，一些与具体业务逻辑无关的通用逻辑可以在网关中实现，比如认证、授权、路由转发、限流、监控等。引入API网关后，如下所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-002","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-002.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到，引入API网关后，客户端只需要连接API网关，由API网关根据实际情况进行路由转发，将请求转发到具体的微服务，同时，API网关会提供认证、授权、限流和监控等功能。")]),a._v(" "),t("h2",{attrs:{id:"主流的api网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主流的api网关"}},[a._v("#")]),a._v(" 主流的API网关")]),a._v(" "),t("p",[a._v("当系统采用分布式、微服务的架构模式后，API网关就成了整个系统不可分割的一部分。业界通过不断的探索与创新，实现了多种API网关的解决方案。目前，比较主流的API网关有：Nginx+Lua、Kong官网、Zuul网关、Apache Shenyu网关、SpringCloud Gateway网关。")]),a._v(" "),t("h3",{attrs:{id:"nginx-lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-lua"}},[a._v("#")]),a._v(" Nginx+Lua")]),a._v(" "),t("p",[a._v("Nginx的一些插件本身就实现了限流、缓存、黑白名单和灰度发布，再加上Nginx的反向代理和负载均衡，能够实现对服务接口的负载均衡和高可用。而Lua语言可以实现一些简单的业务逻辑，Nginx又支持Lua语言。所以，可以基于Nginx+Lua脚本实现网关。")]),a._v(" "),t("h3",{attrs:{id:"kong网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kong网关"}},[a._v("#")]),a._v(" Kong网关")]),a._v(" "),t("p",[a._v("Kong网关基于Nginx与Lua脚本开发，性能高，比较稳定，提供多个限流、鉴权等插件，这些插件支持热插拔，开箱即用。Kong网关提供了管理页面，但是，目前基于Kong网关二次开发比较困难。")]),a._v(" "),t("h3",{attrs:{id:"zuul网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zuul网关"}},[a._v("#")]),a._v(" Zuul网关")]),a._v(" "),t("p",[a._v("Zuul网关是Netflix开源的网关，功能比较丰富，主要基于Java语言开发，便于在Zuul网关的基础上进行二次开发。但是Zuul网关无法实现动态配置规则，依赖的组件相对来说也比较多，在性能上不如Nginx。")]),a._v(" "),t("h3",{attrs:{id:"apache-shenyu网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-shenyu网关"}},[a._v("#")]),a._v(" Apache Shenyu网关")]),a._v(" "),t("p",[a._v("Dromara社区开发的网关框架，ShenYu 的前名是 soul，最近正式加入了 Apache 的孵化器，因此改名为 ShenYu。其是一个异步的，高性能的，跨语言的，响应式的API网关，并在此基础上提供了非常丰富的扩展功能：")]),a._v(" "),t("ul",[t("li",[a._v("支持各种语言(http协议)，支持Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars等协议。")]),a._v(" "),t("li",[a._v("插件化设计思想，插件热插拔，易扩展。")]),a._v(" "),t("li",[a._v("灵活的流量筛选，能满足各种流量控制。")]),a._v(" "),t("li",[a._v("内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。")]),a._v(" "),t("li",[a._v("流量配置动态化，性能极高。")]),a._v(" "),t("li",[a._v("支持集群部署，支持 A/B Test，蓝绿发布。")])]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关"}},[a._v("#")]),a._v(" SpringCloud Gateway网关")]),a._v(" "),t("p",[a._v("Spring为了替换Zuul而开发的网关，SpringCloud Alibaba技术栈中，并没有单独实现网关的组件。在后续的案例实现中，我们会使用SpringCloud Gateway实现网关功能。")]),a._v(" "),t("h2",{attrs:{id:"springcloud-gateway网关-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关-2"}},[a._v("#")]),a._v(" SpringCloud Gateway网关")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway是Spring公司基于Spring 5.0， Spring Boot 2.0 和 Project Reactor 等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。它的目标是替代Netflix Zuul，其不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控和限流、重试等。")]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway概述"}},[a._v("#")]),a._v(" SpringCloud Gateway概述")]),a._v(" "),t("p",[a._v("Spring  Cloud Gateway是Spring Cloud的一个全新项目，基于Spring 5.0 + Spring Boot 2.0和Project Reactor等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的API路由管理方式。Spring Cloud  Geteway作为Spring Cloud生态系统中的网关，目标是替代Zuul，在Spring  Cloud2.0以上版本中，没有对新版本的Zuul 2.0以上最新高性能版本进行集成，仍然还是使用的Zuul  1.x非Reactor模式的老版本。而为了提升网关性能，Spring Cloud  Gateway是基于WebFlux框架实现的，而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway的目标提供统一的路由方式且基于Filter链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。")]),a._v(" "),t("p",[t("strong",[a._v("总结一句话：Spring Cloud Gateway使用的Webflux中的reactor-netty响应式编程组件，底层使用Netty通讯框架。")])]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway核心架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway核心架构"}},[a._v("#")]),a._v(" SpringCloud Gateway核心架构")]),a._v(" "),t("p",[a._v("客户端请求到 Gateway 网关，会先经过 Gateway Handler Mapping 进行请求和路由匹配。匹配成功后再发送到  Gateway Web Handler  处理，然后会经过特定的过滤器链，经过所有前置过滤后，会发送代理请求。请求结果返回后，最后会执行所有的后置过滤器。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-003","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-08-003.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("由上图可以看出，SpringCloud Gateway的主要流程为：客户端请求会先打到Gateway，具体的讲应该是DispacherHandler（因为Gateway引入了WebFlux，作用可以类比MVC的DispacherServlet），Gateway根据用户的请求找到相应的HandlerMapping，请求和具体的handler之间有一个映射关系，网关会对请求进行路由，handler会匹配到RoutePredicateHandlerMapping，匹配请求对应的Route，然后到达Web处理器，WebHandler代理了一系列网关过滤器和全局过滤器的实例，这些过滤器可以对请求和响应进行修改，最后由代理服务完成用户请求，并将结果返回。")]),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("注：SpringCloud Gateway部分参考链接：")])],1),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("https://www.csdn.net/tags/NtTagg0sMTk1OTItYmxvZwO0O0OO0O0O.html")])],1),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("https://baijiahao.baidu.com/s?id=1685753662803832483")])],1),a._v(" "),t("p",[t("strong",[a._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),a._v(" "),t("p",[t("strong",[a._v("另外，一不小心就写了12章了，小伙伴们你们再不上车就跟不上了！！！")])]),a._v(" "),t("h2",{attrs:{id:"星球服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[a._v("#")]),a._v(" 星球服务")]),a._v(" "),t("p",[a._v("加入星球，你将获得：")]),a._v(" "),t("p",[a._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),a._v(" "),t("p",[a._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),a._v(" "),t("p",[a._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),a._v(" "),t("p",[a._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),a._v(" "),t("p",[a._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),a._v(" "),t("p",[a._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),a._v(" "),t("h2",{attrs:{id:"星球重磅福利"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[a._v("#")]),a._v(" 星球重磅福利")]),a._v(" "),t("p",[a._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),t("strong",[a._v("直接立减149元，相当于5折，")]),a._v(" 这已经是星球最大优惠力度！")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),a._v(" "),t("p",[t("strong",[a._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),a._v(" "),t("h2",{attrs:{id:"其他方式加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[a._v("#")]),a._v(" 其他方式加入星球")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("链接")]),a._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" 加入星球。")]),a._v(" "),t("li",[t("strong",[a._v("回复")]),a._v(" ：在公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 领取优惠券加入星球。")])]),a._v(" "),t("p",[t("strong",[a._v("特别提醒：")]),a._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[a._v("hacker_binghe")]),a._v(" 扫二维码，或者去公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 扫二维码加入星球。")]),a._v(" "),t("h2",{attrs:{id:"星球规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[a._v("#")]),a._v(" 星球规划")]),a._v(" "),t("p",[a._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),a._v(" "),t("h3",{attrs:{id:"中间件项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[a._v("#")]),a._v(" 中间件项目")]),a._v(" "),t("ul",[t("li",[a._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写Redis》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写JVM》全程手撸代码。")])]),a._v(" "),t("h3",{attrs:{id:"超硬核项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[a._v("#")]),a._v(" 超硬核项目")]),a._v(" "),t("ul",[t("li",[a._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),t("strong",[a._v("已上新")]),a._v("）。")]),a._v(" "),t("li",[a._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),a._v(" "),t("li",[a._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),a._v(" "),t("p",[a._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),a._v(" "),t("p",[a._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),a._v(" "),t("h2",{attrs:{id:"联系冰河"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[a._v("#")]),a._v(" 联系冰河")]),a._v(" "),t("h3",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[a._v("#")]),a._v(" 加群交流")]),a._v(" "),t("p",[a._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[a._v("星球编号")]),a._v("。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("冰河微信")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[a._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),t("strong",[a._v("冰河技术")]),a._v(" 微信公众号首发，强烈建议大家关注。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("公众号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"视频号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[a._v("#")]),a._v(" 视频号")]),a._v(" "),t("p",[a._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("视频号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[a._v("#")]),a._v(" 星球")]),a._v(" "),t("p",[a._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[a._v("hacker_binghe")]),a._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[a._v("实战项目")]),a._v("！")]),a._v(" "),t("p",[a._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("公众号，回复 "),t("code",[a._v("星球")]),a._v(" 可以获取入场优惠券。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("知识星球：冰河技术")]),a._v(" "),t("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);