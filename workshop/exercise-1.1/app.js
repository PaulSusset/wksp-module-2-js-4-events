// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const myBod = document.querySelector('body');
let win = false

function handleMyBod(){
    const pText = document.querySelector('.result');
    win = true;
    document.querySelector('#result').innerText = 'You win!  :)';
    myBod.removeEventListener('click', handleMyBod);
}

    setTimeout(function(){
        if (win != true){
        console.log('fff')
        myBod.removeEventListener('click', handleMyBod);
        document.querySelector('#result').innerText = 'You lose HAH!';
    }
}, 1000)


myBod.addEventListener('click', handleMyBod);


