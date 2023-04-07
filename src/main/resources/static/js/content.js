var vue=new Vue({
    el: "#container",
    data: {
        profile:'res/profile.png',
        navIndex: 0,
        total: 1,
        public: 1,
        private: 0,
        auditing: 0,
        draft: 0,
        recycling: 0,
        filterIndex: 0,
        blog:[{'title':'title','date':'2021年10月21日','type':'原创','view':123,'read':2360,'comment':342,'collect':234}]
    }
});

document.addEventListener('visibilitychange', function () {
    var isHidden = document.hidden;
    if (isHidden) document.title = '内容管理 | waiting';
    else document.title = '内容管理';
});