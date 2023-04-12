// escopo de variável = onde uma variável é acessível

// let = variáveis são limitadas em um escopo de bloco {} || não escapa das chaves 
// var = variáveis são limitadas em uma função () {} || não escapa das funções

// variáveis globais = declarado fora de qualquer função
// (se for global, VAR vai MUDAR propriedades da janela do navegador)
/*
var name = "Bro";

doSomething();

function doSomething(){
    for(var i = 1; i<=3; i++){
        //console.log(i);
    } 
}

console.log(i);
*/

let name = "Bro";