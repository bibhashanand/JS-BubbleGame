var timer = 60;
var score = 0;
var hitrn = 0;
var highestScore = 0;

function makeBubble() {
  var bubbleData = "";
  for (var i = 0; i <= 104; i++) {
    rn = Math.floor(Math.random() * 10);
    bubbleData += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtom").innerHTML = bubbleData;
}
function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    }
    else {
      if (score > highestScore){
        highestScore = score;
      }
      clearInterval(timerInt);
      document.querySelector("#pbtom").innerHTML = `<h1>GAME OVER,  your Score is ${score}</h1>`;

    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").innerHTML = score;
}

function decreaseScore() {
  score -= 5;
  document.querySelector("#score").innerHTML = score;
}



document.querySelector("#pbtom").addEventListener("click", function(data){
  var clickedNumber = Number(data.target.textContent);
  if (hitrn === clickedNumber){
    increaseScore();
  }
  else{
    decreaseScore();
  }
  getNewHit();
  makeBubble();
})



makeBubble();
runTimer();
getNewHit();
