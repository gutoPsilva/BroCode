const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("submitBtn").onclick = function() {

    let guess = document.getElementById("guessField").value;

    if(guess >= 1 && guess <= 10){
        guesses += 1; // conta 1 tentativa apenas após confirmar o número digitado
        if(guess == answer){
            alert(`${answer} é o número. Você teve ${guesses} tentiva(s) até acertar.`);
        }
        else if (guess < answer){
            alert("Muito pequeno!");
        }
        else{
            alert("Muito grande!");
        }
    }
    else{
        alert("Você não digitou um número válido!");
    }
}