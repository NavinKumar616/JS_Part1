// part 1
arr1 = ["john",202,true];
arr2 = arr1;

arr2.push("jack");

console.log(arr1);
console.log(arr2);

// part 2
let array1 = ["john",202,true];
let array2 = array1.slice(0);

array2.push("vinodth");

console.log(array1);
console.log(array2);

// part 3
let array3 = ["john",202,true];
let array4 = array1.slice(0).concat(["item"]);

array4.push("vinodth");

console.log(array3);
console.log(array4);

// part 4
let array5 = ["john",202,true];
let array6 = [...array5];

array6.push("vinodth");

console.log(array5);
console.log(array6);