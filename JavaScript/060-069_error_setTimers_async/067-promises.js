// promise = objeto que encapsula o resultado de uma operação ASSÍNCRONA
//           permite que métodos assíncronos retornem valores como métodos síncronos
//           "Eu prometo retornar algo no futuro"

//           promessas tem ESTADO, 'pendente' então: 'completo' OU 'rejeitado'
//           o resultado é o que pode ser retornado
//           2 partes, produzindo e consumindo

// produzindo o RESULTADO
// const promise = new Promise((resolve, reject) => {

//   let fileLoaded = false;

//   if(fileLoaded){
//     resolve("File loaded");
//   }else{
//     reject("File not loaded");
//   }

// });

// // consumindo o RESULTADO

// promise.then(value => console.log(value))
//     .catch(error => console.log(error));

const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));