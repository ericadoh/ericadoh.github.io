//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('#submit-button').hover(function(){
        $(this).css("color","#42744D");
        $(this).css("border-color","#42744D");
    },function(){
        $(this).css("color","#EC5536");
        $(this).css("border-color","#EC5536");
    });
});

/* */

var $logo = $('.navbar');
$(document).scroll(function() {
    $logo.css({background: $(this).scrollTop() > $( window ).height()? "white":"transparent"});
    $logo.css({"-webkit-box-shadow": $(this).scrollTop() > $( window ).height()? "0px 2px 3px 0px rgba(0,0,0,0.25)":"none"});
});