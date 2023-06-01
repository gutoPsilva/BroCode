// synchronous code = código executado em uma ordem sequencial, passo a passo
//                    começa agora - termina agora
// asynchronous code = código executado fora de sequência
//                    começa agora - termina um tempo depois, SEM PAUSAR A EXECUÇÃO DO PROGRAMA

console.log("Start");
setTimeout(() => console.log("This is asynchronous"), 5000)
console.log("END");

