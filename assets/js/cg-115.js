(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{413:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"《mysql核心知识》第15章-自动备份与恢复mysql数据库并发送email邮件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第15章-自动备份与恢复mysql数据库并发送email邮件"}},[s._v("#")]),s._v(" 《MySQL核心知识》第15章：自动备份与恢复MySQL数据库并发送Email邮件")]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("p",[s._v("今天是《MySQL核心知识》专栏的第15章，今天为大家系统的讲讲如何自动备份与恢复MySQL数据库并发送Email邮件，希望通过本章节的学习，小伙伴们能够举一反三，彻底掌握自动备份与恢复MySQL数据库并发送Email邮件相关的知识。好了，开始今天的正题吧。")]),s._v(" "),a("h2",{attrs:{id:"背景案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景案例"}},[s._v("#")]),s._v(" 背景案例")]),s._v(" "),a("p",[s._v("一个博客，一个网站最重要的就是数据库，所以经常备份数据是必须的.尽管 WordPress 有定时备份数据的插件，但只能备份当前的博客，不够灵活.适合个人小小博客，对于一些网站来说，就不适合了.现在很多人都拥有多个网站，showfom就有几个网站.每个网站都装个插件就比较麻烦了。况且不是每个网站都是WordPress 的 。")]),s._v(" "),a("p",[s._v("所以写了个自动备份mysql数据库的脚本，再加上gmail这个G级邮箱，备份多少数据都可以了。下面是代码:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--databases db1 db2 db3 > /home/website/backups/databackup.sql")]),s._v("\ntar zcf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"主题:数据库备份"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mutt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"内容:数据库备份"')]),s._v(" www"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@gmail.com")]),s._v("\nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("我们也可以按照日期生成备份的SQL文件，具体如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("ls_date"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("date +%Y%m%d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\nfileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup_$ls_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\nmysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--databases db1 db2 db3 > $fileName")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将上面的代码保存为automysqlbackup.sh")]),s._v(" "),a("p",[s._v("然后利用crontab 实现动备份，在服务器命令行输入如下命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最好是使用如下命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/crontab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入以下内容。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("00 00 * * * /home/website/automysqlbackup.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就实现了每天00:00自动备份mysql数据库并发送到Email。")]),s._v(" "),a("h2",{attrs:{id:"脚本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本说明"}},[s._v("#")]),s._v(" 脚本说明")]),s._v(" "),a("p",[s._v("再简单的说明下备份并发送邮件的脚本。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--databases db1 db2 db3 > /home/website/backups/databackup.sql")]),s._v("\ntar zcf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\necho "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"主题:数据库备份"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mutt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"内容:数据库备份"')]),s._v(" www"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@gmail.com")]),s._v("\nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("第一句是一次性备份多个数据库，这个要用root权限的用户才可以的。-u后面的是数据库用户名 -p后面的是数据库密码 无需空格 db1 db2 db3为需要备份的数据库名。如果数据库用户名没有root这个权限，可以改为如下所示。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword db1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\nmysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword db2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\nmysqldump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ppassword db3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第二句是将 backups 文件夹里面的数据文件压缩为文件名：databackup.sql.tar.gz")]),s._v(" "),a("p",[s._v("第三句是将压缩了的数据库文件发送到指定的邮箱。")]),s._v(" "),a("p",[s._v("其中的主题:数据库备份 ，就是邮件的主题， 内容:数据库备份，就是邮件的内用，")]),s._v(" "),a("p",[s._v("/home/website/backups/databackup.sql.tar.gz 为附件")]),s._v(" "),a("p",[s._v("www@gmail.com为要发送的Email。")]),s._v(" "),a("p",[s._v("此时，我们完成了自动备份的功能，接下来就是要恢复数据库的问题了。")]),s._v(" "),a("h2",{attrs:{id:"数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[s._v("#")]),s._v(" 数据恢复")]),s._v(" "),a("p",[s._v("恢复数据库很简单，只需要我们登录数据库后，利用“source 数据库脚本”的命令即可恢复数据库，比如：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proot\nsource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("website"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("backups"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("databackup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注意：有关更多MySQL数据备份与恢复的知识，大家可以查阅《MySQL技术大全：开发、优化与运维实战》一书。")]),s._v(" "),a("p",[a("strong",[s._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),s._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[s._v("#")]),s._v(" 星球服务")]),s._v(" "),a("p",[s._v("加入星球，你将获得：")]),s._v(" "),a("p",[s._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),s._v(" "),a("p",[s._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),s._v(" "),a("p",[s._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),s._v(" "),a("p",[s._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),s._v(" "),a("p",[s._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),s._v(" "),a("p",[s._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),s._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[s._v("#")]),s._v(" 星球重磅福利")]),s._v(" "),a("p",[s._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[s._v("直接立减149元，相当于5折，")]),s._v(" 这已经是星球最大优惠力度！")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),s._v(" "),a("br")]),s._v(" "),a("p",[s._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),s._v(" "),a("p",[a("strong",[s._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),s._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[s._v("#")]),s._v(" 其他方式加入星球")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("链接")]),s._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" 加入星球。")]),s._v(" "),a("li",[a("strong",[s._v("回复")]),s._v(" ：在公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 领取优惠券加入星球。")])]),s._v(" "),a("p",[a("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[s._v("hacker_binghe")]),s._v(" 扫二维码，或者去公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 扫二维码加入星球。")]),s._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[s._v("#")]),s._v(" 星球规划")]),s._v(" "),a("p",[s._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),s._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[s._v("#")]),s._v(" 中间件项目")]),s._v(" "),a("ul",[a("li",[s._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写Redis》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写JVM》全程手撸代码。")])]),s._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[s._v("#")]),s._v(" 超硬核项目")]),s._v(" "),a("ul",[a("li",[s._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[s._v("已上新")]),s._v("）。")]),s._v(" "),a("li",[s._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),s._v(" "),a("li",[s._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),s._v(" "),a("p",[s._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),s._v(" "),a("p",[s._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),s._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[s._v("#")]),s._v(" 联系冰河")]),s._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[s._v("#")]),s._v(" 加群交流")]),s._v(" "),a("p",[s._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[s._v("星球编号")]),s._v("。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("冰河微信")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),a("p",[s._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[s._v("冰河技术")]),s._v(" 微信公众号首发，强烈建议大家关注。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("公众号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[s._v("#")]),s._v(" 视频号")]),s._v(" "),a("p",[s._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("视频号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[s._v("#")]),s._v(" 星球")]),s._v(" "),a("p",[s._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1)]),s._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[s._v("hacker_binghe")]),s._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[s._v("实战项目")]),s._v("！")]),s._v(" "),a("p",[s._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1),s._v("公众号，回复 "),a("code",[s._v("星球")]),s._v(" 可以获取入场优惠券。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("知识星球：冰河技术")]),s._v(" "),a("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);