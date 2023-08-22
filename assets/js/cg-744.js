(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{1042:function(t,r,e){"use strict";e.r(r);var a=e(7),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第84章-基于线程池实现单机并发数限流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第84章-基于线程池实现单机并发数限流"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第84章：基于线程池实现单机并发数限流")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：理解线程池限流的原理，从源码级别重点掌握基于线程池实现并发数限流的核心技术与落地方案，并能够将其灵活应用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在秒杀系统中，只存在分布式限流是远远不够的，我们还需要实现单机限流，单机限流不仅仅可以作为分布式限流的有效补充，还能在分布式限流出现故障时，作为兜底限流措施，尽最大努力保证秒杀系统的稳定性。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("在前面的文章中，我们基于QPS实现了单机API限流，可以作为分布式限流的补充和兜底措施。在实现单机限流时，不仅仅只有基于QPS的单机API限流，还可以扩展出许多单机限流模式，例如，可以基于线程池实现单机并发数限流。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("基于线程池实现单机并发数限流，一旦单机并发数超过一定的阈值（这个阈值通常是线程池最大并发数+队列长度），则根据对应的拒绝策略来达到限流的目的。")]),t._v(" "),r("h2",{attrs:{id:"三、线程池核心流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、线程池核心流程"}},[t._v("#")]),t._v(" 三、线程池核心流程")]),t._v(" "),r("p",[t._v("向线程池中提交任务时，线程池会根据具体情况以某种流程执行当前任务，本节，就简单介绍下线程池执行任务的核心流程。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-执行任务的流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-执行任务的流程"}},[t._v("#")]),t._v(" 3.1 执行任务的流程")]),t._v(" "),r("p",[t._v("ThreadPoolExecutor是Java线程池中最核心的类之一，它能够保证线程池按照正常的业务逻辑执行任务，并通过原子方式更新线程池每个阶段的状态。")]),t._v(" "),r("p",[t._v("ThreadPoolExecutor类中存在一个workers工作线程集合，用户可以向线程池中添加需要执行的任务，workers集合中的工作线程可以直接执行任务，或者从任务队列中获取任务后执行。ThreadPoolExecutor类中提供了整个线程池从创建到执行任务，再到消亡的整个流程方法。")]),t._v(" "),r("p",[t._v("线程池执行任务的核心流程可以简化成如图84-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/seckill-2023-08-25-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("由图84-1可以看出，当向线程池中提交任务时，线程池执行任务的流程如下所示。")]),t._v(" "),r("p",[t._v("（1）向线程池提交任务时，首先会判断线程池中的线程数是否已经达到corePoolSize，如果线程池中的线程数未达到corePoolSize，则直接创建新线程执行任务。否则，进入步骤（2）。")]),t._v(" "),r("p",[t._v("（2）判断线程池中的工作队列是否已满，如果线程池中的工作队列未满，则将任务添加到队列中等待执行。否则，进入步骤（3）。")]),t._v(" "),r("p",[t._v("（3）判断线程池中的线程数是否已经达到maximumPoolSize，如果线程池中的线程数未达到maximumPoolSize，则直接创建新线程执行任务。否则，进入步骤（4）。")]),t._v(" "),r("p",[t._v("（4）执行拒绝策略，在执行拒绝策略时，即可实现基于线程池的并发数限流。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-拒绝策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-拒绝策略"}},[t._v("#")]),t._v(" 3.2 拒绝策略")]),t._v(" "),r("p",[t._v("如果线程池中的workQueue阻塞队列满了，同时，线程池中的线程数已达到maximumPoolSize，并且没有空闲的线程，此时继续向线程池提交任务，就需要采取某种策略来拒绝任务的执行。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);