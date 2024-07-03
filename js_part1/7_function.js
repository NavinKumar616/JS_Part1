// function
// from part 1 to part 5 all functions are -> Function Declaration:
// part 1
function name() {
    console.log("Hello");
}
name(); // calling  a function

// part 2
function name1(a) {
    console.log("Hello" + " " + a);
}
name1("Learners"); // calling  a function

// part 3
function add(a, b) {
    console.log(a + b);
}
add(2, 3); // calling  a function

// part 4
function add1(a, b) {
    console.log(a + b);
}
let x = 1;
let y = 4;
add1(x, y); // calling  a function

// part 3
function add2(a, b, c) {
    console.log(a + b + c);
}
let x1 = 1;
let y1 = 4;
add2(x1, y1, 10); // calling  a function

// part 4
function add3(a, b, c) {
    return a + b + c;
}
let x2 = 1;
let y2 = 4;
let results = add3(x2, y2, 10); // calling  a function
console.log(results);

//  part 5
// local and global variable

let g = 10; // global variable

function local() {
    // local variable
    let l = 3; // this is only print within the brackets
    console.log(l);
}

local();
console.log(g);

// different types of functions

// part 6 -> Function Expression:

let fun = function () {
    console.log("vinod");
}
fun();

// part 7 -> Arrow Function:
let fun1 = () => {
    console.log("vinod");
};
fun1(); // Output: vinod

// part 8
setTimeout(function () {
    console.log("vinod");
}, 5000); // 5000 -> 5sec

