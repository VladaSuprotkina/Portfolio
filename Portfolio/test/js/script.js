$('[data-survey-step] button').click(function(e){
    e.preventDefault();

    var stepBlock = $(this).parent('[data-survey-step]'); 
    stepBlock.hide();

    var currentStep = +stepBlock.attr('data-survey-step');
    var nextStep = currentStep == 4 ? 1 : currentStep + 1;

    $(`[data-survey-step=${nextStep}]`).show(handleThirdStepTimeout);
});

function handleThirdStepTimeout(){
    if($(this).attr('data-survey-step') == 3){
        var that = this;
        setTimeout(function(){
            $(that).hide();
            $('[data-survey-step=4]').show();
        }, 3000);
    }
};