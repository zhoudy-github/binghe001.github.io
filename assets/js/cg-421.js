(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{766:function(t,a,r){"use strict";r.r(a);var _=r(7),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第21章-服务配置-服务配置介绍与nacos核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第21章-服务配置-服务配置介绍与nacos核心概念"}},[t._v("#")]),t._v(" SA实战 ·《SpringCloud Alibaba实战》第21章-服务配置：服务配置介绍与Nacos核心概念")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("blockquote",[a("p",[t._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏都更新到第21章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),t._v(" "),a("p",[t._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v(" 知识星球即可获取，文末有入场方式。")])]),t._v(" "),a("h2",{attrs:{id:"前文回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前文回顾"}},[t._v("#")]),t._v(" 前文回顾")]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则。简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务.")]),t._v(" "),a("p",[t._v("同时，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，详细介绍了SpringCloud Gateway网关的核心技术。在链路追踪章节，我们开始简单介绍了分布式链路追踪技术与解决方案，随后在项目中整合Sleuth实现了链路追踪，并使用Sleuth整合ZipKin实现了分布式链路追踪的可视化 。")]),t._v(" "),a("p",[t._v("在消息服务章节，我们介绍了MQ的使用场景，引入MQ后的注意事项以及MQ的选型对比，在项目中整合了RocketMQ，并给大家介绍了RocketMQ的核心技术。")]),t._v(" "),a("p",[t._v("今天，我们正式进入《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的服务配置章节，很多小伙伴都知道：Nacos在微服务开发过程中，既可以用作注册中心，也可以用作配置中心。在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),t._v("》专栏的服务治理章节，我们使用Nacos实现了注册中心，在接下来的服务配置章节，我们就使用Nacos实现配置中心。老规矩，在正式整合项目前，我们还是先来简单的聊聊服务配置与Nacos作为配置中心的相关概念。")]),t._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[t._v("#")]),t._v(" 本章总览")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-004","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-23-004.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"群魔乱舞-配置散落存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#群魔乱舞-配置散落存储"}},[t._v("#")]),t._v(" 群魔乱舞(配置散落存储)")]),t._v(" "),a("p",[t._v("当我们的项目采用微服务架构后，原本单一的项目会被拆分为一个个小的微服务。原来项目中的配置文件就需要在每个微服务下都要存储一份，这些配置文件中的内容大部分都是相同的，只有个别的配置项不同。就拿数据库配置来说吧，如果每个微服务使用的技术栈都是相同的，则每个微服务中关于数据库的配置几乎都是相同的，有区别的地方可能就是：数据库连接，用户名和密码。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-001","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-23-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("当项目采用微服务架构后，原本在单体项目中的配置文件就会散落在各个微服务中，如果不对这些散落的配置文件进行处理，就会造成各种各样的问题。总结起来，这些问题主要体现在如下几个方面。")]),t._v(" "),a("p",[t._v("（1）配置文件散落在各个微服务项目中，随着整体项目的业务越来越复杂，后续会新增更多的微服务项目，微服务项目越来越多，则散落在微服务中的配置文件也会越来越多，后续会变得难以统一维护和管理。")]),t._v(" "),a("p",[t._v("（2）配置文件散落在各个微服务项目中，还有一个非常棘手的问题，那就是修改配置文件非常麻烦。需要我们手动去修改每个微服务下的配置文件，稍有不慎，还会增加微服务项目出错的风险。")]),t._v(" "),a("p",[t._v("（3）一般情况下，企业的项目发布环境包含开发环境、测试环境、预发布环境、生产环境。每个环境都需要对应不同的配置文件，如果不对这些配置文件进行统一管理，则每次发布到不同的环境时，都需要我们手动去修改每个微服务的配置文件，维护起来也是非常繁琐的。")]),t._v(" "),a("p",[t._v("（4）在微服务中，手动修改了配置文件之后，修改后的具体的配置项无法在微服务项目中实时更新。每次修改配置文件后，都需要重新启动微服务项目。不管是从开发角度，还是从运维角度，都是非常不友好的。")]),t._v(" "),a("h2",{attrs:{id:"分久必合-配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分久必合-配置中心"}},[t._v("#")]),t._v(" 分久必合(配置中心)")]),t._v(" "),a("p",[t._v("基于上面的种种原因，我们绝不允许配置文件长期在各个微服务项目中分散存储，那有没有什么办法将这些配置文件统一存放和管理呢？答案就是使用配置中心。")]),t._v(" "),a("p",[t._v("这里，冰河先用自己的大白话给配置中心下个定义吧。")]),t._v(" "),a("blockquote",[a("p",[t._v("配置中心就是在微服务项目中，统一管理和维护项目配置信息的地方，它支持配置信息的集中存储，对外提供统一的接口获取配置，支持各个微服务主动调用配置中心的接口获取配置，也支持当配置信息发生变更时，由配置中心实时并且主动向各个微服务通知服务配置发生了变更，使其同步最新的配置信息。")])]),t._v(" "),a("p",[t._v("哎，说好的大白话，读起来还是有点“官腔”，算了，不管它了，大家能够看懂就好。")]),t._v(" "),a("p",[t._v("在对配置中心的定义中，涵盖了三项重要内容。")]),t._v(" "),a("p",[t._v("（1）配置中心将各个微服务中的配置进行统一集中管理和维护，并且对外提供统一的接口获取相关配置。")]),t._v(" "),a("p",[t._v("（2）配置中心支持微服务主动调用配置中心的接口获取配置信息。")]),t._v(" "),a("p",[t._v("（3）配置信息发生变更时，配置中心能够实时并且主动向各个微服务通知服务配置发生了变更，使其同步最新的配置信息。")]),t._v(" "),a("p",[t._v("这里，我们还是以商城微服务化后为例，当引入配置中心后，数据库配置信息，如下图所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-23-002","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-05-23-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("可以看到，在微服务中引入配置中心后，配置信息不再存储到各个微服务项目中，也不用再手动修改每个微服务项目中的配置信息。而是在配置中心统一进行管理和维护。各个微服务会调用配置中心的接口获取配置信息。当配置中心的配置信息发生变更时，配置中心会主动并且实时通知各个微服务，使其获取配置中心的最新配置信息。")]),t._v(" "),a("h2",{attrs:{id:"配置中心解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置中心解决方案"}},[t._v("#")]),t._v(" 配置中心解决方案")]),t._v(" "),a("p",[t._v("针对项目采用微服务架构后的配置文件的存储与管理问题，业界也提出了不少解决方案，也开源出了很多不错的优秀项目，这里就给大家简单列举几个。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置中心")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Consul")]),t._v(" "),a("td",[t._v("谷歌基于Go语言开发出的一款支持服务动态发现的配置管理中心服务。在Consul中，内置了服务注册与发现功能，实现了分布式一致性协议，支持Key-Value存储，支持多数据中心。")])]),t._v(" "),a("tr",[a("td",[t._v("Apollo")]),t._v(" "),a("td",[t._v("协程开源的一款支持分布式的配置中心。支持修改后的配置动态实时生效，对项目的配置进行版本化管理，对配置的修改支持审计，支持项目的灰度发布。")])]),t._v(" "),a("tr",[a("td",[t._v("Disconf")]),t._v(" "),a("td",[t._v("百度开源的一款支持分布式的配置中心，主要是利用Zookeeper实现配置信息变更后，实时通知各个微服务，使变更后的配置信息生效。")])]),t._v(" "),a("tr",[a("td",[t._v("SpringCloud Config")]),t._v(" "),a("td",[t._v("SpringCloud技术栈中自带的配置中心组件，支持使用Git仓库存储配置信息，不支持配置信息变更后实时生效。")])]),t._v(" "),a("tr",[a("td",[t._v("Nacos")]),t._v(" "),a("td",[t._v("SpringCloud Alibaba技术栈中的一个在微服务环境下，支持分布式服务注册与发现，支持服务元数据及流量管理，支持分布式配置中心的组件。使用Nacos可以轻松实现服务的注册与发现，以及分布式配置中心功能。")])])])]),t._v(" "),a("h2",{attrs:{id:"nacos配置中心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos配置中心概念"}},[t._v("#")]),t._v(" Nacos配置中心概念")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("核心概念")]),t._v(" "),a("th",[t._v("中文说明")]),t._v(" "),a("th",[t._v("概念说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Namespace")]),t._v(" "),a("td",[t._v("命名空间")]),t._v(" "),a("td",[t._v("主要用于不同环境下的配置隔离，不同的环境会被划分到不同的命名空间中。")])]),t._v(" "),a("tr",[a("td",[t._v("Group")]),t._v(" "),a("td",[t._v("配置分组")]),t._v(" "),a("td",[t._v("主要用于将不同的微服务划分到同一个分组中。通常情况下，会将组成整体项目的各个微服务的配置统一划分到同一个分组中。")])]),t._v(" "),a("tr",[a("td",[t._v("Data ID")]),t._v(" "),a("td",[t._v("配置集 ID")]),t._v(" "),a("td",[t._v("通常情况下，在系统中，一个配置文件就是一个配置集，在这个配置文件中，能够包含系统各个方面的配置信息。配置集ID就是某个配置集的ID，也就是系统中某个配置文件的ID。")])])])]),t._v(" "),a("p",{attrs:{align:"right"}},[a("font",{attrs:{size:"1"}},[t._v("更多概念请参见：https://nacos.io/zh-cn/docs/concepts.html")])],1),t._v(" "),a("p",[a("strong",[t._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),t._v(" "),a("p",[a("strong",[t._v("另外，一不小心就写了21章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);