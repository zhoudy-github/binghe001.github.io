(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{358:function(t,e,a){"use strict";a.r(e);var s=a(6),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jvm垃圾回收机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jvm垃圾回收机制"}},[t._v("#")]),t._v(" JVM垃圾回收机制")]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("结合《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499304&idx=1&sn=13e15f0a0e8999ac28e83f0e90e7e938&chksm=cf564929f821c03f3f81b53a7c11499865c9be39bd1ebd835061c4e7a1744ef89bbefbb48fee&token=1218025423&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM内存空间"),e("OutboundLink")],1),t._v("》、《"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247499346&idx=1&sn=fd0b892c55177cc78cc69be0ff7e84c1&chksm=cf564953f821c0454f31bd284748b26ae2aec1795cbf62625fddc64fae99c4687795de3d066e&token=1218025423&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),e("OutboundLink")],1),t._v("》，合并后图如下：")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKXwH",loading:"lazy"}})]),t._v(" "),e("p",[t._v("当我们调用一个方法的时候，就会创建这个方法的栈帧，当方法调用结束的时候，这个栈帧出栈，栈帧所占用的内存也随之释放。")]),t._v(" "),e("p",[t._v("如果这个线程销毁了，那与这个线程相关的栈以及程序计数器的内存也随之被回收，那在堆内存中创建的对象怎么办？这些对象可是都占着很多的内存资源的。因此我们需要知道哪些对象是可以回收的，哪些对象是不能回收的。")]),t._v(" "),e("h2",{attrs:{id:"可达性分析算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[t._v("#")]),t._v(" 可达性分析算法")]),t._v(" "),e("p",[t._v("可达性算法就是从GC Roots出发，去搜索他引用的对象，然后根据这个引用的对象，继续查找他引用的对象。")]),t._v(" "),e("p",[t._v("如果一个对象到GC Roots没有任何引用链相连，说明他是不可用的，这个类就可以回收，比如下图的object5、object6、object7。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKXvG",loading:"lazy"}})]),t._v(" "),e("p",[t._v("我们回忆一下合并图：")]),t._v(" "),e("ol",[e("li",[t._v("类加载到方法区的时候，初始化阶段会为静态变量赋值，他所引用的对象可以做GC Roots。")]),t._v(" "),e("li",[t._v("同样的，方法区的常量引用的对象可以做GC Roots。")]),t._v(" "),e("li",[t._v("调用方法的时候，会创建方法的栈帧，栈帧里的局部变量引用的对象，可以做GC Roots。")]),t._v(" "),e("li",[t._v("同样的，本地方法栈中栈帧里的局部变量引用的对象，可以做GC Roots。")])]),t._v(" "),e("p",[t._v("可达性算法除了GC Roots，还有一个引用，引用分以下几种：")]),t._v(" "),e("ol",[e("li",[t._v("强引用(Strong Reference)：只要强引用还存在，垃圾收集器永远不会回收被引用的对象。")]),t._v(" "),e("li",[t._v("软引用(Soft Reference)：在系统将要发生内存溢出异常之前,将会把这些对象列进回收范围之中进行第二次回收。如果这次回收还没有足够的内存,才会拋出内存溢出异常。")]),t._v(" "),e("li",[t._v("弱引用(Weak Reference )： 被弱引用关联的对象只能生存到下一次垃圾收集发生之前。当垃圾收集器工作时,无论当前内存是否足够, 都会回收掉只被弱引用关联的对象。")]),t._v(" "),e("li",[t._v("虚引用(Phantom Reference)：一个对象是否有虚引用的存在,完全不会对其生存时间构成影响,也无法通过虚引用来取得一个对象实例。为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知。")])]),t._v(" "),e("p",[e("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),e("blockquote",[e("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=_.exports}}]);