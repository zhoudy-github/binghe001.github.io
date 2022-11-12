(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{347:function(a,t,v){"use strict";v.r(t);var _=v(7),s=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"知识点总结-你都会了吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点总结-你都会了吗"}},[a._v("#")]),a._v(" 知识点总结，你都会了吗？")]),a._v(" "),t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[a._v("#")]),a._v(" 写在前面")]),a._v(" "),t("blockquote",[t("p",[a._v("冰河，你可以给我讲讲Java8新特性的知识点吗？可以啊，没问题。这不，Java8新特性的知识点来了！")])]),a._v(" "),t("h2",{attrs:{id:"java7与java8中的hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java7与java8中的hashmap"}},[a._v("#")]),a._v(" Java7与Java8中的HashMap")]),a._v(" "),t("ul",[t("li",[a._v("JDK7 HashMap结构为数组+链表（发生元素碰撞时，会将新元素添加到链表开头）")]),a._v(" "),t("li",[a._v("JDK8 HashMap结构为数组+链表+红黑树（发生元素碰撞时，会将新元素添加到链表末尾，当HashMap总容量大于等于64，并且某个链表的大小大于等于8，会将链表转化为红黑树（注意：红黑树是二叉树的一种））")])]),a._v(" "),t("h2",{attrs:{id:"jdk8-hashmap重排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk8-hashmap重排序"}},[a._v("#")]),a._v(" JDK8 HashMap重排序")]),a._v(" "),t("p",[a._v("如果删除了HashMap中红黑树的某个元素导致元素重排序时，不需要计算待重排序的元素的HashCode码，只需要将当前元素放到（HashMap总长度+当前元素在HashMap中的位置）的位置即可。")]),a._v(" "),t("h2",{attrs:{id:"筛选与切片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#筛选与切片"}},[a._v("#")]),a._v(" 筛选与切片")]),a._v(" "),t("ul",[t("li",[a._v("filter——接收 Lambda ， 从流中排除某些元素。")]),a._v(" "),t("li",[a._v("limit——截断流，使其元素不超过给定数量。")]),a._v(" "),t("li",[a._v("skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补")]),a._v(" "),t("li",[a._v("distinct——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素")])]),a._v(" "),t("h2",{attrs:{id:"中间操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间操作"}},[a._v("#")]),a._v(" 中间操作")]),a._v(" "),t("ul",[t("li",[a._v("map——接收 Lambda ， 将元素转换成其他形式或提取信息。接收一个函数作为参数，该函数会被应用到每个元素上，并将其映射成一个新的元素。")]),a._v(" "),t("li",[a._v("flatMap——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流")]),a._v(" "),t("li",[a._v("sorted()——自然排序")]),a._v(" "),t("li",[a._v("sorted(Comparator com)——定制排序")])]),a._v(" "),t("h2",{attrs:{id:"终止操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止操作"}},[a._v("#")]),a._v(" 终止操作")]),a._v(" "),t("ul",[t("li",[a._v("allMatch——检查是否匹配所有元素")]),a._v(" "),t("li",[a._v("anyMatch——检查是否至少匹配一个元素")]),a._v(" "),t("li",[a._v("noneMatch——检查是否没有匹配的元素")]),a._v(" "),t("li",[a._v("findFirst——返回第一个元素")]),a._v(" "),t("li",[a._v("findAny——返回当前流中的任意元素")]),a._v(" "),t("li",[a._v("count——返回流中元素的总个数")]),a._v(" "),t("li",[a._v("max——返回流中最大值")]),a._v(" "),t("li",[a._v("min——返回流中最小值")])]),a._v(" "),t("h2",{attrs:{id:"归约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#归约"}},[a._v("#")]),a._v(" 归约")]),a._v(" "),t("ul",[t("li",[a._v("reduce(T identity, BinaryOperator) / reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。")]),a._v(" "),t("li",[a._v("collect——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法")])]),a._v(" "),t("p",[t("strong",[a._v("注意：流进行了终止操作后，不能再次使用")])]),a._v(" "),t("h2",{attrs:{id:"optional-容器类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-容器类"}},[a._v("#")]),a._v(" Optional 容器类")]),a._v(" "),t("p",[a._v("用于尽量避免空指针异常")]),a._v(" "),t("ul",[t("li",[a._v("Optional.of(T t) : 创建一个 Optional 实例")]),a._v(" "),t("li",[a._v("Optional.empty() : 创建一个空的 Optional 实例")]),a._v(" "),t("li",[a._v("Optional.ofNullable(T t):若 t 不为 null,创建 Optional 实例,否则创建空实例")]),a._v(" "),t("li",[a._v("isPresent() : 判断是否包含值")]),a._v(" "),t("li",[a._v("orElse(T t) :  如果调用对象包含值，返回该值，否则返回t")]),a._v(" "),t("li",[a._v("orElseGet(Supplier s) :如果调用对象包含值，返回该值，否则返回 s 获取的值")]),a._v(" "),t("li",[a._v("map(Function f): 如果有值对其处理，并返回处理后的Optional，否则返回 Optional.empty()")]),a._v(" "),t("li",[a._v("flatMap(Function mapper):与 map 类似，要求返回值必须是Optional")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);