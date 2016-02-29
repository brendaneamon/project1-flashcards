// AM: Your use of different selectors here got me thinking about this post: http://ryanmorr.com/abstract-away-the-performance-faults-of-queryselectorall/
// AM: Take a look at it if you're interested in learning about the pros/cons of using `querySelector` vs. more specific selectors like `getElementById`
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
    // AM: Noticing a lot of similarities between the code in these if and else blocks.
    // AM: Could be an opportunity to refactor and encapsulate this behavior in a function.
    if ((vocabWords[0][1]).includes(response) && (response.length >= 2)) {
      // AM: While this works, what if you added functionality that allowed users to go back and forth between questions?
      // AM: Another refactoring opportunity would be to make it so that the app is not restricted to reading the question/answer pair that is at the front of the array.
      // AM: This would probably involve keeping track of some sort of index/counter that changes as the user navigates through different questions.
      teacherResponse.innerHTML = "You got it! The correct answer was '" + vocabWords[0][1] +".'";
      var correctCard = vocabWords.shift();
      correctAnswers.push(correctCard);
      form.reset();
      ((vocabWords.length > 0) ? displayWord() : gameOver());
    } else {
      teacherResponse.innerHTML = "Sorry, but that's incorrect. The correct answer was '" + vocabWords[0][1] +".'";
      var incorrectCard = vocabWords.shift();
      incorrectAnswers.push(incorrectCard);
      form.reset();
      ((vocabWords.length > 0) ? displayWord() : gameOver());
    }
});

function gameOver() {
  teacherResponse.innerHTML = "Game over! You had " + correctAnswers.length + " correct answer(s) and " + incorrectAnswers.length + " incorrect answer(s).";
};

displayWord();

// AM: Major kudos on keeping your Javascript file to under 70 lines! Super readable.
