(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{453:function(a,t,r){"use strict";r.r(t);var e=r(7),v=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《spring核心技术》第40章-手动构建native-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第40章-手动构建native-image"}},[a._v("#")]),a._v(" 《Spring核心技术》第40章：手动构建Native Image")]),a._v(" "),t("p",[a._v("作者：冰河\n"),t("br"),a._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),a._v(" "),t("br"),a._v("源码地址："),t("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-40",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-40"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀，成长，突破，帮助他人，成就自我。")])]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("hr"),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("本章难度")]),a._v("：★★★☆☆")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("本章重点")]),a._v("：掌握构建Native Image的环境搭建过程，掌握将Java代码通过Native Image构建成可执行的二进制文件的方式与过程。")])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("本章目录如下所示：")]),a._v(" "),t("ul",[t("li",[a._v("学习指引")]),a._v(" "),t("li",[a._v("安装GraalVM环境\n"),t("ul",[t("li",[a._v("下载GraalVM")]),a._v(" "),t("li",[a._v("配置环境变量")]),a._v(" "),t("li",[a._v("安装native-image插件")])])]),a._v(" "),t("li",[a._v("安装C++编译环境\n"),t("ul",[t("li",[a._v("下载Visual Studio")]),a._v(" "),t("li",[a._v("安装Visual Studio")]),a._v(" "),t("li",[a._v("配置环境变量")])])]),a._v(" "),t("li",[a._v("构建Native Image\n"),t("ul",[t("li",[a._v("编写Java代码")]),a._v(" "),t("li",[a._v("构建Native Image")])])]),a._v(" "),t("li",[a._v("总结")]),a._v(" "),t("li",[a._v("VIP服务")])]),a._v(" "),t("h2",{attrs:{id:"一、学习指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[a._v("#")]),a._v(" 一、学习指引")]),a._v(" "),t("p",[t("code",[a._v("一起将Java代码构建成本地可执行文件吧！")])]),a._v(" "),t("p",[a._v("学过Java的小伙伴都知道，运行Java程序前，我们写的Java代码会由Java编译器编译成字节码，运行在JVM中，由JVM将其翻译成机器码。整个过程是需要JVM参与的，也就是说，Java程序是需要运行在JVM之上的。")]),a._v(" "),t("p",[a._v("GraalVM提供了预编译技术，能够提前将Java代码直接编译成本机可执行的二进制文件，也就是使得Java程序在运行时能够摒弃JVM，和C/C++一样通过编译器直接将代码编译成机器代码，然直接后运行。")]),a._v(" "),t("h2",{attrs:{id:"二、安装graalvm环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装graalvm环境"}},[a._v("#")]),a._v(" 二、安装GraalVM环境")]),a._v(" "),t("p",[t("code",[a._v("一起安装GraalVM环境吧~~")])]),a._v(" "),t("p",[a._v("本节，一起安装GraalVM环境，用于后续将Java代码编译成二进制文件。")]),a._v(" "),t("h3",{attrs:{id:"_2-1-下载graalvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载graalvm"}},[a._v("#")]),a._v(" 2.1 下载GraalVM")]),a._v(" "),t("p",[t("strong",[a._v("（1）打开链接下载")])]),a._v(" "),t("p",[a._v("打开链接："),t("a",{attrs:{href:"https://www.graalvm.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.graalvm.org/downloads/"),t("OutboundLink")],1),a._v("下载GraalVM，如图40-1所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图40-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-04-06-001.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以看到，这里下载的GraalVM是22.3社区版，点击“Download”。")]),a._v(" "),t("p",[t("strong",[a._v("（2）选择版本")])]),a._v(" "),t("p",[a._v("选择Java版本和操作系统类型，这里是使用的JDK版本是17，操作系统是64位Windows，所以，选择的Java版本是17，操作系统是Windows(amd64)，如图40-2所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图40-2","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-04-06-002.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_2-2-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置环境变量"}},[a._v("#")]),a._v(" 2.2 配置环境变量")]),a._v(" "),t("p",[a._v("下载完成后解压，并配置系统环境变量。")]),a._v(" "),t("p",[t("strong",[a._v("注意：本节假设你已经配置过Java环境，即配置过JAVA_HOME、CLASS_PATH和PATH环境变量。")])]),a._v(" "),t("p",[t("strong",[a._v("（1）添加GRAALVM_HOME环境变量")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图40-3","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-04-06-003.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[a._v("#")]),a._v(" 查看完整文章")]),a._v(" "),t("p",[a._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=v.exports}}]);