(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{633:function(a,s,t){"use strict";t.r(s);var n=t(7),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"《面试必问》第07章-一个线程从创建到消亡要经历哪些阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第07章-一个线程从创建到消亡要经历哪些阶段"}},[a._v("#")]),a._v(" 《面试必问》第07章：一个线程从创建到消亡要经历哪些阶段？")]),a._v(" "),s("p",[s("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),s("p",[a._v("在【"),s("a",{attrs:{href:"https://blog.csdn.net/l1028386804/category_9719933.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("精通高并发系列"),s("OutboundLink")],1),a._v("】中的《"),s("a",{attrs:{href:"https://binghe.blog.csdn.net/article/details/104322212",target:"_blank",rel:"noopener noreferrer"}},[a._v("高并发之——线程与多线程"),s("OutboundLink")],1),a._v("》一文中，我们简单介绍了线程的生命周期和线程的几个重要状态，并以代码的形式实现了线程是如何进入各个状态的。")]),a._v(" "),s("p",[a._v("今天，我们就结合 "),s("strong",[a._v("操作系统线程和编程语言线程")]),a._v(" 再次深入探讨线程的生命周期问题，线程的生命周期其实没有我们想象的那么简单！！")]),a._v(" "),s("p",[a._v("理解线程的生命周期本质上理解了"),s("strong",[a._v("生命周期中各个节点的状态转换机制")]),a._v("就可以了。接下来，我们分别就 "),s("strong",[a._v("通用线程生命周期和Java语言的线程生命周期")]),a._v(" 分别进行详细说明。")]),a._v(" "),s("h2",{attrs:{id:"通用的线程生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用的线程生命周期"}},[a._v("#")]),a._v(" 通用的线程生命周期")]),a._v(" "),s("p",[a._v("通用的线程生命周期总体上可以分为五个状态："),s("strong",[a._v("初始状态、可运行状态、运行状态、休眠状态和终止状态。")])]),a._v(" "),s("p",[a._v("我们可以简单的使用下图来表示这五种状态。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/2hHcUic5FEwGk0FqdCibDnyn45bV9T5rQnmKibdBcmZzNrKRMTZiaplhh6DMiac6gj5NNgakb7LrkYibt6Lg0aHiaI5CQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"初始状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始状态"}},[a._v("#")]),a._v(" 初始状态")]),a._v(" "),s("p",[a._v("线程已经被创建，但是不允许分配CPU执行。"),s("strong",[a._v("需要注意的是：这个状态属于编程语言特有，这里指的线程已经被创建，仅仅指在编程语言中被创建，在操作系统中，并没有创建真正的线程。")])]),a._v(" "),s("h3",{attrs:{id:"可运行状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可运行状态"}},[a._v("#")]),a._v(" 可运行状态")]),a._v(" "),s("p",[a._v("线程可以分配CPU执行。此时，"),s("strong",[a._v("操作系统中的线程被成功创建，可以分配CPU执行。")])]),a._v(" "),s("h3",{attrs:{id:"运行状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行状态"}},[a._v("#")]),a._v(" 运行状态")]),a._v(" "),s("p",[a._v("当操作系统中存在空闲的CPU，操作系统会将这个空闲的CPU分配给一个处于可运行状态的线程，被分配到CPU的线程的状态就转换成了运行状态")]),a._v(" "),s("h3",{attrs:{id:"休眠状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#休眠状态"}},[a._v("#")]),a._v(" 休眠状态")]),a._v(" "),s("p",[a._v("运行状态的线程调用一个阻塞的API（例如，以阻塞的方式读文件）或者等待某个事件（例如，等待某个条件变量等），线程的状态就会转换到休眠状态。**此时线程会释放CPU资源，休眠状态的线程没有机会获得CPU的使用权。**一旦等待的条件出现，线程就会从休眠状态转换到可运行状态。")]),a._v(" "),s("h3",{attrs:{id:"终止状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#终止状态"}},[a._v("#")]),a._v(" 终止状态")]),a._v(" "),s("p",[a._v("线程执行完毕或者出现异常就会进入终止状态，终止状态的线程不会切换到其他任何状态，这也意味着"),s("strong",[a._v("线程的生命周期结束了。")])]),a._v(" "),s("p",[a._v("以上就是通用的线程生命周期，下面，我们再看对比看下Java语言中的线程生命周期。")]),a._v(" "),s("h2",{attrs:{id:"java中的线程生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java中的线程生命周期"}},[a._v("#")]),a._v(" Java中的线程生命周期")]),a._v(" "),s("p",[a._v("Java中的线程生命周期总共可以分为六种状态："),s("strong",[a._v("初始化状态（NEW）、可运行/运行状态（RUNNABLE）、阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING）、终止状态（TERMINATED）。")])]),a._v(" "),s("p",[s("strong",[a._v("需要大家重点理解的是：虽然Java语言中线程的状态比较多，但是，其实在操作系统层面，Java线程中的阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING）都是一种状态，即通用线程生命周期中的休眠状态。也就是说，只要Java中的线程处于这三种状态时，那么，这个线程就没有CPU的使用权。")])]),a._v(" "),s("p",[a._v("理解了这些之后，我们就可以使用下面的图来简单的表示Java中线程的生命周期。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/2hHcUic5FEwGk0FqdCibDnyn45bV9T5rQnSEhXyiaZjse1xgdicCmcDUeibdMDfSC5pv1yM1YsgxwM0G3WBTiaR5wjqg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),s("p",[a._v("我们也可以这样理解阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING），它们是导致线程休眠的三种原因！")]),a._v(" "),s("p",[a._v("接下来，我们就看看Java线程中的状态是如何转化的。")]),a._v(" "),s("h3",{attrs:{id:"runnable与blocked的状态转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable与blocked的状态转换"}},[a._v("#")]),a._v(" RUNNABLE与BLOCKED的状态转换")]),a._v(" "),s("p",[a._v("只有一种场景会触发这种转换，就是线程等待synchronized隐式锁。synchronized修饰的方法、代码块同一时刻只允许一个线程执行，其他的线程则需要等待。")]),a._v(" "),s("p",[a._v("此时，等待的线程就会从RUNNABLE状态转换到BLOCKED状态。当等待的线程获得synchronized隐式锁时，就又会从BLOCKED状态转换到RUNNABLE状态。")]),a._v(" "),s("p",[a._v("这里，需要大家注意：线程调用阻塞API时，在操作系统层面，线程会转换到休眠状态。但是在JVM中，Java线程的状态不会发生变化，也就是说，Java线程的状态仍然是RUNNABLE状态。")]),a._v(" "),s("p",[a._v("JVM并不关心操作系统调度相关的状态，在JVM角度来看，等待CPU使用权（操作系统中的线程处于可执行状态）和等待IO操作（操作系统中的线程处于休眠状态）没有区别，都是在等待某个资源，所以，将其都归入了RUNNABLE状态。")]),a._v(" "),s("p",[a._v("我们平时所说的Java在调用阻塞API时，线程会阻塞，指的是操作系统线程的状态，并不是Java线程的状态。")]),a._v(" "),s("h3",{attrs:{id:"runnable与waiting状态转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable与waiting状态转换"}},[a._v("#")]),a._v(" RUNNABLE与WAITING状态转换")]),a._v(" "),s("p",[a._v("线程从RUNNABLE状态转换成WAITING状态总体上有三种场景。")]),a._v(" "),s("p",[s("strong",[a._v("场景一")])]),a._v(" "),s("p",[a._v("获得synchronized隐式锁的线程，调用无参的Object.wait()方法。此时的线程会从RUNNABLE状态转换成WAITING状态。")]),a._v(" "),s("p",[s("strong",[a._v("场景二")])]),a._v(" "),s("p",[a._v("调用无参数的Thread.join()方法。其中join()方法是一种线程的同步方法。例如，在threadA线程中调用threadB线程的join()方法，则threadA线程会等待threadB线程执行完。")]),a._v(" "),s("p",[a._v("而threadA线程在等待threadB线程执行的过程中，其状态会从RUNNABLE转换到WAITING。当threadB执行完毕，threadA线程的状态则会从WAITING状态转换成RUNNABLE状态。")]),a._v(" "),s("p",[s("strong",[a._v("场景三")])]),a._v(" "),s("p",[a._v("调用LockSupport.park()方法，当前线程会阻塞，线程的状态会从RUNNABLE转换成WAITING。")]),a._v(" "),s("p",[a._v("调用LockSupport.unpark(Thread thread)可唤醒目标线程，目标线程的状态又会从WAITING状态转换到RUNNABLE。")]),a._v(" "),s("h3",{attrs:{id:"runnable与timed-waiting状态转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable与timed-waiting状态转换"}},[a._v("#")]),a._v(" RUNNABLE与TIMED_WAITING状态转换")]),a._v(" "),s("p",[a._v("总体上可以分为五种场景。")]),a._v(" "),s("p",[s("strong",[a._v("场景一")])]),a._v(" "),s("p",[a._v("调用带超时参数的Thread.sleep(long millis)方法；")]),a._v(" "),s("p",[s("strong",[a._v("场景二")])]),a._v(" "),s("p",[a._v("获得synchronized隐式锁的线程，调用带超时参数的Object.wait(long timeout)参数；")]),a._v(" "),s("p",[s("strong",[a._v("场景三")])]),a._v(" "),s("p",[a._v("调用带超时参数的Thread.join(long millis)方法；")]),a._v(" "),s("p",[s("strong",[a._v("场景四")])]),a._v(" "),s("p",[a._v("调用带超时参数的LockSupport.parkNanos(Object blocker, long deadline)方法；")]),a._v(" "),s("p",[s("strong",[a._v("场景五")])]),a._v(" "),s("p",[a._v("调用带超时参数的LockSuppor.parkUntil(long deadline)方法。")]),a._v(" "),s("h3",{attrs:{id:"从new到runnable状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从new到runnable状态"}},[a._v("#")]),a._v(" 从NEW到RUNNABLE状态")]),a._v(" "),s("p",[a._v("Java刚创建出来的Thread对象就是NEW状态，创建Thread对象主要有两种方法，一种是继承Thread对象，重写run()方法；另一种是实现Runnable接口，重写run()方法。")]),a._v(" "),s("p",[s("strong",[a._v("注意：这里说的是创建Thread对象的方法，而不是创建线程的方法，创建线程的方法包含创建Thread对象的方法。")])]),a._v(" "),s("p",[s("strong",[a._v("继承Thread对象")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程中需要执行的逻辑")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),a._v(" childThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[s("strong",[a._v("实现Runnable接口")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程中需要执行的逻辑")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" childThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[s("strong",[a._v("处于NEW状态的线程不会被操作系统调度，因此也就不会执行。Java中的线程要执行，就需要转换到RUNNABLE状态。从NEW状态转换到RUNNABLE状态，只需要调用线程对象的start()方法即可。")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" childThread "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//调用start()方法使线程从NEW状态转换到RUNNABLE状态")]),a._v("\nchildThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"runnable到terminated状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnable到terminated状态"}},[a._v("#")]),a._v(" RUNNABLE到TERMINATED状态")]),a._v(" "),s("p",[a._v("线程执行完run()方法后，或者执行run()方法的时候抛出异常，都会终止，此时为TERMINATED状态。如果我们需要中断run()方法，可以调用interrupt()方法。")]),a._v(" "),s("p",[s("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),s("blockquote",[s("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);