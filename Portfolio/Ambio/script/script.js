$(document).ready(function(){
    $('.news_section_slider-wrapper').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.menu-bar').on('click', function () {
        $('.nav-bar').toggleClass('active-bar');
        $('.collapse').toggleClass('menu-open');
    });

    $('.nav-bar_collapse > a').on('click', function () {
        $('.menu').removeClass('active-bar');
        $('.collapse').removeClass('menu-open');
    });
    $('.nav-item').on('click', function () {
        $(this).toggleClass('active');

    });
    $('.nav-item a').on('click', function () {
        $('.nav-item').removeClass('active');
    });

        $(document).scroll(function () {
            var $nav = $(".header_nav-bar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
});