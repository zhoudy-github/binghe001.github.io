(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{770:function(t,a,r){"use strict";r.r(a);var e=r(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们对《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏的内容进行了简单的介绍，并简单介绍了微服务的相关概念。今天，继续为大家分享《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏的内容。今天与小伙伴们一起聊聊整个实战专栏最后的准备工作，包括：项目说明、流程设计、技术选型和模块划分。")]),t._v(" "),a("h2",{attrs:{id:"项目说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目说明"}},[t._v("#")]),t._v(" 项目说明")]),t._v(" "),a("p",[t._v("经过一段时间的反复思考，整个《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战》"),a("OutboundLink")],1),t._v("专栏采用实战案例的形式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例。一方面是这些模块的业务逻辑比较简单，另一方面，案例最终会以微服务的形式呈现给大家。")]),t._v(" "),a("p",[t._v("所以，各模块之间会涉及到远程调用、服务治理、服务限流、服务熔断、服务降级、服务容错等功能，会使用注册中心来注册和管理服务。另外，微服务项目会涉及到多模块之间的调用问题，一旦某个接口或者服务出现问题，很难用过排查日志定位问题。所以，项目采用微服务架构后，就需要采用链路追踪技术来追踪和管理各个服务之间的调用关系。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("所以，采用大家都比较熟悉的电商模块，并且还能够学到这么多技术，何乐而不为呢？")]),t._v(" "),a("h2",{attrs:{id:"项目流程设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目流程设计"}},[t._v("#")]),t._v(" 项目流程设计")]),t._v(" "),a("p",[t._v("整个项目主要分为用户微服务、商品微服务和订单微服务，整个过程模拟的是用户下单扣减库存的操作。这里，为了简化整个流程，将商品的库存信息保存到了商品数据表，同时，使用商品微服务来扣减库存。小伙伴们在实现时，也可以将商品库存信息单独开发一个微服务模块，主体逻辑和将库存信息放在商品微服务进行管理是一样的。各服务之间的调用流程如下。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("用户微服务、商品微服务和订单微服务的整体流程为：用户通过客户端调用订单微服务的提交订单的接口后，订单微服务会分别调用用户微服务和商品微服务的接口来查询用户信息和商品信息，并校验商品库存是否充足，如果商品库存充足的话，就会保存订单。并且会调用商品微服务的扣减库存的接口来扣减库存。")]),t._v(" "),a("h2",{attrs:{id:"技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[t._v("#")]),t._v(" 技术选型")]),t._v(" "),a("p",[t._v("整个项目采用SpringCloud Alibaba技术栈实现，主要的技术选型如下所示。")]),t._v(" "),a("ul",[a("li",[t._v("持久层框架：MyBatis、MyBatis-Plus")]),t._v(" "),a("li",[t._v("微服务框架：SpringCloud Alibaba")]),t._v(" "),a("li",[t._v("消息中间件：RocketMQ")]),t._v(" "),a("li",[t._v("服务治理与服务配置：Nacos")]),t._v(" "),a("li",[t._v("负载均衡组件：Ribbon")]),t._v(" "),a("li",[t._v("远程服务调用：Fegin")]),t._v(" "),a("li",[t._v("服务限流与容错：Sentinel")]),t._v(" "),a("li",[t._v("服务网关：SpringCloud-Gateway")]),t._v(" "),a("li",[t._v("服务链路追踪：Sleuth+ZipKin")]),t._v(" "),a("li",[t._v("分布式事务：Seata")]),t._v(" "),a("li",[t._v("数据存储：MySQL+ElasticSearch")])]),t._v(" "),a("h2",{attrs:{id:"模块划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块划分"}},[t._v("#")]),t._v(" 模块划分")]),t._v(" "),a("p",[t._v("为了方便开发和维护，同时为了模块的复用性，整体项目在搭建时，会将用户微服务、商品微服务和订单微服务放在同一个Maven父工程下，作为父工程的子模块，同时，将用户微服务、商品微服务和订单微服务都会使用的JavaBean单独作为一个Maven模块，以及各服务都会使用的工具类单独作为一个Maven模块。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("其中各模块的说明如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("shop-springcloud-alibaba：Maven父工程。")]),t._v(" "),a("li",[t._v("shop-bean：各服务都会使用的JavaBean模块，包含实体类、Dto、Vo等JavaBean。")]),t._v(" "),a("li",[t._v("shop-utils：各服务都会使用的工具类模块。")]),t._v(" "),a("li",[t._v("shop-order：订单微服务。")]),t._v(" "),a("li",[t._v("shop-product：商品微服务。")]),t._v(" "),a("li",[t._v("shop-user：用户微服务。")])]),t._v(" "),a("p",[a("strong",[t._v("好了，到此我们的准备工作就做完了，从下一篇开始，我们正式搭建项目开撸源码，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=_.exports}}]);