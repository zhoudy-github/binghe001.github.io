(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{444:function(r,t,i){"use strict";i.r(t);var n=i(7),s=Object(n.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"《spring核心技术》第00章-开篇-我要带你一步步调试spring6-0源码啦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第00章-开篇-我要带你一步步调试spring6-0源码啦"}},[r._v("#")]),r._v(" 《Spring核心技术》第00章：开篇：我要带你一步步调试Spring6.0源码啦！")]),r._v(" "),t("p",[r._v("作者：冰河\n"),t("br"),r._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),r._v(" "),t("br"),r._v("博客1："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe.gitcode.host"),t("OutboundLink")],1),r._v(" "),t("br"),r._v("博客2："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe.gitcode.host"),t("OutboundLink")],1),r._v(" "),t("br"),r._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1)]),r._v(" "),t("blockquote",[t("p",[r._v("沉淀，成长，突破，帮助他人，成就自我。")])]),r._v(" "),t("p",[t("strong",[r._v("大家好，我是冰河~~")])]),r._v(" "),t("p",[r._v("提起Spring，可以这么说，Spring几乎是Java Web领域中必不可少的基础性开发框架，Spring中提供的IOC、DI、AOP以及声明式事务等技术极大的简化了开发人员的工作量。试问：在Java Web开发领域，有谁不知道Spring？又有多少人没有使用过Spring呢？如果你还没有使用过Spring，可以这么说，你就不是一个真正的Java Web开发人员，或者你还没有真正步入Java Web开发领域。")]),r._v(" "),t("p",[r._v("好了，闲话不多说了，我们开始今天的正文。")]),r._v(" "),t("h2",{attrs:{id:"为何要写《spring核心技术》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为何要写《spring核心技术》"}},[r._v("#")]),r._v(" 为何要写《Spring核心技术》")]),r._v(" "),t("p",[r._v("万事皆有因，先跟小伙伴们简单聊聊冰河为何要写《Spring核心技术》这个专栏。")]),r._v(" "),t("p",[r._v("其实，说起Spring，市面上有非常多的书籍，还有专栏和博客来系统的介绍Spring，有些是讲解如何使用Spring，也就是基于Spring开发项目，有些是专注讲解Spring源码。但是，冰河系统性的梳理了这些内容，发现很多书籍、专栏和博客，讲的挺多，也挺深入。但是总体看下来，发现多少会有一种云里雾里的感觉。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"spring-core-2022-12-02-001","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-001.jpg",loading:"lazy"}})]),r._v(" "),t("p",[r._v("比如，看完如何使用Spring的书籍、专栏和文章，对Spring的底层原理和源码不太了解。看完专注讲解Spring底层原理和源码解析的书籍、专栏和文章吧，又是一脸懵逼，很多时候不知道这些源码是从哪个入口进来的，也不知道是触发了项目中使用的哪个注解，从而进入了书籍、专栏和文章中剖析的源码部分，反正就是一脸懵啊！")]),r._v(" "),t("p",[r._v("加上Spring迭代开发了很长时间，Spring本身的源码就东一坨西一坨的，并且条件分支代码很多，各种封装逻辑，很容易把人搞晕，看完后更懵逼了。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"spring-core-2022-12-02-002","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-002.jpg",loading:"lazy"}})]),r._v(" "),t("p",[r._v("当然，Github上有很多牛人写的简易版的Spring，虽然实现了一些Spring的小功能，但是这毕竟不是Spring框架本身啊，谁项目里会用个简易版的Spring呢？我相信不是大部分人不会用，而是百分之百的人不会用。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"spring-core-2022-12-02-003","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-003.png",loading:"lazy"}})]),r._v(" "),t("p",[r._v("所以，我们还是要把Spring本身学透才行。")]),r._v(" "),t("p",[r._v("为了让小伙伴们更轻松、更加清晰明了的学习Spring，也为了让小伙伴们对如何学习Spring有一个全新的认识（哇，学习Spring原理这么轻松？），也能够对Spring和SpringBoot做到融会贯通，冰河决定开始更新《Spring核心技术》专栏。")]),r._v(" "),t("h2",{attrs:{id:"专栏的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#专栏的特点"}},[r._v("#")]),r._v(" 专栏的特点")]),r._v(" "),t("p",[r._v("《Spring核心技术》 专栏不是只讲案例的专栏，也不是一上来就陷入源码出不来那种，只讲Spring最核心的知识和技术："),t("strong",[r._v("整体专栏以最新的 Spring6 为基础，以Spring中的核心注解为入口，给出实用案例，通过对应注解在Spring源码层面执行的时序图，引导小伙伴们有针对性的去看源码，去分析源码，最后总结和思考，形成总体上的闭环。")]),r._v(" 这样，小伙伴们在学完Spring的某项知识点时，印象才会更加深刻。")]),r._v(" "),t("p",[r._v("总之，我们的目标都是一样的：就是吃透Spring的核心技术。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"spring-core-2022-12-02-004","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-004.jpg",loading:"lazy"}})]),r._v(" "),t("p",[t("strong",[r._v("那么问题来了：")])]),r._v(" "),t("p",[t("strong",[r._v("为何以Spring6作为基础呢？")])]),r._v(" "),t("p",[r._v("因为Spring官方发布了6.0，我们就以最新的版本为基础，不搞虚的，搞就搞最新版，就是这么任性。")]),r._v(" "),t("p",[t("strong",[r._v("那为何又要以Spring中的核心注解为入口呢？")])]),r._v(" "),t("p",[r._v("试问现在谁使用Spring还去使用Spring的XML文件去配置Bean对象呢？即使有，也是非常老旧的项目在用吧。除了Spring，我们日常开发微服务程序使用的SpringBoot，不也是基于注解进行开发吗？XML那一套早就过时了。")]),r._v(" "),t("p",[r._v("以Spring中的核心注解为入口，另一个重要的原因就是，让小伙伴们有针对性的吃透Spring中最核心的技术，在学习Spring的道路上少走弯路。而且开发微服务应用使用最频繁的SpringBoot技术，本质上也是基于Spring进行封装实现的，而且在使用SpringBoot开发应用的过程中，会大量使用到Spring中的核心注解。吃透Spring中的核心注解，能够让小伙伴们将Spring和SpringBoot达到融会贯通。")]),r._v(" "),t("p",[r._v("很多小伙伴学完Spring还要去单独学习SpringBoot，其实，冰河告诉你的是：彻底吃透Spring，不是吃透网上或GitHub上那些个人写的简易版Spring，吃透那些没用，而是要吃透Spring本身，你其实不用花大量时间再去学习SpringBoot，SpringBoot只是在Spring的基础上做了一点点的封装，仅此而已。你只需要花少量的时间理解SpringBoot在Spring基础上的封装逻辑，那么，关于SpringBoot，你也就彻底掌握了。")]),r._v(" "),t("h2",{attrs:{id:"专栏总体规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#专栏总体规划"}},[r._v("#")]),r._v(" 专栏总体规划")]),r._v(" "),t("p",[r._v("我们先来看下宏观层面对于专栏的总体规划。《Spring核心技术》专栏整体以最新版本的 "),t("strong",[r._v("Spring6")]),r._v(" 为基础，以 "),t("strong",[r._v("核心注解")]),r._v(" 为入口，结合使用案例为小伙伴们彻底梳理清楚Spring的核心源码执行流程。总体上会分为IOC容器、AOP切面、声明式事务和SpringMVC四个大的篇章，各篇章会分为若干个章节来彻底梳理清楚对应的核心注解源码和流程。")]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"Spring核心技术","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-006.png",loading:"lazy"}})]),r._v(" "),t("p",[r._v("总之，学就要有针对性的去学，学就要学Spring最核心的技术，学就要高效率的去学，学就要融会贯通！")]),r._v(" "),t("h2",{attrs:{id:"章节布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#章节布局"}},[r._v("#")]),r._v(" 章节布局")]),r._v(" "),t("p",[r._v("聊完宏观的总体规划，我们再来谈谈微观层面对每个章节具体内容的布局。其实，关于每个章节的布局，前面多少已经提到过了，就是 "),t("strong",[r._v("以最新的Spring6为基础，以Spring中的核心注解为入口，给出实用案例，通过对应注解在Spring源码层面执行的时序图，引导小伙伴有针对性的去看源码，去分析源码，最后总结和思考，形成总体上的闭环。")])]),r._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"spring-core-2022-12-02-005","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2022-12-02-005.png",loading:"lazy"}})]),r._v(" "),t("p",[r._v("整个章节的布局旨在让小伙伴们彻底理解并吃透Spring中核心的技术点，不是为了面试，也不是为了简单的看看Spring，而是为了彻底吃透Spring核心技术，终极目标就是升职加薪！")]),r._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),t("p",[r._v("《Spring核心技术》专栏是一个对最新版 "),t("strong",[r._v("Spring6")]),r._v("，以核心注解和使用案例为入口，彻底解剖Spring核心原理和源码运行流程的专栏，希望小伙伴们能够跟上节奏，跟着冰河彻底吃透Spring核心技术。")]),r._v(" "),t("p",[r._v("最后，我想说的是：学习《Spring核心技术》专栏一定要塌下心来，一步一个脚印，动手实践，认真思考，遇到不懂的问题，可以直接到"),t("strong",[r._v("冰河技术")]),r._v(" 知识星球发布主题进行提问，也可以在冰河的微信群里提问，还可以私信冰河微信。一定要记住：纸上得来终觉浅，绝知此事要躬行的道理。否则，一味的CP（Copy），或者光看不练，不仅失去了学习的意义，到头来更是一无所获。")]),r._v(" "),t("p",[r._v("接下来，就让我们一起开启《Spring核心技术》之旅吧！")]),r._v(" "),t("p",[t("strong",[r._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),r._v(" "),t("h2",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[r._v("#")]),r._v(" 加群交流")]),r._v(" "),t("p",[r._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[r._v("学习加群")]),r._v("。")]),r._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),r._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[r._v("冰河微信")]),r._v(" "),t("br")]),r._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[r._v("#")]),r._v(" 公众号")]),r._v(" "),t("p",[r._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),r._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",width:"180px"}}),r._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[r._v("公众号：冰河技术")]),r._v(" "),t("br")]),r._v(" "),t("h2",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[r._v("#")]),r._v(" 星球")]),r._v(" "),t("p",[r._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("冰河技术"),t("OutboundLink")],1)]),r._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[r._v("hacker_binghe")]),r._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[r._v("实战项目")]),r._v("！")]),r._v(" "),t("p",[r._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[r._v("冰河技术"),t("OutboundLink")],1),r._v("公众号，回复 "),t("code",[r._v("星球")]),r._v(" 可以获取入场优惠券。")]),r._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),r._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[r._v("知识星球：冰河技术")]),r._v(" "),t("br")])])}),[],!1,null,null,null);t.default=s.exports}}]);