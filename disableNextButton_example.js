//create Qualtrics.SurveyEngine.QuestionData object
Qualtrics.SurveyEngine.addOnload(function ()
{
    //disables the next button on the page
    this.disableNextButton();
    //question click is a simple onclick handler
    //attached to the question's container div
    this.questionclick = function(event,element)
    {
        //by default you get the click event as the first parameter and the clicked element as the second parameter
        console.log(event, element);
        if (element.type == 'radio')
        {
            var choiceNum = element.id.split('~')[2];
            alert('You clicked on choice '+choiceNum);
            if (choiceNum == 2)
            {
                //enables the next button - Note that the QuestionData object is bound to this to make it easier to use
                this.enableNextButton();
            }
            else
            {
                //disables the next button
                this.disableNextButton();
            }
        }
    }
});
