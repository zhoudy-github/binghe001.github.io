(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{547:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《spring核心技术》第45章-方法映射-深度解析-requestmapping注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第45章-方法映射-深度解析-requestmapping注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第45章-方法映射：深度解析@RequestMapping注解")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("源码地址："),s("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-45",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-45"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@RequestMapping注解注册映射关系和定位HandlerMethod的案例和流程，从源码级别彻底掌握@RequestMapping注解在Spring底层的执行流程。")])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("本章目录如下所示：")]),t._v(" "),s("ul",[s("li",[t._v("学习指引")]),t._v(" "),s("li",[t._v("注解说明\n"),s("ul",[s("li",[t._v("注解源码")]),t._v(" "),s("li",[t._v("衍生注解")]),t._v(" "),s("li",[t._v("使用场景")])])]),t._v(" "),s("li",[t._v("使用案例")]),t._v(" "),s("li",[t._v("源码时序图\n"),s("ul",[s("li",[t._v("建立映射关系")]),t._v(" "),s("li",[t._v("定位处理方法")]),t._v(" "),s("li",[t._v("访问处理方法")])])]),t._v(" "),s("li",[t._v("源码解析\n"),s("ul",[s("li",[t._v("建立映射关系")]),t._v(" "),s("li",[t._v("定位处理方法")]),t._v(" "),s("li",[t._v("访问处理方法")]),t._v(" "),s("li",[t._v("容错处理机制")])])]),t._v(" "),s("li",[t._v("总结")]),t._v(" "),s("li",[t._v("思考")]),t._v(" "),s("li",[t._v("VIP服务")])]),t._v(" "),s("h2",{attrs:{id:"一、学习指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),s("p",[s("code",[t._v("Spring中的@RequestMapping注解，你真的彻底了解过吗？")])]),t._v(" "),s("p",[t._v("基于SpringMVC或者SpringBoot开发过Web应用程序的小伙伴，一定对@RequestMapping这个注解不陌生，在方法上标注了@RequestMapping注解后，通过某个链接就能够访问到对应的方法，那你知道@RequestMapping注解在源码层面的执行流程吗？")]),t._v(" "),s("p",[t._v("本章，就对@RequestMapping注解在源码层面的执行流程一探究竟。")]),t._v(" "),s("h2",{attrs:{id:"二、注解说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),s("p",[s("code",[t._v("关于@RequestMapping注解的一点点说明~~")])]),t._v(" "),s("p",[t._v("在类上标注了@Controller注解或者@RestController注解之后，同时方法上如果标注了@RequestMapping注解，则方法会和某个链接自动建立映射关系，通过链接地址就能够访问到对应的方法。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-注解源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),s("p",[t._v("@RequestMapping注解的源码详见：org.springframework.web.bind.annotation.RequestMapping。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author Juergen Hoeller\n * @author Arjen Poutsma\n * @author Sam Brannen\n * @since 2.5\n * @see GetMapping\n * @see PostMapping\n * @see PutMapping\n * @see DeleteMapping\n * @see PatchMapping\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapping")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Reflective")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ControllerMappingReflectiveProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * @since 4.2\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AliasFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t * GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE.\n\t */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n\t * RequestMapping(value = "/something", headers = "content-type=text/*")\n\t */')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n\t * consumes = "text/plain"\n\t * consumes = {"text/plain", "application/*"}\n\t * consumes = MediaType.TEXT_PLAIN_VALUE\n\t */')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n\t * produces = "text/plain"\n\t * produces = {"text/plain", "application/*"}\n\t * produces = MediaType.TEXT_PLAIN_VALUE\n\t * produces = "text/plain;charset=UTF-8"\n\t */')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br")])]),s("p",[t._v("从源码可以看出，@RequestMapping注解是从Spring2.5版本开始提供的注解，可以标注到类和方法上，并且在@RequestMapping注解中提供了多个属性。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("name：String类型的属性，为请求的URL指定一个名称。")])]),t._v(" "),s("li",[s("p",[t._v("value：String数组类型的属性，指定请求的URL。")])]),t._v(" "),s("li",[s("p",[t._v("path：从Spring4.2版本开始提供的String数组类型的属性，作用与value属性相同。")])]),t._v(" "),s("li",[s("p",[t._v("method：RequestMethod枚举数组类型的属性，用于指定请求的方法，取值可以为RequestMethod枚举类型中的GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE。既可以指定单个RequestMethod枚举类型，也可以同时指定多个RequestMethod枚举类型，不指定时，表示处理所有的RequestMethod枚举类型。")])]),t._v(" "),s("li",[s("p",[t._v("params：String数组类型的属性，用于指定请求参数，支持简单的表达式，使用params属性时，要求请求的参数Key和Value必须与params属性中配置的Key和Value相同。例如下面的示例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", params = {"userName"})：表示请求参数中必须有userName。')]),t._v(" "),s("li",[t._v('@RequestMapping(value = "/binghe", params = {"userId = 1001"})：表示请求的参数中Key为userId，值为1001。')])]),t._v(" "),s("p",[t._v("可以使用params属性实现同一个URL映射到不同的方法上，请求时根据不同的参数映射到不同的方法上。")])]),t._v(" "),s("li",[s("p",[t._v("headers：String数组类型的属性，用于指定请求头信息，主要是限制请求头的信息，当请求头中必须包含某些指定的头信息时，才能让方法处理请求。例如下面的示例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", headers = "content-type=text/*")')])])]),t._v(" "),s("li",[s("p",[t._v("consumes：String数组类型的属性，用于指定要接收的请求体（消息体）的类型，只有满足这些类型的请求才会被处理，不指定时，表示处理所有类型。取值可以参见：org.springframework.http.MediaType。例如下面的示例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", consumes = {"text/plain", "application/*"})')]),t._v(" "),s("li",[t._v('@RequestMapping(value = "/binghe", consumes = MediaType.TEXT_PLAIN_VALUE)')])]),t._v(" "),s("p",[t._v("还有一点就是consumes属性支持类似逻辑非操作，例如下面的示例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", consumes = {"!text/plain", "application/*"})')]),t._v(" "),s("li",[t._v('@RequestMapping(value = "/binghe", consumes = !MediaType.TEXT_PLAIN_VALUE)')])])]),t._v(" "),s("li",[s("p",[t._v("produces：String数组类型的属性，用于指定要响应的消息体的类型，指定的类型必须是请求头（Accept）中所包含的类型。当请求头（Accept）中包含指定的类型时才会响应结果，取值可以参见：org.springframework.http.MediaType。例如下面的实例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", produces= {"text/plain", "application/*"})')]),t._v(" "),s("li",[t._v('@RequestMapping(value = "/binghe", produces = MediaType.TEXT_PLAIN_VALUE)')])]),t._v(" "),s("p",[t._v("还有一点就是produces属性支持类似逻辑非操作，例如下面的示例所示。")]),t._v(" "),s("ul",[s("li",[t._v('@RequestMapping(value = "/binghe", produces = {"!text/plain", "application/*"})')]),t._v(" "),s("li",[t._v('@RequestMapping(value = "/binghe", produces = !MediaType.TEXT_PLAIN_VALUE)')])]),t._v(" "),s("p",[s("strong",[t._v("注意：使用@RequestMapping注解时，只要出现两个或以上的属性时，多个属性之间的关系是与关系，表示必须同时满足条件才会处理。")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-衍生注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-衍生注解"}},[t._v("#")]),t._v(" 2.2 衍生注解")]),t._v(" "),s("p",[t._v("@RequestMapping注解还有五个衍生注解，分别如下所示。")]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);