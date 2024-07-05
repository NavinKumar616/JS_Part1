// part 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // function name -> greet
    greet() {
        console.log(`Hello ${this.name}`); // Hello navin
    }
}

let user = new Person("navin", 23);
user.greet();
console.log(user); // Person { name: 'navin', age: 23 }

// part 2

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("hello" + " " + this.name);
    }
}
let user1 = new User("john");
user1.sayHi();

let user2 = new User("srinu");
user2.sayHi();

let user3 = new User("nancy");
user3.sayHi();

console.log(User.prototype.sayHi); // [Function: sayHi] // -> dout
console.log(typeof User); // function