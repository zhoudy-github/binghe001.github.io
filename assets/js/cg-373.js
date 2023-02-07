(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{664:function(t,r,_){"use strict";_.r(r);var v=_(7),a=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第16章-服务消费者回调方法的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第16章-服务消费者回调方法的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第16章：服务消费者回调方法的实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("目前我们自己手写的RPC框架的服务消费者支持以同步、异步和单向调用的方式与服务提供者进行数据交互，我还想让服务消费者支持回调方法，这点需求不过份吧？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("这个框架已经支持了同步、异步和单向调用，但是我就是想让它再支持回调，说吧，能不能实现？")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们实现了RPC框架的服务消费者支持以同步、异步和单向调用的方式与服务提供者进行数据交互。具体的实现方式如下：")]),t._v(" "),r("p",[t._v("（1）同步调用：外部服务调用服务消费者向服务提供者发送数据的方法后，需要同步等待服务消费者返回的结果数据。")]),t._v(" "),r("p",[t._v("（2）异步调用：外部服务调用服务消费者向服务提供者发送数据的方法后，不需要同步等待服务消费者返回的结果数据，只需要从RpcContext上下文中获取到RPCFuture对象，调用RPCFuture对象的get()方法获取数据即可。")]),t._v(" "),r("p",[t._v("（3）单向调用：外部服务调用服务消费者向服务提供者发送数据的方法后，不必关心返回的结果数据。")]),t._v(" "),r("p",[t._v("除了这三种调用方式外，我们想想如何实现服务消费者的回调方法？")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("撸起袖子加油干，服务消费者就是要支持回调方法！")])]),t._v(" "),r("p",[t._v("说的直白点回调方法就是调用方向被调用方发起请求，或者调用方调用被调用方的方法时，传入一个回调接口，当被调用方执行完业务逻辑后，会触发回调接口中方法的执行。")]),t._v(" "),r("p",[t._v("还是有点绕，这么说吧，比如服务A中的方法a调用服务B中的方法b，服务B中的方法b需要传入一个回调接口作为参数，在服务A的方法a中会创建回调接口的实例对象作为参数，传递给服务B中的方法b，服务B中方法b在执行完业务逻辑后，会调用回调接口的方法。此时，就会触发服务A的方法a中的回调接口实例对象实现的方法逻辑。")]),t._v(" "),r("p",[t._v("那RPC框架为何要实现回调方法呢？大家可以试想一个场景，在某些场景下，当服务消费者接收到服务提供者响应的结果数据后，需要立刻主动触发外部服务的某些方法，此时，就需要回调方法的支持。在外部服务中，调用服务消费者向服务提供者发送数据的方法后，不必关心服务消费者返回的结果数据，只需要处理好回调方法即可，服务消费者会通过回调方法将返回的结果数据传递给外部服务。")]),t._v(" "),r("p",[t._v("本章的目标就是实现服务消费者的回调方法。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果是让你设计服务消费者端的回调方法，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("服务消费者支持回调方法的设计如图16-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图16-1 服务消费者支持回调方法的设计","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-06-30-004.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("可以看到，服务消费者支持回调方法的流程如下所示。")]),t._v(" "),r("p",[t._v("（1）服务消费者传递必要的参数，向服务提供者发起RPC请求。")]),t._v(" "),r("p",[t._v("（2）服务消费者不会等待服务提供者返回结果数据，会立刻返回。")]),t._v(" "),r("p",[t._v("（3）服务提供者接收到服务消费者发送过来的数据，执行业务逻辑。")]),t._v(" "),r("p",[t._v("（4）服务提供者执行完业务逻辑后，会向服务消费者响应结果数据。")]),t._v(" "),r("p",[t._v("（5）服务消费者端RPC模块接收到服务提供者返回的结果数据后，会主动触发回调方法，将结果数据传递给外部服务。")]),t._v(" "),r("p",[t._v("看起来设计还是挺简单的，接下来，就是一起实现它了！")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-codec：实现bhrpc框架的自定义编解码功能。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-consumer：服务消费者父工程")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-consumer-common：服务消费者通用工程")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-provider：服务提供者父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-serialization：实现bhrpc框架序列化与反序列化功能的父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-serialization-api：实现bhrpc框架序列化与反序列化功能的通用接口工程。")]),t._v(" "),r("li",[t._v("bhrpc-serialization-jdk：以JDK的方式实现序列化与反序列化功能。")])])]),t._v(" "),r("li",[r("p",[t._v("bhrpc-test：测试bhrpc框架的父工程。")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-test-api：测试的通用Servcie接口工程")]),t._v(" "),r("li",[t._v("bhrpc-test-provider：测试服务提供者的工程。")]),t._v(" "),r("li",[t._v("bhrpc-test-consumer：测试服务消费者的工程\n"),r("ul",[r("li",[t._v("bhrpc-test-consumer-codec：测试服务消费者基于自定义网络协议与编解码与服务提供者进行数据交互")]),t._v(" "),r("li",[t._v("bhrpc-test-consumer-handler：测试屏蔽服务消费者基于Netty与服务提供者建立连接的细节后，与服务提供者进行数据通信")])])]),t._v(" "),r("li",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心类实现关系"}},[t._v("#")]),t._v(" 2.核心类实现关系")]),t._v(" "),r("p",[t._v("服务消费者实现回调的实现类关系如图16-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图16-2 消费者实现回调的核心类关系","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-12-001.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);