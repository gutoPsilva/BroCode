// ternary operator = shortcut para um 'if/else statement'
//                    toma 3 operandos

//                    1. uma condição com ?
//                    2. expressão if True :
//                    3. expressão if False

// condição ? exprIfTrue : exprIfFalse

/*
let adult = checkAge(12);
console.log(adult);

function checkAge(age){
    
    return age >= 18 ? true : false;

}
*/

checkWinner(false);

function checkWinner(win){
    win ? console.log("You win!") : console.log("You lose.");
}