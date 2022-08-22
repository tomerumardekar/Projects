const stopWatch = document.getElementById('stopWatch');
const startStop=document.getElementById('start-stop');
startStop.addEventListener('click',startButton);
const restartButton =document.getElementById('restart');
restartButton.addEventListener('click',restart);
const lapsButton = document.getElementById('laps');
lapsButton.addEventListener('click',addLaps);
const lapsViev =document.getElementById('laps-view');

let hundredth = 0;
let seconds = 0;
let minutes = 0;



 function displayTime(){
   let secondsString= seconds;
    if(seconds< 9){
      secondsString = '0' + seconds;
    }
  let minuteString = minutes;
  if(minutes < 9){
  minuteString = '0' + minutes;
  }
  let hundredthString = hundredth;
  if(hundredth < 9){
 hundredthString = '0' + minutes;
  }
stopWatch.innerHTML= `${minuteString}:${ secondsString}:${hundredthString}`;
return `${minuteString}:${ secondsString}:${hundredthString}`;
}


function timeChange(){
hundredth++;
 if(hundredth>99){
  hundredth=0;
  seconds++;
}
if(seconds>59){
  seconds=0;
  minutes++;
} 
displayTime();
}
/* setInterval(timeChange,10); */

let zeroing = null;
function startButton(){
  if(zeroing == null){
    zeroing = setInterval(timeChange,10);
startStop.innerHTML='Stop';
  }else{
  clearInterval(zeroing);
 startStop.innerHTML='Start';
  zeroing = null;
  }
  
}

function restart(){
 hundredth = 0;
 seconds = 0;
 minutes = 0;
displayTime();
}

function addLaps(){
lapsViev.innerHTML +=`<li>${displayTime()} </li>`;

}
