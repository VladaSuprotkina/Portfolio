$(document).ready(function(){
    $('.hero-section__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
});
    $('.recipes-section__slider').slick({
        // centerMode: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 5000
    });
});