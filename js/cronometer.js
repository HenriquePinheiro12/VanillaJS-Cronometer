var mil = 0;
var sec = 0;
var min = 0;
var hour = 0;

var intervalId;
var intervalOn = false;

const miliBox = document.querySelector('.mili-box');
const secBox = document.querySelector('.seconds-box');
const minBox = document.querySelector('.minutes-box');
const hourBox = document.querySelector('.hours-box');

const mili = miliBox.querySelector('.mili');
const seconds = secBox.querySelector('.seconds');
const minutes = minBox.querySelector('.minutes') ;
const hours = hourBox.querySelector('.hours');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
// do a func for each of them 


// Used this func before knowing padStart func
//
// const pad = (n) =>{
//     // represents numbers under 10 with an aditional 0
//     // ex: 05
//     return n < 10 ? '0'+n : n;
// }

const showHideBtns = () =>{
    if(!intervalOn){
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
    } else {
        stopBtn.classList.remove('hidden');
        startBtn.classList.add('hidden');
    }

    if(mil == sec == min == 0){
        resetBtn.classList.add('hidden')
    } else{
        resetBtn.classList.remove('hidden');
    }
}

const count = () =>{
        mil++;
        if(mil >= 10){
            sec++;
            mil = 0;
        }
        if(sec >= 60){
            min++;
            sec = 0
        }
        if(min >= 60){
            hour++;
            min = 0
        }
}

const updateCron = () =>{
    if(min > 0){
        minBox.classList.remove('hidden');
    } else{minBox.classList.add('hidden')}

    if(hour > 0){
        hourBox.classList.remove('hidden');
    } else{hourBox.classList.add('hidden')}

    mili.innerHTML = String(mil).padStart(2, 0);
    seconds.innerHTML = String(sec).padStart(2, 0);
    minutes.innerHTML = String(min).padStart(2, 0);
    hours.innerHTML = String(hour).padStart(2, 0);
}

const start = () =>{  
    intervalOn = true;
    updateCron();
    setTimeout(showHideBtns, 101)
    intervalId = setInterval(()=>{
        updateCron();
        count();
    },100)
}

const stopCron = () =>{
    clearInterval(intervalId);  
    intervalOn = false;
    showHideBtns(); 
}

const reset = ()=>{
    stopCron();
    intervalOn = false;
    if(intervalOn)
        clearInterval(intervalId);
    mil = sec = min = hour = 0;
    showHideBtns();
    updateCron(); 
}

showHideBtns();
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stopCron);
resetBtn.addEventListener('click', reset);