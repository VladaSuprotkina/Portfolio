$(document).ready(function(){
    $('.news_section_slider-wrapper').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
});
});
$('.nav-bar').on('click', function () {
    $(this).toggleClass('active-bar');
    $('.collapse').toggleClass('menu-open');
});

$('.nav a').on('click', function () {
    $('.menu').removeClass('active-bar');
    $('.collapse').removeClass('menu-open');
});
$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});