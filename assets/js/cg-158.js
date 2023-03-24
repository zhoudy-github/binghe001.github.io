(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{449:function(a,t,n){"use strict";n.r(t);var s=n(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《spring核心技术》第28章-enableloadtimeweaving注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第28章-enableloadtimeweaving注解"}},[a._v("#")]),a._v(" 《Spring核心技术》第28章：@EnableLoadTimeWeaving注解")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("源码地址："),t("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-28",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-28"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("hr"),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("本章难度")]),a._v("：★★★☆☆")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("本章重点")]),a._v("：进一步学习并掌握@EnableLoadTimeWeaving注解切换不同场景实现类增强的案例和流程。")])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("本章目录如下所示：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("学习指引")])]),a._v(" "),t("li",[t("p",[a._v("注解说明")]),a._v(" "),t("ul",[t("li",[a._v("注解源码")]),a._v(" "),t("li",[a._v("使用场景")])])]),a._v(" "),t("li",[t("p",[a._v("使用案例")])]),a._v(" "),t("li",[t("p",[a._v("总结")])]),a._v(" "),t("li",[t("p",[a._v("思考")])]),a._v(" "),t("li",[t("p",[a._v("VIP服务")])])]),a._v(" "),t("h2",{attrs:{id:"一、学习指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),t("p",[t("code",[a._v("在Spring AOP中，你了解过@EnableLoadTimeWeaving注解吗？")])]),a._v(" "),t("p",[a._v("Spring中有这么一个注解，可以实现切换不同场景下实现目标类的增强，这个注解就是@EnableLoadTimeWeaving注解。很多工作多年的开发人员对于@EnableLoadTimeWeaving注解都不是很了解。本章，我们就一起来聊聊@EnableLoadTimeWeaving注解。")]),a._v(" "),t("h2",{attrs:{id:"二、注解说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[a._v("#")]),a._v(" 二、注解说明")]),a._v(" "),t("p",[t("code",[a._v("关于@EnableLoadTimeWeaving注解的一点点说明~~")])]),a._v(" "),t("p",[a._v("Spring默认是在编译时，将切面类织入到Java类中，那你有没有想过怎么让切面类在类加载的时候就织入到Java类中？")]),a._v(" "),t("h3",{attrs:{id:"_2-1-注解源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[a._v("#")]),a._v(" 2.1 注解源码")]),a._v(" "),t("p",[a._v("@EnableLoadTimeWeaving注解主要用于切换不同场景下实现类的增强功能，源码详见：org.springframework.context.annotation.EnableLoadTimeWeaving。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * @author Chris Beams\n * @since 3.1\n * @see LoadTimeWeaver\n * @see DefaultContextLoadTimeWeaver\n * @see org.aspectj.weaver.loadtime.ClassPreProcessorAgentAdapter\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Target")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElementType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("TYPE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Retention")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RetentionPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("RUNTIME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Documented")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LoadTimeWeavingConfiguration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EnableLoadTimeWeaving")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AspectJWeaving")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("aspectjWeaving")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AspectJWeaving")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AUTODETECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("enum")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AspectJWeaving")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("ENABLED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DISABLED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("AUTODETECT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])]),t("p",[a._v("从@EnableLoadTimeWeaving注解的源码可以看出，@EnableLoadTimeWeaving注解是从Spring3.1版本开始提供的注解，开启@EnableLoadTimeWeaving注解只能标注到类上。在@EnableLoadTimeWeaving注解中提供了一个AspectJWeaving枚举类型的aspectjWeaving属性。具体含义如下所示。")]),a._v(" "),t("ul",[t("li",[a._v("aspectjWeaving：是否开启LTW的支持。具体取值如下所示。\n"),t("ul",[t("li",[a._v("ENABLED：开启LTW支持。")]),a._v(" "),t("li",[a._v("DISABLED：不开启LTW支持。")]),a._v(" "),t("li",[a._v("AUTODETECT：检测类路径下的META-INF目录下是否存在aop.xml文件，如果存在，则开启LTW支持，否则，不开启LTW支持。")])])])]),a._v(" "),t("h3",{attrs:{id:"_2-2-使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[a._v("#")]),a._v(" 2.2 使用场景")]),a._v(" "),t("p",[a._v("在Java 语言中，从织入切面的方式上来看，存在三种织入方式：编译期织入、类加载期织入和运行期织入。编译期织入是指在Java编译期，采用特殊的编译器，将切面织入到Java类中；而类加载期织入则指通过特殊的类加载器，在类字节码加载到JVM时，织入切\n面；运行期织入则是采用CGLib工具或JDK动态代理进行切面的织入。")]),a._v(" "),t("p",[a._v("AspectJ提供了两种切面织入方式，第一种通过特殊编译器，在编译期，将AspectJ语言编写的切面类织入到Java类中，可以通过一个Ant或Maven任务来完成这个操作；第二种方式是类加载期织入，也简称为LTW（Load Time Weaving）。")]),a._v(" "),t("blockquote",[t("p",[a._v("使用场景的以上内容摘录自互联网。")])]),a._v(" "),t("p",[a._v("Spring默认是在编译期，将AspectJ语言编写的切面类织入到Java类中，可以使用@EnableLoadTimeWeaving注解开启LTW支持，也就是开启在类加载时，将AspectJ语言编写的切面类织入到Java类中的支持。")]),a._v(" "),t("h2",{attrs:{id:"三、使用案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[a._v("#")]),a._v(" 三、使用案例")]),a._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),t("p",[a._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);