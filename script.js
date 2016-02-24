/*Start with one nested array of vocabulary items.
  -Make the button change the index of the word displayed

*/
var form = document.getElementById("submissionForm");
var input = document.querySelector('#answer');

var vocabWords = [["m&emacr; (pronoun)" , "me"] , ["quid (pronoun)" , "what"] , ["nihil (noun)" , "nothing"] , ["n&omacr;n (adverb)" , "not"] , ["saepe (adverb)" , "often"] , ["s&imacr; (conjunction)" , "if"] , ["amo, amare, amavi, amatum (verb)" , "to love"] , ["cogito, cogitare, cogitavi, cogitatum (verb)" , "to think"] , ["debeo, deb&emacr;re, debui, debitum (verb)" , "to owe"] , ["do, dare, dedi, datum (irreg. verb)" , "to give"] , ["erro, errare, erravi, erratum (verb)" , "to wander"] , ["laudo, laudare, laudavi, laudatum (verb)" , "to praise"] , ["moneo, mon&emacr;re, monui, monitum (verb)" , "to remind"] , ["salveo, salv&emacr;re, &mdash; (verb)" , "to be well"] , ["servo, servare, servavi, servatum (verb)" , "to preserve"] , ["conservo, conservare, conservavi, conservatum (verb)" , "to conserve"] , ["terreo, terr&emacr;re, terrui, territum (verb)" , "to frighten"] , ["valeo, val&emacr;re, valui, valiturum (verb)" , "to be strong"] , ["video, vid&emacr;re, vidi, visum (verb)" , "to see"] , ["voco, vocare, vocavi, vocatus (verb)" , "to call"]];

var displayWord = function() {
    document.querySelector(".flashCard").innerHTML = vocabWords[0][0];
};

form.addEventListener("submit" , function(evt){
  evt.preventDefault();
  if (input.value === vocabWords[0][1]) {
    alert("You got it!");
  } else alert("Sorry, but that's incorrect.")
});

// var shuffleCards = function() {
//   vocabWords.sort(function() {
//     var randomValue = Math.random();
//     if (randomValue > 0.5){
//       return 1;
//     } else {
//       return -1;
//     };
//   });
// }



displayWord();
