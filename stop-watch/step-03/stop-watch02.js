const stopWatchView=document.querySelector('#stop-watch-view');

let hundredth = 44;
let seconds = 34;
let minutes =12;


function displayTime(){

// option to present arguments

   // stopWatchView.innerHTML = minutes+ ':' + seconds + ':'+ hundredth;

    stopWatchView.innerHTML=`${minutes}:${seconds}:${hundredth}`;
}

displayTime();