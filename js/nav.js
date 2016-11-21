/**
 * Created by Administrator on 2016/11/21.
 */
$(function () {
    var index = window.location.href.split("/").length-1;
    var href = window.location.href.split("/")[index];
    if(href>0){
        $(".list li a[href^='" + href + "']").addClass("on");
    }else{
        // $(".list li a[href^='index']").addClass("on");
    }
})
