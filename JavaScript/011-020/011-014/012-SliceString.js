// slice() corta um pedaço de uma string,
//   e retorna isso como uma nova string,
//       SEM MODIFICAR A STRING ORIGINAL

let fullName = "Snopp Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 7);  G -> 0 o -> 6, porém ele corta, então coloque +1
//lastName = fullName.slice(19);  se não for fornecido o segundo parâmetro, ele vai até o fim.

// verificar quando há espaço para determinar separação e definir quem é primeiro e último
firstName = fullName.slice(0, fullName.indexOf(" ")); // vai do primeiro caracter até o primeiro espaço
lastName = fullName.slice(fullName.indexOf(" ") + 1); // apenas 1 parâmetro, vai depois do espaço até o fim

console.log(firstName);
console.log(lastName);