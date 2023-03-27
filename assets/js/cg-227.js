(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{519:function(a,s,t){"use strict";t.r(s);var n=t(7),p=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"appscan使用问题记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan使用问题记录"}},[a._v("#")]),a._v(" AppScan使用问题记录")]),a._v(" "),s("h2",{attrs:{id:"appscan安装时出现错误1603"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan安装时出现错误1603"}},[a._v("#")]),a._v(" AppScan安装时出现错误1603")]),a._v(" "),s("p",[a._v("是因为之前安装过，没有卸载干净导致报错。解决方法如下：")]),a._v(" "),s("p",[a._v("1、控制面板→程序和功能→选中程序卸载。")]),a._v(" "),s("p",[a._v("2、删除AppScan安装路径以及下面的所有内容。\n3、在系统[开始]->[运行(R)...]中，运行命令regedit来删除全部注册键(如果存在的话)，以及下列的子 键:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" A.HKEY_LOCAL_MACHINE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("SOFTWARE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("IBM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Rational AppScan \n B.HKEY_CURRENT_USER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("IBM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Rational AppScan\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("4、删除Windows TEMP文件夹下面的所有内容:\nA.点击系统[开始]->[运行(R)...]，输入 %temp%并运行\nB.当文件夹打开后，选择菜单[编辑]->[全部选定(A)]，在选定文件的任何部分右击鼠标并选择删除\n(D)\n5、同样打开APPSCAN_TEMP文件夹:\nA.打开后删除里面所有的内容\nB.如果发生下面的错误，忽略该错误开始下一步操作")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" %APPSCAN_TEMP% \n Windows cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%APPSCAN_TEMP%'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" Make sure you typed the name \n correctly, and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v(" try again. To search "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" a file, slick the Start \n button, and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v(" click Search.\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v('6、使用Windows自带的磁盘清理设置来清理您的电脑:\nA.在系统[开始]->[运行(R)...]中，输入命令: cleanmgr/sageset，选择"临时安装文件","安装日志\n文件"，"临时文件"并取消其他项目的勾选(这样工具的配置已经完成)。\nB.在系统[开始]->[运行(R)...]中，输入命令: cleanmgr/sagerun(这样就启动了清除功能，一般需 要几分钟才能完成)。\n7、重新启动电脑。')]),a._v(" "),s("h2",{attrs:{id:"appscan扫描后篡改网站代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan扫描后篡改网站代码"}},[a._v("#")]),a._v(" AppScan扫描后篡改网站代码")]),a._v(" "),s("p",[a._v("在扫描配置→测试策略→勾选了侵入式，有可能会篡改掉网站的代码。如果会篡改的话在扫描的时候去掉这个勾选即可。（不过这个就呵呵了，要从代码上放置被侵入攻击）")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200302638.jpg",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"appscan扫描过程中c盘空间不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan扫描过程中c盘空间不足"}},[a._v("#")]),a._v(" AppScan扫描过程中C盘空间不足")]),a._v(" "),s("p",[a._v("1、建议不要勾选启用扫描日志，当扫描网站过大或扫描时间过长，随着日志文件变大会导致系统崩溃。如果已经勾选了，可以在工具→选项→启用扫描日志勾选去掉即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/2018111320035182.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("2、如果要勾选的话，可以把用户文件保存到其它硬盘。默认的用户文件是："),s("code",[a._v("C:\\Documents and Settings\\Administrator\\My Documents\\AppScan；")]),a._v(" 可以修改为其他路径。该路径可以在菜单栏中依次选择工具→选项→一般→文件位置部分修改。")]),a._v(" "),s("p",[a._v("3、如果已经把上面的地址都修改到了其他盘，但是在扫描过程中还是发现C 盘的空间快速被消耗，是因为很多临时文件都保存在C 盘，AppScan 中有一个隐藏的参数APPSCAN_TEMP 来设置临时文件位置。可以通过修改系统变量来修改到其他硬盘空间。临时文件位置说明：描述正常操作期间AppScan 将其临时文件保存到的位置。缺省情况下，AppScan 将其临时文件存储在以下位置："),s("code",[a._v("C:\\Documents and Settings\\All Users\\Application Data\\IBM\\Rational AppScan\\temp")]),a._v(" 如果需要修改此缺省位置，请按照要求编辑环境变量APPSCAN_TEMP 的路径。")]),a._v(" "),s("p",[a._v("访问环境变量的方法是：右键单击我的电脑，然后依次选择属性→高级→环境变量。\n注意：在新位置的路径中绝不能有任何Unicode字符。\n修改AppScan 中的临时文件：桌面上鼠标右键选择我的电脑→属性→高级系统设置→高级→环境变量，增加一个新的“用户环境变量”，名字是“APPSCAN_TEMP”，设定路径，指向您希望保存临时文件的目录。")]),a._v(" "),s("p",[a._v("4、还可以始终暂停扫描稍后再启动，当然有了前面的方法我想也不需要这样了。")]),a._v(" "),s("h2",{attrs:{id:"appscan扫描时虚拟内存不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan扫描时虚拟内存不足"}},[a._v("#")]),a._v(" AppScan扫描时虚拟内存不足")]),a._v(" "),s("p",[a._v("1、一个小时保存一次，以免出现故障的时候之前扫描的结果白费了；在工具→选项→扫描过程中自动保存设置为60分钟自动保存一次。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200443626.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("2、可以在工具→选项→高级搜索PerformanceMonitor.RestartOnOutOfMemory把属性值改为true。使Rational AppScan当内存使用量相对过大时自动重新启动。 这样当扫描因为剩余的虚拟内存量过低从而被迫停止时，Rational AppScan会监测系统注册表的设定来决定是否重新启动。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200519464.jpg",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"appscan扫描时出现通信问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan扫描时出现通信问题"}},[a._v("#")]),a._v(" AppScan扫描时出现通信问题")]),a._v(" "),s("p",[a._v("1、减小线程数，扫描配置→通信和代理。")]),a._v(" "),s("p",[a._v("2、加大超时数，扫描配置→通信和代理。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200603524.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("3、服务器有防火墙，防火墙关闭之后即可扫描。")]),a._v(" "),s("h2",{attrs:{id:"appscan打开文件时提示-文件出现损坏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan打开文件时提示-文件出现损坏"}},[a._v("#")]),a._v(" AppScan打开文件时提示“文件出现损坏”")]),a._v(" "),s("p",[a._v("1、先试试这个、可能是因为Issch和ISUSPM自启动项被禁用了。运行“msconfig”看下，如果禁用状态，开启为开机启动即可。")]),a._v(" "),s("h2",{attrs:{id:"appscan整个扫描流程简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appscan整个扫描流程简述"}},[a._v("#")]),a._v(" AppScan整个扫描流程简述")]),a._v(" "),s("p",[a._v("AppScan 使用步骤：计划、执行、检查、分析。")]),a._v(" "),s("p",[a._v("1、在计划阶段（plan）：明确目的，进行策略性的选择和任务分解")]),a._v(" "),s("p",[a._v("A、明确目的：选择合适的扫描策略")]),a._v(" "),s("p",[a._v("B、了解对象：首先进行探索，了解网站结构和规模")]),a._v(" "),s("p",[a._v("​      C、确定策略：进行对应的配置")]),a._v(" "),s("p",[a._v("​      D、按照目录进行扫描任务的分解")]),a._v(" "),s("p",[a._v("​      E、按照扫描策略进行扫描任务的分解")]),a._v(" "),s("p",[a._v("2、执行阶段(Do)：一边扫描一遍观察")]),a._v(" "),s("p",[a._v("A、先爬后扫（继续仅测试）")]),a._v(" "),s("p",[a._v("3、检查阶段（Check）")]),a._v(" "),s("p",[a._v("A、检查和调整配置（过程中可能会产生一些问题）")]),a._v(" "),s("p",[a._v("4、结果分析（Analysis）")]),a._v(" "),s("p",[a._v("A、对比结果")]),a._v(" "),s("p",[a._v("B、汇总结果（整合和过滤）")]),a._v(" "),s("p",[a._v("Ps.一般扫描的时候选择综合扫描会扫描的全面些。")]),a._v(" "),s("h2",{attrs:{id:"修改后验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改后验证"}},[a._v("#")]),a._v(" 修改后验证")]),a._v(" "),s("p",[a._v("1、右击需要验证的问题，点击重新测试，如果修复了的话，此问题会消失掉。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200706706.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("2、对于HTML注释敏感信息泄露验证不掉的问题，可以点击具体问题然后查看请求/响应点击下一行突出显示看具体问题，然后在网站相应页面前台中查看是否已去掉此注释。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20181113200743651.jpg",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);