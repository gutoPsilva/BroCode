// await = faz uma função assíncrona esperar por uma promessa
//         deve estar dentro de outra função assíncrona para executar
//         código de RISCO, caso haja erro utilize o TRY & CATCH
//         pois não a o .then() ou o .catch()

async function loadFile(){
  let fileLoaded = false;

  if(fileLoaded){
    return "File loaded";
  }else{
    throw "File not loaded";
  }
}

async function startProcess(){
  try{
    let msg = await loadFile();
    console.log(msg);
  }
  catch(error){
    console.log(error);
  }
};

startProcess();