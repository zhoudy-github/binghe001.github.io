(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{427:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《nginx核心技术》第12章-使用nginx解决跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《nginx核心技术》第12章-使用nginx解决跨域问题"}},[t._v("#")]),t._v(" 《Nginx核心技术》第12章：使用Nginx解决跨域问题")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("星球项目地址："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/zsxq/introduce.html"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("ul",[s("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),s("li",[t._v("本章重点：用最简短的篇幅介绍Nginx最核心的知识，掌握使用Nginx解决跨域问题的方法，并能够灵活运用到实际项目中，维护高可用系统。")])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("今天给大家介绍《Nginx核心技术》的第12章：使用Nginx解决跨域问题，多一句没有，少一句不行，用最简短的篇幅讲述Nginx最核心的知识，好了，开始今天的内容。")]),t._v(" "),s("h2",{attrs:{id:"_12-1-本章概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-本章概述"}},[t._v("#")]),t._v(" 12.1 本章概述")]),t._v(" "),s("p",[t._v("当今互联网行业，大部分Web项目基本都是采用的前后端分离模式。前端为H5项目，后端为Java、PHP、Python等项目。而且大部分后端服务并不会只部署一套服务，而是会采用Nginx对后端服务进行负载均衡。那么，此时就会出现一个问题了：如果一个请求url的 "),s("strong",[t._v("协议、域名、端口")]),t._v(" 三者之间任意一个与当前页面url不同就会产生跨域的现象。那么如何使用Nginx解决跨域问题呢？接下来，我们就一起探讨下这个问题。")]),t._v(" "),s("h2",{attrs:{id:"_12-2-为何会跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-为何会跨域"}},[t._v("#")]),t._v(" 12.2 为何会跨域？")]),t._v(" "),s("p",[t._v("出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）。")]),t._v(" "),s("h2",{attrs:{id:"_12-3-nginx如何解决跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-nginx如何解决跨域"}},[t._v("#")]),t._v(" 12.3 Nginx如何解决跨域？")]),t._v(" "),s("p",[t._v("这里，我们利用Nginx的反向代理功能解决跨域问题，至于，什么是Nginx的反向代理，大家就请自行百度或者谷歌吧。")]),t._v(" "),s("p",[t._v("Nginx作为反向代理服务器，就是把http请求转发到另一个或者一些服务器上。通过把本地一个url前缀映射到要跨域访问的web服务器上，就可以实现跨域访问。对于浏览器来说，访问的就是同源服务器上的一个url。而Nginx通过检测url前缀，把http请求转发到后面真实的物理服务器。并通过rewrite命令把前缀再去掉。这样真实的服务器就可以正确处理请求，并且并不知道这个请求是来自代理服务器的。")]),t._v(" "),s("h2",{attrs:{id:"_12-4-nginx解决跨域案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-nginx解决跨域案例"}},[t._v("#")]),t._v(" 12.4 Nginx解决跨域案例")]),t._v(" "),s("p",[t._v("使用Nginx解决跨域问题时，我们可以编译Nginx的nginx.conf配置文件，例如，将nginx.conf文件的server节点的内容编辑成如下所示。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("server {\n        location / {\n            root   html;\n            index  index.html index.htm;\n            //允许cros跨域访问\n            add_header 'Access-Control-Allow-Origin' '*';\n\n        }\n        //自定义本地路径\n        location /apis {\n            rewrite  ^.+apis/?(.*)$ /$1 break;\n            include  uwsgi_params;\n            proxy_pass   http://www.binghe.com;\n       }\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("然后我把项目部署在nginx的html根目录下，在ajax调用时设置url从http://www.binghe.com/apistest/test 变为 http://www.binghe.com/apis/apistest/test然后成功解决。")]),t._v(" "),s("p",[t._v("假设，之前我在页面上发起的Ajax请求如下所示。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$.ajax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),t._v(",\n        dataType: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v(",\n        data:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parameter'")]),t._v(":JSON.stringify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        url:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.binghe.com/apistest/test"')]),t._v(",\n        async: flag,\n        beforeSend: "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),t._v(", submitType.Content_Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-id"')]),t._v(", submitType.user_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role-type"')]),t._v(", submitType.role_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access-token"')]),t._v(", getAccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        success:function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result, status, xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     \t\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ,error:function "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            layerMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求失败，请稍后再试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("修改成如下的请求即可解决跨域问题。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$.ajax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),t._v(",\n        dataType: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v(",\n        data:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'parameter'")]),t._v(":JSON.stringify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        url:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http:www.binghe.com/apis/apistest/test"')]),t._v(",\n        async: flag,\n        beforeSend: "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),t._v(", submitType.Content_Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-id"')]),t._v(", submitType.user_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"role-type"')]),t._v(", submitType.role_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            xhr.setRequestHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access-token"')]),t._v(", getAccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        success:function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result, status, xhr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     \t\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ,error:function "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            layerMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求失败，请稍后再试'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[s("strong",[t._v("好了，相信各位小伙伴们对使用Nginx解决跨域问题，有了进一步的了解，我是冰河，我们下期见~~")])]),t._v(" "),s("h2",{attrs:{id:"星球服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),s("p",[t._v("加入星球，你将获得：")]),t._v(" "),s("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),s("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),s("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),s("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),s("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),s("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),s("h2",{attrs:{id:"星球重磅福利"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),s("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),s("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),s("br")]),t._v(" "),s("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),s("p",[s("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),s("h2",{attrs:{id:"其他方式加入星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("链接")]),t._v(" ：打开链接 "),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),s("li",[s("strong",[t._v("回复")]),t._v(" ：在公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),s("p",[s("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),s("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),s("h2",{attrs:{id:"星球规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),s("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),s("h3",{attrs:{id:"中间件项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),s("ul",[s("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),s("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),s("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),s("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),s("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),s("h3",{attrs:{id:"超硬核项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),s("ul",[s("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),s("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),s("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),s("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),s("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),s("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),s("h2",{attrs:{id:"联系冰河"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),s("h3",{attrs:{id:"加群交流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),s("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),s("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),s("br")]),t._v(" "),s("h3",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),s("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),s("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),s("br")]),t._v(" "),s("h3",{attrs:{id:"视频号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),s("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),s("br")]),t._v(" "),s("h3",{attrs:{id:"星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),s("p",[t._v("加入星球 "),s("strong",[s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),s("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),s("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),s("p",[t._v("关注 "),s("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("公众号，回复 "),s("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),s("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);