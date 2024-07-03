// let 
// var
// const

let a = "hello";
let b = a;
console.log(b);
// var and let difference
// part 1
var name = "navin";
var name = "john cena";
// here it will be going to print -> john cena
console.log(name); 

// part 2
// let name2 = "srinu";
// let name2 = "jack";
// SyntaxError: Identifier 'name2' has already been declared
// console.log(name2);

// part 3
// here we can update this by using -> let
let name3 = "srinu";
 name3 = "jack";
console.log(name3);