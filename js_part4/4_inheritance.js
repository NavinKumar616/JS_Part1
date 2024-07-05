

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }


}

let d = new Dog("Rfusu");
d.speak();