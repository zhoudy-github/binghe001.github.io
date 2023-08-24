(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{1017:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《seckill秒杀系统》第60章-商品库存分库分表与分桶编码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第60章-商品库存分库分表与分桶编码实现"}},[s._v("#")]),s._v(" 《Seckill秒杀系统》第60章：商品库存分库分表与分桶编码实现")]),s._v(" "),t("p",[s._v("作者：冰河\n"),t("br"),s._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),t("ul",[t("li",[s._v("本章难度：★★★☆☆")]),s._v(" "),t("li",[s._v("本章重点：重点理解并掌握商品库存分库分表与分桶的设计思想，掌握商品库存分库分表与分桶的核心实现逻辑，并能够将分库分表与分桶设计的核心思想与落地方案灵活运用到自身实际项目中。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("在前面的章节中，我们完成了秒杀系统的微服务改造，将秒杀系统由单体应用架构升级成微服务架构，分别通过TCC模型、AT模型和可靠消息最终一致性模型解决了分布式事务问题，并且对秒杀系统的下单流程、扣减商品库存的流程进行了异步化设计和实现。秒杀系统应用层面的性能得到了极大的提升。并且，我们还在设计层面对商品的库存进行了分库分表和分桶，旨在提升商品库存在数据读写层面的性能。")]),s._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("秒杀系统本质上就是一个高并发读和高并发写的场景，我们在不断迭代和优化秒杀系统的过程中，就是要不断的提升高并发读和高并发写的性能。对于商品库存来说，本质上既要承担高并发读流量，又要承担高并发写流量，所以，需要对商品库存进一步优化。在前面的文章中，介绍了如何对秒杀商品的库存进行分库分表和分桶设计，那么，设计了分库分表和分桶，又该如何实现呢？")]),s._v(" "),t("h2",{attrs:{id:"二、本章诉求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[s._v("#")]),s._v(" 二、本章诉求")]),s._v(" "),t("p",[s._v("从代码层面实现秒杀商品库存的分库分表与分桶逻辑，通过接口能够对库存的分桶数据进行实时灵活的调整，并且在实现的过程中要考虑缓存与数据库数据的一致性问题，要达到缓存层面数据的弱一致性，数据库层面数据的强一致性。")]),s._v(" "),t("p",[t("strong",[s._v("注意：由于本章的对应的源码是新增了一个seckill-stock工程，涉及到的源码细节比较多，本章只会给出实现库存分库分表和分桶逻辑最核心的源码部分，对应的源码其他细节部分，大家可以阅读本章对应的源码分支，这里不再赘述。")])]),s._v(" "),t("h2",{attrs:{id:"三、核心领域数据模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、核心领域数据模型"}},[s._v("#")]),s._v(" 三、核心领域数据模型")]),s._v(" "),t("p",[s._v("对于商品库存分库分表和分桶后的数据来说，并不会像秒杀商品那样存储整个商品的信息，而是只存储与商品库存相关的数据，最核心的就是要存储每个分桶下的总库存数量和可用库存数量，另外，由于库存是针对某件商品来说的，所以，还要存储商品的id。除此之外，对于分库分表和分桶之后的库存来说，还要有一些状态的变化以及区分分桶的编号信息。")]),s._v(" "),t("p",[s._v("所以，梳理完这些逻辑之后，我们大致就能够定义出秒杀商品的库存在分库分表和分桶之后的核心领域数据模型对象，所以，在此基础上，我们就可以定义出商品库存的实现类SeckillStockBucket。SeckillStockBucket类的源码详见：seckill-stock-domain工程下的io.binghe.seckill.stock.domain.model.entity.SeckillStockBucket。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillStockBucket")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" serialVersionUID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6965796752002288513L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//数据主键id")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//商品id")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//初始库存")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" initialStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前可用库存")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" availableStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//状态，0: 不可用; 1:可用")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//分桶编号")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" serialNo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillStockBucket")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillStockBucket")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" initialStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" availableStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" serialNo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SnowFlakeFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSnowFlakeFromCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goodsId "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("initialStock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" initialStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("availableStock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" availableStock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serialNo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serialNo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/***********省略getter/setter************/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("h2",{attrs:{id:"四、分库分表编码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、分库分表编码实现"}},[s._v("#")]),s._v(" 四、分库分表编码实现")]),s._v(" "),t("p",[s._v("在分库分表的实现上，我们主要通过Apache ShardingSphere实现，在分库分表的实现上，主要包含增加系统配置和创建对应的数据库和数据表。")]),s._v(" "),t("h3",{attrs:{id:"_4-1-增加系统配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-增加系统配置"}},[s._v("#")]),s._v(" 4.1 增加系统配置")]),s._v(" "),t("p",[t("strong",[s._v("（1）添加项目依赖")])]),s._v(" "),t("p",[s._v("在seckill-stock-domain工程下的pom.xml文件中添加ShardingSphere依赖，如下所示。")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("sharding.jdbc.version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("4.1.1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("sharding.jdbc.version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.apache.shardingsphere"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("sharding-jdbc-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${sharding.jdbc.version}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[s._v("#")]),s._v(" 查看完整文章")]),s._v(" "),t("p",[s._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);