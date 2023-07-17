(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{513:function(t,a,r){"use strict";r.r(a);var n=r(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第42章-注解型springmvc通用springboot启动模型设计与实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第42章-注解型springmvc通用springboot启动模型设计与实现"}},[t._v("#")]),t._v(" 《Spring核心技术》第42章：注解型SpringMVC通用SpringBoot启动模型设计与实现")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-42",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-42"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本章重点")]),t._v("：掌握基于全注解开发SpringMVC的方法，掌握使用嵌入式Tomcat启动SpringMVC的方法（摒弃web.xml），对比思考SpringBoot。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本章目录如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("学习指引")]),t._v(" "),a("li",[t._v("模型设计\n"),a("ul",[a("li",[t._v("Tomcat SPI 接口")]),t._v(" "),a("li",[t._v("Tomcat SPI 实现类")]),t._v(" "),a("li",[t._v("Tomcat SPI 扩展设计")])])]),t._v(" "),a("li",[t._v("模型实现")]),t._v(" "),a("li",[t._v("案例实现")]),t._v(" "),a("li",[t._v("案例测试")]),t._v(" "),a("li",[t._v("总结")]),t._v(" "),a("li",[t._v("思考")]),t._v(" "),a("li",[t._v("VIP服务")])]),t._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),a("p",[a("code",[t._v("你还在写大量配置文件来开发SpringMVC程序？")])]),t._v(" "),a("p",[t._v("很早前，冰河就说过，SpringBoot其实底层就是基于Spring和SpringMVC的一个快速开发脚手架，SpringBoot能做到的，使用Spring和SpringMVC一样能做到，SpringBoot其实并没有什么神秘的地方，学好Spring和SpringMVC，那SpringBoot根本就不用花费大量的时间和精力去学习，只要稍加理解就可以了。")]),t._v(" "),a("p",[t._v("为了让大家更好的体会如何利用Spring和SpringMVC按照SpringBoot的方式开发Web应用程序，本章，我们一起使用Spring+SpringMVC+嵌入式Tomcat开发一个简易版的SpringBoot应用。让你从根本上理解SpringBoot到底是如何运行的。还有一点需要说明的是：SpringBoot启动时，底层使用的是自动配置导入相关的类和资源，这个在《RPC手撸专栏》的整合SpringBoot篇章有实现。这里，为了简化实现逻辑，也为了更好的演示最核心的部分，省略了大量的自动配置，通过嵌入式Tomcat直接启动程序。")]),t._v(" "),a("h2",{attrs:{id:"二、模型设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、模型设计"}},[t._v("#")]),t._v(" 二、模型设计")]),t._v(" "),a("p",[a("code",[t._v("基于SpringMVC实现SpringBoot方式启动程序案例模型设计~~")])]),t._v(" "),a("p",[t._v("熟悉Tomcat的小伙伴都知道，Tomcat提供了一种SPI机制来加载配置类启动Spring IOC容器。所以，本章在实现注解型SpringMVC通用SpringBoot启动模型时，会基于Tomcat的SPI机制进行实现。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-tomcat-spi-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-tomcat-spi-接口"}},[t._v("#")]),t._v(" 2.1 Tomcat SPI 接口")]),t._v(" "),a("p",[t._v("在Tomcat提供的SPI机制中，会对外暴露一个ServletContainerInitializer接口，ServletContainerInitializer接口的源码详见：jakarta.servlet.ServletContainerInitializer。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContainerInitializer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onStartup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletContext")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("可以看到，在ServletContainerInitializer接口中只提供了一个onStartup()方法，在Tomcat启动的过程中就会调用这个onStartup()方法。")]),t._v(" "),a("p",[t._v("在Tomcat启动的过程中，就会去加载ServletContainerInitializer接口的所有实现类，并且还会去解析@HandlersTypes注解，将解析到的结果信息封装到一个Set<Class<?>>集合中。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-tomcat-spi-实现类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-tomcat-spi-实现类"}},[t._v("#")]),t._v(" 2.2 Tomcat SPI 实现类")]),t._v(" "),a("p",[t._v("在spring-web模块会实现ServletContainerInitializer接口，如图42-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图42-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-04-09-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图42-1可以看出，在spring-web模块中就实现了ServletContainerInitializer接口，打开jakarta.servlet.ServletContainerInitializer文件，内容如下所示。")]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);