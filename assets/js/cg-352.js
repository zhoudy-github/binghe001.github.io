(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{643:function(t,r,a){"use strict";a.r(r);var v=a(7),_=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第10章-测试服务提供者调用真实方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第10章-测试服务提供者调用真实方法"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第10章：测试服务提供者调用真实方法")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe001.github.io"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("服务提供者接收到服务消费者发送过来的数据后，调用真实方法的逻辑该如何测试呢？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("既然你说实现了RPC框架的服务提供者调用真实方法的逻辑，不测试下怎么行？")])]),t._v(" "),r("p",[t._v("在前面的章节中，服务提供者通过反射技术实现了调用真实方法的功能，这也是RPC能够实现调用远程方法的必不可少的基础功能之一。那既然实现了服务提供者调用真实方法的功能，不测试下怎么行？不测试下怎么就知道写的逻辑到底对不对呢？")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("服务提供者实现了调用真实方法的能力，要测试下，看到效果，大家才会相信的！")])]),t._v(" "),r("p",[t._v("有句话说的非常好：实践是检验真理的唯一标准。")]),t._v(" "),r("p",[t._v("既然前面的章节中，实现了服务提供者调用真实方法的逻辑，但不测试，看不到效果，大家谁会相信你写的服务提供者的代码就一定会调用真实的方法呢？一切都要以数据和效果说话的。")]),t._v(" "),r("p",[t._v("本章，就主要通过模拟服务消费者与服务提供者之间的数据交互来验证服务提供者是否真正调用了真实方法。如果服务提供者调用了真实方法，则测试通过。否则，测试不通过，我们就继续改代码。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你独立设计测试流程和测试代码，你该如何设计呢？")])]),t._v(" "),r("p",[t._v("这里，使用的测试用例还是在前面章节中大家起来的测试用例，并且在之前测试用例的基础上进行稍许的改动。")]),t._v(" "),r("p",[t._v("测试过程中服务消费者与服务提供者之间，服务提供者与真实方法之间的数据交互与第9章中的图9-2相同，这里再次将这个图展示给大家。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图9-2 整体流程设计","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-04-002.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("服务消费者与服务提供者之间，服务提供者与真实方法之间的数据交互的具体说明大家就参考第9章的内容了，我就不再赘述了。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，测试服务提供者调用真实方法的代码改如何实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-codec：实现bhrpc框架的自定义编解码功能。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-provider：服务提供者父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-serialization：实现bhrpc框架序列化与反序列化功能的父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-serialization-api：实现bhrpc框架序列化与反序列化功能的通用接口工程。")]),t._v(" "),r("li",[t._v("bhrpc-serialization-jdk：以JDK的方式实现序列化与反序列化功能。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test：测试bhrpc框架的父工程。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("bhrpc-test-api：测试的通用Servcie接口工程（第10章新增的测试子工程）")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test-provider：测试服务提供者的工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test-consumer：测试服务消费者的工程")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-test-consumer-codec：测试服务消费者基于自定义网络协议与编解码与服务提供者进行数据交互")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心类实现关系"}},[t._v("#")]),t._v(" 2.核心类实现关系")]),t._v(" "),r("p",[t._v("（1）测试服务提供者调用真实方法时，服务提供者核心类之间的关系如图10-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图10-1 服务提供者核心类之间的关系","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-05-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("可以看到，在服务提供者端类之间的关系还是比较复杂的，大家重点理解类与类之间的逻辑关系即可。整个服务提供者的启动入口类就是RpcSingleServerTest。")]),t._v(" "),r("p",[t._v("（2）测试服务提供者调用真实方法时，服务消费者核心类之间的关系如图10-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图10-2 服务消费者核心类之间的关系","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-10-05-002.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("可以看到，在服务消费者端RpcTestConsumer类是启动整个服务消费者程序的入口，并且核心类之间主要以依赖关系为主。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);