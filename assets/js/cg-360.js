(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{652:function(t,a,r){"use strict";r.r(a);var e=r(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们对《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏的内容进行了简单的介绍，并简单介绍了微服务的相关概念。今天，继续为大家分享《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏的内容。今天与小伙伴们一起聊聊整个实战专栏最后的准备工作，包括：项目说明、流程设计、技术选型和模块划分。")]),t._v(" "),a("h2",{attrs:{id:"项目说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目说明"}},[t._v("#")]),t._v(" 项目说明")]),t._v(" "),a("p",[t._v("经过一段时间的反复思考，整个《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏采用实战案例的形式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例。一方面是这些模块的业务逻辑比较简单，另一方面，案例最终会以微服务的形式呈现给大家。")]),t._v(" "),a("p",[t._v("所以，各模块之间会涉及到远程调用、服务治理、服务限流、服务熔断、服务降级、服务容错等功能，会使用注册中心来注册和管理服务。另外，微服务项目会涉及到多模块之间的调用问题，一旦某个接口或者服务出现问题，很难用过排查日志定位问题。所以，项目采用微服务架构后，就需要采用链路追踪技术来追踪和管理各个服务之间的调用关系。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("所以，采用大家都比较熟悉的电商模块，并且还能够学到这么多技术，何乐而不为呢？")]),t._v(" "),a("h2",{attrs:{id:"项目流程设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目流程设计"}},[t._v("#")]),t._v(" 项目流程设计")]),t._v(" "),a("p",[t._v("整个项目主要分为用户微服务、商品微服务和订单微服务，整个过程模拟的是用户下单扣减库存的操作。这里，为了简化整个流程，将商品的库存信息保存到了商品数据表，同时，使用商品微服务来扣减库存。小伙伴们在实现时，也可以将商品库存信息单独开发一个微服务模块，主体逻辑和将库存信息放在商品微服务进行管理是一样的。各服务之间的调用流程如下。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("用户微服务、商品微服务和订单微服务的整体流程为：用户通过客户端调用订单微服务的提交订单的接口后，订单微服务会分别调用用户微服务和商品微服务的接口来查询用户信息和商品信息，并校验商品库存是否充足，如果商品库存充足的话，就会保存订单。并且会调用商品微服务的扣减库存的接口来扣减库存。")]),t._v(" "),a("h2",{attrs:{id:"技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[t._v("#")]),t._v(" 技术选型")]),t._v(" "),a("p",[t._v("整个项目采用SpringCloud Alibaba技术栈实现，主要的技术选型如下所示。")]),t._v(" "),a("ul",[a("li",[t._v("持久层框架：MyBatis、MyBatis-Plus")]),t._v(" "),a("li",[t._v("微服务框架：SpringCloud Alibaba")]),t._v(" "),a("li",[t._v("消息中间件：RocketMQ")]),t._v(" "),a("li",[t._v("服务治理与服务配置：Nacos")]),t._v(" "),a("li",[t._v("负载均衡组件：Ribbon")]),t._v(" "),a("li",[t._v("远程服务调用：Fegin")]),t._v(" "),a("li",[t._v("服务限流与容错：Sentinel")]),t._v(" "),a("li",[t._v("服务网关：SpringCloud-Gateway")]),t._v(" "),a("li",[t._v("服务链路追踪：Sleuth+ZipKin")]),t._v(" "),a("li",[t._v("分布式事务：Seata")]),t._v(" "),a("li",[t._v("数据存储：MySQL+ElasticSearch")])]),t._v(" "),a("h2",{attrs:{id:"模块划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块划分"}},[t._v("#")]),t._v(" 模块划分")]),t._v(" "),a("p",[t._v("为了方便开发和维护，同时为了模块的复用性，整体项目在搭建时，会将用户微服务、商品微服务和订单微服务放在同一个Maven父工程下，作为父工程的子模块，同时，将用户微服务、商品微服务和订单微服务都会使用的JavaBean单独作为一个Maven模块，以及各服务都会使用的工具类单独作为一个Maven模块。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("其中各模块的说明如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("shop-springcloud-alibaba：Maven父工程。")]),t._v(" "),a("li",[t._v("shop-bean：各服务都会使用的JavaBean模块，包含实体类、Dto、Vo等JavaBean。")]),t._v(" "),a("li",[t._v("shop-utils：各服务都会使用的工具类模块。")]),t._v(" "),a("li",[t._v("shop-order：订单微服务。")]),t._v(" "),a("li",[t._v("shop-product：商品微服务。")]),t._v(" "),a("li",[t._v("shop-user：用户微服务。")])]),t._v(" "),a("p",[a("strong",[t._v("好了，到此我们的准备工作就做完了，从下一篇开始，我们正式搭建项目开撸源码，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"vip服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vip服务"}},[t._v("#")]),t._v(" VIP服务")]),t._v(" "),a("p",[a("strong",[t._v("强烈推荐阅读：《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zp0nI2RyFb_UCYpSsUt2OQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("原来大厂面试官也会在这里偷偷学习！"),a("OutboundLink")],1),t._v("》，如果文中优惠券过期，可长按或扫码下面优惠券二维码加入星球。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-18-008.png?raw=true",width:"70%"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("星球优惠券")]),t._v(" "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("冰河技术")]),t._v(" 知识星球 "),a("strong",[t._v("《SpringCloud Alibaba实战》")]),t._v(" 从零搭建并开发微服务项目已完结；"),a("strong",[t._v("《RPC手撸专栏》")]),t._v(" 已经更新120+篇文章，已提交120+项目工程，120+项目源码Tag分支；"),a("strong",[t._v("《Spring核心技术》")]),t._v(" 专栏以Spring的核心注解为突破口，通过源码执行的时序图带你详细分析Spring底层源码，让你学习Spring底层源码不再枯燥。并这些专栏已经将源码的获取方式放到了知识星球中，同时在微信上创建了专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("目前，星球群已形成良好的技术讨论氛围，后续也会像PRC项目一样全程手撸企业级中间件项目，"),a("strong",[t._v("涉及分布式、高并发、高性能、高可靠、高可扩展，让大家知其然，更知其所以然，从手写企业级中间件项目的过程中，充分掌握分布式、高并发、高性能、高可靠、高可扩展的编程技巧。")])]),t._v(" "),a("p",[a("strong",[t._v("更加值得一提的是：有超过30+的大厂面试官悄悄在这里提升核心竞争力！")])]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),t._v(" "),a("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"如何加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=_.exports}}]);