(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{739:function(t,a,r){"use strict";r.r(a);var v=r(7),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[t._v("#")]),t._v(" SA实战 · 《SpringCloud Alibaba实战》第02章-专栏设计")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("从今天开始，我们正式进入《SpringCloud Alibaba实战》专栏的学习，在《开篇》一文中，我们大体介绍了整个专栏的结构安排。今天我们就再次和小伙伴们聊聊《SpringCloud Alibaba实战》专栏的设计。")]),t._v(" "),a("h2",{attrs:{id:"整体设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体设计"}},[t._v("#")]),t._v(" 整体设计")]),t._v(" "),a("p",[t._v("整个专栏在设计上大体分成十个篇章，分别为："),a("strong",[t._v("专栏设计、微服务介绍、微服务环境搭建、服务治理、服务容错、服务网关、链路追踪、消息服务、服务配置、分布式事务")]),t._v("。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("每个大的篇章下会有一个或若干个小的章节组成，力求为大家以实战案例的形式讲清楚如何使用SpringCloud Alibaba开发实际项目。同时，如果在写专栏的过程中发现有个别知识点没有讲清楚，则会以加餐的形式为大家专门讲解这些知识点。")]),t._v(" "),a("h2",{attrs:{id:"案例驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例驱动"}},[t._v("#")]),t._v(" 案例驱动")]),t._v(" "),a("p",[t._v("经过一段时间反复思考整个专栏的设计，最终决定整个专栏以案例驱动的形式，并且以实战的方式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例，因为这些模块的核心逻辑比较简单，并且真实的电商项目一般都采用分布式或微服务的架构模式，并且都会承载高并发大流量的场景。同时，涉及到分布式或微服务的场景时，一般又会产生分布式事务的问题。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("所以，整个专栏在设计上，会以电商系统中的用户、商品和订单模块为例，贯穿始末。在开发电商系统的过程中，每个阶段会产生不同的需求，而我们在每个阶段针对不同的需求，会使用SpringCloud Alibaba中的对应组件来实现。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("ul",[a("li",[t._v("涉及到服务治理和服务配置的需求时，我们会使用Nacos实现。")]),t._v(" "),a("li",[t._v("涉及到负载均衡的需求时，我们会使用Ribbon实现。")]),t._v(" "),a("li",[t._v("涉及到远程服务调用的需求时，我们会使用Fegin实现。")]),t._v(" "),a("li",[t._v("涉及到服务容错的需求时，我们会使用Sentinel实现。")]),t._v(" "),a("li",[t._v("涉及到服务网关的需求时，由于目前SpringCloud Alibaba中并未提供自己的网关，所以，我们使用SpringCloud中的Gateway实现。")]),t._v(" "),a("li",[t._v("涉及到链路追踪的需求时，我们会使用Sleuth+ZipKin实现。")]),t._v(" "),a("li",[t._v("涉及到消息服务的需求时，我们会使用RocketMQ实现。")]),t._v(" "),a("li",[t._v("涉及到分布式事务的需求时，我们会使用Seata实现。")]),t._v(" "),a("li",[t._v("涉及到数据存储的需求时，我们会MySQL+ElasticSearch实现。")])]),t._v(" "),a("p",[t._v("通过实现不同阶段的需求，并且不断解决过程中遇到的问题，最终我们会开发出一套基于微服务的简易电商系统。让大家在学习技术的同时，也能够真正学习到这些技术是如何应用到实际项目中的，真正做到学以致用。")]),t._v(" "),a("h2",{attrs:{id:"综合对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综合对比"}},[t._v("#")]),t._v(" 综合对比")]),t._v(" "),a("p",[t._v("在每个章节使用SpringCloud Alibaba组件实现不同的需求时，不会仅仅介绍SpringCloud Alibaba中这一种解决问题的组件，还会介绍一些业界其他的解决方案。")]),t._v(" "),a("p",[t._v("例如，在介绍链路追踪的解决方案时，我们不仅仅介绍Sleuth+ZipKin这一种解决方案，还会对比介绍Cat、Pinpoint和Skywalking这几种解决方案。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这样学习下来，小伙伴们不仅能够学习解决问题的一种方案，还能连带学习到其他的解决方案，达到举一反三的效果。")]),t._v(" "),a("h2",{attrs:{id:"资源安排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源安排"}},[t._v("#")]),t._v(" 资源安排")]),t._v(" "),a("p",[t._v("本专栏涉及到的资源：包含源代码和画图源文件，以及涉及到的环境搭建使用的安装包等，都会放到 "),a("strong",[t._v("冰河技术")]),t._v(" 知识星球中，目前， "),a("strong",[t._v("冰河技术")]),t._v(" 知识星球内容正在完善中，后续会向大家开放。")]),t._v(" "),a("h2",{attrs:{id:"其他说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他说明"}},[t._v("#")]),t._v(" 其他说明")]),t._v(" "),a("p",[t._v("关于专栏的其他说明，小伙伴们参见 "),a("RouterLink",{attrs:{to:"/md/microservices/springcloudalibaba/2022-04-02-SpringCloudAlibaba专栏开篇.html"}},[t._v("SA实战 ·《SpringCloud Alibaba实战》专栏开篇！")]),t._v("一文。")],1),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("正所谓："),a("strong",[t._v("纸上得来终觉浅，绝知此事要躬行")]),t._v(" 。学习技术停留在理论的基础上是远远不够的，我们一定要将学到的技术和知识运用到实际的项目当中，解决实际的问题才是最重要的。大家在学习本专栏的过程中，遇到任何问题都可以向冰河咨询。")]),t._v(" "),a("p",[t._v("切记：本专栏以实战内容为主，在学习的过程中一定要多动手，多实操，多思考，多总结。从下一期开始，我们就正式进入《SpringCloud Alibaba实战》专栏的正题部分的学习了，小伙伴们，你们准备好了吗？Let`s go！！")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=_.exports}}]);