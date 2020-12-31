const colors = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];

const btn = document.getElementsByClassName('btn');
let colorText = document.getElementsByClassName('color-text');

btn[0].addEventListener("click", colorChange);

function colorChange () {
    let colorCode = '#';
    for(let i=0; i<6; i++) {
        colorCode += colors[randomNumber()];
    }    
    document.body.style.backgroundColor = colorCode;
    colorText[0].textContent = colorCode;

}

function randomNumber () {
    return Math.floor(Math.random() * colors.length);
}