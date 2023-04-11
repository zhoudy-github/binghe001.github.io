(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{493:function(n,a,t){"use strict";t.r(a);var s=t(7),e=Object(s.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第32章-深度解析-enabletransactionmanagement注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第32章-深度解析-enabletransactionmanagement注解"}},[n._v("#")]),n._v(" 《Spring核心技术》第32章：深度解析@EnableTransactionManagement注解")]),n._v(" "),a("p",[n._v("作者：冰河\n"),a("br"),n._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),n._v(" "),a("br"),n._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://binghe.gitcode.host"),a("OutboundLink")],1),n._v(" "),a("br"),n._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),n._v(" "),a("br"),n._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29"),a("OutboundLink")],1)]),n._v(" "),a("blockquote",[a("p",[n._v("沉淀，成长，突破，帮助他人，成就自我。")])]),n._v(" "),a("p",[a("strong",[n._v("大家好，我是冰河~~")])]),n._v(" "),a("hr"),n._v(" "),a("ul",[a("li",[a("p",[a("strong",[n._v("本章难度")]),n._v("：★★★★☆")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("本章重点")]),n._v("：从源码级别彻底掌握@EnableTransactionManagement注解在Spring底层开启事务的执行流程。")])])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("本章目录如下所示：")]),n._v(" "),a("ul",[a("li",[n._v("学习指引")]),n._v(" "),a("li",[n._v("注解说明\n"),a("ul",[a("li",[n._v("注解源码")]),n._v(" "),a("li",[n._v("使用场景")])])]),n._v(" "),a("li",[n._v("源码时序图")]),n._v(" "),a("li",[n._v("源码解析\n"),a("ul",[a("li",[n._v("解析解析总体流程类")]),n._v(" "),a("li",[n._v("解析AutoProxyRegistrar类")]),n._v(" "),a("li",[n._v("解析InfrastructureAdvisorAutoProxyCreator类")]),n._v(" "),a("li",[n._v("解析ProxyTransactionManagementConfiguration类")])])]),n._v(" "),a("li",[n._v("总结")]),n._v(" "),a("li",[n._v("思考")]),n._v(" "),a("li",[n._v("VIP服务")])]),n._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[n._v("#")]),n._v(" 一、学习指引")]),n._v(" "),a("p",[a("code",[n._v("Spring中的@EnableTransactionManagement注解，你真的彻底了解过吗？")])]),n._v(" "),a("p",[n._v("基于Spring事务开发过应用程序的小伙伴都知道，在配置类上添加@EnableTransactionManagement注解后，就能够开启Spring事务，那你知道@EnableTransactionManagement注解在Spring底层都做了哪些事情吗？")]),n._v(" "),a("h2",{attrs:{id:"二、注解说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[n._v("#")]),n._v(" 二、注解说明")]),n._v(" "),a("p",[a("code",[n._v("关于@EnableTransactionManagement注解的一点点说明~~")])]),n._v(" "),a("p",[n._v("在配置类上标注@EnableTransactionManagement注解后，就表示程序开启了基于注解的Spring事务功能，那@EnableTransactionManagement注解中都包含哪些信息呢？")]),n._v(" "),a("h3",{attrs:{id:"_2-1-注解源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[n._v("#")]),n._v(" 2.1 注解源码")]),n._v(" "),a("p",[n._v("@EnableTransactionManagement注解的源码详见：org.springframework.transaction.annotation.EnableTransactionManagement。")]),n._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author Chris Beams\n * @author Juergen Hoeller\n * @since 3.1\n * @see TransactionManagementConfigurer\n * @see TransactionManagementConfigurationSelector\n * @see ProxyTransactionManagementConfiguration\n * @see org.springframework.transaction.aspectj.AspectJTransactionManagementConfiguration\n */")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Documented")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("TransactionManagementConfigurationSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@interface")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("EnableTransactionManagement")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("boolean")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("proxyTargetClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AdviceMode")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AdviceMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("PROXY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("int")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Ordered")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("LOWEST_PRECEDENCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])]),a("p",[n._v("@EnableTransactionManagement注解表示Spring支持基于注解的事务，同时开启了事务。从源码可以看出，@EnableTransactionManagement注解是从Spring3.1版本开始提供的注解，并且在注解上使用@Import注解导入了TransactionManagementConfigurationSelector类，TransactionManagementConfigurationSelector类就是@EnableTransactionManagement注解的核心所在。另外，在@EnableTransactionManagement注解中提供了三个属性，分别如下所示。")]),n._v(" "),a("ul",[a("li",[n._v("proxyTargetClass：boolean类型的属性，表示指定目标类代理还是指定接口代理。取值为true或者false，true：指定目标类代理，此时会使用CGLib代理，false：指定接口代理，此时会使用JDK代理。默认取值为false，使用JDK代理接口。")]),n._v(" "),a("li",[n._v("mode：AdviceMode枚举类型的属性，表示事务通知是如何执行的。取值为PROXY或者ASPECTJ，PROXY：事务会通过代理的方式执行，ASPECTJ：事务会通过aspectj的方式执行。如果是同一个类中调用的话，可以指定为ASPECTJ。")]),n._v(" "),a("li",[n._v("order：表示事务处理的执行顺序，默认值为Ordered.LOWEST_PRECEDENCE，也就是最低优先级，实际值为：Integer.MAX_VALUE。")])]),n._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[n._v("#")]),n._v(" 查看完整文章")]),n._v(" "),a("p",[n._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[n._v("冰河技术"),a("OutboundLink")],1),n._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);