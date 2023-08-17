(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{677:function(_,v,e){"use strict";e.r(v);var t=e(7),l=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"meterpreter命令大全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#meterpreter命令大全"}},[_._v("#")]),_._v(" Meterpreter命令大全")]),_._v(" "),v("p",[_._v("在其最基本的使用，meterpreter 是一个 Linux 终端在受害者的计算机上。这样，我们的许多基本的Linux命令可以用在meterpreter甚至是在一个窗口或其他操作系统。")]),_._v(" "),v("p",[_._v("这里有一些核心的命令可以用在meterpreter。")]),_._v(" "),v("ol",[v("li",[_._v("? – 帮助菜单")]),_._v(" "),v("li",[_._v("background – 将当前会话移动到背景")]),_._v(" "),v("li",[_._v("bgkill – 杀死一个背景 meterpreter 脚本")]),_._v(" "),v("li",[_._v("bglist – 提供所有正在运行的后台脚本的列表")]),_._v(" "),v("li",[_._v("bgrun – 作为一个后台线程运行脚本")]),_._v(" "),v("li",[_._v("channel – 显示活动频道")]),_._v(" "),v("li",[_._v("close – 关闭通道")]),_._v(" "),v("li",[_._v("exit – 终止 meterpreter 会话")]),_._v(" "),v("li",[_._v("help – 帮助菜单")]),_._v(" "),v("li",[_._v("interact – 与通道进行交互")]),_._v(" "),v("li",[_._v("irb – 进入 Ruby 脚本模式")]),_._v(" "),v("li",[_._v("migrate – 移动到一个指定的 PID 的活动进程")]),_._v(" "),v("li",[_._v("quit – 终止 meterpreter 会话")]),_._v(" "),v("li",[_._v("read – 从通道读取数据")]),_._v(" "),v("li",[_._v("run – 执行以后它选定的 meterpreter 脚本")]),_._v(" "),v("li",[_._v("use – 加载 meterpreter 的扩展")]),_._v(" "),v("li",[_._v("write – 将数据写入到一个通道")])]),_._v(" "),v("p",[v("strong",[_._v("第2步：文件系统命令")])]),_._v(" "),v("ol",[v("li",[_._v("cat -读取并输出到标准输出文件的内容")]),_._v(" "),v("li",[_._v("cd -更改目录对受害人")]),_._v(" "),v("li",[_._v("del -删除文件对受害人")]),_._v(" "),v("li",[_._v("download-从受害者系统文件下载")]),_._v(" "),v("li",[_._v("edit-用 vim编辑文件")]),_._v(" "),v("li",[_._v("getlwd -打印本地目录")]),_._v(" "),v("li",[_._v("getwd -打印工作目录")]),_._v(" "),v("li",[_._v("lcd -更改本地目录")]),_._v(" "),v("li",[_._v("lpwd -打印本地目录")]),_._v(" "),v("li",[_._v("ls -列出在当前目录中的文件列表")]),_._v(" "),v("li",[_._v("mkdir -在受害者系统上的创建目录")]),_._v(" "),v("li",[_._v("pwd -输出工作目录")]),_._v(" "),v("li",[_._v("rm -删除文件")]),_._v(" "),v("li",[_._v("rmdir -受害者系统上删除目录")]),_._v(" "),v("li",[_._v("upload-从攻击者的系统往受害者系统上传文件")])]),_._v(" "),v("p",[v("strong",[_._v("第 3 步： 网络命令")])]),_._v(" "),v("ol",[v("li",[_._v("ipconfig -显示网络接口的关键信息，包括 IP 地址、 等。")]),_._v(" "),v("li",[_._v("portfwd -端口转发")]),_._v(" "),v("li",[_._v("route -查看或修改受害者路由表")])]),_._v(" "),v("p",[v("strong",[_._v("第 4 步： 系统命令")])]),_._v(" "),v("ol",[v("li",[_._v("clearav -清除了受害者的计算机上的事件日志")]),_._v(" "),v("li",[_._v("drop_token -被盗的令牌")]),_._v(" "),v("li",[_._v("execute-执行命令")]),_._v(" "),v("li",[_._v("getpid -获取当前进程 ID (PID)")]),_._v(" "),v("li",[_._v("getprivs -尽可能获取尽可能多的特权")]),_._v(" "),v("li",[_._v("getuid -获取作为运行服务器的用户")]),_._v(" "),v("li",[_._v("kill -终止指定 PID 的进程")]),_._v(" "),v("li",[_._v("ps -列出正在运行的进程")]),_._v(" "),v("li",[_._v("reboot-重新启动受害人的计算机")]),_._v(" "),v("li",[_._v("reg -与受害人的注册表进行交互")]),_._v(" "),v("li",[_._v("rev2self -在受害者机器上调用 RevertToSelf()")]),_._v(" "),v("li",[_._v("shell -在受害者计算机上打开一个shell")]),_._v(" "),v("li",[_._v("shutdown-关闭了受害者的计算机")]),_._v(" "),v("li",[_._v("steal_token -试图窃取指定的 (PID) 进程的令牌")]),_._v(" "),v("li",[_._v("sysinfo -获取有关受害者计算机操作系统和名称等的详细信息")])]),_._v(" "),v("p",[v("strong",[_._v("第 5 步： 用户界面命令")])]),_._v(" "),v("ol",[v("li",[_._v("enumdesktops -列出所有可访问台式机")]),_._v(" "),v("li",[_._v("getdesktop -获取当前的 meterpreter 桌面")]),_._v(" "),v("li",[_._v("idletime -检查长时间以来，受害者系统空闲进程")]),_._v(" "),v("li",[_._v("keyscan_dump -键盘记录软件的内容转储")]),_._v(" "),v("li",[_._v("keyscan_start -启动时与如 Word 或浏览器的进程相关联的键盘记录软件")]),_._v(" "),v("li",[_._v("keyscan_stop -停止键盘记录软件")]),_._v(" "),v("li",[_._v("screenshot-抓去 meterpreter 桌面的屏幕截图")]),_._v(" "),v("li",[_._v("set_desktop -更改 meterpreter 桌面")]),_._v(" "),v("li",[_._v("uictl -启用用户界面组件的一些控件")])]),_._v(" "),v("p",[v("strong",[_._v("第 6 步： 特权升级命令")])]),_._v(" "),v("ol",[v("li",[_._v("getsystem -获得系统管理员权限")])]),_._v(" "),v("p",[v("strong",[_._v("第 7 步： 密码转储命令")])]),_._v(" "),v("ol",[v("li",[_._v("hashdump -抓去哈希密码 (SAM) 文件中的值")])]),_._v(" "),v("p",[_._v("请注意 hashdump 会可以跳过杀毒软件，但现在有两个脚本，都更加隐蔽，”run hashdump”和”run smart_hashdump”。查找更多关于那些在我即将举行的 meterpreter 脚本作弊。")]),_._v(" "),v("p",[v("strong",[_._v("第 8 步： Timestomp 命令")])]),_._v(" "),v("ol",[v("li",[_._v("timestomp -操作修改，访问，并创建一个文件的属性")])]),_._v(" "),v("h2",{attrs:{id:"写在最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[_._v("#")]),_._v(" 写在最后")]),_._v(" "),v("blockquote",[v("p",[_._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),v("strong",[_._v("冰河技术")]),_._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),v("strong",[_._v("冰河技术")]),_._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),v("strong",[_._v("冰河技术")]),_._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),v("strong",[_._v("冰河技术")]),_._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);v.default=l.exports}}]);