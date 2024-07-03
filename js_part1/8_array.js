// array

// note -> array index starts from 0 .
// part 1
let name = ["navin", "vinodth", "srinu", "jeevan"];
console.log(name);
console.log(name[1]); // vinodth
console.log(name.length);

// part 2
let arr = ["navin", 1, true, null];
arr.push("cena"); // at the end it will be going to push or add
arr.unshift("john"); // at the begging it will be added
console.log(arr);

// part 3
let arr2 = ["navin", "vinodth", "srinu", "jeevan"];
// arr2.splice(1,2); // here index 1 and 2 will be going to deleted 
arr2.splice(1, 2, "nancy");  // here index 1 and 2 will be going to deleted and in between add nancy
console.log(arr2); // [ 'navin', 'jeevan' ]

// part 4
// using for loop
let num = [10, 20, 30, 40, 50];
// using -> for loop
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
// using for each loop
num.forEach((val, index, array) => {
    console.log(val + " " + index + " " + array);
});

// part 5
let arr3 = num.forEach((val, index, array) => {
    return val;
});
console.log(arr3); // undefined -> it will no able to store in new arr3 array 
// here it is the alternative way 
let arr4 = num.map((val, index, array) => {
    return val;
});
console.log(arr4); // arr4 = [ 10, 20, 30, 40, 50 ]

// part 6
let num1 = [1, 2, 3, 4, 5];
let num2 = [10, 20, 30, 40, 50];
// concat
console.log(num1.concat(num2));
// indexOf()
console.log(num2.indexOf(20)); // 1
// reverse
console.log(num2.reverse());
// sort()
console.log(num2.sort())
// slice()
let x = num2.slice(1, 4);
console.log(x); // [ 20, 30, 40 ]
// toString()
console.log(num1.toString());
console.log(typeof num1.toString());
// filter()
let b = num2.filter((val, index, array) => {
    if (val >= 10 && val <= 30) {
        return val
    }

})
console.log(b);
// find()
let c = num2.find((val) => {
    return val == 10;
})
console.log(c);
// part 7
let num4 = [1, 5, 10, 15, 20];
let d = num4.findIndex((val) => {
    return val == 15;
})
console.log(d);

// part 7
// it will start count from last index of the array
let num5 = [1, 5, 10, 15, 20, 15, 20, 88];
let e = num5.findLastIndex((val) => {
    return val == 15;
})
console.log(e);

// part 8
let number = "10,20,30,40";

let rry = number.split(","); // split values all are stored into the array -> rry
rry.forEach(element => {
    console.log(element);
})
console.log(rry); // split values all are stored into the array -> rry

// join 
let jo = rry.join(" , ");
console.log(jo);
console.log(typeof jo); // string