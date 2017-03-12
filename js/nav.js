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

$(function(){
    $.ajax({
        url:'/test',
        success:function (data) {
            console.log(arguments)
        },
        error:function (jqXHR,textStatus,err) {
            //jqXHR jquery增强的xhr
            //textStatus，请求完成状态
            //err错误信息
        },
        complete:function (jqXHR,textStatus) {
            
        },
        statusCode:{ //成员是对象
            '403':function (jqXHR,textStatus,err) {
                
            },
            '400':function () {
                
            }
            
        }
        


    });




})

