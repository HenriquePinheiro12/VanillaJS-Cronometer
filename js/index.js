var sec = 0
var min = 0
var hour = 0

var intervalId;

const secBox = document.querySelector('.seconds')
const minBox = document.querySelector('.minutes')
const hourBox = document.querySelector('.hours')

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelecetor('.reset');
// do a func for each of them 

const pad = (n) =>{
    return n < 10 ? '0'+n : n;
}


const start = (initialSec, initialMin, initialHour) =>{
    intervalId = setInterval(() =>{
        
    })
}