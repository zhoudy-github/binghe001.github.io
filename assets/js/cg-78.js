(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{377:function(t,a,r){"use strict";r.r(a);var v=r(7),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm垃圾回收算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm垃圾回收算法"}},[t._v("#")]),t._v(" JVM垃圾回收算法")]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("各位小伙伴应该都上班了吧，好啦，大家把心收回来好好工作吧，今天冰河继续给大家分享一篇关于JVM的文章。")]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499370&idx=1&sn=9584ccbeb437823a59f4a6af7058d4a8&chksm=cf56496bf821c07dc09d199169e0a3057bf3a400420837594dc37d0cc2edfab5ca6fd82b041d&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM垃圾回收机制"),a("OutboundLink")],1),t._v("》一文中，我们知道了哪些类是需要清除的，那在java虚拟机中，他有哪些垃圾收集算法呢？")]),t._v(" "),a("h2",{attrs:{id:"标记-清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除"}},[t._v("#")]),t._v(" 标记-清除")]),t._v(" "),a("p",[t._v("标记-清除算法就是，先标记哪些对象是存活的，哪些对象是可以回收的，然后再把标记为可回收的对象清除掉。从下面的图可以看到，回收后，产生了大量的不连续的内存碎片，如果这个时候，有一个比较大的对象进来，却没有一个连续的内存空间给他使用，又会触发一次垃圾收集动作。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ0a",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"复制算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[t._v("#")]),t._v(" 复制算法")]),t._v(" "),a("p",[t._v("复制算法是通过两个内存空间，把一方存活的对象复制到另外一个内存空间上，然后再把自己的内存空间直接清理。\n标记后，此时情况如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ27",loading:"lazy"}})]),t._v(" "),a("p",[t._v("然后再把左边的存活对象复制到右边：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1bS",loading:"lazy"}})]),t._v(" "),a("p",[t._v("复制完后，再清理自己的内存空间：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ3I",loading:"lazy"}})]),t._v(" "),a("p",[t._v("右边的空间开始回收，再复制到坐标，如此往复。这样就可以让存活的对象紧密的靠在一起，腾出了连续的内存空间。\n缺点就是空间少了一半，这少了一半的空间用于复制存活的对象。但是在实际过程中，大部分的对象的存活时间都非常短，也就是说这些对象都可以被回收的。")]),t._v(" "),a("p",[t._v("比如说左边有100M空间，但是只有1M的对象是存活的，那我们右边就不需要100M来存放这个1M的存活对象。因此我们的新生代是分成3个内存块的：Eden空间、From Survivor空间、To Survivor空间，他们的默认比例是8:1:1。")]),t._v(" "),a("p",[t._v("也就是说，平常的时候有Eden+Survivor=90M可以使用，10M用于存放存活对象（假设100M空间）。这个算法在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),a("OutboundLink")],1),t._v("》一文中的对象优先在Eden分配中提过了。")]),t._v(" "),a("h2",{attrs:{id:"标记-整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理"}},[t._v("#")]),t._v(" 标记-整理")]),t._v(" "),a("p",[t._v("除了新生代，老年代的内存也要清理的，但是上面的算法并不适合老年代。因为老年代对象的生命周期都比较长，那就不能像新生代一样仅浪费10%的内存空间，而是浪费一半的内存空间。")]),t._v(" "),a("p",[t._v("标记-整理与标记-清除都是先标记哪些对象存活，哪些对象可以回收，不同的是他并没有直接清理可回收的对象，而是先把存活的对象进行移动，这样存活的对象就紧密的靠在一起，最后才把垃圾回收掉。")]),t._v(" "),a("p",[t._v("回收前，存活对象是不连续的。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1eZ",loading:"lazy"}})]),t._v(" "),a("p",[t._v("回收中，存活对象是连续的。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1e8",loading:"lazy"}})]),t._v(" "),a("p",[t._v("回收后，回收垃圾对象。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1fn",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"性能与优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能与优化"}},[t._v("#")]),t._v(" 性能与优化")]),t._v(" "),a("p",[t._v("由于每次GC，都会Stop The World，也就是说，此时虚拟机会把所有工作的线程都停掉，会给用户带来不良的体验及影响，所以我们要进来的减少GC的次数。")]),t._v(" "),a("p",[t._v("针对新生代，Minor GC触发的原因就是新生代的Eden区满了，所以为了减少Minor GC，我们新生代的内存空间不要太小。如果说我们给新生代的内存已经到达机器了极限了，那只能做集群了，把压力分担出去。")]),t._v(" "),a("p",[t._v("老年代的垃圾回收速度比新生代要慢10倍，所以我们也要尽量减少发生Full GC。")]),t._v(" "),a("p",[t._v("《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),a("OutboundLink")],1),t._v("》一文中我们提到了几种进入老年代的方式，我们看看这些是怎么处理的：")]),t._v(" "),a("ul",[a("li",[t._v("大对象直接进入老年代：这个没办法优化，总不能调大对象大小吧，那这些大对象在新生代的复制就会很慢了。")]),t._v(" "),a("li",[t._v("长期存活的对象将进入老年代:年龄的增加，是每次Minor GC的时候，所以我们可以减少Minor GC（这个方法上面提到了），这样年龄就不会一直增加。")]),t._v(" "),a("li",[t._v("动态年龄判断:有一个重要的条件就是在Survivor空间中相同年龄所有对象大小的总和大于Survivor空间的一半，所以要加大新生代的内存空间。")]),t._v(" "),a("li",[t._v("空间分配担保:这里面有一个条件是Minor GC后，Survivor空间放不下的就存放到老年代，为了让存活不到老年代，我们可以加大Survivor空间。")])]),t._v(" "),a("p",[t._v("上面的方法，既有加大新生代的内存空间，也有加大Survivor空间，实时上，怎么优化，需要根据我们的实际场景来看，JVM的优化并没有银弹。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=_.exports}}]);