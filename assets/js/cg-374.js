(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{663:function(t,a,r){"use strict";r.r(a);var e=r(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第19章-服务消费者动态代理实现异步调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第19章-服务消费者动态代理实现异步调用"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第19章：服务消费者动态代理实现异步调用")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("之前直接通过调用某个接口的方法实现了RPC远程调用，这次，我想直接通过方法名和参数进行RPC远程调用。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("我想在服务消费者端动态代理实现异步调用，这个可以吗？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们不仅实现了服务消费者与服务提供者之间进行同步、异步、单向和回调调用，并且在外部服务调用服务消费者时，服务消费者也屏蔽了底层Netty通信的细节信息。实现了在服务消费者端基于动态代理的功能屏蔽了构建请求协议对象的细节。跟进一步，我们也将动态代理整合进了服务消费者，实现了直接调用接口返回结果数据。")]),t._v(" "),a("p",[t._v("但是，细心的读者可以发现，通过直接调用接口方法的方式调用远程方法，底层采用的都是同步调用的方式。本章，我们一起将服务消费者增加动态代理后的调用方式扩展为同步方式和异步方式两种方式。")]),t._v(" "),a("p",[t._v("说干就干，我们一起开始吧。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：就是在服务消费者端整合完动态代理后，支持同步调用的同时，也支持异步调用！")])]),t._v(" "),a("p",[t._v("我们自己写的RPC框架，能够实现通过直接调用接口的方法来实现远程方法调用，这看起来比一般的RPC Demo程序强大。但是我们不能止步于此，细心的读者可能会发现，一个好的并且成熟的RPC框架，整合进动态代理后，也是可以支持同步调用和异步调用两种方式。")]),t._v(" "),a("p",[t._v("在前面的文章中，在服务消费者整合动态代理的部分，使用的同步调用的方式，那只支持同步调用的方式是远远不够的，我们还需要在自己写的RPC框架中支持异步调用。")]),t._v(" "),a("p",[t._v("本章，我们就要在服务消费者整合动态代理后，实现异步调用。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计基于动态代理的异步调用，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("消费者整合动态代理后，能够在RPC框架层面屏蔽掉构建请求协议对象的细节，直接通过接口的方法调用远程方法。在异步化设计上，可以基于接口的Class对象，通过RPC客户端生成异步化调用的对象，然后通过异步化调用对象的方法，传入要调用的方法名和参数实现异步调用，最终会返回一个RPCFuture对象，通过RPCFuture对象的get()方法获取最终的结果数据。")]),t._v(" "),a("p",[t._v("整个流程如图19-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图19-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-18-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图19-1所示的流程可以看出，图19-1与第18章的图18-1整体流程相差不大，图19-1的整体流程如下所示。")]),t._v(" "),a("p",[t._v("（1）外部服务通过服务消费者RPC客户端构建异步化调用对象。")]),t._v(" "),a("p",[t._v("（2）外部服务通过异步化调用对象的方法，传入方法名和参数调用接口方法，实际上是通过动态代理调用远程方法。")]),t._v(" "),a("p",[t._v("（3）服务消费者端的动态代理模块，会根据外部服务传递过来的参数构建请求协议对象，这样就在RPC框架层面对外屏蔽了构建请求协议对象的细节。")]),t._v(" "),a("p",[t._v("（4）服务消费端代理模块构建完请求协议对象后，服务消费者会通过自定义网络传输协议和数据编解码将数据编码成二进制字节流，传输到服务提供者。")]),t._v(" "),a("p",[t._v("（5）服务提供者接收到二进制数据流后，通过自定义网络传输协议和数据编解码对数据进行解码，将解码出的数据作为参数调用真实方法。")]),t._v(" "),a("p",[t._v("（6）真实方法经过业务逻辑处理后，会将结果数据返回给服务提供者。")]),t._v(" "),a("p",[t._v("（7）服务提供者接收到真实方法返回的结果数据后，会通过自定义网络传输协议和数据编解码对数据进行编码，将数据编码成二进制字节流后传输给服务消费者。")]),t._v(" "),a("p",[t._v("（8）服务消费者接收到服务提供者响应的二进制流数据后，通过自定义网络传输协议和数据编解码对数据进行解码，将数据解码成明文数据，再通过异步化调用对象将封装有最终结果数据的RPCFuture对象返回给外部服务。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("服务消费者整合动态代理后，实现异步调用的类关系如图19-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图19-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-18-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=_.exports}}]);