# Project Evaluation

See below for my project evaluation. Feel free to hit me up via Slack or GitHub with additional questions and comments!

## Project Workflow

> Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?  

**Exceeds Expectations:** Wow, what a readme! I was able to learn so much about not only your application but the process that went into making it just from that single file. Please keep this up, not only for future projects but everything you do after GA. Nothing's more frustrating than an uninformative readme. Props on using some Markdown formatting too!

## Technical Requirements

> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?  

**Meets Expectations:** Good job here. You met all the technical requirements and look like you have a pretty good grasp of all the concepts taught prior to this project. I think taking this project to the next level would entail implementing the refactoring opportunities I mentioned in my inline code comments and taking on some new features. The user-submitted question/answer pairs you mentioned in your submission (which I begin to address below) would be a good one!

## Code Quality

> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?  

**Exceeds Expectations:** Major kudos on keeping your code very short, well-indented and well-commented. Had no problem identifying which piece of code is responsible for what. I made note of a couple refactoring opportunities if you choose to revisit this.  

Make sure to take a look at the inline code comments I made in this [pull request]().

## In Response To Your Questions...

These are my responses to the questions you left in your project submission. Let me know if I can elaborate or if you have any follow-up questions on the below.

#### `...learning the best way to check text submissions against the list of words...`

As far as comparing values go, the way you did it is great -- good use of `.includes`. What I would think about, however, is how you could refactor your app so that it is not restricted to checking the first question/answer pair in the array. Take a look at my inline code comments for more thoughts on this. Happy to talk more about it in person.

#### `...ideas about how to allow users to submit their own flash cards, which I assume would entail creating an empty array or object...`

I think a good first way to implement this would be to add an additional input field(s) to the start screen. Users could then submit their own question/answer pairs. You could just add them to the existing array-of-arrays, unless you want to keep user-generated question/answer pairs separate from the original ones. If you go with the former action, you would need to make sure that upon submission the new question/answer pair is not only added but that the deck is shuffled once again.

#### `...saving things from session to session, which is also something I was unable to do on the JS calculator exercise.`

You haven't learned how to save information in an application. Using what you've learned so far, anything the user does will disappear once the page is refreshed. We'll be going into back-end web development next week, but if you're interested in figuring out how to implement this on the front end, look into [Local Storage](http://www.w3schools.com/html/html5_webstorage.asp).
