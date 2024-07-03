

function fun(age) {
    console.log(this.fName, age);
}

var obj1 = {
    fName: "john"

}

var obj2 = {
    fName: "Kenny"
}

// fun.call(obj2);
// call
fun.call(obj1, 12);
// apply
fun.apply(obj1, [12, "male"]);
// blind -> function
var a = fun.bind(obj2, [23, "female"]);
console.log(typeof a);
console.log(a);