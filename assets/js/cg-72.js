(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{361:function(t,a,s){"use strict";s.r(a);var r=s(7),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jvm垃圾回收算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm垃圾回收算法"}},[t._v("#")]),t._v(" JVM垃圾回收算法")]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("各位小伙伴应该都上班了吧，好啦，大家把心收回来好好工作吧，今天冰河继续给大家分享一篇关于JVM的文章。")]),t._v(" "),a("p",[t._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499370&idx=1&sn=9584ccbeb437823a59f4a6af7058d4a8&chksm=cf56496bf821c07dc09d199169e0a3057bf3a400420837594dc37d0cc2edfab5ca6fd82b041d&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM垃圾回收机制"),a("OutboundLink")],1),t._v("》一文中，我们知道了哪些类是需要清除的，那在java虚拟机中，他有哪些垃圾收集算法呢？")]),t._v(" "),a("h2",{attrs:{id:"标记-清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除"}},[t._v("#")]),t._v(" 标记-清除")]),t._v(" "),a("p",[t._v("标记-清除算法就是，先标记哪些对象是存活的，哪些对象是可以回收的，然后再把标记为可回收的对象清除掉。从下面的图可以看到，回收后，产生了大量的不连续的内存碎片，如果这个时候，有一个比较大的对象进来，却没有一个连续的内存空间给他使用，又会触发一次垃圾收集动作。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ0a",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"复制算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制算法"}},[t._v("#")]),t._v(" 复制算法")]),t._v(" "),a("p",[t._v("复制算法是通过两个内存空间，把一方存活的对象复制到另外一个内存空间上，然后再把自己的内存空间直接清理。\n标记后，此时情况如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ27",loading:"lazy"}})]),t._v(" "),a("p",[t._v("然后再把左边的存活对象复制到右边：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1bS",loading:"lazy"}})]),t._v(" "),a("p",[t._v("复制完后，再清理自己的内存空间：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKZ3I",loading:"lazy"}})]),t._v(" "),a("p",[t._v("右边的空间开始回收，再复制到坐标，如此往复。这样就可以让存活的对象紧密的靠在一起，腾出了连续的内存空间。\n缺点就是空间少了一半，这少了一半的空间用于复制存活的对象。但是在实际过程中，大部分的对象的存活时间都非常短，也就是说这些对象都可以被回收的。")]),t._v(" "),a("p",[t._v("比如说左边有100M空间，但是只有1M的对象是存活的，那我们右边就不需要100M来存放这个1M的存活对象。因此我们的新生代是分成3个内存块的：Eden空间、From Survivor空间、To Survivor空间，他们的默认比例是8:1:1。")]),t._v(" "),a("p",[t._v("也就是说，平常的时候有Eden+Survivor=90M可以使用，10M用于存放存活对象（假设100M空间）。这个算法在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),a("OutboundLink")],1),t._v("》一文中的对象优先在Eden分配中提过了。")]),t._v(" "),a("h2",{attrs:{id:"标记-整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理"}},[t._v("#")]),t._v(" 标记-整理")]),t._v(" "),a("p",[t._v("除了新生代，老年代的内存也要清理的，但是上面的算法并不适合老年代。因为老年代对象的生命周期都比较长，那就不能像新生代一样仅浪费10%的内存空间，而是浪费一半的内存空间。")]),t._v(" "),a("p",[t._v("标记-整理与标记-清除都是先标记哪些对象存活，哪些对象可以回收，不同的是他并没有直接清理可回收的对象，而是先把存活的对象进行移动，这样存活的对象就紧密的靠在一起，最后才把垃圾回收掉。")]),t._v(" "),a("p",[t._v("回收前，存活对象是不连续的。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1eZ",loading:"lazy"}})]),t._v(" "),a("p",[t._v("回收中，存活对象是连续的。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1e8",loading:"lazy"}})]),t._v(" "),a("p",[t._v("回收后，回收垃圾对象。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcK1fn",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"性能与优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能与优化"}},[t._v("#")]),t._v(" 性能与优化")]),t._v(" "),a("p",[t._v("由于每次GC，都会Stop The World，也就是说，此时虚拟机会把所有工作的线程都停掉，会给用户带来不良的体验及影响，所以我们要进来的减少GC的次数。")]),t._v(" "),a("p",[t._v("针对新生代，Minor GC触发的原因就是新生代的Eden区满了，所以为了减少Minor GC，我们新生代的内存空间不要太小。如果说我们给新生代的内存已经到达机器了极限了，那只能做集群了，把压力分担出去。")]),t._v(" "),a("p",[t._v("老年代的垃圾回收速度比新生代要慢10倍，所以我们也要尽量减少发生Full GC。")]),t._v(" "),a("p",[t._v("《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=737594716&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),a("OutboundLink")],1),t._v("》一文中我们提到了几种进入老年代的方式，我们看看这些是怎么处理的：")]),t._v(" "),a("ul",[a("li",[t._v("大对象直接进入老年代：这个没办法优化，总不能调大对象大小吧，那这些大对象在新生代的复制就会很慢了。")]),t._v(" "),a("li",[t._v("长期存活的对象将进入老年代:年龄的增加，是每次Minor GC的时候，所以我们可以减少Minor GC（这个方法上面提到了），这样年龄就不会一直增加。")]),t._v(" "),a("li",[t._v("动态年龄判断:有一个重要的条件就是在Survivor空间中相同年龄所有对象大小的总和大于Survivor空间的一半，所以要加大新生代的内存空间。")]),t._v(" "),a("li",[t._v("空间分配担保:这里面有一个条件是Minor GC后，Survivor空间放不下的就存放到老年代，为了让存活不到老年代，我们可以加大Survivor空间。")])]),t._v(" "),a("p",[t._v("上面的方法，既有加大新生代的内存空间，也有加大Survivor空间，实时上，怎么优化，需要根据我们的实际场景来看，JVM的优化并没有银弹。")]),t._v(" "),a("p",[a("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);