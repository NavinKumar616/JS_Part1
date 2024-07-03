// this
// dout once watch video also
// part 1
var obj = {
    fName: "john",
    age: 22,
    fun: function () {
        // this -> this means obj only
        console.log(this.fName);
        console.log(this);
    }

}
obj.fun();

// part 2
// dout here -> this 
function fun() {
    console.log(this); // here in this window object is there
}
fun();