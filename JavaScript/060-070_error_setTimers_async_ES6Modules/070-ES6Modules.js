//  Um módulo é um arquivo de código reutilizável
//  podemos importar seções de códigos pré-escritos quando quisermos
//  ótimo para quaisquer utilidades gerais de valores e funções
//  Ajuda o seu código a ser reusável e sustentável
//  São como capítulos separados de um livro
//  estamos IMPORTANDO E EXPORTANDO CÓDIGOS ENTRE scripts.js 

// import {PI, getArea, getCircumference} from "./math_util.js"
// importar TUDO com o nome MathUtil, utilizando esse nome para acessar os códigos dentro dele
import * as MathUtil from "./math_util.js"

console.log(MathUtil.PI);
  
let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);