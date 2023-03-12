(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{678:function(t,a,r){"use strict";r.r(a);var e=r(7),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第18章-服务消费者整合动态代理实现直接调用接口返回结果数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第18章-服务消费者整合动态代理实现直接调用接口返回结果数据"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第18章：服务消费者整合动态代理实现直接调用接口返回结果数据")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("既然服务消费者端实现了动态代理功能，那就整合起来吧！！")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("我就想直接调用某个接口实现RPC远程调用，这个可以吗？")])]),t._v(" "),a("p",[t._v("在前面的章节中，我们不仅实现了服务消费者与服务提供者之间进行同步、异步、单向和回调调用，并且在外部服务调用服务消费者时，服务消费者也屏蔽了底层Netty通信的细节信息。更进一步地，我们再次实现了在服务消费者端基于动态代理的功能屏蔽了构建请求协议对象的细节。")]),t._v(" "),a("p",[t._v("但是在服务消费者端基于动态代理的功能屏蔽了构建请求协议对象的细节，目前还没有正式整合到服务消费者端，本章，我们就在服务消费者端整合动态代理功能实现直接调用接口返回结果数据。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("目标很明确：就是在服务消费者端整合动态代理实现直接调用接口返回结果数据。")])]),t._v(" "),a("p",[t._v("很多成熟的RPC框架，都是直接在本地调用某个接口的方法就实现了远程过程调用，使用起来都是贼简单的。我们写的这个RPC框架也要实现这个功能。无需复杂的构建请求协议对象的细节，无需关注RPC框架底层远程通信的细节。调用远程方法就像调用本地接口方法一样丝滑和顺畅。")]),t._v(" "),a("p",[t._v("本章，我们就要实现在在服务消费者端整合动态代理实现直接调用接口返回结果数据。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计整合服务消费者端的动态代理功能，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("消费者整合动态代理实现直接调用接口返回结果数据的流程如图18-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图18-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-17-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图18-1可以看出，消费者整合动态代理实现直接调用接口返回结果数据的大致流程如下所示：")]),t._v(" "),a("p",[t._v("（1）外部服务通过服务消费者RPC客户端获取接口代理对象。")]),t._v(" "),a("p",[t._v("（2）外部服务调用接口方法，实际上是调用的接口代理对象里的方法来调用远程方法。")]),t._v(" "),a("p",[t._v("（3）服务消费者端的动态代理模块，会根据外部服务传递过来的参数构建请求协议对象，这样就在RPC框架层面对外屏蔽了构建请求协议对象的细节。")]),t._v(" "),a("p",[t._v("（4）服务消费端代理模块构建完请求协议对象后，会通过自定义网络传输协议和数据编解码对数据编码成二进制字节流，传输到服务提供者。")]),t._v(" "),a("p",[t._v("（5）服务提供者接收到二进制数据流后，通过自定义网络传输协议和数据编解码对数据进行解码，将解码出的数据作为参数调用真实方法。")]),t._v(" "),a("p",[t._v("（6）真实方法经过业务逻辑处理后，会将结果数据返回给服务提供者。")]),t._v(" "),a("p",[t._v("（7）服务提供者接收到真实方法返回的结果数据后，会通过自定义网络传输协议和数据编解码对数据进行编码，将数据编码成二进制字节流后传输给服务消费者。")]),t._v(" "),a("p",[t._v("（8）服务消费者接收到服务提供者响应的二进制流数据后，通过自定义网络传输协议和数据编解码对数据进行解码，将数据解码成明文数据，再通过接口的动态代理对象将最终的结果返回给外部服务。")]),t._v(" "),a("p",[t._v("本章的图18-1与第17章的图17-1类似，只是在外部服务与动态代理构建请求协议对象之间增加了服务消费者RPC客户端，这个服务消费者RPC客户端内部会屏蔽构建代理对象的细节，是本章要重点实现的部分。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("服务消费者整合动态代理实现直接调用接口返回结果数据的实现类关系如图18-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图18-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-17-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=_.exports}}]);