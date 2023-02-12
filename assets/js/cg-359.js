(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{648:function(t,a,r){"use strict";r.r(a);var s=r(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《rpc手撸专栏》第3章-rpc服务核心注解的设计与实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《rpc手撸专栏》第3章-rpc服务核心注解的设计与实现"}},[t._v("#")]),t._v(" 《RPC手撸专栏》第3章：RPC服务核心注解的设计与实现")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("从本章开始，我们就正式进入《RPC手撸专栏》的手动开发RPC框架源码的章节，哈哈，小伙伴们是不是有点迫不及待了呢？今天我们就正式开始RPC手撸源码的学习。在正式手撸源码之前呢，小伙伴们允许我说一些题外话吧。")]),t._v(" "),a("p",[t._v("相信很多小伙伴对《RPC手撸专栏》的文章都挺期待了，很多小伙伴在微信和星球上催我更新，还有些小伙伴在语雀文档上催我更新《RPC手撸专栏》。确实，距离上次更新已经过去一个多月了，难免有很多小伙伴会着急什么时候更新剩下的文章。其实，在这一个多月的时间里，冰河一方面是因为公司杂七杂八的事情太多了，有点忙的抽不开身。")]),t._v(" "),a("p",[t._v("针对与《RPC手撸专栏》来说，冰河其实并没有什么都没做，相反，也做了很多事情，就是为了让《RPC手撸专栏》写的更好，让小伙伴们更加透彻的了解一个成熟的RPC框架是如何一步步设计和开发出来的。")]),t._v(" "),a("h2",{attrs:{id:"一、文章目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、文章目录"}},[t._v("#")]),t._v(" 一、文章目录")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-08-15-004","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-15-004.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"二、目前的rpc框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、目前的rpc框架"}},[t._v("#")]),t._v(" 二、目前的RPC框架")]),t._v(" "),a("p",[t._v("目前较为完善的RPC框架项目涵盖60+个子项目了，给大家看看项目的结构吧。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-08-15-001","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-15-001.png",loading:"lazy"}})]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-08-15-002","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-15-002.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("目前这60+个子项目并没有包含《RPC手撸专栏》的所有内容，再给大家看看《RPC手撸专栏》涵盖的技术规划吧。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-06-25-001","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-06-25-001.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("写一个可在实际环境使用的高性能、可扩展、分布式的RPC框架着实不易，项目中会以SPI的形式预留大量的扩展点供各位小伙伴们完善，这样对大家来说更有参与感，也更能通过实际参与项目开发的形式进一步提升自己的技术技能。")]),t._v(" "),a("p",[t._v("项目中大量使用了SPI机制来提升项目的扩展性，例如，以负载均衡子项目来说，就以SPI机制提供了一致性Hash、最近最少连接数、随机、加权随机、轮询、加权轮询、基于源IP地址的Hash等几种负载均衡方式，大家也可以根据自己的实际需要，通过项目中的SPI机制来定制自己的负载均衡规则，看下面的大图吧。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"rpc-2022-08-15-003","data-src":"https://binghe.gitcode.host/assets/images/middleware/rpc/rpc-2022-08-15-003.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("并且，值得一提的是，RPC项目中采用的RPC机制是完全对标Dubbo项目的，并没有采用Java原生的SPI机制，这些都会带着大家一步步实现。")]),t._v(" "),a("p",[t._v("好了，真正写好一个成熟的、高性能、可扩展、分布式的RPC框架并不是一件容易的事情，但即使再困难，我们也要一步一个脚印的将其蹚平，RPC该有的功能，我们都会慢慢实现和完善。接下来，我们就一起来完成今天的任务——RPC服务核心注意的定义与解析。")]),t._v(" "),a("h2",{attrs:{id:"三、搭建项目工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、搭建项目工程"}},[t._v("#")]),t._v(" 三、搭建项目工程")]),t._v(" "),a("p",[t._v("很多小伙伴应该都知道，我已经提前写好了RPC框架的很多功能了，并且将框架命名为"),a("code",[t._v("bhrpc")]),t._v("，但是为了不与之前的项目冲突，同时带着大家从零开始手撸这个RPC框架，于是乎，我将带着大家一起手撸这个RPC框架的项目名称改成了"),a("code",[t._v("bhrpc-learning")]),t._v("，"),a("code",[t._v("bhrpc-learning")]),t._v("这个项目工程是从零开始带着大家一起来实现整个RPC框架的功能，到时这个项目中会预留大量的SPI扩展点供小伙伴们自行实现功能。")]),t._v(" "),a("p",[a("strong",[t._v("注意：整个项目是基于JDK1.8开发的，其中会涉及到一些JDK1.8中的语法，所以如果小伙伴们使用的JDK版本小于1.8的话，需要将JDK的版本升级到1.8。")])]),t._v(" "),a("p",[t._v("（1）在IDEA中创建一个名称为"),a("code",[t._v("bhrpc-learning")]),t._v("的Maven项目。")]),t._v(" "),a("p",[t._v("（2）在项目的pom.xml文件中添加如下的Maven依赖。")]),t._v(" "),a("h2",{attrs:{id:"查看完整文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),a("p",[t._v("加入"),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);a.default=e.exports}}]);