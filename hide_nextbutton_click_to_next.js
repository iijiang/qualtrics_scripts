Qualtrics.SurveyEngine.addOnReady(function()
{
    jQuery('#NextButton').hide();
	
	var that = this;
    this.questionclick = function(event,element){
        if (element.type == 'radio')  {
           that.clickNextButton();
       }
   }

});
