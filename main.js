//ボタン部//
const Getdisplay =document.querySelector("display");
const startButton =document.querySelector("button.start");
const stopButton =document.querySelector("button.stop");
const resetButton =document.querySelector("button.reset");
stopButton.disabled = true; resetButton.disabled = true;

//タイマー部//
let hours = 0;
let minutes= 0;
let seconds= 0;
let seconds2= 0;

let Getinterval;

function stopwatch(){
  seconds2++;
   if(seconds2 / 10 == 1 ){
     seconds++;
     seconds2= 0;
     if( seconds / 10 == 1){  
       minutes++;
       seconds = 0;
       if( minutes / 10 == 1 ){
        hours++
        minutes = 0 ;
     }
    }
   }
   display.innerHTML=hours+":"+minutes+":"+seconds+":"+seconds2 ;
}

//スタートボタン//
startButton.addEventListener("click",function(){
  startButton.disabled = true; stopButton.disabled = false; resetButton.disabled = false;
    Getinterval = setInterval(stopwatch,100);
    Getstatus = "start";
})

//ストップボタン//
stopButton.addEventListener("click",function(){
  startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = false;
  clearInterval(Getinterval);
})


//リセットボタン//
resetButton.addEventListener("click",function(){
startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = true;
clearInterval(Getinterval);
display.innerHTML = "0:0:0:0";
})