// object = Grupo de propriedades e métodos
//          propriedades = o que o objeto tem, NOME, ANO, etc.
//          método = o que um objeto pode fazer, são FUNÇÕES DENTRO DE OBJETOS
//          use . para acessar propriedades e métodos

const car1 = {
  model: "Mustang",
  color: "red",
  year: "2023",

  drive : function(){
    console.log("You drive the car.")
  },

  brake: function(){
    console.log("You step on the brakes.")
  }
};

const car2 = {
  model: "Corvette",
  color: "blue",
  year: "2024",

  drive : function(){
    console.log("You drive the car.")
  },

  brake: function(){
    console.log("You step on the brakes.")
  }
};

console.log(car1.model);
console.log(car2.color);
console.log(car1.year);
car1.drive();
car2.brake();