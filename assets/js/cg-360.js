(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{653:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第4章-实现rpc服务核心注解的扫描与解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第4章-实现rpc服务核心注解的扫描与解析"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第4章：实现RPC服务核心注解的扫描与解析")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("在第3章中，我们详细说明了RPC核心注解@RpcService和@RpcReference的设计与实现。")]),t._v(" "),a("p",[t._v("@RpcService注解主要使用的场景是：标注到RPC服务实现类上，如果某个接口的实现类被标注了@RpcService注解，则这个接口与实现类会被发布为RPC服务，对外提供远程服务。使用@RpcService注解标注的服务承担服务提供者的角色。")]),t._v(" "),a("p",[t._v("@RpcReference注解主要使用的场景：标注到类字段上，这个字段的引用就是某个标注了@RpcService注解的实现类对应的接口的实例，如果一个类的某个字段被@RpcReference注解标注，则这个类可以通过@RpcReference注解标注的字段来调用使用@RpcService注解标注的对应的远程服务。使用@RpcReference注解标注的服务承担服务消费者的角色。")]),t._v(" "),a("h2",{attrs:{id:"一、文章总体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、文章总体结构"}},[t._v("#")]),t._v(" 一、文章总体结构")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-08-22-001","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-22-001.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"二、设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、设计思路"}},[t._v("#")]),t._v(" 二、设计思路")]),t._v(" "),a("p",[t._v("在实现的RPC框架中的服务提供者、服务消费者、注册中心和监控中心四个部分中，最为核心的就是服务提供者和服务消费者。服务提供提供者和服务消费者要做到支持远程Java调用、整合Spring的xml配置方式调用、整合Spring注解调用、整合SpringBoot调用等等。并且还需要支持同步调用、异步调用、回调和单向调用。")]),t._v(" "),a("p",[t._v("在设计上，服务提供者将自身对外提供的服务注册到注册中心，服务消费者从注册中心订阅到服务提供者提供的服务后，即使注册中心发生宕机不可用，服务提供者与服务消费者之间也能够正常通信。")]),t._v(" "),a("p",[t._v("既然服务提供者和服务消费者需要支持原生的Java方式调用，那么，就需要自行开发一套扫描@RpcService注解和@RpcReference注解的逻辑，而不是直接依赖Spring的包扫描逻辑。")]),t._v(" "),a("p",[t._v("接下来，还需要在性能与实现两个方面做权衡和取舍。")]),t._v(" "),a("p",[t._v("首先，在服务提供者一侧，当使用Java原生程序启动服务提供者时，通过扫描所有实现类上的@RpcService注解将对应的服务注册到注册中心，这种方式没啥问题。")]),t._v(" "),a("p",[t._v("其次，在服务消费者一侧，当使用Java原生程序启动服务消费者时，通过扫描所有@RpcReference注解的类字段，并创建对应实例的代理对象的方式，比起直接通过服务消费者客户端创建服务引用的代理对象的方式性能上略微低下，所以，在设计使用Java原生程序启动服务消费者时，"),a("strong",[t._v("支持直接通过服务消费者客户端和扫描@RpcReference注解两种方式")]),t._v(" 创建服务应用的代理对象。")]),t._v(" "),a("h2",{attrs:{id:"三、实现通用扫描器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、实现通用扫描器"}},[t._v("#")]),t._v(" 三、实现通用扫描器")]),t._v(" "),a("p",[t._v("在设计思路时，已经确定了如果使用Java的原生程序启动服务提供者和服务消费者时，需要自行实现一套包扫描逻辑，而不是直接使用Spring提供的包扫描。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-通用扫描器需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-通用扫描器需求"}},[t._v("#")]),t._v(" 3.1  通用扫描器需求")]),t._v(" "),a("p",[t._v("在针对于@RpcService注解和@RpcReference注解开发包扫描逻辑之前，我们可以首先实现一个扫描指定包下的所有类的逻辑，具体的需求点如下。")]),t._v(" "),a("ul",[a("li",[t._v("扫描指定包下的所有类，无论这个类是在当前项目中，还是在引用的Jar文件中，都需要被扫描到。")]),t._v(" "),a("li",[t._v("真正需要扫描的类文件的后缀必须是.class，因为只有.class文件是Java编译出的类文件。")]),t._v(" "),a("li",[t._v("返回指定包下所有类的完整类名称集合。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-通用扫描器实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-通用扫描器实现"}},[t._v("#")]),t._v(" 3.2  通用扫描器实现")]),t._v(" "),a("p",[t._v("在bhrpc-learning工程下创建bhrpc-common子工程模块，在建bhrpc-common子工程模块的pom.xml文件中添加如下依赖。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.binghe.rpc"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("bhrpc-annotation"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${project.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=n.exports}}]);