(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{668:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第21章-注册中心基础服务功能的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第21章-注册中心基础服务功能的实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第21章：注册中心基础服务功能的实现")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("我们写的RPC框架虽然功能挺完善了，但是缺少了一个非常重要的核心组成部分，那就是注册中心，在接下来的几章里，我们一起搞定它。")]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("RPC框架缺少了注册中心，那怎么行？要搞定它！")])]),t._v(" "),a("p",[t._v("目前实现的RPC框架以Java原生进程的方式启动后，能够实现服务消费者以同步、异步和单向调用以及回调的方式与服务提供者之间进行数据交互，并且通过回调方法，服务消费者会主动将数据传递给外部服务。在此基础上我们在服务消费者端新增了动态代理模块，并将动态代理模块整合进服务消费者的流程中。在服务消费者整合动态代理后，也扩展支持了同步调用和异步调用两种调用方式。同时，对消费者端封装RPC远程通信的动态代理进行了进一步的扩展和优化。")]),t._v(" "),a("p",[t._v("但是，我们现在写的RPC框架中，服务消费者调用服务提供者时，在服务消费者一端，对服务提供者的IP和端口进行了硬编码，写死到了服务消费者的代码中。这种编码方式的缺点就是一旦服务提供者部署的服务器或者端口发生了变化，那就需要手动修改服务消费者的代码了，而且还不是修改自己业务中的代码，是要修改RPC框架中服务消费者端的代码，修改完要重新打包引入到项目中，这种方式是万万不可取的。")]),t._v(" "),a("p",[t._v("那怎么办呢？怎么解决需要修改服务消费者代码的问题呢？那就是：引入注册中心进行服务治理。")]),t._v(" "),a("h2",{attrs:{id:"二、目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目标"}},[t._v("#")]),t._v(" 二、目标")]),t._v(" "),a("p",[a("code",[t._v("明确目标：新增注册中心基础服务能力。")])]),t._v(" "),a("p",[t._v("目前，我们一起手写的RPC框架，在服务提供者端实现了不依赖任何第三方框架的包扫描功能，能够将标注有@RpcService的注解注册到本地Map中。在服务消费者端能够实现通过直接调用接口的方法来实现远程方法调用，服务消费者整合动态代理后支持同步调用和异步调用两种方式。")]),t._v(" "),a("p",[t._v("但是，现在框架还不能做到服务治理功能，那怎么办？接下来，就要逐步引入服务注册中心，实现服务治理功能。本章，我们就先实现服务注册中心的基础功能。")]),t._v(" "),a("p",[t._v("说干就干，我们开始吧。")]),t._v(" "),a("h2",{attrs:{id:"三、设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计"}},[t._v("#")]),t._v(" 三、设计")]),t._v(" "),a("p",[a("code",[t._v("如果让你设计服务注册中心的基础功能，你会怎么设计呢？")])]),t._v(" "),a("p",[t._v("本章，我们以Zookeeper为例，实现注册中心的基础功能，以Zookeeper为例实现的注册中心基础功能的流程如图21-1所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图21-1","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-20-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("由图21-1可以看出如下信息：")]),t._v(" "),a("p",[t._v("（1）设计服务注册到注册中心的元数据，例如服务的名称、服务的版本号、服务地址、服务端口和服务分组等信息，元数据会贯穿整个服务的注册与发现流程。")]),t._v(" "),a("p",[t._v("（2）会定义服务注册与发现的接口，对外提供服务注册与发现的方法。")]),t._v(" "),a("p",[t._v("（3）基于服务注册与发现的接口，会实现多个服务注册与发现的实现类，每个实现类对应着一种注册中心服务。")]),t._v(" "),a("p",[t._v("（4）本章以Zookeeper为例实现注册中心，后续会进行扩展。")]),t._v(" "),a("h2",{attrs:{id:"四、实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实现"}},[t._v("#")]),t._v(" 四、实现")]),t._v(" "),a("p",[a("code",[t._v("说了这么多，具体要怎么实现呢？")])]),t._v(" "),a("h3",{attrs:{id:"核心类实现关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心类实现关系"}},[t._v("#")]),t._v(" 核心类实现关系")]),t._v(" "),a("p",[t._v("实现注册中心基础功能的核心类之间的关系如图21-2所示。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"图21-2","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-10-20-002.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=s.exports}}]);