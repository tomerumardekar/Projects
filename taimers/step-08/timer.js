 //timer.js
 export default function Timer(initialTime){
   let time = initialTime;
   let timerElement;
function startTimer(){
    console.log('timer is started');
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

   this.creatTimer = function(){
        console.log('create timer');
       
         timerElement = document.createElement('div');
       timerElement.innerText = time;
      
       creatStartButton();
    creatDeleteButton();
       
    document.getElementById('timers-container').appendChild(timerElement);
    };
   
}
