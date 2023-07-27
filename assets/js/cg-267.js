(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{563:function(t,r,n){"use strict";n.r(r);var a=n(7),e=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《spring核心技术》第34章-深度解析spring事务的执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《spring核心技术》第34章-深度解析spring事务的执行流程"}},[t._v("#")]),t._v(" 《Spring核心技术》第34章：深度解析Spring事务的执行流程")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码地址："),r("a",{attrs:{href:"https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/binghe001/spring-annotation-book/tree/master/spring-annotation-chapter-29"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("hr"),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("本章难度")]),t._v("：★★★★☆")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("本章重点")]),t._v("：从源码级别彻底掌握Spring底层执行事务的流程。")])])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("本章目录如下所示：")]),t._v(" "),r("ul",[r("li",[t._v("学习指引")]),t._v(" "),r("li",[t._v("源码时序图\n"),r("ul",[r("li",[t._v("事务整体流程")]),t._v(" "),r("li",[t._v("创建事务流程")]),t._v(" "),r("li",[t._v("调用目标方法流程")]),t._v(" "),r("li",[t._v("提交事务流程")]),t._v(" "),r("li",[t._v("回滚事务流程")])])]),t._v(" "),r("li",[t._v("源码解析\n"),r("ul",[r("li",[t._v("事务整体流程")]),t._v(" "),r("li",[t._v("创建事务流程")]),t._v(" "),r("li",[t._v("调用目标方法流程")]),t._v(" "),r("li",[t._v("提交事务流程")]),t._v(" "),r("li",[t._v("回滚事务流程")])])]),t._v(" "),r("li",[t._v("总结")]),t._v(" "),r("li",[t._v("思考")]),t._v(" "),r("li",[t._v("VIP服务")])]),t._v(" "),r("h2",{attrs:{id:"一、学习指引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、学习指引"}},[t._v("#")]),t._v(" 一、学习指引")]),t._v(" "),r("p",[r("code",[t._v("Spring事务用了那么久，你知道事务的执行流程吗？")])]),t._v(" "),r("p",[t._v("在声明式事务篇章前面的文章中，系统介绍了Spring事务的概述信息，并提供了案例实战程序，深度解析了Spring事务的隔离级别和传播机制，深度解析了深度解析@EnableTransactionManagement注解在Spring底层的执行流程，也详细分析了Spring底层解析@Transactional注解的流程。本章，就系统介绍下Spring事务的执行流程。")]),t._v(" "),r("h2",{attrs:{id:"二、源码时序图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、源码时序图"}},[t._v("#")]),t._v(" 二、源码时序图")]),t._v(" "),r("p",[r("code",[t._v("结合时序图理解源码会事半功倍，你觉得呢？")])]),t._v(" "),r("p",[t._v("结合源码时序图理解Spring底层的源码执行流程，会理解的更加深刻。本节就以源码时序图的方式，直观的感受下Spring事务在源码层面的执行流程。本节，主要从事务的整体流程、创建事务的流程、提交事务的流程和回滚事务的流程几个方面介绍Spring事务在源码层面的执行流程。")]),t._v(" "),r("p",[r("strong",[t._v("注意：本节的源码时序图以第29章中的案例程序为基础进行分析。")])]),t._v(" "),r("h3",{attrs:{id:"_2-1-事务整体流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事务整体流程"}},[t._v("#")]),t._v(" 2.1 事务整体流程")]),t._v(" "),r("p",[t._v("Spring底层执行事务整体流程的源码时序图如图34-1~34-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图34-1","data-src":"https://binghe.gitcode.host/assets/images/frame/spring/ioc/spring-core-2023-03-31-001.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=e.exports}}]);