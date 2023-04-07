var vue=new Vue({
    el:"#container",
    data:{
        title:"Main",	// 网页标题
        visibilityChange:"Wait···",	// 网页隐藏后标题内容
        bigSize:1200,	// 博客主体大小 单位为 px
        mediumSize:1000,	// 单位为 px
        smallSize:800,
        blogName:'demo', // 博客名
        isLoading:true,
        loginPop:false,
        outLoginBar:false,
        loginBarIndex:0,    // 0 登录 1 注册
        profileHeadRef:'res/profile.png',
        rightNavIndex: 0,
        cartoonProfile:['img/eagle.svg','img/dolphin.svg','img/penguin.svg','img/crab.svg','img/chicken.svg'],
        hotBlogInfo:[{'brief':'This\'s a demo····','view':'1902'},{'brief':'This\'s a demo····','view':'932'},{'brief':'This\'s a demo····','view':'632'},{'brief':'This\'s a demo····','view':'422'},{'brief':'This\'s a demo····','view':'192'}],
        brief:"欢迎来到这里···",	// 引言
        carouselRes:["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png"], // 滚动图展示内容
        carouselIndex:0,
        carouselWidth:undefined,
        carouselFrequency:3000, // 滚动图单张展示时间 单位 ms
        blogRes:[{'title':'Title','brief':'This\'s a demo. ','username':'demo','time':'2022年3月8日','comment':'1234条评论'}],
        blogStyle:"",
        blogInfo:{'articleNumber':1,'commentNumber':0,'workingTime':'54','lastest':'今天'},
        pageIndexRef:["1.html"],
        pageIndexCurrent:0,
        leftAsideState:true,
        contentType: 1, // 0 代表博客列表 1 代表文章
        content :
            '# This\'s a demo\n' +
            '## subtitle\n' +
            '---\n' +
            '**加粗**\n' +
            '~~删除线~~'
    },
    methods:{
        loginPopup:function () {
            this.loginPop = !this.loginPop;
        },
        loginBlurring:function () {
            this.outLoginBar = true;
        },
        loginFocusing:function () {
            this.outLoginBar = false;
        },
        loginBarSelect:function (index) {
            this.loginBarIndex = index;
        },
        carousel:function (index){
            this.carouselIndex = index;
        },
        carouselClock:function(){
            if(this.carouselIndex == (this.carouselRes.length - 1))
                this.carouselIndex = 0;
            else
                this.carouselIndex += 1;
        },
        pageChange:function (index){
            this.pageIndexCurrent = index;
        },
        leftAsideToggle:function (toOpen) {  //  true  开; false 关
            if ("boolean" !== typeof toOpen) return;
            if(toOpen !== this.leftAsideState) {
                let asideObj = document.getElementById("aside-left");
                if (toOpen) {
                    asideObj.style.animation = "disappear .3s reverse forwards";
                    asideObj.style.display = "";
                    this.leftAsideState = true;
                } else {
                    asideObj.style.animation = "disappear .3s forwards";
                    this.leftAsideState = false;
                }
            }
        },
        // 矫正 blog大小
        resizeBlog: function(){
            let containerSize = "";
            let navBarSize = "";
            let asideRightDisplay = "";
            let contentMarginRight = "";
            let mainMarginLeft = "";
            if ( window.innerWidth < (this.smallSize + 100) ){
                mainMarginLeft = "0px";
                contentMarginRight = "0px";
                asideRightDisplay = "none";
                navBarSize = "100vw"
                this.leftAsideToggle(false);
            }else if(window.innerWidth < (this.mediumSize + 160)){
                containerSize = this.smallSize + "px";
                navBarSize = this.smallSize + "px";
                asideRightDisplay = "none";
                contentMarginRight = 0;
                this.leftAsideToggle(true);
            }else if (window.innerWidth < (this.bigSize + 200)){
                containerSize = this.mediumSize + "px";
                navBarSize = this.mediumSize + "px";
                this.leftAsideToggle(true);
            }else{
                containerSize = this.bigSize + "px";
                navBarSize = this.bigSize + "px";
                this.leftAsideToggle(true);
            }
            document.getElementById("container").style.width = containerSize;
            document.getElementById("nav-bar").style.width = navBarSize;
            document.getElementById("aside-right").style.display = asideRightDisplay;
            document.getElementsByTagName("main")[0].style.marginLeft = mainMarginLeft;
            if( this.contentType === 0 ) document.getElementById("content").style.marginRight = contentMarginRight;
        },
        monitorContentType: function (newValue,oldValue){
            if (newValue === 1){
                document.getElementById('article').innerHTML = marked.Parser.parse((new marked.Lexer()).lex(this.content));
            }
        }
    },
    watch:{
        'contentType' : this.monitorContentType

    },
    created(){

    },
    mounted(){
        let vue = this;
        if( this.contentType === 0 ) {
            let carouselClock = setInterval(vue.carouselClock, vue.carouselFrequency);
            let carousel = document.getElementById("carousel");
            carousel.onmouseover = function () {
                clearInterval(carouselClock);
            };
            carousel.onmouseout = function () {
                carouselClock = setInterval(vue.carouselClock, vue.carouselFrequency);
            };

            // 设置滚屏指示器的宽度
            this.carouselWidth = (this.carouselRes.length - 1) * (14 + 6) + 24 + 6 * 2;
            document.getElementById("carousel-indicator").style.width = (this.carouselWidth) + 'px';
        }
        // 重置 blog大小
        this.resizeBlog();
        // 查看内容类型
        this.monitorContentType(this.contentType,this.contentType);
    }
});

