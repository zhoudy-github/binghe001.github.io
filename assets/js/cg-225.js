(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{517:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hydra安装报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hydra安装报错"}},[s._v("#")]),s._v(" Hydra安装报错")]),s._v(" "),a("p",[s._v("注：大家可以到链接"),a("a",{attrs:{href:"https://download.csdn.net/download/l1028386804/10902002",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://download.csdn.net/download/l1028386804/10902002"),a("OutboundLink")],1),s._v(" 下载Hydra一键安装包，内含冰河亲做一键安装脚本，直接运行即可。")]),s._v(" "),a("p",[s._v("在我们安装Hydra的过程中，可能会出现如下错误：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Compiled without LIBSSH v0.4.x support, module is not available"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面，就如何安装Hydra和解决上述问题，冰河将方法分享出来：")]),s._v(" "),a("p",[s._v("如何装libssh呢?方法如下:")]),s._v(" "),a("h2",{attrs:{id:"方法一、支持apt-get的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一、支持apt-get的话"}},[s._v("#")]),s._v(" 方法一、支持apt-get的话")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" purge hydra\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cmake libssl-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"方法二、编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二、编译安装"}},[s._v("#")]),s._v(" 方法二、编译安装")]),s._v(" "),a("p",[a("strong",[s._v("libssh")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.libssh.org/files/0.4/libssh-0.4.8.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf libssh-0.4.8.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libssh-0.4.8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\ncmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DCMAKE_INSTALL_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DCMAKE_BUILD_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Debug "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DWITH_SSH1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ON "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("hydra")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl-devel pcre-devel ncpfs-devel postgresql-devel libssh-devel subversion-devel libncurses-devel\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.thc.org/releases/hydra-7.4.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf hydra-7.4.2.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hydra\n./configure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("安装过程中如果出现如下错误：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hydra: error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" loading shared libraries: libssh.so.4: cannot "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" shared object file: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装locate命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install mlocate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# updatedb")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("之后查看libssh.so.4的在系统中的位置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@liuyazhuang ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# locate libssh.so.4")]),s._v("\n/usr/lib/libssh.so.4\n/usr/lib/libssh.so.4.1.4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("接着执行如下命令，即可解决问题：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@liuyazhuang lib64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /usr/lib/libssh.so.4.1.4 /usr/lib64/libssh.so.4")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Hydra用法实例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@liuyazhuang ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hydra -L u.lst -P p.lst -t 1 -vV -e ns 123.242.11.186 ssh")]),s._v("\nHydra v7.4.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v(" by van Hauser/THC "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" David Maciejak - "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" legal purposes only\nHydra "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://www.thc.org/thc-hydra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" starting at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),s._v("-06-10 00:05:24\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" task, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" server, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" login tries "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l:1/p:3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", ~3 tries per task\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DATA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" attacking "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" on port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("VERBOSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Resolving addresses "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ATTEMPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.222")]),s._v(".11.186 - login "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lyz"')]),s._v(" - pass "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lyz"')]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("child "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ATTEMPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.222")]),s._v(".11.186 - login "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lyz"')]),s._v(" - pass "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("child "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ATTEMPT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.222")]),s._v(".11.186 - login "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lyz"')]),s._v(" - pass "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wei123hu"')]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("child "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ssh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.222")]),s._v(".11.186   login: lyz   password: wei123hu\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("STATUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" attack finished "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.222")]),s._v(".11.186 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" children to complete tests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" target successfully completed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" valid password found\nHydra "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://www.thc.org/thc-hydra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" finished at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-01-06 00:05:27\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("也可以使用 -o 选项指定结果输出文件。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hydra -L users.txt -P password.txt -t 1 -vV -e ns -o save.log 192.168.1.104 ssh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);