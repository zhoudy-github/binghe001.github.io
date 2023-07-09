(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{436:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring注解驱动开发》第42章-annotationawareaspectjautoproxycreator深度解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring注解驱动开发》第42章-annotationawareaspectjautoproxycreator深度解析"}},[t._v("#")]),t._v(" 《Spring注解驱动开发》第42章：AnnotationAwareAspectJAutoProxyCreator深度解析")]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在《Spring注解驱动开发》系列中的《"),a("a",{attrs:{href:"https://binghe.blog.csdn.net/article/details/114650073",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring中这么重要的AnnotationAwareAspectJAutoProxyCreator类是干嘛的？"),a("OutboundLink")],1),t._v("》一文中，我们简单分析了AnnotationAwareAspectJAutoProxyCreator类的作用，接下来，我们就以debug的方式来深入分析AnnotationAwareAspectJAutoProxyCreator的执行流程。")]),t._v(" "),a("p",[t._v("同样的，我们还是以debug的形式来分析AnnotationAwareAspectJAutoProxyCreator类的执行流程，在"),a("code",[t._v("io.mykit.spring.plugins.register.config")]),t._v("包下创建AopConfig类，然后在AopConfig类中创建mathHandler()方法，如下所示。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogAspect")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bean")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAspectJAutoProxy")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试AOP\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAspectJAutoProxy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mathHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("接下来，在"),a("code",[t._v("AopConfig#mathHandler()")]),t._v("方法中打上断点，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"001","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接下来，启动"),a("code",[t._v("io.mykit.spring.test")]),t._v("包下的"),a("code",[t._v("AopTest#testAop01()")]),t._v("方法。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试切面\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testAop01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),t._v(" mathHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        mathHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("发现断点会进入"),a("code",[t._v("org.springframework.context.annotation")]),t._v("包下的"),a("code",[t._v("AnnotationConfigApplicationContext#AnnotationConfigApplicationContext()")]),t._v("方法，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"003","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("而此时的断点是定位到"),a("code",[t._v("AnnotationConfigApplicationContext#AnnotationConfigApplicationContext()")]),t._v("方法中调用"),a("code",[t._v("refresh()")]),t._v("方法的代码行。"),a("code",[t._v("refresh()")]),t._v("方法会刷新Spring容器。接下来，我们可以通过IDEA左下角的方法调用堆栈进入"),a("code",[t._v("refresh()")]),t._v("方法内部，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"004","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-004.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时发现"),a("code",[t._v("refresh()")]),t._v("方法位于"),a("code",[t._v("org.springframework.context.support")]),t._v("包下的"),a("code",[t._v("AbstractApplicationContext")]),t._v("类中。此时，会发现代码调用流程会定位在"),a("code",[t._v("AbstractApplicationContext#refresh()")]),t._v("方法中调用的"),a("code",[t._v("registerBeanPostProcessors()")]),t._v("方法代码行。如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"005","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-005.png",loading:"lazy"}})]),t._v(" "),a("p",[a("code",[t._v("registerBeanPostProcessors()")]),t._v("方法的作用就是注册bean的后置处理器来拦截bean的创建。")]),t._v(" "),a("p",[t._v("接下来，进入"),a("code",[t._v("registerBeanPostProcessors()")]),t._v("方法，发现"),a("code",[t._v("registerBeanPostProcessors()")]),t._v("方法位于"),a("code",[t._v("org.springframework.context.support")]),t._v("包下的"),a("code",[t._v("AbstractApplicationContext")]),t._v("类中，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"006","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-006.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接下来，进入"),a("code",[t._v("PostProcessorRegistrationDelegate#registerBeanPostProcessors()")]),t._v("方法，这个方法的作用就是注册bean的后置处理器。在这个方法中按照顺序依次做了如下操作：")]),t._v(" "),a("p",[t._v("（1）先获取容器中已经定义的需要创建对象的所有BeanPostProcessor")]),t._v(" "),a("p",[t._v("（2）为容器中添加别的BeanPostProcessor")]),t._v(" "),a("p",[t._v("（3）注册实现了"),a("code",[t._v("PriorityOrdered")]),t._v("接口的BeanPostProcessor")]),t._v(" "),a("p",[t._v("（4）注册实现了"),a("code",[t._v("Ordered")]),t._v("接口的BeanPostProcessor")]),t._v(" "),a("p",[t._v("（5）注册没有实现优先级接口的BeanPostProcessor")]),t._v(" "),a("p",[t._v("（6）注册BeanPostProcessor，也就是创建BeanPostProcessor对象保存到容器中，创建"),a("code",[t._v("interalAutoProxyCreator")]),t._v("的BeanPostProcessor对象（AnnotationAwareAspectJAutoProxyCreator类型的对象）。")]),t._v(" "),a("p",[t._v("在（6）中又会依次执行如下几个步骤。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调用"),a("code",[t._v("createBeanInstance(String, RootBeanDefinition, Object[])")]),t._v("方法，创建Bean的实例")])]),t._v(" "),a("li",[a("p",[t._v("调用"),a("code",[t._v("populateBean(String, RootBeanDefinition, BeanWrapper)")]),t._v("方法，为bean的属性赋值。")])]),t._v(" "),a("li",[a("p",[t._v("调用"),a("code",[t._v("initializeBean(String, Object ,RootBeanDefinition mbd)")]),t._v("方法，初始化bean。")])])]),t._v(" "),a("p",[t._v("这三个方法都位于"),a("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),a("code",[t._v("AbstractAutowireCapableBeanFactory")]),t._v("类中。")]),t._v(" "),a("p",[t._v("而第3)步的执行又会依次执行如下几个步骤。")]),t._v(" "),a("ul",[a("li",[t._v("调用"),a("code",[t._v("invokeAwareMethods(String, Object)")]),t._v("方法，处理Aware接口的方法回调。")]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("applyBeanPostProcessorsBeforeInitialization(Object, String)")]),t._v("方法，应用后置处理器的"),a("code",[t._v("PostProcessorsBeforeInitialization()")]),t._v("方法。")]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("invokeInitMethods(String, Object, RootBeanDefinition)")]),t._v("方法，执行自定义的初始化方法。")]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("applyBeanPostProcessorsAfterInitialization(Object, String)")]),t._v("方法，执行后置处理器的"),a("code",[t._v("postProcessAfterInitialization(Object, String)")]),t._v("方法。如下所示。")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("code",[t._v("BeanPostProcessor(AnnotationAwareAspectJAutoProxyCreator)")]),t._v("创建成功，名称为"),a("code",[t._v("aspectJAdvisorsBuilder")]),t._v("。")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"018","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-018.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接下来，我们看看方法的调用信息。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"007","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-007.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("会发现此时逻辑调用会定位在"),a("code",[t._v("BeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);")]),t._v(" 这行代码上。")]),t._v(" "),a("p",[t._v("同样的，我们进入"),a("code",[t._v("beanFactory.getBean(ppName, BeanPostProcessor.class);")]),t._v("方法。发现会进入"),a("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),a("code",[t._v("AbstractBeanFactory#getBean(String,Class)")]),t._v("方法。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"008","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-008.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("继续进入"),a("code",[t._v("doGetBean()")]),t._v("方法，会发现逻辑执行定位到"),a("code",[t._v("doGetBean()")]),t._v("中如下代码处。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("sharedInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mbd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Explicitly remove instance from singleton cache: It might have been put there")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eagerly by the creation process, to allow for circular reference resolution.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Also remove any beans that received a temporary reference to the bean.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroySingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"009","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-009.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("而在IOC容器中第一次调用"),a("code",[t._v("getSingleton()")]),t._v("方法时，不会存在实例，所以，第一次调用"),a("code",[t._v("getSingleton()")]),t._v("方法会返回null。")]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("getSingleton()")]),t._v("方法，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"010","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-010.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，发现Spring会调用"),a("code",[t._v("singletonFactory.getObject()")]),t._v("方法，继续往下执行，会发现逻辑定位到"),a("code",[t._v("doGetBean()")]),t._v("方法的如下代码。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"011","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-011.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("继续执行断点，会发现逻辑进入"),a("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),a("code",[t._v("AbstractAutowireCapableBeanFactory#createBean(String, RootBeanDefinition, Object[])")]),t._v("方法中，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"012","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-012.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("继续进入"),a("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-013.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("此时，会发现bean已经实例化完成了，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"014","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-014.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("接下来，就会初始化bean的信息。那具体bean是在哪里进行实例化的呢？我们找到"),a("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法的如下代码片段。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"015","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-015.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("同时，我们也会发现此时实例化的bean的类型为"),a("code",[t._v("org.springframework.aop.config.internalAutoProxyCreator")]),t._v("。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"016","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-016.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("实例化完成之后就会在"),a("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法的如下代码处进行初始化。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-013.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("进入"),a("code",[t._v("initializeBean(String, Object ,RootBeanDefinition mbd)")]),t._v("方法。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"017","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-017.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("会发现代码执行逻辑定位在"),a("code",[t._v("invokeAwareMethods(beanName, bean);")]),t._v("处。进入"),a("code",[t._v("invokeAwareMethods(beanName, bean);")]),t._v("方法。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"019","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-019.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这个方法就比较简单了，相信点击都能看懂，这里就不再赘述这个方法的逻辑了。此时，代码的执行逻辑会定位到"),a("code",[t._v("((BeanFactoryAware) bean).setBeanFactory(AbstractAutowireCapableBeanFactory.this);")]),t._v("。")]),t._v(" "),a("p",[t._v("继续执行会发现逻辑进入了"),a("code",[t._v("org.springframework.aop.framework.autoproxy")]),t._v("包下的"),a("code",[t._v("AbstractAdvisorAutoProxyCreator#setBeanFactory()")]),t._v("方法，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"002","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("首先，会调用父类的"),a("code",[t._v("setBeanFactory(BeanFactory)")]),t._v("方法，然后会调用"),a("code",[t._v("initBeanFactory(ConfigurableListableBeanFactory)")]),t._v("方法初始化BeanFactory。")]),t._v(" "),a("p",[t._v("继续往下执行，我们会发现调用的是"),a("code",[t._v("org.springframework.aop.aspectj.annotation")]),t._v("包下的"),a("code",[t._v("AnnotationAwareAspectJAutoProxyCreator#initBeanFactory(ConfigurableListableBeanFactory)")]),t._v("方法。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"020","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-020.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("继续往下执行，代码逻辑会执行到"),a("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),a("code",[t._v("AbstractAutowireCapableBeanFactory#createBean(String, RootBeanDefinition, Object[])")]),t._v("方法中，并且会定位到"),a("code",[t._v("Object beanInstance = doCreateBean(beanName, mbdToUse, args);")]),t._v("代码行。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"021","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-021.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("执行完会回到"),a("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),a("code",[t._v("DefaultSingletonBeanRegistry#getSingleton(String, ObjectFactory<?>)")]),t._v("方法，并且会执行`addSingleton(beanName, singletonObject);代码行，如下所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"022","data-src":"https://binghe.gitcode.host/assets/images/core/spring/ioc/2022-04-04-044-022.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("将bean放入容器中。")]),t._v(" "),a("p",[t._v("至此，整个bean的创建，实例化，初始化，添加到容器的过程就介绍完了。")]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);