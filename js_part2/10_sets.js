// part 1
const arr = [10, 20, 30, 40, 50, 30];
console.log(arr);
console.log("The length of array is:" + " " + arr.length);

// part 2
// sets -> unique values
const s = new Set([10, 20, 30, 40, 50, 30]);
s.add(99);
s.add("hello");
console.log(s);
// in this way we can find the lenght of set only 
length = 0;
for (let element of s) {
    length++;
}
console.log("The length is" + " " + length);