$('.gallery_list li a').click(function(){
    $(this).parent().addClass('on').siblings().removeClass('on')
});

$('.ham').click(function(){
    $('.menu').css("display","block")
})

$('.menu_close').click(function(){
    $('.menu').css("display","none")
})

$(window).resize(function(){
    if(window.innerWidth > 1200){
        $('.menu').css("display","none")
    }
})

$('.menu_list li a').click(function(){
    $('.menu').css("display", "none")
})