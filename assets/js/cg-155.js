(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{451:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"《nginx核心技术》第07章-配置nginx日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《nginx核心技术》第07章-配置nginx日志"}},[s._v("#")]),s._v(" 《Nginx核心技术》第07章：配置Nginx日志")]),s._v(" "),a("p",[s._v("作者：冰河\n"),a("br"),s._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),s._v(" "),a("br"),s._v("星球项目地址："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/zsxq/introduce.html"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),a("ul",[a("li",[s._v("本章难度：★★☆☆☆")]),s._v(" "),a("li",[s._v("本章重点：用最简短的篇幅介绍Nginx最核心的知识，掌握如何配置Nginx日志，并能够灵活运用到实际项目中，维护高可用系统。")])]),s._v(" "),a("p",[a("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),a("p",[s._v("今天给大家介绍《Nginx核心技术》的第07章：配置Nginx日志，多一句没有，少一句不行，用最简短的篇幅讲述Nginx最核心的知识，好了，开始今天的内容。")]),s._v(" "),a("h2",{attrs:{id:"_7-1-本章概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-本章概述"}},[s._v("#")]),s._v(" 7.1 本章概述")]),s._v(" "),a("p",[s._v("日志对于统计排错来说非常有利的。本文总结了 Nginx 日志相关的配置如 access_log、  log_format、open_log_file_cache、 log_not_found、 log_subrequest、  rewrite_log、 error_log。")]),s._v(" "),a("h2",{attrs:{id:"_7-2-配置nginx日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-配置nginx日志"}},[s._v("#")]),s._v(" 7.2 配置Nginx日志")]),s._v(" "),a("p",[s._v("Nginx 有一个非常灵活的日志记录模式。每个级别的配置可以有各自独立的访问日志。日志格式通过 log_format命令来定义。 ngx_http_log_module 是用来定义请求日志格式的。")]),s._v(" "),a("h2",{attrs:{id:"_7-3-access-log-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-access-log-指令"}},[s._v("#")]),s._v(" 7.3 access_log 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("format "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("buffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flush"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log path "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" gzip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("buffer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flush"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log syslog:server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(",parameter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\naccess_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log logs/access.log combined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http, server, location, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" location, limit_except\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("gzip 压缩等级。")]),s._v(" "),a("li",[s._v("buffer 设置内存缓存区大小。")]),s._v(" "),a("li",[s._v("flush 保存在缓存区中的最长时间")])]),s._v(" "),a("p",[a("strong",[s._v("不记录日志：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("使用默认 combined 格式记录日志：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log logs/access.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("access_log logs/access.log combined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-4-log-format-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-log-format-指令"}},[s._v("#")]),s._v(" 7.4 log_format 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_format name string …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_format combined “…” "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("name 表示格式名称")]),s._v(" "),a("li",[s._v("string 表示等义的格式。")])]),s._v(" "),a("p",[s._v("log_format 有一个默认的无需设置的 combined 日志格式，相当于apache 的 combined 日志格式，如下所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_format combined "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' \"$request\" $status $body_bytes_sent '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\' "$http_referer" "$http_user_agent" \'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果 nginx 位于负载均衡器， squid， nginx 反向代理之后， web 服务器无法直接获取到客户端真实的 IP 地址了。\n$remote_addr 获取反向代理的 IP 地址。反向代理服务器在转发请求的 http 头信息中，可以增加 X-ForwardedFor 信息，用来记录 客户端 IP 地址和客户端请求的服务器地址。 如下所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_format porxy "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$http_x_forwarded_for - $remote_user [$time_local] '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' \"$request\" $status $body_bytes_sent '")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\' "$http_referer" "$http_user_agent" \'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("日志格式允许包含的变量注释如下：")]),s._v(" "),a("ul",[a("li",[s._v("$remote_addr, $http_x_forwarded_for 记录客户端 IP 地址")]),s._v(" "),a("li",[s._v("$remote_user 记录客户端用户名称")]),s._v(" "),a("li",[s._v("$request 记录请求的 URL 和 HTTP 协议")]),s._v(" "),a("li",[s._v("$status 记录请求状态")]),s._v(" "),a("li",[s._v("$body_bytes_sent 发送给客户端的字节数，不包括响应头的大小； 该变量与 Apache 模块 mod_log_config 里的“%B”参数兼容。")]),s._v(" "),a("li",[s._v("$bytes_sent 发送给客户端的总字节数。")]),s._v(" "),a("li",[s._v("$connection 连接的序列号。")]),s._v(" "),a("li",[s._v("$connection_requests 当前通过一个连接获得的请求数量。")]),s._v(" "),a("li",[s._v("$msec 日志写入时间。单位为秒，精度是毫秒。")]),s._v(" "),a("li",[s._v("$pipe 如果请求是通过 HTTP 流水线(pipelined)发送， pipe 值为“p”，否则为“.”。")]),s._v(" "),a("li",[s._v("$http_referer 记录从哪个页面链接访问过来的")]),s._v(" "),a("li",[s._v("$http_user_agent 记录客户端浏览器相关信息")]),s._v(" "),a("li",[s._v("$request_length 请求的长度（包括请求行，请求头和请求正文）。")]),s._v(" "),a("li",[s._v("$request_time 请求处理时间，单位为秒，精度毫秒； 从读入客户端的第一个字节开始，直到把最后一个字符发送给客户端后进行日志写入为止。")]),s._v(" "),a("li",[s._v("$time_iso8601 ISO8601 标准格式下的本地时间。")]),s._v(" "),a("li",[s._v("$time_local 通用日志格式下的本地时间。")])]),s._v(" "),a("p",[a("strong",[s._v("注意：发送给客户端的响应头拥有“sent_http_”前缀。 比如$sent_http_content_range。")])]),s._v(" "),a("p",[a("strong",[s._v("实例如下：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tlog_format main "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$status" $body_bytes_sent "$http_referer" \'')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for" \'')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"$gzip_ratio\" $request_time $bytes_sent $request_length'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tlog_format srcache_log "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"$status\" $body_bytes_sent $request_time $bytes_sent\n\t$request_length '")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[$upstream_response_time] [$srcache_fetch_status]\n\t[$srcache_store_status] [$srcache_expire]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\topen_log_file_cache "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("inactive")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("60s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tserver_name ~^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\taccess_log logs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("-access.log main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\terror_log logs/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("-error.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tlocation /srcache "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\taccess_log logs/access-srcache.log srcache_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"_7-5-open-log-file-cache-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-open-log-file-cache-指令"}},[s._v("#")]),s._v(" 7.5 open_log_file_cache 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("open_log_file_cache "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("inactive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("min_uses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("valid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nopen_log_file_cache off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("open_log_file_cache off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http, server, location\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于每一条日志记录，都将是先打开文件，再写入日志，然后关闭。可以使用 open_log_file_cache 来设置日志文件缓存(默认是 off)。")]),s._v(" "),a("p",[a("strong",[s._v("参数注释如下：")])]),s._v(" "),a("ul",[a("li",[s._v("max:设置缓存中的最大文件描述符数量，如果缓存被占满，采用 LRU 算法将描述符关闭。")]),s._v(" "),a("li",[s._v("inactive:设置存活时间，默认是 10s")]),s._v(" "),a("li",[s._v("min_uses:设置在 inactive 时间段内，日志文件最少使用多少次后，该日志文件描述符记入缓存中，默认是 1 次")]),s._v(" "),a("li",[s._v("valid:设置检查频率，默认 60s")]),s._v(" "),a("li",[s._v("off：禁用缓存")])]),s._v(" "),a("p",[a("strong",[s._v("实例如下：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("open_log_file_cache "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("inactive")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("valid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1m "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("min_uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7-6-log-not-found-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-log-not-found-指令"}},[s._v("#")]),s._v(" 7.6 log_not_found 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_not_found on "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_not_found on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http, server, location\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("是否在 error_log 中记录不存在的错误。默认是。")]),s._v(" "),a("h2",{attrs:{id:"_7-7-log-subrequest-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-7-log-subrequest-指令"}},[s._v("#")]),s._v(" 7.7 log_subrequest 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_subrequest on "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("log_subrequest off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http, server, location\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("是否在 access_log 中记录子请求的访问日志。默认不记录。")]),s._v(" "),a("h2",{attrs:{id:"_7-8-rewrite-log-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-rewrite-log-指令"}},[s._v("#")]),s._v(" 7.8 rewrite_log 指令")]),s._v(" "),a("p",[s._v("由 ngx_http_rewrite_module 模块提供的。用来记录重写日志的。对于调试重写规则建议开启。 Nginx 重写规则指南")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rewrite_log on "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rewrite_log off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http, server, location, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启用时将在 error log 中记录 notice 级别的重写日志。")]),s._v(" "),a("h2",{attrs:{id:"_7-9-error-log-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-9-error-log-指令"}},[s._v("#")]),s._v(" 7.9 error_log 指令")]),s._v(" "),a("p",[a("strong",[s._v("语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("error_log "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" syslog:server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(",parameter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("debug "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" notice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\nwarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" crit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" alert "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" emerg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("默认值:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("error_log logs/error.log error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("配置段:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("main, http, server, location\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置错误日志。")]),s._v(" "),a("p",[a("strong",[s._v("好了，相信各位小伙伴们对如何配置Nginx日志，有了进一步的了解，我是冰河，我们下期见~~")])]),s._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[s._v("#")]),s._v(" 星球服务")]),s._v(" "),a("p",[s._v("加入星球，你将获得：")]),s._v(" "),a("p",[s._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),s._v(" "),a("p",[s._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),s._v(" "),a("p",[s._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),s._v(" "),a("p",[s._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),s._v(" "),a("p",[s._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),s._v(" "),a("p",[s._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),s._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[s._v("#")]),s._v(" 星球重磅福利")]),s._v(" "),a("p",[s._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[s._v("直接立减149元，相当于5折，")]),s._v(" 这已经是星球最大优惠力度！")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),s._v(" "),a("br")]),s._v(" "),a("p",[s._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),s._v(" "),a("p",[a("strong",[s._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),s._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[s._v("#")]),s._v(" 其他方式加入星球")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("链接")]),s._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),s._v(" 加入星球。")]),s._v(" "),a("li",[a("strong",[s._v("回复")]),s._v(" ：在公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 领取优惠券加入星球。")])]),s._v(" "),a("p",[a("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[s._v("hacker_binghe")]),s._v(" 扫二维码，或者去公众号 "),a("strong",[s._v("冰河技术")]),s._v(" 回复 "),a("strong",[s._v("星球")]),s._v(" 扫二维码加入星球。")]),s._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[s._v("#")]),s._v(" 星球规划")]),s._v(" "),a("p",[s._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),s._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[s._v("#")]),s._v(" 中间件项目")]),s._v(" "),a("ul",[a("li",[s._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写Redis》：全程手撸代码。")]),s._v(" "),a("li",[s._v("《手写JVM》全程手撸代码。")])]),s._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[s._v("#")]),s._v(" 超硬核项目")]),s._v(" "),a("ul",[a("li",[s._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[s._v("已上新")]),s._v("）。")]),s._v(" "),a("li",[s._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),s._v(" "),a("li",[s._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),s._v(" "),a("p",[s._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),s._v(" "),a("p",[s._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),s._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[s._v("#")]),s._v(" 联系冰河")]),s._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[s._v("#")]),s._v(" 加群交流")]),s._v(" "),a("p",[s._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[s._v("星球编号")]),s._v("。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("冰河微信")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),a("p",[s._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[s._v("冰河技术")]),s._v(" 微信公众号首发，强烈建议大家关注。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("公众号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[s._v("#")]),s._v(" 视频号")]),s._v(" "),a("p",[s._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("视频号：冰河技术")]),s._v(" "),a("br")]),s._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[s._v("#")]),s._v(" 星球")]),s._v(" "),a("p",[s._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1)]),s._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[s._v("hacker_binghe")]),s._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[s._v("实战项目")]),s._v("！")]),s._v(" "),a("p",[s._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),a("OutboundLink")],1),s._v("公众号，回复 "),a("code",[s._v("星球")]),s._v(" 可以获取入场优惠券。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),s._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[s._v("知识星球：冰河技术")]),s._v(" "),a("br")])])}),[],!1,null,null,null);a.default=r.exports}}]);