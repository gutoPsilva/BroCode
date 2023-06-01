let element = document.querySelector(".vegetables");
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = 'lightgreen');

// O SCRIPT É CONSIDERADO FILHO DO BODY, então será o lastElementChild
// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children) --> element.children retorna uma coleção COM TODOS OS FILHOS
//                            mas para manusea-los precisamos converte-los para uma Array 
//                            com o Array.from(element.children)