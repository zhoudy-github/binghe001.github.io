(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{308:function(s,a,t){"use strict";t.r(a);var n=t(6),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"【高并发】解密导致并发问题的第二个幕后黑手-原子性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【高并发】解密导致并发问题的第二个幕后黑手-原子性问题"}},[s._v("#")]),s._v(" 【高并发】解密导致并发问题的第二个幕后黑手：原子性问题")]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("p",[s._v("今天，我们继续大冰和小菜的故事。")]),s._v(" "),a("h2",{attrs:{id:"写在前面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),a("blockquote",[a("p",[s._v("大冰：小菜童鞋，昨天讲解的内容复习了吗？")]),s._v(" "),a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("小菜：复习了大冰哥，昨天的内容干货满满啊，感觉自己收获很大。")]),s._v(" "),a("h1",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),a("p",[s._v("大冰：那你说说昨天都讲了哪些内容呢？")]),s._v(" "),a("h1",{attrs:{id:"-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")])]),s._v(" "),a("p",[s._v("小菜：昨天主要讲了线程的可见性和可见性问题。可见性是指一个线程对共享变量的修改，另一个线程能够立刻看到，如果不能立刻看到，就可能会产生可见性问题。在单核CPU上是不存在可见性问题的，可见性问题主要存在于运行在多核CPU上的并发程序。归根结底，可见性问题还是由CPU的缓存导致的，而缓存导致的可见性问题是导致诸多诡异的并发编程问题的“幕后黑手”之一。")]),s._v(" "),a("h1",{attrs:{id:"-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[s._v("#")])]),s._v(" "),a("p",[s._v("大冰：很好，小菜童鞋，复习的不错，今天，我们继续讲并发问题的第二个“幕后黑手”——线程切换带来的原子性问题，这个知识点也是非常重要的，一定要好好听。")])]),s._v(" "),a("h2",{attrs:{id:"原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[s._v("#")]),s._v(" 原子性")]),s._v(" "),a("blockquote",[a("p",[s._v("原子性是指一个或者多个操作在CPU中执行的过程不被中断的特性。原子性操作一旦开始运行，就会一直到运行结束为止，中间不会有中断的情况发生。")])]),s._v(" "),a("p",[s._v("我们也可以这样理解原子性，就是线程在执行一系列操作时，这些操作会被当做一个不可拆分的整体执行，这些操作要么全部执行，要么全部不执行，不会存在只执行一部分的情况，这就是原子性操作。")]),s._v(" "),a("p",[s._v("关于原子性操作一个"),a("strong",[s._v("典型的场景就是转账")]),s._v("，例如，小明和小刚的账户余额都是200元，此时小明给小刚转账100元，如果转账成功，则小明的账户余额为100元，小刚的账户余额为300元；如果转账失败，则小明和小刚的账户余额仍然为200元。不会存在小明账户为100元，小刚账户为200元，或者小明账户为200元，小刚账户为300元的情况。")]),s._v(" "),a("p",[s._v("这里，小明给小刚转账100元的操作，就是一个原子性操作，它涉及小明账户余额减少100元，小刚账户余额增加100元的操作，这两个操作是一个不可分割的整体，要么全部执行，要么全部不执行。")]),s._v(" "),a("p",[s._v("小明给小刚转账成功，则如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103809648.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("小明给小刚转账失败，则如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103824196.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("不会出现小明账户为100元，小刚账户为200元的情况。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103837345.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("也不会出现小明账户为200元，小刚账户为300元的情况。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103853928.jpg",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"线程切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程切换"}},[s._v("#")]),s._v(" 线程切换")]),s._v(" "),a("blockquote",[a("p",[s._v("在并发编程中，往往设置的线程数目会大于CPU数目，而每个CPU在同一时刻只能被一个线程使用。而CPU资源的分配采用了时间片轮转策略，也就是给每个线程分配一个时间片，线程在这个时间片内占用CPU的资源来执行任务。当占用CPU资源的线程执行完任务后，会让出CPU的资源供其他线程运行，这就是任务切换，也叫做线程切换或者线程的上下文切换。")])]),s._v(" "),a("p",[s._v("如果大家还是不太理解的话，我们可以用下面的图来模拟线程在CPU中的切换过程。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103915661.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("在图中存在线程A和线程B两个线程，其中线程A和线程B中的每个小方块代表此时线程占有CPU资源并执行任务，这个小方块占有的时间，被称为时间片，在这个时间片中，占有CPU资源的线程会在CPU上执行，未占有CPU资源的线程则不会在CPU上执行。而每个虚线部分就代表了此时的线程不占用CPU资源。CPU会在线程A和线程B之间频繁切换。")]),s._v(" "),a("h2",{attrs:{id:"原子性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子性问题"}},[s._v("#")]),s._v(" 原子性问题")]),s._v(" "),a("p",[s._v("理解了什么是原子性，再看什么是原子性问题就比较简单了。")]),s._v(" "),a("blockquote",[a("p",[s._v("原子性问题是指一个或者多个操作在CPU中执行的过程中出现了被中断的情况。")])]),s._v(" "),a("p",[s._v("线程在执行某项操作时，此时如果CPU发生了线程切换，CPU转而去执行其他的任务，中断了当前线程执行的操作，这就会造成原子性问题。")]),s._v(" "),a("p",[s._v("如果你还不能理解的话，我们来举一个例子：假设你在银行排队办理业务，小明在你前面，柜台的业务员为小明办理完业务，正好排到你时，此时银行下班了，柜台的业务员微笑着告诉你：实在不好意思，先生（女士），我们下班了，您明天再来吧！此时的你就好比是正好占有了CPU资源的线程，而柜台的业务员就是那颗发生了线程切换的CPU，她将线程切换到了下班这个线程，执行下班的操作去了。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/2020032510393220.jpg",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"java中的原子性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java中的原子性问题"}},[s._v("#")]),s._v(" Java中的原子性问题")]),s._v(" "),a("p",[s._v("在Java中，并发程序是基于多线程技术来编写的，这也会涉及到CPU的对于线程的切换问题，"),a("strong",[s._v("正是CPU中对任务的切换机制，导致了并发编程会出现原子性的诡异问题，而原子性问题，也成为了导致并发问题的第二个“幕后黑手”。")])]),s._v(" "),a("p",[s._v("在并发编程中，往往Java语言中一条简单的语句，会对应着CPU中的多条指令，假设我们编写的ThreadTest类的代码如下所示。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lab01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试原子性\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("incrementCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("接下来，我们打开ThreadTest类的class文件所在的目录，在cmd命令行输入如下命令。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("javap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadTest")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("得出如下的结果信息，如下所示。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("javap "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadTest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compiled")]),s._v(" from "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ThreadTest.java"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lab01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("ThreadTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lab01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("ThreadTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokespecial #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Method java/lang/Object."<init>":()V')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" areturn\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("incrementCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokevirtual #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Method java/lang/Long.longValue:()J")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lconst_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ladd\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokestatic  #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Method java/lang/Long.valueOf:(J)Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" dup_x1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_2\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pop\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[s._v("这里，我们主要关注下incrementCount()方法对应的CPU指令，如下所示。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("incrementCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_0\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokevirtual #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Method java/lang/Long.longValue:()J")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" lconst_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" ladd\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokestatic  #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Method java/lang/Long.valueOf:(J)Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" dup_x1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" putfield      #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field count:Ljava/lang/Long;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" astore_2\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" aload_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pop\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("可以看到，Java语言中短短的几行incrementCount()方法竟然对应着那么多的CPU指令。这些CPU指令我们大致可以分成三步。")]),s._v(" "),a("ul",[a("li",[s._v("指令1：把变量count从内存加载的CPU寄存器。")]),s._v(" "),a("li",[s._v("指令2：在寄存器中执行count++操作。")]),s._v(" "),a("li",[s._v("指令3：将结果写入缓存（可能是CPU缓存，也可能是内存）。")])]),s._v(" "),a("p",[s._v("在操作系统执行线程切换时，可能发生在任何一条CPU指令完成后，而不是程序中的某条语句完成后。如果线程A执行完指令1后，操作系统发生了线程切换，当两个线程都执行count++操作后，得到的结果是1而不是2。这里，我们可以使用下图来表示这个过程。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325103957586.jpg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("由上图，我们可以看出：线程A将count=0加载到CPU的寄存器后，发生了线程切换。此时内存中的count值仍然为0，线程B将count=0加载到寄存器，执行count++操作，并将count=1写到内存。此时，CPU切换到线程A，执行线程A中的count++操作后，线程A中的count值为1，线程A将count=1写入内存，此时内存中的count值最终为1。")]),s._v(" "),a("p",[s._v("所以，"),a("strong",[s._v("如果在CPU中存在正在执行的线程，恰好此时CPU发生了线程切换，则可能会导致原子性问题，这也是导致并发编程频繁出问题的根源之一")]),s._v("。我们只有充分理解并掌握线程的原子性以及引起原子性问题的根源，并在日常工作中时刻注意编写的并发程序是否存在原子性问题，才能更好的编写出并发程序。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("strong",[s._v("缓存带来的可见性问题、线程切换带来的原子性问题和编译优化带来的有序性问题，是导致并发编程频繁出现诡异问题的三个源头")]),s._v("，我们已经介绍了缓存带来的可见性问题和线程切换带来的原子性问题。下一篇中，我们继续深耕高并发中的有序性问题。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("大冰：好了，今天就是我们讲的主要内容了，今天的内容同样最重要，回去后要好好复习。")]),s._v(" "),a("h1",{attrs:{id:"-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[s._v("#")])]),s._v(" "),a("p",[s._v("小菜：好的，大冰哥，一定好好复习。")])]),s._v(" "),a("h2",{attrs:{id:"文末福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文末福利"}},[s._v("#")]),s._v(" 文末福利")]),s._v(" "),a("p",[s._v("最后，附上并发编程需要掌握的核心技能知识图，祝大家在学习并发编程时，少走弯路。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/2020032510405471.jpg",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"写在最后-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后-2"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);