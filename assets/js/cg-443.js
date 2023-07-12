(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{740:function(t,r,a){"use strict";a.r(r);var e=a(7),v=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第7章-自定义网络编解码的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第7章-自定义网络编解码的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第7章：自定义网络编解码的实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("RPC框架实现了自定义协议就能自动传输数据了吗？答案肯定是不行，除了自定义协议，还要实现另一种技能。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("自定义网络编解码是个什么鬼？")])]),t._v(" "),r("p",[t._v("数据都会按照某种协议在网络中进行传输，比如可以按照HTTP协议进行传输、可以按照HTTPS协议进行传输、可以按照TCP协议进行传输、可以按照UDP协议进行传输等等。但是，只是有了协议是远远不够的。例如，我们需要将一个客户端的Java对象通过网络传输到服务端，只是有了协议的话，是不行的，我们还要思考：如何将Java对象转化成我们定义好的协议格式在网络中进行传输。其实，这就涉及到网络的编解码了。")]),t._v(" "),r("p",[t._v("RPC框架作为分布式系统底层通信的基础设施框架，本身就是为分布式远程过程调用而设计的，它的出现就是为解决高效的远程通信问题。和一些通用的网络协议一样，尽管RPC框架会自定义网络传输协议，但是只有网络传输协议是远远不够的，也同样需要数据的编解码功能。")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("如何在设计好自定义的网络传输协议的基础上，实现数据的编解码功能呢？")])]),t._v(" "),r("p",[t._v("在前面的章节中，为bhrpc框架实现了自定义的网络传输协议， 但是对于数据的编解码操作，还是使用的Netty自带的StringEncoder和StringDecoder。对于自定义的网络传输协议来说，使用Netty自带的数据编解码类已经不满足需求。此时，就需要我们自定义数据的编解码功能。")]),t._v(" "),r("p",[t._v("当数据由服务消费者通过网络发送到服务提供者之前，就需要对数据进行编码，将数据序列化成符合对应协议的二进制字节流。当数据的二进制字节流传输到服务提供者时，就需要对二进制字节流进行解码，将二进制字节流按照对应的协议反序列化成相应的数据。数据由服务提供者传输到服务消费者也是一样的流程。")]),t._v(" "),r("p",[t._v("说干就干，接下来，我们就一起设计和实现自定义的数据编解码功能。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果让你为bhrpc框架设计自定义的数据编解码功能，你会怎么做呢？")])]),t._v(" "),r("p",[t._v("服务消费者与服务提供者之间的数据交互过程如图7-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图7-1 服务消费者与服务提供者之间的数据交互","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-02-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图7-1可以看出，服务消费者向服务提供者发送数据前，先通过编码器根据自定义的网络传输协议将数据编码成二进制字节流，二进制字节流通过网络由服务消费者传输到服务提供者，在服务提供者处理数据前，先由解码器根据自定义的网络传输协议对二进制流进行解码，解码出对应的数据后，再对数据进行进一步处理。")]),t._v(" "),r("p",[t._v("当服务提供者处理完数据时，向服务消费者响应数据之前，先通过编码器根据自定义的网络传输协议对数据进行编码，将数据编码成二进制字节流，二进制字节流通过网络由服务提供者传输到服务消费者，服务消费者接收到二进制流数据时，先通过解码器根据自定义的网络传输协议对二进制流数据进行解码，解码出对应的数据后做进一步的处理。")]),t._v(" "),r("p",[t._v("整个过程就需要实现数据的编解码器。")]),t._v(" "),r("p",[t._v("细心的读者可以发现，服务消费者端用一个虚线矩形锁包裹起来，这是因为在本章我们还是侧重实现服务提供者端，后续会使用单独一章来测试服务消费者和服务提供者之间的通信过程。")]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，自定义的网络编解码到底该如何实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")]),t._v(" "),r("li",[t._v("bhrpc-codec：实现bhrpc框架的自定义编解码功能。")]),t._v(" "),r("li",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")]),t._v(" "),r("li",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")]),t._v(" "),r("li",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider：服务提供者父工程。\n"),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[t._v("bhrpc-serialization：实现bhrpc框架序列化与反序列化功能的父工程。\n"),r("ul",[r("li",[t._v("bhrpc-serialization-api：实现bhrpc框架序列化与反序列化功能的通用接口工程。")]),t._v(" "),r("li",[t._v("bhrpc-serialization-jdk：以JDK的方式实现序列化与反序列化功能。")])])]),t._v(" "),r("li",[t._v("bhrpc-test：测试bhrpc框架的父工程。\n"),r("ul",[r("li",[t._v("bhrpc-test-provider：测试服务提供者的工程。")]),t._v(" "),r("li",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心实现类关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心实现类关系"}},[t._v("#")]),t._v(" 2.核心实现类关系")]),t._v(" "),r("p",[t._v("核心实现类关系如图7-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图7-2  核心实现类关系","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-02-002.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("其中，最主要的接口和类就是RpcCodec、RpcEncoder、RpcDecoder、SerializerException、SerializationUtils、Serialization和JdkSerialization。其中，每个类的具体功能如下所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=v.exports}}]);