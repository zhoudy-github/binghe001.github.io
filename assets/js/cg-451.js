(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{749:function(a,t,s){"use strict";s.r(t);var n=s(7),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《面试必问》第07章-一个线程从创建到消亡要经历哪些阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第07章-一个线程从创建到消亡要经历哪些阶段"}},[a._v("#")]),a._v(" 《面试必问》第07章：一个线程从创建到消亡要经历哪些阶段？")]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("在【"),t("a",{attrs:{href:"https://blog.csdn.net/l1028386804/category_9719933.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("精通高并发系列"),t("OutboundLink")],1),a._v("】中的《"),t("a",{attrs:{href:"https://binghe.blog.csdn.net/article/details/104322212",target:"_blank",rel:"noopener noreferrer"}},[a._v("高并发之——线程与多线程"),t("OutboundLink")],1),a._v("》一文中，我们简单介绍了线程的生命周期和线程的几个重要状态，并以代码的形式实现了线程是如何进入各个状态的。")]),a._v(" "),t("p",[a._v("今天，我们就结合 "),t("strong",[a._v("操作系统线程和编程语言线程")]),a._v(" 再次深入探讨线程的生命周期问题，线程的生命周期其实没有我们想象的那么简单！！")]),a._v(" "),t("p",[a._v("理解线程的生命周期本质上理解了"),t("strong",[a._v("生命周期中各个节点的状态转换机制")]),a._v("就可以了。接下来，我们分别就 "),t("strong",[a._v("通用线程生命周期和Java语言的线程生命周期")]),a._v(" 分别进行详细说明。")]),a._v(" "),t("h2",{attrs:{id:"通用的线程生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用的线程生命周期"}},[a._v("#")]),a._v(" 通用的线程生命周期")]),a._v(" "),t("p",[a._v("通用的线程生命周期总体上可以分为五个状态："),t("strong",[a._v("初始状态、可运行状态、运行状态、休眠状态和终止状态。")])]),a._v(" "),t("p",[a._v("我们可以简单的使用下图来表示这五种状态。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/2hHcUic5FEwGk0FqdCibDnyn45bV9T5rQnmKibdBcmZzNrKRMTZiaplhh6DMiac6gj5NNgakb7LrkYibt6Lg0aHiaI5CQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"初始状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始状态"}},[a._v("#")]),a._v(" 初始状态")]),a._v(" "),t("p",[a._v("线程已经被创建，但是不允许分配CPU执行。"),t("strong",[a._v("需要注意的是：这个状态属于编程语言特有，这里指的线程已经被创建，仅仅指在编程语言中被创建，在操作系统中，并没有创建真正的线程。")])]),a._v(" "),t("h3",{attrs:{id:"可运行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可运行状态"}},[a._v("#")]),a._v(" 可运行状态")]),a._v(" "),t("p",[a._v("线程可以分配CPU执行。此时，"),t("strong",[a._v("操作系统中的线程被成功创建，可以分配CPU执行。")])]),a._v(" "),t("h3",{attrs:{id:"运行状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行状态"}},[a._v("#")]),a._v(" 运行状态")]),a._v(" "),t("p",[a._v("当操作系统中存在空闲的CPU，操作系统会将这个空闲的CPU分配给一个处于可运行状态的线程，被分配到CPU的线程的状态就转换成了运行状态")]),a._v(" "),t("h3",{attrs:{id:"休眠状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#休眠状态"}},[a._v("#")]),a._v(" 休眠状态")]),a._v(" "),t("p",[a._v("运行状态的线程调用一个阻塞的API（例如，以阻塞的方式读文件）或者等待某个事件（例如，等待某个条件变量等），线程的状态就会转换到休眠状态。**此时线程会释放CPU资源，休眠状态的线程没有机会获得CPU的使用权。**一旦等待的条件出现，线程就会从休眠状态转换到可运行状态。")]),a._v(" "),t("h3",{attrs:{id:"终止状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止状态"}},[a._v("#")]),a._v(" 终止状态")]),a._v(" "),t("p",[a._v("线程执行完毕或者出现异常就会进入终止状态，终止状态的线程不会切换到其他任何状态，这也意味着"),t("strong",[a._v("线程的生命周期结束了。")])]),a._v(" "),t("p",[a._v("以上就是通用的线程生命周期，下面，我们再看对比看下Java语言中的线程生命周期。")]),a._v(" "),t("h2",{attrs:{id:"java中的线程生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java中的线程生命周期"}},[a._v("#")]),a._v(" Java中的线程生命周期")]),a._v(" "),t("p",[a._v("Java中的线程生命周期总共可以分为六种状态："),t("strong",[a._v("初始化状态（NEW）、可运行/运行状态（RUNNABLE）、阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING）、终止状态（TERMINATED）。")])]),a._v(" "),t("p",[t("strong",[a._v("需要大家重点理解的是：虽然Java语言中线程的状态比较多，但是，其实在操作系统层面，Java线程中的阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING）都是一种状态，即通用线程生命周期中的休眠状态。也就是说，只要Java中的线程处于这三种状态时，那么，这个线程就没有CPU的使用权。")])]),a._v(" "),t("p",[a._v("理解了这些之后，我们就可以使用下面的图来简单的表示Java中线程的生命周期。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://mmbiz.qpic.cn/mmbiz_jpg/2hHcUic5FEwGk0FqdCibDnyn45bV9T5rQnSEhXyiaZjse1xgdicCmcDUeibdMDfSC5pv1yM1YsgxwM0G3WBTiaR5wjqg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("我们也可以这样理解阻塞状态（BLOCKED）、无时限等待状态（WAITING）、有时限等待状态（TIMED_WAITING），它们是导致线程休眠的三种原因！")]),a._v(" "),t("p",[a._v("接下来，我们就看看Java线程中的状态是如何转化的。")]),a._v(" "),t("h3",{attrs:{id:"runnable与blocked的状态转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable与blocked的状态转换"}},[a._v("#")]),a._v(" RUNNABLE与BLOCKED的状态转换")]),a._v(" "),t("p",[a._v("只有一种场景会触发这种转换，就是线程等待synchronized隐式锁。synchronized修饰的方法、代码块同一时刻只允许一个线程执行，其他的线程则需要等待。")]),a._v(" "),t("p",[a._v("此时，等待的线程就会从RUNNABLE状态转换到BLOCKED状态。当等待的线程获得synchronized隐式锁时，就又会从BLOCKED状态转换到RUNNABLE状态。")]),a._v(" "),t("p",[a._v("这里，需要大家注意：线程调用阻塞API时，在操作系统层面，线程会转换到休眠状态。但是在JVM中，Java线程的状态不会发生变化，也就是说，Java线程的状态仍然是RUNNABLE状态。")]),a._v(" "),t("p",[a._v("JVM并不关心操作系统调度相关的状态，在JVM角度来看，等待CPU使用权（操作系统中的线程处于可执行状态）和等待IO操作（操作系统中的线程处于休眠状态）没有区别，都是在等待某个资源，所以，将其都归入了RUNNABLE状态。")]),a._v(" "),t("p",[a._v("我们平时所说的Java在调用阻塞API时，线程会阻塞，指的是操作系统线程的状态，并不是Java线程的状态。")]),a._v(" "),t("h3",{attrs:{id:"runnable与waiting状态转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable与waiting状态转换"}},[a._v("#")]),a._v(" RUNNABLE与WAITING状态转换")]),a._v(" "),t("p",[a._v("线程从RUNNABLE状态转换成WAITING状态总体上有三种场景。")]),a._v(" "),t("p",[t("strong",[a._v("场景一")])]),a._v(" "),t("p",[a._v("获得synchronized隐式锁的线程，调用无参的Object.wait()方法。此时的线程会从RUNNABLE状态转换成WAITING状态。")]),a._v(" "),t("p",[t("strong",[a._v("场景二")])]),a._v(" "),t("p",[a._v("调用无参数的Thread.join()方法。其中join()方法是一种线程的同步方法。例如，在threadA线程中调用threadB线程的join()方法，则threadA线程会等待threadB线程执行完。")]),a._v(" "),t("p",[a._v("而threadA线程在等待threadB线程执行的过程中，其状态会从RUNNABLE转换到WAITING。当threadB执行完毕，threadA线程的状态则会从WAITING状态转换成RUNNABLE状态。")]),a._v(" "),t("p",[t("strong",[a._v("场景三")])]),a._v(" "),t("p",[a._v("调用LockSupport.park()方法，当前线程会阻塞，线程的状态会从RUNNABLE转换成WAITING。")]),a._v(" "),t("p",[a._v("调用LockSupport.unpark(Thread thread)可唤醒目标线程，目标线程的状态又会从WAITING状态转换到RUNNABLE。")]),a._v(" "),t("h3",{attrs:{id:"runnable与timed-waiting状态转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable与timed-waiting状态转换"}},[a._v("#")]),a._v(" RUNNABLE与TIMED_WAITING状态转换")]),a._v(" "),t("p",[a._v("总体上可以分为五种场景。")]),a._v(" "),t("p",[t("strong",[a._v("场景一")])]),a._v(" "),t("p",[a._v("调用带超时参数的Thread.sleep(long millis)方法；")]),a._v(" "),t("p",[t("strong",[a._v("场景二")])]),a._v(" "),t("p",[a._v("获得synchronized隐式锁的线程，调用带超时参数的Object.wait(long timeout)参数；")]),a._v(" "),t("p",[t("strong",[a._v("场景三")])]),a._v(" "),t("p",[a._v("调用带超时参数的Thread.join(long millis)方法；")]),a._v(" "),t("p",[t("strong",[a._v("场景四")])]),a._v(" "),t("p",[a._v("调用带超时参数的LockSupport.parkNanos(Object blocker, long deadline)方法；")]),a._v(" "),t("p",[t("strong",[a._v("场景五")])]),a._v(" "),t("p",[a._v("调用带超时参数的LockSuppor.parkUntil(long deadline)方法。")]),a._v(" "),t("h3",{attrs:{id:"从new到runnable状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从new到runnable状态"}},[a._v("#")]),a._v(" 从NEW到RUNNABLE状态")]),a._v(" "),t("p",[a._v("Java刚创建出来的Thread对象就是NEW状态，创建Thread对象主要有两种方法，一种是继承Thread对象，重写run()方法；另一种是实现Runnable接口，重写run()方法。")]),a._v(" "),t("p",[t("strong",[a._v("注意：这里说的是创建Thread对象的方法，而不是创建线程的方法，创建线程的方法包含创建Thread对象的方法。")])]),a._v(" "),t("p",[t("strong",[a._v("继承Thread对象")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程中需要执行的逻辑")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),a._v(" childThread "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[t("strong",[a._v("实现Runnable接口")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程中需要执行的逻辑")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" childThread "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[t("strong",[a._v("处于NEW状态的线程不会被操作系统调度，因此也就不会执行。Java中的线程要执行，就需要转换到RUNNABLE状态。从NEW状态转换到RUNNABLE状态，只需要调用线程对象的start()方法即可。")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建线程对象")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" childThread "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ChildRunnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//调用start()方法使线程从NEW状态转换到RUNNABLE状态")]),a._v("\nchildThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"runnable到terminated状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runnable到terminated状态"}},[a._v("#")]),a._v(" RUNNABLE到TERMINATED状态")]),a._v(" "),t("p",[a._v("线程执行完run()方法后，或者执行run()方法的时候抛出异常，都会终止，此时为TERMINATED状态。如果我们需要中断run()方法，可以调用interrupt()方法。")]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"星球服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[a._v("#")]),a._v(" 星球服务")]),a._v(" "),t("p",[a._v("加入星球，你将获得：")]),a._v(" "),t("p",[a._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),a._v(" "),t("p",[a._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),a._v(" "),t("p",[a._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),a._v(" "),t("p",[a._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),a._v(" "),t("p",[a._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),a._v(" "),t("p",[a._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),a._v(" "),t("h2",{attrs:{id:"星球重磅福利"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[a._v("#")]),a._v(" 星球重磅福利")]),a._v(" "),t("p",[a._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),t("strong",[a._v("直接立减149元，相当于5折，")]),a._v(" 这已经是星球最大优惠力度！")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),a._v(" "),t("p",[t("strong",[a._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),a._v(" "),t("h2",{attrs:{id:"其他方式加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[a._v("#")]),a._v(" 其他方式加入星球")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("链接")]),a._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" 加入星球。")]),a._v(" "),t("li",[t("strong",[a._v("回复")]),a._v(" ：在公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 领取优惠券加入星球。")])]),a._v(" "),t("p",[t("strong",[a._v("特别提醒：")]),a._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[a._v("hacker_binghe")]),a._v(" 扫二维码，或者去公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 扫二维码加入星球。")]),a._v(" "),t("h2",{attrs:{id:"星球规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[a._v("#")]),a._v(" 星球规划")]),a._v(" "),t("p",[a._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),a._v(" "),t("h3",{attrs:{id:"中间件项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[a._v("#")]),a._v(" 中间件项目")]),a._v(" "),t("ul",[t("li",[a._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写Redis》：全程手撸代码。")]),a._v(" "),t("li",[a._v("《手写JVM》全程手撸代码。")])]),a._v(" "),t("h3",{attrs:{id:"超硬核项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[a._v("#")]),a._v(" 超硬核项目")]),a._v(" "),t("ul",[t("li",[a._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),t("strong",[a._v("已上新")]),a._v("）。")]),a._v(" "),t("li",[a._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),a._v(" "),t("li",[a._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),a._v(" "),t("p",[a._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),a._v(" "),t("p",[a._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),a._v(" "),t("h2",{attrs:{id:"联系冰河"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[a._v("#")]),a._v(" 联系冰河")]),a._v(" "),t("h3",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[a._v("#")]),a._v(" 加群交流")]),a._v(" "),t("p",[a._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[a._v("星球编号")]),a._v("。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("冰河微信")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[a._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),t("strong",[a._v("冰河技术")]),a._v(" 微信公众号首发，强烈建议大家关注。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("公众号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"视频号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[a._v("#")]),a._v(" 视频号")]),a._v(" "),t("p",[a._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("视频号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h3",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[a._v("#")]),a._v(" 星球")]),a._v(" "),t("p",[a._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[a._v("hacker_binghe")]),a._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[a._v("实战项目")]),a._v("！")]),a._v(" "),t("p",[a._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("公众号，回复 "),t("code",[a._v("星球")]),a._v(" 可以获取入场优惠券。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"18px"}},[a._v("知识星球：冰河技术")]),a._v(" "),t("br")])])}),[],!1,null,null,null);t.default=r.exports}}]);