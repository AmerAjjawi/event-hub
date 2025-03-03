const textElement = document.querySelector('.hero1-typing');
const text = textElement.textContent;
const hero = document.querySelector('.hero1');
const heroBeginning = hero.textContent;
//sppeed controller
const delay = 200;
let i = 0;
setInterval(() => {
    // hero.innerHTML = heroBeginning.substring(0,i);
    // i += 1;

    // if (i >= heroBeginning.length) {
    //     i = -1;
    // }
    textElement.innerHTML = text.substring(0, Math.abs(i));
    i += 1;
    if (i >= text.length) {
        i *= -1;
       
    }
   
}, delay)