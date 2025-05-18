const quiz = {
  displayQuestion: function () {
    const questions = [
      {
        question: "What is Magic Chess: Go Go?",
        choices: [
          "A card game",
          "A strategy game",
          "A MOBA game",
          "A mobile RPG",
        ],
        correct: 1,
      },
      {
        question: "How many players battle in Magic Chess?",
        choices: ["2 players", "4 players", "6 players", "8 players"],
        correct: 3,
      },
      {
        question:
          "What is Magic Chess Go Go before it became Magic Chess Go Go?",
        choices: [
          "A regular chess game with a few twists",
          "A dating app",
          "A Game Mode in it's sister gane, Mobile Legends: Bang Bang",
          "There is no such thing as Magic Chess Go Go",
        ],
        correct: 2,
      },
      {
        question: "Which is NOT a current synergy in Magic Chess Go Go?",
        choices: [
          "Moniyan Plains",
          "Dragon Altar",
          "Cadia Riverlands",
          "Nature Spirit",
        ],
        correct: 2,
      },
      {
        question: "Which is NOT a current commander in Magic Chess Go Go?",
        choices: ["Austus", "Eggie", "Buzz", "Brown"],
        correct: 0,
      },
    ];

    let score = 0;

    questions.forEach((q, index) => {
      const answer = prompt(`
Question ${index + 1}: ${q.question}
0: ${q.choices[0]}
1: ${q.choices[1]}
2: ${q.choices[2]}
3: ${q.choices[3]}

Enter the correct number (0-3):`);

      if (parseInt(answer) === q.correct) {
        alert("Correct!");
        score++;
      } else {
        alert(`Wrong! The correct answer was: ${q.choices[q.correct]}`);
      }
    });

    alert(`Quiz complete! Your score: ${score}/${questions.length}`);
  },
};
console.log;
// Start the quiz when page loads
quiz.displayQuestion();
