(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(v,e,a){"use strict";a.r(e);var t=a(40),_=Object(t.a)({},function(){var v=this,e=v.$createElement,a=v._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"vim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim","aria-hidden":"true"}},[v._v("#")]),v._v(" Vim")]),v._v(" "),a("p",[v._v("不多介绍，*nix系统内置的编辑器。深受众多程序员喜爱，但上手难度偏高。大部分人只会一些简单的命令，vim的强大之处以及功能是一篇文章不可能介绍完的，这里只介绍一些比较简单但是实用的功能。在远程部署机上没有GUI的时候只能使用vim，所以懂得一些vim的基本操作还是很有必要的。")]),v._v(" "),a("h2",{attrs:{id:"在终端里使用vi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在终端里使用vi","aria-hidden":"true"}},[v._v("#")]),v._v(" 在终端里使用vi")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("$ set -o vi\n")])])]),a("p",[v._v("然后就可以在终端里，以vi的方式对命令进行操作，非常方便。")]),v._v(" "),a("h2",{attrs:{id:"快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键","aria-hidden":"true"}},[v._v("#")]),v._v(" 快捷键")]),v._v(" "),a("p",[v._v("毫无疑问，必须掌握，不过确实部分快捷键比较反人类。vim的快捷键数量众多，和Chrome一样，我们只需要记住使用最常见的就足够了。")]),v._v(" "),a("ul",[a("li",[a("code",[v._v(":wq")]),v._v(" 退出vim。stackoverflow每日搜索次数第一问题，如何退出vim:)")]),v._v(" "),a("li",[a("code",[v._v("i")]),v._v(" 进入插入模式")]),v._v(" "),a("li",[a("code",[v._v("q")]),v._v(" 进入可视模式，可以用光标来选择文本")]),v._v(" "),a("li",[a("code",[v._v("jk")]),v._v(" 上下移动")]),v._v(" "),a("li",[a("code",[v._v("hl")]),v._v(" 左右移动")]),v._v(" "),a("li",[a("code",[v._v("ctrl")]),v._v(" + "),a("code",[v._v("b/f")]),v._v(" 上下翻页")]),v._v(" "),a("li",[a("code",[v._v("0/$")]),v._v(" 光标快速移动到行首／行尾")]),v._v(" "),a("li",[a("code",[v._v("/")]),v._v(" 搜索")]),v._v(" "),a("li",[a("code",[v._v("n/N")]),v._v(" 跳转到下一个／上一个 搜索词")]),v._v(" "),a("li",[a("code",[v._v(":s/old/new/g")]),v._v(" 单行替换")]),v._v(" "),a("li",[a("code",[v._v(":%s/old/new/g")]),v._v(" 全局替换")])]),v._v(" "),a("h2",{attrs:{id:"janus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#janus","aria-hidden":"true"}},[v._v("#")]),v._v(" janus")]),v._v(" "),a("p",[v._v("使用vim几乎是必须要装插件的，插件屏蔽了vim的一些底层配置，来让我们使用的更加舒服。比如"),a("a",{attrs:{href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"}},[v._v("NerdTree"),a("OutboundLink")],1),v._v("这个查看当前目录文件的插件几乎是必装的。这里我们推荐直接使用"),a("a",{attrs:{href:"https://github.com/carlhuda/janus",target:"_blank",rel:"noopener noreferrer"}},[v._v("janus"),a("OutboundLink")],1),v._v("这个扩展包，其中内置了多种实用插件，无需我们手动去一个一个安装。")]),v._v(" "),a("h3",{attrs:{id:"安装janus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装janus","aria-hidden":"true"}},[v._v("#")]),v._v(" 安装janus")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("$ curl -L https://bit.ly/janus-bootstrap | bash\n")])])]),a("h3",{attrs:{id:"使用janus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用janus","aria-hidden":"true"}},[v._v("#")]),v._v(" 使用janus")]),v._v(" "),a("p",[v._v("这里来说以下个人喜欢的janus的功能")]),v._v(" "),a("ul",[a("li",[v._v("显示行号")]),v._v(" "),a("li",[v._v("文本高亮, 搜索高亮")]),v._v(" "),a("li",[v._v("句尾显示.号")]),v._v(" "),a("li",[v._v("轻松切换多种显示方式，水平显示 or 垂直显示")])]),v._v(" "),a("p",[v._v("展示效果")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/190jJWM/20190710231451.jpg",alt:""}})]),v._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件","aria-hidden":"true"}},[v._v("#")]),v._v(" 插件")]),v._v(" "),a("p",[v._v("下面来介绍常用插件")]),v._v(" "),a("h3",{attrs:{id:"nerdtree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nerdtree","aria-hidden":"true"}},[v._v("#")]),v._v(" NERDTree")]),v._v(" "),a("p",[v._v("类似于编辑器的形式来便于你查看当前文件夹，在"),a("code",[v._v("~/.vimrc")]),v._v("中添加以下设置来通过"),a("code",[v._v("F2")]),v._v("启动NERDTree")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("$ vim ~/.vimrc\n\n25 map <F2> :NERDTreeToggle<CR>\n")])])]),a("p",[v._v("在当前文件使用"),a("code",[v._v("F2")]),v._v("或者"),a("code",[v._v(":n")]),v._v("来切换为NERDTree显示模式，或者直接使用"),a("code",[v._v("vim")]),v._v("来打开一个文件夹")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://i.ibb.co/3zh603d/20190710231845.jpg",alt:""}})]),v._v(" "),a("p",[v._v("快捷键")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("ctrl")]),v._v(" + "),a("code",[v._v("w")]),v._v(" + "),a("code",[v._v("h/l")]),v._v(" 光标在左／右窗口互相切换")]),v._v(" "),a("li",[a("code",[v._v("ctrl")]),v._v(" + "),a("code",[v._v("w")]),v._v(" + "),a("code",[v._v("w")]),v._v(" 光标自动切换")]),v._v(" "),a("li",[a("code",[v._v("o/go")]),v._v(" 在当前tab打开文件, 是否跳到该窗口")]),v._v(" "),a("li",[a("code",[v._v("t")]),v._v(" 在新Tab打开文件")])])])},[],!1,null,null,null);e.default=_.exports}}]);