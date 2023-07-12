(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{479:function(t,a,v){"use strict";v.r(a);var _=v(7),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第39章-aot预编译技术概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第39章-aot预编译技术概述"}},[t._v("#")]),t._v(" 《Spring核心技术》第39章：AOT预编译技术概述")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("本章难度")]),t._v("：★★☆☆☆")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本章重点")]),t._v("：了解提前编译技术，了解JIT和AOT的区别，了解Graalvm与Native Image编译技术。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本章目录如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("学习指引")]),t._v(" "),a("li",[t._v("JIT与AOT概述\n"),a("ul",[a("li",[t._v("JIT即时编译")]),t._v(" "),a("li",[t._v("AOT预编译")]),t._v(" "),a("li",[t._v("JIT与AOT的联系")])])]),t._v(" "),a("li",[t._v("AOT的优缺点\n"),a("ul",[a("li",[t._v("AOT优点")]),t._v(" "),a("li",[t._v("AOT缺点")])])]),t._v(" "),a("li",[t._v("Graalvm")]),t._v(" "),a("li",[t._v("Native Image")]),t._v(" "),a("li",[t._v("总结")]),t._v(" "),a("li",[t._v("VIP服务")])]),t._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),a("p",[a("code",[t._v("你了解过AOT预编译技术吗？")])]),t._v(" "),a("p",[t._v("Spring6版本提供了AOT预编译技术，能够极大的减少应用程序的启动时间，并能够减少应用程序占用JVM的内存空间。另外，传统的 Spring 应用程序都是必须依赖于 Java 虚拟机（JVM）运行的，Spring6开始支持AOT，也就是无需 JVM，而是提供了另外一种运行和部署 应用的方式。本章，就简单介绍下有关AOT预编译的技术。")]),t._v(" "),a("h2",{attrs:{id:"二、jit与aot概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、jit与aot概述"}},[t._v("#")]),t._v(" 二、JIT与AOT概述")]),t._v(" "),a("p",[a("code",[t._v("简单聊聊JIT和AOT技术~~")])]),t._v(" "),a("p",[t._v("JIT表示即时编译，也就是在程序运行时进行编译。AOT表示预编译，也叫做提前编译或静态编译，在程序运行前编译。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-jit即时编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jit即时编译"}},[t._v("#")]),t._v(" 2.1 JIT即时编译")]),t._v(" "),a("p",[t._v("JIT在程序运行时，根据一定的算法计算出热点代码，然后进行 JIT 实时编译，这种方式吞吐量高，如果对程序进行运行时性能加成，可以跑得更快，并可以做到动态生成代码等，但是相对启动速度较慢，并需要一定时间和调用频率才能触发 JIT 的分层机制。")]),t._v(" "),a("p",[t._v("JIT 缺点就是编译需要占用运行时资源，会导致进程卡顿，最明显的就是在程序运行过程中，突然变得卡顿，又很快恢复正常。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-aot预编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aot预编译"}},[t._v("#")]),t._v(" 2.2 AOT预编译")]),t._v(" "),a("p",[t._v("AOT预编译，也叫做提前编译，它能够直接将源代码转化为机器码，内存占用低，启动速度快，可以不需要运行环境的支持就能够运行，直接将运行时环境静态链接至最终的程序中，但是无运行时性能加成，不能根据程序的运行情况做进一步的优化。")]),t._v(" "),a("p",[t._v("AOT 缺点就是在程序运行前编译会增加程序的安装时间，并且在运行时，不能根据程序的运行情况做进一步的优化。")]),t._v(" "),a("p",[t._v("**简单来讲：**JIT即时编译指的是在程序的运行过程中，将字节码转换为可在硬件上直接运行的机器码，并部署至托管环境中的过程。而 AOT 编译指的则是，在程序运行之前，便将字节码转换为机器码的过程。一个侧重运行时，一个侧重运行之前。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-jit与aot的联系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-jit与aot的联系"}},[t._v("#")]),t._v(" 2.3 JIT与AOT的联系")]),t._v(" "),a("p",[t._v("对于Java虚拟机来说，第一种即时编译 (JIT) 是默认模式，Java Hotspot 虚拟机使用它在运行时将字节码转换为机器码。后者提前编译 (AOT)由新颖的 GraalVM 编译器支持，并允许在构建时将字节码直接静态编译为机器码。")]),t._v(" "),a("p",[t._v("现在正处于云原生，降本增效的时代，Java 相比于 Go、Rust 等其他编程语言非常大的弊端就是启动编译和启动进程非常慢，这对于根据实时计算资源，弹性扩缩容的云原生技术相冲突，Spring6 借助 AOT 技术在运行时内存占用低，启动速度快，逐渐的来满足 Java 在云原生时代的需求。")]),t._v(" "),a("h2",{attrs:{id:"三、aot的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、aot的优缺点"}},[t._v("#")]),t._v(" 三、AOT的优缺点")]),t._v(" "),a("p",[a("code",[t._v("简单聊聊AOT预编译的优缺点~~")])]),t._v(" "),a("p",[t._v("AOT技术能够让程序在运行前就已经编译完成，能够极大的减少程序启动的时间和运行时内存的占用。当然，每种技术在具备其优点的同时，也会多多少少存在一些缺点。本节，就简单聊聊AOT技术的优缺点。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-aot优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-aot优点"}},[t._v("#")]),t._v(" 3.1 AOT优点")]),t._v(" "),a("p",[t._v("Java 虚拟机加载已经预编译成的二进制库，可以直接执行。不必等待及时编译器的预热，减少 Java 应用给人带来“第一次运行慢” 的不良体验。")]),t._v(" "),a("ul",[a("li",[t._v("在程序运行前编译，可以避免在运行时的编译性能消耗和内存消耗。")]),t._v(" "),a("li",[t._v("可以在程序运行初期就达到最高性能，程序启动速度快。")]),t._v(" "),a("li",[t._v("编译结果只有机器码，打包体积小。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-aot缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-aot缺点"}},[t._v("#")]),t._v(" 3.2 AOT缺点")]),t._v(" "),a("p",[t._v("AOT总体来说会有如下一些缺点。")]),t._v(" "),a("ul",[a("li",[t._v("AOT不能根据硬件情况或程序运行情况择优选择机器指令序列，理论峰值性能不如JIT。")]),t._v(" "),a("li",[t._v("没有动态能力，编译结果强依赖特定环境，不能跨平台运行。")])]),t._v(" "),a("h2",{attrs:{id:"四、graalvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、graalvm"}},[t._v("#")]),t._v(" 四、Graalvm")]),t._v(" "),a("p",[a("code",[t._v("简单聊聊Graalvm~~")])]),t._v(" "),a("p",[t._v("Spring6 支持的 AOT 技术，底层就是 GraalVM ，Spring 也对 GraalVM 本机映像提供了支持。GraalVM 是一种高性能 JDK，旨在加速用 Java 和其他 JVM 语言编写的应用程序的执行，同时还为 JavaScript、Python 和许多其他流行语言提供运行时。 GraalVM 提供两种运行 Java 应用程序的方法：一种是在 HotSpot JVM 上使用 Graal 即时 (JIT) 编译器，另一种是运行提前 (AOT) 编译的本机可执行文件。")]),t._v(" "),a("p",[t._v("GraalVM 的多语言能力使得在单个应用程序中混合多种编程语言成为可能，同时消除了跨语言调用的成本。GraalVM 向 HotSpot JVM 添加了一个用 Java 编写的高级即时 (JIT) 优化编译器。")]),t._v(" "),a("p",[t._v("GraalVM 具有以下特性：")]),t._v(" "),a("p",[t._v("（1）一种高级优化编译器，它生成更快、更精简的代码，需要更少的计算资源。")]),t._v(" "),a("p",[t._v("（2）AOT 本机图像编译提前将 Java 应用程序编译为本机二进制文件，立即启动，无需预热即可实现最高性能。")]),t._v(" "),a("p",[t._v("（3）Polyglot 编程在单个应用程序中利用流行语言的最佳功能和库，无需额外开销。")]),t._v(" "),a("p",[t._v("（4）利用高级工具在 Java 和多种语言中调试、监视、分析和优化资源消耗。")]),t._v(" "),a("h2",{attrs:{id:"五、native-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、native-image"}},[t._v("#")]),t._v(" 五、Native Image")]),t._v(" "),a("p",[a("code",[t._v("最后再一起聊聊Native Image~~")])]),t._v(" "),a("p",[t._v("目前业界除了这种在JVM中进行AOT的方案，还有另外一种实现Java AOT的思路，那就是直接摒弃JVM，和C/C++一样通过编译器直接将代码编译成机器代码，然后运行。这无疑是一种直接颠覆Java语言设计的思路，那就是GraalVM Native Image。它通过C语言实现了一个超微缩的运行时组件 —— Substrate VM，基本实现了JVM的各种特性，但足够轻量、可以被轻松内嵌，这就让Java语言和工程摆脱JVM的限制，能够真正意义上实现和C/C++一样的AOT编译。这一方案在经过长时间的优化和积累后，已经拥有非常不错的效果，基本上成为Oracle官方首推的Java AOT解决方案。")]),t._v(" "),a("p",[t._v("Native Image 是一项创新技术，可将 Java 代码编译成独立的本机可执行文件或本机共享库。在构建本机可执行文件期间处理的 Java 字节码包括所有应用程序类、依赖项、第三方依赖库和任何所需的 JDK 类。生成的自包含本机可执行文件特定于不需要 JVM 的每个单独的操作系统和机器体系结构。")]),t._v(" "),a("h2",{attrs:{id:"六、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、总结"}},[t._v("#")]),t._v(" 六、总结")]),t._v(" "),a("p",[a("code",[t._v("AOT预编译技术的基础知识介绍完了，我们一起总结下吧！")])]),t._v(" "),a("p",[t._v("本章，主要介绍了AOT预编译技术的基础知识，首先，介绍了JIT即时编译技术和AOT预编译技术的区别和联系，随后介绍了AOT的优缺点。接下来，简单介绍了Graalvm和Native Image。")]),t._v(" "),a("h2",{attrs:{id:"七、vip服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、vip服务"}},[t._v("#")]),t._v(" 七、VIP服务")]),t._v(" "),a("p",[a("strong",[t._v("强烈推荐阅读：《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zp0nI2RyFb_UCYpSsUt2OQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("原来大厂面试官也会在这里偷偷学习！"),a("OutboundLink")],1),t._v("》，如果文中优惠券过期，可长按或扫码下面优惠券二维码加入星球。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-18-008.png?raw=true",width:"70%"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("星球优惠券")]),t._v(" "),a("br")]),t._v(" "),a("p",[a("strong",[t._v("冰河技术")]),t._v(" 知识星球**《SpringCloud Alibaba实战》"),a("strong",[t._v("从零搭建并开发微服务项目已完结；")]),t._v("《RPC手撸专栏》"),a("strong",[t._v("已经更新120+篇文章，已提交120+项目工程，120+项目源码Tag分支；")]),t._v("《Spring核心技术》**专栏以Spring的核心注解为突破口，通过源码执行的时序图带你详细分析Spring底层源码，让你学习Spring底层源码不再枯燥。并这些专栏已经将源码的获取方式放到了知识星球中，同时在微信上创建了专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),a("p",[t._v("目前，星球群已形成良好的技术讨论氛围，后续也会像PRC项目一样全程手撸企业级中间件项目，"),a("strong",[t._v("涉及分布式、高并发、高性能、高可靠、高可扩展，让大家知其然，更知其所以然，从手写企业级中间件项目的过程中，充分掌握分布式、高并发、高性能、高可靠、高可扩展的编程技巧。")])]),t._v(" "),a("p",[a("strong",[t._v("更加值得一提的是：有超过30+的大厂面试官悄悄在这里提升核心竞争力！")])]),t._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),a("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),t._v(" "),a("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),a("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),a("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),a("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),a("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),a("p",[t._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),a("p",[t._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),a("p",[t._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),a("h3",{attrs:{id:"如何加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=r.exports}}]);