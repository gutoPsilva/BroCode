// spread operator = separa cada valor dentro de uma array com um espaço.
// ...               quando vamos usar funções do Math como o MAX, precisamos utiliza-lo, para que 
//                   o MATH possa ver cada número separado e compara-los.
//                   você descompacta os elementos de dentro para que possam ser utilizados.

/*
let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let maximum = Math.max(...numbers);
console.log(maximum);
*/

let class1 = ["Bob", "Sponge", "Patrick", "Bateman"];
let class2 = ["Squid", "Ward", "Mr", "Plankton"];

class1.push(...class2);
console.log(class1)