$(function(){
    //jQuery代码
    $("div").bind("u", function () {
        $(this).append("<b>那是我逝去的青春</b>");
    });
    //任务
    $("div").trigger("u");
});
