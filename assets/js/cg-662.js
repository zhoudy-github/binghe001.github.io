(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{959:function(t,e,a){"use strict";a.r(e);var r=a(7),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《seckill秒杀系统》第50章-基于at模型解决分布式事务问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第50章-基于at模型解决分布式事务问题"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第50章：基于AT模型解决分布式事务问题")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("源码获取地址："),e("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("ul",[e("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),e("li",[t._v("本章重点：重点理解并掌握AT模型解决分布式事务问题的流程，并能够将其灵活运用到自身实际项目中，熟悉并掌握支持AT事务模型的Seata分布式事务框架。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("Seata是阿里巴巴开源的一款分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。")]),t._v(" "),e("p",[e("strong",[t._v("注意：如果想系统、深入的学习分布式事务相关的知识，可以阅读《"),e("a",{attrs:{href:"https://binghe.gitcode.host/md/knowledge/book/2022-03-29-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解分布式事务：原理与实战"),e("OutboundLink")],1),t._v("》一书。")])]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[t._v("可以这么说，当互联网企业的业务发展到一定的规模时，就会涉及到服务的拆分和数据的拆分，一旦涉及到服务的拆分和数据的拆分，多多少少都会涉及到分布式事务的问题。而使用Spring自带的事务管理器是无法很好的解决分布式事务的问题，此时就需要借助其他的解决方案或者分布式事务框架来解决分布式事务的问题。")]),t._v(" "),e("h2",{attrs:{id:"二、本章诉求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),e("p",[t._v("在前面的文章中，我们已经基于Dromara社区的Hmily开源框架使用TCC模型解决了分布式事务问题。业界对分布式事务问题提出了很多可靠的解决方案，除了TCC模型外，还有AT模型，阿里巴巴开源的Seata框架就支持AT模型。")]),t._v(" "),e("p",[t._v("本节，我们就使用阿里巴巴开源的Seata框架来解决秒杀系统中下单扣减库存产生的分布式事务问题。")]),t._v(" "),e("h2",{attrs:{id:"三、at模型解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、at模型解决方案"}},[t._v("#")]),t._v(" 三、AT模型解决方案")]),t._v(" "),e("p",[t._v("对于AT模型解决方案的知识，我们就不做过多的赘述了，关于AT模型详细的知识，大家可以到 "),e("a",{attrs:{href:"https://seata.io/zh-cn/docs/overview/what-is-seata.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seata官网"),e("OutboundLink")],1),t._v(" 阅读相关的内容，也可以阅读《"),e("a",{attrs:{href:"https://binghe.gitcode.host/md/microservices/springcloudalibaba/2022-05-25-SA%E5%AE%9E%E6%88%98-%E7%AC%AC24%E7%AB%A0-%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1-%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86%E4%B8%8ESeata%E4%BB%8B%E7%BB%8D.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringCloud Alibaba实战"),e("OutboundLink")],1),t._v("》分布式事务相关章节的文章。")]),t._v(" "),e("h2",{attrs:{id:"四、秒杀系统整合seata框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、秒杀系统整合seata框架"}},[t._v("#")]),t._v(" 四、秒杀系统整合Seata框架")]),t._v(" "),e("p",[t._v("本节，就详细介绍秒杀系统整合Seata框架来解决分布式事务问题。")]),t._v(" "),e("h3",{attrs:{id:"_4-1-搭建seata基础环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-搭建seata基础环境"}},[t._v("#")]),t._v(" 4.1 搭建Seata基础环境")]),t._v(" "),e("p",[t._v("（1）到链接："),e("a",{attrs:{href:"https://github.com/seata/seata/releases/tag/v1.6.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/seata/seata/releases/tag/v1.6.1"),e("OutboundLink")],1),t._v(" 下载Seata，这里我下载的是1.6.1版本，如图50-1所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-10-001.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("这里我下载的都是zip压缩文件。")]),t._v(" "),e("p",[t._v("（2）进入Nacos，选择命名空间，新建命名空间，如图50-2所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-10-002.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("点击新建命名空间，并填写Seata相关的信息，如图50-3所示。")]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=s.exports}}]);