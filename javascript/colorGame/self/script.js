var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 0, 154)",
  "rgb(0, 0, 255)",
  "rgb(255, 42, 42)",
];

var squares = document.querySelectorAll(".square");
var colorPicker = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = colorPicker;

for(var i = 0; i < squares.length; i++)
{
  // do not use the squares[i].style."background" 
  squares[i].style.backgroundColor = colors[i];

  // add click listener to squares
  squares[i].addEventListener('click', function(){
  // grab color of clicked square
  var clickColor = this.style.backgroundColor;
  // compare color to pickColor
  if(clickColor === colorPicker)
  {
    messageDisplay.textContent = "Correct!";
    changeColor(clickColor);
  }
  else
  {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again!";
  }
  })
}

function changeColor(color){
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}