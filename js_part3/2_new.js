// new
// dout once u watch video also
// part 1
function fun() {
    let fName = "navin";
    return this; // this -> here this keyword is window object
}
console.log(fun());

// part 2
// dout on new keyword

function fun1() {
    let fName = "john";
    this.fName = fName;
}
console.log(new fun1()); // fun1 { fName: 'john' }

// part 3

function fun2() {
    let fName = "john";
    this.fName = fName;
}

var obj = new fun2();
console.log(obj); // fun2 { fName: 'john' }
console.log(obj.fName); // john