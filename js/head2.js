window.addEventListener('load', function() {
    // 我的博库
    function show() {
        $("#order").show();
        $('.myboku').css({
            "backgroundColor": "#fff",
            "border": "1px solid #ccc",
            "borderBottom": "none"
        })
    }

    function hide() {
        $("#order").hide();
        $(".myboku").css({
            "backgroundColor": "#f5f5f5",
            "border": "none"
        })
    }
    $('.myboku').mouseenter(function() {
        show();
        $('#order').mouseenter(function() {
            show();
        })
    })
    $('.myboku').mouseleave(function() {
        hide();
        $('#order').mouseleave(function() {
            hide();
        })
    })

    // 导航固定
    var nav1 = document.querySelector('.search-flow');
    window.addEventListener('scroll', function() {
        let t = $('body, html').scrollTop(); // 目前监听的是整个body的滚动条距离
        if (t > 78) {
            $('.search-flow').addClass('menu-active');
            $(".classify").addClass('change')
        } else {
            $('.search-flow').removeClass('menu-active');
            $(".classify").removeClass('change')
        }
    })

    // 商品分类显示效果
    var index, that;

    function f() {
        $(that).css("background-color", "white");
        $(that).children("span").css("color", "black");
        $(that).children("a").css("color", "black");
        $(that).children("a").children("i").css("color", "black");
        $(".classify .itemLeft .class-item").eq(index).show().siblings().hide();
        $(".classify .items .lenter").show()
    }

    function f1() {
        $(that).css("background-color", "rgba(76, 76, 76, 0)");
        $(that).children("span").css("color", "white");
        $(that).children("a").css("color", "white");
        $(that).children("a").children("i").css("color", "white");
        $(".classify .itemLeft .class-item").hide();
        $(".classify .items .lenter").hide()
    }

    $(".classify .items-m").on({
        mouseenter: function() {
            $(this).siblings('.lenter').show();
            $(".classify .items .lenter").mouseenter(function() {
                $(this).show();
                $(".classify .items .lenter li").on({
                    mouseenter: function() {
                        index = $(this).index();
                        that = this;
                        f();
                        $(".classify .itemLeft .class-item").mouseenter(function() {
                            f();
                        })
                    },
                    mouseleave: function() {
                        f1();
                        $(".classify .itemLeft .class-item").mouseleave(function() {
                            f1();
                        })
                    },
                })
            })
        },
        mouseleave: function() {
            $(this).siblings('.lenter').hide();
            $(".classify .items .lenter").mouseleave(function() {
                $(this).hide();
            })
        }
    })
})