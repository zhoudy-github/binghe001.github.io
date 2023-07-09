(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{517:function(t,a,n){"use strict";n.r(a);var s=n(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《spring核心技术》第30章-深度解析spring事务三大接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第30章-深度解析spring事务三大接口"}},[t._v("#")]),t._v(" 《Spring核心技术》第30章：深度解析Spring事务三大接口")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("源码地址："),a("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本章重点")]),t._v("：进一步学习并掌握Spring事务的三大接口，从源码解析彻底理解Spring事务三大接口的设计和流程。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("本章目录如下所示：")]),t._v(" "),a("ul",[a("li",[t._v("学习指引")]),t._v(" "),a("li",[t._v("PlatformTransactionManager接口")]),t._v(" "),a("li",[t._v("TransactionDefinition接口")]),t._v(" "),a("li",[t._v("TransactionStatus接口")]),t._v(" "),a("li",[t._v("总结")]),t._v(" "),a("li",[t._v("思考")]),t._v(" "),a("li",[t._v("VIP服务")])]),t._v(" "),a("h2",{attrs:{id:"一、学习指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),a("p",[a("code",[t._v("你了解过Spring事务的三大接口吗？")])]),t._v(" "),a("p",[t._v("Spring能够支持事务的管理功能，最核心的就是Spring事务的三大接口，这三大接口分别为：PlatformTransactionManager、TransactionDefinition和TransactionStatus，本章就对这三大接口进行简单的介绍。")]),t._v(" "),a("h2",{attrs:{id:"二、platformtransactionmanager接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、platformtransactionmanager接口"}},[t._v("#")]),t._v(" 二、PlatformTransactionManager接口")]),t._v(" "),a("p",[a("code",[t._v("分析下PlatformTransactionManager接口~~")])]),t._v(" "),a("p",[t._v("通过Spring的源码，可以得知：Spring并不是直接管理事务的，而是提供了多种事务管理器。通过这些事务管理器，Spring将事务管理的职责委托给了Hibernate、MyBatis或者JTA等持久化框架的事务来实现。")]),t._v(" "),a("p",[t._v("PlatformTransactionManager接口的源码详见：org.springframework.transaction.PlatformTransactionManager。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlatformTransactionManager")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionManager")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t *获取事务状态\n\t */")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionStatus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTransaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Nullable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionDefinition")]),t._v(" definition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t *提交事务\n\t */")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionStatus")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n\t *回滚事务\n\t */")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionStatus")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransactionException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("通过PlatformTransactionManager接口，Spring为Hibernate、MyBatis或者JTA等持久化框架提供了事务管理器，但是具体的实现还是要各自的框架自己完成。")]),t._v(" "),a("h2",{attrs:{id:"三、transactiondefinition接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、transactiondefinition接口"}},[t._v("#")]),t._v(" 三、TransactionDefinition接口")]),t._v(" "),a("p",[a("code",[t._v("分析下TransactionDefinition接口~~")])]),t._v(" "),a("p",[t._v("TransactionDefinition接口的源码详见：org.springframework.transaction.TransactionDefinition。")]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=r.exports}}]);