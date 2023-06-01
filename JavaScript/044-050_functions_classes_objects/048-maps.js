// Map = objeto que contém pares de valores-chave de qualquer tipo de data

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

// store.get("t-shirt"); pega o valor 
// store.set("hat", 40); // adiciona um par de valores-chave
// store.delete("hat"); // delete os valores-chave que tiverem "hat"
// console.log(store.has("jeans")); // verifica se há o valor-chave "jeans"
// console.log(store.size); // retorna o tamanho(qntd de elementos) do array.

store.forEach((value, key) => console.log(`${key} costs: $${value}`));