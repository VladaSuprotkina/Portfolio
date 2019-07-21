$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

$('.read-more-show').on('click', function(e) {
    $(this).next('.read-more-content').removeClass('hide');
    $(this).addClass('hide');
    e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
    var p = $(this).parent('.read-more-content');
    p.addClass('hide');
    p.prev('.read-more-show').removeClass('hide');
    e.preventDefault();
});

$(document).ready(function(){
    let slider = $('.top-slider'); 
    
    let slidesCount = 1;
    let currentSlide = 1;
    
    let sliderCounterElement = document.createElement('div');
    sliderCounterElement.classList.add('slider-counter');
    
//    let sliderCurrentSlideElement = document.createElement('div');
//    sliderCurrentSlideElement.classList.add('slider-counter-current');
//    
//    let sliderImageElement = document.createElement('div');
//    sliderImageElement.classList.add('slider-counter-image');
//    
//    let sliderCounterTotalElement = document.createElement('div');
//    sliderCounterTotalElement.classList.add('slider-counter-total');
//    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        $(sliderCounterElement).text(currentSlide + '/' + slidesCount);
    };
    
    slider.on('init', function(event, slick) {
        slider.append(sliderCounterElement);
        slidesCount = slick.slideCount;
        updateSliderCounter(slick);
    });
    
    slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });
    
    slider.slick();
});