// 监听left aside的动画执行情况 用于构成消失动画
document.getElementById("aside-left").addEventListener("animationend",(event)=>{
    if(vue.leftAsideState)
        event.target.style.animation = "";
    else
        event.target.style.display = "none";
});

// 监听是否触发login-bar 触发的同时让其获取到焦点
// new MutationObserver((mutations) => {
//     if(vue.loginPop) document.getElementById("login-bar").focus();
// }).observe(document.getElementById("login-bar"),{attributeFilter:['style']});

// 监听 滚动图窗口的大小 用于适配 滚动图的指示器
// new ResizeObserver(entry =>{
//     document.getElementById("carousel-indicator").style.left = Math.round((entry[0].contentRect.width - vue.carouselWidth) / 2) + "px";
// }).observe(document.getElementById("carousel-indicator").parentElement);

if (vue.contentType === 0) {
    // 监听 博客标签的大小 用于适配博客大小
    new ResizeObserver(entry => {
        let itemList = document.getElementsByClassName("blog-item");
        if (itemList.length > 0) {
            let height = itemList[0].offsetHeight;
            let width = entry[0].contentRect.width;
            if ((width * 3 < height * 4) || (width * 3 > height * 5)) {
                vue.blogStyle = "height: " + Math.round(width * 2 / 3) + "px;";
            }
        }
        document.getElementById("carousel-indicator").style.left = Math.round((entry[0].contentRect.width - vue.carouselWidth) / 2) + "px";
    }).observe(document.getElementById("carousel"));
}

// 屏幕大小改变重新渲染canvas
new ResizeObserver(entry =>{
    canWidth = entry[0].contentRect.width;
    canHeight = entry[0].contentRect.height;
    let obj = document.getElementById("canvas");
    obj.setAttribute("width",canWidth);
    obj.setAttribute("height",canHeight);
}).observe(document.getElementById("canvas"));

// 监听 DOM 所有的 click 事件
document.onclick = function () {
    // 监听是否退出login-bar
    if(vue.outLoginBar && vue.loginPop) vue.loginPop=false;
}

// 初始化 网页标题
document.title = vue.title;
// 网页焦点监听
document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) {
        //失去焦点
        document.title = vue.visibilityChange;
    }
    else {
        //未失去焦点
        document.title = vue.title;
    }
});
// 监听窗口的大小 用于 同步适配Blog
window.addEventListener("resize",vue.resizeBlog);

// 加载一些必须资源
(function resourceLoading(){
    setTimeout(()=>vue.isLoading = false,3000);
})();