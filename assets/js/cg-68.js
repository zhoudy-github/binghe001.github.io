(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{357:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"类的加载过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的加载过程"}},[s._v("#")]),s._v(" 类的加载过程")]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("p",[s._v("首先，小伙伴们有没有想过这样一个问题呢：Java字节码文件是如何加载到JVM的呢？\n"),a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVJU",loading:"lazy"}}),s._v("\n一个类从被加载到虚拟机内存中开始，到卸载出内存，它的整个生命周期包括：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）7个阶段。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVkm",loading:"lazy"}})]),s._v(" "),a("p",[s._v("在Java虚拟机中类加载的全过程，包括加载、验证、准备、解析和初始化这5个阶段所执行的具体动作，这些都是有类加载器来实现的。")]),s._v(" "),a("h2",{attrs:{id:"类加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载"}},[s._v("#")]),s._v(" 类加载")]),s._v(" "),a("h3",{attrs:{id:"加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载"}},[s._v("#")]),s._v(" 加载")]),s._v(" "),a("p",[s._v("加载是类加载过程的一个阶段。首先来一个简单的代码，打印###以及创建一个Hello对象。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoad")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"########################"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        Hello hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("运行之前，设置"),a("code",[s._v("-XX:+TraceClassLoading")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVp9",loading:"lazy"}})]),s._v(" "),a("p",[s._v("运行结果如下（截取后面部分），可以看到"),a("code",[s._v("com.jvm.load.ClassLoad")]),s._v("先被加载，然后是"),a("code",[s._v("com.jvm.cls.Hello")]),s._v("。ClassLoad是这个main方法的主类，所以优先加载。Hello的加载，是在实例化的时候，也就是被用到的时候，如果读者自己去断点，那就更直观的看到了。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVyd",loading:"lazy"}})]),s._v(" "),a("p",[s._v("上面这个图，可以看到输出了类的全限定名，类加载器就是通过这个来获取它的二进制字节流，这个二进制字节流来源如下：")]),s._v(" "),a("ul",[a("li",[s._v("class文件")]),s._v(" "),a("li",[s._v("zip、jar、war包中读取")]),s._v(" "),a("li",[s._v("网络中读取，比如Applet")]),s._v(" "),a("li",[s._v("运行时计算生成，比如动态代理技术")]),s._v(" "),a("li",[s._v("由其他文件生成，比如JSP")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVNq",loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("p",[s._v("验证是为了确保Class文件的字节流中包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身的安全。当加载的class文件不符合虚拟机的要求，java虚拟机是无法执行这个字节码的，所以要先看看有没有符合，符合了才给虚拟机执行后续操作。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVOJ",loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("p",[s._v("准备是正式为类变量分配内存并设置类变量初始值的阶段。也就是说"),a("code",[s._v("com.jvm.load.ClassLoad")]),s._v("和"),a("code",[s._v("com.jvm.cls.Hello")]),s._v("在虚拟机中的内存分配是在这个阶段。这时候进行内存分配的仅包括类变量（被static修饰的变量），而不包括实例变量，实例变量将会在对象实例化时随着对象一起分配在Java堆中。设置类变量初始值通常情况下就是数据类型的零值。")]),s._v(" "),a("div",{staticClass:"language-arduino line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-arduino"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 准备阶段value=0")]),s._v("\npublic static "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 准备阶段value2=123")]),s._v("\npublic static final "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVQi",loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("p",[s._v("解析是虚拟机将常量池内的符号引用替换为直接引用的过程。\n比如"),a("code",[s._v("com.jvm.load.ClassLoad")]),s._v("编译的时候，不知道"),a("code",[s._v("com.jvm.cls.Hello")]),s._v("的实际内存地址，此时用符号引用，当"),a("code",[s._v("com.jvm.cls.Hello")]),s._v("加载到内存后，此时就改为直接引用，指向Hello的内存位置。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVRl",loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),a("p",[s._v("在准备阶段value=0，在初始化阶段，value才赋值为123。\n类初始化的条件：")]),s._v(" "),a("ol",[a("li",[s._v("new一个对象，静态变量的赋值和取值，静态方法的调用。")]),s._v(" "),a("li",[s._v("通过反射机制调用。")]),s._v(" "),a("li",[s._v("如果子类初始化的时候，父类未初始化。")]),s._v(" "),a("li",[s._v("执行的主类（main方法）的时候。")])]),s._v(" "),a("p",[s._v("下面看看类虽然被加载，却没有初始化的例子。")]),s._v(" "),a("p",[s._v("SuperClass：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SuperClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SuperClass init"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("SubClass：")]),s._v(" "),a("div",{staticClass:"language-scala line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[s._v("public "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" SubClass "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" SuperClass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    static "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SubClass init"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("ClassLoad：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassLoad")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"########################"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Hello hello = new Hello();")]),s._v("\n System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SubClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("运行结果如下：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVTd",loading:"lazy"}})]),s._v(" "),a("p",[s._v("可以看到SubClass被加载了，但是并没有输出"),a("code",[s._v("SubClass init")]),s._v("。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVRw",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"类加载器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[s._v("#")]),s._v(" 类加载器")]),s._v(" "),a("p",[s._v("类加载器有这几个：")]),s._v(" "),a("ul",[a("li",[s._v("启动类加载器：jvm启动的时候，会优先加载<JAVA_HOME>\\lib这个目录的核心类库。")]),s._v(" "),a("li",[s._v("扩展类加载器：负责加载<JAVA_HOME>\\lib\\ext这个目录的类。")]),s._v(" "),a("li",[s._v("应用程序类加载器：负责加载我们写的代码。")]),s._v(" "),a("li",[s._v("自定义类加载器：根据我们的需要，加载特定的类。")])]),s._v(" "),a("p",[s._v("下图展示了类加载器直接的层次关系，成为类加载器的双亲委派模型。双亲委派模型要求除了顶层的启动类加载器外，其余的类加载器都应当有自己的父类加载器。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVUa",loading:"lazy"}})]),s._v(" "),a("p",[s._v("它的工作过程是这样的:")]),s._v(" "),a("ol",[a("li",[s._v("应用程序类加载器收到了Hello类的加载请求，先问扩展类加载器是否可以加载。")]),s._v(" "),a("li",[s._v("扩展类加载器也不会直接去加载，他也是向上级启动类加载器询问是否可以加载。")]),s._v(" "),a("li",[s._v("启动类加载器在自己负责的目录搜索了一下，发现自己找不到这个类，就说不行，你自己加载吧。")]),s._v(" "),a("li",[s._v("扩展类加载器在自己负责的目录搜索了一下，发现自己找不到这个类，就说不行，你自己加载吧。")]),s._v(" "),a("li",[s._v("应用程序类加载器在自己负责的目录搜索了一下，找到了这个类，把Hello类加载进来。")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://segmentfault.com/img/bVcKVVR",loading:"lazy"}})]),s._v(" "),a("p",[s._v("双亲委派模型一个显而易见的好处就是Java类随着它的类加载器一起具备了一种带有优先级的层次关系。")]),s._v(" "),a("p",[a("strong",[s._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);