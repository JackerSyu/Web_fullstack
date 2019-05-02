var numSquares = 6;
var colors = [];
var colorPicker;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}
function setUpSquares() {
  for(var i = 0; i < squares.length; i++){
    // add click listener to squares
    squares[i].addEventListener('click', function(){
      // grab color of clicked square
      var clickColor = this.style.backgroundColor;
      // compare color to pickColor
      if(clickColor === colorPicker)
      {
        messageDisplay.textContent = "Correct!";
        messageDisplay.style.color = "green";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickColor;
        changeColor(clickColor);
      }
      else
      {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
        messageDisplay.style.color = "red";
      }
    });
  }
}


function setUpModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // }
      // else{
      //   numSquares = 6;
      // }
      reset();
    });
  }
}


function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  colorPicker = pickColor();
  // change colorDisplay to match picked Color 
  colorDisplay.textContent = colorPicker;
  // reset the display button 
  resetButton.textContent = "New Colors";
  // reset the h1 background
  h1.style.backgroundColor = "steelblue";
  // change the colors of squares
  for(var i = 0; i < squares.length; i ++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    
  }
  // message clean
  messageDisplay.textContent = "";
  
}

// easyBtn.addEventListener('click', function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   colorPicker = pickColor();
//   colorDisplay.textContent = colorPicker;
//   h1.style.backgroundColor = "steelblue";
//     // message clean
//     messageDisplay.textContent = "";
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// })
// hardBtn.addEventListener('click', function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   colorPicker = pickColor();
//   colorDisplay.textContent = colorPicker;
//     // message clean
//     messageDisplay.textContent = "";
//   h1.style.backgroundColor = "steelblue";
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })


resetButton.addEventListener('click', function(){
  reset();
})

function changeColor(color){
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  
  for (var i = 0; i < num; i++){
    // add random colors to array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor(){
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b + ")";
}