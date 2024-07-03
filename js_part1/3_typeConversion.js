// part 1
result = "3"+2;
console.log(result); // 32
console.log(typeof result) // string

// part 2
result = "3"-2;
console.log(result); // 1
console.log(typeof result) // number

// part 3 
result = "3" - "hello";
console.log(result); // NaN -> not a number
console.log(typeof result) // number

//  part 3
result = "3"- true;
console.log(result); // 2
console.log(typeof result) // number

//  part 4
result = "3";
result = Number(result);
console.log(result);
console.log(typeof result);

//  part 5
result = -20.887;
result = parseInt(result);
console.log(result); // -20
console.log(typeof result); // number

// part 6
result = -20.999;
result = parseFloat(result);
console.log(result); // -20.999
console.log(typeof result); // number