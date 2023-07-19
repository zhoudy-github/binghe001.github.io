(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{522:function(t,n,a){"use strict";a.r(n);var s=a(7),r=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第43章-配置控制器-深度解析-controller注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第43章-配置控制器-深度解析-controller注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第43章-配置控制器：深度解析@Controller注解")]),t._v(" "),n("p",[t._v("作者：冰河\n"),n("br"),t._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-43",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-43"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),n("p",[n("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@Controller注解建立方法映射的案例和流程，从源码级别彻底掌握@Controller注解在Spring底层的执行流程。")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("本章目录如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("学习指引")]),t._v(" "),n("li",[t._v("注解说明\n"),n("ul",[n("li",[t._v("注解源码")]),t._v(" "),n("li",[t._v("使用场景")])])]),t._v(" "),n("li",[t._v("使用案例")]),t._v(" "),n("li",[t._v("源码时序图")]),t._v(" "),n("li",[t._v("源码解析\n"),n("ul",[n("li",[t._v("DispatcherServlet基础知识")]),t._v(" "),n("li",[t._v("@Controller注解源码解析")])])]),t._v(" "),n("li",[t._v("总结")]),t._v(" "),n("li",[t._v("思考")]),t._v(" "),n("li",[t._v("VIP服务")])]),t._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),n("p",[n("code",[t._v("Spring中的@Controller注解，你真的彻底了解过吗？")])]),t._v(" "),n("p",[t._v("不管是使用SpringMVC，还是使用SpringBoot开发Web程序时，@Controller注解都是使用的比较多的注解，使用@Controller注解主要是将当前类标注为表现层的控制器。那你对@Controller注解真的了解了吗？")]),t._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),n("p",[n("code",[t._v("关于@Controller注解的一点点说明~~")])]),t._v(" "),n("p",[t._v("Spring基于@Component注解扩展了@Controller注解，@Controller注解主要标注到控制器类上。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),n("p",[t._v("@Controller注解的源码详见：org.springframework.stereotype.Controller。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author Arjen Poutsma\n * @author Juergen Hoeller\n * @since 2.5\n * @see Component\n * @see org.springframework.web.bind.annotation.RequestMapping\n * @see org.springframework.context.annotation.ClassPathBeanDefinitionScanner\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("从源码可以看出，@Controller注解是从Spring2.5版本开始提供的注解，只能标注到类上，并且在@Controller注解上标注了@Component注解，说明@Controller注解是基于@Component注解扩展出的注解。并且在@Controller注解中提供了一个value属性。")]),t._v(" "),n("ul",[n("li",[t._v("value：Spring类型的属性，表示注入IOC容器时Bean的唯一标识。")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),n("p",[t._v("当基于SpringMVC或者SpringBoot开发Web应用时，标注到类上表示控制器类，控制器类往往会对外提供接口，并且@Controller注解能够解析当前类中的方法，如果当前类中存在公有方法，并且方法上标注了@RequestMapping注解（含：@GetMapping注解、@PostMapping注解、@PutMapping注解、@DeleteMapping注解和@PatchMapping注解），则可以建立方法映射，对外提供访问链接，通过访问特定的链接就能够映射到对应的方法上。")]),t._v(" "),n("h2",{attrs:{id:"三、使用案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、使用案例"}},[t._v("#")]),t._v(" 三、使用案例")]),t._v(" "),n("p",[n("code",[t._v("一起实现@Controller注解的案例吧~~")])]),t._v(" "),n("p",[t._v("@Controller注解是使用SpringMVC和SpringBoot开发Web应用程序时，使用的比较多的注解。本节，就简单实现@Controller注解的使用案例。具体实现步骤如下所示。")]),t._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),n("p",[t._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),n("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=r.exports}}]);