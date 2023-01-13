var startBtn = document.getElementById('startQuiz');
var questionContainerEl = document.getElementById('questionContainer');
var displayedQuestion = document.getElementById('question');
var answerOptions = document.getElementById('answers');
var instructions = document.getElementById('quizInstructions');
var title = document.getElementById('quizTitle');
var questionOptions, questionBank, question
var timeEl = document.querySelector(".timer");
var secondsLeft = 10;

// question bank 
const questions = [
  {
    question: 'String values must be enclosed within ___ when being assigned to variables.',
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

//timer function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until your quiz is over!";

    if (secondsLeft === 0) {
      //console.log('Hello');
      clearInterval(timerInterval); 
      //console.log('test');
      endGame();
      //console.log('test 2');
    } var i = 0; i < questionBank.length; i++; {
      endGame();
    }
}, 1000);
}

//message at the end of the timer function
function endGame() {
    timeEl.textContent = ("Time's Up!");
};

//click events to begin quiz and timer
startBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', setTime);


//Game initiation. hides title and quiz instructions
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
  resetEachQuestion()
  showQuestion(questionOptions[questionBank])
} //var i = 0; i < questions.length; i++; {
  //endGame();

  if(questionBank === 0) {
  console.log('Hello');
    //clearInterval(timerInterval); 
    //console.log('test');
  //} //console.log('test 2');
  };


function showQuestion(question) {
  displayedQuestion.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    /*if (answer.correct) {*/
      button.dataset.correct = answer.correct
    /*}*/
    button.addEventListener('click', selectAnswer)
    answerOptions.appendChild(button)
  }) //i = 0; i < questions.length; i++; {
    //endGame();
};

function resetEachQuestion() {
  setAccuracy(document.body)
  while (answerOptions.firstChild) {
    answerOptions.removeChild(answerOptions.firstChild)
  } 
}

function selectAnswer(e) {
  /*var selectedButton = e.target*/
  var correct = e.target.dataset.correct
  setAccuracy(document.body, correct)
  //loops through all of the answers to check for correctness
  /*Array.from(answerOptions.children).forEach(button => {
    setAccuracy(button, button.dataset.correct)*/
  if (correct === "false") {
    //score--; 
    //console.log(score);
} if (correct === "true") {
    //score++;
    //console.log(score);
  }
  questionBank++
  setNextQuestion() 
} //if (i = 0, i < questions.length, i++) {
  //endGame();
//};



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