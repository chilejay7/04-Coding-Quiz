// Create buttons in html document and add listeners.

// Start button that triggers a countdown event with interval.  Game ends when clock reaches 0 or there aren't any addtional questions.  Click listener needed for Start button that triggers interval function.

// Generate random questions.  Four potential answers with buttons to select answer.  This should probably be an ol to generate the four button elements with possible answers.

// Answering question triggers next question.

// If question answered incorrectly time subtracted from clock.

// Form element to output score.

// Generate questions in ordered list.
const answerOL = document.querySelector('#answers');

const answers = [1, 2, 3, 4]

for (i = 0; i < 4; i++) {
    let newLI = document.createElement('li');
    newLI.innerText = answers[i];
    answerOL.appendChild(newLI);
}