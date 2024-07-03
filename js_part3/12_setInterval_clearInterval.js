// setInterval

// part 1

// let num = 0;
// setInterval(fun, 2000);

// function fun() {
//     num = num + 1;
//     // console.log(num); // it will going to print continues
// }

// part 2 


// setInterval(fun1, 2000);

// function fun1() {
//     let date = new Date().toLocaleTimeString();
//     // console.log(date); // it will going to print continues
// }

// part 3

var inter = setInterval(fun2, 1000);

function fun2() {
    let date = new Date().toLocaleTimeString();
    console.log(date); // it will going to print continues
}

setTimeout(() => {
    clearInterval(inter);
}, 5000)
