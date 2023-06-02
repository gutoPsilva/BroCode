// array = variável que guarda diversos valores

let fruits = ["apple", "banana", "orange"];

//fruits[0] = "coconut";

fruits.push("lemon");    // adiciona um elemento ao fim, como o append.
fruits.pop();            // remove o elemento do fim
fruits.unshift("mango"); // adiciona um elemento ao inicio.
fruits.shift();          // remove o elemento do inicio.

let lenght = fruits.lenght; // comprimento do array, qntd de elementos.
let index  = fruits.indexOf("banana"); // retorno de -1 não foi encontrado

console.log(index);