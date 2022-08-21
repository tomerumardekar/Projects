const stopWatchView=document.querySelector('#stop-watch-view');
const toggleStopWatchButton = document.getElementById('toggle-stop-watch');
toggleStopWatchButton.addEventListener('click', toggleStopWatch);

let hundredth = 0;
let seconds = 0;
let minutes =0;


function displayTime(){

// option to present arguments

   // stopWatchView.innerHTML = minutes+ ':' + seconds + ':'+ hundredth;
let secondsString = seconds;
if(seconds<10){
    secondsString='0' + seconds;
}

let minutesString =minutes;
if(minutes<10){
   minutesString='0' + minutes;
}

    stopWatchView.innerHTML=`${minutesString}:${secondsString}:${hundredth}`;
}



function handleTimeChange(){
    hundredth++;
  if(hundredth > 99){
    hundredth = 0;
    seconds++;
   
    if(seconds > 59){
    seconds = 0;
    minutes++;
  }
}
    displayTime();
}

let intervalId = null;
function toggleStopWatch(){
  if(intervalId == null){
    //start the stop watch
  intervalId = setInterval(handleTimeChange,10);
 toggleStopWatchButton.innerHTML='stop';
  }else{
//stop the stop watch
clearInterval(intervalId);
toggleStopWatchButton.innerHTML='start';
intervalId = null;
  }

}

/*  const togglesStopWatchButton= document.togglesStopWatchButton.getElementById('toggle-stop-watch').addEventListener('click',toggleStopWatch); */
