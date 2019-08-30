var imagesArray = ['second-main.jpg', 'first-main.jpg'];
var currentImageIndex = 0;
var maxImageIndex = imagesArray.length;

setInterval(function(){
    var slideShowElement = $('.intro-section');
    var currentImageName = imagesArray[currentImageIndex];
    slideShowElement.css('background-image', 'url(img/bg/Rectangle.png), url(img/bg/' + currentImageName + ')');
    slideShowElement.focusin();
    currentImageIndex++;
    if(currentImageIndex == maxImageIndex) {
        currentImageIndex = 0;
    }
}, 5000);



var commentsArray = [{comment:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 1', author:'Liza Podliza, Amsterdam'}, {comment:'Lorem ipsum dolor sit amet, adipiscing elit. Aenean commodo ligula dolor. 2', author:'Vlada Dorada, IJ'}, {comment:'Lorem ipsum dolor sit amet, adipiscing elit. Aenean commodo ligula dolor. 3', author:'Meshok Kishok, Den Haag'}];
var currentCommentIndex = 0;
var maxCommentIndex = commentsArray.length;

$('[data-comment]').click(function(){
    var direction = $(this).attr('data-comment');
    if(direction == 'right'){
        currentCommentIndex++;
    }else{
        currentCommentIndex--;
    }
    
    if(currentCommentIndex < 0){
        currentCommentIndex = maxCommentIndex - 1;
    }
    
    if(currentCommentIndex == maxCommentIndex){
        currentCommentIndex = 0;
    }
    
    var currentComment = commentsArray[currentCommentIndex];
    
    $('.custom-section__review-text').find('p').html(currentComment.comment);
    $('.custom-section__review-text').find('cite').html(currentComment.author);
    
});
$('.sub-menu').on('click', function () {
    $('.header-section__navigation_sub-menu').toggleClass('open-menu');
});
$('.nav-bar_toggler').on('click', function () {
    $('.header-section__navigation-wrapper-mobile').toggleClass('active');
    $('.nav-bar_toggler-icon').toggleClass('active-nav-bar');
});
