(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{734:function(t,a,r){"use strict";r.r(a);var s=r(7),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第18章-消息服务-mq使用场景与选型对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第18章-消息服务-mq使用场景与选型对比"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第18章-消息服务：MQ使用场景与选型对比")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("blockquote",[a("p",[t._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏都更新到第18章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),t._v(" "),a("p",[t._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v(" 知识星球即可获取，文末有入场方式。")])]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则。简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务，同时，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，详细介绍了SpringCloud Gateway网关的核心技术。在链路追踪章节，我们开始简单介绍了分布式链路追踪技术与解决方案，随后在项目中整合Sleuth实现了链路追踪，并使用Sleuth整合ZipKin实现了分布式链路追踪的可视化 。")]),t._v(" "),a("p",[t._v("今天，我们正式进入消息服务章节，首先，我们来简单的聊聊MQ的使用场景，引入MQ后的注意事项以及MQ的选型对比。")]),t._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[t._v("#")]),t._v(" 本章总览")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-007.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"mq的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq的使用场景"}},[t._v("#")]),t._v(" MQ的使用场景")]),t._v(" "),a("p",[t._v("MQ的英文全称是Message Queue，翻译成中文就是消息队列，队列实现了先进先出（FIFO）的消息模型。通过消息队列，我们可以实现多个进程之间的通信，例如，可以实现多个微服务之间的消息通信。MQ的最简模型就是生产者生产消息，将消息发送到MQ，消息消费者订阅MQ，消费消息。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-001","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("MQ的使用场景通常包含："),a("strong",[t._v("异步解耦、流量削峰")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"异步解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步解耦"}},[t._v("#")]),t._v(" 异步解耦")]),t._v(" "),a("p",[t._v("关于异步的场景，我们这里举一个用户下单成功后，向用户发送通知消息，为用户增加积分和优惠券的场景。")]),t._v(" "),a("h4",{attrs:{id:"同步耦合场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步耦合场景分析"}},[t._v("#")]),t._v(" 同步耦合场景分析")]),t._v(" "),a("p",[t._v("如果是同步调用的场景，则具体业务为：当用户提交订单成功后，订单系统会调用通知系统为用户发送消息通知，告知用户下单成功，订单系统调用积分系统为用户增加积分，订单系统调用优惠券系统为用户增加优惠券。整个调用流程如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-002","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("通过上图的分析，可以看到，用户调用订单系统下单时，总共会经过8个步骤。并且每个步骤都是紧密耦合在一起串行执行，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-003","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，订单系统、通知系统、积分系统和优惠券系统是紧密耦合在一起的，订单系统下单、通知系统发通知、积分系统发积分和优惠券系统发优惠券，四个任务全部完成后，才会给用户返回提交订单的结果信息。")]),t._v(" "),a("p",[t._v("用户提交订单花费的总时间为调用订单系统下单的时间+订单系统调用通知系统发送通知的时间+订单系统调用积分系统发放积分的时间+订单系统调用优惠券系统发放优惠券的时间。")]),t._v(" "),a("p",[a("strong",[t._v("注意：这里为了更好的说明系统之间串行执行的问题，忽略了网络的延迟时间。")])]),t._v(" "),a("p",[t._v("这种串行化的系统执行方式，在高并发、大流量场景下是不可取的。另外，如果其中一个系统异常或者宕机，势必会影响到订单系统的可用性。在系统维护上，只要任意一个系统的接口发生变动，订单系统的逻辑也要跟着发生变动。")]),t._v(" "),a("h4",{attrs:{id:"异步解耦场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步解耦场景分析"}},[t._v("#")]),t._v(" 异步解耦场景分析")]),t._v(" "),a("p",[t._v("既然在高并发、大流量场景下使用订单系统直接串行调用通知系统、积分系统和优惠券系统的方式不可取。那我们是否能够使用异步解耦的方式呢。其实，在用户提交订单的场景中，用户最关心的是自己的订单是否提交成功，由于下单时，订单系统会直接返回是否下单成功的提示。对于通知、积分和优惠券可以以异步的方式延后一小段时间执行。并且通知系统、积分系统和优惠券系统之间不存在必然的业务关联逻辑，它们之间可以以并行的方式执行。")]),t._v(" "),a("p",[t._v("所以，可以使用MQ将订单系统与通知系统、积分系统和优惠券系统进行解耦，用户调用订单系统的接口下单时，订单系统向数据库写入订单数据后，向MQ写入消息，就可以直接返回给用户下单成功的提示，此时通知系统、积分系统和优惠券系统都订阅MQ中的消息，收到消息后各自执行自身的业务逻辑即可。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-004","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-004.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当引入MQ进行异步解耦之后，用户调用订单系统的接口下单，订单系统执行完业务逻辑将订单数据入口，会向MQ发送一条消息，随后便直接返回用户下单成功的提示。通知系统、积分系统和优惠券系统会同时订阅MQ中的消息，当收到消息时，它们各自会执行自身的业务逻辑，并且它们是以并行的方式执行各自的业务逻辑。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-005","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-005.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("从执行的时间线上可以看出，当引入MQ进行异步解耦之后，通知系统、积分系统、优惠券系统和订单系统回复响应都是并行执行的，大大提高系统的执行性能。")]),t._v(" "),a("p",[t._v("并且解耦后，任意一个系统异常或者宕机，都不会影响到订单系统的可用性。只要订单系统与其他系统提前约定好发送的消息格式和消息内容，后续任意一个系统的业务逻辑变动，几乎都不会影响到订单系统的逻辑。")]),t._v(" "),a("h3",{attrs:{id:"流量削峰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰"}},[t._v("#")]),t._v(" 流量削峰")]),t._v(" "),a("p",[t._v("MQ在高并发、大流量的场景下可以用作削峰填谷的利器，例如，12306的春运抢票场景、高并发秒杀场景、双十一和618的大促场景等。")]),t._v(" "),a("p",[t._v("在高并发、大流量业务场景下，瞬间会有大量用户的请求涌入系统，如果不对这些流量做处理的话，直接让这些流量进入下游系统，则很可能由于下游系统无法支撑如此高的并发而导致系统崩溃或宕机。为了解决这些问题，可以引入MQ进行流量的削峰填谷。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-006","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-006.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("将流量发送到MQ中后，下游系统根据自身的处理能力进行消费即可。保证了下游系统的高可用性。")]),t._v(" "),a("h2",{attrs:{id:"引入mq后的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入mq后的注意事项"}},[t._v("#")]),t._v(" 引入MQ后的注意事项")]),t._v(" "),a("p",[t._v("引入MQ最大的优点就是异步解耦和流量削峰，但是引入MQ后也有很多需要注意的事项和问题，主要包括：系统的整体可用性降低、系统的复杂度变高、引入了消息一致性的问题。")]),t._v(" "),a("h3",{attrs:{id:"系统的整体可用性降低"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统的整体可用性降低"}},[t._v("#")]),t._v(" 系统的整体可用性降低")]),t._v(" "),a("p",[t._v("在对一个系统进行架构设计时，引入的外部依赖越多，系统的稳定性和可用性就会降低。系统中引入了MQ，部分业务就会出现强依赖MQ的现象，此时，如果MQ宕机，则部分业务就会变得不可用。所以，引入MQ时，我们就要考虑如何实现MQ的高可用。")]),t._v(" "),a("h3",{attrs:{id:"系统的复杂度变高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统的复杂度变高"}},[t._v("#")]),t._v(" 系统的复杂度变高")]),t._v(" "),a("p",[t._v("引入MQ后，会使之前的同步接口调用变成通过MQ的异步调用，在实际的开发过程中，异步调用会比同步调用复杂的多。并且异步调用出现问题后，重现问题，定位问题和解决问题都会比同步调用复杂的多。")]),t._v(" "),a("p",[t._v("并且引入MQ后，还要考虑如何保证消息的顺序等问题。")]),t._v(" "),a("h3",{attrs:{id:"消息一致性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息一致性问题"}},[t._v("#")]),t._v(" 消息一致性问题")]),t._v(" "),a("p",[t._v("引入MQ后，不得不考虑的一个问题就是消息的一致性问题。这期间就要考虑如何保证消息不丢失，消息幂等和消息数据处理的幂等性问题。")]),t._v(" "),a("h2",{attrs:{id:"mq选型对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq选型对比"}},[t._v("#")]),t._v(" MQ选型对比")]),t._v(" "),a("p",[t._v("目前，在行业内使用的比较多的MQ包含RabbitMQ、Kafka和RocketMQ。这里，我将三者的对比简单整理了个表格，如下所示。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("消息中间件(MQ)")]),t._v(" "),a("th",[t._v("优点")]),t._v(" "),a("th",[t._v("缺点")]),t._v(" "),a("th",[t._v("使用场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RabbitMQ")]),t._v(" "),a("td",[t._v("功能全面、消息的可靠性比较高")]),t._v(" "),a("td",[t._v("吞吐量低，消息大量积累会影响性能，使用的开发语言是erlang，不好定制功能。")]),t._v(" "),a("td",[t._v("规模不大的场景")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka")]),t._v(" "),a("td",[t._v("吞吐量最高，性能最好，集群模式下高可用")]),t._v(" "),a("td",[t._v("功能上比较单一，会丢失部分数据")]),t._v(" "),a("td",[t._v("日志分析，大数据场景")])]),t._v(" "),a("tr",[a("td",[t._v("RocketMQ")]),t._v(" "),a("td",[t._v("吞吐量高，性能高，可用性高，功能全面。使用Java语言开发，容易定制功能。")]),t._v(" "),a("td",[t._v("开源版不如阿里云上版，文档比较简单。")]),t._v(" "),a("td",[t._v("几乎支持所有场景，包含大数据场景和业务场景。")])])])]),t._v(" "),a("p",[a("strong",[t._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),t._v(" "),a("p",[a("strong",[t._v("另外，一不小心就写了18章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=_.exports}}]);