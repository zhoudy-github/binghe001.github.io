(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{626:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sa实战-·《springcloud-alibaba实战》第22章-服务配置-项目整合nacos配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sa实战-·《springcloud-alibaba实战》第22章-服务配置-项目整合nacos配置中心"}},[s._v("#")]),s._v(" SA实战 ·《SpringCloud Alibaba实战》第22章-服务配置：项目整合Nacos配置中心")]),s._v(" "),a("p",[s._v("作者：冰河\n"),a("br"),s._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("博客："),a("a",{attrs:{href:"https://binghe001.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe001.github.io"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("文章汇总："),a("a",{attrs:{href:"https://binghe001.github.io/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe001.github.io/md/all/all.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("blockquote",[a("p",[s._v("一不小心《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),s._v("》专栏都更新到第22章了，再不上车就跟不上了，小伙伴们快跟上啊！")]),s._v(" "),a("p",[s._v("注意：本项目完整源码加入 "),a("strong",[a("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1)]),s._v(" 知识星球即可获取，文末有入场方式。")])]),s._v(" "),a("h2",{attrs:{id:"前文回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前文回顾"}},[s._v("#")]),s._v(" 前文回顾")]),s._v(" "),a("p",[s._v("在《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500408&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),s._v("》专栏前面的文章中，我们实现了用户微服务、商品微服务和订单微服务之间的远程调用，并且实现了服务调用的负载均衡。也基于阿里开源的Sentinel实现了服务的限流与容错，并详细介绍了Sentinel的核心技术与配置规则。简单介绍了服务网关，并对SpringCloud Gateway的核心架构进行了简要说明，也在项目中整合了SpringCloud Gateway网关实现了通过网关访问后端微服务.")]),s._v(" "),a("p",[s._v("同时，也基于SpringCloud Gateway整合Sentinel实现了网关的限流功能，详细介绍了SpringCloud Gateway网关的核心技术。在链路追踪章节，我们开始简单介绍了分布式链路追踪技术与解决方案，随后在项目中整合Sleuth实现了链路追踪，并使用Sleuth整合ZipKin实现了分布式链路追踪的可视化 。")]),s._v(" "),a("p",[s._v("在消息服务章节，我们介绍了MQ的使用场景，引入MQ后的注意事项以及MQ的选型对比，在项目中整合了RocketMQ，并给大家介绍了RocketMQ的核心技术。")]),s._v(" "),a("p",[s._v("在服务配置章节，我们首先介绍了服务配置与Nacos作为配置中心的相关概念。接下来，我们就正式在项目中整合Nacos配置中心。")]),s._v(" "),a("h2",{attrs:{id:"本章总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本章总览"}},[s._v("#")]),s._v(" 本章总览")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-012","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-012.png",loading:"lazy"}})]),s._v(" "),a("p",[a("strong",[s._v("注意：本章中在测试每个案例时，都需要启动Nacos，Sentinel，ZipKin和RocketMQ。另外，本章对应的Nacos配置（冰河亲测的Nacos配置）放在了项目源码的doc/nacos/config/chapter22目录下，小伙伴们将Nacos的配置直接导入到Nacos的配置列表中，也可以按照文章自己手动实现。本项目完整源码加入 冰河技术 知识星球即可获取，文末有入场方式。")])]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[s._v("分别在用户微服务shop-user，商品微服务shop-product，订单微服务shop-order和网关服务shop-gateway中的pom.xml文件中添加如下依赖。")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-config"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"服务整合nacos配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务整合nacos配置中心"}},[s._v("#")]),s._v(" 服务整合Nacos配置中心")]),s._v(" "),a("p",[s._v("这里，我们将用户微服务，商品微服务，订单微服务和网关服务的配置信息都放在Nacos中。")]),s._v(" "),a("p",[a("strong",[s._v("注意：将微服务的配置放在Nacos中时，就暂时不用微服务中的application.yml配置文件了，而是在项目中新建一个bootstrap.yml文件。因为配置文件的优先级从高到低依次为：bootstrap.properties -> bootstrap.yml -> application.properties -> application.yml。")])]),s._v(" "),a("h3",{attrs:{id:"用户微服务整合配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户微服务整合配置中心"}},[s._v("#")]),s._v(" 用户微服务整合配置中心")]),s._v(" "),a("p",[s._v("（1）在用户微服务shop-user的resources目录下新建bootstrap.yml文件，文件内容如下所示。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("user\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("file-extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yaml\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" user_group\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（2）启动Nacos，在浏览器中输入"),a("code",[s._v("http://localhost:8848/nacos")]),s._v("并登录Nacos，选择Nacos菜单中的配置管理-配置列表，如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-001","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-001.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（3）点击配置列表界面中的 "),a("strong",[s._v("+")]),s._v(" ，如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-002","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-002.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("点开后的界面如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-003","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-003.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("其中各个配置项的含义如下所示。")]),s._v(" "),a("ul",[a("li",[s._v("Data ID就是配置集ID，通常情况下就是某个配置文件的ID，这个ID的命名遵循一定的规则，如下所示。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${spring.application.name}")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${spring.profiles.active}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${spring.cloud.nacos.config.file-extension}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里，对应到用户微服务的Data ID就是："),a("code",[s._v("server-user-dev.yaml")]),s._v("。所以，对于用户微服务来说，我们在Data ID中输入server-user-dev.yaml。")]),s._v(" "),a("ul",[a("li",[s._v("Group：配置分组，配置分组要与"),a("code",[s._v("spring.cloud.nacos.config.group")]),s._v("对应，用户微服务的配置分组就是user_group。")]),s._v(" "),a("li",[s._v("描述：对当前配置的简单描述。例如，用户微服务的开发环境配置。")]),s._v(" "),a("li",[s._v("配置格式：表示配置内容所使用的文件格式，这里我们选择YAML格式。")]),s._v(" "),a("li",[s._v("配置内容：配置文件的内容，这里我们直接将application.yml文件的内容复制进去即可。")])]),s._v(" "),a("p",[s._v("配置好之后的内容如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-004","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-004.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("配置好之后点击页面的发布按钮，如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-005","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-005.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("发布成功后会跳转到配置管理-配置列表界面，如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-006","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-006.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（4）注释掉用户微服务shop-user的resources目录下的application.yml文件中的内容（重要，不要忘记）")]),s._v(" "),a("p",[s._v("至此，就完成了修改用户微服务的配置操作。")]),s._v(" "),a("h3",{attrs:{id:"商品微服务整合配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商品微服务整合配置中心"}},[s._v("#")]),s._v(" 商品微服务整合配置中心")]),s._v(" "),a("p",[s._v("修改商品微服务的配置过程与修改用户微服务的配置过程类似，只是部分配置项不同。")]),s._v(" "),a("p",[s._v("（1）在商品微服务shop-product的resources目录下新建bootstrap.yml文件，内容如下所示。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("product\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("file-extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yaml\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" product_group\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（2）在Nacos中的配置信息如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-007.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（3）注释掉商品微服务shop-product的resources目录下的application.yml文件中的内容（重要，不要忘记）")]),s._v(" "),a("h3",{attrs:{id:"订单微服务整合配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订单微服务整合配置中心"}},[s._v("#")]),s._v(" 订单微服务整合配置中心")]),s._v(" "),a("p",[s._v("修改订单微服务的配置过程与修改用户微服务的配置过程类似，只是部分配置项不同。")]),s._v(" "),a("p",[s._v("（1）在订单微服务shop-order的resources目录下新建bootstrap.yml文件，内容如下所示。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("order\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("file-extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yaml\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" order_group\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("（2）在Nacos中的配置信息如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-008","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-008.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（3）注释掉订单微服务shop-order的resources目录下的application.yml文件中的内容（重要，不要忘记）")]),s._v(" "),a("h3",{attrs:{id:"网关服务整合配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关服务整合配置中心"}},[s._v("#")]),s._v(" 网关服务整合配置中心")]),s._v(" "),a("p",[s._v("修改网关服务的配置过程与修改用户微服务的配置过程类似，只是部分配置项不同。")]),s._v(" "),a("p",[s._v("（1）在网关服务shop-gateway的resources目录下新建bootstrap.yml文件，内容如下所示。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gateway\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("allow-bean-definition-overriding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("file-extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yaml\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gateway_group\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("（2）在Nacos中的配置信息如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-009","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-009.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（3）注释掉网关服务shop-gateway的resources目录下的application.yml文件中的内容（重要，不要忘记）")]),s._v(" "),a("h3",{attrs:{id:"查看nacos中的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看nacos中的配置"}},[s._v("#")]),s._v(" 查看Nacos中的配置")]),s._v(" "),a("p",[s._v("将用户微服务、商品微服务、订单微服务、网关服务的配置添加到Nacos中后，Nacos中的配置管理-配置列表如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-010","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-010.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"整合nacos配置中心测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整合nacos配置中心测试"}},[s._v("#")]),s._v(" 整合Nacos配置中心测试")]),s._v(" "),a("p",[s._v("（1）分别启动Nacos、Sentinel、ZipKin、RocketMQ的NameServer和Broker。")]),s._v(" "),a("p",[s._v("（2）分别启动用户微服务、商品微服务、订单微服务和网关服务，如果启动成功，基本就说明项目整合Nacos配置中心成功。")]),s._v(" "),a("p",[s._v("（3）启动四个服务后，在浏览器中输入"),a("code",[s._v("localhost:10001/server-order/order/submit_order?userId=1001&productId=1001&count=1")]),s._v("，如下所示。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-05-24-011","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-05-24-011.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("查看各个微服务中也会打印出相关的日志，如下所示。")]),s._v(" "),a("ul",[a("li",[s._v("用户微服务会打印出如下信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("获取到的用户信息为："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"北京"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(":1001,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c26be8aaf53b15054896983b43eb6a65"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"13212345678"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binghe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n用户微服务收到了订单信息："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"北京"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(":15235872727371776,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"13212345678"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"totalPrice"')]),s._v(":2399.00,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),s._v(":1001,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"binghe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("商品微服务会打印出如下信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("获取到的商品信息为："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(":1001,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"华为"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proPrice"')]),s._v(":2399.00,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proStock"')]),s._v(":9999"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n更新商品库存传递的参数为: 商品id:1001, 购买数量:1 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("订单微服务会打印出如下信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("提交订单时传递的参数:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),s._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"empty"')]),s._v(":false,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"productId"')]),s._v(":1001,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),s._v(":1001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n库存扣减成功\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("网关服务会打印出如下信息")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("执行前置过滤器逻辑\n执行后置过滤器逻辑\n访问接口主机: localhost\n访问接口端口: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10001")]),s._v("\n访问接口URL: /server-order/order/submit_order\n访问接口URL参数: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("productId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n访问接口时长: 1260ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("说明我们的项目中成功整合了Nacos的配置中心。")]),s._v(" "),a("p",[a("strong",[s._v("好了，今天我们就到儿吧，限于篇幅，文中并未给出完整的案例源代码，想要完整源代码的小伙伴可加入【冰河技术】知识星球获取源码。也可以加我微信：hacker_binghe，一起交流技术。")])]),s._v(" "),a("p",[a("strong",[s._v("另外，一不小心就写了22章了，小伙伴们你们再不上车就真的跟不上了！！！")])]),s._v(" "),a("h2",{attrs:{id:"关于星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[s._v("#")]),s._v(" 关于星球")]),s._v(" "),a("p",[s._v("最近，冰河创建了【冰河技术】知识星球，《"),a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2337104419664084992&scene=173&from_msgid=2247500214&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("SpringCloud Alibaba实战"),a("OutboundLink")],1),s._v("》专栏的源码获取方式会放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),s._v(" "),a("p",[s._v("今天，【冰河技术】知识星球再开放200张优惠券，还没上车的小伙伴赶紧啦，再不上车就跟不上啦！！")]),s._v(" "),a("h3",{attrs:{id:"星球提供的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[s._v("#")]),s._v(" 星球提供的服务")]),s._v(" "),a("p",[s._v("冰河整理了星球提供的一些服务，如下所示。")]),s._v(" "),a("p",[s._v("加入星球，你将获得：")]),s._v(" "),a("p",[s._v("1.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),s._v(" "),a("p",[s._v("2.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),s._v(" "),a("p",[s._v("3.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),s._v(" "),a("p",[s._v("4.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),s._v(" "),a("p",[s._v("5.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),s._v(" "),a("p",[s._v("6.可以发送你的简历到我的邮箱，提供简历批阅服务")]),s._v(" "),a("p",[s._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),s._v(" "),a("p",[s._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),s._v(" "),a("p",[s._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),s._v(" "),a("h3",{attrs:{id:"星球门票价格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球门票价格"}},[s._v("#")]),s._v(" 星球门票价格")]),s._v(" "),a("p",[s._v("星球目前的门票价格50元，随着每次加入新实战项目和分享硬核技术上调入场价格。")]),s._v(" "),a("p",[a("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信「hacker_binghe」扫二维码，或者去公众号「冰河技术」回复「星球」扫二维码进圈。")]),s._v(" "),a("p",[s._v("最后，小伙伴们可以扫描或者长按下图中的二维码加入星球，也可以在 "),a("strong",[s._v("冰河技术")]),s._v(" 公众号回复 “ "),a("strong",[s._v("星球")]),s._v(" ” ，领取入场优惠券。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),s._v(" "),a("p",[a("strong",[s._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);