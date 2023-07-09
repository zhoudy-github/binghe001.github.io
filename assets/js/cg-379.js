(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{675:function(t,v,_){"use strict";_.r(v);var a=_(7),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"《面试必问》第04章-如何设计一款高并发的消息中间件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第04章-如何设计一款高并发的消息中间件"}},[t._v("#")]),t._v(" 《面试必问》第04章：如何设计一款高并发的消息中间件？")]),t._v(" "),v("p",[v("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),v("p",[t._v("很多小伙伴去大厂面试，几乎都会遇到一些开放式的题目，这些开放式的题目没有固定的答案，但是它能够实实在在的体现面试者较为真实的系统设计能力和技术功底。如果你回答的比较完美，那么，通过这种开放式题目，就能够让你从众多的面试者中脱颖而出。")]),t._v(" "),v("p",[t._v("今天，我们就一起来聊聊，去大厂面试时，一个较为常见的开放式题目：如果让你设计一个高并发的消息中间件，你会怎么做？")]),t._v(" "),v("h2",{attrs:{id:"消息中间件涉及的知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息中间件涉及的知识点"}},[t._v("#")]),t._v(" 消息中间件涉及的知识点")]),t._v(" "),v("p",[t._v("要想设计一个具有高并发的消息中间件，那么首先就要了解下消息中间件涉及哪些具体的知识点。通常，设计一个良好的消息中间件最少需要满足如下条件：")]),t._v(" "),v("ul",[v("li",[t._v("生产者、消费者模型。")]),t._v(" "),v("li",[t._v("支持分布式架构。")]),t._v(" "),v("li",[t._v("数据的高可用。")]),t._v(" "),v("li",[t._v("消息数据不丢失。")])]),t._v(" "),v("p",[t._v("接下来，我们就针对消息中间件来分别谈谈这些技术点。")]),t._v(" "),v("h2",{attrs:{id:"生产者消费者模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生产者消费者模型"}},[t._v("#")]),t._v(" 生产者消费者模型")]),t._v(" "),v("p",[t._v("相信很多小伙伴对于生产者和消费者模型都比较了解了，简单的说：就是消息中间件能够使其他应用来生产消息，也能够使其他应用来消费相应的消息。")]),t._v(" "),v("p",[t._v("对于生产者和消费者模型，我们需要考虑的问题点就比较多了。接下来，我就一步步来引导大家进行思考。")]),t._v(" "),v("p",[t._v("首先，我们来思考这样一个问题："),v("strong",[t._v("如果生产者生产了消息，那么消息中间件应该怎样存储相应的数据呢？存储在内存？ 存储在磁盘？还是同时存储在内存和磁盘中呢？")])]),t._v(" "),v("p",[t._v("如果是将消息数据同时存储在内存和磁盘中，我们又该如何处理这些数据呢？是生产者将消息投递到消息中间件之后，我们就立刻将数据写入磁盘？还是说数据先驻留到内存，然后每隔一段时间刷到磁盘上？")]),t._v(" "),v("p",[t._v("如果是每隔一段时间刷到磁盘上，那我们又要考虑磁盘文件的切分问题，也就是说，需要将消息数据分成多少个磁盘文件？（总不能把所有的数据放到一个磁盘文件中吧）。如果是需要切分成多个磁盘文件，那切分的规则又是什么呢？")]),t._v(" "),v("p",[v("strong",[t._v("上面这些问题都是我们在设计一个消息中间件时需要考虑的问题。然而，这还只是一小部分问题。如果想在面试时脱颖而出，那就还需要继续往下看，还有一些重要的问题点需要注意。")])]),t._v(" "),v("p",[t._v("如果文件按照一定的规则切分到多个磁盘文件中了，那是不是还需要管理元数据来标识数据的具体消息（就像是Hadoop中的NameNode节点中存储着DataNode的元数据信息，NameNode节点通过这些元数据信息就能够更好的管理DataNode节点）？")]),t._v(" "),v("p",[t._v("这些元数据可以包括：消息数据的偏移量、也可以是消息数据的唯一ID。")]),t._v(" "),v("p",[t._v("考虑完数据的存储问题，我们还需要考虑的是：消息中间件是如何将数据投递到对应的消费者的？")]),t._v(" "),v("p",[t._v("在设计生产者和消费者时，还一个很重要的问题需要我们考虑：我们在设计消息中间件时，采用的消费模式是什么？会不会将数据均匀的分配给消费者？还是会通过一些其他的规则将数据投递到消费者？")]),t._v(" "),v("h2",{attrs:{id:"支持分布式架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持分布式架构"}},[t._v("#")]),t._v(" 支持分布式架构")]),t._v(" "),v("p",[t._v("如果我们设计的消息中间件，每天会承载TB级别的数据高并发和高吞吐量的写入操作。这里，我们就需要考虑将消息中间件设计成分布式架构。")]),t._v(" "),v("p",[t._v("在设计分布式架构时，我们还需要考虑将存储的比较大的数据，做成分片存储，对数据进行分片等操作。")]),t._v(" "),v("p",[t._v("除了这些，我们还需要考虑另外一个核心问题：对于消息中间件来说，需要支持自动扩容操作。")]),t._v(" "),v("p",[t._v("还有就是是否支持数据分片，如何实现数据分片的扩容和自动数据负载均衡迁移等。")]),t._v(" "),v("h2",{attrs:{id:"数据的高可用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据的高可用"}},[t._v("#")]),t._v(" 数据的高可用")]),t._v(" "),v("p",[t._v("一般互联网应用的高可用，是通过本地堆内存，分布式缓存，和一份数据在不同的服务器上都搞一个副本来实现的。此时，任何一个存储节点宕机，都不会影响整体的高可用。我们在设计消息中间件时也可以参考这个思路。")]),t._v(" "),v("h2",{attrs:{id:"消息数据不丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息数据不丢失"}},[t._v("#")]),t._v(" 消息数据不丢失")]),t._v(" "),v("p",[t._v("此时，我们就需要提供手动ACK的机制，也就是说：当消费者真正消费消息完毕后，向消息中间件返回“ 处理完成” 的标识，消息中间件删除相应的已处理的消息。")]),t._v(" "),v("p",[t._v("但是，细化的话，这里，我们就需要两套ACK机制：")]),t._v(" "),v("ul",[v("li",[t._v("一种ACK对应的是生产端。如果一直没有接收到ACK消息，则需要通过生产者来重新发送一条消息来保证生产消息成功。")]),t._v(" "),v("li",[t._v("另一种ACK对应的是消费端。一旦一条消息消费并处理成功，必须返回一个ack给消息中间件，然后消息中间件才能删除这条消息。否则一旦消费者宕机，就必须重发这条消息给其他的消费者实例，保证消息一定会被处理成功。")])]),t._v(" "),v("p",[v("strong",[t._v("今天，我们没有聊具体的业务点，而是从整体上考虑：如果实现一个消息中间件，需要我们注意的各项知识点和专业技能！")])]),t._v(" "),v("p",[v("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),v("h2",{attrs:{id:"星球服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),v("p",[t._v("加入星球，你将获得：")]),t._v(" "),v("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),v("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),v("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),v("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),v("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),v("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),v("h2",{attrs:{id:"星球重磅福利"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),v("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),v("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),v("br")]),t._v(" "),v("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),v("p",[v("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),v("h2",{attrs:{id:"其他方式加入星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("链接")]),t._v(" ：打开链接 "),v("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),v("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),v("li",[v("strong",[t._v("回复")]),t._v(" ：在公众号 "),v("strong",[t._v("冰河技术")]),t._v(" 回复 "),v("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),v("p",[v("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),v("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),v("strong",[t._v("冰河技术")]),t._v(" 回复 "),v("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),v("h2",{attrs:{id:"星球规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),v("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),v("h3",{attrs:{id:"中间件项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),v("ul",[v("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),v("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),v("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),v("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),v("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),v("h3",{attrs:{id:"超硬核项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),v("ul",[v("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),v("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),v("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),v("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),v("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),v("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),v("h2",{attrs:{id:"联系冰河"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),v("h3",{attrs:{id:"加群交流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),v("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),v("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),v("br")]),t._v(" "),v("h3",{attrs:{id:"公众号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),v("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),v("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),v("br")]),t._v(" "),v("h3",{attrs:{id:"视频号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),v("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),v("br")]),t._v(" "),v("h3",{attrs:{id:"星球"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),v("p",[t._v("加入星球 "),v("strong",[v("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),v("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),v("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),v("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),v("p",[t._v("关注 "),v("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),v("OutboundLink")],1),t._v("公众号，回复 "),v("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),v("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),v("br")])])}),[],!1,null,null,null);v.default=r.exports}}]);