

const body = document.querySelector('body')
const time = Math.floor(Math.random() * 4000)+2000
const pingPositionX = Math.floor(Math.random()*70)+15;
const pingPositionY = Math.floor(Math.random()*50)+10;
let winner = ''
let timeout = undefined

const pingSpot = document.getElementById('pingSpot');

function goToMenu(event){
    document.getElementById('menu').style.display = 'flex'
    document.getElementById('instructions').style.display = 'none'

}

function createInst(){

    
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.instructions').style.display = 'block';
    document.getElementById('exit').addEventListener('click', goToMenu);
};
function reset(){
    document.getElementById('winSound').pause();
    document.getElementById('victory').style.display = 'none';
    document.getElementById('victory').style.display = 'none';
    pingSpot.style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    document.querySelector('#menu').addEventListener('click', firstPage);
    document.getElementById('kirbyScore').innerHTML = '';
    document.getElementById('sonicScore').innerHTML = '';
}
function endGame(){
    winAudio()
    document.getElementById('victory').style.display = 'flex'
    document.getElementById('game').style.display = 'none'
    document.getElementById('victoryText').innerText = `${winner} is the victor!`;
    document.getElementById('reset').addEventListener('click', reset)
}
function p1Point(){
    clearTimeout(timeout)
    document.removeEventListener('keydown', playerWin);
    document.getElementById('kirbyScore').innerHTML += '<img class="sprites" src="./imgs/prize.gif" alt="ring">';
    if (document.getElementById('kirbyScore').innerHTML.length === 165){
        winner = 'Player 1';
        endGame();
        } else {
        pingSpot.style.display = 'none';
        startPing();
    }
}
function winAudio(){
    document.getElementById('audio').pause();
    document.getElementById('ping').pause();
    document.getElementById('ping').pause();
    document.getElementById('ping').pause();
    document.getElementById('ping').pause();
    document.getElementById('winSound').play();
    document.getElementById('winSound').volume = 0.2;
}
function p2Point(){
    clearTimeout(timeout)
    document.removeEventListener('keydown', playerWin);
    document.getElementById('sonicScore').innerHTML += '<img class="sprites" src="./imgs/prize.gif" alt="ring">';
    if (document.getElementById('sonicScore').innerHTML.length === 165){
        winner = 'Player 1';
        endGame();
    } else {
        pingSpot.style.display = 'none';
        startPing();
    }
}

function playerWin(event){
    key = event.key;
    if (key === 'q'){
        p1Point()
    } if (key ==='p'){
        p2Point()
    }
}

function ping(){
    document.getElementById('ping').play();
    document.getElementById('ping').volume = 0.2;
    pingSpot.style.top = `${pingPositionY}%`;
    pingSpot.style.left = `${pingPositionX}%`;
    pingSpot.style.display = 'block';
    document.removeEventListener('keydown', playerLose);
    document.addEventListener('keydown', playerWin);
}
function startPing(){
    timeout = setTimeout(ping, time);
    document.getElementById('audio').play();
    document.addEventListener('keydown', playerLose);
}
function playerLose(event){
    key = event.key;
    if (key === 'q'){
        p2Point();
    } if (key === 'p'){
        p1Point();
    }
    
}
function start(){
    
    document.getElementById('audio').volume = 0.1;
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#game').style.display = 'flex';
    document.querySelector('#menu').removeEventListener('click', firstPage);
    startPing()
    
}
function firstPage(event){
    x = event.target.id;
    if (x === 'inst'){
        createInst()
    } if (x === 'start'){
        start();
    }
}
document.querySelector('#menu').addEventListener('click', firstPage)