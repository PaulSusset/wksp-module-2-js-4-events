// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

const myBod = document.querySelector('body');
let win = false;
const myP = document.querySelector('#result');
const timer = Math.floor((Math.random() * 5) +1)
let timeLeft = document.querySelector('#time');
timeLeft.innerText = timer;

const myTimer = setInterval(function(){
    if (!win && timeLeft.innerText > 0) {
        timeLeft.innerText--;
        
    } else if (timeLeft.innerText <= 0 ) {
        clearInterval(myTimer);
        myBod.removeEventListener('click', clicky);
        myP.innerText = 'You lose!'
    }
}, 1000)

function clicky(){
    win = true;
    myBod.removeEventListener('click', clicky);
    myP.innerText = 'You win!';
    clearInterval(myTimer);
}

myBod.addEventListener('click', clicky);