// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.


// I don't understand the difference with the last excercise

const myBod = document.querySelector('body');
let myP = document.querySelector('#result');
let timeWind = document.querySelector('#timer');
const time = Math.floor((Math.random() * 5) + 1);
timeWind.innerText = time;
let win = false

const myTimer = setInterval(function(){
    if (!win && timeWind.innerText >0 ){
        timeWind.innerText--;
    } else if (timeWind.innerText <= 0){
        clearInterval(myTimer)
        myP.innerText = 'You lose';
        window.removeEventListener('click', clicky);
    }
}, 1000)

function clicky(){
    myP.innerText = 'You win';
    window.removeEventListener('click', clicky);
    clearInterval(myTimer)
}

window.addEventListener('click', clicky);