$(function () {
    var index = window.location.href.split("/").length-1;
    var href = window.location.href.split("/")[index].substr(0,3);

    $(".nav_con li a[href^='"+href+"']").addClass("on");

    //线移动，初始值
    var li_width = $(".nav_con li a.on").outerWidth();//当前页面a的宽度
    var li_left = $(".nav_con li a.on").position().left;
    $(".nav_con .line").css({width:li_width,left:li_left})

    $(".nav_con li").hover(function () {
        var li_width = $(this).outerWidth();
        var li_left = $(this).position().left;
       // $(".nav_con .line").css({width:li_width,left:li_left})
        $(".nav_con .line").stop().animate({width:li_width,left:li_left},{duration:1500,easing:"easeOutElastic"})

    },function () {
        //返回初始值
        $(".nav_con .line").stop().animate({width:li_width,left:li_left},{duration:1500,easing:"easeOutElastic"})
    });

});