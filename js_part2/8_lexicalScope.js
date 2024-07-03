// part 1
function fun() {
    var a = 1; // lexical scope 
    console.log("This is function" + " " + a); // This is function 1
    function fun2() {
        console.log("This is function" + " " + a); // Can access outerVariable // This is function 1 
    }
    fun2();
}
fun();

// part 2
var a = 1;
function fun1() {

    console.log("This is function" + " " + a); // This is function 1
    function fun2() {
        console.log("This is function" + " " + a); // Can access outerVariable // This is function 1 
    }
    fun2();
}
fun1();

// part 3

function fun3() {
    var a = 1;
    console.log("This is function" + " " + a); // This is function 1

    function fun2() {
        var a = 3;
        console.log("This is function" + " " + a); // Can access outerVariable // This is function 1 
    }
    fun2();
}
fun3();

