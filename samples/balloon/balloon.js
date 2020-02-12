

    


const balloon = document.querySelector('#balloon');
let balloonSize = 12
balloon.style.fontSize = `${balloonSize}px`
const MIN_SIZE = 6;
const MAX_SIZE = 108;
increment = 3;
const MAX_EXPLOSION_SIZE = 1000;

function handleKeyDown(event) {

    if (event.key === 'ArrowUp'){
        // if 'arrow up' 
        // balloon bigger
        if (balloonSize <= MAX_SIZE){
            balloonSize += increment;
            balloon.style.fontSize = `${balloonSize}px`;
        } 
        // if balloon is bigger than X; (font size used since this is an emoji)
                    
        else {
            // remove event listener
            document.removeEventListener('keydown', handleKeyDown)
            // remove balloon / add in explosion emoji 
            balloon.innerText = '💥';
            // explosion grows incrementally
            const explosion = setInterval(function(){
                balloonSize += 10;
                balloon.style.fontSize = `${balloonSize}px`;
                // clear interval - Stop growing
                if (balloonSize >= MAX_EXPLOSION_SIZE){
                    clearInterval(explosion);
                    // fadeout
                    balloon.style.opacity = 0;
                };
            }, 50);
               // if explosion size Y
            // balloon.style.opacity = '0';
            // balloon.style.fontSize = '400px';
        }
        
        

    } else if (event.key === 'ArrowDown'){
        
        if (balloonSize >= MIN_SIZE) {
            balloonSize -= increment;
            balloon.style.fontSize = `${balloonSize}px` // necessary since the page won't read the top lines again
        }
            // if 'arrow down'
        // if balloon is bigger than z
            // balloon smaller 
    }

}
// event listener that listens for 'keydown'
document.addEventListener('keydown', handleKeyDown);