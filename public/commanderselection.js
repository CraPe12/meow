
const questionTree = {
  "Do you prefer to dominate early on and sustain throughout than to rush your commander to a higher capacity?": {
    yes: "",
    no: "",
    both: ""
  }
};

let currentQuestion = "Do you like your commander to dominate early on than rushing your capacity?";
let answers = {};

function displayQuestion() {
  const questionDisplay = document.getElementById('question-display');
  questionDisplay.textContent = currentQuestion;
}

function answer(response) {
  const questionDisplay = document.getElementById('question-display');
  answers[currentQuestion] = response;
  questionDisplay.textContent = `You answered ${response}!`;
  
  setTimeout(() => {
    if (questionTree[currentQuestion]) {
      currentQuestion = questionTree[currentQuestion][response];
      displayQuestion();
    } else {
      questionDisplay.textContent = "Thank you for answering all questions!";
    }
  }, 1000);
}

// Display first question when page loads
window.onload = displayQuestion;
