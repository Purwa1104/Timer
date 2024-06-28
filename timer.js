let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

function updateTimerDisplay(){
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

}

function startTimer(){
    if(!isRunning){
    isRunning = true;
    timer = setInterval(()=>{ 
      seconds++;
      if(seconds==60){
        minutes++;
        seconds=0;
      }
      if(minutes==60){
        minutes=0;
        hours++;
      }
      updateTimerDisplay();
     },1000);
   }
}

function stopTimer(){
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function restartTimer(){
        stopTimer();
        seconds =0;
        minutes =0;
        hours =0;
        updateTimerDisplay();
         startTimer();

}