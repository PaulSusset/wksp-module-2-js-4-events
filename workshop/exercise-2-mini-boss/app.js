//1. contains 3 sections (one for each of the following)
// 1. displays the current time
// 2. contains a start/stop button with a stopwatch which starts at 00:00 
// and continues until the user clicks "stop"
// 3. contains a timer where the user can enter a number of seconds, 
// click start and the timer counts down to 0. 
// There should be a sound announcingthe end as well.





// 1 - research
function giveTime() {
    const today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    document.querySelector('#timeOfDay').innerText = time;
    setTimeout(giveTime, 1000);
}
giveTime();

// 2 - create a button and timer
const timerReset = 0;
const stopwatch = document.querySelector('#stopwatchTimer');
const button = document.querySelector('#btn');
const reset = document.querySelector('#reset');
let started = false;

let mil = '00';
let sec = '00';
let min = '00';
let hour = '00';
function start(){
    x = setInterval(timer, 10);
};
function stop(){
    clearInterval(x)
};


function startClick(){
    if (!started) {
        started = true;
        start();        
    } else {
        started = false;
        stop();
    }
};
function timer(){
    mil++
    if (mil === 100){
        mil = 00;
        sec++; 
    } if (sec === 60) {
        sec = 00;
        min++;
    } if (min === 60) {
        min = 00;
        hour++;
    }
    document.querySelector('#millisec').innerText = mil;
    document.querySelector('#seconds').innerText = sec;
    document.querySelector('#minutes').innerText = min;
    document.querySelector('#hours').innerText = hour;
};
function resetClick(){
    clearInterval(x);
    started = false;
    mil = '00';
    sec = '00';
    min = '00';
    hour = '00';

    document.querySelector('#millisec').innerText = mil;
    document.querySelector('#seconds').innerText = sec;
    document.querySelector('#minutes').innerText = min;
    document.querySelector('#hours').innerText = hour;

}

button.addEventListener('click', startClick);
reset.addEventListener('click', resetClick);

//  3 - input space
    //button to start countdown
    // play sound file when it hits 0

const button2 = document.querySelector('#cbtn');
const input = document.querySelector('#input');

function playAudio(){
    document.querySelector('#audio').play();
};

function oneDown(){
    input.value--;
    console.log(input.value)
    if (input.value < 1 ){
        clearInterval(x);
        playAudio();
    };
};

function countdown(){
    x = setInterval(oneDown, 1000);
};

button2.addEventListener('click', countdown);