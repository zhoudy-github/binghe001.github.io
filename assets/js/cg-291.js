(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{747:function(a,t,r){"use strict";r.r(t);var e=r(24),_=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》微服务介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》微服务介绍"}},[a._v("#")]),a._v(" SA实战 ·《SpringCloud Alibaba实战》微服务介绍")]),a._v(" "),r("p",[r("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),r("p",[a._v("今天，我们继续为大家分享《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),r("OutboundLink")],1),a._v("》专栏的内容。今天，为大家分享的内容是微服务中常见的一些概念性的内容。")]),a._v(" "),r("h2",{attrs:{id:"题外话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题外话"}},[a._v("#")]),a._v(" 题外话")]),a._v(" "),r("p",[a._v("在开始今天的正文前，冰河先说点 "),r("strong",[a._v("题外话")]),a._v(" 吧：最近冰河也在为《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2043236407732699136#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务系列"),r("OutboundLink")],1),a._v("》录制视频，不少小伙伴在微信公众号后台留言催更《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),r("OutboundLink")],1),a._v("》的内容。所以，冰河在更新频率上也要调整下啦，尽量让《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),r("OutboundLink")],1),a._v("》专栏和《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2043236407732699136#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务系列"),r("OutboundLink")],1),a._v("》专栏连续更新，这样不管是《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),r("OutboundLink")],1),a._v("》专栏，还是《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2043236407732699136#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务系列"),r("OutboundLink")],1),a._v("》专栏，小伙伴们在看视频的时候和在阅读文章的时候都是连续更新的啦。")]),a._v(" "),r("p",[a._v("目前，我能想到的折中方案就是公众号发文时，头条发《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringCloud Alibaba实战"),r("OutboundLink")],1),a._v("》的内容，次条发录制的《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2043236407732699136#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解分布式事务系列"),r("OutboundLink")],1),a._v("》专栏的视频。小伙伴们如果有更好的方案，也可以在文末留言呀。")]),a._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-09-001.png",loading:"lazy"}})]),a._v(" "),r("p",[a._v("另外，有些小伙伴让我在更文的时候，讲一些系统架构都经历了哪些历程。其实按照这个专栏的规划吧，我想的是仅仅围绕着SpringCloud Alibaba的实战内容为大家讲解，尽快开始实战的章节。至于系统架构经历了哪些历程，冰河之前发表过一篇文章，大家可以参见《"),r("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247493667&idx=1&sn=2e0d21381a3f34d312c8a605e9144f4e&chksm=cf565f22f821d634243681ce40d19d396452b0156ebfe99c812c2d363d885511e3e9343d4e7f&scene=178&cur_album_id=1664735258384105476#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("系统由单体架构到微服务架构到底是如何演进的？"),r("OutboundLink")],1),a._v("》一文。")]),a._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-09-002.png",loading:"lazy"}})]),a._v(" "),r("p",[a._v("哈哈，说了那么多题外话，好啦，开始今天的正题吧。今天给大家分享一些微服务开发过程中的一些常见概念，这样在后面为大家正式开始实战内容的话就能够统一概念了。")]),a._v(" "),r("h2",{attrs:{id:"微服务化后的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务化后的问题"}},[a._v("#")]),a._v(" 微服务化后的问题")]),a._v(" "),r("p",[a._v("一个系统，尤其是大型系统使用微服务架构模式进行搭建和开发时，虽然总体上能够提高研发效率、能够支持更高的并发，也能够提高系统整体的性能和可靠性，以及可维护性。但是在实现细节上还是存在着不少的问题。")]),a._v(" "),r("p",[a._v("（1）将系统拆分成各个微服务后，如果管理和感知那么多的服务呢？")]),a._v(" "),r("p",[a._v("（2）将系统拆分成各个微服务后，各个微服务之间如何通信？")]),a._v(" "),r("p",[a._v("（3）将系统拆分成各个微服务后，一旦系统出现问题，如何快速定位问题呢？")]),a._v(" "),r("p",[a._v("（4）将系统拆分成各个微服务后，如何最大程度的保证系统的可用性？")]),a._v(" "),r("p",[a._v("（5）将系统拆分成各个微服务后，客户端如何访问那么多的微服务？")]),a._v(" "),r("p",[a._v("大家可以先思考下这些问题，冰河在下一篇文章中，会为大家揭晓这些问题的答案。")]),a._v(" "),r("h2",{attrs:{id:"微服务常见概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务常见概念"}},[a._v("#")]),a._v(" 微服务常见概念")]),a._v(" "),r("p",[a._v("微服务中有一些常见的概念需要大家了解，以便更好的学习后面的实战章节，冰河今天就简单整理了一些概念性的知识。")]),a._v(" "),r("h3",{attrs:{id:"服务调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务调用"}},[a._v("#")]),a._v(" 服务调用")]),a._v(" "),r("p",[a._v("将一个系统拆分成各个微服务后，各个微服务之间协同工作才能对外提供完整的服务，这就涉及到各个微服务之间的调用问题。目前各个微服务之间一般会采用Restful接口或者RPC协议的方式进行调用。")]),a._v(" "),r("p",[a._v("（1）Restful接口")]),a._v(" "),r("p",[a._v("Restful接口一般是基于HTTP协议实现的，这种协议使用上比较广泛，几乎所有的编程语言都支持HTTP协议。")]),a._v(" "),r("p",[a._v("（2）RPC协议")]),a._v(" "),r("p",[a._v("RPC是一种远程过程调用，能够做到像调用本地服务一样调用远程服务。RPC框架在底层屏蔽了数据的传输方式，序列化方式和交互的细节信息，让使用RPC框架开发微服务的人员觉得更加简单，实现起来更加容易。")]),a._v(" "),r("h3",{attrs:{id:"服务治理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[a._v("#")]),a._v(" 服务治理")]),a._v(" "),r("p",[a._v("服务治理，说白了就是如何自动化的管理各个微服务，核心的功能就是服务的注册、发现和剔除。")]),a._v(" "),r("p",[a._v("（1）服务注册")]),a._v(" "),r("p",[a._v("各个微服务实例在启动时，能够将自身提供的服务注册到某个注册中心。")]),a._v(" "),r("p",[a._v("（2）服务发现")]),a._v(" "),r("p",[a._v("当某个微服务将自身提供的服务注册到注册中心时，其他微服务实例能够通过注册中心感知到这个微服务提供的服务，并且能够获取到这个微服务的实例信息，通过这个微服务的实例信息就能够调用这个微服务的方法，来进行相应的读写操作。")]),a._v(" "),r("p",[a._v("（3）服务剔除")]),a._v(" "),r("p",[a._v("如果某个微服务实例出现故障，或者连接一直超时，则注册中心会认为当前微服务实例不可用，就会将这个微服务实例剔除出注册中心，使其不再被其他微服务感知到和调用到。")]),a._v(" "),r("h3",{attrs:{id:"注册中心"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册中心"}},[a._v("#")]),a._v(" 注册中心")]),a._v(" "),r("p",[a._v("提供微服务注册、发现和剔除功能的服务组件。")]),a._v(" "),r("h3",{attrs:{id:"服务网关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务网关"}},[a._v("#")]),a._v(" 服务网关")]),a._v(" "),r("p",[a._v("服务网关是所有微服务的入口，客户端在访问各个微服务时，首先需要经过服务网关。接入服务网关后，会将所有API的调用统一接入到API的网关层，由网关层统一接收参数进行路由转发，将返回的结果数据返回给客户端。")]),a._v(" "),r("p",[a._v("通常情况下，一个服务网关最基本的功能包括：统一接入、限流、熔断、降级、安全防护、协议适配、容错等等。主要专注的是对系统安全、流量和路由等的管理。这样，业务开发人员就可以专注于开发业务逻辑啦。")]),a._v(" "),r("h3",{attrs:{id:"服务限流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务限流"}},[a._v("#")]),a._v(" 服务限流")]),a._v(" "),r("p",[a._v("在高并发大流量场景下，经常会出现某个服务或者接口因为调用的流量过大而导致不可用的情况，由于某个服务或者接口的不可用，可能还会导致整个系统崩溃。此时，就会对系统采取限流的手段来进行防护，当请求达到一定的频率或者速率时，对这些请求采取排队、等待、降级等策略，甚至是拒绝服务。")]),a._v(" "),r("h3",{attrs:{id:"服务熔断"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务熔断"}},[a._v("#")]),a._v(" 服务熔断")]),a._v(" "),r("p",[a._v("如果某个服务出现故障不可用，或者调用超时，为了不让其他服务受到牵累而导致整个系统不可用，则断开与这个服务的连接，暂停对这个服务的调用。")]),a._v(" "),r("h3",{attrs:{id:"服务降级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务降级"}},[a._v("#")]),a._v(" 服务降级")]),a._v(" "),r("p",[a._v("服务降级主要是从整个系统的负载情况进行考虑，如果某些服务的负载情况比较高，则为了预防某些功能出现负载过高而导致响应慢的问题，会在提供这些功能的方法内部暂时舍弃对一些非核心功能接口的调用，直接返回一个提前准备好的错误处理信息。")]),a._v(" "),r("p",[a._v("服务降级是有损服务，但是能够保证整个系统的稳定性和可用性。")]),a._v(" "),r("h3",{attrs:{id:"服务容错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务容错"}},[a._v("#")]),a._v(" 服务容错")]),a._v(" "),r("p",[a._v("服务容错指的是微服务能够容纳一定错误情况的发生。从某种意义上说，服务限流、服务熔断和服务降级都是服务容错的措施。")]),a._v(" "),r("h3",{attrs:{id:"链路追踪"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪"}},[a._v("#")]),a._v(" 链路追踪")]),a._v(" "),r("p",[a._v("当系统被拆分成各个微服务后，一次请求往往会涉及到多个服务之间的调用关系。如果系统出现问题，则会增加定位问题的难度。为了解决这个问题，就需要对一次请求涉及到的多个服务链路的日志进行追踪和记录，一方面可以记录调用的链路，另一方面还可以监控系统中各个调用环节的性能，这就是链路追踪。")]),a._v(" "),r("h2",{attrs:{id:"springcloud-alibaba"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-alibaba"}},[a._v("#")]),a._v(" SpringCloud Alibaba")]),a._v(" "),r("p",[a._v("SpringCloud Alibaba是阿里开源的一套微服务解决方案，包含各种微服务组件，能够极大的方便开发人员构建微服务应用。")]),a._v(" "),r("h3",{attrs:{id:"主要功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[a._v("#")]),a._v(" 主要功能")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("服务限流降级")]),a._v("：默认支持  WebServlet、WebFlux、OpenFeign、RestTemplate、Spring Cloud  Gateway、Zuul、Dubbo 和 RocketMQ 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级  Metrics 监控。")]),a._v(" "),r("li",[r("strong",[a._v("服务注册与发现")]),a._v("：适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。")]),a._v(" "),r("li",[r("strong",[a._v("分布式配置管理")]),a._v("：支持分布式系统中的外部化配置，配置更改时自动刷新。")]),a._v(" "),r("li",[r("strong",[a._v("消息驱动能力")]),a._v("：基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。")]),a._v(" "),r("li",[r("strong",[a._v("分布式事务")]),a._v("：使用 @GlobalTransactional 注解， 高效并且对业务零侵入地解决分布式事务问题。")]),a._v(" "),r("li",[r("strong",[a._v("阿里云对象存储")]),a._v("：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。")]),a._v(" "),r("li",[r("strong",[a._v("分布式任务调度")]),a._v("：提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。")]),a._v(" "),r("li",[r("strong",[a._v("阿里云短信服务")]),a._v("：覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。")])]),a._v(" "),r("p",[a._v("除了上述所具有的功能外，针对企业级用户的场景，Spring Cloud Alibaba 配套的企业版微服务治理方案 微服务引擎 MSE 还提供了企业级微服务治理中心，包括全链路灰度、服务预热、无损上下线和离群实例摘除等更多更强大的治理能力，同时还提供了企业级 Nacos 注册配置中心，企业级云原生网关等多种产品及解决方案。")]),a._v(" "),r("h3",{attrs:{id:"组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[a._v("#")]),a._v(" 组件")]),a._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/alibaba/Sentinel",target:"_blank",rel:"noopener noreferrer"}},[a._v("Sentinel"),r("OutboundLink")],1)]),a._v("：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/alibaba/Nacos",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nacos"),r("OutboundLink")],1)]),a._v("：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://rocketmq.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("RocketMQ"),r("OutboundLink")],1)]),a._v("：一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/apache/dubbo",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dubbo"),r("OutboundLink")],1)]),a._v("：Apache Dubbo™ 是一款高性能 Java RPC 框架。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/seata/seata",target:"_blank",rel:"noopener noreferrer"}},[a._v("Seata"),r("OutboundLink")],1)]),a._v("：阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.aliyun.com/product/oss",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Cloud OSS"),r("OutboundLink")],1)]),a._v(": 阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://cn.aliyun.com/aliware/schedulerx",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Cloud SchedulerX"),r("OutboundLink")],1)]),a._v(": 阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。")]),a._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.aliyun.com/product/sms",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Cloud SMS"),r("OutboundLink")],1)]),a._v(": 覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。")])]),a._v(" "),r("p",[a._v("注：SpringCloud Alibaba部分转载："),r("a",{attrs:{href:"https://github.com/alibaba/spring-cloud-alibaba/blob/2.2.x/README-zh.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/alibaba/spring-cloud-alibaba/blob/2.2.x/README-zh.md"),r("OutboundLink")],1)]),a._v(" "),r("p",[r("strong",[a._v("好了，今天就到这儿吧，从下一篇开始，我们正式进入实战章节，我是冰河，我们下期见~~")])])])}),[],!1,null,null,null);t.default=_.exports}}]);