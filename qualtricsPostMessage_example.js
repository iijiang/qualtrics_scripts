 /*Use the "script" opening and closing tags only if you are placing this script in the header of your survey(to run on all pages)*/
Qualtrics.SurveyEngine.addOnload(function() {

  // Wait half a second and then adjust the iframe height to fit the questions
  setTimeout(function () {
    var height = document.getElementById("Wrapper").scrollHeight-100;
    console.log(height);

   //parent.postMessage( document.getElementById("Wrapper").scrollHeight+"px","http://employment.loc.gbuild.net");
   parent.postMessage(height+"px", document.referrer.match(/^.+:\/\/[^\/]+/)[0]);

  }, 500);
});
