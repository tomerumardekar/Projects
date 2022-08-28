 //timer.js
 export default function Timer(initialTime){
   let time = initialTime;
   let timerElement;
   let timeView;
let intervalId;
function  displayTime(){
  time--;
  if (time < 0){
    stopTimer();
    return;
  }
  timeView.innerText = time;
}

function startTimer(){
    console.log('timer is started');
   intervalId = setInterval(displayTime,1000);
}

function stopTimer(){
clearInterval(intervalId);
}

function deleteTimer(){
  timerElement.remove();
}
 
function creatStartButton(){
    const startButton = document.createElement('button');
        startButton.innerText = 'start';
        startButton.addEventListener('click',startTimer);
          timerElement.appendChild(startButton);
 
   }
  
   function creatDeleteButton() { 
 const deleteButton = document.createElement('button');
          deleteButton.innerText = 'delete';
           deleteButton.addEventListener('click',deleteTimer);
          timerElement.appendChild(deleteButton);
   }

   function createTimeViev(){
     timeView = document.createElement('span');
    timerElement.appendChild(timeView);
   }

   this.creatTimer = function(){
        console.log('create timer');
       
         timerElement = document.createElement('div');
       
       
       createTimeViev();
       timeView.innerText = time;
       creatStartButton();
    creatDeleteButton();
     
    document.getElementById('timers-container').appendChild(timerElement);
    };
   
}
