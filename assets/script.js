
// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var startButton =document.querySelector("#startQuiz");
var timerCountDown = document.querySelector("#timer");


//Event listener to start quiz and timer 
function startTimer() {
    timer = setInterval(function() {
        timerCountDown--;
        startButton.textContent = timerCountDown;
        if (quizComplete) {
            clearInterval(timer);
        }
    })
}

/*startButton.addEventListener("click", function () {
    countDown () {
        var timeLeft = 10;
    }
    var timeIntervel = setInterval(function () {
        if (timeLeft > 10) {
            timerCountDown = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerCountDown = timeLeft;
            timeLeft--; 
        } else {
            timerCountDown = '';
            clearInterval(timeIntervel);
            displayMessage("Time's Up!");
        }
   }, 1000); 
}

*/

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});



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


