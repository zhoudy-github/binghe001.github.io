(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{548:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第49章-绑定参数-深度解析-requestheader注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第49章-绑定参数-深度解析-requestheader注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第49章-绑定参数：深度解析@RequestHeader注解")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-49",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-49"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@RequestHeader注解解析消息头参数的案例和流程，从源码级别彻底掌握@RequestHeader注解在Spring底层的执行流程。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本章目录如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("学习指引")]),t._v(" "),a("li",[t._v("注解说明\n"),a("ul",[a("li",[t._v("注解源码")]),t._v(" "),a("li",[t._v("使用场景")])])]),t._v(" "),a("li",[t._v("使用案例")]),t._v(" "),a("li",[t._v("源码时序图")]),t._v(" "),a("li",[t._v("源码解析")]),t._v(" "),a("li",[t._v("总结")]),t._v(" "),a("li",[t._v("思考")]),t._v(" "),a("li",[t._v("VIP服务")])]),t._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),a("p",[a("code",[t._v("Spring中的@RequestHeader注解，你真的彻底了解过吗？")])]),t._v(" "),a("p",[t._v("在前面介绍的绑定控制器方法参数的注解中，基本都是绑定的请求参数和请求体中的数据，在Spring中，提供了一个@RequestHeader注解可以解析存放在请求头中的参数，")]),t._v(" "),a("p",[t._v("本节，就对@RequestHeader注解获取参数的案例和执行流程一探究竟。")]),t._v(" "),a("h2",{attrs:{id:"二、注解说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),a("p",[a("code",[t._v("关于@RequestHeader注解的一点点说明~~")])]),t._v(" "),a("p",[t._v("使用@RequestHeader注解可以获取到存放在请求头中的参数信息。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-注解源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),a("p",[t._v("@RequestHeader注解的源码详见：org.springframework.web.bind.annotation.RequestHeader。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* @author Juergen Hoeller\n * @author Sam Brannen\n * @since 3.0\n * @see RequestMapping\n * @see RequestParam\n * @see CookieValue\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestHeader")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.2\n\t */")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValueConstants")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_NONE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("从源码可以看出，@RequestHeader注解是从Spring3.0开始提供的注解，只能标注到参数上，并且在@RequestHeader注解中，提供了如下属性信息。")]),t._v(" "),a("ul",[a("li",[t._v("value：String类型的属性，用于指定消息头的名称。")]),t._v(" "),a("li",[t._v("name：Spring从4.2版本开始提供的String类型的属性，作用与value属性相同。")]),t._v(" "),a("li",[t._v("required：boolean类型的属性，用于指定是否必须有此消息头。true：必须有，false：非必须有。如果设置为true时，请求中没有此消息头会强制报错，默认为true。")]),t._v(" "),a("li",[t._v("defaultValue：String类型的属性，用于指定消息头的默认值。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),a("p",[t._v("如果需要在方法中获取请求头中的参数，就可以使用@RequestHeader注解实现从请求头中获取消息头的参数值，并将其赋值给控制器类中的方法的形参。")]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);