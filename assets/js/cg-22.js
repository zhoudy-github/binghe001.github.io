(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{489:function(s,a,t){"use strict";t.r(a);var n=t(24),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"【高并发】解密导致并发问题的第三个幕后黑手-有序性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【高并发】解密导致并发问题的第三个幕后黑手-有序性问题"}},[s._v("#")]),s._v(" 【高并发】解密导致并发问题的第三个幕后黑手：有序性问题")]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("今天，我们继续聊【高并发】相关的话题，今天我们一起聊聊导致并发问题的第三个幕后黑手——有序性问题。")]),s._v(" "),t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),t("blockquote",[t("p",[s._v("大冰：小菜童鞋，昨天的内容复习了吗？")]),s._v(" "),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("p",[s._v("小菜：复习了大冰哥，昨天的内容干货满满啊，感觉自己收获很大。")]),s._v(" "),t("h1",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[s._v("#")])]),s._v(" "),t("p",[s._v("大冰：那你说说昨天都讲了哪些内容呢？")]),s._v(" "),t("h1",{attrs:{id:"-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[s._v("#")])]),s._v(" "),t("p",[s._v("小菜：昨天主要讲了原子性、线程切换和原子性问题，在编程语言中的一条语句可能会对应CPU中的多条指令，而CPU只能保证指令级别的原子性，不能保证编程语言级别的原子性，我们在编写并发程序时，需要自行确保编程语言级别语句的原子性。")]),s._v(" "),t("h1",{attrs:{id:"-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[s._v("#")])]),s._v(" "),t("p",[s._v("大冰：很好，小菜童鞋，理解的不错，今天我们就来学习下引起并发编程各种诡异Bug的最后一个“幕后黑手”，也是最后一个引起并发编程Bug的源头。")])]),s._v(" "),t("h2",{attrs:{id:"有序性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有序性"}},[s._v("#")]),s._v(" 有序性")]),s._v(" "),t("blockquote",[t("p",[s._v("有序性是指：按照代码的既定顺序执行。")])]),s._v(" "),t("p",[s._v("说的通俗一点，就是代码会按照指定的顺序执行，例如，按照程序编写的顺序执行，先执行第一行代码，再执行第二行代码，然后是第三行代码，以此类推。如下图所示。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325220305268.jpg",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"指令重排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令重排序"}},[s._v("#")]),s._v(" 指令重排序")]),s._v(" "),t("blockquote",[t("p",[s._v("编译器或者解释器为了优化程序的执行性能，有时会改变程序的执行顺序。但是，编译器或者解释器对程序的执行顺序进行修改，可能会导致意想不到的问题！")])]),s._v(" "),t("p",[s._v("在单线程下，指令重排序可以保证最终执行的结果与程序顺序执行的结果一致，但是在多线程下就会存在问题。")]),s._v(" "),t("p",[s._v("如果发生了指令重排序，则程序可能先执行第一行代码，再执行第三行代码，然后执行第二行代码，如下所示。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325220320450.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("例如下面的三行代码。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("CPU发生指令重排序时，能够保证x=1和y = 2这两行代码在z = x + y这行代码的上面，而x = 1和 y = 2的顺序就不一定了。在单线程下不会出现问题，但是在多线程下就不一定了。")]),s._v(" "),t("h2",{attrs:{id:"有序性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有序性问题"}},[s._v("#")]),s._v(" 有序性问题")]),s._v(" "),t("blockquote",[t("p",[s._v("CPU为了对程序进行优化，会对程序的指令进行重排序，此时程序的执行顺序和代码的编写顺序不一定一致，这就可能会引起有序性问题。")])]),s._v(" "),t("p",[s._v("在Java程序中，一个经典的案例就是使用双重检查机制来创建单例对象。例如，在下面的代码中，在getInstance()方法中获取对象实例时，首先判断instance对象是否为空，如果为空，则锁定当前类的class对象，并再次检查instance是否为空，如果instance对象仍然为空，则为instance对象创建一个实例。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("binghe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("concurrent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lab01")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试单例\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),s._v(" instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("如果编译器或者解释器不会对上面的程序进行优化，整个代码的执行过程如下所示。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325220339404.jpg",loading:"lazy"}})]),s._v(" "),t("p",[t("strong",[s._v("注意：为了让大家更加明确流程图的执行顺序，我在上图中标注了数字，以明确线程A和线程B执行的顺序。")])]),s._v(" "),t("p",[s._v("假设此时有线程A和线程B两个线程同时调用getInstance()方法来获取对象实例，两个线程会同时发现instance对象为空，此时会同时对SingleInstance.class加锁，而JVM会保证只有一个线程获取到锁，这里我们假设是线程A获取到锁。则线程B由于未获取到锁而进行等待。接下来，线程A再次判断instance对象为空，从而创建instance对象的实例，最后释放锁。此时，线程B被唤醒，线程B再次尝试获取锁，获取锁成功后，线程B检查此时的instance对象已经不再为空，线程B不再创建instance对象。")]),s._v(" "),t("p",[s._v("上面的一切看起来很完美，但是这一切的前提是编译器或者解释器没有对程序进行优化，也就是说CPU没有对程序进行重排序。而实际上，这一切都只是我们自己觉得是这样的。")]),s._v(" "),t("p",[s._v("在真正高并发环境下运行上面的代码获取instance对象时，创建对象的new操作会因为编译器或者解释器对程序的优化而出现问题。也就是说，问题的根源在于如下一行代码。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SingleInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("对于上面的一行代码来说，会有3个CPU指令与其对应。")]),s._v(" "),t("p",[s._v("1.分配内存空间。")]),s._v(" "),t("p",[s._v("2.初始化对象。")]),s._v(" "),t("p",[s._v("3.将instance引用指向内存空间。")]),s._v(" "),t("p",[s._v("正常执行的CPU指令顺序为1—>2—>3，CPU对程序进行重排序后的执行顺序可能为1—>3—>2。此时，就会出现问题。")]),s._v(" "),t("p",[s._v("当CPU对程序进行重排序后的执行顺序为1—>3—>2时，我们将线程A和线程B调用getInstance()方法获取对象实例的两种步骤总结如下所示。")]),s._v(" "),t("p",[t("strong",[s._v("【第一种步骤】")])]),s._v(" "),t("p",[s._v("（1）假设线程A和线程B同时进入第一个if条件判断。")]),s._v(" "),t("p",[s._v("（2）假设线程A首先获取到synchronized锁，进入synchronized代码块，此时因为instance对象为null，所以，此时执行instance = new SingleInstance()语句。")]),s._v(" "),t("p",[s._v("（3）在执行instance = new SingleInstance()语句时，线程A会在JVM中开辟一块空白的内存空间。")]),s._v(" "),t("p",[s._v("（4）线程A将instance引用指向空白的内存空间，在没有进行对象初始化的时候，发生了线程切换，线程A释放synchronized锁，CPU切换到线程B上。")]),s._v(" "),t("p",[s._v("（5）线程B进入synchronized代码块，读取到线程A返回的instance对象，此时这个instance不为null，但是并未进行对象的初始化操作，是一个空对象。此时，线程B如果使用instance，就可能出现问题！！！")]),s._v(" "),t("p",[t("strong",[s._v("【第二种步骤】")])]),s._v(" "),t("p",[s._v("（1）线程A先进入if条件判断，")]),s._v(" "),t("p",[s._v("（2）线程A获取synchronized锁，并进行第二次if条件判断，此时的instance为null，执行instance = new SingleInstance()语句。")]),s._v(" "),t("p",[s._v("（3）线程A在JVM中开辟一块空白的内存空间。")]),s._v(" "),t("p",[s._v("（4）线程A将instance引用指向空白的内存空间，在没有进行对象初始化的时候，发生了线程切换，CPU切换到线程B上。")]),s._v(" "),t("p",[s._v("（5）线程B进行第一次if判断，发现instance对象不为null，但是此时的instance对象并未进行初始化操作，是一个空对象。如果线程B直接使用这个instance对象，就可能出现问题！！！")]),s._v(" "),t("p",[t("strong",[s._v("在第二种步骤中，即使发生线程切换时，线程A没有释放锁，则线程B进行第一次if判断时，发现instance已经不为null，直接返回instance，而无需尝试获取synchronized锁。")])]),s._v(" "),t("p",[s._v("我们可以将上述过程简化成下图所示。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325220358213.jpg",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("导致并发编程产生各种诡异问题的根源有三个：缓存导致的可见性问题、线程切换导致的原子性问题和编译优化带来的有序性问题。我们从根源上理解了这三个问题产生的原因，能够帮助我们更好的编写高并发程序。")]),s._v(" "),t("blockquote",[t("p",[s._v("如果觉得文章对你有点帮助，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发编程技术。")])]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("大冰：好了，今天就是我们讲的主要内容了，今天的内容同样最重要，回去后要好好复习。")]),s._v(" "),t("h1",{attrs:{id:"-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[s._v("#")])]),s._v(" "),t("p",[s._v("小菜：好的，大冰哥，一定好好复习。")])]),s._v(" "),t("p",[s._v("最后，附上并发编程需要掌握的核心技能知识图，祝大家在学习并发编程时，少走弯路。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200325220418365.jpg",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"写在最后-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后-2"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);