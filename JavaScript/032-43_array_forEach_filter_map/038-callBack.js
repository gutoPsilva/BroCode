// callback = uma função passada como argumento para outra função

// Garante que uma função não vai rodar antes de uma task anterior ser completa.
// Possibilita desenvolver código assíncrono.
// Ajuda a evitar problemas, como:
// Esperar um arquivo carregar antes de abrir.

sum(2, 3, displayDOM);

function sum(x, y, callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}