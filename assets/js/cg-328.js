(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{619:function(a,t,r){"use strict";r.r(t);var s=r(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分"}},[a._v("#")]),a._v(" SA实战 ·《SpringCloud Alibaba实战》第04章-项目说明、流程设计、技术选型与模块划分")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("在前面的章节中，我们对《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战》"),t("OutboundLink")],1),a._v("专栏的内容进行了简单的介绍，并简单介绍了微服务的相关概念。今天，继续为大家分享《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战》"),t("OutboundLink")],1),a._v("专栏的内容。今天与小伙伴们一起聊聊整个实战专栏最后的准备工作，包括：项目说明、流程设计、技术选型和模块划分。")]),a._v(" "),t("h2",{attrs:{id:"项目说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目说明"}},[a._v("#")]),a._v(" 项目说明")]),a._v(" "),t("p",[a._v("经过一段时间的反复思考，整个《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战》"),t("OutboundLink")],1),a._v("专栏采用实战案例的形式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例。一方面是这些模块的业务逻辑比较简单，另一方面，案例最终会以微服务的形式呈现给大家。")]),a._v(" "),t("p",[a._v("所以，各模块之间会涉及到远程调用、服务治理、服务限流、服务熔断、服务降级、服务容错等功能，会使用注册中心来注册和管理服务。另外，微服务项目会涉及到多模块之间的调用问题，一旦某个接口或者服务出现问题，很难用过排查日志定位问题。所以，项目采用微服务架构后，就需要采用链路追踪技术来追踪和管理各个服务之间的调用关系。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以，采用大家都比较熟悉的电商模块，并且还能够学到这么多技术，何乐而不为呢？")]),a._v(" "),t("h2",{attrs:{id:"项目流程设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目流程设计"}},[a._v("#")]),a._v(" 项目流程设计")]),a._v(" "),t("p",[a._v("整个项目主要分为用户微服务、商品微服务和订单微服务，整个过程模拟的是用户下单扣减库存的操作。这里，为了简化整个流程，将商品的库存信息保存到了商品数据表，同时，使用商品微服务来扣减库存。小伙伴们在实现时，也可以将商品库存信息单独开发一个微服务模块，主体逻辑和将库存信息放在商品微服务进行管理是一样的。各服务之间的调用流程如下。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-002.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("用户微服务、商品微服务和订单微服务的整体流程为：用户通过客户端调用订单微服务的提交订单的接口后，订单微服务会分别调用用户微服务和商品微服务的接口来查询用户信息和商品信息，并校验商品库存是否充足，如果商品库存充足的话，就会保存订单。并且会调用商品微服务的扣减库存的接口来扣减库存。")]),a._v(" "),t("h2",{attrs:{id:"技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[a._v("#")]),a._v(" 技术选型")]),a._v(" "),t("p",[a._v("整个项目采用SpringCloud Alibaba技术栈实现，主要的技术选型如下所示。")]),a._v(" "),t("ul",[t("li",[a._v("持久层框架：MyBatis、MyBatis-Plus")]),a._v(" "),t("li",[a._v("微服务框架：SpringCloud Alibaba")]),a._v(" "),t("li",[a._v("消息中间件：RocketMQ")]),a._v(" "),t("li",[a._v("服务治理与服务配置：Nacos")]),a._v(" "),t("li",[a._v("负载均衡组件：Ribbon")]),a._v(" "),t("li",[a._v("远程服务调用：Fegin")]),a._v(" "),t("li",[a._v("服务限流与容错：Sentinel")]),a._v(" "),t("li",[a._v("服务网关：SpringCloud-Gateway")]),a._v(" "),t("li",[a._v("服务链路追踪：Sleuth+ZipKin")]),a._v(" "),t("li",[a._v("分布式事务：Seata")]),a._v(" "),t("li",[a._v("数据存储：MySQL+ElasticSearch")])]),a._v(" "),t("h2",{attrs:{id:"模块划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块划分"}},[a._v("#")]),a._v(" 模块划分")]),a._v(" "),t("p",[a._v("为了方便开发和维护，同时为了模块的复用性，整体项目在搭建时，会将用户微服务、商品微服务和订单微服务放在同一个Maven父工程下，作为父工程的子模块，同时，将用户微服务、商品微服务和订单微服务都会使用的JavaBean单独作为一个Maven模块，以及各服务都会使用的工具类单独作为一个Maven模块。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-13-003.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("其中各模块的说明如下所示：")]),a._v(" "),t("ul",[t("li",[a._v("shop-springcloud-alibaba：Maven父工程。")]),a._v(" "),t("li",[a._v("shop-bean：各服务都会使用的JavaBean模块，包含实体类、Dto、Vo等JavaBean。")]),a._v(" "),t("li",[a._v("shop-utils：各服务都会使用的工具类模块。")]),a._v(" "),t("li",[a._v("shop-order：订单微服务。")]),a._v(" "),t("li",[a._v("shop-product：商品微服务。")]),a._v(" "),t("li",[a._v("shop-user：用户微服务。")])]),a._v(" "),t("p",[t("strong",[a._v("好了，到此我们的准备工作就做完了，从下一篇开始，我们正式搭建项目开撸源码，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);