(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{421:function(t,a,s){"use strict";s.r(a);var r=s(7),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《nginx核心技术》第06章-按日期分割nginx日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《nginx核心技术》第06章-按日期分割nginx日志"}},[t._v("#")]),t._v(" 《Nginx核心技术》第06章：按日期分割Nginx日志")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("星球项目地址："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/zsxq/introduce.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("ul",[a("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),a("li",[t._v("本章重点：用最简短的篇幅介绍Nginx最核心的知识，掌握如何按日期分割Nginx日志，并能够灵活运用到实际项目中，维护高可用系统。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("今天给大家介绍《Nginx核心技术》的第06章：按日期分割Nginx日志，多一句没有，少一句不行，用最简短的篇幅讲述Nginx最核心的知识，好了，开始今天的内容。")]),t._v(" "),a("h2",{attrs:{id:"_6-1-本章概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-本章概述"}},[t._v("#")]),t._v(" 6.1 本章概述")]),t._v(" "),a("p",[t._v("Nginx是没有以日期格式作为文件名来存储的，也就是说，Nginx不像Tomcat，每天自动生成一个日志文件，所有的日志都是以一个名字来存储，时间久了日志文件会变得很大。这样非常不利于分析。虽然nginx没有这个功能但我们可以写一个小脚本配合计划任务来达到这样的效果。即让Nginx每天产生一个日志文件，方便我们进行后续的数据分析。")]),t._v(" "),a("h2",{attrs:{id:"_6-2-分割nginx日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-分割nginx日志"}},[t._v("#")]),t._v(" 6.2 分割Nginx日志")]),t._v(" "),a("p",[t._v("首先，我们要创建一个脚本文件，用来分割Nginx日志，具体脚本如下：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/local/nginx-1.19.1/cutnginxlog.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("脚本内容如下：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Program:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     Auto cut nginx log script.")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx日志路径 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LOGS_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx-1.19.1/logs\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TODAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'today'")]),t._v(" +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动日志并改名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOGS_PATH}")]),t._v("/error.log "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOGS_PATH}")]),t._v("/error_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${TODAY}")]),t._v(".log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOGS_PATH}")]),t._v("/access.log "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${LOGS_PATH}")]),t._v("/access_"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${TODAY}")]),t._v(".log\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向nginx主进程发送重新打开日志文件的信号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-USR1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /usr/local/nginx-1.19.1/logs/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("接下来就是给cutnginxlog.sh文件授权。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x cutnginxlog.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("接下来添加计划任务，定时执行cutnginxlog.sh脚本，以root用户执行如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'59 23 * * * root /usr/local/nginx-1.19.1/cutnginxlog.sh >> /usr/local/nginx-1.19.1/cutnginxlog.log 2>&1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/crontab\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("意思就是在每天的23点59分执行脚本。将自动任务的执行日志（错误和正确的日志）自动写入cutnginxlog.log，“命令 >> 2>&1” 表示以追加方式将正确输出和错误输出都保存到同一个文件中。")]),t._v(" "),a("p",[a("strong",[t._v("好了，相信各位小伙伴们对如何按日期分割Nginx日志，有了进一步的了解，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=n.exports}}]);