(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{537:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"discuz报错table-uc-uc-pms-doesn-t-exist-uc-pms不存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discuz报错table-uc-uc-pms-doesn-t-exist-uc-pms不存在"}},[s._v("#")]),s._v(" discuz报错Table 'uc.uc_pms' doesn't exist，uc_pms不存在")]),s._v(" "),t("p",[s._v("第一次安装discuz，安装成功后跳到首页，报如下错误：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("Error:"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ucenter.uc_pms'")]),s._v(" doesn"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t exist\nErrno:1146\nSQL::SELECT count(*) FROM `ucenter`.uc_pms WHERE (related='")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' AND msgfromid>'")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' OR msgfromid='")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("') AND msgtoid='")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' AND folder='")]),s._v("inbox"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("' AND new='")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("查了下 ，数据库ucenter里没有uc_pms表。\n执行如下SQL创建表即可：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" uc_pms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\npmid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmsgfrom "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmsgfromid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MEDIUMINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmsgtoid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MEDIUMINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nfolder "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENUM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inbox'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'outbox'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inbox'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nnew "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nsubject "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ndateline "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nmessage "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\ndelstatus "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TINYINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nrelated "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNSIGNED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pmid "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" msgtoid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" msgtoid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dateline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" msgfromid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" msgfromid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dateline "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" RELATED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" related "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" getnum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" msgtoid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" delstatus "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MYISAM "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);