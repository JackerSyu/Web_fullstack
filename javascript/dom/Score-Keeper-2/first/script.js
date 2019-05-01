var p1Score = 0;
var p2Score = 0;

var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.querySelector("input");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var scoreDisplay = document.querySelector("#scoreDisplay");

var gameOver = false;
var winScore = 5;

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("win");
  p2Display.classList.remove("win");
}


input.addEventListener('change', function(){
  winScore = Number(input.value);
  scoreDisplay.textContent = winScore;
  reset();
});



resetButton.addEventListener("click", function(){
  reset();
});



p1Button.addEventListener('click', function(){
  if(!gameOver)
  {
    p1Score++;
    p1Display.textContent = p1Score;
    if(winScore === p1Score)
    {
      gameOver = true;
      p1Display.classList.add("win");
    }
  }
});

p2Button.addEventListener('click', function(){
  if(!gameOver)
  {
    p2Score++;
    p2Display.textContent = p2Score;
    if(winScore === p2Score)
    {
      gameOver = true;
      p2Display.classList.add("win");
    }
  }
});

