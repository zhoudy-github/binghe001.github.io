(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{416:function(t,r,a){"use strict";a.r(r);var v=a(7),_=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《jvm核心技术》第08章-cms垃圾收集器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《jvm核心技术》第08章-cms垃圾收集器"}},[t._v("#")]),t._v(" 《JVM核心技术》第08章：CMS垃圾收集器")]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("今天，继续给大家分享关于JVM的文章，今天给大家带来的是一篇关于JVM CMS垃圾收集器的文章，好了，不多说了，进入今天的正题。")]),t._v(" "),r("p",[t._v("CMS是基于标记-清除算法的，收集的时候分为4个步骤：")]),t._v(" "),r("ol",[r("li",[t._v("初始标记")]),t._v(" "),r("li",[t._v("并发标记")]),t._v(" "),r("li",[t._v("重新标记")]),t._v(" "),r("li",[t._v("并发清除")])]),t._v(" "),r("h2",{attrs:{id:"初始标记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始标记"}},[t._v("#")]),t._v(" 初始标记")]),t._v(" "),r("p",[t._v("初始标记仅仅只是标记一下GC Roots能直接关联到的对象，所以速度很快。比如下图，这边的GC Roots只用了虚拟机栈为例。两个虚拟机栈分表创建了对象OBJ_A1和OBJ_B1，他们也各有自己的其他引用，在这个阶段，他只会标记OBJ_A1和OBJ_B1，其他的引用是不标记的，所以尽管这个阶段有STW，但是标记的数量少，时间很快，基本不影响。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-052.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"并发标记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发标记"}},[t._v("#")]),t._v(" 并发标记")]),t._v(" "),r("p",[t._v("并发标记就是根据初始标记的对象所直接或间接引用的对象进行标记，比如下图对OBJ_A2，OBJ_AN进行并发标记。这个阶段并没有STW，所以可以创建对象，新增新的引用，也会让某些对象失去引用，比如下图，OBJ_B1已经变成垃圾了，OBJ_C1是新增存活的对象。这个阶段由于对老年代所有的对象进行跟踪，所以是非常耗时的。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-053.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"重新标记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新标记"}},[t._v("#")]),t._v(" 重新标记")]),t._v(" "),r("p",[t._v("在并发标记中，我们看到存活对象OBJ_C1等以及垃圾对象OBJ_B1等是没有被标记出来的，所以这个阶段就是对这些对象进行重新标记。\n这个阶段也有STW，但是仅仅对并发标记中有变动的对象进行标记，这些数量比较少，所以速度也是很快。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-054.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"并发清除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发清除"}},[t._v("#")]),t._v(" 并发清除")]),t._v(" "),r("p",[t._v("这个阶段，就是在重新标记后，对垃圾对象的清理，和并发标记一样，都很耗时，由于并没有STW，所以对程序的运行影响不大。CMS采用的是标记与清除算法。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-055.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),r("p",[t._v("CMS的4个阶段，初始标记和重新标记需要STW，但是时间短，影响不大。并发标记和并发清除不需要STW，虽然耗时，但是并发执行的，影响也不大，看起来CMS很完美，但是他也有一些缺点。")]),t._v(" "),r("h3",{attrs:{id:"cpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),r("p",[t._v("CMS默认启动的回收线程数是（CPU数量+3）/ 4，也就是当CPU在4个以上时，并发回收时垃圾收集线程不少于25%的CPU资源，并且随着CPU数量的增加而下降。比如服务器是2核4G，那就需要用(2+3)/4=1个线程去处理并发的标记和并发清除，这时候只剩下1个线程处理其他事情。")]),t._v(" "),r("h3",{attrs:{id:"浮动垃圾"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浮动垃圾"}},[t._v("#")]),t._v(" 浮动垃圾")]),t._v(" "),r("p",[t._v("浮动垃圾的产生，主要是在并发清理阶段。重新标记后，CMS垃圾回收器会知道哪些需要清理，在并发清理阶段，他就清理重新标记后的垃圾对象，这个阶段并没有STW，所以有可能产生新的对象。")]),t._v(" "),r("p",[t._v("比如下图的OBJ_N，创建完后，栈帧被回收，引用就没了，他在这个阶段是不能被清除的，只能等下一次垃圾回收的时候，被标记并清除。")]),t._v(" "),r("p",[t._v("如果这个阶段进入老年代的对象超过了剩余空间，就会出现Concurrent Mode Failure失败，那虚拟机会临时启用Serial Old收集器进行老年代的垃圾收集。")]),t._v(" "),r("p",[t._v("可以用XX:CMSInitiatingOccupancyFraction设置老年代空间被占用多少百分比触发CMS回收，JDK1.6后默认92%。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-056.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"空间碎片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#空间碎片"}},[t._v("#")]),t._v(" 空间碎片")]),t._v(" "),r("p",[t._v("在《"),r("a",{attrs:{href:"https://binghe.gitcode.host/md/core/jvm/2022-04-18-007-JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM垃圾回收算法"),r("OutboundLink")],1),t._v("》一文中提过，标记-清除算法会产生空间碎片的，如果连续的内存空间不够存放即将进入老年代的对象，此时就会触发Full GC。")]),t._v(" "),r("p",[t._v("为了避免这种情况，CMS收集器提供了一个-XX:+UseCMSCompactAtFullCollection，默认打开的，当Full GC完成后，他会STW，进行内存整理，把存活的对象紧密的靠在一起，腾出连续空间。")]),t._v(" "),r("p",[t._v("如果每次都要重新内存，那都会STW，所以CMS还提供了-XX:CMSFullGCsBeforeCompaction参数，默认是0，他的意思是进行了多少次Full GC后才整理内存。")]),t._v(" "),r("p",[r("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),r("h2",{attrs:{id:"星球服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),r("p",[t._v("加入星球，你将获得：")]),t._v(" "),r("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),r("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),r("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),r("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),r("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),r("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),r("h2",{attrs:{id:"星球重磅福利"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),r("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),r("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),r("p",[r("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),r("h2",{attrs:{id:"其他方式加入星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("链接")]),t._v(" ：打开链接 "),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),r("li",[r("strong",[t._v("回复")]),t._v(" ：在公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),r("p",[r("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),r("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),r("h2",{attrs:{id:"星球规划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),r("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),r("h3",{attrs:{id:"中间件项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),r("ul",[r("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),r("h3",{attrs:{id:"超硬核项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),r("ul",[r("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),r("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),r("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),r("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),r("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),r("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),r("h2",{attrs:{id:"联系冰河"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),r("h3",{attrs:{id:"加群交流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),r("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),r("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"公众号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),r("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"视频号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),r("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),r("p",[t._v("加入星球 "),r("strong",[r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),r("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),r("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),r("p",[t._v("关注 "),r("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("公众号，回复 "),r("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),r("br")])])}),[],!1,null,null,null);r.default=_.exports}}]);