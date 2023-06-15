(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{694:function(t,a,r){"use strict";r.r(a);var s=r(7),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[t._v("#")]),t._v(" SA实战 · 《SpringCloud Alibaba实战》第02章-专栏设计")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("从今天开始，我们正式进入《SpringCloud Alibaba实战》专栏的学习，在《开篇》一文中，我们大体介绍了整个专栏的结构安排。今天我们就再次和小伙伴们聊聊《SpringCloud Alibaba实战》专栏的设计。")]),t._v(" "),a("h2",{attrs:{id:"整体设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体设计"}},[t._v("#")]),t._v(" 整体设计")]),t._v(" "),a("p",[t._v("整个专栏在设计上大体分成十个篇章，分别为："),a("strong",[t._v("专栏设计、微服务介绍、微服务环境搭建、服务治理、服务容错、服务网关、链路追踪、消息服务、服务配置、分布式事务")]),t._v("。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("每个大的篇章下会有一个或若干个小的章节组成，力求为大家以实战案例的形式讲清楚如何使用SpringCloud Alibaba开发实际项目。同时，如果在写专栏的过程中发现有个别知识点没有讲清楚，则会以加餐的形式为大家专门讲解这些知识点。")]),t._v(" "),a("h2",{attrs:{id:"案例驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例驱动"}},[t._v("#")]),t._v(" 案例驱动")]),t._v(" "),a("p",[t._v("经过一段时间反复思考整个专栏的设计，最终决定整个专栏以案例驱动的形式，并且以实战的方式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例，因为这些模块的核心逻辑比较简单，并且真实的电商项目一般都采用分布式或微服务的架构模式，并且都会承载高并发大流量的场景。同时，涉及到分布式或微服务的场景时，一般又会产生分布式事务的问题。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("所以，整个专栏在设计上，会以电商系统中的用户、商品和订单模块为例，贯穿始末。在开发电商系统的过程中，每个阶段会产生不同的需求，而我们在每个阶段针对不同的需求，会使用SpringCloud Alibaba中的对应组件来实现。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("ul",[a("li",[t._v("涉及到服务治理和服务配置的需求时，我们会使用Nacos实现。")]),t._v(" "),a("li",[t._v("涉及到负载均衡的需求时，我们会使用Ribbon实现。")]),t._v(" "),a("li",[t._v("涉及到远程服务调用的需求时，我们会使用Fegin实现。")]),t._v(" "),a("li",[t._v("涉及到服务容错的需求时，我们会使用Sentinel实现。")]),t._v(" "),a("li",[t._v("涉及到服务网关的需求时，由于目前SpringCloud Alibaba中并未提供自己的网关，所以，我们使用SpringCloud中的Gateway实现。")]),t._v(" "),a("li",[t._v("涉及到链路追踪的需求时，我们会使用Sleuth+ZipKin实现。")]),t._v(" "),a("li",[t._v("涉及到消息服务的需求时，我们会使用RocketMQ实现。")]),t._v(" "),a("li",[t._v("涉及到分布式事务的需求时，我们会使用Seata实现。")]),t._v(" "),a("li",[t._v("涉及到数据存储的需求时，我们会MySQL+ElasticSearch实现。")])]),t._v(" "),a("p",[t._v("通过实现不同阶段的需求，并且不断解决过程中遇到的问题，最终我们会开发出一套基于微服务的简易电商系统。让大家在学习技术的同时，也能够真正学习到这些技术是如何应用到实际项目中的，真正做到学以致用。")]),t._v(" "),a("h2",{attrs:{id:"综合对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综合对比"}},[t._v("#")]),t._v(" 综合对比")]),t._v(" "),a("p",[t._v("在每个章节使用SpringCloud Alibaba组件实现不同的需求时，不会仅仅介绍SpringCloud Alibaba中这一种解决问题的组件，还会介绍一些业界其他的解决方案。")]),t._v(" "),a("p",[t._v("例如，在介绍链路追踪的解决方案时，我们不仅仅介绍Sleuth+ZipKin这一种解决方案，还会对比介绍Cat、Pinpoint和Skywalking这几种解决方案。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这样学习下来，小伙伴们不仅能够学习解决问题的一种方案，还能连带学习到其他的解决方案，达到举一反三的效果。")]),t._v(" "),a("h2",{attrs:{id:"资源安排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源安排"}},[t._v("#")]),t._v(" 资源安排")]),t._v(" "),a("p",[t._v("本专栏涉及到的资源：包含源代码和画图源文件，以及涉及到的环境搭建使用的安装包等，都会放到 "),a("strong",[t._v("冰河技术")]),t._v(" 知识星球中，目前， "),a("strong",[t._v("冰河技术")]),t._v(" 知识星球内容正在完善中，后续会向大家开放。")]),t._v(" "),a("h2",{attrs:{id:"其他说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他说明"}},[t._v("#")]),t._v(" 其他说明")]),t._v(" "),a("p",[t._v("关于专栏的其他说明，小伙伴们参见 "),a("RouterLink",{attrs:{to:"/md/microservices/springcloudalibaba/2022-04-02-SpringCloudAlibaba专栏开篇.html"}},[t._v("SA实战 ·《SpringCloud Alibaba实战》专栏开篇！")]),t._v("一文。")],1),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("正所谓："),a("strong",[t._v("纸上得来终觉浅，绝知此事要躬行")]),t._v(" 。学习技术停留在理论的基础上是远远不够的，我们一定要将学到的技术和知识运用到实际的项目当中，解决实际的问题才是最重要的。大家在学习本专栏的过程中，遇到任何问题都可以向冰河咨询。")]),t._v(" "),a("p",[t._v("切记：本专栏以实战内容为主，在学习的过程中一定要多动手，多实操，多思考，多总结。从下一期开始，我们就正式进入《SpringCloud Alibaba实战》专栏的正题部分的学习了，小伙伴们，你们准备好了吗？Let`s go！！")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"vip服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vip服务"}},[t._v("#")]),t._v(" VIP服务")]),t._v(" "),a("p",[a("strong",[t._v("强烈推荐阅读：《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zp0nI2RyFb_UCYpSsUt2OQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("原来大厂面试官也会在这里偷偷学习！"),a("OutboundLink")],1),t._v("》，如果文中优惠券过期，可长按或扫码下面优惠券二维码加入星球。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-18-008.png?raw=true",width:"70%"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("星球优惠券")]),t._v(" "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("冰河技术")]),t._v(" 知识星球 "),a("strong",[t._v("《SpringCloud Alibaba实战》")]),t._v(" 从零搭建并开发微服务项目已完结；"),a("strong",[t._v("《RPC手撸专栏》")]),t._v(" 已经更新120+篇文章，已提交120+项目工程，120+项目源码Tag分支；"),a("strong",[t._v("《Spring核心技术》")]),t._v(" 专栏以Spring的核心注解为突破口，通过源码执行的时序图带你详细分析Spring底层源码，让你学习Spring底层源码不再枯燥。并这些专栏已经将源码的获取方式放到了知识星球中，同时在微信上创建了专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("目前，星球群已形成良好的技术讨论氛围，后续也会像PRC项目一样全程手撸企业级中间件项目，"),a("strong",[t._v("涉及分布式、高并发、高性能、高可靠、高可扩展，让大家知其然，更知其所以然，从手写企业级中间件项目的过程中，充分掌握分布式、高并发、高性能、高可靠、高可扩展的编程技巧。")])]),t._v(" "),a("p",[a("strong",[t._v("更加值得一提的是：有超过30+的大厂面试官悄悄在这里提升核心竞争力！")])]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),t._v(" "),a("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"如何加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=v.exports}}]);