(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{808:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《rpc手撸专栏》第13章-服务消费者异步转同步直接获取返回结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第13章-服务消费者异步转同步直接获取返回结果"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第13章：服务消费者异步转同步直接获取返回结果")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("我不想只在服务消费者的数据处理器中打印接收到的数据，我想调用服务消费者向服务提供者发送数据的方法，直接返回服务提供者调用真实方法的返回结果。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[s("code",[t._v("目前你这个RPC框架只能在消费者处理器中打印结果数据，这不行啊，没法用！")])]),t._v(" "),s("p",[t._v("在前面的章节中，我们重构了服务消费者的代码，使服务消费者对外屏蔽了基于Netty连接服务提供者的实现细节，开发人员不用再手动维护这些复杂的Netty代码了。")]),t._v(" "),s("p",[t._v("但是，还存在一个问题，就是在测试代码中调用服务消费者向服务提供者发送数据的方法时，不能直接获取到返回的结果数据。也就是说，目前在使用这个RPC框架时，外部调用服务消费者向服务提供者发送数据的方法时，无法获取到结果数据，只能在服务消费者的数据处理器类中的channelRead0()方法中打印服务提供者返回的结果数据。")]),t._v(" "),s("p",[t._v("这显然不符合一个RPC框架的需求，这部分，还要改。咋办？干就完了。。。")]),t._v(" "),s("h2",{attrs:{id:"二、目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),s("p",[s("code",[t._v("别跟我扯别的，我就想调用方法时，直接返回结果！")])]),t._v(" "),s("p",[t._v("一个好的RPC框架如果使用Java原生的方式调用远程方法时，要支持直接返回数据结果，就像下面的代码片段一样。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumer")]),t._v(" consumer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcConsumer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rpcRequestProtocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOGGER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"从服务消费者获取到的数据===>>>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("在使用Netty构建服务消费者和服务提供者时，服务消费者与服务提供者之间的交互本身是异步的，上面代码片段中调用consumer的sendRequest()方法时，很显然是在同步获取返回的结果数据，这就涉及到如何将异步调用转化为同步调用的问题了。咋办？撸起袖子干呗。")]),t._v(" "),s("h2",{attrs:{id:"三、设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),s("p",[s("code",[t._v("如果是让你设计如何将服务消费者与服务提供者之间的交互由异步转化成同步，你会怎么设计？")])]),t._v(" "),s("p",[t._v("RPC框架底层的数据通信依赖的是Netty，服务消费者与服务提供者之间进行数据交互时，本身是基于异步的方式进行的。这也是在前面的章节中为何在服务消费者向服务提供者发送数据后，只能在服务消费者的数据处理器类中打印结果数据，而不能在调用服务消费者发送数据的方法时，直接获取结果数据的原因。如图13-1所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图13-1 RPC框架异步发送数据的流程","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-09-001.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由图13-1可以看出，目前实现的RPC框架中，服务消费者向服务提供者异步发送数据，并异步接收服务提供者响应的结果数据。这就会造成外部服务在调用服务消费者发送数据的方法时，无法直接获取到最终的结果数据。")]),t._v(" "),s("p",[t._v("需要重新设计服务消费者与服务提供者之间的数据交互过程，将外部服务调用服务消费者发送数据的方法，设计成等待服务消费者异步接收到服务提供者响应的结果数据后再返回，这样就能够在外部服务调用服务消费者发送数据的方法时，直接获取到返回的结果数据。如图13-2所示。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图13-2 异步转同步设计","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-09-002.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("由图13-2可以看出，进行异步转同步设计后，外部服务调用服务消费者的方法发送数据后，同步等待服务消费者接收到响应的数据后再返回，就能够实现立即获取到响应的结果数据。")]),t._v(" "),s("h2",{attrs:{id:"四、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),s("p",[s("code",[t._v("说了这么多，到底该如何实现呢？")])]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);