
//Reference pointer to HTML Go,stop, slow Buttons:
const goButton = document.getElementById("goButton");
goButton.addEventListener("click", goButtonClickResponse);
goButton.addEventListener("mouseover", goMouseOver);
goButton.addEventListener("mouseout", goMouseOut);

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopButtonClickResponse);
stopButton.addEventListener("mouseover", stopMouseOver);
stopButton.addEventListener("mouseout", stopMouseOut);

const slowButton = document.getElementById("slowButton");
slowButton.addEventListener("click", slowButtonClickResponse);
slowButton.addEventListener("mouseover", slowMouseOver);
slowButton.addEventListener("mouseout", slowMouseOut);

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
    
   
    //Console log bulb on/off
    if (goLight.classList.length == 2){
      console.log(`${goButton.innerHTML} bulb on`)
      //ADDED FEATURE TO TURN OFF OTHER LIGHTS IF THIS ONE IS ON:
      slowLight.classList.remove("slow");
      stopLight.classList.remove("stop");
    } else {
      console.log(`${goButton.innerHTML} bulb off`)
    }
  };

//Mouse over event function:
function goMouseOver (event){
  console.log(`Entered ${goButton.innerHTML} button`)
};
//Mouse left event function:
function goMouseOut(event){
  console.log(`Left ${goButton.innerHTML} button`)
};



//SLOW BUTTON:
function slowButtonClickResponse(event){
  console.log(event.target.textContent + " button was clicked");
  slowLight.classList.toggle("slow");

  //Console log bulb on/off
  if (slowLight.classList.length == 2){
    console.log(`${slowButton.innerHTML} bulb on`)
    //ADDED FEATURE TO TURN OFF OTHER LIGHTS IF THIS ONE IS ON:
    stopLight.classList.remove("stop");
    goLight.classList.remove("go");
  } else {
    console.log(`${slowButton.innerHTML} bulb off`)
  }
};
//Mouse over event function:
function slowMouseOver (event){
  console.log(`Entered ${slowButton.innerHTML} button`)
};
//Mouse left event function:
function slowMouseOut(event){
  console.log(`Left ${slowButton.innerHTML} button`)
};



//STOP BUTTON:
function stopButtonClickResponse(event){
  console.log(event.target.textContent + " button was clicked");
  stopLight.classList.toggle("stop");

  //Console log bulb on/off
  if (stopLight.classList.length == 2){
    console.log(`${stopButton.innerHTML} bulb on`)
    //ADDED FEATURE TO TURN OFF OTHER LIGHTS IF THIS ONE IS ON:
    slowLight.classList.remove("slow");
    goLight.classList.remove("go");
  } else {
    console.log(`${stopButton.innerHTML} bulb off`)
  }

};
//Mouse over event function:
function stopMouseOver (event){
  console.log(`Entered ${stopButton.innerHTML} button`)
};
//Mouse left event function:
function stopMouseOut(event){
  console.log(`Left ${stopButton.innerHTML} button`)
};


//})();
