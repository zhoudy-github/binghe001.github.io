(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{569:function(t,n,s){"use strict";s.r(n);var a=s(7),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第44章-配置控制器-深度解析-restcontroller注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第44章-配置控制器-深度解析-restcontroller注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第44章-配置控制器：深度解析@RestController注解")]),t._v(" "),n("p",[t._v("作者：冰河\n"),n("br"),t._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-44",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-44"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),n("p",[n("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@RestController注解建立方法映射的案例和流程，从源码级别彻底掌握@RestController注解在Spring底层的执行流程。")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("本章目录如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("学习指引")]),t._v(" "),n("li",[t._v("注解说明\n"),n("ul",[n("li",[t._v("注解源码")]),t._v(" "),n("li",[t._v("使用场景")])])]),t._v(" "),n("li",[t._v("使用案例")]),t._v(" "),n("li",[t._v("源码时序图")]),t._v(" "),n("li",[t._v("源码解析")]),t._v(" "),n("li",[t._v("总结")]),t._v(" "),n("li",[t._v("思考")]),t._v(" "),n("li",[t._v("VIP服务")])]),t._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),n("p",[n("code",[t._v("Spring中的@RestController注解，你真的彻底了解过吗？")])]),t._v(" "),n("p",[t._v("基于SpringMVC或者SpringBoot开发Web应用时，除了@Controller注解使用的比较多之外，@RestController注解也是使用的比较频繁的注解。@RestController注解不仅仅具备@Controller注解的所有功能，并且还能将方法返回的结果数据自动以流的形式输出给客服端。从本质上讲，@RestController注解就是@Controller注解与@ResponseBody注解的组合。")]),t._v(" "),n("p",[t._v("本章，还是单独介绍@RestController注解，配合使用@RequestMapping等方法映射注解会在后续文章中介绍，关于@ResponseBody注解也会在后续的文章中进行详细介绍。")]),t._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),n("p",[n("code",[t._v("关于@RestController注解的一点点说明~~")])]),t._v(" "),n("p",[t._v("SpringMVC基于@Controller注解和@ResponseBody注解扩展了@RestController注解，使得@RestController注解同时具备于@Controller注解和@ResponseBody注解的功能。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),n("p",[t._v("@RestController注解的源码详见：org.springframework.web.bind.annotation.RestController。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author Rossen Stoyanchev\n * @author Sam Brannen\n * @since 4.0\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Controller")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ResponseBody")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestController")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.0.1\n\t */")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("annotation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("p",[t._v("从源码可以看出@RestController注解是从Spring4.0开始提供的注解，只能标注到类上，并且在@RestController注解上标注了@Controller注解和@ResponseBody注解，说明@RestController注解同时具备@Controller注解和@ResponseBody注解的功能。并且在@RestController注解内部提供了一个Spring类型的value属性。")]),t._v(" "),n("ul",[n("li",[t._v("value：指定注入IOC容器时的Bean的唯一标识。")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),n("p",[t._v("与@Controller注解一样，当基于SpringMVC或者SpringBoot开发Web应用时，标注到类上表示控制器类，控制器类往往会对外提供接口，并且Spring通过@RestController注解能够解析当前类中的方法，如果当前类中存在公有方法，并且方法上标注了@RequestMapping注解（含：@GetMapping注解、@PostMapping注解、@PutMapping注解、@DeleteMapping注解和@PatchMapping注解），则可以建立方法映射，对外提供访问链接，通过访问特定的链接就能够映射到对应的方法上。")]),t._v(" "),n("p",[t._v("与@Controller注解不同的是，@RestController注解还具备@ResponseBody注解的功能，能够将方法返回的结果数据自动以流的形式输出给客服端。")]),t._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),n("p",[t._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),n("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=e.exports}}]);