window.addEventListener('load', function() {
    // 左侧导航
    window.addEventListener('scroll', function() {
        let t = $('body, html').scrollTop(); // 目前监听的是整个body的滚动条距离
        if (t > 578) {
            $(".leftmenu").show().css("margin-top", "30px");
        } else {
            $(".leftmenu").hide();
        }
    })

    $(".leftmenu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })


    // 右侧导航
	// 回到顶部
    var Top = document.querySelector('.contact .Top');
    Top.addEventListener('click',function(){
        animate(window, 0)
    })
    
    function animate(obj, target, callback) {
        obj.time = setInterval(function() {
        callback && callback();
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (window.pageYOffset == target) {
        clearInterval(obj.time);
       }   
        window.scroll(0, window.pageYOffset + step)
        }, 30)
    }
})