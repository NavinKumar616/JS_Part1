// part 1

let arr = [
    { user: 1, name: "navin" },
    { user: 2, name: "nancy" },
    { user: 3, name: "sony" }
]
console.log(arr);
console.log(arr[1]); // { user: 2, name: 'nancy' }

// part 2
for (let i in arr) {
    console.log(i); // print the index of the array 0 ,1 , 2
}
// part 3
for (let i in arr) {
    console.log(arr[i]); // print the values of the array 
}
// part 4
for (let i of arr) {
    console.log(i); // print the values of the array 
}
// part 5
for (let i of arr) {
    console.log(i.name); // print the value of the names only
}
// part 6
let [data1, data2] = arr;
console.log(data1); // { user: 1, name: 'navin' }
console.log(data2); // { user: 2, name: 'nancy' }

// part 7
let [{ name }, { name: name1 }, { name: name2 }] = arr;
console.log(name); // navin
console.log(name1); // nancy
console.log(name2); // sony

