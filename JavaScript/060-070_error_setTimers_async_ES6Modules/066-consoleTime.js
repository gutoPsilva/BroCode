// console.time() = começa um timer para averiguar quanto tempo uma operação demora
//                  Dá a cada timer um nome único
//                  funciona apenas com CÓDIGO SÍNCRONO

// start
console.time("Response time");

// alert("Click the okay button");

setTimeout(() => console.log("HELLO"), 3000);

// end
console.timeEnd("Response time");