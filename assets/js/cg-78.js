(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{365:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《mysql核心知识》第3章-mysql中的运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第3章-mysql中的运算符"}},[s._v("#")]),s._v(" 《MySQL核心知识》第3章：MySQL中的运算符")]),s._v(" "),t("blockquote",[t("p",[s._v("《RPC手撸专栏》已经在 "),t("strong",[s._v("冰河技术")]),s._v(" 知识星球开始更新了，冰河要带你从零开始手撸一个可在实际环境使用的高性能、可扩展的RPC框架，想要一起手撸RPC的小伙伴文末有加入星球的方式。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("今天是《"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2479089143118053377&scene=173&from_msgid=2247503275&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL核心知识"),t("OutboundLink")],1),s._v("》专栏的第3章，今天跟大家一起聊聊MySQL中的运算符。好了，开始今天的正题。")]),s._v(" "),t("h2",{attrs:{id:"安全等于运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全等于运算符"}},[s._v("#")]),s._v(" 安全等于运算符（<=>）")]),s._v(" "),t("p",[s._v("这个操作符和=操作符执行相同的比较操作，不过<=>可以用来判断NULL值。")]),s._v(" "),t("p",[s._v("在两个操作数均为NULL时，其返回值为1而不为NULL；")]),s._v(" "),t("p",[s._v("而当一个操作数为NULL时，其返回值为0而不为NULL。")]),s._v(" "),t("p",[s._v("下面分别是 SELECT  NULL <=>"),t("strong",[s._v("1")]),s._v(" SELECT "),t("strong",[s._v("1")]),s._v("<=>"),t("strong",[s._v("0")]),s._v(" SELECTNULL <=>NULL 的执行结果")]),s._v(" "),t("p",[s._v("在两个操作数均为NULL时，其返回值为1而不为NULL；")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131030731",loading:"lazy"}})]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131100566",loading:"lazy"}})]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131132011",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"least运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least运算符"}},[s._v("#")]),s._v(" LEAST运算符")]),s._v(" "),t("p",[s._v("语法格式为：LEAST（值1,值2,...值n），其中值n表示参数列表中有n个值。在有两个或多个参数的情况下，返回最小值。")]),s._v(" "),t("p",[s._v("假如任意一个自变量为NULL，则LEAST()的返回值为NULL")]),s._v(" "),t("p",[s._v("使用LEAST运算符进行大小判断，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LEAST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LEAST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LEAST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131225023",loading:"lazy"}})]),s._v(" "),t("p",[s._v("由结果可以看到，当参数中是整数或者浮点数时，LEAST将返回其中最小的值；")]),s._v(" "),t("p",[s._v("当参数为字符串时，返回字母中顺序最靠前的字符；")]),s._v(" "),t("p",[s._v("当比较值列表中有NULL时，不能判断大小，返回值为NULL")]),s._v(" "),t("h2",{attrs:{id:"greatest运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greatest运算符"}},[s._v("#")]),s._v(" GREATEST运算符")]),s._v(" "),t("p",[s._v("语法格式为： GREATEST(值1，值2，...值n)，其中n表示参数列表中有n个值。")]),s._v(" "),t("p",[s._v("在有两个或多个参数的情况下，返回最大值。")]),s._v(" "),t("p",[s._v("假如任意一个自变量为NULL，则GREATEST()的返回值为NULL")]),s._v(" "),t("p",[s._v("使用GREATEST运算符进行大小判断，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" GREATEST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("GREATEST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("GREATEST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131349461",loading:"lazy"}})]),s._v(" "),t("p",[s._v("由结果可以看到，当参数中是整数或者浮点数时，GREATEST将返回其中最大的值；")]),s._v(" "),t("p",[s._v("当参数为字符串时，返回字母中顺序最靠后的字符；")]),s._v(" "),t("p",[s._v("当比较值列表中有NULL时，不能判断大小，返回值为NULL")]),s._v(" "),t("h2",{attrs:{id:"regexp-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-运算符"}},[s._v("#")]),s._v(" REGEXP 运算符")]),s._v(" "),t("p",[s._v("在SQLSERVER里是没有正则函数或者运算符的，MYSQL在这方面的确比较完善")]),s._v(" "),t("p",[s._v("用来匹配字符串，语法格式为：expr REGEXP  匹配条件，如果expr满足匹配条件，返回1；")]),s._v(" "),t("p",[s._v("如果不满足，则返回0；")]),s._v(" "),t("p",[s._v("若expr或匹配条件任意一个为NULL，则结果为NULL")]),s._v(" "),t("p",[s._v("常用的几种通配符：")]),s._v(" "),t("p",[s._v("（1）'^'匹配以该字符后面的字符开头的字符串")]),s._v(" "),t("p",[s._v("（2）'$'匹配以该字符后面的字符结尾的字符串")]),s._v(" "),t("p",[s._v("（3）'.'匹配任何一个单字符")]),s._v(" "),t("p",[s._v("（4）'[...]'匹配在方括号内的任何字符。例如，“[abc]\" 匹配a、b或c。")]),s._v(" "),t("p",[s._v("字符的范围可以使用一个'-'，“[a-z]”匹配任何字母，而“[0-9]”匹配任何数字")]),s._v(" "),t("p",[s._v("（5）"),t("code",[s._v("'*' 匹配零个或多个在他前面的字符。例如，“x*”匹配任何数量的'*'字符，“[0-9]*”匹配任何数量的数字，而“.*”匹配任何数量的任何字符。")])]),s._v(" "),t("p",[s._v("使用REGEXP  运算符进行字符串匹配运算，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssky'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^s'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssky'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y$'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssky'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.sky'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ssky'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("REGEXP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[ab]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131446792",loading:"lazy"}})]),s._v(" "),t("p",[s._v("由结果可以看到，指定匹配字符串为ssky。")]),s._v(" "),t("ul",[t("li",[s._v("'^s'表示匹配任何以字母s开头的字符串，因此满足匹配条件，返回1；")]),s._v(" "),t("li",[s._v("'y$'表示匹配任何以字母y结尾的字符串，因此满足匹配条件，返回1；")]),s._v(" "),t("li",[s._v("'.sky'表示匹配任何以sky结尾，字符长度为4的字符串，因此满足匹配条件，返回1；")]),s._v(" "),t("li",[s._v("'^s'表示匹配任何以字母s开头的字符串，因此满足匹配条件，返回1；")]),s._v(" "),t("li",[s._v("'[ab]'表示匹配任何包含字母a或者b的字符串，指定字符串中没有字母a也没有字母b，因此不满足匹配条件，返回0；")])]),s._v(" "),t("p",[s._v("注意：正则表达式是一个可以进行复杂查询的强大工具，相对于LIKE字符串匹配，他可以使用更多的通配符类型，查询结果更加灵活")]),s._v(" "),t("h2",{attrs:{id:"逻辑运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[s._v("#")]),s._v(" 逻辑运算符")]),s._v(" "),t("ul",[t("li",[s._v("逻辑与运算符：AND或者&&")]),s._v(" "),t("li",[s._v("逻辑或运算符：OR或者||")]),s._v(" "),t("li",[s._v("异或运算符：XOR")])]),s._v(" "),t("p",[s._v("当任意一个操作数为NULL时，返回值为NULL;对于非NULL的操作数，如果两个操作数都是非0值或者都是0值，则返回结果为0；")]),s._v(" "),t("p",[s._v("如果一个为0值，另一个为非0值，返回结果为1。使用异或运算符XOR进行逻辑判断，SQL语句如下")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("XOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131609387",loading:"lazy"}})]),s._v(" "),t("p",[s._v("由结果可以看到‘1 XOR 1’和‘0 XOR 0’中运算符两边的操作数都为非零值，或者都是零值，因此返回0；")]),s._v(" "),t("ul",[t("li",[s._v("'1 XOR 0'中两边的操作数，一个为0值，另一个为非0值，返回结果为1；")]),s._v(" "),t("li",[s._v("'1 XOR NULL'中有一个操作数为NULL，返回结果为NULL；")]),s._v(" "),t("li",[s._v("'1 XOR 1 XOR 1'中有多个操作数，运算符相同，因此运算符从左到右依次计算，'1 XOR 1'的结果为0，再与1进行异或运算，因此结果为1。")])]),s._v(" "),t("p",[t("strong",[s._v("注意: a XOR b的计算等同于(a AND (NOT b))或者(NOT a AND ( b))")])]),s._v(" "),t("h2",{attrs:{id:"位运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[s._v("#")]),s._v(" 位运算符")]),s._v(" "),t("p",[s._v("由于比较少用到，这里只做简单介绍")]),s._v(" "),t("p",[s._v("位运算符是用来对二进制字节中的位进行测试、移位或者测试处理")]),s._v(" "),t("p",[s._v("MYSQL中提供的位运算有")]),s._v(" "),t("ul",[t("li",[s._v("按位或(|)")]),s._v(" "),t("li",[s._v("按位与(&)")]),s._v(" "),t("li",[s._v("按位异或(^)")]),s._v(" "),t("li",[s._v("按位左移(<<)")]),s._v(" "),t("li",[s._v("按位右移(>>)")]),s._v(" "),t("li",[s._v("按位取反(~)：反转所有比特")])]),s._v(" "),t("p",[s._v("TIPS：可以使用BIN()=binary函数查看一个十进制数的二进制表示")]),s._v(" "),t("p",[s._v("例如20这个数字 SELECT BIN("),t("strong",[s._v("20")]),s._v(")")]),s._v(" "),t("p",[s._v("二进制表示为：10100")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131709533",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"特别提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特别提示"}},[s._v("#")]),s._v(" 特别提示")]),s._v(" "),t("p",[s._v("某一些MYSQL中的特殊字符需要用转义字符才能插入数据库，否则产生意料之外的结果。")]),s._v(" "),t("p",[s._v("下面的特殊字符需要在输入时加反斜线符号开头")]),s._v(" "),t("ul",[t("li",[s._v("输入单引号需要：'")]),s._v(" "),t("li",[s._v("输入双引号需要：''")]),s._v(" "),t("li",[s._v("输入反斜杠：\\")]),s._v(" "),t("li",[s._v("输入回车符：\\r")]),s._v(" "),t("li",[s._v("输入换行符：\\n")]),s._v(" "),t("li",[s._v("输入制表符：\\tab")]),s._v(" "),t("li",[s._v("输入退格符：\\b")])]),s._v(" "),t("p",[s._v("在插入这些特殊字符到数据库之前一定要进行转义处理")]),s._v(" "),t("p",[s._v("例如插入一个单引号，加了反斜杠，插入成功")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" table_1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdn.net/20150619131818804",loading:"lazy"}})]),s._v(" "),t("p",[t("strong",[s._v("好了，今天的文章就到这儿吧，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),s._v(" "),t("h2",{attrs:{id:"关于星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[s._v("#")]),s._v(" 关于星球")]),s._v(" "),t("p",[t("strong",[s._v("冰河技术")]),s._v(" 知识星球《RPC手撸专栏》已经开始了，我会将《RPC手撸专栏》的源码放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),s._v(" "),t("h3",{attrs:{id:"星球提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[s._v("#")]),s._v(" 星球提供的服务")]),s._v(" "),t("p",[s._v("冰河整理了星球提供的一些服务，如下所示。")]),s._v(" "),t("p",[s._v("加入星球，你将获得：")]),s._v(" "),t("p",[s._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),s._v(" "),t("p",[s._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),s._v(" "),t("p",[s._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),s._v(" "),t("p",[s._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),s._v(" "),t("p",[s._v("5.提供站点 https://binghe001.github.io 所有学习内容的指导、帮助")]),s._v(" "),t("p",[s._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),s._v(" "),t("p",[s._v("7.可以发送你的简历到我的邮箱，提供简历批阅服务")]),s._v(" "),t("p",[s._v("8.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),s._v(" "),t("p",[s._v("9.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),s._v(" "),t("p",[s._v("10.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),s._v(" "),t("h3",{attrs:{id:"如何加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[s._v("#")]),s._v(" 如何加入星球")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("链接")]),s._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" 加入星球。")]),s._v(" "),t("li",[t("strong",[s._v("回复")]),s._v(" ：在公众号 "),t("strong",[s._v("冰河技术")]),s._v(" 回复 "),t("strong",[s._v("星球")]),s._v(" 领取优惠券加入星球。")])]),s._v(" "),t("p",[t("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[s._v("hacker_binghe")]),s._v(" 扫二维码，或者去公众号 "),t("strong",[s._v("冰河技术")]),s._v(" 回复 "),t("strong",[s._v("星球")]),s._v(" 扫二维码加入星球。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe001.github.io/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),s._v(" "),t("p",[t("strong",[s._v("如果图片二维码过期，去公众号 冰河技术 回复 星球 扫二维码加入星球, 好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);