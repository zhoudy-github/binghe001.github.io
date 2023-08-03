(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{934:function(t,r,e){"use strict";e.r(r);var _=e(7),a=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第6章-秒杀系统总体方案目标与架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第6章-秒杀系统总体方案目标与架构设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第6章：秒杀系统总体方案目标与架构设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10AmqkEQb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10AmqkEQb"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★★☆")]),t._v(" "),r("li",[t._v("本章重点：梳理并完成秒杀系统的总体方案目标、技术选型与架构设计，从总体上理解秒杀系统的方案目标、技术选型和架构设计，并从全局视角了解秒杀系统的分层设计和架构思想。所以，本章会重点介绍方案目标、技术选型、一般系统架构设计、秒杀系统总体架构设计、秒杀系统容器化架构设计和DDD分层业务架构设计。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10AmqkEQb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10AmqkEQb"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，我们梳理了秒杀系统的需求和业务流程，并对秒杀系统的技术流程进行了总体梳理，不管是从业务角度出发，还是从技术角度出发，都大致了解了秒杀系统的执行流程。从业务和技术角度了解秒杀系统的执行流程后，接下来，就要制定方案目标和总体架构设计了。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("相信很多小伙伴都有多这样的体会，接到需求后，如果不做全面的需求分析、系统分析和架构设计，一上来就干代码，往往在开发中途就会发现代码不太符合需求，或者突然发现有更好的实现方式，大部分时候，已经来不及将代码推倒重来，只能在原有代码的基础上苦苦支撑。最终，原本设想的高并发、高性能、高可用和高可扩展的代码，却变成了一坨“屎山”。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("作为系统架构师和研发人员，在充分了解了系统需求、业务流程和技术流程后，就需要为系统设定方案目标，制定技术方案选型，对系统进行总体架构设计和分层架构设计。从全局视角充分理解秒杀系统的方案目标、技术选型、总体架构和分层架构，以指导后续秒杀系统的具体实现。")]),t._v(" "),r("h2",{attrs:{id:"三、方案目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、方案目标"}},[t._v("#")]),t._v(" 三、方案目标")]),t._v(" "),r("p",[t._v("在进行技术选型和总体架构设计之前，需要明确一个事项，就是系统无论采用何种方案，采用何种架构设计都需要明确这种方案的业务目标、技术目标和架构目标，并在研发过程中不断评估系统的总体性能表现，发现系统瓶颈并不断进行优化。")]),t._v(" "),r("p",[t._v("总体上，无论采用何种方案实现秒杀系统，都要实现如下方案目标。")]),t._v(" "),r("ul",[r("li",[t._v("业务目标：满足用户故事中的各类场景。")]),t._v(" "),r("li",[t._v("技术目标：秒杀商品详情页接口：10W+QPS，秒杀接口：1W+TPS。")]),t._v(" "),r("li",[t._v("架构目标：高并发、高性能、高可用、可监控、可预警、可伸缩。")])]),t._v(" "),r("h2",{attrs:{id:"四、技术选型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、技术选型"}},[t._v("#")]),t._v(" 四、技术选型")]),t._v(" "),r("p",[t._v("在技术选型上，除了采用SpringBoot等基础框架外，也会采用容器化方案。为了尽量降低技术门槛，在整个秒杀系统的技术选型中，主要采用市面上比较主流的技术框架和方案，具体技术选型如下所示。")]),t._v(" "),r("ul",[r("li",[t._v("开发框架：SpringBoot。")]),t._v(" "),r("li",[t._v("缓存：Redis+本地缓存。")]),t._v(" "),r("li",[t._v("数据库：MySQL。")]),t._v(" "),r("li",[t._v("业务网关：SpringCloud Gateway。")]),t._v(" "),r("li",[t._v("持久层框架：MyBatis。")]),t._v(" "),r("li",[t._v("服务配置与注册发现：Nacos。")]),t._v(" "),r("li",[t._v("容器：Docker。")]),t._v(" "),r("li",[t._v("容器化管理：Swarm、Portainer。")]),t._v(" "),r("li",[t._v("监控：Prometheus、Grafana。")]),t._v(" "),r("li",[t._v("系统限流：Nginx+Lua、Sentinel。")]),t._v(" "),r("li",[t._v("消息中间件：RocketMQ。")]),t._v(" "),r("li",[t._v("单元测试：Junit。")]),t._v(" "),r("li",[t._v("压测工具：JMeter。")])]),t._v(" "),r("h2",{attrs:{id:"五、一般系统架构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、一般系统架构设计"}},[t._v("#")]),t._v(" 五、一般系统架构设计")]),t._v(" "),r("p",[t._v("如果是按照一般系统的架构设计方案来设计秒杀系统的话，相信大部分小伙伴会将秒杀系统的架构设计成如图6-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-10-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("这种架构设计也是比较常见的，在这种架构设计中，Nginx只做负载均衡和反向代理，研发人员更多的是关注Web服务层和基础服务层的开发。虽然这种架构设计在一般的系统中没什么问题，但是放到秒杀系统中，会存在很多问题，最典型的问题就是："),r("strong",[t._v("Web服务性能问题和拉取资源填充数据性能问题。")])]),t._v(" "),r("p",[r("strong",[t._v("（1）Web服务性能问题")])]),t._v(" "),r("p",[t._v("Nginx只提供负载均衡与反向代理的功能，大部分流量会直接进入Web服务层，Web服务层一般会采用Tomcat作为服务器。了解Tomcat的小伙伴都知道，Tomcat是通过线程池来处理请求。如果大部分流量都直接涌入Tomcat的话，Tomcat就会瞬间接收大量的请求，如果Tomcat线程池中的线程设置的比较小，很容易导致Tomcat线程池中的线程不够用，继而Tomcat中线程池的等待队列会被占满，后续的请求会被拒绝，并且Tomcat会持续高负载运行，最终导致系统卡顿。如果Tomcat线程池中的线程数设置的过大，很容易将CPU打满，到时机器卡死，即使没有卡死，当Tomcat中线程池的等待队列被占满后，后面的请求也会被拒绝掉，总体上的表现就是性能很差，并且会有很多请求被拒绝掉。")]),t._v(" "),r("p",[r("strong",[t._v("（2）拉取资源填充数据性能问题")])]),t._v(" "),r("p",[t._v("这种架构设计无论是将静态资源放在Nginx中，还是放到Web服务层，对会表现的比较卡顿。因为大量请求涌入Web服务层，会大量的调用相关的接口，导致Web服务层变得卡顿，后续请求进入系统后，加载静态资源，例如静态页面后，静态页面会调用接口获取数据，由于接口此时变得非常卡顿，就会导致静态资源上的数据加载缓慢，直接表现就是页面无法正常加载，拉取资源填充数据性能很差。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);