// super = quando usando a herança de classes, o super constructor refere-se à classe pai
//         usada para chamar o construtor de uma classe pai
//         permite reusar código sem repetições,
//         partindo de um construtor da classe pai chamado na classe filhote

class Animal{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal{

  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("Rabbit", 1, 40);
const fish = new Fish("Fish", 2, 80);
const hawk = new Hawk("Hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);