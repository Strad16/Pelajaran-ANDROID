//INHERITANCE
class Animal {
    constructor () {
        if (new.target === Animal) {
            throw new Error("Animal adalah abstract class, tidak bisa diinstansiasi!");
        }
    }

    makeSound() {
        throw new Error("Harus diimplementasi di subclass!");
        
    }
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

let d = new Dog();
console.log(d.makeSound());

// let a = new Animal();

//COMPOSITION

class Engine {
    start() {
        console.log("Mesin nyala");
    }
}

class GPS {
    navigasi() {
        console.log('Navigasi...')
    }
}

class Car {
    constructor() {
        this.Engine = new Engine();
        this.GPS = new GPS();
    }
    drive() {
        this.Engine.start();
        this.GPS.navigasi();
        console.log("Maobil jalan");
    }
}

let car = new Car();
car.drive();
