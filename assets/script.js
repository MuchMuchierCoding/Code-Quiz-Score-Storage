// Declared variables
var highScore = document.querySelector("#highScore");
/*var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");*/
var startBtn = document.getElementById('startQuiz');
var questionContainerEl = document.getElementById('questionContainer');
var answerOptions = document.getElementById('answers');
var questionBank = document.getElementById('question');
var timerCountDown = document.querySelector("#timer");
var title = document.getElementById('quizTitle');
var instructions = document.getElementById('quizInstructions'); 
var questionOptions, questionBank
var questionElement = document.getElementById('question');
var answerButtonsElements = document.getElementById('answers');

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startBtn.classList.add('hide')
    instructions.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
    title.classList.add('hide')
    instructions.classList.add('hide')
    questionOptions = questions.sort(() => Math.random() - .5)
    questionBank = 0
    questionSets()
};

function setNextQuestion() {
    showQuestion(questionOptions[questionBank])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

function questionSets() {
    showQuestion()
}



var question = [
    {
       question: 'What is 2+2?',
       answers: [
        {text: '4', correct: true},
        {text: '22', correct: false}
       ] 
    }
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
