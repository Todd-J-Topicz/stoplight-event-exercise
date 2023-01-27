// (function() {
//   'use strict';

//Reference pointer to HTML Go,stop, slow Buttons:
const goButton = document.getElementById("goButton");
goButton.addEventListener("click", goButtonClickResponse);

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopButtonClickResponse);

const slowButton = document.getElementById("slowButton");
slowButton.addEventListener("click", slowButtonClickResponse);

const goLight = document.getElementById("goLight");

const stopLight = document.getElementById("stopLight");

const slowLight = document.getElementById("slowLight");

//Do not use ()'s on parameter function so that we do not invoke function at that exact point,
//In other words, using ()'s on a function say invoke right then and there and we dont want that here.
// function automatically passes in arguments.
 


//GO BUTTON:
function goButtonClickResponse(event){
  console.log(event.target.textContent + " button was clicked");

    goLight.classList.toggle("go");
};

//SLOW BUTTON:
function slowButtonClickResponse(event){
  console.log(event.target.textContent + " button was clicked");
  
  //Testing purposes:
  console.log(slowLight.classList.length)
  console.log(slowLight.classList)

  if (slowLight.classList.length == 1){
    slowLight.classList.add("slow");
    } else{
      slowLight.classList.remove("slow");
    }
};

//STOP BUTTON:
function stopButtonClickResponse(event){
  console.log(event.target.textContent + " button was clicked");
  //console.log(document.getElementsByName("stop"));
  
  if (stopLight.classList.length == 1){
  stopLight.classList.add("stop");
  } else{
    stopLight.classList.remove("stop");
  }
}




//})();
