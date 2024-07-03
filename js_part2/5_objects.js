// part 1
let obj = {
    name: "Bravo",
    age: 22
}
console.log(obj.name); // Bravo
console.log(obj["name"]); // Bravo
console.log(obj["age"]); // 22

// part 2
let item = {
    "first name": "navin", // format
    "last name": "kumar" // format
}
console.log(item["first name"]); // format
console.log(item["last name"]); // format

// part 3

let obj1 = {
    fun: function () {
        console.log("I m a Function");
    },
    arr: [10, 20, 30, 40]
}
// 1
console.log(obj1.fun()); // I m a Function
// 2
obj1.fun(); // I m a Function
// 3
console.log(obj1.arr); // [ 10, 20, 30, 40 ]
// 4
console.log(obj1); // { fun: [Function: fun], arr: [ 10, 20, 30, 40 ] }
// 5
obj1.key = "items";
console.log(obj1); // { fun: [Function: fun], arr: [ 10, 20, 30, 40 ], key: 'items' }
// 6
let a = "key2";
obj1[a] = "item2";
console.log(obj1); // output below -->
//  {
//     fun: [Function: fun],
//     arr: [ 10, 20, 30, 40 ],
//     key: 'items',
//     key2: 'item2'
//   }

// part 7
// printing all the keys 
for (let i in obj1) {
    console.log(i);
}

// part 8
// printing all the values of  the keys
for (let i in obj1) {
    console.log(obj1[i]);
}

// part 9
// printing all the keys 
for (let i of Object.keys(obj1)) {
    console.log(i);
}
// part 10
// printing all the values of  the keys
for (let i of Object.keys(obj1)) {
    console.log(obj1[i]);
}
