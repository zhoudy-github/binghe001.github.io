(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{490:function(a,t,n){"use strict";n.r(t);var s=n(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《spring核心技术》第41章-maven构建native-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第41章-maven构建native-image"}},[a._v("#")]),a._v(" 《Spring核心技术》第41章：Maven构建Native Image")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("源码地址："),t("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-41",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-41"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("hr"),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("本章难度")]),a._v("：★★★☆☆")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("本章重点")]),a._v("：掌握使用Maven构建Native Image的环境搭建过程，掌握将Java代码通过Native Image构建成可执行的二进制文件的方式与过程。")])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("本章目录如下所示：")]),a._v(" "),t("ul",[t("li",[a._v("学习指引")]),a._v(" "),t("li",[a._v("搭建项目环境")]),a._v(" "),t("li",[a._v("使用GraalVM SDK构建\n"),t("ul",[t("li",[a._v("配置pom.xml文件")]),a._v(" "),t("li",[a._v("编译项目")]),a._v(" "),t("li",[a._v("测试可执行文件")])])]),a._v(" "),t("li",[a._v("使用GraalVM BuildTools构建\n"),t("ul",[t("li",[a._v("配置pom.xml文件")]),a._v(" "),t("li",[a._v("编译项目")]),a._v(" "),t("li",[a._v("测试可执行文件")])])]),a._v(" "),t("li",[a._v("总结")]),a._v(" "),t("li",[a._v("VIP服务")])]),a._v(" "),t("h2",{attrs:{id:"一、学习指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),t("p",[t("code",[a._v("如何通过Maven直接将Java代码构建成二进制文件？")])]),a._v(" "),t("p",[a._v("在上一篇文章中，实现了通过手动的方式将Java代码构建成二进制日志，其中大部分内容都在安装GraalVM环境和C++编译环境。本章，就一起实现通过Maven直接将Java代码构建成二进制文件。")]),a._v(" "),t("h2",{attrs:{id:"二、搭建项目环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、搭建项目环境"}},[a._v("#")]),a._v(" 二、搭建项目环境")]),a._v(" "),t("p",[t("code",[a._v("完成Maven项目的搭建与开发~~")])]),a._v(" "),t("p",[a._v("本节，完成Maven测试项目的搭建与开发，项目开发比较简单，就是新建spring-annotation-chapter-41工程，并新增SpringNativeTest类。")]),a._v(" "),t("p",[a._v("SpringNativeTest类源码详见：spring-annotation-chapter-41工程下的io.binghe.spring.annotation.chapter41.SpringNativeTest。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringNativeTest")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello Spring6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("接下来，就以SpringNativeTest类为例，使用Maven直接构建二进制执行文件。")]),a._v(" "),t("h2",{attrs:{id:"三、使用graalvm-sdk构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、使用graalvm-sdk构建"}},[a._v("#")]),a._v(" 三、使用GraalVM SDK构建")]),a._v(" "),t("p",[t("code",[a._v("使用GraalVM SDK直接构建二进制文件~~")])]),a._v(" "),t("p",[a._v("GraalVM基于Maven提供了SDK，可以通过GraalVM SDK直接将Java代码构建成可执行的二进制文件，实现起来也比较简单，就是在Maven项目的pom.xml文件中进行简单的配置。")]),a._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),t("p",[a._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);