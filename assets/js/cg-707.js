(window.webpackJsonp=window.webpackJsonp||[]).push([[707],{1004:function(t,r,e){"use strict";e.r(r);var _=e(7),a=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第47章-从单体到微服务重构项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第47章-从单体到微服务重构项目"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第47章：从单体到微服务重构项目")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：将秒杀系统从单体应用拆分成微服务，掌握要将单体应用拆分成微服务的原因，重点掌握拆分微服务的原则和方法，并理解拆分微服务背后的架构思想，最终能够灵活运用到自己的实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("单机情况下秒杀系统能玩儿吗？其实只要资金充足，服务器资源给够，将单体应用部署成大规模集群，再将Redis和数据库部署成大规模集群，其实勉强也能用。为啥？只要部署集群的时候，按照性能最低的部分进行评估，服务器资源，服务实例数量给够，一般情况下也是可以勉强撑住的。但是，对于咱星球的小伙伴来说，这样实现的秒杀系统，未免有些、过于、非常Low了！咱不能这么玩儿啊！")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("前面实现的秒杀系统中，为了方便介绍和实现秒杀系统中核心的业务流程，我们将秒杀系统实现成一个单体应用。那有没有公司用单体系统支撑秒杀呢？其实还真有，哈哈。不过对于咱星球的小伙伴来说，我们绝对不能停留在单体项目上，这根本不是我要想要的，也肯定不是星球小伙伴们想看到的。毕竟单体应用和微服务涉及到的技术点和要考虑的问题不在同一水平线上，这年头，谁还想玩单体应用呢？")]),t._v(" "),r("p",[t._v("所以，我花了大半天的时间重构了秒杀系统，老样子，且听我慢慢道来。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("按照单体秒杀系统性能最低的部分进行评估，服务器资源，服务实例数量给够，只要服务器资源给够，将单体应用部署成大规模集群，再将Redis和数据库部署成大规模集群，也能完成秒杀活动，只不过是成本要高很多。但这种秒杀系统不是我想要的，我相信也绝对不是星球各位小伙伴想要的结果。")]),t._v(" "),r("p",[t._v("所以，这章，就是将单体秒杀系统拆分为微服务，来吧，一起动手实操，让这个秒杀系统“微”起来。")]),t._v(" "),r("h2",{attrs:{id:"三、架构演进"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、架构演进"}},[t._v("#")]),t._v(" 三、架构演进")]),t._v(" "),r("p",[t._v("正式重构秒杀系统之前，容我再啰嗦下分布式系统架构演进的历程，这里架构演进的部分历程摘录自《深入理解分布式事务：原理与实战》一书，想看完整内容的话，小伙伴们可以阅读《深入理解分布式事务：原理与实战》一书。好了，不啰嗦了上菜。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-简单概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简单概述"}},[t._v("#")]),t._v(" 3.1 简单概述")]),t._v(" "),r("p",[t._v("随着互联网的发展，互联网企业的业务也在飞速发展，进而促使系统的架构也在不断的变化。总体来说，系统的架构大致经历了：单体应用架构—垂直应用架构—分布式架构—SOA架构—微服务架构的演变。当然，很多互联网企业的系统架构已经向Service Mesh(服务化网格)演变。接下来，就简单介绍下系统架构的发展历程。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-单体应用架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-单体应用架构"}},[t._v("#")]),t._v(" 3.2 单体应用架构")]),t._v(" "),r("p",[t._v("在企业发展的初期，一般公司的网站流量都比较小，只需要一个应用将所有的功能代码打包成一个服务，部署到服务器上就能支撑公司的业务。这种方式能够减少开发、部署和维护的成本。")]),t._v(" "),r("p",[t._v("比如，大家都很熟悉的电商系统，里面涉及的业务主要有用户管理、商品管理、订单管理、支付管理、库存管理、物流管理等模块，初期我们会将所有模块写到一个Web项目中，然后统一部署到一个Web服务器中。单体应用架构的系统架构如图47-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-04-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("这种架构优点如下。")]),t._v(" "),r("ul",[r("li",[t._v("架构简单，项目开发和维护成本低。")]),t._v(" "),r("li",[t._v("所有项目模块部署到一起，对于小型项目来说，维护方便。")])]),t._v(" "),r("p",[t._v("但是，其缺点也是比较明显的：")]),t._v(" "),r("ul",[r("li",[t._v("所有模块耦合在一起，虽然对于小型项目来说，维护方便，但是对于大型项目来说，却不易开发和维护。")]),t._v(" "),r("li",[t._v("项目的各模块之间过于耦合，一旦有一个模块出现问题，整个项目将不可用。")]),t._v(" "),r("li",[t._v("无法针对某个具体模块来提升性能。")]),t._v(" "),r("li",[t._v("无法对项目进行水平扩展。")])]),t._v(" "),r("p",[t._v("正是由于单体应用架构存在着诸多的缺点，才逐渐演变为垂直应用架构。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);