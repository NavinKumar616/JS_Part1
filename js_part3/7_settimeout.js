// part 1

console.log("This ");
setTimeout(() => {
    console.log("ASynchronous");
}, 3000)
console.log("Is");

// part 2

setTimeout(fun, 3000);

console.log("This");

function fun() {
    console.log("ASynchronous");
}
console.log("Is");
