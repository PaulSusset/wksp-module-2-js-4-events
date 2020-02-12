const body = document.querySelector('body');
let buttons = [];
const myDiv = document.querySelector('#container');
let win = false;
let clicked = []; 

let random = Math.ceil((Math.random() * 5) )+1;
function playFF(){
    document.querySelector('#FF7').play();
    document.querySelector('#FF7').volume = 0.3;
}
function playGuile(){
    document.querySelector('#guile').play();
    document.querySelector('#guile').volume = 0.3;
}
function pauseGuile(){
    document.querySelector('#guile').pause();
}

for (let i=1; i<random; i++){
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `button${i}`;
    button.classList.add('base')
    myDiv.appendChild(button);
    button.style.position = 'absolute';
    button.style.top =  Math.floor((Math.random() * 90)+1)+ '%';
    button.style.left =  Math.floor((Math.random() * 90)+1)+ '%';
    buttons.push(button.id);
    button.addEventListener('click', toggleG);
}
function toggleG(event){
    x = event.target.id;
    document.getElementById(x).classList.toggle('green')
    clicked.push(x);
    if (checkArray(clicked, buttons)){
        stop();
        buttons.forEach(function(x, i){
            document.querySelector(`#button${i+1}`).removeEventListener('click', toggleG);
        })
        document.querySelector('#countdown').innerText = 'YOU WIN!!';
        playFF();
        pauseGuile();
    }
}

function checkArray(a, b){
    a.sort();
    b.sort();
    
    let arr1 = Array.from(new Set(a));
    let arr2 = Array.from(new Set(b));
    arr1.toString(',');
    arr2.toString(',');
    console.log(arr1);
    console.log(arr2);
    if (arr1.toString(',') === arr2.toString(',')){
        return true;
    }
}
let mil = '00';
let sec = random; 
let z = undefined
function start(){
    z = setInterval(timer, 10);
    console.log(z);
};
function stop(){
    clearInterval(z);
};
function timer(){
    mil--
    if (sec <= 0 && mil <= 0){
        stop();
        document.querySelector('#countdown').innerText = 'YOU LOSE';
        buttons.forEach(function(x, i){
            document.querySelector(`#button${i+1}`).removeEventListener('click', toggleG);
        })
            
        console.log('lose')
    } if (mil <= 0){
        sec--;
        mil = 100;
    };
    document.querySelector('#millisec').innerText = mil;
    document.querySelector('#seconds').innerText = sec;
};
function stopUlt(){
    let y = setTimeout(stop, {random} * 1000);
};
stopUlt();


function startGame(event){
    myDiv.style.visibility = 'visible';
    document.querySelector('#start').style.visibility = 'hidden';
    playGuile();
    start()
    

}

document.querySelector('#start').addEventListener('click',startGame)