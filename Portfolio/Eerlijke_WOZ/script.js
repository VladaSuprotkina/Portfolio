var imagesArray = ['second-main.jpg', 'first-main.jpg'];
var currentImageIndex = 0;
var maxImageIndex = imagesArray.length;

setInterval(function(){
    var slideShowElement = $('.top-slide');
    var currentImageName = imagesArray[currentImageIndex];
    slideShowElement.css('background-image', 'url(img/bg/Rectangle.png), url(img/bg/' + currentImageName + ')');
    slideShowElement.focusin();
    currentImageIndex++;
    if(currentImageIndex == maxImageIndex) {
        currentImageIndex = 0;
    }
}, 5000);



var commentsArray = [{comment:'lorem ipsum 1', author:'Liza Podliza, Amsterdam'}, {comment:'lorem ipsum 2', author:'Vlada Dorada, IJ'}, {comment:'lorem ipsum 3', author:'Meshok Kishok, Den Haag'}];
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
    
    $('.reviews').find('p').html(currentComment.comment);
    $('.reviews').find('span').html(currentComment.author);
    
});