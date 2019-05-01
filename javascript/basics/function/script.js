function isEven(num){
  if(num % 2 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function factorial (num) {
  let sum = 1;
  for(var i = num ; i > 0; i--)
  {
    sum = sum * i;
  }
  console.log(num + "! = " + sum);
}

function kebabToSnake (sentence){
  var newstr = sentence.replace(/-/i, '_');
  console.log(newstr);
}

