(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{625:function(t,a,_){"use strict";_.r(a);var r=_(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第21章-服务配置-服务配置介绍与nacos核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第21章-服务配置-服务配置介绍与nacos核心概念"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第21章-服务配置：服务配置介绍与Nacos核心概念")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("blockquote",[a("p",[t._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏都更新到第21章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),t._v(" "),a("p",[t._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v(" 知识星球即可获取，文末有入场方式。")])]),t._v(" "),a("h2",{attrs:{id:"前文回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前文回顾"}},[t._v("#")]),t._v(" 前文回顾")]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则。简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务.")]),t._v(" "),a("p",[t._v("同时，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，详细介绍了SpringCloud Gateway网关的核心技术。在链路追踪章节，我们开始简单介绍了分布式链路追踪技术与解决方案，随后在项目中整合Sleuth实现了链路追踪，并使用Sleuth整合ZipKin实现了分布式链路追踪的可视化 。")]),t._v(" "),a("p",[t._v("在消息服务章节，我们介绍了MQ的使用场景，引入MQ后的注意事项以及MQ的选型对比，在项目中整合了RocketMQ，并给大家介绍了RocketMQ的核心技术。")]),t._v(" "),a("p",[t._v("今天，我们正式进入《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的服务配置章节，很多小伙伴都知道：Nacos在微服务开发过程中，既可以用作注册中心，也可以用作配置中心。在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的服务治理章节，我们使用Nacos实现了注册中心，在接下来的服务配置章节，我们就使用Nacos实现配置中心。老规矩，在正式整合项目前，我们还是先来简单的聊聊服务配置与Nacos作为配置中心的相关概念。")]),t._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[t._v("#")]),t._v(" 本章总览")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-004","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-23-004.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"群魔乱舞-配置散落存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#群魔乱舞-配置散落存储"}},[t._v("#")]),t._v(" 群魔乱舞(配置散落存储)")]),t._v(" "),a("p",[t._v("当我们的项目采用微服务架构后，原本单一的项目会被拆分为一个个小的微服务。原来项目中的配置文件就需要在每个微服务下都要存储一份，这些配置文件中的内容大部分都是相同的，只有个别的配置项不同。就拿数据库配置来说吧，如果每个微服务使用的技术栈都是相同的，则每个微服务中关于数据库的配置几乎都是相同的，有区别的地方可能就是：数据库连接，用户名和密码。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-001","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-23-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当项目采用微服务架构后，原本在单体项目中的配置文件就会散落在各个微服务中，如果不对这些散落的配置文件进行处理，就会造成各种各样的问题。总结起来，这些问题主要体现在如下几个方面。")]),t._v(" "),a("p",[t._v("（1）配置文件散落在各个微服务项目中，随着整体项目的业务越来越复杂，后续会新增更多的微服务项目，微服务项目越来越多，则散落在微服务中的配置文件也会越来越多，后续会变得难以统一维护和管理。")]),t._v(" "),a("p",[t._v("（2）配置文件散落在各个微服务项目中，还有一个非常棘手的问题，那就是修改配置文件非常麻烦。需要我们手动去修改每个微服务下的配置文件，稍有不慎，还会增加微服务项目出错的风险。")]),t._v(" "),a("p",[t._v("（3）一般情况下，企业的项目发布环境包含开发环境、测试环境、预发布环境、生产环境。每个环境都需要对应不同的配置文件，如果不对这些配置文件进行统一管理，则每次发布到不同的环境时，都需要我们手动去修改每个微服务的配置文件，维护起来也是非常繁琐的。")]),t._v(" "),a("p",[t._v("（4）在微服务中，手动修改了配置文件之后，修改后的具体的配置项无法在微服务项目中实时更新。每次修改配置文件后，都需要重新启动微服务项目。不管是从开发角度，还是从运维角度，都是非常不友好的。")]),t._v(" "),a("h2",{attrs:{id:"分久必合-配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分久必合-配置中心"}},[t._v("#")]),t._v(" 分久必合(配置中心)")]),t._v(" "),a("p",[t._v("基于上面的种种原因，我们绝不允许配置文件长期在各个微服务项目中分散存储，那有没有什么办法将这些配置文件统一存放和管理呢？答案就是使用配置中心。")]),t._v(" "),a("p",[t._v("这里，冰河先用自己的大白话给配置中心下个定义吧。")]),t._v(" "),a("blockquote",[a("p",[t._v("配置中心就是在微服务项目中，统一管理和维护项目配置信息的地方，它支持配置信息的集中存储，对外提供统一的接口获取配置，支持各个微服务主动调用配置中心的接口获取配置，也支持当配置信息发生变更时，由配置中心实时并且主动向各个微服务通知服务配置发生了变更，使其同步最新的配置信息。")])]),t._v(" "),a("p",[t._v("哎，说好的大白话，读起来还是有点“官腔”，算了，不管它了，大家能够看懂就好。")]),t._v(" "),a("p",[t._v("在对配置中心的定义中，涵盖了三项重要内容。")]),t._v(" "),a("p",[t._v("（1）配置中心将各个微服务中的配置进行统一集中管理和维护，并且对外提供统一的接口获取相关配置。")]),t._v(" "),a("p",[t._v("（2）配置中心支持微服务主动调用配置中心的接口获取配置信息。")]),t._v(" "),a("p",[t._v("（3）配置信息发生变更时，配置中心能够实时并且主动向各个微服务通知服务配置发生了变更，使其同步最新的配置信息。")]),t._v(" "),a("p",[t._v("这里，我们还是以商城微服务化后为例，当引入配置中心后，数据库配置信息，如下图所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-002","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-23-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以看到，在微服务中引入配置中心后，配置信息不再存储到各个微服务项目中，也不用再手动修改每个微服务项目中的配置信息。而是在配置中心统一进行管理和维护。各个微服务会调用配置中心的接口获取配置信息。当配置中心的配置信息发生变更时，配置中心会主动并且实时通知各个微服务，使其获取配置中心的最新配置信息。")]),t._v(" "),a("h2",{attrs:{id:"配置中心解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置中心解决方案"}},[t._v("#")]),t._v(" 配置中心解决方案")]),t._v(" "),a("p",[t._v("针对项目采用微服务架构后的配置文件的存储与管理问题，业界也提出了不少解决方案，也开源出了很多不错的优秀项目，这里就给大家简单列举几个。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置中心")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Consul")]),t._v(" "),a("td",[t._v("谷歌基于Go语言开发出的一款支持服务动态发现的配置管理中心服务。在Consul中，内置了服务注册与发现功能，实现了分布式一致性协议，支持Key-Value存储，支持多数据中心。")])]),t._v(" "),a("tr",[a("td",[t._v("Apollo")]),t._v(" "),a("td",[t._v("协程开源的一款支持分布式的配置中心。支持修改后的配置动态实时生效，对项目的配置进行版本化管理，对配置的修改支持审计，支持项目的灰度发布。")])]),t._v(" "),a("tr",[a("td",[t._v("Disconf")]),t._v(" "),a("td",[t._v("百度开源的一款支持分布式的配置中心，主要是利用Zookeeper实现配置信息变更后，实时通知各个微服务，使变更后的配置信息生效。")])]),t._v(" "),a("tr",[a("td",[t._v("SpringCloud Config")]),t._v(" "),a("td",[t._v("SpringCloud技术栈中自带的配置中心组件，支持使用Git仓库存储配置信息，不支持配置信息变更后实时生效。")])]),t._v(" "),a("tr",[a("td",[t._v("Nacos")]),t._v(" "),a("td",[t._v("SpringCloud Alibaba技术栈中的一个在微服务环境下，支持分布式服务注册与发现，支持服务元数据及流量管理，支持分布式配置中心的组件。使用Nacos可以轻松实现服务的注册与发现，以及分布式配置中心功能。")])])])]),t._v(" "),a("h2",{attrs:{id:"nacos配置中心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos配置中心概念"}},[t._v("#")]),t._v(" Nacos配置中心概念")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("核心概念")]),t._v(" "),a("th",[t._v("中文说明")]),t._v(" "),a("th",[t._v("概念说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Namespace")]),t._v(" "),a("td",[t._v("命名空间")]),t._v(" "),a("td",[t._v("主要用于不同环境下的配置隔离，不同的环境会被划分到不同的命名空间中。")])]),t._v(" "),a("tr",[a("td",[t._v("Group")]),t._v(" "),a("td",[t._v("配置分组")]),t._v(" "),a("td",[t._v("主要用于将不同的微服务划分到同一个分组中。通常情况下，会将组成整体项目的各个微服务的配置统一划分到同一个分组中。")])]),t._v(" "),a("tr",[a("td",[t._v("Data ID")]),t._v(" "),a("td",[t._v("配置集 ID")]),t._v(" "),a("td",[t._v("通常情况下，在系统中，一个配置文件就是一个配置集，在这个配置文件中，能够包含系统各个方面的配置信息。配置集ID就是某个配置集的ID，也就是系统中某个配置文件的ID。")])])])]),t._v(" "),a("p",{attrs:{align:"right"}},[a("font",{attrs:{size:"1"}},[t._v("更多概念请参见：https://nacos.io/zh-cn/docs/concepts.html")])],1),t._v(" "),a("p",[a("strong",[t._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),t._v(" "),a("p",[a("strong",[t._v("另外，一不小心就写了21章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),t._v(" "),a("h2",{attrs:{id:"关于星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[t._v("#")]),t._v(" 关于星球")]),t._v(" "),a("p",[t._v("最近，冰河创建了【冰河技术】知识星球，《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的源码获取方式会放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("今天，【冰河技术】知识星球再开放200张优惠券，还没上车的小伙伴赶紧啦，再不上车就跟不上啦！！")]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("4.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"星球门票价格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[t._v("#")]),t._v(" 星球门票价格")]),t._v(" "),a("p",[t._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信「hacker_binghe」扫二维码，或者去公众号「冰河技术」回复「星球」扫二维码进圈。")]),t._v(" "),a("p",[t._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 "),a("strong",[t._v("冰河技术")]),t._v(" 公众号回复 “ "),a("strong",[t._v("星球")]),t._v(" ” ，领取入场优惠券。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);