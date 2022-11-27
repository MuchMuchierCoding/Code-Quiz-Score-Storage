// Declared variables
var highScore = document.querySelector("#highScore");
/*var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");*/
var startBtn = document.getElementById("startQuiz");
var questionContainerEl = document.getElementById("questionContainer");
var answerOptions = document.getElementById("answers");
var timerCountDown = document.querySelector("#timer");
var title = document.getElementById('quizTitle');
var instructions = document.getElementById('quizInstructions'); 
var questionOptions, questionBank

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startBtn.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    title.classList.add('hide')
    instructions.classList.add('hide')
    questionOptions = questionBank.sort(() => Math.random() - 0)
    questionBank = 0
    questionSets()
};

function questionSets() {
    showQuestion()
}

function selectAnswer() {

}

var questions = [
    {
       questions: 'What is...',
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
