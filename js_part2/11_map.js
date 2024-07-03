// part 1

var map1 = new Map([[1, "one"],
["fName", "Micky"],
["whole number", [0, 1, 2, 3, 4]]
]);

console.log(map1);
// getting a value 
console.log(map1.get("fName")); // Micky
// find only keys
var k = map1.keys();
for(var key of k){
    console.log(key);
}

// part 2
var map2 = new Map();
console.log(map2); // Map(0) {}
// set 
map2.set("fname", "Mouse");
console.log(map2); // Map(1) { 'fname' => 'Mouse' }
