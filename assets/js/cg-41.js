(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{342:function(a,t,s){"use strict";s.r(t);var l=s(7),i=Object(l.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"【高并发】导致并发编程频繁出问题的-幕后黑手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【高并发】导致并发编程频繁出问题的-幕后黑手"}},[a._v("#")]),a._v(" 【高并发】导致并发编程频繁出问题的“幕后黑手”")]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("工作了3年的小菜同学，平时在公司只是做些CRUD的常规工作，这次，出去面试被面试官一顿虐啊！尤其是并发编程的知识简直就是被吊打啊。小菜心有不甘，回来找自己工作经验非常丰富的朋友大冰来帮助自己提升并发编程的知识，于是便有了接下来的一系列小菜学并发的文章。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213043945.jpg",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213210997.jpg",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/2020032321323649.jpg",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213251404.jpg",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213310668.jpg",loading:"lazy"}}),a._v(" "),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213417465.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"并发编程的难点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程的难点"}},[a._v("#")]),a._v(" 并发编程的难点")]),a._v(" "),t("p",[a._v("并发编程一直是很让人头疼的问题，因为多线程环境下不太好定位问题，它不像一般的业务代码那样打个断点，debug一下基本就能够定位问题所在。并发编程中，出现的问题往往都是很诡异的，而且大多数情况下，问题也不是每次都会重现的。那么，我们如何才能够更好的解决并发问题呢？这就需要我们了解造成这些问题的“幕后黑手”究竟是什么！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213458790.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"操作系统做出的努力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统做出的努力"}},[a._v("#")]),a._v(" 操作系统做出的努力")]),a._v(" "),t("p",[a._v("计算机的制造商为了提升计算机的整体性能，对计算机做出了相应的优化措施。")]),a._v(" "),t("h3",{attrs:{id:"cpu增加了缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu增加了缓存"}},[a._v("#")]),a._v(" CPU增加了缓存")]),a._v(" "),t("p",[a._v("CPU对于数据的计算速度远远高于从内存中存取数据的速度，我们可以想象一下，如果说，CPU对于数据的计算需要一天时间，那么，从内存中读取和写入数据可能分别需要1年的时间。也就是说，在这一年365天当中，CPU只需要工作一天，而364天的时间都在等待从内存中读取或者存储数据。这对于CPU的利用率来说，就是极大的浪费了。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213531651.jpg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("为了缓和CPU与内存之间的速度差异，计算机的制造商为CPU增加了缓存。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213546145.jpg",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"操作系统增加了进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统增加了进程和线程"}},[a._v("#")]),a._v(" 操作系统增加了进程和线程")]),a._v(" "),t("p",[a._v("CPU的速度比内存快的多，而内存又比磁盘快的多。如果说，CPU运算需要一天的时间，从内存读取数据需要一年的话，那从磁盘读取数据就需要10年的时间了。没错，磁盘就是这么慢啊！")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213602819.jpg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("为了缓和CPU和磁盘设备之间的速度差异，操作系统的制造商增加了进程和线程技术。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213621115.jpg",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"优化cpu指令执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化cpu指令执行顺序"}},[a._v("#")]),a._v(" 优化CPU指令执行顺序")]),a._v(" "),t("p",[a._v("我们写的并发程序在操作系统上运行时，对于CPU缓存的使用可能会不太合理，造成CPU缓存的浪费。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213641229.jpg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("为了使CPU的缓存能够得到更加合理的利用，编译程序对CPU上指令的执行顺序进行了优化。\n"),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213659828.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"揪出-幕后-黑手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#揪出-幕后-黑手"}},[a._v("#")]),a._v(" 揪出“幕后”黑手")]),a._v(" "),t("p",[a._v("计算机和操作系统的制造商对计算机和操作系统进行的优化，在无形当中造成了很多并发编程的问题。本质上，并发编程的很多诡异的问题源头也在于此，这也是并发编程频繁出问题的“幕后黑手”。所以，我们可以将“幕后黑手”总结如下。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213716266.jpg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("没错，这就是造成并发编程问题的“幕后黑手”！！后面我们将分别细化说明这些“幕后黑手”。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213733260.jpg",loading:"lazy"}}),a._v(" "),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213751129.jpg",loading:"lazy"}}),a._v(" "),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213817614.jpg",loading:"lazy"}}),a._v(" "),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213842237.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("了解并掌握并发编程问题的“幕后黑手”，有助于我们更好的学习并发知识和解决并发问题。")]),a._v(" "),t("p",[a._v("最后，附上并发编程需要掌握的核心技能知识图，祝大家在学习并发编程时，少走弯路。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200323213918137.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"总结-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("并发编程旨在最大限度的利用计算机的资源，提高程序执行的性能，这需要线程之间的分工和同步来实现，在保证性能的同时，又需要保证线程的安全，这就又需要保证线程之间的互斥性。而并发编程的难点问题，往往又是由可见性、原子性和有序性问题导致的。所以，我们在学习并发编程时，一定要先弄懂线程之间的分工、同步和互斥。")]),a._v(" "),t("p",[a._v("最后，附上并发编程需要掌握的核心技能知识图，祝大家在学习并发编程时，少走弯路。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200322144644983.jpg",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);