(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{577:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"annotationawareaspectjautoproxycreator深度解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#annotationawareaspectjautoproxycreator深度解析"}},[t._v("#")]),t._v(" AnnotationAwareAspectJAutoProxyCreator深度解析")]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("在《Spring注解驱动开发》系列中的《"),s("a",{attrs:{href:"https://binghe.blog.csdn.net/article/details/114650073",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring中这么重要的AnnotationAwareAspectJAutoProxyCreator类是干嘛的？"),s("OutboundLink")],1),t._v("》一文中，我们简单分析了AnnotationAwareAspectJAutoProxyCreator类的作用，接下来，我们就以debug的方式来深入分析AnnotationAwareAspectJAutoProxyCreator的执行流程。")]),t._v(" "),s("p",[t._v("同样的，我们还是以debug的形式来分析AnnotationAwareAspectJAutoProxyCreator类的执行流程，在"),s("code",[t._v("io.mykit.spring.plugins.register.config")]),t._v("包下创建AopConfig类，然后在AopConfig类中创建mathHandler()方法，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogAspect")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bean")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableAspectJAutoProxy")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试AOP\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAspectJAutoProxy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mathHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("接下来，在"),s("code",[t._v("AopConfig#mathHandler()")]),t._v("方法中打上断点，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"001","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，启动"),s("code",[t._v("io.mykit.spring.test")]),t._v("包下的"),s("code",[t._v("AopTest#testAop01()")]),t._v("方法。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试切面\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testAop01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AopConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),t._v(" mathHandler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MathHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        mathHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("发现断点会进入"),s("code",[t._v("org.springframework.context.annotation")]),t._v("包下的"),s("code",[t._v("AnnotationConfigApplicationContext#AnnotationConfigApplicationContext()")]),t._v("方法，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"003","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-003.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("而此时的断点是定位到"),s("code",[t._v("AnnotationConfigApplicationContext#AnnotationConfigApplicationContext()")]),t._v("方法中调用"),s("code",[t._v("refresh()")]),t._v("方法的代码行。"),s("code",[t._v("refresh()")]),t._v("方法会刷新Spring容器。接下来，我们可以通过IDEA左下角的方法调用堆栈进入"),s("code",[t._v("refresh()")]),t._v("方法内部，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"004","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-004.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("此时发现"),s("code",[t._v("refresh()")]),t._v("方法位于"),s("code",[t._v("org.springframework.context.support")]),t._v("包下的"),s("code",[t._v("AbstractApplicationContext")]),t._v("类中。此时，会发现代码调用流程会定位在"),s("code",[t._v("AbstractApplicationContext#refresh()")]),t._v("方法中调用的"),s("code",[t._v("registerBeanPostProcessors()")]),t._v("方法代码行。如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"005","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-005.png",loading:"lazy"}})]),t._v(" "),s("p",[s("code",[t._v("registerBeanPostProcessors()")]),t._v("方法的作用就是注册bean的后置处理器来拦截bean的创建。")]),t._v(" "),s("p",[t._v("接下来，进入"),s("code",[t._v("registerBeanPostProcessors()")]),t._v("方法，发现"),s("code",[t._v("registerBeanPostProcessors()")]),t._v("方法位于"),s("code",[t._v("org.springframework.context.support")]),t._v("包下的"),s("code",[t._v("AbstractApplicationContext")]),t._v("类中，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"006","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-006.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，进入"),s("code",[t._v("PostProcessorRegistrationDelegate#registerBeanPostProcessors()")]),t._v("方法，这个方法的作用就是注册bean的后置处理器。在这个方法中按照顺序依次做了如下操作：")]),t._v(" "),s("p",[t._v("（1）先获取容器中已经定义的需要创建对象的所有BeanPostProcessor")]),t._v(" "),s("p",[t._v("（2）为容器中添加别的BeanPostProcessor")]),t._v(" "),s("p",[t._v("（3）注册实现了"),s("code",[t._v("PriorityOrdered")]),t._v("接口的BeanPostProcessor")]),t._v(" "),s("p",[t._v("（4）注册实现了"),s("code",[t._v("Ordered")]),t._v("接口的BeanPostProcessor")]),t._v(" "),s("p",[t._v("（5）注册没有实现优先级接口的BeanPostProcessor")]),t._v(" "),s("p",[t._v("（6）注册BeanPostProcessor，也就是创建BeanPostProcessor对象保存到容器中，创建"),s("code",[t._v("interalAutoProxyCreator")]),t._v("的BeanPostProcessor对象（AnnotationAwareAspectJAutoProxyCreator类型的对象）。")]),t._v(" "),s("p",[t._v("在（6）中又会依次执行如下几个步骤。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("调用"),s("code",[t._v("createBeanInstance(String, RootBeanDefinition, Object[])")]),t._v("方法，创建Bean的实例")])]),t._v(" "),s("li",[s("p",[t._v("调用"),s("code",[t._v("populateBean(String, RootBeanDefinition, BeanWrapper)")]),t._v("方法，为bean的属性赋值。")])]),t._v(" "),s("li",[s("p",[t._v("调用"),s("code",[t._v("initializeBean(String, Object ,RootBeanDefinition mbd)")]),t._v("方法，初始化bean。")])])]),t._v(" "),s("p",[t._v("这三个方法都位于"),s("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),s("code",[t._v("AbstractAutowireCapableBeanFactory")]),t._v("类中。")]),t._v(" "),s("p",[t._v("而第3)步的执行又会依次执行如下几个步骤。")]),t._v(" "),s("ul",[s("li",[t._v("调用"),s("code",[t._v("invokeAwareMethods(String, Object)")]),t._v("方法，处理Aware接口的方法回调。")]),t._v(" "),s("li",[t._v("调用"),s("code",[t._v("applyBeanPostProcessorsBeforeInitialization(Object, String)")]),t._v("方法，应用后置处理器的"),s("code",[t._v("PostProcessorsBeforeInitialization()")]),t._v("方法。")]),t._v(" "),s("li",[t._v("调用"),s("code",[t._v("invokeInitMethods(String, Object, RootBeanDefinition)")]),t._v("方法，执行自定义的初始化方法。")]),t._v(" "),s("li",[t._v("调用"),s("code",[t._v("applyBeanPostProcessorsAfterInitialization(Object, String)")]),t._v("方法，执行后置处理器的"),s("code",[t._v("postProcessAfterInitialization(Object, String)")]),t._v("方法。如下所示。")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("code",[t._v("BeanPostProcessor(AnnotationAwareAspectJAutoProxyCreator)")]),t._v("创建成功，名称为"),s("code",[t._v("aspectJAdvisorsBuilder")]),t._v("。")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"018","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-018.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，我们看看方法的调用信息。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"007","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-007.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("会发现此时逻辑调用会定位在"),s("code",[t._v("BeanPostProcessor pp = beanFactory.getBean(ppName, BeanPostProcessor.class);")]),t._v(" 这行代码上。")]),t._v(" "),s("p",[t._v("同样的，我们进入"),s("code",[t._v("beanFactory.getBean(ppName, BeanPostProcessor.class);")]),t._v("方法。发现会进入"),s("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),s("code",[t._v("AbstractBeanFactory#getBean(String,Class)")]),t._v("方法。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"008","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-008.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("继续进入"),s("code",[t._v("doGetBean()")]),t._v("方法，会发现逻辑执行定位到"),s("code",[t._v("doGetBean()")]),t._v("中如下代码处。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("sharedInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mbd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeansException")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Explicitly remove instance from singleton cache: It might have been put there")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eagerly by the creation process, to allow for circular reference resolution.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Also remove any beans that received a temporary reference to the bean.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroySingleton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"009","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-009.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("而在IOC容器中第一次调用"),s("code",[t._v("getSingleton()")]),t._v("方法时，不会存在实例，所以，第一次调用"),s("code",[t._v("getSingleton()")]),t._v("方法会返回null。")]),t._v(" "),s("p",[t._v("进入"),s("code",[t._v("getSingleton()")]),t._v("方法，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"010","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-010.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("此时，发现Spring会调用"),s("code",[t._v("singletonFactory.getObject()")]),t._v("方法，继续往下执行，会发现逻辑定位到"),s("code",[t._v("doGetBean()")]),t._v("方法的如下代码。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"011","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-011.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("继续执行断点，会发现逻辑进入"),s("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),s("code",[t._v("AbstractAutowireCapableBeanFactory#createBean(String, RootBeanDefinition, Object[])")]),t._v("方法中，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"012","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-012.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("继续进入"),s("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-013.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("此时，会发现bean已经实例化完成了，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"014","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-014.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，就会初始化bean的信息。那具体bean是在哪里进行实例化的呢？我们找到"),s("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法的如下代码片段。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"015","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-015.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("同时，我们也会发现此时实例化的bean的类型为"),s("code",[t._v("org.springframework.aop.config.internalAutoProxyCreator")]),t._v("。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"016","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-016.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("实例化完成之后就会在"),s("code",[t._v("doCreateBean(String,RootBeanDefinition,Object[])")]),t._v("方法的如下代码处进行初始化。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"013","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-013.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("进入"),s("code",[t._v("initializeBean(String, Object ,RootBeanDefinition mbd)")]),t._v("方法。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"017","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-017.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("会发现代码执行逻辑定位在"),s("code",[t._v("invokeAwareMethods(beanName, bean);")]),t._v("处。进入"),s("code",[t._v("invokeAwareMethods(beanName, bean);")]),t._v("方法。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"019","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-019.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("这个方法就比较简单了，相信点击都能看懂，这里就不再赘述这个方法的逻辑了。此时，代码的执行逻辑会定位到"),s("code",[t._v("((BeanFactoryAware) bean).setBeanFactory(AbstractAutowireCapableBeanFactory.this);")]),t._v("。")]),t._v(" "),s("p",[t._v("继续执行会发现逻辑进入了"),s("code",[t._v("org.springframework.aop.framework.autoproxy")]),t._v("包下的"),s("code",[t._v("AbstractAdvisorAutoProxyCreator#setBeanFactory()")]),t._v("方法，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"002","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-002.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("首先，会调用父类的"),s("code",[t._v("setBeanFactory(BeanFactory)")]),t._v("方法，然后会调用"),s("code",[t._v("initBeanFactory(ConfigurableListableBeanFactory)")]),t._v("方法初始化BeanFactory。")]),t._v(" "),s("p",[t._v("继续往下执行，我们会发现调用的是"),s("code",[t._v("org.springframework.aop.aspectj.annotation")]),t._v("包下的"),s("code",[t._v("AnnotationAwareAspectJAutoProxyCreator#initBeanFactory(ConfigurableListableBeanFactory)")]),t._v("方法。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"020","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-020.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("继续往下执行，代码逻辑会执行到"),s("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),s("code",[t._v("AbstractAutowireCapableBeanFactory#createBean(String, RootBeanDefinition, Object[])")]),t._v("方法中，并且会定位到"),s("code",[t._v("Object beanInstance = doCreateBean(beanName, mbdToUse, args);")]),t._v("代码行。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"021","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-021.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("执行完会回到"),s("code",[t._v("org.springframework.beans.factory.support")]),t._v("包下的"),s("code",[t._v("DefaultSingletonBeanRegistry#getSingleton(String, ObjectFactory<?>)")]),t._v("方法，并且会执行`addSingleton(beanName, singletonObject);代码行，如下所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"022","data-src":"https://binghe001.github.io/assets/images/core/spring/ioc/2022-04-04-044-022.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("将bean放入容器中。")]),t._v(" "),s("p",[t._v("至此，整个bean的创建，实例化，初始化，添加到容器的过程就介绍完了。")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);