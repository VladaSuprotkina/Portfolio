$(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
        $('.filter-simple-item').show('1000');
    } else {
        $(".filter-simple-item").not('.'+value).hide('3000');
        $('.filter-simple-item').filter('.'+value).show('3000');
    }
});
$('.filter-simple-button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
});