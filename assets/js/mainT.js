window.onload = function() {
    setTimeout(function() {$("#loading").fadeOut(1000)}, 2000);
};
$(document).ready(function(){
    $("#logo").mouseenter(function() {$("#header_logo").animate({left: '50px'}, 1000)});
    $("#logo").mouseenter(function() {$("#header_logotxt").fadeIn (2500)});
    $("#logo").mouseleave(function() {$("#header_logotxt").hide()});
    $("#logo").mouseleave(function() {$("#header_logo").animate({left: '0px'}, 1000)});
    if(document.documentElement.clientWidth>1138){
    $("#search").focusin(function() {$("#search-box").css("width","235px")});
    $("#search").focusin(function() {$("#search").css("width","200px")});
    $("#search").focusout(function() {$("#search-box").css("width","145px")});
    $("#search").focusout(function(){$("#search").css("width","110px")});
    };
    if(document.documentElement.clientWidth<995){
    $('.nav').css("display","none");
    $('.menu-icon-wrapper').click(function(){document.querySelector('.menu-icon').classList.toggle('menu-icon-active');$(".nav").slideToggle(500)});
    };

    $(".modal").each( function(){
        $(this).wrap('<div class="overlay"></div>')
    });
    
    $(".open-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).parents(".overlay").addClass("open");
        setTimeout( function(){
            $(modal).addClass("open");
        }, 350);
        
        $(document).on('click', function(e){
            var target = $(e.target);
            
            if ($(target).hasClass("overlay")){
                $(target).find(".modal").each( function(){
                    $(this).removeClass("open");
                });
                setTimeout( function(){
                    $(target).removeClass("open");
                }, 350);
            }
            
        });
        
    });
    
    $(".close-modal").on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation;
        
        var $this = $(this),
                modal = $($this).data("modal");
        
        $(modal).removeClass("open");
        setTimeout( function(){ 
            $(modal).parents(".overlay").removeClass("open");
        }, 350);
        
    }); 

//Что--------------------------
     var $slider = $('.slideshow .slider'),
      maxItems = $('.item', $slider).length,
      dragging = false,
      tracking,
      rightTracking;
    
    $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));
    
    rightItems = $('.item', $sliderRight).toArray();
    reverseItems = rightItems.reverse();
    $('.slider', $sliderRight).html('');
    for (i = 0; i < maxItems; i++) {
      $(reverseItems[i]).appendTo($('.slider', $sliderRight));
    }
    
    $slider.addClass('slideshow-left');
    $('.slideshow-left').slick({
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      infinite: true,
      dots: true,
      speed: 1000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    
      if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', -1);
        $('.slideshow-text').slick('slickGoTo', maxItems);
      } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems);
        $('.slideshow-text').slick('slickGoTo', -1);
      } else {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.slideshow-text').slick('slickGoTo', nextSlide);
      }
    }).on("mousewheel", function(event) {
      event.preventDefault();
      if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slick('slickNext');
      } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slick('slickPrev');
      };
    }).on('mousedown touchstart', function(){
      dragging = true;
      tracking = $('.slick-track', $slider).css('transform');
      tracking = parseInt(tracking.split(',')[5]);
      rightTracking = $('.slideshow-right .slick-track').css('transform');
      rightTracking = parseInt(rightTracking.split(',')[5]);
    }).on('mousemove touchmove', function(){
      if (dragging) {
        newTracking = $('.slideshow-left .slick-track').css('transform');
        newTracking = parseInt(newTracking.split(',')[5]);
        diffTracking = newTracking - tracking;
        $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
      }
    }).on('mouseleave touchend mouseup', function(){
      dragging = false;
    });
    
    $('.slideshow-right .slider').slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 950,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      initialSlide: maxItems - 1
    });
    $('.slideshow-text').slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 900,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    });
    

})