(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{521:function(a,t,s){"use strict";s.r(t);var n=s(7),l=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"winlogonhack获取系统密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#winlogonhack获取系统密码"}},[a._v("#")]),a._v(" WinlogonHack获取系统密码")]),a._v(" "),t("h2",{attrs:{id:"winlogonhack截取密码的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#winlogonhack截取密码的原理"}},[a._v("#")]),a._v(" WinlogonHack截取密码的原理")]),a._v(" "),t("p",[a._v("WinlogonHack通过挂钩系统中的msgina.dll的WlxLoggedOutSAS函数记录登陆的账户密码。")]),a._v(" "),t("p",[a._v('当有3389脸上服务器时。新创建的winlogon.exe将会在登录前加载，注册了"Startup" 的DLLHook函数。登陆成功后，会将密码写入到.dat文件中去，并取消Hook。')]),a._v(" "),t("h2",{attrs:{id:"实战winlogonhack获取系统密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战winlogonhack获取系统密码"}},[a._v("#")]),a._v(" 实战WinlogonHack获取系统密码")]),a._v(" "),t("p",[a._v("下载WinlogonHack后文件内会有以下内容")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181130095902962.jpg",loading:"lazy"}})]),a._v(" "),t("p",[a._v("第一步、安装install.bat")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2018113009594160.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("安装完成后就可以开始工作了")]),a._v(" "),t("p",[a._v("第二步、模拟受害者登陆服务器")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2018113010000940.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("第三步、查找.dat文件（这里的文件名是jks.dat）")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181130100045387.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("当然，这里有配套的工具--ReadLog.bat")]),a._v(" "),t("p",[a._v("运行后，会将.dat文件转换成pass.txt文件到该目录下来")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181130100125483.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("第四步、卸载WinlogonHack")]),a._v(" "),t("p",[a._v("执行Uninstall.bat，若 %systemroot%\\system32\\wminotify.dll 文件未能删除，那就重启再删了吧")]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);