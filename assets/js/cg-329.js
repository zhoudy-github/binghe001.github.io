(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{619:function(a,t,r){"use strict";r.r(t);var e=r(7),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第12章-服务网关-网关概述与核心架构"}},[a._v("#")]),a._v(" SA实战 ·《SpringCloud Alibaba实战》第12章-服务网关：网关概述与核心架构")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe001.github.io"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe001.github.io/md/all/all.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("blockquote",[t("p",[a._v("一不小心《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),a._v("》专栏都更新到第12章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),a._v(" "),t("p",[a._v("注意：本项目完整源码加入 "),t("strong",[t("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v(" 知识星球即可获取，文末有优惠券。")])]),a._v(" "),t("p",[a._v("在《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),a._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则 。今天，我们正式进入服务网关章节的学习，首先，我们对服务网关进行简要的概述并对其核心架构进行简要的剖析。")]),a._v(" "),t("h2",{attrs:{id:"本章总览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[a._v("#")]),a._v(" 本章总览")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-004","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-08-004.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"网关概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关概述"}},[a._v("#")]),a._v(" 网关概述")]),a._v(" "),t("p",[a._v("当采用分布式、微服务的架构模式开发系统中，服务网关是整个系统中必不可少的一部分。")]),a._v(" "),t("h3",{attrs:{id:"没有网关的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有网关的弊端"}},[a._v("#")]),a._v(" 没有网关的弊端")]),a._v(" "),t("p",[a._v("当一个系统使用分布式、微服务架构后，系统会被拆分为一个个小的微服务，每个微服务专注一个小的业务。那么，客户端如何调用这么多微服务的接口呢？如果不做任何处理，没有服务网关，就只能在客户端记录下每个微服务的每个接口地址，然后根据实际需要去调用相应的接口。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-001","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-08-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这种直接使用客户端记录并管理每个微服务的每个接口的方式，存在着太多的问题。比如，这里我列举几个常见的问题。")]),a._v(" "),t("ul",[t("li",[a._v("由客户端记录并管理所有的接口缺乏安全性。")]),a._v(" "),t("li",[a._v("由客户端直接请求不同的微服务，会增加客户端程序编写的复杂性。")]),a._v(" "),t("li",[a._v("涉及到服务认证与鉴权规则时，需要在每个微服务中实现这些逻辑，增加了代码的冗余性。")]),a._v(" "),t("li",[a._v("客户端调用多个微服务，由于每个微服务可能部署的服务器和域名不同，存在跨域的风险。")]),a._v(" "),t("li",[a._v("当客户端比较多时，每个客户端上都管理和配置所有的接口，维护起来相对比较复杂。")])]),a._v(" "),t("h3",{attrs:{id:"引入api网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入api网关"}},[a._v("#")]),a._v(" 引入API网关")]),a._v(" "),t("p",[a._v("API网关，其实就是整个系统的统一入口。网关会封装微服务的内部结构，为客户端提供统一的入口服务，同时，一些与具体业务逻辑无关的通用逻辑可以在网关中实现，比如认证、授权、路由转发、限流、监控等。引入API网关后，如下所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-002","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-08-002.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到，引入API网关后，客户端只需要连接API网关，由API网关根据实际情况进行路由转发，将请求转发到具体的微服务，同时，API网关会提供认证、授权、限流和监控等功能。")]),a._v(" "),t("h2",{attrs:{id:"主流的api网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主流的api网关"}},[a._v("#")]),a._v(" 主流的API网关")]),a._v(" "),t("p",[a._v("当系统采用分布式、微服务的架构模式后，API网关就成了整个系统不可分割的一部分。业界通过不断的探索与创新，实现了多种API网关的解决方案。目前，比较主流的API网关有：Nginx+Lua、Kong官网、Zuul网关、Apache Shenyu网关、SpringCloud Gateway网关。")]),a._v(" "),t("h3",{attrs:{id:"nginx-lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-lua"}},[a._v("#")]),a._v(" Nginx+Lua")]),a._v(" "),t("p",[a._v("Nginx的一些插件本身就实现了限流、缓存、黑白名单和灰度发布，再加上Nginx的反向代理和负载均衡，能够实现对服务接口的负载均衡和高可用。而Lua语言可以实现一些简单的业务逻辑，Nginx又支持Lua语言。所以，可以基于Nginx+Lua脚本实现网关。")]),a._v(" "),t("h3",{attrs:{id:"kong网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kong网关"}},[a._v("#")]),a._v(" Kong网关")]),a._v(" "),t("p",[a._v("Kong网关基于Nginx与Lua脚本开发，性能高，比较稳定，提供多个限流、鉴权等插件，这些插件支持热插拔，开箱即用。Kong网关提供了管理页面，但是，目前基于Kong网关二次开发比较困难。")]),a._v(" "),t("h3",{attrs:{id:"zuul网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zuul网关"}},[a._v("#")]),a._v(" Zuul网关")]),a._v(" "),t("p",[a._v("Zuul网关是Netflix开源的网关，功能比较丰富，主要基于Java语言开发，便于在Zuul网关的基础上进行二次开发。但是Zuul网关无法实现动态配置规则，依赖的组件相对来说也比较多，在性能上不如Nginx。")]),a._v(" "),t("h3",{attrs:{id:"apache-shenyu网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-shenyu网关"}},[a._v("#")]),a._v(" Apache Shenyu网关")]),a._v(" "),t("p",[a._v("Dromara社区开发的网关框架，ShenYu 的前名是 soul，最近正式加入了 Apache 的孵化器，因此改名为 ShenYu。其是一个异步的，高性能的，跨语言的，响应式的API网关，并在此基础上提供了非常丰富的扩展功能：")]),a._v(" "),t("ul",[t("li",[a._v("支持各种语言(http协议)，支持Dubbo, Spring-Cloud, Grpc, Motan, Sofa, Tars等协议。")]),a._v(" "),t("li",[a._v("插件化设计思想，插件热插拔，易扩展。")]),a._v(" "),t("li",[a._v("灵活的流量筛选，能满足各种流量控制。")]),a._v(" "),t("li",[a._v("内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。")]),a._v(" "),t("li",[a._v("流量配置动态化，性能极高。")]),a._v(" "),t("li",[a._v("支持集群部署，支持 A/B Test，蓝绿发布。")])]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关"}},[a._v("#")]),a._v(" SpringCloud Gateway网关")]),a._v(" "),t("p",[a._v("Spring为了替换Zuul而开发的网关，SpringCloud Alibaba技术栈中，并没有单独实现网关的组件。在后续的案例实现中，我们会使用SpringCloud Gateway实现网关功能。")]),a._v(" "),t("h2",{attrs:{id:"springcloud-gateway网关-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway网关-2"}},[a._v("#")]),a._v(" SpringCloud Gateway网关")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway是Spring公司基于Spring 5.0， Spring Boot 2.0 和 Project Reactor 等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。它的目标是替代Netflix Zuul，其不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控和限流、重试等。")]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway概述"}},[a._v("#")]),a._v(" SpringCloud Gateway概述")]),a._v(" "),t("p",[a._v("Spring  Cloud Gateway是Spring Cloud的一个全新项目，基于Spring 5.0 + Spring Boot 2.0和Project Reactor等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的API路由管理方式。Spring Cloud  Geteway作为Spring Cloud生态系统中的网关，目标是替代Zuul，在Spring  Cloud2.0以上版本中，没有对新版本的Zuul 2.0以上最新高性能版本进行集成，仍然还是使用的Zuul  1.x非Reactor模式的老版本。而为了提升网关性能，Spring Cloud  Gateway是基于WebFlux框架实现的，而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。")]),a._v(" "),t("p",[a._v("Spring Cloud Gateway的目标提供统一的路由方式且基于Filter链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。")]),a._v(" "),t("p",[t("strong",[a._v("总结一句话：Spring Cloud Gateway使用的Webflux中的reactor-netty响应式编程组件，底层使用Netty通讯框架。")])]),a._v(" "),t("h3",{attrs:{id:"springcloud-gateway核心架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-gateway核心架构"}},[a._v("#")]),a._v(" SpringCloud Gateway核心架构")]),a._v(" "),t("p",[a._v("客户端请求到 Gateway 网关，会先经过 Gateway Handler Mapping 进行请求和路由匹配。匹配成功后再发送到  Gateway Web Handler  处理，然后会经过特定的过滤器链，经过所有前置过滤后，会发送代理请求。请求结果返回后，最后会执行所有的后置过滤器。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-08-003","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-08-003.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("由上图可以看出，SpringCloud Gateway的主要流程为：客户端请求会先打到Gateway，具体的讲应该是DispacherHandler（因为Gateway引入了WebFlux，作用可以类比MVC的DispacherServlet），Gateway根据用户的请求找到相应的HandlerMapping，请求和具体的handler之间有一个映射关系，网关会对请求进行路由，handler会匹配到RoutePredicateHandlerMapping，匹配请求对应的Route，然后到达Web处理器，WebHandler代理了一系列网关过滤器和全局过滤器的实例，这些过滤器可以对请求和响应进行修改，最后由代理服务完成用户请求，并将结果返回。")]),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("注：SpringCloud Gateway部分参考链接：")])],1),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("https://www.csdn.net/tags/NtTagg0sMTk1OTItYmxvZwO0O0OO0O0O.html")])],1),a._v(" "),t("p",[t("font",{attrs:{size:"2"}},[a._v("https://baijiahao.baidu.com/s?id=1685753662803832483")])],1),a._v(" "),t("p",[t("strong",[a._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),a._v(" "),t("p",[t("strong",[a._v("另外，一不小心就写了12章了，小伙伴们你们再不上车就跟不上了！！！")])]),a._v(" "),t("h2",{attrs:{id:"关于星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[a._v("#")]),a._v(" 关于星球")]),a._v(" "),t("p",[a._v("最近，冰河创建了【冰河技术】知识星球，《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),a._v("》专栏的源码获取方式会放到知识星期中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),a._v(" "),t("p",[a._v("今天，【冰河技术】知识星球再开放200张优惠券，还没上车的小伙伴赶紧啦，再不上车就跟不上啦！！")]),a._v(" "),t("h3",{attrs:{id:"星球提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[a._v("#")]),a._v(" 星球提供的服务")]),a._v(" "),t("p",[a._v("冰河整理了星球提供的一些服务，如下所示。")]),a._v(" "),t("p",[a._v("加入星球，你将获得：")]),a._v(" "),t("p",[a._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),a._v(" "),t("p",[a._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),a._v(" "),t("p",[a._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),a._v(" "),t("p",[a._v("4.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),a._v(" "),t("p",[a._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),a._v(" "),t("p",[a._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),a._v(" "),t("p",[a._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),a._v(" "),t("p",[a._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),a._v(" "),t("p",[a._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),a._v(" "),t("h3",{attrs:{id:"星球门票价格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[a._v("#")]),a._v(" 星球门票价格")]),a._v(" "),t("p",[a._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),a._v(" "),t("p",[a._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 "),t("strong",[a._v("冰河技术")]),a._v(" 公众号回复 “ "),t("strong",[a._v("星球")]),a._v(" ” ，领取入场优惠券。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-27-007.png",loading:"lazy"}})]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);