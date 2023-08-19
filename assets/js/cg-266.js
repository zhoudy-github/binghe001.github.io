(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{563:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第15章-注入数据型注解-深度解析-inject注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第15章-注入数据型注解-深度解析-inject注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第15章-注入数据型注解：深度解析@Inject注解")]),t._v(" "),n("p",[t._v("作者：冰河\n"),n("br"),t._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-15",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-15"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),n("p",[n("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@Inject注解注入Bean的案例和流程，从源码级别彻底掌握@Inject注解在Spring底层的执行流程。")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("本节目录如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("学习指引")]),t._v(" "),n("li",[t._v("注解说明\n"),n("ul",[n("li",[t._v("注解源码")]),t._v(" "),n("li",[t._v("使用场景")])])]),t._v(" "),n("li",[t._v("使用案例")]),t._v(" "),n("li",[t._v("源码时序图")]),t._v(" "),n("li",[t._v("源码解析")]),t._v(" "),n("li",[t._v("总结")]),t._v(" "),n("li",[t._v("思考")]),t._v(" "),n("li",[t._v("VIP服务")])]),t._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),n("p",[n("code",[t._v("Spring中的@Inject注解，你真的彻底了解过吗？")])]),t._v(" "),n("p",[t._v("@Inject注解是JSR330规范中提供的注解，可以将Bean装配到类的方法，构造方法和字段中，也可以配合@Qualifier注解使用。")]),t._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),n("p",[n("code",[t._v("关于@Inject注解的一点点说明~~")])]),t._v(" "),n("p",[t._v("@Inject注解是JSR330规范中提供的注解，在@Inject注解中不提供任何属性，可以配合@Qualifier注解使用。也就是说，存在多个类型相同的Bean时，通过@Qualifier注解可以明确指定注入哪个Bean。")]),t._v(" "),n("p",[t._v("@Inject注解与@Autowired的区别：")]),t._v(" "),n("p",[t._v("（1）@Inject是JSR330规范实现的，@Autowired是spring自带的。")]),t._v(" "),n("p",[t._v("（2）@Autowired、@Inject用法基本一样，不同的是@Autowired有一个required属性。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),n("p",[t._v("@Inject注解的源码详见：javax.inject.Inject。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSTRUCTOR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIELD")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Inject")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("可以看到，@Inject注解并没有提供任何属性，并且@Inject注解可以标注到方法、构造方法和字段上。")]),t._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),n("p",[t._v("在一定程度上，@Inject注解和@Autowired注解的使用场景基本相同，如果需要将Bean装配到类中的方法、构造方法和字段中，可以使用@Inject注解实现。")]),t._v(" "),n("h2",{attrs:{id:"三、使用案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[t._v("#")]),t._v(" 三、使用案例")]),t._v(" "),n("p",[n("code",[t._v("@Inject的实现案例，我们一起实现吧~~")])]),t._v(" "),n("p",[t._v("本节，就基于@Inject注解实现向Bean属性中赋值的案例，具体的实现步骤如下所示。")]),t._v(" "),n("p",[n("strong",[t._v("（1）新增InjectDao类")])]),t._v(" "),n("p",[t._v("InjectDao类的源码详见：spring-annotation-chapter-15工程下的io.binghe.spring.annotation.chapter15.dao.InjectDao。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectDao")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("可以看到，InjectDao类就是一个普通的dao类。")]),t._v(" "),n("p",[n("strong",[t._v("（2）新增InjectService类")])]),t._v(" "),n("p",[t._v("InjectService类的源码详见：spring-annotation-chapter-15工程下的io.binghe.spring.annotation.chapter15.service.InjectService。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectService")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectDao")]),t._v(" injectDao"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"InjectService{"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"injectDao="')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" injectDao "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token char"}},[t._v("'}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("可以看到，InjectService类是service层的实现类，并且在InjectService类中使用@Inject注解向injectDao成员变量中装配InjectDao类型的Bean对象。")]),t._v(" "),n("p",[n("strong",[t._v("（3）新增InjectConfig类")])]),t._v(" "),n("p",[t._v("InjectConfig类的源码详见：spring-annotation-chapter-15工程下的io.binghe.spring.annotation.chapter15.config.InjectConfig。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePackages "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.binghe.spring.annotation.chapter15"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectConfig")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("可以看到，InjectConfig类上标注了@Configuration注解，说明InjectConfig类是案例的配置类，并且在InjectConfig类上使用@ComponentScan注解指定了要扫描的包名。")]),t._v(" "),n("p",[n("strong",[t._v("（4）新增InjectTest类")])]),t._v(" "),n("p",[t._v("InjectTest类的源码详见：spring-annotation-chapter-15工程下的io.binghe.spring.annotation.chapter15.InjectTest。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectTest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),t._v(" context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectService")]),t._v(" injectService "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InjectService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("injectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("可以看到，在InjectTest类的main()方法中，从IOC容器中获取InjectService对象并打印。")]),t._v(" "),n("p",[n("strong",[t._v("（5）运行InjectTest类")])]),t._v(" "),n("p",[t._v("运行InjectTest类的main()方法，输出的结果信息如下所示。")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("InjectService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("injectDao"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("io.binghe.spring.annotation.chapter15.dao.InjectDao@a3d8174"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("可以看到，通过@Inject注解成功向InjectService类的injectDao成员变量中装配了Bean对象。")]),t._v(" "),n("h2",{attrs:{id:"四、源码时序图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、源码时序图"}},[t._v("#")]),t._v(" 四、源码时序图")]),t._v(" "),n("p",[n("code",[t._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),t._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),n("p",[t._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),n("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=e.exports}}]);