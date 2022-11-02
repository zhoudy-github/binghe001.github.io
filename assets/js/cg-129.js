(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{419:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"【spring注解驱动开发】二狗子让我给他讲讲-enableaspectjautoproxy注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【spring注解驱动开发】二狗子让我给他讲讲-enableaspectjautoproxy注解"}},[t._v("#")]),t._v(" 【Spring注解驱动开发】二狗子让我给他讲讲@EnableAspectJAutoProxy注解")]),t._v(" "),s("h2",{attrs:{id:"写在前面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[t._v("#")]),t._v(" 写在前面")]),t._v(" "),s("blockquote",[s("p",[t._v("最近，二狗子入职了新公司，新入职的那几天确实有点飘。不过慢慢的，他发现他身边的人各个身怀绝技啊，有Spring源码的贡献者，有Dubbo源码的贡献者，有MyBatis源码的贡献者，还有研究AI的大佬，个个都是大神级别的人物。二狗子有点慌，想起自己虽然入职了，但是比起其他人确实差点远啊。怎么办呢？先从基础补起呗，他发现自己对于Spring的理解还不算太深。于是乎，他让我给他讲讲Spring的@EnableAspectJAutoProxy注解。")]),t._v(" "),s("p",[t._v("好吧，二狗子要请我吃饭啊！关注 "),s("strong",[t._v("冰河技术")]),t._v(" 微信公众号，后台回复“Spring注解”领取工程源码。")]),t._v(" "),s("p",[t._v("如果文章对你有点帮助，请点个赞，给个在看和转发，大家的三连是我持续创作的最大动力！")])]),t._v(" "),s("h2",{attrs:{id:"enableaspectjautoproxy注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enableaspectjautoproxy注解"}},[t._v("#")]),t._v(" @EnableAspectJAutoProxy注解")]),t._v(" "),s("p",[t._v("在配置类上添加@EnableAspectJAutoProxy注解，能够开启注解版的AOP功能。也就是说，AOP中如果要使注解版的AOP功能起作用，就需要在配置类上添加@EnableAspectJAutoProxy注解。  我们先来看下@EnableAspectJAutoProxy注解的源码，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Documented")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Retention")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Target")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AspectJAutoProxyRegistrar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAspectJAutoProxy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxyTargetClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exposeProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("从源码可以看出，@EnableAspectJAutoProxy使用@Import注解引入了AspectJAutoProxyRegister.class对象 。那么，AspectJAutoProxyRegistrar又是什么呢？我们继续点击到AspectJAutoProxyRegistrar类的源码中，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfigUtils")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistry")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationAttributes")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AspectJAutoProxyRegistrar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImportBeanDefinitionRegistrar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistry")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfigUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAspectJAnnotationAutoProxyCreatorIfNecessary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationAttributes")]),t._v(" enableAspectJAutoProxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributesFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAspectJAutoProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableAspectJAutoProxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableAspectJAutoProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxyTargetClass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfigUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forceAutoProxyCreatorToUseClassProxying")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enableAspectJAutoProxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exposeProxy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfigUtils")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forceAutoProxyCreatorToExposeProxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v("可以看到AspectJAutoProxyRegistrar类实现了ImportBeanDefinitionRegistrar接口。看下ImportBeanDefinitionRegistrar接口的定义，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistry")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistryPostProcessor")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanNameGenerator")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImportBeanDefinitionRegistrar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistry")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanNameGenerator")]),t._v(" importBeanNameGenerator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationMetadata")]),t._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanDefinitionRegistry")]),t._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("看到ImportBeanDefinitionRegistrar接口，小伙伴们是不是觉得很熟悉呢。没错，我们在【Spring注解驱动开发】专题前面的文章中介绍过。可以通过ImportBeanDefinitionRegistrar接口实现将自定义的组件添加到IOC容器中。")]),t._v(" "),s("p",[t._v("也就说，"),s("strong",[t._v("@EnableAspectJAutoProxy注解使用AspectJAutoProxyRegistrar对象自定义组件，并将相应的组件添加到IOC容器中。")])]),t._v(" "),s("h2",{attrs:{id:"调试spring源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试spring源码"}},[t._v("#")]),t._v(" 调试Spring源码")]),t._v(" "),s("p",[t._v("我们在AspectJAutoProxyRegistrar类的registerBeanDefinitions()方法中设置断点，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"001","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，我们以debug的方法来运行AopTest类的testAop01()方法。运行后程序进入到断点位置，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"002","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-002.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("可以看到，程序已经暂停在断点位置，而且在IDEA的左下角显示了方法的调用栈。")]),t._v(" "),s("p",[t._v("在AspectJAutoProxyRegistrar类的registerBeanDefinitions()方法，首先调用AopConfigUtils类的registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法来注册registry。单看registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法也不难理解，字面含义就是：如果需要的话注册一个AspectJAnnotationAutoProxyCreator。")]),t._v(" "),s("p",[t._v("接下来，我们进入到AopConfigUtils类的registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法中，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"003","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-003.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("在AopConfigUtils类的registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法中，直接调用了重载的registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法，我们继续跟代码，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"004","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-004.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("可以看到在重载的registerAspectJAnnotationAutoProxyCreatorIfNecessary()方法中直接调用了registerOrEscalateApcAsRequired()方法。在registerOrEscalateApcAsRequired()方法中，传入了AnnotationAwareAspectJAutoProxyCreator.class对象。")]),t._v(" "),s("p",[t._v("我们继续跟进代码，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"005","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-005.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"006","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-006.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("我们可以看到，在registerOrEscalateApcAsRequired()方法中，接收到的Class对象的类型为：org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator。")]),t._v(" "),s("p",[t._v("在registerOrEscalateApcAsRequired()方法中方法中，首先判断registry是否包含org.springframework.aop.config.internalAutoProxyCreator类型的bean。如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"007","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-007.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("如果registry中包含org.springframework.aop.config.internalAutoProxyCreator类型的bean，则进行相应的处理，从Spring的源码来看，就是将org.springframework.aop.config.internalAutoProxyCreator类型的bean从registry中取出，并且判断cls对象的name值和apcDefinition的beanClassName值是否相等，如果不相等。则获取apcDefinition和cls的优先级，如果apcDefinition的优先级小于cls的优先级，则将apcDefinition的beanClassName设置为cls的name值。相对来说，理解起来还是比较简单的。")]),t._v(" "),s("p",[t._v("我们这里是第一次运行程序，不会进入到 if 条件中，我们继续看代码，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"008","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-008.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("这里，使用RootBeanDefinition来创建一个beanDefinition，并且将org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator的Class对象作为参数传递进来。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"009","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-009.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("我们继续往下看代码，最终AopConfigUtils类的registerOrEscalateApcAsRequired()方法中，会通过registry调用registerBeanDefinition()方法注册组件，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"010","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-010.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("并且注册的bean的名称为org.springframework.aop.config.internalAutoProxyCreator。")]),t._v(" "),s("p",[t._v("接下来，我们继续看AspectJAutoProxyRegistrar类的registerBeanDefinitions()源码，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"012","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-012.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("通过AnnotationConfigUtils类的attributesFor方法来获取@EnableAspectJAutoProxy注解的信息。接下来，就是判断proxyTargetClass属性的值是否为true，如果为true则调用AopConfigUtils类的forceAutoProxyCreatorToUseClassProxying()方法；继续判断exposeProxy属性的值是否为true，如果为true则调用AopConfigUtils类的forceAutoProxyCreatorToExposeProxy()方法。")]),t._v(" "),s("p",[s("strong",[t._v("综上，向Spring的配置类上添加@EnableAspectJAutoProxy注解后，会向IOC容器中注册AnnotationAwareAspectJAutoProxyCreator。")])]),t._v(" "),s("p",[t._v("接下来，我们来看下AnnotationAwareAspectJAutoProxyCreator类的结构图。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-033-013.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("我们简单梳理下AnnotationAwareAspectJAutoProxyCreato类的核心继承关系，如下所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  AnnotationAwareAspectJAutoProxyCreator\n       "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--AspectJAwareAdvisorAutoProxyCreator")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--AbstractAdvisorAutoProxyCreator")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--AbstractAutoProxyCreator")]),t._v("\n             -- ProxyProcessorSupport， SmartInstantiationAwareBeanPostProcessor\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("查看继承关系可以发现，此类实现了Aware与BeanPostProcessor接口，这两个接口都和Spring bean的初始化有关，由此推测此类主要处理方法都来自这两个接口的实现方法。同时该类也实现了order方法。")]),t._v(" "),s("p",[t._v("好了，二狗子说：有关AnnotationAwareAspectJAutoProxyCreator类的详细代码和执行流程我们后面再讲，他有点消化不了了。")]),t._v(" "),s("h2",{attrs:{id:"重磅福利"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重磅福利"}},[t._v("#")]),t._v(" 重磅福利")]),t._v(" "),s("p",[t._v("关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，后台回复 “"),s("strong",[t._v("设计模式")]),t._v("” 关键字领取《"),s("strong",[t._v("深入浅出Java 23种设计模式")]),t._v("》PDF文档。回复“"),s("strong",[t._v("Java8")]),t._v("”关键字领取《"),s("strong",[t._v("Java8新特性教程")]),t._v("》PDF文档。回复“"),s("strong",[t._v("限流")]),t._v("”关键字获取《"),s("strong",[t._v("亿级流量下的分布式限流解决方案")]),t._v("》PDF文档，三本PDF均是由冰河原创并整理的超硬核教程，面试必备！！")]),t._v(" "),s("p",[s("font",{attrs:{color:"#FF0000"}},[s("strong",[t._v("好了，今天就聊到这儿吧！别忘了点个赞，给个在看和转发，让更多的人看到，一起学习，一起进步！！")])])],1),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);