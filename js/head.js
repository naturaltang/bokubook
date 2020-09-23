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
        $(that).children("a i").css("color", "black");
        $(".classify .itemLeft .class-item").eq(index).show().siblings().hide();
    }

    function f1() {
        $(that).css("background-color", "rgba(76, 76, 76, 0)");
        $(that).children("span").css("color", "white");
        $(that).children("a").css("color", "white");
        $(that).children("a i").css("color", "white");
        $(".classify .itemLeft .class-item").hide();
    }
    $(".classify .items ul li").on({
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


    // 轮播图
    // 鼠标移到图片上 按钮就出现
    $(".rotationFigure").mouseenter(function() {
        $(".rotationFigure #al1").show();
        $(".rotationFigure #ar1").show();
        clearInterval(time);
        time = null;
    })
    $(".rotationFigure").mouseleave(function() {
        $(".rotationFigure #al1").hide();
        $(".rotationFigure #ar1").hide();
        time = setInterval(function() {
            $(".rotationFigure #ar1").click();
        }, 1000)
    })

    //变量
    var num = 0;
    var circle = 0;
    var flag = true; //定义节流闸

    // 根据图片的个数动态生成小圆圈
    var ul = document.querySelector('.rotationFigure ul');
    var ol = document.querySelector('.rotationFigure ol');
    var rotationFigure = document.querySelector('.rotationFigure');

    var rotationFigureWidth = rotationFigure.offsetWidth;

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 在生成小li的同时  获取li索引号
        li.setAttribute('index', i);

        ol.appendChild(li);
        //点击生成的小圆圈 图片轮播
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            // 点击小li   获取其索引号
            var index = this.getAttribute('index');
            num = index;
            circle = index;

            animate(ul, -index * rotationFigureWidth);
        })
    }
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击按钮 图片轮播
    // 左按钮
    $(".rotationFigure #al1").click(function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * rotationFigureWidth + 'px';
            }
            num--;
            animate(ul, -num * rotationFigureWidth, function() {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? (ol.children.length - 1) : circle;

            circleChange();
        }
    })

    //右按钮
    $(".rotationFigure #ar1").click(function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * rotationFigureWidth, function() {
                flag = true;
            });
            circle++;
            circle = (circle == ol.children.length) ? 0 : circle;
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var time = setInterval(function() {
        $(".rotationFigure #ar1").click();
    }, 3000)
})