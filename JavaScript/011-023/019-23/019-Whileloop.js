// while = repetir um código | laço de repetição
//         enquanto uma condição é verdade, potencialmente infinito

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name:");
}

console.log(`Hello ${userName}!`);