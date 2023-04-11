// toLocaleString() = retorna uma string com uma lingua sensível a representação desse número

// number.toLocaleString(locale, {options}) 2 parâmetros

// locale = especifica a língua (undefined -> então usa o padrão definido pelo browser)
// options = objeto com opções de formatação (moeda, percentagem, etc)

let myNum = 100;

// myNum = myNum.toLocaleString("pt-BR"); formatação para Brasil

// myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}); monetário BR
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency:"EUR"}); monetário EURO

// myNum = myNum.toLocaleString(undefined, {style: "percent"}); percentual

myNum = myNum.toLocaleString(undefined, {style: "unit", unit:"celsius"}); // grandezas

console.log(myNum); 