(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{611:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"win10完美去除桌面快捷图标小箭头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#win10完美去除桌面快捷图标小箭头"}},[s._v("#")]),s._v(" Win10完美去除桌面快捷图标小箭头")]),s._v(" "),a("p",[s._v("这两天笔记本硬盘坏了，一些数据不能恢复了，哎，才买了一年多的电脑，竟然因为硬盘老化突然出现很多磁盘坏道，尝试各种方式读盘均失败，各种工具都无法检测磁盘的存在。无奈之下，拿到电脑维修部去修，同样无法恢复数据！！！")]),s._v(" "),a("p",[s._v("还好，有些内容是永久保留在了头脑中，所以，记在头脑中的东西才是永恒的。")]),s._v(" "),a("p",[s._v("今天，给大家分享一个如何完美去除Win10桌面快捷图标小箭头的技巧，希望能够给大家带来帮助。")]),s._v(" "),a("h2",{attrs:{id:"去掉小箭头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去掉小箭头"}},[s._v("#")]),s._v(" 去掉小箭头")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('reg add "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons" /v 29 /d "%systemroot%\\system32\\imageres.dll,197" /t reg_sz /f\ntaskkill /f /im explorer.exe\nattrib -s -r -h "%userprofile%\\AppData\\Local\\iconcache.db"\ndel "%userprofile%\\AppData\\Local\\iconcache.db" /f /q\nstart explorer\npause\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("复制上面的代码。新建一个文本文件。粘贴后另存为.bat文件，然后以管理员身份打开。 ok！")]),s._v(" "),a("h2",{attrs:{id:"恢复小箭头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复小箭头"}},[s._v("#")]),s._v(" 恢复小箭头")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('reg delete "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons" /v 29 /f\ntaskkill /f /im explorer.exe\nattrib -s -r -h "%userprofile%\\AppData\\Local\\iconcache.db"\ndel "%userprofile%\\AppData\\Local\\iconcache.db" /f /q\nstart explorer\npause\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("同理，将上述代码另存为.bat文件，管理员身份打开。就可恢复小箭头了。")]),s._v(" "),a("p",[s._v("这种方法不会导致任何问题可放心使用")]),s._v(" "),a("h1",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);