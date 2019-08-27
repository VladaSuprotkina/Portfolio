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
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.nav-bar_toggler').on('click', function () {
        $('.nav-bar_toggler-icon').toggleClass('active-nav-bar');
        $('.open').toggleClass('open-menu');
    });
    $(document).scroll(function () {
        var $nav = $(".header-section");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});