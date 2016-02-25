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

Technologies Used
-----------------
This web application was built using HTML, CSS, and Vanilla JavaScript.


Approach Taken & Challenges Faced
---------------------------------

The application was envisioned as a simple flash card game with a Roman-themed background image and some text images. I began by setting down the overview and purpose of the application (*vide supra* – "see above", for non-Latinists) and creating some basic user stories. Lest I get overly ambitious with my plans, I narrowed the scope to a single chapter of a popular Latin textbook used by high school and college students.

I began with the HTML, which was simple enough and has remained largely unchanged for the duration of the project. The concept was simple: A header, some instructions, and a `<div>` tag to contain the flash card itself. I used a text submission for user input and then added another `<div>` wherein the "instructor" response to the student's answer would appear.

Next, I began entering the vocabulary items into two separate arrays in the `script.js` file. After some consultation with instructors, I changed the approach to a single nested array, with 20 vocabulary words each consisting of an array of two elements. I also declared a number of global variables to make it easier to target the various HTML elements where the flash card text and answers would be displayed.

I spent a good amount of time on the second project day trying to establish a preliminary layout in CSS, and this has remained unchanged since the morning of the second project day. My next challenge was 


Gold, Silver, & Bronze versions
-------------------------------

The **Bronze** version of this application should, at a minimum, include a square or rectangular card containing the word being drilled, and it should prompt the user to enter text, which will be checked against the provided translation. At first, the app will only drill Latin-to-English vocabulary, as this will be easier for the user to enter and easier to check against than a long set of Latin forms including verb principal parts, for example. This version should have just enough CSS to make it clear that it is a flash card drill.

The **Silver** version of the app should have all the same functionality as the Bronze version described above; however, it should also include improvements to styling, including background images, buttons, etc. The app will keep track of which cards were correct and which ones were incorrect and will provide a simple alert to the user about whether he or she got the word right or not. The silver version may also include multiple options for English input, instead of just one.

The **Gold** version of this application should have all the features described in the preceding section: a pleasant UX design is very important to making the experience less painful for the student, who will likely be very frustrated with his or her ability to retain and reproduce the vocabulary items. This version might also include some CSS animations and transitions for cycling through the cards, and perhaps some end of game success screen. Another Gold feature would be responsive design, which would allow users to drill vocabulary on their phones without having to squint to see the words on their screens.

User Stories
------------

User stories for this project are [available on Trello] (https://trello.com/b/DQMoJaGz) at the following URL: https://trello.com/b/DQMoJaGz.
