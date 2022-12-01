(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{643:function(r,e,t){"use strict";t.r(e);var a=t(7),v=Object(a.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"《rpc手撸专栏》第5章-服务提供者收发消息基础功能实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第5章-服务提供者收发消息基础功能实现"}},[r._v("#")]),r._v(" 《RPC手撸专栏》第5章：服务提供者收发消息基础功能实现")]),r._v(" "),e("p",[r._v("作者：冰河\n"),e("br"),r._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),r._v(" "),e("br"),r._v("博客："),e("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe001.github.io"),e("OutboundLink")],1),r._v(" "),e("br"),r._v("文章汇总："),e("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://binghe001.github.io/md/all/all.html"),e("OutboundLink")],1)]),r._v(" "),e("blockquote",[e("p",[r._v("沉淀，成长，突破，帮助他人，成就自我。")])]),r._v(" "),e("p",[e("strong",[r._v("大家好，我是冰河~~")])]),r._v(" "),e("p",[r._v("最近由于各种乱七八糟的事项，《RPC手撸专栏》耽搁了很久，让小伙伴们久等了。今天，我们开始更新《RPC手撸专栏》的第5章，今天带着大家一起实现服务提供者收发消息的基础功能。")]),r._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[r._v("#")]),r._v(" 一、前言")]),r._v(" "),e("p",[e("code",[r._v("服务提供者作为提供服务的一方，不支持收发消息怎么行？")])]),r._v(" "),e("p",[r._v("说到底，无论RPC框架多么复杂，归根结底，一个较为完毕的RPC框架由服务提供者、服务消费者、注册中心和监控中心组成。服务提供者启动后需要监听固定的域名/主机名/IP和端口，并且服务提供者作为一个基础服务，需要接收服务消费者发送过来的消息，后续对消息进行转发，调用目标方法后，向服务消费者响应结果数据。所以，服务提供者需要具备消息的首发功能，并且这是服务提供者应该具备的最基础的功能。")]),r._v(" "),e("p",[r._v("可以将服务提供者想象成是一个对外提供服务的服务端，而服务消费者就是调用服务提供者的客户端，二者之间的通信是通过网络进行的。")]),r._v(" "),e("p",[r._v("大家可以思考下，服务提供者还需要具备哪些功能呢？")]),r._v(" "),e("h2",{attrs:{id:"二、目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[r._v("#")]),r._v(" 二、目标")]),r._v(" "),e("p",[r._v("在前面的章节中，我们设计了RPC框架的核心注解，并且实现了RPC服务核心注解的扫描与解析功能。这样的话，在我们实现的RPC框架中，就能实现哪怕不集成Spring，也能够通过扫描注解的方式发布服务提供者的服务。")]),r._v(" "),e("p",[r._v("其实，可以细细的想一下，Spring提供的IOC功能能够简化程序的开发，核心点就在于通过扫描Java包下的类，找到特定注解标注的类，将其实例化后放入IOC容器中。这种方式我们仔细思考下，也能够自己动手实现。所以，在前面的章节中，我们就自己实现了扫描Java包下的类，并且将需要的类进行实例化，放到了一个Map集合中，以供后续使用。")]),r._v(" "),e("p",[r._v("接下来，我们需要顺着之前的思路，完成服务提供者解析@RpcService注解、收发消息、响应结果的目标。")]),r._v(" "),e("h2",{attrs:{id:"三、设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[r._v("#")]),r._v(" 三、设计")]),r._v(" "),e("p",[e("code",[r._v("你可以想象一下，如果是让你设计实现服务提供者收发消息的基础功能，你会怎么实现呢？")])]),r._v(" "),e("p",[r._v("在实现目标中，已经明确给出了要完成服务提供者解析@RpcService注解、收发消息、响应结果的目标。这是本章要实现的重点，但是作为服务提供者，一定要启动后才能与服务消费者进行通信，所以，上述目标是服务提供者需要启动后才能实现的。综上，我们可以得出本章大体要实现的功能流程，如图5-1所示。")]),r._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"图5-1 RPC框架服务提供者实现消息收发功能大体流程图","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-09-28-001.png",loading:"lazy"}})]),r._v(" "),e("p",[r._v("由图5-1可以看出：")]),r._v(" "),e("ul",[e("li",[r._v("服务提供者可以接收系统终端发送过来的数据，并且也可以向系统终端响应数据。")]),r._v(" "),e("li",[r._v("服务体提供者启动后需要监听IP和端口，并且启动时能够解析@RpcService注解，启动后能够收发消息，并且响应结果")]),r._v(" "),e("li",[r._v("由于本章还未实现服务消费者，目前我们可以通过系统终端来模拟服务消费者，向服务提供者发送数据，并且接收服务消费者响应过来的数据。")])]),r._v(" "),e("h2",{attrs:{id:"四、实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[r._v("#")]),r._v(" 四、实现")]),r._v(" "),e("h3",{attrs:{id:"_1-工程结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-工程结构"}},[r._v("#")]),r._v(" 1.工程结构")]),r._v(" "),e("ul",[e("li",[r._v("bhrpc-annotation：实现bhrpc框架的核心注解工程。")]),r._v(" "),e("li",[r._v("bhrpc-common：实现bhrpc框架的通用工具类，包含服务提供者注解与服务消费者注解的扫描器。")]),r._v(" "),e("li",[r._v("bhrpc-provider：服务提供者父工程。\n"),e("ul",[e("li",[r._v("bhrpc-provider-common：服务提供者通用工程。")]),r._v(" "),e("li",[r._v("bhrpc-provider-native：以纯Java方式启动bhrpc框架的工程。")])])]),r._v(" "),e("li",[r._v("bhrpc-test：测试bhrpc框架的父工程。\n"),e("ul",[e("li",[r._v("bhrpc-test-provider：测试服务提供者的工程。")]),r._v(" "),e("li",[r._v("bhrpc-test-scanner：测试扫描器的工程。")])])])]),r._v(" "),e("p",[e("strong",[r._v("工程源码：")]),r._v(" 关注冰 "),e("strong",[r._v("冰河技术")]),r._v(" 微信公众号，回复 "),e("code",[r._v("bhrpc")]),r._v("， 获取代码链接地址。")]),r._v(" "),e("h3",{attrs:{id:"_2-核心实现类关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-核心实现类关系"}},[r._v("#")]),r._v(" 2.核心实现类关系")]),r._v(" "),e("p",[r._v("核心实现类关系如图5-2所示。")]),r._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"图5-2 实现类核心关系","data-src":"https://binghe001.github.io/assets/images/middleware/rpc/rpc-2022-09-28-002.png",loading:"lazy"}})]),r._v(" "),e("p",[r._v("由图5-2可以看出：")]),r._v(" "),e("ul",[e("li",[r._v("程序中定义了一个接口Server，在Server中定义了一个抽象方法startNettyServer()。")]),r._v(" "),e("li",[r._v("BaseServer类作为最基础的服务类，会直接实现Server接口，并实现Server接口中定义的startNettyServer()方法，同时，在BaseServer类中分别定义了host、port和handlerMap三个protected类型的成员变量，在构造方法BaseServer(String serverAddress)中为host和port赋值。")]),r._v(" "),e("li",[r._v("在BaseServer的startNettyServer()的方法实现中，会依赖RpcProviderHandler类，并实例化RpcProviderHandler类对象，RpcProviderHandler类对象作为服务提供者最终接收消息，处理消息，响应消息的类。")]),r._v(" "),e("li",[r._v("RpcSingleServer类作为使用纯Java启动bhrpc框架的实现类，继承了BaseServer类。在RpcSingleServer本身的类中，只有一个RpcSingleServer(String serverAddress, String scanPackage)构造方法，其他方法都是继承自BaseServer类。")])]),r._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[r._v("#")]),r._v(" 查看完整文章")]),r._v(" "),e("p",[r._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[r._v("冰河技术"),e("OutboundLink")],1),r._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=v.exports}}]);