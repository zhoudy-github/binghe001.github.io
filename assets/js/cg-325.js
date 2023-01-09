(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{613:function(a,t,s){"use strict";s.r(t);var r=s(7),i=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·-《springcloud-alibaba实战》第02章-专栏设计"}},[a._v("#")]),a._v(" SA实战 · 《SpringCloud Alibaba实战》第02章-专栏设计")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("从今天开始，我们正式进入《SpringCloud Alibaba实战》专栏的学习，在《开篇》一文中，我们大体介绍了整个专栏的结构安排。今天我们就再次和小伙伴们聊聊《SpringCloud Alibaba实战》专栏的设计。")]),a._v(" "),t("h2",{attrs:{id:"整体设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体设计"}},[a._v("#")]),a._v(" 整体设计")]),a._v(" "),t("p",[a._v("整个专栏在设计上大体分成十个篇章，分别为："),t("strong",[a._v("专栏设计、微服务介绍、微服务环境搭建、服务治理、服务容错、服务网关、链路追踪、消息服务、服务配置、分布式事务")]),a._v("。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("每个大的篇章下会有一个或若干个小的章节组成，力求为大家以实战案例的形式讲清楚如何使用SpringCloud Alibaba开发实际项目。同时，如果在写专栏的过程中发现有个别知识点没有讲清楚，则会以加餐的形式为大家专门讲解这些知识点。")]),a._v(" "),t("h2",{attrs:{id:"案例驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例驱动"}},[a._v("#")]),a._v(" 案例驱动")]),a._v(" "),t("p",[a._v("经过一段时间反复思考整个专栏的设计，最终决定整个专栏以案例驱动的形式，并且以实战的方式为大家进行讲解。在案例上，选择了大家都比较熟悉的电商项目中的用户、商品和订单模块为例，因为这些模块的核心逻辑比较简单，并且真实的电商项目一般都采用分布式或微服务的架构模式，并且都会承载高并发大流量的场景。同时，涉及到分布式或微服务的场景时，一般又会产生分布式事务的问题。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-002.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以，整个专栏在设计上，会以电商系统中的用户、商品和订单模块为例，贯穿始末。在开发电商系统的过程中，每个阶段会产生不同的需求，而我们在每个阶段针对不同的需求，会使用SpringCloud Alibaba中的对应组件来实现。")]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("ul",[t("li",[a._v("涉及到服务治理和服务配置的需求时，我们会使用Nacos实现。")]),a._v(" "),t("li",[a._v("涉及到负载均衡的需求时，我们会使用Ribbon实现。")]),a._v(" "),t("li",[a._v("涉及到远程服务调用的需求时，我们会使用Fegin实现。")]),a._v(" "),t("li",[a._v("涉及到服务容错的需求时，我们会使用Sentinel实现。")]),a._v(" "),t("li",[a._v("涉及到服务网关的需求时，由于目前SpringCloud Alibaba中并未提供自己的网关，所以，我们使用SpringCloud中的Gateway实现。")]),a._v(" "),t("li",[a._v("涉及到链路追踪的需求时，我们会使用Sleuth+ZipKin实现。")]),a._v(" "),t("li",[a._v("涉及到消息服务的需求时，我们会使用RocketMQ实现。")]),a._v(" "),t("li",[a._v("涉及到分布式事务的需求时，我们会使用Seata实现。")]),a._v(" "),t("li",[a._v("涉及到数据存储的需求时，我们会MySQL+ElasticSearch实现。")])]),a._v(" "),t("p",[a._v("通过实现不同阶段的需求，并且不断解决过程中遇到的问题，最终我们会开发出一套基于微服务的简易电商系统。让大家在学习技术的同时，也能够真正学习到这些技术是如何应用到实际项目中的，真正做到学以致用。")]),a._v(" "),t("h2",{attrs:{id:"综合对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#综合对比"}},[a._v("#")]),a._v(" 综合对比")]),a._v(" "),t("p",[a._v("在每个章节使用SpringCloud Alibaba组件实现不同的需求时，不会仅仅介绍SpringCloud Alibaba中这一种解决问题的组件，还会介绍一些业界其他的解决方案。")]),a._v(" "),t("p",[a._v("例如，在介绍链路追踪的解决方案时，我们不仅仅介绍Sleuth+ZipKin这一种解决方案，还会对比介绍Cat、Pinpoint和Skywalking这几种解决方案。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-04-003.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样学习下来，小伙伴们不仅能够学习解决问题的一种方案，还能连带学习到其他的解决方案，达到举一反三的效果。")]),a._v(" "),t("h2",{attrs:{id:"资源安排"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源安排"}},[a._v("#")]),a._v(" 资源安排")]),a._v(" "),t("p",[a._v("本专栏涉及到的资源：包含源代码和画图源文件，以及涉及到的环境搭建使用的安装包等，都会放到 "),t("strong",[a._v("冰河技术")]),a._v(" 知识星球中，目前， "),t("strong",[a._v("冰河技术")]),a._v(" 知识星球内容正在完善中，后续会向大家开放。")]),a._v(" "),t("h2",{attrs:{id:"其他说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他说明"}},[a._v("#")]),a._v(" 其他说明")]),a._v(" "),t("p",[a._v("关于专栏的其他说明，小伙伴们参见 "),t("RouterLink",{attrs:{to:"/md/microservices/springcloudalibaba/2022-04-02-SpringCloudAlibaba专栏开篇.html"}},[a._v("SA实战 ·《SpringCloud Alibaba实战》专栏开篇！")]),a._v("一文。")],1),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("p",[a._v("正所谓："),t("strong",[a._v("纸上得来终觉浅，绝知此事要躬行")]),a._v(" 。学习技术停留在理论的基础上是远远不够的，我们一定要将学到的技术和知识运用到实际的项目当中，解决实际的问题才是最重要的。大家在学习本专栏的过程中，遇到任何问题都可以向冰河咨询。")]),a._v(" "),t("p",[a._v("切记：本专栏以实战内容为主，在学习的过程中一定要多动手，多实操，多思考，多总结。从下一期开始，我们就正式进入《SpringCloud Alibaba实战》专栏的正题部分的学习了，小伙伴们，你们准备好了吗？Let`s go！！")]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);