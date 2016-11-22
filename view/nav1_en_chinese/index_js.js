$(function () {

    $(".list a").hover(function () {
        // .stop 结束动画
        $(this).stop().animate({"margin-top":-40},300);
    },function () {
        $(this).stop().animate({"margin-top":0},300);
    });
});