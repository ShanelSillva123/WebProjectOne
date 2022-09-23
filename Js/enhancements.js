// Slogan appearing animation

const text = document.querySelector(".headertext-content h1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 20);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer =null;
}


// content appear

window.onload = function(){
    const EFFECT = document.querySelector("#effect");

    window.addEventListener('scroll', scrollEffect);
    function scrollEffect () {
        if(window.scrollY >= 250) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        }
        else{
            EFFECT.style.opacity = '0';
            EFFECT.style.transform = 'translateX(-50px)';
        }
    }
    scrollEffect();
}
