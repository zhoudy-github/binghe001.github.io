(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{396:function(n,s,t){"use strict";t.r(s);var a=t(7),e=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"【spring注解驱动开发】在-import注解中使用importbeandefinitionregistrar向容器中注册bean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【spring注解驱动开发】在-import注解中使用importbeandefinitionregistrar向容器中注册bean"}},[n._v("#")]),n._v(" 【Spring注解驱动开发】在@Import注解中使用ImportBeanDefinitionRegistrar向容器中注册bean")]),n._v(" "),s("h2",{attrs:{id:"写在前面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[n._v("#")]),n._v(" 写在前面")]),n._v(" "),s("blockquote",[s("p",[n._v("在前面的文章中，我们学习了如何使用@Import注解向Spring容器中导入bean，可以使用@Import注解快速向容器中导入bean，小伙伴们可以参见《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3MzE1NTIzNA==&mid=2247484863&idx=1&sn=faca9edb10665d357089a290220ede2f&chksm=cee51a72f992936430364b018e07f062c2cb4bbe7111d0b615a1937215170976e5caf23a227b&token=1611686244&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[n._v("【Spring注解驱动开发】使用@Import注解给容器中快速导入一个组件"),s("OutboundLink")],1),n._v("》。可以在@Import注解中使用ImportSelector接口导入bean，小伙伴们可以参见《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg3MzE1NTIzNA==&mid=2247484870&idx=1&sn=a371224a8c2b9f70a41ff88976d6b0e6&chksm=cee51a0bf992931d3e39ddf70061ac8de713c817ec6561075a740eb18c7269ce66d50459dd58&token=1611686244&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[n._v("【Spring注解驱动开发】在@Import注解中使用ImportSelector接口导入bean"),s("OutboundLink")],1),n._v("》一文。今天，我们就来说说，如何在@Import注解中使用ImportBeanDefinitionRegistrar向容器中注册bean。")]),n._v(" "),s("p",[n._v("项目工程源码已经提交到GitHub："),s("a",{attrs:{href:"https://github.com/sunshinelyz/spring-annotation",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/sunshinelyz/spring-annotation"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"importbeandefinitionregistrar概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importbeandefinitionregistrar概述"}},[n._v("#")]),n._v(" ImportBeanDefinitionRegistrar概述")]),n._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" 概述")]),n._v(" "),s("p",[n._v("我们先来看看ImportBeanDefinitionRegistrar是个什么鬼，点击进入ImportBeanDefinitionRegistrar源码，如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("package")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("annotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistryPostProcessor")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanNameGenerator")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("interface")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ImportBeanDefinitionRegistrar")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")]),n._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanNameGenerator")]),n._v(" importBeanNameGenerator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("default")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")]),n._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("由源码可以看出，ImportBeanDefinitionRegistrar本质上是一个接口。在ImportBeanDefinitionRegistrar接口中，有一个registerBeanDefinitions()方法，通过registerBeanDefinitions()方法，我们可以向Spring容器中注册bean实例。")]),n._v(" "),s("p",[n._v("Spring官方在动态注册bean时，大部分套路其实是使用ImportBeanDefinitionRegistrar接口。")]),n._v(" "),s("p",[n._v("所有实现了该接口的类都会被ConfigurationClassPostProcessor处理，ConfigurationClassPostProcessor实现了BeanFactoryPostProcessor接口，所以ImportBeanDefinitionRegistrar中动态注册的bean是优先于依赖其的bean初始化的，也能被aop、validator等机制处理。")]),n._v(" "),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[n._v("#")]),n._v(" 使用方法")]),n._v(" "),s("p",[n._v("ImportBeanDefinitionRegistrar需要配合@Configuration和@Import注解，@Configuration定义Java格式的Spring配置文件，@Import注解导入实现了ImportBeanDefinitionRegistrar接口的类。")]),n._v(" "),s("h2",{attrs:{id:"importbeandefinitionregistrar实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importbeandefinitionregistrar实例"}},[n._v("#")]),n._v(" ImportBeanDefinitionRegistrar实例")]),n._v(" "),s("p",[n._v("既然ImportBeanDefinitionRegistrar是一个接口，那我们就创建一个MyImportBeanDefinitionRegistrar类，实现ImportBeanDefinitionRegistrar接口，如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("package")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ImportBeanDefinitionRegistrar")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("import")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author binghe\n * @version 1.0.0\n * @description ImportBeanDefinitionRegistrar的实现类\n */")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyImportBeanDefinitionRegistrar")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("implements")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("ImportBeanDefinitionRegistrar")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n     * AnnotationMetadata: 当前类的注解信息\n     * BeanDefinitionRegistry：BeanDefinition注册类\n     * 通过调用BeanDefinitionRegistry接口的registerBeanDefinition()方法，可以将所有需要添加到容器中的bean注入到容器中。\n     */")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Override")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")]),n._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br")])]),s("p",[n._v("可以看到，这里，我们先创建了MyImportBeanDefinitionRegistrar类的大体框架。接下来，我们在PersonConfig2类上的@Import注解中，添加MyImportBeanDefinitionRegistrar类，如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Configuration")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Department")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Employee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyImportSelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("MyImportBeanDefinitionRegistrar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("PersonConfig2")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("p",[n._v("接下来，创建一个Company类，作为测试测试ImportBeanDefinitionRegistrar接口的bean，如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("package")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[n._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("mykit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n * @author binghe\n * @version 1.0.0\n * @description 测试ImportBeanDefinitionRegistrar接口的使用\n */")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Company")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("接下来，就要实现MyImportBeanDefinitionRegistrar类中的registerBeanDefinitions()方法的逻辑了，添加逻辑后的registerBeanDefinitions()方法如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[n._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n     * AnnotationMetadata: 当前类的注解信息\n     * BeanDefinitionRegistry：BeanDefinition注册类\n     * 通过调用BeanDefinitionRegistry接口的registerBeanDefinition()方法，可以将所有需要添加到容器中的bean注入到容器中。\n     */")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Override")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")]),n._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("boolean")]),n._v(" employee "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("containsBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"employee"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("boolean")]),n._v(" department "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("containsBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"department"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("employee "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" department"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinition")]),n._v(" beanDefinition "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RootBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Company")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n            registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"company"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" beanDefinition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("p",[n._v("registerBeanDefinitions()方法的实现逻辑很简单，就是判断Spring容器中是否同时存在以employee命名的bean和以department命名的bean，如果同时存在以employee命名的bean和以department命名的bean，则向Spring容器中注入一个以company命名的bean。")]),n._v(" "),s("p",[n._v("接下来，我们就运行SpringBeanTest类中的testAnnotationConfig7()方法来进行测试，输出结果信息如下所示。")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("org.springframework.context.annotation.internalConfigurationAnnotationProcessor\norg.springframework.context.annotation.internalAutowiredAnnotationProcessor\norg.springframework.context.annotation.internalCommonAnnotationProcessor\norg.springframework.context.event.internalEventListenerProcessor\norg.springframework.context.event.internalEventListenerFactory\npersonConfig2\nio.mykit.spring.plugins.register.bean.Department\nio.mykit.spring.plugins.register.bean.Employee\nio.mykit.spring.plugins.register.bean.User\nio.mykit.spring.plugins.register.bean.Role\nperson\nbinghe001\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br")])]),s("p",[n._v("可以看到，在输出结果中，并没有看到“company”，这是因为输出结果中存在io.mykit.spring.plugins.register.bean.Department和io.mykit.spring.plugins.register.bean.Employee，并不存在我们代码逻辑中的department和employee。所以，我们将registerBeanDefinitions()方法的逻辑稍微修改下，修改后的代码如下所示。")]),n._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("/**\n  * AnnotationMetadata: 当前类的注解信息\n  * BeanDefinitionRegistry：BeanDefinition注册类\n  * 通过调用BeanDefinitionRegistry接口的registerBeanDefinition()方法，可以将所有需要添加到容器中的bean注入到容器中。\n  */")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[n._v("@Override")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("public")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("void")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("AnnotationMetadata")]),n._v(" importingClassMetadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinitionRegistry")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("boolean")]),n._v(" employee "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("containsBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Employee")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("boolean")]),n._v(" department "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("containsBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Department")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("if")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("employee "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("&&")]),n._v(" department"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("BeanDefinition")]),n._v(" beanDefinition "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("RootBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Company")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[n._v("registerBeanDefinition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[n._v('"company"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" beanDefinition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("p",[n._v("接下来，我们再次运行SpringBeanTest类中的testAnnotationConfig7()方法来进行测试，输出结果信息如下所示。")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("org.springframework.context.annotation.internalConfigurationAnnotationProcessor\norg.springframework.context.annotation.internalAutowiredAnnotationProcessor\norg.springframework.context.annotation.internalCommonAnnotationProcessor\norg.springframework.context.event.internalEventListenerProcessor\norg.springframework.context.event.internalEventListenerFactory\npersonConfig2\nio.mykit.spring.plugins.register.bean.Department\nio.mykit.spring.plugins.register.bean.Employee\nio.mykit.spring.plugins.register.bean.User\nio.mykit.spring.plugins.register.bean.Role\nperson\nbinghe001\ncompany\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("p",[n._v("可以看到，此时输出了company，说明Spring容器中已经成功注册了以company命名的bean。")]),n._v(" "),s("p",[s("font",{attrs:{color:"#FF0000"}},[s("strong",[n._v("好了，咱们今天就聊到这儿吧！别忘了给个在看和转发，让更多的人看到，一起学习一起进步！！")])])],1),n._v(" "),s("blockquote",[s("p",[n._v("项目工程源码已经提交到GitHub："),s("a",{attrs:{href:"https://github.com/sunshinelyz/spring-annotation",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/sunshinelyz/spring-annotation"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[n._v("#")]),n._v(" 写在最后")]),n._v(" "),s("blockquote",[s("p",[n._v("如果觉得文章对你有点帮助，请微信搜索并关注「 冰河技术 」微信公众号，跟冰河学习Spring注解驱动开发。公众号回复“spring注解”关键字，领取Spring注解驱动开发核心知识图，让Spring注解驱动开发不再迷茫。")])]),n._v(" "),s("blockquote",[s("p",[n._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),n._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);