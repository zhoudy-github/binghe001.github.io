(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{636:function(t,a,s){"use strict";s.r(a);var r=s(7),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第18章-消息服务-mq使用场景与选型对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第18章-消息服务-mq使用场景与选型对比"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第18章-消息服务：MQ使用场景与选型对比")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("blockquote",[a("p",[t._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏都更新到第18章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),t._v(" "),a("p",[t._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v(" 知识星球即可获取，文末有入场方式。")])]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则。简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务，同时，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，详细介绍了SpringCloud Gateway网关的核心技术。在链路追踪章节，我们开始简单介绍了分布式链路追踪技术与解决方案，随后在项目中整合Sleuth实现了链路追踪，并使用Sleuth整合ZipKin实现了分布式链路追踪的可视化 。")]),t._v(" "),a("p",[t._v("今天，我们正式进入消息服务章节，首先，我们来简单的聊聊MQ的使用场景，引入MQ后的注意事项以及MQ的选型对比。")]),t._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[t._v("#")]),t._v(" 本章总览")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-007.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"mq的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq的使用场景"}},[t._v("#")]),t._v(" MQ的使用场景")]),t._v(" "),a("p",[t._v("MQ的英文全称是Message Queue，翻译成中文就是消息队列，队列实现了先进先出（FIFO）的消息模型。通过消息队列，我们可以实现多个进程之间的通信，例如，可以实现多个微服务之间的消息通信。MQ的最简模型就是生产者生产消息，将消息发送到MQ，消息消费者订阅MQ，消费消息。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-001","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("MQ的使用场景通常包含："),a("strong",[t._v("异步解耦、流量削峰")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"异步解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步解耦"}},[t._v("#")]),t._v(" 异步解耦")]),t._v(" "),a("p",[t._v("关于异步的场景，我们这里举一个用户下单成功后，向用户发送通知消息，为用户增加积分和优惠券的场景。")]),t._v(" "),a("h4",{attrs:{id:"同步耦合场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步耦合场景分析"}},[t._v("#")]),t._v(" 同步耦合场景分析")]),t._v(" "),a("p",[t._v("如果是同步调用的场景，则具体业务为：当用户提交订单成功后，订单系统会调用通知系统为用户发送消息通知，告知用户下单成功，订单系统调用积分系统为用户增加积分，订单系统调用优惠券系统为用户增加优惠券。整个调用流程如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-002","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("通过上图的分析，可以看到，用户调用订单系统下单时，总共会经过8个步骤。并且每个步骤都是紧密耦合在一起串行执行，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-003","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，订单系统、通知系统、积分系统和优惠券系统是紧密耦合在一起的，订单系统下单、通知系统发通知、积分系统发积分和优惠券系统发优惠券，四个任务全部完成后，才会给用户返回提交订单的结果信息。")]),t._v(" "),a("p",[t._v("用户提交订单花费的总时间为调用订单系统下单的时间+订单系统调用通知系统发送通知的时间+订单系统调用积分系统发放积分的时间+订单系统调用优惠券系统发放优惠券的时间。")]),t._v(" "),a("p",[a("strong",[t._v("注意：这里为了更好的说明系统之间串行执行的问题，忽略了网络的延迟时间。")])]),t._v(" "),a("p",[t._v("这种串行化的系统执行方式，在高并发、大流量场景下是不可取的。另外，如果其中一个系统异常或者宕机，势必会影响到订单系统的可用性。在系统维护上，只要任意一个系统的接口发生变动，订单系统的逻辑也要跟着发生变动。")]),t._v(" "),a("h4",{attrs:{id:"异步解耦场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步解耦场景分析"}},[t._v("#")]),t._v(" 异步解耦场景分析")]),t._v(" "),a("p",[t._v("既然在高并发、大流量场景下使用订单系统直接串行调用通知系统、积分系统和优惠券系统的方式不可取。那我们是否能够使用异步解耦的方式呢。其实，在用户提交订单的场景中，用户最关心的是自己的订单是否提交成功，由于下单时，订单系统会直接返回是否下单成功的提示。对于通知、积分和优惠券可以以异步的方式延后一小段时间执行。并且通知系统、积分系统和优惠券系统之间不存在必然的业务关联逻辑，它们之间可以以并行的方式执行。")]),t._v(" "),a("p",[t._v("所以，可以使用MQ将订单系统与通知系统、积分系统和优惠券系统进行解耦，用户调用订单系统的接口下单时，订单系统向数据库写入订单数据后，向MQ写入消息，就可以直接返回给用户下单成功的提示，此时通知系统、积分系统和优惠券系统都订阅MQ中的消息，收到消息后各自执行自身的业务逻辑即可。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-004","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-004.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当引入MQ进行异步解耦之后，用户调用订单系统的接口下单，订单系统执行完业务逻辑将订单数据入口，会向MQ发送一条消息，随后便直接返回用户下单成功的提示。通知系统、积分系统和优惠券系统会同时订阅MQ中的消息，当收到消息时，它们各自会执行自身的业务逻辑，并且它们是以并行的方式执行各自的业务逻辑。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-005","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-005.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("从执行的时间线上可以看出，当引入MQ进行异步解耦之后，通知系统、积分系统、优惠券系统和订单系统回复响应都是并行执行的，大大提高系统的执行性能。")]),t._v(" "),a("p",[t._v("并且解耦后，任意一个系统异常或者宕机，都不会影响到订单系统的可用性。只要订单系统与其他系统提前约定好发送的消息格式和消息内容，后续任意一个系统的业务逻辑变动，几乎都不会影响到订单系统的逻辑。")]),t._v(" "),a("h3",{attrs:{id:"流量削峰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰"}},[t._v("#")]),t._v(" 流量削峰")]),t._v(" "),a("p",[t._v("MQ在高并发、大流量的场景下可以用作削峰填谷的利器，例如，12306的春运抢票场景、高并发秒杀场景、双十一和618的大促场景等。")]),t._v(" "),a("p",[t._v("在高并发、大流量业务场景下，瞬间会有大量用户的请求涌入系统，如果不对这些流量做处理的话，直接让这些流量进入下游系统，则很可能由于下游系统无法支撑如此高的并发而导致系统崩溃或宕机。为了解决这些问题，可以引入MQ进行流量的削峰填谷。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-17-006","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-17-006.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("将流量发送到MQ中后，下游系统根据自身的处理能力进行消费即可。保证了下游系统的高可用性。")]),t._v(" "),a("h2",{attrs:{id:"引入mq后的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入mq后的注意事项"}},[t._v("#")]),t._v(" 引入MQ后的注意事项")]),t._v(" "),a("p",[t._v("引入MQ最大的优点就是异步解耦和流量削峰，但是引入MQ后也有很多需要注意的事项和问题，主要包括：系统的整体可用性降低、系统的复杂度变高、引入了消息一致性的问题。")]),t._v(" "),a("h3",{attrs:{id:"系统的整体可用性降低"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统的整体可用性降低"}},[t._v("#")]),t._v(" 系统的整体可用性降低")]),t._v(" "),a("p",[t._v("在对一个系统进行架构设计时，引入的外部依赖越多，系统的稳定性和可用性就会降低。系统中引入了MQ，部分业务就会出现强依赖MQ的现象，此时，如果MQ宕机，则部分业务就会变得不可用。所以，引入MQ时，我们就要考虑如何实现MQ的高可用。")]),t._v(" "),a("h3",{attrs:{id:"系统的复杂度变高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统的复杂度变高"}},[t._v("#")]),t._v(" 系统的复杂度变高")]),t._v(" "),a("p",[t._v("引入MQ后，会使之前的同步接口调用变成通过MQ的异步调用，在实际的开发过程中，异步调用会比同步调用复杂的多。并且异步调用出现问题后，重现问题，定位问题和解决问题都会比同步调用复杂的多。")]),t._v(" "),a("p",[t._v("并且引入MQ后，还要考虑如何保证消息的顺序等问题。")]),t._v(" "),a("h3",{attrs:{id:"消息一致性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息一致性问题"}},[t._v("#")]),t._v(" 消息一致性问题")]),t._v(" "),a("p",[t._v("引入MQ后，不得不考虑的一个问题就是消息的一致性问题。这期间就要考虑如何保证消息不丢失，消息幂等和消息数据处理的幂等性问题。")]),t._v(" "),a("h2",{attrs:{id:"mq选型对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq选型对比"}},[t._v("#")]),t._v(" MQ选型对比")]),t._v(" "),a("p",[t._v("目前，在行业内使用的比较多的MQ包含RabbitMQ、Kafka和RocketMQ。这里，我将三者的对比简单整理了个表格，如下所示。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("消息中间件(MQ)")]),t._v(" "),a("th",[t._v("优点")]),t._v(" "),a("th",[t._v("缺点")]),t._v(" "),a("th",[t._v("使用场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RabbitMQ")]),t._v(" "),a("td",[t._v("功能全面、消息的可靠性比较高")]),t._v(" "),a("td",[t._v("吞吐量低，消息大量积累会影响性能，使用的开发语言是erlang，不好定制功能。")]),t._v(" "),a("td",[t._v("规模不大的场景")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka")]),t._v(" "),a("td",[t._v("吞吐量最高，性能最好，集群模式下高可用")]),t._v(" "),a("td",[t._v("功能上比较单一，会丢失部分数据")]),t._v(" "),a("td",[t._v("日志分析，大数据场景")])]),t._v(" "),a("tr",[a("td",[t._v("RocketMQ")]),t._v(" "),a("td",[t._v("吞吐量高，性能高，可用性高，功能全面。使用Java语言开发，容易定制功能。")]),t._v(" "),a("td",[t._v("开源版不如阿里云上版，文档比较简单。")]),t._v(" "),a("td",[t._v("几乎支持所有场景，包含大数据场景和业务场景。")])])])]),t._v(" "),a("p",[a("strong",[t._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),t._v(" "),a("p",[a("strong",[t._v("另外，一不小心就写了18章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),t._v(" "),a("h2",{attrs:{id:"关于星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[t._v("#")]),t._v(" 关于星球")]),t._v(" "),a("p",[t._v("最近，冰河创建了【冰河技术】知识星球，《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的源码获取方式会放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("今天，【冰河技术】知识星球再开放200张优惠券，还没上车的小伙伴赶紧啦，再不上车就跟不上啦！！")]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("4.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"星球门票价格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[t._v("#")]),t._v(" 星球门票价格")]),t._v(" "),a("p",[t._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信「hacker_binghe」扫二维码，或者去公众号「冰河技术」回复「星球」扫二维码进圈。")]),t._v(" "),a("p",[t._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 "),a("strong",[t._v("冰河技术")]),t._v(" 公众号回复 “ "),a("strong",[t._v("星球")]),t._v(" ” ，领取入场优惠券。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);