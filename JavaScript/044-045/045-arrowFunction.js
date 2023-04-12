// arrow function = versão compacta de uma tradicional função expressiva
//      =>

/*
const greeting = function(userName){
    console.log(`Hello ${userName}`);
}
*/

// 0 arg -> (); 1 arg -> userName || (userName); 2 arg -> (userName, lastName)
// {} necessário após o => se for mais do que 1 comando.
// const greeting = userName => console.log(`Hello ${userName}`);

/*
const percent = (x, y) => x / y * 100

é a mesma coisa que:
const percent = function(x, y){
    return x / y * 100
}
*/

let grades = [100, 50, 90, 60, 80, 70];
grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));