var form = document.getElementById("submissionForm");
var input = document.querySelector("#answer");
var flashCard = document.querySelector(".flashCard");
var teacherResponse = document.querySelector(".teacherResponse");

var vocabWords = [
["m&emacr; (pronoun)" , "me"] , ["quid (pronoun)" , "what"] ,
["nihil (noun)" , "nothing"] , ["n&omacr;n (adverb)" , "not"] ,
["saepe (adverb)" , "often"] , ["s&imacr; (conjunction)" , "if"] ,
["amo, amare, amavi, amatum (verb)" , "to love"] ,
["cogito, cogitare, cogitavi, cogitatum (verb)" , "to think"] ,
["debeo, deb&emacr;re, debui, debitum (verb)" , "to owe"] ,
["do, dare, dedi, datum (irreg. verb)" , "to give"] ,
["erro, errare, erravi, erratum (verb)" , "to wander"] ,
["laudo, laudare, laudavi, laudatum (verb)" , "to praise"] ,
["moneo, mon&emacr;re, monui, monitum (verb)" , "to remind"] ,
["salveo, salv&emacr;re, &mdash; (verb)" , "to be well"] ,
["servo, servare, servavi, servatum (verb)" , "to preserve"] ,
["conservo, conservare, conservavi, conservatum (verb)" , "to conserve"] ,
["terreo, terr&emacr;re, terrui, territum (verb)" , "to frighten"] ,
["valeo, val&emacr;re, valui, valiturum (verb)" , "to be strong"] ,
["video, vid&emacr;re, vidi, visum (verb)" , "to see"] ,
["voco, vocare, vocavi, vocatus (verb)" , "to call"]];

var correctAnswers = [];
var incorrectAnswers =[];

var shuffleCards = function() {
  vocabWords.sort(function() {
    var randomValue = Math.random();
    if (randomValue > 0.5){
      return 1;
    } else {
      return -1;
    };
  });
  return vocabWords;
}

shuffleCards();

var displayWord = function() {
  flashCard.innerHTML = vocabWords[0][0]
  };

form.addEventListener("submit" , function(evt){
  evt.preventDefault();
  var response = (input.value).toLowerCase();
    if (response === vocabWords[0][1]) {
      teacherResponse.innerHTML = "You got it! The correct answer was '" + vocabWords[0][1] +".'";
      var correctCard = vocabWords.shift();
      correctAnswers.push(correctCard);
      ((vocabWords.length > 0) ? displayWord() : gameOver());
    } else {
      teacherResponse.innerHTML = "Sorry, but that's incorrect. The correct answer was '" + vocabWords[0][1] +".'";
      var incorrectCard = vocabWords.shift();
      incorrectAnswers.push(incorrectCard);
      ((vocabWords.length > 0) ? displayWord() : gameOver());
    }
});

function gameOver() {
  teacherResponse.innerHTML = "Game over! You had " + correctAnswers.length + " correct answer(s) and " + incorrectAnswers.length + " incorrect answer(s).";
};

displayWord();
