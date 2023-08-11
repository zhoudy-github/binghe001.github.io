(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{538:function(a,s,t){"use strict";t.r(s);var n=t(7),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"《spring核心技术》第16章-注入数据型注解-深度解析-primary注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第16章-注入数据型注解-深度解析-primary注解"}},[a._v("#")]),a._v(" 《Spring核心技术》第16章-注入数据型注解：深度解析@Primary注解")]),a._v(" "),s("p",[a._v("作者：冰河\n"),s("br"),a._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("源码地址："),s("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-16",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-16"),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("本章难度")]),a._v("：★★★★☆")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("本章重点")]),a._v("：进一步学习并掌握@Primary注解指定Bean优先级的案例和流程，从源码级别彻底掌握@Primary注解在Spring底层的执行流程。")])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("本节目录如下所示：")]),a._v(" "),s("ul",[s("li",[a._v("学习指引")]),a._v(" "),s("li",[a._v("注解说明\n"),s("ul",[s("li",[a._v("注解源码")]),a._v(" "),s("li",[a._v("使用场景")])])]),a._v(" "),s("li",[a._v("使用案例")]),a._v(" "),s("li",[a._v("源码时序图\n"),s("ul",[s("li",[a._v("注册Bean的流程")]),a._v(" "),s("li",[a._v("调用Bean工厂后置处理器")]),a._v(" "),s("li",[a._v("创建Bean的流程")])])]),a._v(" "),s("li",[a._v("源码解析\n"),s("ul",[s("li",[a._v("注册Bean的流程")]),a._v(" "),s("li",[a._v("调用Bean工厂后置处理器")]),a._v(" "),s("li",[a._v("创建Bean的流程")])])]),a._v(" "),s("li",[a._v("总结")]),a._v(" "),s("li",[a._v("思考")]),a._v(" "),s("li",[a._v("VIP服务")])]),a._v(" "),s("h2",{attrs:{id:"一、学习指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),s("p",[s("code",[a._v("Spring中的@Primary注解，你真的彻底了解过吗？")])]),a._v(" "),s("p",[a._v("通过前面的文章，我们得知：使用@Autowired装配Bean对象时，如果存在多个类型相同的Bean时，可以使用@Qualifier注解明确指定装配哪个Bean。除了使用@Qualifier注解，也可以使用@Primary注解。")]),a._v(" "),s("h2",{attrs:{id:"二、注解说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[a._v("#")]),a._v(" 二、注解说明")]),a._v(" "),s("p",[s("code",[a._v("关于@Primary注解的一点点说明~~")])]),a._v(" "),s("p",[a._v("使用@Autowired装配Bean对象时，如果存在多个类型相同的Bean时，也可以使用@Primary注解指定Bean的优先级。被@Primary注解标注的Bean对象会被优先注入。")]),a._v(" "),s("h3",{attrs:{id:"_2-1-注解源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[a._v("#")]),a._v(" 2.1 注解源码")]),a._v(" "),s("p",[a._v("@Primary注解的源码详见：org.springframework.context.annotation.Primary。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n * @author Chris Beams\n * @author Juergen Hoeller\n * @since 3.0\n * @see Lazy\n * @see Bean\n * @see ComponentScan\n * @see org.springframework.stereotype.Component\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("METHOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Documented")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Primary")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v("从@Primary注解的源码可以看出，@Primary注解是从Spring3.0版本开始提供的注解，可以标注到类和方法上，并且在@Primary注解中没有提供任何属性。")]),a._v(" "),s("h3",{attrs:{id:"_2-2-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[a._v("#")]),a._v(" 2.2 使用场景")]),a._v(" "),s("p",[a._v("如果依赖的对象存在多个类型相同的Bean时，使用@Autowired注解已经无法正确完成Bean的装配工作。此时，可以使用@Qualifier注解明确指定要装配的Bean对象。也可以使用@Primary注解优先装配对应的Bean对象。")]),a._v(" "),s("h2",{attrs:{id:"三、使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[a._v("#")]),a._v(" 三、使用案例")]),a._v(" "),s("p",[s("code",[a._v("@Primary优先注入Bean的案例，我们一起实现吧~~")])]),a._v(" "),s("p",[a._v("本节，就基于@Primary注解与@Bean注解实现向Bean属性中优先注入Bean的案例，具体的实现步骤如下所示。")]),a._v(" "),s("p",[s("strong",[a._v("（1）新增PrimaryDao类")])]),a._v(" "),s("p",[a._v("PrimaryDao类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.dao.PrimaryDao。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("可以看到，PrimaryDao就是一个普通的Java接口。")]),a._v(" "),s("p",[s("strong",[a._v("（2）新增PrimaryDao1类")])]),a._v(" "),s("p",[a._v("PrimaryDao1类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.dao.impl.PrimaryDao1。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("可以看到，PrimaryDao1类是一个普通的Java类，并且实现了PrimaryDao接口。")]),a._v(" "),s("p",[s("strong",[a._v("（3）新增PrimaryDao2类")])]),a._v(" "),s("p",[a._v("PrimaryDao2类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.dao.impl.PrimaryDao2。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("可以看到，PrimaryDao2类同样是一个普通的Java类，同样实现了PrimaryDao接口。")]),a._v(" "),s("p",[s("strong",[a._v("（4）新增PrimaryService类")])]),a._v(" "),s("p",[a._v("PrimaryService类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.service.PrimaryService。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" primaryDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PrimaryService{"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"primaryDao="')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" primaryDao "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("可以看到，PrimaryService类上标注了@Service注解，说明PrimaryService类的Bean对象在IOC容器启动时就会被注入IOC容器中，在PrimaryService类中使用@Autowired注解注入了PrimaryDao类的Bean对象。")]),a._v(" "),s("p",[s("strong",[a._v("（5）新增PrimaryConfig类")])]),a._v(" "),s("p",[a._v("PrimaryConfig类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.config.PrimaryConfig。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ComponentScan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("basePackages "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"io.binghe.spring.annotation.chapter16"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryConfig")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Primary")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("primaryDao1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("primaryDao2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryDao2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("可以看到，PrimaryConfig类上标注了@Configuration注解，说明PrimaryConfig类是案例的Spring配置类，并且使用@ComponentScan注解指定了要扫描的包。在PrimaryConfig类中，使用@Bean注解向IOC容器中注入两个PrimaryDao类型的Bean，一个Bean的默认名称为primaryDao1，另一个Bean的默认名称为primaryDao2。")]),a._v(" "),s("p",[s("strong",[a._v("（6）新增PrimaryTest类")])]),a._v(" "),s("p",[a._v("PrimaryTest类的源码详见：spring-annotation-chapter-16工程下的io.binghe.spring.annotation.chapter16.PrimaryTest。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),a._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryService")]),a._v(" primaryService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("primaryService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("可以看到，在PrimaryTest类的main()方法中，从IOC容器中获取PrimaryService对象后并进行打印。")]),a._v(" "),s("p",[s("strong",[a._v("（7）运行PrimaryTest类")])]),a._v(" "),s("p",[a._v("运行PrimaryTest类的main()方法，输出的结果信息如下所示。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PrimaryService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("primaryDao"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("binghe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("chapter16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("impl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("PrimaryDao1")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@429bffaa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("从输出的结果信息可以看出，使用@Primary注解后，向PrimaryService类中优先成功注入了PrimaryDao1类的Bean对象。")]),a._v(" "),s("p",[a._v("大家可以自行在PrimaryConfig类中将@Primary注解标注到primaryDao2()方法上，运行运行PrimaryTest类的main()方法，观察输出的结果，此时向PrimaryService类中就会成功注入PrimaryDao2类的Bean对象，这里不再赘述。")]),a._v(" "),s("h2",{attrs:{id:"四、源码时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、源码时序图"}},[a._v("#")]),a._v(" 四、源码时序图")]),a._v(" "),s("p",[s("code",[a._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),a._v(" "),s("p",[a._v("本章，会从注册Bean的流程、调用Bean工厂后置处理器和创建Bean的流程三个方面分析@Primary注解的源码时序图。")]),a._v(" "),s("h3",{attrs:{id:"_4-1-注册bean的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-注册bean的流程"}},[a._v("#")]),a._v(" 4.1 注册Bean的流程")]),a._v(" "),s("p",[a._v("@Primary注解涉及到的注册Bean流程的源码时序图如图16-1所示。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图16-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-10-001.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),s("p",[a._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=r.exports}}]);