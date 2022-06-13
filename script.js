var rotateX = 329;
var rotateY = 59;

document.querySelector(".cube").style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;

function degTop(){
    rotateX = rotateX + 3
}