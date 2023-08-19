(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{562:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第14章-注入数据型注解-深度解析-resource注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第14章-注入数据型注解-深度解析-resource注解"}},[s._v("#")]),s._v(" 《Spring核心技术》第14章-注入数据型注解：深度解析@Resource注解")]),s._v(" "),a("p",[s._v("作者：冰河\n"),a("br"),s._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-14",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-14"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("本章难度")]),s._v("：★★★★☆")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("本章重点")]),s._v("：进一步学习并掌握@Resource注解注入Bean的案例和流程，从源码级别彻底掌握@Resource注解在Spring底层的执行流程。")])])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("本节目录如下所示：")]),s._v(" "),a("ul",[a("li",[s._v("学习指引")]),s._v(" "),a("li",[s._v("注解说明\n"),a("ul",[a("li",[s._v("注解源码")]),s._v(" "),a("li",[s._v("使用场景")])])]),s._v(" "),a("li",[s._v("使用案例")]),s._v(" "),a("li",[s._v("源码时序图\n"),a("ul",[a("li",[s._v("解析并获取@Resource修饰的属性")]),s._v(" "),a("li",[s._v("为@Resource修饰属性赋值")])])]),s._v(" "),a("li",[s._v("源码解析\n"),a("ul",[a("li",[s._v("解析并获取@Resource修饰的属性")]),s._v(" "),a("li",[s._v("为@Resource修饰属性赋值")])])]),s._v(" "),a("li",[s._v("总结")]),s._v(" "),a("li",[s._v("思考")])]),s._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[s._v("#")]),s._v(" 一、学习指引")]),s._v(" "),a("p",[a("code",[s._v("Spring中的@Resource注解，你真的彻底了解过吗？")])]),s._v(" "),a("p",[s._v("@Resource注解是JSR250规范中提供的注解，主要作用就是通过JNDI技术查找依赖的组件并注入到类、字段和方法中来。")]),s._v(" "),a("p",[a("strong",[s._v("注意：在Spring6中，需要额外导入@Resource注解所在的包")])]),s._v(" "),a("h2",{attrs:{id:"二、注解说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[s._v("#")]),s._v(" 二、注解说明")]),s._v(" "),a("p",[a("code",[s._v("关于@Resource注解的一点点说明~~")])]),s._v(" "),a("p",[s._v("@Resource注解是JSR250规范中提供的注解，主要作用就是通过JNDI技术查找依赖的组件并注入到类、字段和方法中来。默认情况下，不指定注解的任何属性时，会默认按照byName的方式装配Bean对象。如果指定了name属性，没有指定type属性，则采用byName的方式装配Bean对象。如果没有指定name属性，而是指定了type属性，则按照byType的方式装配bean对象。当同时指定了type属性和name属性，则两个属性都会校验，任何一个不符合条件就会报错。")]),s._v(" "),a("p",[s._v("当存在多个类型相同的Bean时，可以指定@Resource注解的name属性明确指定装配哪个Bean对象。相当于@Autowired注解与@Qualifier注解的组合。@Resource注解与@Qualifier注解也可以搭配使用，通过@Qualifier注解明确指定装配哪个Bean。")]),s._v(" "),a("p",[s._v("@Resource注解与@Autowired的主要区别如下所示。")]),s._v(" "),a("p",[s._v("（1）@Resource注解是JSR250规范中提供的注解，如果使用的JDK8版本，则无需额外导入依赖，如果使用的JDK版本低于8或者高于11，则需要额外导入依赖。@Autowired注解是Spring框架提供的注解。")]),s._v(" "),a("p",[s._v("（2）@Resource注解默认通过byName的方式装配Bean，找不到Bean的话，就通过byType的方式装配Bean。@Autowired注解默认根据byType的方式装配Bean，如果需要根据名称装配Bean，则需要结合@Qualifier注解一起使用。")]),s._v(" "),a("p",[s._v("（3）@Resource注解标注到类、字段和方法上。@Autowired注解标注到构造方法、方法、参数、字段、其他注解上。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-注解源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[s._v("#")]),s._v(" 2.1 注解源码")]),s._v(" "),a("p",[s._v("在Spring6中，使用@Resource注解需要额外在Maven中加入如下依赖。")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jakarta.annotation"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jakarta.annotation-api"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.1.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("@Resource注解的源码详见：jakarta.annotation.Resource。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Repeatable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Resource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthenticationType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTAINER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("APPLICATION")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthenticationType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("authenticationType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AuthenticationType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CONTAINER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shareable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mappedName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("@Resource注解中属性的具体含义如下所示。")]),s._v(" "),a("ul",[a("li",[s._v("name：资源的JNDI名称，装配指定名称的Bean。")]),s._v(" "),a("li",[s._v("type：装配指定类型的Bean。")]),s._v(" "),a("li",[s._v("lookup：引用指向的资源名称，可以使用JNDI名称指向任何兼容的资源。")]),s._v(" "),a("li",[s._v("AuthenticationType：指定身份验证类型。")]),s._v(" "),a("li",[s._v("shareable：指定当前Bean是否可以在多个组件之间共享。")]),s._v(" "),a("li",[s._v("mappedName：指定资源的映射名称。")]),s._v(" "),a("li",[s._v("description：指定资源的描述。")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[s._v("#")]),s._v(" 2.2 使用场景")]),s._v(" "),a("p",[s._v("@Resource通过名称装配Bean对象时，相当于@Autowired注解+@Qualifier注解。所以，当在IOC容器中存在多个类型相同的Bean时，就可以使用@Resource注解或者@Autowired注解+@Qualifier注解，明确指定要装配的Bean的名称。")]),s._v(" "),a("p",[a("strong",[s._v("注意：@Resource注解也可以和@Qualifier注解搭配使用。")])]),s._v(" "),a("h2",{attrs:{id:"三、使用案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[s._v("#")]),s._v(" 三、使用案例")]),s._v(" "),a("p",[a("code",[s._v("@Resource的使用案例，我们一起实现吧~~")])]),s._v(" "),a("p",[s._v("本节，就简单介绍下当Spring中存在多个类型相同的Bean时，使用@Resource注解明确指定注入的Bean的案例。在案例的实现过程中，同样采用简单的MVC架构模式实现。具体案例实现步骤如下所示。")]),s._v(" "),a("p",[a("strong",[s._v("（1）新增ResourceDao接口")])]),s._v(" "),a("p",[s._v("ResourceDao接口的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.dao.ResourceDao。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可以看到，ResourceDao接口就是普通的dao接口。")]),s._v(" "),a("p",[a("strong",[s._v("（2）新增ResourceDao1类")])]),s._v(" "),a("p",[s._v("ResourceDao1类的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.dao.impl.ResourceDao1。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resourceDao1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到，ResourceDao1类实现了ResourceDao接口，并在类上通过@Repository注解指定Bean的名称为resourceDao1。")]),s._v(" "),a("p",[a("strong",[s._v("（3）新增ResourceDao2类")])]),s._v(" "),a("p",[s._v("ResourceDao2类的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.dao.impl.ResourceDao2。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resourceDao2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到，ResourceDao2类实现了ResourceDao接口，并在类上通过@Repository注解指定Bean的名称为resourceDao2。")]),s._v(" "),a("p",[a("strong",[s._v("（4）新增ResourceService类")])]),s._v(" "),a("p",[s._v("ResourceService类的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.service.ResourceService。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceService")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resourceDao1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceDao")]),s._v(" resourceDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ResourceService{"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"resourceDao="')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" resourceDao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("可以看到，在ResourceService类中通过@Resource注解向成员变量resourceDao中注入了名称为resourceDao1的Bean。")]),s._v(" "),a("p",[a("strong",[s._v("（5）新增ResourceConfig类")])]),s._v(" "),a("p",[s._v("ResourceConfig类的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.config.ResourceConfig。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ComponentScan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.binghe.spring.annotation.chapter14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以看到，在ResourceConfig类上标注了@Configuration注解，说明ResourceConfig类是Spring的配置类。并且使用@ComponentScan注解指定了要扫描的包名。")]),s._v(" "),a("p",[a("strong",[s._v("（6）新增ResourceTest类")])]),s._v(" "),a("p",[s._v("ResourceTest类的源码详见：spring-annotation-chapter-14工程下的io.binghe.spring.annotation.chapter14.ResourceTest。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceTest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnnotationConfigApplicationContext")]),s._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AnnotationConfigApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceService")]),s._v(" resourceService "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ResourceService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resourceService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("可以看到，在ResourceTest类的main()方法中，从IOC容器中获取ResourceService对象，并进行打印。")]),s._v(" "),a("p",[a("strong",[s._v("（7）运行ResourceTest类")])]),s._v(" "),a("p",[s._v("运行ResourceTest类的main()方法，输出的结果信息如下所示。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ResourceService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("resourceDao"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("io.binghe.spring.annotation.chapter14.dao.impl.ResourceDao1@ea6147e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("从输出的结果信息可以看出，正确打印了ResourceService中装配的ResourceDao1类型的Bean对象。")]),s._v(" "),a("p",[a("strong",[s._v("说明：当存在多个类型相同的Bean时，可以通过@Resource注解明确指定要注入的Bean。")])]),s._v(" "),a("h2",{attrs:{id:"四、源码时序图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、源码时序图"}},[s._v("#")]),s._v(" 四、源码时序图")]),s._v(" "),a("p",[a("code",[s._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),s._v(" "),a("p",[s._v("本节，就以源码时序图的方式，直观的感受下@Resource注解在Spring源码层面的执行流程。本节，会从解析并获取 @Resource修饰的属性、为@Resource修饰属性赋值两个方面分析源码时序图。")]),s._v(" "),a("h3",{attrs:{id:"_4-1-解析并获取-resource修饰的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-解析并获取-resource修饰的属性"}},[s._v("#")]),s._v(" 4.1 解析并获取@Resource修饰的属性")]),s._v(" "),a("p",[s._v("解析并获取@Resource修饰的属性的源码时序图总体上与解析并获取@Autowired修饰的属性的源码时序图相同，只是部分细节略有差异。本节，就简单介绍下解析并获取@Resource修饰的属性的源码时序图，整体如图14-1~14-2所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图14-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-08-001.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[s._v("#")]),s._v(" 查看完整文章")]),s._v(" "),a("p",[s._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);