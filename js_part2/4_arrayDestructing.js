// part 1

let array1 = ["thomas", "chad"];
let item1 = array1[0];
let item2 = array1[1];

console.log(item1);
console.log(item2);

// part 2
let array2 = ["thomas", "chad", "magnus", "kalki"];
let [data1, data2, ...data3] = array2;

console.log(data1); // thomas
console.log(data2); // chad
console.log(data3); //[ 'magnus', 'kalki' ]