(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{531:function(a,t,s){"use strict";s.r(t);var n=s(24),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jvm-内存布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm-内存布局"}},[a._v("#")]),a._v(" JVM 内存布局")]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("p",[a._v("本JVM系列属于本人学习过程当中总结的一些知识点，目的是想让读者更快地掌握JVM相关的知识要点，难免会有所侧重，若想要更加系统更加详细的学习JVM知识，还是需要去阅读专业的书籍和文档。")]),a._v(" "),s("p",[a._v("本文主题内容：")]),a._v(" "),s("ul",[s("li",[a._v("JVM 内存区域概览")]),a._v(" "),s("li",[s("strong",[a._v("堆区的空间分配是怎么样？堆溢出的演示")])]),a._v(" "),s("li",[s("strong",[a._v("创建一个新对象内存是怎么分配的？")])]),a._v(" "),s("li",[s("strong",[a._v("方法区 到 Metaspace 元空间")])]),a._v(" "),s("li",[s("strong",[a._v("栈帧是什么？栈帧里有什么？怎么理解？")])]),a._v(" "),s("li",[a._v("本地方法栈")]),a._v(" "),s("li",[a._v("程序计数器")]),a._v(" "),s("li",[s("strong",[a._v("Code Cache 是什么？")])])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("注：请 区分 JVM内存结构（内存布局） 和 JMM（Java内存模型）这两个不同的概念！")])])]),a._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[a._v("#")]),a._v(" 概览")]),a._v(" "),s("p",[a._v("内存是非常重要的系统资源，是硬盘和CPU的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略 ，保证了 JVM 的高效稳定运行。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://image-static.segmentfault.com/240/928/240928729-5e05f6b55a32f_articlex",loading:"lazy"}})]),a._v(" "),s("p",[a._v("上图描述了当前比较经典的JVM内存布局。（堆区画小了2333，按理来说应该是最大的区域）")]),a._v(" "),s("p",[a._v("如果按照线程是否共享来分类的话，如下图所示：")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://image-static.segmentfault.com/189/078/1890787668-5e05f6b7a723f_articlex",loading:"lazy"}})]),a._v(" "),s("blockquote",[s("p",[a._v("PS：线程是否共享这点，实际上理解了每块区域的实际用处之后，就很自然而然的就记住了。不需要死记硬背。")])]),a._v(" "),s("p",[a._v("下面让我们来了解下各个区域。")]),a._v(" "),s("h2",{attrs:{id:"一、heap-堆区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、heap-堆区"}},[a._v("#")]),a._v(" 一、Heap (堆区）")]),a._v(" "),s("h3",{attrs:{id:"_1-1-堆区的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-堆区的介绍"}},[a._v("#")]),a._v(" 1.1 堆区的介绍")]),a._v(" "),s("p",[a._v("我们先来说堆。堆是 OOM故障最主要的发生区域。它是内存区域中最大的一块区域，被所有"),s("strong",[a._v("线程共享")]),a._v("，存储着"),s("strong",[a._v("几乎所有")]),a._v("的实例对象、数组。"),s("strong",[a._v("所有的对象实例以及数组都要在堆上分配")]),a._v("，但是随着JIT编译器的发展与"),s("strong",[a._v("逃逸分析技术")]),a._v("逐渐成熟，栈上分配、标量替换优化技术将会导致一些微妙的变化发生，"),s("strong",[a._v("所有的对象都分配在堆上也渐渐变得不是那么“绝对”了")]),a._v("。")]),a._v(" "),s("p",[a._v("Java堆是垃圾收集器管理的主要区域，因此"),s("strong",[a._v("很多时候也被称做“GC堆”")]),a._v("。从内存回收的角度来看，由于现在收集器基本都采用分代收集算法，所以Java堆中还可以细分为："),s("strong",[a._v("新生代和老年代")]),a._v("。再细致一点的有"),s("strong",[a._v("Eden空间、From Survivor空间、To Survivor空间")]),a._v("等。从内存分配的角度来看，线程共享的Java堆中可能划分出多个线程私有的分配缓冲区（Thread Local Allocation Buffer,TLAB）。不过无论如何划分，都与存放内容无关，无论哪个区域，存储的都仍然是对象实例，进一步划分的目的是为了更好地回收内存，或者更快地分配内存。")]),a._v(" "),s("h3",{attrs:{id:"_1-2-堆区的调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-堆区的调整"}},[a._v("#")]),a._v(" 1.2 堆区的调整")]),a._v(" "),s("p",[a._v("根据Java虚拟机规范的规定，"),s("strong",[a._v("Java堆可以处于物理上不连续的内存空间中")]),a._v("，只要逻辑上是连续的即可，就像我们的磁盘空间一样。在实现时，既可以实现成固定大小的，也可以在运行时动态地调整。")]),a._v(" "),s("p",[s("strong",[a._v("如何调整呢？")])]),a._v(" "),s("p",[a._v("通过设置如下参数，可以设定堆区的初始值和最大值，比如 "),s("code",[a._v("-Xms256M -Xmx 1024M")]),a._v("，其中 "),s("code",[a._v("-X")]),a._v("这个字母代表它是JVM运行时参数，"),s("code",[a._v("ms")]),a._v("是"),s("code",[a._v("memory start")]),a._v("的简称，中文意思就是内存初始值，"),s("code",[a._v("mx")]),a._v(" 是 "),s("code",[a._v("memory max")]),a._v("的简称，意思就是最大内存。")]),a._v(" "),s("p",[s("strong",[a._v("值得注意的是，在通常情况下，服务器在运行过程中，堆空间不断地扩容与回缩，会形成不必要的系统压力 所以在线上生产环境中 JVM的"),s("code",[a._v("Xms")]),a._v("和 "),s("code",[a._v("Xmx")]),a._v("会设置成同样大小，避免在GC 后调整堆大小时带来的额外压力。")])]),a._v(" "),s("h3",{attrs:{id:"_1-3-堆的默认空间分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-堆的默认空间分配"}},[a._v("#")]),a._v(" 1.3 堆的默认空间分配")]),a._v(" "),s("p",[a._v("另外，再强调一下堆空间内存分配的大体情况。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/remote/1460000021426682",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这里可能就会有人来问了，你从哪里知道的呢？如果我想配置这个比例，要怎么修改呢？")]),a._v(" "),s("p",[a._v("我先来告诉你怎么看虚拟机的默认配置。命令行上执行如下命令，就可以查看当前JDK版本所有默认的JVM参数。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("java -XX:+PrintFlagsFinal -version\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[a._v("#")]),a._v(" 输出")]),a._v(" "),s("p",[a._v("对应的输出应该有几百行，我们这里去看和堆内存分配相关的两个参数")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("java -XX:+PrintFlagsFinal -version\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Global flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n    uintx InitialSurvivorRatio                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n    uintx NewRatio                                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\njava version "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_131"')]),a._v("\nJava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" SE Runtime Environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_131-b11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nJava HotSpot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.131")]),a._v("-b11, mixed mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h4",{attrs:{id:"参数解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数解释"}},[a._v("#")]),a._v(" 参数解释")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("作用")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-XX:InitialSurvivorRatio")]),a._v(" "),s("td",[a._v("新生代Eden/Survivor空间的初始比例")])]),a._v(" "),s("tr",[s("td",[a._v("-XX:NewRatio")]),a._v(" "),s("td",[a._v("Old区/Young区的内存比例")])])])]),a._v(" "),s("p",[a._v("因为新生代是由Eden + S0 + S1组成的，所以按照上述默认比例，如果eden区内存大小是40M，那么两个survivor区就是5M，整个young区就是50M，然后可以算出Old区内存大小是100M，堆区总大小就是150M。")]),a._v(" "),s("h3",{attrs:{id:"_1-4-堆溢出-演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-堆溢出-演示"}},[a._v("#")]),a._v(" 1.4 堆溢出 演示")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * VM Args：-Xms10m -Xmx10m -XX:+HeapDumpOnOutOfMemoryError\n * @author Richard_Yi\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HeapOOMTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" _1MB "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" byteList "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" _1MB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            byteList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("h4",{attrs:{id:"输出-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出-2"}},[a._v("#")]),a._v(" 输出")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("OutOfMemoryError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Java")]),a._v(" heap space\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dumping")]),a._v(" heap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java_pid32372"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hprof")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Heap")]),a._v(" dump file created "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7774077")]),a._v(" bytes in "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.009")]),a._v(" secs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" in thread "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("OutOfMemoryError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Java")]),a._v(" heap space\n    at "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("jvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("HeapOOMTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HeapOOMTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("code",[a._v("-XX:+HeapDumpOnOutOfMemoryError")]),a._v(" 可以让JVM在遇到OOM异常时，输出堆内信息，特别是对相隔数月才出现的OOM异常尤为重要。")]),a._v(" "),s("h3",{attrs:{id:"创建一个新对象-内存分配流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新对象-内存分配流程"}},[a._v("#")]),a._v(" 创建一个新对象 内存分配流程")]),a._v(" "),s("p",[a._v("看完上面对堆的介绍，我们趁热打铁再学习一下JVM创建一个新对象的内存分配流程。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://image-static.segmentfault.com/195/989/1959895107-5e05f6baa104f_articlex",loading:"lazy"}})]),a._v(" "),s("p",[a._v("绝大部分对象在Eden区生成，当Eden区装填满的时候，会触发"),s("code",[a._v("Young Garbage Collection")]),a._v("，即"),s("code",[a._v("YGC")]),a._v("。垃圾回收的时候，在Eden区实现清除策略，没有被引用的对象则直接回收。依然存活的对象会被移送到Survivor区。Survivor区分为so和s1两块内存空间。每次"),s("code",[a._v("YGC")]),a._v("的时候，它们将存活的对象复制到未使用的那块空间，然后将当前正在使用的空间完全清除，交换两块空间的使用状态。如果"),s("code",[a._v("YGC")]),a._v("要移送的对象大于Survivor区容量的上限，则直接移交给老年代。一个对象也不可能永远呆在新生代，就像人到了18岁就会成年一样，在JVM中"),s("code",[a._v("－XX:MaxTenuringThreshold")]),a._v("参数就是来配置一个对象从新生代晋升到老年代的阈值。默认值是"),s("strong",[a._v("15")]),a._v("， 可以在Survivor区交换14次之后，晋升至老年代。")]),a._v(" "),s("blockquote",[s("p",[a._v("上述涉及到一部分垃圾回收的名词，不熟悉的读者可以查阅资料或者看下本系列的垃圾回收章节。")])]),a._v(" "),s("h2",{attrs:{id:"二、metaspace-元空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、metaspace-元空间"}},[a._v("#")]),a._v(" 二、Metaspace 元空间")]),a._v(" "),s("p",[a._v("在 HotSpot JVM 中，"),s("strong",[a._v("永久代（ ≈ 方法区）"),s("strong",[a._v("中用于")]),a._v("存放类和方法的元数据以及常量池")]),a._v("，比如"),s("code",[a._v("Class")]),a._v("和"),s("code",[a._v("Method")]),a._v("。每当一个类初次被加载的时候，它的元数据都会放到永久代中。")]),a._v(" "),s("p",[a._v("永久代是有大小限制的，因此如果加载的类太多，很有可能导致永久代内存溢出，即万恶的 "),s("code",[a._v("java.lang.OutOfMemoryError: PermGen")]),a._v("，为此我们不得不对虚拟机做调优。")]),a._v(" "),s("p",[a._v("那么，Java 8 中 PermGen 为什么被移出 HotSpot JVM 了？")]),a._v(" "),s("ol",[s("li",[a._v("由于 PermGen 内存经常会溢出，引发恼人的 "),s("code",[a._v("java.lang.OutOfMemoryError: PermGen")]),a._v("，因此 JVM 的开发者希望这一块内存可以更灵活地被管理，不要再经常出现这样的 OOM")]),a._v(" "),s("li",[a._v("移除 PermGen 可以促进 HotSpot JVM 与 JRockit VM 的融合，因为 JRockit 没有永久代。")])]),a._v(" "),s("p",[a._v("根据上面的各种原因，PermGen 最终被移除，"),s("strong",[a._v("方法区移至 Metaspace，字符串常量池移至堆区")]),a._v("。")]),a._v(" "),s("p",[a._v("准确来说，Perm 区中的"),s("strong",[a._v("字符串常量池被移到了堆内存")]),a._v("中是在Java7 之后，Java 8 时，PermGen 被元空间代替，"),s("strong",[a._v("其他内容比如类元信息、字段、静态属性、方法、常量等都移动到元空间区")]),a._v("。比如"),s("code",[a._v("java/lang/Object")]),a._v("类元信息、静态属性"),s("code",[a._v("System.out")]),a._v("、整形常量 "),s("code",[a._v("100000")]),a._v("等。")]),a._v(" "),s("p",[a._v("元空间的本质和永久代类似，都是对JVM规范中方法区的实现。不过元空间与永久代之间最大的区别在于："),s("strong",[a._v("元空间并不在虚拟机中，而是使用本地内存")]),a._v("。因此，默认情况下，元空间的大小仅受本地内存限制。（和后面提到的直接内存一样，都是使用本地内存）")]),a._v(" "),s("blockquote",[s("p",[a._v("In JDK 8, classes metadata is now stored in the "),s("strong",[a._v("native heap")]),a._v(" and this space is called "),s("strong",[a._v("Metaspace")]),a._v(".")])]),a._v(" "),s("p",[s("strong",[a._v("对应的JVM调参：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("作用")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-XX:MetaspaceSize")]),a._v(" "),s("td",[a._v("分配给Metaspace（以字节计）的初始大小")])]),a._v(" "),s("tr",[s("td",[a._v("-XX:MaxMetaspaceSize")]),a._v(" "),s("td",[a._v("分配给Metaspace 的最大值，超过此值就会触发Full GC，此值默认没有限制，但应取决于系统内存的大小。JVM会动态地改变此值。")])]),a._v(" "),s("tr",[s("td",[a._v("-XX:MinMetaspaceFreeRatio")]),a._v(" "),s("td",[a._v("在GC之后，最小的Metaspace剩余空间容量的百分比，减少为分配空间所导致的垃圾收集")])]),a._v(" "),s("tr",[s("td",[a._v("-XX:MaxMetaspaceFreeRatio")]),a._v(" "),s("td",[a._v("在GC之后，最大的Metaspace剩余空间容量的百分比，减少为释放空间所导致的垃圾收集")])])])]),a._v(" "),s("h2",{attrs:{id:"三、-java-虚拟机栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-java-虚拟机栈"}},[a._v("#")]),a._v(" 三、 Java 虚拟机栈")]),a._v(" "),s("p",[a._v("对于每一个线程，JVM 都会在线程被创建的时候，创建一个单独的栈。也就是说虚拟机栈的生命周期和线程是一致，并且是线程私有的。除了Native方法以外，Java方法都是通过Java 虚拟机栈来实现调用和执行过程的（需要程序技术器、堆、元空间内数据的配合）。所以Java虚拟机栈是虚拟机执行引擎的核心之一。而Java虚拟机栈中出栈入栈的元素就称为「栈帧」。")]),a._v(" "),s("p",[s("strong",[a._v("栈帧(Stack Frame)是用于支持虚拟机进行方法调用和方法执行的数据结构。栈帧存储了方法的局部变量表、操作数栈、动态连接和方法返回地址等信息。每一个方法从调用至执行完成的过程，都对应着一个栈帧在虚拟机栈里从入栈到出栈的过程。")])]),a._v(" "),s("blockquote",[s("p",[a._v("栈对应线程，栈帧对应方法")])]),a._v(" "),s("p",[a._v("在活动线程中， 只有位于栈顶的帧才是有效的， 称为"),s("strong",[a._v("当前栈帧")]),a._v("。正在执行的方法称为"),s("strong",[a._v("当前方法")]),a._v("。在执行引擎运行时， 所有指令都只能针对当前栈帧进行操作。而"),s("code",[a._v("StackOverflowError")]),a._v(" 表示请求的"),s("strong",[a._v("栈溢出")]),a._v("， 导致内存耗尽， 通常出现在递归方法中。")]),a._v(" "),s("p",[a._v("虚拟机栈通过pop和push的方式，对每个方法对应的活动栈帧进行运算处理，方法正常执行结束，肯定会跳转到另一个栈帧上。在执行的过程中，如果出现了异常，会进行异常回溯，返回地址通过异常处理表确定。")]),a._v(" "),s("p",[a._v("可以看出栈帧在整个JVM 体系中的地位颇高。下面也具体介绍一下栈帧中的存储信息。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/remote/1460000021426681",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"_1-局部变量表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-局部变量表"}},[a._v("#")]),a._v(" 1. 局部变量表")]),a._v(" "),s("blockquote",[s("p",[a._v("局部变量表就是"),s("strong",[a._v("存放方法参数和方法内部定义的局部变量的区域")]),a._v("。")])]),a._v(" "),s("p",[s("strong",[a._v("局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小")]),a._v("。")]),a._v(" "),s("p",[a._v("这里直接上代码，更好理解。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("如果局部变量是Java的8种基本基本数据类型，则存在局部变量表中，如果是引用类型。如new出来的String，局部变量表中存的是引用，而实例在堆中。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/remote/1460000021426683",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"_2-操作栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作栈"}},[a._v("#")]),a._v(" 2. 操作栈")]),a._v(" "),s("p",[s("strong",[a._v("操作数栈（Operand Stack）"),s("strong",[a._v("看名字可以知道是一个栈结构。Java虚拟机的解释执行引擎称为“基于栈的执行引擎”，其中所指的“栈”就是操作数栈。当JVM为方法创建栈帧的时候，在")]),a._v("栈帧")]),a._v("中为方法创建一个"),s("strong",[a._v("操作数栈")]),a._v("，保证方法内指令可以完成工作。")]),a._v(" "),s("p",[a._v("还是用实操理解一下。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author Richard_yyf\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OperandStackTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("编译生成"),s("code",[a._v(".class")]),a._v("文件之后，再反汇编查看汇编指令")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" javac OperandStackTest.java\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" javap -v OperandStackTest.class "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".txt\n  public int sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("int, int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    descriptor: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("II"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("I\n    flags: ACC_PUBLIC\n    Code:\n      "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("stack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("locals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("args_size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" // 最大栈深度为2 局部变量个数为3\n         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(": iload_1 // 局部变量1 压栈\n         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(": iload_2 // 局部变量2 压栈\n         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(": iadd    // 栈顶两个元素相加，计算结果压栈\n         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(": ireturn\n      LineNumberTable:\n        line "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h3",{attrs:{id:"_3-动态连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态连接"}},[a._v("#")]),a._v(" 3. 动态连接")]),a._v(" "),s("p",[a._v("每个栈帧中包含一个在常量池中"),s("strong",[a._v("对当前方法的引用")]),a._v("， 目的是"),s("strong",[a._v("支持方法调用过程的动态连接")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"_4-方法返回地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-方法返回地址"}},[a._v("#")]),a._v(" 4. 方法返回地址")]),a._v(" "),s("p",[a._v("方法执行时有两种退出情况：")]),a._v(" "),s("ul",[s("li",[a._v("正常退出，即正常执行到任何方法的返回字节码指令，如 "),s("code",[a._v("RETURN")]),a._v("、"),s("code",[a._v("IRETURN")]),a._v("、"),s("code",[a._v("ARETURN")]),a._v("等")]),a._v(" "),s("li",[a._v("异常退出")])]),a._v(" "),s("p",[a._v("无论何种退出情况，都将返回至方法当前"),s("strong",[a._v("被")]),a._v("调用的位置。方法退出的过程相当于弹出当前栈帧，退出可能有三种方式：")]),a._v(" "),s("ul",[s("li",[a._v("返回值压入上层调用栈帧")]),a._v(" "),s("li",[a._v("异常信息抛给"),s("strong",[a._v("能够处理")]),a._v("的栈帧")]),a._v(" "),s("li",[a._v("PC 计数器指向方法调用后的下一条指令")])]),a._v(" "),s("h2",{attrs:{id:"四、本地方法栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、本地方法栈"}},[a._v("#")]),a._v(" 四、本地方法栈")]),a._v(" "),s("p",[a._v("本地方法栈（Native Method Stack）与虚拟机栈所发挥的作用是非常相似的，"),s("strong",[a._v("它们之间的区别不过是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则为虚拟机使用到的Native方法服务")]),a._v("。在虚拟机规范中对本地方法栈中方法使用的语言、使用方式与数据结构并没有强制规定，因此具体的虚拟机可以自由实现它。甚至有的虚拟机（譬如Sun HotSpot虚拟机）直接就把本地方法栈和虚拟机栈合二为一。与虚拟机栈一样，"),s("strong",[a._v("本地方法栈区域也会抛出StackOverflowError和OutOfMemoryError异常")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"五、程序计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、程序计数器"}},[a._v("#")]),a._v(" 五、程序计数器")]),a._v(" "),s("p",[a._v("程序计数器（Program Counter Register）是一块较小的内存空间。是线程私有的。"),s("strong",[a._v("它可以看作是当前线程所执行的字节码的行号指示器")]),a._v("。什么意思呢？")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("白话版本：因为代码是在线程中运行的，线程有可能被挂起。即CPU一会执行线程A，线程A还没有执行完被挂起了，接着执行线程B，最后又来执行线程A了，CPU得知道执行线程A的哪一部分指令，线程计数器会告诉CPU。")])])]),a._v(" "),s("p",[a._v("由于Java虚拟机的多线程是通过"),s("strong",[a._v("线程轮流切换并分配处理器执行时间的方式来实现")]),a._v("的，CPU 只有把数据装载到寄存器才能够运行。寄存器存储指令相关的现场信息，由于CPU 时间片轮限制，众多线程在并发执行过程中，"),s("strong",[a._v("任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令")]),a._v("。")]),a._v(" "),s("p",[a._v("因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间计数器互不影响，独立存储。每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器用来存放执行指令的偏移量和行号指示器等，线程执行或恢复都要依赖程序计数器。此区域也不会发生内存溢出异常。")]),a._v(" "),s("h2",{attrs:{id:"六、直接内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、直接内存"}},[a._v("#")]),a._v(" 六、直接内存")]),a._v(" "),s("p",[a._v("直接内存（Direct Memory）并不是虚拟机运行时数据区的一部分，也不是Java虚拟机规范中定义的内存区域。但是这部分内存也被频繁地使用，而且也可能导致OutOfMemoryError异常出现，所以我们放到这里一起讲解。")]),a._v(" "),s("p",[a._v("在JDK 1.4中新加入了NIO（New Input/Output）类，引入了一种基于通道（Channel）与缓冲区（Buffer）的I/O方式，它可以"),s("strong",[a._v("使用Native函数库直接分配堆外内存")]),a._v("，然后通过一个"),s("strong",[a._v("存储在Java堆中的DirectByteBuffer对象作为这块内存的引用进行操作")]),a._v("。这样能在一些场景中显著提高性能，因为"),s("strong",[a._v("避免了在Java堆和Native堆中来回复制数据")]),a._v("。")]),a._v(" "),s("p",[a._v("显然，本机直接内存的分配不会受到Java堆大小的限制，但是，既然是内存，肯定还是会受到本机总内存（包括RAM以及SWAP区或者分页文件）大小以及处理器寻址空间的限制。如果内存区域总和大于物理内存的限制，也会出现OOM。")]),a._v(" "),s("h2",{attrs:{id:"code-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-cache"}},[a._v("#")]),a._v(" Code Cache")]),a._v(" "),s("p",[a._v("简而言之， "),s("strong",[a._v("JVM代码缓存是JVM将其字节码存储为本机代码的区域")]),a._v(" 。我们将可执行本机代码的每个块称为 "),s("code",[a._v("nmethod")]),a._v(" 。该 "),s("code",[a._v("nmethod")]),a._v("可能是一个完整的或内联Java方法。")]),a._v(" "),s("p",[a._v("实时（JIT）编译器是代码缓存区域的最大消费者。这就是为什么一些开发人员将此内存称为JIT代码缓存的原因。")]),a._v(" "),s("p",[a._v("这部分代码所占用的内存空间成为CodeCache区域。一般情况下我们是不会关心这部分区域的且大部分开发人员对这块区域也不熟悉。如果这块区域OOM了，在日志里面就会看到 "),s("code",[a._v("java.lang.OutOfMemoryError code cache")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"诊断选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#诊断选项"}},[a._v("#")]),a._v(" 诊断选项")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[a._v("选项")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("默认值")]),a._v(" "),s("th",{staticStyle:{"text-align":"center"}},[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("PrintCodeCache")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("false")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("是否在JVM退出前打印CodeCache的使用情况")])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("PrintCodeCacheOnCompilation")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("false")]),a._v(" "),s("td",{staticStyle:{"text-align":"center"}},[a._v("是否在每个方法被JIT编译后打印CodeCache区域的使用情况")])])])]),a._v(" "),s("p",[a._v("上面的知识点，你都学会了吗？")]),a._v(" "),s("p",[s("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);