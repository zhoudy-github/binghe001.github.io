(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{914:function(t,e,r){"use strict";r.r(e);var a=r(7),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《seckill秒杀系统》第5章-秒杀系统技术流程梳理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第5章-秒杀系统技术流程梳理"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第5章：秒杀系统技术流程梳理")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("源码获取地址："),e("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("ul",[e("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),e("li",[t._v("本章重点：从技术角度梳理秒杀系统的请求链路、技术交互与分层过滤逻辑，并让研发人员从技术角度理解秒杀系统的整个交互过程。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("在前面的文章中，我们梳理了秒杀系统的需求和业务流程，心中已经大概知道要实现哪些功能，对用户端和运营端要实现的功能有了大体上的了解，并对系统的并发要求有了大致的目标。作为技术人员，我们还需要从技术角度思考下秒杀系统的请求链路、技术交互和分层过滤逻辑。")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[t._v("产品经理从场景和业务角度提出对应的需求后，作为研发人员，不仅需要理解场景和业务需求，还需要将这些需求转化成技术实现方案。从技术角度出发，来梳理技术需要实现的逻辑，这样才能从整体链路上理解秒杀系统的实现。")]),t._v(" "),e("h2",{attrs:{id:"二、本章诉求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),e("p",[t._v("在正式设计和研发秒杀系统之前，除了理解业务需求和业务流程外，对于技术人员来说，还有一项非常重要的事情要做，那就是从技术角度好好梳理下秒杀系统的请求链路、技术交互和分层过滤逻辑，以便后续更好的设计和研发秒杀系统。")]),t._v(" "),e("h2",{attrs:{id:"三、请求链路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、请求链路"}},[t._v("#")]),t._v(" 三、请求链路")]),t._v(" "),e("p",[t._v("从技术的角度来讲，用户通过客户端肯定是通过域名来访问秒杀系统，使用域名的话就需要使用到DNS服务器做域名解析，将域名解析成IP地址来访问指定的服务器。进入服务器之后，首先会通过Nginx进入系统的系统网关服务，再到我们部署的Web服务，由Web层再到基础服务层，由基础服务层再到数据层，返回数据时，再按照相反的顺序层层返回，整体如图5-1所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-09-001.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("由图5-1可以看出，在用户访问秒杀系统时，请求流量首先会通过DNS将域名解析成IP地址，通过IP地址访问到服务器。进入Nginx，由Nginx进行一系列的负载均衡和限流等功能，到达系统的业务网关，通过业务网关进行路由、限流、服务降级以及风控等，进入到Web服务，Web服务会对外提供交互接口，解析接收的请求数据，以及聚合查询的数据等。随后进入到基础服务，基础服务的功能比较单一和灵活，基本都是一些简单的业务处理。最后会进入数据服务层，数据服务主要就是存储、操作和查询数据，可以包含Redis、MySQL和其他数据服务。")]),t._v(" "),e("h2",{attrs:{id:"四、技术交互"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、技术交互"}},[t._v("#")]),t._v(" 四、技术交互")]),t._v(" "),e("p",[t._v("了解了请求的链路后，还要从技术角度了解下，用户在秒杀系统中抢购商品时，与系统发生了怎样的交互，整体上可以总结成如图5-2所示的交互流程图。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-09-002.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("由图5-2可以看出，用户参与系统秒杀时，主要的交互逻辑如下所示。")]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=s.exports}}]);