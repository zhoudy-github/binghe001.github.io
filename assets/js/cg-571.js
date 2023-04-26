(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{863:function(t,e,r){"use strict";r.r(e);var s=r(7),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《seckill秒杀系统》开篇-我要手把手教你搭建并研发一套抗瞬时百万流量的秒杀系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》开篇-我要手把手教你搭建并研发一套抗瞬时百万流量的秒杀系统"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》开篇：我要手把手教你搭建并研发一套抗瞬时百万流量的秒杀系统")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("源码获取地址："),e("a",{attrs:{href:"https://t.zsxq.com/0dbi5WSbW",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dbi5WSbW"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("今天，正式通知大家一件事情：在今后一段时间内，冰河会带着大家一起从零开始搭建并开发一套可支持瞬时百万流量的高并发秒杀系统，这里会涉及到很多互联网大厂开发过程中所使用的核心技术和架构设计模式，也有冰河在大厂工作过程中，自主研发和参与研发的企业级中间件技术。")]),t._v(" "),e("iframe",{attrs:{src:"//player.bilibili.com/player.html?aid=312930153&bvid=BV17P411U7CQ&cid=1109241209&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),e("p",[t._v("在《Seckill秒杀系统》专栏中，你学到的不仅仅是一套支持瞬时百万流量的高并发、高性能、高可用、可扩展的秒杀系统，更重要的是要学会大厂处理高并发、大流量场景的技术方案和架构设计思想，并学会如何将这些技术方案和架构设计思想落地到实际项目中。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-002.png?raw=true",width:"30%"}}),t._v(" "),e("br")]),t._v(" "),e("h2",{attrs:{id:"一、秒杀专栏背景调研"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、秒杀专栏背景调研"}},[t._v("#")]),t._v(" 一、秒杀专栏背景调研")]),t._v(" "),e("p",[t._v("相信很多小伙伴学习了不少关于并发编程相关的基础知识，同时，不少小伙伴也看了冰河出版的《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/er5KXvc-1xNWAqnMOzKalA",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：核心原理与案例实战"),e("OutboundLink")],1),t._v("》与《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/R4lqlbXpZsFTOUYALFWZUg",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：JDK核心技术"),e("OutboundLink")],1),t._v("》图书。当然，后续根据实际情况，可能会出版《深入理解高并发编程》系列的其他书籍。但是很多小伙伴在和冰河交流的过程中，普遍存在如下几个问题：")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-003.jpg?raw=true",width:"50%"}}),t._v(" "),e("br")]),t._v(" "),e("ul",[e("li",[t._v("一直在小公司做CRUD，并发编程没接触过，更别提如何高并发实际项目了。")]),t._v(" "),e("li",[t._v("公司项目没什么并发，在线人数也不多，学了很多并发编程相关的知识不知道怎么用。")]),t._v(" "),e("li",[t._v("学了很多并发编程的知识，也知道一些概念，能说出一些简单的方案，但是没实际项目经验。")]),t._v(" "),e("li",[t._v("自我感觉掌握了一些高并发编程的技术方案，但是如果真正做项目时，还是不知道如何下手。")]),t._v(" "),e("li",[t._v("简历上写了熟悉并发编程，在面试过程中，面试官一般会问秒杀系统，或者其他高并发项目实战问题，不知道怎么回答。")]),t._v(" "),e("li",[t._v("在大厂工作多年，参与了一些系统的建设与研发，但是也没机会参与像秒杀系统这样高并发、大流量的系统的整个建设过程。")]),t._v(" "),e("li",[t._v("其他问题。。。")])]),t._v(" "),e("p",[t._v("可以看到，从收集的这些并发编程相关的问题来看，存在的问题是普遍性的：小公司的小伙伴受限于业务，接触不到高并发、大流量的业务场景，大厂的小伙伴由于某些原因没有被分到高并发、大流量业务部门。但更多的是大体掌握了并发编程的基础知识，而没有系统性落地成实际高并发项目的经验。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-004.jpg?raw=true",width:"50%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[e("strong",[t._v("为了彻底解决小伙伴们的困惑，也为了进一步突破大家的技术瓶颈，冰河带着他的《Seckill秒杀系统》来了，在这里，你学到的不仅仅是一套支持瞬时百万流量的高并发、高性能、高可用、可扩展的秒杀系统，更重要的是要学会大厂处理高并发、大流量场景的技术方案和架构设计思想，并学会如何将这些技术方案和架构设计思想落地到实际项目中。。")])]),t._v(" "),e("h2",{attrs:{id:"二、为何要搞秒杀系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、为何要搞秒杀系统"}},[t._v("#")]),t._v(" 二、为何要搞秒杀系统")]),t._v(" "),e("p",[t._v("说起秒杀系统，我相信学习这个专栏的你一定对秒杀系统有所了解，甚至多多少少也参与了秒杀活动。为啥？因为国内头部电商平台每年的618、双11都会举行大促活动，相信你是参与过的，最起码你可能为这些活动贡献了流量。而每年的618、双11最直观的体现就是流量和交易额。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-005.jpg?raw=true",width:"70%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("这些最直观的数字背后，却需要很多高并发编程的知识和技术作为支撑。作为程序员，或者说互联网技术人，尤其是了解一些并发编程技术和方案的开发者，一定对每年618、双11大促背后的技术感兴趣。")]),t._v(" "),e("p",[t._v("单就秒杀系统本身而言，它是高并发、大流量场景下最具代表性的系统，如果你连秒杀系统的各项技术细节都了然于胸了，那其他涉及到并发的系统对你来说，还叫个事儿吗？另外，"),e("strong",[t._v("秒杀系统背后涉及到的高并发、高性能、高可用、可扩展的技术思路和架构模式与架构思想，你可以直接复用于任何需要支撑高并发、大流量的业务场景。")])]),t._v(" "),e("p",[e("strong",[t._v("另外，一般只有互联网大厂才具备真正研发秒杀系统的业务场景，所以，这次《Seckill秒杀系统》专栏也是一次贴近大厂真实项目的机会，专栏中涉及到的架构模式和技术点都是大厂在研发秒杀系统过程中真正实践和优化过的架构模式与技术点，认真学习《Seckill秒杀系统》专栏，认真消化吸收专栏中的每项知识点、技术思路和架构模式，并亲自动手实践每个并发编程的技巧和方案，相信你会有非常多的收获，而这些收获是实实在在的，也是互联网大厂经常使用的核心技术。")])]),t._v(" "),e("h2",{attrs:{id:"三、秒杀系统核心技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、秒杀系统核心技术"}},[t._v("#")]),t._v(" 三、秒杀系统核心技术")]),t._v(" "),e("p",[t._v("单就秒杀系统本身而言，就是为应对瞬时高并发、大流量场景而设计的支持高并发、大流量的系统，其背后会涉及到众多"),e("strong",[t._v("高并发、高性能、高可用")]),t._v("的技术作为基础保障。同时，在系统中，也要"),e("strong",[t._v("重点突破库存与限购、防刷与风控、数据一致、热点隔离、动静分离、削峰填谷、数据兜底、限流与降级、流控与容灾等核心技术问题")]),t._v("。")]),t._v(" "),e("p",[t._v("所以，冰河总结了秒杀系统所涉及到的最核心的技术内容，整理后如下图所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-006.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("由图也可以看出，《Seckill秒杀系统》专栏一定不会让你失望，它能够将真正的高并发编程知识串起来，形成知识面，并将这些高并发编程知识落地成秒杀系统，而在开发秒杀系统的过程中所使用到的技术，是互联网大厂真正在使用的核心技术。")]),t._v(" "),e("p",[e("strong",[t._v("注意：《Seckill秒杀系统》专栏会大量使用到冰河出版的《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/er5KXvc-1xNWAqnMOzKalA",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：核心原理与案例实战"),e("OutboundLink")],1),t._v("》与《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/R4lqlbXpZsFTOUYALFWZUg",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：JDK核心技术"),e("OutboundLink")],1),t._v("》图书中的知识，建议学习《Seckill秒杀系统》专栏的过程中，阅读《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/er5KXvc-1xNWAqnMOzKalA",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：核心原理与案例实战"),e("OutboundLink")],1),t._v("》与《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/R4lqlbXpZsFTOUYALFWZUg",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解高并发编程：JDK核心技术"),e("OutboundLink")],1),t._v("》图书。")])]),t._v(" "),e("h2",{attrs:{id:"四、如何学习秒杀系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、如何学习秒杀系统"}},[t._v("#")]),t._v(" 四、如何学习秒杀系统")]),t._v(" "),e("p",[t._v("1.加入 "),e("strong",[t._v("冰河技术")]),t._v(" 知识星球，才能查看星球专栏文章，查看置顶消息，申请加入项目，才能看到项目代码和技术小册，如果未申请加入项目，点击项目链接，你会发现是404页面。")]),t._v(" "),e("p",[t._v("2.专栏的每一章会对应一个代码分支，需要切换对应的分支学习对应的文章的代码分支，同时，分支中的"),e("code",[t._v("doc/assets/sql")]),t._v("里是当前分支的最新SQL语句，在对应的分支查看SQL，更新到自己的数据库中即可。")]),t._v(" "),e("p",[t._v("3.学习过程中最好按照章节顺序来学习，每一章前后都是比较连贯的，并且每一章的代码实现也有先后顺序，这样按照从前往后的顺序学习，最终你会实现一个完整的秒杀系统。")]),t._v(" "),e("p",[e("strong",[t._v("注意：学习的过程，不是复制粘贴代码的过程，赋值粘贴代码是没有任何意义的，最好的学习方式就是自己动手实现代码，然后思考、总结。")])]),t._v(" "),e("p",[t._v("4.代码结构：master分支是最新的全量代码，专栏中每一章都会对应一个代码分支，切换到章节对应的代码分支后，即可根据当前章节学习对应的代码实现，不然，在master分支中看到的是全量的代码。")]),t._v(" "),e("p",[t._v("5.对应代码实现上的问题，可以在专栏对应的源码提issuse："),e("a",{attrs:{href:"https://gitcode.net/binghe001/seckill/-/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitcode.net/binghe001/seckill/-/issues"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("6.冰河后续会为《Seckill秒杀系统》专栏录制完整的视频课程。")]),t._v(" "),e("h2",{attrs:{id:"五、提交作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、提交作业"}},[t._v("#")]),t._v(" 五、提交作业")]),t._v(" "),e("p",[t._v("在学习秒杀系统的过程中，为了有助于大家更好的消化吸收《Seckill秒杀系统》的知识，冰河会为大家布置相应的作业。当然，也是为了希望在学习的过程中，留下你真实的足迹，让我们一起努力，突破自身技术瓶颈。")]),t._v(" "),e("h3",{attrs:{id:"_1-代码作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码作业"}},[t._v("#")]),t._v(" 1.代码作业")]),t._v(" "),e("ul",[e("li",[t._v("作业空间："),e("a",{attrs:{href:"https://gitcode.net/seckillteam",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitcode.net/seckillteam"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("空间说明：为知识星球的用户提供项目代码提交空间，方便针对项目进行技术交流，你可以把自己实现的《Seckill秒杀系统》源码提交到空间中，按照 "),e("code",[t._v("项目名称-用户星球编号-作者名称")]),t._v(" 的格式创建仓库，例如 "),e("code",[t._v("seckill-1-binghe")]),t._v("。")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-04-16-007.png?raw=true",width:"70%"}}),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"_2-文字打卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-文字打卡"}},[t._v("#")]),t._v(" 2.文字打卡")]),t._v(" "),e("ul",[e("li",[t._v("大家可以在 "),e("strong",[t._v("冰河技术")]),t._v(" 知识星球中，提交文字作业也可以进行文字打卡，也可以到链接 "),e("a",{attrs:{href:"https://gitcode.net/binghe001/seckill/-/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitcode.net/binghe001/seckill/-/issues"),e("OutboundLink")],1),t._v(" 提交issues。")])]),t._v(" "),e("p",[t._v("主要按照如下方式进行总结：")]),t._v(" "),e("p",[t._v("1.今天你学了哪些章节？")]),t._v(" "),e("p",[t._v("2.遇到的问题是什么？")]),t._v(" "),e("p",[t._v("3.你是怎么解决问题的？")]),t._v(" "),e("p",[t._v("4.今天的收获是什么？")]),t._v(" "),e("p",[t._v("基于大家的打卡或者作业反馈的问题，冰河会在后续以文章和直播的形式统一解决大家学习过程中的疑问。")]),t._v(" "),e("h2",{attrs:{id:"六、如何加入星球"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、如何加入星球"}},[t._v("#")]),t._v(" 六、如何加入星球")]),t._v(" "),e("p",[t._v("说了这么多，前提条件是要加入"),e("strong",[t._v("冰河技术")]),t._v("知识星球进行学习，如何加入星球呢？今天，再次为大家发放一波优惠券，名额不多，先到先得。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"70%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("这样算来，"),e("strong",[t._v("原价299，立减149，150元就能加入星球，相当于直接5折！")]),t._v("。跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》、以及《Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码，")]),t._v(" "),e("p",[e("strong",[t._v("150元就能学这么多硬核技术、中间件项目和大厂秒杀系统，比其他培训机构不知便宜多少倍，硬核多少倍，如果是我，我会买他个终身会员！")])]),t._v(" "),e("p",[t._v("加入要趁早，后续还会随着项目和加入的人数涨价，而且只会涨，不会降，先加入的小伙伴就是赚到。")]),t._v(" "),e("h2",{attrs:{id:"七、其他方式加入星球"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、其他方式加入星球"}},[t._v("#")]),t._v(" 七、其他方式加入星球")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("链接")]),t._v(" ：打开链接 "),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),e("li",[e("strong",[t._v("回复")]),t._v(" ：在公众号 "),e("strong",[t._v("冰河技术")]),t._v(" 回复 "),e("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),e("p",[e("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),e("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),e("strong",[t._v("冰河技术")]),t._v(" 回复 "),e("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),e("h2",{attrs:{id:"八、联系冰河"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、联系冰河"}},[t._v("#")]),t._v(" 八、联系冰河")]),t._v(" "),e("h3",{attrs:{id:"_1-加群交流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-加群交流"}},[t._v("#")]),t._v(" 1.加群交流")]),t._v(" "),e("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),e("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"_2-公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-公众号"}},[t._v("#")]),t._v(" 2.公众号")]),t._v(" "),e("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),e("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"_3-视频号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-视频号"}},[t._v("#")]),t._v(" 3.视频号")]),t._v(" "),e("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"_4-星球"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-星球"}},[t._v("#")]),t._v(" 4.星球")]),t._v(" "),e("p",[t._v("加入星球 "),e("strong",[e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),e("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),e("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),e("p",[t._v("关注 "),e("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("公众号，回复 "),e("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),e("br")])])}),[],!1,null,null,null);e.default=_.exports}}]);