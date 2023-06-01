// get = vincular uma propriedade de um objeto a uma função
//       quando essa propreidade é acessada
// set = vincula uma propriedade de um objeto a uma função
//       quando é atribuído algum valor a essa propriedade
//       o nome da propriedade deve ser diferente do nome da função quando o set ou get é usado

class Car{
  constructor(power){
    this._gas = 25;
    this._power = power;
  }
  get power(){
    return `${this._power}hp`;
  }

  get gas(){
    return `${this._gas}L (${this._gas / 50 * 100}%)`;
  }

  set gas(value){
    if(value > 50){
      value = 50;
    }else if(value <= 0){
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

car.gas = 1000000000;

console.log(car.power);
console.log(car.gas);