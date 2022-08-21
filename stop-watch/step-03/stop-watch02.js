const stopWatchView=document.querySelector('#stop-watch-view');

let hundredth = 0;
let seconds = 0;
let minutes =0;


function displayTime(){

// option to present arguments

   // stopWatchView.innerHTML = minutes+ ':' + seconds + ':'+ hundredth;

    stopWatchView.innerHTML=`${minutes}:${seconds}:${hundredth}`;
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

setInterval(handleTimeChange,10);