// ! NOT operador lógico
// usado para reverter o valor booleano de uma condição NEGAÇÃO
// true -> false / false -> true

let temp = 15;
let sunny = true;

if(!(temp>0)){
    console.log("It's cold outside.");
}
else{
    console.log("It's warm outside.");
}

if(!sunny){
    console.log("It's cloudy outside.");
}
else{
    console.log("It's sunny outside.");
}