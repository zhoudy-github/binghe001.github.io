(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{854:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第108章-服务容错失效问题修复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第108章-服务容错失效问题修复"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第108章：服务容错失效问题修复")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客1："),s("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客2："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("目前，我们自己手写的RPC框架已经完成了整体设计、服务提供者的实现、服务消费者的实现、注册中心的实现、负载均衡的实现、SPI扩展序列化机制、SPI扩展动态代理机制、SPI扩展反射机制、SPI扩展负载均衡策略、SPI扩展增强型负载均衡策略、SPI扩展实现注册中心、心跳机制、增强型心跳机制、重试机制、整合Spring、整合SpringBoot、整合Docker、整合SpringCloud Alibaba、结果缓存、路由控制、延迟连接、并发控制、流控分析、连接控制、SPI扩展连接淘汰策略和数据缓冲等篇章。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("在测试服务容错功能时，竟然发现服务容错功能失效了！")])]),t._v(" "),s("p",[t._v("在前面的章节中，测试服务容错功能时，当服务提供者调用真实方法时，采用jdk、cglib、javassist和bytebuddy反射机制调用真实方法时，都能正常进行容错处理。但是当服务提供者调用真实方法时，采用asm反射机制调用真实方法时，却无法正常完成容错处理，这到底是怎么回事呢？")]),t._v(" "),s("h2",{attrs:{id:"二、问题重现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、问题重现"}},[t._v("#")]),t._v(" 二、问题重现")]),t._v(" "),s("p",[s("code",[t._v("重现下遇到的问题呗？")])]),t._v(" "),s("h3",{attrs:{id:"_1-修改服务提供者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改服务提供者"}},[t._v("#")]),t._v(" 1.修改服务提供者")]),t._v(" "),s("p",[t._v("修改bhrpc-demo-native-provider工程下的io.binghe.rpc.demo.provider.ProviderNativeDemo#startRpcSingleServer()方法，将调用真实方法的反射类型reflectType参数修改成asm，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startRpcSingleServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcSingleServer")]),t._v(" singleServer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcSingleServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:27880"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:27880"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2181"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zookeeper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"random"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.binghe.rpc.demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"print"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refuse"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    singleServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startNettyServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"_2-启动服务提供者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动服务提供者"}},[t._v("#")]),t._v(" 2.启动服务提供者")]),t._v(" "),s("p",[t._v("运行bhrpc-demo-native-provider工程下的io.binghe.rpc.demo.provider.ProviderNativeDemo#startRpcSingleServer()方法，输出的信息如下所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":48:09,547  INFO BaseServer:168 - Server started on "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:27880\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("可以看到，服务提供者成功连接到Zookeeper，并且启动后监听的IP地址为127.0.0.1，端口为27880。")]),t._v(" "),s("h3",{attrs:{id:"_3-启动服务消费者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动服务消费者"}},[t._v("#")]),t._v(" 3.启动服务消费者")]),t._v(" "),s("p",[t._v("运行bhrpc-demo-native-consumer工程下的io.binghe.demo.consumer.ConsumerNativeDemo#testInterfaceRpc()方法，如下所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":48:20,211  INFO ConsumerNativeDemo:48 - 返回的结果数据"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" null\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("可以看到，服务消费者打印的返回结果竟然为null，并没有调用服务容错类的方法。")]),t._v(" "),s("h3",{attrs:{id:"_4-查看服务提供者日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看服务提供者日志"}},[t._v("#")]),t._v(" 4.查看服务提供者日志")]),t._v(" "),s("p",[t._v("查看服务提供者日志，如下所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("java.lang.reflect.InvocationTargetException\n//"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###########省略其他代码############")]),t._v("\nCaused by: io.binghe.rpc.common.exception.RpcException: rpc provider throws exception\n\tat io.binghe.rpc.demo.provider.impl.ProviderDemoServiceImpl.hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ProviderDemoServiceImpl.java:36"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("可以看到，服务提供者抛出了异常，但是，RPC框架并没有执行服务容错处理。这到底是怎么回事呢？")]),t._v(" "),s("h2",{attrs:{id:"三、目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、目标"}},[t._v("#")]),t._v(" 三、目标")]),t._v(" "),s("p",[s("code",[t._v("目标很明确：当服务提供者采用asm反射机制调用真实方法时，需要支持容错处理！")])]),t._v(" "),s("p",[t._v("在服务提供者采用asm反射机制调用真实方法时，由于某种原因，RPC框架并没有执行容错处理逻辑，本章，我们的目标就是需要RPC框架在服务提供者采用asm反射机制调用真实方法时，支持容错处理。")]),t._v(" "),s("h2",{attrs:{id:"四、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),s("p",[s("code",[t._v("说了这么多，改怎么实现呢？")])]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=r.exports}}]);