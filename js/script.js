$(function(){
    
    $('div.awsemoe img').mousemove(function(){
        $('.overlay').hide();
    });
    
    $('.first').click(function(){
        $('.f1 .one').show().siblings().hide();
    });
    
     $('.second').click(function(){
        $('.f1 .two').show().siblings().hide();
    });
    
    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 500)
        {
            $('.header').slideDown();
        }
        else
        {
            $('.header').slideUp();
        }
    });
    
    $(".fancybox").fancybox();
    
    
    $('.one').css('display','block');
    
    $('div.acordion h3').click(function(){
        
        $(this).next().slideToggle();
        $("div.acordion p").not($(this).next()).slideUp();
        
        
    });
    
    $('.download').click(function(){
            $('.timer').countTo();
        });
     
    $('.All_Images').mixItUp();
    
    
    $("html").niceScroll();
    
     
    
 
});