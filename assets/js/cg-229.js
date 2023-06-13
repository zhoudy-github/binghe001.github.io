(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{522:function(t,a,n){"use strict";n.r(a);var s=n(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第38章-深度解析spring事务失效的八大场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第38章-深度解析spring事务失效的八大场景"}},[t._v("#")]),t._v(" 《Spring核心技术》第38章：深度解析Spring事务失效的八大场景")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-37",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-37"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("本章难度")]),t._v("：★★★☆☆")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本章重点")]),t._v("：掌握Spring事务失效的八大场景，并理解导致Spring事务失效的根本问题。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本章目录如下所示：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("学习指引")])]),t._v(" "),a("li",[a("p",[t._v("失效场景")]),t._v(" "),a("ul",[a("li",[t._v("数据库不支持事务")]),t._v(" "),a("li",[t._v("事务方法未被Spring管理")]),t._v(" "),a("li",[t._v("方法没有被public修饰")]),t._v(" "),a("li",[t._v("同一类中方法调用")]),t._v(" "),a("li",[t._v("未配置事务管理器")]),t._v(" "),a("li",[t._v("方法的事务传播类型不支持事务")]),t._v(" "),a("li",[t._v("不正确的捕获异常")]),t._v(" "),a("li",[t._v("错误的标注异常类型")])])]),t._v(" "),a("li",[a("p",[t._v("总结")])]),t._v(" "),a("li",[a("p",[t._v("思考")])]),t._v(" "),a("li",[a("p",[t._v("VIP服务")])])]),t._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),a("p",[a("code",[t._v("明明配置了Spring事务，怎么就失效了呢？")])]),t._v(" "),a("p",[t._v("在日常工作中，如果对Spring的事务管理功能使用不当，则会造成Spring事务不生效的问题。本章就简单总结下在哪些场景下Spring的事务会不生效。")]),t._v(" "),a("h2",{attrs:{id:"二、失效场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、失效场景"}},[t._v("#")]),t._v(" 二、失效场景")]),t._v(" "),a("p",[a("code",[t._v("Spring事务在哪些场景下会失效呢？")])]),t._v(" "),a("p",[t._v("有时候明明在项目中配置了Spring事务，但就是不生效，这是为什么呢？本节，就给大家介绍下Spring事务失效最常见的八大场景。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-数据库不支持事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-数据库不支持事务"}},[t._v("#")]),t._v(" 2.1 数据库不支持事务")]),t._v(" "),a("p",[t._v("Spring事务生效的前提是所连接的数据库要支持事务，如果底层的数据库都不支持事务，则Spring的事务肯定会失效。例如，如果使用的数据库为MySQL，并且选用了MyISAM存储引擎，则Spring的事务就会失效。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-事务方法未被spring管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-事务方法未被spring管理"}},[t._v("#")]),t._v(" 2.2 事务方法未被Spring管理")]),t._v(" "),a("p",[t._v("如果事务方法所在的类没有加载到Spring IOC容器中，也就是说，事务方法所在的类没有被Spring管理，则Spring事务会失效，示例如下。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductDao")]),t._v(" productDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("propagation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Propagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REQUIRES_NEW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateProductStockCountById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" stockCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        productDao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateProductStockCountById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stockCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("ProductService类上没有标注@Service注解，Product的实例没有加载到Spring IOC容器中，就会造成updateProductStockCountById()方法的事务在Spring中失效。")]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=r.exports}}]);