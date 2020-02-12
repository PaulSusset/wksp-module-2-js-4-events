// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
const main = document.getElementById('main');
const para = document.createElement('p');
main.appendChild(para)

function paraShow(event) {
    para.innerText = 'CONGRATULATIONS!!';
    body.removeEventListener('click', paraShow);
    console.log('clicked');
}
main.addEventListener('click', paraShow);

