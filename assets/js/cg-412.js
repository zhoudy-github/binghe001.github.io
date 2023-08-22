(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{710:function(e,n,a){"use strict";a.r(n);var s=a(7),t=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openvas-8-0-vulnerability-scanning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openvas-8-0-vulnerability-scanning"}},[e._v("#")]),e._v(" OpenVAS 8.0 Vulnerability Scanning")]),e._v(" "),n("p",[n("strong",[e._v("Vulnerability scanning")]),e._v(" is a crucial phase of a penetration test and having an updated vulnerability scanner in your security toolkit can often make a real difference by helping you discover overlooked vulnerable items. For this reason, we’ve manually packaged the latest and newly released "),n("a",{attrs:{href:"http://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVAS"),n("OutboundLink")],1),e._v(" 8.0 tool and libraries for Kali Linux. Although nothing major has changed in this release in terms of running the vulnerability scanner, we wanted to give a quick overview on how to get it up and running.")]),e._v(" "),n("h2",{attrs:{id:"setting-up-kali-for-vulnerability-scanning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-kali-for-vulnerability-scanning"}},[e._v("#")]),e._v(" Setting up Kali for Vulnerability Scanning")]),e._v(" "),n("p",[e._v("If you haven’t already, make sure your Kali is up-to-date and install the latest OpenVAS. Once done, run the "),n("strong",[e._v("openvas-setup")]),e._v(" command to setup OpenVAS, download the latest rules, create an admin user, and start up the various services. Depending on your bandwidth and computer resources, this could take a while.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@kali:~# apt-get update\nroot@kali:~# apt-get dist-upgrade\n\nroot@kali:~# apt-get install openvas\nroot@kali:~# openvas-setup\n/var/lib/openvas/private/CA created\n/var/lib/openvas/CA created\n\n[i] This script synchronizes an NVT collection with the 'OpenVAS NVT Feed'.\n[i] Online information about this feed: 'http://www.openvas.org/openvas-nvt-feed\n...\nsent 1143 bytes received 681741238 bytes 1736923.26 bytes/sec\ntotal size is 681654050 speedup is 1.00\n[i] Initializing scap database\n[i] Updating CPEs\n[i] Updating /var/lib/openvas/scap-data/nvdcve-2.0-2002.xml\n[i] Updating /var/lib/openvas/scap-data/nvdcve-2.0-2003.xml\n...\nWrite out database with 1 new entries\nData Base Updated\nRestarting Greenbone Security Assistant: gsad.\nUser created with password '6062d074-0a4c-4de1-a26a-5f9f055b7c88'.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br")])]),n("p",[e._v("Once "),n("strong",[e._v("openvas-setup")]),e._v(" completes its process, the OpenVAS manager, scanner, and GSAD services should be listening:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@kali:~# netstat -antp\nActive Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address Foreign Address State PID/Program name\ntcp 0 0 127.0.0.1:9390 0.0.0.0:* LISTEN 9583/openvasmd\ntcp 0 0 127.0.0.1:9391 0.0.0.0:* LISTEN 9570/openvassd: Wai\ntcp 0 0 127.0.0.1:9392 0.0.0.0:* LISTEN 9596/gsad\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("h2",{attrs:{id:"starting-the-openvas-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-openvas-services"}},[e._v("#")]),e._v(" Starting the OpenVAS services")]),e._v(" "),n("p",[e._v("If you have already configured OpenVAS, you can simply start all the necessary services by running "),n("strong",[e._v("openvas-start")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@kali:~# openvas-start\nStarting OpenVas Services\nStarting Greenbone Security Assistant: gsad.\nStarting OpenVAS Scanner: openvassd.\nStarting OpenVAS Manager: openvasmd.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("If you need to troubleshoot any issues, you can use "),n("strong",[e._v("openvas-check-setup")]),e._v(" to identity the problem.")]),e._v(" "),n("h2",{attrs:{id:"connecting-to-the-openvas-web-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-openvas-web-interface"}},[e._v("#")]),e._v(" Connecting to the OpenVAS Web Interface")]),e._v(" "),n("p",[e._v("Point your browser to "),n("strong",[e._v("https://127.0.0.1:9392")]),e._v(", accept the self signed SSL certificate and plugin the credentials for the "),n("strong",[e._v("admin")]),e._v(" user. The admin password was generated during the setup phase (look at the output above if you missed it).")]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019012013305928.png",loading:"lazy"}})]),e._v(" "),n("p",[e._v("openvas vulnerability scanner")]),e._v(" "),n("p",[e._v("That’s it! Now OpenVAS is ready for you to configure it and run a scan against a given IP or range. Happy vulnerability scanning!")]),e._v(" "),n("p",[e._v("转自：https://www.kali.org/penetration-testing/openvas-vulnerability-scanning/")]),e._v(" "),n("p",[n("strong",[e._v("注意：")])]),e._v(" "),n("p",[e._v("如果不小心忘记了OpenVAS的Web登录密码或者没有找到OpenVAS安装过程中输出的默认密码，则通过如下的命令修改OpenVAS的Web登录密码：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("openvasmd --create-user --help\nopenvasmd --user admin --new-password '新密码'\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("这样我们就可以将OpenVAS的Web密码修改为新密码，从而登录OpenVAS的Web端。")]),e._v(" "),n("h1",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),n("blockquote",[n("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);