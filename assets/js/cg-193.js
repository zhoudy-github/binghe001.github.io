(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{489:function(a,s,t){"use strict";t.r(s);var n=t(7),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"《spring核心技术》第13章-注入数据型注解-深度解析-qualifier注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第13章-注入数据型注解-深度解析-qualifier注解"}},[a._v("#")]),a._v(" 《Spring核心技术》第13章-注入数据型注解：深度解析@Qualifier注解")]),a._v(" "),s("p",[a._v("作者：冰河\n"),s("br"),a._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),a._v(" "),s("br"),a._v("源码地址："),s("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-13",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-13"),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("本章难度")]),a._v("：★★★★☆")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("本章重点")]),a._v("：进一步学习并掌握@Qualifier注解指定注入Bean的案例和流程，从源码级别彻底掌握@Qualifier注解在Spring底层的执行流程。")])])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("本节目录如下所示：")]),a._v(" "),s("ul",[s("li",[a._v("学习指引")]),a._v(" "),s("li",[a._v("注解说明\n"),s("ul",[s("li",[a._v("注解源码")]),a._v(" "),s("li",[a._v("使用场景")])])]),a._v(" "),s("li",[a._v("使用案例")]),a._v(" "),s("li",[a._v("源码时序图")]),a._v(" "),s("li",[a._v("源码解析")]),a._v(" "),s("li",[a._v("总结")]),a._v(" "),s("li",[a._v("思考")]),a._v(" "),s("li",[a._v("VIP服务")])]),a._v(" "),s("h2",{attrs:{id:"一、学习指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),s("p",[s("code",[a._v("Spring中的@Qualifier注解，你真的彻底了解过吗？")])]),a._v(" "),s("p",[a._v("如果Spring中存在多个类型相同但名称不同的Bean时，使用@Autowired注解向类的构造方法、方法、参数、字段中注入Bean对象时，如果需要向类的构造方法、方法、参数、字段中注入特定的Bean对象，就可以使用@Qualifier注解指定Bean的名称。")]),a._v(" "),s("h2",{attrs:{id:"二、注解说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[a._v("#")]),a._v(" 二、注解说明")]),a._v(" "),s("p",[s("code",[a._v("关于@Qualifier注解的一点点说明~~")])]),a._v(" "),s("p",[a._v("如果Spring中存在多个类型相同但名称不同的Bean时，使用@Autowired注解向类的构造方法、方法、参数、字段中注入Bean对象时，首先会根据Bean的类型注入，如果存在多个类型相同的Bean时，会根据Bean的名称注入，如果找不到对应名称的Bean时，就会抛出异常。此时，就可以通过@Qualifier注解明确指定要注入的Bean。")]),a._v(" "),s("h3",{attrs:{id:"_2-1-注解源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[a._v("#")]),a._v(" 2.1 注解源码")]),a._v(" "),s("p",[a._v("@Qualifier注解的源码详见：org.springframework.beans.factory.annotation.Qualifier。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author Mark Fisher\n * @author Juergen Hoeller\n * @since 2.5\n * @see Autowired\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("FIELD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("METHOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PARAMETER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ANNOTATION_TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Inherited")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Documented")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Qualifier")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("从@Qualifier注解的源码可以看出，@Qualifier注解是从Spring 2.5版本开始提供的注解，可以标注到字段、方法、参数、类和其他注解上。在@Qualifier注解中只提供了一个String类型的value属性，具体含义如下所示。")]),a._v(" "),s("ul",[s("li",[a._v("value：表示Bean的唯一标识。当使用Spring自动按照类型注入时，存在多个类型相同的Bean的时候，就可以使用此注解来明确注入哪个bean对象。")])]),a._v(" "),s("p",[s("strong",[a._v("注意：@Qualifier注解通常会和@Autowired注解一起使用。")])]),a._v(" "),s("h3",{attrs:{id:"_2-2-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[a._v("#")]),a._v(" 2.2 使用场景")]),a._v(" "),s("p",[a._v("在项目开发过程中，有这样一个场景会经常使用到@Qualifier注解。比如在项目中集成了多个消息中间件，包含：RocketMQ、Kafka、RabbitMQ和ActiveMQ，对外提供统一发送消息的接口，并且基于RocketMQ、Kafka、RabbitMQ和ActiveMQ实现的消息发送类上分别标注了不同的Bean名称。如果在业务系统中需要指定使用某种消息中间件来发送消息时，就需要使用@Qualifier注解明确指定Bean的名称。")]),a._v(" "),s("p",[a._v("总之，如果Spring中存在多个类型相同但名称不同的Bean时，使用@Autowired注解向类的构造方法、方法、参数、字段中注入Bean对象时，首先会根据Bean的类型注入，如果存在多个类型相同的Bean时，会根据Bean的名称注入，如果找不到对应名称的Bean时，就可以通过@Qualifier注解明确指定要注入的Bean。")]),a._v(" "),s("h2",{attrs:{id:"三、使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[a._v("#")]),a._v(" 三、使用案例")]),a._v(" "),s("p",[s("code",[a._v("@Qualifier的使用案例，我们一起实现吧~~")])]),a._v(" "),s("p",[a._v("本节，就简单介绍下当Spring中存在多个类型相同的Bean时，使用@Qualifier注解明确指定注入的Bean的案例。在案例的实现过程中，采用简单的MVC架构模式实现。具体案例实现步骤如下所示。")]),a._v(" "),s("p",[s("strong",[a._v("（1）新增QualifierDao接口")])]),a._v(" "),s("p",[a._v("QualifierDao接口的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.dao.QualifierDao。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("可以看到，QualifierDao接口就是一个简单的Java接口。")]),a._v(" "),s("p",[s("strong",[a._v("（2）新增QualifierDao1类")])]),a._v(" "),s("p",[a._v("QualifierDao1类的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.dao.impl.QualifierDao1。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifierDao1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"执行了QualifierDao1的构造方法..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("可以看到，QualifierDao1类实现了QualifierDao接口，并使用@Repository注解执行了Bean的名称为qualifierDao1。")]),a._v(" "),s("p",[s("strong",[a._v("（3）新增QualifierDao2类")])]),a._v(" "),s("p",[a._v("QualifierDao2类的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.dao.impl.QualifierDao2。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifierDao2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"执行了QualifierDao2的构造方法..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("可以看到，QualifierDao2类实现了QualifierDao接口，并使用@Repository注解执行了Bean的名称为qualifierDao2。")]),a._v(" "),s("p",[s("strong",[a._v("（4）新增QualifierService类")])]),a._v(" "),s("p",[a._v("QualifierService类的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.service.QualifierService。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierService")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Autowired")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Qualifier")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifierDao1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierDao")]),a._v(" qualifierDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"QualifierService{"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifierDao="')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" qualifierDao "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("可以看到，在QualifierService类上标注了@Service注解，当IOC容器启动扫描到QualifierService类时，就会将QualifierService类的Bean对象注入IOC容器。在QualifierService类中，使用@Autowired注解和 @Qualifier注解注入QualifierDao类的Bean对象。并且使用@Qualifier注解明确指定注入名称为qualifierDao1的QualifierDao对象。")]),a._v(" "),s("p",[s("strong",[a._v("（5）新增QualifierConfig类")])]),a._v(" "),s("p",[a._v("QualifierConfig类的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.config.QualifierConfig。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Configuration")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ComponentScan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"io.binghe.spring.annotation.chapter13"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierConfig")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("可以看到，在QualifierConfig类上标注了@Configuration注解，说明QualifierConfig类是Spring的配置类，同时在QualifierConfig类上使用@ComponentScan注解指定要扫描的包是io.binghe.spring.annotation.chapter13。")]),a._v(" "),s("p",[s("strong",[a._v("（6）新增QualifierTest类")])]),a._v(" "),s("p",[a._v("QualifierTest类的源码详见：spring-annotation-chapter-13工程下的io.binghe.spring.annotation.chapter13.QualifierTest。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),a._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierService")]),a._v(" qualifierService "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("QualifierService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifierService===>>> "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" qualifierService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("可以看到，在QualifierTest类中的main()方法中，会从IOC容器中获取QualifierService类的Bean对象并进行打印。")]),a._v(" "),s("p",[s("strong",[a._v("（7）运行QualifierTest类")])]),a._v(" "),s("p",[a._v("运行QualifierTest类的main()方法，输出的结果信息如下所示。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("执行了QualifierDao1的构造方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n执行了QualifierDao2的构造方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("qualifierService")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" QualifierService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("qualifierDao"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("io.binghe.spring.annotation.chapter13.dao.impl.QualifierDao1@6631f5ca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("从输出的结果信息中可以看到，执行了QualifierDao1类和QualifierDao2类的构造方法，并向QualifierService类中使用@Qualifier注解指定注入了QualifierDao1类的Bean对象。")]),a._v(" "),s("p",[a._v("另外，大家可以自行将QualifierService类中@Qualifier注解中的值修改为qualifierDao2，并测试结果，这里不再赘述。")]),a._v(" "),s("p",[s("strong",[a._v("说明：当存在多个类型相同的Bean时，可以使用@Qualifier注解明确指定要注入的Bean。")])]),a._v(" "),s("h2",{attrs:{id:"四、源码时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、源码时序图"}},[a._v("#")]),a._v(" 四、源码时序图")]),a._v(" "),s("p",[s("code",[a._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),a._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),s("p",[a._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),s("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);