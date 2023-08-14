(window.webpackJsonp=window.webpackJsonp||[]).push([[664],{963:function(e,t,r){"use strict";r.r(t);var a=r(7),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"《seckill秒杀系统》第8章-秒杀系统研发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第8章-秒杀系统研发环境搭建"}},[e._v("#")]),e._v(" 《Seckill秒杀系统》第8章：秒杀系统研发环境搭建")]),e._v(" "),t("p",[e._v("作者：冰河\n"),t("br"),e._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://binghe.gitcode.host"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("课程视频："),t("a",{attrs:{href:"https://t.zsxq.com/10oVQR9Qe",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.zsxq.com/10oVQR9Qe"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("沉淀，成长，突破，帮助他人，成就自我。")])]),e._v(" "),t("ul",[t("li",[e._v("本章难度：★★☆☆☆")]),e._v(" "),t("li",[e._v("本章重点：安装运行秒杀系统所需要的研发依赖环境，重点涉及到Docker环境、docker-compose环境，以及基于docker-compose一键安装秒杀系统所依赖的基础服务和其他中间件，包括：MySQL、Redis、RocketMQ、ElasticSearch、Logstash、Kibana、Nacos、Sentinel等。另外，项目源码中会提供基于docker-compose的开箱即用的yml脚本文件。")]),e._v(" "),t("li",[e._v("课程视频："),t("a",{attrs:{href:"https://t.zsxq.com/10oVQR9Qe",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://t.zsxq.com/10oVQR9Qe"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("strong",[e._v("大家好，我是冰河~~")])]),e._v(" "),t("p",[e._v("在充分了解了秒杀系统的需求、业务流程、技术流程和架构设计之后，安装了研发秒杀系统最基础的环境，VMWare和CentOS操作系统，在这些最基础的环境上，还需要搭建秒杀系统的研发环境。")]),e._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[e._v("#")]),e._v(" 一、前言")]),e._v(" "),t("p",[e._v("任何一套系统的研发和运行都是有条件的，那就是需要在特定的环境下研发或者运行，在秒杀系统的架构设计章节，为了进一步增强秒杀系统的性能、可用性和可伸缩性，我们采用容器化架构的设计方案，所以，在正式研发秒杀系统之前，还需要对这些研发环境进行安装和测试。")]),e._v(" "),t("h2",{attrs:{id:"二、本章诉求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[e._v("#")]),e._v(" 二、本章诉求")]),e._v(" "),t("p",[e._v("还是那句话：磨刀不无砍柴功。在动手写代码之前，将所有要准备的工作完成，这样写起代码来才会更加顺畅。本章，会在安装的CentOS操作系统之上搭建Docker环境、docker-compose环境，基于docker-compose环境一键安装秒杀系统所依赖的数据库、基础软件和中间件环境，随后会对搭建的环境进行测试。")]),e._v(" "),t("p",[t("strong",[e._v("注意：本章所有环境和软件的安装，都需要CentOS7能够正常联网才行，如果小伙伴们的虚拟机不能正常联网，可以查看第7章：秒杀系统基础环境搭建的网络设置相关的内容。")])]),e._v(" "),t("h2",{attrs:{id:"三、安装docker环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装docker环境"}},[e._v("#")]),e._v(" 三、安装Docker环境")]),e._v(" "),t("p",[e._v("之前安装的操作系统为CentOS7版本，所以，这里以CentOS7为例安装Docker环境，具体安装步骤如下所示。")]),e._v(" "),t("h3",{attrs:{id:"_3-1-查看操作系统内核版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-查看操作系统内核版本"}},[e._v("#")]),e._v(" 3.1 查看操作系统内核版本")]),e._v(" "),t("p",[e._v("由于Docker CE 支持 64 位版本 CentOS 7，并且要求内核版本不低于 3.10，所以这里先查看下安装的CentOS7操作系统的内核版本。在，命令行输入如下命令。")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-srm")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("输出的结果信息如下所示。")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.10")]),e._v(".0-1160.el7.x86_64 x86_64\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("可以看到，内核版本是3.10，符合要求。")]),e._v(" "),t("h3",{attrs:{id:"_3-2-卸载旧版本docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-卸载旧版本docker"}},[e._v("#")]),e._v(" 3.2 卸载旧版本Docker")]),e._v(" "),t("p",[e._v("如果之前安装过旧版本的Docker，则可以执行如下命令卸载。")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("yum remove "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine docker-ce\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("3.3 安装gcc环境")]),e._v(" "),t("p",[e._v("安装gcc环境主要是为了更加顺利的安装Docker环境，在命令行分别执行如下两条命令来安装gcc环境。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("yum -y install gcc\nyum -y install gcc-c++\n")])])]),t("p",[e._v("3.4 安装yum工具")]),e._v(" "),t("p",[e._v("在命令行执行如下命令安装yum工具。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("yum install -y yum-utils device-mapper-persistent-data lvm2 --skip-broken\n")])])]),t("p",[e._v("3.5 设置Docker镜像仓库")]),e._v(" "),t("p",[e._v("这里，我将Docker的镜像仓库设置为阿里镜像源，执行如下命令即可。")]),e._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[e._v("#")]),e._v(" 查看完整文章")]),e._v(" "),t("p",[e._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[e._v("冰河技术"),t("OutboundLink")],1),e._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=s.exports}}]);