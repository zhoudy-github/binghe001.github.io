(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{465:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kali配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kali配置"}},[s._v("#")]),s._v(" Kali配置")]),s._v(" "),a("h2",{attrs:{id:"kali更新软件源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kali更新软件源"}},[s._v("#")]),s._v(" kali更新软件源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/apt/sources.list\n \ndeb http://mirrors.ustc.edu.cn/kali kali main non-free contrib\ndeb-src http://mirrors.ustc.edu.cn/kali kali main non-free contrib\ndeb http://mirrors.ustc.edu.cn/kali-security kali/updates main contrib non-free\n \ndeb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib\ndeb http://mirrors.aliyun.com/kali sana main non-free contrib\ndeb http://mirrors.aliyun.com/kali-security/ sana/updates main contrib non-free\ndeb-src http://mirrors.aliyun.com/kali-security/ sana/updates main contrib non-free\n \ndeb http://ppa.launchpad.net/yubico/stable/ubuntu cosmic main\ndeb-src http://ppa.launchpad.net/yubico/stable/ubuntu cosmic main\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update           //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("更新目录"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade         //（更新文件）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" dist-upgrade         //（更新依赖关系）\nclean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" virtualbox-guest-x11            // （在线安装增强功能）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("     //（重启）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"安装vmtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装vmtools"}},[s._v("#")]),s._v(" 安装vmtools")]),s._v(" "),a("p",[s._v("kali2.0后安装VMWare自带的vmtools是不起作用的，得安装open-vm-tools-desktop，这也是我们为什么第一步不先安装vmtools先配软件源的原因。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" open-vm-tools-desktop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("说明：有时候安装后还是不能复制，这种情况多reboot几次，不行就apt-get remove卸载再重装几次应该就可以了。")]),s._v(" "),a("h2",{attrs:{id:"安装输入法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装输入法"}},[s._v("#")]),s._v(" 安装输入法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("  fcitx fcitx-table-wbpy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一般wbpy中包含了拼音和五笔<br>apt-get install -y fcitx-table-wubi         #如果wbpy中没有五笔则再安装这个包")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"039","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-039.png",loading:"lazy"}})]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"040","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-040.png",loading:"lazy"}})]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"041","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-041.png",loading:"lazy"}})]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"042","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-042.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("将英文输入法删掉或下移为次选输入法，注消用户重新登录或重启系统即可完成安装。")]),s._v(" "),a("h2",{attrs:{id:"安装共享文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装共享文件夹"}},[s._v("#")]),s._v(" 安装共享文件夹")]),s._v(" "),a("p",[s._v("“VMware--虚拟机--设置--选项--共享文件夹”中添加要共享的文件夹，我这里选择桌面，并命名为Desktop。")]),s._v(" "),a("p",[s._v("选择总是启用。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"043","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-043.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("登录虚拟机，进入/mnt/hgfs目录，有时候文件夹已挂载好在此目录下。")]),s._v(" "),a("p",[s._v("如果目录为空，在终端中执行：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("vmware-hgfsclient\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"044","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-044.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("Desktop正是我们设置的共享文件夹，执行挂载：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/Desktop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" desktop\nvmhgfs-fuse .host:/Desktop /root/Desktop/desktop "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subtype")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("vmhgfs-fuse,allow_other\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这只是临时挂载重启后又得再次执行；要开机挂载，我们要将挂载语句加入到开机执行脚本/etc/rc.local中：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"045","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-045.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("如果一直挂载不成功可能是语句书写错误，使用systemctl status rc-local.service查看。")]),s._v(" "),a("h2",{attrs:{id:"配置ssh开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh开机自启动"}},[s._v("#")]),s._v(" 配置ssh开机自启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"046","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-046.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"允许root-ssh登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#允许root-ssh登录"}},[s._v("#")]),s._v(" 允许root ssh登录")]),s._v(" "),a("p",[s._v("编缉/etc/ssh/sshd_config，添加PermitRootLogin yes，如果还有其他PermitRootLogin将其注释")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"047","data-src":"https://binghe.gitcode.host/assets/images/hack/2022-04-17-047.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("保存然后重启ssh")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" restart \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"配置静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置静态ip"}},[s._v("#")]),s._v(" 配置静态IP")]),s._v(" "),a("p",[s._v("以网卡名为eth0为例（不是eth0将以下eth0替换即可）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/network/interfaces.d/ifcfg-eth0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nauto eth0\niface eth0 inet static\naddress 192.168.220.129\ngateway 192.168.220.1\nnetmask 255.255.255.0\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);