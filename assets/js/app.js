// Create buttons in html document and add listeners.

// Start button that triggers a countdown event with interval.  Game ends when clock reaches 0 or there aren't any addtional questions.  Click listener needed for Start button that triggers interval function.

const startQuiz = document.querySelector('#start-btn');
const introParagraph = document.querySelector('#intro')
const timerDisplay = document.querySelector('#timer');
const docMain = document.querySelector('main')

let timeLeft = 5;

function timerCountdown() {
        let countdownInterval = setInterval(function() {
        console.log(timeLeft);
        timeLeft--;
        timerDisplay.innerHTML = `Timer: ${timeLeft}`;

        // An or statement can be added here if all questions have been answered.
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            console.log('Time is up!')
            gameOver();
        } else { 
            console.log('Keep going!')
        }
    }, 1000);
}

//This function triggers when the start button is clicked.  It will remove the start button (id of startQuiz) and the introductory paragraph (id of introParagraph) from the document, allowing only the quetsion and answers to be displayed.  It also triggers the countdown timer and question generator.

startQuiz.addEventListener('click', function() {
    console.log("You started the quiz!");
    startQuiz.remove() & introParagraph.remove();
    timerCountdown();
    questionGen();
})

// Answering question triggers next question.

// If question answered incorrectly time subtracted from clock.

// Generate random questions.  Four potential answers with buttons to select answer.  This is an ol to generate the four button elements with possible answers.  Questions and their answers can be placed in arrays. The actual question will always use the index of 0.

const q1 = ['What is the difference between an ol and ul element?', 'Nothing they are the same.', 'An ol does not use numbers but a ul does.', 'An ol uses numbers but a ul does not.', 'They both do not use numbers.']

const q2 = ['Which method would we use to add a class to a newly created element?', '.addclass', '.addAttribute', '.setClass', '.setAttribute']

// This controls the randomization.  The value needs to be updated as questions are added.
const numQuestions = 2

// This function randomizes the question selected based on the arrays above.
let randomizeQst = () => {
    // let liDel = document.querySelectorAll('li').remove();
    let rand = Math.floor(Math.random() * numQuestions + 1);
    // randomQ = `q${rand}`;
    if (rand === 2) {
        randomQ = q2
    } else {
        randomQ = q1
    }
    return randomQ;
}

// This section establishes variables for use in the functions. A variable for the ordered list (answerOL) to be called in the questionGen function to append child list items.  The h1 used to display questions is also defined (questionTxt).
const answerOL = document.querySelector('#answers');

const questionTxt = document.querySelector('#question-txt')

// This function will generate an ordered list using the question arrays.
questionGen = () => {
    randomizeQst();
    questionTxt.innerHTML = randomQ[0];
    console.log(randomQ)

// This needs to be debugged.  It generates random questions, but appeneds the answers in a growing list.  The list elements need to be rewritten.  
    for (i = 0; i < 4; i++) {
            let newLI = document.createElement('li');
            let newBtn = document.createElement('button')
            // newLI.innerText = q1[i + 1];
            answerOL.appendChild(newLI);
            newLI.setAttribute('class', 'li-answer')
            newLI.appendChild(newBtn);
            newBtn.innerText = randomQ[i + 1];
            newBtn.setAttribute('class', 'buttons');
        }
}

// Form element to output score.
// This function will trigger a message when the timer reaches zero or all questions have been exhausted.  The function is called in the if statement of the interval timer countdown function.  It removes the ordered list items containing the answer options and rewrites the h1 containing the question (questionTxt).  New form, label, and input elements are created.
gameOver = () => {
    answerOL.remove();
    questionTxt.innerHTML = 'Sorry, the quiz is over.'
    let newForm = document.createElement('form');
    let newInput = document.createElement('input');
    let newLabel = document.createElement('label')
    let submitBtn = document.createElement('button');
    docMain.appendChild(newForm);
    docMain.appendChild(newLabel);
    docMain.appendChild(newInput);
    docMain.appendChild(submitBtn);
    newLabel.innerText = 'Initials and Final Score'
    newLabel.setAttribute('for', 'initials-score');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', 'initials-score');
    newInput.setAttribute('placeholder', 'Initials & Score');
    submitBtn.innerText = 'Submit';
    submitBtn.setAttribute('id', 'submit');
}

// Tracking scores.  A submit button was created in the gameOver function.  The input from the form will be captured to store in the scores array.
let scores = [];

submitBtn.addEventListener ('click', function(){
    console.log('Thanks for submitting your scores!')
})

