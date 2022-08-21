const stopWatch = document.getElementById('stopWatch');



let hundredth = 0;
let seconds = 0;
let minutes = 0;



 function displayTime(){
   let secondsString= seconds;
    if(seconds< 9){
      secondsString = '0' + seconds;
    }
  
stopWatch.innerHTML= `${minutes}:${ secondsString}:${hundredth}`;
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
setInterval(timeChange,10);




