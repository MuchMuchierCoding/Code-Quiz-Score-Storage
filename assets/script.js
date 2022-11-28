var startBtn = document.getElementById('startQuiz')
var next = document.getElementById('nextButton')
var questionContainerEl = document.getElementById('questionContainer')
var displayedQuestion = document.getElementById('question')
var answerOptions = document.getElementById('answers')
var instructions = document.getElementById('quizInstructions')
var title = document.getElementById('quizTitle')
var questionOptions, questionBank

startBtn.addEventListener('click', startGame)

/*correct.addEventListener('click', () => {
  questionBank++
  setNextQuestion()
})*/

//Initiates game at start button click. hides title and quiz instructions
function startGame() {
  startBtn.classList.add('hide')
  instructions.classList.add('hide')
  title.classList.add('hide')
  questionOptions = questions.sort(() => Math.random() - .5)
  questionBank = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion() {
  /*reset()*/
  showQuestion(questionOptions[questionBank])
}

function showQuestion(question) {
  displayedQuestion.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerOptions.appendChild(button)
  })
}

/*function reset() {
  setAccuracy(document.body)
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild)
  }
}*/

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setAccuracy(document.body, correct)
  Array.from(answerOptions.children).forEach(button => {
    setAccuracy(button, button.dataset.correct)
  })
  if (questionOptions.length > questionBank + 1) {

} else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}



//show whether question is correct or incorrect
function setAccuracy(element, correct) {
  if (correct) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
}

/*function setAccuracy(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}*/

// question bank 
const questions = [
  {
    question: 'String values must be enclodes within ___ when being assigned to variables.',
    answers: [
      { text: '1. commas', correct: false },
      { text: '2. quotes', correct: true },
      { text: '3. curly brackets', correct: false},
      { text: '4. parenthesis', correct: false},
    ]
  },

  {
    question: 'Arrays in JavaScript can be used to store ____.',
    answers: [
      { text: '1. numbers and strings', correct: false },
      { text: '2. other arrays', correct: false },
      { text: '3. booleans', correct: false},
      { text: '4. all of the above', correct: true }
    ]
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
      { text: '1. JavaScript', correct: false },
      { text: '2. terminal/bash', correct: false },
      { text: '3. for loops', correct: false },
      { text: '4. console.log', correct: true }
    ]
  },
]

/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/







/*
var startBtn = document.getElementById('startQuiz')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('questionContainer')
var displayedQuestion = document.getElementById('question')
var answerOptions = document.getElementById('answers')
var instructions = document.getElementById('quizInstructions')
var title = document.getElementById('quizTitle')
var questionOptions, questionBank

startBtn.addEventListener('click', startGame)

/*nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//Initiates game at start button click. hides title and quiz instructions
function startGame() {
  startBtn.classList.add('hide')
  instructions.classList.add('hide')
  title.classList.add('hide')
  questionOptions = questions.sort(() => Math.random() - .5)
  questionBank = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion() {
  resetState()
  showQuestion(questionOptions[questionBank])
}

function showQuestion(question) {
  displayedQuestion.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerOptions.appendChild(button)
  })
}

function resetState() {
  setAccuracy(document.body)
 /* nextButton.classList.add('hide')
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setAccuracy(document.body, correct)
  Array.from(answerOptions.children).forEach(button => {
    setAccuracy(button, button.dataset.correct)
  })
  if (questionOptions.length > questionBank + 1) {
    /*nextButton.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

//show whether question is correct or incorrect
function setAccuracy(element, correct) {
  setAccuracy(element)
  if (correct) {
    element.classList.add('correct')
    return 'Correct!';
  } else {
    element.classList.add('wrong')
    return 'Incorrect!';
  }
}

function setAccuracy(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// question bank 
const questions = [
  {
    question: 'String values must be enclodes within ___ when being assigned to variables.',
    answers: [
      { text: '1. commas', correct: false },
      { text: '2. quotes', correct: true },
      { text: '3. curly brackets', correct: false},
      { text: '4. parenthesis', correct: false},
    ]
  },

  {
    question: 'Arrays in JavaScript can be used to store ____.',
    answers: [
      { text: '1. numbers and strings', correct: false },
      { text: '2. other arrays', correct: false },
      { text: '3. booleans', correct: false},
      { text: '4. all of the above', correct: true }
    ]
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
      { text: '1. JavaScript', correct: false },
      { text: '2. terminal/bash', correct: false },
      { text: '3. for loops', correct: false },
      { text: '4. console.log', correct: true }
    ]
  },
]
*/








/*var startBtn = document.getElementById('startQuiz')
var next = document.getElementById('nextButton')
var questionContainerEl = document.getElementById('questionContainer')
var displayedQuestion = document.getElementById('question')
var answerOptions = document.getElementById('answers')
var instructions = document.getElementById('quizInstructions')
var title = document.getElementById('quizTitle')
var questionOptions, questionBank

startBtn.addEventListener('click', startGame)

correct.addEventListener('click', () => {
  questionBank++
  setNextQuestion()
})

//Initiates game at start button click. hides title and quiz instructions
function startGame() {
  startBtn.classList.add('hide')
  instructions.classList.add('hide')
  title.classList.add('hide')
  questionOptions = questions.sort(() => Math.random() - .5)
  questionBank = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion() {
  /*reset()
  showQuestion(questionOptions[questionBank])
}

function showQuestion(question) {
  displayedQuestion.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerOptions.appendChild(button)
  })
}

/*function reset() {
  setAccuracy(document.body)
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setAccuracy(document.body, correct)
  Array.from(answerOptions.children).forEach(button => {
    setAccuracy(button, button.dataset.correct)
  })
  if (questionOptions.length > questionBank + 1) {

} else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}



//show whether question is correct or incorrect
function setAccuracy(element, correct) {
  if (correct) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
}

/*function setAccuracy(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// question bank 
const questions = [
  {
    question: 'String values must be enclodes within ___ when being assigned to variables.',
    answers: [
      { text: '1. commas', correct: false },
      { text: '2. quotes', correct: true },
      { text: '3. curly brackets', correct: false},
      { text: '4. parenthesis', correct: false},
    ]
  },

  {
    question: 'Arrays in JavaScript can be used to store ____.',
    answers: [
      { text: '1. numbers and strings', correct: false },
      { text: '2. other arrays', correct: false },
      { text: '3. booleans', correct: false},
      { text: '4. all of the above', correct: true }
    ]
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
      { text: '1. JavaScript', correct: false },
      { text: '2. terminal/bash', correct: false },
      { text: '3. for loops', correct: false },
      { text: '4. console.log', correct: true }
    ]
  },
]

/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/
