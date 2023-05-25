(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{554:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"各种解析漏洞拿shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各种解析漏洞拿shell"}},[a._v("#")]),a._v(" 各种解析漏洞拿shell")]),a._v(" "),s("h2",{attrs:{id:"iis-6-0解析漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iis-6-0解析漏洞"}},[a._v("#")]),a._v(" IIS 6.0解析漏洞")]),a._v(" "),s("p",[a._v("IIS 6.0解析利用方法有两种")]),a._v(" "),s("h2",{attrs:{id:"目录解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录解析"}},[a._v("#")]),a._v(" 目录解析")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" /xx.asp/xx.jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"文件解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件解析"}},[a._v("#")]),a._v(" 文件解析")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" wooyun.asp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(".jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("第一种，在网站下建立文件夹的名字为 .asp、.asa 的文件夹，其目录内的任何扩展名的文件都被IIS当作asp文件来解析并执行。")]),a._v(" "),s("p",[a._v("例如创建目录 wooyun.asp，那么")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/wooyun.asp/1.jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("将被当作asp文件来执行。假设黑阔可以控制上传文件夹路径,就可以不管你上传后你的图片改不改名都能拿shell了。")]),a._v(" "),s("p",[a._v("第二种，在IIS6.0下，分号后面的不被解析，也就是说")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("wooyun.asp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(".jpg\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("会被服务器看成是wooyun.asp")]),a._v(" "),s("p",[a._v("还有IIS6.0 默认的可执行文件除了asp还包含这三种")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" /wooyun.asa\n /wooyun.cer\n /wooyun.cdx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("乌云上的IIS 6.0解析漏洞利用案例")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://jump.bdimg.com/safecheck/index?url=x+Z5mMbGPAu1LJqUU6N6bPwYE5jYY0erwhch2HTMVMClV4srKPs80oVo9b2RHyJaNX2c8GT2w8o9uaWWhw0XNAjvrJznv9sKyV+a9HOSQ5uf9gu4VD5hJMGsrMXUaIpg1vI4wK0nw69B6Rwt01WTC3Y9qHh6BM0y",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.wooyun.org/searchbug.php?q=IIS6.0"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"iis-7-0-nginx-8-03畸形解析漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iis-7-0-nginx-8-03畸形解析漏洞"}},[a._v("#")]),a._v(" IIS 7.0/ Nginx <8.03畸形解析漏洞")]),a._v(" "),s("p",[a._v("Nginx解析漏洞这个伟大的漏洞是我国安全组织80sec发现的…")]),a._v(" "),s("p",[a._v("在默认Fast-CGI开启状况下,黑阔上传一个名字为wooyun.jpg，内容为")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("?PHP fputs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fopen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'shell.php'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<?php eval($_POST[cmd])?>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("?"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("的文件，然后访问wooyun.jpg/x.php,在这个目录下就会生成一句话木马 shell.php")]),a._v(" "),s("p",[a._v("这个漏洞案例")]),a._v(" "),s("ul",[s("li",[a._v("WooYun: 用友软件某分站SQL注入漏洞+nginx解析漏洞")]),a._v(" "),s("li",[a._v("WooYun: 新浪网分站多处安全漏洞（nginx解析+SQL注射等）小礼包")]),a._v(" "),s("li",[a._v("WooYun: kingsoft.com某x级域名nginx解析漏洞+爆路径")])]),a._v(" "),s("h2",{attrs:{id:"nginx-8-03-空字节代码执行漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-8-03-空字节代码执行漏洞"}},[a._v("#")]),a._v(" Nginx <8.03 空字节代码执行漏洞")]),a._v(" "),s("p",[a._v("影响版本0.5.,0.6, 0.7 <= 0.7.65, 0.8 <= 0.8.37 Nginx在图片中嵌入PHP代码然后通过访问 xxx.jpg%00.php 来执行其中的代码 Nginx 空字节代执行漏洞案例"),s("a",{attrs:{href:"http://jump.bdimg.com/safecheck/index?url=x+Z5mMbGPAu1LJqUU6N6bPwYE5jYY0erwhch2HTMVMClV4srKPs80oVo9b2RHyJak+PNtwAIfGCgHZ+Fsy3GyIQ8yExvH7HOsIk1gGycfXV71W/t7TguM+xzIgsPTqM7t9C+S0h3NSVBLMQEJGI5JcqrwRgpxE70MDxm7iZ2BjQ=",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.wooyun.org/searchbug.php?q=%2500.php"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"apache解析漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache解析漏洞"}},[a._v("#")]),a._v(" Apache解析漏洞")]),a._v(" "),s("p",[a._v("Apache 是从右到左开始判断解析,如果为不可识别解析,就再往左判断.")]),a._v(" "),s("p",[a._v('比如 wooyun.php.owf.rar ".owf"和".rar" 这两种后缀是apache不可识别解析,apache就会把wooyun.php.owf.rar解析成php.')]),a._v(" "),s("p",[a._v("如何判断是不是合法的后缀就是这个漏洞的利用关键,测试时可以尝试上传一个wooyun.php.rara.jpg.png…（把你知道的常见后缀都写上…）去测试是否是合法后缀")]),a._v(" "),s("h2",{attrs:{id:"apache解析漏洞案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache解析漏洞案例"}},[a._v("#")]),a._v(" Apache解析漏洞案例")]),a._v(" "),s("p",[a._v("[空格] 或xx.jpg. 这两类文件都是不允许存在的，若这样命名，windows会默认除去空格或点,黑客可以通过抓包，在文件名后加一个空格或者点绕过黑名单.若上传成功，空格和点都会被windows自动消除,这样也可以getshell。")]),a._v(" "),s("p",[a._v("如果在Apache中.htaccess可被执行.且可被上传.那可以尝试在.htaccess中写入:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("SetHandler application/x-httpd-php\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后再上传shell.jpg的木马, 这样shell.jpg就可解析为php文件。")]),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);