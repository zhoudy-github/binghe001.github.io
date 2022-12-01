(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{366:function(e,t,a){"use strict";a.r(t);var s=a(7),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jvm-g1收集器、region、停顿时间模型、垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-g1收集器、region、停顿时间模型、垃圾回收"}},[e._v("#")]),e._v(" JVM - G1收集器、Region、停顿时间模型、垃圾回收")]),e._v(" "),t("p",[t("strong",[e._v("大家好，我是冰河~~")])]),e._v(" "),t("p",[e._v("今天，我们继续学习JVM相关的知识，今天给大家分享一篇关于G1收集器的文章，好了，不多说了，直接进入正题。")]),e._v(" "),t("h2",{attrs:{id:"region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[e._v("#")]),e._v(" Region")]),e._v(" "),t("p",[e._v("使用G1收集器时，java堆的内存会划分为多个大小相等的独立区域（Region），他也有新生代和老年代的概念，但是新生代和老年代不再是物理隔离的，它们都是一部分Region（不需要连续）的集合.")]),e._v(" "),t("p",[e._v("如下图所示：粉色的代表新生代，没有字母的是eden，有s的是survivor ，老年代是浅蓝的O，还有一个H是humongous，也是老年代，我们在《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=1592218080&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("JVM堆内存分配机制（建议收藏）"),t("OutboundLink")],1),e._v("》提过，大对象直接进入老年代，这个humongous就是存储大对象的，也就是说如果对象内存大小大于Region的一半大小，那就会给一个专门的Region存放，如果对象大于一个Region的大小，那就用多个Region存放。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcLtbX",loading:"lazy"}})]),e._v(" "),t("p",[e._v("我们只画了16个Region，并不是说堆只分配了16个，在没有用-XX:G1HeapRegionSize去指定的情况下，默认是2048个，Region的个数必须是2的倍数，每个Region的大小在1到32M之间。")]),e._v(" "),t("p",[e._v("新生代的大小在5%到60%之间，可以通过"),t("code",[e._v("-XX:G1NewSizePercent=5")]),e._v("，"),t("code",[e._v("-XX:G1MaxNewSizePercent=60")]),e._v("来设置。")]),e._v(" "),t("h2",{attrs:{id:"停顿时间模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停顿时间模型"}},[e._v("#")]),e._v(" 停顿时间模型")]),e._v(" "),t("p",[e._v("G1的另外一个特点，就是建立可预测的停顿时间模型。G1跟踪各个Region的回收价值，并在后台维护一个优先列表，每次根据允许的收集时间，优先回收价值最大的Region，保证了在有限的时间内获取尽可能高的收集效率，停顿时间默认200ms，用"),t("code",[e._v("-XX:MaxGCPauseMillis")]),e._v("设置。")]),e._v(" "),t("p",[e._v("比如下图，第一个新生代的Region回收10M需要5ms，第二个新生代的Region回收20M也只要5ms，第三个新生代的Region回收10M却需要10ms，如果指定他需要5ms内回收20M的垃圾，他会直接去回收第二个新生代的Region，而不是回收第一个和第三个新生代的Region。")]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcLs86",loading:"lazy"}})]),e._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[e._v("#")]),e._v(" 垃圾回收")]),e._v(" "),t("h3",{attrs:{id:"新生代回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新生代回收"}},[e._v("#")]),e._v(" 新生代回收")]),e._v(" "),t("p",[e._v("上面提过，新生代的内存空间最多占用60%，当60%的空间用完的时候，就会触发新生代的回收。新生代的回收是用复制算法的，与之前不同的是，他会考虑到停顿时间。")]),e._v(" "),t("h3",{attrs:{id:"老年代回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老年代回收"}},[e._v("#")]),e._v(" 老年代回收")]),e._v(" "),t("p",[e._v("老年代回收分为："),t("strong",[e._v("初始标记、并发标记、最终标记、混合回收")]),e._v("。")]),e._v(" "),t("p",[e._v("前面三个阶段跟《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499410&idx=1&sn=787037527afd5762e407626d010a7589&chksm=cf564993f821c085f481e96730ab0c0ff59db0dfa6630e72e3fcfd5ef2656e5f3bfd2b56253e&token=1592218080&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[e._v("JVM - CMS垃圾收集器（建议收藏）"),t("OutboundLink")],1),e._v("》的前面三个类似。")]),e._v(" "),t("p",[e._v("混合回收，是说他并不会仅仅回收老年代的垃圾，也会回收新生代的垃圾，他会根据停顿时间，尽可能的多回收Region。由于在停顿时间内回收的垃圾可能不会很多，所以这个阶段会进行多次的混合回收，默认是8次，可以通过"),t("code",[e._v("-XX:G1MixedGCCountTarget")]),e._v("设置。\n如果混合回收的时候，发现Region仅占有5%了，那他就会停止回收，不会一直回收8次。")]),e._v(" "),t("p",[e._v("混合回收的基于复制算法的，所以大对象的复制会比较耗时，如果某个老年代的Region超过85%的对象是存活的，那他不会被回收，通过"),t("code",[e._v("-XX:G1MixedGCLiveThresholdPercent")]),e._v("设置。")]),e._v(" "),t("p",[t("strong",[e._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),e._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),t("blockquote",[t("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);