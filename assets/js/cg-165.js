(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{462:function(t,r,a){"use strict";a.r(r);var v=a(7),_=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《spring注解驱动开发》第00章-spring注解驱动开发概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《spring注解驱动开发》第00章-spring注解驱动开发概述"}},[t._v("#")]),t._v(" 《Spring注解驱动开发》第00章：Spring注解驱动开发概述")]),t._v(" "),r("h2",{attrs:{id:"写在前面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[t._v("#")]),t._v(" 写在前面")]),t._v(" "),r("blockquote",[r("p",[t._v("今天，面了一个工作5年的小伙伴，面试结果不理想啊！也不是我说，工作5年了，问多线程的知识：就只知道继承Thread类和实现Runnable接口！问Java集合，竟然说HashMap是线程安全的！问MySQL的MyISAM存储引擎和InnoDB存储引擎的区别，竟然说成是MyISAM存储引擎支持事务，InnoDB不支持！问Spring就只知道IOC和AOP的概念，深一点就不知道了！再问项目。。。哎，算了，不说了！")]),t._v(" "),r("p",[t._v("大家对于设计模式、高并发和Java8新特性，不了解的，就去看我的专栏吧！今天，我们来聊聊关于Spring注解驱动开发的那些事儿，也算是Spring专栏的开篇吧！")])]),t._v(" "),r("h2",{attrs:{id:"关于spring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于spring"}},[t._v("#")]),t._v(" 关于Spring")]),t._v(" "),r("p",[t._v("说起Spring，绝对是Java开发领域的佼佼者，试问，做Java开发的有谁不知道Spring？做Java开发的又有谁没用过Spring?又有哪家公司在Java Web项目中没使用过Spring？就算有，那也应该很少吧！所以，骚年，如果你选择了Java开发这条不归路，你就必须牢牢掌握Spring！")]),t._v(" "),r("h2",{attrs:{id:"spring注解驱动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring注解驱动"}},[t._v("#")]),t._v(" Spring注解驱动")]),t._v(" "),r("p",[t._v("如果小伙伴们还在用Spring的基础框架，例如：Spring、SpringMVC、MyBatis，也就是传说中的SSM，来整合开发的时候，可能会大量的写配置文件。那么，在SpringBoot和SpringCloud兴起之后，Spring的注解驱动就用的非常多了！其中，会用到非常多的注解。为了能够更加深刻的理解这些注解的原理，更好的使用这些注解提高我们的工作效率。这里，我结合实际工作中使用Spring的一些经验，向大家分享下如何使用Spring的注解来提高我们的工作效率，以及注解背后的工作原理到底是什么！")]),t._v(" "),r("h2",{attrs:{id:"专栏安排"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#专栏安排"}},[t._v("#")]),t._v(" 专栏安排")]),t._v(" "),r("p",[t._v("不知道怎么安排这个专栏，反正想了很久，无意间看到一张脑图，哈哈，没错，可以按照它来（文末会给出这张图）。那我就把整个专栏分成三个大的部分吧，分别是：容器、扩展原理和Web。")]),t._v(" "),r("h3",{attrs:{id:"容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),r("p",[t._v("容器作为整个专栏的第一大部分，内容包括：")]),t._v(" "),r("ul",[r("li",[t._v("AnnotationConfigApplicationContext")]),t._v(" "),r("li",[t._v("组件添加")]),t._v(" "),r("li",[t._v("组件赋值")]),t._v(" "),r("li",[t._v("组件注入")]),t._v(" "),r("li",[t._v("AOP")]),t._v(" "),r("li",[t._v("声明式事务")])]),t._v(" "),r("h3",{attrs:{id:"扩展原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扩展原理"}},[t._v("#")]),t._v(" 扩展原理")]),t._v(" "),r("p",[t._v("扩展原理作为整个专栏的第二大部分，内容包括：")]),t._v(" "),r("ul",[r("li",[t._v("BeanFactoryPostProcessor")]),t._v(" "),r("li",[t._v("BeanDefinitionRegistryPostProcessor")]),t._v(" "),r("li",[t._v("ApplicationListener")]),t._v(" "),r("li",[t._v("Spring容器创建过程")])]),t._v(" "),r("p",[t._v("在这部分，我们一起来研究Spring的底层源码和运行流程，对于很多小伙伴来说，这部分的内容相当枯燥，甚至有种身体被掏空的感觉（哈哈），但是，这部分的内容一定要掌握，这也是普通程序员进阶成为高级程序员的必经之路。")]),t._v(" "),r("p",[t._v("这部分内容对于深度学习Spring框架，起着非常重要的作用。小伙伴们在看这部分的文章时，一定要根据文章自己多动手调试Spring源码，这样对于Spring的理解才能更加深刻。")]),t._v(" "),r("h3",{attrs:{id:"web"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[t._v("#")]),t._v(" Web")]),t._v(" "),r("p",[t._v("Web作为整个专栏的第三大部分，内容包括：")]),t._v(" "),r("ul",[r("li",[t._v("servlet3.0")]),t._v(" "),r("li",[t._v("异步请求")])]),t._v(" "),r("p",[t._v("这部分，其实就是SpringMVC，这个部分中，我们会重点来说异步请求。")]),t._v(" "),r("p",[t._v("整个专栏的规划有一定深度，建议小伙伴们提前学习了解下Spring的基础知识，最好是对Spring和SpringMVC框架有过一定的使用经验，如果是事先了解过Spring和SpringMVC的源码，那就太好了，这样学习起来可以达到事半功倍的效果。")]),t._v(" "),r("p",[t._v("暂时就说这么多吧，今天算是开篇了，小伙伴们有啥想说的，都可以私聊我！")]),t._v(" "),r("h2",{attrs:{id:"写在最后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),r("blockquote",[r("p",[t._v("如果觉得文章对你有点帮助，请微信搜索并关注「 "),r("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习Spring注解驱动开发。公众号回复“spring注解”关键字，领取Spring注解驱动开发核心知识图，让Spring注解驱动开发不再迷茫。")])]),t._v(" "),r("p",[t._v("最后，附上Spring注解驱动开发核心知识图，祝大家在学习Spring注解驱动开发时少走弯路。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"Spring注解驱动开发","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-001.jpg",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"星球服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),r("p",[t._v("加入星球，你将获得：")]),t._v(" "),r("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),r("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),r("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),r("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),r("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),r("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),r("h2",{attrs:{id:"星球重磅福利"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),r("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),r("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),r("p",[r("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),r("h2",{attrs:{id:"其他方式加入星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("链接")]),t._v(" ：打开链接 "),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),r("li",[r("strong",[t._v("回复")]),t._v(" ：在公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),r("p",[r("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),r("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),r("h2",{attrs:{id:"星球规划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),r("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),r("h3",{attrs:{id:"中间件项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),r("ul",[r("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),r("h3",{attrs:{id:"超硬核项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),r("ul",[r("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),r("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),r("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),r("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),r("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),r("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),r("h2",{attrs:{id:"联系冰河"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),r("h3",{attrs:{id:"加群交流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),r("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),r("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"公众号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),r("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"视频号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),r("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),r("p",[t._v("加入星球 "),r("strong",[r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),r("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),r("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),r("p",[t._v("关注 "),r("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("公众号，回复 "),r("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),r("br")])])}),[],!1,null,null,null);r.default=_.exports}}]);