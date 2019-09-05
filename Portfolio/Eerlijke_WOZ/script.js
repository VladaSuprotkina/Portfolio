$(document).ready(function(){
    $('.custom-section__review-slider').slick({
        nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>'

    });
    $('.sub-menu').on('click', function () {
        $('.header-section__navigation_sub-menu').toggleClass('open-menu');
    });
    $('.nav-bar_toggler').on('click', function () {
        $('.header-section__navigation-wrapper').toggleClass('active');
        $('.nav-bar_toggler-icon').toggleClass('active-nav-bar');
    });
});

