// Create buttons in html document and add listeners.

// Start button that triggers a countdown event with interval.  Game ends when clock reaches 0 or there aren't any addtional questions.  Click listener needed for Start button that triggers interval function.

const startQuiz = document.querySelector('#start-btn');
const introParagraph = document.querySelector('#intro')
const timerDisplay = document.querySelector('#timer');

let timeLeft = 60;

function timerCountdown() {
        let countdownInterval = setInterval(function() {
        console.log(timeLeft);
        timeLeft--;
        timerDisplay.innerHTML = `Timer: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            console.log('Time is up!')
        } else { 
            console.log('Keep going!')
        }
    }, 1000);
}


startQuiz.addEventListener('click', function() {
    console.log("You started the quiz!");
    startQuiz.remove() & introParagraph.remove();
    timerCountdown();
    questionGen();
})


// Generate random questions.  Four potential answers with buttons to select answer.  This should probably be an ol to generate the four button elements with possible answers.

// Answering question triggers next question.

// If question answered incorrectly time subtracted from clock.

// Form element to output score.

// Questions and their answers can be placed in arrays. The question will always use the index of 0.
const q1 = ['What is the difference between an ol and ul element?', 'Nothing they are the same.', 'An ol does not use numbers but a ul does.', 'An ol uses numbers but a ul does not.', 'They both do not use numbers.']

const q2 = ['Which method would we use to add a class to a newly created element?', '.addclass', '.addAttribute', '.setClass', '.setAttribute']

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

// This section establishes variables for use in the functions. A variable for the ordered list to be called in the questionGen function to append child list items.
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

// questionGen();