(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{867:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第fix-04章-修复基于springboot启动服务消费者netty-group多次连接的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第fix-04章-修复基于springboot启动服务消费者netty-group多次连接的问题"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第fix-04章：修复基于SpringBoot启动服务消费者Netty Group多次连接的问题")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客1："),s("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客2："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("在写《RPC手撸专栏》的过程中，针对专栏版本的代码，在书写的过程中，会提前埋一些坑进去，使各位星球的小伙伴在调试代码的过程中，能够自己去发现问题，并且分析问题，最好也能够自己解决问题。经过自己发现问题->分析问题->解决问题的过程，能够提升大家对于RPC框架源码的参与过程，更重要的是，能够不断提升大家自己发现问题、分析问题和解决问题的能力，这种能够力才是程序员最核心的竞争力。")]),t._v(" "),s("h2",{attrs:{id:"一、问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、问题描述"}},[t._v("#")]),t._v(" 一、问题描述")]),t._v(" "),s("p",[s("code",[t._v("本章要解决什么问题呢？")])]),t._v(" "),s("p",[t._v("由于通过SpringBoot启动服务消费者时，启动参数存在优先级。为兼容启动参数的优先级，会出现多次group的问题。")]),t._v(" "),s("h2",{attrs:{id:"二、问题分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、问题分析"}},[t._v("#")]),t._v(" 二、问题分析")]),t._v(" "),s("p",[s("code",[t._v("这个问题是如何产生的呢？")])]),t._v(" "),s("p",[t._v("当以SpringBoot启动服务消费者时，由于通过Spring解析@RpcReference注解的属性会优先于SpringBoot读取yml文件中属性的执行。")]),t._v(" "),s("p",[t._v("Spring解析@RpcReference注解的属性后，会调用RpcClient的构造方法，创建RpcClient对象，后续会创建代理对象，启动Netty服务，进而启动服务消费者。当启动Netty服务时，就会触发group操作。")]),t._v(" "),s("p",[t._v("当SpringBoot读取完yml文件中的属性参数后，会创建RpcClient对象并将其注入Spring的IOC容器中，也会启动Netty服务，此时就会触发两次Netty的group操作。")]),t._v(" "),s("p",[t._v("出现问题的核心点在于以SpringBoot启动服务消费者时，会调用两次bhrpc-consumer-common工程下的io.binghe.rpc.consumer.common.RpcConsumer#buildNettyGroup()方法，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildNettyGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bootstrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventLoopGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioSocketChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumerInitializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heartbeatInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enableBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bufferSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" concurrentThreadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flowPostProcessor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"三、问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、问题解决"}},[t._v("#")]),t._v(" 三、问题解决")]),t._v(" "),s("p",[s("code",[t._v("问题该如何解决呢？")])]),t._v(" "),s("p",[t._v("当以SpringBoot方式启动服务消费者时，bhrpc-consumer-common工程下的io.binghe.rpc.consumer.common.RpcConsumer#buildNettyGroup()方法会被调用两次，并且抛出IllegalStateException异常。也就是说，以Spring方式启动服务消费者时，通过解析@RpcReference注解的属性，将解析出的属性值传入Netty服务，并且已经进行了group操作。")]),t._v(" "),s("p",[t._v("后续再次通过SpringBoot启动时，按照一定的规则使用yml文件中的属性覆盖@RpcReference注解的属性后，如果不做处理，会无法执行Netty的group操作，此时，服务消费者启动后，就无法正常实现如下的属性配置优先级。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("字段@RpcReference注解属性"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("yml文件的配置"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("@RpcReference注解默认属性\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("问题修复方案也比较简单，就是在bhrpc-consumer-common工程下的io.binghe.rpc.consumer.common.RpcConsumer#buildNettyGroup()方法中对Netty进行group操作时，使用try-catch捕获IllegalStateException异常，在catch代码块中再次执行Netty的group操作，修改后的源码如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildNettyGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bootstrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventLoopGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioSocketChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumerInitializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heartbeatInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enableBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bufferSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" concurrentThreadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flowPostProcessor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalStateException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bootstrap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bootstrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bootstrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventLoopGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioSocketChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumerInitializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("heartbeatInterval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enableBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bufferSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" concurrentThreadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flowPostProcessor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"四、问题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、问题总结"}},[t._v("#")]),t._v(" 四、问题总结")]),t._v(" "),s("p",[s("code",[t._v("修改完问题不总结下怎么行？")])]),t._v(" "),s("p",[t._v("我们自己手写的RPC框架不是一蹴而就的，它是一个不断优化和不断调整的过程，冰河也会将这些调整的过程整理好分享给各位星球的小伙伴。")]),t._v(" "),s("p",[t._v("总之，我们写的RPC框架正在一步步实现它该有的功能。")]),t._v(" "),s("p",[t._v("最后，我想说的是：学习《RPC手撸专栏》一定要塌下心来，一步一个脚印，动手实践，认真思考，遇到不懂的问题，可以直接到星球发布主题进行提问。一定要记住：纸上得来终觉浅，绝知此事要躬行的道理。否则，一味的CP，或者光看不练，不仅失去了学习的意义，到头来更是一无所获。")]),t._v(" "),s("p",[s("strong",[t._v("好了，本章就到这里吧，我是冰河，我们下一章见~~")])]),t._v(" "),s("h2",{attrs:{id:"五、关于星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、关于星球"}},[t._v("#")]),t._v(" 五、关于星球")]),t._v(" "),s("p",[t._v("大家可以加入 "),s("strong",[t._v("冰河技术")]),t._v(" 知识星球，和星球小伙伴们一起学习《SpringCloud Alibaba实战》专栏和《RPC手撸专栏》，冰河技术知识星球的《RPC手撸专栏》是个连载大几十篇的专栏（目前已更新几十大篇章，110+篇文章，110+工程源码，120+源码Tag分支，真正的企业级、分布式、高并发、高性能、高可用，可扩展的RPC框架，仍在持续更新）。")]),t._v(" "),s("p",[t._v("另外，星球中《企业级大规模分布式调度系统》和《企业级大规模分布式IM系统》也已经提升日程，期待你的加入，与星球小伙伴一起开发企业级中间件项目，一起提升硬核技术！")]),t._v(" "),s("h3",{attrs:{id:"星球提供的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),s("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),s("p",[t._v("加入星球，你将获得：")]),t._v(" "),s("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能RPC框架项目")]),t._v(" "),s("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),s("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),s("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),s("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),s("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),s("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),s("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),s("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),s("h3",{attrs:{id:"如何加入星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),s("p",[t._v("加入星球：扫描优惠券二维码即可加入星球。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("扫码")]),t._v(" ：通过扫描优惠券二维码加入星球。")]),t._v(" "),s("li",[s("strong",[t._v("链接")]),t._v(" ：打开链接 "),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),s("li",[s("strong",[t._v("回复")]),t._v(" ：在公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),s("p",[s("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),s("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),s("p",[s("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")]),t._v(" "),s("h2",{attrs:{id:"加群交流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),s("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),s("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),s("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),s("p",[t._v("加入星球 "),s("strong",[s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),s("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),s("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),s("p",[t._v("关注 "),s("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("公众号，回复 "),s("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),s("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);