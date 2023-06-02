// rest parameters = permite que uma função receba um número INDEFINIDO de parâmetros
// ...               por exemplo em funções de soma, onde as entradas podem ser várias

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}