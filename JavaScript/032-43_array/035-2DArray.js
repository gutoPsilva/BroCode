// 2D array = uma array de arrays

let fruits =     ["mango", "banana", "orange"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// primeiro índice é a linha, segundo é a coluna.
groceryList[2][0] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}