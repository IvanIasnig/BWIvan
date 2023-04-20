var timeLimit = 60; // Tempo in secondi
var timePassed = 0; // Tempo trascorso
var timerInterval; // Variabile per l'intervallo del timer

function startTimer() {
  timerInterval = setInterval(function() {
    timePassed++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  var pie = document.querySelector('.pie');
  var time = document.querySelector('.time');
  var timeLeft = timeLimit - timePassed;
  var pieDegrees = 360 - (timeLeft / timeLimit) * 360;
  pie.style.transform = 'rotate(' + pieDegrees + 'deg)';
  time.innerHTML = timeLeft;
  
  if (timeLeft === 0) {
    clearInterval(timerInterval);
  }
}

startTimer();






