(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{422:function(t,a,s){"use strict";s.r(a);var n=s(7),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《mycat核心技术》第04章-mycat核心配置文件rule-xml说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《mycat核心技术》第04章-mycat核心配置文件rule-xml说明"}},[t._v("#")]),t._v(" 《Mycat核心技术》第04章：Mycat核心配置文件rule.xml说明")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("星球项目地址："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/zsxq/introduce.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("ul",[a("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),a("li",[t._v("本章重点：介绍Mycat核心配置文件schema.xml，理解schema.xml文件在Mycat中的作用，并能够在实际项目中灵活使用Mycat进行分库分表。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("今天给大家介绍《Mycat核心技术》的第04章：给大家简单介绍下Mycat中的核心配置文件rule.xml，好了，开始今天的内容。")]),t._v(" "),a("h2",{attrs:{id:"rule-xml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-xml文件"}},[t._v("#")]),t._v(" rule.xml文件")]),t._v(" "),a("p",[t._v("rule.xml里面就定义了我们对表进行拆分所涉及到的规则定义。我们可以灵活的对表使用不同的分片算法，或者对表使用相同的算法但具体的参数不同。这个文件里面主要有tableRule和function这两个标签。在具体使用过程中可以按照需求添加tableRule和function。")]),t._v(" "),a("h3",{attrs:{id:"_1-tablerule标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tablerule标签"}},[t._v("#")]),t._v(" 1.tableRule标签")]),t._v(" "),a("p",[t._v("这个标签定义表规则。")]),t._v(" "),a("p",[t._v("定义的表规则，在schema.xml：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tableRule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rule1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("id"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("algorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("func1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("algorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tableRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ul",[a("li",[t._v("name 属性指定唯一的名字，用于标识不同的表规则。内嵌的rule标签则指定对物理表中的哪一列进行拆分和使用什么路由算法。")]),t._v(" "),a("li",[t._v("columns 内指定要拆分的列名字。algorithm 使用function标签中的name属性。连接表规则和具体路由算法。当然，多个表规则可以连接到同一个路由算法上。标签内使用。让逻辑表使用这个规则进行分片。")])]),t._v(" "),a("h3",{attrs:{id:"_2-function标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-function标签"}},[t._v("#")]),t._v(" 2.function标签")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hash-int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.opencloudb.route.function.PartitionByFileMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("partition-hash-int.txt"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("name 指定算法的名字。")]),t._v(" "),a("li",[t._v("class 制定路由算法具体的类名字。")]),t._v(" "),a("li",[t._v("property 为具体算法需要用到的一些属性。")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=r.exports}}]);