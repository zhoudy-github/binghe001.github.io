(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{550:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"《spring核心技术》第52章-增强控制器方法-深度解析-exceptionhandler注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第52章-增强控制器方法-深度解析-exceptionhandler注解"}},[t._v("#")]),t._v(" 《Spring核心技术》第52章-增强控制器方法：深度解析@ExceptionHandler注解")]),t._v(" "),n("p",[t._v("作者：冰河\n"),n("br"),t._v("星球："),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("博客："),n("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("文章汇总："),n("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("源码地址："),n("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-52",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-52"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),n("p",[n("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握@ExceptionHandler注解捕获异常的案例和流程，从源码级别彻底掌握@ExceptionHandler注解在Spring底层的执行流程。")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("本章目录如下所示：")]),t._v(" "),n("ul",[n("li",[t._v("学习指引")]),t._v(" "),n("li",[t._v("注解说明\n"),n("ul",[n("li",[t._v("注解源码")]),t._v(" "),n("li",[t._v("使用场景")])])]),t._v(" "),n("li",[t._v("使用案例")]),t._v(" "),n("li",[t._v("源码时序图\n"),n("ul",[n("li",[t._v("获取参数")]),t._v(" "),n("li",[t._v("调用控制器方法")]),t._v(" "),n("li",[t._v("捕获异常")])])]),t._v(" "),n("li",[t._v("源码解析\n"),n("ul",[n("li",[t._v("获取参数")]),t._v(" "),n("li",[t._v("调用控制器方法")]),t._v(" "),n("li",[t._v("捕获异常")])])]),t._v(" "),n("li",[t._v("总结")]),t._v(" "),n("li",[t._v("思考")]),t._v(" "),n("li",[t._v("VIP服务")])]),t._v(" "),n("h2",{attrs:{id:"一、学习指引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),n("p",[n("code",[t._v("Spring中的@ExceptionHandler注解，你真的彻底了解过吗？")])]),t._v(" "),n("p",[t._v("在基于SpringMVC或者SpringBoot开发Web应用时，往往需要在程序中处理很多的异常情况，如果在程序中大量使用try-catch代码块来捕获异常则显得代码比较杂乱。即使在程序中使用了大量的try-catch代码块来捕获异常，也难免会存在未捕获的异常，一旦在生产环境中触发了这些未捕获的异常，可能会造成意想不到的后果。那有什么办法来统一捕获和处理这些异常吗？")]),t._v(" "),n("h2",{attrs:{id:"二、注解说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解说明"}},[t._v("#")]),t._v(" 二、注解说明")]),t._v(" "),n("p",[n("code",[t._v("关于@ExceptionHandler注解的一点点说明~~")])]),t._v(" "),n("p",[t._v("@ExceptionHandler注解能够统一捕获并处理异常，在@ExceptionHandler标注的方法中可以同一捕获异常，根据具体情况向客户端程序提示具体的友好异常信息。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-注解源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-注解源码"}},[t._v("#")]),t._v(" 2.1 注解源码")]),t._v(" "),n("p",[t._v("@ExceptionHandler注解的源码详见：org.springframework.web.bind.annotation.ExceptionHandler。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author Arjen Poutsma\n * @author Juergen Hoeller\n * @since 3.0\n * @see ControllerAdvice\n * @see org.springframework.web.context.request.WebRequest\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Reflective")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionHandlerReflectiveProcessor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionHandler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("从源码可以看出，@ExceptionHandler注解是从Spring3.0版本开始提供的注解，只能标注到方法上，并且在@ExceptionHandler注解中提供了如下属性信息。")]),t._v(" "),n("ul",[n("li",[t._v("value：Class数组类型的属性，主要是用于指定捕获的异常类型。")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用场景"}},[t._v("#")]),t._v(" 2.2 使用场景")]),t._v(" "),n("p",[t._v("如果在基于SpringMVC或者SpringBoot开发应用程序时，想统一捕获并处理异常信息，就可以使用@ExceptionHandler注解实现。")]),t._v(" "),n("h2",{attrs:{id:"查看完整文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),n("p",[t._v("加入"),n("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),n("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);n.default=e.exports}}]);