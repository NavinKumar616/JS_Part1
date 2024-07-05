
// part 1

// note -> static method only works for class
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
    static sing() {
        console.log(`${this.name} sings Tunuk tunuk`);
    }
    // static sing(name) {
    //     console.log(`${name} sings Tunuk tunuk`);
    // }
}


let d = new Animal("Huskey");
// d.sing();  -> for object it will not going to work

Animal.sing(); // Animal sings Tunuk tunuk
// Animal.sing(d.name); // Huskey sings Tunuk tunuk

// part 2

class Animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }

    static sing(name) {
        console.log(`${name} sings Tunuk tunuk`);
    }
}


let d1 = new Animal1("Huskey");
// d.sing();  -> for object it will not going to work

// Animal.sing(); // Animal sings Tunuk tunuk
Animal1.sing(d.name); // Huskey sings Tunuk tunuk

// part 
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }

    static sing(name) {
        console.log(`${name} sings Tunuk tunuk`);
    }
}


let d2 = "Huskey";


Animal2.sing(d2); // Huskey sings Tunuk tunuk



