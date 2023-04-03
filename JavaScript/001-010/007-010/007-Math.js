let x = 3.91;
let y = 5;
let z = 9;
let maximum;
let minimum;

// Math providencia funcionalidades básicas de matemáticas e CONSTANTES COMO PI NO FIM.
x = Math.round(x); // a função .round arredonda o valor de X para o inteiro mais próximo, no caso 3.
x = Math.floor(x); //a função .floor arredonda o valor de x para o inteiro abaixo, no caso 3.
x = Math.ceil(x); //a função .ceil arredonda o valor de x para o inteiro acima, no caso 4.
x = Math.pow(x, 2); //a função .pow é exponencial, o primeiro valor é a base e o segundo o expoente.
x = Math.sqrt(x); //a função .sqrt pega a raíz QUADRADA de x
x = Math.abs(x); //mostra o valor absoluto de zero, que é a distância até 0.
maximum = Math.max(x, y, z);  //a função .max vai pegar o MAIOR VALOR entre os informados(variáveis)
minimum = Math.min(x, y, z);  //a função .min vai pegar o MENOR VALOR entre os informados(variáveis)
x = Math.PI; //CONSTANTE PI da matemática

console.log(x);