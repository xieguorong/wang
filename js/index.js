$(function(){
    $(".xiaop>li").click(function(){
        var index=$(this).index();
        // alert(index)
        $(".erji").eq(index).animate({"height":"100%"});
    })
})