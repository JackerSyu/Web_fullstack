function printReverse(list) {
  for(var i = list.length - 1; i >= 0; i--){
    console.log(list[i]);
  }
}


function isUniform (list) {
  for(var i = 1; i < list.length; i++){
    if(list[i] != list[i-1])
    {
      return false;
    }
  }
  return true;
}

function sumArray(list) {
  var sum = 0;
  for(var i = 0; i < list.length; i++) {
    sum += list[i]; 
  }
  return sum;
}

function max(list) {
  var max;
  for(var i = 1; i < list.length; i++){
    if(list[i] >= list[i - 1]){
      max = list[i];
    }
  }
  return max;
}