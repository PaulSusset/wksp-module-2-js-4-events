const body = document.querySelector('body');
let buttons = []
div = document.createElement('div');
div.classList.add('grid');
body.appendChild(div);


for (i=1; i<21; i++){
    buttons.push(i);
}

function buttonOut(x){
    button = document.createElement('button');
    button.innerText = x;
    button.id = `button${x}`;
    button.classList.add('style');
    div.appendChild(button);

}
buttons.forEach(buttonOut)

function turnG(event){
    let x = event.target.id
    console.log(x)
    document.getElementById(x).classList.toggle('green');
    console.log('yes')
}

for (i=1; i<21; i++){
    let zzz = document.querySelector(`#button${i}`)
    zzz.addEventListener('click', turnG);
};