// this = referência a um objeto particular
//        depende do contexto IMEDIATO
// this.model === car1.model, o nome do objeto depende do contexto.

const car1 = {
  model: "Mustang",
  color: "red",
  year: "2023",

  drive : function(){
    console.log(`You drive the ${this.model}.`)
  }
};

const car2 = {
  model: "Corvette",
  color: "blue",
  year: "2024",

  drive : function(){
    console.log(`You drive the ${this.model}.`)
  }
};

car1.drive();
car2.drive();

this.name = "myCoolWindow";
console.log(this.name);