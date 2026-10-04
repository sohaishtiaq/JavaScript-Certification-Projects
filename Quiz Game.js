const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Programming",
    question: "Which language is used for web development?",
    choices: ["JavaScript", "Python", "C++"],
    answer: "JavaScript"
  },
  {
    category: "Math",
    question: "What is 5 + 5?",
    choices: ["8", "10", "12"],
    answer: "10"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
