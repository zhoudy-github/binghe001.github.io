(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{445:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"《spring核心技术》第24章-深度解析切入点表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第24章-深度解析切入点表达式"}},[a._v("#")]),a._v(" 《Spring核心技术》第24章：深度解析切入点表达式")]),a._v(" "),s("p",[a._v("作者：冰河\n"),s("br"),a._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("源码地址："),s("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-22",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-22"),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("本章难度")]),a._v("：★★★★☆")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("本章重点")]),a._v("：从源码级别彻底掌握解析切入点表达式在Spring底层的执行流程。")])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("本章目录如下所示：")]),a._v(" "),s("ul",[s("li",[a._v("学习指引")]),a._v(" "),s("li",[a._v("切入点表达式概述\n"),s("ul",[s("li",[a._v("基本概念")]),a._v(" "),s("li",[a._v("分类")]),a._v(" "),s("li",[a._v("关键字")]),a._v(" "),s("li",[a._v("通配符")]),a._v(" "),s("li",[a._v("逻辑条件")])])]),a._v(" "),s("li",[a._v("源码时序图")]),a._v(" "),s("li",[a._v("源码解析")]),a._v(" "),s("li",[a._v("总结")]),a._v(" "),s("li",[a._v("思考")]),a._v(" "),s("li",[a._v("VIP服务")])]),a._v(" "),s("h2",{attrs:{id:"一、学习指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),s("p",[s("code",[a._v("AOP的切入点表达式，你真的彻底了解过吗？")])]),a._v(" "),s("p",[a._v("切入点表达式，简单点来讲就是一种遵循特定语法，用于捕获每一个种类的可使用连接点的语法，Spring中的AOP特性支持切入点表达式，对于这种切入点表达式和其在Spring底层的执行流程，你真的彻底掌握了吗？")]),a._v(" "),s("p",[s("strong",[a._v("注意：本章会以第22章的案例程序为基础解析切入点表达式的源码时序图和源码执行流程。")])]),a._v(" "),s("h2",{attrs:{id:"二、切入点表达式概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、切入点表达式概述"}},[a._v("#")]),a._v(" 二、切入点表达式概述")]),a._v(" "),s("p",[s("code",[a._v("先简单介绍下切入点表达式吧？")])]),a._v(" "),s("p",[a._v("本节，主要从切入点表达式的基本概念、分类、关键字、通配符和逻辑条件等方面进行简单的介绍。")]),a._v(" "),s("h3",{attrs:{id:"_2-1-基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本概念"}},[a._v("#")]),a._v(" 2.1 基本概念")]),a._v(" "),s("p",[a._v("切入点表达式一般指的是一种遵循特定语法，用于捕获每一个种类的可使用连接点的语法，并且能够对符合语法格式的连接点进行功能增强。")]),a._v(" "),s("h3",{attrs:{id:"_2-2-分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分类"}},[a._v("#")]),a._v(" 2.2 分类")]),a._v(" "),s("p",[a._v("切入点表达式可以按照用途分成如下种类。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("方法执行："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MethodSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n方法调用："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MethodSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n构造器执行："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConstructorSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n构造器调用："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConstructorSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n类初始化："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("staticinitialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TypeSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n属性读操作："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FieldSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n属性写操作："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FieldSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n例外处理执行："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TypeSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n对象初始化："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("initialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConstructorSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n对象预先初始化："),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("preinitialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConstructorSignature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"_2-3-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-关键字"}},[a._v("#")]),a._v(" 2.3 关键字")]),a._v(" "),s("p",[a._v("Spring支持的AspectJ切入点关键字如下所示：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("execution：用于匹配方法执行的连接点\nwithin：用于匹配指定类型内的方法执行\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),a._v("：用于匹配当前"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AOP")]),a._v("代理对象类型的执行方法注意是"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AOP")]),a._v("代理对象的类型匹配，这样就可能包括引入接口类型匹配\ntarget：用于匹配当前目标对象类型的执行方法注意是目标对象的类型匹配，这样就不包括引入接口类型匹配\nargs：用于匹配当前执行的方法传入的参数为指定类型的执行方法\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@within")]),a._v("：用于匹配所以持有指定注解类型内的方法\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@target")]),a._v("：用于匹配当前目标对象类型的执行方法，其中目标对象持有指定的注解\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@args")]),a._v("：用于匹配当前执行的方法传入的参数，持有指定的注解\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@annotation")]),a._v("：用于匹配当前持有指定注解的执行方法\nbean："),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Spring")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AOP")]),a._v("扩展的，"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AspectJ")]),a._v("没有此指示符，用于匹配特定名称的"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Bean")]),a._v("对象的执行方法\nreference pointcut：表示引用其他命名的切入点，只有"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ApectJ")]),a._v("风格支持，"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Schema")]),a._v("风格不支持。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h3",{attrs:{id:"_2-4-通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-通配符"}},[a._v("#")]),a._v(" 2.4 通配符")]),a._v(" "),s("p",[a._v("Spring支持的切入点表达式的通配符如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("：匹配任何数量字符；\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("：匹配任何数量字符的重复，如在类型模式中匹配任何数量子包；而在方法参数模式中匹配任何数量参数。\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("：匹配指定类型的子类型；仅能作为后缀放在类型模式后边。\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("String")]),a._v(" 匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v("类型；\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("String 匹配java包下的任何“一级子包”下的"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v("类型；如匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("String")]),a._v("，但不匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("String")]),a._v("\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("* 匹配java包及任何子包下的任何类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("如匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("String")]),a._v("、"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Annotation")]),a._v("\njava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("*ing 匹配任何java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang包下的以ing结尾的类型；如匹配java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bingheing\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" 匹配java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang包下的任何"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Number")]),a._v("的子类型；如匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Integer")]),a._v("，也匹配"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("BigInteger")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"_2-5-逻辑条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-逻辑条件"}},[a._v("#")]),a._v(" 2.5 逻辑条件")]),a._v(" "),s("p",[a._v("Spring支持的切入点表达式的逻辑条件如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" and\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" or\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" not\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"三、源码时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、源码时序图"}},[a._v("#")]),a._v(" 三、源码时序图")]),a._v(" "),s("p",[s("code",[a._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),a._v(" "),s("p",[a._v("本节，就简单介绍下解析切入点表达式在Spring底层执行的源码时序图。解析切入点表达式在Spring底层执行的源码时序图如图24-1~24-4所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图24-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-21-001.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),s("p",[a._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);