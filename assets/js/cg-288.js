(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{584:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《spring核心技术》第57章-会话数据-深度解析-sessionattributes注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第57章-会话数据-深度解析-sessionattributes注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第57章-会话数据：深度解析@SessionAttributes注解")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("源码地址："),s("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-57",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-57"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@SessionAttributes注解的案例和流程，从源码级别彻底掌握@SessionAttributes注解在Spring底层的执行流程。")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("本章目录如下所示：")]),t._v(" "),s("ul",[s("li",[t._v("学习指引")]),t._v(" "),s("li",[t._v("注解说明\n"),s("ul",[s("li",[t._v("注解源码")]),t._v(" "),s("li",[t._v("使用场景")])])]),t._v(" "),s("li",[t._v("使用案例")]),t._v(" "),s("li",[t._v("源码时序图\n"),s("ul",[s("li",[t._v("请求方法")]),t._v(" "),s("li",[t._v("重定向请求")]),t._v(" "),s("li",[t._v("访问重定向后的方法")])])]),t._v(" "),s("li",[t._v("源码解析\n"),s("ul",[s("li",[t._v("请求方法")]),t._v(" "),s("li",[t._v("重定向请求")]),t._v(" "),s("li",[t._v("访问重定向后的方法")])])]),t._v(" "),s("li",[t._v("总结")]),t._v(" "),s("li",[t._v("思考")]),t._v(" "),s("li",[t._v("VIP服务")])]),t._v(" "),s("h2",{attrs:{id:"一、学习指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),s("p",[s("code",[t._v("Spring中的@SessionAttributes注解，你真的彻底了解过吗？")])]),t._v(" "),s("p",[t._v("在全面的文章中，介绍了@SessionAttribute注解，@SessionAttribute注解只能标注到方法的参数上，能够通过属性名称即可从当前Session的作用域中获取对应的数据。本章，就简单介绍下@SessionAttributes注解，尽管两个注解相似度比较高，仅仅相差一个字母s，但二者的差异还是蛮大的。")]),t._v(" "),s("h2",{attrs:{id:"二、注解说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),s("p",[s("code",[t._v("关于@SessionAttributes注解的一点点说明~~")])]),t._v(" "),s("p",[t._v("@SessionAttributes注解能够将数据保存到当前Session的作用域中，随后可以使用@SessionAttributes注解从当前作用域中获取数据，也可以使用HttpSession从当前作用域中获取数据。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-注解源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),s("p",[t._v("@SessionAttributes注解的源码详见：org.springframework.web.bind.annotation.SessionAttributes。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author Juergen Hoeller\n * @author Sam Brannen\n * @since 2.5\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inherited")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SessionAttributes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"names"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.2\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("names")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("从源码可以看出，@SessionAttributes注解是从Spring2.5版本开始提供的注解，只能标注到类上，并且在@SessionAttributes注解中提供了如下属性。")]),t._v(" "),s("ul",[s("li",[t._v("value：String数组类型的属性，表示要存入Session作用域中的名称。")]),t._v(" "),s("li",[t._v("names：String数组类型的属性，作用与value属性相同。")]),t._v(" "),s("li",[t._v("types：Class数组类型的属性，表示要存入Session域中的类的Class类型。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),s("p",[t._v("在基于SpringMVC或者SpringBoot开发应用程序时，如果不想使用Servlet API操作Session数据，就可以使用@SessionAttributes注解实现把数据存入Session作用域。这样，就能够与Servlet API进行解耦，无需一次次手动向Session作用域中保存数据和读取数据。")]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);