(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{786:function(t,e,r){"use strict";r.r(e);var a=r(7),_=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《rpc手撸专栏》第17章-服务消费者实现动态代理功能屏蔽构建请求协议对象的细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第17章-服务消费者实现动态代理功能屏蔽构建请求协议对象的细节"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第17章：服务消费者实现动态代理功能屏蔽构建请求协议对象的细节")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("使用RPC框架调用远程方法时，我不想自己手动构建RpcRequest请求协议对象，怎么办呢？")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[e("code",[t._v("目前RPC框架实现的功能不少了，但是在发送RPC请求时，还要自己手动构建RpcRequest请求协议对象，这个就有点low了！")])]),t._v(" "),e("p",[t._v("在前面的章节中，我们不仅实现了服务消费者与服务提供者之间进行同步、异步、单向和回调调用，并且在外部服务调用服务消费者时，服务消费者也屏蔽了底层Netty通信的细节信息。但是，还有一点是不太令人满意的，那就是在发起RPC请求时，需要在外部服务自己手动构建RpcRequest请求协议对象。")]),t._v(" "),e("p",[t._v("如果使用过Dubbo或者其他RPC框架的小伙伴，一定会发现这些成熟的RPC框架不会让使用者自己手动去构建请求协议对象的，这些都是要屏蔽到框架里的功能。那这个功能怎么实现呢？")]),t._v(" "),e("h2",{attrs:{id:"二、目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),e("p",[e("code",[t._v("撸起袖子加油干，我们要屏蔽掉构建请求协议对象的细节，让用户像调用本地方法一样调用远程方法。")])]),t._v(" "),e("p",[t._v("目前，RPC框架存在的一个很明显的问题就是，在每次发起RPC请求时，都需要自己手动去构建请求协议对象，这对用户来说是非常不友好的。如果一个RPC框架设计成这样，那这个框架肯定会没多少人使用的。")]),t._v(" "),e("p",[t._v("对外大量暴露框架内部的实现细节是一个框架非常不成熟、不完备的体现。在使用RPC框架时，用户肯定更愿意像调用本地方法一样调用远程方法，最好是看起来直接调用了接口的方法，就能够调用远程方法的实现。")]),t._v(" "),e("p",[t._v("本章，我们就实现用户像调用本地方法一样调用远程方法的第一步：在消费者端实现动态代理功能，使用动态代理屏蔽掉构建请求协议对象的细节信息。")]),t._v(" "),e("h2",{attrs:{id:"三、设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),e("p",[e("code",[t._v("如果设计服务消费者端的动态代理功能，你会怎么设计呢？")])]),t._v(" "),e("p",[t._v("服务消费者实现动态代理功能屏蔽请求协议对象的细节流程图如图17-1所示。")]),t._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"图17-1 服务消费者实现动态代理功能屏蔽请求协议对象的细节流程图","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-13-001.png",loading:"lazy"}})]),t._v(" "),e("p",[t._v("由图17-1可以看出，大致的流程如下所示：")]),t._v(" "),e("p",[t._v("（1）外部服务获取接口代理对象。")]),t._v(" "),e("p",[t._v("（2）外部服务调用接口方法，实际上是调用的接口代理对象里的方法来调用远程方法。")]),t._v(" "),e("p",[t._v("（3）服务消费者端的动态代理模块，会根据外部服务传递过来的参数构建请求协议对象，这样就在RPC框架层面对外屏蔽了构建请求协议对象的细节。")]),t._v(" "),e("p",[t._v("（4）服务消费端代理模块构建完请求协议对象后，会通过自定义网络传输协议和数据编解码对数据编码成二进制字节流，传输到服务提供者。")]),t._v(" "),e("p",[t._v("（5）服务提供者接收到二进制数据流后，通过自定义网络传输协议和数据编解码对数据进行解码，将解码出的数据作为参数调用真实方法。")]),t._v(" "),e("p",[t._v("（6）真实方法经过业务逻辑处理后，会将结果数据返回给服务提供者。")]),t._v(" "),e("p",[t._v("（7）服务提供者接收到真实方法返回的结果数据后，会通过自定义网络传输协议和数据编解码对数据进行编码，将数据编码成二进制字节流后传输给服务消费者。")]),t._v(" "),e("p",[t._v("（8）服务消费者接收到服务提供者响应的二进制流数据后，通过自定义网络传输协议和数据编解码对数据进行解码，将数据解码成明文数据，再通过接口的动态代理对象将最终的结果返回给外部服务。")]),t._v(" "),e("h2",{attrs:{id:"四、实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),e("p",[e("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=_.exports}}]);