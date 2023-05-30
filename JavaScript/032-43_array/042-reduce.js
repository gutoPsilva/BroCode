// array.reduce() = reduz uma array para um valor único

let prices = [5, 10, 15, 20, 55];
let total = prices.reduce(checkOut);

function checkOut(total, element){
    return total + element;
}

console.log(`The total is: $${total}`);