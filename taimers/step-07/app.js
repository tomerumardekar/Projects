import Timer from './timer.js'
document.getElementById('create-timer').addEventListener('click',addTimer);
const timerInput=document.getElementById('timer-input');

function addTimer(){
    const initialTime = timerInput.value;
    const timer = new Timer (initialTime);
    timer.creatTimer();
}