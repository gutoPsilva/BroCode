// operadores lógicos permitem verificar mais de uma condição simultaneamnete
// && AND (AMBOS DEVEM ser VERDADE)
// || OR  (apenas UM NECESSITA ser verdade)

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good.");
}
else{
    console.log("The weather is bad.");
}