(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{758:function(e,a,t){"use strict";t.r(a);var v=t(24),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第15章-链路追踪-核心原理与解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第15章-链路追踪-核心原理与解决方案"}},[e._v("#")]),e._v(" SA实战 ·《SpringCloud Alibaba实战》第15章-链路追踪：核心原理与解决方案")]),e._v(" "),t("p",[t("strong",[e._v("大家好，我是冰河~~")])]),e._v(" "),t("blockquote",[t("p",[e._v("一不小心《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),e._v("》专栏都更新到第15章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),e._v(" "),t("p",[e._v("注意：本项目完整源码加入 "),t("strong",[t("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("冰河技术"),t("OutboundLink")],1)]),e._v(" 知识星球即可获取，文末有优惠券。")])]),e._v(" "),t("p",[e._v("在《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),e._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则，同时，简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务，另外，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，并且详细介绍了SpringCloud Gateway网关的核心技术。")]),e._v(" "),t("p",[e._v("今天，正式进入链路追踪章节，本章，就简单介绍下分布式链路追踪技术与解决方案。")]),e._v(" "),t("h2",{attrs:{id:"本章概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章概述"}},[e._v("#")]),e._v(" 本章概述")]),e._v(" "),t("p",[e._v("随着互联网的不断发展，企业的业务系统变得越来越复杂，原本单一的单体应用系统已经无法满足企业业务发展的需要。于是，很多企业开始了对项目的分布式与微服务改造，新项目也在开始的时候就会采用分布式与微服务的架构模式。")]),e._v(" "),t("p",[e._v("一个系统采用分布式与微服务架构后，会被拆分成许多服务模块，这些服务模块之间的调用关系错综复杂，对于客户端请求的分析与处理就会显得异常复杂。此时，就需要一种技术来解决这些问题，而这种技术就是分布式链路追踪技术。")]),e._v(" "),t("h2",{attrs:{id:"分布式链路追踪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式链路追踪"}},[e._v("#")]),e._v(" 分布式链路追踪")]),e._v(" "),t("p",[e._v("随着互联网业务快速扩展，软件架构也日益变得复杂，为了适应海量用户高并发请求，系统中越来越多的组件开始走向分布式化，如单体架构拆分为微服务、服务内缓存变为分布式缓存、服务组件通信变为分布式消息，这些组件共同构成了繁杂的分布式网络。")]),e._v(" "),t("p",[e._v("在这种背景下，一次请求往往需要涉及到多个服务，需要一些可以帮助理解系统行为、用于分析性能问题的工具，以便发生故障的时候，能够快速定位和解决问题。")]),e._v(" "),t("p",[e._v("单体架构中可以使用AOP在调用具体的业务逻辑前后分别打印一下时间即可计算出整体的调用时间，使用 AOP捕获异常也可知道是哪里的调用导致的异常。")]),e._v(" "),t("p",[e._v("但是在分布式微服务场景下，使用AOP技术是无法追踪到各个微服务的调用情况的，也就无法知道系统中处理一次请求的整体调用链路。")]),e._v(" "),t("p",[e._v("另外，在分布式与微服务场景下，我们需要解决如下问题：")]),e._v(" "),t("ul",[t("li",[e._v("在大规模分布式与微服务集群下，如何快速发现并定位到问题。")]),e._v(" "),t("li",[e._v("在大规模分布式与微服务集群下，如何尽可能精确的判断故障对系统的影响范围与影响程度。")]),e._v(" "),t("li",[e._v("在大规模分布式与微服务集群下，如何尽可能精确的梳理出服务之间的依赖关系，并判断出服务之间的依赖关系是否合理。")]),e._v(" "),t("li",[e._v("在大规模分布式与微服务集群下，如何尽可能精确的分析整个系统调用链路的性能与瓶颈点。")]),e._v(" "),t("li",[e._v("在大规模分布式与微服务集群下，如何尽可能精确的分析系统的存储瓶颈与容量规划。")]),e._v(" "),t("li",[e._v("在大规模分布式与微服务集群下，如何实时观测系统的整体调用链路情况。")])]),e._v(" "),t("p",[e._v("上述问题就是分布式链路追踪技术要解决的问题，分布式链路追踪（Distributed Tracing），就是将一次分布式请求还原成调用链路，进行日志记录，性能监控并将一次分布式请求的调用情况集中展示。比如各个服务节点上的耗时、请求具体到达哪台机器上、每个服务节点的请求状态等等。")]),e._v(" "),t("h2",{attrs:{id:"核心原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心原理"}},[e._v("#")]),e._v(" 核心原理")]),e._v(" "),t("p",[e._v("假定三个微服务调用的链路如下图所示：Service 1 调用 Service 2，Service 2 调用 Service 3 和 Service 4。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-10-016","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-10-016.png",loading:"lazy"}})]),e._v(" "),t("p",[e._v("那么链路追踪会在每个服务调用的时候加上 Trace ID 和 Span ID。如下图所示：")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-10-015","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-10-015.png",loading:"lazy"}})]),e._v(" "),t("ul",[t("li",[e._v("大家注意上面的颜色，相同颜色的代表是同一个 Span ID，说明是链路追踪中的一个节点。")]),e._v(" "),t("li",[e._v("第一步：用户端调用 Service 1，生成一个 Request，Trace ID 和 Span ID 为空，那个时候请求还没有到 Service 1。")]),e._v(" "),t("li",[e._v("第二步：请求到达 Service 1，记录了 Trace ID = X，Span ID 等于 A。")]),e._v(" "),t("li",[e._v("第三步：Service 1 发送请求给 Service 2，Span ID 等于 B，被称作 Client Sent，即用户端发送一个请求。")]),e._v(" "),t("li",[e._v("第四步：请求到达 Service 2，Span ID 等于 B，Trace ID 不会改变，被称作 Server Received，即服务端取得请求并准备开始解决它。")]),e._v(" "),t("li",[e._v("第五步：Service 2 开始解决这个请求，解决完之后，Trace ID 不变，Span ID = C。")]),e._v(" "),t("li",[e._v("第六步：Service 2 开始发送这个请求给 Service 3，Trace ID 不变，Span ID = D，被称作 Client Sent，即用户端发送一个请求。")]),e._v(" "),t("li",[e._v("第七步：Service 3 接收到这个请求，Span ID = D，被称作 Server Received。")]),e._v(" "),t("li",[e._v("第八步：Service 3 开始解决这个请求，解决完之后，Span ID = E。")]),e._v(" "),t("li",[e._v("第九步：Service 3 开始发送响应给 Service 2，Span ID = D，被称作 Server Sent，即服务端发送响应。")]),e._v(" "),t("li",[e._v("第十步：Service 3 收到 Service 2 的响应，Span ID = D，被称作 Client Received，即用户端接收响应。")]),e._v(" "),t("li",[e._v("第十一步：Service 2 开始返回 响应给 Service 1，Span ID = B，和第三步的 Span ID 相同，被称作 Client Received，即用户端接收响应。")]),e._v(" "),t("li",[e._v("第十二步：Service 1 解决完响应，Span ID = A，和第二步的 Span ID 相同。")]),e._v(" "),t("li",[e._v("第十三步：Service 1 开始向用户端返回响应，Span ID = A、")]),e._v(" "),t("li",[e._v("Service 3 向 Service 4 发送请求和 Service 3 相似，对应的 Span ID 是 F 和 G。可以参照上面前面的第六步到第十步。")])]),e._v(" "),t("p",[t("strong",[e._v("把以上的相同颜色的步骤简化为下面的链路追踪图：")])]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-10-017","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-10-017.png",loading:"lazy"}})]),e._v(" "),t("ul",[t("li",[e._v("第一个节点：Span ID = A，Parent ID = null，Service 1 接收到请求。")]),e._v(" "),t("li",[e._v("第二个节点：Span ID = B，Parent ID= A，Service 1 发送请求到 Service 2 返回响应给Service 1 的过程。")]),e._v(" "),t("li",[e._v("第三个节点：Span ID = C，Parent ID= B，Service 2 的 中间解决过程。")]),e._v(" "),t("li",[e._v("第四个节点：Span ID = D，Parent ID= C，Service 2 发送请求到 Service 3 返回响应给Service 2 的过程。")]),e._v(" "),t("li",[e._v("第五个节点：Span ID = E，Parent ID= D，Service 3 的中间解决过程。")]),e._v(" "),t("li",[e._v("第六个节点：Span ID = F，Parent ID= C，Service 3 发送请求到 Service 4 返回响应给 Service 3 的过程。")]),e._v(" "),t("li",[e._v("第七个节点：Span ID = G，Parent ID= F，Service 4 的中间解决过程。")])]),e._v(" "),t("p",[e._v("通过 Parent ID 就可找到父节点，整个链路即可以进行跟踪追溯了。")]),e._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),t("p",[e._v("目前，行业内比较成熟的分布式链路追踪技术解决方案如下所示。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("技术")]),e._v(" "),t("th",[e._v("说明")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Cat")]),e._v(" "),t("td",[e._v("由大众点评开源，基于Java开发的实时应用监控平台，包括实时应用监控，业务监控 。 集成方案是通过代码埋点的方式来实现监控，比如： 拦截器，过滤器等。 对代码的侵入性很大，集成成本较高。风险较大。")])]),e._v(" "),t("tr",[t("td",[e._v("ZipKin")]),e._v(" "),t("td",[e._v("由Twitter公司开源，开放源代码分布式的跟踪系统，用于收集服务的定时数据，以解决微服务架构中的延迟问题，包括：数据的收集、存储、查找和展现。结合spring-cloud-sleuth使用较为简单， 集成方便， 但是功能较简单。")])]),e._v(" "),t("tr",[t("td",[e._v("Pinpoint")]),e._v(" "),t("td",[e._v("Pinpoint是一款开源的基于字节码注入的调用链分析，以及应用监控分析工具。特点是支持多种插件， UI功能强大，接入端无代码侵入。")])]),e._v(" "),t("tr",[t("td",[e._v("Skywalking")]),e._v(" "),t("td",[e._v("SkyWalking是国人开源的基于字节码注入的调用链分析，以及应用监控分析工具。特点是支持多"),t("br"),e._v("种插件， UI功能较强，接入端无代码侵入。")])]),e._v(" "),t("tr",[t("td",[e._v("Sleuth")]),e._v(" "),t("td",[e._v("Sleuth为Spring Cloud实现了分布式跟踪解决方案。")])])])]),e._v(" "),t("p",{attrs:{align:"right"}},[t("font",{attrs:{size:"1"}},[e._v("备注：部分参考：songma.com/news/txtlist_i67550v.html")])],1),e._v(" "),t("p",[t("strong",[e._v("注意：在《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),e._v("》专栏中，我们后续会使用 Sleuth+ZipKin的方案实现分布式链路追踪。")])]),e._v(" "),t("p",[e._v("好了，本章的内容还是比较简单的，就是对分布式链路追踪技术做个简单的介绍，下一章，我们就开始实战分布式链路追踪技术了。小伙伴们，你们准备好了吗？")]),e._v(" "),t("p",[t("strong",[e._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),e._v(" "),t("p",[t("strong",[e._v("另外，一不小心就写了15章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),e._v(" "),t("h2",{attrs:{id:"关于星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[e._v("#")]),e._v(" 关于星球")]),e._v(" "),t("p",[e._v("最近，冰河创建了【冰河技术】知识星球，《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpringCloud Alibaba实战"),t("OutboundLink")],1),e._v("》专栏的源码获取方式会放到知识星期中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),e._v(" "),t("p",[e._v("今天，【冰河技术】知识星球再开放200张优惠券，还没上车的小伙伴赶紧啦，再不上车就跟不上啦！！")]),e._v(" "),t("h3",{attrs:{id:"星球提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[e._v("#")]),e._v(" 星球提供的服务")]),e._v(" "),t("p",[e._v("冰河整理了星球提供的一些服务，如下所示。")]),e._v(" "),t("p",[e._v("加入星球，你将获得：")]),e._v(" "),t("p",[e._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),e._v(" "),t("p",[e._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),e._v(" "),t("p",[e._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),e._v(" "),t("p",[e._v("4.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),e._v(" "),t("p",[e._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),e._v(" "),t("p",[e._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),e._v(" "),t("p",[e._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),e._v(" "),t("p",[e._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),e._v(" "),t("p",[e._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),e._v(" "),t("h3",{attrs:{id:"星球门票价格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[e._v("#")]),e._v(" 星球门票价格")]),e._v(" "),t("p",[e._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),e._v(" "),t("p",[t("strong",[e._v("特别提醒：")]),e._v(" 苹果用户进圈或续费，请加微信「hacker_binghe」扫二维码，或者去公众号「冰河技术」回复「星球」扫二维码进圈。")]),e._v(" "),t("p",[e._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 "),t("strong",[e._v("冰河技术")]),e._v(" 公众号回复 “ "),t("strong",[e._v("星球")]),e._v(" ” ，领取入场优惠券。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),e._v(" "),t("p",[t("strong",[e._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),e._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),t("blockquote",[t("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);