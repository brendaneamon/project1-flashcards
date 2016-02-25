var form = document.getElementById("submissionForm");
var input = document.querySelector("#answer");
var flashCard = document.querySelector(".flashCard");
var teacherResponse = document.querySelector(".teacherResponse");

var vocabWords = [
["m&emacr; (pronoun)" , "me, myself"] , ["quid (pronoun)" , "what"] ,
["nihil (noun)" , "nothing"] , ["n&omacr;n (adverb)" , "not"] ,
["saepe (adverb)" , "often"] , ["s&imacr; (conjunction)" , "if"] ,
["amo, amare, amavi, amatum (verb)" , "love, like"] ,
["cogito, cogitare, cogitavi, cogitatum (verb)" , "think, ponder, consider, plan"] ,
["debeo, deb&emacr;re, debui, debitum (verb)" , "owe, ought, must"] ,
["do, dare, dedi, datum (irreg. verb)" , "give, offer"] ,
["erro, errare, erravi, erratum (verb)" , "wander, err, go astray, make a mistake, be mistaken"] ,
["laudo, laudare, laudavi, laudatum (verb)" , "praise"] ,
["moneo, mon&emacr;re, monui, monitum (verb)" , "remind, advise, warn"] ,
["salveo, salv&emacr;re, &mdash; (verb)" , "be well, be in good health"] ,
["servo, servare, servavi, servatum (verb)" , "preserve, save, keep, guard"] ,
["conservo, conservare, conservavi, conservatum (verb)" , "preserve, conserve, maintain"] ,
["terreo, terr&emacr;re, terrui, territum (verb)" , "frighten, terrify"] ,
["valeo, val&emacr;re, valui, valiturum (verb)" , "be strong, have power, be well"] ,
["video, vid&emacr;re, vidi, visum (verb)" , "see, observe, understand, seem (passive only)"] ,
["voco, vocare, vocavi, vocatus (verb)" , "call, summon"]];

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
    if ((vocabWords[0][1]).includes(response) && (response.length >= 2)) {
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
