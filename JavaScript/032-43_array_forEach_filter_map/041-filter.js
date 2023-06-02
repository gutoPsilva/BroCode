// array.filter() = cria uma nova array com todos os elementos que passam por um teste
//                                                   fornecido por uma função

let ages = [18, 16, 19, 21, 17, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}