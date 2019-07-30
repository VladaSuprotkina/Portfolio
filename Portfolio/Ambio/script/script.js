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
// init = function(){
//     var jarallax = new Jarallax();
//     jarallax.addAnimation('.header_parallax-element',[{progress:'0%',bottom:'0%'},
//         {progress:'100%', bottom:'50%'}]);
// };
//jarallax(document.querySelectorAll('.header_parallax-element'), {
//    onScroll: function(calculations) {
//        console.log(calculations);
//    }
//});