$(function(){
    'use strict'; 
    /*Nav bar */
    $(".nav-item").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    /*Scroll to section*/
    $(".nav-link").click(function(){
        $("body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top},1000);
    })
    
    /*scroll to next section*/
    $(".arrow").click(function(){
        $("body").animate({scrollTop:$(".features").offset().top},1000)
    });
    
    $(".show-more").click(function(){
        $(".hide").fadeToggle(1000);
    });
    
    /*Slider*/
    
    function slide(){
        $(".client:first").hasClass("show") ? $(".fa-angle-left").fadeOut() : $(".fa-angle-left").fadeIn();
        $(".client:last").hasClass("show") ? $(".fa-angle-right").fadeOut():$(".fa-angle-right").fadeIn();
    }
    slide();
    $("#testmonial i").click(function(){
        if($(this).hasClass("fa-angle-right"))
            {
                $("#testmonial .show").fadeOut(1000,function(){
                    $(this).removeClass("show").next(".client").addClass("show").fadeIn(1000);
                     slide();
                    
                })
               
            }
        else
            {
                $("#testmonial .show").fadeOut(1000,function(){
                    $(this).removeClass("show").prev(".client").addClass("show").fadeIn(1000);
                    slide();
                }) 
            }
        
    })
    
})






