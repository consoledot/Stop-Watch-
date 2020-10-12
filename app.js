const timer = 60;
const minutes = document.getElementById('minutes');
const seconds = document.getElementById("seconds");
const hours = document.getElementById("hours");
const milliSeconds = document.getElementById("milli-seconds")
const startButton = document.querySelector(".start")
const reset = document.querySelector(".reset p")
const stop = document.querySelector(".stop p")
const startIcon = document.querySelector(".fa")
const timerBody = document.querySelector(".timer-body")
let secondsCounter =0;
let hoursCounter = 0;
let minutesCounter = 0;
let milliSecondsCounter =0;
let isCounting = false;

const displayCounter =()=>{
   milliSeconds.textContent = milliSecondsCounter;
   seconds.textContent = secondsCounter
   minutes.textContent = minutesCounter
   hours.textContent = hoursCounter
}

const timeCounter = ()=>{
   displayCounter()
    if(milliSecondsCounter >= 99){
       milliSecondsCounter = 0;
       secondsCounter++
       if(secondsCounter >= 59){
         secondsCounter =0;
         minutesCounter++
         if(minutesCounter >= 59){
            minutesCounter = 0;
            hoursCounter++
         }
      }
    }else{
       milliSecondsCounter++
    }
    
}


 const resetCounter = ()=>{
    secondsCounter =0;
    hoursCounter = 0;
    minutesCounter = 0;
    milliSecondsCounter =0;
    displayCounter()
 }
const interval =(value)=>{
   !value ? start = setInterval(timeCounter,10) : clearInterval(start);
}
const stopCounter = ()=>{
   isCounting = false
   clearInterval(start)
   resetCounter()
   startIcon.classList.remove("fa-pause")
   startIcon.classList.add("fa-play")
   timerBody.classList.remove("stop-counter")
}
const counter =()=>{
   interval(isCounting)
   if(isCounting){
      isCounting = false
      startIcon.classList.remove("fa-pause")
      startIcon.classList.add("fa-play")
      timerBody.classList.add("stop-counter")
   }else if(!isCounting){
      isCounting= true
      startIcon.classList.remove("fa-play")
      startIcon.classList.add("fa-pause")
      timerBody.classList.remove("stop-counter")
   } 
}

reset.addEventListener("click",resetCounter)
startButton.addEventListener('click',counter) 
stop.addEventListener("click", stopCounter)
window.addEventListener("keydown", (e)=>{
   if(e.keyCode == 32){
      counter()
   }
   if(e.keyCode == 82){
      resetCounter()
   }
   if(e.keyCode == 83){
      stopCounter()
   }
})