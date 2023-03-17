(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{677:function(t,r,a){"use strict";a.r(r);var _=a(7),v=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第8章-模拟服务消费者与服务提供者之间的数据交互"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第8章-模拟服务消费者与服务提供者之间的数据交互"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第8章：模拟服务消费者与服务提供者之间的数据交互")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("设计好自定义的网络传输协议和自定义数据编解码后，服务消费者与服务提供者之间该如何进行通信呢？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("如何模拟服务消费者与服务提供者之间的数据交互？")])]),t._v(" "),r("p",[t._v("RPC框架最主要的功能就是要实现服务消费者与服务提供者之间高效的数据通信，服务消费者能够将数据高效的传输到服务提供者，服务提供者处理完数据后，又能够将处理结果高效的返回服务消费者，二者之间的数据交互才是RPC框架最核心，也是最基础的功能。")]),t._v(" "),r("p",[t._v("无论你用过何种RPC框架，无论RPC框架的性能多么优越，从本质上来讲，就是要实现分布式系统中各个子系统之间高效的数据通信。从这一点来说，我们自定义的网络通信协议和自定义的数据编解码都需要能够保证数据在服务消费者与服务提供者之间实现高效的数据通信。")]),t._v(" "),r("p",[t._v("那我们自定义的网络通信协议和自定义的数据编解码，到底能不能实现服务消费者与服务提供者之间的数据通信呢？这就需要我们进行进一步的验证和测试。")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("基于自定义的网络传输协议和数据编解码，能实现服务消费者与服务提供者之间的数据通信吗？")])]),t._v(" "),r("p",[t._v("在前面的章节中，实现了自定义的网络传输协议，并且基于自定义的网络传输协议实现了数据的编解码功能。在服务提供者中，使用自定义的数据编解码类替换了Netty自带的编解码类。至此，在服务提供者一侧就实现了自定义的网络通信协议和自定义的数据编解码，如图8-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图8-1 服务提供者端实现了自定义网络传输协议和数据编解码","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-03-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图8-1可以看出，此时仍使用一个虚线矩形将服务消费者圈起来了，这是由于截止到目前，我们主要是在不断完善服务提供者的功能，对于服务消费者，还未实现任何功能。")]),t._v(" "),r("p",[t._v("本章，我们就需要基于自定义的网络传输协议和自定义的数据编解码来模拟实现一个服务消费者，并实现服务消费者与服务提供者之间的数据交互。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你基于自定义的网络传输协议和数据编解码，实现服务消费者与服务提供者之间的数据通信，你会怎么做？")])]),t._v(" "),r("p",[t._v("服务消费者与服务提供者之间都能够基于自定义的网络传输协议和数据编解码实现数据交互时，此时的通信过程就如图8-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-10-03-002","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-03-002.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("此时，无论是服务消费者还是服务提供者，都会使用自定义的网路传输协议和自定义编解码进行数据通信。")]),t._v(" "),r("p",[t._v("很多读者可能不太清楚，搞一个RPC框架为何还要自定义网络传输协议和自定义数据编解码呢？总结起来，主要有如下原因。")]),t._v(" "),r("ul",[r("li",[t._v("通用的网络传输协议冗余字段太多，会造成网络通信不够高效，需要精简，传输的数据越少越好。")]),t._v(" "),r("li",[t._v("RPC框架作为分布式系统底层通信的基础设施框架，对其性能的要求是非常高的，需要在协议设计和编解码设计上投入比较大的精力。")]),t._v(" "),r("li",[t._v("通用的网络传输协议难以结合具体场景实现自定义的传输格式与传输位标识。")])]),t._v(" "),r("p",[t._v("接下来，就基于自定义的网络传输协议和数据编解码模拟实现一个服务消费者，并实现服务消费者与服务提供者之间的数据交互。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，如何实现服务消费者与服务提供者之间的数据交互呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")]),t._v(" "),r("li",[t._v("bhrpc-codec：实现bhrpc框架的自定义编解码功能。")]),t._v(" "),r("li",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")]),t._v(" "),r("li",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")]),t._v(" "),r("li",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider：服务提供者父工程。\n"),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[t._v("bhrpc-serialization：实现bhrpc框架序列化与反序列化功能的父工程。\n"),r("ul",[r("li",[t._v("bhrpc-serialization-api：实现bhrpc框架序列化与反序列化功能的通用接口工程。")]),t._v(" "),r("li",[t._v("bhrpc-serialization-jdk：以JDK的方式实现序列化与反序列化功能。")])])]),t._v(" "),r("li",[t._v("bhrpc-test：测试bhrpc框架的父工程。\n"),r("ul",[r("li",[t._v("bhrpc-test-provider：测试服务提供者的工程。")]),t._v(" "),r("li",[t._v("bhrpc-test-consumer：测试服务消费者的工程（第8章新增的项目工程）\n"),r("ul",[r("li",[t._v("bhrpc-test-consumer-codec：测试服务消费者基于自定义网络协议与编解码与服务提供者进行数据交互（第8章新增的项目工程）")])])]),t._v(" "),r("li",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心类实现关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心类实现关系"}},[t._v("#")]),t._v(" 2.核心类实现关系")]),t._v(" "),r("p",[t._v("在模拟实现服务消费者与服务提供者之间的数据交互时，服务消费者实现类之间的关系如图8-3所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图8-3 核心类实现关系","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-03-003.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=v.exports}}]);