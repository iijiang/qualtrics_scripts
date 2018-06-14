Qualtrics.SurveyEngine.addOnload(function()
{
  //disables the next button on the page
  this.hideNextButton ()
  //question click is a simple onclick handler
  //attached to the question's container div
  this.questionclick = function(event,element)
  {
    //by default you get the click event as the first parameter and the clicked element as the second parameter
    console.log(event);
    console.log(element)
    if (element.type == 'radio')
    {
      var that = this;
      if (event.clientX > 0) {
      (function(){that.clickNextButton();}).delay(1);
      } else {
      //Keyboard behariour.	
      (function(){that.clickNextButton();}).delay(5);
      }
    }
  }
});
