$(function () {
    var index = 0;
    var time = 0;
    var goIndex = function () {
        $(".item").eq(index).addClass("imgcurrent").fadeIn().siblings().removeClass("imgcurrent").fadeOut();
        $(".radius").eq(index).addClass("pointcurrent").siblings().removeClass("pointcurrent");
    }
    var goRight = function () {
        index == 2 ? index = 0 : index++;
        goIndex();
    }
    // 向右绑定点击事件
    $(".right").on("click", function () {
        goRight();
        time = 0;
    })
    var goLeft = function () {
        index == 0 ? index = 2 : index--;
        goIndex();
    }
    // 向左绑定点击事件
    $(".left").on("click", function () {
        goLeft();
        time = 0;
    })
    // 点击事件
    $(".radius").on("click", function () {
        index = this.getAttribute('index');
        goIndex();
        time = 0;
    })
    // 自动播放
    var timer;
    function play() {
        timer = setInterval(function () {
            time++;
            if (time == 10) {
                goRight();
                time = 0;
            }
        }, 100)
    }
    play();
    // 移入鼠标
    $(".box").on("mouseover", function () {
        clearInterval(timer);
    })
    // 移除鼠标
    $(".box").on("mouseleave", function () {
        play();
    })
})