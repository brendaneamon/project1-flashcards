Vocabulary Flash Cards for Unit I of *Wheelock's Latin*
=======================================================

Overview & Purpose of the Application
-------------------------------------
*Latin Teachers (Non-technical) & Developers*

The purpose of this application is to allow beginning Latin students to drill themselves on vocabulary from the first unit in Frederic M. Wheelock's popular Latin textbook. The vocabulary is limited primarily to verbs of the first and second conjugations; however, it also includes a smattering of pronouns, nouns, adverbs, and conjunctions, which allow the construction of some very basic *sententiae*.

The application will allow students to cycle through randomized vocabulary flash cards. Each student will be presented with with a Latin word and will be prompted to enter the English definition of the word. If that response is correct, the card will be removed from the virtual stack of flash cards and placed in another pile of correct answers; a similar process will govern incorrect responses. This process will continue until the student has provided an English definition for each Latin prompt.

Future versions of this application may include enhancements such as these:
* Ability for the user to switch back and forth between English-to-Latin and Latin-to-English
* Ability for students to create their own flash cards and drill themselves on those cards
* Pictures displayed with each card to reinforce the meaning of the words displayed therein
* A reset button to allow the user to reshuffle the cards without refreshing the page
* A running tally of scores


User Stories
------------

User stories for this project are [available on Trello] (https://trello.com/b/DQMoJaGz) at the following URL: https://trello.com/b/DQMoJaGz.


Technologies Used
-----------------

This web application was built using HTML, CSS, and Vanilla JavaScript.


Installation instructions
-------------------------

Users may access this app at URL and may play the flash card game in whatever browser they prefer (Chrome or Firefox recommended).


Approach Taken & Challenges Faced
---------------------------------

The application was envisioned as a simple flash card game with a Roman-themed background image and some text images. I began by setting down the overview and purpose of the application (*vide supra* – "see above", for non-Latinists) and creating some basic user stories. Lest I get overly ambitious with my plans, I narrowed the scope to a single chapter of a popular Latin textbook used by high school and college students.

I began with the HTML, which was uncomplicated and has remained largely unchanged for the duration of the project. The concept was simple: A header, some instructions, and a `<div>` tag to contain the flash card itself. I used a text submission for user input and then added another `<div>` wherein the "instructor" response to the student's answer would appear.

Next, I began entering the vocabulary items into two separate arrays in the `script.js` file. After some consultation with instructors, I changed the approach to a single nested array, with 20 vocabulary words each consisting of an array of two elements. I also declared a number of global variables to make it easier to target the various HTML elements where the flash card text and answers would be displayed.

I spent a good amount of time on the second project day trying to establish a preliminary layout in CSS, and this has remained largely unchanged since that morning. My next step was to determine how best to access vocabulary items in the array, which also proved relatively straightforward. The biggest challenge was figuring out how to cycle through each entry in the array in order, displaying each one in turn. I first attempted a `for` loop and then a `while` loop, each of which ended up looping through the entire array before displaying anything to the user. I used `debugger` to troubleshoot the issue, but some helpful suggestions from others pointed me in a different direction that was ultimately more successful.

I had a good deal of help from instructors (particularly Joe, who, felicitously enough, has a background in Latin) in figuring out how to create the `displayWord()` function and how to use an event listener to check user submissions against the array of vocabulary items. Once I had this figured out, I was able to use the shuffling method that we employed in creating the "High Card" game for homework.

A new challenge arose when I had to figure out how to make the game end when the user had cycled through all the cards. Ultimately, I created two new, empty arrays for correct answers and incorrect answers. I used `array.shift()` to remove each card from the top of the stack; `array.push()` was utilized for placing the card in the appropriate array, depending on whether or not the answer was correct.

By the end of the third project day, I had a functioning flash card game with some bare-bones styling. I solicited feedback from a friend, who is a senior web developer. He provided me with some helpful suggestions about how to improve my app, some of which I incorporated into the current live version:
* Array cleanup for enhanced readability of code
* Change the method of checking correct answers to allow multiple correct answers
* Ensuring that answers are at least two characters in length

My final step in this project was to clean up the CSS a bit more (as much as is possible) and practice demonstrating it for a user. Overall, the finished product falls somewhere in the "Silver" range as described below, though I am not certain about how well I apportioned features to each version.


Unsolved Problems
-----------------

The most obvious problem is that it is easy to "trick" the application into thinking you have a correct answer, because you only have to enter two correct letters to get a "Good job!" in response. This is mitigated by the fact that the app is a study tool and not an actual assessment. If this were a test, I would want to implement a way to check the user input for accuracy more stringently. It was suggested to me that I use `indexOf()` to check if the string provided by the user matches the values in the array. Implementation of this feature would be a primary goal for the next release of the app.

Given some additional time, I believe I could implement a way for users to flip through cards in English-to-Latin or Latin-to-English mode. I would also try to take the cards from the `incorrectAnswers` array and re-display them to the user until the user should provide the correct definition for each. The best way to achieve most of these features would be to use an object for the vocabulary items instead of an array&mdash;this would allow me to set different properties for each word, including "Latin," "English," "part of speech," "conjugation," etc. If I were to do this, I would have much more flexibility in choosing how to display the flash card content to users.

Despite the issues discussed above, I believe this app could be used as a tool for beginning Latin students to drill their vocabulary. It would be easy enough to add words to the present array and cover additional units of *Wheelock's Latin*.


Gold, Silver, & Bronze versions
-------------------------------

The **Bronze** version of this application should, at a minimum, include a square or rectangular card containing the word being drilled, and it should prompt the user to enter text, which will be checked against the provided translation. At first, the app will only drill Latin-to-English vocabulary, as this will be easier for the user to enter and easier to check against than a long set of Latin forms including verb principal parts, for example. This version should have just enough CSS to make it clear that it is a flash card drill.

The **Silver** version of the app should have all the same functionality as the Bronze version described above; however, it should also include improvements to styling, including background images, buttons, etc. The app will keep track of which cards were correct and which ones were incorrect and will provide a simple alert to the user about whether he or she got the word right or not. The silver version may also include multiple options for English input, instead of just one.

The **Gold** version of this application should have all the features described in the preceding section: a pleasant UX design is very important to making the experience less painful for the student, who will likely be very frustrated with his or her ability to retain and reproduce the vocabulary items. This version might also include some CSS animations and transitions for cycling through the cards, and perhaps some end of game success screen. Another Gold feature would be responsive design, which would allow users to drill vocabulary on their phones without having to squint to see the words on their screens.
