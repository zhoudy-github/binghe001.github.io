(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{553:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第51章-增强控制器方法-深度解析-modelattribute注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第51章-增强控制器方法-深度解析-modelattribute注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第51章-增强控制器方法：深度解析@ModelAttribute注解")]),t._v(" "),n("p",[t._v("作者：冰河\n"),n("br"),t._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-51",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-51"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),n("p",[n("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@ModelAttribute注解标注方法和参数的案例和流程，从源码级别彻底掌握@ModelAttribute注解在Spring底层的执行流程。")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("本章目录如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("学习指引")]),t._v(" "),n("li",[t._v("注解说明\n"),n("ul",[n("li",[t._v("注解源码")]),t._v(" "),n("li",[t._v("使用场景")])])]),t._v(" "),n("li",[t._v("使用案例")]),t._v(" "),n("li",[t._v("源码时序图\n"),n("ul",[n("li",[t._v("执行@ModelAttribute标注的方法")]),t._v(" "),n("li",[t._v("执行控制器方法")])])]),t._v(" "),n("li",[t._v("源码解析\n"),n("ul",[n("li",[t._v("执行@ModelAttribute标注的方法")]),t._v(" "),n("li",[t._v("执行控制器方法")])])]),t._v(" "),n("li",[t._v("总结")]),t._v(" "),n("li",[t._v("思考")]),t._v(" "),n("li",[t._v("VIP服务")])]),t._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),n("p",[n("code",[t._v("Spring中的@ModelAttribute注解，你真的彻底了解过吗？")])]),t._v(" "),n("p",[t._v("Spring支持将数据存入某个数据结构，例如Model、Map、ModelMap中，然后使用@ModelAttribute注解从这些数据结构中将数据获取出来，赋值给方法中的参数。那么问题来了，你了解过Spring中的@ModelAttribute注解吗？")]),t._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),n("p",[n("code",[t._v("关于@ModelAttribute注解的一点点说明~~")])]),t._v(" "),n("p",[t._v("@ModelAttribute注解支持将数据存入某个数据结构，然后在方法的参数上使用@ModelAttribute注解从数据结构中获取之前存入的数据。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),n("p",[t._v("@ModelAttribute注解的源码详见：org.springframework.web.bind.annotation.ModelAttribute。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* @author Juergen Hoeller\n * @author Rossen Stoyanchev\n * @author Sebastien Deleuze\n * @since 2.5\n * @see ControllerAdvice\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Reflective")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAttribute")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.3\n\t */")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.3\n\t */")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("binding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("从源码可以看出，@ModelAttribute注解是从Spring2.5版本开始提供的注解，可以标注到参数和方法上。当标注到方法上时，表示执行控制器类的方法之前，会先执行使用@ModelAttribute注解标注的方法向Model、Map、ModelMap等数据结构中存入数据。当标注到参数上时，能够从Model、Map、ModelMap等数据结构中获取数据，并赋值给参数。")]),t._v(" "),n("p",[t._v("在@ModelAttribute注解中，提供了如下属性。")]),t._v(" "),n("ul",[n("li",[t._v("value：String类型的属性，如果注解标注到方法上，表示存入数据时的Key，存入数据的值是方法的返回值。如果注解标注到参数上，则可以从Model、Map和ModelMap等数据结构中获取数据，此时表示要获取的数据的Key。")]),t._v(" "),n("li",[t._v("name：从Spring4.3版本开始提供的String类型的属性，作用与value属性相同。")]),t._v(" "),n("li",[t._v("binding：从Spring4.3版本开始提供的boolean类型的属性，表示是否支持绑定数据，true：支持，false：不支持。默认为true。")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),n("p",[t._v("在基于SpringMVC或者SpringBoot开发Web应用程序时，如果需要在控制器方法执行之前执行一些方法，处理一些数据逻辑，然后将数据存储到诸如Model、Map和ModelMap等数据结构中。随后，在控制器方法中自动获取之前存储的数据，并将其绑定到方法的参数上，此时就可以使用@ModelAttribute注解实现。")]),t._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),n("p",[t._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),n("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=e.exports}}]);