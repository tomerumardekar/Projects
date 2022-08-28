function Timer (initialTime){
    let timerElement;
    this.initialTime = initialTime;
    this.deleteTimer = function(){
        timerElement.remove();
    };
    this.creatTimer = function(){
        const timerContainer = document.getElementById('taimers-conteiner');
        timerElement = document.createElement('div');
        
        //start button
        const startButton = document.createElement('button');
       /*  startButton.addEventListener('click') */
       startButton.innerText = 'Start';
      
       //Delete button
       const deleteButton = document.createElement('button');
       deleteButton.addEventListener('click',this.deleteTimer);
       deleteButton.innerText = 'Delete';

       //pause button
       const pauseButton = document.createElement('button');
       pauseButton.innerText = 'Pause';
       
       timerElement.innerText = this.initialTime;
       timerElement.appendChild(startButton);
       timerElement.appendChild(deleteButton);
       timerElement.appendChild(pauseButton);
       timerContainer.appendChild(timerElement);
    };

}
export default Timer;