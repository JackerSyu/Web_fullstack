var notChanged = true;

// basic operation //

// document.querySelector("button").addEventListener("click", function(){
//   if(notChanged)
//   {
//     document.querySelector("body").style.background = "blue";
//     notChanged =false;
//   }
//   else
//   {
//     document.querySelector("body").style.background = "white";
//     notChanged = true;
//   }
// })

// advanced toggled //
document.querySelector("button").addEventListener("click", function(){
    document.body.classList.toggle("purple");
}) 