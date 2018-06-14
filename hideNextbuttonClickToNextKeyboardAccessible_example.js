Qualtrics.SurveyEngine.addOnload(function() {
  this.hideNextButton();
  //this.hidePreviousButton();
  var that = this;
  this.questionclick = function(event,element) {
  //by default you get the click event as the first parameter and the clicked element as the second parameter
  //console.log(event);
  //console.log(element)
  if (element.type == 'radio') {
    var that = this;
    if (event.clientX > 0) {
      (function(){that.clickNextButton();}).delay(1);
    } else {
     Event.observe(document, 'keydown', function keydownCallback(e) {
       if (e.keyCode == 13 || e.keyCode == 32) {
         Event.stopObserving(document, 'keydown', keydownCallback);
         that.clickNextButton();
       }
     });
    }
    }
  }
});
