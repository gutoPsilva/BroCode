// static = pertence à classes, não aos objetos
//          propriedades: úteis para cache, configurações-fixas
//          métodos:      úteis para funções utilitárias

Math.round();

class Car{

  static numberOfCars = 0;
  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }

  static startRace(){
    console.log("3....2....1....GO!")
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lamborghini");

console.log(Car.numberOfCars);

Car.startRace();