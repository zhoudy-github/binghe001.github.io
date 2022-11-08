(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{523:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sqlmap参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlmap参数说明"}},[s._v("#")]),s._v(" SQLMap参数说明")]),s._v(" "),a("h2",{attrs:{id:"options-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-选项"}},[s._v("#")]),s._v(" Options（选项）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--version 显示程序的版本号并退出  \n-h, --help 显示此帮助消息并退出  \n-v VERBOSE 详细级别：0-6（默认为1）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"target-目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-目标"}},[s._v("#")]),s._v(" Target（目标）")]),s._v(" "),a("p",[s._v("以下至少需要设置其中一个选项，设置目标URL。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-d DIRECT 直接连接到数据库。  \n-u URL, --url=URL 目标URL。  \n-l LIST 从Burp或WebScarab代理的日志中解析目标。  \n-r REQUESTFILE 从一个文件中载入HTTP请求。  \n-g GOOGLEDORK 处理Google dork的结果作为目标URL。  \n-c CONFIGFILE 从INI配置文件中加载选项。  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"request-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-请求"}},[s._v("#")]),s._v(" Request（请求）")]),s._v(" "),a("p",[s._v("这些选项可以用来指定如何连接到目标URL。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--data=DATA 通过POST发送的数据字符串  \n--cookie=COOKIE HTTP Cookie头  \n--cookie-urlencode URL 编码生成的cookie注入  \n--drop-set-cookie 忽略响应的Set - Cookie头信息  \n--user-agent=AGENT 指定 HTTP User - Agent头  \n--random-agent 使用随机选定的HTTP User - Agent头  \n--referer=REFERER 指定 HTTP Referer头  \n--headers=HEADERS 换行分开，加入其他的HTTP头  \n--auth-type=ATYPE HTTP身份验证类型（基本，摘要或NTLM）(Basic, Digest or NTLM)  \n--auth-cred=ACRED HTTP身份验证凭据（用户名:密码）  \n--auth-cert=ACERT HTTP认证证书（key_file，cert_file）  \n--proxy=PROXY 使用HTTP代理连接到目标URL  \n--proxy-cred=PCRED HTTP代理身份验证凭据（用户名：密码）  \n--ignore-proxy 忽略系统默认的HTTP代理  \n--delay=DELAY 在每个HTTP请求之间的延迟时间，单位为秒  \n--timeout=TIMEOUT 等待连接超时的时间（默认为30秒）  \n--retries=RETRIES 连接超时后重新连接的时间（默认3）  \n--scope=SCOPE 从所提供的代理日志中过滤器目标的正则表达式  \n--safe-url=SAFURL 在测试过程中经常访问的url地址  \n--safe-freq=SAFREQ 两次访问之间测试请求，给出安全的URL \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"optimization-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization-优化"}},[s._v("#")]),s._v(" Optimization（优化）")]),s._v(" "),a("p",[s._v("这些选项可用于优化SqlMap的性能。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-o 开启所有优化开关  \n--predict-output 预测常见的查询输出  \n--keep-alive 使用持久的HTTP（S）连接  \n--null-connection 从没有实际的HTTP响应体中检索页面长度  \n--threads=THREADS 最大的HTTP（S）请求并发量（默认为1） \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"injection-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injection-注入"}},[s._v("#")]),s._v(" Injection（注入）")]),s._v(" "),a("p",[s._v("这些选项可以用来指定测试哪些参数， 提供自定义的注入payloads和可选篡改脚本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-p TESTPARAMETER 可测试的参数（S）  \n--dbms=DBMS 强制后端的DBMS为此值  \n--os=OS 强制后端的DBMS操作系统为这个值  \n--prefix=PREFIX 注入payload字符串前缀  \n--suffix=SUFFIX 注入payload字符串后缀  \n--tamper=TAMPER 使用给定的脚本（S）篡改注入数据  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"detection-检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detection-检测"}},[s._v("#")]),s._v(" Detection（检测）")]),s._v(" "),a("p",[s._v("这些选项可以用来指定在SQL盲注时如何解析和比较HTTP响应页面的内容。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--level=LEVEL 执行测试的等级（1-5，默认为1）  \n--risk=RISK 执行测试的风险（0-3，默认为1）  \n--string=STRING 查询时有效时在页面匹配字符串  \n--regexp=REGEXP 查询时有效时在页面匹配正则表达式  \n--text-only 仅基于在文本内容比较网页 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"techniques-技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#techniques-技巧"}},[s._v("#")]),s._v(" Techniques（技巧）")]),s._v(" "),a("p",[s._v("这些选项可用于调整具体的SQL注入测试。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--technique=TECH SQL注入技术测试（默认BEUST）  \n--time-sec=TIMESEC DBMS响应的延迟时间（默认为5秒）  \n--union-cols=UCOLS 定列范围用于测试UNION查询注入  \n--union-char=UCHAR 用于暴力猜解列数的字符  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"fingerprint-指纹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fingerprint-指纹"}},[s._v("#")]),s._v(" Fingerprint（指纹）")]),s._v(" "),a("p",[s._v("-f, --fingerprint 执行检查广泛的DBMS版本指纹")]),s._v(" "),a("h2",{attrs:{id:"enumeration-枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumeration-枚举"}},[s._v("#")]),s._v(" Enumeration（枚举）")]),s._v(" "),a("p",[s._v("这些选项可以用来列举后端数据库管理系统的信息、表中的结构和数据。此外，您还可以运行自己的SQL语句。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-b, --banner 检索数据库管理系统的标识  \n--current-user 检索数据库管理系统当前用户  \n--current-db 检索数据库管理系统当前数据库  \n--is-dba 检测DBMS当前用户是否DBA  \n--users 枚举数据库管理系统用户  \n--passwords 枚举数据库管理系统用户密码哈希  \n--privileges 枚举数据库管理系统用户的权限  \n--roles 枚举数据库管理系统用户的角色  \n--dbs 枚举数据库管理系统数据库  \n--tables 枚举的DBMS数据库中的表  \n--columns 枚举DBMS数据库表列  \n--dump 转储数据库管理系统的数据库中的表项  \n--dump-all 转储所有的DBMS数据库表中的条目  \n--search 搜索列（S），表（S）和/或数据库名称（S）  \n-D DB 要进行枚举的数据库名  \n-T TBL 要进行枚举的数据库表  \n-C COL 要进行枚举的数据库列  \n-U USER 用来进行枚举的数据库用户  \n--exclude-sysdbs 枚举表时排除系统数据库  \n--start=LIMITSTART 第一个查询输出进入检索  \n--stop=LIMITSTOP 最后查询的输出进入检索  \n--first=FIRSTCHAR 第一个查询输出字的字符检索  \n--last=LASTCHAR 最后查询的输出字字符检索  \n--sql-query=QUERY 要执行的SQL语句  \n--sql-shell 提示交互式SQL的shell  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"brute-force-蛮力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brute-force-蛮力"}},[s._v("#")]),s._v(" Brute force（蛮力）")]),s._v(" "),a("p",[s._v("这些选项可以被用来运行蛮力检查。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--common-tables 检查存在共同表  \n--common-columns 检查存在共同列  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("User-defined function injection（用户自定义函数注入）")]),s._v(" "),a("p",[s._v("这些选项可以用来创建用户自定义函数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--udf-inject 注入用户自定义函数  \n--shared-lib=SHLIB 共享库的本地路径 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"file-system-access-访问文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-system-access-访问文件系统"}},[s._v("#")]),s._v(" File system access（访问文件系统）")]),s._v(" "),a("p",[s._v("这些选项可以被用来访问后端数据库管理系统的底层文件系统。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--file-read=RFILE 从后端的数据库管理系统文件系统读取文件  \n--file-write=WFILE 编辑后端的数据库管理系统文件系统上的本地文件  \n--file-dest=DFILE 后端的数据库管理系统写入文件的绝对路径  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"operating-system-access-操作系统访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operating-system-access-操作系统访问"}},[s._v("#")]),s._v(" Operating system access（操作系统访问）")]),s._v(" "),a("p",[s._v("这些选项可以用于访问后端数据库管理系统的底层操作系统。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--os-cmd=OSCMD 执行操作系统命令  \n--os-shell 交互式的操作系统的shell  \n--os-pwn 获取一个OOB shell，meterpreter或VNC  \n--os-smbrelay 一键获取一个OOB shell，meterpreter或VNC  \n--os-bof 存储过程缓冲区溢出利用  \n--priv-esc 数据库进程用户权限提升  \n--msf-path=MSFPATH Metasploit Framework本地的安装路径  \n--tmp-path=TMPPATH 远程临时文件目录的绝对路径  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"windows注册表访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows注册表访问"}},[s._v("#")]),s._v(" Windows注册表访问")]),s._v(" "),a("p",[s._v("这些选项可以被用来访问后端数据库管理系统Windows注册表。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--reg-read 读一个Windows注册表项值  \n--reg-add 写一个Windows注册表项值数据  \n--reg-del 删除Windows注册表键值  \n--reg-key=REGKEY Windows注册表键  \n--reg-value=REGVAL Windows注册表项值  \n--reg-data=REGDATA Windows注册表键值数据  \n--reg-type=REGTYPE Windows注册表项值类型  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"general-一般"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-一般"}},[s._v("#")]),s._v(" General（一般）")]),s._v(" "),a("p",[s._v("这些选项可以用来设置一些一般的工作参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-t TRAFFICFILE 记录所有HTTP流量到一个文本文件中  \n-s SESSIONFILE 保存和恢复检索会话文件的所有数据  \n--flush-session 刷新当前目标的会话文件  \n--fresh-queries 忽略在会话文件中存储的查询结果  \n--eta 显示每个输出的预计到达时间  \n--update 更新SqlMap  \n--save file保存选项到INI配置文件  \n--batch 从不询问用户输入，使用所有默认配置。 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"miscellaneous-杂项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-杂项"}},[s._v("#")]),s._v(" Miscellaneous（杂项）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--beep 发现SQL注入时提醒  \n--check-payload IDS对注入payloads的检测测试  \n--cleanup SqlMap具体的UDF和表清理DBMS  \n--forms 对目标URL的解析和测试形式  \n--gpage=GOOGLEPAGE 从指定的页码使用谷歌dork结果  \n--page-rank Google dork结果显示网页排名（PR）  \n--parse-errors 从响应页面解析数据库管理系统的错误消息  \n--replicate 复制转储的数据到一个sqlite3数据库  \n--tor 使用默认的Tor（Vidalia/ Privoxy/ Polipo）代理地址  \n--wizard 给初级用户的简单向导界面  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);