// arithmetic -> part1 
console.log(10+5);
console.log(10-5);
console.log(10*5);
console.log(10 / 5);
console.log(10 % 5);


// part 2 -> postfix (++,--)
let a = 10;
let b = a++;
console.log(b); // 1st store the value of a
console.log(a); // 2nd is going to increment

// part 3 -> prefix (++,--)
let a1 = 10;
let b1 = ++a1;
console.log(b1); // 1st increment
console.log(a1); // 2nd is going to store 

// comparison operator -> true / false
a = 4;
b = 5;

console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

// ===
a = "10";
b = 10;
// === -> is used for data type comparison
console.log(a===b); // false

a = "10";
b = 10;
// === -> is used for data type comparison
console.log(a!==b); // true

// 1.  ==
// here i have an dout
a = "10";
b = 10;
// == -> is used for type conversion
console.log(a==b); // true

// 2.  ==
// here i have an dout
a = true; // here true value is -> 1
b = 1;
// == -> is used for type conversion
console.log(a==b); // true

// logical operator 
// ! -> opposite
// && -> both will be true
// || -> if any 1 becomes true
