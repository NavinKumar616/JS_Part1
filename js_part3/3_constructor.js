// constructor functions 
// technically are regular functions
// there are two conventions though


// they are named with capital letter first.
// they should be executed only with  " new " operator.

// part 1
// dout 
function User(name) {
    this.name = name;
}
let person = new User("jack");
console.log(person); // User { name: 'jack' }
console.log(person.name); // jack

// part 2
function User1(name) {
    // here new keyword is not present 
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}
let person1 = User1("jack");
console.log(person1.name); // jack