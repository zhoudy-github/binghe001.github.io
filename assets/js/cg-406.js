(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{698:function(t,r,v){"use strict";v.r(r);var _=v(7),e=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第12章-实现服务消费者与服务提供者直接通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第12章-实现服务消费者与服务提供者直接通信"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第12章：实现服务消费者与服务提供者直接通信")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("-https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("我不想用测试模块模拟的服务消费者，想根据自定义协议和数据编解码开发一个简易版的服务消费者，实现服务消费者与服务提供者之间的数据通信，我该怎么办呢？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("不想用测试模块模拟的服务消费者，那样调用服务提供者的服务就显得太low了！")])]),t._v(" "),r("p",[t._v("在前面的章节中，服务提供者实现了根据自定义协议和数据的编解码来接收服务消费者发送过来的数据，对数据进行解析后，能够基于Java反射和CGLib两种方式实现真实方法的调用。")]),t._v(" "),r("p",[t._v("但是，有个美中不足的地方就是服务消费者是通过在测试模块模拟出来的，并且启动服务消费者的底层Netty代码直接写在了测试的main()方法中。实际上，任何一个RPC框架都不会自己动手写启动Netty服务的代码，所以，这部分逻辑要是重构的。一方面是要对外屏蔽底层复杂的代码，一方面是让用户使用起来尽量简洁。")]),t._v(" "),r("p",[t._v("所以，我们要对服务消费者下手了。")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("我想在使用服务消费者时，只需要传递必要的参数，就能与服务提供者通信！")])]),t._v(" "),r("p",[t._v("在使用RPC框架开发分布式系统时，你见过哪个RPC框架需要开发者自己手动写Netty客户端连接服务端的代码吗？反正我是没见过，就拿Dubbo来说吧，我们不需要关注底层的通信细节，只需要进行简单的配置或者在类和字段上标注简单的注解即可实现远程过程调用。")]),t._v(" "),r("p",[t._v("这一章，先不实现配置化和注解化，我们先屏蔽掉服务消费者与服务提供者进行通信时，对外需要自己手动写Netty客户端连接服务端的逻辑代码。启动服务消费者之后，服务消费者连接服务提供者，向服务提供者发送必要的参数，并接收服务提供者返回的结果数据。")]),t._v(" "),r("p",[t._v("好了，目标就是这个，开始干吧。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你屏蔽掉RPC服务消费者基于Netty连接服务提供者的细节，并实现二者之间的通信，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("服务消费者对外屏蔽掉基于Netty连接服务提供者的细节后，与服务提供者之间基于自定义的网络传输协议和数据编解码实现数据通信的过程如图12-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图12-1 数据通信过程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-08-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图12-1可以看出，服务消费者与服务提供者之间的通信过程如下所示。")]),t._v(" "),r("p",[t._v("（1）服务消费者会屏蔽基于Netty连接服务提供者的细节。")]),t._v(" "),r("p",[t._v("（2）服务消费者基于自定义网络传输协议和数据编解码对数据进行编码处理，向服务提供者发送数据。")]),t._v(" "),r("p",[t._v("（3）服务提供者接收到服务消费者发送过来的数据后，根据自定义网络协议和数据编解码解析数据，对数据进行解码处理，对解码后的数据进行逻辑处理。")]),t._v(" "),r("p",[t._v("（4）服务提供者处理完逻辑后，会将结果数据根据自定义的网络传输协议和数据编解码进行编码，响应给服务消费者。")]),t._v(" "),r("p",[t._v("（5）服务消费者接收到服务提供者响应的数据后，根据自定义的网络传输协议和数据编解码对数据进行解码操作，并对解码后的数据进行进一步处理。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，到底该如何实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-codec：实现bhrpc框架的自定义编解码功能。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-consumer：服务消费者父工程（"),r("strong",[t._v("第12章新增")]),t._v("）")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-consumer-common：服务消费者通用工程（"),r("strong",[t._v("第12章新增")]),t._v("）")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-provider：服务提供者父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-serialization：实现bhrpc框架序列化与反序列化功能的父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-serialization-api：实现bhrpc框架序列化与反序列化功能的通用接口工程。")]),t._v(" "),r("li",[t._v("bhrpc-serialization-jdk：以JDK的方式实现序列化与反序列化功能。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test：测试bhrpc框架的父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-test-api：测试的通用Servcie接口工程")]),t._v(" "),r("li",[t._v("bhrpc-test-provider：测试服务提供者的工程。")]),t._v(" "),r("li",[t._v("bhrpc-test-consumer：测试服务消费者的工程\n"),r("ul",[r("li",[t._v("bhrpc-test-consumer-codec：测试服务消费者基于自定义网络协议与编解码与服务提供者进行数据交互")]),t._v(" "),r("li",[t._v("bhrpc-test-consumer-handler：测试屏蔽服务消费者基于Netty与服务提供者建立连接的细节后，与服务提供者进行数据通信（"),r("strong",[t._v("第12章新增")]),t._v("）")])])]),t._v(" "),r("li",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心类实现关系"}},[t._v("#")]),t._v(" 2.核心类实现关系")]),t._v(" "),r("p",[t._v("服务消费者对外屏蔽掉基于Netty连接服务提供者的细节后，与服务提供者之间基于自定义的网络传输协议和数据编解码实现数据通信的核心类关系如图12-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图12-2 数据通信核心类关系","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-08-002.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=e.exports}}]);