(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{541:function(t,r,e){"use strict";e.r(r);var a=e(7),n=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《spring核心技术》第25章-深度解析构建aop拦截器链的流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第25章-深度解析构建aop拦截器链的流程"}},[t._v("#")]),t._v(" 《Spring核心技术》第25章：深度解析构建AOP拦截器链的流程")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码地址："),r("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-22",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-22"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("hr"),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("本章重点")]),t._v("：从源码级别彻底Spring底层构建AOP拦截器链的执行流程。")])])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("本章目录如下所示：")]),t._v(" "),r("ul",[r("li",[t._v("学习指引")]),t._v(" "),r("li",[t._v("源码时序图\n"),r("ul",[r("li",[t._v("创建Bean构建增强器链")]),t._v(" "),r("li",[t._v("初始化Bean之后执行后置处理器构建拦截器链")])])]),t._v(" "),r("li",[t._v("源码解析\n"),r("ul",[r("li",[t._v("创建Bean构建增强器链")]),t._v(" "),r("li",[t._v("初始化Bean之后执行后置处理器构建拦截器链")])])]),t._v(" "),r("li",[t._v("总结")]),t._v(" "),r("li",[t._v("思考")]),t._v(" "),r("li",[t._v("VIP服务")])]),t._v(" "),r("h2",{attrs:{id:"一、学习指引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),r("p",[r("code",[t._v("AOP拦截器链，你真的彻底了解过吗？")])]),t._v(" "),r("p",[t._v("Spring中的AOP在底层执行的过程中，本质上是以一个拦截器链的形式执行每个标注了通知注解（@Before、@After、@AfterReturning、@AfterThrowing和@Around）的方法，本章，就一起彻底搞懂Spring底层构建AOP拦截器链的过程。")]),t._v(" "),r("p",[r("strong",[t._v("注意：本章会以第22章的案例程序为基础解析切入点表达式的源码时序图和源码执行流程。")])]),t._v(" "),r("h2",{attrs:{id:"二、源码时序图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、源码时序图"}},[t._v("#")]),t._v(" 二、源码时序图")]),t._v(" "),r("p",[r("code",[t._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),t._v(" "),r("p",[t._v("Spring底层会在创建Bean构建增强器链和初始化Bean之后执行后置处理器构建拦截器链，本节，就从创建Bean和初始化Bean之后执行后置处理器两个方面分析Spring底层构建AOP拦截器链的源码时序图。")]),t._v(" "),r("h3",{attrs:{id:"_2-1-创建bean构建增强器链"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建bean构建增强器链"}},[t._v("#")]),t._v(" 2.1 创建Bean构建增强器链")]),t._v(" "),r("p",[t._v("Spring底层在创建Bean时涉及到的构建AOP增强器链的源码时序图如图25-1~25-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图25-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-22-001.png",loading:"lazy"}})]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图25-2","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-22-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=n.exports}}]);