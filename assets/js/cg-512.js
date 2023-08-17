(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{807:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第15章-服务消费者同步、异步、单向调用的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第15章-服务消费者同步、异步、单向调用的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第15章：服务消费者同步、异步、单向调用的实现")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("很多好用的RPC框架都支持服务消费者以同步、异步和单向调用的方式与服务提供者进行交互，你开发的这个RPC框架也可以吗？")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("我使用你开发的RPC框架时，想让服务消费者以同步、异步、单向调用的方式与服务提供者进行交互，可以实现吗？")])]),t._v(" "),a("p",[t._v("在前面的章节中，实现了服务消费者屏蔽掉基于Netty连接服务提供者的实现细节的前提下，以异步转同步的方式调用服务提供者。在外部服务调用服务消费者向服务提供者发送数据的方法时，能够直接获取到服务提供者调用真实方法返回的结果数据。")]),t._v(" "),a("p",[t._v("那RPC框架只支持同步调用的话，在高并发环境下肯定会出现性能问题，我想让RPC框架支持同步、异步和单向调用，这也是很多优秀的RPC框架都支持的功能，这个有办法实现吗？")]),t._v(" "),a("p",[t._v("我：安排。。。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("服务消费者必须支持同步、异步和单向调用！")])]),t._v(" "),a("p",[t._v("在服务提供者一端实现了按照自定义网络传输协议和数据编解码对接收到的数据进行解析，并且能够将解析到的数据作为参数调用真实方法，并接收真实方法返回的结果数据，通过自定义网络协议和数据编解码，将数据编码成二进制字节流，传输给服务消费者。")]),t._v(" "),a("p",[t._v("在服务消费者一端实现了按照自定义的网络传输协议和数据编解码，将数据编码成二进制字节流发送给服务提供者，能够接收到服务提供者响应回来的二进制字节流数据，并且能够根据自定义网络传输协议和数据编解码，将接收到的二进制字节流数据解码成对应的明文数据，接下来，进行进一步处理。")]),t._v(" "),a("p",[t._v("同时，服务消费者支持在屏蔽掉基于Netty连接服务提供者的实现细节的前提下，使得外部服务调用服务消费者向服务提供者发送数据的方法时，能够直接获取到服务提供者调用真实方法返回的结果数据。")]),t._v(" "),a("p",[t._v("做到这里，已经初步实现了RPC框架最基本的功能。这还远远不够，服务消费者除了能够以同步的方式调用服务提供者，也要支持异步调用和单向调用，看看人家Dubbo，做的是真特么牛逼。")]),t._v(" "),a("p",[t._v("好了，不羡慕人家，我们自己踏踏实实手撸吧，本章，我们就实现服务消费者以同步、异步、单向调用的方式与服务提供者进行交互。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计服务消费者基于同步、异步、单向调用的方式与服务提供者进行交互，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("服务消费者与服务提供者之间基于同步、异步和单向调用的设计图分别如图15-1~15-3所示")]),t._v(" "),a("ul",[a("li",[t._v("同步调用")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图15-1 同步调用流程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-06-30-002.png",loading:"lazy"}})]),t._v(" "),a("ul",[a("li",[t._v("异步调用")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图15-2 异步调用流程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-06-30-003.png",loading:"lazy"}})]),t._v(" "),a("ul",[a("li",[t._v("单向调用")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图15-3 单向调用流程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-06-30-005.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("通过图15-1~15-2可以看出：")]),t._v(" "),a("p",[t._v("（1）同步调用的方式，服务消费者发起数据请求后，会同步等待返回结果。")]),t._v(" "),a("p",[t._v("（2）异步调用的方式，服务消费者发起数据请求后，会立刻返回，后续会通过异步的方式获取数据。")]),t._v(" "),a("p",[t._v("（3）单向调用的方式，服务消费者发起数据请求后，会立刻返回，不必关注后续数据的处理结果。")]),t._v(" "),a("p",[t._v("可以看到，从设计上还是比较简单的，接下来，我们就一起实现它。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);