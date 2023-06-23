(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{385:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《mysql核心知识》第12章-触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第12章-触发器"}},[s._v("#")]),s._v(" 《MySQL核心知识》第12章：触发器")]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("今天是《MySQL核心知识》专栏的第12章，今天为大家系统的讲讲MySQL中的触发器，希望通过本章节的学习，小伙伴们能够举一反三，彻底掌握MySQL中的触发器知识。好了，开始今天的正题吧。")]),s._v(" "),t("p",[s._v("触发器是一个特殊的存储过程，不同的是存储过程要用CALL来调用，而触发器不需要使用CALL，也不需要手工启动，只要当一个预定义的事件发生的时候，就会被MySQL自动调用。")]),s._v(" "),t("h2",{attrs:{id:"创建触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建触发器"}},[s._v("#")]),s._v(" 创建触发器")]),s._v(" "),t("p",[s._v("语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" trigger_name trigger_time trigger_event\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" tbl_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" trigger_stmt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("触发程序是与表有关的命名数据库对象，当表上出现特定事件时，将激活该对象。")]),s._v(" "),t("p",[s._v("触发程序与命名为tbl_name的表相关。tbl_name必须引用永久性表。不能将触发程序与临时表表或视图关联起来。")]),s._v(" "),t("p",[s._v("trigger_time是触发程序的动作时间。它可以是BEFORE或AFTER，以指明触发程序是在激活它的语句之前或之后触发。")]),s._v(" "),t("p",[s._v("trigger_event指明了激活触发程序的语句的类型。trigger_event可以是下述值之一：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("INSERT：将新行插入表时激活触发程序，例如，通过INSERT、LOAD DATA和REPLACE语句。")])]),s._v(" "),t("li",[t("p",[s._v("UPDATE：更改某一行时激活触发程序，例如，通过UPDATE语句。")])]),s._v(" "),t("li",[t("p",[s._v("DELETE：从表中删除某一行时激活触发程序，例如，通过DELETE和REPLACE语句。")])])]),s._v(" "),t("p",[s._v("请注意，trigger_event与以表操作方式激活触发程序的SQL语句并不很类似，这点很重要。")]),s._v(" "),t("p",[s._v("例如，关于INSERT的BEFORE触发程序不仅能被INSERT语句激活，也能被"),t("strong",[s._v("LOAD DATA")]),s._v("语句激活。")]),s._v(" "),t("p",[s._v("可能会造成混淆的例子之一是INSERT INTO .. ON DUPLICATE UPDATE ...语法：BEFORE INSERT触发程序对于每一行将激活，后跟AFTER INSERT触发程序，或BEFORE UPDATE和AFTER UPDATE触发程序，具体情况取决于行上是否有重复键。")]),s._v(" "),t("p",[s._v("对于具有相同触发程序动作时间和事件的给定表，不能有两个触发程序。")]),s._v(" "),t("p",[s._v("例如，对于某一表，不能有两个"),t("strong",[s._v("BEFORE UPDATE")]),s._v("触发程序。但可以有1个BEFORE UPDATE触发程序和1个BEFORE INSERT触发程序，或1个BEFORE UPDATE触发程序和1个AFTER UPDATE触发程序。")]),s._v(" "),t("p",[s._v("trigger_stmt是当触发程序激活时执行的语句。")]),s._v(" "),t("p",[s._v("如果你打算执行多个语句，可使用BEGIN ... END复合语句结构。这样，就能使用存储子程序中允许的相同语句。")]),s._v(" "),t("p",[s._v("创建一个单执行语句的触发器")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" account"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acct_num "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("amount "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECIMAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" ins_sum BEFORE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" account\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@SUM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@SUM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("首先创建一个account表，表中有两个字段，分别为：acct_num字段（定义为int类型）amount字段（定义成浮点类型）；其次创建一个名为ins_sum的触发器，触发的条件是向数据表account插入数据之前，对新插入的amount字段值进行求和计算")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECLARE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@num")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@num")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@num")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("首先创建一个account表，在向表account插入数据之前，计算所有新插入的account表的amount值之和，")]),s._v(" "),t("p",[s._v("触发器的名称为ins_num，条件是在向表插入数据之前触发。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/img_convert/5af25ecde9535e82f79df472b80188d1.jpeg",loading:"lazy"}})]),s._v(" "),t("p",[s._v("创建有多个执行语句的触发器，语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELIMITER")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" testref BEFORE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test1\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" test2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" a2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" test3 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" a3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" test4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" b4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" a4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NEW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"查看触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看触发器"}},[s._v("#")]),s._v(" 查看触发器")]),s._v(" "),t("p",[s._v("查看触发器是指数据库中已存在的触发器的定义、状态、语法信息等。")]),s._v(" "),t("p",[s._v("可以使用SHOW TRIGGERS 和在TRIGGERS 表中查看触发器信息")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" TRIGGERS \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Trigger")]),s._v("  Event   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Table")]),s._v("    Statement                 Timing  Created  sql_mode  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Definer")]),s._v("         character_set_client  collation_connection  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Database")]),s._v(" Collation\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------  ------  -------  ------------------------  ------  -------  --------  --------------  --------------------  --------------------  ------------------")]),s._v("\nins_sum  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("  account  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amount  BEFORE  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             root"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v("  utf8                  utf8_general_ci       utf8_general_ci   \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("EVENT表示激活触发器的事件，这里的触发事件为插入操作INSERT，TABLE表示激活触发器的对象表，这里为account 表")]),s._v(" "),t("p",[s._v("Timing表示触发器的时间，为插入之前（BEFORE）；Statement 表示触发器执行的操作，还有一些其他信息，比如SQL模式，触发器的定义帐户和字符集等")]),s._v(" "),t("p",[s._v("在TRIGGERS 表中查看触发器信息")]),s._v(" "),t("p",[s._v("information_schema数据库的TRIGGERS 表中，可以通过查询查看触发器信息")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("TRIGGERS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("TRIGGER_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ins_sum'")]),s._v("\n\nTRIGGER_CATALOG  TRIGGER_SCHEMA  TRIGGER_NAME  EVENT_MANIPULATION  EVENT_OBJECT_CATALOG  EVENT_OBJECT_SCHEMA  EVENT_OBJECT_TABLE  ACTION_ORDER  ACTION_CONDITION  ACTION_STATEMENT          ACTION_ORIENTATION  ACTION_TIMING  ACTION_REFERENCE_OLD_TABLE  ACTION_REFERENCE_NEW_TABLE  ACTION_REFERENCE_OLD_ROW  ACTION_REFERENCE_NEW_ROW  CREATED  SQL_MODE  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFINER")]),s._v("         CHARACTER_SET_CLIENT  COLLATION_CONNECTION  DATABASE_COLLATION\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------  --------------  ------------  ------------------  --------------------  -------------------  ------------------  ------------  ----------------  ------------------------  ------------------  -------------  --------------------------  --------------------------  ------------------------  ------------------------  -------  --------  --------------  --------------------  --------------------  ------------------")]),s._v("\ndef              school          ins_sum       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("              def                   school               account                        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@sum")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amount  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROW")]),s._v("                 BEFORE         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                      OLD                       NEW                       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             root"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@localhost")]),s._v("  utf8                  utf8_general_ci       utf8_general_ci   \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("TRIGGER_SCHEMA 表示触发器所在的数据库")])]),s._v(" "),t("li",[t("p",[s._v("TRIGGER_NAME表示触发器的名称")])]),s._v(" "),t("li",[t("p",[s._v("EVENT_OBJECT_TABLE表示在哪个表上触发")])]),s._v(" "),t("li",[t("p",[s._v("ACTION_STATEMENT 表示触发器触发的时候执行的具体操作")])]),s._v(" "),t("li",[t("p",[s._v("ACTION_ORIENTATION是ROW，表示在每条记录上都触发")])]),s._v(" "),t("li",[t("p",[s._v("ACTION_TIMING表示触发的时刻是BEFORE")])])]),s._v(" "),t("h2",{attrs:{id:"删除触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除触发器"}},[s._v("#")]),s._v(" 删除触发器")]),s._v(" "),t("p",[s._v("使用DROP TRIGGER 语句可以删除MYSQL中已经定义的触发器，删除触发器的基本语法")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("schema_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("trigger_name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中（schema_name）是可选的")]),s._v(" "),t("p",[s._v("如果省略了schema（方案），将从当前方案中舍弃触发程序。")]),s._v(" "),t("p",[s._v("删除ins_sum触发器")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ins_sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("触发器ins_sum删除成功")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("对于相同的表，相同的事件只能创建一个触发器，比如对表account创建了BEFORE INSERT触发器。那么如果对表account再次创建一个BEFORE INSERT触发器，MYSQL就会报错，此时，只可以在表account上。创建AFTER INSERT或者BEFORE UPDATE类型的触发器")]),s._v(" "),t("p",[s._v("补充:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" account"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acct_num "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("amount "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECIMAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("NUM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" ins_sum BEFORE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR EACH ROW")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("employee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("acct_num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("acct_num "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" account"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acct_num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("amount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("employee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),s._v(" "),t("h2",{attrs:{id:"关于星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[s._v("#")]),s._v(" 关于星球")]),s._v(" "),t("p",[t("strong",[s._v("冰河技术")]),s._v(" 知识星球《RPC手撸专栏》已经开始了，我会将《RPC手撸专栏》的源码放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),s._v(" "),t("h3",{attrs:{id:"星球提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[s._v("#")]),s._v(" 星球提供的服务")]),s._v(" "),t("p",[s._v("冰河整理了星球提供的一些服务，如下所示。")]),s._v(" "),t("p",[s._v("加入星球，你将获得：")]),s._v(" "),t("p",[s._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),s._v(" "),t("p",[s._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),s._v(" "),t("p",[s._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),s._v(" "),t("p",[s._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),s._v(" "),t("p",[s._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),s._v(" "),t("p",[s._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),s._v(" "),t("p",[s._v("7.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),s._v(" "),t("p",[s._v("8.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),s._v(" "),t("p",[s._v("9.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),s._v(" "),t("h3",{attrs:{id:"如何加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[s._v("#")]),s._v(" 如何加入星球")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("链接")]),s._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" 加入星球。")]),s._v(" "),t("li",[t("strong",[s._v("回复")]),s._v(" ：在公众号 "),t("strong",[s._v("冰河技术")]),s._v(" 回复 "),t("strong",[s._v("星球")]),s._v(" 领取优惠券加入星球。")])]),s._v(" "),t("p",[t("strong",[s._v("特别提醒：")]),s._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[s._v("hacker_binghe")]),s._v(" 扫二维码，或者去公众号 "),t("strong",[s._v("冰河技术")]),s._v(" 回复 "),t("strong",[s._v("星球")]),s._v(" 扫二维码加入星球。")]),s._v(" "),t("p",[t("strong",[s._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),s._v(" "),t("h2",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[s._v("#")]),s._v(" 加群交流")]),s._v(" "),t("p",[s._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[s._v("学习加群")]),s._v("。")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),s._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[s._v("冰河微信")]),s._v(" "),t("br")]),s._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),t("p",[s._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",width:"180px"}}),s._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[s._v("公众号：冰河技术")]),s._v(" "),t("br")]),s._v(" "),t("h2",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[s._v("#")]),s._v(" 星球")]),s._v(" "),t("p",[s._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1)]),s._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[s._v("hacker_binghe")]),s._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[s._v("实战项目")]),s._v("！")]),s._v(" "),t("p",[s._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("公众号，回复 "),t("code",[s._v("星球")]),s._v(" 可以获取入场优惠券。")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),s._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[s._v("知识星球：冰河技术")]),s._v(" "),t("br")])])}),[],!1,null,null,null);t.default=e.exports}}]);