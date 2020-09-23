window.addEventListener('load', function() {
    // 1.限时抢购
    // 倒计时   
    var hours1 = document.querySelector('.hours1');
    var minutes1 = document.querySelector('.minutes1');
    var seconds1 = document.querySelector('.seconds1');
    var inputTime = new Date('2020-8-28 24:00:00'); //返回的是用户输入时间总的毫秒数
    f()
    setInterval(f, 1000);

    function f() {
        var nowTime = new Date(); //返回的是当前时间总的毫秒数

        var times = (inputTime - nowTime) / 1000; //times是剩余时间总的秒数
        var h = parseInt(times / 60 / 60 % 24) //计算小时
        h = h < 10 ? '0' + h : h;
        hours1.innerHTML = h;
        var m = parseInt(times / 60 % 60) //计算分数
        m = m < 10 ? '0' + m : m;
        minutes1.innerHTML = m;
        var s = parseInt(times % 60) //计算当前的秒数
        s = s < 10 ? '0' + s : s;
        seconds1.innerHTML = s;
    }

    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        slidesPerView: 6,
        // spaceBetween: 1,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(function() {
        $(".content").on({
            mouseenter: function() {
                $(".swiper-button-next").show();
                $(".swiper-button-prev").show();
            },
            mouseleave: function() {
                $(".swiper-button-next").hide();
                $(".swiper-button-prev").hide();
            }
        })
    })

    // 2.重磅推荐 
    var underline = document.querySelector('.underline');
    var lis = document.querySelectorAll('.box .boxtop ul li');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(underline, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(underline, current + '500px');
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft;
        });
    }

    // 排行
    $(".box .boxtop ul li").click(function() {
        var index = $(this).index();
        $(".mook").eq(index).show().siblings().hide();
    })

    $(".mook ol li").mouseenter(function() {
        $(this).stop().animate({
            height: 110
        }).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn();
        $(this).siblings('li').stop().animate({
            height: 50
        }).find('.small').stop().fadeIn().siblings('.big').stop().fadeOut();
    })


    // 3.博库热推
    $(".book-rot li").click(function() {
        $(this).addClass("editGood").siblings().removeClass("editGood");
        $(this).children().css("color", "white");
        $(this).siblings().children('a').css("color", "black");
    })
    $(".book-rot2 li").click(function() {
        $(this).addClass("new").siblings().removeClass("new");
        $(this).children().css("color", "white");
        $(this).siblings().children('a').css("color", "black");
    })
    $(".book-rot3 li").click(function() {
        $(this).addClass("classify1").siblings().removeClass("classify1");
        $(this).children().css("color", "white");
        $(this).siblings().children('a').css("color", "black");
    })
	
	
	
	//	4.人气作家
	$(".popularT .col .edit1 li").click(function(){
		var index = $(this).index();
		console.log(index);
		$(".popularB .row2").eq(index).show().siblings().hide();
	})
})