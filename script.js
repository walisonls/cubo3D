let rotateX = 329;
let rotateY = 59;


function adicionarX(){
    rotateX = rotateX + 3

    document.querySelector(".cube").style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
}

function removerX(){
    rotateX = rotateX - 3

    document.querySelector(".cube").style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
}

function adicionarY(){
    rotateY = rotateY + 3

    document.querySelector(".cube").style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
}

function removerY(){
    rotateY = rotateY - 3

    document.querySelector(".cube").style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;
}

adicionarX()