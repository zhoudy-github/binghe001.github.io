(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{565:function(a,n,s){"use strict";s.r(n);var t=s(7),e=Object(t.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第17章-生命周期型注解-深度解析-scope注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第17章-生命周期型注解-深度解析-scope注解"}},[a._v("#")]),a._v(" 《Spring核心技术》第17章-生命周期型注解：深度解析@Scope注解")]),a._v(" "),n("p",[a._v("作者：冰河\n"),n("br"),a._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),a._v(" "),n("br"),a._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),n("OutboundLink")],1),a._v(" "),n("br"),a._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),a._v(" "),n("br"),a._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-17",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-17"),n("OutboundLink")],1)]),a._v(" "),n("blockquote",[n("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),n("p",[n("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),n("hr"),a._v(" "),n("ul",[n("li",[n("p",[n("strong",[a._v("本章难度")]),a._v("：★★★★☆")])]),a._v(" "),n("li",[n("p",[n("strong",[a._v("本章重点")]),a._v("：进一步学习并掌握@Scope指定Bean对象作用范围的案例和流程，从源码级别彻底掌握@Scope注解在Spring底层的执行流程。")])])]),a._v(" "),n("hr"),a._v(" "),n("p",[a._v("本节目录如下所示：")]),a._v(" "),n("ul",[n("li",[a._v("学习指引")]),a._v(" "),n("li",[a._v("注解说明\n"),n("ul",[n("li",[a._v("注解源码")]),a._v(" "),n("li",[a._v("使用场景")])])]),a._v(" "),n("li",[a._v("使用案例\n"),n("ul",[n("li",[a._v("实现单例Bean")]),a._v(" "),n("li",[a._v("实现原型Bean")])])]),a._v(" "),n("li",[a._v("源码时序图\n"),n("ul",[n("li",[a._v("注册Bean的流程")]),a._v(" "),n("li",[a._v("调用Bean工厂后置处理器")]),a._v(" "),n("li",[a._v("获取Bean的流程")])])]),a._v(" "),n("li",[a._v("源码解析\n"),n("ul",[n("li",[a._v("注册Bean的流程")]),a._v(" "),n("li",[a._v("调用Bean工厂后置处理器")]),a._v(" "),n("li",[a._v("获取Bean的流程")])])]),a._v(" "),n("li",[a._v("总结")]),a._v(" "),n("li",[a._v("思考")]),a._v(" "),n("li",[a._v("VIP服务")])]),a._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),n("p",[n("code",[a._v("Spring中的@Scope注解，你真的彻底了解过吗？")])]),a._v(" "),n("p",[a._v("在使用Spring开发项目时，有时需要指定Bean的作用范围，此时我们又该怎么做呢？")]),a._v(" "),n("p",[n("strong",[a._v("注意：在本章中，忽略了Spring处理循环依赖的细节，后续会用单独的一章专门说明Spring的循环依赖问题。")])]),a._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[a._v("#")]),a._v(" 二、注解说明")]),a._v(" "),n("p",[n("code",[a._v("关于@Scope注解的一点点说明~~")])]),a._v(" "),n("p",[a._v("@Scope注解是Spring中提供的一个能够指定Bean的作用范围的注解，通过@Scope注解可以指定创建的Bean是单例的，还是原型的，也可以使用@Scope注解指定Bean在Web中的作用域，还可以自定义作用域。")]),a._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[a._v("#")]),a._v(" 2.1 注解源码")]),a._v(" "),n("p",[a._v("@Scope注解的源码详见：org.springframework.context.annotation.Scope。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author Mark Fisher\n * @author Chris Beams\n * @author Sam Brannen\n * @since 2.5\n * @see org.springframework.stereotype.Component\n * @see org.springframework.context.annotation.Bean\n */")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("METHOD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Documented")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@interface")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Scope")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"scopeName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * @since 4.2\n\t */")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"value"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scopeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopedProxyMode")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("proxyMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopedProxyMode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEFAULT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br")])]),n("p",[a._v("从@Scope注解的源码可以看出，@Scope注解是从Spring2.5版本开始提供的注解，并且在@Scope注解中提供了三个属性，具体含义分别如下所示。")]),a._v(" "),n("ul",[n("li",[a._v("value：表示作用范围，可以取如下值。\n"),n("ul",[n("li",[a._v("singleton：表示单例Bean，IOC容器在启动时，就会创建Bean对象。如果标注了@Lazy注解，IOC容器在启动时，就不会创建Bean对象，会在第一次从IOC容器中获取Bean对象时，创建Bean对象。后续每次从IOC容器中获取的都是同一个Bean对象，同时，IOC容器会接管单例Bean对象的生命周期。")]),a._v(" "),n("li",[a._v("prototype：表示原型Bean。IOC容器在启动时，不会创建Bean对象，每次从IOC容器中获取Bean对象时，都会创建一个新的Bean对象。并且@Lazy注解对原型Bean不起作用，同时，IOC容器不会接管原型Bean对象的生命周期")]),a._v(" "),n("li",[a._v("request：表示作用域是当前请求范围。")]),a._v(" "),n("li",[a._v("session：表示作用域是当前会话范围。")]),a._v(" "),n("li",[a._v("application：表示作用域是当前应用范围。")])])]),a._v(" "),n("li",[a._v("scopeName：Spring4.2版本开始新增的属性，作用与value属性相同。")]),a._v(" "),n("li",[a._v("proxyMode：指定Bean对象使用的代理方式，可以取如下值。\n"),n("ul",[n("li",[a._v("DEFAULT：默认值，作用与NO相同。")]),a._v(" "),n("li",[a._v("NO：不使用代理。")]),a._v(" "),n("li",[a._v("INTERFACES：使用JDK基于接口的代理。")]),a._v(" "),n("li",[a._v("TARGET_CLASS：使用CGLIB基于目标类的子类创建代理对象。")])])])]),a._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[a._v("#")]),a._v(" 2.2 使用场景")]),a._v(" "),n("p",[a._v("大部分场景下，使用Spring的单例Bean就足够了，Spring默认的类型也是单例Bean。单例Bean能够保证在Spring中不会重复创建相同的Bean对象，对性能有所提高。但是，如果单例Bean中存在非静态成员变量，可能会产生线程安全问题。如果设置为原型Bean，则每次从IOC容器中获取Bean对象时，都会重新生成一个新的Bean对象，每次生成新的Bean对象多少都会影响程序的性能。")]),a._v(" "),n("p",[a._v("早期开发中使用比较多的Struts2框架中的Action，由于其模型驱动和OGNL表达式的原因，就必须将Spring中的Bean配置成原型Bean。")]),a._v(" "),n("h2",{attrs:{id:"三、使用案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[a._v("#")]),a._v(" 三、使用案例")]),a._v(" "),n("p",[n("code",[a._v("@Scope注解指定Bean作用范围的案例，我们一起实现吧~~")])]),a._v(" "),n("p",[a._v("本章，就基于@Scope注解实现指定Bean的作用范围的案例，总体上会从单例Bean和原型Bean两个作用范围进行说明。")]),a._v(" "),n("p",[n("strong",[a._v("注意：本章的案例和源码解析都是基于@Scope注解标注到方法上，结合@Bean注解进行分析的。")])]),a._v(" "),n("h3",{attrs:{id:"_3-1-实现单例bean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-实现单例bean"}},[a._v("#")]),a._v(" 3.1 实现单例Bean")]),a._v(" "),n("p",[a._v("本节，主要基于@Scope注解实现单例Bean，具体实现步骤如下所示。")]),a._v(" "),n("p",[n("strong",[a._v("（1）新增ScopeBean类")])]),a._v(" "),n("p",[a._v("ScopeBean类的源码详见：spring-annotation-chapter-17工程下的io.binghe.spring.annotation.chapter17.bean.ScopeBean。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"执行ScopeBean类的构造方法..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("可以看到，ScopeBean类就是一个普通的Java类，并且在构造方法中打印了日志。")]),a._v(" "),n("p",[n("strong",[a._v("（2）新增ScopeConfig类")])]),a._v(" "),n("p",[a._v("ScopeConfig类的源码详见：spring-annotation-chapter-17工程下的io.binghe.spring.annotation.chapter17.config.ScopeConfig。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeConfig")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"singleton"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("可以看到，在ScopeConfig类上标注了@Configuration注解，说明ScopeConfig类是案例程序的配置类。在ScopeConfig类中的scopeBean()方法上使用@Bean注解向IOC容器中注入ScopeBean类的Bean对象。同时，在scopeBean()方法上，使用 @Scope注解指定了Bean的作用范围为singleton，也就是单例Bean。此处，由于Spring默认就是单例Bean，所以，也可以将@Scope注解省略。")]),a._v(" "),n("p",[n("strong",[a._v("（3）新增ScopeTest类")])]),a._v(" "),n("p",[a._v("ScopeTest类的源码详见：spring-annotation-chapter-17工程下的io.binghe.spring.annotation.chapter17.ScopeTest。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeTest")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"创建IOC容器开始..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),a._v(" context "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"创建IOC容器结束..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"从IOC容器中第一次获取Bean对象开始..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),a._v(" scopeBean "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("scopeBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"从IOC容器中第一次获取Bean对象结束..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"从IOC容器中第二次获取Bean对象开始..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        scopeBean "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("scopeBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"从IOC容器中第二次获取Bean对象结束..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br")])]),n("p",[a._v("可以看到，在ScopeTest类中，首先创建了IOC容器，随后连续两次从IOC容器中获取ScopeBean类的Bean对象，并打印对应的日志信息。")]),a._v(" "),n("p",[n("strong",[a._v("（4）运行ScopeTest类")])]),a._v(" "),n("p",[a._v("运行ScopeTest类的main()方法，输出的结果信息如下所示。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("创建IOC容器开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n执行ScopeBean类的构造方法"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n创建IOC容器结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n从IOC容器中第一次获取Bean对象开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nio.binghe.spring.annotation.chapter17.bean.ScopeBean@11fc564b\n从IOC容器中第一次获取Bean对象结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n从IOC容器中第二次获取Bean对象开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nio.binghe.spring.annotation.chapter17.bean.ScopeBean@11fc564b\n从IOC容器中第二次获取Bean对象结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("从输出的结果信息可以看出，Spring在IOC容器启动时就会创建单例Bean，随后每次从IOC容器中获取的都是同一个Bean对象。")]),a._v(" "),n("h3",{attrs:{id:"_3-2-实现原型bean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-实现原型bean"}},[a._v("#")]),a._v(" 3.2 实现原型Bean")]),a._v(" "),n("p",[a._v("本节实现原型Bean的步骤比较简单，就是在3.1节的基础上进行改造。具体步骤如下所示。")]),a._v(" "),n("p",[n("strong",[a._v("（1）修改ScopeConfig类")])]),a._v(" "),n("p",[a._v("将ScopeConfig类中的scopeBean()方法上的@Scope注解的value属性值修改为prototype，如下所示。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Bean")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Scope")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"prototype"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScopeBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("p",[a._v("此时，就会在Spring中创建ScopeBean类型的原型Bean。")]),a._v(" "),n("p",[n("strong",[a._v("（2）运行ScopeTest类")])]),a._v(" "),n("p",[a._v("运行ScopeTest类的main()方法，输出的结果信息如下所示。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("创建IOC容器开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n创建IOC容器结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n从IOC容器中第一次获取Bean对象开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n执行ScopeBean类的构造方法"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nio.binghe.spring.annotation.chapter17.bean.ScopeBean@fa36558\n从IOC容器中第一次获取Bean对象结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n从IOC容器中第二次获取Bean对象开始"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n执行ScopeBean类的构造方法"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nio.binghe.spring.annotation.chapter17.bean.ScopeBean@672872e1\n从IOC容器中第二次获取Bean对象结束"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("从输出的结果信息可以看出，Spring在IOC容器启动时，并不会创建单例Bean，而是从IOC容器中获取Bean对象时，才会创建Bean对象，并且每次从IOC容器中获取Bean对象时，都会创建新的Bean对象。")]),a._v(" "),n("h2",{attrs:{id:"四、源码时序图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、源码时序图"}},[a._v("#")]),a._v(" 四、源码时序图")]),a._v(" "),n("p",[n("code",[a._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),a._v(" "),n("p",[a._v("本章，会从注册Bean的流程、调用Bean工厂后置处理器和获取Bean的流程三个方面分析@Scope注解的源码时序图。")]),a._v(" "),n("h3",{attrs:{id:"_4-1-注册bean的流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-注册bean的流程"}},[a._v("#")]),a._v(" 4.1 注册Bean的流程")]),a._v(" "),n("p",[a._v("@Scope注解涉及到的注册Bean流程的源码时序图如图17-1所示。")]),a._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"图17-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-12-001.png",loading:"lazy"}})]),a._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),n("p",[a._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),n("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=e.exports}}]);