(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{716:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"《面试必问》第01章-聊聊jvm性能调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第01章-聊聊jvm性能调优"}},[a._v("#")]),a._v(" 《面试必问》第01章：聊聊JVM性能调优？")]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("p",[a._v("之前在写【"),s("a",{attrs:{href:"https://blog.csdn.net/l1028386804/category_11717326.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("字节码编程"),s("OutboundLink")],1),a._v("】系列时，不少小伙伴希望我能写一些关于面试的知识，出一些相对来说有一点技术深度的面试知识点。")]),a._v(" "),s("p",[a._v("经过几天的思考，我决定暂时放下【"),s("a",{attrs:{href:"https://blog.csdn.net/l1028386804/category_11717326.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("字节码编程"),s("OutboundLink")],1),a._v("】的更新，先更新一些面试中经常会被问及的一些知识点，以便能够帮助小伙伴们系统的梳理面试中需要掌握的知识技能。")]),a._v(" "),s("p",[a._v("主要的方式是以面试的角度，深度聊聊面试中经常被问及的各项知识点。")]),a._v(" "),s("p",[a._v("对于工作3年左右的Java程序员来说，在面试大厂的过程中，面试官可能不会太关注你做了多少个项目、你的CRUD水平如何。更多的是关注你对某项技术点的理解深度，所以说，工作3年左右的小伙伴一定要把自己的重心放到技术的深度上来。")]),a._v(" "),s("p",[a._v("今天，我们先一起聊聊关于JVM性能调优的话题，本文的主要结构如下所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/5871d32e4ac3164edb448ea9bd28da5d.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"常见面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题"}},[a._v("#")]),a._v(" 常见面试题")]),a._v(" "),s("p",[a._v("关于JVM，一道常见的面试题就是："),s("strong",[a._v("Java中创建的对象是存储在JVM中的哪个区域的？")])]),a._v(" "),s("p",[a._v("例如，这里，我们简单的列举一行代码，如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),a._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("关于上面的代码，不少小伙伴都知道，创建出来的User对象是放在JVM中的堆区域的，而User对象的引用是放在栈中的。但如果你只是了解到这种程度，那面试官就会认为你了解的太浅显了，可能就会达不到他们的要求。其实面试官想要了解你是否对JVM有一个更深入的认识。")]),a._v(" "),s("p",[a._v("站在面试官的角度来看这个问题时，回答创建出来的User对象是放在JVM的堆区，也并没有错。但是JVM的堆内存区域又会分为年轻代和老年代，而年轻代又会分为Eden区和Survivor区。JVM堆空间的逻辑结构如下图所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/8f038390ec2b606e7a6f2ee1000481a1.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("而面试官更想了解的是你能不能说出来创建的对象具体是存放在JVM堆空间的哪个区域。")]),a._v(" "),s("p",[a._v("在JVM内部，会将整个堆空间划分成年轻代和老年代，年轻代默认会占整个堆内存空间的1/3，老年代默认会占整个堆内存空间的2/3。年轻代又会划分为Eden区和两个Survivor区，它们之间的默认比例是Eden：Survivor1：Survivor2 = 8:1:1。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/904de9f1387734dc3dd17aadc0cedda1.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("如果你能回答出 "),s("strong",[a._v("新创建的User对象是存放在JVM堆空间中年轻代的Eden区")]),a._v("，那面试官就会对你刮目相看了。当然，这里没有考虑JVM的逃逸分析情况，关于JVM的逃逸分析，大家可以参考《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4MjU0OTM1OA==&mid=2247497051&idx=1&sn=38312719e86b7f9cef31c00102da6c48&chksm=cf56425af821cb4c779873fdd793a73af274305f74de7ae72a06fcd2d9224f44541f4a2cad40&token=617806450&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("逃逸分析"),s("OutboundLink")],1),a._v("》一文。")]),a._v(" "),s("h2",{attrs:{id:"jvm体系结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm体系结构"}},[a._v("#")]),a._v(" JVM体系结构")]),a._v(" "),s("p",[a._v("JVM主要由三个子系统构成，分别为："),s("strong",[a._v("类加载器子系统、运行时数据区（内存结构）和字节码执行引擎")]),a._v("。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/799117a5b87fd6b62858817d75893521.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("关于JVM的体系结构全貌，我们先来看一张图。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/a56723f6dba185cce78511bc61dce842.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("当我们开发Java程序时，首先会编写.java文件，之后，会将.java文件编译成.class文件。")]),a._v(" "),s("p",[a._v("JVM中，会通过类装载子系统将.class文件的内容装载到JVM的运行时数据区，而JVM的运行时数据区又会分为："),s("strong",[a._v("方法区、堆、栈、本地方法栈和程序计数器")]),a._v(" 几个部分。")]),a._v(" "),s("p",[a._v("在装载class文件的内容时，会将class文件的内容拆分为几个部分，分别装载到JVM运行时数据区的几个部分。其中，值得注意的是："),s("strong",[a._v("程序计数器的作用是：记录程序执行的下一条指令的地址。")])]),a._v(" "),s("p",[a._v("方法区也叫作元空间，主要包含了：运行时常量池、类型信息、字段信息、方法信息、类加载器的引用、对应的Class实例的引用等信息。")]),a._v(" "),s("p",[a._v("在JVM中，程序的执行是通过执行引擎进行的，执行引擎会调用本地方法的接口来执行本地方法库，进而完成整个程序逻辑的执行。")]),a._v(" "),s("p",[a._v("我们常说的垃圾收集器是包含在执行引擎中的，在程序的运行过程中，执行引擎会开启垃圾收集器，并在后台运行，垃圾收集器会不断监控程序运行过程中产生的内存垃圾信息，并根据相应的策略对垃圾信息进行清理。")]),a._v(" "),s("p",[s("strong",[a._v("这里，大家需要注意的是：栈、本地方法栈和程序计数器是每个线程运行时独占的，而方法区和堆是所有线程共享的。所以，栈、本地方法栈和程序计数器不会涉及线程安全问题，而方法区和堆会涉及线程安全问题。")])]),a._v(" "),s("h3",{attrs:{id:"方法区-元空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区-元空间"}},[a._v("#")]),a._v(" 方法区（元空间）")]),a._v(" "),s("p",[a._v("很多小伙伴一看到方法区三个字，脑海中的第一印象可能是存储方法的地方吧。")]),a._v(" "),s("p",[a._v("实则不然，方法区的另一个名字叫作元空间，相信不少小伙伴或多或少的听说过元空间。这个区域是JDK1.8中划分出来的。主要包含：运行时常量池、类型信息、字段信息、方法信息、类加载器的引用、对应的Class实例的引用等信息。方法区中的信息能够被多个线程共享。")]),a._v(" "),s("p",[a._v("例如，在程序中声明的常量、静态变量和有关于类的信息等的引用，都会存放在方法区，而这些引用所指向的具体对象 "),s("strong",[a._v("一般都会在堆中开辟单独的空间进行存储，也可能会在直接内存中进行存储")]),a._v("。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/c097cd77d232d6023ca542d6141274af.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[a._v("#")]),a._v(" 堆")]),a._v(" "),s("p",[a._v("堆中主要存储的是实际创建的对象，也就是会存储通过new关键字创建的对象，堆中的对象能够被多个线程共享。堆中的数据不需要事先明确生存期，可以动态的分配内存，不再使用的数据和对象由JVM中的GC机制自动回收。"),s("strong",[a._v("对JVM的性能调优一般就是对堆内存的调优")]),a._v("。")]),a._v(" "),s("p",[a._v("Java中基本类型的包装类：Byte、Short、Integer、Long、Float、Double、Boolean、Character类型的数据是存储在堆中的。")]),a._v(" "),s("p",[a._v("堆一般会被分成年轻代和老年代。而年轻代又会被进一步分为1个Eden区和2个Survivor区。在内存分配上，如果保持默认配置的话，年轻代和老年代的内存大小比例为1 : 2，年轻代中的1个Eden区和2个Survivor区的内存大小比例为：8 : 1 : 1。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/014da608994611bd6b48f36c4d40245f.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[a._v("#")]),a._v(" 栈")]),a._v(" "),s("p",[a._v("栈一般又叫作线程栈或虚拟机栈，一般存储的是局部变量。在Java中，每个线程都会有一个单独的栈区，每个栈中的元素都是私有的，不会被其他的栈所访问。栈中的数据大小和生存期都是确定的，存取速度比较快。")]),a._v(" "),s("p",[a._v("在Java中，所有的基本数据类型（byte、short、int、long、float、double、boolean、char）和引用变量（对象引用）都是在栈中的。"),s("strong",[a._v("一般情况下，线程退出或者方法退出时，栈中的数据会被自动清除")]),a._v("。")]),a._v(" "),s("p",[a._v("程序在执行过程中，会在栈中为不同的方法创建不同的栈帧，在栈帧中又包含了："),s("strong",[a._v("局部变量表、操作数栈、动态链接和方法出口。")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/17a0a62bb8868a65c644965db2d8081c.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("关于局部变量表、操作数栈、动态链接和方法出口的具体作用，会在《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2028693320121548800#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("架构师进阶系列"),s("OutboundLink")],1),a._v("》中的后续文章中详细阐述。")]),a._v(" "),s("p",[a._v("栈中一般会存储对象的引用，这些引用所指向的具体对象一般都会在堆中开辟单独的地址空间进行存储，也有可能存储在直接内存中。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/63af485ca90f4f132e0e00b2c03ab285.png",loading:"lazy"}})]),a._v(" "),s("p",[s("strong",[a._v("注意：这里说的是这些引用所指向的具体对象一般都会在堆中开辟单独的地址空间进行存储，也有可能存储在直接内存中。")])]),a._v(" "),s("p",[s("strong",[a._v("因为在JVM中，如果开启了逃逸分析和标量替换，则可能不会再在堆上创建对象，可能会将对象直接分配到栈上，也可能不再创建对象，而是进一步分解对象中的成员变量，将其直接在栈上分配空间并赋值。")])]),a._v(" "),s("h3",{attrs:{id:"本地方法栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[a._v("#")]),a._v(" 本地方法栈")]),a._v(" "),s("p",[a._v("本地方法栈相对来说比较简单，就是保存native方法进入区域的地址。")]),a._v(" "),s("p",[a._v("例如，在Java中创建线程，调用Thread对象的start()方法时，会通过本地方法start0()调用操作系统创建线程的方法。此时，本地方法栈就会保存start0()方法进入区域的内存地址。")]),a._v(" "),s("h3",{attrs:{id:"程序计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[a._v("#")]),a._v(" 程序计数器")]),a._v(" "),s("p",[a._v("程序计数器也叫作PC计数器，只要存储的是下一条将要执行的命令的地址。")]),a._v(" "),s("h2",{attrs:{id:"双亲委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[a._v("#")]),a._v(" 双亲委派机制")]),a._v(" "),s("h3",{attrs:{id:"何为双亲委派"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何为双亲委派"}},[a._v("#")]),a._v(" 何为双亲委派？")]),a._v(" "),s("p",[a._v("JVM中是通过类的双亲委派机制来加载的，那什么是双亲委派机制呢？我们先来看一张图。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/25399a6b2f57c661899a9c318d23ea49.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("当JVM加载某个类的时候，不会直接使用当前类的加载器加载该类，会先委托父加载器寻找要加载的目标类，找不到再委托上层的父加载器进行加载，直到引导类加载器同样找不到要加载的目标类，就会在自己的类加载路径中查找并加载目标类。")]),a._v(" "),s("p",[s("strong",[a._v("简单来说：双亲委派机制就是：先使用父加载器加载，如果父加载器找不到要加载的目标类，就使用子加载器自己加载。")])]),a._v(" "),s("h3",{attrs:{id:"为何使用双亲委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何使用双亲委派机制"}},[a._v("#")]),a._v(" 为何使用双亲委派机制？")]),a._v(" "),s("p",[a._v("这里，小伙伴们有没有想过这样一个问题："),s("strong",[a._v("JVM为何要使用双亲委派机制呢？")])]),a._v(" "),s("p",[a._v("为了更好的说明问题，我们自己创建一个"),s("code",[a._v("java.lang")]),a._v("包，并在"),s("code",[a._v("java.lang")]),a._v("包下，创建一个String类，如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author binghe (公众号：冰河技术)\n * @version 1.0.0\n * @description 测试时双亲委派机制\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"自定义的String类"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("这里，我们自己创建一个"),s("code",[a._v("java.lang.String")]),a._v("类，而JDK中也存在一个"),s("code",[a._v("java.lang.String")]),a._v("类，如果运行我们自己创建的"),s("code",[a._v("java.lang.String")]),a._v("会发生什么呢？会输出如下错误信息。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("错误: 在类 java.lang.String 中找不到 main 方法, 请将 main 方法定义为:\n   public static void main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n否则 JavaFX 应用程序类必须扩展javafx.application.Application\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("那JVM为何要使用双亲委派机制呢？试想，如果我们自己写的类能够随随便便覆盖JDK中的类的话，那JDK中的代码是不是就没有任何安全性可言了？"),s("strong",[a._v("没错，JVM为了代码的安全性，也即是沙箱安全机制，使用了双亲委派机制。")])]),a._v(" "),s("p",[a._v("另外，"),s("strong",[a._v("使用双亲委派机制，也能防止JVM内存中出现多份相同的字节码")]),a._v("。例如，两个类A和B，都需要加载System类。如果JVM没有提供双亲委派机制，那么A和B两个类就会分别加载一份System的字节码，这样JVM内存中就会出现这份System字节码。")]),a._v(" "),s("p",[a._v("相反，JVM提供了双亲委派机制的话，在加载System类的过程中，会递归的向父加载器查找并加载，整个过程会优先选用BootStrapClassLoader加载器，也就是我们通常说的引导类加载器。如果找不到就逐级向下使用子加载器进行加载。")]),a._v(" "),s("p",[a._v("而System类可以在BootStrapClassLoader中进行加载，如果System类已经通过A类的引用加载过，此时B类也要加载System类，也会从BootStrapClassLoader开始加载System类，此时，BootStrapClassLoader发现已经加载过System类了，就会直接返回内存中的System，不再重新加载。")]),a._v(" "),s("p",[a._v("这样，在JVM内存中，就只会存在一份System类的字节码。")]),a._v(" "),s("h3",{attrs:{id:"类加载器的父子关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载器的父子关系"}},[a._v("#")]),a._v(" 类加载器的父子关系")]),a._v(" "),s("p",[a._v("如何确认类加载器的父子关系呢？这里，我们再来看一个示例代码，如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author binghe (公众号：冰河技术)\n * @version 1.0.0\n * @description 类的双亲委派机制\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),a._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("这段代码也比较简单，创建了一个User对象，打印User对象的类加载器，父类加载和上层父加载器。在IDEA中运行上述代码，会输出如下信息。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sun.misc.Launcher"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$AppClassLoader")]),a._v("@18b4aac2\nsun.misc.Launcher"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ExtClassLoader")]),a._v("@135fbaa4\nnull\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("可以看到，User对象的类加载器是AppClassLoader，父加载器是ExtClassLoader。而输出的null其实是BootStrapClassLoader，而BootStrapClassLoader也就是上层父加载器。")]),a._v(" "),s("p",[a._v("这样，类加载器的父子关系就出来了：AppClassLoader的父加载器是ExtClassLoader，ExtClassLoader的父加载器是BootStrapClassLoader。")]),a._v(" "),s("p",[s("strong",[a._v("这里，需要注意的是：父加载器并不是父类。")])]),a._v(" "),s("h3",{attrs:{id:"类加载器加载的类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载器加载的类"}},[a._v("#")]),a._v(" 类加载器加载的类")]),a._v(" "),s("ul",[s("li",[a._v("引导类加载器（BootStrapClassLoader）：负责加载%JAVA_HOME%/jre/lib目录下的所有jar包，或者是-Xbootclasspath参数指定的路径；")]),a._v(" "),s("li",[a._v("扩展类加载器（ExtClassLoader）：负责加载%JAVA_HOME%/jre/lib/ext目录下的所有jar包，或者是java.ext.dirs参数指定的路径；")]),a._v(" "),s("li",[a._v("应用类加载器（AppClassLoader）：负责加载用户类路径上所指定的类库。")])]),a._v(" "),s("p",[a._v("注意：引导类加载器和扩展类加载器加载的类都是预先加载好的，而应用类加载器用来加载应用工程的classes以及lib下的类库，仅仅声明，并不会提前载入JVM内存，等到使用的时候才会加载到JVM内存中。")]),a._v(" "),s("h2",{attrs:{id:"类的加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的加载过程"}},[a._v("#")]),a._v(" 类的加载过程")]),a._v(" "),s("p",[a._v("一个类在JVM中的加载过程大致经历了加载、验证、准备、解析和初始化。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("加载：")]),a._v(" 主要是在计算机磁盘上通过IO流读取字节码文件（.class文件），当程序需要使用某个类时，才会对这个类进行加载操作，比如，在程序中调用某个类的静态方法，使用new关键字创建某个类的对象等。在加载阶段，往往会在JVM的堆内存中生成一个代表这个类的Class对象，这个对象作为存放在JVM方法区中这个类的各种数据的访问入口，也可以叫做访问句柄。")]),a._v(" "),s("li",[s("strong",[a._v("验证")]),a._v(" ： 主要的作用就是校验字节码的正确性，是否符合JVM规范。")]),a._v(" "),s("li",[s("strong",[a._v("准备")]),a._v("：为类的静态变量分配相应的内存，并赋予默认值。")]),a._v(" "),s("li",[s("strong",[a._v("解析")]),a._v("： 将程序中的符号引用替换为直接引用，这里的符号引用包括：静态方法等。此阶段就是将一些静态方法等符号引用替换成指向数据所在内存地址的指针，这些指针就是直接引用。如果是在类加载过程中完成的符号引用到直接引用的替换，这个替换的过程就叫作静态链接过程。如果是在运行期间完成的符号引用到直接引用的替换，这个替换的过程就叫作动态链接过程。")]),a._v(" "),s("li",[s("strong",[a._v("初始化")]),a._v("：对类的静态变量进行初始化，为其赋予程序中指定的值，并执行静态代码块中的代码。")])]),a._v(" "),s("p",[s("strong",[a._v("注意：在准备阶段和初始化阶段都会为类的静态变量赋值，不同之处就是在准备阶段为类的静态变量赋予的是默认值，而在初始化阶段为类的静态变量赋予的是真正要赋予的值。")])]),a._v(" "),s("p",[a._v("例如，在程序中有如下静态变量。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在准备阶段会为count赋予一个默认值0，而在初始化阶段才会真正将count赋值为100。")]),a._v(" "),s("h2",{attrs:{id:"jvm调优参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优参数"}},[a._v("#")]),a._v(" JVM调优参数")]),a._v(" "),s("p",[a._v("在JVM中，主要是对堆（新生代）、方法区和栈进行性能调优。各个区域的调优参数如下所示。")]),a._v(" "),s("ul",[s("li",[a._v("堆：-Xms、-Xmx")]),a._v(" "),s("li",[a._v("新生代：-Xmn")]),a._v(" "),s("li",[a._v("方法区（元空间）：-XX:MetaspaceSize、-XX:MaxMetaspaceSize")]),a._v(" "),s("li",[a._v("栈（线程）：-Xss")])]),a._v(" "),s("p",[a._v("为了更加直观的表述，我们可以将JVM的内存区域和对应的调优参数总结成下图所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/671cb5c3336ee5cd81845945234ad335.png",loading:"lazy"}})]),a._v(" "),s("p",[s("strong",[a._v("在设置JVM启动参数时，需要特别注意方法区（元空间）的参数设置。")])]),a._v(" "),s("p",[a._v("关于方法区（元空间）的JVM参数主要有两个：-XX:MetaspaceSize和-XX:MaxMetaspaceSize。")]),a._v(" "),s("p",[s("strong",[a._v("-XX:MetaspaceSize：")]),a._v(" 指的是方法区（元空间）触发Full GC的初始内存大小（方法区没有固定的初始内存大小），以字节为单位，默认为21M。达到设置的值时，会触发Full GC，同时垃圾收集器会对这个值进行修改。")]),a._v(" "),s("p",[a._v("如果在发生Full GC时，回收了大量内存空间，则垃圾收集器会适当降低此值的大小；如果在发生Full GC时，释放的空间比较少，则在不超过设置的-XX:MetaspaceSize值或者在没设置-XX:MetaspaceSize的值时不超过21M，适当提高此值。")]),a._v(" "),s("p",[s("strong",[a._v("-XX:MaxMetaspaceSize：")]),a._v(" 指的是方法区（元空间）的最大值，默认值为-1，不受堆内存大小限制，此时，只会受限于本地内存大小。")]),a._v(" "),s("p",[s("strong",[a._v("最后需要注意的是：")]),a._v(" 调整方法区（元空间）的大小会发生Full GC，这种操作的代价是非常昂贵的。如果发现应用在启动的时候发生了Full GC，则很有可能是方法区（元空间）的大小被动态调整了。")]),a._v(" "),s("p",[s("strong",[a._v("所以，为了尽量不让JVM动态调整方法区（元空间）的大小造成频繁的Full GC，一般将-XX:MetaspaceSize和-XX:MaxMetaspaceSize设置成一样的值。例如，物理内存8G，可以将这两个值设置为256M")])]),a._v(" "),s("p",[a._v("最后，我们一起看下在物理内存8G的情况下，启动应用程序时，可以设置的JVM参数。当然，我这里给出的是一些经验值，实际部署到生产环境时，需要经过压测找到最佳的参数值。")]),a._v(" "),s("ul",[s("li",[a._v("启动SpringBoot")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" ‐Xms2048M ‐Xmx2048M ‐Xmn1024M ‐Xss512K ‐XX:MetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M ‐XX:MaxMetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M ‐jar xxx.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("启动Tomcat（Linux）")])]),a._v(" "),s("p",[a._v("在Tomcat bin目录下catalina.sh文件里配置。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("‐Xms2048M ‐Xmx2048M ‐Xmn1024M ‐Xss512K ‐XX:MetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M ‐XX:MaxMetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("启动Tomcat（Windows）")])]),a._v(" "),s("p",[a._v("在Tomcat bin目录下catalina.bat文件里配置。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("‐Xms2048M ‐Xmx2048M ‐Xmn1024M ‐Xss512K ‐XX:MetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M ‐XX:MaxMetaspaceSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256M\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("本文以面试为背景，探讨了有关JVM的常见面试问题。文章开头以一个常见的面试题举例，说明了JVM在互联网大厂面试中的重要性。接下里，介绍了JVM的体系结构，包含：方法区（元空间）、堆、栈、本地方法栈和程序计数器。")]),a._v(" "),s("p",[a._v("随后，介绍了JVM中的双亲委派机制，说明了何为双亲委派，为何使用双亲委派机制，类加载器的父子关系。需要注意的是：这里说的类加载器的父子关系并不是父类和子类的关系。随后，介绍了各个类加载器要加载哪些类。")]),a._v(" "),s("p",[a._v("接下来，介绍了类的加载过程，主要包含：加载、验证、准备、解析和初始化等步骤，同时，说明了各个步骤的主要作用。")]),a._v(" "),s("p",[a._v("最后，介绍了JVM中常用的调优参数，涵盖堆、新生代、方法区（元空间）和栈（线程）常用的调优参数。并以Tomcat调优为例，详细说明了如何使用这些调优参数。")]),a._v(" "),s("p",[a._v("说了这么多你都掌握了吗？")]),a._v(" "),s("p",[s("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),s("h2",{attrs:{id:"星球服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[a._v("#")]),a._v(" 星球服务")]),a._v(" "),s("p",[a._v("加入星球，你将获得：")]),a._v(" "),s("p",[a._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),a._v(" "),s("p",[a._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),a._v(" "),s("p",[a._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),a._v(" "),s("p",[a._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),a._v(" "),s("p",[a._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),a._v(" "),s("p",[a._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),a._v(" "),s("h2",{attrs:{id:"星球重磅福利"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[a._v("#")]),a._v(" 星球重磅福利")]),a._v(" "),s("p",[a._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),s("strong",[a._v("直接立减149元，相当于5折，")]),a._v(" 这已经是星球最大优惠力度！")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),a._v(" "),s("br")]),a._v(" "),s("p",[a._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),a._v(" "),s("p",[s("strong",[a._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),a._v(" "),s("h2",{attrs:{id:"其他方式加入星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[a._v("#")]),a._v(" 其他方式加入星球")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("链接")]),a._v(" ：打开链接 "),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),a._v(" 加入星球。")]),a._v(" "),s("li",[s("strong",[a._v("回复")]),a._v(" ：在公众号 "),s("strong",[a._v("冰河技术")]),a._v(" 回复 "),s("strong",[a._v("星球")]),a._v(" 领取优惠券加入星球。")])]),a._v(" "),s("p",[s("strong",[a._v("特别提醒：")]),a._v(" 苹果用户进圈或续费，请加微信 "),s("strong",[a._v("hacker_binghe")]),a._v(" 扫二维码，或者去公众号 "),s("strong",[a._v("冰河技术")]),a._v(" 回复 "),s("strong",[a._v("星球")]),a._v(" 扫二维码加入星球。")]),a._v(" "),s("h2",{attrs:{id:"星球规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[a._v("#")]),a._v(" 星球规划")]),a._v(" "),s("p",[a._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),a._v(" "),s("h3",{attrs:{id:"中间件项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[a._v("#")]),a._v(" 中间件项目")]),a._v(" "),s("ul",[s("li",[a._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),s("li",[a._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),s("li",[a._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),s("li",[a._v("《手写Redis》：全程手撸代码。")]),a._v(" "),s("li",[a._v("《手写JVM》全程手撸代码。")])]),a._v(" "),s("h3",{attrs:{id:"超硬核项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[a._v("#")]),a._v(" 超硬核项目")]),a._v(" "),s("ul",[s("li",[a._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),s("strong",[a._v("已上新")]),a._v("）。")]),a._v(" "),s("li",[a._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),a._v(" "),s("li",[a._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),a._v(" "),s("p",[a._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),a._v(" "),s("p",[a._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),a._v(" "),s("h2",{attrs:{id:"联系冰河"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[a._v("#")]),a._v(" 联系冰河")]),a._v(" "),s("h3",{attrs:{id:"加群交流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[a._v("#")]),a._v(" 加群交流")]),a._v(" "),s("p",[a._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),s("code",[a._v("星球编号")]),a._v("。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),a._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[a._v("冰河微信")]),a._v(" "),s("br")]),a._v(" "),s("h3",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),s("p",[a._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),s("strong",[a._v("冰河技术")]),a._v(" 微信公众号首发，强烈建议大家关注。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),a._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[a._v("公众号：冰河技术")]),a._v(" "),s("br")]),a._v(" "),s("h3",{attrs:{id:"视频号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[a._v("#")]),a._v(" 视频号")]),a._v(" "),s("p",[a._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),a._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[a._v("视频号：冰河技术")]),a._v(" "),s("br")]),a._v(" "),s("h3",{attrs:{id:"星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[a._v("#")]),a._v(" 星球")]),a._v(" "),s("p",[a._v("加入星球 "),s("strong",[s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1)]),a._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),s("strong",[a._v("hacker_binghe")]),a._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),s("strong",[a._v("实战项目")]),a._v("！")]),a._v(" "),s("p",[a._v("关注 "),s("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1),a._v("公众号，回复 "),s("code",[a._v("星球")]),a._v(" 可以获取入场优惠券。")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),a._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[a._v("知识星球：冰河技术")]),a._v(" "),s("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);