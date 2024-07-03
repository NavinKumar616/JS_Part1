// part 1
// watch video once
let sym = Symbol("id");
console.log(sym.toString); // [Function: toString] // dout here
console.log(sym.description); // id

// part 2
// dout here 
// all should be unique
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 == sym2); // false

// part 3
let id = Symbol("id");
let obj = {
    name: "navin",
    [id]: 1
};
console.log(obj); // { name: 'navin', [Symbol(id)]: 1 }
console.log(obj[id]); // 1

// part 4

let id1 = Symbol("id");
let obj1 = {
    name: "navin"

};
obj1[id1] = 1; // focus here
console.log(obj1); // { name: 'navin', [Symbol(id)]: 1 }
console.log(obj1[id1]); // 1

//  part 5
let id2 = Symbol("id");
let obj2 = {
    name: "navin",
    age: 23

};
obj2[id2] = 1; // focus here
console.log(obj2); // { name: 'navin', age: 23, [Symbol(id)]: 1 }

for(let key in obj2)
    {
        console.log(key); // name , age 
    }
// we need to use symbol alaag se
// symbol will bring uniqueness and hidden property
// tosring se use ker sakega browser mai
