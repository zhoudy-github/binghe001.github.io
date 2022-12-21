(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{649:function(t,r,a){"use strict";a.r(r);var e=a(7),_=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《rpc手撸专栏》第6章-自定义网络传输协议的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第6章-自定义网络传输协议的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第6章：自定义网络传输协议的实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("RPC框架作为分布式系统底层通信的基础设施框架，远程过程通信没有网络传输协议怎么行？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[r("code",[t._v("RPC框架要如何才能轻松拿捏自定义网络协议？")])]),t._v(" "),r("p",[t._v("RPC作为分布式系统底层通信的基础设施框架，最主要的功能就是进行远程过程调用，这种调用方式不用想，肯定会涉及到网络传输。通常情况中，只要是涉及到数据在网络过程中传输，都是要通过某种协议进行的。例如HTTP协议、TPC协议、UDP协议这种。")]),t._v(" "),r("p",[t._v("数据由发送方发送到接收方之前，会通过某种协议将其编码成二进制流，通过网络将二进制流传输到接收方后，会根据协议将其解码成对应的数据。当接收方处理完数据返回结果前，也需要先通过协议将返回的数据编码成二进制流，通过网络传输到发送方后，根据协议将二进制数据解码成对应的数据。整个过程如图6-1所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图6-1 数据在发送方与接收方之间的传输过程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-09-30-001.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图6-1可以看出，网络协议在整个网络通信过程中是至关重要的，是数据进行编解码的依据。")]),t._v(" "),r("p",[t._v("说的直白点，就好比两个打电话的人，比如张三给李四打电话，三张好比是数据的发送方，李四好比是数据的接收方。张三给李四打电话，李四接通电话后，二者就建立了连接。张三与李四通话的过程中，不管是三张说话还是李四说话，说话的语音信息在网络中传输之前，都会先将语音信息根据通话协议编码成二进制流，传输到对方后，再根据通话协议将二进制流解码成语音信息。如图6-2所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图6-2 张三与李四的通话过程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-09-30-002.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("可以看到，数据在网络传输的过程中是需要通过某种协议进行编码和解码的。")]),t._v(" "),r("h2",{attrs:{id:"二、目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),r("p",[r("code",[t._v("bhrpc框架的数据交互需要实现自定义网络传输协议，这个目标如何实现？")])]),t._v(" "),r("p",[t._v("在前面的章节中，我们实现了bhrpc框架服务提供者收发消息的基础功能，使用了Netty自带的编码器StringEncoder和Netty自带的解码器StringDecoder。也就是在之前的章节中，系统终端和服务提供者之间传输数据时使用的是Netty自带的封装好的协议。但是，Netty本身封装好的协议对于实现RPC框架来说，无论是协议的定制化方面，还是后期对于性能调优方面，都会是一个性能瓶颈点。")]),t._v(" "),r("p",[t._v("所以，在实现bhrpc框架的过程中，需要我们自己实现自定义的网络传输协议，在自定义的网络传输协议的实现中，我们可以加入一些框架中特有的信息、也可以根据具体需要自定义网络传输协议的格式、长度等信息，甚至可以在自定义的网络传输协议中根据具体需要添加一些预留字段，以方便后期扩展。")]),t._v(" "),r("p",[t._v("说干就干，接下来，我们就一起设计和实现自定义的网络传输协议。")]),t._v(" "),r("h2",{attrs:{id:"三、设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),r("p",[r("code",[t._v("如果是让你设计网络传输协议，你会怎么设计呢？")])]),t._v(" "),r("p",[t._v("一般情况下，网络传输协议的设计可以包含消息头和消息体两部分，如图6-3所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图6-3 通用网络传输协议结构","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-09-30-003.png",loading:"lazy"}})]),t._v(" "),r("ul",[r("li",[t._v("一个完整的网络传输协议可以分为消息头和消息体。")]),t._v(" "),r("li",[t._v("消息头中主要存放的是一些对应整个消息的定义信息，比如协议的类型、状态、消息id、消息的长度等等信息。")]),t._v(" "),r("li",[t._v("消息体中主要存放的就是具体的传输数据。")])]),t._v(" "),r("p",[t._v("我们可以按照这个网络传输协议的通用逻辑来设计自定义网络传输协议，同样，bhrpc框架的网络传输协议也会分为消息头和消息体两部分，并且会根据具体的需要，暂时将消息头部分的长度定义为32字节，具体如图6-4所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图6-4 自定义协议的实现","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-09-30-004.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("可以看到，在自定义的网络传输协议中，也会将整个协议分为消息头和消息体两部分。")]),t._v(" "),r("ul",[r("li",[t._v("消息头总共32字节，会分为魔数、报文类型、状态、消息ID、序列化类型和数据长度。")]),t._v(" "),r("li",[t._v("消息体就是要传输的具体数据。")])]),t._v(" "),r("p",[t._v("其中，消息头中的各个字段含义如下：")]),t._v(" "),r("ul",[r("li",[t._v("魔数：验证自定义网络传输协议的最基本的校验信息，占据2字节空间。")]),t._v(" "),r("li",[t._v("报文类型：消息的类型，可以分为请求消息、响应消息和心跳消息，占据1字节空间。")]),t._v(" "),r("li",[t._v("状态：消息的状态，占据1字节空间。")]),t._v(" "),r("li",[t._v("消息ID：消息的唯一标识，占据8字节空间。")]),t._v(" "),r("li",[t._v("序列化类型：数据进行序列化和反序列化的类型标识，暂定16字节空间。")]),t._v(" "),r("li",[t._v("数据长度：标识消息体的数据长度，占据4字节空间。")])]),t._v(" "),r("h2",{attrs:{id:"四、实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),r("p",[r("code",[t._v("说了这么多，自定义网络协议该怎么实现呢？")])]),t._v(" "),r("h3",{attrs:{id:"_1-工程结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[t._v("#")]),t._v(" 1.工程结构")]),t._v(" "),r("ul",[r("li",[t._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")]),t._v(" "),r("li",[t._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")]),t._v(" "),r("li",[t._v("bhrpc-constants：存放实现bhrpc框架通用的常量类。")]),t._v(" "),r("li",[t._v("bhrpc-protocol：实现bhrpc框架的自定义网络传输协议的工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider：服务提供者父工程。\n"),r("ul",[r("li",[t._v("bhrpc-provider-common：服务提供者通用工程。")]),t._v(" "),r("li",[t._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),t._v(" "),r("li",[t._v("bhrpc-test：测试bhrpc框架的父工程。\n"),r("ul",[r("li",[t._v("bhrpc-test-provider：测试服务提供者的工程。")]),t._v(" "),r("li",[t._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),t._v(" "),r("p",[r("strong",[t._v("工程源码：")]),t._v(" 关注冰 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号，回复 "),r("code",[t._v("bhrpc")]),t._v("， 获取代码链接地址。")]),t._v(" "),r("h3",{attrs:{id:"_2-核心实现类关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心实现类关系"}},[t._v("#")]),t._v(" 2.核心实现类关系")]),t._v(" "),r("p",[t._v("核心实现类的关系如图6-5所示。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"图6-5 核心实现类的关系","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-09-30-005.png",loading:"lazy"}})]),t._v(" "),r("p",[t._v("由图6-5可以看出，自定义网络传输协议主要由7个类组成，分别是RpcType、RpcMessage、RpcRequest、RpcResponse、RpcHeader、RpcHeaderFactory和RpcProtocol。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);