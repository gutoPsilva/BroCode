// function = definir código uma vez para usar quantas vezes forem necessárias.
//            para executar o código, basta chamar o nome da função. COMO UM MÉTODO.

startProgram();

function startProgram(){ // let não permite que as variáveis sejam utilizadas fora do escopo, logo não são globais
    let userName = "Gustavo";
    let age = "18";
    
    happyBirthday(userName, age); // passar elas como argumento permite que a função saiba seus valores.
}

function happyBirthday(a, b){ // receba os argumentos
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${a}`);
    console.log("Happy birthday to you!");
    console.log(`You are ${b} years old!`);
}