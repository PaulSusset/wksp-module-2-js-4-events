const buttons = [];
const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('grid')
body.appendChild(div);

for (let i=1; i < 21; i++ ) {
    buttons.push(i);
    let button = document.createElement('button');
    button.innerText = i
    button.id = `button${i}`;
    button.classList.add('style')
    div.appendChild(button);
    button.style.top = Math.floor((Math.random() * 90)+1 )+'%';
    button.style.right = Math.floor((Math.random() * 90)+1 )+'%';
}
function togG(event){
    let x = event.target.id
    document.getElementById(x).classList.toggle('green')
}


div.addEventListener('click', togG);